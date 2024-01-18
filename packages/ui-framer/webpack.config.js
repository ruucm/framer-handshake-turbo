const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const config = {
  entry: {
    index: "./src/index.ts",
    handshaked: {
      import: "./src/handshaked/index.ts",
      filename: "handshaked/index.js",
    },
    // consts: { import: "./src/consts/index.ts", filename: "consts/index.js" },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    globalObject: "this", // https://stackoverflow.com/a/64639975/4047204
    publicPath: "/",
    assetModuleFilename: "framer-images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!framer)/,
        use: [
          {
            loader: "babel-loader",
            options: { configFile: "babelconfig/base.json" },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules\/(?!framer)/,
        use: [
          {
            loader: "babel-loader",
            options: { configFile: "babelconfig/base.json" },
          },
          "ts-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css/,
        use: ["css-loader"], // remove style-loader (https://github.com/vercel/next.js/discussions/14060#discussioncomment-27889)
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: { process: false },
    alias: {
      "@/views": path.resolve(__dirname, "src/views/"),
      "@/handshaked": path.resolve(__dirname, "src/handshaked/"),
      "@/consts": path.resolve(__dirname, "src/consts/"),
      "@/hooks": path.resolve(__dirname, "src/hooks/"),
      "@/utils": path.resolve(__dirname, "src/utils/"),
    },
  },
  externals: {
    react: "react",
    framer: "framer",
    "framer-motion": "framer-motion",
    popmotion: "popmotion",
  },
  experiments: {
    buildHttp: {
      allowedUris: [
        "https://framer.com/m/",
        "https://framerusercontent.com/",
        "https://fonts.gstatic.com/",
        "https://ga.jspm.io/",
        "https://jspm.dev/",
        "https://cdn.skypack.dev/",
        "http://127.0.0.1:9001/",
        // eslint-disable-next-line
        /\S+((.)?ngrok\.io(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/,
        // eslint-disable-next-line
        /\S+((.)?s3\.ap-southeast-2\.amazonaws\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/,
      ],
      keepVersions: false,
    },
  },
  plugins: [new CleanWebpackPlugin()],
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.optimization = {
      minimize: true,
      minimizer: [
        // Framer Icon components are using dynamic imports  with Webpack's magic-comments not to include all icon assets.
        // But comments are stripped out in production build, so it looks different in dev mode.
        // Used Terser plugin to preserve those comments, and it works fine.
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: /webpackIgnore/i,
            },
          },
          extractComments: true,
        }),
      ],
    };
  }

  return config;
};
