"use client";

import {motion, useInView} from "motion/react";
import {useRef} from "react";
import Link from "next/link";
import {MapPin, Calendar, Users, ArrowRight} from "lucide-react";

const events = [
  {
    id: "ug-drive-2025",
    title: "Mental Health Awareness Drive",
    type: "Campus Drive",
    date: "March 15, 2025",
    time: "10:00 AM – 2:00 PM",
    location: "University of Ghana, Legon",
    city: "Accra, Ghana",
    spots: 12,
    totalSpots: 80,
    accentVar: "--primary",
    description: "A full morning of open conversations, resource sharing, and peer connection on campus. No agenda except showing up.",
  },
  {
    id: "online-campfire-march",
    title: "Live Campfire Session - Anxiety & Identity",
    type: "Online Session",
    date: "March 22, 2025",
    time: "6:00 PM GMT",
    location: "Zoom / Xolace Platform",
    city: "Online - Global",
    spots: 28,
    totalSpots: 60,
    accentVar: "--destructive",
    description: "A guided online campfire session with a professional facilitator. Open to anyone navigating identity and anxiety.",
  },
  {
    id: "community-accra",
    title: "Community Gathering - Speak Your Truth",
    type: "Community Gathering",
    date: "April 5, 2025",
    time: "3:00 PM – 7:00 PM",
    location: "Alliance Française d'Accra",
    city: "Accra, Ghana",
    spots: 5,
    totalSpots: 50,
    accentVar: "--primary",
    description: "An afternoon of storytelling, spoken word, and open conversation. Bring what you've been carrying. Leave lighter.",
  },
  {
    id: "knust-drive",
    title: "KNUST Campus Wellness Day",
    type: "Campus Drive",
    date: "April 18, 2025",
    time: "9:00 AM – 3:00 PM",
    location: "KNUST Campus",
    city: "Kumasi, Ghana",
    spots: 40,
    totalSpots: 100,
    accentVar: "--destructive",
    description: "A full-day wellness experience for KNUST students - mental health screenings, peer support circles, and campfire sessions.",
  },
];

function EventCard({event, i}: { event: typeof events[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-40px"});
  const spotsLeft = event.spots;
  const isFilling = spotsLeft <= 10;

  return (
    <motion.div
      ref={ref} initial={{opacity: 0, y: 28}} animate={inView ? {opacity: 1, y: 0} : {}}
      transition={{duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1]}}
      className="relative p-7 md:p-9 bg-background overflow-hidden group transition-colors duration-500 min-h-[280px] flex flex-col justify-between"
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = `hsl(var(${event.accentVar})/0.04)`;
        (e.currentTarget as HTMLElement).querySelectorAll<HTMLElement>("[data-corner]").forEach(c => {
          c.style.borderColor = `hsl(var(${event.accentVar})/0.5)`;
        });
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = "hsl(var(--background))";
        (e.currentTarget as HTMLElement).querySelectorAll<HTMLElement>("[data-corner]").forEach(c => {
          c.style.borderColor = "hsl(var(--border))";
        });
      }}
    >
      <span
        data-corner
        className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-border transition-colors duration-300"/>
      <span
        data-corner
        className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-border transition-colors duration-300"/>
      <span
        data-corner
        className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-border transition-colors duration-300"/>
      <span
        data-corner
        className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-border transition-colors duration-300"/>

      <div className="flex items-start justify-between mb-5">
        <span
          className="text-[0.6rem] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full border"
          style={{
            color: `hsl(var(${event.accentVar}))`,
            borderColor: `hsl(var(${event.accentVar})/0.3)`,
            background: `hsl(var(${event.accentVar})/0.07)`
          }}>
          {event.type}
        </span>
        {isFilling && (
          <span
            className="text-[0.6rem] uppercase tracking-[0.15em] font-bold text-destructive flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse"/> Filling fast
          </span>
        )}
      </div>

      <h3
        className="text-lg md:text-xl font-bold tracking-tight leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
        {event.title}
      </h3>

      <p className="text-muted-foreground text-sm font-light leading-relaxed mb-5 flex-1">{event.description}</p>

      <div className="space-y-1.5 mb-6">
        <p className="text-xs text-muted-foreground flex items-center gap-2"><Calendar size={12}
                                                                                       style={{color: `hsl(var(${event.accentVar}))`}}/>
          {event.date} · {event.time}
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-2"><MapPin size={12}
                                                                                     style={{color: `hsl(var(${event.accentVar}))`}}/>
          {event.location}, {event.city}
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-2"><Users size={12}
                                                                                    style={{color: `hsl(var(${event.accentVar}))`}}/>
          {spotsLeft} spots remaining of {event.totalSpots}
        </p>
      </div>

      {/* Spots bar */}
      <div className="w-full h-[3px] bg-border rounded-full mb-5 overflow-hidden">
        <motion.div
          initial={{scaleX: 0}}
          animate={inView ? {scaleX: 1} : {}}
          transition={{duration: 0.8, delay: i * 0.1 + 0.3}}
          className="h-full origin-left rounded-full" style={{
          width: `${((event.totalSpots - spotsLeft) / event.totalSpots) * 100}%`,
          background: `hsl(var(${event.accentVar}))`
        }}/>
      </div>

      <Link
        href={`/get-involved/events/${event.id}`}
        type={"button"}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300"
        style={{color: `hsl(var(${event.accentVar}))`}}
      >
        Register now <span><ArrowRight size={14}/></span>
      </Link>
    </motion.div>
  );
}

const UpcomingEvents = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-60px"});

  return (
    <section className="section bg-muted relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-px right-0 w-[340px] h-[170px] pointer-events-none"
        style={{
          background: "hsl(var(--primary)/0.06)",
          borderRadius: "0 0 0 340px",
          borderBottom: "1px solid hsl(var(--primary)/0.12)",
          borderLeft: "1px solid hsl(var(--primary)/0.12)"
        }}/>
      <div aria-hidden className="absolute -top-px right-0 w-[200px] h-[100px] pointer-events-none"
           style={{
             borderRadius: "0 0 0 200px",
             borderBottom: "1px solid hsl(var(--primary)/0.2)",
             borderLeft: "1px solid hsl(var(--primary)/0.2)"
           }}/>

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-14">
          <motion.h2
            initial={{opacity: 0, y: 22}} animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
            className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-tight leading-[1.06]">
            What's <span className="text-primary">coming up.</span>
          </motion.h2>
          <motion.p
            initial={{opacity: 0, y: 22}} animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, delay: 0.12}}
            className="text-muted-foreground text-lg font-light leading-relaxed">
            Events happening soon. Spots are limited - Xolace keeps gatherings small on purpose. More intimate. More
            real.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {events.map((e, i) =>
            <EventCard key={e.id} event={e} i={i}/>)}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;