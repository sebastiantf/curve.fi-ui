(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-ec3d3286", "chunk-2d0d3a28"], {
        "4bcd": function(t, e, a) {
            "use strict";
            var n = a("d622"),
                c = a.n(n);
            c.a
        },
        "5db7": function(t, e, a) {
            "use strict";
            var n = a("23e7"),
                c = a("a2bf"),
                o = a("7b0b"),
                r = a("50c4"),
                i = a("1c0b"),
                s = a("65f0");
            n({
                target: "Array",
                proto: !0
            }, {
                flatMap: function(t) {
                    var e, a = o(this),
                        n = r(a.length);
                    return i(t), e = s(a, 0), e.length = c(e, a, a, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e
                }
            })
        },
        "5e35": function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                return o
            })), a.d(e, "a", (function() {
                return r
            }));
            a("d3b7"), a("96cf");
            var n = a("1da1"),
                c = a("2fa3"),
                o = {
                    btcPrice: null
                };

            function r() {
                return i.apply(this, arguments)
            }

            function i() {
                return i = Object(n["a"])(regeneratorRuntime.mark((function t() {
                    var e, a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, c["q"](fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"), 300);
                            case 2:
                                return e = t.sent, t.next = 5, e.json();
                            case 5:
                                return a = t.sent, o.btcPrice = a.bitcoin.usd, t.abrupt("return", a.bitcoin.usd);
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), i.apply(this, arguments)
            }
        },
        6866: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("div", {
                        staticClass: "window white"
                    }, [a("div", {
                        staticClass: "chartoptions"
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.showbars,
                            expression: "showbars"
                        }],
                        attrs: {
                            id: "showbars",
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.showbars) ? t._i(t.showbars, null) > -1 : t.showbars
                        },
                        on: {
                            change: function(e) {
                                var a = t.showbars,
                                    n = e.target,
                                    c = !!n.checked;
                                if (Array.isArray(a)) {
                                    var o = null,
                                        r = t._i(a, o);
                                    n.checked ? r < 0 && (t.showbars = a.concat([o])) : r > -1 && (t.showbars = a.slice(0, r).concat(a.slice(r + 1)))
                                } else t.showbars = c
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "showbars"
                        }
                    }, [t._v("Show bars")]), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.showline,
                            expression: "showline"
                        }],
                        attrs: {
                            id: "showline",
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.showline) ? t._i(t.showline, null) > -1 : t.showline
                        },
                        on: {
                            change: function(e) {
                                var a = t.showline,
                                    n = e.target,
                                    c = !!n.checked;
                                if (Array.isArray(a)) {
                                    var o = null,
                                        r = t._i(a, o);
                                    n.checked ? r < 0 && (t.showline = a.concat([o])) : r > -1 && (t.showline = a.slice(0, r).concat(a.slice(r + 1)))
                                } else t.showline = c
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "showline"
                        }
                    }, [t._v("Show line")])]), a("highcharts", {
                        ref: "highcharts",
                        attrs: {
                            "constructor-type": "stockChart",
                            options: t.chartdata
                        }
                    })], 1), a("div", {
                        staticClass: "window white"
                    }, [a("highcharts", {
                        ref: "volumeperpoolcharts",
                        attrs: {
                            "constructor-type": "stockChart",
                            options: t.volumeperpooldata
                        }
                    })], 1), a("div", {
                        staticClass: "window white"
                    }, [a("highcharts", {
                        ref: "liquidityutilizationcharts",
                        attrs: {
                            options: t.liquidityutilizationdata
                        }
                    })], 1), a("div", {
                        staticClass: "window white"
                    }, [a("highcharts", {
                        ref: "coincharts",
                        attrs: {
                            "constructor-type": "stockChart",
                            options: t.coinchartdata
                        }
                    })], 1), a("div", {
                        staticClass: "window white"
                    }, [a("highcharts", {
                        ref: "piecharts",
                        attrs: {
                            options: t.piechartdata
                        }
                    })], 1), a("div", {
                        staticClass: "window white"
                    }, [a("highcharts", {
                        ref: "piecoinscharts",
                        attrs: {
                            options: t.piechartdatacoins
                        }
                    })], 1), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.totalDeposits > 0,
                            expression: "totalDeposits > 0"
                        }],
                        staticClass: "window white"
                    }, [a("highcharts", {
                        ref: "mypiecharts",
                        attrs: {
                            options: t.mypiechartdata
                        }
                    })], 1)])
                },
                c = [],
                o = (a("99af"), a("cb29"), a("4de4"), a("7db0"), a("c740"), a("5db7"), a("caad"), a("c975"), a("d81d"), a("13d5"), a("fb6a"), a("73d9"), a("b0c0"), a("b680"), a("4fad"), a("c1f9"), a("b64b"), a("d3b7"), a("07ac"), a("ac1f"), a("1276"), a("ddb0"), a("b85c")),
                r = a("3835"),
                i = a("ade3"),
                s = a("2909"),
                l = a("5530"),
                u = (a("96cf"), a("1da1")),
                d = a("2b0e"),
                p = a("ea7f"),
                h = a.n(p),
                b = a("0319"),
                f = a.n(b),
                m = a("d68a"),
                g = a.n(m),
                x = a("4452"),
                y = a("37d8"),
                w = a.n(y),
                v = a("a4e2"),
                D = a("5245"),
                C = a("2fa3"),
                O = a("51bf"),
                k = a("5e35");
            f()(h.a), g()(h.a), w()(h.a), h.a.setOptions({
                lang: {
                    loading: ""
                }
            });
            var E = {
                    components: {
                        highcharts: x["Chart"]
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
                                title: {
                                    text: "Total USD Deposits"
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
                                        },
                                        point: {
                                            events: {
                                                click: function(t) {
                                                    return function() {
                                                        var t = this.dataGroup ? this.dataGroup.start : this.index;
                                                        console.log(this, t, "INDEX")
                                                    }
                                                }()
                                            }
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
                                        text: "Total deposits",
                                        style: {
                                            color: "black"
                                        }
                                    },
                                    stackLabels: {
                                        enabled: !1,
                                        style: {
                                            fontWeight: "bold",
                                            color: h.a.defaultOptions.title.style && h.a.defaultOptions.title.style.color || "gray"
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
                                        return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(this.y.toFixed(2), "</b><br/>")
                                    }
                                },
                                legend: {
                                    enabled: !0
                                }
                            },
                            liquidityutilizationdata: {
                                chart: {
                                    panning: !0,
                                    zoomType: "x",
                                    panKey: "ctrl",
                                    type: "column",
                                    height: 600
                                },
                                title: {
                                    text: "Liquidity utilization %"
                                },
                                rangeSelector: {
                                    selected: 1
                                },
                                navigator: {
                                    enabled: !0,
                                    xAxis: {
                                        labels: {
                                            enabled: !1
                                        }
                                    }
                                },
                                plotOptions: {
                                    series: {
                                        dataGrouping: {
                                            forced: !0,
                                            units: [
                                                ["day", [1]]
                                            ]
                                        },
                                        point: {
                                            events: {
                                                click: function(t) {
                                                    return function() {
                                                        var t = this.dataGroup ? this.dataGroup.start : this.index;
                                                        console.log(this, t, "INDEX")
                                                    }
                                                }()
                                            }
                                        }
                                    },
                                    column: {
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
                                        text: "Liquidity utilization %",
                                        style: {
                                            color: "black"
                                        }
                                    },
                                    tickPixelInterval: 10
                                },
                                xAxis: {
                                    type: "datetime",
                                    labels: {
                                        style: {
                                            color: "black"
                                        },
                                        format: "{value:%e-%m-%y}"
                                    },
                                    categories: []
                                },
                                series: [],
                                tooltip: {
                                    valueDecimals: 5,
                                    pointFormatter: function() {
                                        return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(this.y.toFixed(2), "%</b><br/>")
                                    }
                                },
                                legend: {
                                    enabled: !0
                                }
                            },
                            volumeperpooldata: {
                                chart: {
                                    panning: !0,
                                    zoomType: "x",
                                    panKey: "ctrl",
                                    type: "column",
                                    height: 600
                                },
                                title: {
                                    text: "Total volume per pool in USD"
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
                                        },
                                        point: {
                                            events: {
                                                click: function(t) {
                                                    return function() {
                                                        var t = this.dataGroup ? this.dataGroup.start : this.index;
                                                        console.log(this, t, "INDEX")
                                                    }
                                                }()
                                            }
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
                                        text: "Total volume per pool in USD",
                                        style: {
                                            color: "black"
                                        }
                                    },
                                    stackLabels: {
                                        enabled: !1,
                                        style: {
                                            fontWeight: "bold",
                                            color: h.a.defaultOptions.title.style && h.a.defaultOptions.title.style.color || "gray"
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
                                        return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(this.y.toFixed(2), "</b><br/>")
                                    }
                                },
                                legend: {
                                    enabled: !0
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
                                    text: "Pool USD % holdings"
                                },
                                tooltip: {
                                    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
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
                                            formatter: function(t) {
                                                return function(e) {
                                                    return "<b>".concat(this.key, "</b>: \n\t\t\t                \t\t").concat(C["g"](t.allPools[this.key], 0), "$\n\t\t\t                \t\t(").concat(this.percentage.toFixed(2), "%)")
                                                }
                                            }(this)
                                        }
                                    }
                                },
                                series: []
                            },
                            piechartdatacoins: {
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: !1,
                                    type: "pie"
                                },
                                title: {
                                    text: "Pool coin % holdings"
                                },
                                tooltip: {
                                    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
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
                                            formatter: function(t) {
                                                return function(e) {
                                                    return "<b>".concat(this.key, "</b>: \n\t\t\t                \t\t").concat(C["g"](t.allCoins[this.key], 0), "$\n\t\t\t                \t\t(").concat(this.percentage.toFixed(2), "%)")
                                                }
                                            }(this)
                                        }
                                    }
                                },
                                series: []
                            },
                            mypiechartdata: {
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: !1,
                                    type: "pie"
                                },
                                title: {
                                    text: "My USD % holdings"
                                },
                                tooltip: {
                                    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
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
                                            formatter: function(t) {
                                                return function(e) {
                                                    return "<b>".concat(this.key, "</b>: \n\t\t\t                \t\t").concat(C["g"](t.balances["susd" == this.key ? "susdv2" : this.key], 0), "$\n\t\t\t                \t\t(").concat(this.percentage.toFixed(2), "%)")
                                                }
                                            }(this),
                                            filter: {
                                                property: "percentage",
                                                operator: ">",
                                                value: 0
                                            }
                                        }
                                    }
                                },
                                series: []
                            },
                            coinchartdata: {
                                chart: {
                                    panning: !0,
                                    zoomType: "x",
                                    panKey: "ctrl",
                                    type: "column",
                                    height: 600
                                },
                                title: {
                                    text: "Coin USD Deposits"
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
                                        },
                                        point: {
                                            events: {
                                                click: function(t) {
                                                    return function() {
                                                        var t = this.dataGroup ? this.dataGroup.start : this.index;
                                                        console.log(this, t, "INDEX")
                                                    }
                                                }()
                                            }
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
                                        text: "Total coin deposits",
                                        style: {
                                            color: "black"
                                        }
                                    },
                                    stackLabels: {
                                        enabled: !1,
                                        style: {
                                            fontWeight: "bold",
                                            color: h.a.defaultOptions.title.style && h.a.defaultOptions.title.style.color || "gray"
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
                                        return '<span style="color:'.concat(this.color, '">●</span> ').concat(this.series.name, ": <b>").concat(this.y.toFixed(2), "</b><br/>")
                                    }
                                },
                                legend: {
                                    enabled: !0
                                }
                            },
                            chart: null,
                            piechart: null,
                            piecoinschart: null,
                            mypiechart: null,
                            coinchart: null,
                            showbars: !0,
                            showline: !0,
                            allPools: null,
                            allCoins: null,
                            balances: {
                                compound: -1,
                                usdt: -1,
                                y: -1,
                                busd: -1,
                                susdv2: -1,
                                pax: -1,
                                tbtc: -1,
                                ren: -1,
                                sbtc: -1
                            },
                            totalDeposits: 0
                        }
                    },
                    computed: {
                        decodedGauges: function() {
                            return ["0x7ca5b0a2910B33e9759DC7dDB0413949071D7575", "0xBC89cd85491d81C6AD2954E6d0362Ee29fCa8F53", "0xFA712EE4788C042e2B7BB55E6cb8ec569C4530c1", "0x69Fb7c45726cfE2baDeE8317005d3F94bE838840", "0x64E3C23bfc40722d3B649844055F1D51c1ac041d", "0xB1F2cdeC61db658F091671F5f199635aEF202CAC", "0xA90996896660DEcC6E997655E065b23788857849", "0x705350c4BcD35c9441419DdD5d2f097d7a55410F", "0x4c18E409Dc8619bFb6a1cB56D114C3f592E0aE79", "0xbFcF63294aD7105dEa65aA58F8AE5BE2D9d0952A"]
                        },
                        poolInfo: function() {
                            return {
                                compound: {
                                    swap: "0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56",
                                    swap_token: "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
                                    name: "compound",
                                    gauge: "0x7ca5b0a2910B33e9759DC7dDB0413949071D7575"
                                },
                                usdt: {
                                    swap: "0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C",
                                    swap_token: "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23",
                                    name: "usdt",
                                    gauge: "0xBC89cd85491d81C6AD2954E6d0362Ee29fCa8F53"
                                },
                                y: {
                                    swap: "0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51",
                                    swap_token: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
                                    name: "y",
                                    gauge: "0xFA712EE4788C042e2B7BB55E6cb8ec569C4530c1"
                                },
                                busd: {
                                    swap: "0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27",
                                    swap_token: "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
                                    name: "busd",
                                    gauge: "0x69Fb7c45726cfE2baDeE8317005d3F94bE838840"
                                },
                                susdv2: {
                                    swap: "0xA5407eAE9Ba41422680e2e00537571bcC53efBfD",
                                    swap_token: "0xC25a3A3b969415c80451098fa907EC722572917F",
                                    name: "susdv2",
                                    gauge: "0xA90996896660DEcC6E997655E065b23788857849"
                                },
                                pax: {
                                    swap: "0x06364f10B501e868329afBc005b3492902d6C763",
                                    swap_token: "0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8",
                                    name: "pax",
                                    gauge: "0x64E3C23bfc40722d3B649844055F1D51c1ac041d"
                                },
                                ren: {
                                    swap: "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
                                    swap_token: "0x49849C98ae39Fff122806C06791Fa73784FB3675",
                                    name: "ren",
                                    gauge: "0xB1F2cdeC61db658F091671F5f199635aEF202CAC"
                                },
                                sbtc: {
                                    swap: "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714",
                                    swap_token: "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
                                    name: "sbtc",
                                    gauge: "0x705350c4BcD35c9441419DdD5d2f097d7a55410F"
                                },
                                hbtc: {
                                    swap: "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
                                    swap_token: "0xb19059ebb43466C323583928285a49f558E572Fd",
                                    name: "hbtc",
                                    gauge: "0x4c18E409Dc8619bFb6a1cB56D114C3f592E0aE79"
                                },
                                "3pool": {
                                    swap: "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                                    swap_token: "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
                                    name: "3pool",
                                    gauge: "0xbFcF63294aD7105dEa65aA58F8AE5BE2D9d0952A"
                                }
                            }
                        }
                    },
                    watch: {
                        showbars: function(t) {
                            if (0 != t || this.showline) {
                                var e = "show";
                                t || (e = "hide");
                                for (var a = 0; a < this.chart.series.length - 2; a++) this.chart.series[a][e]()
                            }
                        },
                        showline: function(t) {
                            if (0 != t || this.showbars) {
                                var e = "show";
                                t || (e = "hide"), this.chart.series[this.chart.series.length - 2][e]()
                            }
                        }
                    },
                    created: function() {
                        var t = this;
                        this.$watch((function() {
                            return O["f"].multicall && O["f"].default_account
                        }), (function(e, a) {
                            e && e.toLowerCase() == a && a.toLowerCase() || e && t.showBalances()
                        }), {
                            immediate: !0
                        })
                    },
                    mounted: function() {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function e() {
                            var a, n, c, u, d, p, h, b, f, m, g, x, y, w, O, k, E, F, A, B, j, S, _, L, P, G, I, T, z, M, q, U, $, N, R, X, V, W, J, K, H, Q, Y, Z, tt, et, at, nt, ct, ot;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return t.chart = t.$refs.highcharts.chart, t.piechart = t.$refs.piecharts.chart, t.piecoinschart = t.$refs.piecoinscharts.chart, t.mypiechart = t.$refs.mypiecharts.chart, t.coinchart = t.$refs.coincharts.chart, t.liquidityutilizationchart = t.$refs.liquidityutilizationcharts.chart, t.volumeperpoolchart = t.$refs.volumeperpoolcharts.chart, t.chart.showLoading(), t.piechart.showLoading(), t.mypiechart.showLoading(), t.coinchart.showLoading(), t.liquidityutilizationchart.showLoading(), t.volumeperpoolchart.showLoading(), a = Object.keys(D["g"]).filter((function(t) {
                                            return "susd" != t && "y" != t && "tbtc" != t
                                        })), e.next = 16, v["a"](a, !0, 1440);
                                    case 16:
                                        return n = v["f"].volumeData[1440], e.next = 19, C["q"](fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1589587198&to=".concat(Date.now() / 1e3 | 0)));
                                    case 19:
                                        return c = e.sent, e.next = 22, c.json();
                                    case 22:
                                        for (c = e.sent, u = 0, d = ["ren", "sbtc", "hbtc"]; u < d.length; u++) p = d[u], n[p] = n[p].map((function(t) {
                                            return t.balances = t.balances.map((function(e) {
                                                return e * v["b"](t.timestamp, c.prices)
                                            })), t
                                        }));
                                        for (n = Object.keys(n).reduce((function(t, e) {
                                                return Object(l["a"])({}, t, Object(i["a"])({}, e, new Array(Math.max.apply(Math, Object(s["a"])(Object.values(n).map((function(t) {
                                                    return t.length
                                                })))) - n[e].length).fill({}).concat(n[e])))
                                            }), {}), console.log(n, "THE DATA"), h = {}, b = {}, f = {}, m = function() {
                                                var t = Object(r["a"])(x[g], 2),
                                                    e = t[0],
                                                    a = t[1];
                                                h[e] = [], b[e] = [], f[e] = [];
                                                var n, c = Object(o["a"])(a);
                                                try {
                                                    var i = function() {
                                                        var t = n.value;
                                                        if (!t.timestamp) return "continue";
                                                        var a = t.balances.map((function(a, n) {
                                                                return a * t.rates[n] / 1e18 / D["g"]["susd" == e ? "susdv2" : e].coin_precisions[n]
                                                            })),
                                                            c = Object.entries(t.volume).map((function(t) {
                                                                var a = Object(r["a"])(t, 2),
                                                                    n = a[0],
                                                                    c = a[1];
                                                                return c[0] / D["g"]["susd" == e ? "susdv2" : e].coin_precisions[n.split("-")[0]]
                                                            })),
                                                            o = a.reduce((function(t, e) {
                                                                return t + e
                                                            }), 0),
                                                            i = c.reduce((function(t, e) {
                                                                return t + e
                                                            }), 0);
                                                        h[e].push([1e3 * t.timestamp, o]), f[e].push([1e3 * t.timestamp, i]), b[e].push([1e3 * t.timestamp, 100 * i / o])
                                                    };
                                                    for (c.s(); !(n = c.n()).done;) i()
                                                } catch (s) {
                                                    c.e(s)
                                                } finally {
                                                    c.f()
                                                }
                                            }, g = 0, x = Object.entries(n); g < x.length; g++) m();
                                        y = 0, w = Object.entries(h);
                                    case 32:
                                        if (!(y < w.length)) {
                                            e.next = 40;
                                            break
                                        }
                                        if (O = Object(r["a"])(w[y], 2), k = O[0], E = O[1], !["tbtc"].includes(k)) {
                                            e.next = 36;
                                            break
                                        }
                                        return e.abrupt("continue", 37);
                                    case 36:
                                        t.chart.addSeries({
                                            type: "column",
                                            name: k,
                                            data: E
                                        }, !1, !1);
                                    case 37:
                                        y++, e.next = 32;
                                        break;
                                    case 40:
                                        F = 0, A = Object.entries(f);
                                    case 41:
                                        if (!(F < A.length)) {
                                            e.next = 49;
                                            break
                                        }
                                        if (B = Object(r["a"])(A[F], 2), j = B[0], S = B[1], !["tbtc"].includes(j)) {
                                            e.next = 45;
                                            break
                                        }
                                        return e.abrupt("continue", 46);
                                    case 45:
                                        t.volumeperpoolchart.addSeries({
                                            type: "column",
                                            name: j,
                                            data: S
                                        }, !0, !1);
                                    case 46:
                                        F++, e.next = 41;
                                        break;
                                    case 49:
                                        t.volumeperpoolchart.hideLoading(), _ = Math.max.apply(Math, Object(s["a"])(Object.values(b).map((function(t) {
                                            return t.length
                                        })))), t.liquidityutilizationchart.update({
                                            xAxis: {
                                                categories: b.usdt.map((function(t) {
                                                    return t[0]
                                                }))
                                            }
                                        }), L = {}, P = 0, G = Object.entries(b);
                                    case 54:
                                        if (!(P < G.length)) {
                                            e.next = 64;
                                            break
                                        }
                                        if (I = Object(r["a"])(G[P], 2), T = I[0], z = I[1], !["tbtc"].includes(T)) {
                                            e.next = 58;
                                            break
                                        }
                                        return e.abrupt("continue", 61);
                                    case 58:
                                        M = z.map((function(t) {
                                            return t[1]
                                        })), L[T] = M.reduce((function(t, e) {
                                            return +t + +e || 0
                                        }), 0) / M.length, t.liquidityutilizationchart.addSeries({
                                            type: "column",
                                            name: T,
                                            data: new Array(_ - M.length).fill(0).concat(M)
                                        }, !0, !1);
                                    case 61:
                                        P++, e.next = 54;
                                        break;
                                    case 64:
                                        t.liquidityutilizationchart.series[1].hide(), t.liquidityutilizationchart.xAxis[0].setExtremes(Date.now() - 3456e5, Date.now() / 1e3), t.liquidityutilizationchart.hideLoading(), q = ["DAI", "USDC", "USDT", "TUSD", "BUSD", "SUSD", "PAX", "renBTC", "WBTC", "sBTC", "hBTC"], U = q.reduce((function(t, e) {
                                            return t[e] = [], t
                                        }), {}), $ = function() {
                                            var t = Object(r["a"])(R[N], 2),
                                                e = t[0],
                                                a = t[1];
                                            if ("tbtc" == e) return "continue";
                                            var n, c = Object(o["a"])(a);
                                            try {
                                                var i = function() {
                                                    var t = n.value;
                                                    if (!t.timestamp) return "continue";
                                                    var a, c = t.balances.map((function(a, n) {
                                                            return a * t.rates[n] / 1e18 / D["g"]["susd" == e ? "susdv2" : e].coin_precisions[n]
                                                        })),
                                                        i = Object(o["a"])(c.entries());
                                                    try {
                                                        for (i.s(); !(a = i.n()).done;) {
                                                            var s = Object(r["a"])(a.value, 2),
                                                                l = s[0],
                                                                u = s[1];
                                                            "busd" == e && 3 == l && (l = 4), "susd" == e && 3 == l && (l = 5), "pax" == e && 3 == l && (l = 6), ["ren", "sbtc"].includes(e) && (l += 7), "hbtc" == e && 0 == l && (l = 10), "hbtc" == e && 1 == l && (l = 8);
                                                            var d = U[q[l]].find((function(e) {
                                                                return e[0] == 1e3 * t.timestamp
                                                            }));
                                                            void 0 !== d ? d[1] += u : U[q[l]].push([1e3 * t.timestamp, u])
                                                        }
                                                    } catch (p) {
                                                        i.e(p)
                                                    } finally {
                                                        i.f()
                                                    }
                                                };
                                                for (c.s(); !(n = c.n()).done;) i()
                                            } catch (s) {
                                                c.e(s)
                                            } finally {
                                                c.f()
                                            }
                                        }, N = 0, R = Object.entries(n);
                                    case 71:
                                        if (!(N < R.length)) {
                                            e.next = 78;
                                            break
                                        }
                                        if (X = $(), "continue" !== X) {
                                            e.next = 75;
                                            break
                                        }
                                        return e.abrupt("continue", 75);
                                    case 75:
                                        N++, e.next = 71;
                                        break;
                                    case 78:
                                        for (V = 0, W = Object.entries(U); V < W.length; V++) J = Object(r["a"])(W[V], 2), K = J[0], H = J[1], H.sort((function(t, e) {
                                            return t[0] - e[0]
                                        })), t.coinchart.addSeries({
                                            type: "column",
                                            name: K,
                                            data: H
                                        }, !1, !1);
                                        t.chart.hideLoading(), t.chart.redraw(), t.coinchart.hideLoading(), t.coinchart.redraw(), Q = Object.keys(h).reduce((function(t, e) {
                                            return Object(l["a"])({}, t, Object(i["a"])({}, e, new Array(Math.max.apply(Math, Object(s["a"])(Object.values(h).map((function(t) {
                                                return t.length
                                            })))) - h[e].length).fill({}).concat(h[e])))
                                        }), {}), Y = [], Z = Object(o["a"])(Q.compound.entries());
                                        try {
                                            for (et = function() {
                                                    var t = Object(r["a"])(tt.value, 2),
                                                        e = t[0],
                                                        a = (t[1], Object.values(Q).map((function(t) {
                                                            return t[e]
                                                        })).filter((function(t) {
                                                            return t[0]
                                                        })));
                                                    Y.push([a[0][0], a.map((function(t) {
                                                        return t[1]
                                                    })).reduce((function(t, e) {
                                                        return t + e
                                                    }), 0)])
                                                }, Z.s(); !(tt = Z.n()).done;) et()
                                        } catch (rt) {
                                            Z.e(rt)
                                        } finally {
                                            Z.f()
                                        }
                                        t.chart.addSeries({
                                            type: "line",
                                            name: "Total USD Deposits",
                                            data: Y
                                        }), t.allPools = Object.fromEntries(Object.entries(h).filter((function(t) {
                                            var e = Object(r["a"])(t, 2),
                                                a = e[0];
                                            e[1];
                                            return !["tbtc"].includes(a)
                                        })).map((function(t) {
                                            var e = Object(r["a"])(t, 2),
                                                a = e[0];
                                            e[1];
                                            return [a, h[a][h[a].length - 1][1]]
                                        }))), at = Object.keys(h).filter((function(t) {
                                            return !["tbtc"].includes(t)
                                        })).map((function(t) {
                                            return h[t][h[t].length - 1][1]
                                        })), nt = at.reduce((function(t, e) {
                                            return t + e
                                        }), 0), ct = at.map((function(t) {
                                            return t / nt * 100
                                        })), ct = ct.map((function(t, e) {
                                            return {
                                                name: Object.keys(h).filter((function(t) {
                                                    return !["tbtc"].includes(t)
                                                }))[e],
                                                y: ct[e]
                                            }
                                        })), ot = ct.map((function(t) {
                                            return t.y
                                        })).indexOf(Math.max.apply(Math, Object(s["a"])(ct.map((function(t) {
                                            return t.y
                                        }))))), ct[ot].sliced = !0, ct[ot].selected = !0, t.piechart.addSeries({
                                            name: "Pool %",
                                            data: ct
                                        }, !0, !1), t.piechart.hideLoading(), t.allCoins = Object.fromEntries(Object.entries(U).filter((function(t) {
                                            var e = Object(r["a"])(t, 2),
                                                a = e[0];
                                            e[1];
                                            return !["tbtc"].includes(a)
                                        })).map((function(t) {
                                            var e = Object(r["a"])(t, 2),
                                                a = e[0];
                                            e[1];
                                            return [a, U[a][U[a].length - 1][1]]
                                        }))), at = Object.keys(U).filter((function(t) {
                                            return !["tbtc"].includes(t.toLowerCase())
                                        })).map((function(t) {
                                            return U[t][U[t].length - 1][1]
                                        })), nt = at.reduce((function(t, e) {
                                            return t + e
                                        }), 0), ct = at.map((function(t) {
                                            return t / nt * 100
                                        })), ct = ct.map((function(t, e) {
                                            return {
                                                name: Object.keys(U).filter((function(t) {
                                                    return !["tbtc"].includes(t)
                                                }))[e],
                                                y: ct[e]
                                            }
                                        })), ot = ct.map((function(t) {
                                            return t.y
                                        })).indexOf(Math.max.apply(Math, Object(s["a"])(ct.map((function(t) {
                                            return t.y
                                        }))))), ct[ot].sliced = !0, ct[ot].selected = !0, t.piecoinschart.addSeries({
                                            name: "Coin %",
                                            data: ct
                                        }, !0, !1), t.piecoinschart.hideLoading(), t.chart.update({
                                            title: {
                                                text: "Total USD Deposits ".concat(C["g"](Y[Y.length - 1][1], 0), "$")
                                            }
                                        });
                                    case 109:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    methods: {
                        showBalances: function() {
                            var t = this;
                            return Object(u["a"])(regeneratorRuntime.mark((function e() {
                                var a, n, c, i, l, u, p, h, b, f, m, g, x, y;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (a = ["compound", "usdt", "y", "busd", "susdv2", "pax", "ren", "sbtc", "hbtc", "3pool"], O["f"].default_account) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return O["f"].contracts.compound = O["f"], n = a.flatMap((function(t) {
                                                return [
                                                    [D["g"][t].token_address, "0x70a08231000000000000000000000000" + O["f"].default_account.slice(2)],
                                                    [D["g"][t].swap_address, "0xbb7b8b80"]
                                                ]
                                            })), n.push([D["g"].susdv2.sCurveRewards_address, "0x70a08231000000000000000000000000" + O["f"].default_account.slice(2)]), n.push([D["g"].sbtc.sCurveRewards_address, "0x70a08231000000000000000000000000" + O["f"].default_account.slice(2)]), n.push([D["g"].iearn.sCurveRewards_address, "0x70a08231000000000000000000000000" + O["f"].default_account.slice(2)]), c = n.length, n.push.apply(n, Object(s["a"])(t.decodedGauges.map((function(t) {
                                                return [t, "0x70a08231000000000000000000000000" + O["f"].default_account.slice(2)]
                                            })))), e.next = 12, O["f"].multicall.methods.aggregate(n).call();
                                        case 12:
                                            return i = e.sent, l = i[1].map((function(t) {
                                                return web3.eth.abi.decodeParameter("uint256", t)
                                            })), e.next = 16, C["q"](k["a"]());
                                        case 16:
                                            u = e.sent, p = l.slice(c), l = l.slice(0, c), C["d"](l, 2).slice(0, a.length).map((function(e, n) {
                                                var c = a[n];
                                                d["a"].set(t.balances, c, +e[0] * +e[1] / 1e36), ["tbtc", "ren", "sbtc", "hbtc"].includes(c) && d["a"].set(t.balances, c, t.balances[c] * u)
                                            })), h = l.length, d["a"].set(t.balances, "susdv2", t.balances.susdv2 + +l[h - 3] * l[9] / 1e36), d["a"].set(t.balances, "sbtc", t.balances.sbtc + +l[h - 2] * l[15] / 1e36 * u), d["a"].set(t.balances, "y", t.balances.y + +l[h - 1] * l[5] / 1e36), b = Object(o["a"])(Object.values(t.poolInfo).entries());
                                            try {
                                                for (m = function() {
                                                        var e = Object(r["a"])(f.value, 2),
                                                            a = e[0],
                                                            o = e[1],
                                                            i = n.slice(c),
                                                            s = +p[i.findIndex((function(t) {
                                                                return t[0] == o.gauge
                                                            }))] * (l[2 * a + 1] / 1e18);
                                                        ["ren", "sbtc", "hbtc"].includes(o.name) && (s *= u), d["a"].set(t.balances, o.name, t.balances[o.name] + s / 1e18)
                                                    }, b.s(); !(f = b.n()).done;) m()
                                            } catch (w) {
                                                b.e(w)
                                            } finally {
                                                b.f()
                                            }
                                            g = Object.fromEntries(Object.entries(t.balances).map((function(t) {
                                                var e = Object(r["a"])(t, 2),
                                                    a = e[0],
                                                    n = e[1];
                                                return [a, n > 0 ? n : 0]
                                            }))), t.totalDeposits = Object.values(g).reduce((function(t, e) {
                                                return t + e
                                            }), 0), t.totalDeposits > 0 && (x = Object.keys(g).map((function(e, a) {
                                                return {
                                                    name: "susdv2" == e ? "susd" : e,
                                                    y: g[e] / t.totalDeposits
                                                }
                                            })), y = x.map((function(t) {
                                                return t.y
                                            })).indexOf(Math.max.apply(Math, Object(s["a"])(x.map((function(t) {
                                                return t.y
                                            }))))), x[y].sliced = !0, x[y].selected = !0, t.mypiechart.addSeries({
                                                name: "My pool %",
                                                data: x
                                            }, !0, !1)), t.mypiechart.hideLoading();
                                        case 30:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                },
                F = E,
                A = (a("4bcd"), a("2877")),
                B = Object(A["a"])(F, n, c, !1, null, "b4f56c8a", null);
            e["default"] = B.exports
        },
        "73d9": function(t, e, a) {
            var n = a("44d2");
            n("flatMap")
        },
        a2bf: function(t, e, a) {
            "use strict";
            var n = a("e8b5"),
                c = a("50c4"),
                o = a("0366"),
                r = function(t, e, a, i, s, l, u, d) {
                    var p, h = s,
                        b = 0,
                        f = !!u && o(u, d, 3);
                    while (b < i) {
                        if (b in a) {
                            if (p = f ? f(a[b], b, e) : a[b], l > 0 && n(p)) h = r(t, e, p, c(p.length), h, l - 1) - 1;
                            else {
                                if (h >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                                t[h] = p
                            }
                            h++
                        }
                        b++
                    }
                    return h
                };
            t.exports = r
        },
        c975: function(t, e, a) {
            "use strict";
            var n = a("23e7"),
                c = a("4d64").indexOf,
                o = a("a640"),
                r = a("ae40"),
                i = [].indexOf,
                s = !!i && 1 / [1].indexOf(1, -0) < 0,
                l = o("indexOf"),
                u = r("indexOf", {
                    ACCESSORS: !0,
                    1: 0
                });
            n({
                target: "Array",
                proto: !0,
                forced: s || !l || !u
            }, {
                indexOf: function(t) {
                    return s ? i.apply(this, arguments) || 0 : c(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        d622: function(t, e, a) {}
    }
]);
//# sourceMappingURL=chunk-ec3d3286.f7ad8908.js.map