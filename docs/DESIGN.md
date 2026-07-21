# Agent CRM — Design Brief

> **Purpose of this document**  
> This is the single source of truth for brand and visual identity. Another AI will use it to generate favicon and Open Graph image prompts. It is not a product roadmap and not an implementation plan. Do not invent new product features from this file; reflect the existing landing and design system as shipped in the repo (`lizliz404/agent-crm`, site: `https://agent-crm.lizliz.xyz`).

---

## 1. Product Identity

### What is Agent CRM?

**Agent CRM** is an agentic CRM: a revenue operating system where AI agents and human sellers share one system of record. The product promise is continuous revenue work — building pipeline, advancing deals, forecasting, and retaining accounts — without waiting for a human to open a spreadsheet.

Canonical positioning (from site metadata and hero copy):

- **Title:** Agent CRM — The CRM for agentic revenue  
- **One-liner:** Agent CRM builds pipeline, advances deals, and grows accounts around the clock.  
- **Hero headline:** Welcome to agentic revenue.  
- **Footer tagline:** The CRM for agentic revenue. Built for teams that run on agents and humans together.

The product is framed as a **platform**, not a single feature:

1. **Build pipeline** — agents prospect and reach out when buyers are looking  
2. **Convert leads** — enrich, score, and route before leads cool off  
3. **Run sales motions** — brief meetings, catch stakeholder shifts and stalls  
4. **Forecast revenue** — answer quota and pipeline questions in seconds  
5. **Retain and expand** — spot churn risk and expansion early  

Supporting pillars on the landing:

- **Self-building CRM** — connect inbox/calendar; the system learns the business before the first agent runs  
- **Universal Context™** — all signals, none of the noise; agents + automations, ecosystem connectors, SDK / API / MCP  
- **Build to scale** — permissions, audit trails, realtime collaboration, agent-native surfaces  

### Who is it for?

**Primary audience (business intent for this brand):**  
Chinese-speaking **foreign trade / 出海 SaaS sales teams** and B2B GTM leaders evaluating modern CRM. They sell cross-border or build SaaS for international buyers. They need a product that feels globally credible (Attio / Linear / Stripe caliber), not a local “enterprise portal.”

**Buyer personas the landing speaks to:**

| Persona | What they care about |
|---|---|
| VP / Head of Sales | Quota coverage, forecast clarity, reps selling instead of researching |
| AE / Sales manager | Speed-to-lead, meeting briefs, deal risk signals |
| RevOps / GTM ops | Routing rules, auditability, stack integrations |
| Founder / GTM lead at growth SaaS | Agent leverage without losing control or trust |

**Secondary audience (visual / competitive frame):**  
Global SaaS buyers who already recognize Attio / Linear aesthetics. The landing language is English; the emotional job for Chinese 外贸/出海 teams is: *this looks like the same class of tool my overseas peers use.*

### Repo / stack context (for visual realism)

- GitHub: `lizliz404/agent-crm`  
- Package name: `agent-crm`  
- Stack: Next.js 16 (static export), React 19, Tailwind CSS v4, Framer Motion, TypeScript  
- Design lineage: marketing page inspired by Attio’s design language; reference studies also include dense Chinese 出海 SaaS dashboards (product-window density), but the **public brand surface** stays Attio/Linear-adjacent, not copy-paste Chinese admin UI.

---

## 2. Brand Personality

Agent CRM should feel:

| Trait | Meaning in practice |
|---|---|
| **Professional** | Clean hierarchy, muted neutrals, precise type — buyers trust money and pipeline data |
| **Sharp** | Tight letter-spacing, high-contrast ink on paper, decisive CTAs (black fill) |
| **Trustworthy** | Live status dots, audit language, badges for confidence / risk — capability over hype |
| **Modern SaaS** | Floating nav island, product window theater, soft shadows, restrained motion |
| **Not corporate-boring** | Avoid navy-blue “enterprise” clichés, stock handshakes, gradient-purple AI fluff |
| **Not toy AI** | Avoid neon glow, robot mascots, sparkle explosions, “magic wand” metaphors |

**Voice:** Calm, capable, operator-grade. Short sentences. Outcomes over adjectives.  
Examples of on-brand phrasing already in product copy:

- “Free your reps to sell.”  
- “Agents dig. You close.”  
- “Skip the review scramble.”  
- “All of the signals, none of the noise.”  

**Off-brand voice:** Hype (“10x your revenue overnight”), crypto energy, meme culture, or soft lifestyle branding.

