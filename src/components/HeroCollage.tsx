"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Avatar, WindowChrome } from "@/components/ui";
import { AgentBadge } from "@/components/AgentBadge";

const ease = [0.22, 1, 0.36, 1] as const;

const chatSteps = [
  {
    kind: "user" as const,
    who: "Marcus",
    initials: "M",
    tone: "blue" as const,
    t: "10:24",
    text: "@AgentCRM what deals should I focus on today?",
  },
  {
    kind: "bot" as const,
    t: "10:24",
    text: (
      <>
        <span className="font-medium text-[#0a0a0a]">GreenLeaf</span> (verbal yes, no quote
        out) and <span className="font-medium text-[#0a0a0a]">Ramp</span> (stalled in Legal
        5d).
      </>
    ),
  },
];

const terminalLines = [
  { kind: "cmd", text: "Find yesterday's demo call and create the right follow-up task." },
  { kind: "meta", text: "Ran 3 commands" },
  { kind: "tool", text: "· search-call-recordings-by-metadata" },
  { kind: "tool", text: "· get-call-recording" },
  { kind: "tool", text: "· create-task" },
  {
    kind: "result",
    text: "Pulled transcript · flagged pricing objection · queued AE follow-up for GreenLeaf.",
  },
];

const workflowNodes = [
  {
    id: "ent",
    title: "Add to Enterprise target list",
    body: "Route lead to Enterprise and draft outreach for AE.",
    status: "ok" as const,
  },
  {
    id: "smb",
    title: "Add to SMB target list",
    body: "Route lead to SMB and draft a lighter first touch.",
    status: "ready" as const,
  },
];

const transcript = [
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
];

function useCycle(max: number, ms: number, pause = false) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (pause || max <= 1) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % max), ms);
    return () => window.clearInterval(id);
  }, [max, ms, pause]);
  return i;
}

function useReveal(count: number, stepMs: number, loopMs = 9000) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let step = 0;
    let timer: number;
    const tick = () => {
      step += 1;
      if (step > count) {
        timer = window.setTimeout(() => {
          step = 0;
          setN(0);
          timer = window.setTimeout(tick, stepMs);
        }, loopMs - count * stepMs);
        return;
      }
      setN(step);
      timer = window.setTimeout(tick, stepMs);
    };
    timer = window.setTimeout(tick, 400);
    return () => window.clearTimeout(timer);
  }, [count, stepMs, loopMs]);
  return n;
}

