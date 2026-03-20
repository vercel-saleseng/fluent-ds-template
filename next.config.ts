// next.config.js
// fluentui-next-appdir-directive runs as an SWC plugin on webpack’s pipeline.
// Next 16 defaults to Turbopack for dev/build; Turbopack does not apply swcPlugins
// the same way, so package.json uses --webpack for dev/build.

const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next inferred ~/package-lock.json as workspace root; pin the app directory.
  turbopack: {
    root: path.join(__dirname),
  },
  experimental: {
    swcPlugins: [
      [
        "fluentui-next-appdir-directive",
        {
          paths: [
            "@griffel",
            "@fluentui",
            // 👇 you can add another dependency that needs the directive
          ],
        },
      ],
    ],
  },
  // 👇 packages that need the directive
  transpilePackages: ["@fluentui/react-components"],
};

module.exports = nextConfig;
