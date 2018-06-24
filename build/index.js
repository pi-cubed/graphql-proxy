(function(a, b) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = b())
        : 'function' == typeof define && define.amd
            ? define('graphql-proxy', [], b)
            : 'object' == typeof exports
                ? (exports['graphql-proxy'] = b())
                : (a['graphql-proxy'] = b());
})('undefined' == typeof self ? this : self, function() {
    return (function(a) {
        function b(d) {
            if (c[d]) return c[d].exports;
            var e = (c[d] = { i: d, l: !1, exports: {} });
            return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
        }
        var c = {};
        return (
            (b.m = a),
            (b.c = c),
            (b.d = function(a, c, d) {
                b.o(a, c) ||
                    Object.defineProperty(a, c, {
                        configurable: !1,
                        enumerable: !0,
                        get: d
                    });
            }),
            (b.n = function(a) {
                var c =
                    a && a.__esModule
                        ? function() {
                              return a['default'];
                          }
                        : function() {
                              return a;
                          };
                return b.d(c, 'a', c), c;
            }),
            (b.o = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b);
            }),
            (b.p = ''),
            b((b.s = 0))
        );
    })([
        function(a, b, c) {
            a.exports = c(1);
        },
        function(a, b, c) {
            'use strict';
            function d(a) {
                return a && a.__esModule ? a : { default: a };
            }
            Object.defineProperty(b, '__esModule', { value: !0 }),
                (b.proxyTypeDefs = void 0);
            var e = c(2),
                f = d(e),
                g = c(3),
                h = d(g),
                i = c(4),
                j = d(i),
                k = c(5),
                l = d(k),
                m = c(6),
                n = d(m),
                o = c(7),
                p = d(o),
                q = c(8),
                r = c(9),
                s = c(10),
                t = c(11),
                u = c(12),
                v = function(a, b) {
                    return new r.GraphQLClient(a, {
                        headers: { authorization: b ? 'Bearer ' + b : null }
                    });
                },
                w = function(a, b) {
                    return (function() {
                        var c = (0, p.default)(
                            n.default.mark(function c(d) {
                                return n.default.wrap(
                                    function(c) {
                                        for (;;)
                                            switch ((c.prev = c.next)) {
                                                case 0:
                                                    return (
                                                        (c.t0 = JSON),
                                                        (c.next = 3),
                                                        v(a, b).request(d)
                                                    );
                                                case 3:
                                                    return (
                                                        (c.t1 = c.sent),
                                                        c.abrupt(
                                                            'return',
                                                            c.t0.stringify.call(
                                                                c.t0,
                                                                c.t1
                                                            )
                                                        )
                                                    );
                                                case 5:
                                                case 'end':
                                                    return c.stop();
                                            }
                                    },
                                    c,
                                    void 0
                                );
                            })
                        );
                        return function() {
                            return c.apply(this, arguments);
                        };
                    })();
                },
                x = function(a, b) {
                    var c = b.url,
                        d = b.token;
                    return w(c, d)(q.introspectionQuery);
                },
                y = function(a, b) {
                    var c = b.url,
                        d = b.query,
                        e = b.mutation,
                        f = b.variables,
                        g = b.token;
                    return w(c, g)(d || e, f && JSON.parse(f));
                },
                z = (b.proxyTypeDefs =
                    '\n    type Query {\n        schema(url: String!, token: String): String!\n        query(url: String!, query: String!, variables: String, token: String): String!\n    }\n    type Mutation {\n        mutate(url: String!, mutation: String!, variables: String, token: String): String!\n    }\n'),
                A = function(a) {
                    var b,
                        c = a.query,
                        d = c === void 0 ? 'query' : c,
                        e = a.mutate,
                        f = e === void 0 ? 'mutate' : e,
                        g = a.schema,
                        h = g === void 0 ? 'schema' : g;
                    return {
                        Query: ((b = {}),
                        (0, l.default)(b, h, x),
                        (0, l.default)(b, d, y),
                        b),
                        Mutation: (0, l.default)({}, f, y)
                    };
                },
                B = function(a) {
                    return 'string' == typeof a && a.endsWith('.graphql')
                        ? (0, t.importSchema)(a)
                        : a;
                },
                C = (function(a) {
                    function b(a) {
                        (0, f.default)(this, b);
                        var c =
                                a && a.typeDefs
                                    ? (0, u.mergeTypes)(
                                          [z].concat(B(a.typeDefs))
                                      )
                                    : z,
                            d = A((a && a.names) || {}),
                            e =
                                a && a.resolvers
                                    ? (0, u.mergeResolvers)([d, a.resolvers])
                                    : d,
                            g = (a && a.context) || {};
                        return (0, h.default)(
                            this,
                            (b.__proto__ || Object.getPrototypeOf(b)).call(
                                this,
                                { typeDefs: c, resolvers: e, context: g }
                            )
                        );
                    }
                    return (0, j.default)(b, a), b;
                })(s.GraphQLServer);
            b.default = C;
        },
        function(a) {
            a.exports = require('babel-runtime/helpers/classCallCheck');
        },
        function(a) {
            a.exports = require('babel-runtime/helpers/possibleConstructorReturn');
        },
        function(a) {
            a.exports = require('babel-runtime/helpers/inherits');
        },
        function(a) {
            a.exports = require('babel-runtime/helpers/defineProperty');
        },
        function(a) {
            a.exports = require('babel-runtime/regenerator');
        },
        function(a) {
            a.exports = require('babel-runtime/helpers/asyncToGenerator');
        },
        function(a) {
            a.exports = require('graphql');
        },
        function(a) {
            a.exports = require('graphql-request');
        },
        function(a) {
            a.exports = require('graphql-yoga');
        },
        function(a) {
            a.exports = require('graphql-import');
        },
        function(a) {
            a.exports = require('merge-graphql-schemas');
        }
    ]);
});
//# sourceMappingURL=index.js.map
