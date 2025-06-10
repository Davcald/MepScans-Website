import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: "/MepScans-Website",
  // assetPrefix: "/MepScans-Website/",
  // trailingSlash: true,
};

export default nextConfig;
