"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const cyclingWords = [
  "your campus.",
  "your city.",
  "your community.",
  "your generation.",
  "your country.",
  "your world.",
];

function ParticleField() {
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

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
      alpha: number; alphaDir: number; alphaSpeed: number;
      color: string;
    };

    const palette = [
      "255,255,255", "255,255,255", "255,255,255",
      "220,80,140",  // primary
      "230,100,50",  // destructive
    ];

    const particles: Particle[] = Array.from({ length: 120 }, () => ({
      x: Math.random() * (canvas.width || 1400),
      y: Math.random() * (canvas.height || 900),
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 2.4 + 0.8,
      alpha: Math.random(),
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      alphaSpeed: Math.random() * 0.004 + 0.001,
      color: palette[Math.floor(Math.random() * palette.length)],
    }));

    function draw() {
      if (!canvas) return;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -4) p.x = W + 4;
        if (p.x > W + 4) p.x = -4;
        if (p.y < -4) p.y = H + 4;
        if (p.y > H + 4) p.y = -4;

        p.alpha += p.alphaSpeed * p.alphaDir;
        if (p.alpha >= 1)    { p.alpha = 1;    p.alphaDir = -1; }
        if (p.alpha <= 0.05) { p.alpha = 0.05; p.alphaDir =  1; }

        const glowR = p.r * 5;
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        glow.addColorStop(0, `rgba(${p.color},${p.alpha * 0.55})`);
        glow.addColorStop(0.4, `rgba(${p.color},${p.alpha * 0.18})`);
        glow.addColorStop(1, `rgba(${p.color},0)`);
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
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
  );
}

const AmbassadorHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % cyclingWords.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      <ParticleField />

      {/* Primary wash top-right */}
      <div aria-hidden className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at top right, hsl(var(--primary)/0.11) 0%, transparent 65%)" }} />

      {/* Destructive wash bottom-left */}
      <div aria-hidden className="absolute bottom-0 left-0 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at bottom left, hsl(var(--destructive)/0.08) 0%, transparent 65%)" }} />

      {/* Content */}
      <div className="section relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full items-center justify-center text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,8.5vw,8rem)] font-bold tracking-[-0.04em] leading-[0.92] text-foreground"
        >
          Be the voice
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,8.5vw,8rem)] font-bold tracking-[-0.04em] leading-[0.92] text-muted-foreground font-light"
        >
          that changes
        </motion.h1>

        <div className="overflow-hidden" style={{ height: "clamp(3rem,8.5vw,8rem)", lineHeight: "0.92" }}>
          <AnimatePresence mode="wait">
            <motion.h1
              key={cyclingWords[index]}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-110%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,8.5vw,8rem)] font-bold tracking-[-0.04em] leading-[0.92] text-primary"
            >
              {cyclingWords[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-xl mt-10"
        >
          Xolace Ambassadors are the people who carry the mission beyond the platform -
          into campuses, cities, and communities where it&apos;s needed most.
        </motion.p>
      </div>

      {/* Scroll indicator */}
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

export default AmbassadorHero;