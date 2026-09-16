import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.fullName} - ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#101319";
const green = "#13765C";
const accent = "#EEC32B";
const paper = "#F6F7F9";
const muted = "#5B6472";

export default function OpenGraphImage() {
  const host = siteConfig.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: paper,
          backgroundImage:
            "linear-gradient(to right, rgba(16,19,25,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,19,25,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: ink,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: green,
              border: `2px solid ${ink}`,
              boxShadow: `5px 5px 0 ${ink}`,
              color: "#fff",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            {siteConfig.initials}
            <div
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 12,
                height: 12,
                borderRadius: 999,
                background: accent,
                border: `1.5px solid ${ink}`,
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 2, color: green }}>[PORTFOLIO / 2026]</div>
            <div style={{ fontSize: 20, color: muted }}>{siteConfig.location}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 108, fontWeight: 900, lineHeight: 0.95, letterSpacing: -4 }}>{siteConfig.fullName}</div>
          <div style={{ fontSize: 40, fontWeight: 700, color: green, lineHeight: 1.1 }}>{siteConfig.title}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {["MERN", "PHP / MySQL", "REST APIs", "AI features"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: `2px solid ${ink}`,
                  background: "#fff",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, color: muted }}>{host}</div>
        </div>
      </div>
    ),
    size
  );
}
