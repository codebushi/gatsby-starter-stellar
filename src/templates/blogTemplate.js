import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/SEO'

export default function blogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, html, excerpt } = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={excerpt}
      />
      <div id="main">
        <section id="content" className="main">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
