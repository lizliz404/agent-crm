"use client";

import { motion } from "framer-motion";
import { changelogItems } from "@/lib/data";
import { sectionInView } from "@/lib/animations";
import { AgentBadge } from "@/components/AgentBadge";

export function Changelog() {
  return (
    <section className="border-t border-[#ececec] py-24 md:py-28">
      <div className="container-page">
        <motion.div
          {...sectionInView}
          className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end"
        >
          <div>
            <span className="text-eyebrow">Changelog</span>
            <h2 className="text-section mt-3">
              Better as you grow.
              <br />
              <span className="text-pull mt-2 block max-w-lg normal-case tracking-normal text-[#737373]">
                New features every week — many shipped by agents, tagged so you
                always know who authored the change.
              </span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a]"
          >
            View all
            <span aria-hidden>→</span>
          </a>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {changelogItems.map((item, i) => (
            <motion.a
              key={item.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group overflow-hidden rounded-[16px] border border-[#e5e5e5] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-[#d4d4d4] hover:shadow-[var(--shadow-lift)]"
            >
              <div className="relative h-28 overflow-hidden bg-gradient-to-br from-[#f4f4f5] to-[#e8e8ea]">
                <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_30%,rgba(8,145,178,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(10,10,10,0.06),transparent_35%)]" />
                <div className="relative flex h-full items-end justify-between gap-2 p-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="badge badge-neutral">{item.tag}</span>
                    {item.author === "agent" ? (
                      <AgentBadge>Authored by Agent</AgentBadge>
                    ) : (
                      <span className="badge badge-neutral">Team</span>
                    )}
                  </div>
                  <span className="text-[11px] tabular-nums text-[#a3a3a3]">
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-[16px] font-semibold tracking-tight group-hover:text-[#404040]">
                  {item.title}
                </h3>
                <p className="mb-2 text-[13.5px] font-medium text-[#525252]">
                  {item.desc}
                </p>
                {item.body && (
                  <p className="text-serif text-[13px] leading-relaxed text-[#737373]">
                    {item.body}
                  </p>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
