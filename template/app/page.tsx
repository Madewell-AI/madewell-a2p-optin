import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { OptInForm } from "@/app/components/OptInForm";

export default function ContactPage() {
  return (
    <div className="page">
      <div className="container container-narrow">
        <div className="hero">
          <span className="eyebrow">
            <span className="dot" /> Stay in touch
          </span>
          <h1>Let&apos;s keep in touch with {siteConfig.businessName}</h1>
          <p>
            Leave your details and we&apos;ll follow up about your inquiry and
            keep you posted on the things that matter. Prefer to hear from us by
            text? Check the box below and we&apos;ll reach you there too.
          </p>
        </div>

        <OptInForm />

        <p className="fineprint">
          We respect your privacy. See our{" "}
          <Link href="/privacy">Privacy Policy</Link> and{" "}
          <Link href="/terms">Terms</Link>. Questions? Email{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
