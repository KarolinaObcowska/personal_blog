module.exports = {
    siteMetadata: {
        title: 'Blog Karolina Obcowska',
        description: 'Strona zbudowana przy pomocy Gatsby'
    },
    plugins: [
        'gatsby-plugin-emotion', 
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js')
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: 'posts'
            }
        }
    ]   
}