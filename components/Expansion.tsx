"use client";

import { Plus, ArrowRight, PenTool, Cpu, Lightbulb, X as XIcon, Check } from "lucide-react";
import { Section, Reveal, Heading, Lead, Eyebrow, MonoTag } from "./ui";

const modules = [
  "Newsletter Engine",
  "LinkedIn System",
  "Instagram System",
  "YouTube Thumbnail System",
  "Repurposing Engine",
  "Research / Data System",
  "Launch Campaign System",
  "New Content Pillar",
  "Monthly Creative Partnership",
];

const compound = [
  "First system",
  "Second system",
  "Third system",
  "New platform",
  "New campaign",
  "New content pillar",
];

const pillars = [
  {
    icon: PenTool,
    title: "Design Thinking",
    copy: "We understand visual hierarchy, layout and brand consistency.",
  },
  {
    icon: Cpu,
    title: "AI Systems",
    copy: "We turn those principles into repeatable AI-assisted workflows.",
  },
  {
    icon: Lightbulb,
    title: "Content Thinking",
    copy: "We understand that the right visual depends on the idea, platform and audience.",
  },
];

const forWho = [
  "AI Creators",
  "Founders",
  "Personal Brands",
  "Newsletter Operators",
  "Consultants",
  "Educators",
  "Content Teams",
  "AI Startups",
  "Marketing Teams",
];

const notFor = [
  "Someone looking for a one-off Canva template",
  "Someone who publishes once a month",
  "Someone looking for generic AI images",
  "Someone expecting us to replace an entire creative department",
  "Someone unwilling to learn the workflow",
];

export default function Expansion() {
  return (
    <>
      <Section>
        <Reveal>
          <Eyebrow>Expansion Modules</Eyebrow>
          <Heading>
            Start with the core.
            <br />
            <span className="text-mist">Expand when you need more.</span>
          </Heading>
          <Lead>
            The initial system is built around your current workflow. As your
            content operation grows, we can add new systems without rebuilding
            everything.
          </Lead>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-ink-2">
            <div className="flex items-center justify-between border-b border-line bg-panel px-7 py-5">
              <p
                className="text-lg font-semibold tracking-tight text-cream"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your system is live. Here’s what we can add next.
              </p>
              <Plus size={18} className="hidden text-accent sm:block" aria-hidden="true" />
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((m) => (
                <li
                  key={m}
                  className="group flex items-center justify-between gap-4 border-b border-line px-7 py-5 transition-colors hover:bg-panel sm:border-r"
                >
                  <span className="flex items-center gap-3.5">
                    <span
                      className="h-4.5 w-4.5 shrink-0 rounded-[0.3rem] border border-line-2 transition-colors group-hover:border-accent group-hover:bg-glow"
                      aria-hidden="true"
                    />
                    <span className="text-[0.9375rem] font-medium text-cream">{m}</span>
                  </span>
                  <Plus
                    size={15}
                    className="shrink-0 text-dim transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-start justify-between gap-3 border-t border-line bg-panel/60 px-7 py-5 sm:flex-row sm:items-center">
              <p className="text-sm text-mist">
                Every module is scoped to your system. Curious about one? Ask on
                the demo call.
              </p>
              <a
                href="https://calendly.com/hey-humza-ai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full border border-accent/50 px-5 text-sm font-semibold text-accent transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_0_32px_rgba(124,134,255,0.45)]"
              >
                Book the call
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 rounded-xl border border-line bg-panel/60 p-7 sm:p-9">
            <MonoTag className="text-accent">Long-Term Value</MonoTag>
            <h3
              className="mt-3 text-2xl font-medium tracking-tight text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Every new format becomes part of the system.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">
              Instead of paying for every new visual as a separate design
              project, you build reusable infrastructure.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2.5">
              {compound.map((c, i) => (
                <div key={c} className="flex items-center gap-2">
                  <span className="rounded-md border border-line bg-ink-2 px-3 py-1.5 font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-mist uppercase">
                    {c}
                  </span>
                  {i < compound.length - 1 && (
                    <ArrowRight size={11} className="text-dim" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium text-cream">
              Your visual infrastructure compounds.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>Why Us</Eyebrow>
          <Heading>We don’t just hand you templates.</Heading>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-line bg-panel/60 p-7">
                <p.icon size={18} className="text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-mono text-xs tracking-[0.18em] text-cream uppercase">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <p
            className="mt-12 text-center text-xl font-medium text-cream sm:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            That’s why the output isn’t just faster.{" "}
            <span className="text-accent">It’s more repeatable.</span>
          </p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Who This Is For</Eyebrow>
            <Heading as="h3" className="!text-2xl sm:!text-3xl">
              Built for people who publish.
            </Heading>
            <div className="mt-7 flex flex-wrap gap-2">
              {forWho.map((w) => (
                <span
                  key={w}
                  className="flex items-center gap-2 rounded-full border border-accent/25 bg-glow/40 px-3.5 py-1.5 text-xs text-cream"
                >
                  <Check size={12} className="text-accent" aria-hidden="true" />
                  {w}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-mist">
              Especially if you already publish consistently and design is
              becoming the bottleneck.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <Eyebrow>Who This Is Not For</Eyebrow>
            <ul className="mt-2 flex flex-col gap-3">
              {notFor.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm text-mist">
                  <XIcon size={14} className="mt-0.5 shrink-0 text-dim" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-l-2 border-accent pl-4 text-sm leading-relaxed text-cream">
              This works best when you already have ideas worth publishing.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
