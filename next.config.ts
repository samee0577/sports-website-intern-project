import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "m.media-amazon.com",
      "ichef.bbci.co.uk",
      "encrypted-tbn0.gstatic.com",
      "cdn.nba.com",
      "static.independent.co.uk",
      "www.investopedia.com",
      "upload.wikimedia.org",
      "images.unsplash.com",
      "cdn.prod.website-files.com",
      "static01.nyt.com",
      "img.olympics.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
