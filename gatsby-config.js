module.exports = {
  siteMetadata: {
    title: "CoderDojo東住吉",
    author: "CoderDojo Higashi-Sumiyoshi",
    description: "子どものプログラミング道場",
    excerpt: "大阪市東住吉区で不定期(隔月)で開催される子ども(小学生～高校生)のプログラミング道場です。",
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
