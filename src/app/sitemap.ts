import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL(site.links.home, site.url).href,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL(site.links.privacy, site.url).href,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: new URL(site.links.terms, site.url).href,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
