"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Globe, Users, TrendingUp, Zap, Shield, BookOpen } from "lucide-react";

const whatWeOffer = [
  {
    icon: Globe,
    title: "Community Reach",
    description: "Direct access to thousands of young people, students, and community members across Ghana and beyond.",
  },
  {
    icon: Users,
    title: "Ambassador Network",
    description: "A growing force of trained ambassadors on campuses and in communities — your brand travels with them.",
  },
  {
    icon: TrendingUp,
    title: "Impact Reporting",
    description: "Clear, honest reporting on what your partnership achieves — for your stakeholders, board, or ESG documentation.",
  },
  {
    icon: Zap,
    title: "Co-Creation",
    description: "We don't do passive logos on a website. Real partnerships mean building campaigns, events, and content together.",
  },
  {
    icon: Shield,
    title: "Mission Alignment",
    description: "Every partner is reviewed for values alignment. This protects the community — and protects your reputation.",
  },
  {
    icon: BookOpen,
    title: "Shared Learning",
    description: "We share anonymised insights, community trends, and research to help partners understand the landscape.",
  },
];

const PartnerOffer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section bg-muted relative overflow-hidden">
      <div aria-hidden className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at top right, hsl(var(--primary)/0.06) 0%, transparent 65%)" }} />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-tight leading-[1.06]"
            >
              More than a{" "}
              <span className="text-primary">platform mention.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-muted-foreground text-lg font-light leading-relaxed"
          >
            Xolace partnerships are designed to create real, measurable value for both sides. Here's what you can count on.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {whatWeOffer.map((item, i) => {
            const Icon = item.icon;
            const tileRef = useRef(null);
            const tileInView = useInView(tileRef, { once: true, margin: "-40px" });
            return (
              <motion.div
                key={i}
                ref={tileRef}
                initial={{ opacity: 0, y: 24 }}
                animate={tileInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-muted p-8 md:p-10 group hover:bg-background transition-colors duration-300"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={tileInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08 + 0.2 }}
                  className="absolute top-0 left-0 right-0 h-[2px] origin-left"
                  style={{ background: i % 2 === 0 ? "hsl(var(--primary)/0.6)" : "hsl(var(--destructive)/0.5)" }}
                />
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-6"
                  style={{ background: i % 2 === 0 ? "hsl(var(--primary)/0.1)" : "hsl(var(--destructive)/0.1)" }}
                >
                  <Icon size={18} style={{ color: i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--destructive))" }} />
                </div>
                <h3 className="font-bold text-base tracking-tight mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerOffer;