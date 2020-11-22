(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-562116f9"], {
        "07ac": function(e, t, a) {
            var r = a("23e7"),
                n = a("6f53").values;
            r({
                target: "Object",
                stat: !0
            }, {
                values: function(e) {
                    return n(e)
                }
            })
        },
        5899: function(e, t) {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        "58a8": function(e, t, a) {
            var r = a("1d80"),
                n = a("5899"),
                s = "[" + n + "]",
                i = RegExp("^" + s + s + "*"),
                o = RegExp(s + s + "*$"),
                c = function(e) {
                    return function(t) {
                        var a = String(r(t));
                        return 1 & e && (a = a.replace(i, "")), 2 & e && (a = a.replace(o, "")), a
                    }
                };
            e.exports = {
                start: c(1),
                end: c(2),
                trim: c(3)
            }
        },
        8161: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "blue window half-width info"
                    }, [a("fieldset", {
                        attrs: {
                            id: "profit-info"
                        }
                    }, [a("legend", [e._v(" Profit in " + e._s(e.profitIn) + " " + e._s("USD" == e.profitIn ? "[Virtual profit]" : "tokens" == e.profitIn ? "[Impermanent Profit]" : "tokens") + " "), a("span", {
                        staticClass: "tooltip"
                    }, [a("img", {
                        staticClass: "icon small hoverpointer clear-cache-icon",
                        attrs: {
                            src: "https://www.curve.fi/sync-solid.svg"
                        },
                        on: {
                            click: function(t) {
                                e.clearCache(), e.mounted()
                            }
                        }
                    }), a("span", {
                        staticClass: "tooltiptext inverse"
                    }, [e._v("Clear profit cache")])]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.notinpricedata,
                            expression: "!notinpricedata"
                        }],
                        staticClass: "showinoptions"
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.showinUSD,
                            expression: "showinUSD"
                        }],
                        attrs: {
                            id: "showinUSD",
                            type: "radio",
                            name: "showinUSD",
                            value: "1"
                        },
                        domProps: {
                            checked: e._q(e.showinUSD, "1")
                        },
                        on: {
                            change: function(t) {
                                e.showinUSD = "1"
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "showinUSD"
                        }
                    }, [e._v("Show in USD [Virtual profit]")]), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.showinUSD,
                            expression: "showinUSD"
                        }],
                        attrs: {
                            id: "showinBTC",
                            type: "radio",
                            name: "showinUSD",
                            value: "2"
                        },
                        domProps: {
                            checked: e._q(e.showinUSD, "2")
                        },
                        on: {
                            change: function(t) {
                                e.showinUSD = "2"
                            }
                        }
                    }), a("label", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["ren", "sbtc", "hbtc", "tbtc"].includes(e.currentPool),
                            expression: "['ren', 'sbtc', 'hbtc', 'tbtc'].includes(currentPool)"
                        }],
                        attrs: {
                            for: "showinBTC"
                        }
                    }, [e._v("Show in BTC")]), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.showinUSD,
                            expression: "showinUSD"
                        }],
                        attrs: {
                            id: "showintokens",
                            type: "radio",
                            name: "showintokens",
                            value: "3"
                        },
                        domProps: {
                            checked: e._q(e.showinUSD, "3")
                        },
                        on: {
                            change: function(t) {
                                e.showinUSD = "3"
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "showintokens"
                        }
                    }, [e._v("Show in tokens [Impermanent profit]")])])]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 3 == e.showinUSD,
                            expression: "showinUSD == 3"
                        }],
                        staticClass: "info-message"
                    }, [e._v(" Profit in tokens is affected by deposit slippage and fluctuations in token pricings ")]), a("ul", {
                        attrs: {
                            id: "profit"
                        }
                    }, [a("li", [a("b", [e._v("Deposits:")]), a("span", {
                        class: {
                            "loading line": -1 == e.deposits
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: -1 != e.deposits,
                            expression: "deposits != -1"
                        }]
                    }, [e._v(" " + e._s(e.toFixed(e.showDeposits)) + " ")])])]), a("li", [a("b", [e._v("Withdrawals:")]), a("span", {
                        class: {
                            "loading line": -1 == e.withdrawals
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: -1 != e.withdrawals,
                            expression: "withdrawals != -1"
                        }]
                    }, [e._v(" " + e._s(e.showWithdrawals > 0 ? e.toFixed(e.showWithdrawals) : 0) + " ")])])]), a("li", [a("b", [e._v("Available:")]), a("span", {
                        class: {
                            "loading line": -1 == e.available
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: -1 != e.available,
                            expression: "available != -1"
                        }]
                    }, [e._v(" " + e._s(e.toFixed(e.showAvailable)) + " ")])]), e._v(" ("), a("span", {
                        class: {
                            "loading line": -1 == e.getStakedBalance
                        }
                    }), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: +e.showStakedBalance >= 0,
                            expression: "+showStakedBalance >= 0"
                        }]
                    }, [e._v(e._s(e.toFixed(+e.showStakedBalance >= 0 && e.showStakedBalance)) + " ")]), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: -1 != e.showStakedTokens,
                            expression: "showStakedTokens != -1"
                        }]
                    }, [e._v("[" + e._s(e.showStakedTokens) + "]")]), e._v(" staked) ")]), a("li", [a("b", [e._v(" Pool Profit " + e._s(e.isInVault ? "+ yVault profit" : "") + " "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long inverse"
                    }, [e._v(" Profit from Pool trading fees " + e._s(e.isInVault ? "+ yVault profit" : "") + " ")])]), e._v(": ")]), a("span", {
                        class: {
                            "loading line": -1 == e.available
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: -1 != e.available,
                            expression: "available != -1 "
                        }]
                    }, [e._v(" " + e._s(e.toFixed(e.showProfit)))])])]), a("br"), a("li", [a("b", [e._v(" Daily profit(unstable) "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long inverse"
                    }, [e._v(" Profit from Pool trading fees for a day using APY of " + e._s(e.dailyAPY && e.dailyAPY.toFixed(2)) + "% per day ")])]), e._v(" : ")]), a("span", {
                        class: {
                            "loading line": null === e.dailyAPY
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.dailyAPY,
                            expression: "dailyAPY !== null"
                        }]
                    }, [e._v(" " + e._s(((e.showAvailable + e.showStakedBalance) * e.dailyAPY / 100).toFixed(2)) + " " + e._s(e.profitIn))])])]), a("br"), a("ul", {
                        staticClass: "snxrewards"
                    }, [a("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susdv2" == e.currentPool,
                            expression: "currentPool == 'susdv2'"
                        }],
                        staticClass: "tooltip",
                        attrs: {
                            href: "https://blog.synthetix.io/new-curve-pool-launch/"
                        }
                    }, [e._v("[?]")]), a("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "sbtc" == e.currentPool,
                            expression: "currentPool == 'sbtc'"
                        }],
                        staticClass: "tooltip",
                        attrs: {
                            href: "https://medium.com/renproject/introducing-an-incentivized-btc-liquidity-pool-by-ren-synthetix-and-curve-213d21691d9a"
                        }
                    }, [e._v(" [?] ")]), ["susdv2", "sbtc"].includes(e.currentPool) ? a("li", {
                        class: {
                            "loading line": null === e.earnedSNX && null === e.claimableSNX
                        }
                    }, [a("b", [e._v("Pending SNX LP rewards:")]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.earnedSNX || null !== e.claimableSNX,
                            expression: "earnedSNX !== null || claimableSNX !== null "
                        }]
                    }, [e._v(" " + e._s(+e.showEarnedSNX + +e.showEarnedSNXGauge) + " " + e._s(1 == +e.showinUSD ? "USD" : "SNX"))])]) : e._e(), ["musd"].includes(e.currentPool) ? a("li", {
                        class: {
                            "loading line": null === e.earnedSNX && null === e.claimableSNX
                        }
                    }, [a("b", [e._v("Pending MTA LP rewards:")]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.earnedSNX || null !== e.claimableSNX,
                            expression: "earnedSNX !== null || claimableSNX !== null "
                        }]
                    }, [e._v(" " + e._s(+e.showEarnedSNX + +e.showEarnedSNXGauge) + " " + e._s(1 == +e.showinUSD ? "USD" : "MTA"))])]) : e._e(), ["tbtc"].includes(e.currentPool) ? a("li", {
                        class: {
                            "loading line": null === e.earnedSNX && null === e.claimableSNX
                        }
                    }, [a("b", [e._v("Pending KEEP LP rewards:")]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.earnedSNX || null !== e.claimableSNX,
                            expression: "earnedSNX !== null || claimableSNX !== null "
                        }]
                    }, [e._v(" " + e._s(+e.showEarnedSNX + +e.showEarnedSNXGauge) + " " + e._s(1 == +e.showinUSD ? "USD" : "MTA"))])]) : e._e(), ["susdv2", "sbtc"].includes(e.currentPool) ? a("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "sbtc" == e.currentPool,
                            expression: "currentPool == 'sbtc'"
                        }],
                        class: {
                            "loading line": null === e.earnedREN
                        }
                    }, [a("b", [e._v("Pending REN LP rewards:")]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.earnedREN,
                            expression: "earnedREN !== null"
                        }]
                    }, [e._v(" " + e._s(e.showEarnedREN) + " " + e._s(1 == +e.showinUSD ? "USD" : "REN"))])]) : e._e(), ["susdv2", "sbtc"].includes(e.currentPool) ? a("li", {
                        class: {
                            "loading line": null === e.earnedSNX
                        }
                    }, [a("b", [e._v("Paid SNX LP rewards:")]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.paidRewardsSNX,
                            expression: "paidRewardsSNX !== null"
                        }]
                    }, [e._v(" " + e._s(e.showRewardsSNX) + " " + e._s(1 == +e.showinUSD ? "USD" : "SNX"))])]) : e._e(), ["susdv2", "sbtc"].includes(e.currentPool) ? a("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "sbtc" == e.currentPool,
                            expression: "currentPool == 'sbtc'"
                        }],
                        class: {
                            "loading line": null === e.earnedSNX
                        }
                    }, [a("b", [e._v("Paid REN LP rewards:")]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.paidRewardsREN,
                            expression: "paidRewardsREN !== null"
                        }]
                    }, [e._v(" " + e._s(e.showRewardsREN) + " " + e._s(1 == +e.showinUSD ? "USD" : "REN"))])]) : e._e(), ["susdv2", "sbtc"].includes(e.currentPool) ? a("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susdv2" == e.currentPool && e.showStakedBalance > 0,
                            expression: "currentPool == 'susdv2' && showStakedBalance > 0"
                        }],
                        class: {
                            "loading line": null === e.weeklyEstimateSNX
                        }
                    }, [a("b", [e._v("Estimated weekly SNX LP rewards:")]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.weeklyEstimateSNX,
                            expression: "weeklyEstimateSNX !== null"
                        }]
                    }, [e._v(" " + e._s(e.showWeeklySNX) + " " + e._s(1 == +e.showinUSD ? "USD" : "SNX"))])]) : e._e(), ["susdv2", "sbtc"].includes(e.currentPool) ? a("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "sbtc" == e.currentPool && e.showStakedBalance > 0,
                            expression: "currentPool == 'sbtc' && showStakedBalance > 0"
                        }],
                        class: {
                            "loading line": null === e.weeklyEstimateBPT
                        }
                    }, [a("b", [e._v("Estimated weekly BPT LP rewards:")]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.weeklyEstimateBPT,
                            expression: "weeklyEstimateBPT !== null"
                        }]
                    }, [e._v(" " + e._s(e.showWeeklyBPT) + " " + e._s(1 == +e.showinUSD ? "USD" : "BPT"))])]) : e._e(), a("br"), a("li", {
                        class: {
                            "loading line": null === e.earnedCRV
                        }
                    }, [a("b", [e._v("Pending "), a("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV:")]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.earnedCRV,
                            expression: "earnedCRV !== null"
                        }]
                    }, [e._v(" " + e._s(e.showEarnedCRV) + " " + e._s(1 == +e.showinUSD ? "USD" : "CRV") + " ")])]), a("li", {
                        class: {
                            "loading line": null === e.mintedCRV
                        }
                    }, [a("b", [e._v("Minted "), a("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV:")]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.mintedCRV,
                            expression: "mintedCRV !== null"
                        }]
                    }, [e._v(" " + e._s(e.showRewardsCRV) + " " + e._s(1 == +e.showinUSD ? "USD" : "CRV") + " ")])]), a("br"), a("li", [e._m(0), a("span", {
                        class: {
                            "loading line": -1 == e.available
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: -1 != e.available,
                            expression: "available != -1"
                        }]
                    }, [e._v(" " + e._s(e.toFixed(e.totalProfit)) + " " + e._s(1 == +e.showinUSD ? "USD" : "") + " ")])])]), a("br"), ["susdv2", "sbtc"].includes(e.currentPool) ? a("li", [a("b", [e._v("SNX price: ")]), a("span", {
                        class: {
                            "loading line": null === e.snxPrice
                        }
                    }), a("span", [e._v(e._s(e.snxPrice && e.snxPrice.toFixed(2)) + " USD")])]) : e._e(), "sbtc" == e.currentPool ? a("li", [a("b", [e._v("REN price: ")]), a("span", {
                        class: {
                            "loading line": null === e.renPrice
                        }
                    }), a("span", [e._v(e._s(e.renPrice && e.renPrice.toFixed(2)) + " USD")])]) : e._e(), "sbtc" == e.currentPool ? a("li", [a("b", [e._v("BPT price: ")]), a("span", {
                        class: {
                            "loading line": null === e.BPTPrice
                        }
                    }), a("span", [e._v(e._s(e.BPTPrice && e.BPTPrice.toFixed(2)) + " USD")])]) : e._e(), ["musd"].includes(e.currentPool) ? a("li", [a("b", [e._v("MTA price: ")]), a("span", {
                        class: {
                            "loading line": null === e.mtaPrice
                        }
                    }), a("span", [e._v(e._s(e.mtaPrice && e.mtaPrice.toFixed(2)) + " USD")])]) : e._e(), ["keep"].includes(e.currentPool) ? a("li", [a("b", [e._v("KEEP price: ")]), a("span", {
                        class: {
                            "loading line": null === e.keepPrice
                        }
                    }), a("span", [e._v(e._s(e.keepPrice && e.keepPrice.toFixed(2)) + " USD")])]) : e._e(), a("br"), a("li", [a("b", [a("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV price: ")]), a("span", {
                        class: {
                            "loading line": null === e.CRVprice
                        }
                    }), a("span", [e._v(e._s(e.CRVprice && e.CRVprice.toFixed(2)) + " USD")])])]), ["y", "iearn"].includes(e.currentPool) ? a("ul", {
                        staticClass: "snxrewards"
                    }, [a("a", {
                        staticClass: "tooltip",
                        attrs: {
                            href: "https://medium.com/iearn/earning-yfi-y-curve-fi-53b5fd347f0f"
                        }
                    }, [e._v("[?]")]), a("li", {
                        class: {
                            "loading line": null === e.earnedYFI
                        }
                    }, [a("b", [e._v("Pending YFI LP rewards:")]), e._v(" "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.earnedYFI,
                            expression: "earnedYFI !== null"
                        }]
                    }, [e._v(" " + e._s(e.showEarnedYFI) + " " + e._s(1 == +e.showinUSD ? "USD" : "YFI"))])]), a("li", [e._m(1), a("span", {
                        class: {
                            "loading line": -1 == e.available
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: -1 != e.available,
                            expression: "available != -1"
                        }]
                    }, [e._v(" " + e._s(e.toFixed(+e.showProfit)) + " " + e._s(e.showinUSD ? "USD" : "") + " ")])])]), a("br")]) : e._e()])])])
                },
                n = [function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("b", [e._v("Total profit "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long inverse"
                    }, [e._v(" Profit from Pool trading fees + incentives ")])]), e._v(" :")])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("b", [e._v(" Total profit "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long inverse"
                    }, [e._v(" Profit from Pool trading fees + incentives ")])]), e._v(" : ")])
                }],
                s = (a("cf45"), a("51bf"), a("2fa3"), a("6314"), a("901e"), a("e13c")),
                i = a("f29c"),
                o = {
                    mixins: [s["a"], i["a"]]
                },
                c = o,
                l = (a("e7c5"), a("2877")),
                u = Object(l["a"])(c, r, n, !1, null, null, null);
            t["default"] = u.exports
        },
        "8e45": function(e, t, a) {},
        a9e3: function(e, t, a) {
            "use strict";
            var r = a("83ab"),
                n = a("da84"),
                s = a("94ca"),
                i = a("6eeb"),
                o = a("5135"),
                c = a("c6b6"),
                l = a("7156"),
                u = a("c04e"),
                d = a("d039"),
                h = a("7c73"),
                f = a("241c").f,
                p = a("06cf").f,
                b = a("9bf2").f,
                w = a("58a8").trim,
                v = "Number",
                m = n[v],
                g = m.prototype,
                S = c(h(g)) == v,
                x = function(e) {
                    var t, a, r, n, s, i, o, c, l = u(e, !1);
                    if ("string" == typeof l && l.length > 2)
                        if (l = w(l), t = l.charCodeAt(0), 43 === t || 45 === t) {
                            if (a = l.charCodeAt(2), 88 === a || 120 === a) return NaN
                        } else if (48 === t) {
                        switch (l.charCodeAt(1)) {
                            case 66:
                            case 98:
                                r = 2, n = 49;
                                break;
                            case 79:
                            case 111:
                                r = 8, n = 55;
                                break;
                            default:
                                return +l
                        }
                        for (s = l.slice(2), i = s.length, o = 0; o < i; o++)
                            if (c = s.charCodeAt(o), c < 48 || c > n) return NaN;
                        return parseInt(s, r)
                    }
                    return +l
                };
            if (s(v, !m(" 0o1") || !m("0b1") || m("+0x1"))) {
                for (var _, P = function(e) {
                        var t = arguments.length < 1 ? 0 : e,
                            a = this;
                        return a instanceof P && (S ? d((function() {
                            g.valueOf.call(a)
                        })) : c(a) != v) ? l(new m(x(t)), a, P) : x(t)
                    }, k = r ? f(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), D = 0; k.length > D; D++) o(m, _ = k[D]) && !o(P, _) && b(P, _, p(m, _));
                P.prototype = g, g.constructor = P, i(n, v, P)
            }
        },
        e13c: function(e, t, a) {
            "use strict";
            a("4de4"), a("caad"), a("13d5"), a("b680");
            var r = a("5530"),
                n = a("ade3"),
                s = (a("cf45"), a("51bf")),
                i = a("2fa3");
            a("6314"), a("901e");
            t["a"] = {
                created: function() {
                    var e = this;
                    this.$watch((function() {
                        return s["f"].initializedContracts
                    }), (function(t) {
                        t && e.mounted()
                    })), this.$watch((function() {
                        return s["f"].currentContract
                    }), (function(t, a) {
                        e.nullifyAmounts(), t.toLowerCase() != a.toLowerCase() && (e.cancel = !0, setTimeout((function() {
                            e.cancel = !1, e.nullifyAmounts(), e.mounted()
                        }), 1e3))
                    }))
                },
                mounted: function() {
                    var e = this;
                    this.$watch((function() {
                        return s["f"].default_account
                    }), (function(t, a) {
                        a && t.toLowerCase() != a.toLowerCase() && (e.cancel = !0, setTimeout((function() {
                            e.cancel = !1, e.nullifyAmounts(), e.clearCache(), e.mounted()
                        }), 300))
                    })), s["f"].initializedContracts && this.mounted()
                },
                data: function() {
                    var e;
                    return e = {
                        account: null,
                        deposits: -1,
                        withdrawals: -1,
                        available: -1,
                        profit: -1
                    }, Object(n["a"])(e, "profit", ""), Object(n["a"])(e, "depositsUSD", -1), Object(n["a"])(e, "depositsBTC", -1), Object(n["a"])(e, "withdrawalsUSD", -1), Object(n["a"])(e, "withdrawalsBTC", -1), Object(n["a"])(e, "availableUSD", -1), Object(n["a"])(e, "profitUSD", -1), Object(n["a"])(e, "showinUSD", 1), Object(n["a"])(e, "showinBTC", !1), Object(n["a"])(e, "BN", ""), Object(n["a"])(e, "priceData", ""), Object(n["a"])(e, "priceData5m", ""), Object(n["a"])(e, "ADDRESSES", {}), Object(n["a"])(e, "CURVE", ""), Object(n["a"])(e, "CURVE_TOKEN", ""), Object(n["a"])(e, "TRANSFER_TOPIC", "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"), Object(n["a"])(e, "notinpricedata", !1), Object(n["a"])(e, "cancel", !1), Object(n["a"])(e, "isInVault", !1), e
                },
                computed: Object(r["a"])({}, s["h"], {
                    version: function() {
                        return "0.7.4"
                    },
                    showDeposits: function() {
                        return 1 == this.showinUSD ? this.depositsUSD : 2 == this.showinUSD ? this.depositsBTC : this.deposits / 100
                    },
                    showWithdrawals: function() {
                        return 1 == this.showinUSD ? this.withdrawalsUSD : 2 == this.showinUSD ? this.withdrawalsBTC : this.withdrawals / 100
                    },
                    showAvailable: function() {
                        return 1 == this.showinUSD ? this.availableUSD : this.available / 100
                    },
                    showStakedBalance: function() {
                        return 1 == this.showinUSD ? this.getStakedBalanceUSD : this.getStakedBalance / 100
                    },
                    showStakedTokens: function() {
                        return -1 == this.stakedTokens ? -1 : this.toFixed(this.stakedTokens / 1e18)
                    },
                    showProfit: function() {
                        return +this.showAvailable + +this.showStakedBalance + +this.showWithdrawals - +this.showDeposits || 0
                    },
                    profitIn: function() {
                        return 1 == this.showinUSD ? "USD" : 2 == this.showinUSD ? "BTC" : 3 == this.showinUSD ? "tokens" : void 0
                    },
                    publicPath: function() {
                        return "/"
                    },
                    totalProfit: function() {
                        var e = [+this.showProfit, +this.showEarnedSNXUSD, +this.showEarnedRENUSD, +this.showRewardsSNXUSD, +this.showRewardsRENUSD, +this.showEarnedCRVUSD, +this.showRewardsCRVUSD];
                        return e = e.filter((function(e) {
                            return !isNaN(e)
                        })), e.reduce((function(e, t) {
                            return +e + +t
                        }), 0)
                    }
                }),
                beforeDestroy: function() {
                    this.cancel = !0
                },
                methods: {
                    toFixed: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (0 == e) return 0;
                        if ("" == e || null === e || void 0 === e) return "";
                        2 == t && ["tbtc", "ren", "sbtc", "hbtc"].includes(this.currentPool) && (t = 8), 1 == this.showinUSD && (t = 2);
                        var a = i["g"](e, t);
                        return a
                    },
                    nullifyAmounts: function() {
                        this.deposits = -1, this.withdrawals = -1, this.available = -1, this.depositsUSD = -1, this.withdrawalsUSD = -1, this.availableUSD = -1
                    },
                    clearCache: function() {
                        localStorage.removeItem(this.currentPool + "dversion"), localStorage.removeItem(this.currentPool + "lastDepositBlock"), localStorage.removeItem(this.currentPool + "dlastAddress"), localStorage.removeItem(this.currentPool + "wlastAddress"), localStorage.removeItem(this.currentPool + "lastDeposits"), localStorage.removeItem(this.currentPool + "lastDepositsUSD"), localStorage.removeItem(this.currentPool + "wversion"), localStorage.removeItem(this.currentPool + "lastWithdrawalBlock"), localStorage.removeItem(this.currentPool + "lastWithdrawals"), localStorage.removeItem(this.currentPool + "lastWithdrawalsUSD")
                    }
                }
            }
        },
        e7c5: function(e, t, a) {
            "use strict";
            var r = a("8e45"),
                n = a.n(r);
            n.a
        },
        f29c: function(e, t, a) {
            "use strict";
            a("99af"), a("4de4"), a("7db0"), a("caad"), a("d81d"), a("13d5"), a("fb6a"), a("a9e3"), a("b680"), a("b64b"), a("d3b7"), a("07ac"), a("25f0"), a("2532"), a("3ca3"), a("ddb0");
            var r = a("5530"),
                n = a("3835"),
                s = a("b85c"),
                i = (a("96cf"), a("1da1")),
                o = a("2909"),
                c = a("cf45"),
                l = a("51bf"),
                u = a("2fa3"),
                d = a("5245"),
                h = a("901e"),
                f = a.n(h);
            t["a"] = {
                data: function() {
                    return {
                        addliquidityTopic: "0x26f55a85081d24974e85c6c00045d0f0453991e95873f52bff0d21af4079a768",
                        removeliquidityTopic: "0x7c363854ccf79623411f8995b362bce5eddff18c927edc6f5dbbb5e05819a82c",
                        removeliquidityImbalanceTopic: "0x2b5508378d7e19e0d5fa338419034731416c4f5b219a10379956f764317fd47e",
                        depositArr: [],
                        withdrawArr: [],
                        getStakedBalance: -1,
                        getStakedBalanceUSD: -1,
                        stakedTokens: -1,
                        dailyAPY: null,
                        mintedCRV: null,
                        earnedCRV: null,
                        claimableSNX: null,
                        claimedSNX: null,
                        SNXprice: null,
                        CRVprice: null,
                        mtaPrice: null,
                        keepPrice: null
                    }
                },
                computed: {
                    fromBlock: function() {
                        return "compound" == this.currentPool ? "0x91c86f" : "usdt" == this.currentPool ? "0x904a9c" : "susdv2" == this.currentPool ? "0x9729a6" : "0x909964"
                    },
                    decodeParameters: function() {
                        return ["uint256[".concat(this.N_COINS, "]"), "uint256[".concat(this.N_COINS, "]"), "uint256", "uint256"]
                    },
                    decodeParametersWithdrawal: function() {
                        return ["uint256[".concat(this.N_COINS, "]"), "uint256[".concat(this.N_COINS, "]"), "uint256"]
                    },
                    decodeParametersWithdrawal1: function() {
                        return ["uint256[".concat(this.N_COINS, "]"), "uint256[".concat(this.N_COINS, "]"), "uint256", "uint256"]
                    },
                    decodeParametersWithdrawalOne: function() {
                        return ["uint256", "uint256"]
                    },
                    stakeAddresses: function() {
                        var e = ["0x000000000000000000000000dcb6a51ea3ca5d3fd898fd6564757c7aaec3ca92", "0x00000000000000000000000013c1542a468319688b89e323fe9a3be3a90ebb27", "0x0000000000000000000000000001fb050fe7312791bf6475b96569d83f695c9f", "0x0000000000000000000000005dbcf33d8c2e976c6b560249878e6f1491bca25c"];
                        return e.push.apply(e, Object(o["a"])(Object.values(d["g"]).filter((function(e) {
                            return e.gauge_address
                        })).map((function(e) {
                            return "0x000000000000000000000000" + e.gauge_address.slice(2)
                        })))), e.map((function(e) {
                            return e.toLowerCase()
                        }))
                    },
                    showEarnedCRV: function() {
                        return 1 == this.showinUSD ? (+this.earnedCRV / 1e18 * this.CRVprice).toFixed(2) : (+this.earnedCRV / 1e18).toFixed(2)
                    },
                    showRewardsCRV: function() {
                        return 1 == this.showinUSD ? (+this.mintedCRV / 1e18 * this.CRVprice).toFixed(2) : (+this.mintedCRV / 1e18).toFixed(2)
                    },
                    showEarnedSNXGauge: function() {
                        var e = this.SNXprice;
                        return "musd" == this.currentPool && (e = this.mtaPrice), 1 == this.showinUSD ? (+this.claimableSNX / 1e18 * e).toFixed(2) : (+this.claimableSNX / 1e18).toFixed(2)
                    },
                    showRewardsSNXGauge: function() {
                        var e = this.SNXprice;
                        return "musd" == this.currentPool && (e = this.mtaPrice), 1 == this.showinUSD ? (+this.claimedSNX / 1e18 * e).toFixed(2) : (+this.claimedSNX / 1e18).toFixed(2)
                    },
                    showEarnedCRVUSD: function() {
                        return (+this.earnedCRV / 1e18 * this.CRVprice).toFixed(2)
                    },
                    showRewardsCRVUSD: function() {
                        return (+this.mintedCRV / 1e18 * this.CRVprice).toFixed(2)
                    }
                },
                methods: {
                    mounted: function() {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, i, o, u, h, f, p, b, w, v, m, g, S, x, _, P, k;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, e.account = e.$route.params.address || l["f"].default_account, c["update_fee_info"](), e.BN = l["f"].web3.utils.toBN, e.CURVE = l["f"].swap_address, e.CURVE_TOKEN = l["f"].token_address, a = e.currentPool, "iearn" == a && (a = "y"), "susdv2" == a && (a = "susd"), "ren" == a && (a = "ren2"), "sbtc" == a && (a = "rens"), !["ren", "rens", "hbtc"].includes(a)) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.next = 14, e.getBTCPrice();
                                    case 14:
                                        return t.next = 16, Promise.all([fetch("".concat(window.domain, "/raw-stats/").concat(a, "-1440m.json")), fetch("".concat(window.domain, "/raw-stats/").concat(a, "-5m.json")), fetch("".concat(window.domain, "/raw-stats/apys.json"))]);
                                    case 16:
                                        return r = t.sent, t.next = 19, Promise.all(r.map((function(e) {
                                            return e.json()
                                        })));
                                    case 19:
                                        i = t.sent, e.priceData = i[0], e.priceData5m = i[1], e.dailyAPY = 100 * i[2].apy.day[a] / 365, o = Object(s["a"])(Object.values(l["c"][e.currentPool]).entries());
                                        try {
                                            for (o.s(); !(u = o.n()).done;) h = Object(n["a"])(u.value, 2), f = h[0], p = h[1], e.ADDRESSES[p] = d["g"][e.currentPool].coins[f]
                                        } catch (D) {
                                            o.e(D)
                                        } finally {
                                            o.f()
                                        }
                                        return t.next = 27, e.getAvailableAmount();
                                    case 27:
                                        return b = t.sent, w = Object(n["a"])(b, 4), v = w[0], m = w[1], g = w[2], S = w[3], e.getStakedBalance = S, e.getStakedBalanceUSD = g, e.stakedTokens = l["f"].curveStakedBalance, x = [
                                            [l["f"].minter._address, l["f"].minter.methods.minted(l["f"].default_account, l["f"].gaugeContract._address).encodeABI()],
                                            [l["f"].gaugeContract._address, l["f"].gaugeContract.methods.claimable_tokens(l["f"].default_account).encodeABI()]
                                        ], ["susdv2", "sbtc", "musd", "tbtc"].includes(e.currentPool) && x.push.apply(x, [
                                            [l["f"].gaugeContract._address, l["f"].gaugeContract.methods.claimable_reward(l["f"].default_account).encodeABI()],
                                            [l["f"].gaugeContract._address, l["f"].gaugeContract.methods.claimed_rewards_for(l["f"].default_account).encodeABI()]
                                        ]), t.next = 40, l["f"].multicall.methods.aggregate(x).call();
                                    case 40:
                                        return _ = t.sent, P = _[1].map((function(e) {
                                            return l["f"].web3.eth.abi.decodeParameter("uint256", e)
                                        })), console.log(P, "THE DECODED"), e.mintedCRV = +P[0], e.earnedCRV = +P[1], ["susdv2", "sbtc", "musd", "tbtc"].includes(e.currentPool) && (e.claimableSNX = +P[2] - +P[3], e.claimedSNX = +P[3]), t.next = 48, fetch("https://api.coingecko.com/api/v3/simple/price?ids=havven,curve-dao-token,meta,keep-network&vs_currencies=usd");
                                    case 48:
                                        return k = t.sent, t.next = 51, k.json();
                                    case 51:
                                        return k = t.sent, e.SNXprice = k.havven.usd, e.CRVprice = k["curve-dao-token"].usd, e.mtaPrice = k.meta.usd, e.keepPrice = k["keep-network"].usd, t.next = 58, e.getDeposits();
                                    case 58:
                                        return e.deposits = t.sent, t.next = 61, e.getWithdrawals();
                                    case 61:
                                        e.withdrawals = t.sent, e.available = v, e.availableUSD = m, e.profit = v + e.getStakedBalance + e.withdrawals - e.deposits, console.log(v, e.getStakedBalance, e.withdrawals, e.deposits, "THE PROFIT"), e.profitUSD = m + e.withdrawalsUSD - e.depositsUSD, t.next = 73;
                                        break;
                                    case 69:
                                        t.prev = 69, t.t0 = t["catch"](0), console.error(t.t0), e.clearCache();
                                    case 73:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 69]
                            ])
                        })))()
                    },
                    getAvailableAmount: function() {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, s, i, o, c, u, h, f, p, b;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.$route.params.address) {
                                            t.next = 24;
                                            break
                                        }
                                        if (a = l["f"].totalShare, r = l["f"].usdShare, s = +l["f"].curveStakedBalance, ["tbtc", "ren", "sbtc", "hbtc"].includes(e.currentPool) || (e.btcPrice = 1), console.log(s, l["f"].virtual_price, e.btcPrice), !["y", "iearn"].includes(e.currentPool)) {
                                            t.next = 18;
                                            break
                                        }
                                        return "0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c", i = new l["f"].web3.eth.Contract(d["y"], "0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c"), o = [
                                            [i._address, i.methods.balanceOf(l["f"].default_account).encodeABI()],
                                            [i._address, i.methods.getPricePerFullShare().encodeABI()]
                                        ], t.next = 12, l["f"].multicall.methods.aggregate(o).call();
                                    case 12:
                                        c = t.sent, u = c[1].map((function(e) {
                                            return +l["f"].web3.eth.abi.decodeParameter("uint256", e)
                                        })), h = Object(n["a"])(u, 2), f = h[0], p = h[1], console.log(f, p, "BALANCEOF rate"), f > 0 && (e.isInVault = !0), a += e.getAvailableTransfer(+f * +p, e.priceData[e.priceData.length - 1]) / 1e18, r += +f * +p / 1e36 * l["f"].virtual_price;
                                    case 18:
                                        if (!["susdv2", "sbtc", "y"].includes(e.currentPool)) {
                                            t.next = 23;
                                            break
                                        }
                                        return t.next = 21, l["f"].curveRewards.methods.balanceOf(l["f"].default_account).call();
                                    case 21:
                                        b = t.sent, s += +b;
                                    case 23:
                                        return t.abrupt("return", [100 * a, r * e.btcPrice || 0, s * l["f"].virtual_price * e.btcPrice / 1e18, 100 * l["f"].totalStake]);
                                    case 24:
                                        return t.abrupt("return", e.calcAvailable());
                                    case 25:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    calcAvailable: function() {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, s, i, o, c, u, d, h, f;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = [
                                            [e.CURVE_TOKEN, "0x70a08231000000000000000000000000" + e.account.slice(2)]
                                        ], ["susdv2", "sbtc", "y", "iearn"].includes(l["f"].currentContract) && a.push([l["f"].curveRewards._address, "0x70a08231000000000000000000000000" + e.account.slice(2)]), t.next = 4, l["f"].multicall.methods.aggregate(a).call();
                                    case 4:
                                        if (r = t.sent, s = r[1].map((function(e) {
                                                return +l["f"].web3.eth.abi.decodeParameter("uint256", e)
                                            })), i = Object(n["a"])(s, 2), o = i[0], c = i[1], u = 0, !["susdv2", "sbtc"].includes(e.currentPool)) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 10, l["f"].web3.eth.call({
                                            to: l["f"].curveRewards._address,
                                            data: "0x70a08231000000000000000000000000" + e.account.slice(2)
                                        });
                                    case 10:
                                        c = t.sent, u = l["f"].bal_info.map((function(e, t) {
                                            return e * c / l["f"].totalSupply
                                        })).reduce((function(e, t) {
                                            return e + t
                                        }), 0);
                                    case 12:
                                        return o = +o, c = +c, d = l["f"].bal_info.map((function(e, t) {
                                            return e * o / l["f"].totalSupply
                                        })).reduce((function(e, t) {
                                            return e + t
                                        }), 0), h = o * l["f"].virtual_price / 1e18, f = c * l["f"].virtual_price / 1e18, ["tbtc", "ren", "sbtc", "hbtc"].includes(e.currentPool) && (h *= e.btcPrice, f *= e.btcPrice), t.abrupt("return", [100 * d, h || 0, f, 100 * u]);
                                    case 19:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    getAvailableBalance: function() {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, s, i;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        for (0, a = [], r = 0, n = Object.keys(e.ADDRESSES); r < n.length; r++) s = n[r], a.push(e.getAvailable(s));
                                        return t.next = 5, Promise.all(a);
                                    case 5:
                                        return i = t.sent, t.next = 8, e.calculateAvailable(i);
                                    case 8:
                                        return t.abrupt("return", t.sent);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    calculateAvailable: function(e) {
                        var t = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, s, i;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        r = 0, n = 0;
                                    case 2:
                                        if (!(n < e.length)) {
                                            a.next = 15;
                                            break
                                        }
                                        if (s = Object.keys(t.ADDRESSES)[n], !["DAI", "USDC", "USDT", "sUSD"].includes(s)) {
                                            a.next = 8;
                                            break
                                        }
                                        r += t.fromNativeCurrent(s, e[n]), a.next = 12;
                                        break;
                                    case 8:
                                        return a.next = 10, l["f"].web3.eth.call({
                                            to: t.ADDRESSES[s],
                                            data: "0xbd6d894d"
                                        });
                                    case 10:
                                        i = a.sent, r += t.fromNativeCurrent(s, f()(i).times(f()(e[n])).div(f()(1e8)));
                                    case 12:
                                        n++, a.next = 2;
                                        break;
                                    case 15:
                                        return a.abrupt("return", r);
                                    case 16:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    convertValues: function(e, t, a) {
                        return "cDAI" == e && (t *= 1e8), "cUSDC" == e && (t *= 1e20), f()(t).times(f()(a))
                    },
                    fromNativeCurrent: function(e, t) {
                        if ("cDAI" == e) return t.div(f()(1e10)).div(f()(1e16));
                        if ("cUSDC" == e) return +t.div(f()(1e14));
                        if ("DAI" == e || "PAX" == e) return +t.div(f()(1e16));
                        if ("USDC" == e || "USDT" == e) return +t.div(f()(1e4));
                        if ("sUSD" == e) return +t.div(f()(1e16));
                        var a = ["yUSDC", "yUSDT"].includes(e) ? 6 : 18;
                        return 18 === a ? Number(l["f"].web3.utils.fromWei(t.toString(0))) : +t / Math.pow(10, a)
                    },
                    convertValuesCurrent: function(e) {
                        var t = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function a() {
                            var r, n;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, l["f"].web3.eth.call({
                                            to: ADDRESSES[e],
                                            data: "0x7137ef99"
                                        });
                                    case 2:
                                        return r = a.sent, a.next = 5, l["f"].web3.eth.call({
                                            to: ADDRESSES[e],
                                            data: "0x18160ddd"
                                        });
                                    case 5:
                                        return n = a.sent, a.abrupt("return", (function(a) {
                                            return t.fromNativeCurrent(e, f()(r).times(f()(a)).div(f()(n)).times(f()(100)))
                                        }));
                                    case 7:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    findClosest: function(e) {
                        var t = this.priceData.find((function(t) {
                            return t.timestamp - e > 0
                        }));
                        return e < this.priceData[0].timestamp ? (this.notinpricedata = !0, this.showinUSD = 3, this.priceData[0]) : void 0 === t ? this.priceData[this.priceData.length - 1] : t
                    },
                    getClosestBTCPrice: function(e) {
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 1, t.next = 4, fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=".concat(e, "&to=").concat(Date.now() / 1e3 | 0));
                                    case 4:
                                        return a = t.sent, t.next = 7, a.json();
                                    case 7:
                                        if (r = t.sent, !r.length) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.abrupt("return", r[0][1]);
                                    case 10:
                                        return t.next = 12, helpers.setTimeoutPromise(300);
                                    case 12:
                                        e -= 1e3, t.next = 20;
                                        break;
                                    case 15:
                                        throw t.prev = 15, t.t0 = t["catch"](1), console.error(t.t0), t.t0;
                                    case 20:
                                        t.next = 0;
                                        break;
                                    case 22:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 15]
                            ])
                        })))()
                    },
                    interpolatePoint: function(e, t) {
                        var a = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function n() {
                            var s, i, o, c;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        if (s = {}, !(t && e > t[t.length - 1].timestamp)) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return", Object(r["a"])({}, t[t.length - 1], {
                                            btcPrice: a.btcPrice
                                        }));
                                    case 3:
                                        if (t || (t = a.priceData), !(e > t[t.length - 1].timestamp)) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.abrupt("return", a.interpolatePoint(e, a.priceData5m));
                                    case 6:
                                        return i = t.find((function(t) {
                                            return e - t.timestamp > 0 && t.virtual_price > 0
                                        })), o = t.find((function(t) {
                                            return t.timestamp - e > 0 && t.virtual_price > 0
                                        })), void 0 === i && (i = t[0]), void 0 === o && (o = t[a.priceData.length - 1]), i.timestamp == o.timestamp && (s = o), 0 === Object.keys(s).length && s.constructor === Object && (c = Object(u["l"])(e, i.timestamp, o.timestamp), s.virtual_price = c(i.virtual_price, o.virtual_price), s.balances = i.balances.map((function(e, t) {
                                            return c(e, o.balances[t])
                                        })), s.rates = i.rates.map((function(e, t) {
                                            return c(e, o.rates[t])
                                        })), s.supply = c(i.supply, o.supply)), ["tbtc", "ren", "sbtc", "hbtc"].includes(a.currentPool) && (s.btcPrice = a.btcPrice), n.abrupt("return", s);
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    fromNative: function(e, t) {
                        return t.div(f()(1e16))
                    },
                    checkExchangeRateBlocks: function(e, t, a) {
                        return Object(i["a"])(regeneratorRuntime.mark((function r() {
                            var n, s, i, o, c, u;
                            return regeneratorRuntime.wrap((function(r) {
                                while (1) switch (r.prev = r.next) {
                                    case 0:
                                        return n = "0x" + parseInt(e - 100).toString(16), s = "0x" + parseInt(e).toString(16), 1 == a && (n = "0x" + parseInt(e).toString(16), s = "0x" + parseInt(e + 100).toString(16)), 0 == a && (n = "0x" + parseInt(e - 1).toString(16), s = "0x" + parseInt(e + 1).toString(16)), r.next = 6, l["f"].web3.eth.getPastLogs({
                                            fromBlock: n,
                                            toBlock: s,
                                            address: t,
                                            topics: ["0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f"]
                                        });
                                    case 6:
                                        if (i = r.sent, !i.length) {
                                            r.next = 17;
                                            break
                                        }
                                        if (o = i[0], c = l["f"].web3.eth.abi.decodeParameters(["address", "uint256", "uint256"], o.data), 0 != c[1] && 0 != c[2]) {
                                            r.next = 12;
                                            break
                                        }
                                        return r.abrupt("return", -1);
                                    case 12:
                                        if (u = f()(c[1]).div(f()(c[2])), t == l["f"].coins[1]._address && (u = f()(c[1]).times(f()(1e12)).div(f()(c[2]))), 0 != a) {
                                            r.next = 16;
                                            break
                                        }
                                        return r.abrupt("return", u);
                                    case 16:
                                        return r.abrupt("return", {
                                            blockNumber: o.blockNumber,
                                            exchangeRate: u
                                        });
                                    case 17:
                                        return r.abrupt("return", !1);
                                    case 18:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    getExchangeRate: function(e, t, a, r) {
                        var n = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function a() {
                            var s, i, o, c, d, h, p, b, w;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        if ("pax" != l["f"].currentContract || t.toLowerCase() != l["f"].coins[3]._address.toLowerCase()) {
                                            a.next = 2;
                                            break
                                        }
                                        return a.abrupt("return", 1);
                                    case 2:
                                        return a.next = 4, n.checkExchangeRateBlocks(e, t, 0);
                                    case 4:
                                        return s = a.sent, a.next = 7, l["f"].web3.eth.getBlockNumber();
                                    case 7:
                                        if (c = a.sent, d = !1, !1 !== s) {
                                            a.next = 58;
                                            break
                                        }
                                        h = e, p = e;
                                    case 12:
                                        return a.next = 14, n.checkExchangeRateBlocks(h, t, -1, r);
                                    case 14:
                                        if (a.t0 = i = a.sent, !1 !== a.t0) {
                                            a.next = 19;
                                            break
                                        }
                                        h -= 100, a.next = 12;
                                        break;
                                    case 19:
                                        return a.next = 21, n.checkExchangeRateBlocks(p, t, 1, r);
                                    case 21:
                                        if (a.t1 = o = a.sent, !1 !== a.t1) {
                                            a.next = 29;
                                            break
                                        }
                                        if (!(p > c)) {
                                            a.next = 26;
                                            break
                                        }
                                        return d = !0, a.abrupt("break", 29);
                                    case 26:
                                        p += 100, a.next = 19;
                                        break;
                                    case 29:
                                        if (!d) {
                                            a.next = 52;
                                            break
                                        }
                                        b = e - 200, w = e - 100;
                                    case 32:
                                        return a.next = 34, n.checkExchangeRateBlocks(b, t, -1, r);
                                    case 34:
                                        if (a.t2 = i = a.sent, !1 !== a.t2) {
                                            a.next = 39;
                                            break
                                        }
                                        b -= 200, a.next = 32;
                                        break;
                                    case 39:
                                        return a.next = 41, n.checkExchangeRateBlocks(w, t, -1, r);
                                    case 41:
                                        if (a.t3 = o = a.sent, !1 !== a.t3) {
                                            a.next = 49;
                                            break
                                        }
                                        if (!(w > c)) {
                                            a.next = 46;
                                            break
                                        }
                                        return d = !0, a.abrupt("break", 49);
                                    case 46:
                                        w -= 100, a.next = 39;
                                        break;
                                    case 49:
                                        i.blockNumber && o.blockNumber && (d = !1), a.next = 29;
                                        break;
                                    case 52:
                                        if (i.blockNumber != o.blockNumber) {
                                            a.next = 54;
                                            break
                                        }
                                        return a.abrupt("return", i.exchangeRate);
                                    case 54:
                                        if (f.a.isBigNumber(o.exchangeRate) && (o.exchangeRate = o.exchangeRate, i.exchangeRate = i.exchangeRate), void 0 !== i.exchangeRate && void 0 !== o.exchangeRate) {
                                            a.next = 57;
                                            break
                                        }
                                        return a.abrupt("return", -1);
                                    case 57:
                                        s = Object(u["l"])(e, i.blockNumber, o.blockNumber)(i.exchangeRate, o.exchangeRate);
                                    case 58:
                                        return s.exchangeRate && (s = s.exchangeRate), a.abrupt("return", s || 0);
                                    case 60:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    calculateAmount: function(e, t, a) {
                        var r = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function n() {
                            var s, i, o, c, u, d, h;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        if (!r.cancel) {
                                            n.next = 2;
                                            break
                                        }
                                        throw new Error("cancel");
                                    case 2:
                                        s = 0, i = 0;
                                    case 4:
                                        if (!(i < l["f"].N_COINS)) {
                                            n.next = 24;
                                            break
                                        }
                                        if (o = f()(e[i]), 0 != o) {
                                            n.next = 8;
                                            break
                                        }
                                        return n.abrupt("continue", 21);
                                    case 8:
                                        return Object.values(r.ADDRESSES)[i], c = Object.keys(r.ADDRESSES)[i], u = l["f"].coins[i]._address, ["iearn", "busd", "pax"].includes(l["f"].currentContract) && (u = l["f"].underlying_coins[i]._address), n.next = 14, r.getExchangeRate(t, u, "", a);
                                    case 14:
                                        if (d = n.sent, -1 != d) {
                                            n.next = 17;
                                            break
                                        }
                                        return n.abrupt("continue", 21);
                                    case 17:
                                        h = void 0, "usdt" == l["f"].currentContract && 2 == i && (h = f()(o).div(f()(1e4)).toNumber()), ["iearn", "busd", "pax"].includes(l["f"].currentContract) ? (o /= 0 == i || 3 == i ? 1e16 : 1e4, h = o * d) : h = "susdv2" == l["f"].currentContract || "pax" == l["f"].currentContract && 3 == i ? r.fromNativeCurrent(c, f()(d).times(f()(o))) : r.fromNative(c, f()(d).times(f()(o))), s += h;
                                    case 21:
                                        i++, n.next = 4;
                                        break;
                                    case 24:
                                        return n.abrupt("return", s);
                                    case 25:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getDeposits: function() {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, i, o, c, u, d, h, f, p, b, w, v, m, g, S, x, _, P, k;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = e.account, a = a.substr(2).toLowerCase(), r = 0, e.depositsUSD = 0, e.depositsBTC = 0, n = 0, i = e.fromBlock, localStorage.getItem(e.currentPool + "dversion") == e.version && localStorage.getItem(e.currentPool + "lastDepositBlock") && localStorage.getItem(e.currentPool + "dlastAddress") == a && l["f"].default_account && (o = +localStorage.getItem(e.currentPool + "lastDepositBlock"), i = "0x" + parseInt(o + 1).toString(16), r += +localStorage.getItem(e.currentPool + "lastDeposits"), e.depositsUSD = n = +localStorage.getItem(e.currentPool + "lastDepositsUSD"), ["ren", "sbtc", "hbtc", "tbtc"].includes(e.currentPool) && (e.depositsBTC = e.depositsUSD, e.depositsUSD = e.depositsUSD * e.btcPrice)), t.next = 10, l["f"].web3.eth.getPastLogs({
                                            fromBlock: i,
                                            toBlock: "latest",
                                            address: e.CURVE_TOKEN,
                                            topics: [e.TRANSFER_TOPIC, [], "0x000000000000000000000000" + a]
                                        });
                                    case 10:
                                        c = t.sent, console.log(c), u = c.length && c[c.length - 1].blockNumber || i, d = c.map((function(e) {
                                            return e.transactionHash
                                        })), console.time("timer"), h = Object(s["a"])(d), t.prev = 16, h.s();
                                    case 18:
                                        if ((f = h.n()).done) {
                                            t.next = 64;
                                            break
                                        }
                                        if (p = f.value, !e.cancel) {
                                            t.next = 22;
                                            break
                                        }
                                        throw new Error("cancel");
                                    case 22:
                                        return t.next = 24, l["f"].web3.eth.getTransactionReceipt(p);
                                    case 24:
                                        return b = t.sent, t.next = 27, l["f"].web3.eth.getBlock(b.blockNumber);
                                    case 27:
                                        return w = t.sent.timestamp, console.log(w), v = b.logs.filter((function(t) {
                                            return t.topics[0] == e.addliquidityTopic
                                        })), b.logs.filter((function(t) {
                                            return t.topics[0] == e.removeliquidityTopic
                                        })), b.logs.filter((function(t) {
                                            return t.topics[0] == e.removeliquidityImbalanceTopic
                                        })), console.log(v), t.next = 35, e.interpolatePoint(w);
                                    case 35:
                                        if (m = t.sent, g = b.logs.filter((function(t) {
                                                return t.address == e.CURVE_TOKEN && t.topics[0] == e.TRANSFER_TOPIC && t.topics[1] != "0x000000000000000000000000" + a && t.topics[2] == "0x000000000000000000000000" + a
                                            })), g.length) {
                                            t.next = 39;
                                            break
                                        }
                                        return t.abrupt("continue", 62);
                                    case 39:
                                        if (S = +g[0].data, console.log(S / 1e18, m.virtual_price, S * m.virtual_price / 1e36), 0 != v.length || !e.stakeAddresses.includes(g[0].topics[1])) {
                                            t.next = 43;
                                            break
                                        }
                                        return t.abrupt("continue", 62);
                                    case 43:
                                        if (x = S * m.virtual_price / 1e36, n += x, ["tbtc", "ren", "sbtc", "hbtc"].includes(e.currentPool) ? (e.depositsUSD += x * m.btcPrice, e.depositsBTC += x) : e.depositsUSD += x, console.log(S), !v.length) {
                                            t.next = 57;
                                            break
                                        }
                                        return _ = l["f"].web3.eth.abi.decodeParameters(e.decodeParameters, v[0].data)[0], console.log(_, "add liquidity cTokens"), t.next = 52, e.calculateAmount(_, b.blockNumber, "deposit");
                                    case 52:
                                        P = t.sent, e.depositArr.push([m, P / 100]), r += P, t.next = 62;
                                        break;
                                    case 57:
                                        console.log(g), console.log(S, "transfer tokens"), k = e.getAvailableTransfer(S, m), e.depositArr.push([m, k]), r += 100 * k;
                                    case 62:
                                        t.next = 18;
                                        break;
                                    case 64:
                                        t.next = 69;
                                        break;
                                    case 66:
                                        t.prev = 66, t.t0 = t["catch"](16), h.e(t.t0);
                                    case 69:
                                        return t.prev = 69, h.f(), t.finish(69);
                                    case 72:
                                        return console.timeEnd("timer"), !e.cancel && localStorage.setItem(e.currentPool + "lastDepositBlock", u), !e.cancel && localStorage.setItem(e.currentPool + "dlastAddress", a), !e.cancel && localStorage.setItem(e.currentPool + "lastDeposits", r), !e.cancel && localStorage.setItem(e.currentPool + "lastDepositsUSD", n), !e.cancel && localStorage.setItem(e.currentPool + "dversion", e.version), t.abrupt("return", r);
                                    case 79:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [16, 66, 69, 72]
                            ])
                        })))()
                    },
                    getWithdrawals: function(e) {
                        var t = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function e() {
                            var a, r, n, i, o, c, u, d, h, f, p, b, w, v, m, g, S, x, _, P, k, D, N, R, C, U, E;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return a = t.account, a = a.substr(2).toLowerCase(), r = 0, t.withdrawalsUSD = 0, t.withdrawalsBTC = 0, n = 0, i = t.fromBlock, localStorage.getItem(t.currentPool + "wversion") == t.version && localStorage.getItem(t.currentPool + "lastWithdrawalBlock") && localStorage.getItem(t.currentPool + "wlastAddress") == a && l["f"].default_account && (o = +localStorage.getItem(t.currentPool + "lastWithdrawalBlock"), i = "0x" + parseInt(o + 1).toString(16), r += +localStorage.getItem(t.currentPool + "lastWithdrawals"), t.withdrawalsUSD = n = +localStorage.getItem(t.currentPool + "lastWithdrawalsUSD"), ["ren", "sbtc", "hbtc", "tbtc"].includes(t.currentPool) && (t.withdrawalsBTC = t.withdrawalsUSD, t.withdrawalsUSD = t.withdrawalsUSD * t.btcPrice)), e.next = 10, l["f"].web3.eth.getPastLogs({
                                            fromBlock: i,
                                            toBlock: "latest",
                                            address: l["f"].token_address,
                                            topics: [t.TRANSFER_TOPIC, "0x000000000000000000000000" + a]
                                        });
                                    case 10:
                                        c = e.sent, console.log(i, "block"), u = c.length && c[c.length - 1].blockNumber || i, d = Object(s["a"])(c), e.prev = 14, d.s();
                                    case 16:
                                        if ((h = d.n()).done) {
                                            e.next = 74;
                                            break
                                        }
                                        if (f = h.value, !t.cancel) {
                                            e.next = 20;
                                            break
                                        }
                                        throw new Error("cancel");
                                    case 20:
                                        return console.log(f), e.next = 23, l["f"].web3.eth.getTransactionReceipt(f.transactionHash);
                                    case 23:
                                        return p = e.sent, e.next = 26, l["f"].web3.eth.getBlock(p.blockNumber);
                                    case 26:
                                        return b = e.sent.timestamp, console.log(b), e.next = 30, t.interpolatePoint(b);
                                    case 30:
                                        if (w = e.sent, v = p.logs.filter((function(e) {
                                                return e.topics[0] == t.removeliquidityTopic
                                            })), m = p.logs.filter((function(e) {
                                                return e.topics[0] == t.removeliquidityImbalanceTopic
                                            })), g = [], t.removeliquidityOneTopic && (g = p.logs.filter((function(e) {
                                                return e.topics[0] == t.removeliquidityOneTopic
                                            }))), S = p.logs.filter((function(e) {
                                                return e.topics[0] == t.TRANSFER_TOPIC && e.topics[1] == "0x000000000000000000000000" + a && e.topics[2] != "0x000000000000000000000000" + a && e.address.toLowerCase() == l["f"].token_address.toLowerCase()
                                            })), S.length) {
                                            e.next = 38;
                                            break
                                        }
                                        return e.abrupt("continue", 72);
                                    case 38:
                                        if (x = +S[S.length - 1].data, console.log(x / 1e18, w.virtual_price, x * w.virtual_price / 1e36), console.log(S), console.log("WITHDRAWALS"), console.log(0 == v.length, 0 == m.length, 0 == g.length, t.stakeAddresses.includes(S[0].topics[2])), 0 != v.length || 0 != m.length || 0 != g.length || !t.stakeAddresses.includes(S[0].topics[2])) {
                                            e.next = 45;
                                            break
                                        }
                                        return e.abrupt("continue", 72);
                                    case 45:
                                        if (_ = x * w.virtual_price / 1e36, n += _, ["tbtc", "ren", "sbtc", "tbtc"].includes(t.currentPool) ? (t.withdrawalsUSD += _ * w.btcPrice, t.withdrawalsBTC += _) : t.withdrawalsUSD += _, !v.length) {
                                            e.next = 58;
                                            break
                                        }
                                        return P = l["f"].web3.eth.abi.decodeParameters(t.decodeParametersWithdrawal, v[0].data)[0], console.log(v), console.log(P, "withdraw cTokens"), e.next = 54, t.calculateAmount(P, f.blockNumber);
                                    case 54:
                                        return k = e.sent, t.withdrawArr.push([w, k / 100]), r += k, e.abrupt("continue", 72);
                                    case 58:
                                        if (!m.length) {
                                            e.next = 70;
                                            break
                                        }
                                        return D = t.decodeParametersWithdrawal, ["compound", "usdt"].includes(t.currentPool) && (D = t.decodeParametersWithdrawal1), N = l["f"].web3.eth.abi.decodeParameters(D, m[0].data), console.log(m), console.log(N, "remove imbalance tokens"), e.next = 66, t.calculateAmount(N[0], f.blockNumber, "withdrawal");
                                    case 66:
                                        return R = e.sent, t.withdrawArr.push([w, R / 100]), r += R, e.abrupt("continue", 72);
                                    case 70:
                                        g.length && (C = l["f"].web3.eth.abi.decodeParameters(t.decodeParametersWithdrawalOne, g[0].data), console.log(C, "remove liquidity one"), U = t.getAvailableTransfer(C[0], w), t.withdrawArr.push([w, U]), r += 100 * U), 0 == v.length && 0 == m.length && 0 == g.length && (console.log(x, "transfer"), E = t.getAvailableTransfer(x, w), t.withdrawArr.push([w, E]), r += 100 * E);
                                    case 72:
                                        e.next = 16;
                                        break;
                                    case 74:
                                        e.next = 79;
                                        break;
                                    case 76:
                                        e.prev = 76, e.t0 = e["catch"](14), d.e(e.t0);
                                    case 79:
                                        return e.prev = 79, d.f(), e.finish(79);
                                    case 82:
                                        return !t.cancel && localStorage.setItem(t.currentPool + "lastWithdrawalBlock", u), !t.cancel && localStorage.setItem(t.currentPool + "lastWithdrawals", r), !t.cancel && localStorage.setItem(t.currentPool + "lastWithdrawalsUSD", n), !t.cancel && localStorage.setItem(t.currentPool + "wlastAddress", a), !t.cancel && localStorage.setItem(t.currentPool + "wversion", t.version), console.log("WITHDRAWALS", r), e.abrupt("return", r);
                                    case 89:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [14, 76, 79, 82]
                            ])
                        })))()
                    },
                    getAvailableTransfer: function(e, t) {
                        var a = this;
                        return t.balances.map((function(r, n) {
                            return r * t.rates[n] / d["g"][a.currentPool].coin_precisions[n] * e / t.supply / 1e18
                        })).reduce((function(e, t) {
                            return e + t
                        }), 0)
                    },
                    getAvailable: function(e, t, a, r) {
                        var n = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, s, i, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!n.cancel) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error("cancel");
                                    case 2:
                                        return a = n.account, a = a.substr(2).toLowerCase(), r = n.ADDRESSES[e], t.next = 7, l["f"].web3.eth.call({
                                            to: r,
                                            data: "0x70a08231000000000000000000000000" + n.CURVE.substr(2)
                                        });
                                    case 7:
                                        return s = t.sent, t.next = 10, l["f"].web3.eth.call({
                                            to: n.CURVE_TOKEN,
                                            data: "0x70a08231000000000000000000000000" + a
                                        });
                                    case 10:
                                        return i = t.sent, t.next = 13, l["f"].web3.eth.call({
                                            to: n.CURVE_TOKEN,
                                            data: "0x18160ddd"
                                        });
                                    case 13:
                                        return o = t.sent, t.next = 16, l["f"].web3.eth.call({
                                            to: n.CURVE,
                                            data: "0xbb7b8b80"
                                        });
                                    case 16:
                                        return t.sent, t.abrupt("return", f()(s).times(f()(i)).div(f()(o)));
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=chunk-562116f9.44866af9.js.map