# Contact / Opt-In Site

A clean, ready-to-deploy "stay in touch" website that gives a business
everything a carrier needs to approve **A2P 10DLC** SMS registration — a real
contact page, a compliant opt-in checkbox, a privacy policy, and terms of
service — and nothing else.

It's designed to look like a normal business contact page, not a compliance
form. The form doesn't store or send anything.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Contact form: name, email, phone, and an **optional, unchecked** SMS consent checkbox with full disclosures |
| `/thank-you` | Confirmation after submitting |
| `/privacy` | Privacy Policy (includes the SMS non-sharing clause carriers look for) |
| `/terms` | Terms of Service (includes the carrier-liability disclaimer) |

## Quick start

```bash
npm install
npm run dev
```

## Make it yours

Edit **one file: `lib/site-config.ts`** — business name, support email, and
optional phone/website. That's it. The favicon, header, legal pages, and SMS
disclosures all update automatically.

Using an AI coding agent? Point it at this folder and say *"customize this for
my business and deploy it."* It'll read [`AGENTS.md`](./AGENTS.md), ask for the
details, and handle the rest.

## Deploy

It's a standard Next.js app. On Vercel:

```bash
npx vercel        # preview
npx vercel --prod # production
```

Make sure `/`, `/privacy`, and `/terms` all load publicly before you submit
your carrier registration.

## Important

The SMS consent checkbox is **unchecked by default and not required** — that's
deliberate. It's what prevents the most common A2P rejection (carrier error
803, "forced opt-in"). Don't make it mandatory or pre-checked.

> You're responsible for only texting people who genuinely opted in, and for
> following the TCPA, CTIA guidelines, and your carrier's rules.
