"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Reveal } from "@/features/about/our-story/reveal";

const ease = [0.16, 1, 0.3, 1] as const;

const dreams = [
  { text: "Asking for help is normal.", gridArea: "1 / 2 / 2 / 3" },
  { text: "Support exists before crisis.", gridArea: "2 / 1 / 3 / 2" },
  {
    text: "No one feels alone on the internet.",
    gridArea: "2 / 3 / 3 / 4",
  },
  {
    text: "Professionals live inside community \u2014 not behind paywalls.",
    gridArea: "3 / 2 / 4 / 3",
  },
];

// SVG line connections between dots (percentage-based coordinates)
// Diamond layout: top(50,12) left(16,50) right(84,50) bottom(50,88)
const lines = [
  { x1: 50, y1: 12, x2: 16, y2: 50 }, // top → left
  { x1: 50, y1: 12, x2: 84, y2: 50 }, // top → right
  { x1: 16, y1: 50, x2: 84, y2: 50 }, // left → right
  { x1: 16, y1: 50, x2: 50, y2: 88 }, // left → bottom
  { x1: 84, y1: 50, x2: 50, y2: 88 }, // right → bottom
];

function ConstellationLine({
  x1,
  y1,
  x2,
  y2,
  inView,
  delay,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  inView: boolean;
  delay: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);

  return (
    <motion.line
      x1={`${x1}%`}
      y1={`${y1}%`}
      x2={`${x2}%`}
      y2={`${y2}%`}
      stroke="color-mix(in oklch, var(--primary) 18%, transparent)"
      strokeWidth="1"
      strokeDasharray={length}
      initial={{ strokeDashoffset: length }}
      animate={inView ? { strokeDashoffset: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}
    />
  );
}

export function OurDream() {
  const constellationRef = useRef(null);
  const inView = useInView(constellationRef, { once: true, margin: "-80px" });

  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0f0a20 0%, #0a0614 50%, #0d0f2a 100%)",
      }}
    >
      {/* Subtle atmospheric radials */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, var(--primary), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, var(--accent), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Eyebrow + Headline */}
        <Reveal y={20}>
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/50">
            The Dream
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-white max-w-3xl">
            If Xolace succeeds, the world looks different.
          </h2>
        </Reveal>

        {/* The Constellation — Desktop */}
        <div
          ref={constellationRef}
          className="relative mt-20 mb-16 hidden md:block"
          style={{ height: "420px" }}
        >
          {/* SVG lines overlay */}
          {/** biome-ignore lint/a11y/noSvgWithoutTitle: svg text title */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {lines.map((line, i) => (
              <ConstellationLine
                key={`${line.x1}-${line.y1}-${line.x2}-${line.y2}`}
                {...line}
                inView={inView}
                delay={0.7 + i * 0.12}
              />
            ))}
          </svg>

          {/* Dot + text nodes */}
          <div
            className="absolute inset-0 grid"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr",
            }}
          >
            {dreams.map((dream, i) => (
              <div
                key={dream.text}
                className="flex flex-col items-center justify-center gap-3 px-4"
                style={{ gridArea: dream.gridArea }}
              >
                {/* Glowing dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    inView ? { scale: 1, opacity: 1 } : {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.2,
                    ease,
                  }}
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{
                    background: "var(--primary)",
                    boxShadow:
                      "0 0 14px 5px color-mix(in oklch, var(--primary) 35%, transparent)",
                  }}
                />
                {/* Dream text */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.2,
                    ease,
                  }}
                  className="text-lg md:text-xl font-semibold text-white/80 text-center max-w-[280px] leading-snug"
                >
                  {dream.text}
                </motion.p>
              </div>
            ))}
          </div>
        </div>

        {/* The Constellation — Mobile fallback (vertical stack with dots) */}
        <div className="mt-16 mb-12 md:hidden space-y-8">
          {dreams.map((dream, i) => (
            <Reveal key={dream.text} delay={0.1 + i * 0.12}>
              <div className="flex items-start gap-4">
                <div
                  className="w-2 h-2 rounded-full mt-2 shrink-0"
                  style={{
                    background: "var(--primary)",
                    boxShadow:
                      "0 0 10px 3px color-mix(in oklch, var(--primary) 30%, transparent)",
                  }}
                />
                <p className="text-lg font-semibold text-white/80 leading-snug">
                  {dream.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing anchor */}
        <Reveal delay={0.3}>
          <p className="text-xl md:text-2xl font-serif italic text-white/55 leading-relaxed max-w-2xl">
            We are building what we believe the world quietly needs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
