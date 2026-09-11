"use client";

import { ArrowRight } from "lucide-react";
import { Section, Reveal, Heading, Lead, Eyebrow, MonoTag } from "./ui";

const steps = [
  { n: "01", title: "Drop in the content" },
  { n: "02", title: "Choose the content type" },
  { n: "03", title: "Select the visual system" },
  { n: "04", title: "Generate with the AI workflow" },
  { n: "05", title: "Review and refine" },
  { n: "06", title: "Publish" },
];

const before = ["Idea", "Brief", "Design", "Revision", "Export", "Repeat"];
const after = ["Idea", "System", "Generate", "Refine", "Publish"];

function Chain({ items, accent }: { items: string[]; accent?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2.5">
      {items.map((item, i) => (
        <div key={item} className="flex items-center gap-2">
          <span
            className={`rounded-md border px-3 py-1.5 font-mono text-[0.6875rem] font-semibold tracking-[0.14em] uppercase ${
              accent
                ? "border-accent/40 bg-glow text-cream"
                : "border-line bg-panel text-mist"
            }`}
          >
            {item}
          </span>
          {i < items.length - 1 && (
            <ArrowRight size={12} className="shrink-0 text-dim" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function Workflow() {
  return (
    <Section id="how">
      <Reveal>
        <Eyebrow>Workflow</Eyebrow>
        <Heading>From idea to visual in minutes.</Heading>
        <Lead>
          The goal isn’t to automate creativity away. It’s to remove repetitive
          production work so you can spend more time thinking.
        </Lead>
      </Reveal>

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.06}>
            <div className="flex h-full items-start gap-4 rounded-xl border border-line bg-panel/60 p-6 transition-colors hover:border-accent/40">
              <span
                className="font-mono text-xl font-medium text-accent/80"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.n}
              </span>
              <p className="pt-1 text-sm font-medium text-cream">{s.title}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="h-full rounded-xl border border-line bg-ink-2 p-7">
            <MonoTag>Before: manual production</MonoTag>
            <div className="mt-5">
              <Chain items={before} />
            </div>
            <p className="mt-5 text-xs leading-relaxed text-dim">
              Every visual restarts the whole cycle.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="h-full rounded-xl border border-accent/30 bg-ink-2 p-7">
            <MonoTag className="text-accent">After: system production</MonoTag>
            <div className="mt-5">
              <Chain items={after} accent />
            </div>
            <p className="mt-5 text-xs leading-relaxed text-mist">
              What used to take hours or days of design work can become a
              repeatable workflow you can execute in a fraction of the time.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
