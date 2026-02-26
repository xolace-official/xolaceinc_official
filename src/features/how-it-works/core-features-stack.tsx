"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { FeatureData } from "@/features/how-it-works/core-features-section";

interface CoreFeaturesStackProps {
  features: FeatureData[];
  featureColors: string[];
}

export function CoreFeaturesStack({
  features,
  featureColors,
}: CoreFeaturesStackProps) {
  return (
    <section className="section relative overflow-hidden bg-linear-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Mascot */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-20 scale-75 bg-primary" />
            <Image
              src="/assests/mascot/mascot-wave.png"
              alt="Xolace mascot"
              width={300}
              height={300}
              className="relative w-40 h-40 object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          className="space-y-2 mb-8 text-center"
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

        {/* Stacked cards */}
        <div className="space-y-4">
          {features.map((feature, i) => {
            return (
              <motion.div
                key={feature.label}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={feature.mascot}
                  alt={`${feature.label} mascot`}
                  width={80}
                  height={80}
                  className="shrink-0 w-14 h-14 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold">{feature.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
