import React from "react"
import { Link, graphql } from "gatsby"
import Header from '../components/Header'
import Layout from '../components/layout'
import Seo from '../components/SEO'

export default function tagPageTemplate({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo
        title={pageContext.tag}
        keywords={[pageContext.tag]}
      />
      <Header />
      <div id="main">
        <section id="content" className="main">
          <h2>{pageContext.tag}</h2>
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
  query($tag: String!) {
    allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {frontmatter: {tags: {eq: $tag}}}
    ) {
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

