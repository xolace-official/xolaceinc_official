"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Sparkles,
  Info,
  Check,
  X,
  Coins,
  Heart,
  Sun,
  Flame,
} from "lucide-react";
import { CompanionChatPreview } from "@/features/how-it-works/companion-chat-preview";
import { CompanionVoiceMessage } from "@/features/how-it-works/companion-waveform-disc";

const companions = [
  {
    name: "Aniima",
    icon: Heart,
    color: "var(--accent)",
    personality: "Warm & reflective",
    sample:
      "What would it feel like to give yourself permission to rest?",
    duration: "0:04",
    // Smooth rolling pattern
    barPattern: [0.3, 0.5, 0.7, 0.9, 0.7, 0.5, 0.6, 0.8, 0.6, 0.4, 0.5, 0.7, 0.9, 0.6, 0.3],
    align: "left" as const,
  },
  {
    name: "Sol",
    icon: Sun,
    color: "var(--chart-5)",
    personality: "Calm & grounding",
    sample: "Let\u2019s take this one step at a time. No rush.",
    duration: "0:03",
    // Even steady pattern
    barPattern: [0.4, 0.6, 0.4, 0.6, 0.4, 0.6, 0.5, 0.7, 0.5, 0.7, 0.5, 0.6, 0.4, 0.6, 0.4],
    align: "right" as const,
  },
  {
    name: "Ember",
    icon: Flame,
    color: "var(--primary)",
    personality: "Playful & curious",
    sample:
      "What if we looked at this from a completely different angle?",
    duration: "0:05",
    // Spiky energetic pattern
    barPattern: [0.2, 0.9, 0.3, 0.8, 0.5, 1.0, 0.2, 0.7, 0.9, 0.3, 0.6, 1.0, 0.4, 0.8, 0.2],
    align: "left" as const,
  },
];

const offers = [
  "Reflections to help you process what you\u2019re feeling",
  "Coping suggestions grounded in well-being practices",
  "Thoughtful perspective when you need a gentle nudge",
];

const boundaries = [
  "Not a licensed therapist or mental health professional",
  "Not a replacement for crisis support or emergency services",
];

const AiSupportSection = () => {
  const reducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 } as const,
          whileInView: { opacity: 1, y: 0 } as const,
          viewport: { once: true, margin: "-60px" } as const,
          transition: { duration: 0.5, delay },
        };

  return (
    <section className="section relative overflow-hidden bg-muted/20">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
        {/* ─── Zone 1: Header + Chat Preview ─── */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Header */}
          <div className="w-full md:w-5/12 space-y-4">
            <motion.div {...fadeUp(0)}>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] uppercase tracking-[0.2em] font-mono mb-3">
                Phase One
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                AI Support
              </h2>
            </motion.div>
            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
              {...fadeUp(0.1)}
            >
              Xolace includes general well-being AI companions designed to
              provide supportive guidance &mdash; not therapy. Each has their own
              personality.
            </motion.p>
          </div>

          {/* Chat Preview */}
          <div className="w-full md:w-7/12">
            <CompanionChatPreview />
          </div>
        </div>

        {/* ─── Zone 2: Companion Voice Messages ─── */}
        <div className="space-y-8">
          <motion.h3
            className="text-lg md:text-xl font-semibold text-center"
            {...fadeUp(0)}
          >
            Meet the companions
          </motion.h3>

          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-2xl mx-auto">
            {companions.map((c, i) => (
              <CompanionVoiceMessage
                key={c.name}
                name={c.name}
                personality={c.personality}
                sample={c.sample}
                color={c.color}
                icon={c.icon}
                duration={c.duration}
                barPattern={c.barPattern}
                delay={i * 0.15}
                align={c.align}
              />
            ))}
          </div>
        </div>

        {/* ─── Zone 3: Transparency Panels ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* What companions offer */}
          <motion.div
            className="rounded-2xl border border-border/50 bg-card/60 p-6 space-y-4"
            {...fadeUp(0)}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" strokeWidth={1.8} />
              <h4 className="text-lg font-semibold">What companions offer</h4>
            </div>
            <ul className="space-y-2.5">
              {offers.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    className="w-4 h-4 text-accent/70 mt-0.5 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What they are not */}
          <motion.div
            className="rounded-2xl border border-border/50 bg-card/60 p-6 space-y-4"
            {...fadeUp(0.15)}
          >
            <div className="flex items-center gap-2">
              <Info
                className="w-5 h-5 text-muted-foreground"
                strokeWidth={1.8}
              />
              <h4 className="text-lg font-semibold">What they are not</h4>
            </div>
            <ul className="space-y-2.5">
              {boundaries.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <X
                    className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground/70 italic pt-1">
              If you&apos;re in crisis, please reach out to a professional or
              crisis line.
            </p>
          </motion.div>
        </div>

        {/* ─── Zone 4: Credits Callout ─── */}
        <motion.div
          className="max-w-2xl mx-auto rounded-2xl bg-accent/5 border border-accent/15 p-6 flex items-start gap-5"
          {...fadeUp(0)}
        >
          <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Coins className="w-5 h-5 text-accent/60" strokeWidth={1.8} />
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-base">Monthly credits</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To support responsible use and platform sustainability, users
              receive a limited number of AI interaction credits each month. This
              keeps the experience thoughtful and intentional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiSupportSection;
