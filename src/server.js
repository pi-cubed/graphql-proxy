import ProxyServer from './index';

const PORT = 4000;

new ProxyServer().start({ port: PORT }, () =>
    console.log(`Proxy server started at ${PORT}.`)
);
