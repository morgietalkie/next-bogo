// next.config.js
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCSS(withSass());

module.exports = {
  images: {
    domains: ["cdn.sanity.io", "via.placeholder.com", "images.ctfassets.net"],
  },
};
