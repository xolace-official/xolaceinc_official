"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Play } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CompanionVoiceMessageProps {
  name: string;
  personality: string;
  sample: string;
  color: string;
  icon: LucideIcon;
  duration: string;
  barPattern: number[];
  delay?: number;
  align?: "left" | "center" | "right";
}

const BAR_COUNT = 32;

/** Generate a waveform bar pattern from a seed array by interpolating */
function generateBars(pattern: number[]): number[] {
  const bars: number[] = [];
  for (let i = 0; i < BAR_COUNT; i++) {
    const t = (i / BAR_COUNT) * (pattern.length - 1);
    const low = Math.floor(t);
    const high = Math.min(low + 1, pattern.length - 1);
    const frac = t - low;
    bars.push(pattern[low] * (1 - frac) + pattern[high] * frac);
  }
  return bars;
}

export function CompanionVoiceMessage({
  name,
  personality,
  sample,
  color,
  icon: Icon,
  duration,
  barPattern,
  delay = 0,
  align = "left",
}: CompanionVoiceMessageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  const bars = generateBars(barPattern);

  const alignClass =
    align === "right"
      ? "self-end"
      : align === "center"
        ? "self-center"
        : "self-start";

  return (
    <motion.div
      className={`w-full max-w-sm md:max-w-md ${alignClass}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={reducedMotion ? undefined : { opacity: 0, x: align === "right" ? 20 : align === "center" ? 0 : -20, y: 12 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        className="rounded-2xl border border-border/50 backdrop-blur-sm p-4 md:p-5 space-y-3 relative overflow-hidden cursor-default"
        style={{
          backgroundColor: `color-mix(in oklch, ${color} 4%, var(--card))`,
          borderColor: isHovered
            ? `color-mix(in oklch, ${color} 30%, var(--border))`
            : undefined,
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Subtle accent glow on hover */}
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: color }}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Voice message row */}
        <div className="flex items-center gap-3 relative">
          {/* Play button */}
          <div
            className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: `color-mix(in oklch, ${color} 15%, transparent)`,
            }}
          >
            <Play
              className="w-4 h-4 md:w-[18px] md:h-[18px] ml-0.5"
              style={{ color }}
              strokeWidth={2}
              fill={color}
              fillOpacity={0.3}
            />
          </div>

          {/* Waveform bars */}
          <div className="flex-1 flex items-center gap-[2px] h-8 md:h-10">
            {bars.map((height, i) => (
              <motion.div
                key={`bar-${i}`}
                className="flex-1 rounded-full min-w-[2px]"
                style={{
                  backgroundColor: color,
                  opacity: isHovered ? 0.6 : 0.35,
                }}
                animate={
                  reducedMotion
                    ? { height: `${height * 100}%` }
                    : {
                        height: [
                          `${height * 100}%`,
                          `${Math.max(15, height * 100 + (Math.sin(i * 0.8) * 20))}%`,
                          `${height * 100}%`,
                        ],
                      }
                }
                transition={
                  reducedMotion
                    ? undefined
                    : {
                        duration: 1.5 + (i % 3) * 0.3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 0.05,
                      }
                }
              />
            ))}
          </div>

          {/* Duration */}
          <span
            className="text-[11px] font-mono shrink-0"
            style={{ color }}
          >
            {duration}
          </span>
        </div>

        {/* Companion identity */}
        <div className="flex items-center gap-2">
          <Icon
            className="w-3.5 h-3.5"
            style={{ color }}
            strokeWidth={2}
          />
          <span className="text-sm font-semibold">{name}</span>
          <span className="text-[10px] text-muted-foreground tracking-wide uppercase">
            {personality}
          </span>
        </div>

        {/* Sample quote as transcription */}
        <p className="text-sm text-muted-foreground/80 leading-relaxed italic pl-3 border-l-2"
          style={{ borderColor: `color-mix(in oklch, ${color} 30%, transparent)` }}
        >
          &ldquo;{sample}&rdquo;
        </p>
      </motion.div>
    </motion.div>
  );
}
