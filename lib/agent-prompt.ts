// Builds the copy/paste prompt a user hands to their own coding agent. It points
// the agent at the open-source template and tells it to deploy ONLY the opt-in
// site — no registration/wizard content, which lives here on the marketing site.

import { OSS_REPO_URL, OSS_REPO_SLUG, TEMPLATE_DIR } from "./marketing";
import type { GenInput } from "./campaign-content";

export function buildAgentPrompt(input: GenInput): string {
  const businessName = input.businessName.trim() || "<your business name>";
  const supportEmail = input.supportEmail.trim() || "<your support email>";
  const supportPhone = input.supportPhone.trim();
  const degit = `${OSS_REPO_SLUG}/${TEMPLATE_DIR}`;

  return `I want to deploy a small public "contact / stay-in-touch" website so my business can get approved for A2P 10DLC SMS registration. Please set it up and deploy it for me.

Use this open-source template: ${OSS_REPO_URL}
Use ONLY the \`${TEMPLATE_DIR}/\` folder — it is the complete site: a contact page, a thank-you page, a privacy policy, and terms of service. Do not add anything else — no analytics, no backend, no extra pages, and no "A2P"/registration content. It should look like a normal business contact page.

Steps:
1. Get the template folder, e.g.:
   npx degit ${degit} my-contact-site
   (or clone the repo and copy the \`${TEMPLATE_DIR}\` folder)
2. Open \`lib/site-config.ts\` and set these values:
   businessName: "${businessName}"
   supportEmail: "${supportEmail}"
   supportPhone: "${supportPhone}"
   (If I have a main marketing website, ask me for it and set websiteUrl too — otherwise leave it as "".)
3. IMPORTANT: do not modify the SMS consent checkbox. It must stay UNCHECKED by default and NOT required to submit. That is what keeps the site compliant (it prevents carrier rejection error 803, "forced opt-in").
4. Run it locally (npm install && npm run dev) and confirm my business name and email appear correctly on the home, /privacy, and /terms pages.
5. Deploy it (npx vercel --prod, or any host) and send me back the final public URL.

The public URL is the only thing I need back — I'll handle the carrier registration myself.`;
}
