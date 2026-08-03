"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectionInView } from "@/lib/animations";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);

  const valid = EMAIL_RE.test(email.trim());
  const empty = email.trim().length === 0;
  const showError =
    (submitted && empty) || (touched && !empty && !valid);
  const errorMessage = empty
    ? "Enter your work email to subscribe."
    : "That doesn't look like an email. Check the address and try again.";

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setDone(false), 4000);
    return () => clearTimeout(t);
  }, [done]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    setSubmitted(true);
    if (!valid) return;
    setDone(true);
    setEmail("");
    setTouched(false);
    setSubmitted(false);
  };

  return (
    <section id="pricing" data-chapter="Pricing" className="border-t border-[#ececec]">
      {/* CTA block */}
      <div className="py-24 md:py-32">
        <div className="container-page">
          <motion.div {...sectionInView} className="mx-auto max-w-[760px] text-center">
            <h2 className="text-hero mb-8">Agentic revenue runs on Agent CRM.</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="#" className="btn-primary">
                Talk to sales
              </a>
              <a href="#" className="btn-secondary">
                Start for free
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter sub-section */}
      <div className="border-t border-[#ececec] bg-[#fafafa]">
        <div className="container-page py-16 md:py-20">
          <motion.div
            {...sectionInView}
            className="mx-auto flex max-w-xl flex-col items-center text-center"
          >
            <h3 className="text-subsection mb-2">Stay ahead of GTM.</h3>
            <p className="mb-6 text-[14px] font-medium text-[#525252]">
              Product updates in your inbox.
            </p>

            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-2 rounded-[10px] border border-[#d4d4d4] bg-white px-4 py-3"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className="text-emerald-600"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[14px] font-medium text-[#0a0a0a]">
                    You're in. Watch your inbox.
                  </span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  onSubmit={onSubmit}
                  className="flex w-full flex-col gap-2 sm:flex-row"
                  noValidate
                >
                  <div className="flex-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setTouched(true)}
                      placeholder="Your email address"
                      aria-invalid={showError}
                      aria-describedby={showError ? "newsletter-email-error" : undefined}
                      className={`h-11 w-full rounded-[10px] border bg-white px-3.5 text-[14px] outline-none ring-0 transition focus:border-[#0a0a0a] ${
                        showError
                          ? "border-red-400 focus:border-red-500"
                          : "border-[#d4d4d4]"
                      }`}
                    />
                    {showError && (
                      <p
                        id="newsletter-email-error"
                        role="alert"
                        className="mt-1.5 text-left text-[12px] text-red-500"
                      >
                        {errorMessage}
                      </p>
                    )}
                  </div>
                  <button type="submit" className="btn-primary h-11 px-5">
                    Subscribe
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
