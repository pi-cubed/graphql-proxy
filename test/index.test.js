import { graphql } from 'graphql';
import {
    makeExecutableSchema,
    addMockFunctionsToSchema,
    mockServer
} from 'graphql-tools';
import ProxyServer, { proxyTypeDefs } from '../src';

const data = 'abc';

const queryTest = {
    id: 'query',
    query: `
    query($url: String!, $query: String!) {
      query(url: $url, query: $query)
    }
  `,
    variables: { url: '', query: '' },
    context: {},
    expected: { data: { query: data } }
};

const mutateTest = {
    id: 'mutate',
    query: `
    mutation($url: String!, $mutation: String!) {
      mutate(url: $url, mutation: $mutation)
    }
  `,
    variables: { url: '', mutation: '' },
    context: {},
    expected: { data: { mutate: data } }
};

const schemaTest = {
    id: 'schema',
    query: `
    query($url: String!) {
      schema(url: $url)
    }
  `,
    variables: { url: '', query: '' },
    context: {},
    expected: { data: { schema: data } }
};

describe('ProxyServer', () => {
    const cases = [queryTest, mutateTest, schemaTest];
    const mockSchema = new ProxyServer().executableSchema;

    addMockFunctionsToSchema({
        schema: mockSchema,
        mocks: {
            String: () => data
        }
    });

    test('has valid type definitions', async () => {
        expect(async () => {
            const MockServer = mockServer(proxyTypeDefs);

            await MockServer.query(`{ __schema { types { name } } }`);
        }).not.toThrow();
    });

    cases.forEach(obj => {
        const { id, query, variables, context: ctx, expected } = obj;

        test(`query: ${id}`, async () => {
            return await expect(
                graphql(mockSchema, query, null, { ctx }, variables)
            ).resolves.toEqual(expected);
        });
    });

    test('has context passed to constructor', () => {
        expect(new ProxyServer({ context: data }).context).toEqual(data);
    });
});
