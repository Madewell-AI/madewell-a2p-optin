import { PRODUCT_NAME, PRODUCT_BY, OSS_REPO_URL } from "@/lib/marketing";

export function MarketingFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <nav className="footer-links">
          <a href={OSS_REPO_URL} target="_blank" rel="noopener noreferrer">
            Open-source repo
          </a>
          <a href="#generator">Generator</a>
          <a href="#register">Registration guide</a>
        </nav>
        <div className="footer-meta">
          © {year} {PRODUCT_NAME} · Open source by {PRODUCT_BY}. Free to use.
        </div>
      </div>
    </footer>
  );
}
