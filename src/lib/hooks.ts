"use client";

import { useEffect, useState } from "react";

export function useCycle(max: number, ms: number, pause = false) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (pause || max <= 1) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % max), ms);
    return () => window.clearInterval(id);
  }, [max, ms, pause]);
  return i;
}

export function useReveal(count: number, stepMs: number, loopMs = 9000) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let step = 0;
    let timer: number;
    const tick = () => {
      step += 1;
      if (step > count) {
        timer = window.setTimeout(() => {
          step = 0;
          setN(0);
          timer = window.setTimeout(tick, stepMs);
        }, loopMs - count * stepMs);
        return;
      }
      setN(step);
      timer = window.setTimeout(tick, stepMs);
    };
    timer = window.setTimeout(tick, 400);
    return () => window.clearTimeout(timer);
  }, [count, stepMs, loopMs]);
  return n;
}
