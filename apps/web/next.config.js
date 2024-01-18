const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  eslint: { ignoreDuringBuilds: true },
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "../../packages/ui-framer/dist/framer-images",
            to: "../public/framer-images",
          },
        ],
      })
    );
    return config;
  },
};
