import { Reveal } from "@/features/about/our-story/reveal";

export function WhatWeObserved() {
  return (
    <section className="relative overflow-hidden bg-background section">
      {/* Abstract gradient shapes */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, var(--primary), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-32 h-[250px] w-[250px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, var(--accent), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 right-1/4 h-[200px] w-[200px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, var(--ring), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {/* Eyebrow + Headline */}
          <Reveal delay={0}>
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              What We Observed
            </p>
            <h2 className="text-[clamp(1.6rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-tight">
              We stepped back and looked at the patterns.
            </h2>
          </Reveal>

          {/* Observations */}
          <div className="mt-16">
            <Reveal delay={0.1}>
              <div className="border-b border-border py-10">
                <p className="text-xl font-semibold text-foreground md:text-2xl">
                  The internet amplifies what looks good.
                </p>
                <p className="mt-3 text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                  Feeds reward confidence, aesthetics, certainty. There&rsquo;s
                  no algorithm for &ldquo;I don&rsquo;t know how I feel
                  today.&rdquo; Vulnerability doesn&rsquo;t trend.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border-b border-border py-10">
                <p className="text-xl font-semibold text-foreground md:text-2xl">
                  Vulnerability feels risky.
                </p>
                <p className="mt-3 text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                  Sharing something real means risking judgement. So most people
                  don&rsquo;t. They perform wellness instead of practicing it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="py-10">
                <p className="text-xl font-semibold text-foreground md:text-2xl">
                  Support often arrives late&mdash;if it arrives at all.
                </p>
                <p className="mt-3 text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                  Therapy is powerful but gated. Waitlists, costs, stigma. By
                  the time help is available, people have already learned to
                  carry it alone.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Closing anchor */}
          <Reveal delay={0.15}>
            <div className="mt-16">
              <p className="text-[clamp(1.6rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-tight">
                Not because people don&rsquo;t care.
              </p>
              <p className="text-[clamp(1.6rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-tight">
                Because{" "}
                <span className="text-primary">
                  there isn&rsquo;t a space built for it.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
