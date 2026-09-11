"use client";

import { Reveal, ButtonPrimary, ButtonSecondary } from "./ui";

export default function FinalCTA() {
  return (
    <section id="contact" className="hairline relative overflow-hidden px-5 py-24 sm:px-8 md:py-36">
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-[48rem] max-w-full -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,134,255,0.2), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2
            className="text-4xl font-medium tracking-tight text-balance sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stop rebuilding the same visual every week.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            You already have the ideas. You already have the brand. You already
            know what you want to say.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-cream sm:text-lg">
            We’ll build the system that turns those ideas into visuals faster.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonPrimary href="#apply" className="w-full sm:w-auto">
              Build My Visual System
            </ButtonPrimary>
            <ButtonSecondary href="#apply" className="w-full sm:w-auto">
              Talk About My Setup
            </ButtonSecondary>
          </div>
          <p className="mt-6 text-base text-dim">
            Tell us what you’ve already built. We’ll show you where the system
            can take it.
          </p>
          <p className="mt-3 text-base text-mist">
            A visual production system that works whenever you do.
          </p>
          <p className="mt-10 font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase">
            Build it once. Own it forever. Keep evolving.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
