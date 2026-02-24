"use client";

import { motion, type MotionValue } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoreFeatureCardProps {
  index: number;
  icon: LucideIcon;
  label: string;
  description: string;
  accentColor: string;
  isActive: boolean;
  style: {
    y: MotionValue<number>;
    opacity: MotionValue<number>;
    scale: MotionValue<number>;
    rotateZ: MotionValue<number>;
  };
}

export function CoreFeatureCard({
  index,
  icon: Icon,
  label,
  description,
  accentColor,
  isActive,
  style,
}: CoreFeatureCardProps) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{
        y: style.y,
        opacity: style.opacity,
        scale: style.scale,
        rotateZ: style.rotateZ,
      }}
    >
      <div className="relative w-full max-w-lg pointer-events-auto">
        {/* Ghost number */}
        <span className="absolute -top-16 -left-4 text-[8rem] md:text-[12rem] font-bold text-foreground/[0.03] select-none pointer-events-none leading-none">
          0{index + 1}
        </span>

        {/* Watermark icon */}
        <div className="absolute -right-4 -bottom-4 opacity-[0.04] pointer-events-none">
          <Icon className="w-32 h-32 md:w-48 md:h-48" strokeWidth={0.5} />
        </div>

        {/* Card */}
        <div className="relative rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 md:p-10 overflow-hidden">
          {/* Animated border glow */}
          <div
            className={cn(
              "absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700",
              isActive && "opacity-100"
            )}
            style={{
              background: `conic-gradient(from var(--glow-angle, 0deg), transparent, ${accentColor}20, transparent, ${accentColor}10, transparent)`,
              animation: isActive
                ? "glowRotate 4s linear infinite"
                : undefined,
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
              padding: "1px",
            }}
          />

          {/* Icon */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `color-mix(in oklch, ${accentColor} 15%, transparent)` }}
          >
            <Icon
              className="w-7 h-7"
              style={{ color: accentColor }}
              strokeWidth={1.8}
            />
          </div>

          {/* Label */}
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
            {label}
          </h3>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
