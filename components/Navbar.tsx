"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "System", href: "#system" },
  { label: "Work", href: "#work" },
  { label: "What’s Included", href: "#included" },
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span
            className="text-sm font-semibold tracking-tight text-cream"
            style={{ fontFamily: "var(--font-display)" }}
          >
            AI Visual Content System
          </span>
          <span className="hidden font-mono text-[0.6875rem] font-semibold tracking-[0.16em] text-dim uppercase lg:inline">
            by Ajenci
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.8125rem] text-mist transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#pricing"
            className="inline-flex h-9 items-center rounded-full bg-cream px-5 text-[0.8125rem] font-semibold text-ink transition-all hover:shadow-[0_0_24px_rgba(124,134,255,0.35)]"
          >
            Build My System
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-mist transition-colors hover:bg-panel hover:text-cream"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-cream text-sm font-semibold text-ink"
            >
              Build My System
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
