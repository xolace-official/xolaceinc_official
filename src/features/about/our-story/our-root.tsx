"use client";

import { motion } from "motion/react";
import {Reveal} from "@/features/about/our-story/reveal";

export function OurRoot() {
  return (
    <section className="bg-background section">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-center">
        <Reveal>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Born in Ghana.
              <br />
              <span className="text-muted-foreground font-light">Built for the world.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              Xolace started in Koforidua, where stigma runs deep, therapy is
              expensive, and silence is the default. We built this because we
              lived in that gap - and always knew we weren&apos;t alone in it.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              The need for safe community doesn&apos;t respect borders.
              Neither do we.
            </p>
            <div className="inline-flex items-center gap-2.5 border border-border rounded-full px-5 py-2.5 mt-2">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--primary)" }} />
              <span className="text-xs tracking-wide text-muted-foreground">Koforidua, Eastern Region, Ghana 🇬🇭</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="relative h-72 md:h-96 rounded-3xl overflow-hidden flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1a0a3a 0%, #0d1a3a 50%, #0a1428 100%)" }}
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full"
              style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--primary) 60%, transparent), transparent 70%)" }}
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full"
              style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--destructive) 50%, transparent), transparent 70%)" }}
            />

            <div className="relative z-10 text-center space-y-3">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 4px color-mix(in oklch, var(--primary) 30%, transparent)",
                    "0 0 0 16px color-mix(in oklch, var(--primary) 6%, transparent)",
                    "0 0 0 4px color-mix(in oklch, var(--primary) 30%, transparent)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-4 rounded-full mx-auto"
                style={{ background: "var(--primary)" }}
              />
              <p className="text-white/60 text-xs uppercase tracking-[0.2em]">Origin</p>
              <p className="text-white font-bold text-xl">Koforidua, Ghana</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}