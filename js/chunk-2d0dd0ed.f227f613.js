(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0dd0ed"], {
        8087: function(n, e, t) {
            "use strict";
            t.r(e);
            t("f6b3");
            var r = t("080d");
            t("901e"), t("fd33"), t("337f");

            function o(n, e, t, r, o, i, c) {
                try {
                    var a = n[i](c),
                        u = a.value
                } catch (s) {
                    return void t(s)
                }
                a.done ? e(u) : Promise.resolve(u).then(r, o)
            }

            function i(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var c = n.apply(e, t);

                        function a(n) {
                            o(c, r, i, a, u, "next", n)
                        }

                        function u(n) {
                            o(c, r, i, a, u, "throw", n)
                        }
                        a(void 0)
                    }))
                }
            }
            var c = '\n  <svg width="40px" height="40px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g id="Identity" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g id="Artboard" transform="translate(-11.000000, -220.000000)">\n          <g id="Group" transform="translate(11.508925, 220.556971)">\n              <circle id="Oval" fill="#313D53" cx="43.4910749" cy="43.4910749" r="43.4910749"></circle>\n              <path d="M26.9807751,53.5120539 L26.9807751,56.7049531 C26.9807751,58.9140921 28.7716361,60.7049531 30.9807751,60.7049531 L56.0422363,60.7049531 C58.2513753,60.7049531 60.0422363,58.9140921 60.0422363,56.7049531 L60.0422363,30.2473297 C60.0422363,28.0381907 58.2513753,26.2473297 56.0422363,26.2473297 L26.9807751,26.2473297 L26.9807751,47.8897807 L26.9807751,53.5120539 Z M20.4910749,20.4430293 L56.4910749,20.4430293 C62.0139224,20.4430293 66.4910749,24.9201818 66.4910749,30.4430293 L66.4910749,56.5391205 C66.4910749,62.061968 62.0139224,66.5391205 56.4910749,66.5391205 L30.4910749,66.5391205 C24.9682274,66.5391205 20.4910749,62.061968 20.4910749,56.5391205 L20.4910749,20.4430293 Z M33.9720552,26.2473297 L40.419051,26.2473297 L40.419051,41.0316245 L40.419051,49.5120539 C40.419051,51.7211929 38.62819,53.5120539 36.419051,53.5120539 L26.9807751,53.5120539 L26.9807751,47.8897807 L33.9720552,47.8897807 L33.9720552,26.2473297 Z M33.9720552,26.2473297 L40.419051,26.2473297 L33.9720552,26.2473297 Z M53.0509562,60.7049531 L46.6039605,60.7049531 L46.6039605,45.9206584 L46.6039605,37.4402289 C46.6039605,35.2310899 48.3948215,33.4402289 50.6039605,33.4402289 L60.0422363,33.4402289 L60.0422363,39.0625021 L53.0509562,39.0625021 L53.0509562,60.7049531 Z M46.6039605,60.7049531 L53.0509562,60.7049531 L46.6039605,60.7049531 Z M60.0422363,39.0625021 L60.0422363,33.4402289 L60.0422363,39.0625021 Z" id="Icon-Blue" fill="#E8EEFF"></path>\n          </g>\n      </g>\n  </g>\n  </svg>\n';

            function a(n) {
                var e = n.apiKey,
                    o = n.networkId,
                    a = n.preferred,
                    u = n.label,
                    s = n.iconSrc,
                    l = n.svg;
                return {
                    name: u || "Squarelink",
                    svg: l || c,
                    iconSrc: s,
                    wallet: function() {
                        var n = i(regeneratorRuntime.mark((function n(i) {
                            var c, a, u, s, l;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, t.e("chunk-2d0ea0d3").then(t.t.bind(null, "8fc2", 7));
                                    case 2:
                                        return c = n.sent, a = c["default"], u = new a(e, Object(r["f"])(o), {
                                            useSync: !0
                                        }), s = u.getProviderSync(), l = i.BigNumber, n.abrupt("return", {
                                            provider: s,
                                            instance: u,
                                            interface: {
                                                name: "Squarelink", connect: s.enable, disconnect: function() {
                                                    return s.stop()
                                                }, address: {
                                                    get: function() {
                                                        return Promise.resolve(u.accounts[0])
                                                    }
                                                }, network: {
                                                    get: function() {
                                                        return Promise.resolve(Object(r["a"])(u.network))
                                                    }
                                                }, balance: {
                                                    get: function() {
                                                        return new Promise((function(n) {
                                                            u.accounts.length ? s.sendAsync({
                                                                jsonrpc: "2.0",
                                                                method: "eth_getBalance",
                                                                params: [u.accounts[0], "latest"],
                                                                id: 1
                                                            }, (function(e, t) {
                                                                n(l(t.result).toString(10))
                                                            })) : n(null)
                                                        }))
                                                    }
                                                }, dashboard: function() {
                                                    return Object(r["g"])("https://app.squarelink.com/")
                                                }
                                            }
                                        });
                                    case 8:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));

                        function c(e) {
                            return n.apply(this, arguments)
                        }
                        return c
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
//# sourceMappingURL=chunk-2d0dd0ed.f227f613.js.map