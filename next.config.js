const withOffline = require("next-offline");
const withSass = require("@zeit/next-sass");

module.exports = withOffline(
  withSass({
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "postcss-loader"]
        },
        {
          test: /\.jsx?$/,
          use: ["babel-loader", "astroturf/loader"]
        }
      ]
    }
  })
);
