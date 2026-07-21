---
version: 2.0
name: Agent CRM
updated: 2026-07-22
status: brand + visual design brief for landing, favicon, OG assets
audience_primary: Chinese-speaking 出海 / foreign-trade SaaS sales teams, GTM leaders
anti_reference: generic "AI SaaS 2026 default skin" — see §0 changelog
repo: lizliz404/agent-crm · site: https://agent-crm.lizliz.xyz
---

# Agent CRM — Design Brief (V2)

> Single source of truth for brand/visual identity. Downstream image AI uses
> this to write final favicon and OG prompts. Not a roadmap.

---

> **前置诊断（来自 V2 audit）：** Agent CRM 的破绽在**战略层**——它精确复刻了 Attio/Linear/Stripe 那套"黑白灰+祖母绿live dot+毛玻璃悬浮胶囊导航+diamond monogram"，而这套皮肤到 2026 年中已经是**AI SaaS 的默认工装**。更要命的是：产品的核心主张是"agent 和人共用一套系统、agent 不睡觉地干活"，但整套视觉语言里**没有任何一个符号是专门用来表达"这是 agent 干的"** ——emerald live-dot 只表达"在线"，不表达"是谁做的"。V2 新增 `--color-agent` 归属色 + Never Sleeps 实时组件 + mark 微调（scan-offset 代替 static gem）。

---

## 0. V1 → V2 修订说明

V1 的执行力很强——token、组件语法、落地页叙事顺序都写得清楚可实施。但它有一个 V1 自己没意识到的战略破绽：

**它精确复刻的那套"Attio/Linear/Stripe 皮肤"，到 2026 年中已经是 AI SaaS 的默认工装。** 黑白灰 + 祖母绿 live-dot + 毛玻璃悬浮胶囊导航 + 点阵网格背景 + 旋转菱形 monogram —— 这套组合已经被几百个融资阶段相近的 AI SaaS 用滥了。对目标受众（判断"这看起来像不像我海外同行用的工具"的中国出海卖家）来说，短期内它依然管用，因为这层疲劳感主要发生在硅谷本地买家身上，而目标用户是隔了一层文化距离的观察者——但这不是长期安全区，而且更关键的是：

**这套视觉系统里，没有任何一个符号是专门用来表达"这是 agent 干的"的。** 产品的核心主张是"agent 和人共用一套系统记录、agent 不睡觉地干活"，但 token 表里 emerald 只表达"在线/成功"，info-blue 只表达"信息"，没有任何东西回答"这一条记录，是 agent 生成的还是人生成的"——而这恰恰是整个产品存在的理由。

V2 补三处，不推翻整体调性：

| 破绽 | V2 处理 |
|---|---|
| 无 agent 归属的视觉符号 | 新增 `--color-agent` signature 色（青蓝，区别于 emerald/info），只用于"agent 生产的内容"标签，见 §4.1 |
| "不睡觉"只停留在文案 | 新增 §5.7「Never Sleeps」组件——hero 里一个真实时区/实时状态 chip，把"agents work while you sleep"从一句 tagline 变成一个肉眼可验证的活组件 |
| Mark 是静态宝石感菱形，容易被认成加密货币/珠宝 icon | 微调几何：内外菱形轻微错位，读成"雷达扫描/信号 ping"而不是"钻石切面"，见 §4 Logo mark |
| 分享渠道里点名了微信，但只给了 Western OG 规格 | 新增 §10.6 微信方卡变体 |
| 缺一道"这是不是又一个通用 AI SaaS"的自检 | 新增 Appendix E 自检清单 |

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

**Strategic framing to keep in mind (new):** this audience is judging the product's visual system as a *proxy* for "is this a real global-grade tool," one step removed from the fatigue Western buyers already feel toward this exact skin. The design goal is therefore calibrated distinctiveness — different enough not to be mistaken for a template by anyone who looks closely, familiar enough to still read instantly as "that category" to someone scanning fast.

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
| **Agent-legible (new)** | Every place agents act, the interface visibly says so — distinctness of authorship is a trust feature, not decoration |

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
- **New:** a distinct signature hue reserved exclusively for "an agent produced this" — never used for status/semantics, only authorship

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
| **`--color-agent`** | **`#0891b2`** | **New — "agent authored this" tag/chip color. Never a status color: only ever attribution. Distinct hue family (cyan) from emerald/blue so the eye never confuses "who did it" with "how is it going."** |

