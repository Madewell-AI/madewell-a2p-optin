import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} — Stay in touch`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `Get in touch with ${siteConfig.businessName} and stay up to date. View our Privacy Policy and Terms.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="app-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
