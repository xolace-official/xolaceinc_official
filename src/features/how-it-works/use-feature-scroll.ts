"use client";

import { type RefObject } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { useState } from "react";

const FEATURE_COUNT = 4;
const BAND = 1 / FEATURE_COUNT; // 0.25 per feature

interface CardStyle {
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  rotateZ: MotionValue<number>;
}

interface UseFeatureScrollReturn {
  scrollYProgress: MotionValue<number>;
  activeIndex: number;
  getCardStyle: (index: number) => CardStyle;
  mascotY: MotionValue<number>;
  mascotRotate: MotionValue<number>;
}

export function useFeatureScroll(
  containerRef: RefObject<HTMLDivElement | null>
): UseFeatureScrollReturn {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      FEATURE_COUNT - 1,
      Math.floor(latest * FEATURE_COUNT)
    );
    setActiveIndex(idx);
  });

  function getCardStyle(index: number): CardStyle {
    const bandStart = index * BAND;
    const bandEnd = bandStart + BAND;

    // Enter: first 15% of band
    const enterStart = bandStart;
    const enterEnd = bandStart + BAND * 0.15;

    // Hold: 15%–85% of band
    const holdStart = enterEnd;
    const holdEnd = bandStart + BAND * 0.85;

    // Exit: last 15% of band
    const exitStart = holdEnd;
    const exitEnd = bandEnd;

    const y = useTransform(scrollYProgress, (v) => {
      if (v < enterStart) return 80;
      if (v < enterEnd) {
        const t = (v - enterStart) / (enterEnd - enterStart);
        return 80 * (1 - t);
      }
      if (v < holdEnd) return 0;
      if (v < exitEnd) {
        const t = (v - exitStart) / (exitEnd - exitStart);
        return -60 * t;
      }
      return -60;
    });

    const opacity = useTransform(scrollYProgress, (v) => {
      if (v < enterStart) return 0;
      if (v < enterEnd) {
        return (v - enterStart) / (enterEnd - enterStart);
      }
      if (v < holdEnd) return 1;
      if (v < exitEnd) {
        return 1 - (v - exitStart) / (exitEnd - exitStart);
      }
      return 0;
    });

    const scale = useTransform(scrollYProgress, (v) => {
      if (v < enterStart) return 0.92;
      if (v < enterEnd) {
        const t = (v - enterStart) / (enterEnd - enterStart);
        return 0.92 + 0.08 * t;
      }
      if (v < holdEnd) return 1;
      if (v < exitEnd) {
        const t = (v - exitStart) / (exitEnd - exitStart);
        return 1 - 0.05 * t;
      }
      return 0.95;
    });

    const rotateZ = useTransform(scrollYProgress, (v) => {
      if (v < enterStart) return -2;
      if (v < enterEnd) {
        const t = (v - enterStart) / (enterEnd - enterStart);
        return -2 * (1 - t);
      }
      if (v < holdEnd) return 0;
      if (v < exitEnd) {
        const t = (v - exitStart) / (exitEnd - exitStart);
        return 1 * t;
      }
      return 1;
    });

    return { y, opacity, scale, rotateZ };
  }

  // Mascot spring transforms — bouncy reaction keyed to active index transitions
  const rawMascotY = useTransform(scrollYProgress, (v) => {
    // Create a bounce at each transition boundary
    const fractional = (v * FEATURE_COUNT) % 1;
    // Pulse near boundaries (first/last 10% of each band)
    if (fractional < 0.1) return -8 * (1 - fractional / 0.1);
    if (fractional > 0.9) return -8 * ((fractional - 0.9) / 0.1);
    return 0;
  });

  const rawMascotRotate = useTransform(scrollYProgress, (v) => {
    const fractional = (v * FEATURE_COUNT) % 1;
    if (fractional < 0.1) return 3 * (1 - fractional / 0.1);
    if (fractional > 0.9) return -3 * ((fractional - 0.9) / 0.1);
    return 0;
  });

  const mascotY = useSpring(rawMascotY, { stiffness: 300, damping: 15 });
  const mascotRotate = useSpring(rawMascotRotate, {
    stiffness: 300,
    damping: 15,
  });

  return {
    scrollYProgress,
    activeIndex,
    getCardStyle,
    mascotY,
    mascotRotate,
  };
}
