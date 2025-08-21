// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* turbopack: { disabled: true }, */
  output: 'export',
  images: { unoptimized: true }, // needed for static export if you use next/image
  // optional:
  // trailingSlash: true,
};
export default nextConfig;
