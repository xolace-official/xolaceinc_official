"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const cyclingWords = [
  "safe place.",
  "way out.",
  "voice.",
  "reason to stay.",
  "community.",
  "answer.",
];

/* ─── Star field canvas ─── */
function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 140;

    type Star = {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
      alpha: number; alphaDir: number; alphaSpeed: number;
      color: string;
    };

    const palette = [
      "255,255,255",
      "255,255,255",
      "255,255,255",
      "220,80,140",
      "220,80,140",
      "230,100,50",
    ];

    const stars: Star[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * (canvas.width || 1400),
      y: Math.random() * (canvas.height || 900),
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 2.8 + 1.0,
      alpha: Math.random(),
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      alphaSpeed: Math.random() * 0.004 + 0.001,
      color: palette[Math.floor(Math.random() * palette.length)],
    }));

    function draw() {
      if(!canvas) return;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < -4) s.x = W + 4;
        if (s.x > W + 4) s.x = -4;
        if (s.y < -4) s.y = H + 4;
        if (s.y > H + 4) s.y = -4;

        s.alpha += s.alphaSpeed * s.alphaDir;
        if (s.alpha >= 1)    { s.alpha = 1;    s.alphaDir = -1; }
        if (s.alpha <= 0.05) { s.alpha = 0.05; s.alphaDir =  1; }

        const glowR = s.r * 5;
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowR);
        glow.addColorStop(0, `rgba(${s.color},${s.alpha * 0.55})`);
        glow.addColorStop(0.4, `rgba(${s.color},${s.alpha * 0.18})`);
        glow.addColorStop(1, `rgba(${s.color},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(s.x, s.y, glowR, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${s.color},${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
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

const ImpactHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((p) => (p + 1) % cyclingWords.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">

      <StarField />

      <div
        aria-hidden
        className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, hsl(var(--primary)/0.13) 0%, transparent 65%)",
        }}
      />

      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, hsl(var(--destructive)/0.10) 0%, transparent 65%)",
        }}
      />

      <div className="section relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full items-center justify-center text-center">

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.2rem,6vw,6rem)] font-bold tracking-[-0.04em] leading-[0.92] text-foreground"
          >
            970 million people.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.2rem,6vw,6rem)] font-bold tracking-[-0.04em] leading-[0.92] text-muted-foreground font-light"
          >
            No access. No
          </motion.h1>

          <div
            className="overflow-hidden"
            style={{ height: "clamp(3.2rem,9vw,9rem)", lineHeight: "0.92" }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={cyclingWords[index]}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-110%" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.2rem,9vw,9rem)] font-bold tracking-[-0.04em] leading-[0.92] text-primary"
              >
                {cyclingWords[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-md mt-8"
        >
          That&apos;s not a statistic. That&apos;s your neighbour, your friend,
          your colleague suffering in silence.
        </motion.p>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="border border-primary rounded-full p-1"
        >
          <ChevronDown className="text-primary" strokeWidth={1.5} size={22} />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default ImpactHero;