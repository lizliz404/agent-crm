"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ClockSlot = {
  time: string;
  city: string;
};

const TZ_CITY: Record<string, string> = {
  "America/New_York": "New York",
  "America/Chicago": "Austin",
  "America/Denver": "Denver",
  "America/Los_Angeles": "San Francisco",
  "America/Sao_Paulo": "São Paulo",
  "Europe/London": "London",
  "Europe/Paris": "Paris",
  "Europe/Berlin": "Berlin",
  "Asia/Shanghai": "Shanghai",
  "Asia/Hong_Kong": "Hong Kong",
  "Asia/Singapore": "Singapore",
  "Asia/Tokyo": "Tokyo",
  "Asia/Seoul": "Seoul",
  "Australia/Sydney": "Sydney",
};

const AGENT_ACTIVITIES = [
  "Agent drafting email",
  "Agent enriching lead",
  "Agent forecasting",
  "Agent briefing AE",
  "Agent watching renewal",
] as const;

function cityFromTz(tz: string): string {
  if (TZ_CITY[tz]) return TZ_CITY[tz];
  const part = tz.split("/").pop() ?? tz;
  return part.replace(/_/g, " ");
}

/** Pair visitor locale with a distant agent-relevant market. */
function pickOther(localTz: string): { tz: string; city: string } {
  if (localTz.startsWith("Asia/") || localTz.startsWith("Australia/")) {
    return { tz: "America/Chicago", city: "Austin" };
  }
  return { tz: "Asia/Shanghai", city: "Shenzhen" };
}

function formatTime(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  }).format(date);
}

function readClocks(now: Date): { local: ClockSlot; other: ClockSlot; isNight: boolean } {
  const localTz =
    Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Chicago";
  const other = pickOther(localTz);
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      hour12: false,
      timeZone: localTz,
    }).format(now),
  );
  return {
    local: { time: formatTime(now, localTz), city: cityFromTz(localTz) },
    other: { time: formatTime(now, other.tz), city: other.city },
    isNight: hour >= 20 || hour < 6,
  };
}

/**
 * §5.7 Never Sleeps strip — live clocks + rotating agent activity states.
 * Proves "agents work around the clock" without a static tagline.
 */
export function NeverSleeps({
  onNightChange,
}: {
  onNightChange?: (isNight: boolean) => void;
}) {
  const [clocks, setClocks] = useState<{
    local: ClockSlot;
    other: ClockSlot;
  } | null>(null);
  const [activityIdx, setActivityIdx] = useState(0);

  useEffect(() => {
    const tick = () => {
      const next = readClocks(new Date());
      setClocks({ local: next.local, other: next.other });
      onNightChange?.(next.isNight);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [onNightChange]);

  useEffect(() => {
    const id = window.setInterval(
      () => setActivityIdx((v) => (v + 1) % AGENT_ACTIVITIES.length),
      3200,
    );
    return () => window.clearInterval(id);
  }, []);

  const local = clocks?.local ?? { time: "--:--", city: "…" };
  const other = clocks?.other ?? { time: "--:--", city: "…" };
  const activity = AGENT_ACTIVITIES[activityIdx];

  return (
    <div
      className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-[#e5e5e5] bg-white/75 px-3 py-1.5 text-[12.5px] font-medium text-[#525252] shadow-sm backdrop-blur"
      role="status"
      aria-live="polite"
      aria-label={`${activity}. ${local.time} in ${local.city}. ${other.time} in ${other.city}.`}
    >
      <span className="agent-dot shrink-0" aria-hidden />
      <span className="inline-flex min-w-0 items-center gap-1.5">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={activity}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="text-[#0e7490]"
          >
            {activity}
          </motion.span>
        </AnimatePresence>
        <span
          className="hidden h-1 w-1 rounded-full bg-emerald-500 sm:inline-block"
          title="Live"
          aria-hidden
        />
      </span>
      <span className="hidden text-[#d4d4d4] sm:inline" aria-hidden>
        ·
      </span>
      <span className="min-w-0 truncate tabular-nums">
        <span>
          {local.time} in {local.city}
        </span>
        <span className="text-[#a3a3a3]"> · </span>
        <span>
          {other.time} in {other.city}
        </span>
      </span>
    </div>
  );
}
