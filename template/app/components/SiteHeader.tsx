import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/** Simple top bar — reads like any normal business site. */
export function SiteHeader() {
  const initial = siteConfig.businessName.trim().charAt(0).toUpperCase() || "·";
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          <span className="brand-mark">{initial}</span>
          <span>{siteConfig.businessName}</span>
        </Link>
        <a className="header-note" href={`mailto:${siteConfig.supportEmail}`}>
          Contact
        </a>
      </div>
    </header>
  );
}
