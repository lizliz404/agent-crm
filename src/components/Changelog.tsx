"use client";

import { motion } from "framer-motion";
import { changelogItems } from "@/lib/data";
import { sectionInView } from "@/lib/animations";

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
              <span className="text-[#737373]">
                New features every week to keep pace with you.
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
              <div className="h-28 bg-gradient-to-br from-[#f4f4f5] to-[#e8e8ea]">
                <div className="flex h-full items-end p-4">
                  <span className="badge badge-neutral">{item.tag}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-2 text-[12.5px] text-[#737373]">{item.date}</div>
                <h3 className="mb-1 text-[16px] font-semibold tracking-tight group-hover:text-[#404040]">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-[#737373]">{item.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
