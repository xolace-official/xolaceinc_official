"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const reasons = [
  {
    statement: "Support doesn't reach the people who need it most.",
    sub: "Clinics are full. Therapy is expensive. Stigma keeps people silent. Ambassadors are the human bridge - trusted faces in real spaces.",
    accent: "text-primary",
  },
  {
    statement: "Communities trust people. Not platforms.",
    sub: "An app can't walk into a lecture hall. It can't sit with someone after a hard day. You can. Ambassadors turn digital impact into human presence.",
    accent: "text-destructive",
  },
  {
    statement: "The movement grows because you carry it.",
    sub: "Every campus. Every neighbourhood. Every conversation you start is a fire that didn't exist before. This isn't marketing - it's mission work.",
    accent: "text-primary",
  },
];

function ReasonBlock({ reason, i }: { reason: typeof reasons[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 md:py-20 border-b border-border last:border-0 relative"
    >
      {/* Line reveal top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute top-0 left-0 right-0 h-[2px] origin-left ${reason.accent}`}
        style={{ background: "currentColor" }}
      />

      {/* Ghost index - massive, fades behind the text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.04 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-bold tracking-[-0.06em] leading-none text-foreground select-none pointer-events-none"
        aria-hidden
      >
        0{i + 1}
      </motion.span>

      {/* Big statement */}
      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(2rem,5vw,4.8rem)] font-bold tracking-[-0.03em] leading-[1.02] max-w-4xl relative z-10"
      >
        {/* First word(s) in accent color */}
        <span className={reason.accent}>
          {reason.statement.split(" ").slice(0, 1).join(" ")}{" "}
        </span>
        {reason.statement.split(" ").slice(1).join(" ")}
      </motion.h3>

      {/* Supporting line */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-xl mt-6 relative z-10"
      >
        {reason.sub}
      </motion.p>
    </motion.div>
  );
}

const WhyItMatters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section bg-muted relative overflow-hidden">

      {/* Half-circle top-right */}
      <div aria-hidden className="absolute -top-px right-0 w-[360px] h-[180px] pointer-events-none"
           style={{ background: "hsl(var(--primary)/0.06)", borderRadius: "0 0 0 360px", borderBottom: "1px solid hsl(var(--primary)/0.12)", borderLeft: "1px solid hsl(var(--primary)/0.12)" }} />
      <div aria-hidden className="absolute -top-px right-0 w-[200px] h-[100px] pointer-events-none"
           style={{ borderRadius: "0 0 0 200px", borderBottom: "1px solid hsl(var(--primary)/0.2)", borderLeft: "1px solid hsl(var(--primary)/0.2)" }} />

      <div className="max-w-7xl mx-auto">

        {/* Intro */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <p className="text-muted-foreground text-[0.65rem] uppercase tracking-[0.28em] flex items-center gap-3">
            <span className="w-5 h-px bg-border" />
            Why this work matters
          </p>
        </motion.div>

        {/* Manifesto blocks */}
        <div className="border-t border-border mt-10">
          {reasons.map((r, i) => (
            <ReasonBlock key={i} reason={r} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyItMatters;