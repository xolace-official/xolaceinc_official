"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const phases = [
  {
    num: "01",
    status: "Live now",
    live: true,
    title: "Expression & Community",
    timeline: "2024 – Present",
    items: [
      "Anonymous & open posting",
      "Campfire support groups",
      "Peer-to-peer connection",
      "Community moderation",
      "24-hour & permanent posts",
    ],
  },
  {
    num: "02",
    status: "In development",
    live: false,
    title: "Guided Support",
    timeline: "2025 – 2026",
    items: [
      "Live facilitated group sessions",
      "Trained community guides",
      "Mental health education",
      "Structured workshops",
      "Crisis escalation pathways",
    ],
  },
  {
    num: "03",
    status: "Planned",
    live: false,
    title: "Professional Integration",
    timeline: "2026 – Beyond",
    items: [
      "Licensed therapists in-platform",
      "Affordable 1-on-1 sessions",
      "Seamless community-to-care path",
      "Partnerships with health systems",
      "Global reach, local context",
    ],
  },
];

const RoadmapTimeline = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative py-28 md:py-40 px-6 md:px-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(155deg, #0d0a1a 0%, #12062a 40%, #0a1020 70%, #0d0a1a 100%)",
      }}
    >
      {/* Ambient orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-[0.07]"
          style={{
            background: `conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--chart-2)), hsl(var(--primary)))`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.2rem,4.5vw,4rem)] font-bold tracking-tight leading-[1.06] text-white mb-4"
          >
            The road ahead.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="text-white/50 text-lg font-light max-w-xl leading-relaxed"
          >
            Three deliberate phases. Built to last, not to scale fast and break.
          </motion.p>
        </div>

        {/* Phase cards — stacked on mobile, 3-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-2xl overflow-hidden">
          {phases.map((phase, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div
                key={phase.num}
                ref={ref}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className={`relative p-8 md:p-10 border-b md:border-b-0 border-white/10 ${
                  i < phases.length - 1 ? "md:border-r border-white/10" : ""
                } hover:bg-white/[0.03] transition-colors duration-300 group`}
              >
                {/* Phase number — big and faint in corner */}
                <span
                  className="absolute top-6 right-8 text-6xl font-bold text-white/[0.04] select-none"
                  aria-hidden
                >
                  {phase.num}
                </span>

                {/* Status badge */}
                <div className="mb-8">
                  <span
                    className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border"
                    style={
                      phase.live
                        ? {
                          color: "hsl(var(--accent))",
                          borderColor: "hsl(var(--accent)/0.3)",
                          background: "hsl(var(--accent)/0.08)",
                        }
                        : {
                          color: "rgba(255,255,255,0.4)",
                          borderColor: "rgba(255,255,255,0.12)",
                          background: "rgba(255,255,255,0.04)",
                        }
                    }
                  >
                    {phase.live && (
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "hsl(var(--accent))" }}
                      />
                    )}
                    {phase.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight leading-snug group-hover:text-primary transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="text-white/35 text-xs tracking-[0.1em] mb-8">
                  {phase.timeline}
                </p>

                {/* Feature list */}
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                        style={{ background: "hsl(var(--primary))" }}
                      />
                      <span className="text-sm text-white/55 font-light leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;