"use client";

import { useState } from "react";

type Props = {
  title: string;
  value: string;
  /** small helper note shown next to the title */
  sub?: string;
  /** show a live character count (useful for fields with limits) */
  showCount?: boolean;
  /** render single-line text instead of preformatted block */
  short?: boolean;
};

/** A labeled box of copy/paste text with a one-click "Copy" button. */
export function CopyField({ title, value, sub, showCount, short }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Fallback for older browsers / insecure contexts.
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="field-block">
      <div className="fb-head">
        <span className="fb-title">
          {title}
          {sub && <span className="fb-sub">{sub}</span>}
          {showCount && (
            <span className="fb-sub char-count">{value.length} chars</span>
          )}
        </span>
        <button
          type="button"
          className={`copy-btn${copied ? " copied" : ""}`}
          onClick={copy}
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <p className={`fb-body${short ? " short" : ""}`}>{value}</p>
    </div>
  );
}
