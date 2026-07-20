"use client";

import { motion } from "framer-motion";
import { Avatar, WindowChrome } from "@/components/ui";

export function HeroCollage() {
  return (
    <div className="relative mx-auto mt-16 max-w-[1100px]">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(244,244,245,0.9),transparent_70%)]" />

      <div className="grid items-start gap-4 lg:grid-cols-[0.9fr_1.35fr_0.95fr]">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <WindowChrome title="# pipeline" className="max-w-md">
              <div className="space-y-3 p-4">
                <div className="flex items-start gap-2.5">
                  <Avatar initials="M" tone="blue" />
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[13px] font-semibold">Marcus</span>
                      <span className="text-[11px] text-[#a3a3a3]">10:24</span>
                    </div>
                    <p className="mt-0.5 text-[13px] leading-snug text-[#404040]">
                      @AgentCRM what deals should I focus on today?
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 rounded-xl bg-[#fafafa] p-2.5 ring-1 ring-[#ececec]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0a0a] text-[10px] font-semibold text-white">
                    AC
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[13px] font-semibold">Agent CRM</span>
                      <span className="badge badge-neutral">APP</span>
                      <span className="text-[11px] text-[#a3a3a3]">10:24</span>
                    </div>
                    <p className="mt-1 text-[13px] leading-snug text-[#404040]">
                      <span className="font-medium text-[#0a0a0a]">GreenLeaf</span>{" "}
                      (verbal yes, no quote out) and{" "}
                      <span className="font-medium text-[#0a0a0a]">Ramp</span>{" "}
                      (stalled in Legal 5d).
                    </p>
                  </div>
                </div>
              </div>
            </WindowChrome>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <WindowChrome
              dark
              title="agent session"
              trailing={
                <span className="inline-flex items-center gap-1 text-[11px] text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ef4444]" />
                  live
                </span>
              }
            >
              <div className="space-y-2.5 p-4 font-mono text-[12px] leading-relaxed">
                <div className="text-white/90">
                  <span className="text-emerald-400">&gt;</span> Find yesterday&apos;s demo call
                  and create the right follow-up task.
                </div>
                <div className="text-white/40">Ran 3 commands</div>
                <div className="space-y-1 text-white/70">
                  <div>· search-call-recordings-by-metadata</div>
                  <div>· get-call-recording</div>
                  <div>· create-task</div>
                </div>
                <div className="rounded-lg bg-white/5 p-2.5 text-white/75 ring-1 ring-white/10">
                  Pulled transcript · flagged pricing objection · queued AE follow-up for GreenLeaf.
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] text-white/35">
                  <span>41s · ↓ 13k tokens</span>
                  <span>auto · Opus 4.8 · 1M context</span>
                </div>
              </div>
            </WindowChrome>
          </motion.div>
        </div>

        {/* Center - workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="lg:-mt-2"
        >
          <WindowChrome
            title="Basepoint · Workflows › Smartflow"
            trailing={
              <span className="badge badge-success">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
            }
          >
            <div className="grid min-h-[360px] grid-cols-[150px_1fr] bg-[#fbfbfb]">
              <aside className="border-r border-[#ececec] bg-white p-3">
                <div className="mb-3 text-[11px] font-medium uppercase tracking-wide text-[#a3a3a3]">
                  Quick actions
                </div>
                <nav className="space-y-1 text-[12.5px]">
                  {[
                    "Home",
                    "Notifications",
                    "Tasks",
                    "Notes",
                    "Calls",
                    "Reports",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-lg px-2.5 py-1.5 ${
                        i === 0
                          ? "bg-[#f4f4f5] font-medium text-[#0a0a0a]"
                          : "text-[#525252]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </nav>
              </aside>

              <div className="dot-grid relative p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12.5px]">
                    <span className="rounded-md bg-white px-2 py-1 font-medium ring-1 ring-[#e5e5e5]">
                      Editor
                    </span>
                    <span className="rounded-md bg-[#0a0a0a] px-2 py-1 font-medium text-white">
                      Runs <span className="text-white/60">13</span>
                    </span>
                    <span className="rounded-md px-2 py-1 text-[#737373]">Settings</span>
                  </div>
                  <button type="button" className="btn-secondary !px-2.5 !py-1 !text-[12px]">
                    Trigger manually
                  </button>
                </div>

                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-[12px] font-medium text-emerald-700 ring-1 ring-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Completed · Run #14
                </div>

                <div className="relative mx-auto max-w-sm space-y-3">
                  <div className="surface-card p-3.5">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[13px] font-semibold">Add to Enterprise target list</span>
                      <span className="badge badge-success">ok</span>
                    </div>
                    <p className="text-[12px] leading-snug text-[#737373]">
                      Route lead to Enterprise and draft outreach for AE.
                    </p>
                  </div>
                  <div className="mx-auto h-6 w-px bg-[#d4d4d4]" />
                  <div className="surface-card p-3.5">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[13px] font-semibold">Add to SMB target list</span>
                      <span className="badge badge-neutral">ready</span>
                    </div>
                    <p className="text-[12px] leading-snug text-[#737373]">
                      Route lead to SMB and draft a lighter first touch.
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 w-[170px] rounded-xl bg-white/95 p-3 shadow-[var(--shadow-soft)] ring-1 ring-[#e5e5e5] backdrop-blur">
                  <div className="mb-2 text-[11px] font-medium uppercase tracking-wide text-[#a3a3a3]">
                    Overview
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[12px]">
                    <div>
                      <div className="font-semibold text-emerald-600">150</div>
                      <div className="text-[#737373]">Completed</div>
                    </div>
                    <div>
                      <div className="font-semibold text-rose-600">2</div>
                      <div className="text-[#737373]">Failed</div>
                    </div>
                    <div>
                      <div className="font-semibold">2s</div>
                      <div className="text-[#737373]">Avg runtime</div>
                    </div>
                    <div>
                      <div className="font-semibold">8</div>
                      <div className="text-[#737373]">Credits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </WindowChrome>
        </motion.div>

        {/* Right - meeting */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="lg:mt-10"
        >
          <WindowChrome
            title="Product Demo w/ GreenLeaf"
            trailing={<span className="text-[11px] text-[#737373]">28:14</span>}
          >
            <div className="p-3">
              <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-[#dbeafe] via-[#f5f5f5] to-[#ede9fe]">
                <div className="absolute inset-0 opacity-40 mix-blend-multiply [background-image:radial-gradient(circle_at_30%_20%,#93c5fd,transparent_40%),radial-gradient(circle_at_70%_70%,#c4b5fd,transparent_35%)]" />
                <div className="absolute left-3 top-3 flex gap-1.5">
                  {["Meeting", "Transcript", "Speakers"].map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-md px-2 py-1 text-[11px] font-medium ${
                        i === 1
                          ? "bg-white text-[#0a0a0a] shadow-sm"
                          : "bg-black/5 text-[#525252]"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div className="rounded-xl bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
                    <div className="text-[12px] font-semibold">Ashley · Buyer</div>
                    <div className="text-[11px] text-[#737373]">Signing authority confirmed</div>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-black/5">
                    <span className="text-sm font-semibold text-[#2563eb]">A</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 px-1 pb-1">
                {[
                  {
                    who: "Ashley",
                    t: "0:02",
                    text: "Everything's in spreadsheets right now and it's getting unmanageable.",
                  },
                  {
                    who: "Sam",
                    t: "0:11",
                    text: "We can have you live well before Monday. How many seats?",
                  },
                  {
                    who: "Ashley",
                    t: "0:24",
                    text: "Six, on the Pro plan. I'll be the one signing off.",
                  },
                ].map((row) => (
                  <div key={row.t + row.who} className="flex gap-2">
                    <Avatar
                      initials={row.who[0]}
                      tone={row.who === "Ashley" ? "blue" : "emerald"}
                      size="sm"
                    />
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[12px] font-semibold">{row.who}</span>
                        <span className="text-[11px] text-[#a3a3a3]">{row.t}</span>
                      </div>
                      <p className="text-[12.5px] leading-snug text-[#404040]">{row.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </WindowChrome>
        </motion.div>
      </div>
    </div>
  );
}
