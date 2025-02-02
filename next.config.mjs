/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Sanity domain ko add kiya
  },
  experimental: {
    optimizeFonts: false, // Font optimization ko disable kiya
  },
};

// ESM syntax: export default
export default nextConfig;