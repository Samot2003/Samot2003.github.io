import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in ./out, deployable to GitHub Pages, Netlify or Vercel.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
