"use client";

import { Flame, Heart, MessageCircle, Shield } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: MessageCircle,
    title: "Express yourself",
    description:
      "Share your story. Anonymously or not. Temporarily or forever. Your choice.",
  },
  {
    icon: Flame,
    title: "Join Campfires",
    description:
      "Small groups focused on what matters to you. Anxiety. Grief. Life changes.",
  },
  {
    icon: Heart,
    title: "Get real support",
    description: "From people who understand. And professionals who care.",
  },
  {
    icon: Shield,
    title: "Stay safe",
    description:
      "Moderation. Privacy. Community guidelines. We've got your back.",
  },
];

const MeetXolaceSection = () => {
  return (
    <section
      id="meet-xolace"
      className="section overflow-hidden bg-linear-to-b from-background to-muted/20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold">Meet Xolace.</h2>
          <p className="text-xl md:text-2xl text-primary font-semibold mt-4">
            Your bridge to better mental health.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16 md:space-y-0">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={feature.title}
                className={`relative md:py-14 ${
                  isEven
                    ? "md:mr-auto md:pr-[50%]"
                    : "md:ml-auto md:pl-[50%]"
                }`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <div className="relative">
                  <Icon
                    className="absolute -top-2 right-0 w-20 h-20 md:w-28 md:h-28 text-primary/[0.06]"
                    strokeWidth={1}
                  />

                  <div
                    className={`relative ${isEven ? "md:text-left" : "md:text-right"}`}
                  >
                    <Icon
                      className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-5"
                      strokeWidth={1.5}
                      style={
                        !isEven
                          ? { marginLeft: "auto", marginRight: 0 }
                          : undefined
                      }
                    />
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MeetXolaceSection;
