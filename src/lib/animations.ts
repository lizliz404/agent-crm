import type { Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInTransition = {
  duration: 0.55,
  ease: easeOut,
};

export const staggerContainer: Variants = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const sectionInView = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6, ease: easeOut },
};

export const softHover = {
  whileHover: { y: -2 },
  transition: { duration: 0.2 },
};
