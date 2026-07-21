---
version: 3.0
name: Agent CRM
updated: 2026-07-22
status: brand + visual design brief for landing, favicon, OG assets
audience_primary: Chinese-speaking 出海 / foreign-trade SaaS sales teams, GTM leaders
anti_reference: generic "AI SaaS 2026 default skin" — see §0 changelog
repo: lizliz404/agent-crm · site: https://agent-crm.lizliz.xyz
---

# Agent CRM — Design Brief (V3)

> Single source of truth for brand/visual identity. Downstream image AI uses
> this to write final favicon and OG prompts. Not a roadmap.

---

> **前置诊断（来自 V3 audit）：** V2 correctly added `--color-agent` and Never Sleeps, but left the mark as a diamond with a few degrees of offset — imperceptible at 16px and unreliable for diffusion models. V3 replaces the concept with an asymmetric **Dock Mark** and adds `--color-agent-bright` for tiny high-impact accents (favicon chip, OG live-dot).

---

## 0. V2 → V3 changelog

| # | V2 diagnosis | V2 fix | Where it fails | V3 correction |
|---|---|---|---|---|
| 1 | No symbol says "an agent did this" | Added `--color-agent` cyan, kept out of favicon | The one new brand idea never reached the smallest touchpoint | Extend agent cyan into the mark via `--color-agent-bright` chip |
| 2 | Diamond mark reads generic/gem-like | "Offset inner diamond a few degrees" | Imperceptible at 16–32px; models collapse to symmetric rotated square | Replace concept: asymmetric **by construction** |
| 3 | No symbol encodes product thesis | None | Abstract diamond says nothing about CRM/agents | **Dock Mark** = smaller module docking into larger record |
| 4 | Static assets banned all dimensionality | Fully executed | Removed cues separating considered from generic | One calibrated exception: inset shadow at dock seam + faint glow on cyan chip only |
| 5 | WeChat / Never Sleeps / authorship rules | V2 added | — | Kept |

Everything else V2 added — `--color-agent` rules (§4.1), Never Sleeps (§5.7), WeChat variant, generic-AI-SaaS sniff test — kept.

---

## 1. Product Identity

**Agent CRM** — an agentic CRM: AI agents and human sellers share one system of record, continuously building pipeline, advancing deals, forecasting, retaining accounts.

- **Title:** Agent CRM — The CRM for agentic revenue
- **One-liner:** Agent CRM builds pipeline, advances deals, and grows accounts around the clock.
- **Hero headline:** Welcome to agentic revenue.

Platform framed as five jobs: Build pipeline · Convert leads · Run sales motions · Forecast revenue · Retain and expand. Supporting pillars: Self-building CRM, Universal Context™, Build to scale.

### Who is it for

**Primary:** Chinese-speaking 出海/foreign-trade SaaS GTM teams evaluating modern CRM, needing a product that feels globally credible (Attio/Linear/Stripe caliber).

| Persona | Cares about |
|---|---|
| VP/Head of Sales | Quota coverage, forecast clarity |
| AE/Sales manager | Speed-to-lead, deal risk signals |
| RevOps | Routing rules, auditability |
| Founder/GTM lead | Agent leverage without losing control |

**Strategic framing:** calibrated distinctiveness — different enough not to be mistaken for a template, familiar enough to still read as "that category."

---

## 2. Brand Personality

| Trait | Meaning |
|---|---|
| Professional | Clean hierarchy, muted neutrals, precise type |
| Sharp | Tight tracking, high-contrast ink on paper, decisive CTAs |
| Trustworthy | Live status dots, audit language, capability over hype |
| Modern SaaS | Floating nav island, product window theater, restrained motion |
| Not corporate-boring | No navy "enterprise" clichés, no stock handshakes |
| Not toy AI | No neon glow, no robot mascots, no magic-wand metaphors |
| **Agent-legible** | Every place agents act, the interface visibly says so |

**Voice:** Calm, capable, operator-grade. "Free your reps to sell." / "Agents dig. You close." / "Skip the review scramble."

**Emotional promise:** Your revenue machine keeps running while humans sleep — and everything agents do is legible, auditable, and under your control.

---

## 3. Visual Style

Light-first marketing surface (`paper`) with strategic dark sections (`ink`) for product depth. Product UI shown as macOS-style windows, dense but readable CRM data. Think Attio's product theater + Linear's restraint + Stripe's confidence — without cloning any one brand's logo or exact layout.

### Color behavior

- Canvas: near-white paper `#fafafa`
- Primary action: near-black `#0a0a0a` on light; inverted white on dark
- Text hierarchy: ink → mute-2 → mute → light gray
- Semantic accents sparingly: emerald (live/success), amber (watch), rose (risk), blue (info)
- Signature hue for "an agent produced this" — never status/semantics, only authorship
- **Bright tint** for tiny mark/OG points where muted UI cyan would read gray

