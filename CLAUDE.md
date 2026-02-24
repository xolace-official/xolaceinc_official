# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What Xolace is 

# Xolace — Core Context

## 1. The Core Problem

We are living in the most connected generation in history — and one of the loneliest.

Today’s digital world has two dominant systems:

1. **Traditional social media**

   * Optimized for performance, attention, and comparison
   * Rewards curated identity over honest expression
   * Encourages “highlight reels” instead of real struggles
   * Turns vulnerability into content

2. **Clinical mental health systems**

   * Often expensive and inaccessible
   * Reactive instead of preventative
   * Entered only at a breaking point
   * Structured and time-bound

There is a massive gap between:

* “Everything is fine” (Instagram mode)
* “I need therapy” (clinical intervention)

Most people live in that gap.

They feel:

* Emotional pressure but not crisis
* Loneliness but not diagnosable disorder
* Anxiety but not “enough” to seek therapy
* Confusion about what they’re feeling

They don’t need a diagnosis.
They need a safe place to exhale.

That gap is where Xolace exists.

---

## 2. The Deeper Cultural Issue

We are facing:

* Performance culture
* Hustle culture
* Emotional suppression
* A generation taught to “cope silently”

Vulnerability has become either:

* Monetized
* Weaponized
* Or dismissed as weakness

Safe spaces online are either:

* Too chaotic
* Too anonymous and toxic
* Too clinical
* Or too shallow

There is no structured digital environment designed intentionally for:

* Honest expression
* Micro-healing moments
* Low-pressure emotional processing
* Everyday mental fitness

Mental health should not begin at crisis.
It should exist daily — like brushing your teeth.

---

## 3. Xolace’s Core Belief

We believe:

* Healing should be social, not isolating.
* Support should be ambient, not only scheduled.
* Mental wellness should be proactive, not reactive.
* Safe spaces need structure.
* People deserve a place to be human without performing.

Xolace is not therapy.
Xolace does not replace professionals.

Xolace exists:
**Before therapy. Between therapy. Outside therapy.**

It is emotional infrastructure.

---

## 4. Vision

To build the world’s most trusted digital emotional space —
a place where people show up honestly without performing.

Long-term vision:

* Make emotional regulation and expression part of everyday digital life.
* Normalize anonymous honesty.
* Blend community and guided support seamlessly.
* Redesign how social platforms treat vulnerability.
* Become the “digital campfire” of the internet.

Not a feed.
Not a clinic.

A structured emotional commons.

---

## 5. Mission

To create a psychologically safe, structured digital environment
where people can express themselves honestly,
connect meaningfully,
and access embedded support —
without pressure, performance, or stigma.

---

## 6. The Dream

The long-term dream is larger than an app.

We want to:

* Shift culture from performance to presence.
* Make daily emotional check-ins normal.
* Lower the barrier to seeking help.
* Reduce silent suffering.
* Build a trusted bridge between community and professional care.

In 10 years, the goal is that when someone feels:

* Overwhelmed
* Unseen
* Confused
* Emotionally heavy

Their instinct is:
“Let me go to Xolace.”

Not to scroll.
Not to distract.
But to process.

---

## 7. What Xolace Is (Philosophically)

Xolace is a hybrid of:

* Social network (connection)
* Emotional journaling space (expression)
* Micro-wellness platform (guided tools)
* Structured community system (accountability & safety)

It is intentionally designed around:

* Psychological safety
* Identity flexibility
* Low-pressure participation
* Gentle guidance

The metaphor is a **digital campfire**:

* Firestarters (those who post)
* Campers (those who respond)
* Firekeepers (trusted guides/moderators)

Not influencers.
Not followers.
Participants.

---

## 8. Current Features (Light Overview)

While the mission is philosophical, we currently operate with:

* Anonymous posting
* Community-based spaces (“Campfires”)
* Daily prompts
* Mood-linked interactions
* Comments, votes, and collections
* Health tips
* Short-form reflective video (“Glimpses”)
* Activity tracking
* Structured moderation roles
* AI credit system (for future guided tools)

Near-term evolution includes:

* Voice-based posting
* AI voice companions
* Emotion-aware prompts
* A personalized AI assistant (Aniima)

But features are not the core.
The core is emotional infrastructure.

---

## 9. Strategic Positioning

Xolace complements therapy — it does not compete with it.

It is:

* Not a crisis hotline.
* Not a diagnosis tool.
* Not a replacement for professionals.
* Not another dopamine-driven social feed.

It is the “daily layer” of mental wellness.

If therapy is the hospital,
Xolace is the gym.

If therapy is surgery,
Xolace is hygiene.

---

## 10. What Makes This Different

Most platforms optimize for:

* Attention
* Addiction
* Engagement time

Xolace optimizes for:

* Emotional safety
* Healthy expression
* Sustainable engagement
* Trust

This is slower.
Harder.
But more durable.

---

## 11. Long-Term Architecture Philosophy

When designing Xolace, systems should prioritize:

* Privacy-first thinking
* Consent-based interactions
* Low algorithmic manipulation
* Transparent moderation
* Role-based trust layers
* AI as augmentation, not authority

The product must always reflect:
Safety > Growth
Trust > Virality
Depth > Scale

## Commands

```bash
bun dev              # Start dev server
bun run build        # Production build
bun run start        # Start production server
bun run lint         # Lint with Biome
bun run format       # Format with Biome
bun run add-component  # Add shadcn component (bun x --bun shadcn@latest add)
```

No test runner is configured.

## Tech Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript** (strict)
- **Bun** as package manager and runtime — always use `bun`, never npm/yarn/pnpm
- **Tailwind CSS v4** — CSS-first config, no `tailwind.config.js`. All theme tokens are CSS custom properties in `src/app/globals.css` using `oklch()` color space
- **Biome** for linting and formatting — no ESLint or Prettier in this project
- **shadcn/ui** (new-york style, zinc base) with Radix UI primitives
- **motion/react** (Framer Motion v12) for animations
- **React Compiler** enabled — avoid manual `useMemo`/`useCallback`
- **lucide-react** for icons, **@tabler/icons-react** for social icons

## Architecture

**Routing:** Next.js App Router under `src/app/`. Default is React Server Components; client components use `'use client'` directive.

**Layout:** `src/app/layout.tsx` wraps all pages: `MotionProvider > NavBar > {children} > Footer`. Layout-level shared components (NavBar, Footer, CTAButton) live in `src/layout/`.

**Page sections:** Each page is composed from section components in `src/pages/<page-name>/` (e.g., `src/pages/home/hero-section.tsx`). This is NOT the Next.js Pages Router — it's a custom organizational folder.

**UI primitives:** shadcn components in `src/components/ui/`. Add new ones with `bun run add-component`.

**Providers:** `src/providers/` — currently `MotionProvider` (respects `prefers-reduced-motion`).

## Conventions

- Use `@/` import alias for all imports from `src/` — never relative paths like `../`
- Use `cn()` from `@/lib/utils` for merging Tailwind classes
- Use the `.section` CSS class (defined in `globals.css`) for consistent page section padding
- Static assets are in `public/assests/` (note: directory has a typo, match this spelling)
- shadcn config: RSC enabled, CSS variables, lucide icons (`components.json`)
