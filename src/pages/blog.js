import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/Header"
import SEO from "../components/SEO"

export default function BlogIndex({
  data,
}) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO
        title="にっき"
        keywords={[`blog`]}
      />
      <Header />
      <div id="main">
        <section id="content" className="main">
          <h2>にっき</h2>
          {posts
            .map(node => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3>
                    <Link style={{ boxShadow: `none` }} to={`/posts${node.fields.slug}`}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
                </div>
              )
            })
          }
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
`
