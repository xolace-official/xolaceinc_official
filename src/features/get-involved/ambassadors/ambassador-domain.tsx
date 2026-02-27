"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";

const domains = [
  {
    id: "campus",
    num: "01",
    name: "Campus Ambassador",
    location: "Universities & Colleges",
    accentVar: "--primary",
    description:
      "You're on the ground at your institution. You run awareness events, build Xolace communities among students, and create the kind of culture where talking about mental health isn't brave - it's normal.",
    stat: "1 in 3",
    statLabel: "university students experience a mental health crisis",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    cta: "Apply as Campus Ambassador",
  },
  {
    id: "community",
    num: "02",
    name: "Community Ambassador",
    location: "Towns, Cities & Neighbourhoods",
    accentVar: "--destructive",
    description:
      "You work at the grassroots. You reach people outside institutions - in your neighbourhood, your church, your local group. You bring Xolace to places algorithms never reach.",
    stat: "80%",
    statLabel: "of people in low-income areas have no access to mental health services",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    cta: "Apply as Community Ambassador",
  },
  {
    id: "digital",
    num: "03",
    name: "Digital Ambassador",
    location: "Online & Social Media",
    accentVar: "--primary",
    description:
      "Your reach is your platform. You create content, share stories, and spark conversations about mental health in digital spaces. You make Xolace visible where your audience already lives.",
    stat: "4.9bn",
    statLabel: "social media users - the conversation about mental health is already happening",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    cta: "Apply as Digital Ambassador",
  },
  {
    id: "youth",
    num: "04",
    name: "Youth Ambassador",
    location: "Schools & Youth Programmes",
    accentVar: "--destructive",
    description:
      "You reach young people before the weight becomes too heavy. In schools and youth centres - you plant seeds of awareness, safety, and support that last a lifetime.",
    stat: "50%",
    statLabel: "of all mental health conditions begin before age 14",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    cta: "Apply as Youth Ambassador",
  },
  {
    id: "professional",
    num: "05",
    name: "Professional Ambassador",
    location: "Workplaces & Organisations",
    accentVar: "--primary",
    description:
      "You're inside workplaces and professional networks. You advocate for mental health culture in spaces where people spend most of their lives but rarely talk about how they're actually doing.",
    stat: "12bn",
    statLabel: "working days lost annually to depression and anxiety worldwide",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    cta: "Apply as Professional Ambassador",
  },
];

function DomainRow({ domain, i }: { domain: typeof domains[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = i % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-2 border-b border-border last:border-0"
    >
      <div
        className={`relative overflow-hidden min-h-[300px] md:min-h-[480px] ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={domain.image}
          alt={domain.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-background/50" />

        <div
          className="absolute bottom-0 left-0 right-0 h-16 md:hidden"
          style={{
            background: "hsl(var(--background))",
            clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
          }}
        />

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="absolute top-6 left-6 z-10"
        >
          <span
            className="text-[0.6rem] uppercase tracking-[0.22em] font-bold px-3 py-1.5 rounded-full border backdrop-blur-sm"
            style={{
              color: `hsl(var(${domain.accentVar}))`,
              borderColor: `hsl(var(${domain.accentVar})/0.4)`,
              background: `hsl(var(--background)/0.7)`,
            }}
          >
            {domain.location}
          </span>
        </motion.div>

        <span
          className="absolute bottom-8 left-6 text-[7rem] font-bold tracking-[-0.05em] leading-none select-none z-10"
          style={{ color: `hsl(var(${domain.accentVar})/0.2)` }}
          aria-hidden
        >
          {domain.num}
        </span>

        {/* Stat bottom-right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute bottom-6 right-6 text-right z-10"
        >
          <p
            className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.04em] leading-none"
            style={{ color: `hsl(var(${domain.accentVar}))` }}
          >
            {domain.stat}
          </p>
          <p className="text-background/70 text-xs font-light leading-snug max-w-[150px] mt-1">
            {domain.statLabel}
          </p>
        </motion.div>
      </div>

      {/* ── CONTENT BLOCK ── */}
      <div
        className={`relative flex flex-col justify-center px-0 md:px-16 py-12 md:py-16 ${
          isEven ? "md:order-2" : "md:order-1"
        }`}
      >
        {/* Mobile: angled top border replacing the straight line */}
        <div
          className="absolute top-0 left-0 right-0 h-1 md:hidden"
          style={{ background: `hsl(var(${domain.accentVar}))` }}
        />

        {/* Desktop: vertical accent bar on the inner edge */}
        <div
          className={`hidden md:block absolute top-8 bottom-8 w-[3px] rounded-full ${
            isEven ? "left-0" : "right-0"
          }`}
          style={{ background: `hsl(var(${domain.accentVar})/0.25)` }}
        />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1.8rem,3vw,2.8rem)] text-primary font-bold tracking-tight leading-[1.05]"
        >
          {domain.name}
        </motion.h3>

        {/* Accent underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-4 mb-5 h-[2px] w-10 origin-left rounded-full"
          style={{ background: `hsl(var(${domain.accentVar}))` }}
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-muted-foreground text-base md:text-lg font-light leading-relaxed"
        >
          {domain.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href={`/ambassadors/apply?domain=${domain.id}`}
            className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:gap-5 transition-all duration-300"
            style={{ color: `hsl(var(${domain.accentVar}))` }}
          >
           <Button variant="secondary">
             {domain.cta}
             <span><ArrowRight/></span>
           </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

const AmbassadorDomains = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section bg-background relative overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-tight leading-[1.06] mb-4"
          >
            Find your domain.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-muted-foreground text-lg font-light leading-relaxed max-w-lg"
          >
            Ambassadors operate in different spaces. The impact is the same -
            making mental health support something people can actually reach.
          </motion.p>
        </div>
      </div>

      <div className="mt-16 border-t border-border max-w-7xl mx-auto">
        {domains.map((d, i) => (
          <DomainRow key={d.id} domain={d} i={i} />
        ))}
      </div>

    </section>
  );
};

export default AmbassadorDomains;