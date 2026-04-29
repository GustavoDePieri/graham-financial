import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // GitHub Pages — produce a static export under ./out
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    // Static export can't use the Image Optimization API.
    unoptimized: true,
  },
  // Set NEXT_PUBLIC_BASE_PATH only when hosting under a subpath
  // (e.g. https://username.github.io/repo-name → "/repo-name").
  // Leave unset for a custom domain or user/org page.
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
