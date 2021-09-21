const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/src/pages/about.js"))),
  "component---src-pages-contact-mdx": hot(preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/src/pages/contact.mdx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/src/pages/index.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/src/templates/post.js")))
}

