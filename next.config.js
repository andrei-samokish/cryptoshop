<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
    GOERLI_PRIVATE_KEY: process.env.GOERLI_PRIVATE_KEY,
    NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS:
      process.env.NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS,
  },
};

module.exports = nextConfig;
=======
// /** @type {import('next').NextConfig} */

// module.exports = {
//     reactStrictMode: false,
//     webpack5: true,
//     webpack: (config) => {
//         config.resolve.fallback = {fs: false}
//         return config;
//     },
// }
>>>>>>> front
