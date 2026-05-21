// ─────────────────────────────────────────────────────────────────────────
//  Campaign copy/paste content generator (marketing site).
//
//  Produces everything a person pastes into the Telnyx or Twilio campaign form,
//  from the details they enter on the homepage.
// ─────────────────────────────────────────────────────────────────────────

import { PLACEHOLDER_DEPLOY_URL } from "./marketing";

/** The details the user enters on the homepage. */
export type GenInput = {
  businessName: string;
  supportEmail: string;
  supportPhone: string;
};

export type AttrRow = {
  name: string;
  value: "Yes" | "No";
  note: string;
};

export type CampaignContent = {
  optinUrl: string;
  privacyUrl: string;
  termsUrl: string;
  useCase: string;
  description: string;
  messageFlow: string;
  samples: string[];
  optInKeywords: string;
  optOutKeywords: string;
  helpKeywords: string;
  optInReply: string;
  optOutReply: string;
  helpReply: string;
  attributes: AttrRow[];
};

/** Build all campaign copy/paste content from the entered details. */
export function buildCampaign(input: GenInput): CampaignContent {
  const businessName = input.businessName.trim() || "Your Business";
  const supportEmail = input.supportEmail.trim() || "support@yourbusiness.com";
  const supportPhone = input.supportPhone.trim();

  // The user fills in their real domain after they deploy; until then the
  // campaign links use a clearly-marked placeholder.
  const base = PLACEHOLDER_DEPLOY_URL.replace(/\/+$/, "");
  const optinUrl = base + "/";
  const privacyUrl = base + "/privacy";
  const termsUrl = base + "/terms";

  const contact = supportPhone
    ? `${supportEmail} or ${supportPhone}`
    : supportEmail;

  const description =
    `${businessName} sends conversational SMS messages to its own customers and ` +
    `prospective customers who have opted in. Messages include customer support ` +
    `replies, appointment and demo scheduling, confirmations, follow-up reminders, ` +
    `and service notifications related to ${businessName}'s own products and ` +
    `services. All messages are sent directly by ${businessName} regarding its own ` +
    `business — not on behalf of any third party. Every initial message identifies ` +
    `${businessName} and includes opt-out (Reply STOP) and help (Reply HELP) ` +
    `instructions.`;

  const messageFlow =
    `Contacts opt in to receive SMS messages by submitting the consent form at ` +
    `${optinUrl}, where they provide their name and phone number and may voluntarily ` +
    `check an unchecked, optional consent checkbox. The checkbox is NOT required to ` +
    `submit the form, so no opt-in is forced. The form clearly displays the sender ` +
    `name (${businessName}), that message frequency varies, that message and data ` +
    `rates may apply, and STOP/HELP instructions, with links to the Privacy Policy ` +
    `and Terms of Service. Contacts may also opt in by explicitly requesting SMS ` +
    `contact during a conversation with ${businessName}. Consent is never shared ` +
    `with third parties. Privacy Policy: ${privacyUrl}. Terms of Service: ${termsUrl}.`;

  const samples = [
    `Hi, this is ${businessName}. We received your inquiry and wanted to follow up — how can we help? Reply STOP to opt out or HELP for assistance. Msg & data rates may apply.`,
    `${businessName}: Your appointment is confirmed for Thursday at 2:00 PM. Reply YES to confirm, RESCHEDULE to change your time, or STOP to opt out.`,
    `Hi from ${businessName}! Following up on your recent question. We're here whenever you're ready. Reply HELP for support or STOP to unsubscribe.`,
    `${businessName} update: We've received your request and will notify you when there's an update. Reply STOP to opt out or HELP for assistance. Msg & data rates may apply.`,
    `${businessName} reminder: Your scheduled session is tomorrow at 10:00 AM. Reply STOP to cancel messages or HELP for support.`,
  ];

  const optInReply =
    `${businessName}: You're now subscribed to receive conversational SMS messages. ` +
    `Msg frequency varies. Msg & data rates may apply. Reply HELP for help or STOP to opt out.`;

  const optOutReply =
    `You have been unsubscribed from ${businessName} messages and will no longer ` +
    `receive SMS from this number. If this was a mistake, reply START. No further messages will be sent.`;

  const helpReply =
    `${businessName}: For help, contact ${contact}. Msg & data rates may apply. ` +
    `Reply STOP to unsubscribe.`;

  const attributes: AttrRow[] = [
    { name: "Subscriber opt-in", value: "Yes", note: "Consent collected on the opt-in web form (and verbally in conversation)." },
    { name: "Subscriber opt-out", value: "Yes", note: "STOP and related keywords are honored." },
    { name: "Subscriber help", value: "Yes", note: "HELP keyword returns the help reply." },
    { name: "Number pooling", value: "No", note: "Set Yes only if you assign more than one sending number to this campaign." },
    { name: "Embedded link", value: "No", note: "Set Yes only if a message contains a URL — and always use your own branded domain, never bit.ly / tinyurl." },
    { name: "Embedded phone number", value: supportPhone ? "Yes" : "No", note: "Yes if a message body contains a phone number other than the sending number (e.g. the HELP reply)." },
    { name: "Age-gated content", value: "No", note: "Only Yes for age-restricted content (alcohol, etc.)." },
    { name: "Direct lending / loan arrangement", value: "No", note: "Keep No unless you arrange loans." },
  ];

  return {
    optinUrl,
    privacyUrl,
    termsUrl,
    useCase: "Mixed (or “Low Volume Mixed” if you send low volume)",
    description,
    messageFlow,
    samples,
    optInKeywords: "START, UNSTOP",
    optOutKeywords: "STOP, END, QUIT, CANCEL, UNSUBSCRIBE",
    helpKeywords: "HELP, INFO",
    optInReply,
    optOutReply,
    helpReply,
    attributes,
  };
}
