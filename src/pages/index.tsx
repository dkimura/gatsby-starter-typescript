import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from 'layouts'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
type IndexPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>
      Welcome to your new <strong>{data.site.siteMetadata.title}</strong> site.
    </p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
