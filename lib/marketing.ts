// ─────────────────────────────────────────────────────────────────────────
//  Marketing-site constants.
//
//  👉 Set OSS_REPO_URL / OSS_REPO_SLUG to wherever you publish this repo. The
//  copy/paste agent prompt points people there and tells their coding agent to
//  use the `template/` folder (which is the deployable contact / opt-in site).
// ─────────────────────────────────────────────────────────────────────────

/** Full URL to the public repo people are sent to. */
export const OSS_REPO_URL = "https://github.com/Madewell-AI/madewell-a2p-optin";

/** owner/name form, used to build a `npx degit` command for the template folder. */
export const OSS_REPO_SLUG = "Madewell-AI/madewell-a2p-optin";

/** Folder inside the repo that holds the deployable opt-in site. */
export const TEMPLATE_DIR = "template";

/** Product / brand name for the marketing site itself. */
export const PRODUCT_NAME = "A2P Opt-In Kit";
export const PRODUCT_BY = "Madewell AI";

/** Shown in the live preview before the user types a real URL. */
export const PLACEHOLDER_DEPLOY_URL = "https://your-contact-site.com";
