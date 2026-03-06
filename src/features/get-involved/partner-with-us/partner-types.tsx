"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { GraduationCap, Heart, Building2, Megaphone, ArrowRight, Check } from "lucide-react";
import PartnerFormModal from "@/features/get-involved/partner-with-us/partner-form-modal";

const partnerTypes = [
  {
    icon: GraduationCap,
    type: "Universities & Campuses",
    tagline: "Where we reach students before crisis hits.",
    what: "Co-host mental health awareness drives, integrate Xolace into student wellness programs, and bring trained ambassadors to your campus community.",
    youGet: ["Xolace Campus Ambassador program", "Free event hosting support", "Mental health resources for students", "Impact reports for your institution"],
    theyGet: ["Credibility with student body", "Reach thousands of students", "Co-branding on all campus events", "Data on student wellness engagement"],
    accentVar: "--primary",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
  },
  {
    icon: Heart,
    type: "NGOs & Health Organisations",
    tagline: "Amplifying your reach with digital community.",
    what: "We complement your on-the-ground work with a platform that keeps communities engaged, connected, and supported between your interventions.",
    youGet: ["Platform presence for your programmes", "Community engagement tools", "Co-branded campaigns", "Access to our user community"],
    theyGet: ["Mission alignment with Xolace", "Shared storytelling opportunities", "Extended digital reach", "Collaborative research potential"],
    accentVar: "--destructive",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
  {
    icon: Building2,
    type: "Corporates & Workplaces",
    tagline: "Because employee wellbeing is business strategy.",
    what: "Bring Xolace into your organisation's wellness layer - workshops, peer support structures, and access to professional community resources.",
    youGet: ["Workplace wellbeing workshops", "Team access to Xolace platform", "Mental health first aid integration", "ESG-aligned impact reporting"],
    theyGet: ["Brand alignment with mental health", "Authentic CSR storytelling", "Employee engagement programme", "Co-branded content opportunities"],
    accentVar: "--primary",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
  {
    icon: Megaphone,
    type: "Media & Creatives",
    tagline: "Stories that shift how people think about support.",
    what: "Partner with us to tell the mental health story differently - through documentary, editorial, podcast, social campaigns, or creative collaboration.",
    youGet: ["Access to community stories (with consent)", "Co-production opportunities", "Platform for your mental health content", "Reach into Xolace's community"],
    theyGet: ["Authentic storytelling partner", "Mission-driven content angle", "Broad audience with lived experience", "Collaborative editorial freedom"],
    accentVar: "--destructive",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
  },
];

const PartnerTypes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);
  const current = partnerTypes[active];

  return (
    <section id="partner-types" className="border section bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div ref={ref} className="">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-tight leading-[1.06]"
            >
              There&apos;s a place for you{" "}
              <span className="text-primary">in this mission.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground font-light mt-4 max-w-xl"
          >
            Whether you run a campus, a clinic, a company, or a camera - the work of mental health needs all of you.
          </motion.p>
        </div>

        {/* ── Tab selector ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-10 mt-10"
        >
          {partnerTypes.map((pt, i) => {
            const Icon = pt.icon;
            const isActive = active === i;
            return (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest border transition-colors duration-300 rounded-lg ${isActive ? "border-primary text-primary" : " border-border hover:border-primary/60 hover:text-primary/50"}
                `}>
                <Icon size={14} />
                {pt.type.split(" ")[0]}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Active panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
          >
            {/* Image side */}
            <div className="relative min-h-[280px] md:min-h-[440px] overflow-hidden">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.type}
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute bottom-6 left-6"
              >
                <p
                  className="text-[0.6rem] uppercase tracking-[0.2em] font-bold mb-1"
                  style={{ color: `hsl(var(${current.accentVar}))` }}
                >
                  Partnership Type
                </p>
                <h3 className="text-white font-black text-xl md:text-2xl tracking-tight leading-tight">
                  {current.type}
                </h3>
              </motion.div>
            </div>

            {/* Content side */}
            <div className="bg-background p-8 md:p-12 flex flex-col justify-between gap-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <p className="text-muted-foreground text-base font-light leading-relaxed mb-8 italic">
                  &ldquo;{current.tagline}&rdquo;
                </p>
                <p className="text-foreground text-base font-light leading-relaxed">
                  {current.what}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                >
                  <p
                    className="text-[0.6rem] uppercase tracking-[0.22em] font-bold mb-4"
                    style={{ color: `hsl(var(${current.accentVar}))` }}
                  >
                    What you get
                  </p>
                  <ul className="space-y-2">
                    {current.youGet.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.07, duration: 0.35 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground font-light"
                      >
                        <Check size={12} className="shrink-0 mt-0.5" style={{ color: `hsl(var(${current.accentVar}))` }} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <p className="text-[0.6rem] uppercase tracking-[0.22em] font-bold mb-4 text-muted-foreground/50">
                    What we gain
                  </p>
                  <ul className="space-y-2">
                    {current.theyGet.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.07, duration: 0.35 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground font-light"
                      >
                        <Check size={12} className="shrink-0 mt-0.5 text-muted-foreground/40" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <PartnerFormModal
                  partnerType={current.type}
                  trigger={
                    <button
                      className="self-start flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-widest text-xs text-white hover:opacity-85 transition-opacity group"
                      style={{ background: `hsl(var(${current.accentVar}))` }}
                    >
                      Partner as {current.type.split(" ")[0]}
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  }
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default PartnerTypes;