"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronsDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center ">
      {/* Subtle radial accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,oklch(0.67_0.29_341/0.04),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,oklch(0.89_0.17_171/0.04),transparent_50%)]" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center gap-6 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/assests/mascot/mascot-wave.png"
            alt="Xolace mascot"
            width={200}
            height={200}
            className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-lg"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here&apos;s how Xolace works.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-lg"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Less noise. More clarity. A space built around you.
        </motion.p>

        <motion.div
          className="mt-8"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronsDown className="w-6 h-6 text-muted-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
