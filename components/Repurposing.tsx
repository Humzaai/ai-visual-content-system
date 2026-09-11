"use client";

import { Sparkles } from "lucide-react";
import { Section, Reveal, Heading, Lead, Eyebrow } from "./ui";

const outputs = [
  "Newsletter",
  "X Thread",
  "LinkedIn",
  "Carousel",
  "Infographic",
  "Quote Graphics",
  "Story",
  "CTA",
];

export default function Repurposing() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Repurposing Engine</Eyebrow>
          <Heading>
            One idea.
            <br />
            <span className="text-mist">An entire visual content package.</span>
          </Heading>
          <Lead>
            We build the system so your best ideas don’t stop at one piece of
            content.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-line bg-ink-2 p-7 sm:p-9">
            <div className="mx-auto flex w-fit items-center gap-2.5 rounded-full border border-accent/40 bg-glow px-5 py-2.5">
              <Sparkles size={14} className="text-accent" aria-hidden="true" />
              <span className="font-mono text-xs font-medium tracking-[0.2em] text-cream uppercase">
                One Idea
              </span>
            </div>
            <div className="mx-auto my-3 h-6 w-px bg-gradient-to-b from-accent/60 to-transparent" aria-hidden="true" />
            <div className="grid grid-cols-2 gap-2.5">
              {outputs.map((o, i) => (
                <Reveal key={o} delay={0.2 + i * 0.05}>
                  <div className="rounded-lg border border-line bg-panel px-4 py-3 text-center font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-mist uppercase transition-colors hover:border-accent/40 hover:text-cream">
                    {o}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
