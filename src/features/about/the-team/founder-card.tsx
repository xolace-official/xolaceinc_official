'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { founders } from "@/components/pages/about/the-team";
import { AvatarPlaceholder } from "@/features/about/the-team/avatar-placeholder";

export function FounderCard({ founder, i }: { founder: typeof founders[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = i % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-xs rounded-2xl overflow-hidden group bg-card"
    >
      <div
        className={`relative h-72 lg:h-auto min-h-[360px] overflow-hidden bg-muted ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <AvatarPlaceholder
          name={founder.name}
          index={founder.index}
          imgSrc={founder.imgSrc}
        />

        {/* Gradient overlay fading into content pane — uses bg-card color */}
        <div
          className={`absolute inset-0 pointer-events-none opacity-60 ${
            isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
          }`}
          style={{
            backgroundImage: `linear-gradient(${
              isEven ? "to right" : "to left"
            }, transparent, var(--card))`,
          }}
        />

        <div className="absolute bottom-6 left-6 flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: "var(--primary)" }}
          />
          <span className="text-muted-foreground text-xs tracking-widest uppercase font-mono">
            {founder.origin}
          </span>
        </div>
      </div>

      {/* Content pane */}
      <div
        className={`relative flex flex-col justify-between p-8 md:p-12 lg:p-14 ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {/* Top: index + role */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-xs text-muted-foreground font-mono tracking-[0.3em] uppercase mb-2">
              {founder.role}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-card-foreground">
              {founder.name}
            </h2>
          </div>
          <span
            className="text-[5rem] font-bold leading-none tracking-tighter opacity-[0.06] select-none hidden md:block text-primary"
          >
            {founder.index}
          </span>
        </div>

        <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-8 flex-1">
          {founder.bio}
        </p>

        <div className="border-l-2 pl-5 mb-8" style={{ borderColor: "var(--primary)" }}>
          <p
            className="text-sm md:text-base italic leading-relaxed"
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--primary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {founder.belief}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {founder.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground font-mono tracking-wide bg-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}