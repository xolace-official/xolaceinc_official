'use client'

import { motion } from 'motion/react'

const inBetweenSpaces = [
  'The space before someone books a session.',
  'The space between sessions.',
  'The space where someone just needs to talk.',
]

const ExistingPlatformsGap = () => {
  return (
    <section className="section overflow-hidden bg-muted/30">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-20"
        >
          The Gap
        </motion.p>

        {/* Two opposing statements — stacked large, not in columns */}
        <div className="mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Social platforms were built for</p>
            <p className="text-4xl md:text-6xl font-bold text-destructive/70 leading-none">
              visibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-muted-foreground/30 font-light pl-2"
          >
            —
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pl-8 md:pl-20"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Therapy was built for</p>
            <p className="text-4xl md:text-6xl font-bold text-destructive/70 leading-none">
              diagnosis.
            </p>
          </motion.div>
        </div>

        {/* The gap question — centred, large */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-14 md:py-20 border-t text-center"
        >
          <p className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            But what about the space
          </p>
          <p className="text-3xl md:text-5xl font-bold text-primary">
            in between?
          </p>
        </motion.div>

        {/* In-between list — large, plain, stacked */}
        <div className="py-16 space-y-8">
          {inBetweenSpaces.map((space, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              {space}
            </motion.p>
          ))}
        </div>

        {/* Final line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-8"
        >
          <div className="h-px w-20 bg-primary mb-10" />
          <p className="text-2xl md:text-4xl font-bold text-primary leading-snug">
            Before therapy.<br />
            Between sessions.<br />
            Outside the noise.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default ExistingPlatformsGap