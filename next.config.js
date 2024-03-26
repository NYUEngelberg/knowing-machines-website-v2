/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  rewrites: async () => [
    {
      source: "/models-all-the-way",
      destination: "/models-all-the-way.html",
    },
    {
      source: "/critical-field-guide",
      destination: "/critical-field-guide.html",
    },
    {
      source: "/critical-field-guide-mob",
      destination: "/critical-field-guide-mob.html",
    },
  ],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = nextConfig;
