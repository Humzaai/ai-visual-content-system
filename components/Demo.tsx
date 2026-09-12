"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Section, Reveal, Heading, Lead, Eyebrow } from "./ui";

export default function Demo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    videoRef.current?.play();
  };

  return (
    <Section id="demo">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Watch It Run</Eyebrow>
          <Heading>Watch a visual build itself.</Heading>
          <Lead className="mx-auto">
            You drop in content. You get back a finished, on-brand visual. This
            is what running the system actually looks like.
          </Lead>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="elev relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-1.5 border-b border-line bg-panel px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
            <span className="ml-3 font-mono text-[0.6875rem] font-semibold tracking-[0.2em] text-dim uppercase">
              ai-visual-content-system / overview
            </span>
          </div>
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src="/demo.mp4"
              poster="/demo-poster.jpg"
              controls={playing}
              preload="metadata"
              playsInline
              onPlay={() => setPlaying(true)}
              onEnded={() => setPlaying(false)}
            />
            {!playing && (
              <button
                onClick={start}
                aria-label="Play demo video"
                className="group absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors hover:bg-ink/10"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-cream/20 bg-ink/70 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_48px_rgba(124,134,255,0.45)]">
                  <Play size={26} className="ml-1 text-cream" fill="currentColor" aria-hidden="true" />
                </span>
              </button>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
