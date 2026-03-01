"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import InviteXolaceModal from "@/features/get-involved/events/invite-xolace-modal";
import {CTAButton} from "@/layout/cta-button";

const reasons = [
  { num:"01", text:"Your campus or community becomes part of the Xolace movement." },
  { num:"02", text:"We bring trained ambassadors, facilitators, and resources - you provide the space." },
  { num:"03", text:"All events are free. For everyone. No exceptions." },
];

const InviteXolace = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section bg-background relative overflow-hidden">
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] pointer-events-none"
        style={{background:"radial-gradient(ellipse at bottom left, hsl(var(--destructive)/0.07) 0%, transparent 65%)"}}/>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        <div ref={ref}>
          <motion.h2
            initial={{opacity:0,y:22}}
            animate={inView?{opacity:1,y:0}:{}}
            transition={{duration:0.8,ease:[0.16,1,0.3,1]}}
            className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-tight leading-[1.06] mb-6">
            Want Xolace at{" "}
            <span className="text-primary">your space?</span>
          </motion.h2>
          <motion.p
            initial={{opacity:0,y:16}}
            animate={inView?{opacity:1,y:0}:{}}
            transition={{duration:0.7,delay:0.12}}
            className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
            If you run a campus, NGO, community organisation, or workplace and want to bring a Xolace event to your people - reach out. We'll make it happen.
          </motion.p>

          <div className="border-t border-border space-y-0">
            {reasons.map((r, i) => {
              const rRef = useRef(null);
              const rInView = useInView(rRef, { once: true, margin: "-20px" });
              return (
                <motion.div
                  key={r.num}
                  ref={rRef}
                  initial={{opacity:0,y:14}}
                  animate={rInView?{opacity:1,y:0}:{}}
                  transition={{duration:0.6,delay:i*0.1}}
                  className="relative py-6 border-b border-border last:border-0 flex gap-6 items-start">
                  <motion.div
                    initial={{scaleX:0}}
                    animate={rInView?{scaleX:1}:{}}
                    transition={{duration:0.7,delay:i*0.1+0.1}}
                    className="absolute top-0 left-0 right-0 h-px bg-primary origin-left"/>
                  <span className="text-[0.6rem] font-bold tracking-[0.2em] text-muted-foreground/40 shrink-0 pt-1">{r.num}</span>
                  <p className="text-foreground text-base md:text-lg font-light leading-relaxed">{r.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{opacity:0,y:30}}
          animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:0.85,delay:0.2,ease:[0.16,1,0.3,1]}}
          className="relative p-8 md:p-10 bg-background"
          style={{background:"hsl(var(--background))"}}>

          <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40"/>
          <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/40"/>
          <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/40"/>
          <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40"/>

          <p className="text-[0.6rem] uppercase tracking-[0.25em] font-bold mb-6" style={{color:"hsl(var(--primary)/0.6)"}}>
            Invite Xolace
          </p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.1] mb-4">
            Let's bring the fire to you.
          </h3>
          <p className="text-muted-foreground text-base font-light leading-relaxed mb-8">
            Tell us where you are, who you serve, and when you'd like us - we'll take it from there. No complex process. Just a conversation.
          </p>

          <div className="space-y-3">
            <InviteXolaceModal trigger={
              <CTAButton
                label={"Submit an invite request"}
                onClick={() => ''}
                className={"w-full py-4"}
              />
            } />
            <CTAButton
              label={" Email us directly"}
              onClick={() => ''} // implementation
              variant={"outline"}
              className={"w-full py-4"}
            />
          </div>

          <p className="text-muted-foreground/40 text-xs text-center mt-6 font-light">
            We respond within 48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InviteXolace;