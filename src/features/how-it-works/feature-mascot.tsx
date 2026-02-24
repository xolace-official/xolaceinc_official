"use client";

import Image from "next/image";
import { motion, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface FeatureMascotProps {
  mascotY: MotionValue<number>;
  mascotRotate: MotionValue<number>;
  activeIndex: number;
  featureColors: string[];
  reducedMotion?: boolean;
}

const EMBER_COUNT = 10;

export function FeatureMascot({
  mascotY,
  mascotRotate,
  activeIndex,
  featureColors,
  reducedMotion = false,
}: FeatureMascotProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Color-shifting glow layers */}
      {featureColors.map((color, i) => (
        <div
          key={color}
          className={cn(
            "absolute w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl transition-opacity duration-700 -z-10",
            i === activeIndex ? "opacity-25" : "opacity-0"
          )}
          style={{ backgroundColor: color }}
        />
      ))}

      {/* Ember particles */}
      {!reducedMotion &&
        Array.from({ length: EMBER_COUNT }).map((_, i) => (
          <motion.div
            key={`ember-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: featureColors[activeIndex],
              left: `${30 + Math.random() * 40}%`,
              bottom: `${10 + Math.random() * 30}%`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 60],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}

      {/* Mascot */}
      <motion.div style={{ y: mascotY, rotate: mascotRotate }}>
        <Image
          src="/assests/mascot/mascot-wave.png"
          alt="Xolace mascot"
          width={400}
          height={400}
          className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-lg"
        />
      </motion.div>
    </div>
  );
}
