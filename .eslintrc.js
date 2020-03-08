module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['globis'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/gatsby/*.{js,ts}',
          '**/gatsby-*.{js,ts}',
          '**/*.spec.{ts,tsx}',
          '**/*.stories.{ts,tsx}',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        paths: ['./src', './node_modules'],
      },
    },
  },
}
