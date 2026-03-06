"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does it cost anything to partner with Xolace?",
    a: "Most partnerships are built on shared value, not financial transactions. We do have structured programmes for corporate partners where resource exchange is part of the agreement - but we never gatekeep partnerships behind price tags. Reach out and we'll find what works.",
  },
  {
    q: "How long does a typical partnership last?",
    a: "We start with a single initiative or event to establish trust on both sides. Long-term partnerships grow naturally from there. We don't lock anyone into commitments before the relationship has been tested.",
  },
  {
    q: "Can we partner if we're not based in Ghana?",
    a: "Absolutely. Our roots are in Ghana but our vision is global. We have community members and ambassadors across West Africa, the UK, and online. If your work touches the communities we serve, we want to talk.",
  },
  {
    q: "What does the process look like after I submit an inquiry?",
    a: "We respond within 48 hours with an initial conversation to understand your goals. From there, we propose a partnership structure that fits both sides. No lengthy procurement process - we move with urgency.",
  },
  {
    q: "We're a small organisation. Is this still relevant for us?",
    a: "Some of our most meaningful partnerships have been with small, focused organisations. Scale isn't the criterion - alignment is. If your mission touches mental health, community, or youth, there's likely a place for you here.",
  },
];

const PartnerFAQ = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section bg-muted overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.h2
          className="section-header mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Questions we get{" "}
          <span className="text-primary">before the first call.</span>
        </motion.h2>

        <motion.p
          className="text-xl text-muted-foreground font-light max-w-xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We believe in transparency before the conversation even starts. If yours isn&apos;t here, ask us directly.
        </motion.p>

        {/* FAQ list */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion type="single" collapsible className="divide-y divide-border border-t border-border">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-0 py-1">
                <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:text-primary hover:no-underline transition-colors py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
};

export default PartnerFAQ;