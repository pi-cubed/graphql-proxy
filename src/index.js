import { introspectionQuery } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { GraphQLServer } from 'graphql-yoga';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

/**
 * TODO docs
 */
const getSchema = async (_, { url }) => {
    const client = new GraphQLClient(url);
    return JSON.stringify(await client.request(introspectionQuery));
};

/**
 * TODO docs
 */
const request = async (_, { url, query, mutation }) => {
    const client = new GraphQLClient(url);
    const data = await client.request(query || mutation);
    return JSON.stringify(data);
};

const typeDefs = `
    type Query {
        schema(url: String!): String!
        query(url: String!, query: String!): String!
    }
    type Mutation {
        mutate(url: String!, mutation: String!): String!
    }
`;

const resolvers = ({
    query = 'query',
    mutate = 'mutate',
    schema = 'schema'
}) => ({
    Query: {
        [schema]: getSchema,
        [query]: request
    },
    Mutation: {
        [mutate]: request
    }
});

/**
 * TODO docs
 */
export const proxyServer = new GraphQLServer({
    typeDefs,
    resolvers
});

/**
 * TODO docs
 */
export const withProxy = ({ names }) => server =>
    new GraphQLServer({
        typeDefs: mergeTypes(typeDefs, server.getTypeDefs()),
        resolvers: mergeResolvers(resolvers(names || {}), server.getResolvers())
    });
