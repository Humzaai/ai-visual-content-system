"use client";

const phrases = [
  "Build it once",
  "Own it forever",
  "Keep evolving",
  "Zero blank canvases",
  "Your brand, encoded",
  "One idea, every platform",
];

export default function MarqueeStrip() {
  const row = [...phrases, ...phrases];
  return (
    <div className="hairline overflow-hidden py-6" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-10">
        {[...row, ...row].map((p, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span
              className="text-2xl font-medium tracking-tight text-cream/70 sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {p}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
          </span>
        ))}
      </div>
    </div>
  );
}
