"use client";

import { motion } from "framer-motion";
import { sectionInView } from "@/lib/animations";

const stories = ["Granola", "Railway", "Modal", "Taskrabbit"];

export function CustomerStories() {
  return (
    <section className="py-24 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div {...sectionInView} className="text-center mb-12">
          <span className="text-[14px] font-medium text-[#525252]">
            Customer stories
          </span>
          <h2 className="text-section mt-4">
            Trusted by 30,000+ customers.
            <br />
            <span className="text-[#737373]">
              From first agent to enterprise scale.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {stories.map((name) => (
            <button
              key={name}
              type="button"
              className="px-6 py-3 text-[15px] font-medium border border-[#e5e5e5] rounded-[10px] hover:bg-[#f5f5f5] transition-colors"
            >
              {name}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[600px] mx-auto p-8 rounded-[16px] border border-[#e5e5e5] bg-white text-center"
        >
          <span className="text-[13px] font-medium text-[#737373] uppercase tracking-wider">
            Artificial Intelligence
          </span>
          <h3 className="text-subsection mt-2">
            83% faster lead triage. How Granola turns product signals into
            revenue at scale.
          </h3>
          <div className="mt-4 text-[15px] font-medium">Granola</div>
        </motion.div>
      </div>
    </section>
  );
}
