import { introspectionQuery } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { GraphQLServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';
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

export const proxyTypeDefs = `
    type Query {
        schema(url: String!): String!
        query(url: String!, query: String!): String!
    }
    type Mutation {
        mutate(url: String!, mutation: String!): String!
    }
`;

const getProxyResolvers = ({
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

const getTypeDefs = typeDefs =>
    typeof typeDefs === 'string' && typeDefs.endsWith('graphql')
        ? importSchema(typeDefs)
        : typeDefs;

/**
 * TODO docs
 */
export default class ProxyServer extends GraphQLServer {
    constructor(props) {
        const typeDefs =
            props && props.typeDefs
                ? mergeTypes(
                      [proxyTypeDefs].concat(getTypeDefs(props.typeDefs))
                  )
                : proxyTypeDefs;

        const proxyResolvers = getProxyResolvers((props && props.names) || {});
        const resolvers =
            props && props.resolvers
                ? mergeResolvers([proxyResolvers, props.resolvers])
                : proxyResolvers;

        const context = (props && props.context) || {};

        super({
            typeDefs,
            resolvers,
            context
        });
    }
}
