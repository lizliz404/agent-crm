"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface AskBarProps {
  open: boolean;
  onClose: () => void;
}

export function AskBar({ open, onClose }: AskBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    // Placeholder: wire to real search/agent endpoint
    console.log("Ask:", query);
    onClose();
    setQuery("");
  };

  return (
    <AnimatePresence>
      {open ? (
        <>
          {/* Backdrop */}
          <motion.div
            key="askbar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Centered input */}
          <motion.div
            key="askbar-panel"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[18vh] z-[70] flex justify-center px-4"
          >
            <form
              onSubmit={onSubmit}
              className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-black/[0.06] bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 px-4 py-3.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="shrink-0 text-[#737373]"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M20 20l-3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask something..."
                  className="h-8 flex-1 bg-transparent text-[15px] text-[#0a0a0a] placeholder-[#a3a3a3] outline-none"
                />
                <kbd className="hidden shrink-0 items-center gap-1 rounded-md border border-[#e5e5e5] bg-[#fafafa] px-2 py-1 text-[11px] font-medium text-[#737373] sm:inline-flex">
                  <span className="text-[13px]">⌘</span>K
                </kbd>
              </div>
              <div className="border-t border-[#f0f0f0] px-4 py-2.5">
                <p className="text-[12px] text-[#a3a3a3]">
                  Ask about deals, pipeline, or any customer.
                </p>
              </div>
            </form>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
