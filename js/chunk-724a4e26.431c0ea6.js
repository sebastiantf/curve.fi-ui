(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-724a4e26"], {
        b6cf: function(e, s, a) {
            "use strict";
            a.r(s);
            var n = function() {
                    var e = this,
                        s = e.$createElement,
                        a = e._self._c || s;
                    return a(e.currentProfit, {
                        tag: "component"
                    })
                },
                t = [],
                i = (a("caad"), a("5530")),
                r = a("51bf"),
                o = a("8161"),
                l = function() {
                    var e = this,
                        s = e.$createElement,
                        a = e._self._c || s;
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
                            click: function(s) {
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
                            change: function(s) {
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
                            change: function(s) {
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
                            change: function(s) {
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
                c = [function() {
                    var e = this,
                        s = e.$createElement,
                        a = e._self._c || s;
                    return a("b", [e._v("Total profit "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long inverse"
                    }, [e._v(" Profit from Pool trading fees + incentives ")])]), e._v(" :")])
                }, function() {
                    var e = this,
                        s = e.$createElement,
                        a = e._self._c || s;
                    return a("b", [e._v(" Total profit "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long inverse"
                    }, [e._v(" Profit from Pool trading fees + incentives ")])]), e._v(" : ")])
                }],
                d = (a("cf45"), a("2fa3"), a("6314"), a("901e")),
                u = a.n(d),
                w = a("e13c"),
                h = a("f29c"),
                v = (a("4de4"), a("c975"), a("d81d"), a("13d5"), a("fb6a"), a("b680"), a("b64b"), a("d3b7"), a("07ac"), a("25f0"), a("96cf"), a("1da1")),
                p = {
                    data: function() {
                        return {
                            addliquidityTopic: "0x3f1915775e0c9a38a57a7bb7f1f9005f486fb904e1f84aa215364d567319a58d",
                            removeliquidityTopic: "0xb964b72f73f5ef5bf0fdc559b2fab9a7b12a39e47817a547f1f0aee47febd602",
                            removeliquidityImbalanceTopic: "0x9878ca375e106f2a43c3b599fc624568131c4c9a4ba66a14563715763be9d59d",
                            earnedYFI: null,
                            paidRewardsYFI: null,
                            weeklyEstimateYFI: null,
                            claimableADAI: null,
                            yfiPrice: null
                        }
                    },
                    mounted: function() {
                        var e = this;
                        return Object(v["a"])(regeneratorRuntime.mark((function s() {
                            return regeneratorRuntime.wrap((function(s) {
                                while (1) switch (s.prev = s.next) {
                                    case 0:
                                        e.account && r["f"].multicall && e.getPrices();
                                    case 1:
                                    case "end":
                                        return s.stop()
                                }
                            }), s)
                        })))()
                    },
                    created: function() {
                        var e = this;
                        return Object(v["a"])(regeneratorRuntime.mark((function s() {
                            return regeneratorRuntime.wrap((function(s) {
                                while (1) switch (s.prev = s.next) {
                                    case 0:
                                        e.$watch((function() {
                                            return e.account && r["f"].multicall
                                        }), (function(s) {
                                            return s && e.getPrices()
                                        }));
                                    case 1:
                                    case "end":
                                        return s.stop()
                                }
                            }), s)
                        })))()
                    },
                    computed: {
                        showEarnedYFI: function() {
                            return 1 == this.showinUSD ? (+this.earnedYFI * this.yfiPrice).toFixed(2) : (+this.earnedYFI).toFixed(2)
                        },
                        showEarnedYFIUSD: function() {
                            return (+this.earnedYFI * this.yfiPrice).toFixed(2)
                        },
                        showRewardsYFI: function() {
                            return 1 == this.showinUSD ? (+this.paidRewardsYFI * this.yfiPrice).toFixed(2) : (+this.paidRewardsYFI).toFixed(2)
                        },
                        showRewardsYFIUSD: function() {
                            return (+this.paidRewardsYFI * this.yfiPrice).toFixed(2)
                        },
                        showWeeklyYFI: function() {
                            return 1 == this.showinUSD ? (+this.weeklyEstimateYFI * this.yfiPrice).toFixed(2) : (+this.weeklyEstimateYFI).toFixed(2)
                        }
                    },
                    methods: {
                        getPrices: function() {
                            var e = this;
                            return Object(v["a"])(regeneratorRuntime.mark((function s() {
                                var a, n, t, i, o, l, c, d, u, w;
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            return s.next = 2, fetch("https://api.coingecko.com/api/v3/simple/price?ids=yearn-finance&vs_currencies=usd");
                                        case 2:
                                            return a = s.sent, s.next = 5, a.json();
                                        case 5:
                                            return a = s.sent, e.yfiPrice = a["yearn-finance"].usd, n = r["f"].curveRewards, t = r["f"].aRewards, i = [
                                                [n._address, n.methods.earned(e.account).encodeABI()],
                                                [n._address, n.methods.balanceOf(e.account).encodeABI()],
                                                [n._address, n.methods.userRewardPerTokenPaid(e.account).encodeABI()],
                                                [n._address, n.methods.totalSupply().encodeABI()],
                                                [n._address, n.methods.DURATION().encodeABI()],
                                                [n._address, n.methods.rewardRate().encodeABI()],
                                                [t._address, t.methods.claimable(e.account).encodeABI()],
                                                [n._address, n.methods.periodFinish().encodeABI()]
                                            ], o = Date.now() / 1e3, s.next = 13, r["f"].multicall.methods.aggregate(i).call();
                                        case 13:
                                            return l = s.sent, c = l[1].map((function(e) {
                                                return r["f"].web3.eth.abi.decodeParameter("uint256", e)
                                            })), e.earnedYFI = +c[0] / 1e18, s.next = 18, r["f"].web3.eth.getPastLogs({
                                                fromBlock: "0x975bfa",
                                                toBlock: "latest",
                                                address: "0x0001fb050fe7312791bf6475b96569d83f695c9f",
                                                topics: ["0xe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486", "0x000000000000000000000000" + e.account.slice(2)]
                                            });
                                        case 18:
                                            d = s.sent, u = d.map((function(e) {
                                                return r["f"].web3.eth.abi.decodeParameter("uint256", e.data) / 1e18
                                            })).reduce((function(e, s) {
                                                return e + s
                                            }), 0), e.paidRewardsYFI = u, w = c.length, e.weeklyEstimateYFI = c[w - 4] * c[w - 3] / 1e18 * r["f"].curveStakedBalance / c[3], +c[w - 1] < o && (e.weeklyEstimateYFI = 0), e.claimableADAI = c[w - 2] / 1e18;
                                        case 25:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            })))()
                        },
                        calculateAvailable: function(e) {
                            var s = this;
                            return Object(v["a"])(regeneratorRuntime.mark((function a() {
                                var n, t, i, o;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            if (!s.cancel) {
                                                a.next = 2;
                                                break
                                            }
                                            throw new Error("cancel");
                                        case 2:
                                            n = 0, t = 0;
                                        case 4:
                                            if (!(t < e.length)) {
                                                a.next = 13;
                                                break
                                            }
                                            return i = Object.keys(s.ADDRESSES)[t], a.next = 8, r["f"].web3.eth.call({
                                                to: s.ADDRESSES[i],
                                                data: "0x77c7b8fc"
                                            });
                                        case 8:
                                            o = a.sent, n += s.fromNativeCurrent(i, u()(o).multipliedBy(u()(e[t].toString()).div(1e18)));
                                        case 10:
                                            t++, a.next = 4;
                                            break;
                                        case 13:
                                            return a.abrupt("return", 100 * n);
                                        case 14:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        },
                        checkExchangeRateBlocks: function(e, s, a) {
                            var n = arguments,
                                t = this;
                            return Object(v["a"])(regeneratorRuntime.mark((function i() {
                                var o, l, c, d, u, w, h, v, p, f, m, b;
                                return regeneratorRuntime.wrap((function(i) {
                                    while (1) switch (i.prev = i.next) {
                                        case 0:
                                            if (o = n.length > 3 && void 0 !== n[3] ? n[3] : "deposit", l = t.account, l = l.substr(2).toLowerCase(), c = "0x" + parseInt(e - 10).toString(16), d = "0x" + parseInt(e).toString(16), 1 == a && (c = "0x" + parseInt(e).toString(16), d = "0x" + parseInt(e + 10).toString(16)), 0 == a && (c = "0x" + parseInt(e - 1).toString(16), d = "0x" + parseInt(e + 1).toString(16)), u = r["f"].underlying_coins.map((function(e) {
                                                    return e._address
                                                })), w = u.indexOf(s), h = Object.values(t.ADDRESSES)[w], "deposit" != o) {
                                                i.next = 16;
                                                break
                                            }
                                            return i.next = 13, r["f"].web3.eth.getPastLogs({
                                                fromBlock: c,
                                                toBlock: d,
                                                address: s,
                                                topics: ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", [], "0x000000000000000000000000" + h.substr(2).toLowerCase()]
                                            });
                                        case 13:
                                            v = i.sent, i.next = 19;
                                            break;
                                        case 16:
                                            return i.next = 18, r["f"].web3.eth.getPastLogs({
                                                fromBlock: c,
                                                toBlock: d,
                                                address: h,
                                                topics: ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "0x0000000000000000000000000000000000000000000000000000000000000000"]
                                            });
                                        case 18:
                                            v = i.sent;
                                        case 19:
                                            if (console.log(v), !v.length) {
                                                i.next = 36;
                                                break
                                            }
                                            return p = v[0], -1 == a && (p = v[v.length - 1]), console.log(p), i.next = 26, r["f"].web3.eth.getTransactionReceipt(p.transactionHash);
                                        case 26:
                                            if (f = i.sent, f = "deposit" == o ? f.logs.filter((function(e) {
                                                    return e.address == h && "0x0000000000000000000000000000000000000000000000000000000000000000" == e.topics[1]
                                                })) : f.logs.filter((function(e) {
                                                    return e.address == s && "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" == e.topics[0] && e.topics[2] == "0x000000000000000000000000" + h.substr(2).toLowerCase()
                                                })), f.length) {
                                                i.next = 30;
                                                break
                                            }
                                            return i.abrupt("return", !1);
                                        case 30:
                                            return m = f[0], console.log(p, "MINTED", m, "SENT"), b = p.data / m.data, "withdrawal" == o && (b = m.data / p.data), console.log(b), i.abrupt("return", {
                                                blockNumber: p.blockNumber,
                                                exchangeRate: b
                                            });
                                        case 36:
                                            return i.abrupt("return", !1);
                                        case 37:
                                        case "end":
                                            return i.stop()
                                    }
                                }), i)
                            })))()
                        }
                    }
                },
                f = {
                    mixins: [w["a"], h["a"], p]
                },
                m = f,
                b = a("2877"),
                _ = Object(b["a"])(m, l, c, !1, null, null, null),
                S = _.exports,
                P = function() {
                    var e = this,
                        s = e.$createElement,
                        a = e._self._c || s;
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
                            click: function(s) {
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
                            change: function(s) {
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
                            change: function(s) {
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
                            change: function(s) {
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
                x = [function() {
                    var e = this,
                        s = e.$createElement,
                        a = e._self._c || s;
                    return a("b", [e._v("Total profit "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long inverse"
                    }, [e._v(" Profit from Pool trading fees + incentives ")])]), e._v(" :")])
                }, function() {
                    var e = this,
                        s = e.$createElement,
                        a = e._self._c || s;
                    return a("b", [e._v(" Total profit "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long inverse"
                    }, [e._v(" Profit from Pool trading fees + incentives ")])]), e._v(" : ")])
                }],
                g = (a("3ca3"), a("ddb0"), a("5245")),
                N = {
                    data: function() {
                        return {
                            addliquidityTopic: "0x3f1915775e0c9a38a57a7bb7f1f9005f486fb904e1f84aa215364d567319a58d",
                            removeliquidityTopic: "0xb964b72f73f5ef5bf0fdc559b2fab9a7b12a39e47817a547f1f0aee47febd602",
                            removeliquidityImbalanceTopic: "0x9878ca375e106f2a43c3b599fc624568131c4c9a4ba66a14563715763be9d59d",
                            removeliquidityOneTopic: "0x9e96dd3b997a2a257eec4df9bb6eaf626e206df5f543bd963682d143300be310",
                            earnedSNX: null,
                            earnedREN: null,
                            paidRewardsSNX: null,
                            paidRewardsREN: null,
                            profitTotalStake: null,
                            weeklyEstimateSNX: null,
                            weeklyEstimateREN: null,
                            weeklyEstimateBPT: null,
                            snxPrice: null,
                            renPrice: null,
                            BPTPrice: null,
                            btcPrices: [],
                            mtaPrice: null,
                            keepPrice: null
                        }
                    },
                    mounted: function() {
                        var e = this;
                        return Object(v["a"])(regeneratorRuntime.mark((function s() {
                            return regeneratorRuntime.wrap((function(s) {
                                while (1) switch (s.prev = s.next) {
                                    case 0:
                                        e.account && r["f"].multicall && e.getPrices();
                                    case 1:
                                    case "end":
                                        return s.stop()
                                }
                            }), s)
                        })))()
                    },
                    created: function() {
                        var e = this;
                        return Object(v["a"])(regeneratorRuntime.mark((function s() {
                            return regeneratorRuntime.wrap((function(s) {
                                while (1) switch (s.prev = s.next) {
                                    case 0:
                                        e.$watch((function() {
                                            return e.account && r["f"].multicall
                                        }), (function(s) {
                                            return s && e.getPrices()
                                        }));
                                    case 1:
                                    case "end":
                                        return s.stop()
                                }
                            }), s)
                        })))()
                    },
                    computed: {
                        totalShare: function() {
                            return r["h"].totalShare()
                        },
                        showEarnedSNX: function() {
                            return 1 == this.showinUSD ? (+this.earnedSNX * this.snxPrice).toFixed(2) : (+this.earnedSNX).toFixed(2)
                        },
                        showEarnedSNXUSD: function() {
                            return (+this.earnedSNX * this.snxPrice).toFixed(2)
                        },
                        showEarnedREN: function() {
                            return 1 == this.showinUSD ? (+this.earnedREN * this.renPrice).toFixed(2) : (+this.earnedREN).toFixed(2)
                        },
                        showEarnedRENUSD: function() {
                            return (+this.earnedREN * this.renPrice).toFixed(2)
                        },
                        showRewardsSNX: function() {
                            return 1 == this.showinUSD ? (+this.paidRewardsSNX * this.snxPrice).toFixed(3) : (+this.paidRewardsSNX).toFixed(2)
                        },
                        showRewardsSNXUSD: function() {
                            return (+this.paidRewardsSNX * this.snxPrice).toFixed(3)
                        },
                        showRewardsREN: function() {
                            return 1 == this.showinUSD ? (+this.paidRewardsREN * this.renPrice).toFixed(3) : (+this.paidRewardsREN).toFixed(2)
                        },
                        showRewardsRENUSD: function() {
                            return (+this.paidRewardsREN * this.renPrice).toFixed(3)
                        },
                        showWeeklySNX: function() {
                            return 1 == this.showinUSD ? (+this.weeklyEstimateSNX * this.snxPrice).toFixed(3) : (+this.weeklyEstimateSNX).toFixed(2)
                        },
                        showWeeklyREN: function() {
                            return 1 == this.showinUSD ? (+this.weeklyEstimateREN * this.snxPrice).toFixed(3) : (+this.weeklyEstimateREN).toFixed(2)
                        },
                        showWeeklyBPT: function() {
                            return 1 == this.showinUSD ? (+this.weeklyEstimateBPT * this.BPTPrice).toFixed(2) : (+this.weeklyEstimateBPT).toFixed(4)
                        }
                    },
                    methods: {
                        getPrices: function() {
                            var e = this;
                            return Object(v["a"])(regeneratorRuntime.mark((function s() {
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            ["susdv2", "sbtc"].includes(r["f"].currentContract) && e.getSNXRewards(), ["tbtc", "ren", "sbtc", "hbtc"].includes(r["f"].currentContract) && e.getBTCPrice();
                                        case 2:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            })))()
                        },
                        getBTCPrice: function() {
                            var e = this;
                            return Object(v["a"])(regeneratorRuntime.mark((function s() {
                                var a, n;
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            return s.next = 2, fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
                                        case 2:
                                            return a = s.sent, s.next = 5, a.json();
                                        case 5:
                                            n = s.sent, e.btcPrice = n.bitcoin.usd;
                                        case 7:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            })))()
                        },
                        getSNXRewards: function() {
                            var e = this;
                            return Object(v["a"])(regeneratorRuntime.mark((function s() {
                                var a, n, t, i, o, l, c, d, u, w, h, v, p, f, m, b, _, S, P, x;
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            return s.next = 2, Promise.all([fetch("https://api.coingecko.com/api/v3/simple/price?ids=havven,republic-protocol,meta,keep-network&vs_currencies=usd")]);
                                        case 2:
                                            return a = s.sent, s.next = 5, Promise.all(a.map((function(e) {
                                                return e.json()
                                            })));
                                        case 5:
                                            return n = s.sent, e.snxPrice = n[0].havven.usd, e.renPrice = n[0]["republic-protocol"].usd, e.mtaPrice = n[0].meta.usd, e.keepPrice = n[0]["keep-network"].usd, t = r["f"].curveRewards, i = [
                                                [t._address, t.methods.earned(e.account).encodeABI()],
                                                [t._address, t.methods.balanceOf(e.account).encodeABI()],
                                                [t._address, t.methods.userRewardPerTokenPaid(e.account).encodeABI()],
                                                [t._address, t.methods.totalSupply().encodeABI()]
                                            ], "sbtc" == r["f"].currentContract && (o = new r["f"].web3.eth.Contract(g["d"], g["e"]), i.push([o._address, o.methods.totalSupply().encodeABI()], [o._address, o.methods.getBalance("0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f").encodeABI()], [o._address, o.methods.getBalance("0x408e41876cccdc0f92210600ef50372656052a38").encodeABI()])), i.push([t._address, t.methods.DURATION().encodeABI()], [t._address, t.methods.rewardRate().encodeABI()], [t._address, t.methods.periodFinish().encodeABI()]), s.next = 16, r["f"].multicall.methods.aggregate(i).call();
                                        case 16:
                                            if (l = s.sent, c = l[1].map((function(e) {
                                                    return r["f"].web3.eth.abi.decodeParameter("uint256", e)
                                                })), d = Date.now() / 1e3, u = c[c.length - 1], "susdv2" != r["f"].currentContract) {
                                                s.next = 29;
                                                break
                                            }
                                            return e.earnedSNX = +c[0] / 1e18, s.next = 24, r["f"].web3.eth.getPastLogs({
                                                fromBlock: "0x975bfa",
                                                toBlock: "latest",
                                                address: "0xdcb6a51ea3ca5d3fd898fd6564757c7aaec3ca92",
                                                topics: ["0xe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486", "0x000000000000000000000000" + e.account.slice(2)]
                                            });
                                        case 24:
                                            w = s.sent, h = w.map((function(e) {
                                                return r["f"].web3.eth.abi.decodeParameter("uint256", e.data) / 1e18
                                            })).reduce((function(e, s) {
                                                return e + s
                                            }), 0), e.paidRewardsSNX = h, v = c.length, e.weeklyEstimateSNX = c[v - 3] * c[v - 2] / 1e18 * r["f"].curveStakedBalance / c[3];
                                        case 29:
                                            if ("mta" != r["f"].currentContract) {
                                                s.next = 38;
                                                break
                                            }
                                            return e.earnedSNX = +c[0] / 1e18, s.next = 33, r["f"].web3.eth.getPastLogs({
                                                fromBlock: "0xa81595",
                                                toBlock: "latest",
                                                address: "0xE6E6E25EfdA5F69687aA9914f8d750C523A1D261",
                                                topics: ["0xe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486", "0x000000000000000000000000" + e.account.slice(2)]
                                            });
                                        case 33:
                                            p = s.sent, f = p.map((function(e) {
                                                return r["f"].web3.eth.abi.decodeParameter("uint256", e.data) / 1e18
                                            })).reduce((function(e, s) {
                                                return e + s
                                            }), 0), e.paidRewardsSNX = f, m = c.length, e.weeklyEstimateSNX = c[m - 3] * c[m - 2] / 1e18 * r["f"].curveStakedBalance / c[3];
                                        case 38:
                                            if ("sbtc" != r["f"].currentContract) {
                                                s.next = 51;
                                                break
                                            }
                                            return e.earnedSNX = c[0] * c[5] / c[4] / 1e18, e.earnedREN = c[0] * c[6] / c[4] / 1e18, c[5] / c[4], c[6] / c[4], e.BPTPrice = c[5] / c[4] * e.snxPrice + c[6] / c[4] * e.renPrice, e.weeklyEstimateBPT = 10 / c[3] * r["f"].curveStakedBalance, s.next = 47, r["f"].web3.eth.getPastLogs({
                                                fromBlock: "0x9d010d",
                                                toBlock: "latest",
                                                address: "0x13c1542a468319688b89e323fe9a3be3a90ebb27",
                                                topics: ["0xe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486", "0x000000000000000000000000" + e.account.slice(2)]
                                            });
                                        case 47:
                                            b = s.sent, _ = b.map((function(e) {
                                                return r["f"].web3.eth.abi.decodeParameter("uint256", e.data) / 1e18
                                            })).reduce((function(e, s) {
                                                return e + s
                                            }), 0), e.paidRewardsSNX = _ * c[4] / c[3], e.paidRewardsREN = _ * c[5] / c[3];
                                        case 51:
                                            if ("tbtc" != r["f"].currentContract) {
                                                s.next = 60;
                                                break
                                            }
                                            return e.earnedSNX = +c[0] / 1e18, s.next = 55, r["f"].web3.eth.getPastLogs({
                                                fromBlock: "0xa960a7",
                                                toBlock: "latest",
                                                address: "0xAF379f0228ad0d46bB7B4f38f9dc9bCC1ad0360c",
                                                topics: ["0xe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486", "0x000000000000000000000000" + e.account.slice(2)]
                                            });
                                        case 55:
                                            S = s.sent, P = S.map((function(e) {
                                                return r["f"].web3.eth.abi.decodeParameter("uint256", e.data) / 1e18
                                            })).reduce((function(e, s) {
                                                return e + s
                                            }), 0), e.paidRewardsSNX = P, x = c.length, e.weeklyEstimateSNX = c[x - 3] * c[x - 2] / 1e18 * r["f"].curveStakedBalance / c[3];
                                        case 60:
                                            +u < d && (e.weeklyEstimateSNX = 0, e.weeklyEstimateBPT = 0), e.profitTotalStake = +c[1] / 1e18;
                                        case 62:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            })))()
                        },
                        getExchangeRate: function() {
                            return Object(v["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", 1);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        checkExchangeRateBlocks: function(e, s, a) {
                            var n = arguments;
                            return Object(v["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return n.length > 3 && void 0 !== n[3] ? n[3] : "deposit", e.abrupt("return", 1);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                },
                k = {
                    mixins: [w["a"], h["a"], N]
                },
                R = k,
                D = Object(b["a"])(R, P, x, !1, null, null, null),
                E = D.exports,
                U = {
                    components: {
                        Profit: o["default"],
                        yProfit: S,
                        plainProfit: E
                    },
                    computed: Object(i["a"])({}, r["h"], {
                        currentProfit: function() {
                            return ["compound", "usdt"].includes(this.currentPool) ? "Profit" : ["susdv2", "tbtc", "ren", "sbtc", "hbtc", "gusd", "husd", "usdk", "usdn", "linkusd", "musd", "rsv", "dusd"].includes(this.currentPool) ? "plainProfit" : "yProfit"
                        }
                    })
                },
                y = U,
                X = Object(b["a"])(y, n, t, !1, null, null, null);
            s["default"] = X.exports
        },
        c975: function(e, s, a) {
            "use strict";
            var n = a("23e7"),
                t = a("4d64").indexOf,
                i = a("a640"),
                r = a("ae40"),
                o = [].indexOf,
                l = !!o && 1 / [1].indexOf(1, -0) < 0,
                c = i("indexOf"),
                d = r("indexOf", {
                    ACCESSORS: !0,
                    1: 0
                });
            n({
                target: "Array",
                proto: !0,
                forced: l || !c || !d
            }, {
                indexOf: function(e) {
                    return l ? o.apply(this, arguments) || 0 : t(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }
    }
]);
//# sourceMappingURL=chunk-724a4e26.431c0ea6.js.map