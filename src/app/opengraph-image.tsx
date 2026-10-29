import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = site.productName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 76px",
        background: `linear-gradient(125deg, white 25%, ${site.colors.brandSoft} 100%)`,
        fontFamily: "sans-serif",
        color: site.colors.brandHover,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 30,
          fontWeight: 700,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 46,
            height: 46,
            borderRadius: 13,
            alignItems: "center",
            justifyContent: "center",
            background: site.colors.brand,
            color: "white",
            fontSize: 32,
          }}
        >
          ↗
        </div>
        {site.name}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1.08,
          }}
        >
          {site.hero.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1.08,
            color: site.colors.brand,
          }}
        >
          {site.hero.accent}
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 23 }}
      >
        <div
          style={{
            display: "flex",
            height: 2,
            width: 46,
            background: site.colors.brand,
          }}
        />
        {site.footer.tagline}
      </div>
    </div>,
    size,
  );
}
