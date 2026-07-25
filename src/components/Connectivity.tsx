"use client";

import { motion } from "framer-motion";
import { sectionInView } from "@/lib/animations";

const integrations = [
  { name: "Claude", category: "AI" },
  { name: "Slack", category: "Communication" },
  { name: "Clay", category: "Enrichment" },
  { name: "Linear", category: "Engineering" },
  { name: "Notion", category: "Docs" },
  { name: "Gmail", category: "Email" },
  { name: "Granola", category: "Meetings" },
  { name: "Stripe", category: "Billing" },
  { name: "Zapier", category: "Automation" },
  { name: "Salesforce", category: "Import" },
  { name: "HubSpot", category: "Import" },
  { name: "Pipedrive", category: "Import" },
];

export function Connectivity() {
  return (
    <section className="border-t border-[#ececec] bg-white/50 py-24 md:py-28">
      <div className="container-page">
        <motion.div
          {...sectionInView}
          className="mx-auto mb-14 max-w-[720px] text-center"
        >
          <span className="text-eyebrow">Connectivity</span>
          <h2 className="text-section mt-4">
            Your whole stack, connected.
            <br />
            <span className="text-[#737373]">
              Claude, Slack, Clay, Linear, Notion, and anything your team and
              agents run on.
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-[860px]">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {integrations.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group surface-card flex flex-col items-center justify-center p-5 text-center transition hover:shadow-[var(--shadow-lift)]"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4f4f5] text-[15px] font-bold text-[#525252] transition group-hover:bg-[#0a0a0a] group-hover:text-white">
                  {tool.name[0]}
                </div>
                <div className="text-[13px] font-medium text-[#0a0a0a]">
                  {tool.name}
                </div>
                <div className="text-[11px] text-[#a3a3a3]">
                  {tool.category}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#0a0a0a] hover:underline"
            >
              Explore the ecosystem
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
