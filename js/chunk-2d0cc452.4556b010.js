(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0cc452"], {
        "4ce2": function(e, n, t) {
            "use strict";
            t.r(n);
            t("f6b3");
            var r = t("080d");
            t("901e"), t("fd33"), t("337f");

            function i(e, n, t, r, i, o, u) {
                try {
                    var a = e[o](u),
                        c = a.value
                } catch (s) {
                    return void t(s)
                }
                a.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function o(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(n, t);

                        function a(e) {
                            i(u, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            i(u, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var u = '<svg width="257" height="277" viewBox="0 0 257 277" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="153.889" height="82.0741" fill="#0364FF" />\n<rect x="71.8135" width="82.0741" height="277" fill="#0364FF" />\n<path d="M215.443 82.0741C238.107 82.0741 256.48 63.7012 256.48 41.037C256.48 18.3729 238.107 0 215.443 \n0C192.779 0 174.406 18.3729 174.406 41.037C174.406 63.7012 192.779 82.0741 215.443 82.0741Z" fill="#0364FF" />\n</svg>';

            function a(e) {
                var n = e.networkId,
                    i = e.preferred,
                    a = e.label,
                    c = e.iconSrc,
                    s = e.svg,
                    l = e.buttonPosition,
                    f = e.modalZIndex,
                    w = e.apiKey,
                    h = e.buildEnv,
                    d = e.enableLogging,
                    g = e.enabledVerifiers,
                    p = e.loginConfig,
                    v = e.showTorusButton,
                    b = e.integrity,
                    m = e.whiteLabel,
                    k = e.loginMethod;
                return {
                    name: a || "Torus",
                    svg: s || u,
                    iconSrc: c,
                    wallet: function() {
                        var e = o(regeneratorRuntime.mark((function e() {
                            var i, u, a, c;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.e("chunk-3f338d6e").then(t.t.bind(null, "bc63", 7));
                                    case 2:
                                        return i = e.sent, u = i["default"], a = new u({
                                            buttonPosition: l,
                                            modalZIndex: f,
                                            apiKey: w
                                        }), e.next = 7, a.init({
                                            buildEnv: h,
                                            enableLogging: d,
                                            network: {
                                                host: Object(r["f"])(n),
                                                chainId: n,
                                                networkName: "".concat(Object(r["f"])(n), " Network")
                                            },
                                            showTorusButton: v,
                                            enabledVerifiers: g,
                                            loginConfig: p,
                                            integrity: b,
                                            whiteLabel: m
                                        });
                                    case 7:
                                        return c = a.provider, e.abrupt("return", {
                                            provider: c,
                                            instance: a,
                                            interface: {
                                                name: "Torus", connect: function() {
                                                    var e = o(regeneratorRuntime.mark((function e() {
                                                        var n;
                                                        return regeneratorRuntime.wrap((function(e) {
                                                            while (1) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.next = 2, a.login({
                                                                        verifier: k
                                                                    });
                                                                case 2:
                                                                    return n = e.sent, e.abrupt("return", {
                                                                        message: n[0]
                                                                    });
                                                                case 4:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));

                                                    function n() {
                                                        return e.apply(this, arguments)
                                                    }
                                                    return n
                                                }(), disconnect: function() {
                                                    return a.cleanUp()
                                                }, address: {
                                                    get: function() {
                                                        return Promise.resolve(a.web3.eth.accounts[0])
                                                    }
                                                }, network: {
                                                    get: function() {
                                                        return Promise.resolve(Number(a.web3.version.network))
                                                    }
                                                }, balance: {
                                                    get: function() {
                                                        return new Promise(function() {
                                                            var e = o(regeneratorRuntime.mark((function e(n, t) {
                                                                return regeneratorRuntime.wrap((function(e) {
                                                                    while (1) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            a.web3.eth.getBalance(a.web3.eth.accounts[0], (function(e, r) {
                                                                                e ? t("Error while checking Balance: ".concat(e)) : n(r.toString(10))
                                                                            }));
                                                                        case 1:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                                }), e)
                                                            })));
                                                            return function(n, t) {
                                                                return e.apply(this, arguments)
                                                            }
                                                        }())
                                                    }
                                                }, dashboard: function() {
                                                    return a.showWallet("home")
                                                }
                                            }
                                        });
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));

                        function i() {
                            return e.apply(this, arguments)
                        }
                        return i
                    }(),
                    type: "sdk",
                    desktop: !0,
                    mobile: !0,
                    preferred: i
                }
            }
            n["default"] = a
        }
    }
]);
//# sourceMappingURL=chunk-2d0cc452.4556b010.js.map