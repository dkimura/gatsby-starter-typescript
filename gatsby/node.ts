import path from 'path'

import { GatsbyNode } from 'gatsby'

const config: GatsbyNode = {
  onCreateWebpackConfig: ({ actions }) => {
    const srcPath = path.resolve(__dirname, '../src')

    actions.setWebpackConfig({
      resolve: {
        modules: ['node_modules', srcPath],
      },
    })
  },
}

export default config
