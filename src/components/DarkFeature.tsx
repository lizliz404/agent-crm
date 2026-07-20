"use client";

import { motion } from "framer-motion";
import { sectionInView } from "@/lib/animations";
import { Avatar, WindowChrome } from "@/components/ui";

export function DarkFeature() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-[#fafafa] md:py-28">
      <div className="pointer-events-none absolute inset-0 dot-grid-dark opacity-60" />
      <div className="container-page relative">
        <motion.div
          {...sectionInView}
          className="grid items-center gap-14 lg:grid-cols-2"
        >
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[12.5px] font-medium text-white/80 ring-1 ring-white/10">
              <span className="live-dot bg-emerald-400" />
              Self-building
            </span>
            <h2 className="text-section mb-6 text-white">
              Live from day one.
              <br />
              <span className="text-[#a3a3a3]">
                Connect your inbox and calendar. Agent CRM learns your business
                and builds itself around it, before your first agent even gets to
                work.
              </span>
            </h2>
            <a
              href="#"
              className="btn-primary !border-white !bg-white !text-[#0a0a0a] hover:!bg-[#e5e5e5]"
            >
              Start for free
            </a>
          </div>

          <WindowChrome
            dark
            title="Sarah Johnson · GreenLeaf Inc."
            trailing={
              <button type="button" className="text-[12px] text-white/60 hover:text-white">
                Compose email
              </button>
            }
          >
            <div className="space-y-4 p-5">
              <div className="flex items-center gap-3">
                <Avatar initials="SJ" tone="violet" size="lg" />
                <div>
                  <div className="text-[15px] font-semibold">Sarah Johnson</div>
                  <div className="text-[13px] text-white/50">Head of IT · GreenLeaf Inc.</div>
                </div>
                <span className="ml-auto badge badge-success">75% conf.</span>
              </div>

              <div>
                <div className="mb-1.5 text-[12px] font-medium uppercase tracking-wide text-white/40">
                  Highlights
                </div>
                <p className="text-[13.5px] leading-relaxed text-white/85">
                  Sarah is leading a data-infrastructure modernization that maps
                  to GreenLeaf&apos;s growth goals. Demo on Aug 29 confirmed fit;
                  opportunity advancing with strong technical buy-in.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <div className="text-[11px] text-white/40">Upcoming</div>
                  <div className="mt-1 text-[14px] font-medium">Demo Call</div>
                  <div className="text-[12px] text-white/50">Thu · Aug 29, 10:40 AM</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <div className="text-[11px] text-white/40">Company</div>
                  <div className="mt-1 text-[14px] font-medium">GreenLeaf Inc.</div>
                  <div className="text-[12px] text-white/50">San Francisco, CA</div>
                </div>
              </div>

              <div>
                <div className="mb-2 text-[12px] font-medium uppercase tracking-wide text-white/40">
                  Activity
                </div>
                <div className="space-y-2.5">
                  {[
                    {
                      i: "MC",
                      t: "blue" as const,
                      text: "Michael Chang attended an in-person meeting",
                      ago: "6 hours ago",
                    },
                    {
                      i: "SJ",
                      t: "violet" as const,
                      text: "Sarah Johnson attended an event",
                      ago: "2 days ago",
                    },
                    {
                      i: "MC",
                      t: "blue" as const,
                      text: "Michael Chang made an outbound phone call",
                      ago: "4 days ago",
                    },
                  ].map((row) => (
                    <div key={row.text} className="flex items-center gap-2.5 text-[12.5px]">
                      <Avatar initials={row.i} tone={row.t} size="sm" />
                      <span className="min-w-0 flex-1 text-white/80">{row.text}</span>
                      <span className="shrink-0 text-white/35">{row.ago}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </WindowChrome>
        </motion.div>
      </div>
    </section>
  );
}