### Typography

Inter Tight (display) / Inter (body), `cv11 ss01 ss03`. Hero clamp `~2.5rem→4.25rem`, line-height ~0.96, weight 600.

### Spacing & density

Max-width 1180px; py-24/28 sections; cards dense inside (13–14px), airy outside; 16px dot-grid.

### Component keywords

Floating island nav · frosted glass · soft lift shadows · rounded 10–16px · traffic-light window chrome · staggered fade-in · live pulse dots · typing indicators.

---

## 4. Design Tokens

### Colors

| Token | Hex | Role |
|---|---|---|
| `--color-ink` | `#0a0a0a` | Primary text/CTA fill/dark bg |
| `--color-ink-soft` | `#171717` | Soft dark surface |
| `--color-paper` | `#fafafa` | Page background |
| `--color-paper-2` | `#f4f4f5` | Secondary paper |
| `--color-line` | `#e5e5e5` | Default borders |
| `--color-line-strong` | `#d4d4d4` | Focus edges |
| `--color-mute` | `#737373` | Secondary body |
| `--color-mute-2` | `#525252` | Primary muted text |
| `--color-success` | `#16a34a` | Success semantic |
| `--color-warn` | `#d97706` | Warning semantic |
| `--color-danger` | `#dc2626` | Danger semantic |
| `--color-info` | `#2563eb` | Info/metric accent |
| `--color-agent` | `#0891b2` | Agent-authorship chip/ring, UI text-safe weight |
| **`--color-agent-bright`** | **`#22d3ee`** | **New — reserved for small, high-impact single points only: favicon/mark accent, OG live-dot. Same hue family, brighter tint for tiny areas.** |

### 4.1 Agent authorship token — rules of use

- `--color-agent` applies to: chips like `Drafted by Agent`, agent-terminal accent borders, agent avatar rings
- Never used for buttons, never used for status badges (those stay success/warn/danger)
- `--color-agent-bright` is NOT for UI chips — only mark dock chip and OG live-dot
- One visual grammar: cyan ring/chip = "an agent's hand touched this." No ring = human.

### Fonts / tracking / radius / shadows

Unchanged: `--font-display` Inter Tight, `--font-body` Inter; `--tracking-tighter -0.03em`; `--radius-btn 10px` / `--radius-card 14px` / `--radius-window 16px`; `--shadow-soft/lift/window` as before.

### Logo mark — Dock Mark (replaced)

Retired: diamond-in-diamond monogram and "radar-ping offset" refinement.

**Dock Mark construction:**

- Outer tile: rounded square, `#0a0a0a`, rx ≈ 22% of edge, full-bleed
- Inner shape: smaller rounded square, `#fafafa`, ~60% of tile width, offset slightly upper-left of center — deliberately not centered
- At inner shape's bottom-right corner: a small notch, with a solid square chip in `--color-agent-bright` (#22d3ee) seated into it, protruding slightly onto the dark tile
- One calibrated exception to flatness: soft inset shadow where chip meets notch, faint glow around chip only (indicator LED)

Why this wins: (1) literal picture of product thesis — agent docking into human record; (2) asymmetric by construction; (3) extends agent cyan to the smallest brand touchpoint.

---

## 5. Component Language

### Navigation, Hero, Product windows, Tabs, Cards, Dark feature band, CTA language, Micro-interactions

(Unchanged — floating frosted pill nav; centered editorial hero + HeroCollage; WindowChrome traffic-light windows; black-fill active tabs; soft white cards; full-bleed `#0a0a0a` dark band; black-fill primary CTA / translucent secondary; live dots, typing dots, chart draws, marquee logo cloud.)

### 5.7 "Never Sleeps" strip

A slim chip or ambient line: **`Agents active · 03:14 in Austin · 14:14 in Shenzhen`** — visitor local time plus one agent-relevant timezone, updating live. Paired with `--color-agent` cyan dot (UI weight, not agent-bright). Optional ambient night shift.

---

## 6. Landing Structure

Nav → Hero+HeroCollage (+ Never Sleeps strip) → LogoCloud → PlatformTabs/Mock → DarkFeature → FeatureCards (Universal Context™) → BuildToScale → CustomerStories → Changelog → FinalCTA → Footer.

Story arc: **Invite → show the machine working → prove depth and trust → social proof → ask for the next step.**

Key headlines to preserve: Welcome to agentic revenue. / The intelligent system that never sleeps. / Live from day one. / Agentic revenue runs on Agent CRM.

Site metadata: `en_US` locale, `summary_large_image` Twitter card, OG path `/og-image.png` (1200×630).

---

## 7. Audience & Tone

