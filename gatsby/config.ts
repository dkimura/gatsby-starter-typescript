import { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Gatsby Typescript Starter',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-typescript'],
}

export default config
