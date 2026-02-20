'use client'

import { motion } from 'motion/react'

const dreamPoints = [
  'Asking for help is normal.',
  'Professionals are integrated into community, not hidden behind paywalls.',
  'Support exists before crisis.',
  'No one feels alone on the internet.',
]

const OurDream = () => {
  return (
    <section className="section overflow-hidden bg-card">

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: 'oklch(0.6726 0.2904 341.4084)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-20"
        >
          The Vision
        </motion.p>

        {/* Opening question — italic, restrained */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-2xl text-muted-foreground italic mb-4"
        >
          If Xolace succeeds, what changes?
        </motion.p>

        {/* "A world where" — big anchor */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-6xl font-bold text-foreground mb-20"
        >
          A world where:
        </motion.p>

        {/* Dream points — large, staggered, no borders or bullets */}
        <div className="space-y-12 md:space-y-16 mb-28">
          {dreamPoints.map((dream, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline gap-5 md:gap-8 group"
            >
              <span className="text-xs font-mono text-primary/40 shrink-0 group-hover:text-primary transition-colors duration-300">
                0{i + 1}
              </span>
              <p className="text-2xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 leading-snug">
                {dream}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final statement — centred, editorial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12" />
          <p className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            We are building what we believe
          </p>
          <p className="text-3xl md:text-5xl font-bold text-primary leading-tight mt-2">
            the world quietly needs.
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-12" />
        </motion.div>

      </div>
    </section>
  )
}

export default OurDream