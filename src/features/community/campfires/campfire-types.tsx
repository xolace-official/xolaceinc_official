"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const types = [
  {
    id: "support",
    name: "Support",
    tagline: "You don't have to carry this alone.",
    description: "Spaces for those going through anxiety, depression, grief, trauma, or any weight that feels too heavy to hold solo. No advice unless asked. Just presence.",
    feel: "Safe · Non-judgmental · Human",
    color: "var(--primary)",
    accent: "oklch(0.6726 0.2904 341.4084 / 0.1)",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Becoming who you want to be.",
    description: "Goal-oriented communities focused on habits, healing, career transitions, self-development. Progress isn't linear — and here, that's understood.",
    feel: "Motivating · Honest · Forward-moving",
    color: "var(--destructive)",
    accent: "oklch(0.6535 0.2348 34.037 / 0.1)",
  },
  {
    id: "expression",
    name: "Expression",
    tagline: "Say it. Write it. Release it.",
    description: "Creative and emotional outlets — poetry, art, journaling, music, storytelling. Sometimes the only therapy you need is getting it out.",
    feel: "Creative · Free · Cathartic",
    color: "var(--primary)",
    accent: "oklch(0.6726 0.2904 341.4084 / 0.08)",
  },
  {
    id: "education",
    name: "Education",
    tagline: "Learn to understand yourself.",
    description: "Mental health literacy, psychology, coping strategies, research-backed tools — made accessible. Knowledge is its own kind of healing.",
    feel: "Informed · Empowering · Research-backed",
    color: "var(--destructive)",
    accent: "oklch(0.6535 0.2348 34.037 / 0.08)",
  },
  {
    id: "general",
    name: "General",
    tagline: "Just people, connecting.",
    description: "No specific theme. Just a campfire where people show up, talk, share whatever is on their mind. Sometimes that's enough.",
    feel: "Open · Casual · Welcoming",
    color: "var(--foreground)",
    accent: "var(--muted)",
  },
];

const CampfireTypes = () => {
  const [active, setActive] = useState(types[0]);

  return (
    <section className="relative min-h-screen bg-muted section overflow-hidden">

      <AnimatePresence>
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 70% 50%, ${active.accent} 0%, transparent 60%)`
          }}
        />
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs font-mono uppercase tracking-[0.5em] text-foreground/30"
          >
            The Gatherings
          </motion.span>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-tighter leading-[0.9] text-foreground">
            Campfires come in <br />
            <span className="text-foreground/20 italic font-serif">many forms.</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* LEFT: INTERACTIVE LIST */}
          <div className="space-y-2">
            {types.map((type, i) => (
              <button
                key={type.id}
                onMouseEnter={() => setActive(type)}
                className="group relative w-full py-8 border-b border-border/50 text-left transition-all"
              >
                <div className="flex items-center gap-8">
                  <span className={`text-xs font-mono transition-colors duration-500 ${active.id === type.id ? 'text-primary' : 'text-foreground/20'}`}>
                    0{i + 1}
                  </span>
                  <h3 className={`text-4xl md:text-5xl font-bold tracking-tighter transition-all duration-500 ${
                    active.id === type.id ? "translate-x-4 scale-110" : "opacity-30 group-hover:opacity-60"
                  }`}
                      style={{ color: active.id === type.id ? type.color : 'inherit' }}
                  >
                    {type.name}
                  </h3>
                </div>

                {/* Animated underline for active state */}
                {active.id === type.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-[2px] bg-primary w-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT: THE SHOWCASE BOX */}
          <div className="lg:sticky lg:top-48">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold italic font-serif text-foreground/80">
                    "{active.tagline}"
                  </h4>
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/60">
                    {active.description}
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/30">The Atmosphere</p>
                    <p className="text-sm font-medium tracking-tight" style={{ color: active.color }}>{active.feel}</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-fit px-8 py-4 bg-foreground text-background text-xs font-bold uppercase tracking-widest rounded-full"
                  >
                    Explore {active.name} Fires
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampfireTypes;