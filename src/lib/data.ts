import type { TabContent, Account, ChangelogItem } from "./types";

export const tabs: { id: string; label: string }[] = [
  { id: "build-pipeline", label: "Build pipeline" },
  { id: "convert-leads", label: "Convert leads" },
  { id: "run-sales", label: "Run sales motions" },
  { id: "forecast", label: "Forecast revenue" },
  { id: "retain", label: "Retain and expand" },
];

export const tabContent: Record<string, TabContent> = {
  "build-pipeline": {
    title:
      "Your team, amplified. Agents prospect and reach out when buyers are looking, building a pipeline of deals ready to win.",
    subtitle: "Free your reps to sell.",
    description:
      "Agents handle the research and busywork. Reps focus their time where deals get won.",
  },
  "convert-leads": {
    title:
      "Speed to lead, every time. New leads get enriched, scored, and routed to the right rep before they ever cool off.",
    subtitle: "Agents dig. You close.",
    description:
      "Every lead is enriched and qualified, so reps know when and why to engage.",
  },
  "run-sales": {
    title:
      "Run every motion, your way. Pipeline built for how you sell, while agents brief the meetings and keep deals moving.",
    subtitle: "Catch changes to the deal.",
    description:
      "Spot new stakeholders, competitor moves, and stalls before your next call.",
  },
  forecast: {
    title:
      "For the people who own the number. Ask any revenue question. From the weekly forecast to performance by rep, get the answer in seconds.",
    subtitle: "Skip the review scramble.",
    description:
      "Walk in with quota coverage, deal velocity, and potential risks already mapped.",
  },
  retain: {
    title:
      "Keep more. Grow more. Agents track the whole book, so you save what's slipping and grow what's rising.",
    subtitle: "Spot the shift early.",
    description:
      "Whether an account's climbing or cooling, you'll know weeks before the call.",
  },
};

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
  { name: "Granola", signal: "Raised $125M Series C" },
  { name: "Linear", signal: "Building out its sales team" },
  { name: "Notion", signal: "New VP Sales from enterprise SaaS" },
  { name: "OpenAI", signal: "Scaling faster than it can hire" },
  { name: "Shopify", signal: "Doubling down on enterprise sales" },
  { name: "Dropbox", signal: "GTM reset under a new CRO" },
];

export const changelogItems: ChangelogItem[] = [
  {
    date: "June 29, 2026",
    title: "What's new in Workflows",
    desc: "More of the work, off your plate.",
  },
  {
    date: "June 29, 2026",
    title: "New activity timeline",
    desc: "Eliminate noise in your records.",
  },
  {
    date: "June 29, 2026",
    title: "Calls on mobile",
    desc: "Call recordings are now on mobile.",
  },
  {
    date: "June 29, 2026",
    title: "More App Store updates",
    desc: "Connect Agent CRM to more of the tools you use every day.",
  },
];
