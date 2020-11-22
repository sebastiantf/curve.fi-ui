(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-5d94b1eb"], {
        "01fd": function(t, e, r) {},
        "07ac": function(t, e, r) {
            var s = r("23e7"),
                o = r("6f53").values;
            s({
                target: "Object",
                stat: !0
            }, {
                values: function(t) {
                    return o(t)
                }
            })
        },
        1100: function(t, e, r) {
            "use strict";
            var s = r("01fd"),
                o = r.n(s);
            o.a
        },
        a4e2: function(t, e, r) {
            "use strict";
            r.d(e, "f", (function() {
                return h
            })), r.d(e, "b", (function() {
                return p
            })), r.d(e, "a", (function() {
                return f
            })), r.d(e, "e", (function() {
                return _
            })), r.d(e, "c", (function() {
                return w
            })), r.d(e, "d", (function() {
                return k
            })), r.d(e, "g", (function() {
                return P
            }));
            r("99af"), r("4de4"), r("7db0"), r("caad"), r("d81d"), r("13d5"), r("fb6a"), r("4fad"), r("c1f9"), r("d3b7"), r("07ac"), r("ac1f"), r("2532"), r("3ca3"), r("1276"), r("ddb0");
            var s = r("b85c"),
                o = (r("96cf"), r("1da1")),
                n = r("3835"),
                a = r("5530"),
                u = r("ade3"),
                c = r("2b0e"),
                i = r("5245"),
                l = r("901e"),
                d = r.n(l),
                v = function() {
                    var t;
                    return t = {
                        compound: [],
                        usdt: [],
                        y: [],
                        busd: [],
                        susd: [],
                        pax: [],
                        tbtc: [],
                        ren: [],
                        sbtc: [],
                        hbtc: [],
                        "3pool": [],
                        gusd: [],
                        husd: [],
                        usdk: [],
                        usdn: [],
                        linkusd: [],
                        musd: [],
                        rsv: []
                    }, Object(u["a"])(t, "tbtc", []), Object(u["a"])(t, "dusd", []), t
                },
                h = c["a"].observable({
                    volumes: Object(a["a"])({}, Object.fromEntries(Object.entries(v()).map((function(t) {
                        var e = Object(n["a"])(t, 2),
                            r = e[0];
                        e[1];
                        return [r, [-1, -1]]
                    })))),
                    volumeData: {
                        5: Object(a["a"])({}, v()),
                        30: Object(a["a"])({}, v()),
                        1440: Object(a["a"])({}, v())
                    },
                    allVolume: Object(a["a"])({}, v())
                });

            function p(t, e) {
                var r = e.find((function(e) {
                    return Date.parse(e[0]) / 1e3 - t > 0
                }));
                return void 0 === r ? e[e.length - 1][1] : r.price
            }

            function f(t) {
                return m.apply(this, arguments)
            }

            function m() {
                return m = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                    var r, o, a, u, c, i, l, d, v, f, m, _ = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return r = _.length > 1 && void 0 !== _[1] && _[1], o = _.length > 2 && void 0 !== _[2] ? _[2] : 5, Array.isArray(e) || (e = [e]), e = e.map((function(t) {
                                    return "iearn" == t ? "y" : "susdv2" == t ? "susd" : "ren2" == t ? "ren" : "rens" == t ? "sbtc" : t
                                })), r || (e = e.filter((function(t) {
                                    return !h.volumeData[o][t].length
                                }))), a = e.map((function(t) {
                                    return "ren" == t && (t = "ren2"), "sbtc" == t && (t = "rens"), fetch("".concat(window.domain, "/raw-stats/").concat(t, "-").concat(o, "m.json"))
                                })), (e.includes("tbtc") || e.includes("ren") || e.includes("sbtc") || e.includes("hbtc")) && a.push(fetch("\n\t\t\thttps://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1589587198&to=".concat(Date.now() / 1e3 | 0))), t.next = 9, Promise.all(a);
                            case 9:
                                return a = t.sent, t.next = 12, Promise.all(a.map((function(t) {
                                    return t.json()
                                })));
                            case 12:
                                u = t.sent, c = u[u.length - 1], (e.includes("tbtc") || e.includes("ren") || e.includes("hbtc")) && (u = u.slice(0, -1)), i = Object(s["a"])(u.entries());
                                try {
                                    for (i.s(); !(l = i.n()).done;) d = Object(n["a"])(l.value, 2), v = d[0], f = d[1], m = e[v], ["tbtc", "ren", "sbtc", "hbtc"].includes(m) && (f = f.map((function(t) {
                                        return t.volume = Object.fromEntries(Object.entries(t.volume).map((function(e) {
                                            var r = Object(n["a"])(e, 2),
                                                s = r[0],
                                                o = r[1];
                                            return [s, o.map((function(e) {
                                                return e * p(t.timestamp, c.prices)
                                            }))]
                                        }))), t
                                    }))), h.volumeData[o][m] = f
                                } catch (b) {
                                    i.e(b)
                                } finally {
                                    i.f()
                                }
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), m.apply(this, arguments)
            }

            function _(t) {
                return b.apply(this, arguments)
            }

            function b() {
                return b = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                    var r, s, o, a, u, i, l, d, v, p, f, m, _ = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (r = _.length > 1 && void 0 !== _[1] && _[1], Array.isArray(e) || (e = [e]), e = e.map((function(t) {
                                        return "iearn" == t ? "y" : "susdv2" == t ? "susd" : "ren" == t ? "ren2" : "sbtc" == t ? "rens" : t
                                    })), Object.values(h.volumes).filter((function(t) {
                                        return -1 != t[0]
                                    })).length != e.length || r) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return");
                            case 5:
                                return t.next = 7, Promise.all([fetch("".concat(window.domain, "/raw-stats/apys.json")), fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")]);
                            case 7:
                                return s = t.sent, t.next = 10, Promise.all(s.map((function(t) {
                                    return t.json()
                                })));
                            case 10:
                                for (o = t.sent, a = Object(n["a"])(o, 2), u = a[0], i = a[1], i = i.bitcoin.usd, l = 0, d = Object.entries(h.volumes); l < d.length; l++) v = Object(n["a"])(d[l], 2), p = v[0], f = v[1], -1 == f[0] && (m = "ren" == p ? u.volume.ren2 : "sbtc" == p ? u.volume.rens : u.volume[p], ["tbtc", "ren", "sbtc", "hbtc"].includes(p) && (m *= i), c["a"].set(h.volumes[p], 0, m || 0), c["a"].set(h.volumes[p], 1, "ren" == p ? u.volume.ren2 : "sbtc" == p ? u.volume.rens : u.volume[p]));
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), b.apply(this, arguments)
            }

            function w(t) {
                return g.apply(this, arguments)
            }

            function g() {
                return g = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                    var r, o, a, u, c, l, d = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (r = d.length > 1 && void 0 !== d[1] && d[1], o = d.length > 2 && void 0 !== d[2] ? d[2] : 30, e = "iearn" == e ? "y" : "susdv2" == e ? "susd" : e, !h.allVolume[e].length || r) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return");
                            case 5:
                                return t.next = 7, f(e, r, o);
                            case 7:
                                a = h.volumeData[o][e], h.volumeData[e] = a, u = Object(s["a"])(a);
                                try {
                                    for (u.s(); !(c = u.n()).done;) l = c.value, h.allVolume[e].push([1e3 * l.timestamp, Object.entries(l.volume).map((function(t) {
                                        var r = Object(n["a"])(t, 2),
                                            s = r[0],
                                            o = r[1],
                                            a = i["g"]["susd" == e ? "susdv2" : e].coin_precisions[s.split("-")[0]];
                                        return o[0] / a
                                    })).reduce((function(t, e) {
                                        return t + e
                                    }), 0)])
                                } catch (v) {
                                    u.e(v)
                                } finally {
                                    u.f()
                                }
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), g.apply(this, arguments)
            }

            function k(t) {
                return C.apply(this, arguments)
            }

            function C() {
                return C = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                    var r, s, o, n, a, u = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (r = u.length > 1 && void 0 !== u[1] && u[1], s = u.length > 2 && void 0 !== u[2] ? u[2] : 30, e = "iearn" == e ? "y" : "susdv2" == e ? "susd" : e, h.volumeData[s][e].length) {
                                    t.next = 6;
                                    break
                                }
                                return t.next = 6, f(e, r, s);
                            case 6:
                                for (o = [], n = function(t) {
                                        var r = h.volumeData[s][e],
                                            n = r[t],
                                            a = r[t - 1],
                                            u = n.balances.map((function(t, r) {
                                                return t / i["g"]["susd" == e ? "susdv2" : e].coin_precisions[r]
                                            })),
                                            c = n.rates.map((function(t, e) {
                                                return t / a.rates[e] - 1
                                            })),
                                            l = u.map((function(t, e) {
                                                return t * c[e]
                                            })),
                                            d = l.reduce((function(t, e) {
                                                return t + e
                                            }), 0),
                                            v = u.reduce((function(t, e) {
                                                return t + e
                                            }), 0),
                                            p = d / v,
                                            f = n.timestamp - a.timestamp,
                                            m = Math.pow(1 + p, 31536e3 / f);
                                        o.push([1e3 * n.timestamp, 100 * (m - 1)])
                                    }, a = 1; a < h.volumeData[s][e].length; a++) n(a);
                                return t.abrupt("return", o);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), C.apply(this, arguments)
            }

            function P() {
                for (var t = d()(0), e = 0, r = Object.values(h.volumes); e < r.length; e++) {
                    var s = r[e];
                    t = t.plus(d()(s[0]))
                }
                return t
            }
        },
        bda3: function(t, e, r) {
            "use strict";
            r.r(e);
            var s, o = function() {
                    var t, e, r = this,
                        s = r.$createElement,
                        o = r._self._c || s;
                    return o("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [o("div", {
                        staticClass: "screencontainer"
                    }, [o("div", {
                        staticClass: "top-menu-bar"
                    }, [o("label", {
                        staticClass: "border-menu",
                        attrs: {
                            for: "hamburger"
                        }
                    }), o("input", {
                        attrs: {
                            type: "checkbox",
                            id: "hamburger"
                        }
                    }), o("div", {
                        staticClass: "poolsdropdown"
                    }, [o("button", {
                        staticClass: "simplebutton",
                        class: {
                            "loading line": !r.initializedContracts && !["Stats", "FAQ", "Donate"].includes(r.$route.name)
                        }
                    }, [r._v("[" + r._s(r.poolMenu[r.currentPool]) + "]")]), o("div", {
                        staticClass: "dropdown"
                    }, [o("router-link", {
                        class: {
                            selected: "compound" == r.currentPool
                        },
                        attrs: {
                            to: "/compound/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("Compound")]), o("router-link", {
                        class: {
                            selected: "usdt" == r.currentPool
                        },
                        attrs: {
                            to: "/usdt/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("USDT")]), o("router-link", {
                        class: {
                            selected: "pax" == r.currentPool
                        },
                        attrs: {
                            to: "/pax/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("PAX")]), o("router-link", {
                        class: {
                            selected: "iearn" == r.currentPool
                        },
                        attrs: {
                            to: "/iearn/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("Y")]), o("router-link", {
                        class: {
                            selected: "busd" == r.currentPool
                        },
                        attrs: {
                            to: "/busd/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("bUSD")]), o("router-link", {
                        class: {
                            selected: "susdv2" == r.currentPool
                        },
                        attrs: {
                            to: "/susdv2/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("sUSD")]), o("router-link", {
                        class: {
                            selected: "ren" == r.currentPool
                        },
                        attrs: {
                            to: "/ren/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("renBTC")]), o("router-link", {
                        class: {
                            selected: "sbtc" == r.currentPool
                        },
                        attrs: {
                            to: "/sbtc/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("sBTC")]), o("router-link", {
                        class: {
                            selected: "hbtc" == r.currentPool
                        },
                        attrs: {
                            to: "/hbtc/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("HBTC")]), o("router-link", {
                        class: {
                            selected: "3pool" == r.currentPool
                        },
                        attrs: {
                            to: "/3pool/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("3pool")]), o("router-link", {
                        class: {
                            selected: "gusd" == r.currentPool
                        },
                        attrs: {
                            to: "/gusd/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("gusd")]), o("router-link", {
                        class: {
                            selected: "husd" == r.currentPool
                        },
                        attrs: {
                            to: "/husd/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("husd")]), o("router-link", {
                        class: {
                            selected: "usdk" == r.currentPool
                        },
                        attrs: {
                            to: "/usdk/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("usdk")]), o("router-link", {
                        class: {
                            selected: "usdn" == r.currentPool
                        },
                        attrs: {
                            to: "/usdn/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("usdn")]), o("router-link", {
                        class: {
                            selected: "linkusd" == r.currentPool
                        },
                        attrs: {
                            to: "/linkusd/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("linkusd")]), o("router-link", {
                        class: {
                            selected: "musd" == r.currentPool
                        },
                        attrs: {
                            to: "/musd/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("musd")]), o("router-link", {
                        class: {
                            selected: "rsv" == r.currentPool
                        },
                        attrs: {
                            to: "/rsv/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("rsv")]), o("router-link", {
                        class: {
                            selected: "tbtc" == r.currentPool
                        },
                        attrs: {
                            to: "/tbtc/" + (r.$route.path.split("/")[2] || "")
                        }
                    }, [r._v("tbtc")]), o("p", [r._v("____________")]), o("router-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [r._v("Home")]), o("router-link", {
                        attrs: {
                            to: "/trade"
                        }
                    }, [r._v("Trade")]), o("router-link", {
                        attrs: {
                            to: "/combinedstats"
                        }
                    }, [r._v("All stats")]), o("router-link", {
                        attrs: {
                            to: "/dailystats"
                        }
                    }, [r._v("Daily stats")]), o("router-link", {
                        attrs: {
                            to: "/volumepercoin"
                        }
                    }, [r._v("Coin volumes")]), o("a", {
                        attrs: {
                            href: "https://twitter.com/CurveFinance"
                        }
                    }, [r._v("#Twitter")]), o("a", {
                        attrs: {
                            href: "https://t.me/curvefi"
                        }
                    }, [r._v("@Telegram")]), o("a", {
                        attrs: {
                            href: "https://t.me/curveficn"
                        }
                    }, [r._v("@Telegram CN")]), o("a", {
                        attrs: {
                            href: "https://discord.gg/9uEHakc",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("@Discord")]), o("a", {
                        attrs: {
                            href: "https://explore.duneanalytics.com/public/dashboards/RTH47mNjQcoLv5oG0HMDdI0iDq7BHxk1PzCRdwQB"
                        }
                    }, [r._v("Dune Analytics")]), o("p", [r._v("____________")]), o("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== r.defaultAccount,
                            expression: "defaultAccount !== null"
                        }],
                        staticClass: "simplebutton margintop",
                        attrs: {
                            id: "myAddress"
                        }
                    }, [o("a", {
                        attrs: {
                            href: "https://etherscan.io/address/" + r.default_account,
                            rel: "noopener noreferrer"
                        }
                    }, [r._v(" " + r._s(r.defaultAccount) + " ")])]), o("button", {
                        staticClass: "simplebutton margintop",
                        on: {
                            click: r.changeWallets
                        }
                    }, [r._v("Change wallet")]), o("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["ledger", "trezor"].includes(r.walletName),
                            expression: "['ledger', 'trezor'].includes(walletName)"
                        }],
                        staticClass: "simplebutton margintop",
                        attrs: {
                            id: "changeAccounts"
                        },
                        on: {
                            click: r.changeAccounts
                        }
                    }, [r._v("Change accounts")])], 1)]), o("router-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [r._v("Root")]), o("a", {
                        attrs: {
                            href: "https://dao.curve.fi"
                        }
                    }, [r._v("DAO")]), o("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/combinedstats"
                        }
                    }, [r._v("All stats")]), o("router-link", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susd" != r.currentPool,
                            expression: "currentPool !='susd'"
                        }],
                        attrs: {
                            to: "/" + r.currentPool
                        }
                    }, [r._v("Buy and sell")]), o("router-link", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susd" != r.currentPool,
                            expression: "currentPool !='susd'"
                        }],
                        attrs: {
                            to: "/" + r.currentPool + "/deposit"
                        }
                    }, [r._v("Deposit")]), o("router-link", {
                        attrs: {
                            to: "/" + r.currentPool + "/withdraw"
                        }
                    }, [r._v("Withdraw")]), o("router-link", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "compound" == r.currentPool && r.oldBalance > 0,
                            expression: "currentPool == 'compound' && oldBalance > 0"
                        }],
                        attrs: {
                            to: "/" + r.currentPool + "/withdraw_old"
                        }
                    }, [r._v("Withdraw old")]), o("router-link", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susdv2" == r.currentPool && r.oldBalance > 0,
                            expression: "currentPool == 'susdv2' && oldBalance > 0"
                        }],
                        attrs: {
                            to: "/susd/withdraw"
                        }
                    }, [r._v("Withdraw old")]), o("router-link", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susd" != r.currentPool,
                            expression: "currentPool !='susd'"
                        }],
                        attrs: {
                            to: "/" + r.currentPool + "/stats"
                        }
                    }, [r._v("Stats")]), o("router-link", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susd" != r.currentPool,
                            expression: "currentPool !='susd'"
                        }],
                        attrs: {
                            to: "/" + r.currentPool + "/profit"
                        }
                    }, [r._v("Profit")]), o("router-link", {
                        attrs: {
                            to: "/curvepay/" + r.currentPool
                        }
                    }, [r._v("Pay")]), o("div", {
                        staticClass: "poolsdropdown right"
                    }, [o("span", [r._v("?")]), o("div", {
                        staticClass: "dropdown"
                    }, [o("a", {
                        attrs: {
                            href: "https://etherscan.io/address/" + this.poolAddress,
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Pool contract")]), o("a", {
                        attrs: {
                            href: "https://etherscan.io/address/" + this.tokenAddress,
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Token contract")]), o("p", [r._v("____________")]), o("router-link", {
                        attrs: {
                            to: "/whitepaper"
                        }
                    }, [r._v("Whitepaper")]), o("router-link", {
                        attrs: {
                            to: "/audits"
                        }
                    }, [r._v("Audits")]), o("router-link", {
                        attrs: {
                            to: "/events"
                        }
                    }, [r._v("Events")]), o("router-link", {
                        attrs: {
                            to: "/" + r.currentPool + "/risks"
                        }
                    }, [r._v("Risks")]), o("router-link", {
                        attrs: {
                            to: "/bugbounty"
                        }
                    }, [r._v("Bug Bounty")]), o("router-link", {
                        attrs: {
                            to: "/" + r.currentPool + "/faq"
                        }
                    }, [r._v("FAQ")]), o("router-link", {
                        attrs: {
                            to: "/integrations"
                        }
                    }, [r._v("Integrations")]), o("router-link", {
                        attrs: {
                            to: "/" + r.currentPool + "/donate"
                        }
                    }, [r._v("Donate")]), o("router-link", {
                        attrs: {
                            to: "/devdocs"
                        }
                    }, [r._v("Developer Docs")]), o("a", {
                        attrs: {
                            href: "https://guides.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Guides")]), o("a", {
                        attrs: {
                            href: "https://resources.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Resources")]), o("p", [r._v("____________")]), o("a", {
                        attrs: {
                            href: "https://github.com/curvefi/curve-contract/tree/pool_" + r.gitBranches[r.currentPool],
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("git@")]), o("a", {
                        attrs: {
                            href: "https://github.com/curvefi/curve-vue",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("git@UI")])], 1)]), o("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://dao.curve.fi"
                        }
                    }, [r._v("DAO")]), o("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/whitepaper"
                        }
                    }, [r._v("Whitepaper")]), o("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/audits"
                        }
                    }, [r._v("Audits")]), o("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/events"
                        }
                    }, [r._v("Events")]), o("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/" + r.currentPool + "/faq"
                        }
                    }, [r._v("FAQ")]), o("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/integrations"
                        }
                    }, [r._v("Integrations")]), o("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/bugbounty"
                        }
                    }, [r._v("Bug Bounty")]), o("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/" + r.currentPool + "/donate"
                        }
                    }, [r._v("Donate")]), o("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://guides.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Guides")]), o("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://resources.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Resources")]), o("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://github.com/curvefi/curve-contract/tree/pool_" + r.gitBranches[r.currentPool],
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("git@")]), o("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://github.com/curvefi/curve-vue",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("git@UI")]), o("button", {
                        staticClass: "simplebutton showmobile",
                        on: {
                            click: r.changeWallets
                        }
                    }, [r._v("Change wallet")]), o("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["ledger", "trezor"].includes(r.walletName),
                            expression: "['ledger', 'trezor'].includes(walletName)"
                        }],
                        staticClass: "simplebutton showmobile",
                        attrs: {
                            id: "changeAccounts"
                        },
                        on: {
                            click: r.changeAccounts
                        }
                    }, [r._v("Change accounts")])], 1), o("div", {
                        attrs: {
                            id: "screen"
                        }
                    }, [o("div", {
                        class: (t = {
                            "blue window": !0
                        }, t[r.$route.name] = !0, t)
                    }, [o("h1", [o("img", {
                        attrs: {
                            src: r.logoSrc,
                            alt: "🌀 Curve"
                        }
                    })])]), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: r.error,
                            expression: "error"
                        }],
                        staticClass: "error window half-width info",
                        attrs: {
                            id: "error-window"
                        }
                    }, [r._v(" " + r._s(r.error) + " ")]), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: r.hasConnectedWallet,
                            expression: "hasConnectedWallet"
                        }],
                        staticClass: "info-message gentle-message window half-width gentle-message"
                    }, [r._v(" You haven't connected a wallet. "), o("button", {
                        on: {
                            click: r.changeWallets
                        }
                    }, [r._v("Connect wallet")])]), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: r.plsReturn,
                            expression: "plsReturn"
                        }],
                        staticClass: "simple-error window"
                    }, [r._v(" Your recent withdrawal from Curve resulted in getting 1000 more USDT because of another user mistakenly transferring funds to the contract. If you wish to return them - please contact us on "), o("a", {
                        attrs: {
                            href: "https://twitter.com/CurveFinance"
                        }
                    }, [r._v("Twitter")]), r._v("/"), o("a", {
                        attrs: {
                            href: "https://t.me/curvefi"
                        }
                    }, [r._v("Telegram")]), r._v("/"), o("a", {
                        attrs: {
                            href: "https://discord.gg/9uEHakc",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("@Discord")]), r._v(". Thank you! ")]), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: r.plsReturn2,
                            expression: "plsReturn2"
                        }],
                        staticClass: "simple-error window"
                    }, [r._v(" Your recently made a huge arb in USDK pool where someone incurred a huge loss. If you wish to return partially - please contract us on "), o("a", {
                        attrs: {
                            href: "https://twitter.com/CurveFinance"
                        }
                    }, [r._v("Twitter")]), r._v("/"), o("a", {
                        attrs: {
                            href: "https://t.me/curvefi"
                        }
                    }, [r._v("Telegram")]), r._v("/"), o("a", {
                        attrs: {
                            href: "https://discord.gg/9uEHakc",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("@Discord")]), r._v(". Thank you! ")]), o("router-view")], 1), ["Stats", "FAQ", "Donate", "Root", "CombinedStats"].includes(r.$route.name) ? r._e() : o("balances-info", {
                        class: (e = {}, e[r.$route.name] = !0, e),
                        attrs: {
                            bal_info: r.bal_info,
                            total: r.balTotal,
                            l_info: r.l_info,
                            totalShare: r.totalShare,
                            staked_info: r.staked_info,
                            totalStake: r.totalStake,
                            fee: r.fee,
                            admin_fee: r.admin_fee,
                            currencies: r.currencies
                        }
                    })], 1), o("footer", [o("a", {
                        attrs: {
                            href: "https://etherscan.io/address/" + this.poolAddress,
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Pool contract")]), o("a", {
                        attrs: {
                            href: "https://etherscan.io/address/" + this.tokenAddress,
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Token contract")]), o("a", {
                        attrs: {
                            href: "https://twitter.com/CurveFinance",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("#Twitter")]), o("a", {
                        attrs: {
                            href: "https://t.me/curvefi",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("@Telegram")]), o("a", {
                        attrs: {
                            href: "https://t.me/curveficn",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("@Telegram CN")]), o("a", {
                        attrs: {
                            href: "https://discord.gg/9uEHakc",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("@Discord")]), o("a", {
                        attrs: {
                            href: "https://guides.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Guides")]), o("a", {
                        attrs: {
                            href: "https://resources.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Resources")]), o("a", {
                        attrs: {
                            href: "https://explore.duneanalytics.com/public/dashboards/RTH47mNjQcoLv5oG0HMDdI0iDq7BHxk1PzCRdwQB",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Dune Analytics")]), o("a", {
                        attrs: {
                            href: "https://github.com/curvefi/curve-contract"
                        }
                    }, [r._v("git@")]), o("a", {
                        attrs: {
                            href: "https://github.com/curvefi/curve-vue"
                        }
                    }, [r._v("git@UI")]), o("router-link", {
                        attrs: {
                            to: "/devdocs"
                        }
                    }, [r._v("Developer Docs")])], 1)])
                },
                n = [],
                a = (r("caad"), r("fb6a"), r("b0c0"), r("96cf"), r("1da1")),
                u = r("5530"),
                c = r("ade3"),
                i = r("b2ea"),
                l = r("51bf"),
                d = r("d99e"),
                v = r("5245"),
                h = (s = {
                    compound: "Compounded",
                    usdt: "Tethered",
                    iearn: "Yield",
                    busd: "bUSD",
                    susd: "sUSD-yCurve old",
                    susdv2: "sUSD",
                    pax: "PAX",
                    tbtc: "TBTC",
                    ren: "renBTC",
                    sbtc: "sBTC",
                    hbtc: "HBTC",
                    "3pool": "3pool",
                    gusd: "gusd",
                    husd: "husd",
                    usdk: "usdk",
                    usdn: "usdn",
                    linkusd: "linkusd",
                    musd: "musd",
                    rsv: "rsv"
                }, Object(c["a"])(s, "tbtc", "tbtc"), Object(c["a"])(s, "dusd", "dusd"), s),
                p = {
                    metaInfo: function() {
                        return {
                            title: "Curve.fi :: " + h[this.currentPool]
                        }
                    },
                    data: function() {
                        return {
                            gitBranches: {
                                compound: "compound",
                                usdt: "usdt",
                                iearn: "y",
                                y: "y",
                                busd: "busd",
                                susd: "susd_vulnerable",
                                susdv2: "susd_plain",
                                pax: "pax",
                                tbtc: "tbtc",
                                ren: "ren",
                                sbtc: "renbtc_sbtc",
                                hbtc: "hbtc",
                                "3pool": "pool_3"
                            }
                        }
                    },
                    components: {
                        BalancesInfo: i["a"]
                    },
                    computed: Object(u["a"])({
                        allGetters: function() {
                            return l["h"]
                        }
                    }, l["h"], {
                        poolMenu: function() {
                            return l["k"]
                        },
                        poolAddress: function() {
                            return v["g"][this.currentPool].swap_address
                        },
                        tokenAddress: function() {
                            return v["g"][this.currentPool].token_address
                        },
                        publicPath: function() {
                            return "/"
                        },
                        logoSrc: function() {
                            return l["f"].swapbtc || "linkusd" == l["f"].currentContract ? "https://www.curve.fi/logo_ren_beta_optimized.svg" : "https://www.curve.fi/logo_optimized.svg"
                        },
                        hasConnectedWallet: function() {
                            return "0x0000000000000000000000000000000000000000" == this.default_account && !["Donate", "StatsDaily", "Audits", "Stats", "Contracts", "FAQ", "RootFAQ"].includes(this.$route.name)
                        },
                        plsReturn: function() {
                            return l["f"].currentContract.toLowerCase() == "0x72c20f89008729c91b6bb85f3104fda942494cef".toLowerCase()
                        },
                        plsReturn2: function() {
                            return l["f"].currentContract.toLowerCase() == "0xB2398330970C7cAd95535D076BA3f64Cc6aFd43d".toLowerCase()
                        },
                        defaultAccount: function() {
                            return this.default_account && "0x0000000000000000000000000000000000000000" != this.default_account ? this.default_account.slice(0, 6) + "..." + this.default_account.slice(-6) : null
                        }
                    }),
                    methods: {
                        changePools: function(t) {
                            Object(l["e"])(t)
                        },
                        changeWallets: function() {
                            return Object(a["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            Object(d["a"])();
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        changeAccounts: function() {
                            return Object(a["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.abrupt("return", d["e"].accountSelect());
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }
                    }
                },
                f = p,
                m = (r("1100"), r("2877")),
                _ = Object(m["a"])(f, o, n, !1, null, null, null);
            e["default"] = _.exports
        }
    }
]);
//# sourceMappingURL=chunk-5d94b1eb.49cc2bee.js.map