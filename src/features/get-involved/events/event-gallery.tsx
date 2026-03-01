"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85",
    caption: "Community Gathering · Accra, Feb 2025",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=85",
    caption: "Campus Drive · UG Legon, Jan 2025",
  },
  {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=700&q=85",
    caption: "Youth Session · Kumasi, Dec 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=85",
    caption: "Ambassador Training · Accra, Nov 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=85",
    caption: "Online Campfire Session · Oct 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=85",
    caption: "Open Mic Night · Accra, Sep 2024",
  },
];

function Photo({
                 src, caption, className, delay = 0,
               }: {
  src: string; caption: string; className?: string; delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt={caption}
        fill
        className="object-cover transition-transform duration-700 ease-out"
        style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Always-on subtle vignette */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }} />

      {/* Hover: primary tint wash */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ background: "hsl(var(--primary)/0.12)" }}
      />

      {/* Caption — slides up on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-8"
        animate={{ y: hovered ? 0 : 12, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[0.6rem] uppercase tracking-[0.22em] font-bold text-white/80">
          {caption}
        </p>
      </motion.div>

      {/* Primary corner brackets — always visible, brighten on hover */}
      {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2",
        "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((cls, j) => (
        <motion.span
          key={j}
          className={`absolute w-5 h-5 ${cls}`}
          animate={{ borderColor: hovered ? "hsl(var(--primary))" : "rgba(255,255,255,0.2)" }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </motion.div>
  );
}

const EventGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section bg-muted relative overflow-hidden">

      {/* Half-circle top right */}
      <div aria-hidden className="absolute -top-px right-0 w-[360px] h-[180px] pointer-events-none"
           style={{ background: "hsl(var(--destructive)/0.05)", borderRadius: "0 0 0 360px", borderBottom: "1px solid hsl(var(--destructive)/0.1)", borderLeft: "1px solid hsl(var(--destructive)/0.1)" }} />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-tight leading-[1.06]"
          >
            What it feels like{" "}
            <span className="text-destructive">to be there.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-muted-foreground text-lg font-light leading-relaxed"
          >
            Real moments from real gatherings. Replace these with your own event photos.
          </motion.p>
        </div>

        {/* ── GALLERY LAYOUT ── */}
        {/* Row 1: one tall hero left + two stacked right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* Hero — spans 2 cols, tall */}
          <Photo
            src={photos[0].src}
            caption={photos[0].caption}
            className="md:col-span-2 h-[320px] md:h-[520px]"
            delay={0}
          />

          {/* Two stacked right */}
          <div className="grid grid-rows-2 gap-4 h-[320px] md:h-[520px]">
            <Photo src={photos[1].src} caption={photos[1].caption} className="h-full" delay={0.1} />
            <Photo src={photos[2].src} caption={photos[2].caption} className="h-full" delay={0.2} />
          </div>
        </div>

        {/* Row 2: three equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Photo src={photos[3].src} caption={photos[3].caption} className="h-[240px] md:h-[280px]" delay={0.15} />
          <Photo src={photos[4].src} caption={photos[4].caption} className="h-[240px] md:h-[280px]" delay={0.25} />
          <Photo src={photos[5].src} caption={photos[5].caption} className="h-[240px] md:h-[280px]" delay={0.35} />
        </div>

      </div>
    </section>
  );
};

export default EventGallery;