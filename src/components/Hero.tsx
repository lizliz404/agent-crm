"use client";

import { motion } from "framer-motion";
import {
  fadeInTransition,
  fadeInUp,
  staggerContainer,
} from "@/lib/animations";
import { HeroCollage } from "@/components/HeroCollage";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-16 md:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.9),transparent_60%)]" />
      <div className="container-page">
        <div className="mx-auto max-w-[720px] text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.a
              href="#"
              variants={fadeInUp}
              transition={fadeInTransition}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white/80 px-3 py-1.5 text-[13px] font-medium text-[#525252] shadow-sm backdrop-blur transition hover:border-[#d4d4d4] hover:text-[#0a0a0a]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              GTM lessons from Elena Verna and more
              <span aria-hidden className="text-[#a3a3a3]">
                →
              </span>
            </motion.a>

            <motion.h1
              variants={fadeInUp}
              transition={fadeInTransition}
              className="text-hero mb-5"
            >
              Welcome to agentic revenue.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={fadeInTransition}
              className="text-body mx-auto mb-8 max-w-[460px]"
            >
              Agent CRM is the CRM that builds pipeline, advances deals, and
              grows accounts around the clock.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={fadeInTransition}
              className="flex flex-wrap items-center justify-center gap-3"
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

        <HeroCollage />
      </div>
    </section>
  );
}
