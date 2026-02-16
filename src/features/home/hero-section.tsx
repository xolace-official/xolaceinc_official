"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 md:px-8"
    >
      <div className="w-full max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          You don&apos;t have to
          <br />
          <span className="text-primary">struggle alone.</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Find your people. Share your story. Feel supported.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown
            className="w-6 h-6 text-muted-foreground/40"
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
