"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

/* ── Ember particle canvas ── */
function EmberField() {
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

    type Ember = {
      x: number; y: number;
      vx: number; vy: number;
      life: number; maxLife: number;
      r: number; color: string;
    };

    // Warm ember colors from CSS vars — primary pink + destructive orange
    const colors = [
      "220,80,140",   // primary
      "230,100,50",   // destructive
      "240,160,60",   // warm amber
      "255,200,100",  // bright spark
    ];

    const embers: Ember[] = [];

    function spawn() {
      if(!canvas) return;
      const W = canvas.width;
      const H = canvas.height;
      // Embers rise from bottom center, fanning out
      const spread = W * 0.35;
      embers.push({
        x: W / 2 + (Math.random() - 0.5) * spread,
        y: H + 10,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(Math.random() * 1.8 + 0.6),
        life: 0,
        maxLife: Math.random() * 220 + 120,
        r: Math.random() * 2.2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let frame = 0;
    function draw() {
      if(!canvas) return;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Spawn new embers every 3 frames
      frame++;
      if (frame % 3 === 0) spawn();

      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.x += e.vx + Math.sin(e.life * 0.05) * 0.3;
        e.y += e.vy;
        e.life++;

        const t = e.life / e.maxLife;
        // Fade in quickly, hold, then fade out
        const alpha = t < 0.1 ? t * 10 : t > 0.7 ? (1 - t) / 0.3 : 1;

        // Glow
        const glow = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 5);
        glow.addColorStop(0, `rgba(${e.color},${alpha * 0.5})`);
        glow.addColorStop(1, `rgba(${e.color},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r * 5, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(${e.color},${alpha})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();

        if (e.life >= e.maxLife) embers.splice(i, 1);
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

const CampfireHero = () => (
  <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">

    <EmberField />

    <div
      aria-hidden
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at bottom, hsl(var(--destructive)/0.10) 0%, hsl(var(--primary)/0.06) 40%, transparent 70%)",
      }}
    />

    <div
      aria-hidden
      className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at top right, hsl(var(--primary)/0.08) 0%, transparent 65%)",
      }}
    />

    <div className="relative z-10 flex flex-col flex-1 items-center justify-center text-center px-6 max-w-5xl mx-auto w-full">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(3rem,8.5vw,8rem)] font-bold tracking-[-0.04em] leading-[0.93] text-foreground"
      >
        Every fire starts
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(3rem,8.5vw,8rem)] font-bold tracking-[-0.04em] leading-[0.93] text-primary"
      >
        with one spark.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-lg mt-10"
      >
        Campfires are Xolace&apos;s communities - intimate spaces where people
        gather, share, and hold each other. Not an algorithm. A fire.
      </motion.p>

    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
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

export default CampfireHero;