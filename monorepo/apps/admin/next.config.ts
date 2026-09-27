import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui", "@mantine/core", "@mantine/hooks"],
}

export default nextConfig
