(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0efd57"], {
        "9a92": function(t, e, n) {
            "use strict";
            n.r(e);
            n("f6b3");
            var r = n("080d");
            n("901e"), n("fd33"), n("337f");

            function o(t, e, n, r, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (s) {
                    return void n(s)
                }
                c.done ? e(u) : Promise.resolve(u).then(r, o)
            }

            function i(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = t.apply(e, n);

                        function c(t) {
                            o(a, r, i, c, u, "next", t)
                        }

                        function u(t) {
                            o(a, r, i, c, u, "throw", t)
                        }
                        c(void 0)
                    }))
                }
            }

            function a() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.heading,
                    n = t.description,
                    o = t.icon,
                    a = t.html,
                    c = t.button;
                return function() {
                    var t = i(regeneratorRuntime.mark((function t(i) {
                        var u, s, f, w, l, h;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (u = i.network, s = i.appNetworkId, f = i.walletSelect, w = i.exit, l = i.stateSyncStatus, h = i.stateStore, null !== u) {
                                        t.next = 5;
                                        break
                                    }
                                    if (!l.network) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 5, new Promise((function(t) {
                                        l.network && l.network.then(t), setTimeout((function() {
                                            null === u && t()
                                        }), 500)
                                    }));
                                case 5:
                                    if (h.network.get() == s) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        heading: e || "You Must Change Networks",
                                        description: n || "We've detected that you need to switch your wallet's network from <b>".concat(Object(r["f"])(u), "</b> to <b>").concat(Object(r["f"])(s), ' network</b> for this Dapp. <br><br> <i style="font-size: inherit; font-family: inherit;">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>'),
                                        eventCode: "networkFail",
                                        button: c || {
                                            onclick: function() {
                                                w(), f()
                                            },
                                            text: "Switch Wallet"
                                        },
                                        html: a,
                                        icon: o || r["b"]
                                    });
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }
            e["default"] = a
        }
    }
]);
//# sourceMappingURL=chunk-2d0efd57.542edb22.js.map