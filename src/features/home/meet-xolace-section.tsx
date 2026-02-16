"use client";

import { motion } from "motion/react";
import { Flame, Heart, MessageCircle, Shield } from "lucide-react";

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
      className="section bg-linear-to-b from-background to-muted/20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-20"
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

        <div className="relative max-w-3xl mx-auto">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 rounded-full bg-linear-to-b from-primary/40 via-primary to-primary/40" />

          <div className="md:pl-12 divide-y divide-border">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="py-8 md:py-10"
                >
                  <div className="flex items-start gap-5 md:gap-8">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetXolaceSection;
