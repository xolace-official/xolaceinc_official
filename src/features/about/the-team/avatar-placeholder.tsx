"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface AvatarPlaceholderProps {
  name: string;
  index: string;
  imgSrc?: string | null;
}

export function AvatarPlaceholder({ name, index, imgSrc }: AvatarPlaceholderProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");


  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Rotating conic gradient bg */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
        style={{
          background:
            index === "01"
              ? "conic-gradient(from 0deg at 40% 60%, var(--primary), var(--accent), var(--primary))"
              : "conic-gradient(from 180deg at 60% 40%, var(--accent), var(--primary), var(--accent))",
          opacity: 0.4,
        }}
      >

      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 25%, var(--card) 100%)",
        }}
      />

      {
        imgSrc ? (
          <Image
            src={imgSrc}
            alt={name}
            height={50}
            width={50}
            className="w-[350px] h-[350px] rounded-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <span
            className="relative z-10 text-5xl md:text-7xl font-bold tracking-tight select-none"
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
        {initials}
      </span>
        )
      }
    </div>
  );
}