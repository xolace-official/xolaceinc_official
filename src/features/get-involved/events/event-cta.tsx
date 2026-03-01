"use client";

import {motion, useInView} from "motion/react";
import {useRef} from "react";
import {CTAButton} from "@/layout/cta-button";
import {ArrowRight} from "lucide-react";
import InviteXolaceModal from "@/features/get-involved/events/invite-xolace-modal";

const EventCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-80px"});

  return (
    <section className="section bg-foreground text-background relative overflow-hidden border-t border-border/50">
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[35vh] pointer-events-none z-0"
        style={{background: "radial-gradient(ellipse at bottom, hsl(var(--destructive)/0.07) 0%, hsl(var(--primary)/0.04) 50%, transparent 75%)"}}/>

      <div
        ref={ref}
        className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{opacity: 0, scale: 0.95}}
          animate={inView ? {opacity: 1, scale: 1} : {}}
          transition={{duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
          className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tighter leading-none mb-6">
          Don't just follow<br/>the movement.{" "}
          <span className="text-primary italic font-serif">Join it.</span>
        </motion.h2>

        <motion.p
          initial={{opacity: 0}}
          animate={inView ? {opacity: 1} : {}}
          transition={{delay: 0.35, duration: 0.7}}
          className="text-background/55 text-lg font-light leading-relaxed max-w-md mx-auto mb-12">
          Find an event near you, register your spot, or bring Xolace to your community.
        </motion.p>

        <motion.div
          initial={{opacity: 0, y: 12}}
          animate={inView ? {opacity: 1, y: 0} : {}}
          transition={{delay: 0.5, duration: 0.6}}
          className="flex flex-col sm:flex-row gap-4 justify-center">

          <CTAButton
            label={"Open Xolace App"}
            icon={ArrowRight}
            onClick={() => window.open("https://xolace.app", "_blank")}
          />
          <InviteXolaceModal trigger={
            <CTAButton
              variant={"secondary"}
              label={" Invite us to your space"}
              onClick={() => ''}
            />
          } />

        </motion.div>

      </div>
    </section>
  );
};

export default EventCTA;