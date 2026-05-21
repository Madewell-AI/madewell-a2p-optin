import type { Metadata } from "next";
import { PRODUCT_NAME, PRODUCT_BY } from "@/lib/marketing";
import { MarketingHeader } from "@/app/components/MarketingHeader";
import { MarketingFooter } from "@/app/components/MarketingFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${PRODUCT_NAME} — get approved for A2P 10DLC texting`,
    template: `%s | ${PRODUCT_NAME}`,
  },
  description: `Deploy a compliant SMS opt-in site and get every Telnyx / Twilio A2P 10DLC campaign field pre-written for you. Free and open source by ${PRODUCT_BY}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MarketingHeader />
        <main className="app-main">{children}</main>
        <MarketingFooter />
      </body>
    </html>
  );
}
