import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Optional: disables lint errors during build
  },
};

export default nextConfig;
