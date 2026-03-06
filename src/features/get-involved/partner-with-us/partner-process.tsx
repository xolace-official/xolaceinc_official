"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    heading: "Reach out.",
    body: "Submit a short inquiry — who you are, what you do, what you're hoping for. No lengthy forms. No gatekeeping.",
  },
  {
    num: "02",
    heading: "We talk.",
    body: "A real conversation within 48 hours. We listen before we pitch. We ask before we assume.",
  },
  {
    num: "03",
    heading: "Design together.",
    body: "We shape a partnership structure that serves both sides honestly. No off-the-shelf packages. No one-size-fits-all.",
  },
  {
    num: "04",
    heading: "Build and measure.",
    body: "We launch, report honestly, and grow or adapt based on what we learn. Long-term by default.",
  },
];

const StepItem = ({ step, i }: { step: typeof steps[0]; i: number }) => {
  const stepRef   = useRef(null);
  const stepInView = useInView(stepRef, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: 24 }}
      animate={stepInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="py-10 border-b border-border last:border-0 group"
    >
      <div className="flex gap-8 items-start">
        <span className="text-[3.5rem] md:text-[5rem] font-bold tracking-[-0.05em] leading-none text-primary/10 select-none shrink-0 group-hover:text-primary/20 transition-colors duration-300">
          {step.num}
        </span>
        <div className="pt-2">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug group-hover:text-primary transition-colors duration-300">
            {step.heading}
          </h3>
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mt-3">
            {step.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const PartnerProcess = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section bg-background text-foreground relative overflow-hidden">

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 50%, hsl(var(--primary)/0.07) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-32"
          >
            <h2
              className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-tight leading-[1.06]"
              style={{ color: "hsl(var(--background))" }}
            >
              From first message{" "}
              <span style={{ color: "hsl(var(--primary))" }}>to real impact.</span>
            </h2>
            <p
              className="text-lg font-light leading-relaxed mt-5 max-w-sm"
              style={{ color: "hsl(var(--background)/0.45)" }}
            >
              Four honest steps. No bureaucracy. No off-the-shelf packages.
            </p>
          </motion.div>

          {/* Right — steps */}
          <div
            className="space-y-0 border-t"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            {steps.map((step, i) => (
              <StepItem key={step.num} step={step} i={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerProcess;