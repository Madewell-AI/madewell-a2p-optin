import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/** Footer with the legal links a real business site carries (and that carriers
 *  expect to be reachable from the contact page). */
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <nav className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <a href={`mailto:${siteConfig.supportEmail}`}>Contact</a>
        </nav>
        <div className="footer-meta">
          © {year} {siteConfig.businessName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
