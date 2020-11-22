(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-4fbb1ce0", "chunk-2d0d3a28"], {
        "269a": function(e, t, a) {
            "use strict";
            var n = a("999f"),
                r = a.n(n);
            r.a
        },
        "3c57": function(e, t, a) {},
        "5e35": function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return s
            })), a.d(t, "a", (function() {
                return o
            }));
            a("d3b7"), a("96cf");
            var n = a("1da1"),
                r = a("2fa3"),
                s = {
                    btcPrice: null
                };

            function o() {
                return i.apply(this, arguments)
            }

            function i() {
                return i = Object(n["a"])(regeneratorRuntime.mark((function e() {
                    var t, a;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r["q"](fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"), 300);
                            case 2:
                                return t = e.sent, e.next = 5, t.json();
                            case 5:
                                return a = e.sent, s.btcPrice = a.bitcoin.usd, e.abrupt("return", a.bitcoin.usd);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), i.apply(this, arguments)
            }
        },
        "6eaa": function(e, t, a) {
            "use strict";
            var n = function() {
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
                r = [],
                s = (a("96cf"), a("1da1")),
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
                        return Object(s["a"])(regeneratorRuntime.mark((function t() {
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
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
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
                            return Object(s["a"])(regeneratorRuntime.mark((function e() {
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
                u = c,
                l = (a("e6cc"), a("2877")),
                d = Object(l["a"])(u, n, r, !1, null, "304cc845", null);
            t["a"] = d.exports
        },
        "705e": function(e, t, a) {
            "use strict";
            a.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", [a("div", {
                        staticClass: "window white"
                    }, [a("fieldset", [e._m(0), a("highcharts", {
                        ref: "highcharts",
                        attrs: {
                            "constructor-type": "stockChart",
                            options: e.chartdata
                        }
                    })], 1)]), a("div", {
                        staticClass: "window white"
                    }, [a("fieldset", [a("legend", [e._v("Total trading volume")]), a("highcharts", {
                        ref: "highcharts2",
                        attrs: {
                            "constructor-type": "stockChart",
                            options: e.volumeChartdata
                        }
                    })], 1)]), a("div", {
                        staticClass: "window white"
                    }, [a("fieldset", [a("legend", [e._v("Trading fees")]), e._m(1), a("highcharts", {
                        ref: "feecharts",
                        staticClass: "tradingfees",
                        attrs: {
                            "constructor-type": "stockChart",
                            options: e.tradingFeesChartdata
                        }
                    })], 1)]), e._l(Object.keys(e.pools), (function(t, n) {
                        return a("div", {
                            staticClass: "window white"
                        }, [a("p", {
                            staticClass: "text-center"
                        }, [a("router-link", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "susd" != t,
                                expression: "currency != 'susd'"
                            }],
                            attrs: {
                                to: "susd" == t ? "susdv2" : t
                            }
                        }, [e._v(" curve.fi/" + e._s("iearn" == t ? "y" : "susd" == t ? "susdv2" : t) + " ")]), a("a", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "susd" == t,
                                expression: "currency == 'susd'"
                            }],
                            attrs: {
                                href: "https://yearn.finance/pool"
                            }
                        }, [e._v("susd")])], 1), a("daily-chart", {
                            attrs: {
                                data: e.poolData[n],
                                pool: "iearn" == t ? "y" : t,
                                volume: e.volumesData["iearn" == t ? "y" : "susdv2" == t ? "susd" : t]
                            }
                        })], 1)
                    }))], 2)
                },
                r = [function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("legend", [e._v("Daily APY % and trading volume "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?]"), a("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v("Daily Pool APY + Lending APY (annualized)")])])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "info-message gentle-message"
                    }, [e._v(" The chart shows only trading "), a("b", [e._v("volume")]), e._v(" fees and does not account for fees from deposits/withdrawals ")])
                }],
                s = (a("99af"), a("a623"), a("cb29"), a("4de4"), a("caad"), a("d81d"), a("13d5"), a("b0c0"), a("b680"), a("b64b"), a("d3b7"), a("07ac"), a("3ca3"), a("ddb0"), a("b85c")),
                o = a("3835"),
                i = a("ade3"),
                c = a("2909"),
                u = a("5530"),
                l = (a("96cf"), a("1da1")),
                d = a("a041"),
                h = (a("6eaa"), a("51bf"), a("a4e2")),
                p = a("ea7f"),
                m = a.n(p),
                f = a("0319"),
                b = a.n(f),
                v = a("d68a"),
                g = a.n(v),
                y = a("4452"),
                w = a("37d8"),
                x = a.n(w),
                _ = (a("5245"), a("2fa3"));
            b()(m.a), g()(m.a), x()(m.a), m.a.setOptions({
                lang: {
                    loading: ""
                }
            });
            var k = {
                    components: {
                        DailyChart: d["a"],
                        highcharts: y["Chart"]
                    },
                    data: function() {
                        return {
                            pools: {
                                compound: "compound",
                                usdt: "usdt",
                                iearn: "y",
                                busd: "busd",
                                susdv2: "susdv2",
                                pax: "pax",
                                tbtc: "tbtc",
                                ren: "ren",
                                sbtc: "sbtc",
                                hbtc: "hbtc",
                                "3pool": "3pool"
                            },
                            chartdata: {
                                title: {
                                    text: ""
                                },
                                chart: {
                                    panning: !0,
                                    zoomType: "x",
                                    panKey: "ctrl",
                                    height: 800
                                },
                                yAxis: [{
                                    opposite: !1,
                                    title: {
                                        text: "Daily APY %"
                                    },
                                    type: "logarithmic",
                                    height: "60%"
                                }, {
                                    id: "volumeAxis",
                                    opposite: !1,
                                    title: {
                                        text: "Trading volume",
                                        style: {
                                            color: "black"
                                        },
                                        margin: 10
                                    },
                                    labels: {
                                        style: {
                                            color: "black"
                                        },
                                        align: "right",
                                        x: -30
                                    },
                                    top: "65%",
                                    height: "35%",
                                    offset: 0
                                }],
                                tooltip: {
                                    valueDecimals: 3,
                                    pointFormatter: function() {
                                        var e = Math.floor(100 * this.y) / 100 + "%";
                                        return "Trading Volume" == this.series.name ? '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(this.y.toFixed(0), "</b><br/>") : '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(e, "</b><br/>")
                                    }
                                },
                                legend: {
                                    enabled: !0
                                },
                                series: []
                            },
                            volumeChartdata: {
                                title: {
                                    text: "Total Trading Volume"
                                },
                                chart: {
                                    panning: !0,
                                    zoomType: "x",
                                    panKey: "ctrl",
                                    height: 600
                                },
                                yAxis: [{
                                    id: "volumeAxis",
                                    opposite: !1,
                                    title: {
                                        text: "Trading volume",
                                        style: {
                                            color: "black"
                                        },
                                        margin: 10
                                    },
                                    labels: {
                                        style: {
                                            color: "black"
                                        },
                                        align: "right",
                                        x: -30
                                    },
                                    offset: 0
                                }],
                                tooltip: {
                                    valueDecimals: 3,
                                    pointFormatter: function() {
                                        Math.floor(100 * this.y);
                                        return "Trading Volume" == this.series.name ? '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(_["g"](this.y, 0), "$</b><br/>") : '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(this.y.toFixed(0), "</b><br/>")
                                    }
                                },
                                legend: {
                                    enabled: !0
                                },
                                series: []
                            },
                            tradingFeesChartdata: {
                                title: {
                                    text: "Trading Fees"
                                },
                                chart: {
                                    panning: !0,
                                    zoomType: "x",
                                    panKey: "ctrl",
                                    height: 600
                                },
                                yAxis: [{
                                    id: "volumeAxis",
                                    opposite: !1,
                                    title: {
                                        text: "Trading fees",
                                        style: {
                                            color: "black"
                                        },
                                        margin: 10
                                    },
                                    labels: {
                                        style: {
                                            color: "black"
                                        },
                                        align: "right",
                                        x: -30
                                    },
                                    offset: 0
                                }],
                                tooltip: {
                                    valueDecimals: 3,
                                    pointFormatter: function() {
                                        Math.floor(100 * this.y);
                                        return "Trading Fees" == this.series.name ? '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(_["g"](this.y, 0), "$</b><br/>") : '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(this.y.toFixed(0), "</b><br/>")
                                    }
                                },
                                legend: {
                                    enabled: !0
                                },
                                series: []
                            },
                            poolData: [],
                            start: 0,
                            end: 0,
                            chart: null,
                            volumeChart: null,
                            tradingFeesChart: null
                        }
                    },
                    computed: {
                        volumesData: function() {
                            return h["f"].volumes
                        }
                    },
                    mounted: function() {
                        var e = this;
                        return Object(l["a"])(regeneratorRuntime.mark((function t() {
                            var a, n, r, l, d, p, m, f, b, v, g, y, w, x, _, k, C;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = ["compound", "usdt", "y", "busd", "susd", "pax", "tbtc", "ren", "sbtc", "hbtc", "3pool"], n = h["f"].allVolume, e.$watch((function() {
                                            return Object.keys(n).filter((function(e) {
                                                return !["tbtc", "gusd", "husd", "usdk", "usdn", "linkusd", "musd", "rsv", "tbtc", "dusd"].includes(e)
                                            })).every((function(e) {
                                                return n[e].length > 0
                                            }))
                                        }), (function(t) {
                                            t && function() {
                                                var t = [],
                                                    n = h["f"].allVolume,
                                                    r = Object.keys(n).reduce((function(e, t) {
                                                        return n[e].length > n[t].length ? e : t
                                                    }));
                                                n = Object.keys(n).reduce((function(e, t) {
                                                    return Object(u["a"])({}, e, Object(i["a"])({}, t, new Array(Math.max.apply(Math, Object(c["a"])(Object.values(n).map((function(e) {
                                                        return e.length
                                                    })))) - n[t].length).fill({}).concat(n[t])))
                                                }), {}), n.susdv2 = n.susd;
                                                for (var s = function(e) {
                                                        t.push([n[r][e][0], a.map((function(t) {
                                                            return t = "susd" == t ? "susdv2" : t, n[t] && n[t][e] && n[t][e][1] || 0
                                                        })).reduce((function(e, t) {
                                                            return +e + +t
                                                        }), 0)])
                                                    }, l = 0; l < n[r].length; l++) s(l);
                                                e.chart.addSeries({
                                                    type: "column",
                                                    name: "Trading Volume",
                                                    data: t,
                                                    color: "#0b0a57",
                                                    yAxis: 1
                                                }), e.volumeChart.addSeries({
                                                    type: "line",
                                                    name: "Trading Volume",
                                                    data: t,
                                                    color: "#0b0a57"
                                                }), e.volumeChart.hideLoading();
                                                var d = t.map((function(e) {
                                                    var t = Object(o["a"])(e, 2),
                                                        a = t[0],
                                                        n = t[1];
                                                    return [a, .04 * n / 100]
                                                }));
                                                e.tradingFeesChart.addSeries({
                                                    type: "line",
                                                    name: "Trading Fees",
                                                    data: d
                                                }), e.tradingFeesChart.hideLoading(), e.chart.hideLoading()
                                            }()
                                        })), e.chart = e.$refs.highcharts.chart, e.volumeChart = e.$refs.highcharts2.chart, e.tradingFeesChart = e.$refs.feecharts.chart, e.volumeChart.showLoading(), e.chart.showLoading(), e.tradingFeesChart.showLoading(), r = new Date, r.setHours(0, 0, 0, 0), e.start = r.getTime() / 1e3, l = new Date, l.setHours(23, 59, 59, 999), e.end = l.getTime() / 1e3, d = Object.values(e.pools).map((function(e) {
                                            return "susdv2" == e ? "susd" : "ren" == e ? "ren2" : "sbtc" == e ? "rens" : e
                                        })).map((function(e) {
                                            return fetch("".concat(window.domain, "/raw-stats/").concat(e, "-1440m.json"))
                                        })), t.next = 18, Promise.all(d);
                                    case 18:
                                        p = t.sent, m = Object(s["a"])(p.entries()), t.prev = 20, m.s();
                                    case 22:
                                        if ((f = m.n()).done) {
                                            t.next = 35;
                                            break
                                        }
                                        return b = Object(o["a"])(f.value, 2), v = b[0], g = b[1], t.next = 26, g.json();
                                    case 26:
                                        if (y = t.sent, e.poolData.push(y), !["usdt", "tbtc"].includes(Object.keys(e.pools)[v])) {
                                            t.next = 30;
                                            break
                                        }
                                        return t.abrupt("continue", 33);
                                    case 30:
                                        for (w = [], x = 1; x < y.length; x++) _ = y[x], k = _.timestamp - y[x - 1].timestamp, C = Math.pow(_.virtual_price / 1e18 / (y[x - 1].virtual_price / 1e18), 31536e3 / k) - 1, w.push([1e3 * _.timestamp, 100 * C]);
                                        e.chart.addSeries({
                                            name: 2 == v ? "y" : Object.keys(e.pools)[v],
                                            data: w
                                        });
                                    case 33:
                                        t.next = 22;
                                        break;
                                    case 35:
                                        t.next = 40;
                                        break;
                                    case 37:
                                        t.prev = 37, t.t0 = t["catch"](20), m.e(t.t0);
                                    case 40:
                                        return t.prev = 40, m.f(), t.finish(40);
                                    case 43:
                                        e.chart.hideLoading(), h["e"](Object.values(e.pools));
                                    case 45:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [20, 37, 40, 43]
                            ])
                        })))()
                    }
                },
                C = k,
                j = (a("269a"), a("2877")),
                O = Object(j["a"])(C, n, r, !1, null, "b081c662", null);
            t["default"] = O.exports
        },
        "999f": function(e, t, a) {},
        a623: function(e, t, a) {
            "use strict";
            var n = a("23e7"),
                r = a("b727").every,
                s = a("a640"),
                o = a("ae40"),
                i = s("every"),
                c = o("every");
            n({
                target: "Array",
                proto: !0,
                forced: !i || !c
            }, {
                every: function(e) {
                    return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        b44d: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return m
            })), a.d(t, "a", (function() {
                return b
            }));
            a("caad"), a("d81d"), a("b680"), a("4fad");
            var n = a("3835"),
                r = (a("96cf"), a("1da1")),
                s = a("2b0e"),
                o = a("6314"),
                i = a.n(o),
                c = a("5245"),
                u = a("2fa3"),
                l = a("901e"),
                d = a.n(l),
                h = a("51bf"),
                p = a("5e35");

            function m() {
                return f.apply(this, arguments)
            }

            function f() {
                return f = Object(r["a"])(regeneratorRuntime.mark((function e() {
                    var t, a, r, s, o, l, m, f, v, g, y, w, x, _, k, C;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (p["b"].btcPrice) {
                                    e.next = 3;
                                    break
                                }
                                return e.next = 3, p["a"]();
                            case 3:
                                for (t = d()(0), a = {}, r = {}, [], s = h["f"].web3 || new i.a(c["j"]), o = new s.eth.Contract(c["o"], c["p"]), l = [], m = Object.assign({}, c["g"]), delete m.susd, delete m.tbtc, delete m.y, f = 0, v = Object.entries(m); f < v.length; f++) g = Object(n["a"])(v[f], 2), y = g[0], w = g[1], a[y] = new s.eth.Contract(c["c"], w.token_address), r[y] = new s.eth.Contract(w.swap_abi, w.swap_address), c["g"][y].is_meta ? l.push([r[y]._address, r[y].methods.balances(0).encodeABI()]) : l.push([a[y]._address, a[y].methods.totalSupply().encodeABI()]), l.push([r[y]._address, r[y].methods.get_virtual_price().encodeABI()]);
                                return new s.eth.Contract(c["c"], c["g"].susd.token_address), x = new s.eth.Contract(c["g"].susd.swap_abi, c["g"].susd.swap_address), _ = new s.eth.Contract(c["y"], c["g"].susd.coins[0]), l.push([_._address, _.methods.getPricePerFullShare().encodeABI()], [x._address, x.methods.balances(0).encodeABI()]), e.next = 21, o.methods.aggregate(l).call();
                            case 21:
                                return k = e.sent, C = k[1].map((function(e) {
                                    return s.eth.abi.decodeParameter("uint256", e)
                                })), Object(u["d"])(C, 2).map((function(e, a, n) {
                                    var r = d()(e[0]).times(d()(e[1])).div(1e36);
                                    a != n.length - 1 && c["g"][Object.entries(m)[a][0]].is_meta && (r = d()(e[0]).div(1e18)), [6, 7, 8].includes(a) && (r = r.times(d()(p["b"].btcPrice))), t = t.plus(r)
                                })), t = t.toFixed(0), b.total = t, e.abrupt("return", t);
                            case 27:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), f.apply(this, arguments)
            }
            var b = s["a"].observable({
                total: null
            })
        },
        e6cc: function(e, t, a) {
            "use strict";
            var n = a("3c57"),
                r = a.n(n);
            r.a
        }
    }
]);
//# sourceMappingURL=chunk-4fbb1ce0.174c01d7.js.map