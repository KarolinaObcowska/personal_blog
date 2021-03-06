module.exports = {
    siteMetadata: {
        title: 'Blog Karolina Obcowska',
        description: 'Strona zbudowana przy pomocy Gatsby'
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
          resolve: 'gatsby-plugin-mdx',
          options: {
            defaultLayouts: {
              default: require.resolve('./src/components/layout.js'),
              posts: require.resolve("./src/components/layout.js"),
            },
            gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
            plugins: [{ resolve: 'gatsby-remark-images' }],
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'posts',
            path: `${__dirname}/posts`,
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'images',
            path: 'images',
          },
        },
        {
          resolve: 'gatsby-source-instagram',
          options: {
            username: '1694433690',
          },
        },
      ], 
}

