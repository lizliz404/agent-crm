"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { LogoMark } from "@/components/ui";

const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Customers", href: "#customers" },
  { label: "Pricing", href: "#pricing" },
] as const;

const EXPANDED_EXTRA = [{ label: "Resources", href: "#resources" }] as const;

const spring = { type: "spring" as const, stiffness: 320, damping: 32, mass: 0.85 };
const softFade = { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const };

type NavState = "full" | "transitioning" | "compact";

function resolveNavState(
  heroIntersecting: boolean,
  scrollY: number,
): NavState {
  if (!heroIntersecting) return "compact";
  if (scrollY === 0) return "full";
  return "transitioning";
}

export function Navbar() {
  const [navState, setNavState] = useState<NavState>("full");
  const [mobileOpen, setMobileOpen] = useState(false);
  const heroIntersectingRef = useRef(true);
  const reduceMotion = useReducedMotion();
  const compact = navState === "compact";

  useEffect(() => {
    const hero = document.getElementById("hero");

    const sync = () => {
      const next = resolveNavState(
        heroIntersectingRef.current,
        window.scrollY,
      );
      setNavState((prev) => (prev === next ? prev : next));
    };

    if (!hero) {
      const onScroll = () => {
        const scrollY = window.scrollY;
        const heroOut = scrollY > window.innerHeight * 0.85;
        heroIntersectingRef.current = !heroOut;
        sync();
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        heroIntersectingRef.current = entry.isIntersecting;
        sync();
      },
      { threshold: 0, rootMargin: "0px" },
    );
    io.observe(hero);
    window.addEventListener("scroll", sync, { passive: true });
    sync();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", sync);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const transition = reduceMotion ? { duration: 0 } : spring;
  const itemTransition = reduceMotion ? { duration: 0 } : softFade;
  const itemMorph =
    navState === "transitioning" && !reduceMotion
      ? { opacity: 0.88, scale: 0.98 }
      : { opacity: 1, scale: 1 };

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex ${
        navState === "full" ? "" : "justify-center px-3 pt-3 sm:pt-4"
      }`}
    >
      <LayoutGroup id="nav-island">
        <motion.div
          layout
          transition={transition}
          className={`pointer-events-auto relative flex flex-col ${
            navState === "full"
              ? "w-full"
              : "w-full max-w-[min(100%,720px)] items-center"
          }`}
        >
          <motion.nav
            layout
            layoutRoot
            aria-label="Primary"
            transition={transition}
            animate={{
              borderRadius: navState === "full" ? 0 : 9999,
            }}
            className={`nav-island flex items-center ${
              navState === "full"
                ? "h-14 w-full gap-2 border-x-0 border-b border-t-0 border-black/[0.06] bg-white px-4 shadow-none sm:gap-3 sm:px-6 lg:px-8"
                : navState === "compact"
                  ? "h-11 gap-1 border border-black/[0.06] bg-white/92 px-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:gap-1.5 sm:px-3"
                  : "h-12 gap-1.5 border border-black/[0.06] bg-white/96 px-3 shadow-[0_6px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:gap-2 sm:px-4"
            } ${mobileOpen ? "shadow-[0_12px_40px_rgba(0,0,0,0.12)]" : ""}`}
          >
            <motion.a
              layout
              href="#"
              className="shrink-0 text-[#0a0a0a]"
              transition={transition}
              animate={itemMorph}
              onClick={() => setMobileOpen(false)}
            >
              <LogoMark
                className={
                  compact
                    ? "[&>span]:text-[13px] sm:[&>span]:text-[14px] [&>svg]:h-[18px] [&>svg]:w-[18px]"
                    : ""
                }
              />
            </motion.a>

            {/* Desktop links */}
            <motion.div
              layout
              className="hidden min-w-0 items-center md:flex"
              transition={transition}
              animate={itemMorph}
            >
              <div
                className={`flex items-center ${compact ? "gap-0.5" : "gap-0.5 sm:gap-1"}`}
              >
                {NAV_LINKS.map((item) => (
                  <motion.a
                    key={item.href}
                    layout
                    href={item.href}
                    transition={transition}
                    animate={itemMorph}
                    className={`rounded-full font-medium text-[#525252] transition-colors hover:bg-black/[0.04] hover:text-[#0a0a0a] ${
                      compact
                        ? "px-2.5 py-1.5 text-[13px]"
                        : "px-3 py-1.5 text-sm"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}

                <AnimatePresence initial={false} mode="popLayout">
                  {!compact
                    ? EXPANDED_EXTRA.map((item) => (
                        <motion.a
                          key={item.href}
                          href={item.href}
                          initial={
                            reduceMotion
                              ? false
                              : { opacity: 0, width: 0, scale: 0.96 }
                          }
                          animate={{ opacity: 1, width: "auto", scale: 1 }}
                          exit={
                            reduceMotion
                              ? { opacity: 0 }
                              : { opacity: 0, width: 0, scale: 0.96 }
                          }
                          transition={itemTransition}
                          className="overflow-hidden whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-[#525252] transition-colors hover:bg-black/[0.04] hover:text-[#0a0a0a]"
                        >
                          {item.label}
                        </motion.a>
                      ))
                    : null}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              layout
              className="ml-auto flex items-center gap-1 sm:gap-1.5"
              transition={transition}
              animate={itemMorph}
            >
              <AnimatePresence initial={false} mode="popLayout">
                {!compact ? (
                  <motion.a
                    key="sign-in"
                    href="#"
                    initial={
                      reduceMotion ? false : { opacity: 0, width: 0, scale: 0.96 }
                    }
                    animate={{ opacity: 1, width: "auto", scale: 1 }}
                    exit={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, width: 0, scale: 0.96 }
                    }
                    transition={itemTransition}
                    className="hidden overflow-hidden whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-[#525252] transition-colors hover:bg-black/[0.04] hover:text-[#0a0a0a] md:inline-flex"
                  >
                    Sign in
                  </motion.a>
                ) : null}
              </AnimatePresence>

              <motion.a
                layout
                href="#"
                transition={transition}
                className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] font-medium text-[#fafafa] shadow-[0_1px_2px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#262626] ${
                  compact
                    ? "h-8 px-3 text-[12.5px] sm:px-3.5 sm:text-[13px]"
                    : "h-9 px-3.5 text-sm sm:px-4"
                }`}
              >
                Start for free
              </motion.a>

              <motion.button
                layout
                type="button"
                transition={transition}
                className={`inline-flex items-center justify-center rounded-full font-medium text-[#525252] transition-colors hover:bg-black/[0.04] hover:text-[#0a0a0a] md:hidden ${
                  compact ? "h-8 w-8 text-xs" : "h-9 px-2.5 text-sm"
                }`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 8h14M5 12h14M5 16h14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </motion.button>
            </motion.div>
          </motion.nav>

          {/* Mobile dropdown panel — floats under the island */}
          <AnimatePresence>
            {mobileOpen ? (
              <motion.div
                key="mobile-panel"
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: -8, scale: 0.98 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -6, scale: 0.98 }
                }
                transition={reduceMotion ? { duration: 0 } : spring}
                className="pointer-events-auto absolute left-0 right-0 top-[calc(100%+8px)] z-50 origin-top md:hidden"
              >
                <div className="mx-auto w-full max-w-[min(100%,360px)] overflow-hidden rounded-2xl border border-black/[0.06] bg-white/95 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl">
                  <div className="flex flex-col gap-0.5">
                    {[...NAV_LINKS, ...EXPANDED_EXTRA].map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#525252] transition-colors hover:bg-black/[0.04] hover:text-[#0a0a0a]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <a
                      href="#"
                      className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#525252] transition-colors hover:bg-black/[0.04] hover:text-[#0a0a0a]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Sign in
                    </a>
                    <a
                      href="#"
                      className="mt-1 inline-flex items-center justify-center rounded-full bg-[#0a0a0a] px-4 py-2.5 text-sm font-medium text-[#fafafa] hover:bg-[#262626]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Start for free
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {/* Tap-away scrim for mobile menu */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.button
            key="scrim"
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.15 }}
            className="pointer-events-auto fixed inset-0 z-40 cursor-default bg-black/0 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </header>
  );
}
