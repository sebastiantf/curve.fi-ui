(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-5958009c"], {
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
        ea6d: function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t("dfa6");

            function a(e, n, t, r, a, o, i) {
                try {
                    var l = e[o](i),
                        c = l.value
                } catch (s) {
                    return void t(s)
                }
                l.done ? n(c) : Promise.resolve(c).then(r, a)
            }

            function o(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function l(e) {
                            a(i, r, o, l, c, "next", e)
                        }

                        function c(e) {
                            a(i, r, o, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var i = '\n  <svg height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m1.36250526 6.825c-1.36250526 2.675-1.36250526 6.175-1.36250526 13.175s0 10.5 1.36250526 13.1750526c1.2 2.35 3.11249474 4.2624211 5.46249474 5.4624211 2.675 1.3625263 6.175 1.3625263 13.175 1.3625263s10.5 0 13.1750526-1.3625263c2.35-1.2 4.2624211-3.1124211 5.4624211-5.4624211 1.3625263-2.6750526 1.3625263-6.1750526 1.3625263-13.1750526s0-10.5-1.3625263-13.175c-1.2-2.35-3.1124211-4.26249474-5.4624211-5.46249474-2.6750526-1.36250526-6.1750526-1.36250526-13.1750526-1.36250526s-10.5 0-13.175 1.36250526c-2.35 1.2-4.26249474 3.11249474-5.46249474 5.46249474zm28.61875794 3.9624737c.35 0 .6812631.1437895.9250526.3875789.2436842.25.3812631.5874737.3751557.9311579-.0626294 3.7250527-.2064189 6.5750527-.4751557 8.8312632-.2625263 2.2563158-.6563158 3.9312631-1.25 5.2875789-.4.9062106-.8937895 1.6562106-1.4750526 2.2936842-.7812632.8437895-1.6749474 1.4563158-2.65 2.037579-.4168421.2492631-.8502106.4953684-1.3048421.7535789-.97.5508421-2.0365264 1.1565264-3.2451579 1.9651579-.4374737.2936842-1.0062106.2936842-1.4436843 0-1.2271578-.8181052-2.3077894-1.4312631-3.2866315-1.9865263-.2176842-.1234737-.4303158-.2441052-.6384211-.3634737-1.1436842-.6625263-2.1749474-1.2937894-3.0749474-2.2063158-.6-.6-1.1187368-1.3312631-1.5312631-2.2-.5625158-1.1625263-.94376843-2.5687368-1.22501054-4.3874736-.37501052-2.4312632-.56250526-5.6125264-.63146616-10.0250527-.0060391-.3436842.12521353-.6811579.3689609-.9311579.24374737-.2437894.5812526-.3875789.9312526-.3875789h.5375263c1.6562106.0063158 5.3124211-.1562105 8.4749474-2.61871581.4687369-.36250526 1.1250526-.36250526 1.5937895 0 3.1625263 2.46250531 6.8187368 2.62503161 8.4812631 2.61871581zm-2.9062106 14.6063158c.4062106-.837579.7437895-1.9937895 1-3.6563158.3062106-1.9874737.4937895-4.6874737.5812632-8.3624211-1.95-.0563158-5.3-.4312631-8.4937895-2.5812631-3.1936842 2.1436842-6.5436842 2.5187368-8.4874737 2.5812631.0687369 3.0374737.2062106 5.4.4249474 7.2562106.25 2.1125263.6063158 3.5437894 1.05 4.55.2937895.6687368.6188421 1.15 1.0063158 1.5749473.5187368.5688421 1.1749474 1.037579 2.0687368 1.5750527.3707369.222421.7794737.4537894 1.2244211.7056842.7927368.4486315 1.7003158.9623158 2.7130526 1.6068421.9941053-.634 1.8886316-1.1424211 2.6721053-1.5877895.2362105-.1342105.4622105-.2627368.6778947-.3872632 1.1-.6312631 1.9125263-1.1562105 2.5187369-1.7687368.4063157-.4187368.7375789-.8749474 1.0437894-1.5062105z" fill="#3375bb" fill-rule="evenodd"/>\n  </svg>\n';

            function l(e) {
                var n = e.preferred,
                    a = e.label,
                    l = e.iconSrc,
                    c = e.svg,
                    s = e.rpcUrl;
                return {
                    name: a || "Trust",
                    svg: c || i,
                    iconSrc: l,
                    wallet: function() {
                        var e = o(regeneratorRuntime.mark((function e(n) {
                            var r, a, i, l, c, u, d, f, h;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = n.getProviderName, a = n.getAddress, i = n.getNetwork, l = n.getBalance, c = window.ethereum || window.web3 && window.web3.currentProvider, u = "Trust" === r(c), !u || !s) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, Promise.all([t.e("chunk-065e770e"), t.e("chunk-76be3c62"), t.e("chunk-60b3a1f5"), t.e("chunk-5be3f797")]).then(t.bind(null, "2772"));
                                    case 6:
                                        d = e.sent["default"];
                                    case 7:
                                        return f = d ? d({
                                            rpcUrl: s
                                        }) : null, h = !1, e.abrupt("return", {
                                            provider: c,
                                            interface: u ? {
                                                address: {
                                                    get: function() {
                                                        return a(c)
                                                    }
                                                },
                                                network: {
                                                    get: function() {
                                                        return i(c)
                                                    }
                                                },
                                                balance: {
                                                    get: function() {
                                                        var e = o(regeneratorRuntime.mark((function e() {
                                                            var n;
                                                            return regeneratorRuntime.wrap((function(e) {
                                                                while (1) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        if (f) {
                                                                            e.next = 3;
                                                                            break
                                                                        }
                                                                        return h || (console.warn('The Trust provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the Trust wallet initialization object to get the balance.'), h = !0), e.abrupt("return", null);
                                                                    case 3:
                                                                        return e.next = 5, a(c);
                                                                    case 5:
                                                                        return n = e.sent, e.abrupt("return", l(f, n));
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
                                                name: r(c)
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
                    link: "https://link.trustwallet.com/open_url?coin_id=60&url=".concat(window.location.href),
                    installMessage: r["b"],
                    mobile: !0,
                    preferred: n
                }
            }
            n["default"] = l
        }
    }
]);
//# sourceMappingURL=chunk-5958009c.c6141166.js.map