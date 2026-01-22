// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["share.google", "i.pinimg.com"], // allow images from share.google
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "", // leave empty unless you need a specific port
        pathname: "/**", // allow all paths under share.google
      },
    ],
  },
};

export default nextConfig;
