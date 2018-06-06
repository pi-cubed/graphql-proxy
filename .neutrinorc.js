const ESLINT_RULES = {
    'comma-dangle': ['warn', 'never'],
    indent: 'off',
    'no-unused-vars': ['warn'],
    'no-confusing-arrow': 'off',
    'function-paren-newline': 'off',
    'no-console': 'off'
};

module.exports = {
    use: [
        [
            '@neutrinojs/airbnb-base',
            {
                eslint: {
                    rules: ESLINT_RULES
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
