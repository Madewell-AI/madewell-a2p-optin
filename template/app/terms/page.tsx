import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "SMS Terms of Service",
  description: `Terms of Service and SMS messaging terms for ${siteConfig.businessName}.`,
};

const updated = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function TermsPage() {
  const { businessName, supportEmail, supportPhone } = siteConfig;
  const contact = supportPhone
    ? `${supportEmail} or ${supportPhone}`
    : supportEmail;

  return (
    <div className="page-narrow">
      <div className="container">
        <article className="prose">
          <h1>Terms of Service</h1>
          <p className="updated">Last updated: {updated}</p>

          <p>
            These Terms of Service (“Terms”) govern your use of services provided
            by {businessName} (“{businessName},” “we,” “us,” or “our”), including
            our SMS messaging program. By submitting our opt-in form or using our
            services, you agree to these Terms.
          </p>

          <h2>1. SMS messaging terms</h2>
          <p>
            By providing your mobile number and checking the consent box on our
            opt-in form (or by otherwise expressly requesting SMS contact), you
            agree to receive recurring text messages from {businessName}. These
            terms apply to that program:
          </p>
          <ul>
            <li>
              <strong>Program description:</strong> conversational and
              customer-care messages, including support replies, scheduling, demo
              and appointment confirmations, follow-up reminders, and service
              notifications related to our own products and services.
            </li>
            <li>
              <strong>Message frequency:</strong> message frequency varies based
              on your interactions with us.
            </li>
            <li>
              <strong>Cost:</strong> message and data rates may apply for messages
              sent to you from us and to us from you, according to your mobile
              carrier&apos;s plan.
            </li>
            <li>
              <strong>Opt-out:</strong> you can cancel at any time by replying{" "}
              <strong>STOP</strong> to any message. You will receive a final
              confirmation message and no further messages will be sent.
            </li>
            <li>
              <strong>Help:</strong> reply <strong>HELP</strong> for assistance,
              or contact us at {contact}.
            </li>
            <li>
              <strong>Rejoining:</strong> if you opt out, you can opt back in at
              any time by replying <strong>START</strong> or by submitting the
              opt-in form again.
            </li>
            <li>
              <strong>Carriers:</strong> carriers are not liable for delayed or
              undelivered messages. Supported carriers may change without notice.
            </li>
          </ul>

          <h2>2. Consent</h2>
          <p>
            Your consent to receive text messages is not a condition of any
            purchase. You represent that the mobile number you provide is yours
            and that you are authorized to consent to receive messages at that
            number.
          </p>

          <h2>3. Acceptable use</h2>
          <p>
            You agree to use our services lawfully and not to misuse, disrupt, or
            attempt to gain unauthorized access to them.
          </p>

          <h2>4. Disclaimers</h2>
          <p>
            Our services are provided “as is” and “as available” without
            warranties of any kind, whether express or implied, to the fullest
            extent permitted by law.
          </p>

          <h2>5. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {businessName} will not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from or related to your use of our services
            or the messaging program, including any delayed or undelivered
            messages.
          </p>

          <h2>6. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. The “Last updated” date
            above reflects the most recent revision. Continued use of our services
            after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>7. Contact us</h2>
          <p>
            Questions about these Terms? Contact {businessName} at{" "}
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
          </p>

          <p style={{ marginTop: 28 }}>
            <Link href="/">← Back to opt-in</Link> ·{" "}
            <Link href="/privacy">Privacy Policy</Link>
          </p>
        </article>
      </div>
    </div>
  );
}
