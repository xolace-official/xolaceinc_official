"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const WhatIsACampfire = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section bg-muted relative overflow-hidden">

      {/* Half-circle top-right */}
      <div
        aria-hidden
        className="absolute -top-px right-0 w-[340px] h-[170px] pointer-events-none"
        style={{
          background: "hsl(var(--primary)/0.06)",
          borderRadius: "0 0 0 340px",
          borderBottom: "1px solid hsl(var(--primary)/0.12)",
          borderLeft: "1px solid hsl(var(--primary)/0.12)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Two-column: big statement left, prose right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — bold statement */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-tight leading-[0.97]">
              Not a group chat.{" "}
              <span className="text-primary">A gathering.</span>
            </h2>
            <div className="mt-10 w-12 h-1 rounded-full bg-primary" />
          </motion.div>

          {/* Right — philosophy prose */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-foreground text-lg md:text-xl font-light leading-relaxed">
              A campfire is a focused community built around a shared
              experience - anxiety, grief, creative expression, personal
              growth, or just finding people who understand what you&apos;re
              carrying.
            </p>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              Unlike social media feeds that optimise for noise, campfires
              optimise for depth. Small by design. Intentional by nature.
              The kind of space where people actually listen.
            </p>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              Think of Reddit&apos;s communities - but built around safety,
              not engagement metrics. Every campfire has structure, roles,
              and a human at the centre keeping the flame alive.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhatIsACampfire;