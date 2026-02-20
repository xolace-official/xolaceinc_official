'use client'

import { motion } from 'motion/react'

const milestones = [
  'Started without funding.',
  'Exhibited at events.',
  'Built ambassadors, one conversation at a time.',
  'Chose community first.',
]

const OurRoot = () => {
  return (
    <section className="section overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-20"
        >
          Our Roots
        </motion.p>

        {/* Origin — large, split line statement */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-muted-foreground/40 leading-none tracking-tight"
          >
            Xolace didn't begin
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-muted-foreground/40 leading-none tracking-tight"
          >
            in a tech hub.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-none tracking-tight mt-2"
          >
            It began in{' '}
            <span className="text-primary">Ghana.</span>
          </motion.p>
        </div>

        {/* Context paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20 space-y-2"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            In a place where conversations about mental health are still growing. Where community is strong.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            But safe digital spaces are rare.
          </p>
        </motion.div>

        {/* Core belief — full width, high contrast */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="py-16 md:py-20 border-t border-b border-border mb-20"
        >
          <p className="text-2xl md:text-4xl font-bold text-foreground leading-snug">
            We believed something powerful:
          </p>
          <p className="text-2xl md:text-4xl font-bold text-primary leading-snug mt-2">
            That support should not depend on geography.
          </p>
        </motion.div>

        {/* Milestones — horizontal scroll feel, plain stacked */}
        <div className="mb-20">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="flex items-baseline gap-6 py-5 border-b border-border/50 last:border-0"
            >
              <span className="text-xs font-mono text-primary/40 shrink-0">0{i + 1}</span>
              <p className="text-xl md:text-2xl text-muted-foreground">{m}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <p className="text-2xl md:text-3xl font-bold text-muted-foreground/50 leading-tight">
            Not because it was easy.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight mt-1">
            Because it was right.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default OurRoot