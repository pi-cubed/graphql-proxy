# graphql-proxy-server

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Add proxy abilities to GraphQL servers.

[build-badge]: https://img.shields.io/travis/pi-cubed/graphql-proxy-server/master.png?style=flat-square
[build]: https://travis-ci.org/pi-cubed/graphql-proxy-server
[npm-badge]: https://img.shields.io/npm/v/@pi-cubed/graphql-proxy-server.png?style=flat-square
[npm]: https://www.npmjs.org/package/@pi-cubed/graphql-proxy-server
[coveralls-badge]: https://img.shields.io/coveralls/pi-cubed/graphql-proxy-server/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/pi-cubed/graphql-proxy-server

## Install

```
$ yarn add @pi-cubed/graphql-proxy-server
```

## Usage

```js
import ProxyServer from '@pi-cubed/graphql-proxy-server';

const port = process.env.PORT || 5000;

new ProxyServer().start({ port }, () =>
    console.log(`Proxy server started at ${port}.`)
);
```

## API

## Members

<dl>
<dt><a href="#ProxyServer">ProxyServer</a></dt>
<dd><p>TODO docs</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getClient">getClient()</a></dt>
<dd><p>TODO docs</p>
</dd>
<dt><a href="#send">send()</a></dt>
<dd><p>TODO docs</p>
</dd>
<dt><a href="#getSchema">getSchema()</a></dt>
<dd><p>TODO docs</p>
</dd>
<dt><a href="#request">request()</a></dt>
<dd><p>TODO docs</p>
</dd>
<dt><a href="#getProxyResolvers">getProxyResolvers()</a></dt>
<dd><p>TODO docs</p>
</dd>
<dt><a href="#getTypeDefs">getTypeDefs()</a></dt>
<dd><p>TODO docs</p>
</dd>
</dl>

<a name="ProxyServer"></a>

## ProxyServer

TODO docs

**Kind**: global variable  
<a name="getClient"></a>

## getClient()

TODO docs

**Kind**: global function  
<a name="send"></a>

## send()

TODO docs

**Kind**: global function  
<a name="getSchema"></a>

## getSchema()

TODO docs

**Kind**: global function  
<a name="request"></a>

## request()

TODO docs

**Kind**: global function  
<a name="getProxyResolvers"></a>

## getProxyResolvers()

TODO docs

**Kind**: global function  
<a name="getTypeDefs"></a>

## getTypeDefs()

TODO docs

**Kind**: global function

## Maintainers

-   [Dylan Richardson](https://github.com/drich14)

## License

MIT © [Pi Cubed](https://pi-cubed.github.io)
