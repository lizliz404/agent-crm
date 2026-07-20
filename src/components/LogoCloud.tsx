"use client";

import { motion } from "framer-motion";
import { logos } from "@/lib/data";

export function LogoCloud() {
  const row = [...logos, ...logos];
  return (
    <section className="border-y border-[#ececec] bg-white/40 py-12 overflow-hidden">
      <div className="container-page mb-5 text-center">
        <p className="text-[13px] font-medium text-[#a3a3a3]">
          Trusted by revenue teams shipping with agents
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fafafa] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fafafa] to-transparent" />
        <motion.div
          className="flex w-max gap-12 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {row.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="shrink-0 text-[14px] font-semibold tracking-tight text-[#b0b0b0] transition-colors hover:text-[#525252]"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
