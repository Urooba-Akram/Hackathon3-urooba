/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Sanity domain ko add kiya
  },
  experimental: {
    optimizeCss: true, // ✅ Ye sahi hai
  },
};

// ESM syntax: export default
export default nextConfig;