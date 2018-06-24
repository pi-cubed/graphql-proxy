import ProxyServer from './index';

const PORT = process.env.PORT || 5000;

new ProxyServer().start({ port: PORT }, () =>
    console.log(`Proxy server started at ${PORT}.`)
);
