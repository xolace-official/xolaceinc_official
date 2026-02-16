"use client";

import { motion } from "motion/react";

const stats = [
  {
    value: "$200+",
    label: "Per therapy session",
    description: "Too expensive for most",
  },
  {
    value: "3-6",
    label: "Months wait time",
    description: "When you need help now",
  },
  {
    value: "70%",
    label: "Never get help",
    description: "Because of stigma & cost",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section overflow-hidden bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-header text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Mental health care is{" "}
          <span className="text-destructive">broken</span>.
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 rounded-full bg-linear-to-b from-destructive/40 via-destructive to-destructive/40" />

          <div className="md:pl-12 divide-y divide-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="py-8 md:py-10"
              >
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="text-6xl md:text-8xl font-bold text-destructive shrink-0">
                    {stat.value}
                  </span>
                  <div>
                    <p className="text-lg md:text-xl font-semibold">
                      {stat.label}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground text-center mt-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          But what if support didn't have to be{" "}
          <span className="text-primary font-medium">this hard</span>?
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
