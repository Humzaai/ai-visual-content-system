# AI Visual Content System — Landing Page

Premium landing page for the AI Visual Content System, a productized service by Ajenci: we turn a creator's brand, content and design rules into an AI-assisted visual production system they own and run themselves.

## Highlights

- Dark and pure-white themes with a navbar toggle (persisted)
- Interactive `system.os` architecture panel with clickable layers
- Draggable, auto-sliding carousel of 20 real motion graphics (MP4 loops)
- Embedded product demo video
- Live production-cost calculator that feeds a dynamic CTA
- Accent-dominant pricing tiers ($3,500 / $5,000 / $7,500 setup + monthly partnership)
- Application form (currently mailto-based), cursor glow, click bursts, marquee strips

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · framer-motion · lucide-react

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — section order
- `components/` — one file per section
- `public/work/` — gallery assets (add a poster `.jpg` + loop `.mp4`, then register in `components/Work.tsx`)
- `public/demo.mp4` — demo video

Feedback welcome — open an issue or leave comments on the code.
