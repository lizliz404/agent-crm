export interface TabContent {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Account {
  name: string;
  signal: string;
  initials: string;
  tone: "blue" | "violet" | "amber" | "rose" | "emerald" | "slate";
}

export interface ChangelogItem {
  date: string;
  title: string;
  desc: string;
  tag: string;
}

export interface CustomerStory {
  name: string;
  category: string;
  headline: string;
  metric: string;
}

export interface ScaleItem {
  title: string;
  description: string;
}
