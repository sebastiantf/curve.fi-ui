(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6b944cf9", "chunk-2d0d3a28"], {
        1389: function(e, t, n) {
            "use strict";
            var a = n("7cbb"),
                i = n.n(a);
            i.a
        },
        "5e35": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return s
            })), n.d(t, "a", (function() {
                return r
            }));
            n("d3b7"), n("96cf");
            var a = n("1da1"),
                i = n("2fa3"),
                s = {
                    btcPrice: null
                };

            function r() {
                return o.apply(this, arguments)
            }

            function o() {
                return o = Object(a["a"])(regeneratorRuntime.mark((function e() {
                    var t, n;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i["q"](fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"), 300);
                            case 2:
                                return t = e.sent, e.next = 5, t.json();
                            case 5:
                                return n = e.sent, s.btcPrice = n.bitcoin.usd, e.abrupt("return", n.bitcoin.usd);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), o.apply(this, arguments)
            }
        },
        "7cbb": function(e, t, n) {},
        "7fec": function(e, t, n) {
            "use strict";
            n("d81d"), n("b680"), n("b85c"), n("5fd7")
        },
        9510: function(e, t, n) {
            e.exports = function() {
                return new Worker(n.p + "c25f8c283571356d3a3e.worker.js")
            }
        },
        b2ea: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "blue window half-width info"
                    }, [n("fieldset", {
                        attrs: {
                            id: "lp-info-currency"
                        }
                    }, [n("legend", [e._v("Currency reserves")]), n("ul", {
                        attrs: {
                            id: "balances-info"
                        }
                    }, [e._l(Object.keys(e.currencies), (function(t, a) {
                        return n("li", [n("b", [e._v(e._s(e._f("capitalize")(t)) + ":")]), n("span", {
                            class: {
                                "loading line": !e.bal_info || null === e.bal_info[a]
                            }
                        }, [n("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.bal_info && e.bal_info[a],
                                expression: "bal_info && bal_info[i]"
                            }]
                        }, [e._v(" " + e._s(e.bal_info && e.toFixed(e.bal_info[a])) + " (" + e._s(e._f("toFixed2")((e.bal_info && 100 * e.bal_info[a]) / e.totalBalances)) + "%) ")])])])
                    })), n("li", [n("b", [e._v(e._s(e.totalCurrencies(e.currencies)) + ":")]), n("span", {
                        class: {
                            "loading line": null === e.totalBalances
                        }
                    }, [e._v(" " + e._s(e.toFixed(e.totalBalances)))])]), n("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["ren", "sbtc", "hbtc", "tbtc"].includes(e.currentPool),
                            expression: "['ren', 'sbtc', 'hbtc', 'tbtc'].includes(currentPool)"
                        }]
                    }, [n("b", [e._v("USD total:")]), n("span", {
                        class: {
                            "loading line": null === e.totalBalances
                        }
                    }, [e._v(" " + e._s(e._f("formatNumber")(e.totalBalances * e.btcPrice, 2)) + "$ ")])])], 2), n("p", [n("ul", [n("li", [n("b", [e._v("Fee:")]), n("span", {
                        class: {
                            "loading line": !e.fee
                        },
                        attrs: {
                            id: "fee-info"
                        }
                    }), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.fee,
                            expression: "fee"
                        }]
                    }, [e._v(" " + e._s(e.fee && e.fee.toFixed(3)))]), e._v("% ")]), n("li", [n("b", [e._v("Admin fee:")]), n("span", {
                        class: {
                            "loading line": null === e.admin_fee
                        },
                        attrs: {
                            id: "admin-fee-info"
                        }
                    }, [e._v(" " + e._s(e.admin_fee && e.admin_fee.toFixed(3)))]), e._v("% "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.admin_fee > 0,
                            expression: "admin_fee > 0"
                        }]
                    }, [e._v(" of " + e._s(e.fee && e.fee.toFixed(3)) + "%")])])])]), n("ul", [n("li", [n("b", [e._v(" Virtual price: ")]), n("span", {
                        class: {
                            "loading line": null === e.virtualPrice1
                        }
                    }, [n("span", {
                        staticClass: "tooltip"
                    }, [e._v(" " + e._s(e.virtualPrice1.toFixed(4)) + " "), n("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" " + e._s(e.virtualPrice1) + " ")])])]), e._v(" "), e._m(0)]), n("li", [e._m(1), n("span", {
                        class: {
                            "loading line": null === e.A1
                        }
                    }, [e._v(" " + e._s(e.A1) + " ")])]), n("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isRampingUp,
                            expression: "isRampingUp"
                        }]
                    }, [e._m(2), n("span", [e._v(" " + e._s(e.initial_A) + " -> " + e._s(e.future_A1) + " ")])]), n("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isRampingUp,
                            expression: "isRampingUp"
                        }]
                    }, [n("b", [e._v("Ramp up A ends on:")]), n("span", [e._v(" " + e._s(e.rampEnd))])]), n("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.admin_actions_deadline1 && 0 !== e.admin_actions_deadline1,
                            expression: "admin_actions_deadline1 !== null && admin_actions_deadline1 !== 0"
                        }]
                    }, [n("b", [e._v("Future A: ")]), n("span", {
                        class: {
                            "loading line": null === e.future_A1
                        }
                    }, [e._v(" " + e._s(e.future_A1) + " ")])]), n("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.admin_actions_deadline1 && 0 !== e.admin_actions_deadline1,
                            expression: "admin_actions_deadline1 !== null && admin_actions_deadline1 !== 0"
                        }]
                    }, [n("b", [e._v("Action deadline: ")]), n("div", {
                        class: {
                            "loading line": null === e.admin_actions_deadline1
                        }
                    }, [e._v(" " + e._s(e.admin_actions_readable) + " GMT "), e._m(3)])])]), n("p", [n("ul", [n("li", [n("b", [e._v("Liquidity utilization: ")]), n("span", {
                        class: {
                            "loading line": null === e.totalBalances || -1 == e.nativeVolume
                        }
                    }, [n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.totalBalances && -1 != e.nativeVolume,
                            expression: "totalBalances !== null && nativeVolume != -1"
                        }]
                    }, [e._v(" " + e._s((100 * e.nativeVolume / e.totalBalances).toFixed(2)) + "% ")])]), e._m(4)]), n("li", [n("b", [e._v("Daily USD volume: ")]), n("span", {
                        class: {
                            "loading line": -1 == e.poolVolumeUSD
                        }
                    }, [n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.poolVolumeUSD > -1,
                            expression: "poolVolumeUSD > -1"
                        }]
                    }, [e._v(" $" + e._s(e._f("formatNumber")(e.poolVolumeUSD && e.poolVolumeUSD, 2)) + " ")])])]), n("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isBTC,
                            expression: "isBTC"
                        }]
                    }, [n("b", [e._v("Daily ₿ volume: ")]), n("span", {
                        class: {
                            "loading line": -1 == e.poolVolumeUSD
                        }
                    }, [n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.poolVolumeUSD > -1,
                            expression: "poolVolumeUSD > -1"
                        }]
                    }, [e._v(" " + e._s(e.poolVolume && e.toFixed(e.poolVolume)) + " ₿ ")])])])])])]), n("fieldset", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.totalShare > 0 && e.initializedContracts,
                            expression: "totalShare > 0 && initializedContracts"
                        }],
                        attrs: {
                            id: "lp-info-container"
                        }
                    }, [n("legend", [e._v("My share: ( " + e._s((e.totalBalance / e.totalBalances * 100).toFixed(3)) + "% of pool)")]), n("ul", {
                        attrs: {
                            id: "lp-info"
                        }
                    }, [e._l(Object.keys(e.currencies), (function(t, a) {
                        return n("li", [n("b", [e._v(e._s(e._f("capitalize")(t)) + ":")]), n("span", [e._v(" " + e._s(e.l_info && e.toFixed(e.l_info[a])))])])
                    })), n("li", [n("b", [e._v(e._s(e.totalCurrencies(e.currencies)) + ":")]), n("span", {
                        class: {
                            "loading line": null === e.totalUserBalances
                        }
                    }, [e._v(" " + e._s(e.toFixed(e.totalUserBalances)))])]), n("li", [n("b", [e._v("USD balance:")]), n("span", [n("span", {
                        class: {
                            "loading line": null === e.realShare
                        }
                    }, [n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.realShare,
                            expression: "realShare !== null"
                        }]
                    }, [e._v(" " + e._s(e._f("formatNumber")(e._f("toFixed2")(e.realShare))) + " ")])])])]), n("li", [n("b", [e._v("Averaged USD balance:")]), e._v(" " + e._s(e._f("formatNumber")(e.usdShare1, 2)) + " ")])], 2)]), n("fieldset", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.totalStake > 0 && e.initializedContracts,
                            expression: "totalStake > 0 && initializedContracts"
                        }],
                        attrs: {
                            id: "lp-info-container"
                        }
                    }, [n("legend", [e._v("Staked share: ( " + e._s((e.totalStake / e.totalBalances * 100).toFixed(3)) + "% of pool)")]), n("ul", {
                        attrs: {
                            id: "stakelp-info"
                        }
                    }, [e._l(Object.keys(e.currencies), (function(t, a) {
                        return n("li", [n("b", [e._v(e._s(e._f("capitalize")(t)) + ":")]), n("span", [e._v(" " + e._s(e.staked_info && e.toFixed(e.staked_info[a])))])])
                    })), n("li", [n("b", [e._v(e._s(e.totalCurrencies(e.currencies)) + ":")]), n("span", {
                        class: {
                            "loading line": null === e.totalStakedBalances
                        }
                    }, [e._v(" " + e._s(e.toFixed(e.totalStakedBalances)))])]), n("li", [n("b", [e._v("USD balance:")]), n("span", [n("span", {
                        class: {
                            "loading line": null === e.realStake
                        }
                    }, [n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.realStake,
                            expression: "realStake !== null"
                        }]
                    }, [e._v(" " + e._s(e._f("formatNumber")(e._f("toFixed2")(e.realStake))) + " ")])])])]), n("li", [n("b", [e._v("Averaged USD balance:")]), e._v(" " + e._s(e._f("formatNumber")(e.usdStake1, 2)) + " ")])], 2)])])
                },
                i = [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), n("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" Average dollar value of pool token ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("b", {
                        staticClass: "tooltip"
                    }, [e._v(" A: "), n("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" Amplification coefficient chosen from fluctation of prices around 1 ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("b", [e._v(" Ramping up A: "), n("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), n("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v("Slowly changing up A so that it doesn't negatively change virtual price growth of shares")])])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("span", {
                        staticClass: "tooltip"
                    }, [e._v(" [?] "), n("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" This is when the proposed future A can be enacted and changed. It also may not be changed. ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("span", {
                        staticClass: "tooltip"
                    }, [e._v(" [?] "), n("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" 24h Volume/Liquidity ratio ")])])
                }],
                s = (n("99af"), n("cb29"), n("caad"), n("a15b"), n("d81d"), n("13d5"), n("4fad"), n("b64b"), n("d3b7"), n("07ac"), n("3835")),
                r = n("5530"),
                o = (n("96cf"), n("1da1")),
                l = n("2b0e"),
                c = n("51bf"),
                u = n("5245"),
                d = n("2fa3"),
                _ = n("a4e2"),
                f = (n("7fec"), n("3d15")),
                v = n("9510"),
                p = n.n(v),
                h = n("5e35"),
                m = n("506e"),
                b = new p.a,
                w = f["a"](b),
                S = {
                    props: ["pool", "bal_info", "total", "l_info", "totalShare", "fee", "admin_fee", "currencies", "tokenSupply", "tokenBalance", "usdShare", "staked_info", "totalStake", "usdStake", "combinedstats", "virtual_price", "A", "future_A", "admin_actions_deadline"],
                    data: function() {
                        return {
                            volumes: [],
                            realShare: null,
                            realStake: null,
                            lastPoint: null,
                            lastPool: null,
                            btcPrice: 0,
                            loadingShares: !1
                        }
                    },
                    methods: {
                        toFixed: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if ("" == e || null === e || void 0 === e) return "";
                            2 == t && ["tbtc", "ren", "sbtc", "hbtc"].includes(this.currentPool) && (t = 8);
                            var n = this.formatNumber(e, t);
                            return n
                        },
                        totalCurrencies: function(e) {
                            return ["susdv2", "tbtc", "ren", "hbtc"].includes(this.currentPool) ? Object.values(e).join("+") : Object.keys(e).join("+").toUpperCase()
                        },
                        formatNumber: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            return d["g"](e, t)
                        },
                        updateShares: function() {
                            var e = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function t() {
                                var n, a, i, s, o, l, c, d, _, f;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.usdShare1 > 0 || e.usdStake1 > 0) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return n = e.currentPool, n = "iearn" == n ? "y" : "susdv2" == n ? "susd" : "ren" == n ? "ren2" : "sbtc" == n ? "rens" : n, t.next = 6, fetch("".concat(window.domain, "/raw-stats/").concat(n, "-1m.json"));
                                        case 6:
                                            return a = t.sent, t.next = 9, a.json();
                                        case 9:
                                            return e.lastPoint = t.sent, e.lastPoint = e.lastPoint[e.lastPoint.length - 1], t.next = 13, h["a"]();
                                        case 13:
                                            if (e.btcPrice = t.sent, i = u["g"][e.currentPool].N_COINS, !e.loadingShares) {
                                                t.next = 17;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 17:
                                            s = new Array(i).fill(1), o = 0;
                                        case 19:
                                            if (!(o < i)) {
                                                t.next = 34;
                                                break
                                            }
                                            if (1 != o) {
                                                t.next = 22;
                                                break
                                            }
                                            return t.abrupt("continue", 31);
                                        case 22:
                                            return l = 1, c = 1e6, ["tbtc", "ren", "sbtc", "hbtc"].includes(e.currentPool) && (l = 1e-4, c = 1e8), u["g"][e.currentPool].is_meta && (c = 1e18), t.next = 28, w.calcPrice(Object(r["a"])({}, e.lastPoint, {
                                                N_COINS: u["g"][e.currentPool].N_COINS,
                                                PRECISION_MUL: u["g"][e.currentPool].coin_precisions.map((function(e) {
                                                    return 1e18 / e
                                                })),
                                                PRECISION: 1e18
                                            }), o, 1, l * u["g"][e.currentPool].coin_precisions[o]);
                                        case 28:
                                            d = t.sent, _ = d / c / l, s[o] = _;
                                        case 31:
                                            o++, t.next = 19;
                                            break;
                                        case 34:
                                            if (!e.loadingShares) {
                                                t.next = 36;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 36:
                                            for (e.loadingShares = !0, e.realShare = 0, e.realStake = 0, f = 0; f < i; f++) e.realShare += +e.l_info[f] * s[f], e.realStake += +e.staked_info[f] * s[f];
                                            e.isBTC && (e.realShare *= e.btcPrice, e.realStake *= e.btcPrice), e.loadingShares = !1;
                                        case 42:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function t() {
                            var n, a, i, r, o, c, u, d;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = "iearn" == e.currentPool ? "y" : "susdv2" == e.currentPool ? "susd" : e.currentPool, a = _["f"].volumes[n][0] || 0, !e.isBTC) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 5, h["a"]();
                                    case 5:
                                        e.btcPrice = t.sent;
                                    case 6:
                                        if (-1 != a) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.next = 9, fetch("".concat(window.domain, "/raw-stats/apys.json"));
                                    case 9:
                                        return i = t.sent, t.next = 12, i.json();
                                    case 12:
                                        for (i = t.sent, r = 0, o = Object.entries(_["f"].volumes); r < o.length; r++) c = Object(s["a"])(o[r], 2), u = c[0], c[1], -1 == _["f"].volumes[u][0] && (d = "ren" == u ? i.volume.ren2 : "sbtc" == u ? i.volume.rens : i.volume[u], l["a"].set(_["f"].volumes[u], 0, d || 0), ["tbtc", "ren", "sbtc", "hbtc"].includes(u) && (l["a"].set(_["f"].volumes[u], 0, d * e.btcPrice || 0), l["a"].set(_["f"].volumes[u], 1, d || 0)));
                                    case 14:
                                        e.hasLoadedInfo && e.updateShares(), e.$watch((function() {
                                            return e.hasLoadedInfo
                                        }), (function(t) {
                                            return e.updateShares()
                                        })), m["a"].$on("updateShares", (function() {
                                            e.updateShares()
                                        }));
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    computed: {
                        showShares: c["h"].showShares,
                        initializedContracts: c["h"].initializedContracts,
                        totalSupply: function() {
                            return this.tokenSupply ? this.tokenSupply : c["h"].totalSupply()
                        },
                        totalBalance: function() {
                            return this.tokenBalance ? this.tokenBalance : c["h"].totalBalance()
                        },
                        curveStakeBalance: function() {
                            return c["f"].curveStakeBalance
                        },
                        volumePool: function() {
                            return "iearn" == this.currentPool ? "y" : "susdv2" == this.currentPool ? "susd" : this.currentPool
                        },
                        currentPool: function() {
                            return this.pool || c["f"].currentContract
                        },
                        virtualPrice1: function() {
                            return this.virtual_price || c["f"].virtual_price || 0
                        },
                        totalBalances: function() {
                            return this.bal_info && this.bal_info.reduce((function(e, t) {
                                return e + t
                            }), 0) || null
                        },
                        totalUserBalances: function() {
                            return this.l_info && this.l_info.reduce((function(e, t) {
                                return e + t
                            }), 0) || null
                        },
                        totalStakedBalances: function() {
                            return this.staked_info && this.staked_info.reduce((function(e, t) {
                                return e + t
                            }), 0) || null
                        },
                        usdShare1: function() {
                            var e = this.usdShare || c["h"].usdShare();
                            return this.isBTC && (e *= this.btcPrice), e
                        },
                        usdStake1: function() {
                            var e = this.usdStake || c["h"].usdStake();
                            return this.isBTC && (e *= this.btcPrice), e
                        },
                        A1: function() {
                            return this.A || 1e18 * c["h"].A() | 0
                        },
                        future_A1: function() {
                            return this.future_A || 0 | c["h"].future_A()
                        },
                        initial_A: function() {
                            return c["h"].initial_A()
                        },
                        isRampingUp: function() {
                            return c["h"].initial_A_time() < Date.now() / 1e3 < c["h"].future_A_time()
                        },
                        rampEnd: function() {
                            return d["f"](c["h"].future_A_time())
                        },
                        admin_actions_readable: function() {
                            return d["f"](this.admin_actions_deadline1)
                        },
                        admin_actions_deadline1: function() {
                            return this.admin_actions_deadline || c["h"].admin_actions_deadline()
                        },
                        poolVolumeUSD: function() {
                            return _["f"].volumes["iearn" == this.currentPool ? "y" : "susdv2" == this.currentPool ? "susd" : this.currentPool][0]
                        },
                        poolVolume: function() {
                            return _["f"].volumes["iearn" == this.currentPool ? "y" : "susdv2" == this.currentPool ? "susd" : this.currentPool][1] || 0
                        },
                        nativeVolume: function() {
                            return this.isBTC ? this.poolVolume : this.poolVolumeUSD
                        },
                        isBTC: function() {
                            return ["tbtc", "ren", "sbtc", "hbtc"].includes(this.currentPool)
                        },
                        hasLoadedInfo: function() {
                            var e = u["g"][this.currentPool].N_COINS;
                            return this.currentPool && this.l_info && void 0 !== this.l_info[e - 1] || this.staked_info && void 0 !== this.staked_info[e - 1]
                        }
                    }
                },
                g = S,
                k = (n("1389"), n("2877")),
                x = Object(k["a"])(g, a, i, !1, null, "40a0a460", null);
            t["a"] = x.exports
        }
    }
]);
//# sourceMappingURL=chunk-6b944cf9.8c9aa35d.js.map