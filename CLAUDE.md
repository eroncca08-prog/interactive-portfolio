# Interactive Portfolio — Claude Guidelines

## Project Context
Personal interactive portfolio website. Goal: memorable, production-grade, visually distinctive — zero generic AI aesthetics.

---

## Stack & Architecture

- **Framework:** React or Next.js (default to Server Components; isolate interactive parts with `"use client"`)
- **Styling:** Tailwind CSS — check `package.json` for v3 vs v4 before using syntax
  - v4: use `@tailwindcss/postcss`, NOT the `tailwindcss` postcss plugin
- **Animations:** Framer Motion for UI interactions; GSAP/ThreeJS only for isolated full-page scroll or canvas — never mix both in the same component tree
- **Icons:** `@phosphor-icons/react` or `@radix-ui/react-icons` — verify installation before importing; `strokeWidth` of `1.5` or `2.0` globally
- **Images:** `https://picsum.photos/seed/{random_string}/800/600` for placeholders — never Unsplash links

**Before importing any 3rd-party library**, check `package.json`. Output `npm install <package>` if missing.

---

## Design Dials (Baseline)

| Dial | Value | Meaning |
|---|---|---|
| `DESIGN_VARIANCE` | **8** | Asymmetric layouts, masonry, fractional CSS Grid, massive empty zones |
| `MOTION_INTENSITY` | **6** | Fluid CSS transitions, `animation-delay` cascades, `cubic-bezier` easing, `transform`/`opacity` only |
| `VISUAL_DENSITY` | **4** | Daily-app spacing — balanced breathing room, standard section gaps |

Override dynamically only when the user explicitly requests it.

---

## Typography

- **Display/Headlines:** `text-4xl md:text-6xl tracking-tighter leading-none`
- **Body:** `text-base leading-relaxed max-w-[65ch]`
- **Allowed fonts:** `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi` — pair a distinctive display font with a refined body font
- **BANNED:** `Inter`, `Roboto`, `Arial`, `system-ui` for premium/creative contexts; Serif on dashboards/software UIs

---

## Color Rules

- Max **1 accent color**, saturation < 80%
- Base: absolute neutrals (`Zinc`, `Slate`) — pick warm OR cool gray and stay consistent
- **BANNED:** purple/blue AI gradients, neon glows, oversaturated accents, pure `#000000` (use Zinc-950/Charcoal), gradient text on large headings

---

## Layout Rules

- `max-w-[1400px] mx-auto` or `max-w-7xl` for page containers
- Full-height sections: `min-h-[100dvh]` — **never `h-screen`**
- Use **CSS Grid** for multi-column structures — never `w-[calc(33%-1rem)]` flex math
- **BANNED:** centered hero/H1 (DESIGN_VARIANCE > 4) — use split-screen, left-aligned, or asymmetric layouts
- **BANNED:** 3 equal horizontal cards — use zig-zag, asymmetric grid, or horizontal scroll

Mobile: any asymmetric layout above `md:` must collapse to single-column (`w-full px-4 py-8`)

---

## Motion Rules

- Animate only `transform` and `opacity` — never `top`, `left`, `width`, `height`
- Magnetic hover / continuous animations: use Framer Motion `useMotionValue` + `useTransform` — **never `useState`** for these
- Stagger reveals: `staggerChildren` (Framer) or `animation-delay: calc(var(--index) * 100ms)`
- Perpetual micro-animations must be isolated in their own `React.memo` Client Component
- `useEffect` animations must include cleanup functions
- Grain/noise overlays: apply only to `fixed inset-0 pointer-events-none` pseudo-elements

---

## Interaction States (Mandatory)

Every interactive element must implement all four states:
1. **Loading** — skeletal loaders matching layout shape (no generic spinners)
2. **Empty** — composed empty state showing how to populate
3. **Error** — inline, clear error reporting
4. **Active/Tactile** — `-translate-y-[1px]` or `scale-[0.98]` on `:active`

---

## Cards & Elevation

- Use cards only when elevation communicates hierarchy
- Tint shadows to the background hue
- For high-density UIs: replace cards with `border-t` / `divide-y` / negative space
- Glassmorphism: `backdrop-blur` + `border-white/10` + `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`

---

## Content & Copy

- No generic placeholder names ("John Doe", "Acme", "Nexus")
- No predictable numbers (`99.99%`, `50%`) — use organic values (`47.2%`, `+1 (312) 847-1928`)
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen" — use concrete verbs

---

## Absolute Bans

- Emojis anywhere in code, markup, or content
- `z-index` spam — use only for systemic layers (navbars, modals, overlays)
- Custom mouse cursors
- Outer glow `box-shadow` — use inner borders or tinted shadows
- Unsplash URLs
- shadcn/ui in default generic state — always customize radii, colors, shadows

---

## Design Aesthetic Checklist (Pre-Output)

- [ ] Mobile single-column collapse guaranteed for asymmetric layouts?
- [ ] Full-height sections use `min-h-[100dvh]`?
- [ ] `useEffect` animations have cleanup?
- [ ] Empty / loading / error states implemented?
- [ ] Perpetual animations isolated in memoized Client Components?
- [ ] No Inter, no purple gradients, no centered hero?
- [ ] Font pairing is distinctive and context-appropriate?
- [ ] One accent color, neutral base?
- [ ] Layout is asymmetric, memorable, and intentional?
