"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Clock, FileSearch, Phone } from "lucide-react";
import { Section, Reveal, Heading, Lead, Eyebrow } from "./ui";

const APPLY_EMAIL = "aitustmail@gmail.com";

const steps = [
  {
    icon: FileSearch,
    title: "We review your setup",
    copy: "Your brand, your platforms, what you already publish. Within 48 hours.",
  },
  {
    icon: Phone,
    title: "Short call",
    copy: "We map what your system should include. No pitch deck, just the plan.",
  },
  {
    icon: Clock,
    title: "Proposal + build slot",
    copy: "Fixed scope, fixed price, a start date. You decide from there.",
  },
];

const inputCls =
  "w-full rounded-lg border border-line-2 bg-ink px-4 py-3 text-sm text-cream placeholder:text-dim transition-colors focus:border-accent focus:outline-none";

export default function Apply() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    link: "",
    publish: "Newsletter",
    volume: "5 to 15 visuals / month",
    plan: "Core System ($3,500 + $1,000/mo)",
    bottleneck: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Brand / profile link: ${form.link || "not provided"}`,
      `Publishes on: ${form.publish}`,
      `Volume: ${form.volume}`,
      `Interested in: ${form.plan}`,
      "",
      "Biggest bottleneck:",
      form.bottleneck,
    ].join("\n");
    window.location.href = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
      `System application — ${form.name}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Section id="apply">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Start Here</Eyebrow>
          <Heading>
            Tell us what
            <br />
            you already built.
          </Heading>
          <Lead>
            Two minutes. We will show you exactly where the system can take it.
          </Lead>

          <ol className="mt-10 flex flex-col gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-glow">
                  <s.icon size={17} className="text-accent" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs font-semibold tracking-[0.14em] text-cream uppercase">
                    {String(i + 1).padStart(2, "0")} — {s.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{s.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={submit}
            className="rounded-2xl border border-accent/30 bg-ink-2 p-7 shadow-[0_0_60px_rgba(124,134,255,0.12)] sm:p-8"
          >
            {sent ? (
              <div className="flex min-h-96 flex-col items-center justify-center text-center">
                <CheckCircle2 size={40} className="text-accent" aria-hidden="true" />
                <p
                  className="mt-5 text-2xl font-medium text-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Application ready.
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
                  Your email app just opened with everything filled in. Hit send
                  and we will get back to you within 48 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm text-accent underline-offset-4 hover:underline"
                >
                  Edit my answers
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-xs font-semibold tracking-[0.14em] text-mist uppercase">
                      Name
                    </span>
                    <input
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your name"
                      className={inputCls}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-xs font-semibold tracking-[0.14em] text-mist uppercase">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@brand.com"
                      className={inputCls}
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-xs font-semibold tracking-[0.14em] text-mist uppercase">
                    Link to your brand or profile
                  </span>
                  <input
                    value={form.link}
                    onChange={set("link")}
                    placeholder="Newsletter, X, LinkedIn, site..."
                    className={inputCls}
                  />
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-xs font-semibold tracking-[0.14em] text-mist uppercase">
                      Where do you publish?
                    </span>
                    <select value={form.publish} onChange={set("publish")} className={inputCls}>
                      {["Newsletter", "X", "LinkedIn", "Instagram", "YouTube", "Multiple platforms"].map(
                        (o) => (
                          <option key={o}>{o}</option>
                        )
                      )}
                    </select>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-xs font-semibold tracking-[0.14em] text-mist uppercase">
                      How much do you publish?
                    </span>
                    <select value={form.volume} onChange={set("volume")} className={inputCls}>
                      {[
                        "Under 5 visuals / month",
                        "5 to 15 visuals / month",
                        "15 to 40 visuals / month",
                        "40+ visuals / month",
                      ].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-xs font-semibold tracking-[0.14em] text-mist uppercase">
                    Which plan fits you?
                  </span>
                  <select value={form.plan} onChange={set("plan")} className={inputCls}>
                    {[
                      "Core System ($3,500 + $1,000/mo)",
                      "Visual Content Engine ($5,000 + $2,000/mo)",
                      "Visual Content Department ($7,500 + $3,000/mo)",
                      "Not sure yet",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-xs font-semibold tracking-[0.14em] text-mist uppercase">
                    What is your biggest visual bottleneck?
                  </span>
                  <textarea
                    required
                    value={form.bottleneck}
                    onChange={set("bottleneck")}
                    placeholder="e.g. Every post takes hours, my feed looks inconsistent, my designer is a queue..."
                    rows={3}
                    className={`${inputCls} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="btn-glow mt-2 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
                >
                  Send my application
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
                <p className="text-center text-xs text-dim">
                  No spam, no newsletter opt-in. Just a reply about your system.
                </p>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
