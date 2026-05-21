import { PRODUCT_NAME, PRODUCT_BY, OSS_REPO_URL } from "@/lib/marketing";

export function MarketingHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="/" className="brand">
          <span className="brand-mark">A</span>
          <span>
            {PRODUCT_NAME}
            <span className="brand-by"> by {PRODUCT_BY}</span>
          </span>
        </a>
        <a
          className="header-note"
          href={OSS_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub ↗
        </a>
      </div>
    </header>
  );
}
