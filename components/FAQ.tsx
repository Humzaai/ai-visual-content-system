"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, Reveal, Heading, Eyebrow } from "./ui";

const faqs = [
  {
    q: "Do I need to know how to use AI?",
    a: "No. We build the workflow around your current skill level and train you through it.",
  },
  {
    q: "Do I need an existing brand?",
    a: "No. Existing brand assets help, but we can establish the visual foundation during the build.",
  },
  {
    q: "Do I need an existing design system?",
    a: "No. If you already have one, we build on top of it. If you don’t, we establish one.",
  },
  {
    q: "Do I own the system?",
    a: "Yes. The core system is yours to use indefinitely.",
  },
  {
    q: "Do I have to pay monthly?",
    a: "No. The System Build is a one-time implementation. The monthly plans are for clients who want continued expansion, optimization and creative involvement.",
  },
  {
    q: "What happens if I cancel the monthly plan?",
    a: "You keep everything from the original build. The system continues to work. You simply stop receiving the ongoing expansion and support included in the partnership.",
  },
  {
    q: "What happens when AI tools change?",
    a: "That’s where ongoing evolution becomes valuable. We can update workflows, prompts and systems as the technology changes.",
  },
  {
    q: "Can this work across multiple platforms?",
    a: "Yes. We create platform-specific systems while maintaining your underlying visual identity.",
  },
  {
    q: "Can you build newsletter visuals?",
    a: "Yes. Headers, banners, article covers, CTAs, lead magnets and promotional visuals can all be included.",
  },
  {
    q: "Can you build systems for multiple content pillars?",
    a: "Yes. Systems can be structured around different profiles, themes, audiences, pillars and formats.",
  },
  {
    q: "How long does the build take?",
    a: "Timeline depends on scope and complexity. We begin with an audit and architecture phase before implementation.",
  },
  {
    q: "Is this replacing my designer?",
    a: "The goal isn’t necessarily to replace your creative team. It’s to remove repetitive production work and reduce dependency on manual design for recurring content.",
  },
];

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-panel-${i}`;
  return (
    <div className="border-b border-line">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="text-[0.9375rem] font-medium text-cream">{q}</span>
        <Plus
          size={16}
          className={`shrink-0 text-accent transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-mist">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <Heading as="h2" className="!text-3xl">
            Questions founders actually ask.
          </Heading>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Ownership, the build, and what the monthly partnership really is.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border-t border-line">
            {faqs.map((f, i) => (
              <Item key={f.q} q={f.q} a={f.a} i={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
