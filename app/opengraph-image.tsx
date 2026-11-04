import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_ROLE } from "../lib/constants";

export const alt = `${SITE_NAME}: ${SITE_ROLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview card shown when the site is shared on LinkedIn, Slack or X.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#101217",
          color: "#F4F5F7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 8,
              background: "#FF5630",
              color: "#140804",
              fontSize: 34,
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            R
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>{SITE_NAME}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#FF6A47" }}>
            AI Agent Engineer · Full-Stack
          </div>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.02, letterSpacing: -2, display: "flex", flexWrap: "wrap" }}>
            I build AI agents that do real work,&nbsp;<span style={{ color: "#FF5630" }}>safely.</span>
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#A3A9B5" }}>ryanabir.space</div>
      </div>
    ),
    size,
  );
}
