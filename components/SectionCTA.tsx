"use client";

import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";
import { Reveal } from "./ui";

export default function SectionCTA({
  message,
  button,
  sub,
}: {
  message: ReactNode;
  button: string;
  sub?: string;
}) {
  return (
    <Reveal delay={0.1}>
      <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-accent/30 bg-glow/40 px-7 py-7 sm:flex-row sm:px-9">
        <div className="text-center sm:text-left">
          <p
            className="text-lg font-medium text-cream sm:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {message}
          </p>
          {sub && <p className="mt-1 text-sm text-mist">{sub}</p>}
        </div>
        <a
          href="#pricing"
          className="btn-glow inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-cream px-7 text-sm font-semibold text-ink transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
        >
          {button}
          <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  );
}
