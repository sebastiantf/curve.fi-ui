(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-59574c39"], {
        dfa6: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return r
            })), t.d(n, "b", (function() {
                return a
            }));
            var r = function(e) {
                    var n = e.currentWallet,
                        t = e.selectedWallet;
                    return n ? '\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(n, "</b>\n    installed. If you would prefer to use\n    <b>").concat(t, '</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(t, ' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    ') : '\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(t, '</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera" === t ? '<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>' : "", "\n    </p>\n    ")
                },
                a = function(e) {
                    var n = e.selectedWallet;
                    return '\n  <p style="font-size: 0.889rem;">\n    You\'ll need to install <b>'.concat(n, "</b> to continue. Click below to install and then load this Dapp with <b>").concat(n, "</b>.\n  </p>\n  ")
                }
        },
        e161: function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t("dfa6");

            function a(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        c = i.value
                } catch (s) {
                    return void t(s)
                }
                i.done ? n(c) : Promise.resolve(c).then(r, a)
            }

            function l(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function i(e) {
                            a(o, r, l, i, c, "next", e)
                        }

                        function c(e) {
                            a(o, r, l, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var o = '\n    <svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">\n        <defs>\n            <style>.cls-1{fill:#2d65f8;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#173fff;}.cls-3{fill:#fcfcff;}.cls-4{fill:#fff;}</style>\n        </defs>\n        <title>huobi wallet icon</title>\n        <path class="cls-1" d="M292.28,0H552Q742.79,27,858.24,122.88T1024,392V731.72c0,101.63-10.58,138.48-30.45,175.64a207.13,207.13,0,0,1-86.19,86.19c-37.16,19.87-74,30.45-175.64,30.45H292.28c-101.63,0-138.48-10.58-175.64-30.45a207.13,207.13,0,0,1-86.19-86.19C10.58,870.2,0,833.35,0,731.72V292.28C0,190.65,10.58,153.8,30.45,116.64a207.13,207.13,0,0,1,86.19-86.19C153.8,10.58,190.65,0,292.28,0Z"/>\n        <path class="cls-2" d="M993.55,116.64a207.13,207.13,0,0,0-86.19-86.19C870.21,10.58,833.35,0,731.72,0H552Q742.79,27,858.24,122.88T1024,392V292.28C1024,190.65,1013.42,153.8,993.55,116.64Z"/>\n        <path class="cls-3" d="M591.8,382.71c0-97.43-48-181.13-84.48-208.41,0,0-2.78-1.53-2.59,2.3-3,188-100.19,239-153.65,307.63-123.27,158.45-8.6,332.23,108.14,364.18,65.35,18-15.06-31.95-25.4-136.86C421.21,584.73,591.8,487.81,591.8,382.71Z"/>\n        <path class="cls-4" d="M643.64,445.69c-.78-.51-1.81-.9-2.53.32-2.07,23.74-26.56,74.42-57.67,121C478.07,725,538.08,801.1,571.91,842.18c19.44,23.74,0,0,49-24.25,60.52-36.26,99.8-98.95,105.62-168.62A242.5,242.5,0,0,0,643.64,445.69Z"/>\n    </svg>';

            function i(e) {
                var n = e.preferred,
                    a = e.label,
                    i = e.svg,
                    c = e.rpcUrl;
                return {
                    name: a || "Huobi Wallet",
                    svg: i || o,
                    wallet: function() {
                        var e = l(regeneratorRuntime.mark((function e(n) {
                            var r, a, o, i, s, u, f, d, h;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = n.getProviderName, a = n.getAddress, o = n.getNetwork, i = n.getBalance, s = window.ethereum || window.web3 && window.web3.currentProvider, u = "huobiwallet" === r(s), !u || !c) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, Promise.all([t.e("chunk-065e770e"), t.e("chunk-76be3c62"), t.e("chunk-60b3a1f5"), t.e("chunk-5be3f797")]).then(t.bind(null, "2772"));
                                    case 6:
                                        f = e.sent["default"];
                                    case 7:
                                        return d = f ? f({
                                            rpcUrl: c
                                        }) : null, h = !1, e.abrupt("return", {
                                            provider: s,
                                            interface: u ? {
                                                address: {
                                                    get: function() {
                                                        return a(s)
                                                    }
                                                },
                                                network: {
                                                    get: function() {
                                                        return o(s)
                                                    }
                                                },
                                                balance: {
                                                    get: function() {
                                                        var e = l(regeneratorRuntime.mark((function e() {
                                                            var n;
                                                            return regeneratorRuntime.wrap((function(e) {
                                                                while (1) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        if (d) {
                                                                            e.next = 3;
                                                                            break
                                                                        }
                                                                        return h || (console.warn('The Huobi Wallet provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the Huobi Wallet initialization object to get the balance.'), h = !0), e.abrupt("return", null);
                                                                    case 3:
                                                                        return e.next = 5, a(s);
                                                                    case 5:
                                                                        return n = e.sent, e.abrupt("return", i(d, n));
                                                                    case 7:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }), e)
                                                        })));

                                                        function n() {
                                                            return e.apply(this, arguments)
                                                        }
                                                        return n
                                                    }()
                                                },
                                                name: r(s)
                                            } : null
                                        });
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));

                        function n(n) {
                            return e.apply(this, arguments)
                        }
                        return n
                    }(),
                    type: "injected",
                    link: "https://www.huobiwallet.com",
                    installMessage: r["b"],
                    mobile: !0,
                    preferred: n
                }
            }
            n["default"] = i
        }
    }
]);
//# sourceMappingURL=chunk-59574c39.3d7b3884.js.map