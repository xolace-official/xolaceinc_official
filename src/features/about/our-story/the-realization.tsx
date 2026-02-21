"use client";


import {Reveal} from "@/features/about/our-story/reveal";

export function TheRealization() {
  return (
    <section className="bg-background section">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-[clamp(1.6rem,3.5vw,3rem)] font-bold tracking-tight leading-[1.15] max-w-3xl text-foreground">
            Most people dealing with anxiety, grief, or identity questions
            aren&apos;t looking for a diagnosis. They just need somewhere
            safe to put it down for a moment.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            We saw this everywhere - on campuses, in neighborhoods, in group chats that
            went quiet. People carrying real weight, not dramatically, but steadily,
            day after day. Not because they didn&apos;t want help. Because the help
            that existed was never built for them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}