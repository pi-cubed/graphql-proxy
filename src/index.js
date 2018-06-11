import { introspectionQuery } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { GraphQLServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

/**
 * TODO docs
 */
const getClient = (url, token) =>
    new GraphQLClient(url, {
        headers: { authorization: token ? `Bearer ${token}` : null }
    });

/**
 * TODO docs
 */
const send = (url, token) => async args =>
    JSON.stringify(await getClient(url, token).request(args));

/**
 * TODO docs
 */
const getSchema = (_, { url, token }) => send(url, token)(introspectionQuery);

/**
 * TODO docs
 */
const request = (_, { url, query, mutation, variables, token }) =>
    send(url, token)(query || mutation, variables && JSON.parse(variables));

export const proxyTypeDefs = `
    type Query {
        schema(url: String!, token: String): String!
        query(url: String!, query: String!, variables: String, token: String): String!
    }
    type Mutation {
        mutate(url: String!, mutation: String!, variables: String, token: String): String!
    }
`;

/**
 * TODO docs
 */
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

/**
 * TODO docs
 */
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
