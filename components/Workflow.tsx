"use client";

import { Section, Reveal, Heading, Lead, Eyebrow } from "./ui";

const steps = [
  { n: "01", title: "Drop in the content" },
  { n: "02", title: "Choose the content type" },
  { n: "03", title: "Select the visual system" },
  { n: "04", title: "Generate with the AI workflow" },
  { n: "05", title: "Review and refine" },
  { n: "06", title: "Publish" },
];

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
            <div className="elev flex h-full items-start gap-4 rounded-xl border border-line bg-panel/60 p-6 transition-colors hover:border-accent/40">
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

    </Section>
  );
}
