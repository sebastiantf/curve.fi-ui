(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-4b3de9ea"], {
        "2bcd": function(e, t, a) {},
        "3bdc": function(e, t, a) {
            function n(e, t, a, n, r, s, i) {
                try {
                    var c = e[s](i),
                        o = c.value
                } catch (u) {
                    return void a(u)
                }
                c.done ? t(o) : Promise.resolve(o).then(n, r)
            }

            function r(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(r, s) {
                        var i = e.apply(t, a);

                        function c(e) {
                            n(i, r, s, c, o, "next", e)
                        }

                        function o(e) {
                            n(i, r, s, c, o, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            a("d3b7"), a("e6cf"), e.exports = r
        },
        "3c38": function(e, t, a) {},
        "5db7": function(e, t, a) {
            "use strict";
            var n = a("23e7"),
                r = a("a2bf"),
                s = a("7b0b"),
                i = a("50c4"),
                c = a("1c0b"),
                o = a("65f0");
            n({
                target: "Array",
                proto: !0
            }, {
                flatMap: function(e) {
                    var t, a = s(this),
                        n = i(a.length);
                    return c(e), t = o(a, 0), t.length = r(t, a, a, n, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
                }
            })
        },
        "6e7b": function(e, t, a) {
            "use strict";
            var n = a("3c38"),
                r = a.n(n);
            r.a
        },
        "73d9": function(e, t, a) {
            var n = a("44d2");
            n("flatMap")
        },
        a2bf: function(e, t, a) {
            "use strict";
            var n = a("e8b5"),
                r = a("50c4"),
                s = a("0366"),
                i = function(e, t, a, c, o, u, l, d) {
                    var f, m = o,
                        v = 0,
                        p = !!l && s(l, d, 3);
                    while (v < c) {
                        if (v in a) {
                            if (f = p ? p(a[v], v, t) : a[v], u > 0 && n(f)) m = i(e, t, f, r(f.length), m, u - 1) - 1;
                            else {
                                if (m >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                                e[m] = f
                            }
                            m++
                        }
                        v++
                    }
                    return m
                };
            e.exports = i
        },
        a5ac: function(e, t, a) {
            "use strict";
            var n = a("2bcd"),
                r = a.n(n);
            r.a
        },
        c975: function(e, t, a) {
            "use strict";
            var n = a("23e7"),
                r = a("4d64").indexOf,
                s = a("a640"),
                i = a("ae40"),
                c = [].indexOf,
                o = !!c && 1 / [1].indexOf(1, -0) < 0,
                u = s("indexOf"),
                l = i("indexOf", {
                    ACCESSORS: !0,
                    1: 0
                });
            n({
                target: "Array",
                proto: !0,
                forced: o || !u || !l
            }, {
                indexOf: function(e) {
                    return o ? c.apply(this, arguments) || 0 : r(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        e7e9: function(e, t, a) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", [a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.errorMessage,
                            expression: "errorMessage"
                        }],
                        staticClass: "simple-error pulse"
                    }, [e._v(" " + e._s(e.errorMessage) + " ")]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.gasPriceMedium,
                            expression: "gasPriceMedium"
                        }],
                        attrs: {
                            id: "gas_price"
                        }
                    }, [a("span", [e._v("Gas price:")]), a("input", {
                        attrs: {
                            id: "gasstandard",
                            type: "radio",
                            name: "gas"
                        },
                        domProps: {
                            value: e.gasPriceMedium
                        },
                        on: {
                            click: function(t) {
                                e.customGasDisabled = !0, e.gasPrice = e.gasPriceMedium
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "gasstandard"
                        }
                    }, [e._v(e._s(Math.round(e.gasPriceMedium)) + " Standard")]), a("input", {
                        attrs: {
                            id: "gasfast",
                            type: "radio",
                            name: "gas",
                            checked: ""
                        },
                        domProps: {
                            value: e.gasPriceFast
                        },
                        on: {
                            click: function(t) {
                                e.customGasDisabled = !0, e.gasPrice = e.gasPriceFast
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "gasfast"
                        }
                    }, [e._v(e._s(Math.round(e.gasPriceFast)) + " Fast")]), a("input", {
                        attrs: {
                            id: "gasinstant",
                            type: "radio",
                            name: "gas"
                        },
                        domProps: {
                            value: e.gasPriceFastest
                        },
                        on: {
                            click: function(t) {
                                e.customGasDisabled = !0, e.gasPrice = e.gasPriceFastest
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "gasinstant"
                        }
                    }, [e._v(e._s(Math.round(e.gasPriceFastest)) + " Instant")]), a("input", {
                        attrs: {
                            id: "custom_gas",
                            type: "radio",
                            name: "gas",
                            value: "-"
                        },
                        on: {
                            click: function(t) {
                                e.customGasDisabled = !1, e.gasPrice = e.gasPriceSlow
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "custom_gas"
                        },
                        on: {
                            click: function(t) {
                                e.customGasDisabled = !1, e.gasPrice = e.gasPriceSlow
                            }
                        }
                    }, [a("input", {
                        attrs: {
                            type: "text",
                            id: "custom_gas_input",
                            disabled: e.customGasDisabled,
                            name: "custom_gas_input"
                        },
                        domProps: {
                            value: e.customGasPriceInput
                        },
                        on: {
                            input: function(t) {
                                return e.setCustomGas(t)
                            }
                        }
                    }), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.customGasPriceInput == e.gasPriceSlow,
                            expression: "customGasPriceInput == gasPriceSlow"
                        }]
                    }, [e._v(" Slow")]), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.customGasPriceInput && e.customGasPriceInput < e.gasPriceSlow,
                            expression: "customGasPriceInput && customGasPriceInput < gasPriceSlow"
                        }],
                        staticClass: "gastoolow"
                    }, [e._m(0)])])])])
                },
                r = [function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("span", {
                        staticClass: "tooltip"
                    }, [e._v(" Low "), a("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" Too low gas price. Your transaction may be dropped. ")])])
                }],
                s = (a("b680"), a("d3b7"), a("96cf"), a("1da1")),
                i = a("0a37"),
                c = a("0c7c"),
                o = a("2fa3"),
                u = a("fe5c"),
                l = a("901e"),
                d = a.n(l),
                f = {
                    data: function() {
                        return {
                            customGasDisabled: !0
                        }
                    },
                    computed: {
                        gasPriceSlow: function() {
                            return i["a"].gasPriceInfo && i["a"].gasPriceInfo.low || 15
                        },
                        gasPriceMedium: function() {
                            return i["a"].gasPriceInfo && i["a"].gasPriceInfo.standard || 20
                        },
                        gasPriceFast: function() {
                            return i["a"].gasPriceInfo && i["a"].gasPriceInfo.fast || 25
                        },
                        gasPriceFastest: function() {
                            return i["a"].gasPriceInfo && i["a"].gasPriceInfo.instant || 30
                        },
                        gasPrice: {
                            get: function() {
                                return i["a"].gasPrice
                            },
                            set: function(e) {
                                i["a"].gasPrice = e
                            }
                        },
                        customGasPriceInput: function() {
                            return this.customGasDisabled ? this.gasPriceSlow : this.gasPrice
                        },
                        errorMessage: function() {
                            return setTimeout((function() {
                                return c["b"].txError = null
                            }), 5e3), c["b"].txError
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(s["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        !i["a"].fetched && e.getGasPrice(), i["a"].gasPriceInterval && Object(u["clearIntervalAsync"])(i["a"].gasPriceInterval), i["a"].gasPriceInterval && !i["a"].gasPriceInterval.stopped || (i["a"].gasPriceInterval = Object(u["setIntervalAsync"])((function() {
                                            return e.getGasPrice()
                                        }), 3e3)), e.$watch((function() {
                                            return i["a"].gasPrice
                                        }), (function(e) {
                                            i["a"].gasPriceWei = d()(e).times(1e9).toFixed(0, 1)
                                        }), {
                                            immediate: !0
                                        });
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    methods: {
                        getGasPrice: function() {
                            return Object(s["a"])(regeneratorRuntime.mark((function e() {
                                var t, a, n;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, Object(o["q"])(fetch("https://gasprice.poa.network/"));
                                        case 3:
                                            return t = e.sent, e.next = 6, t.json();
                                        case 6:
                                            if (t = e.sent, t.low = t.slow, i["a"].gasPriceInfo = t, !(i["a"].gasPriceInfo.fast > 1e3)) {
                                                e.next = 11;
                                                break
                                            }
                                            throw new Error("too high!");
                                        case 11:
                                            e.next = 39;
                                            break;
                                        case 13:
                                            return e.prev = 13, e.t0 = e["catch"](0), e.prev = 15, e.next = 18, Object(o["q"])(fetch("https://fees.upvest.co/estimate_eth_fees"));
                                        case 18:
                                            return a = e.sent, e.next = 21, a.json();
                                        case 21:
                                            if (a = e.sent, i["a"].gasPriceInfo = a.estimates, i["a"].gasPriceInfo.low = i["a"].gasPriceInfo.slow, i["a"].gasPriceInfo.standard = i["a"].gasPriceInfo.medium, i["a"].gasPriceInfo.fast = i["a"].gasPriceInfo.fast, i["a"].gasPriceInfo.instant = i["a"].gasPriceInfo.fastest, !(i["a"].gasPriceInfo.fast > 1e3)) {
                                                e.next = 29;
                                                break
                                            }
                                            throw new Error("too high!");
                                        case 29:
                                            e.next = 39;
                                            break;
                                        case 31:
                                            return e.prev = 31, e.t1 = e["catch"](15), console.error(e.t1), e.next = 36, web3.eth.getGasPrice();
                                        case 36:
                                            e.t2 = e.sent, n = e.t2 / 1e9, i["a"].gasPriceInfo = {
                                                low: n - 2,
                                                standard: n,
                                                fast: n + 2,
                                                instant: n + 4
                                            };
                                        case 39:
                                            i["a"].fetched || (i["a"].gasPrice = i["a"].gasPriceInfo.fast, i["a"].fetched = !0);
                                        case 40:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 13],
                                    [15, 31]
                                ])
                            })))()
                        },
                        setCustomGas: function(e) {
                            var t = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function a() {
                                var n;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            n = e.target.value, e.target.value > 2 * t.gasPriceFastest && (n = 2 * t.gasPriceFastest), t.gasPrice = n;
                                        case 3:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        }
                    }
                },
                m = f,
                v = (a("6e7b"), a("2877")),
                p = Object(v["a"])(m, n, r, !1, null, "207c7b6a", null);
            t["a"] = p.exports
        },
        eda9: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "white window"
                    }, [a("fieldset", [a("legend", [e._v("Pay in " + e._s(e.currency) + " with Curve tokens")]), a("div", {
                        staticClass: "paycontainer"
                    }, [a("div", {
                        staticClass: "inputcontainer"
                    }, [a("label", {
                        attrs: {
                            for: "payamount"
                        }
                    }, [e._v("Amount in " + e._s(e.currency) + ":")]), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.amount,
                            expression: "amount"
                        }],
                        style: {
                            backgroundColor: e.bgColor
                        },
                        attrs: {
                            type: "text",
                            id: "payamount"
                        },
                        domProps: {
                            value: e.amount
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.amount = t.target.value)
                            }
                        }
                    })]), a("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.token,
                            expression: "token"
                        }],
                        staticClass: "tvision",
                        on: {
                            change: function(t) {
                                var a = Array.prototype.filter.call(t.target.options, (function(e) {
                                    return e.selected
                                })).map((function(e) {
                                    var t = "_value" in e ? e._value : e.value;
                                    return t
                                }));
                                e.token = t.target.multiple ? a : a[0]
                            }
                        }
                    }, e._l(e.tokenNames, (function(t, n) {
                        return a("option", {
                            domProps: {
                                value: t
                            }
                        }, [e._v(e._s(t) + " " + e._s(e.balances[n] && (["renCrv", "sbtcCrv", "hbtcCrv"].includes(t) ? "₿" : "$") + e.toFixed(e.balances[n] * e.virtual_prices[n] / 1e36, t)) + " ")])
                    })), 0), a("div", {
                        attrs: {
                            id: "balance"
                        },
                        on: {
                            click: e.setMaxBalance
                        }
                    }, [e._v(" Balance: " + e._s((e.currentBalance / 1e36).toFixed(2)) + "$ ")]), a("div", {
                        staticClass: "flex-break"
                    }), a("div", [e._v(" Amount in " + e._s(e.token) + ": "), a("span", {
                        class: {
                            "loading line": null == e.crvAmount
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null != e.crvAmount,
                            expression: "crvAmount != null"
                        }]
                    }, [e._v(" " + e._s(e.crvAmount) + " ")])])]), a("div", {
                        staticClass: "flex-break"
                    }), a("label", {
                        attrs: {
                            for: "address"
                        }
                    }, [e._v("ETH address:")]), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.to,
                            expression: "to"
                        }],
                        attrs: {
                            type: "text",
                            id: "address"
                        },
                        domProps: {
                            value: e.to
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.to = t.target.value)
                            }
                        }
                    }), a("div", {
                        staticClass: "flex-breakc noheight"
                    }), a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.to && !e.isValidAddress,
                            expression: "to && !isValidAddress"
                        }],
                        staticClass: "simple-error"
                    }, [e._v(" Please enter ETH address ")]), a("div", {
                        staticClass: "flex-breakc noheight"
                    }), a("button", {
                        attrs: {
                            id: "submit",
                            disabled: !e.isValidAddress
                        },
                        on: {
                            click: e.pay
                        }
                    }, [e._v("Pay")])]), a("gas-price")], 1)])
                },
                r = [],
                s = (a("99af"), a("4de4"), a("5db7"), a("caad"), a("c975"), a("d81d"), a("fb6a"), a("73d9"), a("b680"), a("b64b"), a("d3b7"), a("25f0"), a("2909")),
                i = (a("96cf"), a("1da1")),
                c = a("2b0e"),
                o = a("d99e"),
                u = a("51bf"),
                l = a("5245"),
                d = a("0a37"),
                f = a("e7e9"),
                m = a("0c7c"),
                v = a("901e"),
                p = a.n(v),
                g = (a("2fa3"), {
                    components: {
                        GasPrice: f["a"]
                    },
                    data: function() {
                        return {
                            token: "cCrv",
                            tokenNames: ["cCrv", "tCrv", "yCrv", "bCrv", "sCrv", "pCrv", "renCrv", "sbtcCrv", "hbtcCrv", "3Crv"],
                            tokens: [],
                            contracts: [],
                            swaps: [],
                            unstakedBalances: [],
                            balances: [],
                            virtual_prices: [],
                            amount: "0.00",
                            maxAmount: null,
                            to: null,
                            bgColor: "blue"
                        }
                    },
                    watch: {
                        amount: function() {
                            this.highlight_amount()
                        },
                        token: function() {
                            this.highlight_amount()
                        }
                    },
                    computed: {
                        currentBalance: function() {
                            var e = this.tokenNames.indexOf(this.token);
                            return this.balances[e] * this.virtual_prices[e] || 0
                        },
                        crvAmount: function() {
                            if (!this.amount) return "0.00";
                            var e = this.tokenNames.indexOf(this.token);
                            if (!this.virtual_prices[e]) return null;
                            console.log(this.token, "THE TOKEN");
                            var t = this.toFixed(p()(this.amount).div(p()(this.virtual_prices[e]).div(1e18)), this.token);
                            return t
                        },
                        abis: function() {
                            return Object.keys(l["g"]).filter((function(e) {
                                return "susd" != e && "y" != e && "tbtc" != e
                            }))
                        },
                        isValidAddress: function() {
                            return u["f"].web3.utils.isAddress(this.to)
                        },
                        currency: function() {
                            return ["renCrv", "sbtcCrv", "hbtcCrv"].includes(this.token) ? "BTC" : "USD"
                        },
                        gasPriceWei: function() {
                            return d["a"].gasPriceWei
                        }
                    },
                    mounted: function() {
                        u["f"].default_account && u["f"].multicall && this.mounted()
                    },
                    created: function() {
                        var e = this;
                        this.$watch((function() {
                            return u["f"].default_account && u["f"].multicall
                        }), (function(t) {
                            t && e.mounted()
                        }));
                        var t = this.$route.params.pool;
                        if ("y" == t && (t = "iearn"), t) {
                            var a = Object.keys(l["g"]).filter((function(e) {
                                return "y" != e && "susd" != e && "tbtc" != e
                            })).indexOf(t);
                            this.token = this.tokenNames[a]
                        }
                    },
                    methods: {
                        mounted: function() {
                            var e = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            e.contracts = e.abis.map((function(e) {
                                                return new u["f"].web3.eth.Contract(l["c"], l["g"][e].token_address)
                                            })), e.swaps = e.abis.map((function(e) {
                                                return new u["f"].web3.eth.Contract(l["g"][e].swap_abi, l["g"][e].swap_address)
                                            })), e.rewards = [new u["f"].web3.eth.Contract(l["g"].susdv2.sCurveRewards_abi, l["g"].susdv2.sCurveRewards_address), new u["f"].web3.eth.Contract(l["g"].sbtc.sCurveRewards_abi, l["g"].sbtc.sCurveRewards_address)], e.updateBalances();
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        unstake: function(e) {
                            var t = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function a() {
                                var n, r, s, i;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return n = "Please confirm unstaking ".concat(t.toFixed(e, t.token), " ").concat(t.token, " tokens"), r = Object(o["d"])(n), s = r.dismiss, i = "sCrv" == t.token ? t.rewards[0] : t.rewards[1], a.prev = 3, a.next = 6, new Promise((function(a, n) {
                                                i.methods.withdraw(e.toFixed(0, 1)).send({
                                                    from: u["f"].default_account,
                                                    gasPrice: t.gasPriceWei,
                                                    gas: 125e3
                                                }).once("transactionHash", (function(e) {
                                                    s(), Object(o["c"])(e), a()
                                                })).catch((function(e) {
                                                    s(), n(e)
                                                }))
                                            }));
                                        case 6:
                                            a.next = 12;
                                            break;
                                        case 8:
                                            a.prev = 8, a.t0 = a["catch"](3), console.log(a.t0), m["a"](a.t0);
                                        case 12:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [3, 8]
                                ])
                            })))()
                        },
                        pay: function() {
                            var e = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (a = e.tokenNames.indexOf(e.token), n = p()(e.amount).times(1e18).div(p()(e.virtual_prices[a])).times(1e18).toFixed(0, 1), e.maxAmount.minus(p()(e.amount).times(1e36)).div(1e36).lt(p()(.01)) && (n = e.maxAmount.div(p()(e.virtual_prices[a]))), n = p()(n), !["sCrv", "renCrv"].includes(e.token)) {
                                                t.next = 9;
                                                break
                                            }
                                            if (r = "sCrv" == e.token ? 4 : 6, !n.gt(p()(e.unstakedBalances[r]))) {
                                                t.next = 9;
                                                break
                                            }
                                            return t.next = 9, e.unstake(n.minus(p()(e.unstakedBalances[r])));
                                        case 9:
                                            return t.next = 11, e.contracts[a].methods.transfer(e.to, n.toFixed(0, 1)).send({
                                                from: u["f"].default_account,
                                                gasPrice: e.gasPriceWei,
                                                gas: 1e5
                                            });
                                        case 11:
                                            e.updateBalances();
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        updateBalances: function() {
                            var e = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return a = e.abis.flatMap((function(t, a) {
                                                return [
                                                    [l["g"][t].token_address, e.contracts[a].methods.balanceOf(u["f"].default_account).encodeABI()],
                                                    [l["g"][t].swap_address, e.swaps[a].methods.get_virtual_price().encodeABI()]
                                                ]
                                            })), a.push.apply(a, Object(s["a"])(e.rewards.map((function(e) {
                                                return [e._address, e.methods.balanceOf(u["f"].default_account).encodeABI()]
                                            })))), t.next = 4, u["f"].multicall.methods.aggregate(a).call();
                                        case 4:
                                            n = t.sent, r = n[1].map((function(e) {
                                                return u["f"].web3.eth.abi.decodeParameter("uint256", e)
                                            })), e.balances = r.slice(0, -2).filter((function(e, t) {
                                                return t % 2 == 0
                                            })), e.unstakedBalances = e.balances.slice(), e.virtual_prices = r.slice(0, -2).filter((function(e, t) {
                                                return t % 2 != 0
                                            })), c["a"].set(e.balances, 4, p()(e.balances[4]).plus(r[r.length - 2]).toString()), c["a"].set(e.balances, 6, p()(e.balances[6]).plus(r[r.length - 1]).toString());
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        highlight_amount: function() {
                            var e = this.tokenNames.indexOf(this.token);
                            this.maxAmount = p()(this.balances[e]).times(p()(this.virtual_prices[e])), p()(this.amount).times(p()(1e36)).gt(this.maxAmount) ? this.bgColor = "red" : this.bgColor = "blue"
                        },
                        setMaxBalance: function() {
                            this.amount = Math.floor(this.currentBalance / 1e36 * 100) / 100
                        },
                        toFixed: function(e, t) {
                            return ["renCrv", "sbtcCrv"].includes(t) ? +e.toFixed(8) : +e.toFixed(2)
                        }
                    }
                }),
                h = g,
                b = (a("a5ac"), a("2877")),
                w = Object(b["a"])(h, n, r, !1, null, "16f13224", null);
            t["default"] = w.exports
        },
        fe5c: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "SetIntervalAsyncError", (function() {
                return c
            })), a.d(t, "clearIntervalAsync", (function() {
                return s
            })), a.d(t, "setIntervalAsync", (function() {
                return f
            }));
            var n = a("3bdc");
            const r = Math.pow(2, 31) - 1;

            function s(e) {
                return i.apply(this, arguments)
            }

            function i() {
                return i = n((function*(e) {
                    e.stopped = !0;
                    for (var t = 0, a = Object.values(e.timeouts); t < a.length; t++) {
                        const e = a[t];
                        clearTimeout(e)
                    }
                    const n = () => {},
                        s = Object.values(e.promises).map(e => {
                            e.catch(n)
                        }),
                        i = setInterval(n, r);
                    yield Promise.all(s), clearInterval(i)
                })), i.apply(this, arguments)
            }
            class c extends Error {}
            Object.defineProperty(c.prototype, "name", {
                value: "SetIntervalAsyncError"
            });
            const o = 10;

            function u(e) {
                if ("function" !== typeof e) throw new c('Invalid argument: "handler". Expected a function.')
            }

            function l(e) {
                if (!("number" === typeof e && o <= e)) throw new c(`Invalid argument: "interval". Expected a number greater than or equal to ${o}.`)
            }
            class d {
                constructor() {
                    this.stopped = !1, this.id = 0, this.timeouts = {}, this.promises = {}
                }
            }

            function f(e, t, ...a) {
                u(e), l(t);
                const n = new d,
                    r = n.id;
                return n.timeouts[r] = setTimeout(m, t, n, e, t, ...a), n
            }

            function m(e, t, a, ...r) {
                const s = e.id;
                e.promises[s] = n((function*() {
                    const n = new Date;
                    try {
                        yield t(...r)
                    } catch (c) {
                        console.error(c)
                    }
                    const i = new Date;
                    if (!e.stopped) {
                        const c = i - n,
                            o = a > c ? a - c : 0;
                        e.timeouts[s + 1] = setTimeout(m, o, e, t, a, ...r)
                    }
                    delete e.timeouts[s], delete e.promises[s]
                }))(), e.id = s + 1
            }
        }
    }
]);
//# sourceMappingURL=chunk-4b3de9ea.abd4ff84.js.map