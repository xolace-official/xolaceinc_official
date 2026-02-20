'use client'

import { motion } from 'motion/react'

const OurStoryCTA = () => {
  return (
    <section className="section overflow-hidden bg-gradient-to-b from-background to-muted/30 relative">

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.6726 0.2904 341.4084 / 0.08), transparent)'
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Top divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-20 origin-left"
        />

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-4xl sm:text-5xl md:text-7xl font-bold text-muted-foreground/40 leading-tight tracking-tight">
            This is not just
          </p>
          <p className="text-4xl sm:text-5xl md:text-7xl font-bold text-muted-foreground/40 leading-tight tracking-tight">
            our story.
          </p>
          <p className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight mt-2">
            It's a movement.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-20 max-w-xl"
        >
          We're building this together — with people who believe mental health support should be for everyone, everywhere.
        </motion.p>

        {/* CTAs — plain text links, big and bold */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-16">
          <motion.a
            href="/join"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group flex items-baseline gap-3"
          >
            <span className="text-2xl md:text-3xl font-bold text-primary border-b-2 border-primary pb-1 group-hover:opacity-70 transition-opacity duration-300">
              Join the Community
            </span>
            <motion.span
              className="text-primary text-2xl"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-muted-foreground/40 text-lg hidden sm:block"
          >
            or
          </motion.div>

          <motion.a
            href="/ambassadors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="group flex items-baseline gap-3"
          >
            <span className="text-2xl md:text-3xl font-bold text-foreground border-b-2 border-border pb-1 group-hover:text-primary group-hover:border-primary transition-colors duration-300">
              Become an Ambassador
            </span>
            <span className="text-foreground group-hover:text-primary transition-colors duration-300 text-2xl">→</span>
          </motion.a>
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-gradient-to-r from-primary via-transparent to-transparent mt-20 origin-left"
        />

      </div>
    </section>
  )
}

export default OurStoryCTA