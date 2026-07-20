"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { customerStories } from "@/lib/data";
import { sectionInView } from "@/lib/animations";

export function CustomerStories() {
  const [active, setActive] = useState(0);
  const story = customerStories[active];

  return (
    <section id="customers" className="border-t border-[#ececec] py-24 md:py-28">
      <div className="container-page">
        <motion.div
          {...sectionInView}
          className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end"
        >
          <div>
            <span className="text-eyebrow">Customer stories</span>
            <h2 className="text-section mt-3">
              Trusted by 30,000+ customers.
              <br />
              <span className="text-[#737373]">From first agent to enterprise scale.</span>
            </h2>
          </div>
          <a href="#" className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a]">
            Read more →
          </a>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-2">
          {customerStories.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-[10px] px-4 py-2.5 text-[14px] font-medium transition ${
                i === active
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white text-[#525252] ring-1 ring-[#e5e5e5] hover:bg-[#f5f5f5]"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <motion.a
          key={story.name}
          href="#"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="group grid overflow-hidden rounded-[18px] border border-[#e5e5e5] bg-white shadow-[var(--shadow-soft)] md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="p-8 md:p-10">
            <div className="text-[12px] font-medium uppercase tracking-wider text-[#737373]">
              {story.category}
            </div>
            <h3 className="text-subsection mt-3 max-w-md group-hover:text-[#404040]">
              {story.headline}
            </h3>
            <div className="mt-6 text-[15px] font-semibold">{story.name}</div>
          </div>
          <div className="relative flex min-h-[220px] items-end bg-gradient-to-br from-[#f4f4f5] via-white to-[#e0e7ff] p-8 md:min-h-full">
            <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.12),transparent_35%)]" />
            <div className="relative">
              <div className="text-[12px] font-medium uppercase tracking-wide text-[#737373]">
                Highlight
              </div>
              <div className="mt-1 text-[40px] font-semibold tracking-tight text-[#0a0a0a]">
                {story.metric}
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
