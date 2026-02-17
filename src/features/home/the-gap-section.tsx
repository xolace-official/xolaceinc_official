"use client";

import { motion } from "motion/react";
import { DollarSign, Heart, X } from "lucide-react";

const TheGapSection = () => {
  return (
    <section id="the-gap" className="section overflow-hidden bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-header">There&apos;s a gap.</h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Between struggling alone and paying for therapy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-0 mb-20">
          <motion.div
            className="text-center md:text-right md:pr-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <X
              className="w-10 h-10 text-destructive mx-auto md:ml-auto md:mr-0 mb-4"
              strokeWidth={2.5}
            />
            <h3 className="text-2xl md:text-3xl font-bold text-destructive/80 mb-2">
              Social media
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Loud. Public. Performative.
              <br />
              Not safe for real struggles.
            </p>
          </motion.div>

          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="w-px flex-1 border-l-2 border-dashed border-border" />
            <span className="text-xs text-muted-foreground/50 tracking-[0.3em] uppercase">
              the gap
            </span>
            <div className="w-px flex-1 border-l-2 border-dashed border-border" />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <div className="flex-1 border-t-2 border-dashed border-border" />
            <span className="text-xs text-muted-foreground/50 tracking-[0.3em] uppercase">
              the gap
            </span>
            <div className="flex-1 border-t-2 border-dashed border-border" />
          </div>

          <motion.div
            className="text-center md:text-left md:pl-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <DollarSign
              className="w-10 h-10 text-destructive mx-auto md:mr-auto md:ml-0 mb-4"
              strokeWidth={2.5}
            />
            <h3 className="text-2xl md:text-3xl font-bold text-destructive/80 mb-2">
              Traditional therapy
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Helpful. But expensive,
              <br />
              hard to access, and intimidating.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Heart
            className="w-12 h-12 text-primary mx-auto mb-6"
            strokeWidth={1.5}
          />
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            You need something{" "}
            <span className="text-primary">in between</span>.
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground">
            Real support. Safe space. No judgment. Free to access.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TheGapSection;
