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
  cardStyles: CardStyle[];
  mascotY: MotionValue<number>;
  mascotRotate: MotionValue<number>;
}

/** Pure band-boundary math for a given card index */
function bandBounds(index: number) {
  const bandStart = index * BAND;
  const enterEnd = bandStart + BAND * 0.15;
  const holdEnd = bandStart + BAND * 0.85;
  const bandEnd = bandStart + BAND;
  return { bandStart, enterEnd, holdEnd, exitStart: holdEnd, bandEnd };
}

function computeY(v: number, index: number): number {
  const { bandStart, enterEnd, holdEnd, exitStart, bandEnd } = bandBounds(index);
  if (v < bandStart) return 80;
  if (v < enterEnd) return 80 * (1 - (v - bandStart) / (enterEnd - bandStart));
  if (v < holdEnd) return 0;
  if (v < bandEnd) return -60 * ((v - exitStart) / (bandEnd - exitStart));
  return -60;
}

function computeOpacity(v: number, index: number): number {
  const { bandStart, enterEnd, holdEnd, exitStart, bandEnd } = bandBounds(index);
  if (v < bandStart) return 0;
  if (v < enterEnd) return (v - bandStart) / (enterEnd - bandStart);
  if (v < holdEnd) return 1;
  if (v < bandEnd) return 1 - (v - exitStart) / (bandEnd - exitStart);
  return 0;
}

function computeScale(v: number, index: number): number {
  const { bandStart, enterEnd, holdEnd, exitStart, bandEnd } = bandBounds(index);
  if (v < bandStart) return 0.92;
  if (v < enterEnd) return 0.92 + 0.08 * ((v - bandStart) / (enterEnd - bandStart));
  if (v < holdEnd) return 1;
  if (v < bandEnd) return 1 - 0.05 * ((v - exitStart) / (bandEnd - exitStart));
  return 0.95;
}

function computeRotateZ(v: number, index: number): number {
  const { bandStart, enterEnd, holdEnd, exitStart, bandEnd } = bandBounds(index);
  if (v < bandStart) return -2;
  if (v < enterEnd) return -2 * (1 - (v - bandStart) / (enterEnd - bandStart));
  if (v < holdEnd) return 0;
  if (v < bandEnd) return 1 * ((v - exitStart) / (bandEnd - exitStart));
  return 1;
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

  // Precompute all card transforms at the top level (hooks must not be called conditionally)
  const cardStyles: CardStyle[] = [
    {
      y: useTransform(scrollYProgress, (v) => computeY(v, 0)),
      opacity: useTransform(scrollYProgress, (v) => computeOpacity(v, 0)),
      scale: useTransform(scrollYProgress, (v) => computeScale(v, 0)),
      rotateZ: useTransform(scrollYProgress, (v) => computeRotateZ(v, 0)),
    },
    {
      y: useTransform(scrollYProgress, (v) => computeY(v, 1)),
      opacity: useTransform(scrollYProgress, (v) => computeOpacity(v, 1)),
      scale: useTransform(scrollYProgress, (v) => computeScale(v, 1)),
      rotateZ: useTransform(scrollYProgress, (v) => computeRotateZ(v, 1)),
    },
    {
      y: useTransform(scrollYProgress, (v) => computeY(v, 2)),
      opacity: useTransform(scrollYProgress, (v) => computeOpacity(v, 2)),
      scale: useTransform(scrollYProgress, (v) => computeScale(v, 2)),
      rotateZ: useTransform(scrollYProgress, (v) => computeRotateZ(v, 2)),
    },
    {
      y: useTransform(scrollYProgress, (v) => computeY(v, 3)),
      opacity: useTransform(scrollYProgress, (v) => computeOpacity(v, 3)),
      scale: useTransform(scrollYProgress, (v) => computeScale(v, 3)),
      rotateZ: useTransform(scrollYProgress, (v) => computeRotateZ(v, 3)),
    },
  ];

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
    cardStyles,
    mascotY,
    mascotRotate,
  };
}
