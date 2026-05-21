// ─────────────────────────────────────────────────────────────────────────
//  👉 EDIT THIS FILE — it is the ONLY file you need to change.
//
//  Replace the values below with the business's real details, then deploy.
//  These values appear on the contact page, the thank-you page, and the
//  Privacy Policy + Terms. Nothing else personal is collected anywhere in
//  this project.
//
//  See AGENTS.md for the full step-by-step.
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  /**
   * Business / brand name. Shown in the header, footer, and legal pages, and
   * referenced in the SMS consent language. Use the name you registered (or
   * will register) your messaging brand under. Required.
   */
  businessName: "Northstar Services",

  /**
   * Customer-service email. Shown in the header, footer, and legal pages.
   * Required.
   */
  supportEmail: "support@northstarservices.example",

  /**
   * Customer-service phone, shown in the Terms. Optional —
   * set to "" to leave it out (the email is used instead).
   */
  supportPhone: "(555) 213-7700",

  /**
   * The business's main marketing website. Optional — set to "" to leave it
   * out. Used only as a friendly link in the footer.
   */
  websiteUrl: "https://www.northstarservices.example",
} as const;

export type SiteConfig = typeof siteConfig;
