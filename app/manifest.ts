import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KRYDEN Travel",
    short_name: "KRYDEN",
    description: "Premium travel booking platform",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [{ src: "/favicon.png", sizes: "32x32", type: "image/png" }]
  };
}
