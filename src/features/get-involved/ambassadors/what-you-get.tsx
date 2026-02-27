"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const benefits = [
  {
    num: "01",
    heading: "A mission worth waking up for.",
    body: "This isn't a volunteer programme with a certificate at the end. It's active participation in something that's changing how people relate to mental health.",
    size: "large",   // spans more visual weight
    accent: "--primary",
  },
  {
    num: "02",
    heading: "Tools and training.",
    body: "Resources, mental health communication training, campaign materials, and a direct line to the core team. You don't show up empty-handed.",
    size: "small",
    accent: "--destructive",
  },
  {
    num: "03",
    heading: "A community of people like you.",
    body: "Ambassadors across campuses, cities, and countries - all carrying the same mission. The connections you make here are real and lasting.",
    size: "small",
    accent: "--primary",
  },
  {
    num: "04",
    heading: "Recognition that means something.",
    body: "Featured in our ambassador spotlight. Documented impact. A track record that speaks for itself - in interviews, applications, and life.",
    size: "large",
    accent: "--destructive",
  },
  {
    num: "05",
    heading: "Early access and influence.",
    body: "Early access to new features, a direct voice in how the platform evolves, and the kind of influence that only comes from being in from the start.",
    size: "small",
    accent: "--primary",
  },
];

// Ticker items - repeat to fill the marquee
const tickerItems = [
  "Mission", "Training", "Community", "Recognition", "Influence",
  "Mission", "Training", "Community", "Recognition", "Influence",
  "Mission", "Training", "Community", "Recognition", "Influence",
];

function BenefitCard({ b, i }: { b: typeof benefits[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col justify-between p-8 md:p-10 overflow-hidden group min-h-[260px] transition-colors duration-500"
      style={{ background: "hsl(var(--background))" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = `hsl(var(${b.accent})/0.04)`;
        const corners = (e.currentTarget as HTMLElement).querySelectorAll<HTMLElement>("[data-corner]");
        corners.forEach(c => { c.style.borderColor = `hsl(var(${b.accent})/0.6)`; });
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "hsl(var(--background))";
        const corners = (e.currentTarget as HTMLElement).querySelectorAll<HTMLElement>("[data-corner]");
        corners.forEach(c => { c.style.borderColor = "hsl(var(--border))"; });
      }}
    >
      {/* Corner brackets - top-left, top-right, bottom-left, bottom-right */}
      <span data-corner className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-border text-accent transition-colors duration-300" />
      <span data-corner className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-border text-accent transition-colors duration-300" />
      <span data-corner className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-border text-accent transition-colors duration-300" />
      <span data-corner className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-border text-accent transition-colors duration-300" />
      {/* Ghost number */}
      <span
        className="absolute -bottom-4 -right-2 text-[7rem] font-bold tracking-[-0.06em] leading-none text-accent select-none pointer-events-none transition-opacity duration-500 opacity-[0.04] group-hover:opacity-[0.09]"
        style={{ color: `hsl(var(${b.accent}))` }}
        aria-hidden
      >
        {b.num}
      </span>

      {/* Top - num + accent dot */}
      <div className="flex items-center justify-between mb-8">
        <span
          className="text-[0.6rem] font-bold tracking-[0.25em] uppercase"
          style={{ color: `hsl(var(${b.accent})/0.5)` }}
        >
          {b.num}
        </span>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
          className="w-2 h-2 rounded-full"
          style={{ background: `hsl(var(${b.accent}))` }}
        />
      </div>

      {/* Heading */}
      <div className="flex-1">
        <h3
          className="font-bold tracking-tight leading-[1.05] mb-4"
          style={{
            fontSize: b.size === "large" ? "clamp(1.5rem,3vw,2.4rem)" : "clamp(1.2rem,2vw,1.7rem)",
          }}
        >
          {b.heading}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
          {b.body}
        </p>
      </div>

      {/* Bottom accent bar - grows on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] origin-left"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
        style={{ width: "100%", background: `hsl(var(${b.accent})/0.4)` }}
      />
    </motion.div>
  );
}

const WhatYouGet = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section bg-muted relative overflow-hidden">

      {/* Destructive wash bottom-left */}
      <div aria-hidden className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at bottom left, hsl(var(--destructive)/0.07) 0%, transparent 65%)" }} />

      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto pb-10">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-tight leading-[1.06]"
          >
            What you get{" "}
            <span className="text-primary">from this.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="text-muted-foreground text-lg font-light leading-relaxed"
          >
            We&apos;re not asking for your time and giving you nothing back.
            Here&apos;s what being an ambassador actually means for you.
          </motion.p>
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      <div className="border-y border-border overflow-hidden py-4 bg-background/50">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap w-max"
        >
          {tickerItems.map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-[0.65rem] uppercase tracking-[0.3em] font-bold text-muted-foreground/70">
                {item}
              </span>
              <span
                className="w-1 h-1 rounded-full"
                style={{
                  background: i % 2 === 0
                    ? "hsl(var(--primary)/0.4)"
                    : "hsl(var(--destructive)/0.4)",
                }}
              />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-14">
        {/* Row 1: 1 large + 2 small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="md:col-span-2">
            <BenefitCard b={benefits[0]} i={0} />
          </div>
          <div>
            <BenefitCard b={benefits[1]} i={1} />
          </div>
        </div>

        {/* Row 2: 2 small + 1 large */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div>
            <BenefitCard b={benefits[2]} i={2} />
          </div>
          <div className="md:col-span-2">
            <BenefitCard b={benefits[3]} i={3} />
          </div>
        </div>

        {/* Row 3: full width */}
        <div className="mt-4 md:mt-6">
          <BenefitCard b={benefits[4]} i={4} />
        </div>
      </div>

    </section>
  );
};

export default WhatYouGet;