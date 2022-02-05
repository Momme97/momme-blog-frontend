module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGEURL],
    path: '/_next/image'
  },
  future: { webpack5: true },
}
const withTM = require("next-transpile-modules")(["react-syntax-highlighter"]);

module.exports = withTM({
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGEURL],
    path: '/_next/image'

  },
  future: { webpack5: true },
});