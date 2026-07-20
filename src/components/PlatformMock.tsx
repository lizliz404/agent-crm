"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { accounts, people, riskAccounts } from "@/lib/data";
import { Avatar, WindowChrome } from "@/components/ui";

const ease = [0.22, 1, 0.36, 1] as const;

function useIdleHighlight(len: number, ms = 2200) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (len <= 1) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % len), ms);
    return () => window.clearInterval(id);
  }, [len, ms]);
  return i;
}

function BookChart() {
  return (
    <svg viewBox="0 0 320 140" className="h-[120px] w-full" aria-hidden>
      <defs>
        <linearGradient id="usFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="emeaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[20, 50, 80, 110].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#f0f0f0" />
      ))}
      <motion.path
        d="M0,110 C40,100 60,90 90,78 C130,60 150,70 180,50 C220,28 250,40 320,18 L320,140 L0,140 Z"
        fill="url(#usFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.path
        d="M0,110 C40,100 60,90 90,78 C130,60 150,70 180,50 C220,28 250,40 320,18"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease }}
      />
      <motion.path
        d="M0,120 C45,115 70,108 100,95 C140,78 165,88 200,70 C240,50 270,58 320,42"
        fill="none"
        stroke="#10b981"
        strokeWidth="2.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.15, ease }}
      />
      <motion.circle
        r="3.5"
        fill="#3b82f6"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          offsetDistance: ["0%", "100%"],
        }}
        style={{ offsetPath: "path('M0,110 C40,100 60,90 90,78 C130,60 150,70 180,50 C220,28 250,40 320,18')" }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear", delay: 1.2 }}
      />
    </svg>
  );
}

function HealthBars() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May"];
  const stacks = [
    [70, 18, 12],
    [74, 16, 10],
    [68, 20, 12],
    [80, 12, 8],
    [76, 14, 10],
  ];
  const active = useIdleHighlight(stacks.length, 1800);

  return (
    <div className="flex h-[120px] items-end gap-3 px-1">
      {stacks.map((s, i) => (
        <div key={months[i]} className="flex flex-1 flex-col items-center gap-1.5">
          <div
            className={`flex h-[96px] w-full flex-col justify-end overflow-hidden rounded-md transition-shadow ${
              active === i ? "ring-2 ring-[#0a0a0a]/10" : ""
            }`}
          >
            <motion.div
              className="bg-[#fca5a5]"
              initial={{ height: 0 }}
              animate={{ height: `${s[2]}%` }}
              transition={{ duration: 0.55, delay: 0.05 * i, ease }}
            />
            <motion.div
              className="bg-[#fcd34d]"
              initial={{ height: 0 }}
              animate={{ height: `${s[1]}%` }}
              transition={{ duration: 0.55, delay: 0.05 * i + 0.05, ease }}
            />
            <motion.div
              className="bg-[#60a5fa]"
              initial={{ height: 0 }}
              animate={{ height: `${s[0]}%` }}
              transition={{ duration: 0.55, delay: 0.05 * i + 0.1, ease }}
            />
          </div>
          <span
            className={`text-[10px] ${active === i ? "font-medium text-[#0a0a0a]" : "text-[#a3a3a3]"}`}
          >
            {months[i]}
          </span>
        </div>
      ))}
    </div>
  );
}

