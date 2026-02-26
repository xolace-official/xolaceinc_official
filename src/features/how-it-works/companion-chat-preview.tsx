"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const messages = [
  {
    role: "user" as const,
    text: "I\u2019ve been feeling overwhelmed lately.",
  },
  {
    role: "companion" as const,
    text: "That sounds heavy. Would it help to break down what\u2019s weighing on you most?",
  },
  {
    role: "user" as const,
    text: "I think so. There\u2019s just a lot going on at once.",
  },
  {
    role: "companion" as const,
    text: "Let\u2019s start with one thing. What feels most pressing right now?",
  },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-bl-sm bg-accent/5 border-l-2 border-accent/30 w-fit">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-accent/40"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.6,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function CompanionChatPreview() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative"
      initial={reducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {/* Ambient teal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[80px] opacity-[0.06] bg-accent pointer-events-none" />

      {/* Chat window */}
      <div className="relative rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center gap-3 px-5 py-3.5 bg-muted/50 border-b border-border/30">
          <div className="relative">
            <Image
              src="/assests/mascot/mascot-wave.png"
              alt="Aniima companion"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-contain bg-accent/10"
            />
            {/* Status dot */}
            <motion.div
              className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-card"
              animate={
                reducedMotion
                  ? undefined
                  : { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }
              }
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
          <div>
            <p className="text-sm font-semibold leading-none">Aniima</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              AI Companion
            </p>
          </div>
        </div>

        {/* Messages area */}
        <div className="px-5 py-5 space-y-3 min-h-[260px]">
          {messages.map((msg, i) => {
            const isUser = msg.role === "user";
            return (
              <motion.div
                key={`msg-${i}`}
                className={isUser ? "flex justify-end" : "flex justify-start"}
                initial={
                  reducedMotion ? undefined : { opacity: 0, y: 12 }
                }
                whileInView={
                  reducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: reducedMotion ? 0 : 0.5 + i * 0.4,
                }}
              >
                <div
                  className={
                    isUser
                      ? "max-w-[80%] px-4 py-3 rounded-2xl rounded-br-sm bg-muted text-sm leading-relaxed"
                      : "max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-sm bg-accent/5 border-l-2 border-accent/30 text-sm leading-relaxed"
                  }
                >
                  {msg.text}
                </div>
              </motion.div>
            );
          })}

          {/* Typing indicator */}
          <motion.div
            className="flex justify-start"
            initial={reducedMotion ? undefined : { opacity: 0 }}
            whileInView={reducedMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.3,
              delay: reducedMotion ? 0 : 2.1,
            }}
          >
            {reducedMotion ? (
              <div className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-bl-sm bg-accent/5 border-l-2 border-accent/30 w-fit">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-accent/40"
                  />
                ))}
              </div>
            ) : (
              <TypingIndicator />
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
