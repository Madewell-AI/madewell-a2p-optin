# A2P Opt-In Kit

The fastest way to get a business **approved for A2P 10DLC SMS registration**
on Telnyx or Twilio — without the endless rejections.

Carriers require a real public website with a compliant opt-in form, privacy
policy, and terms before they'll let you text from a 10-digit number. Those
pages get rejected constantly for subtle reasons (a missing or mandatory
consent checkbox, a privacy policy that doesn't mention SMS, an unclear opt-in
flow). This kit handles all of it.

## How it works

This repo is the **marketing / generator site**. A business:

1. Enters their details (business name, support email, etc.).
2. Gets a **live preview** of their contact site, plus a **copy/paste prompt**
   to hand to their coding agent (Claude Code, Cursor, …) that deploys the site
   for them.
3. Gets **every Telnyx / Twilio campaign field pre-written** — description,
   message flow, sample messages, keywords, auto-responses, and attribute
   settings — to copy and paste during registration.

The site their agent deploys lives in [`template/`](./template) — a standalone
contact / opt-in site that looks like a normal business page (not a compliance
form) and ships everything carriers check, with the opt-in checkbox done
correctly to avoid the most common rejection.

```
madewell-a2p-optin/      ← this repo → deploy to Vercel (the generator site)
  app/                   homepage, generator, live preview, registration wizard
  lib/                   marketing config + field/prompt generators
  template/              ← the open-source contact/opt-in site people deploy
```

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

To work on the deployable template instead:

```bash
cd template && npm install && npm run dev
```

## Configure

Set the published repo URL in **`lib/marketing.ts`** (`OSS_REPO_URL` /
`OSS_REPO_SLUG`) so the generated agent prompt and links point to the right
place. Field wording lives in `lib/campaign-content.ts`; the agent prompt in
`lib/agent-prompt.ts`.

## Deploy

Standard Next.js app — deploy the repo root to Vercel:

```bash
npx vercel        # preview
npx vercel --prod # production
```

## About error 803

`803 — Call to Action forces an Opt-In consent because it is missing the "Check
Box".` The most common A2P opt-in rejection: the form gives people no genuine
way to decline SMS while still submitting. The template's checkbox is a
**separate field, unchecked by default, and not required to submit** — so
consent is never forced. Keep it that way and 803 goes away.

> This kit helps you present an accurate, compliant opt-in flow. You're still
> responsible for only texting people who genuinely consented and for following
> the TCPA, CTIA guidelines, and your carrier's rules.

## Tech

Next.js (App Router) + React, plain CSS. MIT licensed.
