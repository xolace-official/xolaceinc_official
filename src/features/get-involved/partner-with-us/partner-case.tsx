"use client";

import { motion } from "motion/react";

const pillars = [
  {
    value: "Not",
    highlight: "a logo.",
    body: "Co-ownership of a movement that will define mental health in Africa for a generation.",
  },
  {
    value: "Not",
    highlight: "a campaign.",
    body: "Partners build the infrastructure that carries support to people before crisis arrives.",
  },
  {
    value: "Not",
    highlight: "charity.",
    body: "We reach the communities that need help most through people they already trust.",
  },
];

const PartnerCase = () => {
  return (
    <section id="partner-case" className="section overflow-hidden bg-muted">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.h2
          className="section-header text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          This is{" "}
          <span className="text-primary">different</span>.
        </motion.h2>

        <motion.p
          className="text-xl text-muted-foreground text-center max-w-xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Partnering with Xolace isn&apos;t a transaction. It&apos;s a position — on the right side of a crisis that&apos;s defining a generation.
        </motion.p>

        {/* Pillars — same left-rule pattern as ProblemSection */}
        <div className="relative max-w-3xl mx-auto">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 rounded-full bg-linear-to-b from-primary/40 via-primary to-primary/40" />

          <div className="md:pl-12 divide-y divide-border">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                className="py-8 md:py-10"
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <div className="shrink-0">
                    <span className="text-5xl md:text-7xl font-bold text-foreground/10">
                      {p.value}
                    </span>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {p.highlight}
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing line — same pattern as ProblemSection's bottom line */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground text-center mt-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your name attached to a{" "}
          <span className="text-primary font-medium">movement</span>
          , not just a campaign.
        </motion.p>

      </div>
    </section>
  );
};

export default PartnerCase;