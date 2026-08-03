"use client";

import { useEffect } from "react";
import { initPremiumOnePager } from "@/lib/premium-one-pager";

/**
 * Landing-only craft chrome (附 A). Do not mount on dense CRM/app shells.
 * Reveal stays on framer-motion sectionInView — enableReveal false to avoid
 * double opacity animation. Progress / chapters / noise still apply.
 */
export function PremiumOnePager() {
  useEffect(() => {
    return initPremiumOnePager({
      sectionSelector: "[data-chapter]",
      enableReveal: false,
      enableChapters: true,
      enableProgress: true,
      enableNoise: true,
    });
  }, []);

  return null;
}
