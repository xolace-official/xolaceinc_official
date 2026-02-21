"use client";

import { useEffect, useRef } from "react";

export function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    function resolveCSSColor(varName: string): { r: number; g: number; b: number } {
      const el = document.createElement("div");
      el.style.color = `var(${varName})`;
      el.style.display = "none";
      document.body.appendChild(el);
      document.body.removeChild(el);
      const el2 = document.createElement("div");
      el2.style.backgroundColor = `var(${varName})`;
      el2.style.display = "none";
      document.body.appendChild(el2);
      const bg = getComputedStyle(el2).backgroundColor;
      document.body.removeChild(el2);
      const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: +match[1], g: +match[2], b: +match[3] };
      return { r: 120, g: 40, b: 200 };
    }

    const primary   = resolveCSSColor("--primary");
    const accent    = resolveCSSColor("--accent");
    const secondary = resolveCSSColor("--secondary");
    const ring      = resolveCSSColor("--ring");

    const colors = [
      primary,
      accent,
      { r: Math.round((primary.r + accent.r) / 2), g: Math.round((primary.g + accent.g) / 2), b: Math.round((primary.b + accent.b) / 2) },
      secondary,
      ring,
    ];

    function drawOrb(
      cx: number, cy: number,
      rx: number, ry: number,
      color: { r: number; g: number; b: number },
      alpha: number
    ) {
      const grad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry));
      grad.addColorStop(0, `rgba(${color.r},${color.g},${color.b},${alpha})`);
      grad.addColorStop(1, `rgba(${color.r},${color.g},${color.b},0)`);
      ctx!.save();
      ctx!.scale(rx / Math.max(rx, ry), ry / Math.max(rx, ry));
      ctx!.fillStyle = grad;
      ctx!.beginPath();
      ctx!.arc(
        cx / (rx / Math.max(rx, ry)),
        cy / (ry / Math.max(rx, ry)),
        Math.max(rx, ry), 0, Math.PI * 2
      );
      ctx!.fill();
      ctx!.restore();
    }

    function draw() {
      if (!canvas) return;
      const W = canvas.width;
      const H = canvas.height;
      t += 0.003;

      ctx!.fillStyle = "#0a0614";
      ctx!.fillRect(0, 0, W, H);

      const orbs = [
        { x: W * (0.2 + 0.15 * Math.sin(t * 0.7)),  y: H * (0.3 + 0.2  * Math.cos(t * 0.5)),  rx: W * 0.55, ry: H * 0.55, color: colors[0], alpha: 0.55 },
        { x: W * (0.75 + 0.12 * Math.cos(t * 0.6)), y: H * (0.2 + 0.18 * Math.sin(t * 0.8)),  rx: W * 0.5,  ry: H * 0.5,  color: colors[1], alpha: 0.45 },
        { x: W * (0.5 + 0.18 * Math.sin(t * 0.4 + 1)), y: H * (0.7 + 0.15 * Math.cos(t * 0.6 + 0.5)), rx: W * 0.45, ry: H * 0.45, color: colors[2], alpha: 0.35 },
        { x: W * (0.85 + 0.1  * Math.cos(t * 0.9)), y: H * (0.6 + 0.2  * Math.sin(t * 0.5 + 2)), rx: W * 0.38, ry: H * 0.38, color: colors[3], alpha: 0.3 },
        { x: W * (0.1 + 0.1  * Math.sin(t * 0.7 + 1)), y: H * (0.75 + 0.15 * Math.cos(t * 0.4)), rx: W * 0.42, ry: H * 0.42, color: colors[4], alpha: 0.4 },
      ];

      ctx!.globalCompositeOperation = "screen";
      for (const o of orbs) drawOrb(o.x, o.y, o.rx, o.ry, o.color, o.alpha);
      ctx!.globalCompositeOperation = "source-over";

      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: "blur(40px)", transform: "scale(1.05)" }}
    />
  );
}