(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0e9b51"], {
        "8f4a": function(n, e, r) {
            "use strict";
            r.r(e);
            r("f6b3");
            var t = r("080d");
            r("901e"), r("fd33"), r("337f");

            function u(n, e, r, t, u, o, i) {
                try {
                    var a = n[o](i),
                        c = a.value
                } catch (s) {
                    return void r(s)
                }
                a.done ? e(c) : Promise.resolve(c).then(t, u)
            }

            function o(n) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(t, o) {
                        var i = n.apply(e, r);

                        function a(n) {
                            u(i, t, o, a, c, "next", n)
                        }

                        function c(n) {
                            u(i, t, o, a, c, "throw", n)
                        }
                        a(void 0)
                    }))
                }
            }
            var i = '\n  <svg \n    height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z" \n      fill="#617bff" \n      fill-rule="evenodd" \n      transform="translate(-2725 -1155)"/>\n  </svg>\n';

            function a(n) {
                var e = n.apiKey,
                    u = n.networkId,
                    a = n.preferred,
                    c = n.label,
                    s = n.iconSrc,
                    f = n.svg;
                return {
                    name: c || "Fortmatic",
                    svg: f || i,
                    iconSrc: s,
                    wallet: function() {
                        var n = o(regeneratorRuntime.mark((function n(i) {
                            var a, c, s, f, d, v, l;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, r.e("chunk-2d0f1539").then(r.t.bind(null, "9fc9", 7));
                                    case 2:
                                        return a = n.sent, c = a["default"], s = new c(e, 1 === u ? void 0 : Object(t["f"])(u)), f = s.getProvider(), d = i.BigNumber, v = i.getAddress, n.abrupt("return", {
                                            provider: f,
                                            instance: s,
                                            interface: {
                                                name: "Fortmatic", connect: function() {
                                                    return s.user.login().then((function(n) {
                                                        return l = !0, n
                                                    }))
                                                }, disconnect: function() {
                                                    return s.user.logout()
                                                }, address: {
                                                    get: function() {
                                                        return l ? v(f) : Promise.resolve()
                                                    }
                                                }, network: {
                                                    get: function() {
                                                        return Promise.resolve(u)
                                                    }
                                                }, balance: {
                                                    get: function() {
                                                        var n = o(regeneratorRuntime.mark((function n() {
                                                            return regeneratorRuntime.wrap((function(n) {
                                                                while (1) switch (n.prev = n.next) {
                                                                    case 0:
                                                                        return n.abrupt("return", l && s.user.getBalances().then((function(n) {
                                                                            return n[0] ? d(n[0].crypto_amount).times(d("1000000000000000000")).toString(10) : null
                                                                        })));
                                                                    case 1:
                                                                    case "end":
                                                                        return n.stop()
                                                                }
                                                            }), n)
                                                        })));

                                                        function e() {
                                                            return n.apply(this, arguments)
                                                        }
                                                        return e
                                                    }()
                                                }, dashboard: function() {
                                                    return s.user.settings()
                                                }
                                            }
                                        });
                                    case 8:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));

                        function i(e) {
                            return n.apply(this, arguments)
                        }
                        return i
                    }(),
                    type: "sdk",
                    desktop: !0,
                    mobile: !0,
                    preferred: a
                }
            }
            e["default"] = a
        }
    }
]);
//# sourceMappingURL=chunk-2d0e9b51.b7b4317e.js.map