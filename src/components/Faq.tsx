"use client";

import { motion } from "framer-motion";
import { faqItems } from "@/lib/data";
import { sectionInView } from "@/lib/animations";

export function Faq() {
  return (
    <section
      id="faq"
      data-chapter="FAQ"
      className="border-t border-[#ececec] py-24 md:py-28"
    >
      <div className="container-page">
        <motion.div {...sectionInView} className="mx-auto mb-12 max-w-2xl">
          <span className="text-eyebrow">FAQ</span>
          <h2 className="text-section mt-3">Questions teams ask first.</h2>
          <p className="text-body mt-4">
            Straight answers on what Agent CRM is, how agents work the pipeline,
            and who ships this page.
          </p>
        </motion.div>

        <dl className="mx-auto max-w-2xl divide-y divide-[#ececec] border-t border-[#ececec]">
          {faqItems.map((item) => (
            <div key={item.q} className="py-5">
              <dt className="text-[16px] font-semibold tracking-tight text-[#0a0a0a]">
                {item.q}
              </dt>
              <dd className="mt-2 text-[14px] leading-relaxed text-[#525252]">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
