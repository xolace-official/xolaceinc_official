"use client";

import { useEffect, useState } from "react";
import {
  MessageSquareText,
  EyeOff,
  Users,
  Flame,
} from "lucide-react";
import { useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { CoreFeaturesCarousel } from "@/features/how-it-works/core-features-carousel";
import { CoreFeaturesStack } from "@/features/how-it-works/core-features-stack";

export interface FeatureData {
  icon: LucideIcon;
  label: string;
  description: string;
}

export const features: FeatureData[] = [
  {
    icon: MessageSquareText,
    label: "Posts",
    description:
      "Share what's on your mind — permanently or as a 24-hour thought that disappears. Your pace, your choice.",
  },
  {
    icon: EyeOff,
    label: "Anonymous Expression",
    description:
      "No profile pressure. Say what you need to without your name attached.",
  },
  {
    icon: Users,
    label: "Community Interactions",
    description:
      "React, comment, and support others. Real connection without the performance.",
  },
  {
    icon: Flame,
    label: "Campfires",
    description:
      "Small, focused groups around shared experiences — grief, anxiety, life changes, and more.",
  },
];

// Feature accent colors: Posts=primary (magenta), Anonymous=accent (teal),
// Community=destructive (orange), Campfires=chart-2 (purple)
export const featureColors = [
  "var(--primary)",
  "var(--accent)",
  "var(--destructive)",
  "var(--chart-2)",
];

const CoreFeaturesSection = () => {
  const reducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Use stack for mobile or reduced motion
  if (!isDesktop || reducedMotion) {
    return (
      <CoreFeaturesStack features={features} featureColors={featureColors} />
    );
  }

  return (
    <CoreFeaturesCarousel features={features} featureColors={featureColors} />
  );
};

export default CoreFeaturesSection;
