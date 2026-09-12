"use client";

import { useEffect, useRef } from "react";
import { Section, Reveal, Heading, Lead, Eyebrow } from "./ui";
import SectionCTA from "./SectionCTA";

const works = [
  { src: "21-ways-to-use-claude", label: "21 Ways to Use Claude" },
  { src: "ai-stack-tier-list", label: "My AI Stack, Ranked" },
  { src: "claude-code-structure", label: "Claude Code Project Structure" },
  { src: "claude-for-seo", label: "Claude for SEO" },
  { src: "claude-learning-modules", label: "Claude Learning Modules" },
  { src: "clone-yourself", label: "How to Clone Yourself Inside Claude" },
  { src: "learn-claude-7-days", label: "Learn Claude in 7 Days" },
  { src: "loop-vs-eval", label: "Loop vs. Eval Engineering" },
  { src: "not-sound-like-ai", label: "How to Not Sound Like AI" },
  { src: "one-percent-claude-setup", label: "The 1% Claude Setup" },
  { src: "one-person-company", label: "One-Person Company With AI" },
  { src: "stop-using-ai-beginner", label: "Stop Using AI Like a Beginner" },
  { src: "claude-code-ladder", label: "Levels of Claude Code" },
  { src: "everything-you-must-know", label: "Everything You Must Know in Claude" },
  { src: "faceless-youtube", label: "The Faceless YouTube System" },
  { src: "3d-website-claude", label: "The 3D Website Workflow" },
  { src: "website-one-skill", label: "Websites With One Skill" },
  { src: "how-to-prompt", label: "How to Prompt" },
  { src: "7-layers-of-claude", label: "7 Layers of Claude" },
  { src: "claude-code-one-page", label: "Claude Code in One Page" },
];

function MotionCard({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="elev group w-70 shrink-0 overflow-hidden rounded-xl border border-line bg-panel/60 transition-colors duration-300 hover:border-accent/50 sm:w-80">
      <div className="relative aspect-[4/5] overflow-hidden">
        <video
          ref={ref}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src={`/work/${src}.mp4`}
          poster={`/work/${src}.jpg`}
          muted
          loop
          playsInline
          preload="none"
          aria-label={`${label}, an animated infographic produced with the AI Visual Content System`}
        />
      </div>
      <figcaption className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
        <span className="block truncate font-mono text-[0.6875rem] font-semibold tracking-[0.12em] text-mist uppercase">
          {label}
        </span>
        <span
          className="flex shrink-0 items-center gap-1.5 font-mono text-[0.625rem] font-semibold tracking-[0.14em] text-accent uppercase"
          aria-hidden="true"
        >
          <span className="h-1 w-1 animate-pulse rounded-full bg-accent" />
          Motion
        </span>
      </figcaption>
    </figure>
  );
}

function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const state = useRef({ x: 0, half: 0, paused: false, dragging: false, lastX: 0, moved: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const s = state.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const measure = () => {
      s.half = track.scrollWidth / 2;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const wrap = () => {
      if (s.half <= 0) return;
      if (s.x <= -s.half) s.x += s.half;
      if (s.x > 0) s.x -= s.half;
    };

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      if (!reduced && !s.paused && !s.dragging) {
        s.x -= dt * 0.035;
        wrap();
      }
      track.style.transform = `translate3d(${s.x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const container = track.parentElement!;
    const down = (e: PointerEvent) => {
      s.dragging = true;
      s.lastX = e.clientX;
      s.moved = 0;
      container.setPointerCapture(e.pointerId);
      container.classList.add("cursor-grabbing");
    };
    const move = (e: PointerEvent) => {
      if (!s.dragging) return;
      const dx = e.clientX - s.lastX;
      s.lastX = e.clientX;
      s.moved += Math.abs(dx);
      s.x += dx;
      wrap();
    };
    const up = (e: PointerEvent) => {
      s.dragging = false;
      container.classList.remove("cursor-grabbing");
      try {
        container.releasePointerCapture(e.pointerId);
      } catch {}
    };
    const enter = () => {
      s.paused = true;
    };
    const leave = () => {
      s.paused = false;
    };

    container.addEventListener("pointerdown", down);
    container.addEventListener("pointermove", move);
    container.addEventListener("pointerup", up);
    container.addEventListener("pointercancel", up);
    container.addEventListener("mouseenter", enter);
    container.addEventListener("mouseleave", leave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("pointerdown", down);
      container.removeEventListener("pointermove", move);
      container.removeEventListener("pointerup", up);
      container.removeEventListener("pointercancel", up);
      container.removeEventListener("mouseenter", enter);
      container.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className="cursor-grab touch-pan-y overflow-hidden select-none"
      role="region"
      aria-label="Gallery of motion graphics made with the system. Drag to browse."
    >
      <div ref={trackRef} className="flex w-max gap-4 py-2 will-change-transform">
        {works.map((w) => (
          <MotionCard key={w.src} src={w.src} label={w.label} />
        ))}
        <div className="flex w-max gap-4" aria-hidden="true">
          {works.map((w) => (
            <MotionCard key={`dup-${w.src}`} src={w.src} label={w.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="hairline relative py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Proof</Eyebrow>
            <Heading>Made with this exact system.</Heading>
            <Lead className="mx-auto">
              No mockups here. These are live motion graphics from the same
              pipeline we build for you. Each one ships as GIF, PNG, 2K, MP4
              and a living design file.
            </Lead>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="mt-14">
          <Carousel />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-10 px-5 text-center font-mono text-xs font-medium tracking-[0.2em] text-dim uppercase">
          Hold and drag to browse. Same system, same brand rules, zero blank canvases.
        </p>
      </Reveal>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionCTA
          message="Want motion graphics like these running for your brand?"
          sub="We build the system. You keep producing."
          button="See the offer"
        />
      </div>
    </section>
  );
}
