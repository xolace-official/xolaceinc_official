"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import PartnerFormModal from "@/features/get-involved/partner-with-us/partner-form-modal";
import {CTAButton} from "@/layout/cta-button";

const PartnerCTA = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section relative overflow-hidden">

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, hsl(var(--primary)/0.12) 0%, transparent 65%)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.028]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">

        {/* Top eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[0.6rem] uppercase tracking-[0.35em] font-bold mb-12 flex items-center gap-3"
          style={{ color: "hsl(var(--primary)/0.7)" }}
        >
          <span className="w-6 h-px" style={{ background: "hsl(var(--primary)/0.6)" }} />
          Ready to begin
        </motion.p>

        {/* Giant headline — staggered slide-up, your PartnerHero pattern */}
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tight leading-[0.95]"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              color: "hsl(var(--background))",
            }}
          >
            Let&apos;s <span className={"text-primary"}>build</span>
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tight leading-[0.95]"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              color: "hsl(var(--primary))",
            }}
          >
            this <span className={""}>together.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pt-10"
             style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-lg font-light leading-relaxed max-w-sm"
            style={{ color: "hsl(var(--background)/0.45)" }}
          >
            One conversation. No pitch decks. No pressure. Just two organisations figuring out if they can do more good together.
          </motion.p>

          {/* Right — CTAs + reassurance */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col gap-4 md:items-end"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <PartnerFormModal
                trigger={
                    <CTAButton
                      label={"Start the Conversation"}
                      icon={ArrowRight}
                    />
                }
              />

              <CTAButton
                label={"Email us directly"}
                icon={Mail}
                iconPosition={"left"}
                variant={"outline"}
                onClick={() => ""}
              />
            </div>

            <p
              className="text-xs font-light text-destructive"
            >
              We respond within 48 hours. Always.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;