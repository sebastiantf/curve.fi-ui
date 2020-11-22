(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d2073a2"], {
        a041: function(e, t, a) {
            "use strict";
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("fieldset", [e._m(0), a("highcharts", {
                        ref: "highcharts",
                        attrs: {
                            "constructor-type": "stockChart",
                            options: e.chartdata
                        }
                    }), a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volume && -1 != e.volume[0],
                            expression: "volume && volume[0] != -1"
                        }]
                    }, [a("span", [e._v("Daily USD trading volume:")]), a("span", {
                        class: {
                            "loading line": !e.volume
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volume && -1 != e.volume[0],
                            expression: "volume && volume[0] != -1"
                        }]
                    }, [e._v(" " + e._s(e._f("formatNumber")(e.volume && e.volume[0] || 0, 0)) + "$")])])]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["tbtc", "ren", "sbtc", "hbtc"].includes(e.pool),
                            expression: "['tbtc', 'ren', 'sbtc', 'hbtc'].includes(pool)"
                        }]
                    }, [a("span", [e._v("Daily ₿ trading volume:")]), a("span", [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volume && -1 != e.volume[1],
                            expression: "volume && volume[1] != -1"
                        }]
                    }, [e._v(" " + e._s(e._f("formatNumber")(e.volume && e.volume[1] || 0, 8)) + " ₿ ")])])]), a("p")], 1)
                },
                n = [function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("legend", [e._v("Daily APY % "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?]"), a("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v("Pool APY % + Lending APY % (on annual basis)")])])])
                }],
                r = (a("99af"), a("7db0"), a("caad"), a("d81d"), a("b0c0"), a("b680"), a("d3b7"), a("3ca3"), a("ddb0"), a("96cf"), a("1da1")),
                o = a("3835"),
                c = a("6314"),
                i = a.n(c),
                d = a("ea7f"),
                l = a.n(d),
                h = a("0319"),
                u = a.n(h),
                m = a("d68a"),
                p = a.n(m),
                v = a("4452"),
                b = a("37d8"),
                f = a.n(b),
                g = (a("51bf"), a("2fa3")),
                _ = a("5245"),
                w = a("a4e2");
            u()(l.a), p()(l.a), f()(l.a), l.a.setOptions({
                lang: {
                    loading: ""
                }
            });
            var x = new i.a(_["j"]),
                A = {
                    props: {
                        data: Array,
                        volume: {
                            type: Array
                        },
                        pool: String
                    },
                    components: {
                        highcharts: v["Chart"]
                    },
                    data: function() {
                        return {
                            chartdata: {
                                chart: {
                                    panning: !0,
                                    zoomType: "x",
                                    panKey: "ctrl",
                                    height: 600
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
                                yAxis: [{
                                    id: "apyAxis",
                                    opposite: !1,
                                    type: "logarithmic",
                                    min: .1,
                                    title: {
                                        text: "Daily APY [%]",
                                        style: {
                                            color: "black"
                                        },
                                        margin: 10
                                    },
                                    labels: {
                                        align: "right",
                                        x: -30,
                                        formatter: function() {
                                            return (Math.floor(100 * this.value) / 100).toFixed(2)
                                        },
                                        style: {
                                            color: "black"
                                        }
                                    },
                                    tickPixelInterval: 10,
                                    height: "60%"
                                }, {
                                    id: "volumeAxis",
                                    opposite: !1,
                                    title: {
                                        text: "Trading Volume",
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
                                xAxis: {
                                    labels: {
                                        style: {
                                            color: "black"
                                        }
                                    }
                                },
                                series: [],
                                tooltip: {
                                    split: !0,
                                    valueDecimals: 3,
                                    pointFormatter: function(e) {
                                        return function() {
                                            var t = Math.floor(100 * this.y) / 100 + "%";
                                            if ("Daily APY" == this.series.name) return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(t, "</b><br/>");
                                            if ("SNX APY" == this.series.name) return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(t, "</b><br/>");
                                            if ("SNX+REN APY" == this.series.name) return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(t, "</b><br/>");
                                            if ("YFI APY" == this.series.name) return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(t, "</b><br/>");
                                            if ("MTA APY" == this.series.name) return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(t, "</b><br/>");
                                            if ("Total APY" == this.series.name) return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(t, "</b><br/>");
                                            if ("Lending APY" == this.series.name) return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(t, "</b><br/>");
                                            if ("Trading Volume" === this.series.name) {
                                                var a = this.y.toFixed(2);
                                                return ["tbtc", "ren", "sbtc", "hbtc"].includes(e.pool) && (a = this.y.toFixed(8)), '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, " : <b>").concat(a, "</b><br/>")
                                            }
                                        }
                                    }(this)
                                },
                                legend: {
                                    enabled: !0
                                }
                            },
                            chart: null
                        }
                    },
                    computed: {
                        volumeData: function() {
                            return ["tbtc", "ren", "sbtc", "hbtc"].includes(this.pool) ? g["g"](this.volume, 8) : g["g"](this.volume, 0)
                        }
                    },
                    watch: {
                        "data.length": function(e) {
                            this.mounted()
                        }
                    },
                    mounted: function() {
                        this.chart = this.$refs.highcharts.chart, this.chart.showLoading()
                    },
                    methods: {
                        loaded: function() {
                            this.loading = !1
                        },
                        findClosestPrice: function(e, t) {
                            var a = t.find((function(t) {
                                var a = Object(o["a"])(t, 2),
                                    s = a[0];
                                a[1];
                                return s / 1e3 > e
                            }));
                            return void 0 === a ? t[t.length - 1][1] : a[1]
                        },
                        mounted: function() {
                            var e = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function t() {
                                var a, s, n, r, c, i, d, l, h, u, m, p, v, b, f, g, A, y, P, k, C, Y, S, I, R, T, N, j, D, O, B, F, W, L, E, M, V, U, X, $, G, J, z, K, q, H, Q, Z, ee, te, ae, se, ne, re, oe, ce, ie, de, le, he, ue, me, pe, ve, be, fe, ge, _e, we, xe, Ae, ye, Pe, ke, Ce, Ye, Se, Ie, Re, Te, Ne, je, De, Oe, Be, Fe, We, Le, Ee, Me, Ve, Ue, Xe, $e, Ge, Je, ze;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            while (e.chart.series.length) e.chart.series[0].remove();
                                            for (a = [], s = 1; s < e.data.length; s++) n = e.data[s], r = n.timestamp - e.data[s - 1].timestamp, c = Math.pow(n.virtual_price / 1e18 / (e.data[s - 1].virtual_price / 1e18), 31536e3 / r) - 1, a.push([1e3 * n.timestamp, 100 * c]);
                                            if (e.chart.addSeries({
                                                    name: "Daily APY",
                                                    lineWidth: 2,
                                                    data: a,
                                                    color: "#0b0a57"
                                                }, !1, !1), "susdv2" != e.pool) {
                                                t.next = 25;
                                                break
                                            }
                                            return i = e.data[0].timestamp, d = e.data[e.data.length - 1].timestamp, t.next = 9, fetch("https://api.coingecko.com/api/v3/coins/havven/market_chart/range?vs_currency=usd&from=".concat(i, "&to=").concat(d));
                                        case 9:
                                            return l = t.sent, t.next = 12, l.json();
                                        case 12:
                                            return l = t.sent.prices, h = new x.eth.Contract(_["g"].susdv2.sCurveRewards_abi, _["g"].susdv2.sCurveRewards_address), u = new x.eth.Contract(_["o"], _["p"]), m = [
                                                [h._address, h.methods.DURATION().encodeABI()],
                                                [h._address, h.methods.rewardRate().encodeABI()],
                                                [h._address, h.methods.periodFinish().encodeABI()]
                                            ], t.next = 18, u.methods.aggregate(m).call();
                                        case 18:
                                            for (p = t.sent, v = p[1].map((function(e) {
                                                    return x.eth.abi.decodeParameter("uint256", e)
                                                })), b = [], f = 1; f < e.data.length; f++) g = e.data[f].timestamp, A = e.data[f].supply, y = e.data[f].virtual_price, P = e.findClosestPrice(e.data[f].timestamp, l), k = 64e3, g > 1590705735 && g < 1594256015 && (k = 48e3), g > 1594256015 && (k = v[0] * v[1] / 1e18), +v[2] < g && (k = 1e-6), C = 356 * k / 7 * P / (.98 * A * y / 1e36) * 100, b.push([1e3 * g, C]);
                                            e.chart.addSeries({
                                                name: "SNX APY",
                                                lineWidth: 2,
                                                data: b,
                                                color: "#f45b5b"
                                            }), Y = a.map((function(e, t) {
                                                var a = Object(o["a"])(e, 2),
                                                    s = a[0],
                                                    n = a[1];
                                                return [s, n + b[t][1]]
                                            })), e.chart.addSeries({
                                                name: "Total APY",
                                                lineWidth: 2,
                                                data: Y,
                                                color: "#8085e9"
                                            });
                                        case 25:
                                            if (Date.now() / 1e3, "sbtc" != e.pool) {
                                                t.next = 48;
                                                break
                                            }
                                            return S = e.data[0].timestamp, I = e.data[e.data.length - 1].timestamp, t.next = 31, Promise.all([fetch("https://api.coingecko.com/api/v3/coins/havven/market_chart/range?vs_currency=usd&from=".concat(S, "&to=").concat(I)), fetch("https://api.coingecko.com/api/v3/coins/republic-protocol/market_chart/range?vs_currency=usd&from=".concat(S, "&to=").concat(I)), fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")]);
                                        case 31:
                                            return R = t.sent, t.next = 34, Promise.all(R.map((function(e) {
                                                return e.json()
                                            })));
                                        case 34:
                                            return T = t.sent, console.log(T, "PRICES"), N = T[0].prices, j = T[1].prices, D = T[2].bitcoin.usd, O = new x.eth.Contract(_["g"].sbtc.sCurveRewards_abi, _["g"].sbtc.sCurveRewards_address), t.next = 42, O.methods.periodFinish().call();
                                        case 42:
                                            for (B = t.sent, F = [], W = 1; W < e.data.length; W++) L = e.data[W].timestamp, E = e.data[W].supply, M = e.data[W].virtual_price, V = e.findClosestPrice(e.data[W].timestamp, N), U = e.findClosestPrice(e.data[W].timestamp, j), X = 1e4, $ = 25e3, +B < L && (X = 1e-6, $ = 1e-6), G = 356 * (X * V + $ * U) / 7 / (.98 * D * E * M / 1e36) * 100, F.push([1e3 * L, G]);
                                            e.chart.addSeries({
                                                name: "SNX+REN APY",
                                                lineWidth: 2,
                                                data: F,
                                                color: "#f45b5b"
                                            }), J = a.map((function(e, t) {
                                                var a = Object(o["a"])(e, 2),
                                                    s = a[0],
                                                    n = a[1];
                                                return [s, n + F[t][1]]
                                            })), e.chart.addSeries({
                                                name: "Total APY",
                                                lineWidth: 2,
                                                data: J,
                                                color: "#8085e9"
                                            });
                                        case 48:
                                            if (!["y", "iearn"].includes(e.pool)) {
                                                t.next = 70;
                                                break
                                            }
                                            return z = 1594972885, K = e.data[e.data.length - 1].timestamp, t.next = 53, fetch("https://api.coingecko.com/api/v3/coins/yearn-finance/market_chart/range?vs_currency=usd&from=".concat(z, "&to=").concat(K));
                                        case 53:
                                            return q = t.sent, console.log("https://api.coingecko.com/api/v3/coins/yearn-finance/market_chart/range?vs_currency=usd&from=".concat(z, "&to=").concat(K)), t.next = 57, q.json();
                                        case 57:
                                            return q = t.sent.prices, H = new x.eth.Contract(_["g"].iearn.sCurveRewards_abi, _["g"].iearn.sCurveRewards_address), Q = new x.eth.Contract(_["o"], _["p"]), Z = [
                                                [H._address, H.methods.DURATION().encodeABI()],
                                                [H._address, H.methods.rewardRate().encodeABI()],
                                                [H._address, H.methods.periodFinish().encodeABI()]
                                            ], t.next = 63, Q.methods.aggregate(Z).call();
                                        case 63:
                                            for (ee = t.sent, te = ee[1].map((function(e) {
                                                    return x.eth.abi.decodeParameter("uint256", e)
                                                })), ae = [], se = 1; se < e.data.length; se++) ne = e.data[se].timestamp, re = e.data[se].supply, oe = e.data[se].virtual_price, ce = e.findClosestPrice(e.data[se].timestamp, q), ie = te[0] * te[1] / 1e18, +te[2] < ne && (ie = 1e-6), ne < 1594972885 && (ie = 0), de = 356 * ie / 7 * ce / (.98 * re * oe / 1e36) * 100, ae.push([1e3 * ne, de]);
                                            e.chart.addSeries({
                                                name: "YFI APY",
                                                lineWidth: 2,
                                                data: ae,
                                                color: "#f45b5b"
                                            }), le = a.map((function(e, t) {
                                                var a = Object(o["a"])(e, 2),
                                                    s = a[0],
                                                    n = a[1];
                                                return [s, n + ae[t][1]]
                                            })), e.chart.addSeries({
                                                name: "Total APY",
                                                lineWidth: 2,
                                                data: le,
                                                color: "#8085e9"
                                            });
                                        case 70:
                                            if (["susd"].includes(e.pool) && e.chart.yAxis[0].update({
                                                    type: "linear"
                                                }), "musd" != e.pool) {
                                                t.next = 92;
                                                break
                                            }
                                            return he = e.data[0].timestamp, ue = e.data[e.data.length - 1].timestamp, t.next = 76, fetch("https://api.coingecko.com/api/v3/coins/meta/market_chart/range?vs_currency=usd&from=".concat(he, "&to=").concat(ue));
                                        case 76:
                                            return me = t.sent, t.next = 79, me.json();
                                        case 79:
                                            return me = t.sent.prices, pe = new x.eth.Contract(_["g"].musd.sCurveRewards_abi, _["g"].musd.sCurveRewards_address), ve = new x.eth.Contract(_["o"], _["p"]), be = [
                                                [pe._address, pe.methods.DURATION().encodeABI()],
                                                [pe._address, pe.methods.rewardRate().encodeABI()],
                                                [pe._address, pe.methods.periodFinish().encodeABI()]
                                            ], t.next = 85, ve.methods.aggregate(be).call();
                                        case 85:
                                            for (fe = t.sent, ge = fe[1].map((function(e) {
                                                    return x.eth.abi.decodeParameter("uint256", e)
                                                })), _e = [], we = 1; we < e.data.length; we++) xe = e.data[we].timestamp, Ae = e.data[we].supply, ye = e.data[we].virtual_price, Pe = e.findClosestPrice(e.data[we].timestamp, me), ke = ge[0] * ge[1] / 1e18, +ge[2] < xe && (ke = 1e-6), Ce = 356 * ke / 7 * Pe / (.98 * Ae * ye / 1e36) * 100, _e.push([1e3 * xe, Ce]);
                                            e.chart.addSeries({
                                                name: "MTA APY",
                                                lineWidth: 2,
                                                data: _e,
                                                color: "#ffb334"
                                            }), Ye = a.map((function(e, t) {
                                                var a = Object(o["a"])(e, 2),
                                                    s = a[0],
                                                    n = a[1];
                                                return [s, n + _e[t][1]]
                                            })), e.chart.addSeries({
                                                name: "Total APY",
                                                lineWidth: 2,
                                                data: Ye,
                                                color: "#8085e9"
                                            });
                                        case 92:
                                            if ("tbtc" != e.pool) {
                                                t.next = 113;
                                                break
                                            }
                                            return Se = e.data[0].timestamp, Ie = e.data[e.data.length - 1].timestamp, t.next = 97, fetch("https://api.coingecko.com/api/v3/coins/keep-network/market_chart/range?vs_currency=usd&from=".concat(Se, "&to=").concat(Ie));
                                        case 97:
                                            return Re = t.sent, t.next = 100, Re.json();
                                        case 100:
                                            return Re = t.sent.prices, Te = new x.eth.Contract(_["g"].musd.sCurveRewards_abi, _["g"].musd.sCurveRewards_address), Ne = new x.eth.Contract(_["o"], _["p"]), je = [
                                                [Te._address, Te.methods.DURATION().encodeABI()],
                                                [Te._address, Te.methods.rewardRate().encodeABI()],
                                                [Te._address, Te.methods.periodFinish().encodeABI()]
                                            ], t.next = 106, Ne.methods.aggregate(je).call();
                                        case 106:
                                            for (De = t.sent, Oe = De[1].map((function(e) {
                                                    return x.eth.abi.decodeParameter("uint256", e)
                                                })), Be = [], Fe = 1; Fe < e.data.length; Fe++) We = e.data[Fe].timestamp, Le = e.data[Fe].supply, Ee = e.data[Fe].virtual_price, Me = e.findClosestPrice(e.data[Fe].timestamp, Re), Ve = Oe[0] * Oe[1] / 1e18, +Oe[2] < We && (Ve = 1e-6), Ue = 356 * Ve / 7 * Me / (.98 * Le * Ee / 1e36) * 100, Be.push([1e3 * We, Ue]);
                                            e.chart.addSeries({
                                                name: "MTA APY",
                                                lineWidth: 2,
                                                data: Be,
                                                color: "#ffb334"
                                            }), Xe = a.map((function(e, t) {
                                                var a = Object(o["a"])(e, 2),
                                                    s = a[0],
                                                    n = a[1];
                                                return [s, n + Be[t][1]]
                                            })), e.chart.addSeries({
                                                name: "Total APY",
                                                lineWidth: 2,
                                                data: Xe,
                                                color: "#8085e9"
                                            });
                                        case 113:
                                            return t.next = 115, w["c"](e.pool, !1, 1440);
                                        case 115:
                                            if ($e = w["f"].allVolume["susdv2" == e.pool ? "susd" : e.pool], e.chart.addSeries({
                                                    type: "column",
                                                    name: "Trading Volume",
                                                    data: $e,
                                                    color: "#0b0a57",
                                                    yAxis: "volumeAxis"
                                                }, !1, !1), e.chart.redraw(!1), Je = "apyAxis", ["susdv2", "tbtc", "ren", "sbtc", "hbtc", "3pool", "gusd", "husd", "usdk", "usdn", "linkusd", "musd", "rsv", "tbtc", "dusd"].includes(e.pool)) {
                                                t.next = 125;
                                                break
                                            }
                                            return t.next = 122, w["d"](e.pool, !1, 1440);
                                        case 122:
                                            Ge = t.sent, t.next = 129;
                                            break;
                                        case 125:
                                            Ge = $e.map((function(e) {
                                                return [e[0], 0]
                                            })), Je = "lendingAxis", e.chart.addAxis({
                                                id: "lendingAxis",
                                                opposite: !1,
                                                type: "linear",
                                                title: {
                                                    text: "Lending rates",
                                                    style: {
                                                        color: "black"
                                                    }
                                                },
                                                labels: {
                                                    x: 40,
                                                    style: {
                                                        color: "black"
                                                    }
                                                },
                                                tickPixelInterval: 10,
                                                top: "65%",
                                                height: "5%"
                                            }), e.chart.yAxis[1].update({
                                                top: "70%",
                                                height: "30%"
                                            });
                                        case 129:
                                            e.chart.addSeries({
                                                name: "Lending APY",
                                                data: Ge,
                                                yAxis: Je,
                                                color: "#7bb5ec"
                                            }), ["susdv2", "tbtc", "ren", "sbtc", "y", "iearn", "musd"].includes(e.pool) || (ze = a.map((function(e, t) {
                                                var a = Object(o["a"])(e, 2),
                                                    s = a[0],
                                                    n = a[1];
                                                return [s, n + Ge[t][1]]
                                            })), e.chart.addSeries({
                                                name: "Total APY",
                                                lineWidth: 2,
                                                data: ze,
                                                color: "#8085e9"
                                            })), e.chart.redraw(), e.chart.hideLoading(), e.loading = !1;
                                        case 134:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }
                    }
                },
                y = A,
                P = a("2877"),
                k = Object(P["a"])(y, s, n, !1, null, null, null);
            t["a"] = k.exports
        }
    }
]);
//# sourceMappingURL=chunk-2d2073a2.14f27e30.js.map