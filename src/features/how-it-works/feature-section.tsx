"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureItem {
  icon: LucideIcon;
  label: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  mascotSrc: string;
  mascotAlt: string;
  features: FeatureItem[];
  /** When true, mascot appears on the right side */
  reversed?: boolean;
  /** Background class override */
  bgClass?: string;
  /** Accent color for icon backgrounds */
  accentColor?: "primary" | "accent" | "destructive";
}

const accentMap = {
  primary: {
    iconBg: "bg-primary/10",
    iconText: "text-primary",
    dot: "bg-primary",
  },
  accent: {
    iconBg: "bg-accent/10",
    iconText: "text-accent",
    dot: "bg-accent",
  },
  destructive: {
    iconBg: "bg-destructive/10",
    iconText: "text-destructive",
    dot: "bg-destructive",
  },
};

const FeatureSection = ({
  title,
  subtitle,
  mascotSrc,
  mascotAlt,
  features,
  reversed = false,
  bgClass = "bg-background",
  accentColor = "primary",
}: FeatureSectionProps) => {
  const colors = accentMap[accentColor];

  return (
    <section className={cn("section relative overflow-hidden", bgClass)}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={cn(
            "flex flex-col gap-10 md:gap-16 items-center",
            reversed ? "md:flex-row-reverse" : "md:flex-row"
          )}
        >
          {/* Mascot Side */}
          <motion.div
            className="w-full md:w-5/12 flex justify-center"
            initial={{ opacity: 0, x: reversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Soft glow behind mascot */}
              <div
                className={cn(
                  "absolute inset-0 rounded-full blur-3xl opacity-20 scale-75",
                  accentColor === "primary" && "bg-primary",
                  accentColor === "accent" && "bg-accent",
                  accentColor === "destructive" && "bg-destructive"
                )}
              />
              <Image
                src={mascotSrc}
                alt={mascotAlt}
                width={400}
                height={400}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-lg"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full md:w-7/12 space-y-8">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                {subtitle}
              </p>
            </motion.div>

            <div className="space-y-4">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    className="group flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-border hover:bg-card/60 transition-all duration-300"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <div
                      className={cn(
                        "shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                        colors.iconBg
                      )}
                    >
                      <Icon
                        className={cn("w-5 h-5", colors.iconText)}
                        strokeWidth={1.8}
                      />
                    </div>
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
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