Chinese-speaking foreign-trade/出海 SaaS GTM teams, bilingual in practice — English UI is a trust signal, not a barrier.

| Do | Don't |
|---|---|
| Calm confidence | Hype/FOMO banners |
| Structured data & status | Abstract purple AI nebulae |
| Signal "global SaaS peer" | Cheap stock handshakes |
| English product naming | Chinese calligraphy in the mark |
| Agents + humans together | Imply humans are replaced |

---

## 8. Reference Aesthetics

| Reference | Steal | Leave |
|---|---|---|
| Attio | Product window collage, calm marketing | Exact logo/layout, purple accents |
| Linear | Typography discipline, dark/light contrast | Issue-tracker iconography, indigo |
| Stripe | Trust, precision | Gradient meshes as hero identity |

**Keywords (V3 add):** `docking connector` / `indicator LED` / `relay switch` alongside `geometric mark` / `ink on paper`.

**Anti-references:** Midjourney "AI brain/neural net/glowing robot," purple-indigo gradients, warm cream+terracotta (Acriva), neumorphism, cyberpunk neon, cartoon mascots, robots/antennae/chat bubbles, diamond/gemstone shapes, perfectly centered symmetric compositions.

---

## 9. Favicon Design Brief

### Goal

An asymmetric docking mark that pictures "agent connects to human record," not a generic gem. Legible at 16×16. Exactly one colored accent — `--color-agent-bright`.

### Format requirements

ICO (16+32 min), PNG 16/32/180/192/512, canonical SVG.

### What to avoid

Robots/antennae/chat bubbles; CRM clichés that mud at 16px; more than one accent color; thin vanishing strokes; wordmark in favicon; purple AI tropes; **a perfectly centered, perfectly symmetric composition — symmetry is now the thing to avoid.**

### Generation prompt (V2 — filled)

```text
Flat vector, high-contrast geometric monogram / app icon for a B2B SaaS
product. Single subject only, no wordmark.

A rounded-square tile — corner radius approx. 20–25% of the tile edge,
matching a modern macOS/iOS app-icon proportion — filled solid near-black
#0a0a0a, full-bleed with no outer padding ring, no halo, no drop shadow.

Centered inside: a rotated square (diamond/lozenge), solid fill near-white
#fafafa, occupying roughly 55–65% of the tile's width, centered. Inside that
white diamond, a smaller rotated square cut out in the same near-black
#0a0a0a as the tile — a diamond-within-a-diamond, same rotation angle,
BUT slightly offset from perfect concentric alignment (a few degrees of
rotation, or a couple of pixels of parallax) — just enough that it reads as
a radar ping / signal pulse frozen mid-scan, not a static gem facet or
jewelry logo. Keep the offset subtle and clean, not messy, still crisp and
intentional at 16×16.

Strictly monochrome: no gradients, no glow, no bevel, no glass effect, no
color other than the near-black tile and near-white diamond-in-diamond — no
emerald, no cyan, no accent color anywhere in the favicon itself.

Style keywords: geometric neo-grotesque, Attio/Linear-adjacent precision,
agent-node / signal-scan abstraction, sharp and premium, engineered rather
than decorative, distinct from generic crypto/diamond logos.

Do not include: robots, antennae, chat-bubble icons, funnel or bar-chart
iconography, purple gradients, neon, cute mascots, thin hairline strokes
that vanish at small sizes, any letterform or wordmark inside the tile,
perfectly symmetric static jewel/diamond without the scan-offset detail.

Deliver as a single crisp square vector icon, clean from 512×512 down to
16×16, exactly two tones: #0a0a0a and #fafafa.
```

---

## 10. OG Image Design Brief

### Goal

Instantly communicate: brand (Agent CRM), category (The CRM for agentic revenue), feel (dark-professional, capable not hype).

### Format

PNG, 1200×630, path `/og-image.png`, safe zone ~1080×540 center. Alt text: `Agent CRM — The CRM for agentic revenue`.

### Layout: Dark band authority + Dock Mark + Never Sleeps signal

Full `#0a0a0a` field, white/gray type, Dock Mark inverted, paired with a live-feeling cyan status line (`--color-agent-bright` live-dot) tying to Never Sleeps.

### Generation prompt (V2 — filled)

