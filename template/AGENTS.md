# Customizing this contact / opt-in site

You're setting up a small public website for a business so it can pass **A2P
10DLC** SMS registration on Telnyx, Twilio, or another carrier. This site is
the opt-in piece only. Keep it simple.

## What this is

A clean "stay in touch / contact" website with exactly what a carrier needs to
see, and nothing else:

- `/` — contact form (name, email, phone) with an **optional, unchecked** SMS
  consent checkbox and full disclosures
- `/thank-you` — confirmation after submitting
- `/privacy` — Privacy Policy (with the SMS non-sharing clause carriers require)
- `/terms` — Terms of Service (with the carrier-liability disclaimer)

It deliberately looks like a normal business contact page — not a compliance
form. The form doesn't store or send anything; its only job is to exist
publicly and look legitimate.

## Step 1 — Ask for the business details

- **Business / brand name** (required)
- **Customer-service email** (required)
- **Customer-service phone** (optional)
- **Main website URL** (optional)

Collect only these. Don't add other personal info or extra fields.

## Step 2 — Edit ONE file

Put the answers in **`lib/site-config.ts`** — the only file you need to change.
Replace the placeholder values. Leave optional fields as `""` if not provided.

## Step 3 — Run it locally

```bash
npm install
npm run dev
```

Open the local URL and confirm the business name and email look right on the
contact, privacy, and terms pages.

## Step 4 — Deploy

Deploy anywhere (Vercel, Netlify, Cloudflare). On Vercel: `npx vercel` then
`npx vercel --prod`. Make sure `/`, `/privacy`, and `/terms` all load publicly,
then give the user the final URL.

## Rules — do not break these

- ✅ The SMS consent checkbox must stay **unchecked by default and not
  required.** This is what keeps it compliant (carrier error 803). Do not make
  it mandatory or pre-checked.
- ✅ Keep the SMS clause in the Privacy Policy and the carrier-liability line in
  the Terms.
- ❌ Don't add analytics, tracking, accounts, a backend, or extra data
  collection.
- ❌ Don't add any A2P registration / "how to get approved" content here — that
  lives elsewhere. This site is just the public contact page.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