**Emotional promise:**  
*Your revenue machine keeps running while humans sleep — and everything agents do is legible, auditable, and under your control.*

---

## 3. Visual Style

### Overall look

Light-first marketing surface (`paper` background) with **strategic dark sections** (`ink` black) for product depth. Product UI is shown as **macOS-style windows** with traffic lights, light and dark chrome variants, dense but readable CRM data (lists, KPIs, charts, transcripts, agent terminals).

Think: **Attio’s product theater + Linear’s restraint + Stripe’s confidence** — dark when proving substance, light when inviting action. Do **not** clone any one of those brands’ logos or exact layouts.

### Color behavior

- Default canvas: near-white paper (`#fafafa`) with soft gray borders  
- Primary action: near-black (`#0a0a0a`) buttons on light; inverted white buttons on dark sections  
- Text hierarchy: ink (`#0a0a0a`) → mute-2 (`#525252`) → mute (`#737373`) → light gray (`#a3a3a3`)  
- Semantic accents sparingly: emerald (live/success), amber (watch), rose/red (risk), blue (info/metrics)  
- Accent colors appear in **badges, charts, avatars, live dots** — never as the primary brand wash  

### Typography

- **Display:** Inter Tight (`--font-inter-display`) — hero and section titles, tight tracking (−0.03em / −0.02em)  
- **Body:** Inter (`--font-inter`) with OpenType features `cv11`, `ss01`, `ss03`  
- Hero sizes clamp large (`~2.5rem → 4.25rem`), line-height ~0.96, weight 600  
- Section titles medium weight (500), slightly looser than hero  
- Eyebrows: small uppercase, letter-spacing 0.04em, mute-2 color  

### Spacing & density

- Page container max-width **1180px**, horizontal padding **1.5rem**  
- Major sections use generous vertical rhythm (`py-24` / `md:py-28`)  
- Cards and windows are dense inside (13–14px UI text) but surrounded by air  
- Dot-grid backgrounds (16px) signal “product workspace” without clutter  

### Component style keywords

Floating island nav · frosted glass · soft lift shadows · rounded 10–16px (not playful pills everywhere except nav) · traffic-light window chrome · interactive hover lift (−2px to −4px) · staggered fade-in · live pulse dots · typing indicators · light/dark product mocks

### Motion style (from `src/lib/animations.ts`)

- Easing: cubic-bezier `(0.22, 1, 0.36, 1)` — smooth ease-out, premium feel  
- Fade-in-up: ~18–22px rise, 0.55–0.6s  
- Stagger children: ~0.08s  
- Soft hover: `y: -2` over 0.2s  
- Prefer-reduced-motion respected (animations disabled)  
- Motion is presence and hierarchy, not decoration noise  

---

## 4. Existing Design Tokens

Extracted from `src/app/globals.css` (`@theme` and component layer). Treat these as **canonical**.

### Colors

| Token | Hex | Role |
|---|---|---|
| `--color-ink` | `#0a0a0a` | Primary text, primary CTA fill, dark section bg |
| `--color-ink-soft` | `#171717` | Soft dark surface |
| `--color-paper` | `#fafafa` | Page background |
| `--color-paper-2` | `#f4f4f5` | Secondary paper / hover fills |
| `--color-line` | `#e5e5e5` | Default borders |
| `--color-line-strong` | `#d4d4d4` | Stronger borders / focus edges |
| `--color-mute` | `#737373` | Secondary body / muted headlines |
| `--color-mute-2` | `#525252` | Primary muted text, nav links |
| `--color-success` | `#16a34a` | Success semantic |
| `--color-warn` | `#d97706` | Warning semantic |
| `--color-danger` | `#dc2626` | Danger semantic |
| `--color-info` | `#2563eb` | Info / metric accent |

**Frequently used hard-coded companions (in components):**

- White / near-white: `#ffffff`, `#fafafa`, `#fbfbfb`, `#f7f7f7`  
- Dark window: `#111`, `#161616`, borders `#262626`  
- Selection highlight: `#d4d4d4`  
- Traffic lights: `#ff5f57`, `#febc2e`, `#28c840`  
- Avatar tones: blue / violet / amber / rose / emerald / slate pastels  

### Fonts

| Token | Stack |
|---|---|
| `--font-display` | Inter Tight → ui-sans-serif → system-ui → sans-serif |
| `--font-body` | Inter → ui-sans-serif → system-ui → sans-serif |

