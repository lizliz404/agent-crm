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
  /** When set, shows agent-authorship chip */
  author?: "agent" | "human";
  body?: string;
}

export interface CustomerStory {
  name: string;
  category: string;
  headline: string;
  metric: string;
  quote?: string;
  body?: string;
  logo?: string;
  link?: string;
}

export interface ScaleItem {
  title: string;
  description: string;
}

export type ChatStep =
  | {
      kind: "user";
      who: string;
      initials: string;
      tone: "blue" | "violet" | "amber" | "rose" | "emerald" | "slate";
      t: string;
      text: React.ReactNode;
    }
  | {
      kind: "bot";
      t: string;
      text: React.ReactNode;
    };

export interface TerminalLine {
  kind: "cmd" | "meta" | "tool" | "result";
  text: string;
}

export interface WorkflowNode {
  id: string;
  title: string;
  body: string;
  status: "ok" | "ready";
}

export interface TranscriptRow {
  who: string;
  t: string;
  text: string;
}
