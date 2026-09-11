"use client";

import {
  FileQuestion,
  Hourglass,
  Repeat2,
  Shuffle,
  MessagesSquare,
  Wrench,
} from "lucide-react";
import { Section, Reveal, Heading, Lead, Card, Eyebrow } from "./ui";

const pains = [
  {
    icon: FileQuestion,
    title: "Starting from scratch",
    copy: "Every new post becomes a new design problem.",
  },
  {
    icon: Hourglass,
    title: "Design bottlenecks",
    copy: "Your content moves at the speed of designer availability.",
  },
  {
    icon: Repeat2,
    title: "Repeated work",
    copy: "You keep rebuilding the same formats.",
  },
  {
    icon: Shuffle,
    title: "Inconsistency",
    copy: "Your visual identity slowly drifts across platforms.",
  },
  {
    icon: MessagesSquare,
    title: "Revision loops",
    copy: "Small changes create unnecessary back-and-forth.",
  },
  {
    icon: Wrench,
    title: "Tool friction",
    copy: "You spend more time figuring out how to create the visual than thinking about the idea.",
  },
];

export default function Problem() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>The Real Problem</Eyebrow>
        <Heading>
          You’re not short on ideas.
          <br />
          <span className="text-mist">You’re short on production.</span>
        </Heading>
        <Lead>
          Most creators and founders don’t need another design tool. They need a
          system that remembers how their brand works.
        </Lead>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <Card className="h-full">
              <p.icon size={18} className="text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-mono text-xs tracking-[0.16em] text-cream uppercase">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist">{p.copy}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <blockquote className="mx-auto mt-16 max-w-2xl border-l-2 border-accent pl-6">
          <p
            className="text-xl leading-snug font-medium text-cream sm:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            You don’t need more templates. You need a system that knows what to
            do with your content.
          </p>
        </blockquote>
      </Reveal>
    </Section>
  );
}
