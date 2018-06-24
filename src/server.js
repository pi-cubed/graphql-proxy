import ProxyServer from './index';

const port = process.env.PORT || 5000;

new ProxyServer({
    typeDefs: `
    	type Query { test: String }
    	type Mutation { test: String }
    `,
    resolvers: {
        Query: { test: () => 'test' },
        Mutation: { test: () => 'test' }
    }
}).start({ port }, () => console.log(`Proxy server started at ${port}.`));
