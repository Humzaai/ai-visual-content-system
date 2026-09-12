"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = "",
  hairline = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  hairline?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${hairline ? "hairline" : ""} relative px-5 py-20 sm:px-8 md:py-28 lg:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-5">{children}</p>;
}

export function Heading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={`font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl ${className}`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl ${className}`}>
      {children}
    </p>
  );
}

export function ButtonPrimary({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn-glow inline-flex min-h-12 items-center justify-center rounded-full bg-cream px-7 text-sm font-semibold text-ink transition-all duration-300 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      {children}
    </a>
  );
}

export function ButtonSecondary({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border border-line-2 px-7 text-sm font-medium text-cream transition-all duration-300 hover:scale-[1.02] hover:border-accent/60 hover:bg-glow hover:shadow-[0_0_28px_rgba(124,134,255,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      {children}
    </a>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`elev rounded-xl border border-line bg-panel/70 p-6 transition-colors duration-300 hover:border-line-2 ${className}`}
    >
      {children}
    </div>
  );
}

export function MonoTag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`font-mono text-[0.6875rem] font-semibold tracking-[0.18em] text-dim uppercase ${className}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </span>
  );
}
