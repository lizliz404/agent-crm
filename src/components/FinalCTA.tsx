"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { sectionInView } from "@/lib/animations";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <section className="border-t border-[#ececec]">
      <div className="container-page py-16 md:py-20">
        <motion.div
          {...sectionInView}
          className="mx-auto flex max-w-xl flex-col items-center text-center"
        >
          <p className="mb-3 text-[14px] font-medium text-[#525252]">
            Get product updates in your inbox
          </p>
          <form
            onSubmit={onSubmit}
            className="flex w-full flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-11 flex-1 rounded-[10px] border border-[#d4d4d4] bg-white px-3.5 text-[14px] outline-none ring-0 transition focus:border-[#0a0a0a]"
            />
            <button type="submit" className="btn-primary h-11 px-5">
              {done ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="border-t border-[#ececec] py-24 md:py-32">
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
    </section>
  );
}
