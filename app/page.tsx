import { Generator } from "@/app/components/Generator";

export default function HomePage() {
  return (
    <>
      <section className="mkt-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="dot" /> A2P 10DLC made simple
          </span>
          <h1>
            Get approved to text your customers —
            <br />
            without the rejections.
          </h1>
          <p className="mkt-lead">
            Carriers require a real website with a compliant opt-in form, privacy
            policy, and terms before they&apos;ll let you send SMS from a 10-digit
            number — and those pages get rejected constantly. Enter your business
            details below and we&apos;ll generate everything you need: a
            ready-to-deploy contact site and every Telnyx / Twilio campaign field,
            pre-written for you to copy and paste.
          </p>
          <div className="mkt-steps-row">
            <span className="mkt-pill">1 · Enter your details</span>
            <span className="mkt-arrow">→</span>
            <span className="mkt-pill">2 · Deploy the site</span>
            <span className="mkt-arrow">→</span>
            <span className="mkt-pill">3 · Paste &amp; register</span>
          </div>
        </div>
      </section>

      <Generator />
    </>
  );
}
