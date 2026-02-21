"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {CTAButton} from "@/layout/cta-button";
import {ArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";

export function OurStoryCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const router = useRouter();

  return (
    <section
      className="relative section overflow-hidden text-center"
      style={{ background: "linear-gradient(160deg, #0a0614 0%, #12062a 40%, #0a1020 70%, #0a0614 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, color-mix(in oklch, var(--primary) 25%, transparent) 0%, color-mix(in oklch, var(--destructive) 12%, transparent) 40%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, color-mix(in oklch, var(--destructive) 10%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-[-0.04em] leading-[0.96] text-white">
            This is just{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--destructive))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              the beginning.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/55 font-light leading-relaxed max-w-2xl mx-auto">
            We&apos;re building something steady, thoughtful, and long-term.
            If any of this landed with you - you already belong here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <CTAButton
            icon={ArrowRight}
            iconPosition={"right"}
            variant= "destructive"
            size={"lg"}
            onClick={() => {router.push("https://xolace.app")}}
            label={"You Belong Here"}/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}