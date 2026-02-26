"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BookOpen, ShieldCheck, Flag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SafetyShield } from "@/features/how-it-works/safety-shield";

interface SafetyPillar {
  icon: LucideIcon;
  label: string;
  description: string;
}

const pillars: SafetyPillar[] = [
  {
    icon: BookOpen,
    label: "Community Guidelines",
    description:
      "Clear, simple rules that protect honesty and discourage toxicity.",
  },
  {
    icon: ShieldCheck,
    label: "Blue Teams",
    description:
      "Trusted community members who moderate with empathy, not authority.",
  },
  {
    icon: Flag,
    label: "Reporting",
    description:
      "See something off? Flag it. Every report is reviewed to keep the space safe.",
  },
];

const STAGGER_DELAYS = [0.3, 0.7, 1.1];

const SafetySection = () => {
  const reducedMotion = useReducedMotion();
  const [activeLayer, setActiveLayer] = useState(reducedMotion ? 3 : 0);
  const [activePillars, setActivePillars] = useState<boolean[]>(
    reducedMotion ? [true, true, true] : [false, false, false]
  );

  const fadeUp = (delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 } as const,
          whileInView: { opacity: 1, y: 0 } as const,
          viewport: { once: true, margin: "-60px" } as const,
          transition: { duration: 0.5, delay },
        };

  const handleLayerInView = (index: number) => {
    if (reducedMotion) return;

    setActiveLayer((prev) => Math.max(prev, index + 1));
    setActivePillars((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  return (
    <section className="section relative overflow-hidden bg-linear-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {/* ─── Header ─── */}
        <motion.div className="space-y-2 text-center md:text-left" {...fadeUp(0)}>
          <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-[10px] uppercase tracking-[0.2em] font-mono mb-3">
            Safety First
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Safety & Moderation
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Your safety isn&apos;t an afterthought &mdash; it&apos;s the
            foundation.
          </p>
        </motion.div>

        {/* ─── Shield + Pillars ─── */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Shield Graphic */}
          <div className="w-full md:w-5/12 flex justify-center">
            <SafetyShield activeLayer={activeLayer} />
          </div>

          {/* Pillar Text Items */}
          <div className="w-full md:w-7/12 space-y-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const isActive = activePillars[i];

              return (
                <motion.div
                  key={pillar.label}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-2xl border-l-2 transition-all duration-500",
                    isActive
                      ? "border-l-destructive bg-card/60"
                      : "border-l-transparent"
                  )}
                  initial={
                    reducedMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 16 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: STAGGER_DELAYS[i],
                    ease: "easeOut",
                  }}
                  onViewportEnter={() => {
                    // Fire after the stagger delay so shield + text sync
                    const timer = setTimeout(
                      () => handleLayerInView(i),
                      STAGGER_DELAYS[i] * 1000
                    );
                    return () => clearTimeout(timer);
                  }}
                >
                  <div
                    className={cn(
                      "shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-500",
                      isActive
                        ? "bg-destructive/15"
                        : "bg-muted"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5 transition-colors duration-500",
                        isActive
                          ? "text-destructive"
                          : "text-muted-foreground/50"
                      )}
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-semibold transition-colors duration-500",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground/50"
                      )}
                    >
                      {pillar.label}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-relaxed mt-0.5 transition-colors duration-500",
                        isActive
                          ? "text-muted-foreground"
                          : "text-muted-foreground/30"
                      )}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