CSS variables from Next font loader: `--font-inter`, `--font-inter-display`.

### Letter-spacing

| Token | Value |
|---|---|
| `--tracking-tighter` | `-0.03em` |
| `--tracking-tight` | `-0.02em` |

### Border radius

| Token | Value | Typical use |
|---|---|---|
| `--radius-btn` | `10px` | Primary / secondary buttons, inputs |
| `--radius-card` | `14px` | Cards (`.surface-card`) |
| `--radius-window` | `16px` | Product windows |
| Full pill | `9999` / `999px` | Nav island, some chips / badges |

Customer story tiles use ~`18px`. Changelog cards ~`16px`.

### Shadows

| Token | Value | Feel |
|---|---|---|
| `--shadow-soft` | `0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)` | Resting card |
| `--shadow-lift` | `0 2px 4px rgba(0,0,0,0.04), 0 16px 40px rgba(0,0,0,0.1)` | Hover / emphasis |
| `--shadow-window` | `0 0 0 1px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.12)` | Product window |
| Nav island | `0 8px 30px rgba(0,0,0,0.08)` (+ stronger on hover) | Floating chrome |

### Surface utilities (visual language)

- `.surface-card` — white, 1px line border, soft shadow, 14px radius  
- `.surface-window` — white window with subtle ring + window shadow  
- `.surface-window-dark` — `#111` window, `#262626` border, light text  
- `.dot-grid` / `.dot-grid-dark` — 16×16 radial dots  
- `.btn-primary` / `.btn-secondary` / `.btn-ghost`  
- `.badge-success` / `.badge-danger` / `.badge-warn` / `.badge-neutral`  
- `.live-dot` — emerald pulse for “live / enriched / running”  
- `.typing-dot` — subtle bounce for agent response pending  

### Logo mark (existing)

Current mark in `public/icon.svg` and `LogoMark` component:

- Rounded square (`rx≈8` on 32 viewBox) filled `#0a0a0a`  
- White diamond / rotated square (lozenge) centered  
- Small black diamond cutout in the center of the white diamond  
- Wordmark: “Agent CRM” in semibold tight tracking next to the mark  

This establishes a **geometric monogram** language: diamond = agent node / decision / compass — abstract, not literal robot.

---

## 5. Component Language

Describe patterns another designer/AI should recognize as “Agent CRM UI.”

### Navigation — Dynamic Island

- Fixed, centered, floating **pill** (`rounded-full`)  
- Frosted: `bg-white/92` + `backdrop-blur-xl` + hairline border  
- Compacts on scroll (shorter height, fewer links)  
- Primary CTA inside nav: black pill “Start for free”  
- Mobile: dropdown panel under island, rounded-2xl, same glass treatment  

### Hero

- Centered editorial column (max ~720px)  
- Announcement pill with emerald live dot + soft arrow  
- Massive display headline, short body, dual CTA (primary black + secondary glass)  
- Below: **HeroCollage** — three-column theater of product windows (slightly rotated, hover-unrotates)  

### Product windows

Every serious demo lives in `WindowChrome`:

- Traffic lights left  
- Centered title  
- Optional trailing control (Compose, Live badge, timer)  
- Light chrome (`#f7f7f7` header) or dark chrome (`#161616`)  
- Content: CRM lists, agent terminal (mono), workflow graph, meeting transcript, KPIs  

### Tabs & segmented controls

- Platform section: vertical (desktop) / horizontal-scroll (mobile) tab list; **active = black fill + white text**  
- Feature cards: rounded-full pill toggles; same active pattern  
- Customer stories: rectangular 10px-radius toggles  

### Cards & grids

- Soft white cards with 1px `#e5e5e5` borders  
- Scale section: 4-up numbered cards (`01`–`04` in paper-2 tiles)  
- Changelog: media-top gradient stub + tag badge + date + title + desc; hover lift  
- Customer story: split panel — copy left, soft gradient metric right  

### Dark feature band

- Full-bleed `#0a0a0a` with dark dot-grid  
- Live “Self-building” pill with emerald pulse  
- Inverted CTA (white button on black)  
- Dark product window showing contact intelligence (highlights, upcoming, activity)  

### CTA language

- Primary: black fill, white text, 10px radius, subtle border `#262626`  
- Secondary: translucent white, ink text, line-strong border  
- Final CTA: large display line “Agentic revenue runs on Agent CRM.” + same dual buttons  
- Email subscribe: 10px input + primary button  

### Micro-interactions that define “alive”

