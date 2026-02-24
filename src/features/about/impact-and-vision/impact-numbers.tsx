"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: 1,
    suffix: "bn+",
    label: "people. That's the scale of our ambition. We're just getting started.",
    angle: 45, // top-right
  },
  {
    value: 2,
    suffix: "%",
    label: "of health budgets go to mental health. Two percent.",
    angle: 225, // bottom-left
  },
  {
    value: 970,
    suffix: "M+",
    label: "people living with a mental health condition right now.",
    angle:  135, // top-left
  },
  {
    value: 75,
    suffix: "%",
    label: "receive zero treatment. Cost, stigma, access the walls.",
    angle: 45, // top-right
  },
];

type Line = { angle: number; length: number; id: number };

function generateLines(count: number, startAngle: number, endAngle: number): Line[] {
  return Array.from({ length: count }).map((_, i) => {
    const t = i / (count - 1);
    return {
      angle: startAngle + (endAngle - startAngle) * t,
      length: 160 + t * 60,
      id: i,
    };
  });
}

const QUADRANTS = {
  tl: generateLines(55, 180, 270),
  tr: generateLines(55, 270, 360),
  bl: generateLines(55, 90, 180),
  br: generateLines(55, 0, 90),
};

function RadialVisual({ active }: { active: string | null }) {
  const cx = 600;
  const cy = 400;

  const isActive = (q: string) => active === q;
  const anyActive = active !== null;

  const renderLines = (lines: Line[], q: string, baseColor: string) => (
    <>
      {lines.map((line) => {
        const rad = (line.angle * Math.PI) / 180;
        const len = isActive(q) ? line.length * 1.45 : line.length;
        const x2 = cx + Math.cos(rad) * len;
        const y2 = cy + Math.sin(rad) * len;
        return (
          <motion.g key={`${q}-${line.id}`}>
            <motion.line
              x1={cx} y1={cy} x2={x2} y2={y2}
              stroke={baseColor}
              strokeLinecap="round"
              animate={{
                opacity: anyActive ? (isActive(q) ? 0.9 : 0.08) : 0.22,
                strokeWidth: isActive(q) ? 1.5 : 0.8,
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
            <motion.circle
              cx={x2} cy={y2} r={isActive(q) ? 2.5 : 1.5}
              fill={baseColor}
              animate={{ opacity: anyActive ? (isActive(q) ? 1 : 0.06) : 0.2 }}
              transition={{ duration: 0.45 }}
            />
          </motion.g>
        );
      })}
    </>
  );

  return (
    <svg
      viewBox="0 0 1200 800"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Center pulse */}
      <motion.circle
        cx={cx} cy={cy} r={anyActive ? 120 : 60}
        fill="url(#centerGlow)"
        animate={{ r: anyActive ? 150 : 70, opacity: anyActive ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
      />

      {renderLines(QUADRANTS.tl, "tl", "hsl(var(--primary))")}
      {renderLines(QUADRANTS.tr, "tr", "hsl(var(--destructive))")}
      {renderLines(QUADRANTS.bl, "bl", "hsl(var(--destructive))")}
      {renderLines(QUADRANTS.br, "br", "hsl(var(--primary))")}

      <circle cx={cx} cy={cy} r={5} fill="hsl(var(--primary))" opacity={0.8} />
    </svg>
  );
}

const ImpactNumbers = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [active, setActive] = useState<string | null>(null);

  // Position labels at corners relative to the visual center
  const positions = [
    { q: "tl", label: stats[2], style: "top-[5%] left-[5%] text-left"  },
    { q: "tr", label: stats[3], style: "top-[5%] right-[5%] text-right" },
    { q: "bl", label: stats[1], style: "bottom-[5%] left-[5%] text-left"  },
    { q: "br", label: stats[0], style: "bottom-[5%] right-[5%] text-right" },
  ];

  return (
    <section ref={sectionRef} className="section bg-muted relative overflow-hidden">

      {/* Half-circle decoration — top right */}
      <div
        aria-hidden
        className="absolute -top-px right-0 w-[380px] h-[190px] pointer-events-none"
        style={{
          background: "hsl(var(--primary)/0.07)",
          borderRadius: "0 0 0 380px",
          borderBottom: "1px solid hsl(var(--primary)/0.14)",
          borderLeft: "1px solid hsl(var(--primary)/0.14)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-px right-0 w-[220px] h-[110px] pointer-events-none"
        style={{
          borderRadius: "0 0 0 220px",
          borderBottom: "1px solid hsl(var(--primary)/0.2)",
          borderLeft: "1px solid hsl(var(--primary)/0.2)",
        }}
      />

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1.4rem,2.8vw,2.4rem)] font-bold tracking-tight leading-[1.15] text-foreground max-w-xl mb-0"
        >
          The problem is not small.{" "}
          <span className="text-muted-foreground font-light">
            Neither is our intention.
          </span>
        </motion.h2>

        {/* Radial visual container */}
        <div className="relative w-full h-[520px] md:h-[620px] mt-4">

          {/* SVG radial lines */}
          <RadialVisual active={active} />

          {/* Corner stat labels — hover activates their quadrant */}
          {positions.map(({ q, label, style }) => (
            <motion.div
              key={q}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className={cn("absolute z-10 max-w-[220px] cursor-default", style)}
              onMouseEnter={() => setActive(q)}
              onMouseLeave={() => setActive(null)}
            >
              <motion.p
                animate={{
                  opacity: active === null || active === q ? 1 : 0.3,
                  scale: active === q ? 1.04 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={cn("text-[clamp(4rem,7.5vw,7rem)] font-bold tracking-[-0.04em] leading-none", q === "tl" || q === "br" ? "text-primary" : "text-destructive")}
              >
                {label.value}{label.suffix}
              </motion.p>
              <motion.p
                animate={{ opacity: active === null || active === q ? 1 : 0.25 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground text-xs md:text-sm font-light leading-snug mt-1 max-w-[180px]"
              >
                {label.label}
              </motion.p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;