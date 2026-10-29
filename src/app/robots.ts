import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: site.links.home,
      disallow: ["/api", site.links.thanks],
    },
    sitemap: new URL("/sitemap.xml", site.url).href,
  };
}
