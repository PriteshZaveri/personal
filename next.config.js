// next.config.js
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader"
      },
      {
        test: /\.(ttf|otf)$/,
        loader: "file-loader"
      }
    );
    return config;
  }
});
