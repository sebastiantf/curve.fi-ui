(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-1f19c0d6", "chunk-2d0d3a28"], {
        "0481": function(e, t, r) {
            "use strict";
            var a = r("23e7"),
                n = r("a2bf"),
                o = r("7b0b"),
                i = r("50c4"),
                c = r("a691"),
                s = r("65f0");
            a({
                target: "Array",
                proto: !0
            }, {
                flat: function() {
                    var e = arguments.length ? arguments[0] : void 0,
                        t = o(this),
                        r = i(t.length),
                        a = s(t, 0);
                    return a.length = n(a, t, t, r, 0, void 0 === e ? 1 : c(e)), a
                }
            })
        },
        "267d": function(e, t, r) {
            "use strict";
            var a = r("5c7e"),
                n = r.n(a);
            n.a
        },
        4069: function(e, t, r) {
            var a = r("44d2");
            a("flat")
        },
        4287: function(e, t, r) {},
        "5c7e": function(e, t, r) {},
        "5db7": function(e, t, r) {
            "use strict";
            var a = r("23e7"),
                n = r("a2bf"),
                o = r("7b0b"),
                i = r("50c4"),
                c = r("1c0b"),
                s = r("65f0");
            a({
                target: "Array",
                proto: !0
            }, {
                flatMap: function(e) {
                    var t, r = o(this),
                        a = i(r.length);
                    return c(e), t = s(r, 0), t.length = n(t, r, r, a, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
                }
            })
        },
        "5e35": function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return o
            })), r.d(t, "a", (function() {
                return i
            }));
            r("d3b7"), r("96cf");
            var a = r("1da1"),
                n = r("2fa3"),
                o = {
                    btcPrice: null
                };

            function i() {
                return c.apply(this, arguments)
            }

            function c() {
                return c = Object(a["a"])(regeneratorRuntime.mark((function e() {
                    var t, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n["q"](fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"), 300);
                            case 2:
                                return t = e.sent, e.next = 5, t.json();
                            case 5:
                                return r = e.sent, o.btcPrice = r.bitcoin.usd, e.abrupt("return", r.bitcoin.usd);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), c.apply(this, arguments)
            }
        },
        "6b93": function(e, t, r) {
            var a = r("23e7"),
                n = Math.log,
                o = Math.LOG10E;
            a({
                target: "Math",
                stat: !0
            }, {
                log10: function(e) {
                    return n(e) * o
                }
            })
        },
        "73d9": function(e, t, r) {
            var a = r("44d2");
            a("flatMap")
        },
        "7fec": function(e, t, r) {
            "use strict";
            r("d81d"), r("b680"), r("b85c"), r("5fd7")
        },
        "880c": function(e, t, r) {
            "use strict";
            r.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "tradeview window white"
                    }, [e.exchange ? r("fieldset", {
                        attrs: {
                            id: "onesplit"
                        }
                    }, [r("legend", {
                        staticClass: "text-center"
                    }, [e._v("Swap using all Curve pools")]), r("one-split")], 1) : e._e(), r("select-component", {
                        attrs: {
                            id: "select_pool"
                        }
                    }), r("highcharts", {
                        ref: "highcharts",
                        attrs: {
                            "constructor-type": "stockChart",
                            options: e.chartdata
                        }
                    }), r("depth", {
                        attrs: {
                            id: "depth_chart"
                        }
                    }), e.exchange ? e._e() : r("fieldset", {
                        attrs: {
                            id: "onesplit"
                        }
                    }, [r("legend", {
                        staticClass: "text-center"
                    }, [e._v("Swap using all Curve pools")]), r("one-split")], 1)], 1)
                },
                n = [],
                o = (r("99af"), r("cb29"), r("4de4"), r("caad"), r("c975"), r("a15b"), r("d81d"), r("13d5"), r("fb6a"), r("b0c0"), r("b680"), r("4fad"), r("c1f9"), r("b64b"), r("d3b7"), r("ac1f"), r("2532"), r("3ca3"), r("1276"), r("ddb0"), r("2909")),
                i = r("5530"),
                c = r("3835"),
                s = r("b85c"),
                l = (r("96cf"), r("1da1")),
                u = r("ea7f"),
                p = r.n(u),
                h = r("0319"),
                d = r.n(h),
                f = r("d68a"),
                m = r.n(f),
                v = r("4452"),
                b = r("37d8"),
                g = r.n(b),
                x = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "bigdiv"
                    }, [r("div", {
                        attrs: {
                            id: "zoomSelect"
                        }
                    }, [r("div", [r("label", {
                        attrs: {
                            for: "zoom"
                        }
                    }, [e._v("Zoom " + e._s(e.zoom) + "%")]), r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.zoom,
                            expression: "zoom"
                        }],
                        attrs: {
                            type: "range",
                            min: "0",
                            max: "300",
                            id: "zoom"
                        },
                        domProps: {
                            value: e.zoom
                        },
                        on: {
                            __r: function(t) {
                                e.zoom = t.target.value
                            }
                        }
                    })]), r("button", {
                        on: {
                            click: e.resetChart
                        }
                    }, [e._v("Reset time interval")]), r("span", {
                        attrs: {
                            id: "linearcontainer"
                        }
                    }, [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.linearscale,
                            expression: "linearscale"
                        }],
                        attrs: {
                            type: "checkbox",
                            id: "linearscale"
                        },
                        domProps: {
                            checked: Array.isArray(e.linearscale) ? e._i(e.linearscale, null) > -1 : e.linearscale
                        },
                        on: {
                            change: function(t) {
                                var r = e.linearscale,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = null,
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.linearscale = r.concat([o])) : i > -1 && (e.linearscale = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.linearscale = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "linearscale"
                        }
                    }, [e._v("Linear scale")])])]), e._v(" "), r("div", {
                        ref: "chartcontainer",
                        on: {
                            mousemove: e.move
                        }
                    }, [r("highcharts", {
                        ref: "highcharts",
                        staticClass: "depthchart",
                        attrs: {
                            options: e.depthchart
                        }
                    })], 1)])
                },
                y = [],
                k = (r("0481"), r("4069"), r("6b93"), r("25f0"), r("506e")),
                w = r("d899"),
                _ = (r("7fec"), r("51bf")),
                O = r("5245"),
                C = r("5fd7"),
                j = r("2fa3"),
                A = r("5e35"),
                P = r("3d15"),
                I = r("9510"),
                D = r.n(I);
            d()(p.a), m()(p.a), p.a.setOptions({
                lang: {
                    loading: ""
                }
            });
            var S = function(e) {
                    return new C["a"](e)
                },
                L = new D.a,
                N = P["a"](L),
                R = {
                    components: {
                        highcharts: v["Chart"]
                    },
                    data: function() {
                        return {
                            loading: !0,
                            zoom: 100,
                            volZoom: 100,
                            btcPrice: null,
                            chart: null,
                            depthchart: {
                                chart: {
                                    type: "areaspline",
                                    zoomType: "x",
                                    marginTop: 20,
                                    marginLeft: 20,
                                    marginRight: 20
                                },
                                exporting: {
                                    buttons: {
                                        contextButton: {
                                            menuItems: ["printChart", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG", "separator", "downloadCSV", "downloadXLS", "openInCloud"]
                                        }
                                    }
                                },
                                title: {
                                    text: ""
                                },
                                xAxis: {
                                    crosshair: {
                                        color: "gray",
                                        width: 1.5
                                    },
                                    minPadding: 0,
                                    maxPadding: 0,
                                    plotLines: [{
                                        id: 1,
                                        color: "#888",
                                        value: 1,
                                        width: 1,
                                        label: {
                                            text: "Actual price",
                                            rotation: 90
                                        }
                                    }],
                                    title: {
                                        text: "Price"
                                    },
                                    events: {
                                        setExtremes: function(e) {
                                            return function(t) {
                                                "undefined" == typeof t.min && "undefined" == typeof t.max && (e.zoom = 99.99)
                                            }
                                        }(this)
                                    }
                                },
                                yAxis: [{
                                    type: "logarithmic",
                                    crosshair: {
                                        color: "gray",
                                        width: 1.5
                                    },
                                    min: 1,
                                    lineWidth: 1,
                                    gridLineWidth: 1,
                                    title: null,
                                    tickWidth: 1,
                                    tickLength: 5,
                                    tickPosition: "inside",
                                    labels: {
                                        align: "left",
                                        x: 8
                                    }
                                }, {
                                    type: "logarithmic",
                                    crosshair: {
                                        color: "gray",
                                        width: 1.5
                                    },
                                    min: 1,
                                    opposite: !0,
                                    linkedTo: 0,
                                    lineWidth: 1,
                                    gridLineWidth: 0,
                                    title: null,
                                    tickWidth: 1,
                                    tickLength: 5,
                                    tickPosition: "inside",
                                    labels: {
                                        align: "right",
                                        x: -8
                                    }
                                }],
                                legend: {
                                    enabled: !1
                                },
                                plotOptions: {
                                    area: {
                                        fillOpacity: .2,
                                        step: "center"
                                    }
                                },
                                tooltip: {
                                    headerFormat: '<span style="font-size=10px;">Price: {point.key}</span><br/>',
                                    valueDecimals: 2
                                },
                                series: []
                            },
                            pair: {
                                idx: "0-1",
                                val: "DAI-USDC"
                            },
                            pool: "compound",
                            pools: [],
                            interval: 5,
                            bbrect: null,
                            data: [],
                            currentValue: 1,
                            imax: 100,
                            inverse: !1,
                            unwatch: null,
                            lastTimestamp: null,
                            linearscale: !1
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(l["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        k["a"].$on("changeTime", e.changeTime), k["a"].$on("updateDepth", e.updateDepth), e.unwatch = e.$watch((function() {
                                            return _["f"].initializedContracts
                                        }), function() {
                                            var t = Object(l["a"])(regeneratorRuntime.mark((function t(r) {
                                                return regeneratorRuntime.wrap((function(t) {
                                                    while (1) switch (t.prev = t.next) {
                                                        case 0:
                                                            e.updateDepth(), e.unwatch();
                                                        case 2:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }());
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    watch: {
                        selectChange: function(e, t) {
                            var r = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function a() {
                                var n, o;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            if (n = e[1].concat(), o = t[1].concat(), n.sort().toString() != o.sort.toString()) {
                                                a.next = 6;
                                                break
                                            }
                                            r.mounted(), a.next = 13;
                                            break;
                                        case 6:
                                            return a.next = 8, Promise.all(e[1].map((function(e) {
                                                return Object(_["j"])(_["f"].contracts["y" == e ? "iearn" : e])
                                            })));
                                        case 8:
                                            return a.sent, r.chart.showLoading(), a.next = 12, Object(w["c"])();
                                        case 12:
                                            r.mounted();
                                        case 13:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        },
                        zoom: function() {
                            this.setZoom()
                        },
                        linearscale: function(e) {
                            this.chart.yAxis[1].update({
                                linkedTo: void 0,
                                type: e ? "linear" : "logarithmic"
                            }), this.chart.yAxis[0].update({
                                type: e ? "linear" : "logarithmic"
                            }), this.setZoom()
                        }
                    },
                    mounted: function() {
                        var e = this;
                        return Object(l["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.chart = e.$refs.highcharts.chart, e.chart.showLoading(), t.next = 4, A["a"]();
                                    case 4:
                                        e.btcPrice = t.sent, _["f"].multicall && e.updateDepth();
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    beforeDestroy: function() {
                        k["a"].$off("changeTime", this.changeTime), k["a"].$off("updateDepth", this.updateDepth)
                    },
                    computed: {
                        selectChange: function() {
                            return [w["a"].pairIdx, w["a"].pools, w["a"].interval]
                        }
                    },
                    methods: {
                        updateDepth: function() {
                            var e = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Promise.all(w["a"].pools.map((function(e) {
                                                return Object(_["j"])(_["f"].contracts["y" == e ? "iearn" : e])
                                            })));
                                        case 2:
                                            return t.sent, t.next = 5, Object(w["c"])();
                                        case 5:
                                            e.mounted();
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        setZoom: function() {
                            var e = this.chart.series[1].xData,
                                t = this.chart.series[0].xData,
                                r = Math.min(e[0], e[e.length - 1]),
                                a = Math.max(e[0], e[e.length - 1]),
                                n = Math.max(t[0], t[t.length - 1]),
                                o = Math.min(t[0], t[t.length - 1]),
                                i = (a + o) / 2,
                                c = Math.max(r, i - (n - i)),
                                s = Math.min(n, i + (i - r)),
                                l = +this.zoom,
                                u = this.linearscale ? 30 : 10;
                            c = i - (i - c) * Math.pow(u, 2 * (l / 300 - 1)), s = i + (s - i) * Math.pow(u, 2 * (l / 300 - 1)), this.chart.xAxis[0].setExtremes(c, s, !0, !1)
                        },
                        setExtremes: function() {
                            this.chart.xAxis[0].setExtremes(this.chart.series[1].xData[0] - .001, this.chart.series[0].xData[0] + .001, !0, !0)
                        },
                        resetChart: function() {
                            var e = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            e.chart.setTitle({
                                                text: ""
                                            }), e.mounted();
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        changeTime: function(e) {
                            w["a"].poolInfo = e;
                            var t = e.timestamp || e[0].timestamp;
                            this.chart.setTitle({
                                text: j["f"](t)
                            }), this.chart.update({
                                chart: {
                                    marginTop: 40
                                }
                            }), this.lastTimestamp = t, this.mounted(t)
                        },
                        mounted: function(e) {
                            var t = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function r() {
                                var a, n, l, u, p, h, d, f, m, v, b, g, x, y, k, C, A, P, I, D, L, R, M, T, $, G, E, V, z, B, F, U, Y, W;
                                return regeneratorRuntime.wrap((function(r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            t.chart.showLoading(), t.pools = w["a"].pools, t.pairIdx = w["a"].pairIdx, t.pairVal = w["a"].pairVal, t.interval = w["a"].interval, t.loading = !0, a = w["a"].pools.map((function(e) {
                                                return "y" == e ? "iearn" : e
                                            })), n = a, l = a.map((function(e) {
                                                return n.indexOf(e)
                                            })), u = w["b"].poolConfigs(), p = t.pairIdx.split("-")[0], h = t.pairIdx.split("-")[1], p > h && (t.inverse = !0), d = [], f = [], m = 0, v = Object(s["a"])(w["a"].pools.entries()), r.prev = 17, v.s();
                                        case 19:
                                            if ((b = v.n()).done) {
                                                r.next = 32;
                                                break
                                            }
                                            if (g = Object(c["a"])(b.value, 2), x = g[0], y = g[1], !(u[x].N_COINS - 1 < h || u[x].N_COINS - 1 < p)) {
                                                r.next = 23;
                                                break
                                            }
                                            return r.abrupt("continue", 30);
                                        case 23:
                                            "y" == y && (y = "iearn"), k = _["f"].contracts[y], y == _["f"].currentContract && (k = _["f"]), C = k.bal_info[p], A = k.bal_info[h], ["tbtc", "ren", "sbtc", "hbtc"].includes(y) && (C *= t.btcPrice, A *= t.btcPrice), m += C + A;
                                        case 30:
                                            r.next = 19;
                                            break;
                                        case 32:
                                            r.next = 37;
                                            break;
                                        case 34:
                                            r.prev = 34, r.t0 = r["catch"](17), v.e(r.t0);
                                        case 37:
                                            return r.prev = 37, v.f(), r.finish(37);
                                        case 40:
                                            P = Math.floor(100 * (1 + Math.log10(10) / Math.log10(m))), t.imax = P, I = [], D = [], L = [], R = 0;
                                        case 46:
                                            if (!(R <= P)) {
                                                r.next = 81;
                                                break
                                            }
                                            if (!(e && t.lastTimestamp > e)) {
                                                r.next = 49;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 49:
                                            M = Math.pow(m, R / 100), L.push(M), T = 0;
                                        case 52:
                                            if (!(T < a.length)) {
                                                r.next = 78;
                                                break
                                            }
                                            if (!(u[T].N_COINS - 1 < h || u[T].N_COINS - 1 < p)) {
                                                r.next = 55;
                                                break
                                            }
                                            return r.abrupt("continue", 75);
                                        case 55:
                                            if (w["a"].poolInfo[l[T]]) {
                                                r.next = 57;
                                                break
                                            }
                                            return r.abrupt("continue", 75);
                                        case 57:
                                            return R, $ = M * O["g"][a[T]].coin_precisions[p], G = M * O["g"][a[T]].coin_precisions[h], ["tbtc", "ren", "sbtc", "hbtc"].includes(a[T]) && ($ /= t.btcPrice, G /= t.btcPrice), r.next = 63, N.calcPrice(Object(i["a"])({}, w["a"].poolInfo[l[T]], {}, u[T]), p, h, S($).toFixed(0), !0);
                                        case 63:
                                            return E = r.sent, E = +S(E).div(O["g"][a[T]].coin_precisions[h]), r.next = 67, N.calcPrice(Object(i["a"])({}, w["a"].poolInfo[l[T]], {}, u[T]), h, p, S(G).toFixed(0), !0);
                                        case 67:
                                            V = r.sent, V = +S(V).div(O["g"][a[T]].coin_precisions[p]), z = E * O["g"][a[T]].coin_precisions[p] / $, B = G / O["g"][a[T]].coin_precisions[h] / V, I[T] || (I[T] = []), D[T] || (D[T] = []), I[T].push(+z), D[T].push(+B);
                                        case 75:
                                            T++, r.next = 52;
                                            break;
                                        case 78:
                                            R++, r.next = 46;
                                            break;
                                        case 81:
                                            if (I = I.filter((function(e) {
                                                    return e.length
                                                })), D = D.filter((function(e) {
                                                    return e.length
                                                })), 1 == I.length) f = I[0].map((function(e, t) {
                                                return [e, L[t]]
                                            })), d = D[0].map((function(e, t) {
                                                return [e, L[t]]
                                            }));
                                            else {
                                                for (F = I.map((function(e) {
                                                        return j["k"](e, L)
                                                    })), U = D.map((function(e) {
                                                        return j["k"](e, L)
                                                    })), Y = function(e) {
                                                        for (var t = function(t) {
                                                                f.push([+I[e][t], F.map((function(r) {
                                                                    return r(I[e][t])
                                                                })).reduce((function(e, t) {
                                                                    return e + t
                                                                }), 0)]), d.push([+D[e][t], U.map((function(r) {
                                                                    return r(D[e][t])
                                                                })).reduce((function(e, t) {
                                                                    return e + t
                                                                }), 0)])
                                                            }, r = 0; r < I[0].length; r++) t(r)
                                                    }, W = 0; W < I.length; W++) Y(W);
                                                f.sort((function(e, t) {
                                                    return t[0] == e[0] ? t[1] - e[1] : t[0] - e[0]
                                                })), d.sort((function(e, t) {
                                                    return t[0] == e[0] ? e[1] - t[1] : e[0] - t[0]
                                                }))
                                            }
                                            f = f.filter((function(e) {
                                                return e[0] > Math.max(Math.max.apply(Math, Object(o["a"])(I.map((function(e) {
                                                    return Math.min.apply(Math, Object(o["a"])(e))
                                                })))), .1)
                                            })), d = d.filter((function(e) {
                                                return e[0] < Math.min(Math.min.apply(Math, Object(o["a"])(D.map((function(e) {
                                                    return Math.max.apply(Math, Object(o["a"])(e))
                                                })))), 10)
                                            })), f = f.reverse(), t.chart.hideLoading();
                                            while (t.chart.series.length) t.chart.series[0].remove();
                                            if (t.chart.xAxis[0].removePlotLine(1), !(e && t.lastTimestamp > e)) {
                                                r.next = 92;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 92:
                                            t.$refs.highcharts.chart.addSeries({
                                                name: "Asks",
                                                data: d,
                                                color: t.inverse ? "#007A00" : "#B70000"
                                            }), t.$refs.highcharts.chart.addSeries({
                                                name: "Bids",
                                                data: f,
                                                color: t.inverse ? "#B70000" : "#007A00"
                                            }), t.currentValue = (Math.max.apply(Math, Object(o["a"])(I.flat())) + Math.min.apply(Math, Object(o["a"])(D.flat()))) / 2, t.chart.xAxis[0].addPlotLine({
                                                id: 1,
                                                value: t.currentValue,
                                                label: {
                                                    text: "Actual price " + t.currentValue.toFixed(4)
                                                }
                                            }), t.setZoom(), t.$refs.highcharts.chart.redraw(), t.bbrect = t.$refs.highcharts.$el.getBoundingClientRect(), t.bbrect._top = t.bbrect.top + window.scrollY, t.chart.hideLoading(), t.loading = !1;
                                        case 102:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [17, 34, 37, 40]
                                ])
                            })))()
                        },
                        move: function(e) {
                            if (!this.loading) {
                                var t = e.pageX,
                                    r = e.pageY;
                                t -= this.bbrect.left, r -= this.bbrect._top, this.chart.crossLabel ? (this.chart.crossLabel.attr({
                                    x: t - 15,
                                    text: this.chart.xAxis[0].toValue(t).toFixed(4)
                                }), this.chart.hoverPoint && this.chart.crossYLabelLeft.attr({
                                    y: this.chart.hoverPoint.plotY + this.chart.plotTop + 25,
                                    text: this.chart.yAxis[0].toValue(this.chart.hoverPoint.plotY + this.chart.plotTop).toFixed(4)
                                }), this.chart.hoverPoint && this.chart.crossYLabelRight.attr({
                                    y: this.chart.hoverPoint.plotY + this.chart.plotTop + 25,
                                    text: this.chart.yAxis[0].toValue(this.chart.hoverPoint.plotY + this.chart.plotTop).toFixed(4)
                                }), document.querySelector("#depth_chart .highcharts-series.highcharts-series-1").classList.contains("highcharts-series-hover") ? this.chart.crossYLabelRight.attr("y", -9999) : this.chart.crossYLabelLeft.attr("y", -9999)) : (this.chart.crossLabel = this.chart.renderer.text(this.chart.xAxis[0].toValue(t).toFixed(4), t - 15, this.chart.plotTop - 5).add(), this.chart.crossYLabelLeft = this.chart.renderer.text(this.chart.yAxis[0].toValue(r).toFixed(4), this.chart.plotLeft - 5, r - 5).attr({
                                    rotation: -90
                                }).add(), this.chart.crossYLabelRight = this.chart.renderer.text(this.chart.yAxis[0].toValue(r).toFixed(4), this.chart.plotLeft + this.chart.plotWidth + 15, r).attr({
                                    rotation: -90
                                }).add())
                            }
                        }
                    }
                },
                M = R,
                T = (r("267d"), r("2877")),
                $ = Object(T["a"])(M, x, y, !1, null, "7e149c87", null),
                G = $.exports,
                E = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", [r("div", {
                        attrs: {
                            id: "poolselect"
                        }
                    }, [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pools,
                            expression: "pools"
                        }],
                        attrs: {
                            id: "compoundpool",
                            type: "checkbox",
                            value: "compound"
                        },
                        domProps: {
                            checked: Array.isArray(e.pools) ? e._i(e.pools, "compound") > -1 : e.pools
                        },
                        on: {
                            change: function(t) {
                                var r = e.pools,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = "compound",
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.pools = r.concat([o])) : i > -1 && (e.pools = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.pools = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "compoundpool"
                        }
                    }, [e._v("Compound")]), r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pools,
                            expression: "pools"
                        }],
                        attrs: {
                            id: "usdtpool",
                            type: "checkbox",
                            value: "usdt"
                        },
                        domProps: {
                            checked: Array.isArray(e.pools) ? e._i(e.pools, "usdt") > -1 : e.pools
                        },
                        on: {
                            change: function(t) {
                                var r = e.pools,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = "usdt",
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.pools = r.concat([o])) : i > -1 && (e.pools = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.pools = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "usdtpool"
                        }
                    }, [e._v("usdt")]), r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pools,
                            expression: "pools"
                        }],
                        attrs: {
                            id: "ypool",
                            type: "checkbox",
                            value: "y"
                        },
                        domProps: {
                            checked: Array.isArray(e.pools) ? e._i(e.pools, "y") > -1 : e.pools
                        },
                        on: {
                            change: function(t) {
                                var r = e.pools,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = "y",
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.pools = r.concat([o])) : i > -1 && (e.pools = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.pools = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "ypool"
                        }
                    }, [e._v("Y")]), r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pools,
                            expression: "pools"
                        }],
                        attrs: {
                            id: "busdpool",
                            type: "checkbox",
                            value: "busd"
                        },
                        domProps: {
                            checked: Array.isArray(e.pools) ? e._i(e.pools, "busd") > -1 : e.pools
                        },
                        on: {
                            change: function(t) {
                                var r = e.pools,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = "busd",
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.pools = r.concat([o])) : i > -1 && (e.pools = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.pools = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "busdpool"
                        }
                    }, [e._v("bUSD")]), r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pools,
                            expression: "pools"
                        }],
                        attrs: {
                            id: "susdpool",
                            type: "checkbox",
                            value: "susdv2"
                        },
                        domProps: {
                            checked: Array.isArray(e.pools) ? e._i(e.pools, "susdv2") > -1 : e.pools
                        },
                        on: {
                            change: function(t) {
                                var r = e.pools,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = "susdv2",
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.pools = r.concat([o])) : i > -1 && (e.pools = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.pools = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "susdpool"
                        }
                    }, [e._v("sUSD")]), r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pools,
                            expression: "pools"
                        }],
                        attrs: {
                            id: "paxpool",
                            type: "checkbox",
                            value: "pax"
                        },
                        domProps: {
                            checked: Array.isArray(e.pools) ? e._i(e.pools, "pax") > -1 : e.pools
                        },
                        on: {
                            change: function(t) {
                                var r = e.pools,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = "pax",
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.pools = r.concat([o])) : i > -1 && (e.pools = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.pools = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "paxpool"
                        }
                    }, [e._v("PAX")]), r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pools,
                            expression: "pools"
                        }],
                        attrs: {
                            id: "tbtcpool",
                            type: "checkbox",
                            value: "tbtc"
                        },
                        domProps: {
                            checked: Array.isArray(e.pools) ? e._i(e.pools, "tbtc") > -1 : e.pools
                        },
                        on: {
                            change: function(t) {
                                var r = e.pools,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = "tbtc",
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.pools = r.concat([o])) : i > -1 && (e.pools = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.pools = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "tbtcpool"
                        }
                    }, [e._v("tBTC")]), r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pools,
                            expression: "pools"
                        }],
                        attrs: {
                            id: "renpool",
                            type: "checkbox",
                            value: "ren"
                        },
                        domProps: {
                            checked: Array.isArray(e.pools) ? e._i(e.pools, "ren") > -1 : e.pools
                        },
                        on: {
                            change: function(t) {
                                var r = e.pools,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = "ren",
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.pools = r.concat([o])) : i > -1 && (e.pools = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.pools = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "renpool"
                        }
                    }, [e._v("renBTC")]), r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pools,
                            expression: "pools"
                        }],
                        attrs: {
                            id: "sbtcpool",
                            type: "checkbox",
                            value: "sbtc"
                        },
                        domProps: {
                            checked: Array.isArray(e.pools) ? e._i(e.pools, "sbtc") > -1 : e.pools
                        },
                        on: {
                            change: function(t) {
                                var r = e.pools,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = "sbtc",
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.pools = r.concat([o])) : i > -1 && (e.pools = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.pools = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "sbtcpool"
                        }
                    }, [e._v("sBTC")]), r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pools,
                            expression: "pools"
                        }],
                        attrs: {
                            id: "hbtcpool",
                            type: "checkbox",
                            value: "hbtc"
                        },
                        domProps: {
                            checked: Array.isArray(e.pools) ? e._i(e.pools, "hbtc") > -1 : e.pools
                        },
                        on: {
                            change: function(t) {
                                var r = e.pools,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = "hbtc",
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.pools = r.concat([o])) : i > -1 && (e.pools = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.pools = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "hbtcpool"
                        }
                    }, [e._v("hBTC")]), r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pools,
                            expression: "pools"
                        }],
                        attrs: {
                            id: "3pool",
                            type: "checkbox",
                            value: "3pool"
                        },
                        domProps: {
                            checked: Array.isArray(e.pools) ? e._i(e.pools, "3pool") > -1 : e.pools
                        },
                        on: {
                            change: function(t) {
                                var r = e.pools,
                                    a = t.target,
                                    n = !!a.checked;
                                if (Array.isArray(r)) {
                                    var o = "3pool",
                                        i = e._i(r, o);
                                    a.checked ? i < 0 && (e.pools = r.concat([o])) : i > -1 && (e.pools = r.slice(0, i).concat(r.slice(i + 1)))
                                } else e.pools = n
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "3pool"
                        }
                    }, [e._v("3pool")])]), r("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.pair,
                            expression: "pair"
                        }],
                        staticClass: "tvision",
                        on: {
                            change: function(t) {
                                var r = Array.prototype.filter.call(t.target.options, (function(e) {
                                    return e.selected
                                })).map((function(e) {
                                    var t = "_value" in e ? e._value : e.value;
                                    return t
                                }));
                                e.pair = t.target.multiple ? r : r[0]
                            }
                        }
                    }, e._l(e.allPairs, (function(t) {
                        return r("option", {
                            domProps: {
                                value: t
                            }
                        }, [e._v(e._s(e._f("toUpper")(t.val)))])
                    })), 0), r("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.interval,
                            expression: "interval"
                        }],
                        staticClass: "tvision",
                        on: {
                            change: function(t) {
                                var r = Array.prototype.filter.call(t.target.options, (function(e) {
                                    return e.selected
                                })).map((function(e) {
                                    var t = "_value" in e ? e._value : e.value;
                                    return t
                                }));
                                e.interval = t.target.multiple ? r : r[0]
                            }
                        }
                    }, e._l(e.intervals, (function(t) {
                        return r("option", {
                            domProps: {
                                value: t
                            }
                        }, [e._v(e._s(t))])
                    })), 0), r("button", {
                        on: {
                            click: e.emitSelect
                        }
                    }, [e._v("Select")]), r("button", {
                        on: {
                            click: e.emitUpdate
                        }
                    }, [e._v("Update charts")])])
                },
                V = [],
                z = (r("7db0"), r("5db7"), r("baa5"), r("73d9"), r("07ac"), function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div")
                }),
                B = [],
                F = {
                    computed: {
                        pools: {
                            get: function() {
                                return w["a"].pools
                            },
                            set: function(e) {
                                w["a"].pools = e
                            }
                        }
                    }
                },
                U = F,
                Y = Object(T["a"])(U, z, B, !1, null, "316b7054", null),
                W = Y.exports,
                Z = {
                    components: {
                        SelectPool: W
                    },
                    data: function() {
                        return {
                            pools: w["a"].pools,
                            pool: w["a"].pool,
                            pair: "",
                            interval: w["a"].interval,
                            intervals: w["a"].intervals
                        }
                    },
                    watch: {
                        pools: function(e) {
                            this.pushState()
                        },
                        pair: function() {
                            this.pushState()
                        },
                        interval: function() {
                            this.pushState()
                        }
                    },
                    created: function() {
                        this.$watch((function() {
                            return _["f"].web3
                        }), this.mounted)
                    },
                    mounted: function() {
                        _["f"].web3 && this.mounted()
                    },
                    methods: {
                        mounted: function() {
                            var e = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function t() {
                                var r, a, n;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            r = e.$route.params.params, r && r.length ? (r = r.split("/"), a = r[r.length - 2], n = r[r.length - 1] || "30m", 3 == r.length && (e.pools = w["a"].allPools.filter((function(e) {
                                                return r[0].split("_").includes(e)
                                            }))), e.pair = e.allPairs.find((function(e) {
                                                return e.val == a.toLowerCase()
                                            })), e.interval = n, e.emitSelect()) : e.pair = e.pairs[0];
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        emitSelect: function() {
                            var e = this,
                                t = Object.values(this.filteredCurrencies).map((function(e) {
                                    return Object.keys(e)
                                })),
                                r = this.isUnique(this.pair.val);
                            if (1 == r.length) {
                                var a = t.map((function(e) {
                                        return e.join()
                                    })).indexOf(r[0].join()),
                                    n = Object.keys(this.filteredCurrencies)[a];
                                this.pools = w["a"].pools = [n]
                            }
                            var o = this.pair.val.split("-")[0],
                                i = this.pair.val.split("-")[1],
                                s = Object.fromEntries(Object.entries(this.filteredCurrencies).filter((function(e) {
                                    var t = Object(c["a"])(e, 2),
                                        r = (t[0], t[1]);
                                    return Object.keys(r).includes(o) && Object.keys(r).includes(i)
                                })));
                            s = Object.keys(s).map((function(e) {
                                return "iearn" == e ? "y" : e
                            })), this.pools = w["a"].pools = s.filter((function(t) {
                                return e.pools.includes(t)
                            })), w["a"].pairIdx = this.pair.idx, w["a"].pairVal = this.pair.val, w["a"].interval = this.interval
                        },
                        emitUpdate: function() {
                            k["a"].$emit("updateCharts")
                        },
                        pushState: function() {
                            history.pushState({}, null, "/trade/" + this.pools.join("_") + "/" + this.pair.val.toUpperCase() + "/" + this.interval)
                        },
                        isUnique: function(e) {
                            var t = e.split("-").map((function(e) {
                                    return e.toLowerCase()
                                })),
                                r = Object(c["a"])(t, 2),
                                a = r[0],
                                n = r[1];
                            return Object.values(this.filteredCurrencies).map((function(e) {
                                return Object.keys(e)
                            })).filter((function(e) {
                                return e.includes(a) && e.includes(n)
                            }))
                        }
                    },
                    computed: {
                        allPairs: function() {
                            var e = Object.assign({}, this.filteredCurrencies);
                            delete e.susd;
                            var t, r = Object.values(e).filter((function(e) {
                                    return "susd" != e
                                })).map((function(e) {
                                    return Object.keys(e)
                                })),
                                a = [],
                                n = Object(s["a"])(r);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var o, i = t.value,
                                        l = Object(s["a"])(i.entries());
                                    try {
                                        var u = function() {
                                            var e, t = Object(c["a"])(o.value, 2),
                                                r = t[0],
                                                n = t[1],
                                                l = Object(s["a"])(i.entries());
                                            try {
                                                var u = function() {
                                                    var t = Object(c["a"])(e.value, 2),
                                                        o = t[0],
                                                        i = t[1];
                                                    r != o && void 0 === a.find((function(e) {
                                                        return e.val == "".concat(n, "-").concat(i)
                                                    })) && a.push({
                                                        idx: "".concat(r, "-").concat(o),
                                                        val: "".concat(n, "-").concat(i)
                                                    })
                                                };
                                                for (l.s(); !(e = l.n()).done;) u()
                                            } catch (p) {
                                                l.e(p)
                                            } finally {
                                                l.f()
                                            }
                                        };
                                        for (l.s(); !(o = l.n()).done;) u()
                                    } catch (p) {
                                        l.e(p)
                                    } finally {
                                        l.f()
                                    }
                                }
                            } catch (p) {
                                n.e(p)
                            } finally {
                                n.f()
                            }
                            return a
                        },
                        pairs: function() {
                            var e = this;
                            if (!this.pools.length) return [];
                            var t, r = this.pools.map((function(e) {
                                return "y" == e ? "iearn" : e
                            }));
                            if (r.length > 1) {
                                Object.keys(this.filteredCurrencies).filter((function(e) {
                                    return r.includes(e)
                                }));
                                t = Object.keys(this.filteredCurrencies).flatMap((function(t) {
                                    return Object.keys(e.filteredCurrencies[t])
                                })).filter((function(e, t, r) {
                                    return r.indexOf(e) === t && r.lastIndexOf(e) !== t
                                }))
                            } else t = Object.keys(this.filteredCurrencies["y" == this.pools[0] ? "iearn" : this.pools[0]]);
                            var a, n = [],
                                o = Object(s["a"])(t.entries());
                            try {
                                for (o.s(); !(a = o.n()).done;) {
                                    var i, l = Object(c["a"])(a.value, 2),
                                        u = l[0],
                                        p = l[1],
                                        h = Object(s["a"])(t.entries());
                                    try {
                                        for (h.s(); !(i = h.n()).done;) {
                                            var d = Object(c["a"])(i.value, 2),
                                                f = d[0],
                                                m = d[1];
                                            u != f && n.push({
                                                idx: "".concat(u, "-").concat(f),
                                                val: "".concat(p, "-").concat(m)
                                            })
                                        }
                                    } catch (v) {
                                        h.e(v)
                                    } finally {
                                        h.f()
                                    }
                                }
                            } catch (v) {
                                o.e(v)
                            } finally {
                                o.f()
                            }
                            return n
                        },
                        filteredCurrencies: function() {
                            return _["c"]
                        }
                    }
                },
                q = Z,
                J = (r("9d97"), Object(T["a"])(q, E, V, !1, null, "4d21598c", null)),
                X = J.exports,
                K = r("dcde"),
                H = r("a4e2");
            d()(p.a), m()(p.a);
            var Q = function(e) {
                    return new C["a"](e)
                },
                ee = new D.a,
                te = P["a"](ee);
            p.a.setOptions({
                lang: {
                    loading: "",
                    rangeSelectorZoom: ""
                }
            }), g()(p.a);
            var re = {
                    components: {
                        highcharts: v["Chart"],
                        Depth: G,
                        SelectComponent: X,
                        OneSplit: K["a"]
                    },
                    data: function() {
                        return {
                            loading: !0,
                            chartdata: {
                                plotOptions: {
                                    candlestick: {
                                        color: "#B70000",
                                        upColor: "#007A00"
                                    },
                                    series: {
                                        point: {
                                            events: {
                                                click: function(e) {
                                                    return function(t) {
                                                        var r = e.chart.pointer.findNearestKDPoint(e.chart.series, !1, t),
                                                            a = r.dataGroup ? r.dataGroup.start : r.index,
                                                            n = e.data.map((function(e) {
                                                                return e.filter((function(e) {
                                                                    return e.timestamp
                                                                }))
                                                            })).map((function(e) {
                                                                return e[a]
                                                            })).filter((function(e) {
                                                                return e
                                                            }));
                                                        k["a"].$emit("changeTime", n)
                                                    }
                                                }(this)
                                            }
                                        }
                                    }
                                },
                                navigator: {
                                    series: {
                                        lineColor: "#a6cdf1",
                                        color: "#f8fbfe"
                                    }
                                },
                                exporting: {
                                    buttons: {
                                        contextButton: {
                                            menuItems: ["printChart", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG", "separator", "downloadCSV", "downloadXLS", "openInCloud"]
                                        }
                                    }
                                },
                                rangeSelector: {
                                    selected: 4,
                                    allButtonsEnabled: !0,
                                    buttonTheme: {
                                        visibility: "hidden"
                                    },
                                    labelStyle: {},
                                    inputPosition: {
                                        x: 0,
                                        align: "left"
                                    },
                                    buttons: [{
                                        type: "minute",
                                        count: 100,
                                        text: "1m",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["minute", [1]]
                                            ]
                                        }
                                    }, {
                                        type: "minute",
                                        count: 500,
                                        text: "5m",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["minute", [5]]
                                            ]
                                        }
                                    }, {
                                        type: "minute",
                                        count: 1e3,
                                        text: "10m",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["minute", [10]]
                                            ]
                                        }
                                    }, {
                                        type: "minute",
                                        count: 1500,
                                        text: "15m",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["minute", [15]]
                                            ]
                                        }
                                    }, {
                                        type: "minute",
                                        count: 3e3,
                                        text: "30m",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["minute", [30]]
                                            ]
                                        }
                                    }, {
                                        type: "hour",
                                        count: 500,
                                        text: "1h",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["hour", [1]]
                                            ]
                                        }
                                    }, {
                                        type: "hour",
                                        count: 1e3,
                                        text: "2h",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["hour", [2]]
                                            ]
                                        }
                                    }, {
                                        type: "hour",
                                        count: 2e3,
                                        text: "4h",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["hour", [4]]
                                            ]
                                        }
                                    }, {
                                        type: "hour",
                                        count: 3e3,
                                        text: "6h",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["hour", [6]]
                                            ]
                                        }
                                    }, {
                                        type: "day",
                                        count: 30,
                                        text: "1d",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["day", [1]]
                                            ]
                                        }
                                    }, {
                                        type: "day",
                                        count: 90,
                                        text: "3d",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["day", [3]]
                                            ]
                                        }
                                    }, {
                                        type: "week",
                                        count: 10,
                                        text: "1w",
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["week", [1]]
                                            ]
                                        }
                                    }]
                                },
                                chart: {
                                    height: 600,
                                    panning: !0,
                                    zoomType: "x",
                                    panKey: "ctrl",
                                    events: {
                                        click: function(e) {
                                            return function(t) {
                                                var r = e.chart.pointer.findNearestKDPoint(e.chart.series, !1, t),
                                                    a = r.dataGroup ? r.dataGroup.start : r.index,
                                                    n = e.data.map((function(e) {
                                                        return e.filter((function(e) {
                                                            return e.timestamp
                                                        }))
                                                    })).map((function(e) {
                                                        return e[a]
                                                    })).filter((function(e) {
                                                        return e
                                                    }));
                                                k["a"].$emit("changeTime", n)
                                            }
                                        }(this),
                                        load: function() {
                                            this.redraw()
                                        },
                                        render: function() {
                                            this.plotWidth < 480 ? (this.rangeSelector.maxLabel.translate(0, 25), this.rangeSelector.maxDateBox.translate(37, 25)) : (this.rangeSelector.maxLabel.translate(141, 0), this.rangeSelector.maxDateBox.translate(164, 0))
                                        }
                                    }
                                },
                                title: {
                                    text: ""
                                },
                                yAxis: [{
                                    labels: {
                                        align: "right",
                                        x: -3
                                    },
                                    title: {
                                        text: "OHLC"
                                    },
                                    height: "60%",
                                    lineWidth: 2,
                                    resize: {
                                        enabled: !0
                                    }
                                }, {
                                    labels: {
                                        align: "right",
                                        x: -3
                                    },
                                    title: {
                                        text: "Volume"
                                    },
                                    top: "65%",
                                    height: "35%",
                                    offset: 0,
                                    lineWidth: 2
                                }],
                                tooltip: {
                                    split: !0,
                                    borderColor: "#a6cdf1"
                                },
                                series: [{
                                    type: "candlestick",
                                    name: this.pairVal,
                                    data: []
                                }, {
                                    type: "column",
                                    name: "Volume",
                                    data: [],
                                    yAxis: 1
                                }]
                            },
                            pair: {},
                            pool: "",
                            pools: [],
                            interval: null,
                            chart: null,
                            data: [],
                            poolConfigs: null,
                            fromCurrency: null,
                            toCurrency: null,
                            inverse: !1,
                            ohlcData: [],
                            exchange: !1,
                            btcPrices: []
                        }
                    },
                    created: function() {
                        this.exchange = "Exchange" == this.$route.name, k["a"].$on("updateCharts", this.loadData)
                    },
                    watch: {
                        selectChange: function() {
                            this.watchLoadedContracts(), _["f"].allInitContracts.size >= w["a"].pools.length && this.mounted()
                        }
                    },
                    mounted: function() {
                        this.chart = this.$refs.highcharts.chart, this.watchLoadedContracts(), _["f"].allInitContracts.size >= w["a"].pools.length && this.mounted()
                    },
                    beforeDestroy: function() {
                        k["a"].$off("selected", this.selectPool)
                    },
                    computed: {
                        selectChange: function() {
                            return w["a"].pairIdx, w["a"].pools.join(), w["a"].interval, Date.now()
                        }
                    },
                    methods: {
                        watchLoadedContracts: function() {
                            var e = this,
                                t = this.$watch((function() {
                                    return _["f"].allInitContracts.size
                                }), (function(r) {
                                    r >= w["a"].pools.length && (e.mounted(), t())
                                }))
                        },
                        loadData: function() {
                            var e = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function t() {
                                var r, a, n, o, i, l, u, p, h, d;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = e.interval, a = w["a"].intervals.indexOf(r), a >= w["a"].intervals.indexOf("30m") && (r = "30m"), a >= w["a"].intervals.indexOf("1d") && (r = "1440m"), n = w["a"].pools.map((function(e) {
                                                var t = "iearn" == e ? "y" : "susdv2" == e ? "susd" : "ren" == e ? "ren2" : "sbtc" == e ? "rens" : e;
                                                return fetch("".concat(window.domain, "/raw-stats/").concat(t, "-").concat(r, ".json"))
                                            })), (w["a"].pools.includes("tbtc") || w["a"].pools.includes("ren") || w["a"].pools.includes("sbtc") || w["a"].pools.includes("hbtc")) && n.push(fetch("\n\t\t\t\t\t\thttps://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1589587198&to=".concat(Date.now() / 1e3 | 0))), t.next = 8, Promise.all(n);
                                        case 8:
                                            if (o = t.sent, !(w["a"].pools.includes("tbtc") || w["a"].pools.includes("ren") || w["a"].pools.includes("sbtc") || w["a"].pools.includes("hbtc"))) {
                                                t.next = 14;
                                                break
                                            }
                                            return t.next = 12, o[o.length - 1].json();
                                        case 12:
                                            e.btcPrices = t.sent, o = o.slice(0, -1);
                                        case 14:
                                            i = [], l = Object(s["a"])(o), t.prev = 16, l.s();
                                        case 18:
                                            if ((u = l.n()).done) {
                                                t.next = 28;
                                                break
                                            }
                                            return p = u.value, t.next = 22, p.json();
                                        case 22:
                                            h = t.sent, (p.url.includes("tbtc") || p.url.includes("ren") || p.url.includes("sbtc") || p.url.includes("hbtc")) && (h = h.map((function(t) {
                                                return t.volume = Object.fromEntries(Object.entries(t.volume).map((function(r) {
                                                    var a = Object(c["a"])(r, 2),
                                                        n = a[0],
                                                        o = a[1];
                                                    return [n, o.map((function(r) {
                                                        return r * H["b"](t.timestamp, e.btcPrices.prices)
                                                    }))]
                                                }))), t
                                            }))), 1e3 != h.length && o.length > 1 && (p.url.includes("pax") && (h = h.slice(10)), d = new Array(1e3 - h.length).fill({}), h = d.concat(h)), i.push(h);
                                        case 26:
                                            t.next = 18;
                                            break;
                                        case 28:
                                            t.next = 33;
                                            break;
                                        case 30:
                                            t.prev = 30, t.t0 = t["catch"](16), l.e(t.t0);
                                        case 33:
                                            return t.prev = 33, l.f(), t.finish(33);
                                        case 36:
                                            e.data = i;
                                        case 37:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [16, 30, 33, 36]
                                ])
                            })))()
                        },
                        loadRecentData: function(e) {
                            var t = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function r() {
                                var a, n, o, i, s;
                                return regeneratorRuntime.wrap((function(r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2, t.loadData();
                                        case 2:
                                            return a = t.data.map((function(t) {
                                                return t.filter((function(t) {
                                                    return t.timestamp > e
                                                }))
                                            })), r.next = 5, t.processData(a);
                                        case 5:
                                            n = r.sent, o = Object(c["a"])(n, 2), i = o[0], s = o[1], i.map((function(e) {
                                                return t.chart.series[0].addPoint(e, !1)
                                            })), s.map((function(e) {
                                                return t.chart.series[1].addPoint(e, !1)
                                            })), t.chart.redraw();
                                        case 12:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        },
                        processData: function(e) {
                            var t = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function r() {
                                var a, n, c, s, l, u, p, h, d, f, m, v, b, g, x, y, k;
                                return regeneratorRuntime.wrap((function(r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return t.ohlcData = [], a = [], n = [], r.prev = 3, c = t.pools.map((function(e) {
                                                var r = 1,
                                                    a = "get_dy_underlying";
                                                return ["tbtc", "ren", "sbtc", "hbtc"].includes(e) && (r = 1e-4, a = "get_dy"), ["3pool"].includes(e) && (a = "get_dy"), [O["g"][e].swap_address, window[e].swap.methods[a](t.fromCurrency, t.toCurrency, Q(r).times(O["g"][e].coin_precisions[t.fromCurrency]).toFixed(0)).encodeABI()]
                                            })), r.next = 7, _["f"].multicall.methods.aggregate(c).call();
                                        case 7:
                                            s = r.sent, l = s[1].map((function(e) {
                                                return web3.eth.abi.decodeParameter("uint256", e)
                                            })), u = e[0].length, p = 70, h = u - 1;
                                        case 12:
                                            if (!(h > 0)) {
                                                r.next = 55;
                                                break
                                            }
                                            d = h;
                                        case 14:
                                            if (!(d > h - p && d > 0)) {
                                                r.next = 34;
                                                break
                                            }
                                            t.ohlcData[d] = {}, t.ohlcData[d].timestamp = e[0][d].timestamp, t.ohlcData[d].prices = {}, t.ohlcData[d].prices[t.pairIdx] = [], t.ohlcData[d].volume = {}, t.ohlcData[d].volume[t.pairIdx] = [], f = regeneratorRuntime.mark((function r(a) {
                                                var n, c, s, p, h, f, m;
                                                return regeneratorRuntime.wrap((function(r) {
                                                    while (1) switch (r.prev = r.next) {
                                                        case 0:
                                                            if (!(t.poolConfigs[a].N_COINS - 1 < t.toCurrency)) {
                                                                r.next = 2;
                                                                break
                                                            }
                                                            return r.abrupt("return", "continue");
                                                        case 2:
                                                            if (c = e[a][d], 0 !== Object.keys(c).length || c.constructor !== Object) {
                                                                r.next = 5;
                                                                break
                                                            }
                                                            return r.abrupt("return", "continue");
                                                        case 5:
                                                            if (void 0 !== c) {
                                                                r.next = 7;
                                                                break
                                                            }
                                                            return r.abrupt("return", "continue");
                                                        case 7:
                                                            return s = 1, ["tbtc", "ren", "sbtc", "hbtc"].includes(t.pools[a]) && (s = 1e-8), r.next = 11, te.calcPrice(Object(i["a"])({}, c, {}, t.poolConfigs[a]), t.fromCurrency, t.toCurrency, s * O["g"][t.pools[a]].coin_precisions[t.fromCurrency]);
                                                        case 11:
                                                            if (p = r.sent, h = +Q(p).div(s * O["g"][t.pools[a]].coin_precisions[t.toCurrency]), 0 != h) {
                                                                r.next = 15;
                                                                break
                                                            }
                                                            return r.abrupt("return", "continue");
                                                        case 15:
                                                            t.inverse && (h = 1 / h), c.prices[t.pairIdx] ? (t.inverse && (c.prices[t.pairIdx] = c.prices[t.pairIdx].map((function(e) {
                                                                return 1 / e
                                                            }))), c.prices[t.pairIdx].push(h)) : (c.prices[t.pairIdx] = [h], c.volume[t.pairIdx] = [0]), d == u - 1 && (Q(O["g"][t.pools[a]].coin_precisions[t.fromCurrency]).toFixed(0), f = 1, ["tbtc", "ren", "sbtc", "hbtc"].includes(t.pools[a]) && (f = 1e-4), m = +Q(l[a]).div(f * O["g"][t.pools[a]].coin_precisions[t.toCurrency]), t.inverse && (m = 1 / m), t.ohlcData[d].prices[t.pairIdx].push(m)), (n = t.ohlcData[d].prices[t.pairIdx]).push.apply(n, Object(o["a"])(c.prices[t.pairIdx])), t.ohlcData[d].volume[t.pairIdx][a] = c.volume[t.pairIdx].map((function(e, r) {
                                                                return 0 == r ? e / O["g"][t.pools[a]].coin_precisions[t.fromCurrency] : e / O["g"][t.pools[a]].coin_precisions[t.toCurrency]
                                                            }));
                                                        case 20:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r)
                                            })), m = 0;
                                        case 23:
                                            if (!(m < e.length)) {
                                                r.next = 31;
                                                break
                                            }
                                            return r.delegateYield(f(m), "t0", 25);
                                        case 25:
                                            if (v = r.t0, "continue" !== v) {
                                                r.next = 28;
                                                break
                                            }
                                            return r.abrupt("continue", 28);
                                        case 28:
                                            m++, r.next = 23;
                                            break;
                                        case 31:
                                            d--, r.next = 14;
                                            break;
                                        case 34:
                                            t.ohlcData.length, b = h;
                                        case 36:
                                            if (!(b > h - p && b > 0)) {
                                                r.next = 49;
                                                break
                                            }
                                            if (g = t.ohlcData[b].prices[t.pairIdx].length - 1, t.ohlcData[b].timestamp) {
                                                r.next = 40;
                                                break
                                            }
                                            return r.abrupt("continue", 46);
                                        case 40:
                                            x = [1e3 * t.ohlcData[b].timestamp, t.ohlcData[b].prices[t.pairIdx][0], Math.max.apply(Math, Object(o["a"])(t.ohlcData[b].prices[t.pairIdx])), Math.min.apply(Math, Object(o["a"])(t.ohlcData[b].prices[t.pairIdx])), t.ohlcData[b].prices[t.pairIdx][g]], a.unshift(x), y = t.ohlcData[b].volume[t.pairIdx].map((function(e) {
                                                return e[0]
                                            })), t.inverse && (y = t.ohlcData[b].volume[t.pairIdx].map((function(e) {
                                                return e[1]
                                            }))), k = [1e3 * t.ohlcData[b].timestamp, y.reduce((function(e, t) {
                                                return e + t
                                            }), 0)], n.unshift(k);
                                        case 46:
                                            b--, r.next = 36;
                                            break;
                                        case 49:
                                            t.chart.hideLoading(), t.$refs.highcharts.chart.series[0].setData(a), t.$refs.highcharts.chart.series[1].setData(n);
                                        case 52:
                                            h -= p, r.next = 12;
                                            break;
                                        case 55:
                                            r.next = 60;
                                            break;
                                        case 57:
                                            r.prev = 57, r.t1 = r["catch"](3), console.error(r.t1);
                                        case 60:
                                            return r.abrupt("return", [a, n]);
                                        case 61:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [3, 57]
                                ])
                            })))()
                        },
                        mounted: function() {
                            var e = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function t() {
                                var r, a, n, o, i;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e.chart.showLoading(), e.pools = w["a"].pools.map((function(e) {
                                                return "y" == e ? "iearn" : e
                                            })), e.pairIdx = w["a"].pairIdx, e.pairVal = w["a"].pairVal, e.interval = w["a"].interval, t.next = 7, e.loadData();
                                        case 7:
                                            return e.poolConfigs = e.pools.map((function(e) {
                                                return {
                                                    N_COINS: O["g"][e].N_COINS,
                                                    PRECISION_MUL: O["g"][e].coin_precisions.map((function(e) {
                                                        return 1e18 / e
                                                    })),
                                                    USE_LENDING: O["g"][e].USE_LENDING,
                                                    LENDING_PRECISION: _["a"],
                                                    PRECISION: _["b"]
                                                }
                                            })), r = e.fromCurrency = w["a"].pairIdx.split("-")[0], a = e.toCurrency = w["a"].pairIdx.split("-")[1], e.inverse = !1, r > a && (e.inverse = !0, n = [e.toCurrency, e.fromCurrency], e.fromCurrency = n[0], e.toCurrency = n[1], e.pairIdx = "".concat(e.fromCurrency, "-").concat(e.toCurrency)), t.next = 14, e.processData(e.data);
                                        case 14:
                                            o = t.sent, i = Object(c["a"])(o, 2), i[0], i[1], console.log(e.$refs.highcharts.chart), e.chart.setTitle({
                                                text: e.pairVal.toUpperCase()
                                            }), e.chart.rangeSelector.clickButton(w["a"].intervals.indexOf(e.interval), !0), e.chart.redraw(), e.chart.hideLoading(), e.loading = !1, setInterval(Object(l["a"])(regeneratorRuntime.mark((function t() {
                                                return regeneratorRuntime.wrap((function(t) {
                                                    while (1) switch (t.prev = t.next) {
                                                        case 0:
                                                            e.loadRecentData(e.data[0][e.data[0].length - 1].timestamp), k["a"].$emit("updateDepth");
                                                        case 2:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            }))), 6e4 * e.interval.slice(0, -1));
                                        case 25:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }
                    }
                },
                ae = re,
                ne = (r("df59"), Object(T["a"])(ae, a, n, !1, null, "464e33cc", null));
            t["default"] = ne.exports
        },
        9510: function(e, t, r) {
            e.exports = function() {
                return new Worker(r.p + "c25f8c283571356d3a3e.worker.js")
            }
        },
        "9d97": function(e, t, r) {
            "use strict";
            var a = r("fbab"),
                n = r.n(a);
            n.a
        },
        a2bf: function(e, t, r) {
            "use strict";
            var a = r("e8b5"),
                n = r("50c4"),
                o = r("0366"),
                i = function(e, t, r, c, s, l, u, p) {
                    var h, d = s,
                        f = 0,
                        m = !!u && o(u, p, 3);
                    while (f < c) {
                        if (f in r) {
                            if (h = m ? m(r[f], f, t) : r[f], l > 0 && a(h)) d = i(e, t, h, n(h.length), d, l - 1) - 1;
                            else {
                                if (d >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                                e[d] = h
                            }
                            d++
                        }
                        f++
                    }
                    return d
                };
            e.exports = i
        },
        baa5: function(e, t, r) {
            var a = r("23e7"),
                n = r("e58c");
            a({
                target: "Array",
                proto: !0,
                forced: n !== [].lastIndexOf
            }, {
                lastIndexOf: n
            })
        },
        df59: function(e, t, r) {
            "use strict";
            var a = r("4287"),
                n = r.n(a);
            n.a
        },
        fbab: function(e, t, r) {}
    }
]);
//# sourceMappingURL=chunk-1f19c0d6.0b2fd52c.js.map