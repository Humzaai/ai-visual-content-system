"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, Reveal, Heading, Lead, Eyebrow } from "./ui";
import SectionCTA from "./SectionCTA";

const layers = [
  {
    n: "01",
    title: "Brand Intelligence",
    desc: "Your identity, encoded as rules the system can follow.",
    items: [
      "Colors",
      "Typography",
      "Spacing",
      "Hierarchy",
      "Image treatment",
      "Iconography",
      "Components",
      "Do / Don’t rules",
    ],
  },
  {
    n: "02",
    title: "Content Intelligence",
    desc: "What you publish, mapped into repeatable structures.",
    items: ["Content pillars", "Themes", "Content types", "Hooks", "Titles", "Formats", "CTAs"],
  },
  {
    n: "03",
    title: "Layout Intelligence",
    desc: "The formats your ideas ship in.",
    items: [
      "Infographics",
      "Frameworks",
      "Comparisons",
      "Data visuals",
      "Tutorials",
      "Case studies",
      "Announcements",
      "Quotes",
    ],
  },
  {
    n: "04",
    title: "Production Intelligence",
    desc: "The AI workflows that generate on-brand output.",
    items: [
      "Prompt architecture",
      "Generation workflow",
      "Editing workflow",
      "Quality control",
      "Repurposing",
    ],
  },
  {
    n: "05",
    title: "Distribution Systems",
    desc: "Every platform, one visual language.",
    items: ["X", "LinkedIn", "Instagram", "Newsletter", "YouTube", "Stories", "Carousels", "Thumbnails"],
  },
];

export default function Architecture() {
  const [active, setActive] = useState(0);
  const layer = layers[active];

  return (
    <Section id="system">
      <Reveal>
        <Eyebrow>The Solution</Eyebrow>
        <Heading>We build the system behind the visuals.</Heading>
        <Lead>
          Instead of handing you a folder of templates, we build a five-layer
          visual engine around the way you actually create content.
        </Lead>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="elev mt-14 overflow-hidden rounded-2xl border border-line bg-ink-2">
          {/* window chrome */}
          <div className="flex items-center justify-between border-b border-line bg-panel px-5 py-3.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
              <span className="ml-3 font-mono text-[0.6875rem] font-semibold tracking-[0.2em] text-dim uppercase">
                system.os / 5 layers
              </span>
            </div>
            <span className="hidden items-center gap-1.5 font-mono text-[0.6875rem] font-semibold tracking-[0.2em] text-dim uppercase sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Layer {layer.n} / 05
            </span>
          </div>

          <div className="grid md:grid-cols-[18rem_1fr]">
            {/* layer nav */}
            <div
              className="flex overflow-x-auto border-b border-line md:flex-col md:overflow-visible md:border-r md:border-b-0"
              role="tablist"
              aria-label="System layers"
            >
              {layers.map((l, i) => (
                <button
                  key={l.n}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`group relative shrink-0 px-5 py-4 text-left transition-colors md:px-6 md:py-5 ${
                    i === active ? "bg-glow/50" : "hover:bg-panel"
                  }`}
                >
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 md:inset-y-0 md:left-0 md:h-auto md:w-0.5 ${
                      i === active ? "bg-accent" : "bg-transparent"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`font-mono text-[0.6875rem] font-semibold tracking-[0.2em] uppercase ${
                      i === active ? "text-accent" : "text-dim"
                    }`}
                  >
                    Layer {l.n}
                  </span>
                  <span
                    className={`mt-1 block text-sm font-semibold tracking-tight whitespace-nowrap md:text-base ${
                      i === active ? "text-cream" : "text-mist"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {l.title}
                  </span>
                </button>
              ))}
            </div>

            {/* detail */}
            <div className="min-h-72 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={layer.n}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-lg leading-relaxed text-cream sm:text-xl">{layer.desc}</p>
                  <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
                    {layer.items.map((item, i) => (
                      <div
                        key={item}
                        className="group flex flex-col gap-1.5 bg-ink-2 p-4 transition-colors hover:bg-panel"
                      >
                        <span className="font-mono text-[0.6875rem] font-semibold text-dim group-hover:text-accent">
                          {layer.n}.{i + 1}
                        </span>
                        <span className="text-sm font-medium text-mist group-hover:text-cream">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>

      <SectionCTA
        message="All five layers get built around your brand."
        sub="One setup. Yours forever."
        button="Build My System"
      />
    </Section>
  );
}
