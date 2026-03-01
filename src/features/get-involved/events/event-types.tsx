"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";

const types = [
  {
    num: "01",
    name: "Campus Drives",
    tagline: "Taking mental health into student spaces.",
    description: "We show up at universities and colleges - running awareness drives, open conversations, and mental health resource days. Not a lecture. A real conversation, student to student.",
    stat: "50+",
    statLabel: "campuses we plan to reach",
    accentVar: "--primary",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
  },
  {
    num: "02",
    name: "Community Gatherings",
    tagline: "Where neighbourhoods come together.",
    description: "Offline events in cities and towns - storytelling circles, open mics, community health fairs. Built for the people algorithms miss. Grounded, warm, and always free.",
    stat: "Free",
    statLabel: "Always. No ticket. No barrier.",
    accentVar: "--destructive",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=85",
  },
  {
    num: "03",
    name: "Online Sessions",
    tagline: "No location required. Just show up.",
    description: "Virtual campfire sessions, live Q&As with professionals, mental health workshops - accessible to anyone, anywhere. Because support shouldn't depend on where you live.",
    stat: "Global",
    statLabel: "Reach. Zero distance.",
    accentVar: "--primary",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=85",
  },
];

function TypeTile({ t, i }: { t: typeof types[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden cursor-default"
      style={{ height: "clamp(220px, 28vw, 420px)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0, 0.2, 1] }}
      >
        <Image
          src={t.image}
          alt={t.name}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0"
           style={{ background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)" }} />

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ background: "rgba(0,0,0,0.35)" }}
      />

      <motion.div
        className="absolute inset-y-0 left-0 w-[4px]"
        animate={{ width: hovered ? "100%" : "4px" }}
        transition={{ duration: 0.6, ease: [0.32, 0, 0.2, 1] }}
        style={{
          background: `hsl(var(${t.accentVar})/0.18)`,
          originX: 0,
        }}
      />

      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: `hsl(var(${t.accentVar}))` }}
      />

      <div className="absolute inset-0 flex items-center px-8 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-8 md:gap-16 w-full">

          <motion.span
            animate={{
              color: hovered ? `hsl(var(${t.accentVar}))` : "rgba(255,255,255,0.18)",
              scale: hovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="font-black tracking-[-0.06em] leading-none select-none shrink-0 hidden sm:block"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
            aria-hidden
          >
            {t.num}
          </motion.span>

          <div className="flex-1 min-w-0">
            <motion.h3
              animate={{ color: hovered ? "#ffffff" : "rgba(255,255,255,0.92)" }}
              className="font-black tracking-[-0.03em] leading-none"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}
            >
              {t.name}
            </motion.h3>
            <motion.p
              animate={{ opacity: hovered ? 0 : 1, y: hovered ? -6 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/45 font-light mt-2 text-sm md:text-base italic"
            >
              {t.tagline}
            </motion.p>
          </div>

          {/* Right - stat (default) ↔ description (hover) */}
          <div className="shrink-0 text-right max-w-[280px] hidden md:block">
            <AnimatePresence mode="wait">
              {!hovered ? (
                <motion.div
                  key="stat"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="font-black tracking-[-0.04em] leading-none"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 4rem)",
                      color: `hsl(var(${t.accentVar}))`,
                    }}
                  >
                    {t.stat}
                  </p>
                  <p className="text-white/35 text-xs font-light mt-2 leading-snug">
                    {t.statLabel}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="desc"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white/80 text-sm font-light leading-relaxed text-right">
                    {t.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
           style={{ background: `hsl(var(${t.accentVar})/0.2)` }} />
    </motion.div>
  );
}

const EventTypes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-background relative overflow-hidden">

      <div className="section max-w-7xl mx-auto pb-12">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,5vw,5rem)] font-bold tracking-tight leading-[1.06]"
          >
            What our events{" "}
            <span className="text-primary">look like.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-muted-foreground text-lg font-light leading-relaxed"
          >
            On campuses, in cities, and online - we show up wherever people need us.
          </motion.p>
        </div>
      </div>

      {/* Full-width tiles - no max-w constraint */}
      <div className="border-t border-border">
        {types.map((t, i) => (
          <TypeTile key={t.num} t={t} i={i} />
        ))}
      </div>

    </section>
  );
};

export default EventTypes;