function DraftButton({ name }: { name: string }) {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => {
        if (state !== "idle") return;
        setState("loading");
        window.setTimeout(() => setState("done"), 700);
        window.setTimeout(() => setState("idle"), 2200);
      }}
      className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors ${
        state === "done"
          ? "bg-emerald-600 text-white"
          : state === "loading"
            ? "bg-[#404040] text-white"
            : "bg-[#0a0a0a] text-white hover:bg-[#262626]"
      }`}
      aria-label={`Draft outreach for ${name}`}
    >
      {state === "loading" ? "Drafting…" : state === "done" ? "Queued" : "Draft"}
    </motion.button>
  );
}

export function PlatformMock({ tabId }: { tabId: string }) {
  const highlight = useIdleHighlight(accounts.length, 2400);
  const peopleHi = useIdleHighlight(people.length, 2600);
  const riskHi = useIdleHighlight(riskAccounts.length, 2800);
  const [query, setQuery] = useState("");

  if (tabId === "build-pipeline") {
    return (
      <WindowChrome title="Ask Agent CRM" className="h-full interactive-window">
        <div className="p-4">
          <label className="mb-4 flex items-center gap-2 rounded-xl bg-[#fafafa] px-3 py-2.5 ring-1 ring-[#ececec] transition focus-within:ring-[#d4d4d4]">
            <span className="text-[#a3a3a3]">⌕</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask something…"
              className="min-w-0 flex-1 bg-transparent text-[13px] text-[#0a0a0a] outline-none placeholder:text-[#737373]"
            />
            <span className="badge badge-neutral">⌘K</span>
          </label>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[13px] font-medium text-[#0a0a0a]">
              10 accounts ready for outreach
            </div>
            <span className="badge badge-success">
              <span className="live-dot bg-emerald-500" />
              enriched
            </span>
          </div>
          <div className="space-y-2">
            {accounts.map((a, i) => {
              const match =
                !query ||
                a.name.toLowerCase().includes(query.toLowerCase()) ||
                a.signal.toLowerCase().includes(query.toLowerCase());
              if (!match) return null;
              const on = highlight === i;
              return (
                <motion.div
                  key={a.name}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    backgroundColor: on ? "rgba(250,250,250,1)" : "rgba(255,255,255,0)",
                    scale: on ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease }}
                  whileHover={{ backgroundColor: "rgba(250,250,250,1)", scale: 1.01 }}
                  className="flex items-center gap-3 rounded-xl px-2 py-2 ring-1 ring-transparent"
                  style={{
                    boxShadow: on ? "inset 0 0 0 1px #ececec" : undefined,
                  }}
                >
                  <Avatar initials={a.initials} tone={a.tone} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[13.5px] font-semibold">{a.name}</div>
                    <div className="truncate text-[12px] text-[#737373]">{a.signal}</div>
                  </div>
                  <DraftButton name={a.name} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </WindowChrome>
    );
  }

  if (tabId === "convert-leads") {
    const kpis = [
      { label: "New leads", value: 48, display: "48", delta: "+12 today", tone: "text-emerald-600" },
      { label: "Enriched", value: 100, display: "100%", delta: "Clay + clearbit", tone: "text-[#2563eb]" },
      { label: "Avg speed", value: 46, display: "46s", delta: "to first touch", tone: "text-[#0a0a0a]" },
      { label: "Routed", value: 41, display: "41", delta: "7 waiting", tone: "text-amber-600" },
    ];
    return (
      <WindowChrome title="Lead routing · Live" className="interactive-window">
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, ease }}
              whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.06)" }}
              className="rounded-xl bg-[#fafafa] p-3 ring-1 ring-[#ececec]"
            >
              <div className="text-[12px] text-[#737373]">{k.label}</div>
              <motion.div
                className={`mt-1 text-[22px] font-semibold tracking-tight ${k.tone}`}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
              >
                {k.display}
              </motion.div>
              <div className="text-[11px] text-[#a3a3a3]">{k.delta}</div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="sm:col-span-2 rounded-xl border border-dashed border-[#d4d4d4] p-3"
          >
            <div className="mb-2 text-[12px] font-medium text-[#525252]">Routing rule</div>
            <div className="flex flex-wrap items-center gap-2 text-[12.5px]">
              {["ICP = Enterprise", "Owner = AE Pod A", "Sequence: Fast lane"].map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className={`rounded-md px-2 py-1 ring-1 ${
                    i === 2
                      ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                      : "bg-white ring-[#e5e5e5]"
                  }`}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#ececec]">
              <motion.div
                className="h-full rounded-full bg-emerald-500"
                initial={{ width: "0%" }}
                animate={{ width: ["15%", "78%", "42%", "90%", "60%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </WindowChrome>
    );
  }

  if (tabId === "run-sales") {
    return (
      <WindowChrome title="Deal room · Active stakeholders" className="interactive-window">
        <div className="space-y-2.5 p-4">
          {people.map((p, i) => {
            const on = peopleHi === i;
            return (
              <motion.div
                key={p.email}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: on ? 1.015 : 1,
                  boxShadow: on
                    ? "0 0 0 1px #e5e5e5, 0 8px 24px rgba(0,0,0,0.05)"
                    : "0 0 0 1px #ececec",
                }}
                transition={{ delay: i * 0.06, duration: 0.35, ease }}
                whileHover={{ scale: 1.015, backgroundColor: "rgba(250,250,250,1)" }}
                className="flex cursor-default items-start gap-3 rounded-xl bg-white p-2.5"
              >
                <Avatar initials={p.initials} tone={p.tone} size="lg" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[14px] font-semibold">{p.name}</span>
                    <span className="badge badge-neutral">{p.company}</span>
                    <span className="text-[11px] text-[#a3a3a3]">{p.ago}</span>
                    {on && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="badge badge-success"
                      >
                        live signal
                      </motion.span>
                    )}
                  </div>
                  <div className="mt-0.5 text-[12.5px] text-[#525252]">{p.role}</div>
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-[#737373]">
                    <span>{p.email}</span>
                    <span>+{p.score} signals</span>
                    <span>{p.location}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </WindowChrome>
    );
  }

  if (tabId === "forecast") {
    return (
      <WindowChrome title="Revenue Q&A" className="interactive-window">
        <div className="p-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 rounded-xl bg-[#0a0a0a] p-3 text-white"
          >
            <div className="text-[11px] uppercase tracking-wide text-white/50">You asked</div>
            <div className="mt-1 text-[14px] font-medium">
              Where are we soft on quota coverage this week?
            </div>
          </motion.div>
          <div className="mb-3 grid grid-cols-3 gap-2">
            {[
              { l: "Commit", v: "$1.2M", c: "text-emerald-600" },
              { l: "Best case", v: "$1.8M", c: "text-[#2563eb]" },
              { l: "Gap", v: "$210k", c: "text-rose-600" },
            ].map((x, i) => (
              <motion.div
                key={x.l}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -2 }}
                className="rounded-xl bg-[#fafafa] p-2.5 ring-1 ring-[#ececec]"
              >
                <div className="text-[11px] text-[#737373]">{x.l}</div>
                <div className={`text-[18px] font-semibold tracking-tight ${x.c}`}>{x.v}</div>
              </motion.div>
            ))}
          </div>
          <div className="space-y-2">
            {[
              "Legal is blocking 3 enterprise deals totaling $180k.",
              "AE coverage thin on EMEA mid-market this Friday.",
              "2 multi-thread gaps on deals > $50k with single champion.",
            ].map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.12, ease }}
                whileHover={{ x: 2, backgroundColor: "rgba(250,250,250,1)" }}
                className="flex gap-2 rounded-lg px-2 py-2 text-[12.5px] text-[#404040] ring-1 ring-[#f0f0f0]"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0a0a0a]" />
                {line}
              </motion.div>
            ))}
          </div>
        </div>
      </WindowChrome>
    );
  }

  // retain
  return (
    <WindowChrome title="Retain · Book health" className="interactive-window">
      <div className="grid gap-3 p-4 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="rounded-xl bg-white p-3 ring-1 ring-[#ececec]">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[13px] font-semibold">Book Size · ARR</div>
              <div className="flex items-center gap-2 text-[11px] text-[#737373]">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                  US
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                  EMEA
                </span>
              </div>
            </div>
            <BookChart />
          </div>
          <div className="rounded-xl bg-white p-3 ring-1 ring-[#ececec]">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[13px] font-semibold">Account Health</div>
              <div className="flex items-center gap-2 text-[11px] text-[#737373]">
                <span>Healthy</span>
                <span>Watch</span>
                <span>At risk</span>
              </div>
            </div>
            <HealthBars />
          </div>
        </div>

        <div className="rounded-xl bg-[#fafafa] p-3 ring-1 ring-[#ececec]">
          <div className="mb-1 flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-[#a3a3a3]">
            <span className="live-dot bg-amber-500" />2 tools used
          </div>
          <div className="mb-3 text-[13.5px] font-medium leading-snug text-[#0a0a0a]">
            Top accounts at risk CS should prioritize this week
          </div>
          <div className="space-y-2.5">
            <AnimatePresence mode="popLayout">
              {riskAccounts.map((r, i) => {
                const on = riskHi === i;
                return (
                  <motion.div
                    key={r.name}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: on ? 1.02 : 1,
                      boxShadow: on
                        ? "0 8px 24px rgba(0,0,0,0.06)"
                        : "0 0 0 1px #ececec",
                    }}
                    transition={{ delay: i * 0.08, duration: 0.35, ease }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl bg-white p-3"
                  >
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <div className="text-[13.5px] font-semibold">{r.name}</div>
                      <span
                        className={`badge ${
                          r.level === "High" ? "badge-danger" : "badge-warn"
                        }`}
                      >
                        {r.level}
                      </span>
                    </div>
                    <div className="mb-1.5 text-[12px] text-[#737373]">{r.arr}</div>
                    <div className="text-[12px] leading-snug text-[#404040]">
                      <span className="font-medium">Risk:</span> {r.signals}
                    </div>
                    <div className="mt-1 text-[12px] leading-snug text-[#525252]">
                      <span className="font-medium">Action:</span> {r.action}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}
