"use client";

import { ArrowRight } from "lucide-react";
import { Section, Reveal, Heading, Lead, Eyebrow } from "./ui";

const stages = [
  { title: "Build", copy: "Audit, architecture, then the full system build around your brand." },
  { title: "Train", copy: "1:1 training and documentation until you run it yourself." },
  { title: "Launch", copy: "You produce visuals on your own, with 30 days of support." },
  { title: "Expand", copy: "New modules plug into the same engine as you grow." },
  { title: "Evolve", copy: "The partnership keeps the system improving with you." },
];

export default function Journey() {
  return (
    <Section>
      <Reveal>
        <div className="text-center">
          <Eyebrow>The Transformation</Eyebrow>
          <Heading>
            One engagement.
            <br />
            <span className="text-mist">A compounding creative asset.</span>
          </Heading>
          <Lead className="mx-auto">
            You’re not buying a package. You’re starting an operating system for
            your visual content.
          </Lead>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-14 grid gap-3 md:grid-cols-5">
          {stages.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="h-full rounded-xl border border-line bg-panel/60 p-6 text-center transition-colors hover:border-accent/40">
                <span className="font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-2 text-xl font-semibold tracking-tight text-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.copy}</p>
              </div>
              {i < stages.length - 1 && (
                <span
                  className="absolute top-1/2 -right-2.5 z-10 hidden -translate-y-1/2 text-accent/70 md:block"
                  aria-hidden="true"
                >
                  <ArrowRight size={14} />
                </span>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