- Live dots pulsing (emerald / red / amber)  
- Typing dots when agent replies  
- Idle highlight cycling through list rows  
- Chart pathLength draws, health bars grow  
- Workflow connector shimmer  
- Logo cloud infinite marquee  

### What the UI is *not*

- Not a colorful dashboard theme pack  
- Not neumorphism  
- Not glassmorphism-everywhere (glass is reserved for nav / floating overlays)  
- Not illustration-heavy — product UI *is* the illustration  

---

## 6. Current Landing Structure

Page composition (`src/app/page.tsx`) — story order:

| # | Section | Component | Narrative job |
|---|---|---|---|
| 1 | Nav | `Navbar` | Persistent access + free CTA |
| 2 | Hero | `Hero` + `HeroCollage` | Name the category (“agentic revenue”) and prove product theater |
| 3 | Social proof | `LogoCloud` | “Trusted by revenue teams shipping with agents” |
| 4 | Platform | `PlatformTabs` + `PlatformMock` | Five jobs-to-be-done with interactive mocks |
| 5 | Dark depth | `DarkFeature` | Self-building CRM / day-one intelligence |
| 6 | Context | `FeatureCards` | Universal Context™ — agents, ecosystem, SDK/API/MCP |
| 7 | Scale | `BuildToScale` | Enterprise-grade trust (perms, audit, collab, agents) |
| 8 | Proof | `CustomerStories` | Metrics-led case tiles |
| 9 | Momentum | `Changelog` | Weekly product cadence |
| 10 | Convert | `FinalCTA` | Email + closing dual CTA |
| 11 | Footer | `Footer` | Platform / company / import / resources |

### Story arc in one sentence

**Invite → show the machine working → prove depth and trust → social proof → ask for the next step.**

### Key headlines to preserve in brand assets

- Welcome to agentic revenue.  
- The intelligent system that never sleeps.  
- Live from day one.  
- Universal Context ™  
- Run at any scale.  
- Trusted by 30,000+ customers.  
- Better as you grow.  
- Agentic revenue runs on Agent CRM.  

### Site metadata (for OG / social consistency)

- URL: `https://agent-crm.lizliz.xyz`  
- Title: Agent CRM — The CRM for agentic revenue  
- Description: Agent CRM builds pipeline, advances deals, and grows accounts around the clock.  
- Locale: `en_US`  
- Twitter card: `summary_large_image`  
- Existing OG path expectation: `/og-image.png` (1200×630)

---

## 7. Audience & Tone

### Audience realities

- Chinese-speaking foreign trade professionals and 出海 SaaS GTM teams  
- Buyers are bilingual in practice: English product UI is a **trust signal**, not a barrier  
- They compare against Salesforce/HubSpot fatigue and against flashy “AI CRM” toys  
- They need **capability + control**: agents that work 24/7, humans who approve what matters  

### Tone guidelines for imagery and captions

| Do | Don’t |
|---|---|
| Calm confidence | Hype / FOMO banners |
| Show structured data & status | Abstract purple AI nebulae |
| Signal “global SaaS peer” quality | Cheap stock photos of handshakes |
| Use English product naming | Overload Chinese calligraphy into the mark |
| Suggest agents + humans together | Imply humans are replaced |

### Cultural note for designers / prompt AIs

Acknowledge the Chinese B2B 外贸/出海 context **in positioning**, but keep the **visual system international**. The product should look at home on Product Hunt, Linear’s neighborhood, and a Shenzhen SaaS founder’s browser tab alike. Prefer clarity and density over decorative Chinoiserie or generic “Asia tech” tropes.

---

## 8. Reference Aesthetics

### Primary references (feel, not clone)

| Reference | Steal this | Leave this |
|---|---|---|
| **Attio** | Product window collage, calm marketing, CRM as theater | Exact logo, exact layout, purple accents if any |
| **Linear** | Typography discipline, dark/light contrast, operator seriousness | Issue-tracker iconography, indigo brand color |
| **Stripe** | Trust, precision, financial-grade confidence | Gradient meshes as hero identity, Stripe wordmark |
| **Dense 出海 SaaS dashboards** (internal refs) | KPI density, realistic list/chart fidelity | Webcam chrome, Chinese caption overlays, admin clutter |

### Aesthetic keywords for image generation briefings

`dark professional SaaS` · `data-dense` · `frictionless` · `product theater` · `geometric mark` · `ink on paper` · `soft shadow` · `live status` · `agent + human` · `high-end B2B` · `minimal chrome` · `Inter / Inter Tight` · `near-black primary` · `emerald live accents`

