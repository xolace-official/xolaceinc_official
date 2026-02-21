"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {MeshGradient} from "@/features/about/our-story/mesh-gradient";

export function StoryHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <MeshGradient />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent z-10" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/40 to-transparent z-10" />

      <motion.div
        style={{ y: heroTextY, opacity: heroOpacity }}
        className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-xs uppercase tracking-[0.25em] mb-10"
        >
          Xolace · Our Story
        </motion.p>

        <div className="space-y-1 overflow-hidden">
          {["No one should", "carry this", "alone."].map((line, i) => (
            <motion.h1
              key={line}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(3.5rem,10vw,9rem)] font-bold tracking-[-0.04em] leading-[0.95] text-white"
              style={
                i === 1
                  ? {
                    background: "linear-gradient(135deg, var(--primary), var(--accent))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }
                  : undefined
              }
            >
              {line}
            </motion.h1>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-white/60 text-lg md:text-xl font-light mt-10 max-w-lg leading-relaxed"
        >
          That question started everything. This is where it led us.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}