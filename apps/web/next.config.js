const withTM = require("next-transpile-modules")(["ui"]);
const path = require("path");

module.exports = withTM({
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
});
