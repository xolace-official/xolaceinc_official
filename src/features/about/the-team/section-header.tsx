'use client';

import {useRef} from "react";
import {motion, useInView} from "motion/react";

export function SectionHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="mb-20 md:mb-28"
    >
      <p className="text-xs uppercase tracking-[0.3em]  font-mono mb-6">
        Xolace · The People
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-[-0.04em] leading-[0.95] text-destructive">
          Built by{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            people
          </span>
          <br />
          who felt it.
        </h1>

        <p className="text-base md:text-lg text-white/40 font-light leading-relaxed max-w-xs md:text-right">
          Not observers. Not consultants.
          <br />
          People who lived in the gap
          <br />
          and refused to leave others there.
        </p>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 h-px origin-left"
        style={{
          background: "linear-gradient(90deg, var(--destructive), var(--accent), transparent)",
        }}
      />
    </motion.div>
  );
}