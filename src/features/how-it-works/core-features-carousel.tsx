"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useFeatureScroll } from "@/features/how-it-works/use-feature-scroll";
import { CoreFeatureCard } from "@/features/how-it-works/core-feature-card";
import { FeatureProgressTrack } from "@/features/how-it-works/feature-progress-track";
import { FeatureMascot } from "@/features/how-it-works/feature-mascot";
import type { FeatureData } from "@/features/how-it-works/core-features-section";

interface CoreFeaturesCarouselProps {
  features: FeatureData[];
  featureColors: string[];
}

const RUNWAY_HEIGHT_VH = 500;

export function CoreFeaturesCarousel({
  features,
  featureColors,
}: CoreFeaturesCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress,
    activeIndex,
    cardStyles,
    mascotY,
    mascotRotate,
  } = useFeatureScroll(containerRef);

  return (
    <div
      ref={containerRef}
      data-core-features-runway
      className="relative"
      style={{ height: `${RUNWAY_HEIGHT_VH}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Section header */}
        <div className="pt-20 pb-8 px-6 md:px-16 max-w-7xl mx-auto w-full">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold">Core Features</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Everything you need to express yourself and connect.
            </p>
          </motion.div>
        </div>

        {/* Main content area */}
        <div className="flex-1 relative flex items-center px-6 md:px-16 max-w-7xl mx-auto w-full">
          {/* Background glow layers */}
          {featureColors.map((color, i) => (
            <div
              key={`glow-${color}`}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 pointer-events-none",
                i === activeIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <div
                className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.07]"
                style={{ backgroundColor: color }}
              />
            </div>
          ))}

          {/* Ghost typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            {features.map((f, i) => (
              <span
                key={`ghost-${f.label}`}
                className={cn(
                  "absolute text-[8rem] md:text-[14rem] font-bold text-foreground transition-opacity duration-500 leading-none",
                  i === activeIndex ? "opacity-[0.025]" : "opacity-0"
                )}
              >
                {f.label}
              </span>
            ))}
          </div>

          {/* Layout: Track | Cards | Mascot */}
          <div className="relative flex items-center gap-8 lg:gap-12 w-full h-full">
            {/* Progress track */}
            <FeatureProgressTrack
              activeIndex={activeIndex}
              scrollYProgress={scrollYProgress}
              featureLabels={features.map((f) => f.label)}
              featureColors={featureColors}
            />

            {/* Card stack area */}
            <div className="flex-1 relative h-80 md:h-96">
              {features.map((feature, i) => (
                  <CoreFeatureCard
                    key={feature.label}
                    index={i}
                    icon={feature.icon}
                    label={feature.label}
                    description={feature.description}
                    accentColor={featureColors[i]}
                    isActive={i === activeIndex}
                    style={cardStyles[i]}
                  />
              ))}
            </div>

            {/* Mascot */}
            <div className="hidden lg:flex items-center">
              <FeatureMascot
                mascotY={mascotY}
                mascotRotate={mascotRotate}
                activeIndex={activeIndex}
                featureColors={featureColors}
                mascotImages={features.map((f) => f.mascot)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
