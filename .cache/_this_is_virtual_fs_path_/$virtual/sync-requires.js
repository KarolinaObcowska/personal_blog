
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/karolinaobcowska/Desktop/personal_blog/src/pages/index.js"))
}

