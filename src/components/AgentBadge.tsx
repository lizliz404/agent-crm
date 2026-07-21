import type { ReactNode } from "react";

/**
 * Agent authorship chip — uses `--color-agent` cyan.
 * Means "an agent authored this." Never use for status or buttons.
 */
export function AgentBadge({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span className={`agent-chip ${dark ? "agent-chip-dark" : ""} ${className}`.trim()}>
      <span className="agent-dot" aria-hidden />
      {children}
    </span>
  );
}
