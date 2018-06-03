const { introspectionQuery } = require('graphql');
const { GraphQLClient } = require('graphql-request');

const request = async (_, { url, query, mutation }) => {
    const client = new GraphQLClient(url);
    const data = await client.request(query || mutation);
    return JSON.stringify(data);
};

const getSchema = async (_, { url }) => {
    const client = new GraphQLClient(url);
    return JSON.stringify(await client.request(introspectionQuery));
};

const resolvers = {
    Query: {
        getSchema,
        query: request
    },
    Mutation: {
        mutate: request
    }
};

const proxyServer = 0;

const withProxy = options => server => server;

export default withProxy;
