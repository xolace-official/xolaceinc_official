"use client";

import { motion, type MotionValue, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface FeatureProgressTrackProps {
  activeIndex: number;
  scrollYProgress: MotionValue<number>;
  featureLabels: string[];
  featureColors: string[];
}

export function FeatureProgressTrack({
  activeIndex,
  scrollYProgress,
  featureLabels,
  featureColors,
}: FeatureProgressTrackProps) {
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleDotClick = (index: number) => {
    const bandCenter = (index + 0.5) / featureLabels.length;
    const container = document.querySelector("[data-core-features-runway]");
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const targetY = scrollTop + bandCenter * rect.height;

    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <div className="hidden lg:flex flex-col items-center gap-0 h-64 relative">
      {/* Background track line */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-border" />

      {/* Fill line */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-primary origin-top"
        style={{ height: fillHeight }}
      />

      {/* Dots */}
      <div className="relative flex flex-col justify-between h-full z-10">
        {featureLabels.map((label, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={label}
              type="button"
              onClick={() => handleDotClick(i)}
              className="group relative flex items-center gap-3 cursor-pointer"
              aria-label={`Jump to ${label}`}
            >
              {/* Label (right side) */}
              <span
                className={cn(
                  "absolute left-6 text-[10px] uppercase tracking-[0.2em] font-mono whitespace-nowrap transition-all duration-300",
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0"
                )}
                style={{ color: isActive ? featureColors[i] : undefined }}
              >
                {label}
              </span>

              {/* Dot */}
              <motion.div
                className="w-3 h-3 rounded-full border-2 transition-colors duration-300"
                style={{
                  borderColor: isActive ? featureColors[i] : "var(--border)",
                  backgroundColor: isActive ? featureColors[i] : "var(--background)",
                }}
                animate={{
                  scale: isActive ? 1.4 : 0.8,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
