/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "padmavatienterprise.com" },
      { protocol: "https", hostname: "**.googleapis.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
