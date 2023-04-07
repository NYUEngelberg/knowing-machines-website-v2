/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  rewrites: async () => [
    {
      source: "/critical-field-guide",
      destination: "/critical-field-guide.html",
    },
    {
      source: "/critical-field-guide-mob",
      destination: "/critical-field-guide-mob.html",
    },
  ],
};

module.exports = nextConfig;
