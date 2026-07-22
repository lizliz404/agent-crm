"use client";

import { motion } from "framer-motion";
import { sectionInView } from "@/lib/animations";
import { Avatar, WindowChrome } from "@/components/ui";
import { AgentBadge } from "@/components/AgentBadge";

const timeline = [
  {
    t: "10:41",
    label: "Agent enriched Sarah from calendar + LinkedIn",
    kind: "agent" as const,
  },
  {
    t: "10:42",
    label: "Confidence raised to 75% · technical buyer mapped",
    kind: "agent" as const,
  },
  {
    t: "Yesterday",
    label: "Michael Chang · in-person meeting logged",
    kind: "human" as const,
  },
  {
    t: "Aug 27",
    label: "Demo notes synced from call recording",
    kind: "agent" as const,
  },
];

const metrics = [
  { label: "Deal stage", value: "Evaluation", tone: "text-white" },
  { label: "ARR potential", value: "$84k", tone: "text-emerald-400" },
  { label: "Next action", value: "Send security pack", tone: "text-cyan-300" },
];

const agentPanel = [
  { status: "running", text: "Drafting follow-up for Aug 29 demo" },
  { status: "queued", text: "Pull GreenLeaf org chart gaps" },
  { status: "done", text: "Synced 3 email threads to record" },
];

export function DarkFeature() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-[#fafafa] md:py-28">
      <div className="pointer-events-none absolute inset-0 dot-grid-dark opacity-60" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.18),transparent_70%)]" />
      <div className="container-page relative">
        <motion.div
          {...sectionInView}
          className="grid items-center gap-14 lg:grid-cols-2"
        >
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[12.5px] font-medium text-white/80 ring-1 ring-white/10">
              <span className="live-dot bg-emerald-400" />
              Self-building
            </span>
            <h2 className="text-section mb-5 text-white">
              Live from day one.
            </h2>
            <p className="text-pull mb-6 max-w-md text-white/55">
              Connect your inbox and calendar. Agent CRM learns your business
              and builds itself around it, before your first agent even gets to
              work.
            </p>
            <a
              href="#"
              className="btn-primary !border-white !bg-white !text-[#0a0a0a] hover:!bg-[#e5e5e5]"
            >
              Start for free
            </a>
          </div>

          <div className="relative">
            {/* Back layer — metrics + agent panel */}
            <div className="mb-3 grid gap-3 sm:grid-cols-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10"
                >
                  <div className="text-[11px] text-white/40">{m.label}</div>
                  <div className={`mt-1 text-[15px] font-semibold tracking-tight ${m.tone}`}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              {/* Offset agent status card behind primary window */}
              <div className="absolute -right-3 -top-6 z-0 hidden w-[200px] rotate-2 rounded-xl bg-[#111] p-3 ring-1 ring-white/10 md:block lg:-right-8">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-white/45">Agent desk</span>
                  <span className="agent-dot" />
                </div>
                <div className="space-y-2">
                  {agentPanel.map((a) => (
                    <div key={a.text} className="flex items-start gap-2 text-[11px]">
                      <span
                        className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                          a.status === "running"
                            ? "bg-[var(--color-agent)]"
                            : a.status === "done"
                              ? "bg-emerald-400"
                              : "bg-white/25"
                        }`}
                      />
                      <span className="text-white/70 leading-snug">{a.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <WindowChrome
                dark
                title="Sarah Johnson · GreenLeaf Inc."
                className="relative z-10"
                trailing={
                  <button type="button" className="text-[12px] text-white/60 hover:text-white">
                    Compose email
                  </button>
                }
              >
                <div className="space-y-4 p-5">
                  <div className="flex items-center gap-3">
                    <Avatar initials="SJ" tone="violet" size="lg" />
                    <div>
                      <div className="text-[15px] font-semibold">Sarah Johnson</div>
                      <div className="text-[13px] text-white/50">
                        Head of IT · GreenLeaf Inc.
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end gap-1.5">
                      <span className="badge badge-success">75% conf.</span>
                      <AgentBadge dark>Enriched by Agent</AgentBadge>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1.5 text-[12px] font-medium uppercase tracking-wide text-white/40">
                      Highlights
                    </div>
                    <p className="text-serif text-[13.5px] leading-relaxed text-white/85">
                      Sarah is leading a data-infrastructure modernization that maps
                      to GreenLeaf&apos;s growth goals. Demo on Aug 29 confirmed fit;
                      opportunity advancing with strong technical buy-in.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                      <div className="text-[11px] text-white/40">Upcoming</div>
                      <div className="mt-1 text-[14px] font-medium">Demo Call</div>
                      <div className="text-[12px] text-white/50">Thu · Aug 29, 10:40 AM</div>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                      <div className="text-[11px] text-white/40">Company</div>
                      <div className="mt-1 text-[14px] font-medium">GreenLeaf Inc.</div>
                      <div className="text-[12px] text-white/50">San Francisco, CA</div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-[12px] font-medium uppercase tracking-wide text-white/40">
                        Activity timeline
                      </div>
                      <span className="text-[11px] text-white/30">live</span>
                    </div>
                    <div className="relative space-y-0 pl-3">
                      <div className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10" />
                      {timeline.map((row) => (
                        <div
                          key={row.t + row.label}
                          className="relative flex gap-3 py-2 text-[12.5px]"
                        >
                          <span
                            className={`relative z-10 mt-1.5 h-2 w-2 shrink-0 rounded-full ring-2 ring-[#111] ${
                              row.kind === "agent"
                                ? "bg-[var(--color-agent)]"
                                : "bg-white/50"
                            }`}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline gap-2">
                              <span className="text-[11px] tabular-nums text-white/35">
                                {row.t}
                              </span>
                              {row.kind === "agent" && (
                                <span className="text-[10px] font-medium text-[#67e8f9]">
                                  agent
                                </span>
                              )}
                            </div>
                            <div className="text-white/80 leading-snug">{row.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 text-[12px] font-medium uppercase tracking-wide text-white/40">
                      Recent people activity
                    </div>
                    <div className="space-y-2.5">
                      {[
                        {
                          i: "MC",
                          t: "blue" as const,
                          text: "Michael Chang attended an in-person meeting",
                          ago: "6 hours ago",
                        },
                        {
                          i: "SJ",
                          t: "violet" as const,
                          text: "Sarah Johnson attended an event",
                          ago: "2 days ago",
                        },
                        {
                          i: "MC",
                          t: "blue" as const,
                          text: "Michael Chang made an outbound phone call",
                          ago: "4 days ago",
                        },
                      ].map((row) => (
                        <div
                          key={row.text}
                          className="flex items-center gap-2.5 text-[12.5px]"
                        >
                          <Avatar initials={row.i} tone={row.t} size="sm" />
                          <span className="min-w-0 flex-1 text-white/80">{row.text}</span>
                          <span className="shrink-0 text-white/35">{row.ago}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </WindowChrome>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
