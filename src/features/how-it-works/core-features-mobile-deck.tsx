"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type PanInfo } from "motion/react";
import { cn } from "@/lib/utils";
import type { FeatureData } from "@/features/how-it-works/core-features-section";

interface CoreFeaturesMobileDeckProps {
  features: FeatureData[];
  featureColors: string[];
}

const SWIPE_THRESHOLD = 100;
const VELOCITY_THRESHOLD = 500;
const EMBER_COUNT = 4;

export function CoreFeaturesMobileDeck({
  features,
  featureColors,
}: CoreFeaturesMobileDeckProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [mascotBounce, setMascotBounce] = useState(false);

  // Mascot bounce on card change
  useEffect(() => {
    setMascotBounce(true);
    const t = setTimeout(() => setMascotBounce(false), 400);
    return () => clearTimeout(t);
  }, [activeIndex]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    const shouldSwipe =
      Math.abs(info.offset.x) > SWIPE_THRESHOLD ||
      Math.abs(info.velocity.x) > VELOCITY_THRESHOLD;

    if (shouldSwipe) {
      const direction = info.offset.x > 0 ? 1 : -1;
      setExitDirection(direction);
      setActiveIndex((prev) => (prev + 1) % features.length);
      if (!hasInteracted) setHasInteracted(true);
    }
  }

  function handleDotClick(index: number) {
    if (index === activeIndex) return;
    setExitDirection(index > activeIndex ? -1 : 1);
    setActiveIndex(index);
    if (!hasInteracted) setHasInteracted(true);
  }

  const activeFeature = features[activeIndex];
  const ActiveIcon = activeFeature.icon;

  // Shadow card indices (wrapping)
  const shadow1Index = (activeIndex + 1) % features.length;
  const shadow2Index = (activeIndex + 2) % features.length;
  const Shadow1Icon = features[shadow1Index].icon;
  const Shadow2Icon = features[shadow2Index].icon;

  return (
    <section className="section relative overflow-hidden bg-linear-to-b from-background to-muted/30">
      <div className="max-w-md mx-auto relative z-10">
        {/* Mascot */}
        <motion.div
          className="flex justify-center mb-6"
          animate={{
            y: mascotBounce ? -6 : 0,
            rotate: mascotBounce ? 3 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <div className="relative">
            {/* Color-shifting glow */}
            {featureColors.map((color, i) => (
              <motion.div
                key={`mascot-glow-${color}`}
                className="absolute inset-0 rounded-full blur-2xl -z-10 scale-150"
                animate={{ opacity: i === activeIndex ? 0.25 : 0 }}
                transition={{ duration: 0.7 }}
                style={{ backgroundColor: color }}
              />
            ))}

            {/* Ember particles */}
            {Array.from({ length: EMBER_COUNT }).map((_, i) => (
              <motion.div
                key={`ember-m-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: featureColors[activeIndex],
                  left: `${25 + Math.random() * 50}%`,
                  bottom: `${10 + Math.random() * 30}%`,
                }}
                animate={{
                  y: [0, -30 - Math.random() * 40],
                  opacity: [0, 0.5, 0],
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

            <Image
              src="/assests/mascot/mascot-wave.png"
              alt="Xolace mascot"
              width={200}
              height={200}
              className="relative w-20 h-20 object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          className="space-y-1.5 mb-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Core Features</h2>
          <p className="text-sm text-muted-foreground">
            Everything you need to express yourself and connect.
          </p>
        </motion.div>

        {/* Card stack viewport */}
        <div className="relative min-h-[300px] mb-8">
          {/* Background glow */}
          {featureColors.map((color, i) => (
            <motion.div
              key={`bg-glow-${color}`}
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: i === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full blur-[80px] opacity-[0.08]"
                style={{ backgroundColor: color }}
              />
            </motion.div>
          ))}

          {/* Shadow card depth-2 */}
          <div className="absolute inset-x-3 top-4 bottom-0 pointer-events-none">
            <ShadowCard
              feature={features[shadow2Index]}
              icon={Shadow2Icon}
              color={featureColors[shadow2Index]}
              index={shadow2Index}
              depth={2}
            />
          </div>

          {/* Shadow card depth-1 */}
          <div className="absolute inset-x-1.5 top-2 bottom-0 pointer-events-none">
            <ShadowCard
              feature={features[shadow1Index]}
              icon={Shadow1Icon}
              color={featureColors[shadow1Index]}
              index={shadow1Index}
              depth={1}
            />
          </div>

          {/* Active card */}
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={activeIndex}
              className="relative"
              style={{ touchAction: "none" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={handleDragEnd}
              initial={{
                y: 16,
                scale: 0.95,
                opacity: 0.7,
              }}
              animate={{
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                x: exitDirection * 400,
                rotateZ: exitDirection * 15,
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 28,
              }}
            >
              <FeatureCard
                feature={activeFeature}
                icon={ActiveIcon}
                color={featureColors[activeIndex]}
                index={activeIndex}
                isActive
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-3 mb-4">
          {features.map((f, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={f.label}
                type="button"
                onClick={() => handleDotClick(i)}
                className="relative p-1.5 cursor-pointer"
                aria-label={`Go to ${f.label}`}
              >
                {/* Pulse ring */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full"
                    style={{
                      borderWidth: 1,
                      borderColor: featureColors[i],
                    }}
                    animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                )}
                <motion.div
                  className="w-2.5 h-2.5 rounded-full"
                  animate={{
                    scale: isActive ? 1.4 : 0.8,
                    backgroundColor: isActive
                      ? featureColors[i]
                      : "var(--border)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              </button>
            );
          })}
        </div>

        {/* Swipe hint */}
        <AnimatePresence>
          {!hasInteracted && (
            <motion.p
              className="text-xs text-muted-foreground text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              Swipe to explore
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─── Internal card components ─── */

function FeatureCard({
  feature,
  icon: Icon,
  color,
  index,
  isActive,
}: {
  feature: FeatureData;
  icon: FeatureData["icon"];
  color: string;
  index: number;
  isActive?: boolean;
}) {
  return (
    <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 overflow-hidden min-h-[260px]">
      {/* Conic gradient border glow */}
      {isActive && (
        <div
          className="absolute inset-0 rounded-2xl opacity-100"
          style={{
            background: `conic-gradient(from var(--glow-angle, 0deg), transparent, ${color}20, transparent, ${color}10, transparent)`,
            animation: "glowRotate 4s linear infinite",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Ghost number */}
      <span className="absolute -top-4 -left-1 text-[5rem] font-bold text-foreground/[0.03] select-none pointer-events-none leading-none">
        0{index + 1}
      </span>

      {/* Watermark icon */}
      <div className="absolute -right-2 -bottom-2 opacity-[0.04] pointer-events-none">
        <Icon className="w-28 h-28" strokeWidth={0.5} />
      </div>

      {/* Icon badge */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{
          backgroundColor: `color-mix(in oklch, ${color} 15%, transparent)`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color }} strokeWidth={1.8} />
      </div>

      {/* Label */}
      <h3 className="text-2xl font-bold tracking-tight mb-2">
        {feature.label}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

function ShadowCard({
  feature,
  icon: Icon,
  color,
  index,
  depth,
}: {
  feature: FeatureData;
  icon: FeatureData["icon"];
  color: string;
  index: number;
  depth: 1 | 2;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/30 bg-card/60 backdrop-blur-sm p-6 overflow-hidden min-h-[260px]",
        depth === 1 ? "opacity-60" : "opacity-30"
      )}
      style={{
        transform: `scale(${depth === 1 ? 0.95 : 0.9})`,
      }}
    >
      {/* Ghost number */}
      <span className="absolute -top-4 -left-1 text-[5rem] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
        0{index + 1}
      </span>

      {/* Icon badge (dimmed) */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 opacity-50"
        style={{
          backgroundColor: `color-mix(in oklch, ${color} 10%, transparent)`,
        }}
      >
        <Icon className="w-6 h-6 opacity-50" style={{ color }} strokeWidth={1.8} />
      </div>

      <h3 className="text-2xl font-bold tracking-tight mb-2 opacity-40">
        {feature.label}
      </h3>
    </div>
  );
}
