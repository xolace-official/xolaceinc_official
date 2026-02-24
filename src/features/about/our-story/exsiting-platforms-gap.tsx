"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Reveal } from "@/features/about/our-story/reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function ExistingPlatformsGap() {
  const barRef = useRef(null);
  const barInView = useInView(barRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-background section mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Section eyebrow + Editorial opening */}
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            The Gap In The System
          </p>
          <p className="text-[clamp(1.8rem,3.5vw,3.2rem)] font-bold tracking-tight leading-[1.1] max-w-3xl mb-20">
            Every existing option asks you to compromise somewhere that matters.
          </p>
        </Reveal>

        {/* Labels + Verdicts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <Reveal delay={0.1}>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Social Media
              </p>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                Everywhere. But not safe.
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Therapy
              </p>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                Powerful. But gated.
              </h3>
            </div>
          </Reveal>
        </div>

        {/* The Spectrum Bar */}
        <div ref={barRef} className="relative my-12 md:my-16">
          <div className="flex items-center h-6">
            {/* Left segment — primary */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={barInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="h-1.5 rounded-full flex-[4] origin-left"
              style={{
                background:
                  "linear-gradient(90deg, var(--primary), color-mix(in oklch, var(--primary) 40%, transparent))",
              }}
            />

            {/* Center gap with glow */}
            <div className="flex-[2] flex items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  barInView
                    ? { opacity: [0.15, 0.5, 0.15] }
                    : { opacity: 0 }
                }
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.0,
                }}
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--primary)",
                  boxShadow:
                    "0 0 12px 4px color-mix(in oklch, var(--primary) 30%, transparent)",
                }}
              />
            </div>

            {/* Right segment — destructive */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={barInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="h-1.5 rounded-full flex-[4] origin-right"
              style={{
                background:
                  "linear-gradient(270deg, var(--destructive), color-mix(in oklch, var(--destructive) 40%, transparent))",
              }}
            />
          </div>
        </div>

        {/* Body text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <Reveal delay={0.15}>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              Built to broadcast, not to hold space. When you&apos;re
              vulnerable, the last thing you need is an algorithm deciding who
              sees your pain &mdash; or a comment section waiting to weigh in.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              A $200 session. A six-week waitlist. The courage it takes just to
              make that first call. Too many walls between the moment you need
              help and the moment you get it.
            </p>
          </Reveal>
        </div>

        {/* "In between" statement */}
        <Reveal delay={0.2} className="mt-20">
          <p className="text-[clamp(1.6rem,3vw,2.8rem)] font-bold tracking-tight leading-[1.15]">
            Nothing existed for the space{" "}
            <span className="text-primary">in between</span>.
            <span className="text-muted-foreground font-light">
              {" "}
              Between struggling quietly and being ready for therapy. That gap
              swallowed people whole.
            </span>
          </p>
        </Reveal>

        {/* Closing serif anchor */}
        <Reveal delay={0.35} className="mt-16">
          <p className="text-xl md:text-2xl font-serif italic text-muted-foreground leading-relaxed">
            Before therapy. Between sessions. Outside the noise.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
