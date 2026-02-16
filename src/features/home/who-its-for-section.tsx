"use client";

import { Compass, GraduationCap, Heart, User, Users } from "lucide-react";
import { motion } from "motion/react";

const audiences = [
  {
    icon: GraduationCap,
    label: "Students",
    insight: "When the pressure feels too heavy to carry alone",
  },
  {
    icon: Heart,
    label: "Young adults",
    insight: "When you're building a life and questioning everything",
  },
  {
    icon: Users,
    label: "Those navigating loss",
    insight: "When grief needs a witness, not a solution",
  },
  {
    icon: Compass,
    label: "Seekers",
    insight: "When the old path no longer fits who you're becoming",
  },
];

const offsets = ["md:ml-0", "md:ml-16", "md:ml-32", "md:ml-48"] as const;

const WhoItsForSection = () => {
  return (
    <section
      id="who-its-for"
      className="section bg-linear-to-b from-background via-muted/10 to-background"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            If you&apos;ve ever felt{" "}
            <span className="text-primary">unseen</span>,
            <br />
            this is your space.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-3xl mx-auto font-light leading-relaxed">
            Xolace exists for the moments when everything feels too much
            &mdash; and for the quiet courage it takes to reach out.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12 md:space-y-8">
          {audiences.map((audience, i) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={audience.label}
                className={offsets[i]}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <Icon
                    className="w-6 h-6 md:w-7 md:h-7 text-primary shrink-0 mt-1"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {audience.label}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-1">
                      {audience.insight}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-20 md:mt-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <User
            className="w-10 h-10 md:w-14 md:h-14 text-primary mx-auto mb-5"
            strokeWidth={1.5}
          />
          <h3 className="text-3xl md:text-5xl font-bold mb-3">You</h3>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Exactly as you are, right now, in this moment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