```text
Design a 1200×630 pixel horizontal Open Graph / social-share card for a
B2B SaaS product. Flat modern digital design — NOT a photograph, NOT a
3D render — Attio/Linear/Stripe-adjacent visual language: precise,
high-contrast, understated.

Background: full-bleed near-black #0a0a0a, completely flat, with an
extremely subtle fine dot-grid pattern (small light dots at very low
opacity, ~16px spacing) — a quiet "product workspace" texture, barely
visible. Safe margin of at least 60px on all sides.

Centered or left-of-center: one geometric app-icon mark — a rounded-square
tile filled near-white #fafafa, containing a nested diamond-in-diamond
motif (white diamond with a black diamond cutout, SLIGHTLY offset from
perfect concentric alignment, reading as a radar pulse mid-scan rather
than a static gem) — sized as a clear brand anchor, roughly 90–120px tall.

Beside or below the mark: the wordmark "Agent CRM" in a tight geometric
sans-serif (Inter Tight style, weight 600–700, negative letter-spacing),
near-white #fafafa, large and confident (~80–110px cap height).

Directly below: a smaller weight-500 line in muted light gray (#a3a3a3 or
#d4d4d4): "The CRM for agentic revenue".

Include exactly ONE small live-status element near the tagline: a tiny
solid cyan-teal dot (#0891b2 — distinct from a generic green status dot)
with the faint suggestion of a soft outward pulse ring (one frozen
animation frame), paired with a short small monospace-feeling line
implying real, live, round-the-clock operation (something evoking an
actual running clock/timestamp, not a generic "24/7" badge). This cyan dot
is the ONLY colored element on the entire canvas besides the near-white
mark and white/gray text — everything else stays strictly black, white,
gray.

Do not include: purple/violet gradients, neural-network or brain graphics,
stock photos of people or handshakes, illegible tiny UI screenshots,
multiple competing headlines, QR codes, app-store badges, busy footers,
watermarks, glass/neumorphic panels, warm-earth or teal-green tones (that
belongs to a different, unrelated brand — keep this strictly cool neutral
+ single cyan accent).

Overall mood: dark, precise, capable, quietly always-on — a premium B2B
tool for people who trust systems that keep working while they sleep, not
a hype-y AI toy.
```

### 10.6 微信分享卡变体

| 项 | 值 |
|---|---|
| 尺寸 | 500×500（方图） |
| 构图 | 居中：Dock Mark 占主视觉，"Agent CRM" 一行，tagline 一行；去掉 live-dot 细节 |

```text
Design a 500×500 pixel square social-share thumbnail, same visual family
as the Agent CRM favicon/OG: near-black #0a0a0a background, centered
white diamond-in-diamond mark (~55% of canvas width), "Agent CRM" wordmark
below in Inter Tight, and one smaller line "The CRM for agentic revenue"
below that — all in white/light-gray, no color accent, must read cleanly
at ~100×100px in a chat bubble. No dot-grid texture (too fine to survive
compression at this size), no live-dot detail, no additional copy.
```

---

## Appendix A — Copy Bank

Agent CRM · The CRM for agentic revenue · Welcome to agentic revenue. · Agent CRM builds pipeline, advances deals, and grows accounts around the clock. · The intelligent system that never sleeps. · Live from day one. · Universal Context · Agentic revenue runs on Agent CRM. · Start for free · Talk to sales

Platform tabs: Build pipeline · Convert leads · Run sales motions · Forecast revenue · Retain and expand

---

## Appendix B — Tech / File Map

`src/app/globals.css` (tokens) · `src/app/layout.tsx` (fonts/metadata/icons) · `src/app/page.tsx` (section order) · `src/lib/data.ts` (positioning) · `src/lib/animations.ts` (motion) · `public/icon.svg` (Dock Mark) · `README.md` (stack/Attio note)

---

## Appendix C — Decision Summary for Image AI

1. Brand = Agent CRM, agentic revenue CRM for humans + agents
2. Audience = Chinese-speaking 出海 SaaS GTM teams
3. Look = Attio/Linear/Stripe neighborhood, with Dock Mark + agent-authorship cyan — not a 1:1 clone of the 2026 default AI-SaaS skin
4. Favicon = Dock Mark, asymmetric, agent-bright chip, crisp at 16px, no robots/diamonds
5. OG = 1200×630, brand + value prop + agent-bright live-dot, no hype clutter
6. Do not invent product features beyond this brief

---

## Appendix D — Checklist Before Generating Assets

- [ ] Colors match §4 tokens; `--color-agent` for UI authorship; `--color-agent-bright` exactly once at docking chip (and OG live-dot)
- [ ] Typography feels Inter/Inter Tight
- [ ] Favicon legible at 16×16; mark is asymmetric, not a rotated diamond/gem
- [ ] OG exactly 1200×630 PNG, readable as tiny Slack/WeChat preview
- [ ] 微信方卡变体已产出（§10.6）
- [ ] No purple-AI/robot/stock-handshake tropes
- [ ] Feels peer to Attio/Linear without cloning marks

## Appendix E — "通用 AI SaaS 嗅探" 自检

Cover the logo/wordmark — can this still be told apart from any other 2026 AI SaaS landing page screenshot? If not, check whether the render kept the asymmetric dock/notch and the cyan chip, or collapsed back into a plain symmetric shape. This outranks "does it look nice."