### Anti-references (explicitly avoid)

- Generic Midjourney “AI brain / neural net / glowing robot”  
- Purple-on-white / purple-to-indigo startup gradients as brand identity  
- Warm cream + terracotta + serif “editorial” landing cliché  
- Neumorphic soft UI  
- Cyberpunk neon  
- Cartoon mascots  
- Busy 3D isometric cities  
- Fake App Store screenshots with wrong OS chrome  

---

## 9. Favicon Design Brief

> Another AI will write the actual image-generation prompts. This section specifies constraints and intent only.

### Goal

A favicon that reads as **Agent CRM** at a glance: sharp, geometric, trustworthy, modern SaaS. It should feel like a system mark for agentic revenue — a node / decision / compass — not a robot face.

### Emotions / impressions

- Capable and precise  
- Always-on (subtle, not literal clocks)  
- Premium B2B, peer to Attio/Linear  
- Memorable at 16×16  

### Format requirements

Produce (or specify exports for) all of:

| Asset | Size / format | Notes |
|---|---|---|
| Favicon ICO | multi-size `.ico` | Include 16 and 32 at minimum |
| PNG 16 | `16×16` | Must remain legible — simplify geometry |
| PNG 32 | `32×32` | Match current `favicon-32.png` slot |
| Apple Touch | `180×180` PNG | Safe padding; no tiny hairlines |
| PWA / Android | `192×192` PNG | Optional but preferred |
| Large icon | `512×512` PNG | Maskable-safe padding recommended |
| SVG | scalable vector | Canonical source; crisp at all sizes |

Align with existing layout metadata icons: `/icon.svg`, `/favicon.ico`, `/favicon-16.png`, `/favicon-32.png`, `/apple-touch-icon.png`, `/icon-512.png`.

### Elements that might work

- **Monogram:** stylized “A” or “AC” built from geometric planes  
- **Abstract mark:** diamond / lozenge / rotated square (consistent with current `icon.svg`)  
- **Node metaphor:** center core + outer diamond suggesting agent action inside a CRM system  
- **High-contrast:** `#0a0a0a` field + `#fafafa` figure (or inverse for apple-touch if needed)  
- Slight corner radius (~25% of a 32px tile → ~8px) to match current rounded-square container  

### Existing mark to evolve (not discard blindly)

Current SVG concept:

- Black rounded square  
- White diamond  
- Inner black diamond cutout  

A redesign may refine proportions, optical balance at 16px, and maskable padding — but should stay in the **same geometric family** unless a clearly stronger monogram wins.

### What to avoid

- Literal robots, bots, antennae, chat bubbles as the only mark  
- CRM clichés (funnels, bar charts) that turn to mud at 16px  
- Gradients, glows, multi-color logos  
- Thin strokes that disappear at small sizes  
- Wordmark inside the favicon (except possibly apple-touch if space allows — prefer mark-only)  
- Purple AI tropes  

### Deliverable placeholder for prompt AI

```
[待其他 AI 生成具体 prompt]
```

Use the tokens, emotions, formats, and avoid-list above when writing prompts. Prefer vector-first thinking; rasterize for PNG/ICO exports.

---

## 10. OG Image Design Brief

> Another AI will write the actual image-generation prompts. This section specifies constraints and intent only.

### Goal

When shared on Twitter/X, LinkedIn, Slack, WeChat link previews, or iMessage, the OG image must instantly communicate:

1. **Brand:** Agent CRM  
2. **Category:** The CRM for agentic revenue  
3. **Feel:** Dark-professional / light-paper hybrid SaaS — capable, not hype  

### Format requirements

| Spec | Value |
|---|---|
| File | PNG |
| Dimensions | **1200 × 630** |
| Path expectation | `/og-image.png` |
| Safe zone | Keep critical text/logo inside ~1080×540 center; avoid edge crop on social platforms |
| Text | Large, high contrast; Inter Tight / Inter style (geometric sans) |
| Color | Prefer ink `#0a0a0a`, paper `#fafafa`, mute grays; emerald accents only as status dots if used |

Metadata alt text target:  
`Agent CRM — The CRM for agentic revenue`

### What the OG image needs to communicate

- Product value prop in one glance (headline + short subline)  
- Brand mark + wordmark  
- Visual texture consistent with the landing (soft shadow, product window silhouette, or abstract geometric diamond language)  
- Credibility for Chinese 出海 SaaS buyers evaluating global-grade tools  

