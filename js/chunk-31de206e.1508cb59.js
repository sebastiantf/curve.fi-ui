(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-31de206e"], {
        "07ac": function(e, t, a) {
            var s = a("23e7"),
                n = a("6f53").values;
            s({
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
        "0c33": function(e, t, a) {
            "use strict";
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", [a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showSlippage && e.slippage < -.005,
                            expression: "showSlippage && slippage < -0.005"
                        }],
                        staticClass: "simple-error",
                        attrs: {
                            id: "highslippage-warning"
                        }
                    }, [a("span", {
                        staticClass: "text"
                    }, [e._v(" Warning! High slippage(plus pricing): "), a("span", {
                        staticClass: "percent"
                    }, [e._v(e._s((100 * -e.slippage).toFixed(3)))]), e._v("% "), e._m(0)])]), a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showSlippage && e.slippage <= 0 && e.slippage >= -.005,
                            expression: "showSlippage && slippage <= 0 && slippage >= -0.005"
                        }],
                        staticClass: "info-message",
                        attrs: {
                            id: "slippage-warning"
                        }
                    }, [a("span", {
                        staticClass: "text"
                    }, [e._v(" Slippage(plus pricing): ")]), a("span", {
                        staticClass: "percent"
                    }, [e._v(e._s((100 * -e.slippage).toFixed(3)))]), e._v("% "), e._m(1)]), a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showSlippage && e.slippage > 0,
                            expression: "showSlippage && slippage > 0"
                        }],
                        staticClass: "success",
                        attrs: {
                            id: "bonus-window"
                        }
                    }, [e._v(" Bonus(plus pricing): "), a("span", [e._v(e._s((100 * e.slippage).toFixed(3)))]), e._v("% "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" Bonus comes as an advantage from current coin prices which usually appears for coins which are " + e._s("Deposit" == e.$route.name ? "low" : "high") + " in balance ")])])]), a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.show_nobalance,
                            expression: "show_nobalance"
                        }],
                        staticClass: "simple-error",
                        attrs: {
                            id: "nobalance-warning"
                        }
                    }, [e._v(" Warning! Not enough balance for " + e._s(e.noBalanceText) + " token in the contract ")]), a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susdv2" == e.currentPool && e.showSlippage && e.slippage < -.01,
                            expression: "currentPool == 'susdv2' && showSlippage && slippage < -0.01"
                        }],
                        staticClass: "info-message gentle-message",
                        attrs: {
                            id: "susd-warning"
                        }
                    }, [e._v(" Please add coins in a balanced proportion ")])])
                },
                n = [function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" Slippage comes from depositing too many coins not in balance, and current coin prices are additionally accounted for ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), a("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" Slippage comes from depositing too many coins not in balance, and current coin prices are additionally accounted for ")])])
                }],
                r = (a("caad"), a("4fad"), a("5530")),
                i = a("51bf"),
                o = {
                    props: ["show_nobalance", "show_nobalance_i"],
                    computed: Object(r["a"])({}, i["h"], {
                        noBalanceText: function() {
                            if (!this.show_nobalance) return "";
                            var e = Object.entries(this.all_currencies)[this.show_nobalance_i];
                            return 2 == this.show_nobalance_i && "usdt" == this.currentPool || !["susdv2", "ren", "sbtc", "hbtc", "3pool", "gusd", "husd", "usdk", "usdn", "linkusd", "musd", "rsv", "tbtc", "dusd"].includes(this.currentPool) ? e[1] : e[1] + " (in " + e[0] + ")"
                        }
                    })
                },
                c = o,
                l = a("2877"),
                u = Object(l["a"])(c, s, n, !1, null, "9782bd3e", null);
            t["a"] = u.exports
        },
        1927: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showSlippageModal,
                            expression: "showSlippageModal"
                        }],
                        staticClass: "modal",
                        attrs: {
                            id: "modal"
                        },
                        on: {
                            click: function(t) {
                                return t.target !== t.currentTarget ? null : e.cancelDepositSlippage(t)
                            }
                        }
                    }, [s("div", {
                        staticClass: "modal-content window white"
                    }, [s("fieldset", [s("div", {
                        staticClass: "legend2 hoverpointer",
                        on: {
                            click: e.cancelDepositSlippage
                        }
                    }, [e._v(" ["), s("span", {
                        staticClass: "greentext"
                    }, [e._v("■")]), e._v("] ")]), s("legend", {
                        staticClass: "redwarning"
                    }, [e._v(" High slippage! ")]), s("div", {
                        staticClass: "content"
                    }, [s("p", {
                        staticClass: "simple-error"
                    }, [e._v(" High slippage warning! "), s("br"), e._v(" Depositing will have " + e._s((100 * -e.slippage).toFixed(3)) + "% slippage! ")])]), s("div", {
                        staticClass: "confirmslippage"
                    }, [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.confirmSlippage,
                            expression: "confirmSlippage"
                        }],
                        attrs: {
                            id: "confirmslippage",
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.confirmSlippage) ? e._i(e.confirmSlippage, null) > -1 : e.confirmSlippage
                        },
                        on: {
                            change: function(t) {
                                var a = e.confirmSlippage,
                                    s = t.target,
                                    n = !!s.checked;
                                if (Array.isArray(a)) {
                                    var r = null,
                                        i = e._i(a, r);
                                    s.checked ? i < 0 && (e.confirmSlippage = a.concat([r])) : i > -1 && (e.confirmSlippage = a.slice(0, i).concat(a.slice(i + 1)))
                                } else e.confirmSlippage = n
                            }
                        }
                    }), s("label", {
                        attrs: {
                            for: "confirmslippage"
                        }
                    }, [e._v("Confirm " + e._s((100 * -e.slippage).toFixed(3)) + "% slippage!")])]), s("button", {
                        staticClass: "canceldepositslippage",
                        on: {
                            click: e.cancelDepositSlippage
                        }
                    }, [e._v("Cancel")]), s("button", {
                        staticClass: "buttonred",
                        attrs: {
                            disabled: !e.confirmSlippage
                        },
                        on: {
                            click: function(t) {
                                return e.handle_add_liquidity(e.pendingStake)
                            }
                        }
                    }, [e._v(" Deposit anyway ")])])])]), s("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "linkusd" == e.currentPool,
                            expression: "currentPool == 'linkusd'"
                        }],
                        staticClass: "simple-error"
                    }, [e._v(" This is an experimental pool. Please use with caution! ")]), s("div", {
                        staticClass: "add-liquidity"
                    }, [s("fieldset", {
                        staticClass: "currencies"
                    }, [s("legend", [e._v("Currencies:")]), s("ul", e._l(Object.keys(e.currencies), (function(t, n) {
                        var r;
                        return s("li", [s("label", {
                            attrs: {
                                for: "currency_" + e.getI(n)
                            }
                        }, [s("span", {
                            staticClass: "currency_label"
                        }, [s("img", {
                            class: (r = {
                                "token-icon": !0
                            }, r[t + "-icon"] = !0, r["y"] = e.depositc && !e.isPlain, r),
                            attrs: {
                                src: e.getTokenIcon(t)
                            }
                        }), s("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.depositc,
                                expression: "depositc"
                            }]
                        }, [e._v(e._s(e.currencies[t]) + " "), s("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !("usdt" == t && "usdt" == e.currentPool || "pax" == t) && !["susdv2", "tbtc", "ren", "sbtc", "hbtc", "3pool"].includes(e.currentPool) && !e.is_meta,
                                expression: "!(currency == 'usdt' && currentPool == 'usdt' || currency == 'pax') \n    \t                        \t\t\t\t\t&& !['susdv2', 'tbtc', 'ren', 'sbtc', 'hbtc', '3pool'].includes(currentPool) && !is_meta"
                            }]
                        }, [e._v(" (in " + e._s(e._f("capitalize")(t)) + ") ")])]), s("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.depositc,
                                expression: "!depositc"
                            }]
                        }, [e._v(e._s(e._f("capitalize")(t)) + " ")]), s("span", {
                            staticClass: "maxBalanceCoin",
                            on: {
                                click: function(t) {
                                    e.setMaxBalanceCoin(e.getI(n))
                                }
                            }
                        }, [e._v(" Max: "), s("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: ("susdv2" == e.currentPool && 3 == e.getI(n) || "sbtc" == e.currentPool && 2 == e.getI(n) || "tbtc" == e.currentPool && 4 == e.getI(n)) && "0.00" != e.maxBalanceCoin(e.getI(n)),
                                expression: "(currentPool == 'susdv2' && getI(i) == 3 || currentPool == 'sbtc' && getI(i) == 2 || currentPool == 'tbtc' && getI(i) == 4)\n                                                    && maxBalanceCoin(getI(i)) != '0.00'"
                            }]
                        }, [e._v(" " + e._s(e.transferableBalanceText) + "/ ")]), s("span", [e._v(e._s(e.maxBalanceCoin(e.getI(n))) + " ")]), s("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.susdWaitingPeriod,
                                expression: "susdWaitingPeriod"
                            }]
                        }, [s("span", {
                            staticClass: "tooltip"
                        }, [s("img", {
                            staticClass: "icon small",
                            attrs: {
                                src: a("0b7b")
                            }
                        }), s("span", {
                            staticClass: "tooltiptext normalFont"
                        }, [e._v(" Cannot transfer during waiting period. " + e._s(e.susdWaitingPeriodTime.toFixed(0)) + " secs left. ")])])]), s("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: ("susdv2" == e.currentPool && 3 == e.getI(n) || "sbtc" == e.currentPool && 2 == e.getI(n) || "tbtc" == e.currentPool && 4 == e.getI(n)) && "0.00" != e.maxBalanceCoin(e.getI(n)),
                                expression: "(currentPool == 'susdv2' && getI(i) == 3 || currentPool == 'sbtc' && getI(i) == 2 || currentPool == 'tbtc' && getI(i) == 4)\n                                                    && maxBalanceCoin(getI(i)) != '0.00'"
                            }],
                            staticClass: "tooltip"
                        }, [e._v(" [?] "), s("span", {
                            staticClass: "tooltiptext long normalFont"
                        }, [e._v(" Max transferrable amount is " + e._s(e.transferableBalanceText) + ". You can free the remaining balance by settling. ")])])])])]), s("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.inputs[e.getI(n)],
                                expression: "inputs[getI(i)]"
                            }],
                            style: {
                                backgroundColor: e.bgColors[e.getI(n)]
                            },
                            attrs: {
                                type: "text",
                                id: "currency_" + e.getI(n),
                                disabled: e.disabled,
                                name: "from_cur"
                            },
                            domProps: {
                                value: e.inputs[e.getI(n)]
                            },
                            on: {
                                input: [function(t) {
                                    t.target.composing || e.$set(e.inputs, e.getI(n), t.target.value)
                                }, function(t) {
                                    e.change_currency(e.getI(n), !0)
                                }]
                            }
                        })])
                    })), 0)]), s("ul", [s("gas-price"), s("li", [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.sync_balances,
                            expression: "sync_balances"
                        }],
                        attrs: {
                            id: "sync-balances",
                            type: "checkbox",
                            name: "sync-balances",
                            disabled: e.disabledButtons,
                            checked: ""
                        },
                        domProps: {
                            checked: Array.isArray(e.sync_balances) ? e._i(e.sync_balances, null) > -1 : e.sync_balances
                        },
                        on: {
                            change: [function(t) {
                                var a = e.sync_balances,
                                    s = t.target,
                                    n = !!s.checked;
                                if (Array.isArray(a)) {
                                    var r = null,
                                        i = e._i(a, r);
                                    s.checked ? i < 0 && (e.sync_balances = a.concat([r])) : i > -1 && (e.sync_balances = a.slice(0, i).concat(a.slice(i + 1)))
                                } else e.sync_balances = n
                            }, e.handle_sync_balances_proportion]
                        }
                    }), s("label", {
                        attrs: {
                            for: "sync-balances"
                        }
                    }, [e._v("Add all coins in a balanced proportion")])]), s("li", [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.max_balances,
                            expression: "max_balances"
                        }],
                        attrs: {
                            id: "max-balances",
                            type: "checkbox",
                            name: "max-balances",
                            disabled: e.disabledButtons,
                            checked: ""
                        },
                        domProps: {
                            checked: Array.isArray(e.max_balances) ? e._i(e.max_balances, null) > -1 : e.max_balances
                        },
                        on: {
                            change: [function(t) {
                                var a = e.max_balances,
                                    s = t.target,
                                    n = !!s.checked;
                                if (Array.isArray(a)) {
                                    var r = null,
                                        i = e._i(a, r);
                                    s.checked ? i < 0 && (e.max_balances = a.concat([r])) : i > -1 && (e.max_balances = a.slice(0, i).concat(a.slice(i + 1)))
                                } else e.max_balances = n
                            }, e.handle_sync_balances]
                        }
                    }), s("label", {
                        attrs: {
                            for: "max-balances"
                        }
                    }, [e._v("Use maximum amount of coins available")])]), s("li", [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.inf_approval,
                            expression: "inf_approval"
                        }],
                        attrs: {
                            id: "inf-approval",
                            type: "checkbox",
                            name: "inf-approval",
                            checked: ""
                        },
                        domProps: {
                            checked: Array.isArray(e.inf_approval) ? e._i(e.inf_approval, null) > -1 : e.inf_approval
                        },
                        on: {
                            change: function(t) {
                                var a = e.inf_approval,
                                    s = t.target,
                                    n = !!s.checked;
                                if (Array.isArray(a)) {
                                    var r = null,
                                        i = e._i(a, r);
                                    s.checked ? i < 0 && (e.inf_approval = a.concat([r])) : i > -1 && (e.inf_approval = a.slice(0, i).concat(a.slice(i + 1)))
                                } else e.inf_approval = n
                            }
                        }
                    }), e._m(0)]), s("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !["susd", "susdv2", "ren", "sbtc", "hbtc", "3pool"].includes(e.currentPool),
                            expression: "!['susd','susdv2','ren','sbtc','hbtc', '3pool'].includes(currentPool)"
                        }]
                    }, [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.depositc,
                            expression: "depositc"
                        }],
                        attrs: {
                            id: "depositc",
                            type: "checkbox",
                            name: "depositc",
                            checked: ""
                        },
                        domProps: {
                            checked: Array.isArray(e.depositc) ? e._i(e.depositc, null) > -1 : e.depositc
                        },
                        on: {
                            change: function(t) {
                                var a = e.depositc,
                                    s = t.target,
                                    n = !!s.checked;
                                if (Array.isArray(a)) {
                                    var r = null,
                                        i = e._i(a, r);
                                    s.checked ? i < 0 && (e.depositc = a.concat([r])) : i > -1 && (e.depositc = a.slice(0, i).concat(a.slice(i + 1)))
                                } else e.depositc = n
                            }
                        }
                    }), s("label", {
                        attrs: {
                            for: "depositc"
                        }
                    }, [e._v("Deposit wrapped")])])], 1), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.susdWaitingPeriod,
                            expression: "susdWaitingPeriod"
                        }],
                        staticClass: "simple-error pulse"
                    }, [e._v(" Cannot transfer " + e._s("susdv2" == e.currentPool ? "sUSD" : "sBTC") + " during waiting period. " + e._s(e.susdWaitingPeriodTime.toFixed(0)) + " secs left. ")]), s("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "linkusd" == e.currentPool,
                            expression: "currentPool == 'linkusd'"
                        }],
                        staticClass: "simple-error"
                    }, [e._v(" This is an experimental pool. Please use with caution! ")]), s("p", {
                        staticClass: "buttons",
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [s("button", {
                        attrs: {
                            id: "add-liquidity",
                            disabled: "susdv2" == e.currentPool && e.slippage < -.03 || e.depositingZeroWarning || e.isZeroSlippage || "linkusd" == e.currentPool && e.slippage < -.005
                        },
                        on: {
                            click: function(t) {
                                e.justDeposit = !0, e.check_handle_add_liquidity()
                            }
                        }
                    }, [e._v(" Deposit "), s("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == e.loadingAction,
                            expression: "loadingAction == 1"
                        }],
                        staticClass: "loading line"
                    })]), s("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.hasGauge,
                            expression: "hasGauge"
                        }],
                        attrs: {
                            id: "add-liquidity-stake",
                            disabled: "susdv2" == e.currentPool && e.slippage < -.03 || e.depositingZeroWarning || e.isZeroSlippage || "linkusd" == e.currentPool && e.slippage < -.005
                        },
                        on: {
                            click: function(t) {
                                e.justDeposit = !1, e.deposit_stake()
                            }
                        }
                    }, [e._v(" Deposit & stake in gauge "), s("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 2 == e.loadingAction,
                            expression: "loadingAction == 2"
                        }],
                        staticClass: "loading line"
                    })]), s("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.totalShare > 0 && e.hasGauge,
                            expression: "totalShare > 0 && hasGauge"
                        }],
                        attrs: {
                            id: "stakeunstaked",
                            disabled: e.stakePercentageInvalid
                        },
                        on: {
                            click: function(t) {
                                return e.stakeTokens()
                            }
                        }
                    }, [e._v(" Stake unstaked in gauge "), s("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 3 == e.loadingAction,
                            expression: "loadingAction == 3"
                        }],
                        staticClass: "loading line"
                    })])]), s("p", {
                        staticClass: "info-message gentle-message risks"
                    }, [s("router-link", {
                        attrs: {
                            to: "risks"
                        }
                    }, [e._v("Risks of using " + e._s(e.currentPool) + " pool")])], 1), s("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.lpCrvReceived > 0,
                            expression: "lpCrvReceived > 0"
                        }],
                        staticClass: "info-message gentle-message"
                    }, [e._v(" You'll receive minimum " + e._s(e.lpCrvReceivedText) + " Curve " + e._s(e.currentPool) + " LP tokens "), s("sub", [e._v(e._s((100 * (1 - e.getMaxSlippage)).toFixed(2)) + "% max slippage")]), s("span", {
                        staticClass: "curvelpusd"
                    }, [e._v(" 1 Curve " + e._s(e.currentPool) + " LP token = " + e._s((1 * e.virtual_price).toFixed(6)) + " " + e._s(["ren", "sbtc", "hbtc", "tbtc"].includes(e.currentPool) ? "BTC" : "USD") + " ")])]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.hasGauge,
                            expression: "hasGauge"
                        }]
                    }, [s("button", {
                        staticClass: "simplebutton advancedoptions",
                        on: {
                            click: function(t) {
                                e.showadvancedoptions = !e.showadvancedoptions
                            }
                        }
                    }, [e._v(" Advanced options "), s("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.showadvancedoptions,
                            expression: "!showadvancedoptions"
                        }]
                    }, [e._v("▼")]), s("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showadvancedoptions,
                            expression: "showadvancedoptions"
                        }]
                    }, [e._v("▲")])]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showadvancedoptions,
                            expression: "showadvancedoptions"
                        }]
                    }, [s("fieldset", [s("legend", [e._v("Advanced options:")]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.totalShare > 0,
                            expression: "totalShare > 0"
                        }]
                    }, [s("label", {
                        attrs: {
                            for: "stakepercentage"
                        }
                    }, [e._v("Stake %")]), s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.stakepercentage,
                            expression: "stakepercentage"
                        }],
                        class: {
                            invalid: e.stakePercentageInvalid
                        },
                        attrs: {
                            id: "stakepercentage"
                        },
                        domProps: {
                            value: e.stakepercentage
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.stakepercentage = t.target.value)
                            }
                        }
                    }), s("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.totalShare > 0,
                            expression: "totalShare > 0"
                        }],
                        attrs: {
                            id: "stakeunstaked",
                            disabled: e.stakePercentageInvalid
                        },
                        on: {
                            click: function(t) {
                                return e.stakeTokens()
                            }
                        }
                    }, [e._v(" Stake unstaked "), s("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 3 == e.loadingAction,
                            expression: "loadingAction == 3"
                        }],
                        staticClass: "loading line"
                    })])]), s("div", {
                        attrs: {
                            id: "max_slippage"
                        }
                    }, [e._m(1), s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.maxSlippage,
                            expression: "maxSlippage"
                        }],
                        attrs: {
                            id: "slippage01",
                            type: "radio",
                            name: "slippage",
                            value: "0.1"
                        },
                        domProps: {
                            checked: e._q(e.maxSlippage, "0.1")
                        },
                        on: {
                            change: function(t) {
                                e.maxSlippage = "0.1"
                            }
                        }
                    }), s("label", {
                        attrs: {
                            for: "slippage01"
                        }
                    }, [e._v("0.1%")]), s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.maxSlippage,
                            expression: "maxSlippage"
                        }],
                        attrs: {
                            id: "slippage1",
                            type: "radio",
                            name: "slippage",
                            checked: "",
                            value: "1"
                        },
                        domProps: {
                            checked: e._q(e.maxSlippage, "1")
                        },
                        on: {
                            change: function(t) {
                                e.maxSlippage = "1"
                            }
                        }
                    }), s("label", {
                        attrs: {
                            for: "slippage1"
                        }
                    }, [e._v("1%")]), s("input", {
                        attrs: {
                            id: "custom_slippage",
                            type: "radio",
                            name: "slippage",
                            value: "-"
                        },
                        on: {
                            click: function(t) {
                                e.customippageDisabled = !1
                            }
                        }
                    }), s("label", {
                        attrs: {
                            for: "custom_slippage"
                        },
                        on: {
                            click: function(t) {
                                e.customSlippageDisabled = !1
                            }
                        }
                    }, [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.maxInputSlippage,
                            expression: "maxInputSlippage"
                        }],
                        class: {
                            invalid: e.warningInputSlippage
                        },
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
                    }), e._v(" % ")]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.warningInputSlippage,
                            expression: "warningInputSlippage"
                        }],
                        staticClass: "simple-error"
                    }, [e._v(" " + e._s(e.maxInputSlippage) + "% is too low of a slippage - your transaction may fail ")])])])])]), s("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["ren", "sbtc"].includes(e.currentPool),
                            expression: "['ren', 'sbtc'].includes(currentPool)"
                        }],
                        staticClass: "trade-buttons"
                    }, [s("a", {
                        attrs: {
                            href: "https://bridge.renproject.io/"
                        }
                    }, [e._v("Mint/redeem renBTC")])]), s("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["tbtc"].includes(e.currentPool),
                            expression: "['tbtc'].includes(currentPool)"
                        }],
                        staticClass: "trade-buttons"
                    }, [s("a", {
                        attrs: {
                            href: "https://dapp.tbtc.network/"
                        }
                    }, [e._v("Mint/redeem tBTC")])]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["susdv2"].includes(e.currentPool),
                            expression: "['susdv2'].includes(currentPool)"
                        }],
                        attrs: {
                            id: "mintr"
                        }
                    }, [s("a", {
                        attrs: {
                            href: "https://mintr.synthetix.io/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Manage staking in Mintr")])]), s("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "compound" == e.currentPool && e.oldBalance > 0,
                            expression: "currentPool == 'compound' && oldBalance > 0"
                        }],
                        attrs: {
                            id: "migrate-new"
                        },
                        on: {
                            click: e.handle_migrate_new
                        }
                    }, [e._v("Migrate from old")]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.show_loading,
                            expression: "show_loading"
                        }],
                        staticClass: "info-message gentle-message"
                    }, [s("span", {
                        domProps: {
                            innerHTML: e._s(e.waitingMessage)
                        }
                    }), e._v(" "), s("span", {
                        staticClass: "loading line"
                    })]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.estimateGas,
                            expression: "estimateGas"
                        }],
                        staticClass: "info-message gentle-message"
                    }, [e._v(" Estimated tx cost: " + e._s((e.estimateGas * e.gasPrice / 1e9 * e.ethPrice).toFixed(2)) + "$ ")]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.errorStaking,
                            expression: "errorStaking"
                        }],
                        staticClass: "simple-error"
                    }, [e._v(" There was an error in staking your tokens. You can manually stake them on "), s("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["susdv2", "sbtc"].includes(e.currentPool),
                            expression: "['susdv2', 'sbtc'].includes(currentPool)"
                        }],
                        attrs: {
                            href: "https://mintr.synthetix.io/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v(" Mintr. ")]), s("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["y", "iearn"].includes(e.currentPool),
                            expression: "['y', 'iearn'].includes(currentPool)"
                        }],
                        attrs: {
                            href: "https://ygov.finance/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v(" yGov. ")])]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.compareInputsWarning.length && !e.max_balances,
                            expression: "compareInputsWarning.length && !max_balances"
                        }],
                        staticClass: "simple-error pulse"
                    }, [e._v(" Not enough balance for currencies " + e._s(e.compareInputsWarning.toString()) + " "), s("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.compareInputsWarning.length == e.N_COINS - 1,
                            expression: "compareInputsWarning.length == N_COINS - 1"
                        }]
                    }, [e._v(' Maybe you forgot to uncheck the first "Add all coins in a balanced proportion" checkbox? ')])]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.depositingZeroWarning && !e.max_balances,
                            expression: "depositingZeroWarning && !max_balances"
                        }],
                        staticClass: "simple-error pulse"
                    }, [e._v(" You're depositing 0 coins. "), s("p", [e._v(' Maybe you forgot to uncheck the first "Add all coins in a balanced proportion" checkbox? ')])]), s("Slippage"), s("p")], 1)])
                },
                n = [function() {
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
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("span", {
                        staticClass: "tooltip"
                    }, [e._v(" Max slippage: "), a("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" Customize the maximum slippage you can get when depositing ")])])
                }],
                r = (a("99af"), a("cb29"), a("4de4"), a("7db0"), a("4160"), a("a630"), a("caad"), a("d81d"), a("fb6a"), a("45fc"), a("a9e3"), a("b680"), a("b64b"), a("d3b7"), a("07ac"), a("25f0"), a("3ca3"), a("159b"), a("ddb0"), a("2909")),
                i = a("3835"),
                o = a("b85c"),
                c = a("5530"),
                l = (a("96cf"), a("1da1")),
                u = a("2b0e"),
                p = a("d99e"),
                d = a("cf45"),
                g = a("51bf"),
                f = a("5245"),
                m = a("2fa3"),
                h = a("0a37"),
                v = a("e7e9"),
                _ = a("0c7c"),
                b = a("901e"),
                w = a.n(b),
                x = a("0c33"),
                P = (f["g"].compound, {
                    components: {
                        Slippage: x["a"],
                        GasPrice: v["a"]
                    },
                    data: function() {
                        return {
                            disabled: !1,
                            disabledButtons: !0,
                            sync_balances: !1,
                            max_balances: !0,
                            inf_approval: !0,
                            wallet_balances: [],
                            transferableBalance: null,
                            susdWaitingPeriod: !1,
                            susdWaitingPeriodTime: 0,
                            balances: [],
                            inputs: [],
                            amounts: [],
                            bgColors: [],
                            depositc: !1,
                            coins: [],
                            rates: [],
                            swap_address: g["f"].swap_address,
                            lpCrvReceived: null,
                            show_loading: !1,
                            waitingMessage: "",
                            estimateGas: 0,
                            ethPrice: 0,
                            justDeposit: !1,
                            stakepercentage: 100,
                            get showadvancedoptions() {
                                return "true" === localStorage.getItem("advancedoptions")
                            },
                            set showadvancedoptions(e) {
                                localStorage.setItem("advancedoptions", e)
                            },
                            maxSlippage: 1,
                            maxInputSlippage: "",
                            customSlippageDisabled: !0,
                            loadingAction: !1,
                            errorStaking: !1,
                            slippagePromise: m["n"](Promise.resolve()),
                            hasRewards: !0,
                            showSlippageModal: !1,
                            confirmSlippage: !1,
                            pendingStake: !1
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(l["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.$watch((function() {
                                            return g["f"].default_account
                                        }), (function(t, a) {
                                            t && a && t.toLowerCase() != a.toLowerCase() && e.mounted()
                                        })), e.$watch((function() {
                                            return g["f"].initializedContracts
                                        }), (function(t) {
                                            t && e.mounted()
                                        })), e.$watch((function() {
                                            return g["f"].currentContract
                                        }), (function(t, a) {
                                            e.setInputStyles(!1, t, a), g["f"].initializedContracts && e.mounted()
                                        }));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    watch: {
                        depositc: function(e, t) {
                            var a = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return a.changeSwapInfo(e), t.next = 3, a.handle_sync_balances();
                                        case 3:
                                            return !a.max_balances && a.highlightAllInputs(), t.next = 6, a.calcSlippage();
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        getMaxSlippage: function() {
                            this.getLPCrvReceived()
                        }
                    },
                    computed: Object(c["a"])({}, g["h"], {
                        currencies: function() {
                            return f["g"][g["f"].currentContract].is_meta ? this.depositc ? g["h"].currencies() : g["h"].meta_currencies() : g["h"].currencies()
                        },
                        minAmount: function() {
                            return ["tbtc", "ren", "sbtc", "hbtc"].includes(g["f"].currentContract) ? 1e-8 : .01
                        },
                        calcFee: function() {
                            var e = f["g"][g["f"].currentContract].N_COINS;
                            return this.fee / 100 * e / (4 * (e - 1))
                        },
                        compareInputsWarning: function() {
                            var e, t = [],
                                a = Object(o["a"])(Object.keys(this.currencies).entries());
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var s = Object(i["a"])(e.value, 2),
                                        n = s[0],
                                        r = s[1],
                                        c = this.wallet_balances[this.getI(n)];
                                    "susdv2" == this.currentPool && 3 == n && (c = this.susdWaitingPeriod ? 0 : this.transferableBalance);
                                    var l = w()(w()(c).times(this.rates[this.getI(n)])).minus(this.inputs[this.getI(n)]);
                                    l.lt(w()(-.01)) && t.push(this.depositc ? this.currencies[r] : r.toUpperCase())
                                }
                            } catch (u) {
                                a.e(u)
                            } finally {
                                a.f()
                            }
                            return t
                        },
                        depositingZeroWarning: function() {
                            var e = this.N_COINS;
                            return f["g"][this.currentPool].is_meta && (e = f["g"][this.currentPool].meta_N), this.inputs.filter((function(e) {
                                return 0 == +e
                            })).length == e && !this.disabledButtons
                        },
                        isPlain: function() {
                            return ["susdv2", "ren", "sbtc", "hbtc", "3pool"].includes(this.currentPool)
                        },
                        transferableBalanceText: function() {
                            return this.toFixed(this.transferableBalance / 1e18)
                        },
                        virtual_price: function() {
                            return g["f"].virtual_price
                        },
                        lpCrvReceivedText: function() {
                            return this.toFixed(this.lpCrvReceived)
                        },
                        gasPrice: function() {
                            return h["a"].gasPrice
                        },
                        gasPriceWei: function() {
                            return h["a"].gasPriceWei
                        },
                        stakePercentageInvalid: function() {
                            return this.stakepercentage < 0 || this.stakepercentage > 100
                        },
                        getMaxSlippage: function() {
                            var e = +this.maxSlippage;
                            return this.maxInputSlippage && (e = +this.maxInputSlippage), (100 - e) / 100
                        },
                        warningInputSlippage: function() {
                            return !!this.maxInputSlippage && +this.maxInputSlippage < .5
                        },
                        isZeroSlippage: function() {
                            return "" !== this.maxInputSlippage && (0 == +this.maxInputSlippage || isNaN(this.maxInputSlippage))
                        },
                        allSwapTokens: function() {
                            return Object.values(f["g"]).map((function(e) {
                                return e.token_address
                            }))
                        },
                        allDepositZaps: function() {
                            return Object.values(f["g"]).filter((function(e) {
                                return e.deposit_address
                            })).map((function(e) {
                                return e.deposit_address
                            }))
                        },
                        allGauges: function() {
                            return Object.values(f["g"]).filter((function(e) {
                                return e.gauge_address
                            }))
                        },
                        realAmounts: function() {
                            return this.is_meta && !this.depositc ? this.amounts.filter((function(e, t) {
                                return 1 != t
                            })) : this.is_meta && this.depositc ? this.amounts.filter((function(e, t) {
                                return t < 2
                            })) : this.amounts
                        },
                        realInputs: function() {
                            return this.is_meta && !this.depositc ? this.inputs.filter((function(e, t) {
                                return 1 != t
                            })) : this.is_meta && this.depositc ? this.inputs.filter((function(e, t) {
                                return t < 2
                            })) : this.inputs
                        }
                    }),
                    mounted: function() {
                        this.setInputStyles(!0), g["f"].initializedContracts && this.mounted()
                    },
                    methods: {
                        stakeTokens: function(e) {
                            var t = arguments,
                                a = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function s() {
                                var n, r, i, o, c, l;
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            if (n = t.length > 1 && void 0 !== t[1] && t[1], 3 != a.loadingAction) {
                                                s.next = 3;
                                                break
                                            }
                                            return s.abrupt("return");
                                        case 3:
                                            if (a.setLoadingAction(3), e) {
                                                s.next = 11;
                                                break
                                            }
                                            return s.t0 = w.a, s.next = 8, g["f"].swap_token.methods.balanceOf(g["f"].default_account).call();
                                        case 8:
                                            s.t1 = s.sent, e = (0, s.t0)(s.t1), e = w()(a.stakepercentage / 100).times(e);
                                        case 11:
                                            return a.waitingMessage = "Please approve staking ".concat(a.toFixed(e.div(w()(1e18))), " of your Curve LP tokens"), r = Object(p["d"])(a.waitingMessage), i = r.dismiss, s.next = 15, d["ensure_stake_allowance"](e, g["f"].gaugeContract, a.inf_approval);
                                        case 15:
                                            return i(), a.waitingMessage = "Please confirm stake transaction ".concat(n ? "(2/2)" : ""), o = Object(p["d"])(a.waitingMessage), i = o.dismiss, s.next = 20, Promise.all([m["i"]()]);
                                        case 20:
                                            return c = s.sent, a.ethPrice = c[0], l = 5e5, ["susdv2", "sbtc", "musd", "tbtc", "rsv", "dusd"].includes(a.currentPool) && (l = 7e5), a.estimateGas = l / 2, s.prev = 25, s.next = 28, g["f"].gaugeContract.methods.deposit(e.toFixed(0, 1)).send({
                                                from: g["f"].default_account,
                                                gasPrice: a.gasPriceWei,
                                                gas: l
                                            }).once("transactionHash", (function(e) {
                                                a.waitingMessage = "Waiting for stake transaction to confirm \n                            ".concat(n ? "(2/2)" : "", ": no further action needed"), i(), Object(p["c"])(e)
                                            }));
                                        case 28:
                                            g["f"].totalShare -= e, d["update_fee_info"](), s.next = 37;
                                            break;
                                        case 32:
                                            s.prev = 32, s.t2 = s["catch"](25), console.error(s.t2), i(), _["a"](s.t2);
                                        case 37:
                                            a.waitingMessage = "", a.show_loading = !1;
                                        case 39:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s, null, [
                                    [25, 32]
                                ])
                            })))()
                        },
                        mounted: function(e) {
                            var t = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function e() {
                                var a, s, n, i;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return ["susd", "susdv2", "ren", "sbtc", "hbtc", "3pool"].includes(g["f"].currentContract) ? t.depositc = !0 : t.depositc = !1, t.changeSwapInfo(t.depositc), g["f"].showSlippage = !1, g["f"].slippage = 0, e.next = 6, t.handle_sync_balances();
                                        case 6:
                                            return e.next = 8, t.getLPCrvReceived();
                                        case 8:
                                            return e.next = 10, t.calcSlippage();
                                        case 10:
                                            return a = Object(r["a"])(Array(g["f"].N_COINS).keys()).map((function(e) {
                                                return [t.coins[e]._address, t.coins[e].methods.allowance(g["f"].default_account || "0x0000000000000000000000000000000000000000", t.swap_address).encodeABI()]
                                            })), ["susdv2", "sbtc", "y", "iearn", "musd", "rsv", "dusd"].includes(t.currentPool) && a.push([g["f"].curveRewards._address, g["f"].curveRewards.methods.periodFinish().encodeABI()]), e.next = 14, g["f"].multicall.methods.aggregate(a).call();
                                        case 14:
                                            s = e.sent, n = s[1].map((function(e) {
                                                return g["f"].web3.eth.abi.decodeParameter("uint256", e)
                                            })), n.slice(0, n.length - 1).some((function(e) {
                                                return w()(e).lte(g["f"].max_allowance.div(w()(2))) > 0
                                            })) && (t.inf_approval = !1), i = Date.now() / 1e3, ["susdv2", "sbtc", "y", "iearn"].includes(t.currentPool) && +n[n.length - 1] < i && (t.hasRewards = !1), t.disabledButtons = !1;
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getTokenIcon: function(e) {
                            return m["j"](e, this.depositc, this.currentPool)
                        },
                        toFixed: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (0 == +e && ["ren", "sbtc", "hbtc", "tbtc"].includes(g["f"].currentContract)) return "0.00";
                            2 == t && ["tbtc", "ren", "sbtc", "hbtc"].includes(g["f"].currentContract) && (t = 8);
                            var a = (+e).toFixed(t);
                            return isNaN(a) ? "0.00" : a
                        },
                        maxBalanceCoin: function(e) {
                            return this.toFixed(this.wallet_balances[e] * this.rates[e])
                        },
                        setMaxBalanceCoin: function(e) {
                            if (u["a"].set(this.inputs, e, this.maxBalanceCoin(e)), "susdv2" == this.currentPool && 3 == e || "sbtc" == this.currentPool && 2 == e || "tbtc" == this.currentPool && 3 == e) {
                                var t = this.susdWaitingPeriod ? 0 : w()(this.transferableBalance).times(this.rates[e]).toString();
                                u["a"].set(this.inputs, e, t)
                            }
                        },
                        inputsFormat: function(e) {
                            return this.inputs[e] ? this.toFixed(+this.inputs[e]) : "0.00"
                        },
                        changeSwapInfo: function(e) {
                            g["f"].is_meta ? (this.coins = g["f"].all_coins, this.rates = g["f"].c_rates) : e ? (this.coins = g["f"].coins, "susdv2" == this.currentPool && u["a"].set(this.coins, 3, g["f"].underlying_coins[3]), "sbtc" == this.currentPool && u["a"].set(this.coins, 2, g["f"].underlying_coins[2]), this.rates = g["f"].c_rates, this.swap_address = g["f"].swap_address) : (this.coins = g["f"].underlying_coins, this.rates = g["f"].coin_precisions.map((function(e) {
                                return 1 / e
                            })), this.swap_address = g["f"].deposit_zap._address)
                        },
                        setInputStyles: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                a = arguments.length > 2 ? arguments[2] : void 0,
                                s = g["f"].N_COINS;
                            if (f["g"][g["f"].currentContract].is_meta && (s = 5), a) {
                                for (var n = 0; n < f["g"][t].N_COINS - f["g"][a].N_COINS; n++) this.inputs.push("0.00");
                                f["g"][a].N_COINS - f["g"][t].N_COINS > 0 && (this.inputs = this.inputs.filter((function(e, a) {
                                    return a < f["g"][t].N_COINS
                                })))
                            } else e && (this.inputs = new Array(s).fill("0.00"));
                            this.bgColors = Array(s).fill({
                                backgroundColor: "#707070",
                                color: "#d0d0d0"
                            })
                        },
                        calcSlippage: function() {
                            var e = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.slippagePromise.cancel(), e.slippagePromise = m["n"](d["calc_slippage"](e.realInputs, !0)), t.next = 5, e.slippagePromise;
                                        case 5:
                                            t.next = 10;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t["catch"](0), console.error(t.t0);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        handle_sync_balances: function() {
                            var e = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function t() {
                                var a, s, n, r, i, o, c, l, p, h, v, _, b, x;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, d["update_fee_info"]();
                                        case 2:
                                            for (a = [], s = g["f"].N_COINS, g["f"].is_meta && (s = f["g"][g["f"].currentContract].meta_N), n = 0; n < g["f"].N_COINS; n++) a.push([e.coins[n]._address, e.coins[n].methods.balanceOf(g["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]), a.push([g["f"].swap._address, g["f"].swap.methods.balances(n).encodeABI()]);
                                            if (r = f["g"][g["f"].currentContract].coin_precisions, g["f"].is_meta) {
                                                for (i = f["g"][g["f"].currentContract].base_pool, o = 0; o < f["g"][i].N_COINS; o++) a.push([e.coins[o + 2]._address, e.coins[o + 2].methods.balanceOf(g["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]), a.push([g["f"].base_swap._address, g["f"].base_swap.methods.balances(o).encodeABI()]);
                                                r = f["g"][g["f"].currentContract].meta_precisions
                                            }
                                            return "susdv2" != e.currentPool && "sbtc" != e.currentPool && "tbtc" != e.currentPool || (c = "susdv2" == e.currentPool ? 3 : 2, "tbtc" == e.currentPool && (c = 4), l = "0x7355534400000000000000000000000000000000000000000000000000000000", ["tbtc", "sbtc"].includes("sbtc" == e.currentPool) && (l = "0x7342544300000000000000000000000000000000000000000000000000000000"), a.push([e.coins[c]._address, e.coins[c].methods.transferableSynths(g["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]), a.push([g["f"].snxExchanger._address, g["f"].snxExchanger.methods.maxSecsLeftInWaitingPeriod(g["f"].default_account, l).encodeABI()])), t.next = 11, g["f"].multicall.methods.aggregate(a).call();
                                        case 11:
                                            if (p = t.sent, h = p[1].map((function(e) {
                                                    return g["f"].web3.eth.abi.decodeParameter("uint256", e)
                                                })), v = h, "susdv2" != e.currentPool && "sbtc" != e.currentPool && "tbtc" != e.currentPool || (v = h.slice(0, -2)), m["d"](v, 2).map((function(t, a) {
                                                    u["a"].set(e.wallet_balances, a, t[0]), g["f"].default_account || u["a"].set(e.wallet_balances, a, 0), u["a"].set(e.balances, a, +t[1])
                                                })), "susdv2" != e.currentPool && "sbtc" != e.currentPool && "tbtc" != e.currentPool || (e.transferableBalance = h[h.length - 2], e.susdWaitingPeriod = 0 != +h[h.length - 1], e.susdWaitingPeriodTime = +h[h.length - 1]), e.max_balances)
                                                for (_ = 0; _ < s; _++) b = e.wallet_balances[_] * g["f"].c_rates[_], e.depositc || (b = e.wallet_balances[_] / r[_]), x = b, x = e.toFixed(b), 0 == x && (x = "0.00"), u["a"].set(e.inputs, _, e.toFixed(x)), ("susdv2" == e.currentPool && 3 == _ || "sbtc" == e.currentPool && 2 == _ || "tbtc" == e.currentPool && 4 == _) && (2, "sbtc" == e.currentPool && 2 == _ && 18, e.susdWaitingPeriod ? 0 : e.transferableBalance, u["a"].set(e.inputs, _, e.toFixed(w()(e.transferableBalance).div(1e18))));
                                            else e.disabled = !1;
                                        case 18:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        handle_sync_balances_proportion: function() {
                            var e = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.handle_sync_balances();
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        deposit_stake: function() {
                            this.show_loading = !0, this.check_handle_add_liquidity(!0)
                        },
                        setLoadingAction: function(e) {
                            var t = this;
                            this.loadingAction = e, setTimeout((function() {
                                return t.loadingAction = !1
                            }), 500)
                        },
                        filterEvent: function(e) {
                            return void 0 !== this.allSwapTokens.map((function(e) {
                                return e.toLowerCase()
                            })).find((function(t) {
                                return t == e.address.toLowerCase()
                            })) && "0x0000000000000000000000000000000000000000000000000000000000000000" == e.raw.topics[1] || void 0 !== this.allDepositZaps.map((function(e) {
                                return e.toLowerCase()
                            })).find((function(t) {
                                return t == e.address.toLowerCase()
                            }))
                        },
                        cancelDepositSlippage: function() {
                            this.showSlippageModal = !1, this.confirmSlippage = !1, this.pendingStake = !1
                        },
                        check_handle_add_liquidity: function() {
                            var e = arguments,
                                t = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function a() {
                                var s;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            if (s = e.length > 0 && void 0 !== e[0] && e[0], !(t.slippage < -.05)) {
                                                a.next = 5;
                                                break
                                            }
                                            return t.pendingStake = s, t.showSlippageModal = !0, a.abrupt("return");
                                        case 5:
                                            t.handle_add_liquidity(s);
                                        case 6:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        },
                        handle_add_liquidity: function() {
                            var e = arguments,
                                t = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function a() {
                                var s, n, i, o, c, l, h, v, b, x, P, k, I, C, y, S, N, A, O, M, j;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            if (s = e.length > 0 && void 0 !== e[0] && e[0], n = 0 == s ? 1 : 2, t.loadingAction != n) {
                                                a.next = 4;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 4:
                                            return t.setLoadingAction(n), a.next = 7, Promise.all([m["i"]()]);
                                        case 7:
                                            return i = a.sent, t.ethPrice = i[0], t.show_loading = !0, o = Object(r["a"])(Array(g["f"].N_COINS).keys()).map((function(e) {
                                                return "susdv2" == t.currentPool && 3 == e || "sbtc" == t.currentPool && 2 == e || "tbtc" == t.currentPool && 4 == e ? [t.coins[e]._address, t.coins[e].methods.transferableSynths(g["f"].default_account).encodeABI()] : [t.coins[e]._address, t.coins[e].methods.balanceOf(g["f"].default_account).encodeABI()]
                                            })), t.is_meta && o.push.apply(o, Object(r["a"])(Array.from(Array(f["g"][g["f"].currentContract].meta_N - g["f"].N_COINS), (function(e, a) {
                                                return [t.coins[a + 2]._address, t.coins[a + 2].methods.balanceOf(g["f"].default_account).encodeABI()]
                                            })))), c = 1, o.push([g["f"].swap_token._address, g["f"].swap_token.methods.totalSupply().encodeABI()]), ["susdv2", "sbtc", "tbtc"].includes(t.currentPool) && (l = "0x7355534400000000000000000000000000000000000000000000000000000000", ["tbtc", "sbtc"].includes(t.currentPool) && (l = "0x7342544300000000000000000000000000000000000000000000000000000000"), o.push([g["f"].snxExchanger._address, g["f"].snxExchanger.methods.maxSecsLeftInWaitingPeriod(g["f"].default_account, l).encodeABI()]), c = 2), a.next = 17, g["f"].multicall.methods.aggregate(o).call();
                                        case 17:
                                            if (h = a.sent, v = h[1].map((function(e) {
                                                    return g["f"].web3.eth.abi.decodeParameter("uint256", e)
                                                })), v.slice(0, v.length - c).forEach((function(e, a) {
                                                    var s = f["g"][g["f"].currentContract],
                                                        n = t.depositc ? s.wrapped_precisions[a] : s.coin_precisions[a],
                                                        r = w()(e);
                                                    r = t.depositc ? w()(r).times(g["f"].c_rates[a]) : w()(r).div(n), ("susdv2" == t.currentPool && 3 == a || "sbtc" == t.currentPool && 2 == a) && 0 != +v[v.length - 1] && (r = w()(0));
                                                    var i = w()(r).minus(w()(t.inputs[a]));
                                                    if (!t.inputs[a]) return u["a"].set(t.amounts, a, 0);
                                                    w()(r).gt(0) && i.lt(0) && w()(i).lt(w()(t.minAmount)) ? (t.depositc || (e = w()(e).div(n).div(g["f"].c_rates[a])), u["a"].set(t.amounts, a, w()(e).toFixed(0, 1))) : u["a"].set(t.amounts, a, w()(t.inputs[a]).div(g["f"].c_rates[a]).toFixed(0, 1))
                                                })), t.amounts = t.amounts.map((function(e) {
                                                    return e || 0
                                                })), b = +v[v.length - c], t.waitingMessage = "Please approve spending your coins", x = t.inputs.filter(Number).length, P = t.inputs.map((function(e, a) {
                                                    if (!e) return 0;
                                                    var s = f["g"][g["f"].currentContract],
                                                        n = s.coin_precisions;
                                                    t.is_meta && (n = s.meta_precisions);
                                                    var r = w()(t.wallet_balances[a]).div(n[a]).minus(e),
                                                        i = t.wallet_balances[a];
                                                    return ("susdv2" == t.currentPool && 3 == a || "sbtc" == t.currentPool && 2 == a || "tbtc" == t.currentPool && 4 == a) && (i = t.transferableBalance), ("susdv2" == t.currentPool && 3 == a || "sbtc" == t.currentPool && 2 == a || "tbtc" == t.currentPool && 4 == a) && 0 != +v[v.length - 1] && (i = 0), w()(i).gt(0) && r.lt(0) && r.lt(w()(t.minAmount)) ? w()(i).toFixed(0, 1) : w()(e).times(n[a]).toFixed(0, 1)
                                                })), t.is_meta && (P = P.filter((function(e, t) {
                                                    return 1 != t
                                                }))), k = 0, !(b > 0)) {
                                                a.next = 36;
                                                break
                                            }
                                            return I = t.amounts, C = g["f"].swap.methods.calc_token_amount, t.is_meta && (I = t.realAmounts, t.depositc || (I = P, C = g["f"].deposit_zap.methods.calc_token_amount)), a.next = 33, C(I, !0).call();
                                        case 33:
                                            k = a.sent, k = w()(k).times(w()(1).minus(w()(t.calcFee))), k = w()(k).times(w()(t.getMaxSlippage)).toFixed(0, 1);
                                        case 36:
                                            if (t.depositc ? t.estimateGas = g["g"].deposit[t.currentPool] / 2 : t.estimateGas = (0 | g["g"].depositzap[t.currentPool].deposit(x)) / 1.5, !t.inf_approval) {
                                                a.next = 42;
                                                break
                                            }
                                            return a.next = 40, d["ensure_allowance"](t.realAmounts, !t.depositc, void 0, void 0, !0);
                                        case 40:
                                            a.next = 49;
                                            break;
                                        case 42:
                                            if (!t.depositc) {
                                                a.next = 47;
                                                break
                                            }
                                            return a.next = 45, d["ensure_allowance"](t.realAmounts, !1);
                                        case 45:
                                            a.next = 49;
                                            break;
                                        case 47:
                                            return a.next = 49, d["ensure_allowance"](P, !0);
                                        case 49:
                                            if (S = 0, !t.depositc) {
                                                a.next = 75;
                                                break
                                            }
                                            return t.waitingMessage = "Please confirm deposit transaction", N = Object(p["d"])(t.waitingMessage), A = N.dismiss, a.next = 55, m["r"](100);
                                        case 55:
                                            return O = g["f"].swap.methods.add_liquidity(t.realAmounts, k).send({
                                                from: g["f"].default_account,
                                                gasPrice: t.gasPriceWei,
                                                gas: g["g"].deposit[t.currentPool]
                                            }).once("transactionHash", (function(e) {
                                                A(), Object(p["c"])(e), t.waitingMessage = "Waiting for deposit \n                            <a href='http://etherscan.io/tx/".concat(e, "'>transaction</a> \n                            to confirm ").concat(s ? "before staking" : "no further action required")
                                            })), a.prev = 56, a.next = 59, O;
                                        case 59:
                                            y = a.sent, a.next = 73;
                                            break;
                                        case 62:
                                            if (a.prev = 62, a.t0 = a["catch"](56), console.error(a.t0), A(), _["a"](a.t0), -32603 != a.t0.code) {
                                                a.next = 73;
                                                break
                                            }
                                            return a.next = 70, d["setTimeout"](300);
                                        case 70:
                                            return a.next = 72, O;
                                        case 72:
                                            y = a.sent;
                                        case 73:
                                            a.next = 97;
                                            break;
                                        case 75:
                                            return M = 0 | g["g"].depositzap[t.currentPool].deposit(x), console.warn(t.inputs, "inputs", P, "uamounts", t.amounts, "amounts", g["f"].swap._address, "swap address", g["f"].coin_precisions, "coin precisions", g["f"].c_rates, "c rates", g["f"].coins.map((function(e) {
                                                return e._address
                                            })), "coins", g["f"].underlying_coins.map((function(e) {
                                                return e._address
                                            })), "underlying_coins", g["f"].virtual_price, "virtual_price", k, "token_amount", Date.now()), t.waitingMessage = "Please confirm deposit transaction", a.next = 80, m["r"](100);
                                        case 80:
                                            return j = g["f"].deposit_zap.methods.add_liquidity(P, k).send({
                                                from: g["f"].default_account,
                                                gasPrice: t.gasPriceWei,
                                                gas: M
                                            }).once("transactionHash", (function(e) {
                                                Object(p["c"])(e), t.waitingMessage = "Waiting for deposit \n                            <a href='http://etherscan.io/tx/".concat(e, "'>transaction</a>\n                            to confirm ").concat(s ? "before staking (1/2)" : "no further action required"), console.warn(e, "tx hash")
                                            })), a.prev = 81, a.next = 84, j;
                                        case 84:
                                            y = a.sent, a.next = 97;
                                            break;
                                        case 87:
                                            if (a.prev = 87, a.t1 = a["catch"](81), console.error(a.t1), _["a"](a.t1), -32603 != a.t1.code) {
                                                a.next = 97;
                                                break
                                            }
                                            return a.next = 94, d["setTimeout"](300);
                                        case 94:
                                            return a.next = 96, j;
                                        case 96:
                                            y = a.sent;
                                        case 97:
                                            if (t.waitingMessage = "", s || (t.show_loading = !1), !s) {
                                                a.next = 123;
                                                break
                                            }
                                            return console.warn(y.events), a.prev = 101, S = w()(Object.values(y.events).filter((function(e) {
                                                return t.filterEvent(e)
                                            })).filter((function(e) {
                                                return e.address.toLowerCase() == f["g"][t.currentPool].token_address.toLowerCase()
                                            }))[0].raw.data), a.next = 105, m["r"](100);
                                        case 105:
                                            return a.next = 107, t.stakeTokens(S, !0);
                                        case 107:
                                            a.next = 123;
                                            break;
                                        case 109:
                                            return a.prev = 109, a.t2 = a["catch"](101), a.prev = 111, S = w()(Object.values(y.logs).filter((function(e) {
                                                return t.filterEvent(e)
                                            })).filter((function(e) {
                                                return e.address.toLowerCase() == f["g"][t.currentPool].token_address.toLowerCase()
                                            }))[0].data), a.next = 115, m["r"](100);
                                        case 115:
                                            return a.next = 117, t.stakeTokens(S, !0);
                                        case 117:
                                            a.next = 123;
                                            break;
                                        case 119:
                                            a.prev = 119, a.t3 = a["catch"](111), console.error(a.t3), t.errorStaking = !0;
                                        case 123:
                                            return t.estimateGas = 0, t.justDeposit = !1, a.next = 127, t.handle_sync_balances();
                                        case 127:
                                            d["update_fee_info"]();
                                        case 128:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [56, 62],
                                    [81, 87],
                                    [101, 109],
                                    [111, 119]
                                ])
                            })))()
                        },
                        highlightAllInputs: function() {
                            for (var e = 0; e < g["f"].N_COINS; e++) this.highlightInputs(e)
                        },
                        highlightInputs: function(e) {
                            var t = this.inputs[e],
                                a = this.wallet_balances[e];
                            ("susdv2" == this.currentPool && 3 == e || "sbtc" == this.currentPool && 2 == e || "tbtc" == this.currentPool && 4 == e) && (a = this.transferableBalance), t > a * this.rates[e] ? u["a"].set(this.bgColors, this.getI(e), "red") : u["a"].set(this.bgColors, this.getI(e), "blue")
                        },
                        getLPCrvReceived: function() {
                            var e = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function t() {
                                var a, s, n, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return a = e.inputs.map((function(e) {
                                                return e || 0
                                            })), s = g["f"].swap.methods.calc_token_amount, n = g["f"].c_rates, f["g"][g["f"].currentContract].is_meta && !e.depositc && (s = g["f"].deposit_zap.methods.calc_token_amount, a = a.filter((function(e, t) {
                                                return 1 != t
                                            })), n = g["f"].c_rates.filter((function(e, t) {
                                                return 1 != t
                                            }))), f["g"][g["f"].currentContract].is_meta && e.depositc && (a = a.slice(0, 2)), a = a.map((function(e, t) {
                                                return w()(e).div(n[t]).toFixed(0, 1)
                                            })), console.log(a, "THE INPUTS"), t.next = 9, s(a, !0).call();
                                        case 9:
                                            t.t0 = t.sent, r = t.t0 / 1e18, e.lpCrvReceived = r * e.getMaxSlippage;
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        change_currency: function(e) {
                            var t = arguments,
                                a = this;
                            return Object(l["a"])(regeneratorRuntime.mark((function s() {
                                var n, r, i, o, c, l, p, d;
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            if (n = !(t.length > 1 && void 0 !== t[1]) || t[1], r = t.length > 2 ? t[2] : void 0, r && (a.inputs[e] = r.target.value), i = a.inputs[e], a.highlightInputs(e), o = g["f"].N_COINS, a.is_meta && (o = f["g"][g["f"].currentContract].meta_N), a.sync_balances && !a.max_balances)
                                                for (c = 0; c < o; c++) c != e && (a.inputs[c], a.balances[e] * g["f"].c_rates[e] > 1 ? (l = a.balances[e], p = a.balances[c], a.is_meta && e > 1 && (l *= 1e18 * a.bal_info[1] / a.base_supply), a.is_meta && c > 1 && (p *= 1e18 * a.bal_info[1] / a.base_supply), d = i / g["f"].c_rates[e] * p / l, d = Math.floor(d * g["f"].c_rates[c] * 100) / 100, n && u["a"].set(a.inputs, c, d)) : (d = i, n && u["a"].set(a.inputs, c, d)), d > a.wallet_balances[c] * a.rates[c] ? u["a"].set(a.bgColors, c, "red") : u["a"].set(a.bgColors, c, "blue"));
                                            return s.next = 10, a.getLPCrvReceived();
                                        case 10:
                                            return s.next = 12, a.calcSlippage();
                                        case 12:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            })))()
                        },
                        handle_migrate_new: function() {
                            d["handle_migrate_new"]("new")
                        },
                        formatDateToHuman: function(e) {
                            return m["f"](e)
                        },
                        getI: function(e) {
                            return this.is_meta && !this.depositc && e > 0 ? e + 1 : e
                        }
                    }
                }),
                k = P,
                I = (a("af79"), a("2877")),
                C = Object(I["a"])(k, s, n, !1, null, null, null);
            t["default"] = C.exports
        },
        "3bdc": function(e, t, a) {
            function s(e, t, a, s, n, r, i) {
                try {
                    var o = e[r](i),
                        c = o.value
                } catch (l) {
                    return void a(l)
                }
                o.done ? t(c) : Promise.resolve(c).then(s, n)
            }

            function n(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var i = e.apply(t, a);

                        function o(e) {
                            s(i, n, r, o, c, "next", e)
                        }

                        function c(e) {
                            s(i, n, r, o, c, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            a("d3b7"), a("e6cf"), e.exports = n
        },
        "3c38": function(e, t, a) {},
        "45fc": function(e, t, a) {
            "use strict";
            var s = a("23e7"),
                n = a("b727").some,
                r = a("a640"),
                i = a("ae40"),
                o = r("some"),
                c = i("some");
            s({
                target: "Array",
                proto: !0,
                forced: !o || !c
            }, {
                some: function(e) {
                    return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        5899: function(e, t) {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        "58a8": function(e, t, a) {
            var s = a("1d80"),
                n = a("5899"),
                r = "[" + n + "]",
                i = RegExp("^" + r + r + "*"),
                o = RegExp(r + r + "*$"),
                c = function(e) {
                    return function(t) {
                        var a = String(s(t));
                        return 1 & e && (a = a.replace(i, "")), 2 & e && (a = a.replace(o, "")), a
                    }
                };
            e.exports = {
                start: c(1),
                end: c(2),
                trim: c(3)
            }
        },
        "6e7b": function(e, t, a) {
            "use strict";
            var s = a("3c38"),
                n = a.n(s);
            n.a
        },
        a9e3: function(e, t, a) {
            "use strict";
            var s = a("83ab"),
                n = a("da84"),
                r = a("94ca"),
                i = a("6eeb"),
                o = a("5135"),
                c = a("c6b6"),
                l = a("7156"),
                u = a("c04e"),
                p = a("d039"),
                d = a("7c73"),
                g = a("241c").f,
                f = a("06cf").f,
                m = a("9bf2").f,
                h = a("58a8").trim,
                v = "Number",
                _ = n[v],
                b = _.prototype,
                w = c(d(b)) == v,
                x = function(e) {
                    var t, a, s, n, r, i, o, c, l = u(e, !1);
                    if ("string" == typeof l && l.length > 2)
                        if (l = h(l), t = l.charCodeAt(0), 43 === t || 45 === t) {
                            if (a = l.charCodeAt(2), 88 === a || 120 === a) return NaN
                        } else if (48 === t) {
                        switch (l.charCodeAt(1)) {
                            case 66:
                            case 98:
                                s = 2, n = 49;
                                break;
                            case 79:
                            case 111:
                                s = 8, n = 55;
                                break;
                            default:
                                return +l
                        }
                        for (r = l.slice(2), i = r.length, o = 0; o < i; o++)
                            if (c = r.charCodeAt(o), c < 48 || c > n) return NaN;
                        return parseInt(r, s)
                    }
                    return +l
                };
            if (r(v, !_(" 0o1") || !_("0b1") || _("+0x1"))) {
                for (var P, k = function(e) {
                        var t = arguments.length < 1 ? 0 : e,
                            a = this;
                        return a instanceof k && (w ? p((function() {
                            b.valueOf.call(a)
                        })) : c(a) != v) ? l(new _(x(t)), a, k) : x(t)
                    }, I = s ? g(_) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), C = 0; I.length > C; C++) o(_, P = I[C]) && !o(k, P) && m(k, P, f(_, P));
                k.prototype = b, b.constructor = k, i(n, v, k)
            }
        },
        af79: function(e, t, a) {
            "use strict";
            var s = a("d6e7"),
                n = a.n(s);
            n.a
        },
        d6e7: function(e, t, a) {},
        e7e9: function(e, t, a) {
            "use strict";
            var s = function() {
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
                r = (a("b680"), a("d3b7"), a("96cf"), a("1da1")),
                i = a("0a37"),
                o = a("0c7c"),
                c = a("2fa3"),
                l = a("fe5c"),
                u = a("901e"),
                p = a.n(u),
                d = {
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
                                return o["b"].txError = null
                            }), 5e3), o["b"].txError
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(r["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        !i["a"].fetched && e.getGasPrice(), i["a"].gasPriceInterval && Object(l["clearIntervalAsync"])(i["a"].gasPriceInterval), i["a"].gasPriceInterval && !i["a"].gasPriceInterval.stopped || (i["a"].gasPriceInterval = Object(l["setIntervalAsync"])((function() {
                                            return e.getGasPrice()
                                        }), 3e3)), e.$watch((function() {
                                            return i["a"].gasPrice
                                        }), (function(e) {
                                            i["a"].gasPriceWei = p()(e).times(1e9).toFixed(0, 1)
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
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                var t, a, s;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, Object(c["q"])(fetch("https://gasprice.poa.network/"));
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
                                            return e.prev = 13, e.t0 = e["catch"](0), e.prev = 15, e.next = 18, Object(c["q"])(fetch("https://fees.upvest.co/estimate_eth_fees"));
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
                                            e.t2 = e.sent, s = e.t2 / 1e9, i["a"].gasPriceInfo = {
                                                low: s - 2,
                                                standard: s,
                                                fast: s + 2,
                                                instant: s + 4
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
                            return Object(r["a"])(regeneratorRuntime.mark((function a() {
                                var s;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            s = e.target.value, e.target.value > 2 * t.gasPriceFastest && (s = 2 * t.gasPriceFastest), t.gasPrice = s;
                                        case 3:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        }
                    }
                },
                g = d,
                f = (a("6e7b"), a("2877")),
                m = Object(f["a"])(g, s, n, !1, null, "207c7b6a", null);
            t["a"] = m.exports
        },
        fe5c: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "SetIntervalAsyncError", (function() {
                return o
            })), a.d(t, "clearIntervalAsync", (function() {
                return r
            })), a.d(t, "setIntervalAsync", (function() {
                return d
            }));
            var s = a("3bdc");
            const n = Math.pow(2, 31) - 1;

            function r(e) {
                return i.apply(this, arguments)
            }

            function i() {
                return i = s((function*(e) {
                    e.stopped = !0;
                    for (var t = 0, a = Object.values(e.timeouts); t < a.length; t++) {
                        const e = a[t];
                        clearTimeout(e)
                    }
                    const s = () => {},
                        r = Object.values(e.promises).map(e => {
                            e.catch(s)
                        }),
                        i = setInterval(s, n);
                    yield Promise.all(r), clearInterval(i)
                })), i.apply(this, arguments)
            }
            class o extends Error {}
            Object.defineProperty(o.prototype, "name", {
                value: "SetIntervalAsyncError"
            });
            const c = 10;

            function l(e) {
                if ("function" !== typeof e) throw new o('Invalid argument: "handler". Expected a function.')
            }

            function u(e) {
                if (!("number" === typeof e && c <= e)) throw new o(`Invalid argument: "interval". Expected a number greater than or equal to ${c}.`)
            }
            class p {
                constructor() {
                    this.stopped = !1, this.id = 0, this.timeouts = {}, this.promises = {}
                }
            }

            function d(e, t, ...a) {
                l(e), u(t);
                const s = new p,
                    n = s.id;
                return s.timeouts[n] = setTimeout(g, t, s, e, t, ...a), s
            }

            function g(e, t, a, ...n) {
                const r = e.id;
                e.promises[r] = s((function*() {
                    const s = new Date;
                    try {
                        yield t(...n)
                    } catch (o) {
                        console.error(o)
                    }
                    const i = new Date;
                    if (!e.stopped) {
                        const o = i - s,
                            c = a > o ? a - o : 0;
                        e.timeouts[r + 1] = setTimeout(g, c, e, t, a, ...n)
                    }
                    delete e.timeouts[r], delete e.promises[r]
                }))(), e.id = r + 1
            }
        }
    }
]);
//# sourceMappingURL=chunk-31de206e.1508cb59.js.map