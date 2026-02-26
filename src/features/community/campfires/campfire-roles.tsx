"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";

const roles = [
  {
    id: "camper",
    name: "Camper",
    symbol: "◎",
    tagline: "The Presence",
    color: "var(--foreground)",
    description: "Everyone who joins a campfire is a Camper. You read, you share, you show up. No pressure, no performance - just presence.",
    permissions: ["Join open campfires", "Post & React", "Offer Support"],
  },
  {
    id: "firestarter",
    name: "Firestarter",
    symbol: "🔥",
    tagline: "The Architect",
    color: "var(--destructive)",
    description: "The Firestarter creates the campfire. They set the purpose, the rules, and the tone. They choose who keeps the fire alive.",
    permissions: ["Create campfires", "Appoint Firekeepers", "Set Guidelines"],
  },
  {
    id: "firekeeper",
    name: "Firekeeper",
    symbol: "⬡",
    tagline: "The Guardian",
    color: "var(--primary)",
    description: "Chosen by the Firestarter, Firekeepers are the moderators. They maintain safety, guide conversations, and protect the space.",
    permissions: ["Moderate content", "Protect safety", "Guide Campers"],
  },
  {
    id: "storyteller",
    name: "Storyteller",
    symbol: "✦",
    tagline: "The Light",
    color: "var(--accent)",
    description: "Storytellers are experienced voices - people who share wisdom, lived experience, and perspective. They don't just talk. They illuminate.",
    permissions: ["Featured stories", "Lead discussions", "Mentorship"],
  },
];

export default function CampfireRoles() {
  const [activeTab, setActiveTab] = useState(roles[0]);

  return (
    <section className="relative bg-background section overflow-hidden">
      {/* Dynamic Background Symbol (The "Ghost" Symbol) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.03, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 pointer-events-none select-none"
        >
          <span className="text-[50vw] font-bold" style={{ color: activeTab.color }}>
            {activeTab.symbol}
          </span>
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* LEFT: Navigation List */}
          <div className="lg:col-span-5 space-y-2">
            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-foreground/30 mb-12">
              The Ecosystem of Care
            </h2>

            <div className="flex flex-col">
              {roles.map((role) => (
                <button
                  type="button"
                  key={role.id}
                  onMouseEnter={() => setActiveTab(role)}
                  className="group relative py-6 text-left border-b border-border/50 last:border-0"
                >
                  <motion.div
                    className="flex items-center gap-6"
                    animate={{ x: activeTab.id === role.id ? 20 : 0 }}
                  >
                    <span
                      className="text-2xl transition-opacity duration-300"
                      style={{
                        color: activeTab.id === role.id ? role.color : 'inherit',
                        opacity: activeTab.id === role.id ? 1 : 0.2
                      }}
                    >
                      {role.symbol}
                    </span>
                    <span className={`text-4xl md:text-6xl font-bold tracking-tighter transition-all duration-300 ${
                      activeTab.id === role.id ? "opacity-100" : "opacity-20 group-hover:opacity-40"
                    }`}>
                      {role.name}
                    </span>
                  </motion.div>

                  {activeTab.id === role.id && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 -z-10 bg-linear-to-r from-transparent via-transparent to-transparent"
                      initial={false}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Detail Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-10"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-border/50" style={{ color: activeTab.color }}>
                    {activeTab.tagline}
                  </span>
                  <p className="text-3xl md:text-4xl font-light leading-snug text-foreground/80 italic">
                    "{activeTab.description}"
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-border/50">
                  {activeTab.permissions.map((perm, idx) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: can use idx
                      <div key={idx} className="space-y-2">
                      <div className="h-1 w-6" style={{ backgroundColor: activeTab.color }} />
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Permission</p>
                      <p className="text-sm font-medium">{perm}</p>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 px-10 py-5 bg-foreground text-background text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-colors hover:bg-primary"
                >
                  Learn about {activeTab.name}s
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}