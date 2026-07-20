"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { sectionInView } from "@/lib/animations";

const panels = [
  {
    id: "agents",
    label: "Agents + automations",
    title: "AI agents that work around the clock",
    body: "Prospect, enrich, brief, and follow up — with humans approving the moments that matter.",
    chips: ["Research", "Outreach", "Meeting brief", "Renewal watch"],
  },
  {
    id: "ecosystem",
    label: "Ecosystem",
    title: "Your whole stack, connected",
    body: "Claude, Slack, Clay, Linear, Notion, and the rest of GTM — one living context graph.",
    chips: ["Claude", "Slack", "Clay", "Linear", "Notion", "Gmail"],
  },
  {
    id: "platform",
    label: "SDK. API. MCP.",
    title: "Build anything on Agent CRM",
    body: "Ship custom agents and internal tools on the same objects your revenue team already trusts.",
    chips: ["REST", "Webhooks", "MCP", "TypeScript SDK"],
  },
];

export function FeatureCards() {
  const [active, setActive] = useState(panels[0].id);
  const current = panels.find((p) => p.id === active) ?? panels[0];

  return (
    <section className="py-24 md:py-28">
      <div className="container-page">
        <motion.div {...sectionInView} className="mx-auto max-w-[760px] text-center">
          <h2 className="text-hero mb-4 !text-[clamp(2.25rem,5vw,3.75rem)]">
            Universal Context ™
          </h2>
          <p className="text-section text-[#737373]">
            All of the signals, none of the noise. Ready to act on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mt-12 max-w-[920px]"
        >
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {panels.map((p) => {
              const on = p.id === active;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p.id)}
                  className={`rounded-full px-4 py-2 text-[13.5px] font-medium transition ${
                    on
                      ? "bg-[#0a0a0a] text-white"
                      : "bg-white text-[#525252] ring-1 ring-[#e5e5e5] hover:bg-[#f5f5f5]"
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>

          <div className="surface-card overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-[#ececec] p-7 md:border-b-0 md:border-r">
                <h3 className="text-subsection mb-3">{current.title}</h3>
                <p className="text-body mb-5">{current.body}</p>
                <a href="#" className="text-[14px] font-medium text-[#0a0a0a] hover:underline">
                  See more →
                </a>
              </div>
              <div className="dot-grid bg-[#fbfbfb] p-7">
                <div className="flex flex-wrap gap-2">
                  {current.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-xl bg-white px-3 py-2 text-[13px] font-medium text-[#0a0a0a] shadow-sm ring-1 ring-[#ececec]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-[#0a0a0a] p-4 text-white shadow-[var(--shadow-lift)]">
                  <div className="mb-2 text-[11px] uppercase tracking-wide text-white/40">
                    Context graph
                  </div>
                  <div className="space-y-2 text-[13px]">
                    <div className="flex justify-between gap-3">
                      <span className="text-white/70">People linked</span>
                      <span className="font-medium">128</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-white/70">Live signals</span>
                      <span className="font-medium">1,042</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-white/70">Ready actions</span>
                      <span className="font-medium text-emerald-400">37</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
