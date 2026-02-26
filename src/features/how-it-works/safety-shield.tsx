"use client";

import { motion, useReducedMotion } from "motion/react";
import { BookOpen, ShieldCheck, Flag } from "lucide-react";

const SHIELD_PATH =
  "M12 2 L3 7 L3 13 C3 18.5 7 23 12 25 C17 23 21 18.5 21 13 L21 7 Z";

const layers = [
  { scale: 0.5, icon: BookOpen, label: "Community Guidelines" },
  { scale: 0.75, icon: ShieldCheck, label: "Blue Teams" },
  { scale: 1.0, icon: Flag, label: "Reporting" },
];

interface SafetyShieldProps {
  activeLayer: number;
}

const SafetyShield = ({ activeLayer }: SafetyShieldProps) => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center w-full aspect-square max-w-[360px] mx-auto">
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-[15%] rounded-full bg-destructive blur-3xl"
        initial={{ opacity: 0.05 }}
        animate={{ opacity: activeLayer >= 3 ? 0.15 : 0.05 + activeLayer * 0.03 }}
        transition={{ duration: 0.6 }}
      />

      <svg
        viewBox="0 0 24 27"
        fill="none"
        className="relative w-full h-full"
        aria-label="Shield layers representing safety pillars"
      >
        {layers.map((layer, i) => {
          const isActive = i < activeLayer;
          const layerIndex = i;

          return (
            <motion.g
              key={layer.label}
              style={{ transformOrigin: "12px 13.5px" }}
              initial={
                reducedMotion
                  ? { opacity: 1, scale: layer.scale }
                  : { opacity: 0, scale: layer.scale * 0.85 }
              }
              animate={
                reducedMotion || isActive
                  ? { opacity: 1, scale: layer.scale }
                  : { opacity: 0, scale: layer.scale * 0.85 }
              }
              transition={{
                duration: 0.5,
                delay: reducedMotion ? 0 : layerIndex * 0.1,
                ease: "easeOut",
              }}
            >
              <path
                d={SHIELD_PATH}
                fill={`oklch(0.6535 0.2348 34.037 / ${0.06 + (2 - i) * 0.04})`}
                stroke={`oklch(0.6535 0.2348 34.037 / ${0.15 + (2 - i) * 0.12})`}
                strokeWidth={0.5 / layer.scale}
                strokeLinejoin="round"
              />
            </motion.g>
          );
        })}

        {/* Layer icons via foreignObject */}
        {layers.map((layer, i) => {
          const isActive = i < activeLayer;
          const Icon = layer.icon;

          // Position icons at different vertical spots within the shield
          const positions = [
            { x: 9.5, y: 15, size: 5 },   // core — lower center
            { x: 9.5, y: 9.5, size: 5 },   // middle — center
            { x: 9.5, y: 4, size: 5 },      // outer — upper center
          ];

          const pos = positions[i];

          return (
            <motion.foreignObject
              key={`icon-${layer.label}`}
              x={pos.x}
              y={pos.y}
              width={pos.size}
              height={pos.size}
              initial={reducedMotion ? { opacity: 0.7 } : { opacity: 0 }}
              animate={
                reducedMotion || isActive ? { opacity: 0.7 } : { opacity: 0 }
              }
              transition={{
                duration: 0.4,
                delay: reducedMotion ? 0 : i * 0.1 + 0.2,
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Icon
                  className="text-destructive"
                  style={{ width: "100%", height: "100%" }}
                  strokeWidth={1.5}
                />
              </div>
            </motion.foreignObject>
          );
        })}
      </svg>
    </div>
  );
};

export { SafetyShield };
