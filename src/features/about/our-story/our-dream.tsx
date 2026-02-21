"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {Reveal} from "@/features/about/our-story/reveal";

const pillars = [
  {
    heading: "A place to say what you can't say anywhere else.",
    body: "Anonymously or openly. No profile pressure, no performance, no audience metrics. Just a space that holds what you bring to it.",
  },
  {
    heading: "Community that shows up like community should.",
    body: "People who've been through similar things. Campfires - small focused groups around what actually matters: grief, anxiety, identity, change.",
  },
  {
    heading: "Support that scales with what you need.",
    body: "Peer connection now. Guided sessions next. Licensed professionals when you're ready for that step. Your pace. Your call.",
  },
  {
    heading: "Free. Because it has to be.",
    body: "We started in a place where cost and stigma kept people silent. That's why free isn't a feature - it's the whole point.",
  },
];

export function OurDream() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f0a20 0%, #0a0614 50%, #0d0f2a 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: "conic-gradient(from 0deg, var(--primary), var(--accent), var(--ring), var(--primary))",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal y={20}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-20">
            So we built a bridge.
          </h2>
        </Reveal>

        <div className="space-y-0">
          {pillars.map((item, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div
                key={item.heading}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.06 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 py-10 border-b border-white/10 last:border-0 group"
              >
                <h3
                  className="text-xl md:text-2xl font-bold leading-snug text-white transition-colors duration-300"
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "white")}
                >
                  {item.heading}
                </h3>
                <p className="text-base md:text-lg text-white/55 font-light leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}