"use client";

import { Check, Star } from "lucide-react";
import { Section, Reveal, Heading, Lead, Eyebrow } from "./ui";

const tiers = [
  {
    name: "Core System",
    setup: "$3,500",
    monthly: "$1,000",
    badge: "Start Here",
    positioning:
      "The complete AI Visual Content System, built around your brand, plus the Creative Intelligence Partnership that keeps it evolving.",
    cta: "Build My System",
    featured: true,
    features: [
      "Complete AI Visual Content System",
      "Brand system + core visual language",
      "15 to 20 foundational layouts",
      "3 to 5 content pillar systems",
      "Infographic creation workflow",
      "Title / headline system",
      "CTA system",
      "AI prompting + production workflow",
      "Reusable components",
      "Brand consistency rules",
      "Complete documentation",
      "1:1 implementation training",
      "Coaching during setup",
      "Monthly: new layouts + formats",
      "Monthly: prompt + workflow optimization",
      "Monthly: creative + consistency reviews",
      "Monthly strategy session",
    ],
  },
  {
    name: "Visual Content Engine",
    setup: "$5,000",
    monthly: "$2,000",
    badge: null as string | null,
    positioning:
      "The core system plus newsletter, social expansion and repurposing. We actively package your content every month.",
    cta: "Build My Content Engine",
    featured: false,
    features: [
      "Everything in Core System",
      "Newsletter Visual Engine",
      "Full social media expansion",
      "Repurposing engine: one idea, full package",
      "Platform-specific format systems",
      "Creative direction",
      "Content packaging",
      "New campaign systems",
      "Trend-based visual formats",
      "New AI capabilities integrated",
      "Monthly creative roadmap",
      "Priority collaboration",
    ],
  },
  {
    name: "Visual Content Department",
    setup: "$7,500",
    monthly: "$3,000",
    badge: null as string | null,
    positioning:
      "We operate as your external AI creative department, deeply involved in strategy, launches and production.",
    cta: "Build My Department",
    featured: false,
    features: [
      "Everything in Visual Content Engine",
      "Full multi-pillar system build",
      "Launch + campaign graphics systems",
      "Visual concepts + output reviews",
      "Newsletter production support",
      "Continuous system expansion",
      "Strategic visual consulting",
      "A visual production system that works whenever you do",
    ],
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[32rem] w-[60rem] max-w-full -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,134,255,0.18), rgba(167,139,250,0.07) 55%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <Reveal>
        <div className="relative text-center">
          <Eyebrow>Build → Operate → Evolve</Eyebrow>
          <h2
            className="text-shimmer bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-5xl font-medium tracking-tight text-balance text-transparent sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Pricing
          </h2>
          <Lead className="mx-auto">
            Choose how much of the system you want us to build, and how
            involved you want us to stay.
          </Lead>
        </div>
      </Reveal>

      <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08} className="h-full">
            <div
              className={`elev flex h-full flex-col overflow-hidden rounded-2xl border ${
                t.featured
                  ? "border-accent shadow-[0_0_90px_rgba(124,134,255,0.3)]"
                  : "border-line transition-shadow duration-300 hover:border-accent/50 hover:shadow-[0_0_50px_rgba(124,134,255,0.15)]"
              }`}
            >
              {/* header cap */}
              <div
                className={`flex items-center justify-between px-7 py-4 ${
                  t.featured
                    ? "bg-gradient-to-r from-accent to-accent-2"
                    : "border-b border-accent/20 bg-gradient-to-r from-glow to-panel-2"
                }`}
              >
                <span
                  className={`text-base font-semibold tracking-tight ${
                    t.featured ? "text-white" : "text-cream"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.name}
                </span>
                {t.badge && (
                  <span className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-cream uppercase">
                    <Star size={10} fill="currentColor" aria-hidden="true" />
                    {t.badge}
                  </span>
                )}
              </div>

              <div
                className={`flex flex-1 flex-col p-7 ${
                  t.featured ? "bg-gradient-to-b from-glow/60 to-ink-2" : "bg-ink-2"
                }`}
              >
                {/* price */}
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span
                    className={`text-5xl font-medium tracking-tight ${
                      t.featured
                        ? "bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent"
                        : "text-cream"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.setup}
                  </span>
                  <span className="text-base text-dim">setup</span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span
                    className="text-2xl font-medium tracking-tight text-accent"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    + {t.monthly}
                  </span>
                  <span className="text-sm text-dim">/ month to keep evolving</span>
                </div>

                <p className="mt-5 text-[0.9375rem] leading-relaxed text-mist">
                  {t.positioning}
                </p>

                <ul className="mt-7 flex flex-col gap-2.5 border-t border-line pt-6">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.875rem] text-mist">
                      <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <a
                    href="#apply"
                    className={`inline-flex min-h-13 w-full items-center justify-center rounded-full text-base font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      t.featured
                        ? "btn-glow bg-gradient-to-r from-accent to-accent-2 text-white hover:scale-[1.02] hover:brightness-110"
                        : "border border-accent/50 text-accent hover:scale-[1.02] hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_0_40px_rgba(124,134,255,0.5)]"
                    }`}
                  >
                    {t.cta}
                  </a>
                  <p className="mt-4 text-center text-xs leading-relaxed text-dim">
                    The monthly partnership is optional after launch. Cancel
                    anytime. The system you built stays yours.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="elev mx-auto mt-14 max-w-3xl rounded-2xl border border-accent/50 bg-glow/70 p-9 text-center shadow-[0_0_60px_rgba(124,134,255,0.15)]">
          <p
            className="text-2xl font-medium text-cream sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The system is yours forever.
            <br />
            The partnership keeps it evolving.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist">
            You’re not paying rent on the system. You own the setup build
            outright. The monthly partnership pays for our continued
            expertise, expansion and creative involvement.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