export function HeroCollage() {
  const chatN = useReveal(chatSteps.length, 900, 8000);
  const termN = useReveal(terminalLines.length, 700, 10000);
  const flowN = useReveal(workflowNodes.length + 1, 1100, 9000);
  const lineN = useReveal(transcript.length, 1000, 9000);
  const [activeNode, setActiveNode] = useState(0);
  const [triggerPulse, setTriggerPulse] = useState(false);
  const [meetingTab, setMeetingTab] = useState(1);
  const idleNode = useCycle(workflowNodes.length, 2800);

  useEffect(() => {
    setActiveNode(idleNode);
  }, [idleNode]);

  return (
    <div className="relative mx-auto mt-16 max-w-[1100px]">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(244,244,245,0.9),transparent_70%)]" />

      <div className="grid items-start gap-4 lg:grid-cols-[0.9fr_1.35fr_0.95fr]">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            whileHover={{ y: -4, rotate: 0, transition: { duration: 0.25 } }}
            className="will-change-transform"
          >
            <WindowChrome title="# pipeline" className="max-w-md interactive-window">
              <div className="space-y-3 p-4">
                <AnimatePresence mode="popLayout">
                  {chatSteps.slice(0, chatN).map((m, idx) =>
                    m.kind === "user" ? (
                      <motion.div
                        key={`u-${idx}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="flex items-start gap-2.5"
                      >
                        <Avatar initials={m.initials} tone={m.tone} />
                        <div className="min-w-0">
                          <div className="flex items-baseline gap-2">
                            <span className="text-[13px] font-semibold">{m.who}</span>
                            <span className="text-[11px] text-[#a3a3a3]">{m.t}</span>
                          </div>
                          <p className="mt-0.5 text-[13px] leading-snug text-[#404040]">
                            {m.text}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`b-${idx}`}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="flex items-start gap-2.5 rounded-xl bg-[#fafafa] p-2.5 ring-1 ring-[#ececec]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0a0a] text-[10px] font-semibold text-white">
                          AC
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[13px] font-semibold">Agent CRM</span>
                            <AgentBadge>Sent by Agent · {m.t}</AgentBadge>
                          </div>
                          <p className="mt-1 text-[13px] leading-snug text-[#404040]">{m.text}</p>
                        </div>
                      </motion.div>
                    ),
                  )}
                </AnimatePresence>
                {chatN < chatSteps.length && (
                  <div className="flex items-center gap-1.5 pl-10 text-[12px] text-[#a3a3a3]">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                )}
              </div>
            </WindowChrome>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
          >
            <WindowChrome
              dark
              title="agent session"
              className="interactive-window"
              trailing={
                <span className="inline-flex items-center gap-1 text-[11px] text-white/50">
                  <span className="live-dot bg-[#ef4444]" />
                  live
                </span>
              }
            >
              <div className="space-y-2.5 p-4 font-mono text-[12px] leading-relaxed">
                <AnimatePresence mode="popLayout">
                  {terminalLines.slice(0, termN).map((line, i) => {
                    if (line.kind === "cmd") {
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-white/90"
                        >
                          <span className="text-emerald-400">&gt;</span> {line.text}
                        </motion.div>
                      );
                    }
                    if (line.kind === "meta") {
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-white/40"
                        >
                          {line.text}
                        </motion.div>
                      );
                    }
                    if (line.kind === "tool") {
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-white/70"
                        >
                          {line.text}
                        </motion.div>
                      );
                    }
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-lg bg-white/5 p-2.5 text-white/75 ring-1 ring-white/10"
                      >
                        {line.text}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
                {termN < terminalLines.length && (
                  <div className="text-emerald-400">
                    ▍<span className="sr-only">cursor</span>
                  </div>
                )}
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
          transition={{ duration: 0.75, delay: 0.35, ease }}
          whileHover={{ y: -3, transition: { duration: 0.25 } }}
          className="lg:-mt-2"
        >
          <WindowChrome
            title="Basepoint · Workflows › Smartflow"
            className="interactive-window"
            trailing={
              <span className="badge badge-success">
                <span className="live-dot bg-emerald-500" />
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
                  {["Home", "Notifications", "Tasks", "Notes", "Calls", "Reports"].map(
                    (item, i) => (
                      <button
                        key={item}
                        type="button"
                        className={`block w-full rounded-lg px-2.5 py-1.5 text-left transition-colors ${
                          i === 0
                            ? "bg-[#f4f4f5] font-medium text-[#0a0a0a]"
                            : "text-[#525252] hover:bg-[#fafafa] hover:text-[#0a0a0a]"
                        }`}
                      >
                        {item}
                      </button>
                    ),
                  )}
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
                  <button
                    type="button"
                    onClick={() => {
                      setTriggerPulse(true);
                      window.setTimeout(() => setTriggerPulse(false), 900);
                    }}
                    className={`btn-secondary !px-2.5 !py-1 !text-[12px] ${
                      triggerPulse ? "ring-2 ring-emerald-400/60" : ""
                    }`}
                  >
                    {triggerPulse ? "Running…" : "Trigger manually"}
                  </button>
                </div>

                <motion.div
                  key={triggerPulse ? "run" : "idle"}
                  initial={{ opacity: 0.6, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-[12px] font-medium text-emerald-700 ring-1 ring-emerald-100"
                >
                  <span className="live-dot bg-emerald-500" />
                  {triggerPulse ? "Running · Run #15" : "Completed · Run #14"}
                </motion.div>

                <div className="relative mx-auto max-w-sm space-y-3">
                  {workflowNodes.map((node, idx) => {
                    const visible = flowN > idx;
                    const active = activeNode === idx || (triggerPulse && idx === 0);
                    return (
                      <div key={node.id}>
                        {idx > 0 && (
                          <div className="relative mx-auto h-6 w-px overflow-hidden bg-[#e5e5e5]">
                            <motion.span
                              className="absolute inset-x-0 top-0 h-1/2 bg-emerald-500"
                              animate={{ y: ["-100%", "200%"] }}
                              transition={{
                                duration: 1.4,
                                repeat: Infinity,
                                ease: "linear",
                                delay: idx * 0.2,
                              }}
                            />
                          </div>
                        )}
                        <motion.button
                          type="button"
                          onClick={() => setActiveNode(idx)}
                          initial={false}
                          animate={{
                            opacity: visible ? 1 : 0.35,
                            y: visible ? 0 : 8,
                            scale: active ? 1.02 : 1,
                          }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.3, ease }}
                          className={`surface-card w-full p-3.5 text-left transition-shadow ${
                            active ? "ring-2 ring-[#0a0a0a]/10 shadow-[var(--shadow-lift)]" : ""
                          }`}
                        >
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-[13px] font-semibold">{node.title}</span>
                            <span
                              className={`badge ${
                                node.status === "ok" ? "badge-success" : "badge-neutral"
                              }`}
                            >
                              {node.status}
                            </span>
                          </div>
                          <p className="text-[12px] leading-snug text-[#737373]">{node.body}</p>
                        </motion.button>
                      </div>
                    );
                  })}
                </div>

                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-4 right-4 w-[170px] rounded-xl bg-white/95 p-3 shadow-[var(--shadow-soft)] ring-1 ring-[#e5e5e5] backdrop-blur"
                >
                  <div className="mb-2 text-[11px] font-medium uppercase tracking-wide text-[#a3a3a3]">
                    Overview
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[12px]">
                    <div>
                      <div className="font-semibold text-emerald-600">
                        {triggerPulse ? "151" : "150"}
                      </div>
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
                </motion.div>
              </div>
            </div>
          </WindowChrome>
        </motion.div>

        {/* Right - meeting */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          whileHover={{ y: -4, rotate: 0.5, transition: { duration: 0.25 } }}
          className="lg:mt-10"
        >
          <WindowChrome
            title="Product Demo w/ GreenLeaf"
            className="interactive-window"
            trailing={
              <span className="inline-flex items-center gap-1.5 text-[11px] text-[#737373]">
                <span className="live-dot bg-rose-500" />
                28:14
              </span>
            }
          >
            <div className="p-3">
              <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-[#dbeafe] via-[#f5f5f5] to-[#ede9fe]">
                <motion.div
                  className="absolute inset-0 opacity-40 mix-blend-multiply [background-image:radial-gradient(circle_at_30%_20%,#93c5fd,transparent_40%),radial-gradient(circle_at_70%_70%,#c4b5fd,transparent_35%)]"
                  animate={{ backgroundPosition: ["0% 0%", "100% 50%", "0% 0%"] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute left-3 top-3 flex gap-1.5">
                  {["Meeting", "Transcript", "Speakers"].map((t, i) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setMeetingTab(i)}
                      className={`rounded-md px-2 py-1 text-[11px] font-medium transition-all ${
                        meetingTab === i
                          ? "bg-white text-[#0a0a0a] shadow-sm"
                          : "bg-black/5 text-[#525252] hover:bg-black/10"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div className="rounded-xl bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
                    <div className="text-[12px] font-semibold">Ashley · Buyer</div>
                    <div className="text-[11px] text-[#737373]">Signing authority confirmed</div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-black/5"
                  >
                    <span className="text-sm font-semibold text-[#2563eb]">A</span>
                  </motion.div>
                </div>
              </div>

              <div className="space-y-2.5 px-1 pb-1">
                <AnimatePresence mode="popLayout">
                  {transcript.slice(0, lineN).map((row) => (
                    <motion.div
                      key={row.t + row.who}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="flex gap-2"
                    >
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
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </WindowChrome>
        </motion.div>
      </div>
    </div>
  );
}
