"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/**
 * Contact / stay-in-touch form.
 *
 * This reads like an ordinary business signup form — name, email, phone — with
 * SMS as a clearly optional add-on. That optional SMS checkbox is also exactly
 * what keeps the messaging program compliant (it defeats TCR error 803,
 * "forced opt-in"):
 *   • The SMS-consent checkbox is its own field, UNCHECKED by default.
 *   • It is NOT required — the form submits whether or not it is ticked, so
 *     consent is genuinely optional and never forced.
 *   • Full disclosures (sender, frequency, rates, STOP/HELP, not-a-condition)
 *     and links to the Privacy Policy + Terms sit right next to the checkbox.
 *
 * Nothing is stored or sent — submitting simply shows the thank-you page.
 */
export function OptInForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false); // unchecked by default
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Contact details are required so the form behaves like a real one.
    // The consent checkbox is deliberately NOT required.
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Please enter your name, email, and phone number.");
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      router.push(`/thank-you${smsConsent ? "?sms=1" : ""}`);
    }, 450);
  };

  return (
    <form className="card card-pad" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={submitting}
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
          />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={submitting}
          />
        </div>

        <div className="consent">
          <div className="row">
            <input
              id="smsConsent"
              name="smsConsent"
              type="checkbox"
              checked={smsConsent}
              onChange={(e) => setSmsConsent(e.target.checked)}
              disabled={submitting}
            />
            <label htmlFor="smsConsent">
              <span className="optional-tag">Optional</span> Yes, text me too. I
              agree to receive recurring conversational and customer-care text
              messages from {siteConfig.businessName} at the number provided
              (support replies, scheduling, confirmations, and reminders).
              Consent is not a condition of any purchase. Message frequency
              varies. Message and data rates may apply. Reply STOP to opt out or
              HELP for help. See our <Link href="/privacy">Privacy Policy</Link>{" "}
              and <Link href="/terms">SMS Terms</Link>.
            </label>
          </div>
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={submitting}
        >
          {submitting ? "Submitting…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
