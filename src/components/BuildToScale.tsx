"use client";

import { motion } from "framer-motion";
import { scaleItems } from "@/lib/data";
import { sectionInView } from "@/lib/animations";

export function BuildToScale() {
  return (
    <section className="border-t border-[#ececec] bg-white/50 py-24 md:py-28">
      <div className="container-page">
        <motion.div {...sectionInView} className="mx-auto mb-12 max-w-[720px] text-center">
          <span className="text-eyebrow">Build to scale</span>
          <h2 className="text-section mt-4">
            Run at any scale.
            <br />
            <span className="text-[#737373]">
              Production-grade for your team and agents.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scaleItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="surface-card p-5"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4f4f5] text-[13px] font-semibold text-[#0a0a0a]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-1.5 text-[15px] font-semibold tracking-tight">{item.title}</h3>
              <p className="text-[13.5px] leading-snug text-[#737373]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
