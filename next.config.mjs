/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "standalone",  // ✅ important for Netlify
  experimental: {
    appDir: true,          // if you are using the app/ folder
  },
}

export default nextConfig
