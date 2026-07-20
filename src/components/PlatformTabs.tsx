"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { tabs, tabContent, accounts } from "@/lib/data";
import { sectionInView } from "@/lib/animations";

export function PlatformTabs() {
  const [activeTab, setActiveTab] = useState("build-pipeline");

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          {...sectionInView}
          className="text-center mb-16"
        >
          <span className="text-[14px] font-medium text-[#525252] uppercase tracking-wider">
            Platform
          </span>
          <h2 className="text-section mt-4 max-w-[800px] mx-auto">
            The intelligent system that never sleeps.
            <br />
            <span className="text-[#737373]">
              Picks up leads at 2am. Catches renewals before they slip. Hands you
              the answer before you ask.
            </span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-[14px] font-medium rounded-[10px] transition-all ${
                activeTab === tab.id
                  ? "bg-[#0a0a0a] text-[#fafafa]"
                  : "text-[#525252] hover:text-[#0a0a0a] hover:bg-[#f5f5f5]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h3 className="text-subsection mb-4">
              {tabContent[activeTab].title}
            </h3>
            <h4 className="text-label mb-2">
              {tabContent[activeTab].subtitle}
            </h4>
            <p className="text-body">{tabContent[activeTab].description}</p>
          </div>

          {/* Mock UI */}
          <div className="bg-white rounded-[12px] border border-[#e5e5e5] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[13px] font-medium">
                ?
              </div>
              <span className="text-[14px] text-[#737373]">Ask something...</span>
            </div>
            <div className="text-[13px] text-[#525252] mb-4">
              10 accounts ready for outreach
            </div>
            <div className="space-y-3">
              {accounts.map((account) => (
                <motion.div
                  key={account.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between py-2 border-b border-[#f5f5f5] last:border-0"
                >
                  <span className="text-[14px] font-medium">
                    {account.name}
                  </span>
                  <span className="text-[13px] text-[#737373]">
                    {account.signal}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
