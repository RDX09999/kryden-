import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = ["", "/packages", "/destinations", "/hotels", "/flights", "/deals", "/about", "/contact", "/admin"];

  return urls.map((path) => ({
    url: `https://kryden.example${path}`,
    lastModified: new Date()
  }));
}
