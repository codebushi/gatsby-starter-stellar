let siteUrl = `https://cd-hisumi.github.io/`
module.exports = {
  flags: {
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
    FUNCTIONS: false,
  },
  siteMetadata: {
    title: "CoderDojo 東住吉",
    author: "CoderDojo Higashi-Sumiyoshi",
    description: "子どものプログラミング道場",
    excerpt: "大阪市東住吉区で不定期(隔月)開催している、子ども(小学生～高校生)のプログラミング道場です。",
    siteUrl: siteUrl,
    subDomain: `cd-hisumi`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'CoderDojo-Higashi-Sumiyoshi',
        short_name: 'CoderDojo',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
//    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "assets",
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-copy-files`,
      options: {
        source: `${__dirname}/content/assets`,
        destination: `/assets`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-emoji`,
            options: {
              emojiConversion: `toImage`,
              ascii: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{
          userAgent: `*`,
          disallow: ``,
        }],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              let posts = []
              allMarkdownRemark.nodes.forEach(node => {
                if (node.frontmatter.tags) {
                  posts.push(Object.assign({}, node.frontmatter, {
                      description: node.excerpt,
                      url: site.siteMetadata.siteUrl + `/posts${node.fields.slug}`,
                      guid: site.siteMetadata.siteUrl + `/posts${node.fields.slug}`,
                      custom_elements: [{ "content:encoded": node.html }],
                    })
                  )
                }
              })
              return posts
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt(pruneLength: 160)
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                      tags
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteUrl,
      },
    },
  ],
}
