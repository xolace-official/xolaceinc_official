"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {CTAButton} from "@/layout/cta-button";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";

const AmbassadorCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section bg-background text-foreground relative overflow-hidden border-t border-border/50">

      {/* Glow — z-0 */}
      <div aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[35vh] pointer-events-none z-0"
           style={{ background: "radial-gradient(ellipse at bottom, hsl(var(--destructive)/0.07) 0%, hsl(var(--primary)/0.04) 50%, transparent 75%)" }} />

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tighter leading-none mb-6"
        >
          The movement
          <br />
          needs{" "}
          <span className="text-primary italic font-serif">you.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-lg font-light leading-relaxed max-w-md mx-auto mb-12"
        >
          Browse our current ambassadors, see where they&apos;re making impact,
          and apply to join them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <CTAButton
            label={"Meet the ambassadors"}
            icon={ArrowRight}
            onClick={() => ''}
          />
          <CTAButton
            onClick={() => ''}
            label={"Apply now"}
            variant={"secondary"}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AmbassadorCTA;