(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0f03c3"], {
        "9c03": function(e, r, n) {
            "use strict";

            function t(e, r) {
                return c(e) || u(e, r) || o(e, r) || a()
            }

            function a() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function u(e, r) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [],
                        t = !0,
                        a = !1,
                        u = void 0;
                    try {
                        for (var c, i = e[Symbol.iterator](); !(t = (c = i.next()).done); t = !0)
                            if (n.push(c.value), r && n.length === r) break
                    } catch (s) {
                        a = !0, u = s
                    } finally {
                        try {
                            t || null == i["return"] || i["return"]()
                        } finally {
                            if (a) throw u
                        }
                    }
                    return n
                }
            }

            function c(e) {
                if (Array.isArray(e)) return e
            }

            function i(e) {
                return f(e) || l(e) || o(e) || s()
            }

            function s() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function o(e, r) {
                if (e) {
                    if ("string" === typeof e) return p(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, r) : void 0
                }
            }

            function l(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }

            function f(e) {
                if (Array.isArray(e)) return p(e)
            }

            function p(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
                return t
            }

            function h(e, r, n, t, a, u, c) {
                try {
                    var i = e[u](c),
                        s = i.value
                } catch (o) {
                    return void n(o)
                }
                i.done ? r(s) : Promise.resolve(s).then(t, a)
            }

            function d(e) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise((function(t, a) {
                        var u = e.apply(r, n);

                        function c(e) {
                            h(u, t, a, c, i, "next", e)
                        }

                        function i(e) {
                            h(u, t, a, c, i, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            n.r(r);
            var m = '\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" width="37" height="37"><style>.st0{fill:currentColor}</style><g id="squares_1_"><path class="st0" d="M578.2 392.7V24.3h25.6v344.1h175.3v24.3H578.2zm327.5 5.1c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5H804.6c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.3 2.6-28.9 3.9-43.5 3.8zM898 135.6c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm238-21.8c19.2 0 37.1 3.8 51.2 10.2 14.1 7.7 26.9 19.2 38.4 37.1h1.3c-1.3-21.7-1.3-42.2-1.3-62.7V0h24.3v392.7h-16.6l-6.4-42.2c-20.5 30.7-51.2 47.3-89.6 47.3s-66.5-11.5-87-35.8c-20.5-23-29.4-57.6-29.4-102.3 0-47.3 10.2-83.2 29.4-108.7 19.2-25.6 48.6-37.2 85.7-37.2zm0 21.8c-29.4 0-52.4 10.2-67.8 32-15.3 20.5-23 51.2-23 92.1 0 78 30.7 116.4 90.8 116.4 30.7 0 53.7-9 67.8-26.9 14.1-17.9 21.7-47.3 21.7-89.6v-3.8c0-42.2-7.7-72.9-21.7-90.8-12.8-20.5-35.8-29.4-67.8-29.4zm379.9-16.6v17.9l-56.3 3.8c15.3 19.2 23 39.7 23 61.4 0 26.9-9 47.3-26.9 64-17.9 16.6-40.9 24.3-70.4 24.3-12.8 0-21.7 0-25.6-1.3-10.2 5.1-17.9 11.5-23 17.9-5.1 7.7-7.7 14.1-7.7 23s3.8 15.3 10.2 19.2c6.4 3.8 17.9 6.4 33.3 6.4h47.3c29.4 0 52.4 6.4 67.8 17.9s24.3 29.4 24.3 53.7c0 29.4-11.5 51.2-34.5 66.5-23 15.3-56.3 23-99.8 23-34.5 0-61.4-6.4-80.6-20.5-19.2-12.8-28.1-32-28.1-55 0-19.2 6.4-34.5 17.9-47.3s28.1-20.5 47.3-25.6c-7.7-3.8-15.3-9-19.2-15.3-5-6.2-7.7-13.8-7.7-21.7 0-17.9 11.5-34.5 34.5-48.6-15.3-6.4-28.1-16.6-37.1-30.7-9-14.1-12.8-30.7-12.8-48.6 0-26.9 9-49.9 25.6-66.5 17.9-16.6 40.9-24.3 70.4-24.3 17.9 0 32 1.3 42.2 5.1h85.7v1.3h.2zm-222.6 319.8c0 37.1 28.1 56.3 84.4 56.3 71.6 0 107.5-23 107.5-69.1 0-16.6-5.1-28.1-16.6-35.8-11.5-7.7-29.4-11.5-55-11.5h-44.8c-49.9 1.2-75.5 20.4-75.5 60.1zm21.8-235.4c0 21.7 6.4 37.1 19.2 49.9 12.8 11.5 29.4 17.9 51.2 17.9 23 0 40.9-6.4 52.4-17.9 12.8-11.5 17.9-28.1 17.9-49.9 0-23-6.4-40.9-19.2-52.4-12.8-11.5-29.4-17.9-52.4-17.9-21.7 0-39.7 6.4-51.2 19.2-12.8 11.4-17.9 29.3-17.9 51.1z"/><path class="st0" d="M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z"/></g></svg>\n',
                v = "m/44'/60'",
                w = 5;

            function g(e) {
                var r = e.rpcUrl,
                    n = e.LedgerTransport,
                    t = e.networkId,
                    a = e.preferred,
                    u = e.label,
                    c = e.iconSrc,
                    i = e.svg;
                return {
                    name: u || "Ledger",
                    svg: i || m,
                    iconSrc: c,
                    wallet: function() {
                        var e = d(regeneratorRuntime.mark((function e(a) {
                            var u, c, i, s;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return u = a.BigNumber, c = a.networkName, i = a.resetWalletState, e.next = 3, b({
                                            rpcUrl: r,
                                            networkId: t,
                                            LedgerTransport: n,
                                            BigNumber: u,
                                            networkName: c,
                                            resetWalletState: i
                                        });
                                    case 3:
                                        return s = e.sent, e.abrupt("return", {
                                            provider: s,
                                            interface: {
                                                name: "Ledger", connect: s.enable, disconnect: s.disconnect, address: {
                                                    get: function() {
                                                        var e = d(regeneratorRuntime.mark((function e() {
                                                            return regeneratorRuntime.wrap((function(e) {
                                                                while (1) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        return e.abrupt("return", s.getPrimaryAddress());
                                                                    case 1:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }), e)
                                                        })));

                                                        function r() {
                                                            return e.apply(this, arguments)
                                                        }
                                                        return r
                                                    }()
                                                }, network: {
                                                    get: function() {
                                                        var e = d(regeneratorRuntime.mark((function e() {
                                                            return regeneratorRuntime.wrap((function(e) {
                                                                while (1) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        return e.abrupt("return", t);
                                                                    case 1:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }), e)
                                                        })));

                                                        function r() {
                                                            return e.apply(this, arguments)
                                                        }
                                                        return r
                                                    }()
                                                }, balance: {
                                                    get: function() {
                                                        var e = d(regeneratorRuntime.mark((function e() {
                                                            var r;
                                                            return regeneratorRuntime.wrap((function(e) {
                                                                while (1) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        return r = s.getPrimaryAddress(), e.abrupt("return", r && s.getBalance(r));
                                                                    case 2:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }), e)
                                                        })));

                                                        function r() {
                                                            return e.apply(this, arguments)
                                                        }
                                                        return r
                                                    }()
                                                }
                                            }
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));

                        function a(r) {
                            return e.apply(this, arguments)
                        }
                        return a
                    }(),
                    type: "hardware",
                    desktop: !0,
                    mobile: !0,
                    osExclusions: ["iOS"],
                    preferred: a
                }
            }

            function b(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return x = d(regeneratorRuntime.mark((function e(r) {
                    var a, u, c, s, o, l, f, p, h, m, g, b, x, y, k, R, P, z, A, S, M, B, V, I, T, E, L, j, N, H, C, O, U, W, _, J, K, q, $, D, F, G, Q, X, Y, Z, ee, re, ne, te;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return te = function() {
                                    return te = d(regeneratorRuntime.mark((function e(r) {
                                        var n;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (0 !== S.size) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return e.next = 3, U();
                                                case 3:
                                                    return n = i(S.values())[0], e.abrupt("return", E.signPersonalMessage(n, g.stripHexPrefix(r.data)).then((function(e) {
                                                        var r = (e["v"] - 27).toString(16);
                                                        return r.length < 2 && (r = "0" + r), "0x".concat(e["r"]).concat(e["s"]).concat(r)
                                                    })));
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), te.apply(this, arguments)
                                }, ne = function(e) {
                                    return te.apply(this, arguments)
                                }, re = function() {
                                    return re = d(regeneratorRuntime.mark((function e(r) {
                                        var n, t, a;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    return n = i(S.values())[0], e.prev = 1, t = new m.Transaction(r, {
                                                        chain: P(x)
                                                    }), t.raw[6] = b.Buffer.from([x]), t.raw[7] = b.Buffer.from([]), t.raw[8] = b.Buffer.from([]), e.next = 8, E.signTransaction(n, t.serialize().toString("hex"));
                                                case 8:
                                                    return a = e.sent, t.v = b.Buffer.from(a.v, "hex"), t.r = b.Buffer.from(a.r, "hex"), t.s = b.Buffer.from(a.s, "hex"), e.abrupt("return", "0x".concat(t.serialize().toString("hex")));
                                                case 15:
                                                    throw e.prev = 15, e.t0 = e["catch"](1), e.t0;
                                                case 18:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [1, 15]
                                        ])
                                    }))), re.apply(this, arguments)
                                }, ee = function(e) {
                                    return re.apply(this, arguments)
                                }, Z = function(e) {
                                    return new Promise((function(r, n) {
                                        I.sendAsync({
                                            jsonrpc: "2.0",
                                            method: "eth_getBalance",
                                            params: [e, "latest"],
                                            id: 42
                                        }, (function(e, t) {
                                            e && n(e);
                                            var a = t && t.result;
                                            r(null != a ? new R(a).toString(10) : null)
                                        }))
                                    }))
                                }, Y = function(e) {
                                    return Promise.all(e.map((function(e) {
                                        return new Promise(function() {
                                            var r = d(regeneratorRuntime.mark((function r(n) {
                                                var t;
                                                return regeneratorRuntime.wrap((function(r) {
                                                    while (1) switch (r.prev = r.next) {
                                                        case 0:
                                                            return r.next = 2, Z(e);
                                                        case 2:
                                                            t = r.sent, n({
                                                                address: e,
                                                                balance: t
                                                            });
                                                        case 4:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r)
                                            })));
                                            return function(e) {
                                                return r.apply(this, arguments)
                                            }
                                        }())
                                    })))
                                }, X = function() {
                                    return X = d(regeneratorRuntime.mark((function e(r) {
                                        var n, t, a, u, c, i, o, l;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (M) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return", []);
                                                case 2:
                                                    if (!(S.size > 0) || r) {
                                                        e.next = 4;
                                                        break
                                                    }
                                                    return e.abrupt("return", W());
                                                case 4:
                                                    if (E) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.next = 7, C();
                                                case 7:
                                                    if ("" === A && (A = v), A !== v) {
                                                        e.next = 24;
                                                        break
                                                    }
                                                    for (n = S.size, t = [], a = n; a < w + n; a++) t.push("".concat(v, "/").concat(a, "'/0/0"));
                                                    u = 0, c = t;
                                                case 13:
                                                    if (!(u < c.length)) {
                                                        e.next = 22;
                                                        break
                                                    }
                                                    return i = c[u], e.next = 17, E.getAddress(i);
                                                case 17:
                                                    o = e.sent, S.set(o.address, i);
                                                case 19:
                                                    u++, e.next = 13;
                                                    break;
                                                case 22:
                                                    e.next = 36;
                                                    break;
                                                case 24:
                                                    if (V) {
                                                        e.next = 34;
                                                        break
                                                    }
                                                    return e.prev = 25, e.next = 28, q();
                                                case 28:
                                                    V = e.sent, e.next = 34;
                                                    break;
                                                case 31:
                                                    throw e.prev = 31, e.t0 = e["catch"](25), e.t0;
                                                case 34:
                                                    l = s(V, S.size), l.forEach((function(e) {
                                                        var r = e.dPath,
                                                            n = e.address;
                                                        S.set(n, r)
                                                    }));
                                                case 36:
                                                    return e.abrupt("return", W());
                                                case 37:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [25, 31]
                                        ])
                                    }))), X.apply(this, arguments)
                                }, Q = function(e) {
                                    return X.apply(this, arguments)
                                }, G = function() {
                                    return G = d(regeneratorRuntime.mark((function e() {
                                        var r;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, Q(!0);
                                                case 2:
                                                    return r = e.sent, e.abrupt("return", r && Y(r));
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), G.apply(this, arguments)
                                }, F = function() {
                                    return G.apply(this, arguments)
                                }, D = function() {
                                    return M ? W()[0] : void 0
                                }, $ = function() {
                                    return $ = d(regeneratorRuntime.mark((function e() {
                                        var r, n, t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (A) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    throw new Error("a derivation path is needed to get the public key");
                                                case 2:
                                                    if (E) {
                                                        e.next = 5;
                                                        break
                                                    }
                                                    return e.next = 5, C();
                                                case 5:
                                                    return e.prev = 5, e.next = 8, E.getAddress(A, !1, !0);
                                                case 8:
                                                    return r = e.sent, n = r.publicKey, t = r.chainCode, V = {
                                                        publicKey: n,
                                                        chainCode: t,
                                                        path: A
                                                    }, e.abrupt("return", V);
                                                case 14:
                                                    throw e.prev = 14, e.t0 = e["catch"](5), new Error("There was a problem accessing your Ledger accounts.");
                                                case 17:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [5, 14]
                                        ])
                                    }))), $.apply(this, arguments)
                                }, q = function() {
                                    return $.apply(this, arguments)
                                }, K = function() {
                                    return K = d(regeneratorRuntime.mark((function e(r) {
                                        var n;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (E) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return e.next = 3, C();
                                                case 3:
                                                    return e.prev = 3, e.next = 6, E.getAddress(r);
                                                case 6:
                                                    return n = e.sent, e.abrupt("return", n.address);
                                                case 10:
                                                    e.prev = 10, e.t0 = e["catch"](3);
                                                case 12:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [3, 10]
                                        ])
                                    }))), K.apply(this, arguments)
                                }, J = function(e) {
                                    return K.apply(this, arguments)
                                }, _ = function(e) {
                                    var r = i(S.entries()),
                                        n = r.findIndex((function(r) {
                                            var n = t(r, 1),
                                                a = n[0];
                                            return a === e
                                        }));
                                    r.unshift(r.splice(n, 1)[0]), S = new Map(r)
                                }, W = function() {
                                    return Array.from(S.keys())
                                }, U = function() {
                                    return M = !0, Q()
                                }, O = function() {
                                    return O = d(regeneratorRuntime.mark((function e() {
                                        var r;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (e.prev = 0, !k) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.next = 4, k.create();
                                                case 4:
                                                    e.t0 = e.sent, e.next = 10;
                                                    break;
                                                case 7:
                                                    return e.next = 9, f.create();
                                                case 9:
                                                    e.t0 = e.sent;
                                                case 10:
                                                    T = e.t0, E = new h(T), r = {
                                                        next: function(e) {
                                                            "remove" === e.type && L()
                                                        },
                                                        error: function() {},
                                                        complete: function() {}
                                                    }, k ? k.listen(r) : f.listen(r), e.next = 19;
                                                    break;
                                                case 16:
                                                    throw e.prev = 16, e.t1 = e["catch"](0), new Error("Error connecting to Ledger wallet");
                                                case 19:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 16]
                                        ])
                                    }))), O.apply(this, arguments)
                                }, C = function() {
                                    return O.apply(this, arguments)
                                }, H = function() {
                                    return B
                                }, N = function() {
                                    return N = d(regeneratorRuntime.mark((function e(r, n) {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (o(r)) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return", !1);
                                                case 2:
                                                    if (r !== A && (S = new Map), !n) {
                                                        e.next = 10;
                                                        break
                                                    }
                                                    return e.next = 6, J(r);
                                                case 6:
                                                    return t = e.sent, S.set(t, r), B = !0, e.abrupt("return", !0);
                                                case 10:
                                                    return B = !1, A = r, e.abrupt("return", !0);
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), N.apply(this, arguments)
                                }, j = function(e, r) {
                                    return N.apply(this, arguments)
                                }, L = function() {
                                    T && T.close(), I.stop(), z({
                                        disconnected: !0,
                                        walletName: "Ledger"
                                    })
                                }, e.next = 26, Promise.all([n.e("chunk-065e770e"), n.e("chunk-76be3c62"), n.e("chunk-60b3a1f5"), n.e("chunk-5be3f797")]).then(n.bind(null, "2772"));
                            case 26:
                                return a = e.sent, u = a["default"], e.next = 30, Promise.all([n.e("chunk-065e770e"), n.e("chunk-3c04bee1"), n.e("chunk-2f85b510")]).then(n.bind(null, "123e"));
                            case 30:
                                return c = e.sent, s = c.generateAddresses, o = c.isValidPath, e.next = 35, Promise.resolve().then(n.bind(null, "d418"));
                            case 35:
                                return l = e.sent, f = l["default"], e.next = 39, n.e("chunk-53336024").then(n.bind(null, "1d17"));
                            case 39:
                                return p = e.sent, h = p["default"], e.next = 43, Promise.resolve().then(n.t.bind(null, "8d23", 7));
                            case 43:
                                return m = e.sent, e.next = 46, Promise.all([n.e("chunk-065e770e"), n.e("chunk-3c04bee1")]).then(n.t.bind(null, "6437", 7));
                            case 46:
                                return g = e.sent, e.next = 49, Promise.resolve().then(n.t.bind(null, "1c35", 7));
                            case 49:
                                return b = e.sent, x = r.networkId, y = r.rpcUrl, k = r.LedgerTransport, R = r.BigNumber, P = r.networkName, z = r.resetWalletState, A = "", S = new Map, M = !1, B = !1, I = u({
                                    getAccounts: function(e) {
                                        Q().then((function(r) {
                                            return e(null, r)
                                        }))["catch"]((function(r) {
                                            return e(r, null)
                                        }))
                                    },
                                    signTransaction: function(e, r) {
                                        ee(e).then((function(e) {
                                            return r(null, e)
                                        }))["catch"]((function(e) {
                                            return r(e, null)
                                        }))
                                    },
                                    processMessage: function(e, r) {
                                        ne(e).then((function(e) {
                                            return r(null, e)
                                        }))["catch"]((function(e) {
                                            return r(e, null)
                                        }))
                                    },
                                    processPersonalMessage: function(e, r) {
                                        ne(e).then((function(e) {
                                            return r(null, e)
                                        }))["catch"]((function(e) {
                                            return r(e, null)
                                        }))
                                    },
                                    signMessage: function(e, r) {
                                        ne(e).then((function(e) {
                                            return r(null, e)
                                        }))["catch"]((function(e) {
                                            return r(e, null)
                                        }))
                                    },
                                    signPersonalMessage: function(e, r) {
                                        ne(e).then((function(e) {
                                            return r(null, e)
                                        }))["catch"]((function(e) {
                                            return r(e, null)
                                        }))
                                    },
                                    rpcUrl: y
                                }), I.setPath = j, I.dPath = A, I.enable = U, I.setPrimaryAccount = _, I.getPrimaryAddress = D, I.getAccounts = Q, I.getMoreAccounts = F, I.getBalance = Z, I.getBalances = Y, I.send = I.sendAsync, I.disconnect = L, I.isCustomPath = H, e.abrupt("return", I);
                            case 69:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), x.apply(this, arguments)
            }
            r["default"] = g
        }
    }
]);
//# sourceMappingURL=chunk-2d0f03c3.3b682437.js.map