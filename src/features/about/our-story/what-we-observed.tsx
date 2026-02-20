'use client'

import { motion } from 'motion/react'

const observations = [
  { number: '01', text: 'The internet amplifies what looks good.', sub: 'Not what is real.' },
  { number: '02', text: 'Vulnerability feels risky.', sub: 'So it stays hidden.' },
  { number: '03', text: 'Support often arrives late —', sub: 'if it arrives at all.' },
]

const WhatWeObserved = () => {
  return (
    <section className="section overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-primary mb-14"
        >
          What We Saw
        </motion.p>

        {/* Huge numbered statements — stacked, full width */}
        <div className="space-y-0">
          {observations.map((obs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-border py-5 md:py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 last:border-b"
            >
              <div className="flex items-start gap-6 md:gap-10">
                <span className="text-xs text-destructive font-mono mt-1 shrink-0 pt-2">
                  {obs.number}
                </span>
                <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-500">
                  {obs.text}
                </h2>
              </div>
              <p className="text-base md:text-lg text-destructive italic md:text-right md:max-w-[180px] shrink-0 md:pb-1 pl-10 md:pl-0">
                {obs.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="w-full flex flex-col gap-8 items-center justify-center mt-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg text-muted-foreground italic "
          >
            Not because people don't care.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center text-3xl md:text-5xl font-bold text-foreground leading-tight"
          >
            But because there isn't a space{' '}
            <span className="text-primary">built for it.</span>
          </motion.p>
        </div>

      </div>
    </section>
  )
}

export default WhatWeObserved