### 4.1 Agent authorship token — rules of use

- Applies only to: small chips like `Drafted by Agent`, `Sent by Agent · 2m ago`, agent-terminal accent borders, agent avatar rings
- Never used for buttons, never used for status badges (those stay success/warn/danger)
- One visual grammar across the product: cyan ring/chip = "an agent's hand touched this." No ring = human. This turns the product's core sales pitch ("agents and humans share one system, and it's all legible") into something you can literally see on every screen, not just read in the hero copy.

### Fonts / tracking / radius / shadows

Unchanged from V1: `--font-display` Inter Tight, `--font-body` Inter; `--tracking-tighter -0.03em`; `--radius-btn 10px` / `--radius-card 14px` / `--radius-window 16px`; `--shadow-soft/lift/window` as before.

### Logo mark (V2 refinement)

Rounded square `#0a0a0a`, `rx≈8` on 32 viewBox. Inside: white diamond, with a smaller black diamond cutout at center — **now given a slight rotational/positional offset (a few degrees, not perfectly concentric)**, so the nested shape reads as a radar ping / signal pulse frozen mid-scan rather than a static gem facet. Still same geometric family as V1 — this is a refinement, not a replacement. Ties the mark to "agents constantly scanning for signals" rather than "premium jewelry brand," which is the more generic reading a perfectly symmetric diamond invites.

---

## 5. Component Language

### Navigation, Hero, Product windows, Tabs, Cards, Dark feature band, CTA language, Micro-interactions

(Unchanged from V1 — floating frosted pill nav; centered editorial hero + HeroCollage; WindowChrome traffic-light windows; black-fill active tabs; soft white cards; full-bleed `#0a0a0a` dark band; black-fill primary CTA / translucent secondary; live dots, typing dots, chart draws, marquee logo cloud.)

### 5.7 "Never Sleeps" strip (new)

A small, honest, real-time component placed in the hero or just above the fold — not a gimmick banner, a literal proof of the claim:

- A slim chip or ambient line reading something like: **`Agents active · 03:14 in Austin · 14:14 in Shenzhen`** — using the visitor's actual local time plus one or two agent-relevant timezones, updating live
- Paired with the `--color-agent` cyan dot (distinct from the emerald "system is up" live-dot elsewhere) to reinforce that this specific signal is about *agents working*, not general uptime
- Optional: the hero's ambient background tone can shift a few percent warmer/darker if the visitor's local time is night — an almost-subliminal cue that "yes, right now, somewhere, agents are working while someone sleeps"
- **Why this matters:** every AI SaaS claims "works 24/7" in a tagline. Almost none make it visually checkable in real time. This is cheap to build and hard to copy convincingly without actually being true — which is exactly the kind of proof that lands with a skeptical buyer.

---

## 6. Landing Structure

Nav → Hero+HeroCollage (+ Never Sleeps strip) → LogoCloud → PlatformTabs/Mock → DarkFeature → FeatureCards (Universal Context™) → BuildToScale → CustomerStories → Changelog → FinalCTA → Footer.

Story arc: **Invite → show the machine working → prove depth and trust → social proof → ask for the next step.**

Key headlines to preserve: Welcome to agentic revenue. / The intelligent system that never sleeps. / Live from day one. / Agentic revenue runs on Agent CRM.

Site metadata: `en_US` locale, `summary_large_image` Twitter card, OG path `/og-image.png` (1200×630).

---

## 7. Audience & Tone

Chinese-speaking foreign-trade/出海 SaaS GTM teams, bilingual in practice — English UI is a trust signal, not a barrier. They compare against Salesforce/HubSpot fatigue and flashy "AI CRM" toys; they need capability + control.

| Do | Don't |
|---|---|
| Calm confidence | Hype/FOMO banners |
| Structured data & status | Abstract purple AI nebulae |
| Signal "global SaaS peer" | Cheap stock handshakes |
| English product naming | Chinese calligraphy in the mark |
| Agents + humans together | Imply humans are replaced |

**Cultural note:** acknowledge the 外贸/出海 context in positioning, keep the visual system international. Should look at home on Product Hunt, in Linear's neighborhood, and in a Shenzhen SaaS founder's browser tab alike.

