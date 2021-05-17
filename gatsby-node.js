/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    actions.createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  let tags = {}
  result.data.allMarkdownRemark.nodes.forEach(node => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        tags[tag] = true
      })
      createPage({
        path: `/posts${node.fields.slug}`,
        component: path.resolve(`./src/templates/blogTemplate.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
        },
      })
    }
  })
  for(tag in tags) {
    createPage({
      path: `/tag/${tag}`,
      component: path.resolve(`./src/templates/tagPageTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        tag: tag,
      },
    })
  }
}
