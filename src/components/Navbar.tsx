"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/ui";

export function PromoBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative z-[60] bg-[#0a0a0a] text-[#fafafa]">
      <div className="container-page flex h-10 items-center justify-center gap-2 text-[13px]">
        <a href="#platform" className="inline-flex items-center gap-1.5 hover:opacity-90">
          Orchestrate revenue agents with the new Workflows
          <span aria-hidden>→</span>
        </a>
        <button
          type="button"
          aria-label="Dismiss banner"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/60 hover:bg-white/10 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled
          ? "border-[#e5e5e5] bg-[#fafafa]/85 backdrop-blur-xl"
          : "border-transparent bg-[#fafafa]/70 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-[#0a0a0a]">
            <LogoMark />
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {["Platform", "Resources", "Customers", "Pricing"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="btn-ghost">
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <a href="#" className="btn-ghost">
            Sign in
          </a>
          <a href="#" className="btn-primary">
            Start for free
          </a>
        </div>
        <button
          type="button"
          className="btn-ghost md:hidden"
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>
      {mobileOpen ? (
        <div className="border-t border-[#e5e5e5] bg-[#fafafa] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {["Platform", "Resources", "Customers", "Pricing", "Sign in"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#525252] hover:bg-[#f5f5f5]"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#" className="btn-primary mt-2 w-full">
              Start for free
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
