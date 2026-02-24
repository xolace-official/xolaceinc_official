"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const values = [
  {
    title: "Community-led.",
    body: "Peer support reduces stigma in ways clinical settings cannot. People open up to people, not platforms.",
    color: "var(--primary)",
  },
  {
    title: "Professionally guided.",
    body: "Community isn't a replacement for therapy. It's the trusted bridge that makes people finally willing to take that step.",
    color: "var(--destructive)",
  },
  {
    title: "Globally scaled.",
    body: "We started in Ghana because that's where we saw the gap most clearly. But the gap exists everywhere. So do we.",
    color: "var(--accent)",
  },
  {
    title: "Permanently free.",
    body: "The entry point never has a price tag. Because the people who need this most are usually the ones least able to pay for it.",
    color: "var(--chart-2)",
  },
];

export default function GlobalVision() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-background section overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Editorial Header */}
        <div className="mb-24 space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-[10px] uppercase tracking-[0.5em] text-foreground/40"
          >
            Vision & Values
          </motion.p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter leading-[0.9] text-foreground max-w-4xl">
            A world where support is <br />
            <span className="text-foreground/20 italic font-serif">woven into community.</span>
          </h2>
        </div>

        {/* The Kinetic Shutter Container */}
        <div className="flex flex-col border-t border-foreground/10">
          {values.map((v, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative border-b border-foreground/10 group cursor-pointer"
              animate={{
                opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.3 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 gap-8">

                {/* Title and Index */}
                <div className="flex items-baseline gap-6 relative z-10">
                  <span className="font-mono text-xs text-foreground/30">0{i + 1}</span>
                  <h3 className="text-4xl md:text-7xl font-bold tracking-tighter group-hover:italic transition-all duration-500 group-hover:translate-x-4">
                    {v.title}
                  </h3>
                </div>

                {/* The Reveal Body */}
                <div className="md:max-w-md w-full relative z-10">
                  <AnimatePresence>
                    {(hoveredIndex === i) && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light">
                          {v.body}
                        </p>
                        <div
                          className="h-1 w-12 rounded-full"
                          style={{ backgroundColor: v.color }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Background Color Wipe on Hover */}
              <motion.div
                className="absolute inset-0 z-0 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: `linear-gradient(90deg, ${v.color}08 0%, transparent 100%)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}