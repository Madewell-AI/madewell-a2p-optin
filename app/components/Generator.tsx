"use client";

import { useMemo, useState } from "react";
import { CopyField } from "@/app/components/CopyField";
import { buildCampaign, type GenInput } from "@/lib/campaign-content";
import { buildAgentPrompt } from "@/lib/agent-prompt";

export function Generator() {
  const [businessName, setBusinessName] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [supportPhone, setSupportPhone] = useState("");
  const [provider, setProvider] = useState<"telnyx" | "twilio">("telnyx");

  const input: GenInput = useMemo(
    () => ({ businessName, supportEmail, supportPhone }),
    [businessName, supportEmail, supportPhone]
  );

  const prompt = useMemo(() => buildAgentPrompt(input), [input]);
  const c = useMemo(() => buildCampaign(input), [input]);

  return (
    <div id="generator" className="container gen">
      {/* ── details form ──────────────────────────────────────────── */}
      <form className="gen-form card card-pad" onSubmit={(e) => e.preventDefault()}>
        <h2 className="gen-h2">Your details</h2>
        <p className="gen-sub">
          Enter your business info. The prompt for your coding agent and the
          carrier registration fields below update instantly.
        </p>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="biz">Business / brand name *</label>
            <input
              id="biz"
              type="text"
              placeholder="Northstar Services"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="mail">Customer-service email *</label>
            <input
              id="mail"
              type="email"
              inputMode="email"
              placeholder="support@northstarservices.com"
              value={supportEmail}
              onChange={(e) => setSupportEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="ph">Customer-service phone (optional)</label>
            <input
              id="ph"
              type="tel"
              inputMode="tel"
              placeholder="(555) 213-7700"
              value={supportPhone}
              onChange={(e) => setSupportPhone(e.target.value)}
            />
          </div>
        </div>
      </form>

      {/* ── Step 1: deploy via agent prompt ────────────────────────── */}
      <section id="deploy" className="gen-step">
        <h2>
          <span className="step-badge">1</span> Deploy your contact site
        </h2>
        <p className="gen-step-lead">
          Copy this prompt and paste it to your coding agent (Claude Code,
          Cursor, etc.). It points the agent at the open-source template and has
          it deploy the site with your details — you get back one public URL.
        </p>
        <CopyField title="Prompt for your coding agent" value={prompt} />
        <p className="muted-note">
          No coding agent? You can clone the repo and edit{" "}
          <code>lib/site-config.ts</code> yourself — see the repo README.
        </p>
      </section>

      {/* ── Step 2: register the campaign ──────────────────────────── */}
      <section id="register" className="gen-step">
        <h2>
          <span className="step-badge">2</span> Register your A2P campaign
        </h2>
        <p className="gen-step-lead">
          Once your site is live, register with the carrier. Below is every
          field, pre-written with your details — just copy and paste. The
          compliance content is identical for Telnyx and Twilio; only the portal
          steps differ.
        </p>

        <div className="tabs" role="tablist">
          <button
            type="button"
            className={`tab-btn${provider === "telnyx" ? " active" : ""}`}
            onClick={() => setProvider("telnyx")}
          >
            Telnyx
          </button>
          <button
            type="button"
            className={`tab-btn${provider === "twilio" ? " active" : ""}`}
            onClick={() => setProvider("twilio")}
          >
            Twilio
          </button>
        </div>

        {provider === "telnyx" ? (
          <ol className="steps">
            <li>
              <strong>Register your Business Brand.</strong>
              <p className="substep">
                Mission Control → Messaging → Compliance → Brands. Enter your
                legal business name, EIN, address, website, and contact. You can
                use your contact site as the website. You&apos;ll get a Trust
                Score.
              </p>
            </li>
            <li>
              <strong>Create a 10DLC Campaign.</strong>
              <p className="substep">
                Compliance → Campaigns → Create Campaign. Select your Brand, Use
                Case (<em>Mixed</em>, or <em>Low Volume Mixed</em> for light
                volume), and Vertical.
              </p>
            </li>
            <li>
              <strong>Paste the description &amp; message flow</strong> from
              below.
            </li>
            <li>
              <strong>Add the five sample messages.</strong>
            </li>
            <li>
              <strong>Set keywords &amp; auto-replies</strong> from below.
            </li>
            <li>
              <strong>Set the campaign &amp; content attributes</strong> per the
              table.
            </li>
            <li>
              <strong>Add your Privacy Policy and Terms URLs.</strong>
            </li>
            <li>
              <strong>Submit for review</strong> (~$15 carrier fee). When
              approved, assign your phone number(s) to the campaign.
            </li>
          </ol>
        ) : (
          <ol className="steps">
            <li>
              <strong>Create a Customer Profile &amp; Brand in Trust Hub.</strong>
              <p className="substep">
                Console → Messaging → Regulatory Compliance → A2P 10DLC. Enter
                your legal business info and EIN. Standard brands are
                auto-submitted for secondary vetting.
              </p>
            </li>
            <li>
              <strong>Create an A2P Campaign / Use Case</strong> — choose{" "}
              <em>Standard &ldquo;Mixed&rdquo;</em>, or <em>Low Volume Mixed</em>{" "}
              for light volume.
            </li>
            <li>
              <strong>Paste the description &amp; Call-to-Action</strong> from
              below, and add at least two sample messages (use all five).
            </li>
            <li>
              <strong>Opt-in / opt-out / help.</strong>
              <p className="substep">
                Twilio can auto-handle STOP/HELP (Advanced Opt-Out) — if you keep
                the defaults you don&apos;t need to type keywords. Otherwise paste
                the keywords and replies below.
              </p>
            </li>
            <li>
              <strong>Add Privacy Policy + Terms URLs</strong> and set the
              embedded-link / embedded-phone flags per the table.
            </li>
            <li>
              <strong>Submit for review.</strong> When approved, attach the
              campaign to a Messaging Service and add your number(s).
            </li>
          </ol>
        )}

        <h3 className="gen-h3">Your compliance links</h3>
        <div className="warn-banner">
          <strong>Note:</strong> these use a placeholder domain. Replace{" "}
          <code>{c.privacyUrl.replace(/\/privacy$/, "")}</code> with your real
          site URL once it&apos;s deployed.
        </div>
        <CopyField title="Contact / opt-in page URL" value={c.optinUrl} short />
        <CopyField title="Privacy Policy URL" value={c.privacyUrl} short />
        <CopyField title="Terms of Service URL" value={c.termsUrl} short />

        <h3 className="gen-h3">Campaign fields</h3>
        <CopyField title="Use case" value={c.useCase} short />
        <CopyField
          title="Campaign description"
          sub="≈40–4,096 chars"
          value={c.description}
          showCount
        />
        <CopyField
          title="Message flow / Call-to-Action"
          sub="the field that fixes error 803/804"
          value={c.messageFlow}
          showCount
        />

        <h3 className="gen-h3">Sample messages</h3>
        {c.samples.map((s, i) => (
          <CopyField key={i} title={`Sample message ${i + 1}`} value={s} showCount />
        ))}

        <h3 className="gen-h3">Keywords</h3>
        <CopyField title="Opt-in keywords" value={c.optInKeywords} short />
        <CopyField title="Opt-out keywords" value={c.optOutKeywords} short />
        <CopyField title="Help keywords" value={c.helpKeywords} short />

        <h3 className="gen-h3">Auto-response messages</h3>
        <CopyField title="Opt-in confirmation reply" value={c.optInReply} showCount />
        <CopyField title="Opt-out (STOP) reply" value={c.optOutReply} showCount />
        <CopyField
          title="Help (HELP) reply"
          sub="≈20–320 chars"
          value={c.helpReply}
          showCount
        />

        <h3 className="gen-h3">Campaign &amp; content attributes</h3>
        <table className="attr-table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Set to</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            {c.attributes.map((a) => (
              <tr key={a.name}>
                <td>{a.name}</td>
                <td>
                  <span className={`val ${a.value === "Yes" ? "yes" : "no"}`}>
                    {a.value}
                  </span>
                </td>
                <td className="note">{a.note}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="gen-h3">Common rejections &amp; how to fix them</h3>
        <div className="reject">
          <div>
            <span className="code">803</span>
            <span className="title">
              Forced opt-in (checkbox missing / required / pre-checked)
            </span>
          </div>
          <p className="fix">
            <strong>Already handled.</strong> The template&apos;s checkbox is
            separate, unchecked, and optional — leave it that way.
          </p>
        </div>
        <div className="reject">
          <div>
            <span className="code">804 / 30909</span>
            <span className="title">Call-to-Action / message flow insufficient</span>
          </div>
          <p className="fix">
            <strong>Fix:</strong> use the full Message flow above — it names the
            opt-in URL, optional checkbox, frequency, rates, STOP/HELP, and the
            policy links.
          </p>
        </div>
        <div className="reject">
          <div>
            <span className="code">805 / 30908</span>
            <span className="title">
              Privacy policy missing or allows sharing mobile data
            </span>
          </div>
          <p className="fix">
            <strong>Fix:</strong> the template&apos;s Privacy Policy already
            states mobile opt-in data is never shared. Keep that clause.
          </p>
        </div>
        <div className="reject">
          <div>
            <span className="code">30891</span>
            <span className="title">Website invalid / under construction</span>
          </div>
          <p className="fix">
            <strong>Fix:</strong> deploy first and make sure the contact page,
            Privacy, and Terms all load publicly before submitting.
          </p>
        </div>

        <h3 className="gen-h3">Final checklist</h3>
        <ul className="checklist">
          <li>Site deployed; home, /privacy, and /terms all load publicly.</li>
          <li>Consent checkbox is unchecked by default and not required.</li>
          <li>Campaign description &amp; message flow pasted.</li>
          <li>All five sample messages added.</li>
          <li>Opt-in / opt-out / help keywords and replies set.</li>
          <li>Privacy Policy and Terms URLs added (with your real domain).</li>
          <li>Campaign &amp; content attributes set per the table.</li>
          <li>Screenshot of the live contact page saved for upload.</li>
        </ul>
      </section>
    </div>
  );
}
