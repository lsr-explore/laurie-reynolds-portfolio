import { ImageResponse } from "next/og";

export const alt =
  "Laurie Reynolds — Senior Front-End Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f5f0eb",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(to right, #3d5a80, #2a6b5a, #3d5a80)",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 300,
            color: "#1a1a1a",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Laurie Reynolds
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 28,
            color: "#3d5a80",
            marginBottom: "40px",
          }}
        >
          Senior Front-End Software Engineer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#5c534a",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Crafting Frontend Systems that power meaningful work
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            display: "flex",
            gap: "12px",
            fontSize: 16,
            color: "#5c534a",
          }}
        >
          <span>Payments</span>
          <span style={{ color: "#d4c9bd" }}>·</span>
          <span>Medical Software</span>
          <span style={{ color: "#d4c9bd" }}>·</span>
          <span>Accessibility</span>
          <span style={{ color: "#d4c9bd" }}>·</span>
          <span>Civic Technology</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
