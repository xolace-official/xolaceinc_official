"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {CTAButton} from "@/layout/cta-button";
import {ArrowRight} from "lucide-react";

const CampfireCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section bg-foreground text-background relative overflow-hidden border-t border-border/50">

      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, hsl(var(--destructive)/0.09) 0%, hsl(var(--primary)/0.05) 45%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-4xl flex flex-col gap-10 mx-auto text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tighter leading-none mb-12"
        >
          Ready to light <br /> your{" "}
          <span className="text-primary italic font-serif">own?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <CTAButton
            label={"Join as a Camper"}
            icon={ArrowRight}
          />
          <CTAButton label={"Explore Campfires Now"} variant={"secondary"}/>
        </motion.div>

      </div>
    </section>
  );
};

export default CampfireCTA;