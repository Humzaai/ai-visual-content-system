"use client";

import { ArrowDown } from "lucide-react";
import { Section, Reveal, Heading, Lead, Eyebrow, MonoTag } from "./ui";

const involvement = [
  {
    title: "Discovery + Architecture",
    copy: "We study your brand, content and existing system, then define the visual architecture with you.",
  },
  {
    title: "Build + Training",
    copy: "Our team implements while we oversee the creative direction, then we personally train you to run it.",
  },
  {
    title: "Evolution",
    copy: "If you continue with the partnership, we stay involved in improving the system with you.",
  },
];

const model = [
  { title: "Build", copy: "We build the foundation." },
  { title: "Operate", copy: "You use the system independently." },
  { title: "Evolve", copy: "We continue adding new capabilities if you want us involved." },
];

export default function Partnership() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Personal Involvement</Eyebrow>
            <Heading>Built with you. Not just for you.</Heading>
            <Lead>
              During the initial build, we work directly with you to understand
              how you think, what you publish and how your brand should look.
            </Lead>
            <div className="mt-8 rounded-xl border border-accent/25 bg-glow/40 p-6">
              <MonoTag className="text-accent">Your Creative Systems Partner</MonoTag>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                Not a designer. Not a freelancer. Not maintenance. Your ongoing
                partner for creative systems, AI workflows and visual content
                infrastructure.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ol className="flex flex-col">
              {involvement.map((step, i) => (
                <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                  {i < involvement.length - 1 && (
                    <span
                      className="absolute top-8 left-3.75 h-full w-px bg-line"
                      aria-hidden="true"
                    />
                  )}
                  <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-ink font-mono text-[0.6875rem] font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-mono text-xs tracking-[0.18em] text-cream uppercase">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="text-center">
            <Eyebrow>The Recurring Model</Eyebrow>
            <Heading>Why continue after the build?</Heading>
            <Lead className="mx-auto">
              The system doesn’t expire. Your content evolves.
            </Lead>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-line bg-ink-2 p-7 text-center">
            <p className="text-sm leading-loose text-mist">
              AI models change. Platforms change. Formats change.
              <br />
              Your brand evolves. Your content evolves.
            </p>
            <p className="mt-3 text-sm font-medium text-cream">
              Your visual system can evolve with them.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-md flex-col items-stretch">
          {model.map((m, i) => (
            <Reveal key={m.title} delay={0.15 + i * 0.08}>
              <div className="rounded-xl border border-line bg-panel/60 p-6 text-center transition-colors hover:border-accent/40">
                <h3
                  className="text-lg font-semibold tracking-tight text-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m.title}
                </h3>
                <p className="mt-1.5 text-sm text-mist">{m.copy}</p>
              </div>
              {i < model.length - 1 && (
                <div className="flex justify-center py-2" aria-hidden="true">
                  <ArrowDown size={16} className="text-accent/60" />
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-mist">
            The monthly partnership exists because creative systems should keep
            improving.{" "}
            <span className="text-cream">
              Not because you need to keep paying to access what you already own.
            </span>
          </p>
        </Reveal>
      </Section>
    </>
  );
}
