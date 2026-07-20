"use client";

import { motion } from "framer-motion";
import { logos } from "@/lib/data";

export function LogoCloud() {
  return (
    <section className="py-16 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {logos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-[15px] font-medium text-[#a3a3a3] hover:text-[#525252] transition-colors cursor-default"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
