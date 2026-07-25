"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Avatar, WindowChrome } from "@/components/ui";
import { AgentBadge } from "@/components/AgentBadge";
import { useCycle, useReveal } from "@/lib/hooks";
import {
  chatSteps as chatStepsData,
  terminalLines,
  workflowNodes,
  transcript,
} from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

// Rebuild chatSteps with JSX content (can't live in a .ts data file)
const chatSteps = chatStepsData.map((step) =>
  step.kind === "bot"
    ? {
        ...step,
        text: (
          <>
            <span className="font-medium text-[#0a0a0a]">GreenLeaf</span> (verbal yes, no
            quote out) and{" "}
            <span className="font-medium text-[#0a0a0a]">Ramp</span> (stalled in Legal 5d).
          </>
        ),
      }
    : step,
);

/** Attio-parity pipeline radar — rings + bobbing signal chips */
function PipelineRadar() {
  const chips = [
    {
      x: 39.5,
      y: 94,
      w: 71,
      label: "ICP: 98",
      fill: "#e0fced",
      stroke: "#cbf7e1",
      color: "#007d53",
      delay: "1000ms",
      dur: "3800ms",
      cx: 75,
    },
    {
      x: 229,
      y: 46,
      w: 78,
      label: "New Exec",
      fill: "#fdf7c4",
      stroke: "#fcef7e",
      color: "#665a00",
      delay: "1650ms",
      dur: "4150ms",
      cx: 268,
    },
    {
      x: 2.5,
      y: 255,
      w: 151,
      label: "Warm intro via a16z",
      fill: "#e5eeff",
      stroke: "#d6e5ff",
      color: "#215bc4",
      delay: "2300ms",
      dur: "4500ms",
      cx: 78,
    },
    {
      x: 194,
      y: 268,
      w: 104,
      label: "$5B Series H",
      fill: "#f5f0ff",
      stroke: "#e8ddfe",
      color: "#6238b5",
      delay: "2950ms",
      dur: "4850ms",
      cx: 246,
    },
  ];

  return (
    <svg
      viewBox="0 0 320 320"
      className="mx-auto h-auto w-full max-w-[280px]"
      aria-hidden
    >
      <circle
        className="pipeline-radar-ring-outer"
        cx="160"
        cy="160"
        r="148"
        fill="none"
        stroke="rgba(28,40,64,0.9)"
        strokeWidth="1"
        style={{ animationDelay: "0.4s" }}
      />
      <circle
        className="pipeline-radar-ring-inner"
        cx="160"
        cy="160"
        r="100"
        fill="none"
        stroke="rgba(28,40,64,0.9)"
        strokeWidth="1"
      />
      <circle
        cx="160"
        cy="160"
        r="56"
        fill="#fff"
        stroke="rgba(28,40,64,0.05)"
        strokeWidth="1"
        style={{ filter: "drop-shadow(0 8px 20px rgba(28,40,64,0.12))" }}
      />
      {/* Dock Mark stand-in at radar core */}
      <rect x="142" y="142" width="36" height="36" rx="8" fill="#0a0a0a" />
      <rect x="147" y="146" width="22" height="22" rx="5" fill="#fafafa" />
      <rect x="163" y="162" width="9" height="9" rx="2" fill="#22d3ee" />
      {chips.map((c) => (
        <g
          key={c.label}
          className="pipeline-radar-bob"
          style={{
            animationDelay: c.delay,
            animationDuration: c.dur,
          }}
        >
          <rect
            x={c.x}
            y={c.y}
            width={c.w}
            height="26"
            rx="9"
            fill={c.fill}
            stroke={c.stroke}
            strokeWidth="1.27"
          />
          <text
            x={c.cx}
            y={c.y + 13}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="13"
            fontWeight="500"
            letterSpacing="-0.13"
            fill={c.color}
          >
            {c.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function HeroCollage() {
  const chatN = useReveal(chatSteps.length, 900, 8000);
  const termN = useReveal(terminalLines.length, 700, 10000);
  const flowN = useReveal(workflowNodes.length + 1, 1100, 9000);
  const lineN = useReveal(transcript.length, 1000, 9000);
  const [activeNode, setActiveNode] = useState(0);
  const [triggerPulse, setTriggerPulse] = useState(false);
  const [meetingTab, setMeetingTab] = useState(1);
  const [ask, setAsk] = useState("");
  const [transcriptPlaying, setTranscriptPlaying] = useState(false);
  const [transcriptProgress, setTranscriptProgress] = useState(34);
  const idleNode = useCycle(workflowNodes.length, 2800);

  useEffect(() => {
    setActiveNode(idleNode);
  }, [idleNode]);

  useEffect(() => {
    if (!transcriptPlaying) return;
    const id = window.setInterval(
      () => setTranscriptProgress((p) => (p >= 100 ? 0 : p + 1)),
      300,
    );
    return () => window.clearInterval(id);
  }, [transcriptPlaying]);

  return (
    <div className="relative mx-auto mt-16 max-w-[1100px]">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(244,244,245,0.9),transparent_70%)]" />

      {/* Floating radar — 5th overlapping window for Attio-density theater */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease }}
        className="absolute -left-2 top-[42%] z-20 hidden w-[200px] lg:block xl:-left-6 xl:w-[220px]"
      >
        <div className="surface-window interactive-window rotate-[-3deg] p-3">
          <div className="mb-1.5 flex items-center justify-between px-0.5">
            <span className="text-[11px] font-medium text-[#737373]">Signal radar</span>
            <AgentBadge className="!px-1.5 !py-0.5 !text-[10px]">Agent scan</AgentBadge>
          </div>
          <PipelineRadar />
        </div>
      </motion.div>

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
                          <div className="mt-1.5 flex items-center gap-1.5 text-[10.5px] text-[#a3a3a3]">
                            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ecfeff] text-[7px] leading-none text-[#0891b2] ring-1 ring-[#a5f3fc]/60">
                              ▶
                            </span>
                            <span className="rounded-md bg-[#f4f4f5] px-1 py-px font-medium text-[#737373] ring-1 ring-[#e5e5e5]">
                              auto
                            </span>
                            <span>Opus 4.8 · 1M context</span>
                          </div>
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
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAsk("");
                  }}
                  className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 ring-1 ring-[#e5e5e5] transition-shadow focus-within:ring-2 focus-within:ring-[#22d3ee]/50"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 shrink-0 text-[#0891b2]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden
                  >
                    <path
                      d="M8 1.5l1.8 4.7 4.7 1.8-4.7 1.8L8 14.5 6.2 9.8 1.5 8l4.7-1.8L8 1.5z"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    value={ask}
                    onChange={(e) => setAsk(e.target.value)}
                    placeholder="Ask something..."
                    className="min-w-0 flex-1 bg-transparent text-[12.5px] text-[#0a0a0a] outline-none placeholder:text-[#a3a3a3]"
                  />
                  <button
                    type="submit"
                    aria-label="Send"
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-all ${
                      ask.trim()
                        ? "bg-[#0a0a0a] text-white shadow-sm"
                        : "bg-[#f4f4f5] text-[#a3a3a3]"
                    }`}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path d="M3 8h9M9 4.5L12.5 8 9 11.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
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
                  <div className="mb-1.5 flex items-center justify-between gap-1">
                    <span className="text-[11px] font-medium uppercase tracking-wide text-[#a3a3a3]">
                      Overview
                    </span>
                    <AgentBadge className="!px-1.5 !py-0.5 !text-[10px]">Agent</AgentBadge>
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
                <div className="rounded-xl bg-[#fafafa] p-2.5 ring-1 ring-[#ececec]">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setTranscriptPlaying((v) => !v)}
                      aria-label={transcriptPlaying ? "Pause transcript" : "Play transcript"}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
                    >
                      {transcriptPlaying ? (
                        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden>
                          <rect x="3.5" y="3" width="3" height="10" rx="1" />
                          <rect x="9.5" y="3" width="3" height="10" rx="1" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 16 16" className="ml-0.5 h-3 w-3" fill="currentColor" aria-hidden>
                          <path d="M4.5 3.3c0-.9.97-1.44 1.73-.97l7.1 4.4a1.15 1.15 0 010 1.94l-7.1 4.4a1.15 1.15 0 01-1.73-.97V3.3z" />
                        </svg>
                      )}
                    </button>
                    <div className="flex min-w-0 flex-1 items-center gap-2">
                      <div
                        role="slider"
                        aria-label="Transcript progress"
                        aria-valuenow={Math.round(transcriptProgress)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        tabIndex={0}
                        onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const ratio = (e.clientX - rect.left) / rect.width;
                          setTranscriptProgress(
                            Math.min(100, Math.max(0, Math.round(ratio * 100))),
                          );
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowRight")
                            setTranscriptProgress((p) => Math.min(100, p + 5));
                          if (e.key === "ArrowLeft")
                            setTranscriptProgress((p) => Math.max(0, p - 5));
                        }}
                        className="group relative h-1 flex-1 cursor-pointer rounded-full bg-[#e5e5e5] outline-none"
                      >
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full bg-[#22d3ee]"
                          animate={{ width: `${transcriptProgress}%` }}
                          transition={{ duration: 0.2, ease: "linear" }}
                        />
                        <motion.span
                          className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#0891b2] opacity-0 shadow-sm ring-2 ring-white transition-opacity group-hover:opacity-100"
                          animate={{ left: `calc(${transcriptProgress}% - 5px)` }}
                          transition={{ duration: 0.2, ease: "linear" }}
                        />
                      </div>
                      <span className="shrink-0 font-mono text-[10.5px] tabular-nums text-[#a3a3a3]">
                        0:02 / 0:34
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {[
                        { initials: "A", tone: "blue" as const, label: "Ashley · Buyer" },
                        { initials: "S", tone: "emerald" as const, label: "Sam · AE" },
                      ].map((s) => (
                        <span
                          key={s.label}
                          title={s.label}
                          className="inline-flex items-center gap-1 rounded-full bg-white py-0.5 pl-0.5 pr-2 ring-1 ring-[#e5e5e5]"
                        >
                          <Avatar initials={s.initials} tone={s.tone} size="sm" />
                          <span className="text-[10.5px] font-medium text-[#525252]">
                            {s.label}
                          </span>
                        </span>
                      ))}
                    </div>
                    <span className="flex items-end gap-[2.5px]" aria-hidden>
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className={`w-[3px] rounded-full ${
                            transcriptPlaying ? "bg-[#0891b2]" : "bg-[#d4d4d4]"
                          }`}
                          animate={
                            transcriptPlaying
                              ? { height: ["4px", "11px", "4px"] }
                              : { height: "4px" }
                          }
                          transition={
                            transcriptPlaying
                              ? {
                                  duration: 0.9,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: i * 0.15,
                                }
                              : { duration: 0.2 }
                          }
                        />
                      ))}
                    </span>
                  </div>
                </div>
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
                {lineN >= transcript.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 flex items-center gap-2 rounded-lg bg-[#ecfeff]/60 px-2 py-1.5 ring-1 ring-[#a5f3fc]/50"
                  >
                    <AgentBadge>Agent brief ready</AgentBadge>
                    <span className="text-[11px] text-[#0e7490]">Buyer auth confirmed</span>
                  </motion.div>
                )}
              </div>
            </div>
          </WindowChrome>
        </motion.div>
      </div>

      {/* Mobile / tablet radar — below collage when absolute float is hidden */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease }}
        className="mt-4 lg:hidden"
      >
        <div className="surface-window mx-auto max-w-sm p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[12px] font-medium text-[#737373]">Signal radar</span>
            <AgentBadge>Agent scan</AgentBadge>
          </div>
          <PipelineRadar />
        </div>
      </motion.div>
    </div>
  );
}
