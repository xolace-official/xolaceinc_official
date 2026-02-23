"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Play } from "lucide-react";
import { Reveal } from "@/features/about/our-story/reveal";

export function TheRealization() {
  const videoRef = useRef(null);
  const videoInView = useInView(videoRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-background section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column — Narrative text */}
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                The Realization
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-[clamp(1.6rem,3.5vw,3rem)] font-bold tracking-tight leading-[1.15] text-foreground">
                &ldquo;It started with a conversation I couldn&apos;t
                forget.&rdquo;
              </p>
            </Reveal>

            <Reveal delay={0.24} className="mt-8">
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                A friend told me they were fine. Everyone believed them. But
                something felt off. They were smiling in every post, present in
                every group chat&nbsp;&mdash; and quietly falling apart.
              </p>
            </Reveal>

            <Reveal delay={0.36} className="mt-10">
              <p className="text-[clamp(1.6rem,3.5vw,3rem)] font-bold tracking-tight leading-[1.15] text-foreground">
                &ldquo;That&apos;s when we realized: the internet had space for
                everything except honesty.&rdquo;
              </p>
            </Reveal>

            <Reveal delay={0.48} className="mt-8">
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                Not because people didn&apos;t care. But because there
                wasn&apos;t a space built for it. The tools we had were designed
                for performance&nbsp;&mdash; not for processing.
              </p>
            </Reveal>

            {/* Attribution */}
            <Reveal delay={0.6} className="mt-12">
              <div className="w-12 h-px bg-border mb-4" />
              <p className="text-sm text-muted-foreground">
                &mdash; Founder Name, Co-founder
              </p>
            </Reveal>
          </div>

          {/* Right column — Video placeholder (sticky on desktop) */}
          <div className="order-first lg:order-none">
            <motion.div
              ref={videoRef}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={videoInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-24"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-muted flex flex-col items-center justify-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/60">
                  <Play className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Founder video coming soon
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
