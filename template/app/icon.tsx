import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

// Auto-generated favicon: the business's initial on the same gradient as the
// header mark. This guarantees the site never ships with a boilerplate icon —
// it always looks like a real, finished business site.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const initial =
    siteConfig.businessName.trim().charAt(0).toUpperCase() || "•";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontSize: 40,
          fontWeight: 700,
          borderRadius: 14,
          background: "linear-gradient(135deg, #2563eb, #6366f1)",
        }}
      >
        {initial}
      </div>
    ),
    { ...size }
  );
}
