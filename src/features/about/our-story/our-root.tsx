"use client";

import { ImageIcon } from "lucide-react";
import { Reveal } from "@/features/about/our-story/reveal";

export function OurRoot() {
  return (
    <section className="bg-background section mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-center">
        <Reveal>
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Our Root
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Born in Ghana.
              <br />
              <span className="text-muted-foreground font-light">
                Built for the world.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              Xolace began in Koforidua &mdash; where conversations about mental
              health are still growing, where community runs deep, but safe
              digital spaces are rare. We built this because we lived in that
              gap and always knew we weren&apos;t alone in it.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              No funding. No playbook. Just a belief that support should not
              depend on geography &mdash; and a community-first approach that
              started with exhibitions, ambassadors, and people who showed up
              before there was anything to show.
            </p>
            <p className="text-lg md:text-xl font-semibold leading-relaxed">
              The need for safe community doesn&apos;t respect borders. Neither
              do we.
            </p>
            <div className="inline-flex items-center gap-2.5 border border-border rounded-full px-5 py-2.5 mt-2">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "var(--primary)" }}
              />
              <span className="text-xs tracking-wide text-muted-foreground">
                Koforidua, Eastern Region, Ghana 🇬🇭
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted flex flex-col items-center justify-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/60">
              <ImageIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Team photo coming soon
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
