/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}
      limit: 1000) {
        nodes {
          id
          parent {
            ... on File {
              name
              relativeDirectory
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/posts/${node.parent.relativeDirectory}/${node.parent.name}`,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        id: node.id,
      },
    })
  })
}
