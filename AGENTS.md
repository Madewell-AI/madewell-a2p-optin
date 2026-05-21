# madewell-a2p-optin — repo guide

This repo has **two parts**:

1. **The marketing / generator site** (root `app/`) — the public site Madewell
   deploys. A simple homepage where a business enters its details and gets:
   a live preview of their contact site, a copy/paste prompt for their coding
   agent, and every Telnyx / Twilio A2P campaign field pre-written.

2. **The open-source opt-in template** (`template/`) — a standalone Next.js app
   that a business's coding agent deploys as their public contact / opt-in site
   (contact page, thank-you, privacy, terms). It has its **own** README and
   AGENTS.md. The generator's prompt sends people here.

```
madewell-a2p-optin/        ← this repo → deploy to Vercel (marketing site)
  app/                     homepage, generator, live preview, registration wizard
  lib/marketing.ts         👉 set the public repo URL here
  lib/campaign-content.ts  generates the copy/paste campaign fields
  lib/agent-prompt.ts      generates the prompt for the user's coding agent
  template/                ← the deployable opt-in site (its own app + docs)
```

## Configuring the marketing site

- **`lib/marketing.ts`** — set `OSS_REPO_URL` and `OSS_REPO_SLUG` to wherever
  this repo is published. The agent prompt and "View on GitHub" links use them.
  `TEMPLATE_DIR` is the folder the prompt tells agents to use (`template`).
- Wording of the generated campaign fields lives in `lib/campaign-content.ts`;
  the agent prompt text lives in `lib/agent-prompt.ts`.

## Running locally

```bash
npm install
npm run dev      # marketing site
```

The `template/` folder is excluded from the root build (see `tsconfig.json`).
To work on the template itself: `cd template && npm install && npm run dev`.

## Deploying

The marketing site is a standard Next.js app — deploy the repo root to Vercel.
The `template/` folder is not a route of the marketing site; it ships in the
repo so people can pull it (e.g. `npx degit <repo>/template`).

## Guardrails

- The whole point of the template's opt-in form is the **unchecked, optional**
  SMS consent checkbox (fixes carrier error 803). Never make it required or
  pre-checked, here or in `template/`.
- Keep the SMS clause in the template's Privacy Policy and the carrier-liability
  line in its Terms.
- The marketing site only generates text and a preview — it collects nothing and
  needs no backend. Keep it that way.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
