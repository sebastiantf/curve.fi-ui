(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-59571bce"], {
        cb96: function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t("dfa6");

            function o(e, n, t, r, o, a, i) {
                try {
                    var l = e[a](i),
                        c = l.value
                } catch (s) {
                    return void t(s)
                }
                l.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function a(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(n, t);

                        function l(e) {
                            o(i, r, a, l, c, "next", e)
                        }

                        function c(e) {
                            o(i, r, a, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var i = '\n\t<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 93 93">\n\t\t<defs>\n\t\t\t\t<linearGradient id="a" x1="97.185%" x2="-.038%" y1="3.105%" y2="99.699%">\n\t\t\t\t\t\t<stop offset="0%" stop-color="#11C4D1"/>\n\t\t\t\t\t\t<stop offset="100%" stop-color="#0062AD"/>\n\t\t\t\t</linearGradient>\n\t\t</defs>\n\t\t<g fill="none" fill-rule="nonzero">\n\t\t\t\t<path fill="url(#a)" d="M92.755 63.804s0 9.64-1.028 13.78c-1.028 4.187-2.985 7.06-5.09 9.202-2.154 2.142-4.993 4.09-9.3 5.112-4.356 1.023-13.754.974-13.754.974H29.417s-9.642 0-13.803-1.022c-4.16-1.071-7.097-2.97-9.25-5.113-2.155-2.142-4.112-4.966-5.091-9.3-1.028-4.333-.98-13.682-.98-13.682V29.671s0-9.64 1.029-13.78c1.027-4.187 2.985-7.06 5.09-9.202 2.154-2.142 4.993-4.09 9.3-5.113C20.068.554 29.466.603 29.466.603h34.166s9.642 0 13.803 1.022c4.16 1.071 7.097 2.97 9.25 5.113 2.154 2.142 4.112 4.966 5.091 9.3.98 4.333.98 13.682.98 13.682v34.084z"/>\n\t\t\t\t<path fill="#FFF" d="M78.267 28.795c1.909 26.244-15.614 38.71-31.326 40.073-14.587 1.265-28.292-7.304-29.467-20.597-.979-10.955 6.07-15.678 11.6-16.117 5.679-.486 10.427 3.263 10.867 7.84.392 4.382-2.447 6.427-4.454 6.573-1.566.146-3.524-.78-3.72-2.727-.147-1.704.538-1.899.342-3.7-.293-3.214-3.181-3.555-4.747-3.409-1.91.146-5.385 2.338-4.944 7.694.49 5.404 5.874 9.69 12.922 9.056 7.636-.682 12.971-6.378 13.363-14.412 0-.439.098-.828.293-1.218.098-.146.147-.292.294-.438.196-.292.392-.536.636-.779l.686-.682c3.328-3.019 15.37-10.225 26.676-7.985.098 0 .196.049.245.097.44 0 .685.341.734.73"/>\n\t\t</g>\n\t</svg>\n';

            function l(e) {
                var n = e.preferred,
                    o = e.label,
                    l = e.iconSrc,
                    c = e.svg,
                    s = e.rpcUrl;
                return {
                    name: o || "imToken",
                    iconSrc: l,
                    svg: c || i,
                    wallet: function() {
                        var e = a(regeneratorRuntime.mark((function e(n) {
                            var r, o, a, i, l, c, u;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = n.getProviderName, o = n.getBalance, a = window.ethereum, i = "imToken" === r(a), !i || !s) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, Promise.all([t.e("chunk-065e770e"), t.e("chunk-76be3c62"), t.e("chunk-60b3a1f5"), t.e("chunk-5be3f797")]).then(t.bind(null, "2772"));
                                    case 6:
                                        l = e.sent["default"];
                                    case 7:
                                        return c = l ? l({
                                            rpcUrl: s
                                        }) : null, u = !1, e.abrupt("return", {
                                            provider: a,
                                            interface: i ? {
                                                address: {
                                                    get: function() {
                                                        return Promise.resolve(a.selectedAddress)
                                                    }
                                                },
                                                network: {
                                                    get: function() {
                                                        return Promise.resolve(Number(a.networkVersion))
                                                    }
                                                },
                                                balance: {
                                                    get: function() {
                                                        return c ? o(c, a.selectedAddress) : (u || (console.warn('The imToken provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the imToken wallet initialization object to get the balance.'), u = !0), Promise.resolve(null))
                                                    }
                                                },
                                                name: r(a),
                                                connect: function() {
                                                    return a.enable()
                                                }
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
                    link: "imtokenv2://navigate?screen=DappView&url=".concat(window.location.href),
                    installMessage: r["b"],
                    mobile: !0,
                    preferred: n
                }
            }
            n["default"] = l
        },
        dfa6: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return r
            })), t.d(n, "b", (function() {
                return o
            }));
            var r = function(e) {
                    var n = e.currentWallet,
                        t = e.selectedWallet;
                    return n ? '\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(n, "</b>\n    installed. If you would prefer to use\n    <b>").concat(t, '</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(t, ' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    ') : '\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(t, '</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera" === t ? '<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>' : "", "\n    </p>\n    ")
                },
                o = function(e) {
                    var n = e.selectedWallet;
                    return '\n  <p style="font-size: 0.889rem;">\n    You\'ll need to install <b>'.concat(n, "</b> to continue. Click below to install and then load this Dapp with <b>").concat(n, "</b>.\n  </p>\n  ")
                }
        }
    }
]);
//# sourceMappingURL=chunk-59571bce.e66b3df9.js.map