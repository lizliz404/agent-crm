"use client";

import { motion } from "framer-motion";
import { sectionInView } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section className="py-32 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[720px] mx-auto text-center">
        <motion.div {...sectionInView}>
          <h2 className="text-hero mb-8">
            Agentic revenue runs on Agent CRM.
          </h2>
          <div className="flex items-center justify-center gap-3">
            <a href="#" className="btn-primary">
              Talk to sales
            </a>
            <a href="#" className="btn-secondary">
              Start for free
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
