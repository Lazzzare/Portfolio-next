// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;
// next.config.js;
const path = require("path");

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "",
        },
      },
    });

    return config;
  },
};
