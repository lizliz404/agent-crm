"use client";

import { motion } from "framer-motion";
import { changelogItems } from "@/lib/data";
import { sectionInView } from "@/lib/animations";

export function Changelog() {
  return (
    <section className="py-24 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          {...sectionInView}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-[14px] font-medium text-[#525252]">
              Changelog
            </span>
            <h2 className="text-section mt-2">
              Better as you grow.
              <br />
              <span className="text-[#737373]">
                New features every week to keep pace with you.
              </span>
            </h2>
          </div>
          <a
            href="#"
            className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] flex items-center gap-1"
          >
            View all
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {changelogItems.map((item, i) => (
            <motion.a
              key={item.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-[12px] border border-[#e5e5e5] bg-white hover:border-[#d4d4d4] transition-colors group"
            >
              <div className="text-[13px] text-[#737373] mb-2">
                {item.date}
              </div>
              <h3 className="text-[17px] font-medium mb-1 group-hover:text-[#525252] transition-colors">
                {item.title}
              </h3>
              <p className="text-[14px] text-[#737373]">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
