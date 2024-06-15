import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  }
});

export default nextConfig;

