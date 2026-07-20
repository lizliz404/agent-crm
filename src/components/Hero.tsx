"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInTransition,
  staggerContainer,
} from "@/lib/animations";

export function Hero() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-[720px] mx-auto text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            transition={fadeInTransition}
            className="text-[14px] font-medium text-[#525252] mb-6"
          >
            GTM lessons from Elena Verna and more
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            transition={fadeInTransition}
            className="text-hero mb-6"
          >
            Welcome to agentic revenue.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={fadeInTransition}
            className="text-body max-w-[420px] mx-auto mb-8"
          >
            Agent CRM is the CRM that builds pipeline, advances deals, and grows
            accounts around the clock.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={fadeInTransition}
            className="flex items-center justify-center gap-3"
          >
            <a href="#" className="btn-primary">
              Talk to sales
            </a>
            <a href="#" className="btn-secondary">
              Start for free
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Product Demo Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-[1000px] mx-auto mt-20"
      >
        <div className="bg-white rounded-[16px] border border-[#e5e5e5] shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="bg-[#f5f5f5] px-4 py-3 border-b border-[#e5e5e5] flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-[13px] text-[#737373] ml-2">
              Product Demo w/ GreenLeaf
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#e5e5e5] flex items-center justify-center text-[14px] font-medium">
                M
              </div>
              <div>
                <div className="text-[14px] font-medium">Marcus</div>
                <div className="text-[13px] text-[#737373]">10:24</div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-[12px] px-2 py-1 bg-[#f5f5f5] rounded-md text-[#525252]">
                  Agent CRM APP
                </span>
                <span className="text-[13px] text-[#737373]">10:24</span>
              </div>
            </div>
            <div className="bg-[#fafafa] rounded-lg p-4 border border-[#e5e5e5]">
              <div className="flex items-center gap-2 text-[14px] text-[#525252]">
                <span className="text-[#0a0a0a]">&gt;</span>
                <span>Find yesterday's demo call and create the rig</span>
                <span className="text-[#a3a3a3]">▶▶ auto</span>
              </div>
              <div className="mt-2 text-[13px] text-[#737373]">
                Opus 4.8 · 1M context
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
