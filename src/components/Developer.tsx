"use client";

import { motion } from "framer-motion";
import { sectionInView } from "@/lib/animations";

const platforms = [
  {
    id: "mcp",
    title: "MCP Server",
    subtitle: "Use with AI coding agents",
    features: [
      "Expose Agent CRM to AI clients",
      "Manage workspace through conversational AI",
      "Agent-driven workflows with full read/write",
      "Search, create, and manage via tool calls",
      "One-click install for Claude, Notion",
    ],
    chips: ["Claude Code", "Codex", "n8n", "Raycast"],
  },
  {
    id: "api",
    title: "REST API",
    subtitle: "Built for scale",
    features: [
      "Full read/write for custom integrations",
      "OAuth 2.0 authentication",
      "Webhook listeners for events",
      "Bi-directional data sync",
      "Enterprise-grade security",
    ],
    chips: ["OAuth 2.0", "Webhooks", "OpenAPI", "Rate limits"],
  },
  {
    id: "sdk",
    title: "App SDK",
    subtitle: "TypeScript & React",
    features: [
      "Custom apps with TypeScript and React",
      "Record actions, widgets, text selection",
      "Server functions for third-party data",
      "Pre-built UI components",
      "Publish to App Store",
    ],
    chips: ["TypeScript", "React", "Forms", "Webhooks"],
  },
];

const metrics = [
  { value: "2.6M", label: "MCP calls/month" },
  { value: "400M", label: "API calls/week" },
  { value: "76k", label: "active customer agents" },
  { value: "15M", label: "emails synced/day" },
];

export function Developer() {
  return (
    <section
      id="developers"
      data-chapter="Developers"
      className="border-t border-[#ececec] py-24 md:py-28"
    >
      <div className="container-page">
        <motion.div
          {...sectionInView}
          className="mx-auto mb-6 max-w-[720px] text-center"
        >
          <span className="text-eyebrow">Developer platform</span>
          <h2 className="text-section mt-4">
            SDK. API. MCP.
            <br />
            <span className="text-[#737373]">
              Build anything on Agent CRM.
            </span>
          </h2>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-14 grid max-w-[720px] grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-[28px] font-bold tracking-tight text-[#0a0a0a]">
                {m.value}
              </div>
              <div className="mt-1 text-[12px] text-[#737373]">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Platform cards */}
        <div className="mx-auto grid max-w-[1080px] gap-5 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface-card flex flex-col overflow-hidden"
            >
              <div className="border-b border-[#ececec] bg-[#f7f7f7] px-6 py-4">
                <h3 className="text-[16px] font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-[13px] text-[#737373]">
                  {p.subtitle}
                </p>
              </div>
              <div className="flex-1 px-6 py-5">
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#525252]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#0a0a0a]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-[#ececec] px-6 py-3.5">
                <div className="flex flex-wrap gap-1.5">
                  {p.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-md bg-[#f4f4f5] px-2 py-1 text-[11.5px] font-medium text-[#525252]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Developer quote */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-[640px] text-center"
        >
          <blockquote className="text-[16px] italic leading-relaxed text-[#525252]">
            &ldquo;Integrating via MCP was remarkably fast. We went from
            access to a fully tested live integration in a few hours.&rdquo;
          </blockquote>
          <cite className="mt-3 block text-[13px] font-medium not-italic text-[#737373]">
            Siavash Ghorbani · Stilla
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
