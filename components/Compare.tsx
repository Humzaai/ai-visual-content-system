"use client";

import { Check, X } from "lucide-react";
import { Section, Reveal, Heading, Eyebrow } from "./ui";
import SectionCTA from "./SectionCTA";

type Cell = boolean | string;

const columns = ["AI Visual Content System", "Freelance Designer", "Template Packs", "DIY Canva"];

const rows: { label: string; cells: Cell[] }[] = [
  {
    label: "Cost model",
    cells: ["One-time build + optional partnership", "Per project + revisions", "Per pack", "Subscription + your hours"],
  },
  { label: "Built around your brand", cells: [true, true, false, false] },
  { label: "You own the system forever", cells: [true, false, false, false] },
  { label: "Repeatable production system", cells: [true, false, false, false] },
  { label: "AI workflows included", cells: [true, false, false, false] },
  { label: "Training + documentation", cells: [true, false, false, false] },
  { label: "Brand consistency enforced", cells: [true, true, false, false] },
  { label: "Works across every platform", cells: [true, false, false, true] },
  { label: "Evolves as AI changes", cells: [true, false, false, false] },
  { label: "No per-design fees", cells: [true, false, false, true] },
  { label: "Speed per visual", cells: ["Minutes", "Days", "Hours", "Hours"] },
];

function CellValue({ value, featured }: { value: Cell; featured: boolean }) {
  if (typeof value === "string") {
    return (
      <span className={`text-xs leading-snug sm:text-[0.8125rem] ${featured ? "text-cream" : "text-dim"}`}>
        {value}
      </span>
    );
  }
  return value ? (
    <span
      className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
        featured ? "bg-accent text-ink" : "bg-panel-2 text-mist"
      }`}
    >
      <Check size={13} aria-hidden="true" />
      <span className="sr-only">Yes</span>
    </span>
  ) : (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-dim/60">
      <X size={13} aria-hidden="true" />
      <span className="sr-only">No</span>
    </span>
  );
}

export default function Compare() {
  return (
    <Section className="overflow-hidden">
      <Reveal>
        <div className="text-center">
          <Eyebrow>The Honest Comparison</Eyebrow>
          <Heading>Why not just hire a designer?</Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
            Fair question. Here is how the system stacks up against every other
            way to get visuals made.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 overflow-x-auto pb-2">
          <table className="w-full min-w-175 border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="w-56 pb-4 text-left align-bottom" scope="col">
                  <span className="sr-only">Feature</span>
                </th>
                {columns.map((c, i) => (
                  <th
                    key={c}
                    scope="col"
                    className={`px-4 pb-4 text-center align-bottom ${i === 0 ? "min-w-44" : "min-w-32"}`}
                  >
                    <span
                      className={`inline-block rounded-xl border px-4 py-3 text-sm font-semibold tracking-tight ${
                        i === 0
                          ? "border-accent/60 bg-cream text-ink shadow-[0_0_40px_rgba(124,134,255,0.18)]"
                          : "border-line bg-panel text-mist"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {c}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}>
                  <th
                    scope="row"
                    className="border-t border-line py-4 pr-4 text-left text-sm font-medium text-cream"
                  >
                    {r.label}
                  </th>
                  {r.cells.map((cell, i) => (
                    <td
                      key={i}
                      className={`border-t px-4 py-4 text-center ${
                        i === 0 ? "border-accent/25 bg-glow/30" : "border-line"
                      }`}
                    >
                      <CellValue value={cell} featured={i === 0} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <SectionCTA
        message="One build covers everything in that first column."
        sub="Owned by you, with or without the monthly partnership."
        button="See pricing"
      />
    </Section>
  );
}
