"use client";

import { accounts, people, riskAccounts } from "@/lib/data";
import { Avatar, WindowChrome } from "@/components/ui";

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
      <path
        d="M0,110 C40,100 60,90 90,78 C130,60 150,70 180,50 C220,28 250,40 320,18 L320,140 L0,140 Z"
        fill="url(#usFill)"
      />
      <path
        d="M0,110 C40,100 60,90 90,78 C130,60 150,70 180,50 C220,28 250,40 320,18"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2.2"
      />
      <path
        d="M0,120 C45,115 70,108 100,95 C140,78 165,88 200,70 C240,50 270,58 320,42"
        fill="none"
        stroke="#10b981"
        strokeWidth="2.2"
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
  return (
    <div className="flex h-[120px] items-end gap-3 px-1">
      {stacks.map((s, i) => (
        <div key={months[i]} className="flex flex-1 flex-col items-center gap-1.5">
          <div className="flex h-[96px] w-full flex-col justify-end overflow-hidden rounded-md">
            <div className="bg-[#fca5a5]" style={{ height: `${s[2]}%` }} />
            <div className="bg-[#fcd34d]" style={{ height: `${s[1]}%` }} />
            <div className="bg-[#60a5fa]" style={{ height: `${s[0]}%` }} />
          </div>
          <span className="text-[10px] text-[#a3a3a3]">{months[i]}</span>
        </div>
      ))}
    </div>
  );
}

export function PlatformMock({ tabId }: { tabId: string }) {
  if (tabId === "build-pipeline") {
    return (
      <WindowChrome title="Ask Agent CRM" className="h-full">
        <div className="p-4">
          <div className="mb-4 flex items-center gap-2 rounded-xl bg-[#fafafa] px-3 py-2.5 ring-1 ring-[#ececec]">
            <span className="text-[#a3a3a3]">⌕</span>
            <span className="text-[13px] text-[#737373]">Ask something…</span>
            <span className="ml-auto badge badge-neutral">⌘K</span>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[13px] font-medium text-[#0a0a0a]">
              10 accounts ready for outreach
            </div>
            <span className="badge badge-success">enriched</span>
          </div>
          <div className="space-y-2">
            {accounts.map((a) => (
              <div
                key={a.name}
                className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-[#fafafa]"
              >
                <Avatar initials={a.initials} tone={a.tone} />
                <div className="min-w-0 flex-1">
                  <div className="text-[13.5px] font-semibold">{a.name}</div>
                  <div className="truncate text-[12px] text-[#737373]">{a.signal}</div>
                </div>
                <button
                  type="button"
                  className="rounded-lg bg-[#0a0a0a] px-2.5 py-1 text-[11px] font-medium text-white"
                >
                  Draft
                </button>
              </div>
            ))}
          </div>
        </div>
      </WindowChrome>
    );
  }

  if (tabId === "convert-leads") {
    return (
      <WindowChrome title="Lead routing · Live">
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          {[
            { label: "New leads", value: "48", delta: "+12 today", tone: "text-emerald-600" },
            { label: "Enriched", value: "100%", delta: "Clay + clearbit", tone: "text-[#2563eb]" },
            { label: "Avg speed", value: "46s", delta: "to first touch", tone: "text-[#0a0a0a]" },
            { label: "Routed", value: "41", delta: "7 waiting", tone: "text-amber-600" },
          ].map((k) => (
            <div key={k.label} className="rounded-xl bg-[#fafafa] p-3 ring-1 ring-[#ececec]">
              <div className="text-[12px] text-[#737373]">{k.label}</div>
              <div className={`mt-1 text-[22px] font-semibold tracking-tight ${k.tone}`}>
                {k.value}
              </div>
              <div className="text-[11px] text-[#a3a3a3]">{k.delta}</div>
            </div>
          ))}
          <div className="sm:col-span-2 rounded-xl border border-dashed border-[#d4d4d4] p-3">
            <div className="mb-2 text-[12px] font-medium text-[#525252]">Routing rule</div>
            <div className="flex flex-wrap items-center gap-2 text-[12.5px]">
              <span className="rounded-md bg-white px-2 py-1 ring-1 ring-[#e5e5e5]">ICP = Enterprise</span>
              <span className="text-[#a3a3a3]">→</span>
              <span className="rounded-md bg-white px-2 py-1 ring-1 ring-[#e5e5e5]">Owner = AE Pod A</span>
              <span className="text-[#a3a3a3]">→</span>
              <span className="rounded-md bg-emerald-50 px-2 py-1 text-emerald-700 ring-1 ring-emerald-100">
                Sequence: Fast lane
              </span>
            </div>
          </div>
        </div>
      </WindowChrome>
    );
  }

  if (tabId === "run-sales") {
    return (
      <WindowChrome title="Deal room · Active stakeholders">
        <div className="space-y-2.5 p-4">
          {people.map((p) => (
            <div
              key={p.email}
              className="flex items-start gap-3 rounded-xl p-2.5 ring-1 ring-[#ececec] transition-colors hover:bg-[#fafafa]"
            >
              <Avatar initials={p.initials} tone={p.tone} size="lg" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[14px] font-semibold">{p.name}</span>
                  <span className="badge badge-neutral">{p.company}</span>
                  <span className="text-[11px] text-[#a3a3a3]">{p.ago}</span>
                </div>
                <div className="mt-0.5 text-[12.5px] text-[#525252]">{p.role}</div>
                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-[#737373]">
                  <span>{p.email}</span>
                  <span>+{p.score} signals</span>
                  <span>{p.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </WindowChrome>
    );
  }

  if (tabId === "forecast") {
    return (
      <WindowChrome title="Revenue Q&A">
        <div className="p-4">
          <div className="mb-4 rounded-xl bg-[#0a0a0a] p-3 text-white">
            <div className="text-[11px] uppercase tracking-wide text-white/50">You asked</div>
            <div className="mt-1 text-[14px] font-medium">
              Where are we soft on quota coverage this week?
            </div>
          </div>
          <div className="mb-3 grid grid-cols-3 gap-2">
            {[
              { l: "Commit", v: "$1.2M", c: "text-emerald-600" },
              { l: "Best case", v: "$1.8M", c: "text-[#2563eb]" },
              { l: "Gap", v: "$210k", c: "text-rose-600" },
            ].map((x) => (
              <div key={x.l} className="rounded-xl bg-[#fafafa] p-2.5 ring-1 ring-[#ececec]">
                <div className="text-[11px] text-[#737373]">{x.l}</div>
                <div className={`text-[18px] font-semibold tracking-tight ${x.c}`}>{x.v}</div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[
              "Legal is blocking 3 enterprise deals totaling $180k.",
              "AE coverage thin on EMEA mid-market this Friday.",
              "2 multi-thread gaps on deals > $50k with single champion.",
            ].map((line) => (
              <div
                key={line}
                className="flex gap-2 rounded-lg px-2 py-2 text-[12.5px] text-[#404040] ring-1 ring-[#f0f0f0]"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0a0a0a]" />
                {line}
              </div>
            ))}
          </div>
        </div>
      </WindowChrome>
    );
  }

  // retain
  return (
    <WindowChrome title="Retain · Book health">
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
          <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-[#a3a3a3]">
            2 tools used
          </div>
          <div className="mb-3 text-[13.5px] font-medium leading-snug text-[#0a0a0a]">
            Top accounts at risk CS should prioritize this week
          </div>
          <div className="space-y-2.5">
            {riskAccounts.map((r) => (
              <div key={r.name} className="rounded-xl bg-white p-3 ring-1 ring-[#ececec]">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}
