import type { MetadataRoute } from "next";
import { content } from "@/lib/content";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${content.business.url}/sitemap.xml`,
    host: content.business.url,
  };
}
