"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {CTAButton} from "@/layout/cta-button";

export default function ImpactCTA() {
  const containerRef = useRef(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the massive text to create "Dhero" depth
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  // Magnetic button logic
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setBtnPos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-accent section overflow-hidden border"
    >
      {/* BACKGROUND DECOR - The "X" Pulse */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <motion.span
          style={{ scale: useTransform(scrollYProgress, [0, 1], [0.5, 2]) }}
          className="text-[40vw] font-bold text-primary select-none"
        >
          X
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px w-12 bg-primary" />
        </motion.div>

        {/* HERO STATEMENT */}
        <motion.div style={{ y: springY }} className="mb-24">
          <h2 className="text-[clamp(3.5rem,10vw,9.5rem)] font-bold tracking-tighter leading-[0.85] text-foreground">
            The movement <br />
            starts with <br />
            <span className="relative inline-block text-primary italic font-serif group">
              you.
              <motion.div
                className="absolute -bottom-4 left-0 h-2 bg-primary/20 w-0 group-hover:w-full transition-all duration-700"
              />
            </span>
          </h2>
        </motion.div>

        {/* INTERACTIVE ROW */}
        <div className="pt-16 border-t border-border flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-md space-y-6">
            <p className="text-xl md:text-2xl text-foreground/50 font-light leading-snug">
              Every person who joins makes the community stronger. Every voice that speaks makes the space safer.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/30">Live from Koforidua 🇬🇭</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* MAGNETIC JOIN BUTTON */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setBtnPos({ x: 0, y: 0 })}
              animate={{ x: btnPos.x * 0.2, y: btnPos.y * 0.2 }}
              className="relative"
            >
              <CTAButton
                variant={"default"}
                label={"Join Xolace"}
                size="lg"
              />
              {/* Button Shadow/Glow */}
              <motion.div
                animate={{ x: btnPos.x * 0.1, y: btnPos.y * 0.1 }}
                className="absolute inset-0 bg-primary/30 blur-2xl rounded-full -z-10"
              />
            </motion.div>

            <CTAButton variant={"outline"} label={"Read Our Story"}/>
          </div>
        </div>

      </div>
    </section>
  );
}