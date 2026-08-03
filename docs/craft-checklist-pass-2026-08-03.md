# Craft checklist pass — 2026-08-03

**Product:** agent-crm (agent-crm.lizliz.xyz)  
**Type:** SaaS marketing landing (Attio-style long scroll; no dense app tables in this repo)

## Already present

- One-shot section reveals via framer-motion `sectionInView` / `whileInView` (`viewport.once`)
- `scroll-behavior: smooth` + partial `prefers-reduced-motion` kills on pulses/radar/nav
- Open Graph + Twitter cards + JSON-LD (`src/app/layout.tsx`)
- Changelog block on the landing (`Changelog.tsx`)
- Newsletter success microcopy; basic email format check

## Implemented this pass

| Item | Where |
|---|---|
| 附 A — top scroll progress | `src/styles/premium-one-pager.css`, `src/lib/premium-one-pager.ts`, `PremiumOnePager.tsx` |
| 附 A — chapter dots (`data-chapter`) | section tags in Hero / PlatformTabs / DarkFeature / Signals / Connectivity / Developer / CustomerStories / Changelog / FinalCTA |
| 附 A — SVG noise overlay | same pack (brand opacity 0.03, multiply) |
| 附 A — selection + thin scrollbar + PRM | CSS tokens retuned to agent cyan `#0891b2` + ink `#0a0a0a`; `globals.css` selection + `scroll-behavior: auto` under PRM |
| #11 Error copy (newsletter) | `FinalCTA.tsx` — empty vs invalid messages, `role="alert"`, `aria-invalid` |
| Focus-visible on CTAs | `globals.css` `.btn-*` outline using `--color-agent` |
| Broken nav anchor | `Changelog` → `id="resources"` (matches Navbar `#resources`) |

Reveal: **not** re-implemented with `pop-reveal` — framer already one-shots; `enableReveal: false` to avoid double fade.

LogoCloud / BuildToScale intentionally omit `data-chapter` (logo strip + secondary grid).

## Explicitly skipped

- Dense CRM table chrome / app-shell craft — out of product surface here; brief says keep calm
- Soft-delete / undo / autosave / Cmd+K — no real app write paths
- Status page / dynamic OG generation — OG static asset already ships
- Pricing three-tier redesign / copy rewrite
- Swapping framer reveals → `pop-reveal` (refactor risk, no ROI)

## Residual P2/P3

- PRM: framer `sectionInView` still animates unless components pass `useReducedMotion` (Navbar does; section blocks mostly don’t)
- Newsletter submit is client-only success theater — wire real endpoint + honest failure copy when backend exists
- WeChat square OG (`og-wechat.png`) still commented in layout
- Hero collage mock “tables” are marketing chrome only — do not bolt progress/dots into future app routes
