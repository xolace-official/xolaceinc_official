'use client'

import { motion } from 'motion/react'
import { useMemo, useState } from 'react'

type Line = {
  angle: number
  baseLength: number
  expandedLength: number
  id: number
}

function generateLines(count: number, startAngle: number, endAngle: number): Line[] {
  return Array.from({ length: count }).map((_, i) => {
    const progress = i / (count - 1)
    const angle = startAngle + (endAngle - startAngle) * progress
    return {
      angle,
      baseLength: 220 + progress * 40,
      expandedLength: 320 + progress * 120,
      id: i
    }
  })
}

// Each stat enters from a different direction
const stats = [
  {
    value: 'Posts.',
    label: 'Reactions.',
    desc: 'Noise.',
    from: { x: -80, y: 0 }    // ← from left
  },
  {
    value: 'Sharing',
    label: 'More Than Ever',
    desc: 'Yet something felt missing.',
    from: { x: 0, y: -80 }    // ↑ from top
  },
  {
    value: 'Things',
    label: 'Left Unsaid',
    desc: 'The things that mattered most.',
    from: { x: 0, y: 80 }     // ↓ from bottom
  },
  {
    value: 'That Gap',
    label: 'Stayed With Us',
    desc: 'And became our reason.',
    from: { x: 80, y: 0 }     // → from right
  },
]

const TheRealization = () => {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null)

  const leftLines = useMemo(() => generateLines(90, 180, 270), [])
  const rightLines = useMemo(() => generateLines(90, 0, 90), [])

  const isLeftActive = hoveredSide === 'left'
  const isRightActive = hoveredSide === 'right'
  const isAnyActive = hoveredSide !== null

  return (
    <section className="relative overflow-hidden section bg-linear-to-b from-background via-muted/10 to-background">

      {/* Ambient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.18, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: 'oklch(0.6726 0.2904 341.4084)' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.12, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, delay: 0.4 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'oklch(0.6535 0.2348 34.037)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ===== OPENING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="flex flex-col gap-1 items-center justify-center text-center"
        >
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-bold leading-[0.95] tracking-tight text-muted-foreground/60">
            We were surrounded by
          </h2>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-bold leading-[0.95] tracking-tight text-primary">
            conversations.
          </h2>
        </motion.div>

        {/* ===== STATS — each flies in from its own direction ===== */}
        <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-10 my-8 md:my-18">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: stat.from.x, y: stat.from.y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.75,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-destructive">
                {stat.value}
              </div>
              <div className="mt-2 font-semibold text-foreground">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===== RADIAL VISUAL ===== */}
        <div className="relative h-[520px] flex items-center justify-center mb-20">

          {/* Hover zones */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/2 z-30"
            onMouseEnter={() => setHoveredSide('left')}
            onMouseLeave={() => setHoveredSide(null)}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 z-30"
            onMouseEnter={() => setHoveredSide('right')}
            onMouseLeave={() => setHoveredSide(null)}
          />

          {/* Glow pulse on hover */}
          <motion.div
            className="absolute w-[560px] h-[560px] rounded-full blur-3xl"
            style={{ background: 'oklch(0.6726 0.2904 341.4084 / 0.12)' }}
            animate={{ scale: isAnyActive ? 1.2 : 1, opacity: isAnyActive ? 0.5 : 0.2 }}
            transition={{ duration: 0.5 }}
          />

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 520"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="leftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.6535 0.2348 34.037)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="oklch(0.6726 0.2904 341.4084)" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="rightGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.6535 0.2348 34.037)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="oklch(0.6726 0.2904 341.4084)" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* LEFT */}
            <g>
              {leftLines.map((line) => {
                const x1 = 350, y1 = 260
                const length = isLeftActive ? line.expandedLength : line.baseLength
                const x2 = x1 + Math.cos((line.angle * Math.PI) / 180) * length
                const y2 = y1 + Math.sin((line.angle * Math.PI) / 180) * length
                return (
                  <motion.g
                    key={`l-${line.id}`}
                    animate={{ opacity: isLeftActive ? 1 : 0.2, scale: isLeftActive ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ originX: x1 / 1200, originY: y1 / 520 }}
                  >
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#leftGrad)" strokeWidth={isLeftActive ? 2 : 1} strokeLinecap="round" />
                    <circle cx={x2} cy={y2} r={isLeftActive ? 3 : 1.5} fill="oklch(0.6726 0.2904 341.4084)" opacity={isLeftActive ? 1 : 0.3} />
                  </motion.g>
                )
              })}
            </g>

            {/* RIGHT */}
            <g>
              {rightLines.map((line) => {
                const x1 = 850, y1 = 260
                const length = isRightActive ? line.expandedLength : line.baseLength
                const x2 = x1 + Math.cos((line.angle * Math.PI) / 180) * length
                const y2 = y1 + Math.sin((line.angle * Math.PI) / 180) * length
                return (
                  <motion.g
                    key={`r-${line.id}`}
                    animate={{ opacity: isRightActive ? 1 : 0.2, scale: isRightActive ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ originX: x1 / 1200, originY: y1 / 520 }}
                  >
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#rightGrad)" strokeWidth={isRightActive ? 2 : 1} strokeLinecap="round" />
                    <circle cx={x2} cy={y2} r={isRightActive ? 3 : 1.5} fill="oklch(0.6726 0.2904 341.4084)" opacity={isRightActive ? 1 : 0.3} />
                  </motion.g>
                )
              })}
            </g>
          </svg>

          {/* Center message */}
          <motion.div
            className="relative z-20 text-center max-w-lg px-4"
            animate={{ opacity: isAnyActive ? 1 : 0.65, scale: isAnyActive ? 1 : 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-sm uppercase tracking-widest font-semibold mb-5 italic"
              style={{ color: 'oklch(0.6535 0.2348 34.037)' }}
            >
              And yet, something felt missing.
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              People were sharing more than ever.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              But the things that mattered most were still unsaid.
            </p>
          </motion.div>
        </div>

        {/* ===== FINAL ANCHOR ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-2 left-0 right-0 h-3 origin-left"
              style={{ background: 'oklch(0.6535 0.2348 34.037 / 0.18)' }}
            />
            <p className="relative text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold text-foreground">
              That gap stayed with us.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default TheRealization