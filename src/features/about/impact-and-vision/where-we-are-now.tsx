"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { ShieldCheck, Sparkles, Users, HeartHandshake } from "lucide-react";

const IMPACT_DATA = [
  {
    title: "A safe space to speak.",
    desc: "Anonymous and open posts. No performance required — just the freedom to say what you actually feel.",
    icon: <ShieldCheck />,
    token: "var(--chart-1)"
  },
  {
    title: "Campfires.",
    desc: "Small groups built around what matters: anxiety, grief, identity. Small by design, deep by nature.",
    icon: <Sparkles />,
    token: "var(--chart-5)"
  },
  {
    title: "Peer support.",
    desc: "Real people, not bots. No algorithm deciding who sees your pain. Genuine human connection.",
    icon: <Users />,
    token: "var(--chart-3)"
  },
  {
    title: "Born free.",
    desc: "No paywall for the essentials. Built where cost is the barrier — free is our foundation.",
    icon: <HeartHandshake />,
    token: "var(--accent)"
  }
];

export default function CinematicImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Parallax logic for that "Deep Space" feel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const springY = useSpring(yPos, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="section relative  bg-background  overflow-hidden">

      {/* 1. THE AMBIENT ENGINE: Moving "Aura" that follows the interaction */}
      <motion.div
        animate={{
          x: hoveredIndex !== null ? (hoveredIndex % 2 === 0 ? -100 : 100) : 0,
          opacity: hoveredIndex !== null ? 0.6 : 0.2
        }}
        className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none"
      >
        <div
          className="w-[800px] h-[800px] rounded-full blur-[160px] transition-colors duration-700"
          style={{
            backgroundColor: hoveredIndex !== null ? IMPACT_DATA[hoveredIndex].token : 'var(--primary)',
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="mb-24 text-center">
          <motion.h2
            style={{ y: springY }}
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-none"
          >
            THE <span className="text-primary">XOLACE</span> EFFECT
          </motion.h2>
        </header>

        {/* 2. THE GRID: Non-linear, Organic Placement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-40">
          {IMPACT_DATA.map((item, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              {/* Floating Icon with Glassmorphism */}
              <div
                className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ backgroundColor: `${item.token}20`, color: item.token }}
              >
                {item.icon}
              </div>

              {/* Text that "Reveals" on Hover */}
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <div className="relative overflow-hidden">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light transition-all duration-500 group-hover:translate-x-2">
                  {item.desc}
                </p>
                {/* Visual "Pulse" Line */}
                <motion.div
                  className="absolute left-0 bottom-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>

              {/* The "Ghost" Background Number */}
              <span className="absolute -left-8 -top-8 text-9xl font-bold opacity-[0.03] pointer-events-none select-none group-hover:opacity-[0.07] transition-opacity">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. THE "BRIDGE" DECORATION: Subtle SVG paths connecting the sections */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M0,50 Q25,45 50,50 T100,50"
          stroke="var(--primary)"
          fill="none"
          strokeWidth="0.1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 3 }}
        />
      </svg>
    </section>
  );
}