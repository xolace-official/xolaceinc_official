"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/features/about/the-team/section-header";
import { FounderCard } from "@/features/about/the-team/founder-card";

export const founders = [
  {
    index: "01",
    name: "Nathaniel Adama Edem",
    role: "Co-founder & CEO",
    origin: "Accra, Ghana",
    bio: "Nathaniel has always believed that the most important problems are the ones people are too ashamed to name out loud. He built Xolace to change that — starting from Ghana, reaching everywhere. His leadership is defined by one principle: build for the person who has nowhere else to go.",
    belief: '"The most urgent problems are the ones nobody talks about."',
    tags: ["Vision", "Leadership", "Strategy"],
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    index: "02",
    name: "Emmanuel Somuah",
    role: "Co-founder & CTO",
    origin: "Kumasi, Ghana",
    bio: "Emmanuel writes code the way you'd build a shelter — with intention, for weather. He architected Xolace's infrastructure to be private by design, resilient under pressure, and invisible to the people who need it most. The technology should never be the barrier.",
    belief: '"If the system draws attention to itself, it has already failed."',
    tags: ["Engineering", "Infrastructure", "Privacy"],
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    index: "03",
    name: "Emmanuel Acquah",
    role: "Co-founder & COO",
    origin: "Cape Coast, Ghana",
    bio: "Emmanuel Acquah turns vision into motion. He is the reason things ship, teams stay aligned, and no detail falls through the cracks. He brought operational discipline to Xolace without ever letting it become coldness — operations in service of people, never the other way around.",
    belief: '"Good execution is its own form of care."',
    tags: ["Operations", "Execution", "Growth"],
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    index: "04",
    name: "Andrew Beniako Nana",
    role: "Co-founder & CMO",
    origin: "Takoradi, Ghana",
    bio: "Andrew understands that you can't market your way into trust — you have to earn it. He shapes how Xolace shows up in the world: honest, unflashy, and deeply human. Every word that leaves Xolace has passed through his conviction that the message must be worthy of the person receiving it.",
    belief: '"Reach without resonance is just noise."',
    tags: ["Marketing", "Brand", "Community"],
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  },
];

const TheTeamPage = () => {
  return (
    <div className="relative min-h-screen bg-background">

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div
          className="absolute top-0 bottom-0 left-1/2 opacity-[0.05]"
          style={{
            width: "100vw",
            transform: "translateX(-50%)",
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Ambient orbs */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
        />
      </div>

      {/* ── Padded content ── */}
      <div className="relative z-10 py-24 md:py-36 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader />

          <div className="flex flex-col gap-12">
            {founders.map((founder, i) => (
              <FounderCard key={founder.index} founder={founder} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTeamPage;