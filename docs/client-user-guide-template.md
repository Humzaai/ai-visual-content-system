# {{CLIENT_NAME}} Visual Content System — User Guide

Welcome. This is your visual production system, built around your brand by Ajenci. It lives on your computer, the files are yours forever, and this guide covers everything you need to run it.

---

## 1. What you received

Your system is a single project folder (delivered as a private GitHub repository):

```
{{client-name}}-visual-system/
├── README.md                  <- start here, short version of this guide
├── USER-GUIDE.md              <- this document
├── brand/
│   ├── brand-rules.md         <- your colors, type, spacing, do/don't rules
│   ├── voice-and-hooks.md     <- hook types, title formulas, CTA library
│   └── assets/                <- logos, fonts, reference images
├── pillars/
│   └── {{pillar-name}}.md     <- one file per content pillar (topics, angles, formats)
├── layouts/
│   └── {{layout-name}}/       <- one folder per layout in your library
├── workflows/
│   ├── create-visual.md       <- the main production workflow, step by step
│   ├── repurpose.md           <- one idea to a full platform package
│   └── quality-checklist.md   <- what to check before publishing
├── prompts/
│   └── ...                    <- the AI prompt architecture the workflows use
├── exports/
│   └── YYYY-MM-DD-topic/      <- every visual you produce lands here
└── design-notes.md            <- the living design memory (see section 6)
```

## 2. Requirements

- A computer (Mac, Windows or Linux) with **Git** installed
- **{{AI_TOOL}}** (e.g. Claude Code) signed in with your own account
- {{ANY_OTHER_TOOLS}} (only if your build uses them; listed in README.md)

No design software required. No subscription owed to us.

## 3. Getting your system onto a computer

One-time setup, about five minutes. We also do this together on your training call.

1. Accept the GitHub transfer or invitation we send you (email from GitHub).
2. Open a terminal and run:
   ```bash
   git clone https://github.com/{{YOUR_GITHUB}}/{{client-name}}-visual-system.git
   cd {{client-name}}-visual-system
   ```
3. Open the folder in {{AI_TOOL}} and follow `README.md`.

New laptop later? Repeat the same three steps anywhere in the world. The repository is the permanent home of your system; every computer is just a copy.

## 4. Creating a visual (the daily workflow)

1. Open the project folder in {{AI_TOOL}}.
2. Open `workflows/create-visual.md` and follow it:
   - Drop in your idea or draft content
   - Pick the content pillar and layout
   - Run the generation workflow
   - Review against `workflows/quality-checklist.md`
   - Refine anything that is off
3. Your finished package appears in `exports/` as:
   - `name.gif` (feed autoplay), `name.png` (1080 x 1350), `name@2k.png`, `name.mp4`, and updated `design-notes.md`

## 5. Repurposing one idea

Open `workflows/repurpose.md`, give it one finished piece, and it walks you through generating the platform variants (X, LinkedIn, Instagram, newsletter, YouTube) from the same source.

## 6. The design-notes loop (important)

`design-notes.md` is your system's memory. Every time you correct or refine a visual, the change is recorded there and applied to future generations. Never delete this file. Back it up with the rest of the repository (it is versioned automatically when you commit).

Saving your work back to GitHub after a session:

```bash
git add -A
git commit -m "New visuals + design notes"
git push
```

## 7. Updates from us (partnership clients)

If you are on the monthly partnership, we ship improvements to your repository: new layouts, new pillars, prompt upgrades, workflow fixes. You get them three ways, pick your favorite:

1. **Automatic**: your system pulls the latest version every time you open the project. Nothing to do.
2. **One click**: double-click `update.command` (Mac) or `update.bat` (Windows) in the project folder.
3. **Manual**: run `git pull` in the project folder.

You also get a GitHub email whenever we publish an update, with notes on what is new.

Each update is tagged (v1.1, v1.2, ...) with release notes, so you can always see what changed and roll back if you ever want to.

If you are not on the partnership: nothing changes. The system keeps working exactly as delivered, forever.

## 8. Backups and ownership

- The GitHub repository is under **your** account. We keep access only while you want us to.
- Your local clone is a full copy, history included. GitHub down? You still have everything.
- Optional extra safety: keep a copy of the folder in your cloud drive once a month.

## 9. Support

- **First 30 days:** implementation support included. Message us with anything.
- **Partnership clients:** priority support, monthly strategy session, continuous system development.
- Contact: {{SUPPORT_EMAIL}} · Book time: {{CALENDLY_URL}}

---

Build it once. Own it forever. Keep evolving.
