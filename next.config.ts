/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {}, // statt turbo: false, ein leeres Objekt deaktiviert Turbo
  },
};

module.exports = nextConfig;
