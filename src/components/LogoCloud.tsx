"use client";

import { motion } from "framer-motion";
import { logos } from "@/lib/data";

export function LogoCloud() {
  return (
    <section className="border-y border-[#ececec] bg-white/40 py-12">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
        >
          {logos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="text-[14px] font-semibold tracking-tight text-[#b0b0b0] transition-colors hover:text-[#525252]"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
