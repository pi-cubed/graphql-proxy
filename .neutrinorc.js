module.exports = {
  use: [
    [
      '@neutrinojs/airbnb-base',
      {
        eslint: {
          rules: {
            'arrow-parens': ['error', 'as-needed'],
            'no-multi-assign': 'off',
            'function-paren-newline': 'off',
            'comma-dangle': 'off',
            'no-console': 'off',
            'arrow-body-style': 'off',
            'no-throw-literal': 'off',
            'object-curly-newline': 'off',
            'no-unused-vars': 'off',
            indent: ['error', 4]
          }
        }
      }
    ],
    [
      '@neutrinojs/library',
      {
        name: 'graphql-proxy',
        target: 'node'
      }
    ],
    '@neutrinojs/jest'
  ]
};
