import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/personal";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${personalInfo.fullName} — ${personalInfo.title}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #08090a 0%, #0d2b22 60%, #08090a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#10b981",
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          SM.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 48,
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 700, color: "#f4f4f5", lineHeight: 1.15 }}>
            {personalInfo.fullName}
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 34, color: "#6ee7b7" }}>
            {personalInfo.title}
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 24, color: "#a1a1aa", maxWidth: 880 }}>
            {personalInfo.industry}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
