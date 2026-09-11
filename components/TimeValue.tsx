"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Section, Reveal, Heading, Lead, Eyebrow, MonoTag } from "./ui";
import SectionCTA from "./SectionCTA";

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm text-mist">{label}</label>
        <span className="font-mono text-sm text-cream">
          {value}
          <span className="ml-1 text-xs text-dim">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-panel-2 accent-accent"
      />
    </div>
  );
}

export default function TimeValue() {
  const [visuals, setVisuals] = useState(20);
  const [hours, setHours] = useState(2);
  const [rate, setRate] = useState(50);

  const monthlyHours = visuals * hours;
  const monthlyCost = monthlyHours * rate;
  const savedHours = Math.round(monthlyHours * 0.7);

  return (
    <Section>
      <Reveal>
        <Eyebrow>Time / Value</Eyebrow>
        <Heading>
          You’re not buying graphics.
          <br />
          <span className="text-mist">You’re buying back time.</span>
        </Heading>
        <Lead>
          If you’re publishing consistently, small production savings compound
          quickly.
        </Lead>
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-5">
        {/* comparison */}
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col gap-4">
            <div className="rounded-xl border border-line bg-ink-2 p-6">
              <MonoTag>Traditional</MonoTag>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
                {["Brief", "Design", "Feedback", "Revision", "Export"].map((s, i, arr) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="rounded-md border border-line bg-panel px-3 py-1.5 font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-mist uppercase">
                      {s}
                    </span>
                    {i < arr.length - 1 && <ArrowRight size={11} className="text-dim" aria-hidden="true" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-accent/30 bg-ink-2 p-6">
              <MonoTag className="text-accent">System</MonoTag>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
                {["Content", "Select system", "Generate", "Review", "Publish"].map((s, i, arr) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="rounded-md border border-accent/40 bg-glow px-3 py-1.5 font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-cream uppercase">
                      {s}
                    </span>
                    {i < arr.length - 1 && <ArrowRight size={11} className="text-dim" aria-hidden="true" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* calculator */}
        <Reveal delay={0.12} className="lg:col-span-3">
          <div className="h-full rounded-xl border border-line bg-panel/60 p-7">
            <MonoTag className="text-accent">Production Calculator</MonoTag>
            <div className="mt-6 grid gap-7 md:grid-cols-2 md:gap-10">
              <div className="flex flex-col gap-6">
                <Slider
                  label="Visuals per month"
                  value={visuals}
                  min={4}
                  max={100}
                  step={1}
                  unit="visuals"
                  onChange={setVisuals}
                />
                <Slider
                  label="Average hours per visual"
                  value={hours}
                  min={1}
                  max={8}
                  step={1}
                  unit="hrs"
                  onChange={setHours}
                />
                <Slider
                  label="Estimated hourly design cost"
                  value={rate}
                  min={20}
                  max={200}
                  step={5}
                  unit="$/hr"
                  onChange={setRate}
                />
              </div>
              <div className="flex flex-col justify-center gap-5 rounded-lg border border-line bg-ink-2 p-6">
                <div>
                  <MonoTag>Monthly production time</MonoTag>
                  <p className="mt-1 text-2xl font-medium text-cream" style={{ fontFamily: "var(--font-display)" }}>
                    ~{monthlyHours} hours
                  </p>
                </div>
                <div>
                  <MonoTag>Monthly design cost</MonoTag>
                  <p className="mt-1 text-2xl font-medium text-cream" style={{ fontFamily: "var(--font-display)" }}>
                    ~${monthlyCost.toLocaleString()}
                  </p>
                </div>
                <div>
                  <MonoTag className="text-accent">Potential time saved</MonoTag>
                  <p className="mt-1 text-2xl font-medium text-accent" style={{ fontFamily: "var(--font-display)" }}>
                    ~{savedHours} hours / mo
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 border-t border-line pt-4 font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-dim uppercase">
              Illustrative estimate. Actual results vary by workflow and complexity.
            </p>
          </div>
        </Reveal>
      </div>

      <SectionCTA
        message={`That is roughly ${monthlyHours} hours and $${monthlyCost.toLocaleString()} going into production every month.`}
        sub="The system build pays for itself fast when you publish consistently."
        button="Get my time back"
      />
    </Section>
  );
}
