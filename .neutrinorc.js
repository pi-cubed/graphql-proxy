const ESLINT_RULES = {
    'comma-dangle': ['warn', 'never'],
    indent: ['warn', 4],
    'no-unused-vars': ['warn']
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