---

## 8. Reference Aesthetics

| Reference | Steal | Leave |
|---|---|---|
| Attio | Product window collage, calm marketing | Exact logo/layout, purple accents |
| Linear | Typography discipline, dark/light contrast | Issue-tracker iconography, indigo |
| Stripe | Trust, precision | Gradient meshes as hero identity |

**Anti-references:** Midjourney "AI brain/neural net/glowing robot," purple-indigo gradients as identity, warm cream+terracotta editorial cliché (that belongs to a different brand entirely — see Acriva), neumorphism, cyberpunk neon, cartoon mascots, fake App Store screenshots.

---

## 9. Favicon Design Brief

### Goal

Reads as Agent CRM at a glance: sharp, geometric, trustworthy — a node/decision/signal-ping mark, not a robot face. Legible at 16×16.

### Format requirements

ICO (16+32 min), PNG 16/32/180/192/512, canonical SVG.

### Elements / what to avoid

Monogram/diamond family evolved from current `icon.svg`; high contrast `#0a0a0a` + `#fafafa`; ~25% corner radius. Avoid: literal robots/antennae/chat bubbles, CRM clichés (funnels/bar charts) that mud at 16px, gradients/glows, thin vanishing strokes, wordmark in favicon, purple AI tropes.

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

### Layout chosen: Option C — Dark band authority + agent-signal accent

Full `#0a0a0a` field, white type, diamond mark in white, **plus the new `--color-agent` cyan live-dot** (distinct from a generic emerald dot) paired with a short real-time-feeling line, tying the OG card directly to the §5.7 Never Sleeps idea rather than a generic "always on" claim.

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

### 10.6 微信分享卡变体（新）

出海团队自己也活在微信里；English OG 横版卡在微信聊天场景会被压成小方图，文字必然读不清。

| 项 | 值 |
|---|---|
| 尺寸 | 500×500（方图） |
| 构图 | 居中：mark 占主视觉，"Agent CRM" 一行，"The CRM for agentic revenue" 一行，去掉 cyan live-dot 细节（缩略图尺度下无意义），只留最强对比的黑白构图 |

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

`src/app/globals.css` (tokens) · `src/app/layout.tsx` (fonts/metadata/icons) · `src/app/page.tsx` (section order) · `src/lib/data.ts` (positioning) · `src/lib/animations.ts` (motion) · `public/icon.svg` (mark) · `README.md` (stack/Attio note)

---

## Appendix C — Decision Summary for Image AI

1. Brand = Agent CRM, agentic revenue CRM for humans + agents
2. Audience = Chinese-speaking 出海 SaaS GTM teams
3. Look = Attio/Linear/Stripe neighborhood, refined with a scan-offset mark and an agent-authorship cyan accent — not a 1:1 clone of the 2026 default AI-SaaS skin
4. Favicon = geometric monogram, diamond-in-diamond with scan offset, crisp at 16px, no robots
5. OG = 1200×630, brand + value prop + real-time-feeling cyan signal, no hype clutter
6. Do not invent product features beyond this brief

---

## Appendix D — Checklist Before Generating Assets

- [ ] Colors match §4 tokens; `--color-agent` cyan used ONLY for authorship, never status
- [ ] Typography feels Inter/Inter Tight
- [ ] Favicon legible at 16×16, mark reads as scan/pulse not static gem
- [ ] OG exactly 1200×630 PNG, readable as tiny Slack/WeChat preview
- [ ] 微信方卡变体已产出（§10.6）
- [ ] No purple-AI/robot/stock-handshake tropes
- [ ] Feels peer to Attio/Linear without cloning marks

## Appendix E — "通用 AI SaaS 嗅探" 自检（新）

在任何资产定稿前，问一句：**如果把 logo/wordmark 遮住，这张图还能不能被认成是 Agent CRM，而不是随便哪个 2026 年的 AI SaaS 落地页截图？**

- 如果答案是"认不出来"——检查是不是只做了黑白灰+祖母绿+毛玻璃导航这套默认组合，而没有用上 `--color-agent` 归属色或 Never Sleeps 组件
- 这条自检权重高于"好不好看"：好看但认不出来，等于没做完
