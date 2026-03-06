"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

const pillars = [
  {
    stat: "Free.",
    statSub: "Always.",
    tag: "Access",
    title: "Support that costs nothing to start.",
    body: "We built Xolace in Koforidua, Ghana - where stigma, cost, and silence keep most people from ever getting help. Free isn't a marketing strategy. It's the only acceptable answer to the problem we're solving.",
    color: "var(--chart-1)", // Pink
  },
  {
    stat: "1 in 4",
    statSub: "people. Every year.",
    tag: "Scale",
    title: "The problem is bigger than any single product.",
    body: "970 million people live with a mental health condition right now. We're building one honest piece of the solution - community-based, peer-led, accessible to anyone with a phone.",
    color: "var(--accent)", // Mint
  },
  {
    stat: "Phase 3",
    statSub: "The Roadmap.",
    tag: "Vision",
    title: "We're building in the right order.",
    body: "Community first. Guided support next. Professional integration after. We're not rushing to therapy before trust is built. Every layer earns the next one.",
    color: "var(--chart-5)", // Warm Yellow/Orange
  },
];

export default function ImpactShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-[var(--foreground)] text-[var(--background)] py-32 overflow-hidden">
      {/* Background Decorative Element: Subtle grid that glows near stats */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Cinematic Header */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 rounded-full border border-[var(--background)]/20 mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--background)]/60">
              Our Foundations
            </span>
          </motion.div>
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter leading-none">
            What we <br /> <span className="text-[var(--primary)]">stand for.</span>
          </h2>
        </div>

        {/* Pillars: Modern Scroll Interaction */}
        <div className="relative space-y-40 md:space-y-64">
          {pillars.map((p, i) => (
            <PillarRow key={p.tag} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarRow({ pillar, index }: { pillar: typeof pillars[0], index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Numbers grow and fade as they enter the center of the screen
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Visual Stat Side */}
      <motion.div
        style={{ scale: springScale, opacity }}
        className="relative"
      >
        <div className="relative z-10">
          <span className="block text-[clamp(5rem,15vw,12rem)] font-bold leading-none tracking-tighter transition-colors duration-700"
                style={{ color: pillar.color }}>
            {pillar.stat}
          </span>
          <span className="block text-2xl md:text-4xl font-light text-[var(--background)]/40 mt-4 tracking-tight">
            {pillar.statSub}
          </span>
        </div>

        {/* Ghost Background Tag */}
        <span className="absolute -top-12 -left-4 text-[clamp(6rem,20vw,18rem)] font-bold text-[var(--background)] opacity-[0.02] select-none pointer-events-none">
          {pillar.tag}
        </span>
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        <div className="h-px w-24 bg-[var(--primary)] opacity-50" />
        <h3 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          {pillar.title}
        </h3>
        <p className="text-lg md:text-xl text-[var(--background)]/60 leading-relaxed font-light max-w-xl">
          {pillar.body}
        </p>

        {/* Progress Tracker (Mobile/Simplified) */}
        <div className="flex items-center gap-4 pt-4">
          <span className="font-mono text-sm text-[var(--primary)]">0{index + 1}</span>
          <div className="flex-1 h-[1px] bg-[var(--background)]/10">
            <motion.div
              className="h-full bg-[var(--primary)]"
              style={{ width: index === 0 ? "33%" : index === 1 ? "66%" : "100%" }}
            />
          </div>
          <span className="font-mono text-sm text-[var(--background)]/20">03</span>
        </div>
      </motion.div>
    </div>
  );
}