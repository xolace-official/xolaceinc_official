"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { num: "75%",    text: "of people living with mental illness receive no treatment at all." },
  { num: "1 in 4", text: "people will go through this - this year, quietly, alone." },
  { num: "$0",     text: "is what access to real community support should cost." },
];

export function WhatWeObserved() {
  return (
    <div className="relative">
      <section
        className="relative section"
        style={{ background: "linear-gradient(135deg, #0a0614 0%, #1a0a3a 40%, #0d1a3a 70%, #0a0614 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <motion.div
            animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, var(--destructive), transparent 70%)" }}
          />
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 6 }}
            className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, var(--ring), transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {stats.map((item, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div
                key={item.num}
                ref={ref}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-8 md:gap-14 py-10 border-b border-white/10 last:border-0"
              >
                <span
                  className="text-[clamp(3rem,7vw,6.5rem)] font-bold tracking-tight leading-none shrink-0 w-[160px] md:w-[260px]"
                  style={{
                    background: "linear-gradient(135deg, var(--primary), var(--destructive))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.num}
                </span>
                <p className="text-xl md:text-2xl text-white/80 font-light leading-snug">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}