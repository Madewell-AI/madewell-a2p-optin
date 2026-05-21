import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Thank You",
  description: `Thanks for reaching out to ${siteConfig.businessName}.`,
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ sms?: string }>;
}) {
  const { sms } = await searchParams;
  const optedIn = sms === "1";

  return (
    <div className="page">
      <div className="container container-narrow">
        <div className="card card-pad" style={{ textAlign: "center" }}>
          <div className="success-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 style={{ fontSize: 24, marginBottom: 10 }}>You&apos;re all set</h1>
          <p style={{ margin: "0 auto", maxWidth: 460 }}>
            Thanks — your information has been received. Someone from{" "}
            {siteConfig.businessName} will be in touch soon.
            {optedIn ? (
              <>
                {" "}
                You opted in to SMS, so we may also text you. Message frequency
                varies and message and data rates may apply. Reply STOP to opt
                out or HELP for help at any time.
              </>
            ) : null}
          </p>

          <div style={{ marginTop: 24 }}>
            <Link href="/" className="btn btn-secondary">
              Back to start
            </Link>
          </div>
        </div>

        <p className="fineprint">
          Questions? Email{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
