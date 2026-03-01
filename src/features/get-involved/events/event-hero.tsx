"use client";

import {motion} from "motion/react";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";

const eventPhotos = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    caption: "Community Gathering · Accra",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
    caption: "Campus Drive · UG Legon",
  },
  {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
    caption: "Youth Session · Kumasi",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    caption: "Ambassador Day · Accra",
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
    caption: "Open Campfire Night",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
    caption: "Community Wellness Day",
  },
];

const loopedPhotos = [...eventPhotos, ...eventPhotos];

function PhotoStrip() {
  const stripRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);
  const SPEED = 0.55;

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const tick = () => {
      if (!pausedRef.current && strip) {
        posRef.current += SPEED;
        const half = strip.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        strip.scrollLeft = posRef.current;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const touchStartX = useRef(0);
  const touchScrollLeft = useRef(0);

  return (
    <div className="relative">
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{background: "linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%)"}}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{background: "linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%)"}}
      />

      <div
        ref={stripRef}
        className="flex gap-6 items-center overflow-x-hidden py-16"
        style={{ scrollbarWidth: "none", userSelect: "none" }}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onTouchStart={e => {
          pausedRef.current = true;
          touchStartX.current = e.touches[0].clientX;
          touchScrollLeft.current = posRef.current;
        }}
        onTouchMove={e => {
          if (!stripRef.current) return;
          const dx = touchStartX.current - e.touches[0].clientX;
          posRef.current = touchScrollLeft.current + dx;
          stripRef.current.scrollLeft = posRef.current;
        }}
        onTouchEnd={() => {
          pausedRef.current = false;
        }}
      >
        {loopedPhotos.map((photo, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`relative shrink-0 group w-[350px] h-[400px] rounded-lg border-4 border-primary shadow-xl overflow-hidden transition-transform duration-500 ${isEven ? "-translate-y-8" : "translate-y-8"}`}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="400px"
                draggable={false}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent rounded-lg`}>
                <p className="text-xs uppercase tracking-widest font-semibold text-white/80">
                  {photo.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function EventHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative bg-background overflow-visible">

      <div className="relative w-full h-screen overflow-hidden">

        <div className="absolute inset-0 bg-zinc-900"/>

        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{opacity: videoLoaded ? 1 : 0}}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  type="video/mp4"/>
        </video>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{background: "rgba(0,0,0,0.55)"}}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{background: "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 100%)"}}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
          style={{background: "linear-gradient(to bottom, transparent 0%, hsl(var(--background)) 100%)"}}
        />

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.5, duration: 0.8}}
          className="absolute text-primary inset-0 flex flex-col items-center justify-center z-10 px-6 gap-10"
        >
          <div className="flex flex-col gap-3 items-center text-center leading-[0.9]">
            <h1 className="text-[clamp(2rem,5vw,5rem)] font-black tracking-tight text-white">
              <span className="text-white">EVERY</span>{" "}
              <span className="text-primary">MOVEMENT</span>{" "}
            </h1>
            <h1 className="text-[clamp(2rem,5vw,5rem)] font-black tracking-tight">
              <span className="text-white">START WITH</span>{" "}
              <span className="text-primary">PEOPLE</span>{" "}
            </h1>
          </div>

        </motion.div>
      </div>

      <motion.div
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 1.0, duration: 1, ease: [0.16, 1, 0.3, 1]}}
        className="relative z-20 -mt-40"
      >
        <PhotoStrip/>
      </motion.div>
    </section>
  );
}