(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6774df5a", "chunk-2d0d3a28"], {
        "07ac": function(e, t, n) {
            var r = n("23e7"),
                s = n("6f53").values;
            r({
                target: "Object",
                stat: !0
            }, {
                values: function(e) {
                    return s(e)
                }
            })
        },
        "4add": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("div", {
                        staticClass: "window white"
                    }, [n("fieldset", [n("p", {
                        staticClass: "info-message gentle-message"
                    }, [e._v(" Claiming is not yet available. Distribution is recorded from 17/09/2020 00:00 UTC ")]), n("p", {
                        staticClass: "info-message gentle-message veCRVinfo"
                    }, [e._v(" 1 "), n("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV locked for 4 years = 1veCRV "), n("br"), e._v(" 1 "), n("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV locked for 3 years = 0.75veCRV "), n("br"), e._v(" 1 "), n("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV locked for 2 years = 0.50veCRV "), n("br"), e._v(" 1 "), n("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV locked for 1 year = 0.25veCRV "), n("br"), n("br"), n("a", {
                        attrs: {
                            href: "https://resources.curve.fi/faq/vote-locking-boost#what-are-vecrv",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v(" veCRV guide ")])]), n("p", [n("span", [e._v("veCRV holder/LP ratio: ")]), n("span", {
                        class: {
                            "loading line": null === e.ratio
                        }
                    }), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.ratio,
                            expression: "ratio !== null"
                        }],
                        staticClass: "greentext"
                    }, [e._v(e._s(e.ratio && e.ratio.toFixed(2)))])]), n("p", {
                        staticClass: "info-message gentle-message"
                    }, [e._v(" Having locked 1$ in CRV for 4 years is equal to having provided " + e._s(e.ratio && e.ratio.toFixed(2)) + "$ as an LP ")]), n("p"), n("p", [e._v(" veCRV holder APY: "), n("span", {
                        class: {
                            "loading line": null === e.feeAPY
                        }
                    }), e._v(" " + e._s(e.feeAPY && e.feeAPY.toFixed(2)) + "% "), n("br"), e._v(" Yearly fee earnings per 1 veCRV: "), n("span", {
                        class: {
                            "loading line": null === e.feePerVeCRV
                        }
                    }), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.feePerVeCRV,
                            expression: "feePerVeCRV !== null"
                        }]
                    }, [e._v(e._s(e.feePerVeCRVFormat))]), e._v("$ "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.feePerVeCRV,
                            expression: "feePerVeCRV !== null"
                        }],
                        staticClass: "tooltip"
                    }, [n("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("[?] Daily trading fees annualized ")])])]), n("p", [e._v(" veCRV balance: " + e._s(e.myVeCRVFormat) + " "), n("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 0 == e.myVeCRV,
                            expression: "myVeCRV == 0"
                        }],
                        attrs: {
                            href: "https://dao.curve.fi/locker",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Stake CRV")])]), n("p"), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.myVeCRV > 0,
                            expression: "myVeCRV > 0"
                        }]
                    }, [e._v(" My daily earnings: "), n("span", {
                        class: {
                            "loading line": null === e.myFee
                        }
                    }), e._v(" " + e._s(e.myFee && e.myFee.toFixed(2)) + "$ (" + e._s(e.myFee && (e.myFee / 24).toFixed(2)) + "$ per hour) "), n("br"), e._v(" My yearly earnings: "), n("span", {
                        class: {
                            "loading line": null === e.myFee
                        }
                    }), e._v(" " + e._s(e.myFee && e.formatNumber(365 * e.myFee)) + "$ "), e._m(0), n("br")]), n("p", [e._v(" Daily earnings: "), n("span", {
                        class: {
                            "loading line": 0 === e.totalFees
                        }
                    }), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.totalFees > 0,
                            expression: "totalFees > 0"
                        }]
                    }, [e._v(" " + e._s(e.totalFeesFormat) + "$ ")]), n("br"), e._v(" Weekly earnings: "), n("span", {
                        class: {
                            "loading line": 0 == e.totalWeeklyFeeFormat
                        }
                    }), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.totalWeeklyFeeFormat,
                            expression: "totalWeeklyFeeFormat"
                        }]
                    }, [e._v(" " + e._s(e.totalWeeklyFeeFormat) + "$")])]), n("p"), e._v(" Total "), n("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV Locked: "), n("span", {
                        class: {
                            "loading line": null === e.lockedCRV
                        }
                    }), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.lockedCRV,
                            expression: "lockedCRV !== null"
                        }]
                    }, [e._v(" " + e._s(e.lockedCRVFormat) + " ")]), n("br"), e._v(" Total veCRV: "), n("span", {
                        class: {
                            "loading line": null === e.totalVeSupply
                        }
                    }), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.totalVeSupply,
                            expression: "totalVeSupply !== null"
                        }]
                    }, [e._v(" " + e._s(e.veCRVFormat) + " ")]), e._m(1)])]), n("div", {
                        staticClass: "window white"
                    }, [n("p", {
                        staticClass: "info-message gentle-message"
                    }, [e._v(" Depositing into multiple pools lets you have a 2.5x boost for a bigger $ amount per 1 veCRV ")]), n("div", {
                        staticClass: "poolselect"
                    }, [e._v(" Select pools where you want to deposit: "), n("p", e._l(e.pools, (function(t) {
                        return n("span", [n("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.selectedPools,
                                expression: "selectedPools"
                            }],
                            attrs: {
                                id: "pool" + t,
                                type: "checkbox"
                            },
                            domProps: {
                                value: t,
                                checked: Array.isArray(e.selectedPools) ? e._i(e.selectedPools, t) > -1 : e.selectedPools
                            },
                            on: {
                                change: function(n) {
                                    var r = e.selectedPools,
                                        s = n.target,
                                        a = !!s.checked;
                                    if (Array.isArray(r)) {
                                        var o = t,
                                            i = e._i(r, o);
                                        s.checked ? i < 0 && (e.selectedPools = r.concat([o])) : i > -1 && (e.selectedPools = r.slice(0, i).concat(r.slice(i + 1)))
                                    } else e.selectedPools = a
                                }
                            }
                        }), n("label", {
                            attrs: {
                                for: "pool" + t
                            }
                        }, [e._v(e._s(t))])])
                    })), 0)]), e._v(" Max $ per 1 veCRV to have 2.5x boost: " + e._s(e.maxDepositAll && e.maxDepositAll.toFixed(2)) + "$ ")]), n("div", {
                        staticClass: "window white"
                    }, [n("fieldset", [n("legend", [e._v(" Use "), n("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV ")]), n("table", {
                        staticClass: "tui-table"
                    }, [n("thead", [n("tr", [n("th"), n("th", [e._v("Pool")]), e._m(2), n("th", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showMinVeCRV,
                            expression: "showMinVeCRV"
                        }]
                    }, [e._v("min veCRV for 2.5x boost")])])]), n("tbody", [n("tr", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !Object.keys(e.fees).length,
                            expression: "!Object.keys(fees).length"
                        }]
                    }, [e._m(3), e._m(4), e._m(5), n("td", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showMinVeCRV,
                            expression: "showMinVeCRV"
                        }]
                    }, [n("span", {
                        staticClass: "loading line"
                    })])]), e._l(e.fees, (function(t, r, s) {
                        return n("tr", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: Object.keys(e.fees).length && e.pools.includes(r),
                                expression: "Object.keys(fees).length && pools.includes(pool)"
                            }]
                        }, [n("td", [n("a", {
                            attrs: {
                                href: "usdt" == r ? "https://curve.fi" : "https://curve.fi/" + r
                            }
                        }, [e._v(" " + e._s(s) + ". ")])]), n("td", [n("a", {
                            attrs: {
                                href: "usdt" == r ? "https://curve.fi" : "https://curve.fi/" + r
                            }
                        }, [e._v(" " + e._s(r) + " ")])]), n("td", [n("a", {
                            attrs: {
                                href: "usdt" == r ? "https://curve.fi" : "https://curve.fi/" + r
                            }
                        }, [e._v(" " + e._s(e.maxDepositPerCRV(s)) + "$ ")])]), n("td", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.showMinVeCRV,
                                expression: "showMinVeCRV"
                            }]
                        }, [n("a", {
                            attrs: {
                                href: "usdt" == r ? "https://curve.fi" : "https://curve.fi/" + r
                            }
                        }, [e._v(" " + e._s(e.minVeCRVsFormat[s]) + " ")])])])
                    }))], 2)])])])])
                },
                s = [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), n("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" Daily trading fee annualized ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("p", [n("a", {
                        attrs: {
                            href: "https://dao.curve.fi/locker"
                        }
                    }, [e._v("Stake your CRV")]), n("br"), n("a", {
                        attrs: {
                            href: "https://resources.curve.fi/guides/staking-your-crv",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Guide to staking CRV")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("th", [e._v("Max $ per veCRV "), n("br"), e._v(" to have 2.5x boost")])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("td", [n("span", {
                        staticClass: "loading line"
                    })])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("td", [n("span", {
                        staticClass: "loading line"
                    })])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("td", [n("span", {
                        staticClass: "loading line"
                    })])
                }],
                a = (n("4de4"), n("7db0"), n("5db7"), n("caad"), n("d81d"), n("13d5"), n("fb6a"), n("73d9"), n("b680"), n("4fad"), n("c1f9"), n("b64b"), n("d3b7"), n("07ac"), n("ac1f"), n("2532"), n("3ca3"), n("1276"), n("ddb0"), n("3835")),
                o = (n("96cf"), n("1da1")),
                i = n("5245"),
                c = n("a4e2"),
                u = (n("5e35"), n("2fa3")),
                l = n("51bf"),
                d = n("b44d"),
                p = {
                    data: function() {
                        return {
                            pools: ["compound", "usdt", "y", "busd", "susdv2", "pax", "ren", "sbtc", "hbtc", "3pool"],
                            virtualPrices: [],
                            poolLiquidities: [],
                            volumes: {},
                            fees: {},
                            votingEscrow: null,
                            totalVeSupply: null,
                            supply: null,
                            lockedCRV: null,
                            CRVprice: null,
                            feeAPY: null,
                            btcPrice: null,
                            myVeCRV: null,
                            myFee: null,
                            weeklyVolume: null,
                            myLiquidity: [],
                            minVeCRVs: [],
                            feePerVeCRV: null,
                            selectedPools: ["compound", "y", "susdv2", "3pool"],
                            ratio: null
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.$watch((function() {
                                            return l["f"].web3 && l["f"].multicall
                                        }), (function(t) {
                                            t && e.mounted()
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    mounted: function() {
                        var e = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        l["f"].web3 && l["f"].multicall && e.mounted();
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    computed: {
                        publicPath: function() {
                            return "/"
                        },
                        totalFees: function() {
                            return Object.values(this.fees).reduce((function(e, t) {
                                return e + t
                            }), 0)
                        },
                        totalFeesFormat: function() {
                            return u["g"](this.totalFees)
                        },
                        veCRVFormat: function() {
                            return u["g"](this.totalVeSupply / 1e18)
                        },
                        supplyFormat: function() {
                            return u["g"](this.supply / 1e18)
                        },
                        lockedCRVFormat: function() {
                            return u["g"](this.lockedCRV / 1e18)
                        },
                        circSupply: function() {
                            return u["g"]((this.supply - this.CRVLocked) / 1e18)
                        },
                        totalWeeklyVolumeFormat: function() {
                            return u["g"](Object.entries(this.weeklyVolume || {}).map((function(e) {
                                var t = Object(a["a"])(e, 2),
                                    n = (t[0], t[1]);
                                return n
                            })).reduce((function(e, t) {
                                return +e + +t
                            }), 0))
                        },
                        totalWeeklyFeeFormat: function() {
                            return u["g"](.02 * Object.entries(this.weeklyVolume || {}).map((function(e) {
                                var t = Object(a["a"])(e, 2),
                                    n = (t[0], t[1]);
                                return n
                            })).reduce((function(e, t) {
                                return +e + +t
                            }), 0) / 100)
                        },
                        showMinVeCRV: function() {
                            return void 0 !== this.minVeCRVs.find((function(e) {
                                return e > 0
                            }))
                        },
                        minVeCRVsFormat: function() {
                            return this.minVeCRVs.map((function(e) {
                                return 0 == e ? "No deposit" : u["g"](e)
                            }))
                        },
                        myVeCRVFormat: function() {
                            return u["g"](this.myVeCRV / 1e18)
                        },
                        feePerVeCRVFormat: function() {
                            return u["g"](this.feePerVeCRV)
                        },
                        maxDepositAll: function() {
                            var e = this;
                            return console.log(Object.keys(this.fees)), console.log(Object.keys(this.fees).filter((function(t) {
                                return e.selectedPools.includes(t)
                            }))), this.fees && Object.keys(this.fees).map((function(t, n) {
                                return [t, e.maxDepositPerCRV(n)]
                            })).filter((function(t) {
                                var n = Object(a["a"])(t, 2),
                                    r = n[0];
                                n[1];
                                return e.selectedPools.includes(r)
                            })).map((function(e) {
                                var t = Object(a["a"])(e, 2),
                                    n = (t[0], t[1]);
                                return n
                            })).reduce((function(e, t) {
                                return +e + +t
                            }), 0)
                        }
                    },
                    methods: {
                        mounted: function() {
                            var e = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function t() {
                                var n, r, s, o, u, p, f, m, v, h, b, g, w, V, _;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return n = new l["f"].web3.eth.Contract(i["l"], i["g"]["3pool"].gauge_address), r = new l["f"].web3.eth.Contract(i["g"]["3pool"].swap_abi, i["g"]["3pool"].swap_address), s = e.pools.flatMap((function(e) {
                                                return [
                                                    [i["g"][e].gauge_address, n.methods.totalSupply().encodeABI()],
                                                    [i["g"][e].swap_address, r.methods.get_virtual_price().encodeABI()],
                                                    [i["g"][e].gauge_address, n.methods.balanceOf(l["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]
                                                ]
                                            })), e.votingEscrow = new web3.eth.Contract(i["w"], i["x"]), s.push.apply(s, [
                                                [e.votingEscrow._address, e.votingEscrow.methods.totalSupply().encodeABI()],
                                                [e.votingEscrow._address, e.votingEscrow.methods.balanceOf(l["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]
                                            ]), t.next = 7, l["f"].multicall.methods.aggregate(s).call();
                                        case 7:
                                            return o = t.sent, u = o[1].flatMap((function(e) {
                                                return +web3.eth.abi.decodeParameter("uint256", e)
                                            })), console.log(u, "THE DECODED"), p = u.slice(0, u.length - 2).map((function(e) {
                                                return e / 1e18
                                            })), e.poolLiquidities = p.filter((function(e, t) {
                                                return t % 3 == 0
                                            })), e.virtualPrices = p.filter((function(e, t) {
                                                return t % 3 == 1
                                            })), e.myLiquidity = p.filter((function(e, t) {
                                                return t % 3 == 2
                                            })), e.totalVeSupply = u[u.length - 2], e.myVeCRV = u[u.length - 1], e.minVeCRVs = e.poolLiquidities.map((function(t, n) {
                                                return e.totalVeSupply * e.myLiquidity[n] / t / 1e18
                                            })), console.log(e.minVeCRVs, "MIN VECRVS"), t.next = 20, Promise.all([fetch("https://pushservice.curve.fi/crv/circulating_supply"), fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,curve-dao-token&vs_currencies=usd")]);
                                        case 20:
                                            return f = t.sent, t.next = 23, Promise.all(f.map((function(e) {
                                                return e.json()
                                            })));
                                        case 23:
                                            return f = t.sent, m = f[0], e.supply = m.supply, e.lockedCRV = m.CRVLocked, v = f[1], e.btcPrice = v.bitcoin.usd, e.CRVprice = v["curve-dao-token"].usd, t.next = 32, Promise.all([c["e"](e.pools, !0), c["a"](e.pools, !1, 1440)]);
                                        case 32:
                                            return h = Object.entries(c["f"].volumeData[1440]).map((function(e) {
                                                var t = Object(a["a"])(e, 2),
                                                    n = t[0],
                                                    r = t[1];
                                                return [n, r.filter((function(e) {
                                                    return e.timestamp > Date.now() / 1e3 - 604800
                                                })).map((function(e) {
                                                    return Object.entries(e.volume).map((function(e) {
                                                        var t = Object(a["a"])(e, 2),
                                                            r = t[0],
                                                            s = t[1];
                                                        return console.log(n, "THE KEY"), s[0] / i["g"]["susd" == n ? "susdv2" : n].coin_precisions[r.split("-")[0]]
                                                    })).reduce((function(e, t) {
                                                        return +e + +t
                                                    }), 0)
                                                })).reduce((function(e, t) {
                                                    return +e + +t
                                                }), 0)]
                                            })), e.weeklyVolume = Object.fromEntries(h), b = .02 * Object.values(e.weeklyVolume).reduce((function(e, t) {
                                                return e + t
                                            }), 0) / 100, e.volumes = Object.fromEntries(Object.entries(c["f"].volumes).filter((function(e) {
                                                var t = Object(a["a"])(e, 2),
                                                    n = t[0];
                                                t[1];
                                                return !["tbtc"].includes(n)
                                            }))), e.fees = Object.fromEntries(Object.entries(c["f"].volumes).filter((function(e) {
                                                var t = Object(a["a"])(e, 2),
                                                    n = t[0];
                                                t[1];
                                                return !["tbtc"].includes(n)
                                            })).map((function(e) {
                                                var t = Object(a["a"])(e, 2),
                                                    n = t[0],
                                                    r = t[1];
                                                return [n, .02 * r[0] / 100]
                                            }))), e.feeAPY = 52 * b / (+e.totalVeSupply / 1e18 * +e.CRVprice) * 100, e.myFee = +b / 7 * e.myVeCRV / e.totalVeSupply, e.feePerVeCRV = 52 * b / (e.totalVeSupply / 1e18), e.selectedPools = Object.keys(e.fees).filter((function(t, n) {
                                                return e.minVeCRVs[n] > 0
                                            })).map((function(e) {
                                                return "susd" == e ? "susdv2" : e
                                            })), g = Object.values(Object.fromEntries(Object.entries(c["f"].volumes).filter((function(e) {
                                                var t = Object(a["a"])(e, 2),
                                                    n = t[0];
                                                t[1];
                                                return !["tbtc"].includes(n)
                                            })).map((function(e) {
                                                var t = Object(a["a"])(e, 2),
                                                    n = t[0],
                                                    r = t[1];
                                                return [n, r[0]]
                                            })))).reduce((function(e, t) {
                                                return +e + +t
                                            }), 0), t.next = 44, d["b"]();
                                        case 44:
                                            w = t.sent, console.log(w, "THE TVL"), V = .5 * g / w, _ = .5 * g / (e.lockedCRV / 1e18 * e.CRVprice), e.ratio = _ / V;
                                        case 49:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        formatNumber: function(e) {
                            return u["g"](e)
                        },
                        maxDepositPerCRV: function(e) {
                            var t = this.poolLiquidities[e];
                            return ["ren", "sbtc", "hbtc"].includes(this.pools[e]) && (t *= this.btcPrice), (1e18 * t * 1e18 / this.totalVeSupply / 1e18 * this.virtualPrices[e]).toFixed(2)
                        }
                    }
                },
                f = p,
                m = (n("c173"), n("2877")),
                v = Object(m["a"])(f, r, s, !1, null, "6fa43862", null);
            t["default"] = v.exports
        },
        "5db7": function(e, t, n) {
            "use strict";
            var r = n("23e7"),
                s = n("a2bf"),
                a = n("7b0b"),
                o = n("50c4"),
                i = n("1c0b"),
                c = n("65f0");
            r({
                target: "Array",
                proto: !0
            }, {
                flatMap: function(e) {
                    var t, n = a(this),
                        r = o(n.length);
                    return i(e), t = c(n, 0), t.length = s(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
                }
            })
        },
        "5e35": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return o
            }));
            n("d3b7"), n("96cf");
            var r = n("1da1"),
                s = n("2fa3"),
                a = {
                    btcPrice: null
                };

            function o() {
                return i.apply(this, arguments)
            }

            function i() {
                return i = Object(r["a"])(regeneratorRuntime.mark((function e() {
                    var t, n;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s["q"](fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"), 300);
                            case 2:
                                return t = e.sent, e.next = 5, t.json();
                            case 5:
                                return n = e.sent, a.btcPrice = n.bitcoin.usd, e.abrupt("return", n.bitcoin.usd);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), i.apply(this, arguments)
            }
        },
        "73d9": function(e, t, n) {
            var r = n("44d2");
            r("flatMap")
        },
        "84ff": function(e, t, n) {},
        a2bf: function(e, t, n) {
            "use strict";
            var r = n("e8b5"),
                s = n("50c4"),
                a = n("0366"),
                o = function(e, t, n, i, c, u, l, d) {
                    var p, f = c,
                        m = 0,
                        v = !!l && a(l, d, 3);
                    while (m < i) {
                        if (m in n) {
                            if (p = v ? v(n[m], m, t) : n[m], u > 0 && r(p)) f = o(e, t, p, s(p.length), f, u - 1) - 1;
                            else {
                                if (f >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                                e[f] = p
                            }
                            f++
                        }
                        m++
                    }
                    return f
                };
            e.exports = o
        },
        a4e2: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return f
            })), n.d(t, "b", (function() {
                return m
            })), n.d(t, "a", (function() {
                return v
            })), n.d(t, "e", (function() {
                return b
            })), n.d(t, "c", (function() {
                return w
            })), n.d(t, "d", (function() {
                return _
            })), n.d(t, "g", (function() {
                return C
            }));
            n("99af"), n("4de4"), n("7db0"), n("caad"), n("d81d"), n("13d5"), n("fb6a"), n("4fad"), n("c1f9"), n("d3b7"), n("07ac"), n("ac1f"), n("2532"), n("3ca3"), n("1276"), n("ddb0");
            var r = n("b85c"),
                s = (n("96cf"), n("1da1")),
                a = n("3835"),
                o = n("5530"),
                i = n("ade3"),
                c = n("2b0e"),
                u = n("5245"),
                l = n("901e"),
                d = n.n(l),
                p = function() {
                    var e;
                    return e = {
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
                    }, Object(i["a"])(e, "tbtc", []), Object(i["a"])(e, "dusd", []), e
                },
                f = c["a"].observable({
                    volumes: Object(o["a"])({}, Object.fromEntries(Object.entries(p()).map((function(e) {
                        var t = Object(a["a"])(e, 2),
                            n = t[0];
                        t[1];
                        return [n, [-1, -1]]
                    })))),
                    volumeData: {
                        5: Object(o["a"])({}, p()),
                        30: Object(o["a"])({}, p()),
                        1440: Object(o["a"])({}, p())
                    },
                    allVolume: Object(o["a"])({}, p())
                });

            function m(e, t) {
                var n = t.find((function(t) {
                    return Date.parse(t[0]) / 1e3 - e > 0
                }));
                return void 0 === n ? t[t.length - 1][1] : n.price
            }

            function v(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return h = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, s, o, i, c, u, l, d, p, v, h, b = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return n = b.length > 1 && void 0 !== b[1] && b[1], s = b.length > 2 && void 0 !== b[2] ? b[2] : 5, Array.isArray(t) || (t = [t]), t = t.map((function(e) {
                                    return "iearn" == e ? "y" : "susdv2" == e ? "susd" : "ren2" == e ? "ren" : "rens" == e ? "sbtc" : e
                                })), n || (t = t.filter((function(e) {
                                    return !f.volumeData[s][e].length
                                }))), o = t.map((function(e) {
                                    return "ren" == e && (e = "ren2"), "sbtc" == e && (e = "rens"), fetch("".concat(window.domain, "/raw-stats/").concat(e, "-").concat(s, "m.json"))
                                })), (t.includes("tbtc") || t.includes("ren") || t.includes("sbtc") || t.includes("hbtc")) && o.push(fetch("\n\t\t\thttps://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1589587198&to=".concat(Date.now() / 1e3 | 0))), e.next = 9, Promise.all(o);
                            case 9:
                                return o = e.sent, e.next = 12, Promise.all(o.map((function(e) {
                                    return e.json()
                                })));
                            case 12:
                                i = e.sent, c = i[i.length - 1], (t.includes("tbtc") || t.includes("ren") || t.includes("hbtc")) && (i = i.slice(0, -1)), u = Object(r["a"])(i.entries());
                                try {
                                    for (u.s(); !(l = u.n()).done;) d = Object(a["a"])(l.value, 2), p = d[0], v = d[1], h = t[p], ["tbtc", "ren", "sbtc", "hbtc"].includes(h) && (v = v.map((function(e) {
                                        return e.volume = Object.fromEntries(Object.entries(e.volume).map((function(t) {
                                            var n = Object(a["a"])(t, 2),
                                                r = n[0],
                                                s = n[1];
                                            return [r, s.map((function(t) {
                                                return t * m(e.timestamp, c.prices)
                                            }))]
                                        }))), e
                                    }))), f.volumeData[s][h] = v
                                } catch (g) {
                                    u.e(g)
                                } finally {
                                    u.f()
                                }
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), h.apply(this, arguments)
            }

            function b(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return g = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, r, s, o, i, u, l, d, p, m, v, h, b = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (n = b.length > 1 && void 0 !== b[1] && b[1], Array.isArray(t) || (t = [t]), t = t.map((function(e) {
                                        return "iearn" == e ? "y" : "susdv2" == e ? "susd" : "ren" == e ? "ren2" : "sbtc" == e ? "rens" : e
                                    })), Object.values(f.volumes).filter((function(e) {
                                        return -1 != e[0]
                                    })).length != t.length || n) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                return e.next = 7, Promise.all([fetch("".concat(window.domain, "/raw-stats/apys.json")), fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")]);
                            case 7:
                                return r = e.sent, e.next = 10, Promise.all(r.map((function(e) {
                                    return e.json()
                                })));
                            case 10:
                                for (s = e.sent, o = Object(a["a"])(s, 2), i = o[0], u = o[1], u = u.bitcoin.usd, l = 0, d = Object.entries(f.volumes); l < d.length; l++) p = Object(a["a"])(d[l], 2), m = p[0], v = p[1], -1 == v[0] && (h = "ren" == m ? i.volume.ren2 : "sbtc" == m ? i.volume.rens : i.volume[m], ["tbtc", "ren", "sbtc", "hbtc"].includes(m) && (h *= u), c["a"].set(f.volumes[m], 0, h || 0), c["a"].set(f.volumes[m], 1, "ren" == m ? i.volume.ren2 : "sbtc" == m ? i.volume.rens : i.volume[m]));
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), g.apply(this, arguments)
            }

            function w(e) {
                return V.apply(this, arguments)
            }

            function V() {
                return V = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, s, o, i, c, l, d = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (n = d.length > 1 && void 0 !== d[1] && d[1], s = d.length > 2 && void 0 !== d[2] ? d[2] : 30, t = "iearn" == t ? "y" : "susdv2" == t ? "susd" : t, !f.allVolume[t].length || n) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                return e.next = 7, v(t, n, s);
                            case 7:
                                o = f.volumeData[s][t], f.volumeData[t] = o, i = Object(r["a"])(o);
                                try {
                                    for (i.s(); !(c = i.n()).done;) l = c.value, f.allVolume[t].push([1e3 * l.timestamp, Object.entries(l.volume).map((function(e) {
                                        var n = Object(a["a"])(e, 2),
                                            r = n[0],
                                            s = n[1],
                                            o = u["g"]["susd" == t ? "susdv2" : t].coin_precisions[r.split("-")[0]];
                                        return s[0] / o
                                    })).reduce((function(e, t) {
                                        return e + t
                                    }), 0)])
                                } catch (p) {
                                    i.e(p)
                                } finally {
                                    i.f()
                                }
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), V.apply(this, arguments)
            }

            function _(e) {
                return y.apply(this, arguments)
            }

            function y() {
                return y = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, r, s, a, o, i = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (n = i.length > 1 && void 0 !== i[1] && i[1], r = i.length > 2 && void 0 !== i[2] ? i[2] : 30, t = "iearn" == t ? "y" : "susdv2" == t ? "susd" : t, f.volumeData[r][t].length) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 6, v(t, n, r);
                            case 6:
                                for (s = [], a = function(e) {
                                        var n = f.volumeData[r][t],
                                            a = n[e],
                                            o = n[e - 1],
                                            i = a.balances.map((function(e, n) {
                                                return e / u["g"]["susd" == t ? "susdv2" : t].coin_precisions[n]
                                            })),
                                            c = a.rates.map((function(e, t) {
                                                return e / o.rates[t] - 1
                                            })),
                                            l = i.map((function(e, t) {
                                                return e * c[t]
                                            })),
                                            d = l.reduce((function(e, t) {
                                                return e + t
                                            }), 0),
                                            p = i.reduce((function(e, t) {
                                                return e + t
                                            }), 0),
                                            m = d / p,
                                            v = a.timestamp - o.timestamp,
                                            h = Math.pow(1 + m, 31536e3 / v);
                                        s.push([1e3 * a.timestamp, 100 * (h - 1)])
                                    }, o = 1; o < f.volumeData[r][t].length; o++) a(o);
                                return e.abrupt("return", s);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), y.apply(this, arguments)
            }

            function C() {
                for (var e = d()(0), t = 0, n = Object.values(f.volumes); t < n.length; t++) {
                    var r = n[t];
                    e = e.plus(d()(r[0]))
                }
                return e
            }
        },
        b44d: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return m
            })), n.d(t, "a", (function() {
                return h
            }));
            n("caad"), n("d81d"), n("b680"), n("4fad");
            var r = n("3835"),
                s = (n("96cf"), n("1da1")),
                a = n("2b0e"),
                o = n("6314"),
                i = n.n(o),
                c = n("5245"),
                u = n("2fa3"),
                l = n("901e"),
                d = n.n(l),
                p = n("51bf"),
                f = n("5e35");

            function m() {
                return v.apply(this, arguments)
            }

            function v() {
                return v = Object(s["a"])(regeneratorRuntime.mark((function e() {
                    var t, n, s, a, o, l, m, v, b, g, w, V, _, y, C, R;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (f["b"].btcPrice) {
                                    e.next = 3;
                                    break
                                }
                                return e.next = 3, f["a"]();
                            case 3:
                                for (t = d()(0), n = {}, s = {}, [], a = p["f"].web3 || new i.a(c["j"]), o = new a.eth.Contract(c["o"], c["p"]), l = [], m = Object.assign({}, c["g"]), delete m.susd, delete m.tbtc, delete m.y, v = 0, b = Object.entries(m); v < b.length; v++) g = Object(r["a"])(b[v], 2), w = g[0], V = g[1], n[w] = new a.eth.Contract(c["c"], V.token_address), s[w] = new a.eth.Contract(V.swap_abi, V.swap_address), c["g"][w].is_meta ? l.push([s[w]._address, s[w].methods.balances(0).encodeABI()]) : l.push([n[w]._address, n[w].methods.totalSupply().encodeABI()]), l.push([s[w]._address, s[w].methods.get_virtual_price().encodeABI()]);
                                return new a.eth.Contract(c["c"], c["g"].susd.token_address), _ = new a.eth.Contract(c["g"].susd.swap_abi, c["g"].susd.swap_address), y = new a.eth.Contract(c["y"], c["g"].susd.coins[0]), l.push([y._address, y.methods.getPricePerFullShare().encodeABI()], [_._address, _.methods.balances(0).encodeABI()]), e.next = 21, o.methods.aggregate(l).call();
                            case 21:
                                return C = e.sent, R = C[1].map((function(e) {
                                    return a.eth.abi.decodeParameter("uint256", e)
                                })), Object(u["d"])(R, 2).map((function(e, n, r) {
                                    var s = d()(e[0]).times(d()(e[1])).div(1e36);
                                    n != r.length - 1 && c["g"][Object.entries(m)[n][0]].is_meta && (s = d()(e[0]).div(1e18)), [6, 7, 8].includes(n) && (s = s.times(d()(f["b"].btcPrice))), t = t.plus(s)
                                })), t = t.toFixed(0), h.total = t, e.abrupt("return", t);
                            case 27:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), v.apply(this, arguments)
            }
            var h = a["a"].observable({
                total: null
            })
        },
        c173: function(e, t, n) {
            "use strict";
            var r = n("84ff"),
                s = n.n(r);
            s.a
        }
    }
]);
//# sourceMappingURL=chunk-6774df5a.9e02ceed.js.map