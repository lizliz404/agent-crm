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

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2.5c.4 0 .78.16 1.06.44l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12 0l-7-7a1.5 1.5 0 0 1 0-2.12l7-7c.28-.28.66-.44 1.06-.44Z"
          fill="currentColor"
        />
        <path
          d="M12 7.2 8.2 11 12 14.8 15.8 11 12 7.2Z"
          fill={className.includes("text-white") ? "#0a0a0a" : "#fafafa"}
        />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">Agent CRM</span>
    </span>
  );
}
