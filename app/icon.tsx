import { ImageResponse } from "next/og";

// Branded favicon for the marketing site — never ships boilerplate.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 38,
          fontWeight: 700,
          borderRadius: 14,
          background: "linear-gradient(135deg, #2563eb, #6366f1)",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
