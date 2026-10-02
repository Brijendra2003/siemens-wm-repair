import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name}: Washing machine repair in Mumbai, all major brands`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fffdfb",
          padding: 72,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -80,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "#ffe6d3",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 120,
            top: 150,
            width: 300,
            height: 340,
            borderRadius: 28,
            background: "#ffffff",
            border: "4px solid #dbe3ee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 30px 60px -20px rgba(11,42,91,.3)",
          }}
        >
          <div
            style={{
              width: 210,
              height: 210,
              borderRadius: 9999,
              background: "linear-gradient(135deg,#bfdbfe,#1d4ed8)",
              border: "18px solid #cbd5e1",
              display: "flex",
              marginTop: 40,
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 640 }}>
          <div style={{ fontSize: 22, letterSpacing: 5, color: "#ea580c", fontWeight: 700 }}>
            MUMBAI · DOORSTEP REPAIR
          </div>
          <div style={{ fontSize: 84, fontWeight: 800, color: "#0f172a", lineHeight: 1.02, marginTop: 18 }}>
            Washing Machine
          </div>
          <div style={{ fontSize: 84, fontWeight: 800, color: "#ea580c", lineHeight: 1.02 }}>Repair &amp; Service</div>
          <div style={{ fontSize: 30, color: "#334155", marginTop: 26 }}>All major brands · Clear quote · Warranty</div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 40, gap: 16 }}>
            <div
              style={{
                background: "#ea580c",
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                padding: "16px 28px",
                borderRadius: 16,
              }}
            >
              {site.phone.display}
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#0b2a5b" }}>{site.name}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
