"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ButtonPrimary, ButtonSecondary } from "./ui";

const modules = [
  "Brand System",
  "Content Pillars",
  "Layout Library",
  "AI Workflow",
  "CTA System",
  "Quality Control",
  "Social Formats",
  "Newsletter",
];

const outputs = ["X", "LinkedIn", "Instagram", "Newsletter", "YouTube"];

function FanLines({ count, flip = false }: { count: number; flip?: boolean }) {
  const points = Array.from({ length: count }, (_, i) => ((i + 0.5) / count) * 100);
  return (
    <svg
      className="hidden h-full w-full md:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {points.map((y) => (
        <path
          key={y}
          d={
            flip
              ? `M 0 50 C 55 50, 45 ${y}, 100 ${y}`
              : `M 0 ${y} C 55 ${y}, 45 50, 100 50`
          }
          fill="none"
          stroke="rgba(124,134,255,0.35)"
          strokeWidth="0.6"
          vectorEffect="non-scaling-stroke"
          className="flow-line"
        />
      ))}
    </svg>
  );
}

function CountUp({ to, delay = 0 }: { to: number; delay?: number }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }
    let raf = 0;
    const duration = 1400;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min((now - start - delay * 1000) / duration, 1);
      if (t >= 0) {
        const eased = 1 - Math.pow(1 - t, 4);
        setVal(Math.round(eased * to));
      }
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, delay]);

  return <>{val}</>;
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 md:pt-40 md:pb-28">
      {/* backdrop */}
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-130 w-[52rem] max-w-full -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,134,255,0.16), rgba(167,139,250,0.06) 55%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI-Powered Creative Systems
          </motion.p>

          <motion.h1
            className="mt-6 text-[2.75rem] leading-[1.05] font-medium tracking-tight text-balance sm:text-7xl md:text-8xl"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Build Your Own
            <br />
            <span className="text-shimmer bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent">
              AI Visual Department.
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-mist sm:text-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            We turn your brand, content and design rules into a visual production
            system you can run yourself.
          </motion.p>


          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <ButtonPrimary href="#pricing" className="w-full sm:w-auto">
              Build My System
            </ButtonPrimary>
            <ButtonSecondary href="#included" className="w-full sm:w-auto">
              See What’s Included
            </ButtonSecondary>
          </motion.div>

          <motion.div
            className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {[
              "Runs locally on your computer",
              "The files are yours, forever",
              "Use it anywhere in the world",
            ].map((b) => (
              <span
                key={b}
                className="rounded-full border border-accent/30 bg-glow/40 px-4 py-1.5 font-mono text-[0.6875rem] font-semibold tracking-[0.1em] text-cream uppercase"
              >
                {b}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mx-auto mt-10 flex max-w-2xl items-center justify-center divide-x divide-line"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            {[
              [<span key="n1"><CountUp to={20} delay={0.75} />+</span>, "motion formats"],
              [
                <span key="n2">
                  <CountUp to={3} delay={0.9} /> to <CountUp to={7} delay={0.9} />
                </span>,
                "days to your full system",
              ],
              [<CountUp key="n3" to={1} delay={1.05} />, "system, yours forever"],
            ].map(([n, label], i) => (
              <div key={i} className="px-5 text-center sm:px-8">
                <p
                  className="text-2xl font-medium text-cream tabular-nums sm:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {n}
                </p>
                <p className="mt-1 font-mono text-[0.625rem] font-semibold tracking-[0.16em] text-dim uppercase sm:text-[0.625rem]">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* system map */}
        <motion.div
          className="relative mt-16 rounded-2xl border border-line bg-ink-2/80 p-5 backdrop-blur-sm sm:p-8 md:mt-24"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-[0.6875rem] font-semibold tracking-[0.2em] text-dim uppercase">
              System Architecture / Overview
            </span>
            <span className="hidden items-center gap-1.5 font-mono text-[0.6875rem] font-semibold tracking-[0.2em] text-dim uppercase sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Live
            </span>
          </div>

          <div className="grid items-center gap-6 md:grid-cols-[1fr_5rem_auto_5rem_1fr] md:gap-0">
            {/* input modules */}
            <div className="grid grid-cols-2 gap-2.5">
              {modules.map((m, i) => (
                <motion.div
                  key={m}
                  className="rounded-lg border border-line bg-panel px-3 py-2.5 text-center font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-mist uppercase"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.06, duration: 0.5 }}
                >
                  {m}
                </motion.div>
              ))}
            </div>

            <div className="hidden h-40 md:block">
              <FanLines count={4} />
            </div>
            <div className="flex justify-center md:hidden" aria-hidden="true">
              <ArrowDown size={16} className="text-accent/70" />
            </div>

            {/* core */}
            <div className="flex justify-center">
              <div className="node-pulse rounded-xl border border-accent/50 bg-glow px-8 py-6 text-center">
                <p className="font-mono text-[0.6875rem] font-semibold tracking-[0.22em] text-accent uppercase">
                  Core
                </p>
                <p
                  className="mt-1 text-lg font-semibold tracking-tight text-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Your Content
                </p>
              </div>
            </div>

            <div className="hidden h-40 md:block">
              <FanLines count={5} flip />
            </div>
            <div className="flex justify-center md:hidden" aria-hidden="true">
              <ArrowDown size={16} className="text-accent/70" />
            </div>

            {/* outputs */}
            <div className="flex flex-wrap justify-center gap-2.5 md:flex-col md:justify-start">
              {outputs.map((o, i) => (
                <motion.div
                  key={o}
                  className="rounded-lg border border-accent/25 bg-panel px-4 py-2.5 text-center font-mono text-[0.6875rem] font-semibold tracking-[0.16em] text-cream uppercase"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.08, duration: 0.5 }}
                >
                  {o}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-line pt-5 text-center sm:flex-row sm:text-left">
            <p className="font-mono text-[0.6875rem] font-semibold tracking-[0.16em] text-dim uppercase">
              Inputs: your existing brand + content
            </p>
            <p className="font-mono text-[0.6875rem] font-semibold tracking-[0.16em] text-dim uppercase">
              Outputs: platform-ready visuals
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
