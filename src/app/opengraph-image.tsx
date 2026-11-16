import { ImageResponse } from "next/og";

export const alt = "LC DIGITAL — Digital Product Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#171323",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: 48,
            height: 4,
            background: "#6D28D9",
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#F8F7FA",
            marginBottom: 32,
            display: "flex",
          }}
        >
          <span style={{ color: "#6D28D9" }}>LC</span>
          <span>DIGITAL</span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#F8F7FA",
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 800,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          We build ideas into digital experiences.
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#C4B5FD",
            fontWeight: 400,
          }}
        >
          Digital Product Studio
        </div>
      </div>
    ),
    { ...size },
  );
}
