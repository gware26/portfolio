import type { NextConfig } from "next";

// All images are served from /public; no remote hosts are allowed through the
// image optimizer so it cannot be used as an open proxy.
const nextConfig: NextConfig = {};

export default nextConfig;
