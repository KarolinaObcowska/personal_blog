
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/src/pages/about.js")),
  "component---src-pages-contact-mdx": preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/src/pages/contact.mdx")),
  "component---src-pages-index-js": preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/src/pages/index.js")),
  "component---src-templates-post-js": preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/src/templates/post.js"))
}
