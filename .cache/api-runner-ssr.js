var plugins = [{
      plugin: require('/Users/karolinaobcowska/Desktop/personal_blog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/karolinaobcowska/Desktop/personal_blog/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/Users/karolinaobcowska/Desktop/personal_blog/node_modules/gatsby-remark-images","id":"28c42f28-53d0-5cae-aad5-aee248175898","name":"gatsby-remark-images","version":"3.11.1","pluginOptions":{"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"defaultLayouts":{"default":"/Users/karolinaobcowska/Desktop/personal_blog/src/components/layout.js","posts":"/Users/karolinaobcowska/Desktop/personal_blog/src/components/layout.js"},"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images"}],"extensions":[".mdx"],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/karolinaobcowska/Desktop/personal_blog"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
