(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-51d10ca1"], {
        "066b": function(e, t, o) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        class: {
                            "window white": !e.embedded
                        }
                    }, [o("highcharts", {
                        ref: "highcharts",
                        attrs: {
                            "constructor-type": "stockChart",
                            options: e.chartdata
                        }
                    })], 1)
                },
                r = [],
                n = (o("99af"), o("caad"), o("b0c0"), o("b680"), o("ac1f"), o("2532"), o("1276"), o("96cf"), o("1da1")),
                i = o("ea7f"),
                s = o.n(i),
                c = o("0319"),
                l = o.n(c),
                p = o("d68a"),
                d = o.n(p),
                u = o("4452"),
                h = o("37d8"),
                m = o.n(h);
            o("a4e2"), o("5245");
            l()(s.a), d()(s.a), m()(s.a), s.a.setOptions({
                lang: {
                    loading: ""
                }
            });
            var f = {
                    components: {
                        highcharts: u["Chart"]
                    },
                    props: ["data", "currency", "loaded", "embedded"],
                    data: function() {
                        return {
                            btcs: ["tbtc", "hbtc", "wbtc", "renbtc", "sbtc"],
                            chartdata: {
                                chart: {
                                    panning: !0,
                                    zoomType: "x",
                                    panKey: "ctrl",
                                    type: "column"
                                },
                                rangeSelector: {
                                    selected: 1
                                },
                                plotOptions: {
                                    series: {
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["day", [1]]
                                            ]
                                        }
                                    }
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
                                        text: "Trading Volume",
                                        style: {
                                            color: "black"
                                        }
                                    },
                                    labels: {
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
                                series: [{
                                    name: function(e) {
                                        return "Trading Volume per ".concat(e.embedded ? "pair" : "coin")
                                    }(this),
                                    lineWidth: 2,
                                    data: [],
                                    color: "#0b0a57"
                                }],
                                tooltip: {
                                    valueDecimals: 5,
                                    pointFormatter: function(e) {
                                        return function() {
                                            var t = this.y.toFixed(2);
                                            return ["TBTC", "WBTC", "HBTC", "renBTC", "sBTC"].includes(e.currency) && (t = this.y.toFixed(8)), '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(t, "</b><br/>")
                                        }
                                    }(this)
                                }
                            },
                            chart: null
                        }
                    },
                    watch: {
                        data: function(e) {
                            e.length && this.mounted()
                        },
                        loaded: function(e) {
                            this.chart.redraw(!1)
                        },
                        currency: function(e) {
                            this.chart.redraw(!1)
                        }
                    },
                    mounted: function() {
                        this.chart = this.$refs.highcharts.chart, this.chart.showLoading(), this.chart.setTitle({
                            text: "Total trading volume per day for ".concat(this.currency, " ").concat(this.btcs.includes(this.currency.toLowerCase().split(" ⇄ ")[0]) || this.btcs.includes(this.currency.toLowerCase().split(" ⇄ ")[1]) ? "in USD" : "")
                        })
                    },
                    methods: {
                        mounted: function() {
                            var e = this;
                            return Object(n["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            e.chart.series[0].setData(e.data, !1, !1), e.chart.setTitle({
                                                text: "Total trading volume per day for ".concat(e.currency, " ").concat(e.btcs.includes(e.currency.toLowerCase().split(" ⇄ ")[0]) || e.btcs.includes(e.currency.toLowerCase().split(" ⇄ ")[1]) ? "in USD" : "")
                                            }), e.chart.hideLoading();
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }
                    }
                },
                v = f,
                y = o("2877"),
                b = Object(y["a"])(v, a, r, !1, null, null, null);
            t["a"] = b.exports
        },
        "224a": function(e, t, o) {},
        "3d15": function(e, t, o) {
            "use strict";
            o.d(t, "a", (function() {
                return d
            }));
            const a = Symbol("Comlink.proxy"),
                r = Symbol("Comlink.endpoint"),
                n = Symbol("Comlink.releaseProxy"),
                i = new WeakSet,
                s = new Map([
                    ["proxy", {
                        canHandle: e => e && e[a],
                        serialize(e) {
                            const {
                                port1: t,
                                port2: o
                            } = new MessageChannel;
                            return c(e, t), [o, [o]]
                        },
                        deserialize: e => (e.start(), d(e))
                    }],
                    ["throw", {
                        canHandle: e => i.has(e),
                        serialize(e) {
                            const t = e instanceof Error;
                            let o = e;
                            return t && (o = {
                                isError: t,
                                message: e.message,
                                stack: e.stack
                            }), [o, []]
                        },
                        deserialize(e) {
                            if (e.isError) throw Object.assign(new Error, e);
                            throw e
                        }
                    }]
                ]);

            function c(e, t = self) {
                t.addEventListener("message", (function o(a) {
                    if (!a || !a.data) return;
                    const {
                        id: r,
                        type: n,
                        path: s
                    } = Object.assign({
                        path: []
                    }, a.data), l = (a.data.argumentList || []).map(w);
                    let d;
                    try {
                        const t = s.slice(0, -1).reduce((e, t) => e[t], e),
                            o = s.reduce((e, t) => e[t], e);
                        switch (n) {
                            case 0:
                                d = o;
                                break;
                            case 1:
                                t[s.slice(-1)[0]] = w(a.data.value), d = !0;
                                break;
                            case 2:
                                d = o.apply(t, l);
                                break;
                            case 3:
                                {
                                    const e = new o(...l);d = b(e)
                                }
                                break;
                            case 4:
                                {
                                    const {
                                        port1: t,
                                        port2: o
                                    } = new MessageChannel;c(e, o),
                                    d = y(t, [t])
                                }
                                break;
                            case 5:
                                d = void 0;
                                break
                        }
                    } catch (u) {
                        d = u, i.add(u)
                    }
                    Promise.resolve(d).catch(e => (i.add(e), e)).then(e => {
                        const [a, i] = g(e);
                        t.postMessage(Object.assign(Object.assign({}, a), {
                            id: r
                        }), i), 5 === n && (t.removeEventListener("message", o), p(t))
                    })
                })), t.start && t.start()
            }

            function l(e) {
                return "MessagePort" === e.constructor.name
            }

            function p(e) {
                l(e) && e.close()
            }

            function d(e, t) {
                return h(e, [], t)
            }

            function u(e) {
                if (e) throw new Error("Proxy has been released and is not useable")
            }

            function h(e, t = [], o = function() {}) {
                let a = !1;
                const i = new Proxy(o, {
                    get(o, r) {
                        if (u(a), r === n) return () => k(e, {
                            type: 5,
                            path: t.map(e => e.toString())
                        }).then(() => {
                            p(e), a = !0
                        });
                        if ("then" === r) {
                            if (0 === t.length) return {
                                then: () => i
                            };
                            const o = k(e, {
                                type: 0,
                                path: t.map(e => e.toString())
                            }).then(w);
                            return o.then.bind(o)
                        }
                        return h(e, [...t, r])
                    },
                    set(o, r, n) {
                        u(a);
                        const [i, s] = g(n);
                        return k(e, {
                            type: 1,
                            path: [...t, r].map(e => e.toString()),
                            value: i
                        }, s).then(w)
                    },
                    apply(o, n, i) {
                        u(a);
                        const s = t[t.length - 1];
                        if (s === r) return k(e, {
                            type: 4
                        }).then(w);
                        if ("bind" === s) return h(e, t.slice(0, -1));
                        const [c, l] = f(i);
                        return k(e, {
                            type: 2,
                            path: t.map(e => e.toString()),
                            argumentList: c
                        }, l).then(w)
                    },
                    construct(o, r) {
                        u(a);
                        const [n, i] = f(r);
                        return k(e, {
                            type: 3,
                            path: t.map(e => e.toString()),
                            argumentList: n
                        }, i).then(w)
                    }
                });
                return i
            }

            function m(e) {
                return Array.prototype.concat.apply([], e)
            }

            function f(e) {
                const t = e.map(g);
                return [t.map(e => e[0]), m(t.map(e => e[1]))]
            }
            const v = new WeakMap;

            function y(e, t) {
                return v.set(e, t), e
            }

            function b(e) {
                return Object.assign(e, {
                    [a]: !0
                })
            }

            function g(e) {
                for (const [t, o] of s)
                    if (o.canHandle(e)) {
                        const [a, r] = o.serialize(e);
                        return [{
                            type: 3,
                            name: t,
                            value: a
                        }, r]
                    }
                return [{
                    type: 0,
                    value: e
                }, v.get(e) || []]
            }

            function w(e) {
                switch (e.type) {
                    case 3:
                        return s.get(e.name).deserialize(e.value);
                    case 0:
                        return e.value
                }
            }

            function k(e, t, o) {
                return new Promise(a => {
                    const r = x();
                    e.addEventListener("message", (function t(o) {
                        o.data && o.data.id && o.data.id === r && (e.removeEventListener("message", t), a(o.data))
                    })), e.start && e.start(), e.postMessage(Object.assign({
                        id: r
                    }, t), o)
                })
            }

            function x() {
                return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-")
            }
        },
        "6d35": function(e, t, o) {
            "use strict";
            o.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", [o("div", {
                        staticClass: "window white"
                    }, [o("div", {
                        staticClass: "poolselect"
                    }, [o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.piepools,
                            expression: "piepools"
                        }],
                        attrs: {
                            id: "compoundpool",
                            type: "checkbox",
                            value: "compound"
                        },
                        domProps: {
                            checked: Array.isArray(e.piepools) ? e._i(e.piepools, "compound") > -1 : e.piepools
                        },
                        on: {
                            change: function(t) {
                                var o = e.piepools,
                                    a = t.target,
                                    r = !!a.checked;
                                if (Array.isArray(o)) {
                                    var n = "compound",
                                        i = e._i(o, n);
                                    a.checked ? i < 0 && (e.piepools = o.concat([n])) : i > -1 && (e.piepools = o.slice(0, i).concat(o.slice(i + 1)))
                                } else e.piepools = r
                            }
                        }
                    }), o("label", {
                        attrs: {
                            for: "compoundpool"
                        }
                    }, [e._v("Compound")]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.piepools,
                            expression: "piepools"
                        }],
                        attrs: {
                            id: "usdtpool",
                            type: "checkbox",
                            value: "usdt"
                        },
                        domProps: {
                            checked: Array.isArray(e.piepools) ? e._i(e.piepools, "usdt") > -1 : e.piepools
                        },
                        on: {
                            change: function(t) {
                                var o = e.piepools,
                                    a = t.target,
                                    r = !!a.checked;
                                if (Array.isArray(o)) {
                                    var n = "usdt",
                                        i = e._i(o, n);
                                    a.checked ? i < 0 && (e.piepools = o.concat([n])) : i > -1 && (e.piepools = o.slice(0, i).concat(o.slice(i + 1)))
                                } else e.piepools = r
                            }
                        }
                    }), o("label", {
                        attrs: {
                            for: "usdtpool"
                        }
                    }, [e._v("usdt")]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.piepools,
                            expression: "piepools"
                        }],
                        attrs: {
                            id: "ypool",
                            type: "checkbox",
                            value: "y"
                        },
                        domProps: {
                            checked: Array.isArray(e.piepools) ? e._i(e.piepools, "y") > -1 : e.piepools
                        },
                        on: {
                            change: function(t) {
                                var o = e.piepools,
                                    a = t.target,
                                    r = !!a.checked;
                                if (Array.isArray(o)) {
                                    var n = "y",
                                        i = e._i(o, n);
                                    a.checked ? i < 0 && (e.piepools = o.concat([n])) : i > -1 && (e.piepools = o.slice(0, i).concat(o.slice(i + 1)))
                                } else e.piepools = r
                            }
                        }
                    }), o("label", {
                        attrs: {
                            for: "ypool"
                        }
                    }, [e._v("Y")]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.piepools,
                            expression: "piepools"
                        }],
                        attrs: {
                            id: "busdpool",
                            type: "checkbox",
                            value: "busd"
                        },
                        domProps: {
                            checked: Array.isArray(e.piepools) ? e._i(e.piepools, "busd") > -1 : e.piepools
                        },
                        on: {
                            change: function(t) {
                                var o = e.piepools,
                                    a = t.target,
                                    r = !!a.checked;
                                if (Array.isArray(o)) {
                                    var n = "busd",
                                        i = e._i(o, n);
                                    a.checked ? i < 0 && (e.piepools = o.concat([n])) : i > -1 && (e.piepools = o.slice(0, i).concat(o.slice(i + 1)))
                                } else e.piepools = r
                            }
                        }
                    }), o("label", {
                        attrs: {
                            for: "busdpool"
                        }
                    }, [e._v("bUSD")]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.piepools,
                            expression: "piepools"
                        }],
                        attrs: {
                            id: "susdpool",
                            type: "checkbox",
                            value: "susd"
                        },
                        domProps: {
                            checked: Array.isArray(e.piepools) ? e._i(e.piepools, "susd") > -1 : e.piepools
                        },
                        on: {
                            change: function(t) {
                                var o = e.piepools,
                                    a = t.target,
                                    r = !!a.checked;
                                if (Array.isArray(o)) {
                                    var n = "susd",
                                        i = e._i(o, n);
                                    a.checked ? i < 0 && (e.piepools = o.concat([n])) : i > -1 && (e.piepools = o.slice(0, i).concat(o.slice(i + 1)))
                                } else e.piepools = r
                            }
                        }
                    }), o("label", {
                        attrs: {
                            for: "susdpool"
                        }
                    }, [e._v("sUSD")]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.piepools,
                            expression: "piepools"
                        }],
                        attrs: {
                            id: "paxpool",
                            type: "checkbox",
                            value: "pax"
                        },
                        domProps: {
                            checked: Array.isArray(e.piepools) ? e._i(e.piepools, "pax") > -1 : e.piepools
                        },
                        on: {
                            change: function(t) {
                                var o = e.piepools,
                                    a = t.target,
                                    r = !!a.checked;
                                if (Array.isArray(o)) {
                                    var n = "pax",
                                        i = e._i(o, n);
                                    a.checked ? i < 0 && (e.piepools = o.concat([n])) : i > -1 && (e.piepools = o.slice(0, i).concat(o.slice(i + 1)))
                                } else e.piepools = r
                            }
                        }
                    }), o("label", {
                        attrs: {
                            for: "paxpool"
                        }
                    }, [e._v("PAX")]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.piepools,
                            expression: "piepools"
                        }],
                        attrs: {
                            id: "tbtcpool",
                            type: "checkbox",
                            value: "tbtc"
                        },
                        domProps: {
                            checked: Array.isArray(e.piepools) ? e._i(e.piepools, "tbtc") > -1 : e.piepools
                        },
                        on: {
                            change: function(t) {
                                var o = e.piepools,
                                    a = t.target,
                                    r = !!a.checked;
                                if (Array.isArray(o)) {
                                    var n = "tbtc",
                                        i = e._i(o, n);
                                    a.checked ? i < 0 && (e.piepools = o.concat([n])) : i > -1 && (e.piepools = o.slice(0, i).concat(o.slice(i + 1)))
                                } else e.piepools = r
                            }
                        }
                    }), o("label", {
                        attrs: {
                            for: "tbtcpool"
                        }
                    }, [e._v("tBTC")]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.piepools,
                            expression: "piepools"
                        }],
                        attrs: {
                            id: "renpool",
                            type: "checkbox",
                            value: "ren"
                        },
                        domProps: {
                            checked: Array.isArray(e.piepools) ? e._i(e.piepools, "ren") > -1 : e.piepools
                        },
                        on: {
                            change: function(t) {
                                var o = e.piepools,
                                    a = t.target,
                                    r = !!a.checked;
                                if (Array.isArray(o)) {
                                    var n = "ren",
                                        i = e._i(o, n);
                                    a.checked ? i < 0 && (e.piepools = o.concat([n])) : i > -1 && (e.piepools = o.slice(0, i).concat(o.slice(i + 1)))
                                } else e.piepools = r
                            }
                        }
                    }), o("label", {
                        attrs: {
                            for: "renpool"
                        }
                    }, [e._v("renBTC")]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.piepools,
                            expression: "piepools"
                        }],
                        attrs: {
                            id: "sbtcpool",
                            type: "checkbox",
                            value: "sbtc"
                        },
                        domProps: {
                            checked: Array.isArray(e.piepools) ? e._i(e.piepools, "sbtc") > -1 : e.piepools
                        },
                        on: {
                            change: function(t) {
                                var o = e.piepools,
                                    a = t.target,
                                    r = !!a.checked;
                                if (Array.isArray(o)) {
                                    var n = "sbtc",
                                        i = e._i(o, n);
                                    a.checked ? i < 0 && (e.piepools = o.concat([n])) : i > -1 && (e.piepools = o.slice(0, i).concat(o.slice(i + 1)))
                                } else e.piepools = r
                            }
                        }
                    }), o("label", {
                        attrs: {
                            for: "sbtcpool"
                        }
                    }, [e._v("sBTC")]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.piepools,
                            expression: "piepools"
                        }],
                        attrs: {
                            id: "hbtcpool",
                            type: "checkbox",
                            value: "hbtc"
                        },
                        domProps: {
                            checked: Array.isArray(e.piepools) ? e._i(e.piepools, "hbtc") > -1 : e.piepools
                        },
                        on: {
                            change: function(t) {
                                var o = e.piepools,
                                    a = t.target,
                                    r = !!a.checked;
                                if (Array.isArray(o)) {
                                    var n = "hbtc",
                                        i = e._i(o, n);
                                    a.checked ? i < 0 && (e.piepools = o.concat([n])) : i > -1 && (e.piepools = o.slice(0, i).concat(o.slice(i + 1)))
                                } else e.piepools = r
                            }
                        }
                    }), o("label", {
                        attrs: {
                            for: "hbtcpool"
                        }
                    }, [e._v("hBTC")]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.piepools,
                            expression: "piepools"
                        }],
                        attrs: {
                            id: "3pool",
                            type: "checkbox",
                            value: "3pool"
                        },
                        domProps: {
                            checked: Array.isArray(e.piepools) ? e._i(e.piepools, "3pool") > -1 : e.piepools
                        },
                        on: {
                            change: function(t) {
                                var o = e.piepools,
                                    a = t.target,
                                    r = !!a.checked;
                                if (Array.isArray(o)) {
                                    var n = "3pool",
                                        i = e._i(o, n);
                                    a.checked ? i < 0 && (e.piepools = o.concat([n])) : i > -1 && (e.piepools = o.slice(0, i).concat(o.slice(i + 1)))
                                } else e.piepools = r
                            }
                        }
                    }), o("label", {
                        attrs: {
                            for: "3pool"
                        }
                    }, [e._v("3pool")]), o("button", {
                        on: {
                            click: e.selectPools
                        }
                    }, [e._v("Select")])]), o("highcharts", {
                        ref: "highcharts",
                        attrs: {
                            "constructor-type": "stockChart",
                            options: e.chartdata
                        }
                    })], 1), o("div", {
                        staticClass: "window white"
                    }, [o("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.period,
                            expression: "period"
                        }],
                        staticClass: "tvision",
                        on: {
                            change: function(t) {
                                var o = Array.prototype.filter.call(t.target.options, (function(e) {
                                    return e.selected
                                })).map((function(e) {
                                    var t = "_value" in e ? e._value : e.value;
                                    return t
                                }));
                                e.period = t.target.multiple ? o : o[0]
                            }
                        }
                    }, [o("option", {
                        attrs: {
                            value: "day"
                        }
                    }, [e._v("Day")]), o("option", {
                        attrs: {
                            value: "week"
                        }
                    }, [e._v("Week")]), o("option", {
                        attrs: {
                            value: "month"
                        }
                    }, [e._v("Month")]), o("option", {
                        attrs: {
                            value: "all"
                        }
                    }, [e._v("All")])]), o("highcharts", {
                        ref: "piecharts",
                        attrs: {
                            options: e.piechartdata
                        }
                    })], 1), o("div", {
                        staticClass: "window white"
                    }, [o("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.selectpair,
                            expression: "selectpair"
                        }],
                        staticClass: "tvision",
                        on: {
                            change: function(t) {
                                var o = Array.prototype.filter.call(t.target.options, (function(e) {
                                    return e.selected
                                })).map((function(e) {
                                    var t = "_value" in e ? e._value : e.value;
                                    return t
                                }));
                                e.selectpair = t.target.multiple ? o : o[0]
                            }
                        }
                    }, e._l(e.currencies, (function(t) {
                        return o("option", {
                            domProps: {
                                value: t
                            }
                        }, [e._v(" " + e._s(t) + " ")])
                    })), 0), o("volume-per-coin-stats", {
                        attrs: {
                            data: e.pairVolume,
                            currency: e.selectpair,
                            loaded: e.loaded,
                            embedded: !0
                        }
                    })], 1)])
                },
                r = [],
                n = (o("99af"), o("cb29"), o("4de4"), o("4160"), o("caad"), o("c975"), o("d81d"), o("13d5"), o("b0c0"), o("b680"), o("4fad"), o("b64b"), o("d3b7"), o("07ac"), o("ac1f"), o("2532"), o("1276"), o("159b"), o("ddb0"), o("ade3")),
                i = o("2909"),
                s = o("5530"),
                c = o("3835"),
                l = o("b85c"),
                p = (o("96cf"), o("1da1")),
                d = o("ea7f"),
                u = o.n(d),
                h = o("0319"),
                m = o.n(h),
                f = o("d68a"),
                v = o.n(f),
                y = o("4452"),
                b = o("37d8"),
                g = o.n(b),
                w = o("a4e2"),
                k = o("5245"),
                x = o("51bf"),
                A = o("066b"),
                O = o("3d15"),
                _ = o("9510"),
                C = o.n(_);
            m()(u.a), v()(u.a), g()(u.a), u.a.setOptions({
                lang: {
                    loading: ""
                }
            });
            var P = new C.a,
                S = O["a"](P),
                j = {
                    components: {
                        highcharts: y["Chart"],
                        VolumePerCoinStats: A["a"]
                    },
                    data: function() {
                        return {
                            chartdata: {
                                chart: {
                                    panning: !0,
                                    zoomType: "x",
                                    panKey: "ctrl",
                                    type: "column",
                                    height: 600
                                },
                                rangeSelector: {
                                    selected: 1
                                },
                                plotOptions: {
                                    series: {
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["day", [1]]
                                            ]
                                        }
                                    },
                                    column: {
                                        stacking: "normal",
                                        dataLabels: {
                                            enabled: !1
                                        }
                                    }
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
                                        text: "Total trading volume per day per pair",
                                        style: {
                                            color: "black"
                                        }
                                    },
                                    stackLabels: {
                                        enabled: !1,
                                        style: {
                                            fontWeight: "bold",
                                            color: u.a.defaultOptions.title.style && u.a.defaultOptions.title.style.color || "gray"
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
                                        var e = this.y.toFixed(2);
                                        return ["TBTC", "WBTC", "HBTC", "renBTC"].includes(this.series.name) && (e = this.y.toFixed(8)), '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(e, "</b><br/>")
                                    }
                                },
                                legend: {
                                    enabled: !0,
                                    itemStyle: {
                                        fontWeight: "normal"
                                    }
                                }
                            },
                            piechartdata: {
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: !1,
                                    type: "pie"
                                },
                                title: {
                                    text: "Share of trading volume per pair for last week"
                                },
                                tooltip: {
                                    pointFormat: "{series.name}: <b> {point.percentage:.1f}% </b>"
                                },
                                accessibility: {
                                    point: {
                                        valueSuffix: "%"
                                    }
                                },
                                plotOptions: {
                                    pie: {
                                        allowPointSelect: !0,
                                        cursor: "pointer",
                                        dataLabels: {
                                            enabled: !0,
                                            style: {
                                                fontWeight: "normal"
                                            },
                                            format: "{point.name}: <b> {point.percentage:.1f}% </b>"
                                        }
                                    }
                                },
                                series: [],
                                legend: {
                                    enabled: !0
                                }
                            },
                            piepools: ["compound", "usdt", "y", "busd", "susd", "pax", "tbtc", "ren", "sbtc", "hbtc", "3pool"],
                            selectpair: "DAI ⇄ USDC",
                            volumes: [],
                            pairVolumes: {},
                            period: "week",
                            chart: null,
                            piechart: null,
                            loaded: !1
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(p["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.created();
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    watch: {
                        pairVolumes: function(e) {
                            this.mounted()
                        },
                        period: function(e) {
                            this.loadPieChart()
                        }
                    },
                    mounted: function() {
                        var e = this;
                        return Object(p["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.chart = e.$refs.highcharts.chart, e.chart.showLoading(), e.piechart = e.$refs.piecharts.chart, e.piechart.showLoading();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    computed: {
                        currencies: function() {
                            var e, t = Object.values(x["c"]).filter((function(e) {
                                    return "susd" != e
                                })).map((function(e) {
                                    return Object.keys(e)
                                })),
                                o = [],
                                a = Object(l["a"])(t);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var r, n = e.value,
                                        i = Object(l["a"])(n.entries());
                                    try {
                                        for (i.s(); !(r = i.n()).done;) {
                                            var s, p = Object(c["a"])(r.value, 2),
                                                d = p[0],
                                                u = p[1],
                                                h = Object(l["a"])(n.entries());
                                            try {
                                                for (h.s(); !(s = h.n()).done;) {
                                                    var m = Object(c["a"])(s.value, 2),
                                                        f = m[0],
                                                        v = m[1];
                                                    d < f && !o.includes("".concat(u, " ⇄ ").concat(v).toUpperCase()) && o.push("".concat(u, " ⇄ ").concat(v).toUpperCase())
                                                }
                                            } catch (y) {
                                                h.e(y)
                                            } finally {
                                                h.f()
                                            }
                                        }
                                    } catch (y) {
                                        i.e(y)
                                    } finally {
                                        i.f()
                                    }
                                }
                            } catch (y) {
                                a.e(y)
                            } finally {
                                a.f()
                            }
                            return o
                        },
                        pairVolume: function() {
                            return this.pairVolumes && this.pairVolumes[this.selectpair] ? this.pairVolumes[this.selectpair] : this.pairVolumes && this.pairVolumes[this.pairReverse(this.selectpair)] ? this.pairVolumes[this.pairReverse(this.selectpair)] : void 0
                        }
                    },
                    methods: {
                        created: function() {
                            var e = this;
                            return Object(p["a"])(regeneratorRuntime.mark((function t() {
                                var o, a, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return o = Object.keys(k["g"]).filter((function(e) {
                                                return "susd" != e && "y" != e
                                            })), t.next = 3, w["a"](o, !1, 1440);
                                        case 3:
                                            return a = w["f"].volumeData[1440], a = Object.keys(a).reduce((function(e, t) {
                                                return Object(s["a"])({}, e, Object(n["a"])({}, t, new Array(Math.max.apply(Math, Object(i["a"])(Object.values(a).map((function(e) {
                                                    return e.length
                                                })))) - a[t].length).fill({}).concat(a[t])))
                                            }), {}), r = Object.keys(a).filter((function(t) {
                                                return e.piepools.includes(t)
                                            })).reduce((function(e, t) {
                                                return Object(s["a"])({}, e, Object(n["a"])({}, t, a[t]))
                                            }), {}), o = Object.entries(r), t.next = 9, S.getVolumePerPair(r, o, k["g"]);
                                        case 9:
                                            e.pairVolumes = t.sent, console.log(e.pairVolumes, "PAIR VOLUMES");
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        mounted: function() {
                            var e = this;
                            return Object(p["a"])(regeneratorRuntime.mark((function t() {
                                var o, a, r, n, i;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            while (e.chart && e.chart.series[0]) e.chart.series[0].remove();
                                            for (o = 0, a = Object.entries(e.pairVolumes); o < a.length; o++) r = Object(c["a"])(a[o], 2), n = r[0], i = r[1], e.chart.addSeries({
                                                name: n,
                                                data: i
                                            }, !1, !1);
                                            e.chart.redraw(!1), e.loaded = !0, e.chart.hideLoading(), e.loadPieChart();
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        loadPieChart: function() {
                            var e = this;
                            this.piechart.showLoading(), this.piechart.series[0] && this.piechart.series[0].remove(), this.piechart.update({
                                title: {
                                    text: "Share of trading volume per pair for ".concat("all" != this.period ? "last " + this.period : "all time")
                                }
                            }, !1);
                            var t = {
                                    day: 864e5,
                                    get week() {
                                        return 7 * this.day
                                    },
                                    get month() {
                                        return 30.42 * this.day
                                    },
                                    all: Date.now()
                                },
                                o = 864e5,
                                a = Math.floor(Date.now() / o) * o,
                                r = Object.values(this.pairVolumes).map((function(o) {
                                    return o.filter((function(o) {
                                        return o[0] > a - t[e.period]
                                    })).map((function(e) {
                                        return e[1]
                                    })).reduce((function(e, t) {
                                        return +e + +t
                                    }), 0)
                                })),
                                n = [];
                            r.forEach((function(t, o, a) {
                                n.push({
                                    name: Object.keys(e.pairVolumes)[o],
                                    y: t / a.reduce((function(e, t) {
                                        return e + t
                                    }), 0) * 100
                                })
                            }));
                            var s = n.map((function(e) {
                                return e.y
                            })).indexOf(Math.max.apply(Math, Object(i["a"])(n.map((function(e) {
                                return e.y
                            })))));
                            n[s].sliced = !0, n[s].selected = !0, console.log(n, "PIE CHART DATA"), this.piechart.addSeries({
                                name: "Trading Volume %",
                                data: n
                            }, !0, !1), this.piechart.hideLoading()
                        },
                        selectPools: function() {
                            this.created()
                        },
                        pairReverse: function(e) {
                            return e.split(" ⇄ ")[1] + " ⇄ " + e.split(" ⇄ ")[0]
                        }
                    }
                },
                T = j,
                V = (o("c86d"), o("2877")),
                L = Object(V["a"])(T, a, r, !1, null, "0441788e", null);
            t["default"] = L.exports
        },
        9510: function(e, t, o) {
            e.exports = function() {
                return new Worker(o.p + "c25f8c283571356d3a3e.worker.js")
            }
        },
        c86d: function(e, t, o) {
            "use strict";
            var a = o("224a"),
                r = o.n(a);
            r.a
        },
        c975: function(e, t, o) {
            "use strict";
            var a = o("23e7"),
                r = o("4d64").indexOf,
                n = o("a640"),
                i = o("ae40"),
                s = [].indexOf,
                c = !!s && 1 / [1].indexOf(1, -0) < 0,
                l = n("indexOf"),
                p = i("indexOf", {
                    ACCESSORS: !0,
                    1: 0
                });
            a({
                target: "Array",
                proto: !0,
                forced: c || !l || !p
            }, {
                indexOf: function(e) {
                    return c ? s.apply(this, arguments) || 0 : r(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }
    }
]);
//# sourceMappingURL=chunk-51d10ca1.4dc0d3b6.js.map