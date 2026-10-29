import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: site.colors.brand, color: site.colors.onAccent, borderRadius: 16, fontSize: 48 }}>↗</div>, size);
}
