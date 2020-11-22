(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-a956ca0a", "chunk-2d0d3a28"], {
        "07ac": function(e, t, a) {
            var r = a("23e7"),
                n = a("6f53").values;
            r({
                target: "Object",
                stat: !0
            }, {
                values: function(e) {
                    return n(e)
                }
            })
        },
        "0b7b": function(e, t, a) {
            e.exports = "https://www.curve.fi/img/clock-regular.54749a5a.svg"
        },
        1345: function(e, t, a) {},
        "3bdc": function(e, t, a) {
            function r(e, t, a, r, n, s, c) {
                try {
                    var i = e[s](c),
                        o = i.value
                } catch (u) {
                    return void a(u)
                }
                i.done ? t(o) : Promise.resolve(o).then(r, n)
            }

            function n(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, s) {
                        var c = e.apply(t, a);

                        function i(e) {
                            r(c, n, s, i, o, "next", e)
                        }

                        function o(e) {
                            r(c, n, s, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            a("d3b7"), a("e6cf"), e.exports = n
        },
        "3c38": function(e, t, a) {},
        "5e35": function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return s
            })), a.d(t, "a", (function() {
                return c
            }));
            a("d3b7"), a("96cf");
            var r = a("1da1"),
                n = a("2fa3"),
                s = {
                    btcPrice: null
                };

            function c() {
                return i.apply(this, arguments)
            }

            function i() {
                return i = Object(r["a"])(regeneratorRuntime.mark((function e() {
                    var t, a;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n["q"](fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"), 300);
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
        "6e7b": function(e, t, a) {
            "use strict";
            var r = a("3c38"),
                n = a.n(r);
            n.a
        },
        cc22: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", [r("div", {}, [r("div", {
                        staticClass: "exchange"
                    }, [r("div", {
                        staticClass: "exchangefields"
                    }, [r("fieldset", {
                        staticClass: "item"
                    }, [r("legend", [e._v("From:")]), r("div", {
                        staticClass: "maxbalance",
                        on: {
                            click: e.set_max_balance
                        }
                    }, [e._v(" Max: "), r("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ("susdv2" == e.currentPool && 3 == e.from_currency || "sbtc" == e.currentPool && 2 == e.from_currency || "tbtc" == e.currentPool && 3 == e.from_currency) && "0.00" != e.maxBalanceText,
                            expression: "(currentPool == 'susdv2' && from_currency == 3 || currentPool == 'sbtc' && from_currency == 2 || currentPool == 'tbtc' && from_currency == 3)\n                                         && maxBalanceText != '0.00'"
                        }]
                    }, [e._v(" " + e._s(e.maxSynthText) + "/ ")]), r("span", [e._v(e._s(e.maxBalanceText))]), r("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.susdWaitingPeriod,
                            expression: "susdWaitingPeriod"
                        }],
                        staticClass: "susd-waiting-period"
                    }, [r("span", {
                        staticClass: "tooltip"
                    }, [r("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: a("0b7b")
                        }
                    }), r("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" Cannot transfer during waiting period. " + e._s(e.susdWaitingPeriodTime.toFixed(0)) + " secs left. ")])])]), r("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ("susdv2" == e.currentPool && 3 == e.from_currency || "sbtc" == e.currentPool && 2 == e.from_currency) && "0.00" != e.maxBalanceText,
                            expression: "(currentPool == 'susdv2' && from_currency == 3 || currentPool == 'sbtc' && from_currency == 2)\n                                            && maxBalanceText != '0.00'"
                        }],
                        staticClass: "tooltip"
                    }, [e._v(" [?] "), r("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" Max transferrable amount is " + e._s(e.maxSynthText) + ". You can free the remaining balance by settling. ")])])]), r("ul", [r("li", [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.fromInput,
                            expression: "fromInput"
                        }],
                        style: {
                            backgroundColor: e.fromBgColor
                        },
                        attrs: {
                            type: "text",
                            id: "from_currency",
                            disabled: e.disabled,
                            name: "from_currency",
                            value: "0.00"
                        },
                        domProps: {
                            value: e.fromInput
                        },
                        on: {
                            input: [function(t) {
                                t.target.composing || (e.fromInput = t.target.value)
                            }, e.set_to_amount]
                        }
                    }), r("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.swapwrapped && !e.is_meta,
                            expression: "swapwrapped && !is_meta"
                        }],
                        staticClass: "actualvalue"
                    }, [e._v(" ≈ " + e._s(e.toFixed(e.actualFromValue)) + " " + e._s(e._f("capitalize")(Object.keys(e.currencies)[this.from_currency])) + " ")]), r("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["sbtc", "ren", "hbtc"].includes(e.currentPool),
                            expression: "['sbtc', 'ren', 'hbtc'].includes(currentPool)"
                        }],
                        staticClass: "actualvalue"
                    }, [e._v(" ≈ " + e._s(e.actualFromValue) + "$ ")])]), e._l(Object.keys(e.currencies), (function(t, a) {
                        var n;
                        return r("li", {
                            staticClass: "coins"
                        }, [r("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.from_currency,
                                expression: "from_currency"
                            }],
                            attrs: {
                                type: "radio",
                                id: "from_cur_" + a,
                                name: "from_cur"
                            },
                            domProps: {
                                value: a,
                                checked: e._q(e.from_currency, a)
                            },
                            on: {
                                change: function(t) {
                                    e.from_currency = a
                                }
                            }
                        }), r("label", {
                            attrs: {
                                for: "from_cur_" + a
                            }
                        }, [r("img", {
                            class: (n = {
                                "token-icon": !0
                            }, n[t + "-icon"] = !0, n["y"] = e.swapwrapped, n),
                            attrs: {
                                src: e.getTokenIcon(t)
                            }
                        }), r("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.swapwrapped && !["tbtc", "ren", "sbtc", "hbtc"].includes(e.currentPool),
                                expression: "!swapwrapped && !['tbtc', 'ren', 'sbtc', 'hbtc'].includes(currentPool)"
                            }]
                        }, [e._v(e._s(e._f("capitalize")(t)))]), r("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.swapwrapped || ["tbtc", "ren", "sbtc", "hbtc"].includes(e.currentPool),
                                expression: "swapwrapped || ['tbtc', 'ren', 'sbtc', 'hbtc'].includes(currentPool)"
                            }]
                        }, [e._v(e._s(e.currencies[t]))])])])
                    }))], 2)]), r("fieldset", {
                        staticClass: "item iconcontainer",
                        on: {
                            click: e.swapInputs
                        }
                    }, [r("img", {
                        attrs: {
                            src: "https://www.curve.fi/exchange-alt-solid.svg",
                            id: "exchangeicon"
                        }
                    })]), r("fieldset", {
                        staticClass: "item"
                    }, [r("legend", [e._v("To:")]), e._m(0), r("ul", [r("li", [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.toInput,
                            expression: "toInput"
                        }],
                        style: {
                            backgroundColor: e.bgColor
                        },
                        attrs: {
                            type: "text",
                            id: "to_currency",
                            name: "to_currency",
                            value: "0.00",
                            disabled: ""
                        },
                        domProps: {
                            value: e.toInput
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.toInput = t.target.value)
                            }
                        }
                    }), r("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.swapwrapped && !e.is_meta,
                            expression: "swapwrapped && !is_meta"
                        }],
                        staticClass: "actualvalue"
                    }, [e._v(" ≈ " + e._s(e.toFixed(e.actualToValue)) + " " + e._s(e._f("capitalize")(Object.keys(e.currencies)[this.to_currency])) + " ")]), r("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["ren", "sbtc", "hbtc"].includes(e.currentPool),
                            expression: "['ren', 'sbtc', 'hbtc'].includes(currentPool)"
                        }],
                        staticClass: "actualvalue"
                    }, [e._v(" ≈ " + e._s(e.actualToValue) + "$ ")])]), e._l(Object.keys(e.currencies), (function(t, a) {
                        var n;
                        return r("li", {
                            staticClass: "coins"
                        }, [r("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.to_currency,
                                expression: "to_currency"
                            }],
                            attrs: {
                                type: "radio",
                                id: "to_cur_" + a,
                                name: "to_cur"
                            },
                            domProps: {
                                value: a,
                                checked: e._q(e.to_currency, a)
                            },
                            on: {
                                change: function(t) {
                                    e.to_currency = a
                                }
                            }
                        }), r("label", {
                            attrs: {
                                for: "to_cur_" + a
                            }
                        }, [r("img", {
                            class: (n = {
                                "token-icon": !0
                            }, n[t + "-icon"] = !0, n["y"] = e.swapwrapped, n),
                            attrs: {
                                src: e.getTokenIcon(t)
                            }
                        }), r("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.swapwrapped && !["tbtc", "ren", "hbtc"].includes(e.currentPool),
                                expression: "!swapwrapped && !['tbtc', 'ren', 'hbtc'].includes(currentPool)"
                            }]
                        }, [e._v(e._s(e._f("capitalize")(t)))]), r("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.swapwrapped || ["tbtc", "ren", "hbtc"].includes(e.currentPool),
                                expression: "swapwrapped || ['tbtc', 'ren', 'hbtc'].includes(currentPool)"
                            }]
                        }, [e._v(e._s(e.currencies[t]))])])])
                    }))], 2)])]), r("p", {
                        staticClass: "exchange-rate"
                    }, [e._v(" Exchange rate "), r("span", {
                        staticClass: "clickable underline",
                        on: {
                            click: e.swapExchangeRate
                        }
                    }, [e._v(" " + e._s(e.getPair(e.swaprate)) + " "), r("img", {
                        staticClass: "swaprates-icon",
                        attrs: {
                            src: "https://www.curve.fi/sync-solid.svg"
                        }
                    })]), e._v(" (including fees): "), r("span", {
                        staticClass: "clickable",
                        attrs: {
                            id: "exchange-rate"
                        },
                        on: {
                            click: e.swapExchangeRate
                        }
                    }, [e._v(" " + e._s(e.exchangeRateSwapped) + " ")])]), r("ul", [r("li", [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.inf_approval,
                            expression: "inf_approval"
                        }],
                        attrs: {
                            id: "inf-approval",
                            type: "checkbox",
                            name: "inf-approval"
                        },
                        domProps: {
                            checked: Array.isArray(e.inf_approval) ? e._i(e.inf_approval, null) > -1 : e.inf_approval
                        },
                        on: {
                            change: function(t) {
                                var a = e.inf_approval,
                                    r = t.target,
                                    n = !!r.checked;
                                if (Array.isArray(a)) {
                                    var s = null,
                                        c = e._i(a, s);
                                    r.checked ? c < 0 && (e.inf_approval = a.concat([s])) : c > -1 && (e.inf_approval = a.slice(0, c).concat(a.slice(c + 1)))
                                } else e.inf_approval = n
                            }
                        }
                    }), e._m(1)]), r("li", [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.swapwrapped,
                            expression: "swapwrapped"
                        }],
                        attrs: {
                            id: "swapw",
                            type: "checkbox",
                            name: "swapw"
                        },
                        domProps: {
                            checked: Array.isArray(e.swapwrapped) ? e._i(e.swapwrapped, null) > -1 : e.swapwrapped
                        },
                        on: {
                            change: function(t) {
                                var a = e.swapwrapped,
                                    r = t.target,
                                    n = !!r.checked;
                                if (Array.isArray(a)) {
                                    var s = null,
                                        c = e._i(a, s);
                                    r.checked ? c < 0 && (e.swapwrapped = a.concat([s])) : c > -1 && (e.swapwrapped = a.slice(0, c).concat(a.slice(c + 1)))
                                } else e.swapwrapped = n
                            }
                        }
                    }), r("label", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !["susdv2", "ren", "sbtc", "hbtc", "3pool"].includes(e.currentPool),
                            expression: "!['susdv2', 'ren', 'sbtc', 'hbtc', '3pool'].includes(currentPool)"
                        }],
                        attrs: {
                            for: "swapw"
                        }
                    }, [e._v("Swap wrapped")])])]), r("div", [r("button", {
                        staticClass: "simplebutton advancedoptions",
                        on: {
                            click: function(t) {
                                e.showadvancedoptions = !e.showadvancedoptions
                            }
                        }
                    }, [e._v(" Advanced options "), r("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.showadvancedoptions,
                            expression: "!showadvancedoptions"
                        }]
                    }, [e._v("▼")]), r("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showadvancedoptions,
                            expression: "showadvancedoptions"
                        }]
                    }, [e._v("▲")])]), r("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showadvancedoptions,
                            expression: "showadvancedoptions"
                        }]
                    }, [r("fieldset", [r("legend", [e._v("Advanced options:")]), r("div", {
                        attrs: {
                            id: "max_slippage"
                        }
                    }, [r("span", [e._v("Max slippage:")]), r("input", {
                        attrs: {
                            id: "slippage05",
                            type: "radio",
                            name: "slippage",
                            value: "0.005"
                        },
                        on: {
                            click: function(t) {
                                e.maxSlippage = .5, e.customSlippageDisabled = !0
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "slippage05"
                        }
                    }, [e._v("0.5%")]), r("input", {
                        attrs: {
                            id: "slippage1",
                            type: "radio",
                            name: "slippage",
                            checked: "",
                            value: "0.01"
                        },
                        on: {
                            click: function(t) {
                                e.maxSlippage = 1, e.customSlippageDisabled = !0
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "slippage1"
                        }
                    }, [e._v("1%")]), r("input", {
                        attrs: {
                            id: "custom_slippage",
                            type: "radio",
                            name: "slippage",
                            value: "-"
                        },
                        on: {
                            click: function(t) {
                                e.customSlippageDisabled = !1
                            }
                        }
                    }), r("label", {
                        attrs: {
                            for: "custom_slippage"
                        },
                        on: {
                            click: function(t) {
                                e.customSlippageDisabled = !1
                            }
                        }
                    }, [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.maxInputSlippage,
                            expression: "maxInputSlippage"
                        }],
                        attrs: {
                            type: "text",
                            id: "custom_slippage_input",
                            disabled: e.customSlippageDisabled,
                            name: "custom_slippage_input"
                        },
                        domProps: {
                            value: e.maxInputSlippage
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.maxInputSlippage = t.target.value)
                            }
                        }
                    }), e._v(" % ")]), r("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showSlippageTooLow,
                            expression: "showSlippageTooLow"
                        }],
                        staticClass: "tooltip"
                    }, [r("img", {
                        staticClass: "icon small hoverpointer warning",
                        attrs: {
                            src: "https://www.curve.fi/exclamation-circle-solid.svg"
                        }
                    }), r("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" Max slippage value is likely too low and the transaction may fail ")])])]), r("gas-price")], 1)])]), r("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.exchangeRate <= .98 && e.to_currency > 0 && !["ren", "sbtc"].includes(e.currentPool),
                            expression: "exchangeRate<=0.98 && (to_currency > 0 && !['ren', 'sbtc'].includes(currentPool))"
                        }],
                        staticClass: "simple-error"
                    }, [e._v(" Warning! Exchange rate is too low! ")]), r("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.exchangeRate <= .98 && ["ren", "sbtc"].includes(e.currentPool),
                            expression: "exchangeRate<=0.98 && ['ren', 'sbtc'].includes(currentPool)"
                        }],
                        staticClass: "simple-error"
                    }, [e._v(" Warning! Exchange rate is too low! ")]), r("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.exchangeRate <= .95 && 0 == e.to_currency && !["ren", "sbtc"].includes(e.currentPool),
                            expression: "exchangeRate<=0.95 && (to_currency == 0 && !['ren', 'sbtc'].includes(currentPool))"
                        }],
                        staticClass: "simple-error"
                    }, [e._v(" Warning! Exchange rate is too low! ")]), r("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["ren", "sbtc"].includes(e.currentPool),
                            expression: "['ren', 'sbtc'].includes(currentPool)"
                        }],
                        staticClass: "trade-buttons"
                    }, [r("a", {
                        attrs: {
                            href: "https://bridge.renproject.io/"
                        }
                    }, [e._v("Mint/redeem renBTC")])]), r("p", {
                        staticClass: "trade-buttons"
                    }, [r("button", {
                        attrs: {
                            id: "trade"
                        },
                        on: {
                            click: e.handle_trade
                        }
                    }, [e._v(" Sell "), r("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.loadingAction,
                            expression: "loadingAction"
                        }],
                        staticClass: "loading line"
                    })])]), r("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.show_loading,
                            expression: "show_loading"
                        }],
                        staticClass: "info-message gentle-message waiting-message"
                    }, [r("span", {
                        domProps: {
                            innerHTML: e._s(e.waitingMessage)
                        }
                    }), r("span", {
                        staticClass: "loading line"
                    })]), r("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.selldisabled,
                            expression: "selldisabled"
                        }],
                        staticClass: "simple-error",
                        attrs: {
                            id: "no-balance"
                        }
                    }, [e._v(" Not enough balance for "), r("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.swapwrapped,
                            expression: "!swapwrapped"
                        }]
                    }, [e._v(e._s(e._f("capitalize")(Object.keys(e.currencies)[e.from_currency])))]), r("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.swapwrapped,
                            expression: "swapwrapped"
                        }]
                    }, [e._v(e._s(Object.values(e.currencies)[e.from_currency]))]), e._v(". "), r("span", [e._v("Swap is not available.")])]), r("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.susdWaitingPeriod,
                            expression: "susdWaitingPeriod"
                        }],
                        staticClass: "simple-error pulse"
                    }, [e._v(" Cannot transfer " + e._s("susdv2" == e.currentPool ? "sUSD" : "sBTC") + " during waiting period. " + e._s(e.susdWaitingPeriodTime.toFixed(0)) + " secs left. ")]), r("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.estimateGas,
                            expression: "estimateGas"
                        }],
                        staticClass: "info-message gentle-message"
                    }, [e._v(" Estimated tx cost: " + e._s((e.estimateGas * e.gasPrice / 1e9 * e.ethPrice).toFixed(2)) + "$ ")])])])])
                },
                n = [function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "maxbalance2"
                    }, [e._v("Max: "), a("span")])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("label", {
                        attrs: {
                            for: "inf-approval"
                        }
                    }, [e._v("Infinite approval - trust this contract forever "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" Preapprove the contract to to be able to spend any amount of your coins. You will not need to approve again. ")])])])
                }],
                s = (a("99af"), a("caad"), a("d81d"), a("fb6a"), a("b680"), a("b64b"), a("d3b7"), a("07ac"), a("25f0"), a("3ca3"), a("ddb0"), a("3835")),
                c = a("2909"),
                i = a("5530"),
                o = (a("96cf"), a("1da1")),
                u = a("cf45"),
                l = a("d99e"),
                p = a("51bf"),
                d = a("2fa3"),
                m = a("5245"),
                f = a("5e35"),
                h = a("0a37"),
                v = a("e7e9"),
                w = a("0c7c"),
                g = a("901e"),
                _ = a.n(g),
                b = a("fe5c"),
                x = (b.setIntervalAsync, b.clearIntervalAsync),
                P = function(e) {
                    return new _.a(e)
                },
                y = {
                    components: {
                        GasPrice: v["a"]
                    },
                    data: function() {
                        return {
                            disabled: !0,
                            from_currency: 0,
                            to_currency: 1,
                            inf_approval: !0,
                            fromInput: "1.00",
                            toInput: 0,
                            updateTimer: null,
                            btcPrice: null,
                            maxBalance: -1,
                            maxSynthBalance: -1,
                            susdWaitingPeriod: !1,
                            susdWaitingPeriodTime: 0,
                            maxBalanceText: 0,
                            maxSynthText: 0,
                            promise: d["n"](Promise.resolve()),
                            exchangeRate: "Not available",
                            swaprate: !1,
                            bgColor: "#505070",
                            fromBgColor: "blue",
                            maxSlippage: 1,
                            maxInputSlippage: "",
                            customSlippageDisabled: !0,
                            swapwrapped: !1,
                            coins: [],
                            c_rates: [],
                            get showadvancedoptions() {
                                return "true" === localStorage.getItem("advancedoptions") || +this.fromInput > 5e3 || ["ren", "sbtc"].includes(p["f"].currentContract) && +this.fromInput > .5
                            },
                            set showadvancedoptions(e) {
                                localStorage.setItem("advancedoptions", e)
                            },
                            show_loading: !1,
                            waitingMessage: "",
                            userInteracted: !1,
                            estimateGas: 0,
                            ethPrice: 0,
                            icontype: "",
                            loadingAction: !1,
                            interval: null
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.$watch((function() {
                                            return p["f"].default_account
                                        }), (function(t, a) {
                                            t && a && t.toLowerCase() != a.toLowerCase() && e.mounted()
                                        })), e.$watch((function() {
                                            return p["f"].initializedContracts
                                        }), (function(t) {
                                            t && e.mounted(), console.timeEnd("initswap")
                                        }));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    watch: {
                        from_currency: function(e, t) {
                            e == this.to_currency && (this.to_currency = t), this.from_cur_handler()
                        },
                        to_currency: function(e, t) {
                            this.to_cur_handler()
                        },
                        swapwrapped: function() {
                            this.mounted()
                        },
                        maxBalance: function(e) {
                            var t = e / this.precisions[this.from_currency];
                            this.maxBalanceText = p["f"].default_account ? this.toFixed(t) : 0
                        },
                        maxSynthBalance: function(e) {
                            if (isNaN(e)) return "0.00";
                            this.maxSynthText = this.toFixed(e)
                        },
                        triggerEstimateGas: {
                            handler: function() {
                                var e = Object(o["a"])(regeneratorRuntime.mark((function e() {
                                    var t, a, r;
                                    return regeneratorRuntime.wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return t = this.from_currency, a = this.to_currency, e.next = 4, Promise.all([d["i"]()]);
                                            case 4:
                                                r = e.sent, this.ethPrice = r[0], this.estimateGas = this.swapwrapped ? p["g"].swap[this.currentPool].exchange(t, a) / 2 : p["g"].swap[this.currentPool].exchange_underlying(t, a) / 2;
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));

                                function t() {
                                    return e.apply(this, arguments)
                                }
                                return t
                            }(),
                            immediate: !0
                        },
                        fromInput: function() {
                            this.userInteracted = !0
                        }
                    },
                    computed: Object(i["a"])({
                        precisions: function() {
                            var e = m["g"][p["f"].currentContract];
                            return this.is_meta && this.swapwrapped ? e.meta_wrapped_precisions : this.is_meta && !this.swapwrapped ? e.meta_coin_precisions : this.swapwrapped ? e.wrapped_precisions : e.coin_precisions
                        },
                        actualFromValue: function() {
                            if (this.swapwrapped || ["ren", "sbtc", "hbtc"].includes(this.currentPool)) return ["ren", "sbtc", "hbtc"].includes(this.currentPool) ? (this.fromInput * this.btcPrice).toFixed(2) : this.fromInput * this.c_rates[this.from_currency] * this.toFixed(this.precisions[this.from_currency])
                        },
                        actualToValue: function() {
                            if (this.swapwrapped || ["ren", "sbtc", "hbtc"].includes(this.currentPool)) return ["ren", "sbtc", "hbtc"].includes(this.currentPool) ? (this.toInput * this.btcPrice).toFixed(2) : this.toInput * this.c_rates[this.to_currency] * this.toFixed(this.precisions[this.to_currency])
                        }
                    }, p["h"], {
                        currencies: function() {
                            return m["g"][p["f"].currentContract].is_meta ? this.swapwrapped ? p["h"].currencies() : p["h"].meta_currencies() : p["h"].currencies()
                        },
                        minAmount: function() {
                            return ["tbtc", "ren", "sbtc", "hbtc"].includes(p["f"].currentContract) ? 1e-8 : .01
                        },
                        selldisabled: function() {
                            return -1 != this.maxBalance && +this.fromInput > +this.maxBalance / this.precisions[this.from_currency] && this.userInteracted
                        },
                        notEnoughBalanceSynth: function() {
                            return "susdv2" == this.currentPool && 3 == this.from_currency && P(this.fromInput).gt(P(this.maxSynthBalance))
                        },
                        exchangeRateSwapped: function() {
                            return this.swaprate ? (1 / this.exchangeRate).toFixed(4) : this.exchangeRate
                        },
                        publicPath: function() {
                            return "/"
                        },
                        gasPrice: function() {
                            return h["a"].gasPrice
                        },
                        gasPriceWei: function() {
                            return h["a"].gasPriceWei
                        },
                        triggerEstimateGas: function() {
                            return this.swapwrapped, this.from_currency, this.to_currency, Date.now()
                        },
                        showSlippageTooLow: function() {
                            return "" != this.maxInputSlippage && +this.maxInputSlippage < .2
                        }
                    }),
                    mounted: function() {
                        p["f"].initializedContracts && this.mounted()
                    },
                    methods: {
                        mounted: function() {
                            var e = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!["ren", "sbtc", "hbtc", "tbtc"].includes(p["f"].currentContract)) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.next = 3, f["a"]();
                                        case 3:
                                            e.btcPrice = t.sent;
                                        case 4:
                                            ["tbtc", "ren", "sbtc", "hbtc"].includes(p["f"].currentContract) && (e.fromInput = "0.0001"), e.c_rates = p["f"].c_rates, e.coins = p["f"].underlying_coins, e.swapwrapped && (e.coins = p["f"].coins), e.is_meta && e.swapwrapped && (e.c_rates = p["f"].c_rates.slice(0, 2), e.coins = p["f"].all_coins.slice(0, 2)), e.is_meta && !e.swapwrapped && (e.c_rates = [p["f"].c_rates[0]].concat(Object(c["a"])(p["f"].c_rates.slice(2))), e.coins = [p["f"].all_coins[0]].concat(Object(c["a"])(p["f"].all_coins.slice(2)))), e.disabled = !1, e.from_cur_handler();
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        getTokenIcon: function(e) {
                            return d["j"](e, this.swapwrapped, this.currentPool)
                        },
                        getPair: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = this.swapwrapped ? Object.values(this.currencies)[this.from_currency] : Object.keys(this.currencies)[this.from_currency],
                                a = this.swapwrapped ? Object.values(this.currencies)[this.to_currency] : Object.keys(this.currencies)[this.to_currency];
                            return t = d["c"](t), a = d["c"](a), e ? e ? a + "/" + t : void 0 : t + "/" + a
                        },
                        toFixed: function(e) {
                            return "" == e || void 0 == e || 0 == +e ? "0.00" : (_.a.isBigNumber(e) || (e = +e), ["tbtc", "ren", "sbtc", "hbtc"].includes(p["f"].currentContract) ? e.toFixed(8) : e.toFixed(2))
                        },
                        getCurrency: function(e) {
                            return this.swapwrapped || ["susdv2", "ren", "sbtc"].includes(this.currentPool) ? Object.values(this.currencies)[e] : Object.keys(this.currencies)[e].toUpperCase()
                        },
                        swapInputs: function() {
                            var e = [this.toInput, this.fromInput];
                            this.fromInput = e[0], this.toInput = e[1], this.from_currency = this.to_currency, this.from_cur_handler()
                        },
                        swapExchangeRate: function() {
                            isNaN(this.exchangeRate) || (this.swaprate = !this.swaprate)
                        },
                        set_to_amount: function() {
                            var e = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function t() {
                                var a, r, n, c, i, o, u, l, f;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e.promise.cancel(), a = e.setAmountPromise(), e.interval && !e.interval.stopped && x(e.interval), t.prev = 3, t.next = 6, a;
                                        case 6:
                                            r = t.sent, n = Object(s["a"])(r, 4), c = n[0], i = n[1], o = n[2], u = n[3], e.toInput = c, e.exchangeRate = (i / o).toFixed(4), e.swapwrapped && (l = i * e.c_rates[e.to_currency] * m["g"][p["f"].currentContract].wrapped_precisions[e.to_currency], f = o * e.c_rates[e.from_currency] * m["g"][p["f"].currentContract].wrapped_precisions[e.from_currency], e.exchangeRate = (l / f).toFixed(4)), e.exchangeRate <= .98 ? e.bgColor = "red" : e.bgColor = "#505070", isNaN(e.exchangeRate) && (e.exchangeRate = "Not available"), Math.floor(100 * parseFloat(u) / e.precisions[e.to_currency]) / 100, e.disabled = !1, t.next = 25;
                                            break;
                                        case 21:
                                            t.prev = 21, t.t0 = t["catch"](3), console.error(t.t0), e.disabled = !0;
                                        case 25:
                                            return t.prev = 25, e.set_from_amount(e.from_currency), t.finish(25);
                                        case 28:
                                            e.promise = d["n"](a);
                                        case 29:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [3, 21, 25, 28]
                                ])
                            })))()
                        },
                        from_cur_handler: function() {
                            var e = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function t() {
                                var a, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e.from_currency > Object.keys(e.currencies).length - 1 && (e.from_currency = 0), t.t0 = P, t.next = 4, e.coins[e.from_currency].methods.allowance(e.default_account, p["f"].swap_address).call();
                                        case 4:
                                            return t.t1 = t.sent, a = (0, t.t0)(t.t1), r = p["f"].max_allowance.div(P(2)), a.gt(r) ? e.inf_approval = !0 : e.inf_approval = !1, t.next = 10, e.set_from_amount(e.from_currency);
                                        case 10:
                                            return t.next = 12, e.set_to_amount();
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        to_cur_handler: function() {
                            var e = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.to_currency != e.from_currency) {
                                                t.next = 4;
                                                break
                                            }
                                            return 0 == e.to_currency ? e.from_currency = 1 : e.from_currency = 0, t.next = 4, e.set_from_amount(e.from_currency);
                                        case 4:
                                            return t.next = 6, e.set_to_amount();
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        set_max_balance: function() {
                            var e = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function t() {
                                var a, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!("susdv2" == e.currentPool && 3 == e.from_currency || "sbtc" == e.currentPool && 2 == e.from_currency)) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.next = 3, e.coins[e.from_currency].methods.transferableSynths(e.default_account).call();
                                        case 3:
                                            a = t.sent, e.susdWaitingPeriod && (a = 0), t.next = 10;
                                            break;
                                        case 7:
                                            return t.next = 9, e.coins[e.from_currency].methods.balanceOf(e.default_account).call();
                                        case 9:
                                            a = t.sent;
                                        case 10:
                                            return r = P(a).div(e.precisions[e.from_currency]).toFixed(), e.fromInput = p["f"].default_account ? r : 0, t.next = 14, e.set_to_amount();
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        highlight_input: function() {
                            var e = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function t() {
                                var a;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e.coins[e.from_currency].methods.balanceOf(e.default_account).call(), t.t0 = parseFloat, t.next = 4, e.coins[e.from_currency].methods.balanceOf(e.default_account).call();
                                        case 4:
                                            t.t1 = t.sent, t.t2 = (0, t.t0)(t.t1), t.t3 = e.precisions[e.from_currency], a = t.t2 / t.t3, e.fromInput > a ? e.fromBgColor = "red" : e.fromBgColor = "blue";
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        set_from_amount: function(e) {
                            var t = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function a() {
                                var r, n, s, c, i, o;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return r = [
                                                [t.coins[e]._address, t.coins[e].methods.balanceOf(t.default_account).encodeABI()]
                                            ], ("susdv2" == t.currentPool && 3 == e || "sbtc" == t.currentPool && 2 == e || "tbtc" == t.currentPool && 3 == e) && (r.push([t.coins[e]._address, t.coins[e].methods.transferableSynths(t.default_account).encodeABI()]), n = "0x7355534400000000000000000000000000000000000000000000000000000000", ["tbtc", "sbtc"].includes(t.currentPool) && (n = "0x7342544300000000000000000000000000000000000000000000000000000000"), r.push([p["f"].snxExchanger._address, p["f"].snxExchanger.methods.maxSecsLeftInWaitingPeriod(t.default_account, n).encodeABI()])), a.next = 4, p["f"].multicall.methods.aggregate(r).call();
                                        case 4:
                                            s = a.sent, c = s[1].map((function(e) {
                                                return web3.eth.abi.decodeParameter("uint256", e)
                                            })), i = c.map((function(e) {
                                                return p["f"].default_account ? e : 0
                                            })), t.maxBalance = i[0], o = t.fromInput > t.maxBalance / t.precisions[t.from_currency], ("susdv2" == t.currentPool && 3 == e || "sbtc" == t.currentPool && 2 == e || "tbtc" == t.currentPool && 3 == e) && (t.maxSynthBalance = P(i[1]).div(1e18).toFixed(), t.susdWaitingPeriod = 0 != +i[2], t.susdWaitingPeriodTime = +i[2], o = t.fromInput > t.maxSynthBalance, t.susdWaitingPeriod && (o = !0)), t.fromBgColor = o ? "red" : "blue";
                                        case 11:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        },
                        setAmountPromise: function() {
                            var e = this,
                                t = new Promise(function() {
                                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(a, r) {
                                        var n, c, i, o, u, l, d, m, f, h, v, w, g;
                                        return regeneratorRuntime.wrap((function(t) {
                                            while (1) switch (t.prev = t.next) {
                                                case 0:
                                                    return n = e.from_currency, c = e.to_currency, i = e.fromInput, o = P(Math.round(i * e.precisions[n])).toFixed(0, 1), u = [
                                                        [p["f"].swap._address, p["f"].swap.methods.balances(n).encodeABI()]
                                                    ], e.is_meta && n > 0 && (u = [
                                                        [p["f"].base_swap._address, p["f"].base_swap.methods.balances(n - 1).encodeABI()]
                                                    ]), e.swapwrapped || ["susdv2", "ren", "sbtc"].includes(e.currentPool) ? u.push([p["f"].swap._address, p["f"].swap.methods.get_dy(n, c, o).encodeABI()]) : u.push([p["f"].swap._address, p["f"].swap.methods.get_dy_underlying(n, c, o).encodeABI()]), u.push([e.coins[e.to_currency]._address, e.coins[e.to_currency].methods.balanceOf(e.default_account).encodeABI()]), t.next = 10, p["f"].multicall.methods.aggregate(u).call(void 0, "pending");
                                                case 10:
                                                    l = t.sent, d = l[1].map((function(e) {
                                                        return p["f"].web3.eth.abi.decodeParameter("uint256", e)
                                                    })), m = Object(s["a"])(d, 3), f = m[0], h = m[1], v = m[2], f = +f * e.c_rates[n], w = +h / e.precisions[c], g = e.toFixed(w), a([g, w, i, v]);
                                                case 17:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function(e, a) {
                                        return t.apply(this, arguments)
                                    }
                                }());
                            return d["n"](t)
                        },
                        setLoadingAction: function() {
                            var e = this;
                            this.loadingAction = !0, setTimeout((function() {
                                return e.loadingAction = !1
                            }), 500)
                        },
                        handle_trade: function() {
                            var e = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function t() {
                                var a, r, n, s, c, i, o, m, f, h, v;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!e.loadingAction) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            if (e.userInteracted = !0, e.setLoadingAction(), e.show_loading = !0, a = e.from_currency, r = e.to_currency, !(e.is_meta && a > 0)) {
                                                t.next = 17;
                                                break
                                            }
                                            return t.t0 = parseInt, t.next = 11, p["f"].base_swap.methods.balances(a - 1).call();
                                        case 11:
                                            t.t1 = t.sent, t.t2 = (0, t.t0)(t.t1), t.t3 = e.c_rates[a], t.t2 / t.t3, t.next = 24;
                                            break;
                                        case 17:
                                            return t.t4 = parseInt, t.next = 20, p["f"].swap.methods.balances(a).call();
                                        case 20:
                                            t.t5 = t.sent, t.t6 = (0, t.t4)(t.t5), t.t7 = e.c_rates[a], t.t6 / t.t7;
                                        case 24:
                                            return n = e.maxSlippage / 100, Object.keys(e.currencies)[e.from_currency].toUpperCase(), e.swapwrapped && Object.values(e.currencies)[e.from_currency], e.maxInputSlippage && (n = e.maxInputSlippage / 100), s = Math.floor(e.fromInput * e.precisions[a]), BN(e.maxBalance).gt(0) && BN(e.maxBalance).div(e.precisions[a]).minus(BN(e.fromInput)).lt(BN(e.minAmount)) && (s = e.maxBalance), ("susdv2" == e.currentPool && 3 == e.from_currency || "sbtc" == e.currentPool && 2 == e.from_currency || "tbtc" == e.currentPool && 3 == e.from_currency) && BN(e.maxSynthBalance).gt(0) && BN(e.maxSynthBalance).minus(BN(e.fromInput)).lt(BN(e.minAmount)) && (s = BN(e.maxSynthBalance).times(1e18).toFixed(0, 1)), c = "get_dy_underlying", (e.swapwrapped || ["susdv2", "ren", "sbtc"].includes(e.currentPool)) && (c = "get_dy"), t.t8 = BN, t.next = 36, p["f"].swap.methods[c](a, r, BN(s).toFixed(0, 1)).call();
                                        case 36:
                                            if (t.t9 = t.sent, i = (0, t.t8)(t.t9), i = i.times(1 - n), s = P(s.toString()).toFixed(0, 1), e.waitingMessage = "Please approve ".concat(e.fromInput, " ").concat(e.getCurrency(e.from_currency), " for exchange"), o = Object(l["d"])(e.waitingMessage), m = o.dismiss, t.prev = 42, !e.inf_approval) {
                                                t.next = 48;
                                                break
                                            }
                                            return t.next = 46, u["ensure_underlying_allowance"](a, p["f"].max_allowance, [], void 0, e.swapwrapped);
                                        case 46:
                                            t.next = 50;
                                            break;
                                        case 48:
                                            return t.next = 50, u["ensure_underlying_allowance"](a, s, [], void 0, e.swapwrapped);
                                        case 50:
                                            t.next = 58;
                                            break;
                                        case 52:
                                            throw t.prev = 52, t.t10 = t["catch"](42), console.error(t.t10), m(), e.waitingMessage = "", e.show_loading = !1, t.t10;
                                        case 58:
                                            return m(), e.waitingMessage = "Please confirm swap \n                                        from ".concat(e.fromInput, " ").concat(e.getCurrency(e.from_currency), "\n                                        for min ").concat(e.toFixed(i / e.precisions[r]), " ").concat(e.getCurrency(e.to_currency)), f = Object(l["d"])(e.waitingMessage), m = f.dismiss, i = P(i).toFixed(0), h = p["f"].swap.methods.exchange_underlying, (e.swapwrapped || ["susdv2", "ren", "sbtc", "hbtc", "3pool"].includes(e.currentPool)) && (h = p["f"].swap.methods.exchange), t.prev = 64, t.next = 67, d["r"](100);
                                        case 67:
                                            return t.next = 69, h(a, r, s, BN(i).toFixed(0, 1)).send({
                                                from: p["f"].default_account,
                                                gasPrice: e.gasPriceWei,
                                                gas: e.swapwrapped ? p["g"].swap[e.currentPool].exchange(a, r) : p["g"].swap[e.currentPool].exchange_underlying(a, r)
                                            }).once("transactionHash", (function(t) {
                                                m(), Object(l["c"])(t), e.waitingMessage = "Waiting for swap \n                                                    <a href='https://etherscan.io/tx/".concat(t, "'>transaction</a>\n                                                    to confirm: no further action needed")
                                            }));
                                        case 69:
                                            t.next = 79;
                                            break;
                                        case 71:
                                            throw t.prev = 71, t.t11 = t["catch"](64), console.error(t.t11), m(), w["a"](t.t11), e.waitingMessage = "", e.show_loading = "", t.t11;
                                        case 79:
                                            return e.waitingMessage = "", e.show_loading = !1, e.estimateGas = 0, t.next = 84, u["update_fee_info"]();
                                        case 84:
                                            return e.from_cur_handler(), t.next = 87, e.coins[a].methods.balanceOf(e.default_account).call();
                                        case 87:
                                            v = t.sent, e.maxBalance = v;
                                        case 89:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [42, 52],
                                    [64, 71]
                                ])
                            })))()
                        }
                    },
                    beforeDestroy: function() {
                        this.interval && x(this.interval)
                    }
                },
                I = y,
                k = (a("d644"), a("2877")),
                C = Object(k["a"])(I, r, n, !1, null, "4ed1dca7", null);
            t["default"] = C.exports
        },
        d644: function(e, t, a) {
            "use strict";
            var r = a("1345"),
                n = a.n(r);
            n.a
        },
        e7e9: function(e, t, a) {
            "use strict";
            var r = function() {
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
                n = [function() {
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
                c = a("0a37"),
                i = a("0c7c"),
                o = a("2fa3"),
                u = a("fe5c"),
                l = a("901e"),
                p = a.n(l),
                d = {
                    data: function() {
                        return {
                            customGasDisabled: !0
                        }
                    },
                    computed: {
                        gasPriceSlow: function() {
                            return c["a"].gasPriceInfo && c["a"].gasPriceInfo.low || 15
                        },
                        gasPriceMedium: function() {
                            return c["a"].gasPriceInfo && c["a"].gasPriceInfo.standard || 20
                        },
                        gasPriceFast: function() {
                            return c["a"].gasPriceInfo && c["a"].gasPriceInfo.fast || 25
                        },
                        gasPriceFastest: function() {
                            return c["a"].gasPriceInfo && c["a"].gasPriceInfo.instant || 30
                        },
                        gasPrice: {
                            get: function() {
                                return c["a"].gasPrice
                            },
                            set: function(e) {
                                c["a"].gasPrice = e
                            }
                        },
                        customGasPriceInput: function() {
                            return this.customGasDisabled ? this.gasPriceSlow : this.gasPrice
                        },
                        errorMessage: function() {
                            return setTimeout((function() {
                                return i["b"].txError = null
                            }), 5e3), i["b"].txError
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(s["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        !c["a"].fetched && e.getGasPrice(), c["a"].gasPriceInterval && Object(u["clearIntervalAsync"])(c["a"].gasPriceInterval), c["a"].gasPriceInterval && !c["a"].gasPriceInterval.stopped || (c["a"].gasPriceInterval = Object(u["setIntervalAsync"])((function() {
                                            return e.getGasPrice()
                                        }), 3e3)), e.$watch((function() {
                                            return c["a"].gasPrice
                                        }), (function(e) {
                                            c["a"].gasPriceWei = p()(e).times(1e9).toFixed(0, 1)
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
                                var t, a, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, Object(o["q"])(fetch("https://gasprice.poa.network/"));
                                        case 3:
                                            return t = e.sent, e.next = 6, t.json();
                                        case 6:
                                            if (t = e.sent, t.low = t.slow, c["a"].gasPriceInfo = t, !(c["a"].gasPriceInfo.fast > 1e3)) {
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
                                            if (a = e.sent, c["a"].gasPriceInfo = a.estimates, c["a"].gasPriceInfo.low = c["a"].gasPriceInfo.slow, c["a"].gasPriceInfo.standard = c["a"].gasPriceInfo.medium, c["a"].gasPriceInfo.fast = c["a"].gasPriceInfo.fast, c["a"].gasPriceInfo.instant = c["a"].gasPriceInfo.fastest, !(c["a"].gasPriceInfo.fast > 1e3)) {
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
                                            e.t2 = e.sent, r = e.t2 / 1e9, c["a"].gasPriceInfo = {
                                                low: r - 2,
                                                standard: r,
                                                fast: r + 2,
                                                instant: r + 4
                                            };
                                        case 39:
                                            c["a"].fetched || (c["a"].gasPrice = c["a"].gasPriceInfo.fast, c["a"].fetched = !0);
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
                                var r;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            r = e.target.value, e.target.value > 2 * t.gasPriceFastest && (r = 2 * t.gasPriceFastest), t.gasPrice = r;
                                        case 3:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        }
                    }
                },
                m = d,
                f = (a("6e7b"), a("2877")),
                h = Object(f["a"])(m, r, n, !1, null, "207c7b6a", null);
            t["a"] = h.exports
        },
        fe5c: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "SetIntervalAsyncError", (function() {
                return i
            })), a.d(t, "clearIntervalAsync", (function() {
                return s
            })), a.d(t, "setIntervalAsync", (function() {
                return d
            }));
            var r = a("3bdc");
            const n = Math.pow(2, 31) - 1;

            function s(e) {
                return c.apply(this, arguments)
            }

            function c() {
                return c = r((function*(e) {
                    e.stopped = !0;
                    for (var t = 0, a = Object.values(e.timeouts); t < a.length; t++) {
                        const e = a[t];
                        clearTimeout(e)
                    }
                    const r = () => {},
                        s = Object.values(e.promises).map(e => {
                            e.catch(r)
                        }),
                        c = setInterval(r, n);
                    yield Promise.all(s), clearInterval(c)
                })), c.apply(this, arguments)
            }
            class i extends Error {}
            Object.defineProperty(i.prototype, "name", {
                value: "SetIntervalAsyncError"
            });
            const o = 10;

            function u(e) {
                if ("function" !== typeof e) throw new i('Invalid argument: "handler". Expected a function.')
            }

            function l(e) {
                if (!("number" === typeof e && o <= e)) throw new i(`Invalid argument: "interval". Expected a number greater than or equal to ${o}.`)
            }
            class p {
                constructor() {
                    this.stopped = !1, this.id = 0, this.timeouts = {}, this.promises = {}
                }
            }

            function d(e, t, ...a) {
                u(e), l(t);
                const r = new p,
                    n = r.id;
                return r.timeouts[n] = setTimeout(m, t, r, e, t, ...a), r
            }

            function m(e, t, a, ...n) {
                const s = e.id;
                e.promises[s] = r((function*() {
                    const r = new Date;
                    try {
                        yield t(...n)
                    } catch (i) {
                        console.error(i)
                    }
                    const c = new Date;
                    if (!e.stopped) {
                        const i = c - r,
                            o = a > i ? a - i : 0;
                        e.timeouts[s + 1] = setTimeout(m, o, e, t, a, ...n)
                    }
                    delete e.timeouts[s], delete e.promises[s]
                }))(), e.id = s + 1
            }
        }
    }
]);
//# sourceMappingURL=chunk-a956ca0a.6db45a62.js.map