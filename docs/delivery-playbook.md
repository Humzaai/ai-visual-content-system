# Delivery Playbook (internal) — Shipping a Client System via GitHub

How we hand a finished visual system to a client so they truly own it. Repeat per client.

## 0. Prepare the folder

- Assemble the client system folder (structure in `client-user-guide-template.md`).
- Copy `client-user-guide-template.md` in as `USER-GUIDE.md`, fill every `{{PLACEHOLDER}}`.
- Write a short `README.md` (3 steps to first visual).
- Run the quality pass: generate one visual end to end on a clean machine.

## 1. Handle heavy media with Git LFS

Exports and reference assets get big. Before the first commit:

```bash
cd client-name-visual-system
git init
git lfs install
git lfs track "*.mp4" "*.gif" "*.png" "*.psd" "*.ttf" "*.otf"
git add .gitattributes
```

Rule of thumb: keep the repo under ~1 GB. Ship only the system + a few reference exports; the client's future exports stay local or in their own storage.

## 2. First commit + private repo

```bash
git add -A
git commit -m "v1.0 - initial system build"
gh repo create client-name-visual-system --private --source=. --push
git tag v1.0 && git push --tags
```

## 3. Give the client ownership (two options)

**Option A — transfer (true "yours forever", recommended at final handoff):**
GitHub repo → Settings → Danger Zone → Transfer ownership → client's username.
Then they add us back as a collaborator (only if on the partnership).

**Option B — collaborator first, transfer later:**
```bash
gh api repos/OWNER/client-name-visual-system/collaborators/CLIENT_USERNAME -X PUT -f permission=push
```
Useful during the 30-day support window; transfer at the end of it.

Client has no GitHub account? They create a free one in 2 minutes on the training call. Truly allergic to GitHub? Fallback: zip the folder, deliver via Drive link + a USB-style local copy walkthrough. They lose versioned updates, so push GitHub first.

## 4. Training call

- Clone the repo together on their machine (Section 3 of the user guide).
- Produce one real visual live, end to end.
- Show the design-notes loop and the commit/push habit.
- Show `git pull` for receiving partnership updates.

## 5. Ongoing (partnership clients)

- Work on branches, merge to `main`, tag every drop: `v1.1`, `v1.2`...
- Release notes in the tag message: what is new, what changed, anything they must re-run.
- They receive everything with `git pull`. Cancelled clients simply stop pulling; nothing breaks.

## 6. Handoff checklist

- [ ] USER-GUIDE.md filled in, no placeholders left
- [ ] Fresh clone test on a machine that is not ours
- [ ] LFS tracking verified (`git lfs ls-files`)
- [ ] v1.0 tag pushed
- [ ] Ownership transferred (or collaborator added + transfer date agreed)
- [ ] Training call done, client produced one visual themselves
- [ ] 30-day support window start date noted
