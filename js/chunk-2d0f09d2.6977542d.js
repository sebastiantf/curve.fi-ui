(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0f09d2"], {
        "9cb4": function(e, r, n) {
            "use strict";

            function t(e, r) {
                return i(e) || u(e, r) || s(e, r) || a()
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
                        for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0)
                            if (n.push(i.value), r && n.length === r) break
                    } catch (c) {
                        a = !0, u = c
                    } finally {
                        try {
                            t || null == o["return"] || o["return"]()
                        } finally {
                            if (a) throw u
                        }
                    }
                    return n
                }
            }

            function i(e) {
                if (Array.isArray(e)) return e
            }

            function o(e) {
                return p(e) || l(e) || s(e) || c()
            }

            function c() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function s(e, r) {
                if (e) {
                    if ("string" === typeof e) return f(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, r) : void 0
                }
            }

            function l(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }

            function p(e) {
                if (Array.isArray(e)) return f(e)
            }

            function f(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
                return t
            }

            function h(e, r, n, t, a, u, i) {
                try {
                    var o = e[u](i),
                        c = o.value
                } catch (s) {
                    return void n(s)
                }
                o.done ? r(c) : Promise.resolve(c).then(t, a)
            }

            function d(e) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise((function(t, a) {
                        var u = e.apply(r, n);

                        function i(e) {
                            h(u, t, a, i, o, "next", e)
                        }

                        function o(e) {
                            h(u, t, a, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            n.r(r);
            var m = '\n\t<svg width="40px" height="40px" viewBox="0 0 114 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\t<g id="Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\t\t\t<path d="M17,51.453125 L17,40 C17,17.90861 34.90861,-1.0658141e-14 57,-1.0658141e-14 C79.09139,-1.0658141e-14 97,17.90861 97,40 L97,51.453125 L113.736328,51.453125 L113.736328,139.193359 L57.5,166 L0,139.193359 L0,51.453125 L17,51.453125 Z M37,51.453125 L77,51.453125 L77,40 L76.9678398,40 C76.3750564,29.406335 67.6617997,21 57,21 C46.3382003,21 37.6249436,29.406335 37.0321602,40 L37,40 L37,51.453125 Z M23,72 L23,125 L56.8681641,140.966797 L91,125 L91,72 L23,72 Z" id="Trezor-logo" fill="currentColor"></path>\n\t\t</g>\n\t</svg>\n';

            function w(e) {
                var r = e.rpcUrl,
                    n = e.networkId,
                    t = e.email,
                    a = e.appUrl,
                    u = e.preferred,
                    i = e.label,
                    o = e.iconSrc,
                    c = e.svg;
                return {
                    name: i || "Trezor",
                    svg: c || m,
                    iconSrc: o,
                    wallet: function() {
                        var e = d(regeneratorRuntime.mark((function e(u) {
                            var i, o, c, s;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return i = u.BigNumber, o = u.networkName, c = u.resetWalletState, e.next = 3, g({
                                            rpcUrl: r,
                                            networkId: n,
                                            email: t,
                                            appUrl: a,
                                            BigNumber: i,
                                            networkName: o,
                                            resetWalletState: c
                                        });
                                    case 3:
                                        return s = e.sent, e.abrupt("return", {
                                            provider: s,
                                            interface: {
                                                name: "Trezor", connect: s.enable, disconnect: s.disconnect, address: {
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
                                                                        return e.abrupt("return", n);
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

                        function u(r) {
                            return e.apply(this, arguments)
                        }
                        return u
                    }(),
                    type: "hardware",
                    desktop: !0,
                    mobile: !0,
                    osExclusions: ["iOS"],
                    preferred: u
                }
            }

            function g(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return v = d(regeneratorRuntime.mark((function e(r) {
                    var a, u, i, c, s, l, p, f, h, m, w, g, v, b, y, x, k, P, R, A, S, E, L, T, C, M, I, z, N, U, B, j, O, V, D, K, W, Z, J, _, G, H, $, q, F, Q, X, Y;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return Y = function() {
                                    return Y = d(regeneratorRuntime.mark((function e(r) {
                                        var n, a, u;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (0 !== S.size) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return e.next = 3, U();
                                                case 3:
                                                    return n = t(o(S.entries())[0], 2), a = n[0], u = n[1], e.abrupt("return", new Promise((function(e, n) {
                                                        h.ethereumSignMessage({
                                                            path: u,
                                                            message: i.stripHexPrefix(r.data),
                                                            hex: !0
                                                        }).then((function(r) {
                                                            if (r.success) {
                                                                r.payload.address !== i.toChecksumAddress(a) && n(new Error("signature doesnt match the right address"));
                                                                var t = "0x".concat(r.payload.signature);
                                                                e(t)
                                                            } else n(new Error(r.payload && r.payload.error || "There was an error signing a message"))
                                                        }))
                                                    })));
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), Y.apply(this, arguments)
                                }, X = function(e) {
                                    return Y.apply(this, arguments)
                                }, Q = function() {
                                    return Q = d(regeneratorRuntime.mark((function e(r) {
                                        var n, t, a, i;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (0 !== S.size) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return e.next = 3, U();
                                                case 3:
                                                    return n = o(S.values())[0], t = new u.Transaction(r, {
                                                        chain: P(v)
                                                    }), e.next = 7, q(n, r);
                                                case 7:
                                                    if (a = e.sent, a.success) {
                                                        e.next = 10;
                                                        break
                                                    }
                                                    throw new Error(a.payload.error);
                                                case 10:
                                                    return i = a.payload, t.v = i.v, t.r = i.r, t.s = i.s, e.abrupt("return", "0x".concat(t.serialize().toString("hex")));
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), Q.apply(this, arguments)
                                }, F = function(e) {
                                    return Q.apply(this, arguments)
                                }, q = function(e, r) {
                                    var n = r.nonce,
                                        t = r.gasPrice,
                                        a = r.gas,
                                        u = r.to,
                                        i = r.value,
                                        o = r.data;
                                    return h.ethereumSignTransaction({
                                        path: e,
                                        transaction: {
                                            nonce: n,
                                            gasPrice: t,
                                            gasLimit: a,
                                            to: u,
                                            value: i || "",
                                            data: o || "",
                                            chainId: v
                                        }
                                    })
                                }, $ = function(e) {
                                    return new Promise((function(r, n) {
                                        C.sendAsync({
                                            jsonrpc: "2.0",
                                            method: "eth_getBalance",
                                            params: [e, "latest"],
                                            id: 42
                                        }, (function(e, t) {
                                            e && n(e);
                                            var a = t && t.result;
                                            r(null != a ? new k(a).toString(10) : null)
                                        }))
                                    }))
                                }, H = function(e) {
                                    return Promise.all(e.map((function(e) {
                                        return new Promise(function() {
                                            var r = d(regeneratorRuntime.mark((function r(n) {
                                                var t;
                                                return regeneratorRuntime.wrap((function(r) {
                                                    while (1) switch (r.prev = r.next) {
                                                        case 0:
                                                            return r.next = 2, $(e);
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
                                }, G = function() {
                                    return G = d(regeneratorRuntime.mark((function e(r) {
                                        var n;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (E) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return", [void 0]);
                                                case 2:
                                                    if (!(S.size > 0) || r) {
                                                        e.next = 4;
                                                        break
                                                    }
                                                    return e.abrupt("return", O());
                                                case 4:
                                                    if ("" === A && (A = g), T) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    return e.prev = 6, e.next = 9, D();
                                                case 9:
                                                    T = e.sent, e.next = 15;
                                                    break;
                                                case 12:
                                                    throw e.prev = 12, e.t0 = e["catch"](6), e.t0;
                                                case 15:
                                                    return n = p(T, S.size), n.forEach((function(e) {
                                                        var r = e.dPath,
                                                            n = e.address;
                                                        S.set(n, r)
                                                    })), e.abrupt("return", O());
                                                case 18:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [6, 12]
                                        ])
                                    }))), G.apply(this, arguments)
                                }, _ = function(e) {
                                    return G.apply(this, arguments)
                                }, J = function() {
                                    return J = d(regeneratorRuntime.mark((function e() {
                                        var r;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, _(!0);
                                                case 2:
                                                    return r = e.sent, e.abrupt("return", H(r));
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), J.apply(this, arguments)
                                }, Z = function() {
                                    return J.apply(this, arguments)
                                }, W = function() {
                                    return E ? O()[0] : void 0
                                }, K = function() {
                                    return K = d(regeneratorRuntime.mark((function e() {
                                        var r;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (A) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    throw new Error("a derivation path is needed to get the public key");
                                                case 2:
                                                    return e.prev = 2, e.next = 5, h.getPublicKey({
                                                        path: A,
                                                        coin: "eth"
                                                    });
                                                case 5:
                                                    if (r = e.sent, r.success) {
                                                        e.next = 8;
                                                        break
                                                    }
                                                    throw new Error(r.payload.error);
                                                case 8:
                                                    return T = {
                                                        publicKey: r.payload.publicKey,
                                                        chainCode: r.payload.chainCode,
                                                        path: r.payload.serializedPath
                                                    }, e.abrupt("return", T);
                                                case 12:
                                                    throw e.prev = 12, e.t0 = e["catch"](2), new Error("There was an error accessing your Trezor accounts.");
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [2, 12]
                                        ])
                                    }))), K.apply(this, arguments)
                                }, D = function() {
                                    return K.apply(this, arguments)
                                }, V = function(e) {
                                    var r = o(S.entries()),
                                        n = r.findIndex((function(r) {
                                            var n = t(r, 1),
                                                a = n[0];
                                            return a === e
                                        }));
                                    r.unshift(r.splice(n, 1)[0]), S = new Map(r)
                                }, O = function() {
                                    return Array.from(S.keys())
                                }, j = function() {
                                    return j = d(regeneratorRuntime.mark((function e(r) {
                                        var n, t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    return n = "Unable to derive address from path ".concat(r), e.prev = 1, e.next = 4, h.ethereumGetAddress({
                                                        path: r,
                                                        showOnTrezor: !1
                                                    });
                                                case 4:
                                                    if (t = e.sent, t.success) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    throw new Error(n);
                                                case 7:
                                                    return e.abrupt("return", t.payload.address);
                                                case 10:
                                                    throw e.prev = 10, e.t0 = e["catch"](1), new Error(n);
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [1, 10]
                                        ])
                                    }))), j.apply(this, arguments)
                                }, B = function(e) {
                                    return j.apply(this, arguments)
                                }, U = function() {
                                    return E = !0, _()
                                }, N = function() {
                                    return L
                                }, z = function() {
                                    return z = d(regeneratorRuntime.mark((function e(r, n) {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (f(r)) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return", !1);
                                                case 2:
                                                    if (r !== A && (S = new Map), !n) {
                                                        e.next = 17;
                                                        break
                                                    }
                                                    return e.prev = 4, e.next = 7, B(r);
                                                case 7:
                                                    return t = e.sent, S.set(t, r), A = r, L = !0, e.abrupt("return", !0);
                                                case 14:
                                                    throw e.prev = 14, e.t0 = e["catch"](4), new Error("There was a problem deriving an address from path ".concat(r));
                                                case 17:
                                                    return L = !1, A = r, e.abrupt("return", !0);
                                                case 20:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [4, 14]
                                        ])
                                    }))), z.apply(this, arguments)
                                }, I = function(e, r) {
                                    return z.apply(this, arguments)
                                }, M = function() {
                                    A = "", S = new Map, E = !1, C.stop()
                                }, e.next = 25, n.e("chunk-51282069").then(n.t.bind(null, "8606", 7));
                            case 25:
                                return a = e.sent, e.next = 28, Promise.resolve().then(n.t.bind(null, "8d23", 7));
                            case 28:
                                return u = e.sent, e.next = 31, Promise.all([n.e("chunk-065e770e"), n.e("chunk-3c04bee1")]).then(n.t.bind(null, "6437", 7));
                            case 31:
                                return i = e.sent, e.next = 34, Promise.all([n.e("chunk-065e770e"), n.e("chunk-76be3c62"), n.e("chunk-60b3a1f5"), n.e("chunk-5be3f797")]).then(n.bind(null, "2772"));
                            case 34:
                                return c = e.sent, s = c["default"], e.next = 38, Promise.all([n.e("chunk-065e770e"), n.e("chunk-3c04bee1"), n.e("chunk-2f85b510")]).then(n.bind(null, "123e"));
                            case 38:
                                return l = e.sent, p = l.generateAddresses, f = l.isValidPath, h = a["default"], m = a.DEVICE_EVENT, w = a.DEVICE, g = "m/44'/60'/0'/0", v = r.networkId, b = r.email, y = r.appUrl, x = r.rpcUrl, k = r.BigNumber, P = r.networkName, R = r.resetWalletState, A = "", S = new Map, E = !1, L = !1, h.manifest({
                                    email: b,
                                    appUrl: y
                                }), C = s({
                                    getAccounts: function(e) {
                                        _().then((function(r) {
                                            return e(null, r)
                                        }))["catch"]((function(r) {
                                            return e(r, null)
                                        }))
                                    },
                                    signTransaction: function(e, r) {
                                        F(e).then((function(e) {
                                            return r(null, e)
                                        }))["catch"]((function(e) {
                                            return r(e, null)
                                        }))
                                    },
                                    processMessage: function(e, r) {
                                        X(e).then((function(e) {
                                            return r(null, e)
                                        }))["catch"]((function(e) {
                                            return r(e, null)
                                        }))
                                    },
                                    processPersonalMessage: function(e, r) {
                                        X(e).then((function(e) {
                                            return r(null, e)
                                        }))["catch"]((function(e) {
                                            return r(e, null)
                                        }))
                                    },
                                    signMessage: function(e, r) {
                                        X(e).then((function(e) {
                                            return r(null, e)
                                        }))["catch"]((function(e) {
                                            return r(e, null)
                                        }))
                                    },
                                    signPersonalMessage: function(e, r) {
                                        X(e).then((function(e) {
                                            return r(null, e)
                                        }))["catch"]((function(e) {
                                            return r(e, null)
                                        }))
                                    },
                                    rpcUrl: x
                                }), h.on(m, (function(e) {
                                    e.type === w.DISCONNECT && (C.stop(), R({
                                        disconnected: !0,
                                        walletName: "Trezor"
                                    }))
                                })), C.setPath = I, C.dPath = A, C.enable = U, C.setPrimaryAccount = V, C.getPrimaryAddress = W, C.getAccounts = _, C.getMoreAccounts = Z, C.getBalance = $, C.getBalances = H, C.send = C.sendAsync, C.disconnect = M, C.isCustomPath = N, e.abrupt("return", C);
                            case 64:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), v.apply(this, arguments)
            }
            r["default"] = w
        }
    }
]);
//# sourceMappingURL=chunk-2d0f09d2.6977542d.js.map