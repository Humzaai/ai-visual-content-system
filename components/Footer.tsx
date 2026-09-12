"use client";

const links = [
  { label: "System", href: "#system" },
  { label: "What’s Included", href: "#included" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a Call", href: "https://calendly.com/hey-humza-ai/30min" },
];

export default function Footer() {
  return (
    <footer className="hairline px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p
              className="text-sm font-semibold tracking-tight text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              AI Visual Content System
            </p>
            <p className="mt-2 font-mono text-[0.6875rem] font-semibold tracking-[0.18em] text-dim uppercase">
              Build it once. Own it forever. Keep evolving.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.8125rem] text-mist transition-colors hover:text-cream"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#pricing"
            className="inline-flex h-10 items-center rounded-full bg-cream px-6 text-[0.8125rem] font-semibold text-ink transition-all hover:shadow-[0_0_24px_rgba(124,134,255,0.35)]"
          >
            Build My System
          </a>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-dim">
            A tangible product and service by{" "}
            <span className="font-medium text-mist">Ajenci</span>.
          </p>
          <p className="text-xs text-dim">
            © {new Date().getFullYear()} Ajenci. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
