import type {
  Account,
  ChangelogItem,
  CustomerStory,
  ScaleItem,
  TabContent,
} from "./types";

export const tabs: TabContent[] = [
  {
    id: "build-pipeline",
    label: "Build pipeline",
    title:
      "Your team, amplified. Agents prospect and reach out when buyers are looking, building a pipeline of deals ready to win.",
    subtitle: "Free your reps to sell.",
    description:
      "Agents handle the research and busywork. Reps focus their time where deals get won.",
  },
  {
    id: "convert-leads",
    label: "Convert leads",
    title:
      "Speed to lead, every time. New leads get enriched, scored, and routed to the right rep before they ever cool off.",
    subtitle: "Agents dig. You close.",
    description:
      "Every lead is enriched and qualified, so reps know when and why to engage.",
  },
  {
    id: "run-sales",
    label: "Run sales motions",
    title:
      "Run every motion, your way. Pipeline built for how you sell, while agents brief the meetings and keep deals moving.",
    subtitle: "Catch changes to the deal.",
    description:
      "Spot new stakeholders, competitor moves, and stalls before your next call.",
  },
  {
    id: "forecast",
    label: "Forecast revenue",
    title:
      "For the people who own the number. Ask any revenue question. From the weekly forecast to performance by rep, get the answer in seconds.",
    subtitle: "Skip the review scramble.",
    description:
      "Walk in with quota coverage, deal velocity, and potential risks already mapped.",
  },
  {
    id: "retain",
    label: "Retain and expand",
    title:
      "Keep more. Grow more. Agents track the whole book, so you save what's slipping and grow what's rising.",
    subtitle: "Spot the shift early.",
    description:
      "Whether an account's climbing or cooling, you'll know weeks before the call.",
  },
];

export const logos: string[] = [
  "Parallel",
  "Turbopuffer",
  "Taskrabbit",
  "Granola",
  "Listen",
  "Wispr Flow",
  "Wordsmith",
  "Modal",
  "Obvious",
  "Passionfroot",
  "Railway",
  "Lightdash",
  "AIUC",
  "Near",
  "Public",
];

export const accounts: Account[] = [
  {
    name: "Granola",
    signal: "Raised $125M Series C",
    initials: "G",
    tone: "emerald",
  },
  {
    name: "Linear",
    signal: "Building out its sales team",
    initials: "L",
    tone: "violet",
  },
  {
    name: "Notion",
    signal: "New VP Sales from enterprise SaaS",
    initials: "N",
    tone: "slate",
  },
  {
    name: "OpenAI",
    signal: "Scaling faster than it can hire",
    initials: "O",
    tone: "blue",
  },
  {
    name: "Shopify",
    signal: "Doubling down on enterprise sales",
    initials: "S",
    tone: "emerald",
  },
  {
    name: "Dropbox",
    signal: "GTM reset under a new CRO",
    initials: "D",
    tone: "blue",
  },
];

export const people = [
  {
    name: "Michael James",
    role: "VP Sales at Cortexa",
    email: "michael@cortexa.ai",
    location: "San Francisco, California",
    company: "Cortexa",
    score: 4,
    ago: "1d",
    initials: "MJ",
    tone: "blue" as const,
  },
  {
    name: "Sarah Chen",
    role: "Head of Growth at Northgate",
    email: "sarah@northgate.io",
    location: "New York, New York",
    company: "Northgate",
    score: 6,
    ago: "2d",
    initials: "SC",
    tone: "violet" as const,
  },
  {
    name: "David Okafor",
    role: "CTO at Fairwind",
    email: "david@fairwind.dev",
    location: "Austin, Texas",
    company: "Fairwind",
    score: 3,
    ago: "4h",
    initials: "DO",
    tone: "amber" as const,
  },
];

export const riskAccounts = [
  {
    name: "Brightloop",
    arr: "$107,000 ARR",
    level: "High" as const,
    signals:
      "Last two invoices failed in Stripe. Logins down 40% over 30 days.",
    action: "Named T0 — Reach out today and confirm billing + usage drop.",
  },
  {
    name: "Vela",
    arr: "$86,000 ARR",
    level: "High" as const,
    signals: "Renewal in 3 weeks with no champion reply. Past-due balance.",
    action: "Named T1 — Send renewal brief and schedule exec check-in.",
  },
  {
    name: "Quanta",
    arr: "$64,000 ARR",
    level: "Watch" as const,
    signals: "Seats +42% this month. Expansion signal without upsell motion.",
    action: "Draft seat expansion email for AE approval.",
  },
];

export const changelogItems: ChangelogItem[] = [
  {
    date: "June 29, 2026",
    title: "What's new in Workflows",
    desc: "More of the work, off your plate.",
    tag: "Product",
  },
  {
    date: "June 29, 2026",
    title: "New activity timeline",
    desc: "Eliminate noise in your records.",
    tag: "UX",
  },
  {
    date: "June 29, 2026",
    title: "Calls on mobile",
    desc: "Call recordings are now on mobile.",
    tag: "Mobile",
  },
  {
    date: "June 29, 2026",
    title: "More App Store updates",
    desc: "Connect Agent CRM to more of the tools you use every day.",
    tag: "Ecosystem",
  },
];

export const customerStories: CustomerStory[] = [
  {
    name: "Granola",
    category: "Artificial Intelligence",
    headline:
      "83% faster lead triage. How Granola turns product signals into revenue at scale.",
    metric: "83% faster",
  },
  {
    name: "Railway",
    category: "Developer Infrastructure",
    headline:
      "One source of truth for every deal. Railway runs GTM without the spreadsheet tax.",
    metric: "4× pipeline",
  },
  {
    name: "Modal",
    category: "Cloud Compute",
    headline:
      "Agents that never sleep. Modal keeps enterprise deals moving between demos.",
    metric: "2.1× win rate",
  },
  {
    name: "Taskrabbit",
    category: "Marketplace",
    headline:
      "From first touch to expand. Taskrabbit built a living system of record.",
    metric: "30k+ seats",
  },
];

export const scaleItems: ScaleItem[] = [
  {
    title: "Permissions that hold up",
    description: "Role-aware access for humans and agents alike.",
  },
  {
    title: "Audit everything",
    description: "Every write, enrichment, and outreach is traceable.",
  },
  {
    title: "Realtime collaboration",
    description: "Shared context without the Slack archaeology.",
  },
  {
    title: "Built for agents",
    description: "MCP, API, and SDK surfaces that stay in sync.",
  },
];

export const footerColumns = [
  {
    title: "Platform",
    links: [
      "Refer a team",
      "Changelog",
      "Gmail extension",
      "iOS app",
      "Android app",
    ],
  },
  {
    title: "Company",
    links: [
      "Customers",
      "Announcements",
      "Engineering blog",
      "Careers",
      "Manifesto",
      "Become a partner",
    ],
  },
  {
    title: "Import from",
    links: ["Salesforce", "Hubspot", "Pipedrive", "Copper", "Close"],
  },
  {
    title: "Resources",
    links: ["Help center", "Academy", "Templates", "Security", "Status"],
  },
];
