"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import PartnerFormModal from "@/features/get-involved/partner-with-us/partner-form-modal";

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
      alpha: number; alphaDir: number; alphaSpeed: number;
      color: string;
    };

    const palette = [
      "255,255,255", "255,255,255",
      "100,210,130", "100,210,130",
      "220,80,140",
    ];

    const particles: Particle[] = Array.from({ length: 160 }, () => ({
      x: Math.random() * (canvas.width  || 1400),
      y: Math.random() * (canvas.height || 900),
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r:  Math.random() * 2.8 + 0.8,
      alpha:      Math.random(),
      alphaDir:   Math.random() > 0.5 ? 1 : -1,
      alphaSpeed: Math.random() * 0.006 + 0.002,
      color: palette[Math.floor(Math.random() * palette.length)],
    }));

    function draw() {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -4) p.x = canvas.width  + 4;
        if (p.x > canvas.width  + 4) p.x = -4;
        if (p.y < -4) p.y = canvas.height + 4;
        if (p.y > canvas.height + 4) p.y = -4;

        p.alpha += p.alphaSpeed * p.alphaDir;
        if (p.alpha >= 1)    { p.alpha = 1;    p.alphaDir = -1; }
        if (p.alpha <= 0.05) { p.alpha = 0.05; p.alphaDir =  1; }

        const glowR = p.r * 9;
        const glow  = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        glow.addColorStop(0,   `rgba(${p.color},${p.alpha * 0.7})`);
        glow.addColorStop(0.4, `rgba(${p.color},${p.alpha * 0.25})`);
        glow.addColorStop(1,   `rgba(${p.color},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

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
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

const PartnerHero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden px-4 md:px-8"
    >
      <ParticleField />

      {/* Badge — absolute top-right, no relative conflict */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute  right-6 top-18 md:right-10 z-10
                   w-[88px] h-[88px] md:w-[108px] md:h-[108px]"
      >
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          <defs>
            <path
              id="badge-path"
              d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
            />
          </defs>
          <text
            style={{
              fontSize: "9px",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
              letterSpacing: "2.2px",
              fill: "hsl(var(--foreground))",
              textTransform: "uppercase",
            }}
          >
            <textPath href="#badge-path">
              · PARTNER · XOLACE · BUILD · TOGETHER
            </textPath>
          </text>
        </motion.svg>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{ background: "hsl(var(--primary))" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Some problems need
          <span className="text-primary"> all of us.</span>
        </motion.h1>

      </div>

      {/* Scroll chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground/40" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnerHero;