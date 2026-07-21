import type { ReactNode } from "react";

const toneMap = {
  blue: "bg-[#dbeafe] text-[#1d4ed8]",
  violet: "bg-[#ede9fe] text-[#6d28d9]",
  amber: "bg-[#fef3c7] text-[#b45309]",
  rose: "bg-[#ffe4e6] text-[#be123c]",
  emerald: "bg-[#d1fae5] text-[#047857]",
  slate: "bg-[#e5e5e5] text-[#404040]",
} as const;

export function Avatar({
  initials,
  tone = "slate",
  size = "md",
}: {
  initials: string;
  tone?: keyof typeof toneMap;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "sm" ? "h-6 w-6 text-[10px]" : size === "lg" ? "h-11 w-11 text-sm" : "h-8 w-8 text-xs";
  return (
    <div
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-semibold ${sizeClass} ${toneMap[tone]}`}
    >
      {initials}
    </div>
  );
}

export function WindowChrome({
  title,
  dark = false,
  trailing,
  children,
  className = "",
}: {
  title?: string;
  dark?: boolean;
  trailing?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${dark ? "surface-window-dark" : "surface-window"} ${className}`}>
      <div
        className={`flex items-center gap-3 border-b px-3.5 py-2.5 ${
          dark ? "border-white/10 bg-[#161616]" : "border-[#ececec] bg-[#f7f7f7]"
        }`}
      >
        <div className="traffic-lights" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        {title ? (
          <div
            className={`min-w-0 flex-1 truncate text-center text-[12.5px] font-medium ${
              dark ? "text-white/70" : "text-[#525252]"
            }`}
          >
            {title}
          </div>
        ) : (
          <div className="flex-1" />
        )}
        {trailing ? <div className="shrink-0">{trailing}</div> : <div className="w-[42px]" />}
      </div>
      {children}
    </div>
  );
}

/** Dock Mark — asymmetric docking connector (DESIGN V3 §4). Not a diamond. */
export function LogoMark({ className = "" }: { className?: string }) {
  const inverted = className.includes("text-white");
  const tile = inverted ? "#fafafa" : "#0a0a0a";
  const record = inverted ? "#0a0a0a" : "#fafafa";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect width="32" height="32" rx="7" fill={tile} />
        <path
          fill={record}
          d="M8.9 4.2 H19.8 Q24 4.2 24 8.4 V19.5 H20.2 V23.4 H8.9 Q4.8 23.4 4.8 19.3 V8.4 Q4.8 4.2 8.9 4.2 Z"
        />
        <path fill="#000000" opacity="0.18" d="M20.2 19.5 H24 V20.4 H20.2 Z" />
        <path fill="#000000" opacity="0.14" d="M20.2 19.5 V23.4 H21.1 V19.5 Z" />
        <rect x="20.15" y="19.45" width="4.9" height="4.9" rx="0.55" fill="#22d3ee" />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">Agent CRM</span>
    </span>
  );
}
