"use client";

import { motion } from "framer-motion";
import { sectionInView } from "@/lib/animations";

export function DarkFeature() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-[#fafafa]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          {...sectionInView}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="inline-block px-3 py-1 text-[13px] font-medium bg-[#262626] rounded-full mb-6">
              Self-building
            </span>
            <h2 className="text-section text-[#fafafa] mb-6">
              Live from day one.
              <br />
              <span className="text-[#a3a3a3]">
                Connect your inbox and calendar. Agent CRM learns your business
                and builds itself around it, before your first agent even gets
                to work.
              </span>
            </h2>
            <a
              href="#"
              className="btn-primary bg-[#fafafa] text-[#0a0a0a] border-[#fafafa] hover:bg-[#e5e5e5]"
            >
              Start for free
            </a>
          </div>

          <div className="bg-[#171717] rounded-[16px] border border-[#262626] p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center text-[14px] font-medium">
                S
              </div>
              <div>
                <div className="text-[15px] font-medium">Sarah Johnson</div>
                <div className="text-[13px] text-[#a3a3a3]">Head of IT</div>
              </div>
              <button
                type="button"
                className="ml-auto text-[13px] text-[#a3a3a3] hover:text-[#fafafa]"
              >
                Compose email
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-[13px] font-medium text-[#a3a3a3] mb-2">
                  Highlights
                </div>
                <div className="text-[14px] leading-relaxed">
                  Sarah Johnson, the Head of IT, is leading the initiative to
                  modernize their data infrastructure, which aligns with
                  GreenLeaf's growth and sustainability goals.
                </div>
              </div>

              <div className="flex items-center gap-4 text-[13px]">
                <span className="text-[#a3a3a3]">LinkedIn</span>
                <span>sarahjohnson</span>
              </div>

              <div className="bg-[#262626] rounded-lg p-4">
                <div className="text-[13px] text-[#a3a3a3] mb-1">Upcoming</div>
                <div className="text-[14px] font-medium">Demo Call</div>
                <div className="text-[13px] text-[#a3a3a3]">Aug 29, 10:40 AM</div>
              </div>

              <div>
                <div className="text-[13px] text-[#a3a3a3] mb-2">Activity</div>
                <div className="space-y-2 text-[13px]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#262626] flex items-center justify-center text-[11px]">
                      M
                    </div>
                    <span>Michael Chang attended an in-person meeting</span>
                    <span className="text-[#737373]">6 hours ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#262626] flex items-center justify-center text-[11px]">
                      S
                    </div>
                    <span>Sarah Johnson attended an event</span>
                    <span className="text-[#737373]">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
