import path from "node:path";
import type { NextConfig } from "next";

const wgslLoader = "@vgpu/wgsl/loader-webpack";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
    rules: {
      "*.wgsl": { loaders: [wgslLoader], as: "*.js" },
    },
  },
  webpack(config) {
    config.module.rules.push({ test: /\.wgsl$/, loader: wgslLoader });
    return config;
  },
};

export default nextConfig;
