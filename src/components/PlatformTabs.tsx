"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { tabs } from "@/lib/data";
import { sectionInView } from "@/lib/animations";
import { PlatformMock } from "@/components/PlatformMock";

export function PlatformTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="platform" className="py-24 md:py-28">
      <div className="container-page">
        <motion.div {...sectionInView} className="mx-auto mb-14 max-w-[820px] text-center">
          <span className="text-eyebrow">Platform</span>
          <h2 className="text-section mt-4">
            The intelligent system that never sleeps.
            <br />
            <span className="text-[#737373]">
              Picks up leads at 2am. Catches renewals before they slip. Hands you
              the answer before you ask.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-12">
          <motion.nav
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            aria-label="Homepage platform showcases"
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {tabs.map((tab) => {
              const on = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  className={`relative shrink-0 rounded-[10px] px-3.5 py-2.5 text-left text-[14px] font-medium transition-all ${
                    on
                      ? "bg-[#0a0a0a] text-white shadow-sm"
                      : "text-[#525252] hover:bg-[#f4f4f5] hover:text-[#0a0a0a]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </motion.nav>

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="grid items-start gap-8 xl:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="max-w-xl">
                  <h3 className="text-subsection mb-4 leading-snug">{current.title}</h3>
                  <h4 className="mb-2 text-[17px] font-medium tracking-tight text-[#0a0a0a]">
                    {current.subtitle}
                  </h4>
                  <p className="text-body">{current.description}</p>
                </div>
                <PlatformMock tabId={current.id} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
