# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
