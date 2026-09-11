"use client";

import { useEffect } from "react";

export default function ClickEffect() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const spawn = (e: PointerEvent) => {
      const burst = document.createElement("span");
      burst.className = "click-burst";
      burst.style.left = `${e.clientX}px`;
      burst.style.top = `${e.clientY}px`;

      const ring = document.createElement("span");
      ring.className = "click-ring";
      burst.appendChild(ring);

      for (let i = 0; i < 6; i++) {
        const p = document.createElement("span");
        p.className = "click-particle";
        const angle = (i / 6) * Math.PI * 2 + Math.random() * 0.8;
        const dist = 26 + Math.random() * 18;
        p.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
        p.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
        burst.appendChild(p);
      }

      document.body.appendChild(burst);
      setTimeout(() => burst.remove(), 700);
    };

    window.addEventListener("pointerdown", spawn, { passive: true });
    return () => window.removeEventListener("pointerdown", spawn);
  }, []);

  return null;
}
