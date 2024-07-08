/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["images.ctfassets.net", "via.placeholder.com", "tailwindui.com"],
  },
};

export default nextConfig;
