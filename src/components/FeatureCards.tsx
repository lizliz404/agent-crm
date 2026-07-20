"use client";

import { motion } from "framer-motion";
import { sectionInView } from "@/lib/animations";

const features = [
  {
    title: "Agents + automations",
    description: "AI agents that work around the clock",
  },
  {
    title: "Your whole stack, connected",
    description: "Claude, Slack, Clay, Linear, Notion",
  },
  {
    title: "SDK. API. MCP.",
    description: "Build anything on Agent CRM",
  },
];

export function FeatureCards() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div {...sectionInView}>
          <h2 className="font-display text-[64px] leading-[1] font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
            Universal Context &trade;
          </h2>
          <p className="text-section text-[#525252] max-w-[600px] mx-auto">
            All of the signals, none of the noise. Ready to act on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-[12px] border border-[#e5e5e5] bg-white"
            >
              <h3 className="text-label mb-3">{feature.title}</h3>
              <p className="text-body text-[14px]">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
