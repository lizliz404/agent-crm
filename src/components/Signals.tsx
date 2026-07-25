"use client";

import { motion } from "framer-motion";
import { sectionInView } from "@/lib/animations";

const contextItems = [
  { label: "Emails, calls, records", value: "All live" },
  { label: "Product usage", value: "Synced" },
  { label: "Connected tools", value: "Unified" },
  { label: "Team activity", value: "Real-time" },
];

const signalCards = [
  {
    title: "It logs itself.",
    desc: "Emails, calls, product, billing, captured automatically.",
    icon: "⚡",
  },
  {
    title: "Your tools finally talk.",
    desc: "Granola, Slack, your whole stack, always in sync.",
    icon: "🔗",
  },
  {
    title: "Gets to know you.",
    desc: "So each play is sharper than the last.",
    icon: "🧠",
  },
  {
    title: "Ask, and it's there.",
    desc: "Any record, any answer, in a second.",
    icon: "💬",
  },
  {
    title: "No agent left guessing.",
    desc: "Working from the same facts as your team.",
    icon: "🤝",
  },
];

export function Signals() {
  return (
    <section className="border-t border-[#ececec] py-24 md:py-28">
      <div className="container-page">
        <motion.div
          {...sectionInView}
          className="mx-auto mb-14 max-w-[720px] text-center"
        >
          <span className="text-eyebrow">Signals</span>
          <h2 className="text-section mt-4">
            All of the signals, none of the noise.
            <br />
            <span className="text-[#737373]">Ready to act on.</span>
          </h2>
        </motion.div>

        {/* Context bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-[860px]"
        >
          <div className="surface-card overflow-hidden">
            <div className="border-b border-[#ececec] bg-[#f7f7f7] px-5 py-3">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#737373]">
                Context
              </span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#ececec] md:grid-cols-4">
              {contextItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-white px-5 py-4 text-center"
                >
                  <div className="text-[13px] font-medium text-[#0a0a0a]">
                    {item.label}
                  </div>
                  <div className="mt-1 text-[12px] text-emerald-600 font-medium">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Signal cards */}
        <div className="mx-auto grid max-w-[960px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signalCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`surface-card p-6 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-3 text-2xl">{card.icon}</div>
              <h3 className="mb-1.5 text-[15px] font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="text-[13.5px] leading-snug text-[#737373]">
                {card.desc}
              </p>
            </motion.div>
          ))}

          {/* Context graph mini panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="surface-card overflow-hidden"
          >
            <div className="bg-[#0a0a0a] p-5 text-white">
              <div className="mb-3 text-[11px] uppercase tracking-wider text-white/40">
                Context graph
              </div>
              <div className="space-y-2.5 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-white/70">People linked</span>
                  <span className="font-medium">128</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Live signals</span>
                  <span className="font-medium">1,042</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Ready actions</span>
                  <span className="font-medium text-emerald-400">37</span>
                </div>
                <div className="mt-3 border-t border-white/10 pt-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[12px] text-white/50">
                      Agents processing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
