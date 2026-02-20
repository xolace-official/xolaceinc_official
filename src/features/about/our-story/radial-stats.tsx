'use client'

import { motion } from 'motion/react'
import { useMemo, useState } from 'react'

const stats = [
  { value: 'Posts.', label: 'Reactions.', desc: 'Noise.' },
  { value: 'Sharing', label: 'More Than Ever', desc: 'Yet something felt missing.' },
  { value: 'Things', label: 'Left Unsaid', desc: 'The things that mattered most.' },
  { value: 'That Gap', label: 'Stayed With Us', desc: 'And became our reason.' }
]

type Line = {
  angle: number
  baseLength: number
  expandedLength: number
  id: number
}

function generateLines(
  count: number,
  startAngle: number,
  endAngle: number
): Line[] {
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

export default function RadialStats() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null)

  const leftLines = useMemo(
    () => generateLines(90, 180, 270),
    []
  )

  const rightLines = useMemo(
    () => generateLines(90, 0, 90),
    []
  )

  const isLeftActive = hoveredSide === 'left'
  const isRightActive = hoveredSide === 'right'
  const isAnyActive = hoveredSide !== null

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== OPENING STATEMENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-2 items-center justify-center mb-20 text-center"
        >
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-bold leading-[0.95] tracking-tight">
            We were surrounded by
          </h2>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-bold leading-[0.95] tracking-tight text-muted-foreground/40">
            conversations.
          </h2>
        </motion.div>

        {/* ===== STATS GRID ===== */}
        <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-10 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-foreground">
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
        <div className="relative h-[520px] flex items-center justify-center">

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

          {/* Subtle background glow */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              scale: isAnyActive ? 1.15 : 1,
              opacity: isAnyActive ? 0.5 : 0.2
            }}
            transition={{ duration: 0.5 }}
          />

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 520"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#fb923c" stopOpacity="0.2" />
              </linearGradient>

              <linearGradient id="rightGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#fb923c" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* LEFT SIDE */}
            <g>
              {leftLines.map((line) => {
                const x1 = 350
                const y1 = 260
                const length = isLeftActive ? line.expandedLength : line.baseLength
                const x2 = x1 + Math.cos((line.angle * Math.PI) / 180) * length
                const y2 = y1 + Math.sin((line.angle * Math.PI) / 180) * length

                return (
                  <motion.g
                    key={`left-${line.id}`}
                    animate={{
                      opacity: isLeftActive ? 1 : 0.25,
                      scale: isLeftActive ? 1.05 : 1
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ originX: x1 / 1200, originY: y1 / 520 }}
                  >
                    <line
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="url(#leftGradient)"
                      strokeWidth={isLeftActive ? 2 : 1}
                      strokeLinecap="round"
                    />
                    <circle cx={x2} cy={y2} r={isLeftActive ? 3 : 2} fill="#3b82f6" opacity={isLeftActive ? 1 : 0.4} />
                  </motion.g>
                )
              })}
            </g>

            {/* RIGHT SIDE */}
            <g>
              {rightLines.map((line) => {
                const x1 = 850
                const y1 = 260
                const length = isRightActive ? line.expandedLength : line.baseLength
                const x2 = x1 + Math.cos((line.angle * Math.PI) / 180) * length
                const y2 = y1 + Math.sin((line.angle * Math.PI) / 180) * length

                return (
                  <motion.g
                    key={`right-${line.id}`}
                    animate={{
                      opacity: isRightActive ? 1 : 0.25,
                      scale: isRightActive ? 1.05 : 1
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ originX: x1 / 1200, originY: y1 / 520 }}
                  >
                    <line
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="url(#rightGradient)"
                      strokeWidth={isRightActive ? 2 : 1}
                      strokeLinecap="round"
                    />
                    <circle cx={x2} cy={y2} r={isRightActive ? 3 : 2} fill="#3b82f6" opacity={isRightActive ? 1 : 0.4} />
                  </motion.g>
                )
              })}
            </g>
          </svg>

          {/* Center content — core realization message */}
          <motion.div
            className="relative z-20 text-center max-w-xl px-4"
            animate={{
              opacity: isAnyActive ? 1 : 0.7,
              scale: isAnyActive ? 1 : 0.97
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold mb-4 italic">
              And yet, something felt missing.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              People were sharing more than ever.
            </h2>
            <p className="text-muted-foreground text-lg">
              But the things that mattered most were still unsaid.
            </p>
          </motion.div>

        </div>

        {/* ===== FINAL ANCHOR STATEMENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 origin-left"
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