// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-mdx": () => import("./../../../src/pages/contact.mdx" /* webpackChunkName: "component---src-pages-contact-mdx" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-post-js": () => import("./../../../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */)
}

