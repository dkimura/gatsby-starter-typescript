import React from 'react'
import Link from 'gatsby-link'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from 'layouts'

type Props = {
  title: string
}

const IndexPage: React.FC<Props> = ({ title }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>
      Welcome to your new <strong>{title}</strong> site.
    </p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

const Index: React.FC = () => {
  const { site } = useStaticQuery<GatsbyTypes.IndexQuery>(graphql`
    query Index {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = site?.siteMetadata?.title || ''

  return <IndexPage title={title} />
}

export default Index
