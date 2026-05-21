import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.businessName}, including how SMS opt-in data is handled.`,
};

const updated = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function PrivacyPage() {
  const { businessName, supportEmail } = siteConfig;

  return (
    <div className="page-narrow">
      <div className="container">
        <article className="prose">
          <h1>Privacy Policy</h1>
          <p className="updated">Last updated: {updated}</p>

          <p>
            This Privacy Policy describes how {businessName} (“{businessName},”
            “we,” “us,” or “our”) collects, uses, and protects information when
            you interact with us, including when you submit our opt-in form or
            receive text messages from us.
          </p>

          <h2>1. Information we collect</h2>
          <p>When you submit our opt-in form, we may collect:</p>
          <ul>
            <li>Your name;</li>
            <li>Your mobile phone number;</li>
            <li>
              Your consent preferences (including whether you opted in to receive
              SMS messages).
            </li>
          </ul>
          <p>
            We only collect the information you choose to provide. We do not
            purchase, rent, or import contact lists.
          </p>

          <h2>2. How we use your information</h2>
          <ul>
            <li>To respond to your inquiry and provide customer support;</li>
            <li>
              To send you the text messages you consented to receive, such as
              support replies, scheduling, confirmations, reminders, and service
              notifications;
            </li>
            <li>To operate, maintain, and improve our services;</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>3. SMS / mobile information sharing</h2>
          <p>
            <strong>
              No mobile information will be shared with third parties or
              affiliates for marketing or promotional purposes.
            </strong>{" "}
            Text messaging originator opt-in data and consent will not be shared
            with any third parties, except aggregators and service providers that
            help us deliver the messaging service. All other categories of
            information described in this policy exclude text messaging
            originator opt-in data and consent.
          </p>

          <h2>4. How we share information</h2>
          <p>
            We share information only as needed to operate our services — for
            example, with vendors and service providers (such as our SMS provider)
            that process information on our behalf and are bound to protect it. We
            may also disclose information when required by law. We do not sell your
            personal information.
          </p>

          <h2>5. Your choices and opt-out</h2>
          <p>
            If you opted in to SMS, you can opt out at any time by replying{" "}
            <strong>STOP</strong> to any message. For help, reply{" "}
            <strong>HELP</strong> or contact us at{" "}
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. Message
            frequency varies, and message and data rates may apply. Opting out of
            SMS does not affect any non-SMS communications you have requested.
          </p>

          <h2>6. Data retention</h2>
          <p>
            We retain your information only as long as necessary for the purposes
            described in this policy or as required by law, after which it is
            deleted or anonymized.
          </p>

          <h2>7. Data security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards
            to protect your information. No method of transmission or storage is
            completely secure, however, and we cannot guarantee absolute security.
          </p>

          <h2>8. Children&apos;s privacy</h2>
          <p>
            Our services are not directed to children under 13, and we do not
            knowingly collect information from them.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last
            updated” date above reflects the most recent revision.
          </p>

          <h2>10. Contact us</h2>
          <p>
            Questions about this policy? Contact {businessName} at{" "}
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
          </p>

          <p style={{ marginTop: 28 }}>
            <Link href="/">← Back to opt-in</Link> ·{" "}
            <Link href="/terms">SMS Terms of Service</Link>
          </p>
        </article>
      </div>
    </div>
  );
}
