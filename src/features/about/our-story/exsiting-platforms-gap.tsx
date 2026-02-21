"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Reveal } from "./reveal";

const cards = [
  {
    label: "Social media",
    verdict: "Everywhere. But not safe.",
    body: "Built to broadcast, not to hold space. When you're vulnerable, the last thing you need is an algorithm deciding who sees your pain - or a comment section waiting.",
    destructiveVar: "--primary",
  },
  {
    label: "Therapy",
    verdict: "Powerful. But gated.",
    body: "A $200 session. A six-week waitlist. The courage it takes just to make that first call. Too many walls between the moment you need help and the moment you get it.",
    destructiveVar: "--destructive",
  },
];

export function ExistingPlatformsGap() {
  return (
    <section className="bg-background section">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-[clamp(1.8rem,3.5vw,3.2rem)] font-bold tracking-tight leading-[1.1] max-w-3xl mb-20">
            Every existing option asks you to compromise somewhere that matters.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border rounded-2xl overflow-hidden">
          {cards.map((item, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div
                key={item.label}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={`relative p-10 md:p-14 ${i === 0 ? "border-b md:border-b-0 md:border-r border-border" : ""}`}
                style={{
                  background: `linear-gradient(135deg, color-mix(in oklch, var(${item.destructiveVar}) 12%, transparent), transparent)`,
                }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">{item.label}</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-snug">{item.verdict}</h3>
                <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-20">
          <p className="text-[clamp(1.6rem,3vw,2.8rem)] font-bold tracking-tight leading-[1.15]">
            Nothing existed for the space{" "}
            <span className="text-primary">in between</span>.
            <span className="text-muted-foreground font-light"> Between struggling quietly and being ready for therapy. That gap swallowed people whole.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}