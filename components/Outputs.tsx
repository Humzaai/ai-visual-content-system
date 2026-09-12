"use client";

import { Film, FileImage, FileVideo, FileText, FolderOpen } from "lucide-react";
import { Section, Reveal, Heading, Lead, Eyebrow } from "./ui";

const files = [
  {
    icon: Film,
    name: "framework-post.gif",
    type: "GIF",
    meta: "Animated · loops",
    desc: "Animated version that autoplays in the X and LinkedIn feed.",
  },
  {
    icon: FileImage,
    name: "framework-post.png",
    type: "PNG",
    meta: "1080 × 1350",
    desc: "Feed-ready static for every platform.",
  },
  {
    icon: FileImage,
    name: "framework-post@2k.png",
    type: "PNG · 2K",
    meta: "2160 × 2700",
    desc: "High-resolution export for decks, print and thumbnails.",
  },
  {
    icon: FileVideo,
    name: "framework-post.mp4",
    type: "MP4",
    meta: "1080p · motion",
    desc: "Motion version for Reels, Shorts and Stories.",
  },
  {
    icon: FileText,
    name: "design-notes.md",
    type: "Markdown",
    meta: "living file",
    desc: "A design memory. Every revision updates the rules, so the next visual starts smarter than the last.",
    highlight: true,
  },
];

export default function Outputs() {
  return (
    <Section id="included">
      <Reveal>
        <Eyebrow>What the System Gives You</Eyebrow>
        <Heading>
          One generation.
          <br />
          <span className="text-mist">A complete asset package.</span>
        </Heading>
        <Lead>
          Every visual ships as a full set of files, ready for every platform.
          It also includes a design file that makes the system better each
          time you use it.
        </Lead>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="elev mt-14 overflow-hidden rounded-2xl border border-line bg-ink-2">
          <div className="flex items-center gap-2.5 border-b border-line bg-panel px-6 py-4">
            <FolderOpen size={15} className="text-accent" aria-hidden="true" />
            <span className="font-mono text-xs font-medium tracking-[0.18em] text-mist uppercase">
              exports / framework-post /
            </span>
            <span className="ml-auto font-mono text-[0.6875rem] font-semibold tracking-[0.16em] text-dim uppercase">
              5 files
            </span>
          </div>
          <ul>
            {files.map((f) => (
              <li
                key={f.name}
                className={`group grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-1 border-b border-line px-6 py-5 transition-colors last:border-b-0 sm:grid-cols-[auto_16rem_7rem_1fr] sm:items-center ${
                  f.highlight ? "bg-glow/30 hover:bg-glow/50" : "hover:bg-panel"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border ${
                    f.highlight ? "border-accent/50 bg-glow text-accent" : "border-line bg-panel text-mist"
                  }`}
                >
                  <f.icon size={17} aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-cream">{f.name}</span>
                <span className="col-start-2 sm:col-start-3">
                  <span
                    className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[0.6875rem] font-semibold tracking-[0.12em] uppercase ${
                      f.highlight ? "border-accent/50 text-accent" : "border-line-2 text-dim"
                    }`}
                  >
                    {f.type}
                  </span>
                </span>
                <span className="col-start-2 text-sm leading-relaxed text-mist sm:col-start-4">
                  {f.desc}
                  <span className="ml-2 font-mono text-xs font-medium text-dim">{f.meta}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.18}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-mist">
          The <span className="font-mono text-sm text-accent">design-notes.md</span>{" "}
          file is the part nobody else ships:{" "}
          <span className="text-cream">
            your system learns from every change you make and applies it to the
            next design.
          </span>
        </p>
      </Reveal>
    </Section>
  );
}
