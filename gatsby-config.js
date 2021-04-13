module.exports = {
  siteMetadata: {
    title: "CoderDojo東住吉",
    author: "CoderDojo Higashi-Sumiyoshi",
    description: "CoderDojo Higashi-Sumiyoshi, Osaka HomePage",
    siteUrl: `https://coderdojo-higashi-sumiyoshi.github.io/`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'CoderDojo-HigashiSumiyoshi',
        short_name: 'CoderDojo',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-feed`,
  ],
}