Suggested copy pairings (pick one clear pairing; do not overcrowd):

- **Headline:** Welcome to agentic revenue.  
- **Sub:** The CRM that builds pipeline, advances deals, and grows accounts around the clock.  

Or:

- **Headline:** Agent CRM  
- **Sub:** The CRM for agentic revenue  

### Layout suggestions

**Option A — Brand-forward (recommended for trust)**  
- Left or center: large wordmark + diamond mark  
- Supporting one-liner under mark  
- Subtle paper or soft radial background; optional faint product-window silhouette  

**Option B — Product theater**  
- Right half: stylized light/dark CRM window (traffic lights, list rows) abstracted enough to stay crisp at small preview sizes  
- Left half: brand + value prop  
- Keep UI fake but on-token (no illegible microtext)  

**Option C — Dark band authority**  
- Full or majority `#0a0a0a` field  
- White typography  
- Small emerald live dot near a “always-on” phrase  
- Diamond mark in white  

Whichever option: **one composition**, one hierarchy, plenty of negative space. No sticker clutter.

### What to avoid

- More than one primary headline  
- Tiny illegible UI screenshots  
- Stock photos of people shaking hands  
- Purple AI gradients / neural net wallpaper  
- Fake testimonials or metric spam on the OG canvas  
- QR codes, app-store badges, or busy footers  
- Watermarks or “AI generated” labels  

### Deliverable placeholder for prompt AI

```
[待其他 AI 生成具体 prompt]
```

Prompts should specify 1200×630, exact hex colors from §4, Inter-like geometric sans, and the brand personality from §2–§3. Prefer flat/vector-adjacent rendering over photoreal 3D.

---

## Appendix A — Copy Bank (for asset text)

Use these exact strings when assets need product language:

- Agent CRM  
- The CRM for agentic revenue  
- Welcome to agentic revenue.  
- Agent CRM builds pipeline, advances deals, and grows accounts around the clock.  
- The intelligent system that never sleeps.  
- Live from day one.  
- Universal Context  
- Agentic revenue runs on Agent CRM.  
- Start for free  
- Talk to sales  

Platform tab labels: Build pipeline · Convert leads · Run sales motions · Forecast revenue · Retain and expand  

---

## Appendix B — Tech / File Map (context only)

| Path | Why it matters for design |
|---|---|
| `src/app/globals.css` | Canonical tokens |
| `src/app/layout.tsx` | Fonts, metadata, icon/OG wiring |
| `src/app/page.tsx` | Section order |
| `src/lib/data.ts` | Positioning & mock content |
| `src/lib/animations.ts` | Motion character |
| `src/components/*` | Visual language in practice |
| `public/icon.svg` | Current geometric mark |
| `README.md` | Stack + Attio inspiration note |

---

## Appendix C — Decision Summary for Image AI

1. **Brand** = Agent CRM, agentic revenue CRM for humans + agents.  
2. **Audience** = Chinese-speaking foreign trade / 出海 SaaS sales teams buying global-grade tools.  
3. **Look** = Attio/Linear/Stripe neighborhood: ink/paper, geometric mark, product windows, restrained emerald live accents.  
4. **Favicon** = geometric monogram/diamond family; crisp at 16px; no robots.  
5. **OG** = 1200×630; brand + value prop; professional SaaS composition; no hype clutter.  
6. **Do not invent product features** beyond what this brief already states.  
7. **Do not write final generation prompts here** — leave those to the dedicated prompt AI using the placeholders in §9 and §10.

---

## Appendix D — Checklist Before Generating Assets

- [ ] Colors match §4 tokens (`#0a0a0a`, `#fafafa`, greys; accents only as accents)  
- [ ] Typography feels Inter / Inter Tight (geometric neo-grotesque)  
- [ ] Favicon legible at 16×16  
- [ ] Apple touch has padding / no edge clipping  
- [ ] SVG is clean and simple  
- [ ] OG is exactly 1200×630 PNG  
- [ ] OG readable as a tiny Slack/WeChat preview  
- [ ] No purple-AI / robot / stock-handshake tropes  
- [ ] Feels peer to Attio/Linear without cloning marks  
- [ ] Chinese 出海 buyer would perceive global SaaS credibility  

---

*End of design brief. Only this file (`docs/DESIGN.md`) is the deliverable for the design-documentation task. Favicon and OG prompts: `[待其他 AI 生成具体 prompt]`.*
