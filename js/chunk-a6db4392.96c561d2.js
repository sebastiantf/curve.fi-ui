(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-a6db4392", "chunk-ff196028"], {
        "3c57": function(e, t, a) {},
        "5c41": function(e, t, a) {
            "use strict";
            a.r(t);
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", [a("div", {
                        class: {
                            "window white": !e.pool
                        }
                    }, [a("fieldset", [a("legend", [e._v("Average liquidity provider profit [ "), a("span", {
                        class: {
                            "loading line": e.loading
                        },
                        attrs: {
                            id: "apr-profit"
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.loading,
                            expression: "!loading"
                        }]
                    }, [e._v(" " + e._s(e._f("toFixed2")(100 * e.apr)) + "%")])]), e._v(" APY "), e._m(0), e._v(" ] ")]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.loading,
                            expression: "loading"
                        }],
                        staticClass: "loading matrix"
                    }), a("highcharts", {
                        ref: "highcharts",
                        attrs: {
                            "constructor-type": "stockChart",
                            options: e.chartdata
                        }
                    })], 1), a("div", {
                        staticClass: "allapys"
                    }, [a("p", [e._v("Recent daily APY: "), a("span", {
                        class: {
                            "loading line": e.loading
                        },
                        attrs: {
                            id: "daily-apr"
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.loading,
                            expression: "!loading"
                        }]
                    }, [e._v(" " + e._s(e._f("toFixed2")(100 * e.daily_apr)) + "% ")])])]), a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susd" != e.pool,
                            expression: "pool != 'susd'"
                        }]
                    }, [e._v("Daily trading volume: "), a("span", {
                        class: {
                            "loading line": e.volumeData[0] < 0
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: -1 != e.volumeData[0],
                            expression: "volumeData[0] != -1"
                        }]
                    }, [e._v(" " + e._s(e._f("formatNumber")(e.volumeData[0], 0)) + "$")])])]), a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["tbtc", "ren", "sbtc", "hbtc"].includes(e.getPool),
                            expression: "['tbtc', 'ren', 'sbtc', 'hbtc'].includes(getPool)"
                        }]
                    }, [e._v("Daily ₿ trading volume: "), a("span", {
                        class: {
                            "loading line": e.volumeData[0] < 0
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: -1 != e.volumeData[1],
                            expression: "volumeData[1] != -1"
                        }]
                    }, [e._v(" " + e._s(e._f("formatNumber")(e.volumeData[1], 8)) + " ₿")])])]), a("p", [e._v("Recent weekly APY: "), a("span", {
                        class: {
                            "loading line": e.loading
                        },
                        attrs: {
                            id: "weekly-apr"
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.loading,
                            expression: "!loading"
                        }]
                    }, [e._v(" " + e._s(e._f("toFixed2")(100 * e.weekly_apr)) + "% ")])])]), a("p", [e._v("Recent monthly APY: "), a("span", {
                        class: {
                            "loading line": e.loading
                        },
                        attrs: {
                            id: "monthly-apr"
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.loading,
                            expression: "!loading"
                        }]
                    }, [e._v(" " + e._s(e._f("toFixed2")(100 * e.monthly_apr)) + "% ")])])]), a("p", [e._v("Total APY: "), a("span", {
                        class: {
                            "loading line": e.loading
                        },
                        attrs: {
                            id: "total-apr"
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.loading,
                            expression: "!loading"
                        }]
                    }, [e._v(" " + e._s(e._f("toFixed2")(100 * e.total_apr)) + "% ")])]), e._m(1)])]), e.pool ? e._e() : a("daily-chart", {
                        attrs: {
                            data: e.data,
                            pool: e.pool || e.currentPool,
                            volume: e.volume
                        }
                    })], 1)])
                },
                n = [function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?]"), a("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("(on annual basis)")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Total APY since the pool was launched")])])
                }],
                r = (a("99af"), a("c740"), a("d81d"), a("13d5"), a("b0c0"), a("b680"), a("d3b7"), a("96cf"), a("1da1")),
                o = a("5530"),
                i = a("5245"),
                c = (a("2fa3"), a("51bf")),
                l = a("ea7f"),
                u = a.n(l),
                d = a("0319"),
                _ = a.n(d),
                p = a("d68a"),
                f = a.n(p),
                h = a("4452"),
                v = a("37d8"),
                m = a.n(v),
                w = a("a041"),
                b = a("a4e2");
            _()(u.a), f()(u.a), m()(u.a);
            var g = {
                    components: {
                        highcharts: h["Chart"],
                        DailyChart: w["a"]
                    },
                    watch: {
                        currentPool: function(e) {
                            this.mounted()
                        }
                    },
                    props: ["pool"],
                    data: function() {
                        return {
                            data: [],
                            apr: "",
                            daily_apr: "",
                            weekly_apr: "",
                            monthly_apr: "",
                            total_apr: "",
                            chartdata: {
                                chart: {
                                    panning: !0,
                                    zoomType: "x",
                                    panKey: "ctrl"
                                },
                                rangeSelector: {
                                    selected: 1
                                },
                                exporting: {
                                    buttons: {
                                        contextButton: {
                                            menuItems: ["printChart", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG", "separator", "downloadCSV", "downloadXLS", "openInCloud"]
                                        }
                                    }
                                },
                                yAxis: {
                                    opposite: !1,
                                    title: {
                                        text: "Profit [%]",
                                        style: {
                                            color: "black"
                                        }
                                    },
                                    labels: {
                                        formatter: function() {
                                            return (Math.floor(100 * this.value) / 100).toFixed(2)
                                        },
                                        style: {
                                            color: "black"
                                        }
                                    },
                                    tickPixelInterval: 10
                                },
                                xAxis: {
                                    labels: {
                                        style: {
                                            color: "black"
                                        }
                                    }
                                },
                                series: [],
                                tooltip: {
                                    valueDecimals: 5,
                                    pointFormatter: function() {
                                        var e = Math.floor(1e5 * this.y) / 1e5 + "%";
                                        return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(e, "</b><br/>")
                                    }
                                },
                                legend: {
                                    enabled: !0
                                }
                            },
                            virtual_price_0: 0,
                            chartdataDaily: null,
                            loading: !0,
                            chart: null,
                            start: 0,
                            end: 0
                        }
                    },
                    computed: Object(o["a"])({}, c["h"], {
                        volume: function() {
                            return b["f"].volumes[this.getPool]
                        },
                        volumeData: function() {
                            return b["f"].volumes[this.getPool]
                        },
                        getPool: function() {
                            var e = this.pool || this.currentPool;
                            return e = "iearn" == e ? "y" : "susdv2" == e ? "susd" : e, e
                        }
                    }),
                    created: function() {
                        var e = this,
                            t = new Date;
                        t.setHours(0, 0, 0, 0), this.start = t.getTime() / 1e3;
                        var a = new Date;
                        a.setHours(23, 59, 59, 999), this.end = a.getTime() / 1e3, this.$watch((function() {
                            return c["f"].currentContract
                        }), (function(t) {
                            c["f"].initializedContracts && e.mounted()
                        }))
                    },
                    mounted: function() {
                        this.chart = this.$refs.highcharts.chart, this.chart.showLoading(), this.mounted(), b["e"](this.pool || this.currentPool)
                    },
                    methods: {
                        mounted: function() {
                            var e = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function t() {
                                var a, s, n, r, o, i, c, l, u, d, _, p, f, h, v, m, w;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            e.loading = !0;
                                            while (e.chart.series.length) e.chart.series[0].remove();
                                            if (a = e.pool || e.currentPool, "iearn" == a && (a = "y"), "susd" == a && (a = "synthetix"), "susdv2" == a && (a = "susd"), "ren" == a && (a = "ren2"), "sbtc" == a && (a = "rens"), "synthetix" != a) {
                                                t.next = 26;
                                                break
                                            }
                                            return t.next = 11, fetch("https://".concat(a, ".curve.fi/stats.json"));
                                        case 11:
                                            return s = t.sent, t.next = 14, s.json();
                                        case 14:
                                            for (n = t.sent, e.apr = n.apr, e.daily_apr = n.daily_apr, e.weekly_apr = n.weekly_apr, r = n.data, e.data = r, o = Math.max(Math.round(r.length / 500), 1), i = r[0][1], c = [], l = 0; l < r.length; l++) l % o == 0 | l == r.length - 1 && (u = r[l], c.push([1e3 * u[0], 100 * (u[1] / i - 1)]));
                                            t.next = 55;
                                            break;
                                        case 26:
                                            return t.next = 28, fetch("".concat(window.domain, "/raw-stats/apys.json"));
                                        case 28:
                                            return d = t.sent, t.next = 31, d.json();
                                        case 31:
                                            return d = t.sent, e.apr = d.apy.total[a], e.daily_apr = d.apy.day[a], e.weekly_apr = d.apy.week[a], e.monthly_apr = d.apy.month[a], e.total_apr = d.apy.total[a], _ = 1440, t.next = 40, fetch("".concat(window.domain, "/raw-stats/").concat(a, "-").concat(_, "m.json"));
                                        case 40:
                                            return p = t.sent, t.next = 43, p.json();
                                        case 43:
                                            for (e.data = t.sent, o = Math.max(Math.round(e.data.length / 500), 1), f = e.data.findIndex((function(e) {
                                                    return e.virtual_price > 0
                                                })), "rens" == a && (f = 4), "hbtc" == a && (f = 14), "3pool" == a && (f = 9), e.virtual_price_0 = e.data[f].virtual_price, i = e.data[f].virtual_price / 1e18, h = e.calcRealProfit(e.data[f], a), c = [], v = [], m = f; m < e.data.length; m++) u = e.data[m], w = e.calcRealProfit(u, a), v.push([1e3 * u.timestamp, 100 * (w / h - 1)]), c.push([1e3 * u.timestamp, 100 * (u.virtual_price / 1e18 / i - 1)]);
                                        case 55:
                                            e.chart.hideLoading(), e.chart.addSeries({
                                                name: "Virtual growth of liquidity share",
                                                lineWidth: 2,
                                                data: c,
                                                color: "#0b0a57"
                                            }, !1, !1), e.chart.addSeries({
                                                name: "Real growth of liquidity share",
                                                lineWidth: 2,
                                                data: v
                                            }, !1, !1), e.chart.redraw(!1), e.loading = !1;
                                        case 60:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        calcRealProfit: function(e, t) {
                            var a = this,
                                s = e.balances.map((function(a, s) {
                                    return a * e.rates[s] / i["g"]["susd" == t ? "susdv2" : "ren2" == t ? "ren" : "rens" == t ? "sbtc" : t].coin_precisions[s]
                                })).reduce((function(e, t) {
                                    return e + t
                                }), 0),
                                n = e.balances.map((function(n, r) {
                                    var o = "1-" + r;
                                    0 == r && (o = "0-1");
                                    var c = e.prices[o] && e.prices[o][0];
                                    r > 0 && (c = 1 / c), isFinite(c) && void 0 != c || (o = "2-" + r, 0 == r && (o = "0-2"), c = e.prices[o] && e.prices[o][0], r > 0 && (c = 1 / c)), c = c || 1, c = Math.min(c, 1.01);
                                    var l = n * e.rates[r] / i["g"]["susd" == t ? "susdv2" : "ren2" == t ? "ren" : "rens" == t ? "sbtc" : t].coin_precisions[r];
                                    return l / s * (e.virtual_price / a.virtual_price_0) * c
                                })).reduce((function(e, t) {
                                    return e + t
                                }), 0);
                            return n
                        }
                    }
                },
                y = g,
                x = (a("dd97"), a("2877")),
                k = Object(x["a"])(y, s, n, !1, null, "181124b5", null);
            t["default"] = k.exports
        },
        "62c4": function(e, t, a) {
            "use strict";
            a.r(t);
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.error,
                            expression: "error"
                        }],
                        staticClass: "error window half-width info",
                        attrs: {
                            id: "error-window"
                        }
                    }, [e._v(" " + e._s(e.error) + " ")]), a("total-balances"), e._l(Object.keys(e.filteredCurrencies), (function(t, s) {
                        return a("div", {
                            staticClass: "window white"
                        }, [a("p", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "susd" == t,
                                expression: "currency == 'susd'"
                            }],
                            staticClass: "simple-error"
                        }, [e._v(" Old susd pool. Please "), a("router-link", {
                            attrs: {
                                to: "/susd/withdraw"
                            }
                        }, [e._v("withdraw and move")]), e._v(" funds to "), a("router-link", {
                            attrs: {
                                to: "/susdv2"
                            }
                        }, [e._v("susdv2")]), e._v(" pool ")], 1), a("p", {
                            staticClass: "text-center"
                        }, [a("router-link", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !["tbtc", "ren", "sbtc"].includes(t),
                                expression: "!['tbtc', 'ren', 'sbtc'].includes(currency)"
                            }],
                            attrs: {
                                to: t
                            }
                        }, [e._v(e._s("iearn" == t ? "y" : t) + ".curve.fi")]), a("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: ["tbtc", "ren", "sbtc"].includes(t),
                                expression: "['tbtc', 'ren', 'sbtc'].includes(currency)"
                            }]
                        }, [e._v(e._s(t))])], 1), a("stats", {
                            attrs: {
                                pool: t
                            }
                        }), a("balances-info", {
                            attrs: {
                                bal_info: e.bal_infos[t],
                                total: e.totals[s],
                                l_info: e.l_infos[t],
                                totalShare: e.totalShares[s],
                                fee: e.fees[s],
                                admin_fee: e.admin_fees[s],
                                pool: t,
                                currencies: e.allCurrencies[t],
                                tokenSupply: e.totalTokenSupplies[s],
                                tokenBalance: e.totalTokenBalances[s],
                                usdShare: e.usdShares[s],
                                staked_info: ["susdv2", "sbtc", "y", "iearn"].includes(t) && e.staked_infos[t],
                                totalStake: e.totalStakes[t],
                                usdStake: e.usdStakes[t],
                                virtual_price: e.virtual_prices[s],
                                A: e.As[s],
                                future_A: e.future_As[s],
                                admin_actions_deadline: e.admin_actions_deadlines[s],
                                combinedstats: !0
                            }
                        })], 1)
                    }))], 2)
                },
                n = [],
                r = (a("cb29"), a("4de4"), a("a630"), a("caad"), a("d81d"), a("fb6a"), a("4fad"), a("c1f9"), a("3ca3"), a("96cf"), a("1da1")),
                o = a("3835"),
                i = a("5530"),
                c = a("2b0e"),
                l = a("5c41"),
                u = a("b2ea"),
                d = (a("6314"), a("6eaa")),
                _ = a("51bf"),
                p = a("5245"),
                f = a("2fa3"),
                h = {
                    metaInfo: {
                        title: "Curve.fi - Stats",
                        meta: [{
                            property: "og:url",
                            content: "https://curve.fi/combinedstats"
                        }, {
                            name: "twitter:url",
                            content: "https://curve.fi/combinedstats"
                        }]
                    },
                    components: {
                        Stats: l["default"],
                        BalancesInfo: u["a"],
                        TotalBalances: d["a"]
                    },
                    data: function() {
                        return {
                            contracts: [],
                            web3contracts: {},
                            all_coins: {},
                            all_underlying_coins: {},
                            all_c_rates: {},
                            all_fees: {},
                            totals: [],
                            bal_infos: {},
                            l_infos: {},
                            totalShares: [],
                            totalStakes: {},
                            usdShares: [],
                            usdStakes: {},
                            staked_infos: {},
                            totalStake: -1,
                            usdStake: -1,
                            virtual_prices: [],
                            As: [],
                            future_As: [],
                            admin_actions_deadlines: [],
                            fees: [],
                            admin_fees: [],
                            totalTokenBalances: [],
                            totalTokenSupplies: []
                        }
                    },
                    created: function() {
                        var e = this;
                        this.$watch((function() {
                            return _["f"].initializedContracts
                        }), (function(t) {
                            t && e.mounted()
                        })), this.$watch((function() {
                            return _["f"].currentContract
                        }), (function(t) {
                            _["f"].initializedContracts && e.mounted()
                        }))
                    },
                    computed: {
                        allCurrencies: function() {
                            return Object.assign(_["c"], {
                                susd: {
                                    susd: "sUSD",
                                    ycurve: "yCurve"
                                }
                            })
                        },
                        allContracts: function() {
                            var e = Object(i["a"])({}, p["g"]);
                            return delete e.y, delete e.tbtc, e
                        },
                        error: function() {
                            return _["f"].error
                        },
                        filteredCurrencies: function() {
                            return Object.fromEntries(Object.entries(this.allCurrencies).filter((function(e) {
                                var t = Object(o["a"])(e, 2),
                                    a = t[0];
                                t[1];
                                return !["tbtc"].includes(a)
                            })))
                        }
                    },
                    mounted: function() {
                        _["f"].initializedContracts && this.mounted()
                    },
                    methods: {
                        mounted: function() {
                            var e = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e.fees = Array.from(4).fill(0), e.admin_fees = Array.from(4).fill(null), e.admin_fees = Array.from(4).fill(null), e.admin_fees = Array.from(4).fill(null), t.next = 6, e.init_contracts();
                                        case 6:
                                            return t.next = 8, e.update_fee_info();
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        poolLink: function(e) {
                            return "iearn" == e ? "y" : "susd" == e ? "https://yearn.finance/pool" : e
                        },
                        init_contracts: function() {
                            var e = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function t() {
                                var a, s, n, r, i, c, l, u, d;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            for (a = 0, s = Object.entries(e.allContracts); a < s.length; a++)
                                                for (n = Object(o["a"])(s[a], 2), r = n[0], i = n[1], e.web3contracts[r] = {}, e.web3contracts[r].swap = new _["f"].web3.eth.Contract(i.swap_abi, i.swap_address), e.web3contracts[r].swap_token = new _["f"].web3.eth.Contract(p["c"], i.token_address), e.all_coins[r] = {}, e.all_coins[r].coins = [], e.all_underlying_coins[r] = {}, e.all_underlying_coins[r].underlying_coins = [], c = 0; c < i.N_COINS; c++) l = p["g"][r].coins[c], u = ["iearn", "y", "busd", "susd", "pax"].includes(r) ? p["y"] : p["f"], "susd" == r && 1 == c && (u = p["g"].iearn.swap_abi, l = p["g"].iearn.swap_address), e.all_coins[r].coins[c] = new _["f"].web3.eth.Contract(u, l), d = p["g"][r].underlying_coins[c], e.all_underlying_coins[r].underlying_coins[c] = new _["f"].web3.eth.Contract(p["c"], d);
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        update_rates: function() {
                            var e = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function t() {
                                var a, s, n, r, i, c, l;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            for (a = [], s = 0, n = Object.entries(e.allContracts); s < n.length; s++) {
                                                for (r = Object(o["a"])(n[s], 2), i = r[0], c = r[1], e.all_fees[i] = [], e.all_c_rates[i] = {}, e.all_c_rates[i].c_rates = [], l = 0; l < c.N_COINS; l++) c.tethered && c.tethered[l] && c.use_lending && !c.use_lending[l] || "susdv2" == i || "pax" == i && 3 == l || "tbtc" == i || "ren" == i || "sbtc" == i || "hbtc" == i || "3pool" == i ? e.all_c_rates[i].c_rates[l] = 1 / c.coin_precisions[l] : "iearn" == i || "y" == i || "busd" == i || "susd" == i && 0 == l || "pax" == i && l < 3 ? a.push([e.all_coins[i].coins[l]._address, e.all_coins[i].coins[l].methods.getPricePerFullShare().encodeABI()]) : "susd" == i && 1 == l ? a.push([e.all_coins[i].coins[l]._address, e.all_coins[i].coins[l].methods.get_virtual_price().encodeABI()]) : "usdt" != i && a.push([e.all_coins[i].coins[l]._address, e.all_coins[i].coins[l].methods.exchangeRateStored().encodeABI()], [e.all_coins[i].coins[l]._address, e.all_coins[i].coins[l].methods.supplyRatePerBlock().encodeABI()], [e.all_coins[i].coins[l]._address, e.all_coins[i].coins[l].methods.accrualBlockNumber().encodeABI()]), a.push([e.web3contracts[i].swap._address, e.web3contracts[i].swap.methods.balances(l).encodeABI()]);
                                                a.push([e.web3contracts[i].swap._address, e.web3contracts[i].swap.methods.get_virtual_price().encodeABI()], [e.web3contracts[i].swap._address, e.web3contracts[i].swap.methods.A().encodeABI()], [e.web3contracts[i].swap._address, e.web3contracts[i].swap.methods.future_A().encodeABI()], [e.web3contracts[i].swap._address, e.web3contracts[i].swap.methods.admin_actions_deadline().encodeABI()], [e.web3contracts[i].swap._address, e.web3contracts[i].swap.methods.fee().encodeABI()], [e.web3contracts[i].swap._address, e.web3contracts[i].swap.methods.admin_fee().encodeABI()], [e.web3contracts[i].swap_token._address, e.web3contracts[i].swap_token.methods.balanceOf(_["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()], [e.web3contracts[i].swap_token._address, e.web3contracts[i].swap_token.methods.totalSupply().encodeABI()])
                                            }
                                            return t.abrupt("return", a);
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        update_fee_info: function() {
                            var e = arguments,
                                t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function a() {
                                var s, n, r, i, l, u, d, h, v, m, w, b, g, y;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return e.length > 0 && void 0 !== e[0] ? e[0] : "new", a.next = 3, t.update_rates();
                                        case 3:
                                            return s = a.sent, s.push([p["g"].susdv2.sCurveRewards_address, "0x70a08231000000000000000000000000" + (_["f"].default_account || "0x0000000000000000000000000000000000000000").slice(2)]), s.push([p["g"].sbtc.sCurveRewards_address, "0x70a08231000000000000000000000000" + (_["f"].default_account || "0x0000000000000000000000000000000000000000").slice(2)]), s.push([p["g"].iearn.sCurveRewards_address, "0x70a08231000000000000000000000000" + (_["f"].default_account || "0x0000000000000000000000000000000000000000").slice(2)]), a.next = 9, _["f"].multicall.methods.aggregate(s).call();
                                        case 9:
                                            for (n = a.sent, r = n[0], i = n[1].map((function(e) {
                                                    return _["f"].web3.eth.abi.decodeParameter("uint256", e)
                                                })), l = i[i.length - 3], u = i[i.length - 2], d = i[i.length - 1], console.log(d, "Y CURVE STAKED BALANCE"), i = i.slice(0, i.length - 1), h = 0, t.bal_infos["usdt"] = [], t.l_infos["usdt"] = [], v = function() {
                                                    var e = Object(o["a"])(w[m], 2),
                                                        a = e[0];
                                                    e[1];
                                                    t.bal_infos[a] = [], t.l_infos[a] = [], b = 0;
                                                    var s = 16 * h;
                                                    if (h > 1 && (s -= 5), "compound" == a && f["d"](i.slice(s, s + 8), 4).map((function(e, s) {
                                                            var n = +e[0] / 1e18 / p["g"][a].coin_precisions[s],
                                                                o = +e[1],
                                                                i = +e[2],
                                                                c = +e[3],
                                                                l = n * (1 + o * (r - i) / 1e18);
                                                            t.all_c_rates[a].c_rates[s] = l, t.all_c_rates["usdt"].c_rates[s] = l;
                                                            var u = c * t.all_c_rates[a].c_rates[s];
                                                            t.bal_infos[a].push(u), b += u
                                                        })), "usdt" == a) {
                                                        t.bal_infos.usdt.push(t.all_c_rates["compound"].c_rates[0] * +i[s]), t.bal_infos.usdt.push(t.all_c_rates["compound"].c_rates[1] * +i[s + 1]), t.all_c_rates[a].c_rates[2] = 1 / p["g"][a].coin_precisions[2];
                                                        var n = +i[s + 2] * t.all_c_rates[a].c_rates[2];
                                                        s -= 5, t.bal_infos[a].push(n), b += t.bal_infos.usdt[0] + t.bal_infos.usdt[1] + n
                                                    }
                                                    if ("iearn" == a || "busd" == a || "susd" == a || "susdnew" == a) {
                                                        var _ = i.slice(s, s + 2 * p["g"][a].N_COINS);
                                                        f["d"](_, 2).map((function(e, s) {
                                                            if (void 0 === e[1]) {
                                                                var n = +e[0],
                                                                    r = t.all_c_rates[a].c_rates[s] * n;
                                                                t.bal_infos[a].push(r), b += r
                                                            } else {
                                                                var o = +e[0] / 1e18 / p["g"][a].coin_precisions[s];
                                                                "susd" == a && 1 == s && (o = +e[0] / 1e36), t.all_c_rates[a].c_rates[s] = o;
                                                                var i = +e[1],
                                                                    c = o * i;
                                                                t.bal_infos[a].push(c), b += c
                                                            }
                                                        })), "susd" == a && (s -= 4)
                                                    }
                                                    if ("susdv2" == a) {
                                                        for (var v = p["g"][a].N_COINS, x = i.slice(s - v, s), k = 0; k < 4; k++) {
                                                            var C = t.all_c_rates.susdv2.c_rates[k] * x[k];
                                                            t.bal_infos.susdv2.push(C), b += C
                                                        }
                                                        s -= 2 * v
                                                    }
                                                    if ("pax" == a) {
                                                        var S = i.slice(s - 8, s - 1);
                                                        f["d"](S, 2).map((function(e, s) {
                                                            if (void 0 === e[1]) {
                                                                var n = +e[0],
                                                                    r = t.all_c_rates[a].c_rates[s] * n;
                                                                t.bal_infos[a].push(r), b += r
                                                            } else {
                                                                var o = +e[0] / 1e18 / p["g"][a].coin_precisions[s];
                                                                t.all_c_rates[a].c_rates[s] = o;
                                                                var i = +e[1],
                                                                    c = o * i;
                                                                t.bal_infos[a].push(c), b += c
                                                            }
                                                        })), s -= 9
                                                    }
                                                    if (["tbtc", "ren"].includes(a)) {
                                                        for (var A = p["g"][a].N_COINS, N = 98, O = i.slice(N), j = 0; j < A; j++) {
                                                            var I = t.all_c_rates[a].c_rates[j] * O[j];
                                                            t.bal_infos[a].push(I), b += I
                                                        }
                                                        s = 92
                                                    }
                                                    if ("sbtc" == a) {
                                                        for (var P = p["g"][a].N_COINS, B = 108, R = i.slice(B), D = 0; D < P; D++) {
                                                            var T = t.all_c_rates[a].c_rates[D] * R[D];
                                                            t.bal_infos[a].push(T), b += T
                                                        }
                                                        s = 103
                                                    }
                                                    if ("hbtc" == a) {
                                                        for (var F = p["g"][a].N_COINS, $ = 119, E = i.slice($), V = 0; V < F; V++) {
                                                            var M = t.all_c_rates[a].c_rates[V] * E[V];
                                                            t.bal_infos[a].push(M), b += M
                                                        }
                                                        s = 113
                                                    }
                                                    if ("3pool" == a) {
                                                        for (var Y = p["g"][a].N_COINS, z = 129, L = i.slice(z), q = 0; q < Y; q++) {
                                                            var G = t.all_c_rates[a].c_rates[q] * L[q];
                                                            t.bal_infos[a].push(G), b += G
                                                        }
                                                        s = 124
                                                    }
                                                    t.totals.push(b), t.virtual_prices.push(+i[s + 8] / 1e18), t.As.push(+i[s + 9]), t.future_As.push(+i[s + 10]), t.admin_actions_deadlines.push(+i[s + 11]), t.fees.push(+i[s + 12] / 1e8), t.admin_fees.push(+i[s + 13] / 1e8), t.totalTokenBalances.push(+i[s + 14]), t.totalTokenSupplies.push(+i[s + 15]), g = 0;
                                                    for (var J = 0; J < p["g"][a].N_COINS; J++) y = t.bal_infos[a][J] * +i[s + 14] / +i[s + 15], t.l_infos[a].push(y), g += y;
                                                    if (t.usdShares.push(i[s + 14] * i[s + 8] / 1e36), t.totalShares.push(g), ["susdv2", "sbtc", "y", "iearn"].includes(a)) {
                                                        var H = l;
                                                        if ("sbtc" == a && (H = u), ["y", "iearn"].includes(a) && (H = d), t.totalStakes[a] = 0, t.staked_infos[a] = [], H > 0)
                                                            for (var K = 0; K < p["g"][a].N_COINS; K++) y = t.bal_infos[a][K] * H / +i[s + 15], c["a"].set(t.staked_infos[a], K, y), t.totalStakes[a] += y;
                                                        t.usdStakes[a] = H * i[s + 8] / 1e36
                                                    }
                                                    h++
                                                }, m = 0, w = Object.entries(t.allContracts); m < w.length; m++) v();
                                        case 22:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        }
                    }
                },
                v = h,
                m = a("2877"),
                w = Object(m["a"])(v, s, n, !1, null, null, null);
            t["default"] = w.exports
        },
        "6eaa": function(e, t, a) {
            "use strict";
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "window white"
                    }, [a("fieldset", [a("legend", [e._v("Total pool deposits and daily volume")]), a("div", {
                        class: {
                            "loading line": !e.total
                        },
                        attrs: {
                            id: "total-balances"
                        }
                    }, [e._v(" Deposits: "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.total,
                            expression: "total"
                        }]
                    }, [e._v(e._s(e._f("formatNumber")(e.total)) + "$")])]), a("div", {
                        class: {
                            "loading line": e.volume < 0
                        }
                    }, [e._v(" Daily volume: "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volume >= 0,
                            expression: "volume >= 0"
                        }]
                    }, [e._v(e._s(e._f("formatNumber")(e.volume, 0)) + "$")])]), e._t("default")], 2)])
                },
                n = [],
                r = (a("96cf"), a("1da1")),
                o = (a("6314"), a("5245"), a("2fa3"), a("901e"), a("a4e2")),
                i = (a("51bf"), a("5e35"), a("b44d")),
                c = {
                    props: {
                        totalVolume: {
                            default: void 0
                        }
                    },
                    data: function() {
                        return {
                            total: ""
                        }
                    },
                    computed: {
                        volume: function() {
                            return void 0 !== this.totalVolume ? this.totalVolume : o["g"]()
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(r["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.totalBalances(), void 0 === e.totalVolume && e.dailyVolume();
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    methods: {
                        totalBalances: function() {
                            var e = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function t() {
                                var a;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, i["b"]();
                                        case 2:
                                            a = t.sent, e.total = a;
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        dailyVolume: function() {
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                var t;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = ["compound", "usdt", "y", "busd", "susd", "pax", "tbtc", "ren", "sbtc", "hbtc", "3pool"], e.next = 3, o["e"](t);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                },
                l = c,
                u = (a("e6cc"), a("2877")),
                d = Object(u["a"])(l, s, n, !1, null, "304cc845", null);
            t["a"] = d.exports
        },
        b44d: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return f
            })), a.d(t, "a", (function() {
                return v
            }));
            a("caad"), a("d81d"), a("b680"), a("4fad");
            var s = a("3835"),
                n = (a("96cf"), a("1da1")),
                r = a("2b0e"),
                o = a("6314"),
                i = a.n(o),
                c = a("5245"),
                l = a("2fa3"),
                u = a("901e"),
                d = a.n(u),
                _ = a("51bf"),
                p = a("5e35");

            function f() {
                return h.apply(this, arguments)
            }

            function h() {
                return h = Object(n["a"])(regeneratorRuntime.mark((function e() {
                    var t, a, n, r, o, u, f, h, m, w, b, g, y, x, k, C;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (p["b"].btcPrice) {
                                    e.next = 3;
                                    break
                                }
                                return e.next = 3, p["a"]();
                            case 3:
                                for (t = d()(0), a = {}, n = {}, [], r = _["f"].web3 || new i.a(c["j"]), o = new r.eth.Contract(c["o"], c["p"]), u = [], f = Object.assign({}, c["g"]), delete f.susd, delete f.tbtc, delete f.y, h = 0, m = Object.entries(f); h < m.length; h++) w = Object(s["a"])(m[h], 2), b = w[0], g = w[1], a[b] = new r.eth.Contract(c["c"], g.token_address), n[b] = new r.eth.Contract(g.swap_abi, g.swap_address), c["g"][b].is_meta ? u.push([n[b]._address, n[b].methods.balances(0).encodeABI()]) : u.push([a[b]._address, a[b].methods.totalSupply().encodeABI()]), u.push([n[b]._address, n[b].methods.get_virtual_price().encodeABI()]);
                                return new r.eth.Contract(c["c"], c["g"].susd.token_address), y = new r.eth.Contract(c["g"].susd.swap_abi, c["g"].susd.swap_address), x = new r.eth.Contract(c["y"], c["g"].susd.coins[0]), u.push([x._address, x.methods.getPricePerFullShare().encodeABI()], [y._address, y.methods.balances(0).encodeABI()]), e.next = 21, o.methods.aggregate(u).call();
                            case 21:
                                return k = e.sent, C = k[1].map((function(e) {
                                    return r.eth.abi.decodeParameter("uint256", e)
                                })), Object(l["d"])(C, 2).map((function(e, a, s) {
                                    var n = d()(e[0]).times(d()(e[1])).div(1e36);
                                    a != s.length - 1 && c["g"][Object.entries(f)[a][0]].is_meta && (n = d()(e[0]).div(1e18)), [6, 7, 8].includes(a) && (n = n.times(d()(p["b"].btcPrice))), t = t.plus(n)
                                })), t = t.toFixed(0), v.total = t, e.abrupt("return", t);
                            case 27:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), h.apply(this, arguments)
            }
            var v = r["a"].observable({
                total: null
            })
        },
        dd97: function(e, t, a) {
            "use strict";
            var s = a("edd1"),
                n = a.n(s);
            n.a
        },
        e6cc: function(e, t, a) {
            "use strict";
            var s = a("3c57"),
                n = a.n(s);
            n.a
        },
        edd1: function(e, t, a) {}
    }
]);
//# sourceMappingURL=chunk-a6db4392.96c561d2.js.map