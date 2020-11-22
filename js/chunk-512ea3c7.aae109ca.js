(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-512ea3c7"], {
        "0c33": function(e, t, a) {
            "use strict";
            var n = function() {
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
                s = [function() {
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
                c = {
                    props: ["show_nobalance", "show_nobalance_i"],
                    computed: Object(r["a"])({}, i["h"], {
                        noBalanceText: function() {
                            if (!this.show_nobalance) return "";
                            var e = Object.entries(this.all_currencies)[this.show_nobalance_i];
                            return 2 == this.show_nobalance_i && "usdt" == this.currentPool || !["susdv2", "ren", "sbtc", "hbtc", "3pool", "gusd", "husd", "usdk", "usdn", "linkusd", "musd", "rsv", "tbtc", "dusd"].includes(this.currentPool) ? e[1] : e[1] + " (in " + e[0] + ")"
                        }
                    })
                },
                o = c,
                l = a("2877"),
                u = Object(l["a"])(o, n, s, !1, null, "9782bd3e", null);
            t["a"] = u.exports
        },
        "3bdc": function(e, t, a) {
            function n(e, t, a, n, s, r, i) {
                try {
                    var c = e[r](i),
                        o = c.value
                } catch (l) {
                    return void a(l)
                }
                c.done ? t(o) : Promise.resolve(o).then(n, s)
            }

            function s(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(s, r) {
                        var i = e.apply(t, a);

                        function c(e) {
                            n(i, s, r, c, o, "next", e)
                        }

                        function o(e) {
                            n(i, s, r, c, o, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            a("d3b7"), a("e6cf"), e.exports = s
        },
        "3c38": function(e, t, a) {},
        5899: function(e, t) {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        "58a8": function(e, t, a) {
            var n = a("1d80"),
                s = a("5899"),
                r = "[" + s + "]",
                i = RegExp("^" + r + r + "*"),
                c = RegExp(r + r + "*$"),
                o = function(e) {
                    return function(t) {
                        var a = String(n(t));
                        return 1 & e && (a = a.replace(i, "")), 2 & e && (a = a.replace(c, "")), a
                    }
                };
            e.exports = {
                start: o(1),
                end: o(2),
                trim: o(3)
            }
        },
        "6e7b": function(e, t, a) {
            "use strict";
            var n = a("3c38"),
                s = a.n(n);
            s.a
        },
        "7c94": function(e, t, a) {
            "use strict";
            var n = a("bfa2"),
                s = a.n(n);
            s.a
        },
        a9e3: function(e, t, a) {
            "use strict";
            var n = a("83ab"),
                s = a("da84"),
                r = a("94ca"),
                i = a("6eeb"),
                c = a("5135"),
                o = a("c6b6"),
                l = a("7156"),
                u = a("c04e"),
                d = a("d039"),
                p = a("7c73"),
                h = a("241c").f,
                m = a("06cf").f,
                f = a("9bf2").f,
                g = a("58a8").trim,
                w = "Number",
                _ = s[w],
                v = _.prototype,
                b = o(p(v)) == w,
                x = function(e) {
                    var t, a, n, s, r, i, c, o, l = u(e, !1);
                    if ("string" == typeof l && l.length > 2)
                        if (l = g(l), t = l.charCodeAt(0), 43 === t || 45 === t) {
                            if (a = l.charCodeAt(2), 88 === a || 120 === a) return NaN
                        } else if (48 === t) {
                        switch (l.charCodeAt(1)) {
                            case 66:
                            case 98:
                                n = 2, s = 49;
                                break;
                            case 79:
                            case 111:
                                n = 8, s = 55;
                                break;
                            default:
                                return +l
                        }
                        for (r = l.slice(2), i = r.length, c = 0; c < i; c++)
                            if (o = r.charCodeAt(c), o < 48 || o > s) return NaN;
                        return parseInt(r, n)
                    }
                    return +l
                };
            if (r(w, !_(" 0o1") || !_("0b1") || _("+0x1"))) {
                for (var k, P = function(e) {
                        var t = arguments.length < 1 ? 0 : e,
                            a = this;
                        return a instanceof P && (b ? d((function() {
                            v.valueOf.call(a)
                        })) : o(a) != w) ? l(new _(x(t)), a, P) : x(t)
                    }, y = n ? h(_) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), N = 0; y.length > N; N++) c(_, k = y[N]) && !c(P, k) && f(P, k, m(_, k));
                P.prototype = v, v.constructor = P, i(s, w, P)
            }
        },
        bfa2: function(e, t, a) {},
        d1e2: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "add-liquidity"
                    }, [a("div", {
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
                                return t.target !== t.currentTarget ? null : e.cancelWithdrawSlippage(t)
                            }
                        }
                    }, [a("div", {
                        staticClass: "modal-content window white"
                    }, [a("fieldset", [a("div", {
                        staticClass: "legend2 hoverpointer",
                        on: {
                            click: e.cancelWithdrawSlippage
                        }
                    }, [e._v(" ["), a("span", {
                        staticClass: "greentext"
                    }, [e._v("■")]), e._v("] ")]), a("legend", {
                        staticClass: "redwarning"
                    }, [e._v(" High slippage! ")]), a("div", {
                        staticClass: "content"
                    }, [a("p", {
                        staticClass: "simple-error"
                    }, [e._v(" High slippage warning! "), a("br"), e._v(" Withdrawing will have " + e._s((100 * -e.slippage).toFixed(3)) + "% slippage! ")])]), a("div", {
                        staticClass: "confirmslippage"
                    }, [a("input", {
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
                                    n = t.target,
                                    s = !!n.checked;
                                if (Array.isArray(a)) {
                                    var r = null,
                                        i = e._i(a, r);
                                    n.checked ? i < 0 && (e.confirmSlippage = a.concat([r])) : i > -1 && (e.confirmSlippage = a.slice(0, i).concat(a.slice(i + 1)))
                                } else e.confirmSlippage = s
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "confirmslippage"
                        }
                    }, [e._v("Confirm " + e._s((100 * -e.slippage).toFixed(3)) + "% slippage!")])]), a("button", {
                        staticClass: "canceldepositslippage",
                        on: {
                            click: e.cancelWithdrawSlippage
                        }
                    }, [e._v("Cancel")]), a("button", {
                        staticClass: "buttonred",
                        attrs: {
                            disabled: !e.confirmSlippage
                        },
                        on: {
                            click: function(t) {
                                return e.handle_remove_liquidity(e.pendingUnstake, e.pendingUnstakeOnly, e.pendingExit)
                            }
                        }
                    }, [e._v(" Withdraw anyway ")])])])]), a("fieldset", {
                        staticClass: "percentage"
                    }, [a("legend", [e._v(" Share of liquidity (%) "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.hasGauge,
                            expression: "hasGauge"
                        }]
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.showstaked,
                            expression: "showstaked"
                        }],
                        attrs: {
                            id: "showstaked",
                            type: "checkbox",
                            name: "showstaked"
                        },
                        domProps: {
                            checked: Array.isArray(e.showstaked) ? e._i(e.showstaked, null) > -1 : e.showstaked
                        },
                        on: {
                            change: function(t) {
                                var a = e.showstaked,
                                    n = t.target,
                                    s = !!n.checked;
                                if (Array.isArray(a)) {
                                    var r = null,
                                        i = e._i(a, r);
                                    n.checked ? i < 0 && (e.showstaked = a.concat([r])) : i > -1 && (e.showstaked = a.slice(0, i).concat(a.slice(i + 1)))
                                } else e.showstaked = s
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "showstaked"
                        }
                    }, [e._v(" Show staked ")])])]), a("ul", [a("li", [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.share,
                            expression: "share"
                        }],
                        style: e.shareStyles,
                        attrs: {
                            type: "text",
                            id: "liquidity-share",
                            name: "liquidity-share"
                        },
                        domProps: {
                            value: e.share
                        },
                        on: {
                            input: [function(t) {
                                t.target.composing || (e.share = t.target.value)
                            }, e.handle_change_share],
                            focus: e.handle_change_share
                        }
                    })])])]), a("fieldset", {
                        staticClass: "currencies"
                    }, [a("legend", [e._v("Currencies:")]), a("ul", [e._l(Object.keys(e.currencies), (function(t, n) {
                        var s;
                        return a("li", [a("label", {
                            staticClass: "currency_label",
                            attrs: {
                                for: "currency_" + e.getI(n)
                            }
                        }, [a("img", {
                            class: (s = {
                                "token-icon": !0
                            }, s[t + "-icon"] = !0, s["y"] = e.withdrawc, s[e.currentPool] = !0, s),
                            attrs: {
                                src: e.getTokenIcon(t)
                            }
                        }), a("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.withdrawc,
                                expression: "withdrawc"
                            }]
                        }, [e._v(e._s(e.currencies[t]) + " "), a("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !("usdt" == t && "usdt" == e.currentPool) && !["susdv2", "ren", "sbtc", "hbtc", "3pool"].includes(e.currentPool) && !e.is_meta,
                                expression: "!(currency == 'usdt' && currentPool == 'usdt') && !['susdv2', 'ren', 'sbtc', 'hbtc', '3pool'].includes(currentPool) && !is_meta"
                            }]
                        }, [e._v("(in " + e._s(e._f("capitalize")(t)) + ")")])]), a("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.withdrawc && !["susdv2", "tbtc", "ren", "sbtc", "hbtc", "3pool"].includes(e.currentPool),
                                expression: "!withdrawc && !['susdv2', 'tbtc', 'ren', 'sbtc', 'hbtc', '3pool'].includes(currentPool)"
                            }]
                        }, [e._v(e._s(e._f("capitalize")(t)))]), a("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.withdrawc && ["susdv2", "tbtc", "ren", "sbtc", "hbtc", "3pool"].includes(e.currentPool),
                                expression: "!withdrawc && ['susdv2', 'tbtc', 'ren', 'sbtc', 'hbtc', '3pool'].includes(currentPool)"
                            }]
                        }, [e._v(e._s(e.currencies[t]))])]), a("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.inputs[e.getI(n)],
                                expression: "inputs[getI(i)]"
                            }],
                            ref: "inputs" + e.getI(n),
                            refInFor: !0,
                            style: e.inputStyles[e.getI(n)],
                            attrs: {
                                type: "text",
                                id: "currency_" + e.getI(n),
                                name: "from_cur",
                                disabled: "susd" == e.currentPool
                            },
                            domProps: {
                                value: e.inputs[e.getI(n)]
                            },
                            on: {
                                input: [function(t) {
                                    t.target.composing || e.$set(e.inputs, e.getI(n), t.target.value)
                                }, function(t) {
                                    e.handle_change_amounts(e.getI(n))
                                }],
                                focus: function(t) {
                                    e.handle_change_amounts(e.getI(n))
                                }
                            }
                        })])
                    })), a("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !["susd", "susdv2", "ren", "sbtc", "hbtc", "3pool"].includes(e.currentPool),
                            expression: "!['susd','susdv2','ren', 'sbtc', 'hbtc', '3pool'].includes(currentPool)"
                        }]
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.withdrawc,
                            expression: "withdrawc"
                        }],
                        attrs: {
                            id: "withdrawc",
                            type: "checkbox",
                            name: "withdrawc"
                        },
                        domProps: {
                            checked: Array.isArray(e.withdrawc) ? e._i(e.withdrawc, null) > -1 : e.withdrawc
                        },
                        on: {
                            change: function(t) {
                                var a = e.withdrawc,
                                    n = t.target,
                                    s = !!n.checked;
                                if (Array.isArray(a)) {
                                    var r = null,
                                        i = e._i(a, r);
                                    n.checked ? i < 0 && (e.withdrawc = a.concat([r])) : i > -1 && (e.withdrawc = a.slice(0, i).concat(a.slice(i + 1)))
                                } else e.withdrawc = s
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "withdrawc"
                        }
                    }, [e._v("Withdraw wrapped")])])], 2)]), a("fieldset", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susd" != e.currentPool,
                            expression: "currentPool != 'susd'"
                        }]
                    }, [e._m(0), a("ul", [a("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !["susdv2", "ren", "sbtc", "hbtc", "3pool"].includes(e.currentPool),
                            expression: "!['susdv2','ren', 'sbtc', 'hbtc', '3pool'].includes(currentPool)"
                        }]
                    }, [a("input", {
                        attrs: {
                            type: "radio",
                            id: "to_cur_comb",
                            name: "to_cur"
                        },
                        domProps: {
                            value: 10,
                            checked: 10 === e.to_currency
                        },
                        on: {
                            click: function(t) {
                                return e.handleCheck(10)
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "to_cur_comb"
                        }
                    }, [e._v(" Combination of all coins "), e._l(Object.keys(e.currencies), (function(t, n) {
                        var s;
                        return a("span", [a("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: n > 0,
                                expression: "i > 0"
                            }]
                        }, [e._v("+")]), a("img", {
                            class: (s = {
                                "token-icon": !0
                            }, s[t + "-icon"] = !0, s["y"] = e.withdrawc, s[e.currentPool] = !0, s),
                            attrs: {
                                src: e.getTokenIcon(t)
                            }
                        })])
                    }))], 2)]), e._l(Object.keys(e.currencies), (function(t, n) {
                        var s;
                        return a("li", {
                            staticClass: "withdrawin"
                        }, [a("input", {
                            attrs: {
                                type: "radio",
                                id: "to_cur_" + n,
                                name: "to_cur"
                            },
                            domProps: {
                                value: n,
                                checked: e.to_currency === n
                            },
                            on: {
                                click: function(t) {
                                    return e.handleCheck(n)
                                }
                            }
                        }), a("label", {
                            attrs: {
                                for: "to_cur_" + n
                            }
                        }, [a("img", {
                            class: (s = {
                                "token-icon": !0
                            }, s[t + "-icon"] = !0, s["y"] = e.withdrawc, s[e.currentPool] = !0, s),
                            attrs: {
                                src: e.getTokenIcon(t)
                            }
                        }), a("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.withdrawc,
                                expression: "!withdrawc"
                            }]
                        }, [e._v(" " + e._s(e._f("capitalize")(t)) + " ")]), a("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.withdrawc,
                                expression: "withdrawc"
                            }]
                        }, [e._v(" " + e._s(e.currencies[t]) + " ")])])])
                    })), a("li", [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.donate_dust,
                            expression: "donate_dust"
                        }],
                        attrs: {
                            type: "checkbox",
                            id: "donate_dust",
                            name: "donate_dust"
                        },
                        domProps: {
                            checked: Array.isArray(e.donate_dust) ? e._i(e.donate_dust, null) > -1 : e.donate_dust
                        },
                        on: {
                            change: function(t) {
                                var a = e.donate_dust,
                                    n = t.target,
                                    s = !!n.checked;
                                if (Array.isArray(a)) {
                                    var r = null,
                                        i = e._i(a, r);
                                    n.checked ? i < 0 && (e.donate_dust = a.concat([r])) : i > -1 && (e.donate_dust = a.slice(0, i).concat(a.slice(i + 1)))
                                } else e.donate_dust = s
                            }
                        }
                    }), a("label", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !["tbtc", "ren", "sbtc", "hbtc", "3pool", "gusd", "husd", "usdk", "usdn", "linkusd", "musd", "rsv", "dusd"].includes(e.currentPool),
                            expression: "!['tbtc', 'ren', 'sbtc', 'hbtc', '3pool', 'gusd', 'husd', 'usdk', 'usdn', 'linkusd', 'musd', 'rsv', 'dusd'].includes(currentPool)"
                        }],
                        attrs: {
                            for: "donate_dust"
                        }
                    }, [e._v("Donate dust "), e._m(1)])])], 2)]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showWithdrawSlippage,
                            expression: "showWithdrawSlippage"
                        }],
                        attrs: {
                            id: "max_slippage"
                        }
                    }, [a("span", [e._v("Max slippage:")]), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.maxSlippage,
                            expression: "maxSlippage"
                        }],
                        attrs: {
                            id: "slippage02",
                            type: "radio",
                            name: "slippage",
                            value: "0.2"
                        },
                        domProps: {
                            checked: e._q(e.maxSlippage, "0.2")
                        },
                        on: {
                            change: function(t) {
                                e.maxSlippage = "0.2"
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "slippage02"
                        }
                    }, [e._v("0.2%")]), a("input", {
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
                            value: "3"
                        },
                        domProps: {
                            checked: e._q(e.maxSlippage, "3")
                        },
                        on: {
                            change: function(t) {
                                e.maxSlippage = "3"
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "slippage1"
                        }
                    }, [e._v("3%")]), a("input", {
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
                    }), a("label", {
                        attrs: {
                            for: "custom_slippage"
                        },
                        on: {
                            click: function(t) {
                                e.customSlippageDisabled = !1
                            }
                        }
                    }, [a("input", {
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
                    }), e._v(" % ")])]), a("gas-price"), a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showInfApprovalZap,
                            expression: "showInfApprovalZap"
                        }]
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.inf_approval,
                            expression: "inf_approval"
                        }],
                        attrs: {
                            id: "inf_approval",
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.inf_approval) ? e._i(e.inf_approval, null) > -1 : e.inf_approval
                        },
                        on: {
                            change: function(t) {
                                var a = e.inf_approval,
                                    n = t.target,
                                    s = !!n.checked;
                                if (Array.isArray(a)) {
                                    var r = null,
                                        i = e._i(a, r);
                                    n.checked ? i < 0 && (e.inf_approval = a.concat([r])) : i > -1 && (e.inf_approval = a.slice(0, i).concat(a.slice(i + 1)))
                                } else e.inf_approval = s
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "inf_approval"
                        }
                    }, [e._v("Infinite approval - trust zap contract forever")])]), a("fieldset", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["susdv2", "sbtc", "iearn", "y"].includes(e.currentPool) && (e.oldRewardsBalance > .1 || "sbtc" == e.currentPool && e.oldRewardsBalance > .001),
                            expression: "['susdv2', 'sbtc', 'iearn', 'y'].includes(currentPool) && (oldRewardsBalance > 0.1 || currentPool == 'sbtc' && oldRewardsBalance > 0.001)"
                        }],
                        staticClass: "info-message gentle-message"
                    }, [a("p", [e._v(" You have " + e._s(e.oldRewardsBalanceFormat) + " " + e._s(e.currentPool) + " LP tokens in old rewards contract. Please withdraw from old staking contract and stake again ")]), a("button", {
                        on: {
                            click: e.withdrawOldStaking
                        }
                    }, [e._v("Unstake from old contract")])]), a("div", {
                        staticClass: "buttons",
                        attrs: {
                            id: "withdraw_buttons"
                        }
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.nobalance,
                            expression: "nobalance"
                        }],
                        staticClass: "info-message gentle-message",
                        attrs: {
                            id: "amount-warning"
                        }
                    }, [e._v(" You don't have any available amount to withdraw ")]), a("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susd" != e.currentPool,
                            expression: "currentPool != 'susd'"
                        }],
                        attrs: {
                            id: "remove-liquidity",
                            disabled: ["susdv2", "sbtc"].includes(e.currentPool) && e.slippage < -.03 && !e.warninglow || 1 == e.show_nobalance || "linkusd" == e.currentPool && e.slippage < -.005
                        },
                        on: {
                            click: function(t) {
                                return e.check_handle_remove_liquidity()
                            }
                        }
                    }, [e._v(" Withdraw "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == e.loadingAction,
                            expression: "loadingAction == 1"
                        }],
                        staticClass: "loading line"
                    })]), a("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.staked_balance > 0 && e.hasGauge,
                            expression: "staked_balance > 0 && hasGauge"
                        }],
                        attrs: {
                            id: "remove-liquidity-unstake",
                            disabled: ["susdv2", "sbtc"].includes(e.currentPool) && e.slippage < -.03 && !e.warninglow || 1 == e.show_nobalance || "linkusd" == e.currentPool && e.slippage < -.005
                        },
                        on: {
                            click: function(t) {
                                return e.check_handle_remove_liquidity(!0, !1, !0)
                            }
                        }
                    }, [e._v(" Withdraw & claim "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 2 == e.loadingAction,
                            expression: "loadingAction == 2"
                        }],
                        staticClass: "loading line"
                    })]), a("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["susdv2", "sbtc", "y", "iearn"].includes(e.currentPool) && e.pendingSNXRewards > 0,
                            expression: "['susdv2', 'sbtc','y','iearn'].includes(currentPool) && pendingSNXRewards > 0"
                        }],
                        attrs: {
                            id: "claim-snx"
                        },
                        on: {
                            click: function(t) {
                                return e.claim_SNX(!1)
                            }
                        }
                    }, [e._v(" Claim " + e._s((e.pendingSNXRewards / 1e18).toFixed(2)) + " " + e._s(["y", "iearn"].includes(e.currentPool) ? "YFI" : "SNX") + " "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "sbtc" == e.currentPool,
                            expression: "currentPool == 'sbtc'"
                        }]
                    }, [e._v(" + " + e._s((e.pendingRENRewards / 1e18).toFixed(2)) + " REN")])]), a("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: +e.claimableSNXGauge > 0,
                            expression: "+claimableSNXGauge > 0"
                        }],
                        attrs: {
                            id: "claim-snx-gauge"
                        },
                        on: {
                            click: function(t) {
                                return e.claim_SNX_Gauge()
                            }
                        }
                    }, [e._v(" Claim " + e._s(e.claimableSNXGaugeFormat) + " " + e._s(e.rewardName) + " ")]), a("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["sbtc"].includes(e.currentPool) && e.pendingBALRewards > 0,
                            expression: "['sbtc'].includes(currentPool) && pendingBALRewards > 0"
                        }],
                        attrs: {
                            id: "claim-bpt"
                        },
                        on: {
                            click: function(t) {
                                return e.claim_SNX(!0)
                            }
                        }
                    }, [e._v(" Claim " + e._s((e.pendingBALRewards / 1e18).toFixed(6)) + " BPT ")]), a("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.claimableCRV > 0,
                            expression: "claimableCRV > 0"
                        }],
                        attrs: {
                            id: "claim-CRV"
                        },
                        on: {
                            click: function(t) {
                                return e.claim_CRV()
                            }
                        }
                    }, [e._v(" Claim " + e._s((e.claimableCRV / 1e18).toFixed(2)) + " CRV ")]), a("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["sbtc"].includes(e.currentPool) && e.withdrawBALPool > 0,
                            expression: "['sbtc'].includes(currentPool) && withdrawBALPool > 0"
                        }],
                        attrs: {
                            id: "claim-snxbpt"
                        },
                        on: {
                            click: function(t) {
                                return e.claim_SNX(!0, !1)
                            }
                        }
                    }, [e._v(" Withdraw " + e._s((e.withdrawSNXPool / 1e18).toFixed(0)) + " SNX + " + e._s((e.withdrawRENPool / 1e18).toFixed(0)) + " REN ")]), a("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.staked_balance > 0,
                            expression: "staked_balance > 0"
                        }],
                        attrs: {
                            id: "unstake-snx"
                        },
                        on: {
                            click: function(t) {
                                return e.handle_remove_liquidity(!0, !0)
                            }
                        }
                    }, [e._v(" Unstake from gauge ")]), a("router-link", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["susdv2"].includes(e.currentPool) && e.oldBalance > 0,
                            expression: "['susdv2'].includes(currentPool) && oldBalance > 0"
                        }],
                        staticClass: "button",
                        attrs: {
                            to: "/susd/withdraw",
                            id: "withdrawold"
                        }
                    }, [e._v("Withdraw old")]), a("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "usdt" == e.currentPool,
                            expression: "currentPool == 'usdt'"
                        }],
                        on: {
                            click: e.migrateUSDT
                        }
                    }, [e._v("Migrate to PAX")]), a("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "susd" == e.currentPool,
                            expression: "currentPool == 'susd'"
                        }],
                        attrs: {
                            id: "remove-liquidity"
                        },
                        on: {
                            click: e.handle_remove_liquidity
                        }
                    }, [e._v("Withdraw old")]), a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["ren", "sbtc"].includes(e.currentPool),
                            expression: "['ren', 'sbtc'].includes(currentPool)"
                        }]
                    }, [a("a", {
                        attrs: {
                            href: "https://bridge.renproject.io/"
                        }
                    }, [e._v(" Mint/redeem renBTC ")])]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["susdv2", "sbtc"].includes(e.currentPool),
                            expression: "['susdv2', 'sbtc'].includes(currentPool)"
                        }],
                        attrs: {
                            id: "mintr"
                        }
                    }, [a("a", {
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
                    }, [e._v("Manage staking in Mintr")]), a("a", {
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
                    }, [e._v(" yGov. ")])]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.show_loading,
                            expression: "show_loading"
                        }],
                        staticClass: "info-message gentle-message"
                    }, [a("span", {
                        domProps: {
                            innerHTML: e._s(e.waitingMessage)
                        }
                    }), e._v(" "), a("span", {
                        staticClass: "loading line"
                    })]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.estimateGas,
                            expression: "estimateGas"
                        }],
                        staticClass: "info-message gentle-message"
                    }, [e._v(" Estimated tx cost: " + e._s((e.estimateGas * e.gasPrice / 1e9 * e.ethPrice).toFixed(2)) + "$ ")]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.warninglow,
                            expression: "warninglow"
                        }],
                        staticClass: "simple-error"
                    }, [e._v(" You're withdrawing too little amount in one coin ")]), a("Slippage", e._b({}, "Slippage", {
                        show_nobalance: e.show_nobalance,
                        show_nobalance_i: e.show_nobalance_i
                    }, !1))], 1), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.staked_balance > 0,
                            expression: "staked_balance > 0"
                        }]
                    }, [a("button", {
                        staticClass: "simplebutton advancedoptions",
                        on: {
                            click: function(t) {
                                e.showadvancedoptions = !e.showadvancedoptions
                            }
                        }
                    }, [e._v(" Advanced unstaking options "), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.showadvancedoptions,
                            expression: "!showadvancedoptions"
                        }]
                    }, [e._v("▼")]), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showadvancedoptions,
                            expression: "showadvancedoptions"
                        }]
                    }, [e._v("▲")])]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showadvancedoptions,
                            expression: "showadvancedoptions"
                        }]
                    }, [a("fieldset", [a("legend", [e._v("Advanced unstaking options:")]), a("div", [a("div", {
                        attrs: {
                            id: "stakedbalance"
                        }
                    }, [e._v(" Staked tokens: "), a("span", {
                        on: {
                            click: function(t) {
                                e.unstakepercentage = e.staked_balance / 1e18
                            }
                        }
                    }, [e._v(e._s((e.staked_balance / 1e18).toFixed(2)))])]), a("div", [a("label", {
                        attrs: {
                            for: "unstakepercentage"
                        }
                    }, [e._v("Unstake:")]), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.unstakepercentage,
                            expression: "unstakepercentage"
                        }],
                        class: {
                            invalid: e.unstakePercentageInvalid
                        },
                        attrs: {
                            id: "unstakepercentage"
                        },
                        domProps: {
                            value: e.unstakepercentage
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.unstakepercentage = t.target.value)
                            }
                        }
                    }), a("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.staked_balance > 0,
                            expression: "staked_balance > 0"
                        }],
                        attrs: {
                            id: "unstakestaked",
                            disabled: e.unstakePercentageInvalid
                        },
                        on: {
                            click: function(t) {
                                return e.unstakeStaked()
                            }
                        }
                    }, [e._v(" Unstake staked ")])])])])])])], 1)
                },
                s = [function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("legend", [e._v(" Withdraw % in: "), a("span", {
                        staticClass: "tooltip"
                    }, [e._v(" [?] "), a("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" You can also withdraw in one coin by typing in a currency field ")])])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?]"), a("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("(may use less gas)")])])
                }],
                r = (a("99af"), a("cb29"), a("4de4"), a("c740"), a("4160"), a("a630"), a("caad"), a("d81d"), a("fb6a"), a("a9e3"), a("b680"), a("b64b"), a("d3b7"), a("25f0"), a("2532"), a("3ca3"), a("159b"), a("ddb0"), a("2909")),
                i = a("5530"),
                c = (a("96cf"), a("1da1")),
                o = a("2b0e"),
                l = a("d99e"),
                u = a("cf45"),
                d = a("51bf"),
                p = a("5245"),
                h = a("2fa3"),
                m = a("0a37"),
                f = a("e7e9"),
                g = a("0c7c"),
                w = a("901e"),
                _ = a.n(w),
                v = a("0c33"),
                b = (p["g"].compound, {
                    components: {
                        Slippage: v["a"],
                        GasPrice: f["a"]
                    },
                    data: function() {
                        return {
                            share: "100.00",
                            shareStyles: {
                                backgroundColor: "#707070",
                                color: "#d0d0d0"
                            },
                            inputs: [],
                            inputStyles: [],
                            wallet_balances: [],
                            calc_balances: [],
                            balances: [],
                            meta_balances: [],
                            staked_balance: null,
                            token_balance: null,
                            token_supply: 0,
                            show_nobalance: !1,
                            show_nobalance_i: 0,
                            bgColor: [],
                            amounts: [],
                            to_currency: 10,
                            test: null,
                            withdrawc: !1,
                            donate_dust: !0,
                            showstaked: !1,
                            pendingSNXRewards: 0,
                            pendingRENRewards: 0,
                            pendingBALRewards: 0,
                            balancerPool: null,
                            withdrawBALPool: 0,
                            withdrawSNXPool: 0,
                            withdrawRENPool: 0,
                            withdrawADAI: 0,
                            oldRewardsBalance: null,
                            show_loading: !1,
                            waitingMessage: "",
                            showWithdrawSlippage: !1,
                            maxSlippage: .2,
                            setSlippage: !1,
                            maxInputSlippage: "",
                            customSlippageDisabled: !0,
                            estimateGas: 0,
                            ethPrice: 0,
                            unstakepercentage: 0,
                            get showadvancedoptions() {
                                return "true" === localStorage.getItem("advancedoptions")
                            },
                            set showadvancedoptions(e) {
                                localStorage.setItem("advancedoptions", e)
                            },
                            loadingAction: !1,
                            warninglow: !1,
                            showModal: !1,
                            slippagePromise: h["n"](Promise.resolve()),
                            inf_approval: !0,
                            claimableCRV: 0,
                            claimableSNX: 0,
                            claimedSNX: 0,
                            minter: null,
                            showSlippageModal: !1,
                            confirmSlippage: !1,
                            pendingUnstake: !1,
                            pendingUnstakeOnly: !1,
                            pendingExit: !1
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(c["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.$watch((function() {
                                            return d["f"].default_account
                                        }), (function(t, a) {
                                            t && a && t.toLowerCase() != a.toLowerCase() && t && e.mounted()
                                        })), e.$watch((function() {
                                            return d["f"].initializedContracts
                                        }), (function(t) {
                                            t && e.mounted()
                                        })), e.$watch((function() {
                                            return d["f"].currentContract
                                        }), (function(t, a) {
                                            e.setInputStyles(!1, t, a), d["f"].initializedContracts && e.mounted()
                                        }));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    watch: {
                        to_currency: function(e) {
                            0 != this.share && "---" != this.share || (this.share = 100), this.setInputStyles(), null !== e && this.handle_change_share()
                        },
                        withdrawc: function(e) {
                            "---" != this.share && (e || null !== this.to_currency || (this.to_currency = 10), e && null !== this.to_currency && (this.to_currency = null))
                        },
                        maxSlippage: function() {
                            this.setSlippage = !0
                        },
                        maxInputSlippage: function(e) {
                            e && (this.setSlippage = !0)
                        }
                    },
                    computed: Object(i["a"])({}, d["h"], {
                        currencies: function() {
                            return p["g"][d["f"].currentContract].is_meta ? this.withdrawc ? d["h"].currencies() : d["h"].meta_currencies() : d["h"].currencies()
                        },
                        showMigrateNew: function() {
                            return "compound" == this.currentPool && this.oldBalance > 0 || "susd" == this.currentPool
                        },
                        nobalance: function() {
                            return this.staked_balance && this.token_balance.plus(this.staked_balance).eq(_()(0))
                        },
                        getMaxSlippage: function() {
                            var e = +this.maxSlippage;
                            return this.maxInputSlippage && (e = +this.maxInputSlippage), (100 + e) / 100
                        },
                        minAmount: function() {
                            return ["tbtc", "ren", "sbtc", "hbtc"].includes(d["f"].currentContract) ? 1e-8 : .01
                        },
                        calcFee: function() {
                            var e = p["g"][d["f"].currentContract].N_COINS;
                            return this.fee / 100 * e / (4 * (e - 1))
                        },
                        gasPrice: function() {
                            return m["a"].gasPrice
                        },
                        gasPriceWei: function() {
                            return m["a"].gasPriceWei
                        },
                        unstakePercentageInvalid: function() {
                            return _()(this.unstakepercentage).times(1e18).gt(_()(this.staked_balance).times(1.01))
                        },
                        unstakeAmount: function() {
                            return this.toFixed(_()(this.unstakepercentage / 100).times(this.staked_balance / 1e18))
                        },
                        showInfApprovalZap: function() {
                            return !this.withdrawc && "susdv2" != this.currentPool || ("---" != this.share && (null !== this.to_currency && this.to_currency < 10 || 10 == this.to_currency) || void 0)
                        },
                        claimableSNXGauge: function() {
                            return +this.claimableSNX - +this.claimedSNX
                        },
                        claimableSNXGaugeFormat: function() {
                            return this.toFixed(this.claimableSNXGauge / 1e18)
                        },
                        oldRewardsBalanceFormat: function() {
                            return this.oldRewardsBalance && this.toFixed(this.oldRewardsBalance / 1e18)
                        },
                        realInputs: function() {
                            return this.is_meta && !this.withdrawc ? this.inputs.filter((function(e, t) {
                                return 1 != t
                            })) : this.is_meta && this.withdrawc ? this.inputs.filter((function(e, t) {
                                return t < 2
                            })) : this.inputs
                        },
                        realAmounts: function() {
                            return this.is_meta && !this.withdrawc ? this.amounts.filter((function(e, t) {
                                return 1 != t
                            })) : this.is_meta && this.withdrawc ? this.amounts.filter((function(e, t) {
                                return t < 2
                            })) : this.amounts
                        },
                        rewardName: function() {
                            return "susdv2" == this.currentPool ? "SNX" : "sbtc" == this.currentPool ? "BPT" : "musd" == this.currentPool ? "MTA" : "tbtc" == this.currentPool ? "KEEP" : "rsv" == this.currentPool ? "RSR" : "dusd" == this.currentPool ? "DFD" : void 0
                        }
                    }),
                    mounted: function() {
                        var e = this;
                        this.showstaked = !!this.hasGauge, this.$watch((function() {
                            return e.showstaked
                        }), this.handle_change_share), "susd" == d["f"].currentContract && (this.withdrawc = !0, this.showstaked = !1), this.setInputStyles(!0), d["f"].initializedContracts && this.mounted()
                    },
                    methods: {
                        mounted: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, s, r, i, c, o, l;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (["susdv2", "ren", "sbtc", "hbtc", "3pool"].includes(e.currentPool) ? (e.withdrawc = !0, e.to_currency = null) : e.withdrawc = !1, d["f"].showSlippage = !1, d["f"].slippage = 0, a = d["f"].curveRewards, void 0 === d["f"].deposit_zap) {
                                                t.next = 11;
                                                break
                                            }
                                            return t.t0 = _.a, t.next = 8, d["f"].swap_token.methods.allowance(d["f"].default_account || "0x0000000000000000000000000000000000000000", d["f"].deposit_zap._address).call();
                                        case 8:
                                            t.t1 = t.sent, n = (0, t.t0)(t.t1), n.lte(d["f"].max_allowance.div(_()(2))) && (e.inf_approval = !1);
                                        case 11:
                                            return s = [
                                                [d["f"].gaugeContract._address, d["f"].gaugeContract.methods.claimable_tokens(d["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]
                                            ], ["susdv2", "sbtc", "musd", "tbtc", "rsv", "dusd"].includes(e.currentPool) && s.push.apply(s, [
                                                [d["f"].gaugeContract._address, d["f"].gaugeContract.methods.claimable_reward(d["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()],
                                                [d["f"].gaugeContract._address, d["f"].gaugeContract.methods.claimed_rewards_for(d["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]
                                            ]), t.next = 15, d["f"].multicall.methods.aggregate(s).call();
                                        case 15:
                                            if (r = t.sent, i = r[1].map((function(e) {
                                                    return d["f"].web3.eth.abi.decodeParameter("uint256", e)
                                                })), e.claimableCRV = i[0], !["susdv2", "sbtc", "iearn", "y"].includes(e.currentPool)) {
                                                t.next = 22;
                                                break
                                            }
                                            return t.next = 21, d["f"].curveRewards.methods.balanceOf(d["f"].default_account || "0x0000000000000000000000000000000000000000").call();
                                        case 21:
                                            e.oldRewardsBalance = +t.sent;
                                        case 22:
                                            if (["susdv2", "sbtc", "musd", "tbtc", "rsv", "dusd"].includes(e.currentPool) && (e.claimableSNX = i[1], e.claimedSNX = i[2]), !["susdv2", "y", "iearn"].includes(e.currentPool)) {
                                                t.next = 27;
                                                break
                                            }
                                            return t.next = 26, a.methods.earned(e.default_account).call();
                                        case 26:
                                            e.pendingSNXRewards = t.sent;
                                        case 27:
                                            if (!["sbtc"].includes(e.currentPool)) {
                                                t.next = 41;
                                                break
                                            }
                                            return e.balancerPool = new d["f"].web3.eth.Contract(p["d"], p["e"]), window.balancerPool = e.balancerPool, c = [
                                                [a._address, a.methods.earned(e.default_account).encodeABI()],
                                                [e.balancerPool._address, e.balancerPool.methods.totalSupply().encodeABI()],
                                                [e.balancerPool._address, e.balancerPool.methods.getBalance("0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f").encodeABI()],
                                                [e.balancerPool._address, e.balancerPool.methods.getBalance("0x408e41876cccdc0f92210600ef50372656052a38").encodeABI()],
                                                [e.balancerPool._address, e.balancerPool.methods.balanceOf(d["f"].default_account).encodeABI()]
                                            ], t.next = 33, d["f"].multicall.methods.aggregate(c).call();
                                        case 33:
                                            o = t.sent, l = o[1].map((function(e) {
                                                return d["f"].web3.eth.abi.decodeParameter("uint256", e)
                                            })), e.pendingBALRewards = l[0], e.pendingSNXRewards = l[0] * l[2] / l[1], e.pendingRENRewards = l[0] * l[3] / l[1], e.withdrawBALPool = l[4], e.withdrawSNXPool = l[4] * l[2] / l[1], e.withdrawRENPool = l[4] * l[3] / l[1];
                                        case 41:
                                            if (!["y", "iearn"].includes(e.currentPool)) {
                                                t.next = 45;
                                                break
                                            }
                                            return t.next = 44, d["f"].aRewards.methods.claimable(d["f"].default_account).call();
                                        case 44:
                                            e.withdrawADAI = t.sent;
                                        case 45:
                                            return t.next = 47, u["update_fee_info"]();
                                        case 47:
                                            return t.next = 49, e.update_balances();
                                        case 49:
                                            e.setCalcBalances(), e.handle_change_share();
                                        case 51:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        getTokenIcon: function(e) {
                            return h["j"](e, this.withdrawc, this.currentPool)
                        },
                        toFixed: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if ("" == e || void 0 == e || 0 == +e) return "0.00";
                            2 == t && ["tbtc", "ren", "sbtc", "hbtc"].includes(d["f"].currentContract) && (t = 8);
                            var a = e.toFixed(t);
                            return isNaN(a) ? "0.00" : a
                        },
                        inputsFormat: function(e) {
                            return this.inputs[e] ? this.toFixed(+this.inputs[e]) : "0.00"
                        },
                        setInputStyles: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                a = arguments.length > 2 ? arguments[2] : void 0,
                                n = Object.keys(this.currencies).length;
                            if (p["g"][d["f"].currentContract].is_meta && (n = 5), a) {
                                for (var s = 0; s < p["g"][t].N_COINS - p["g"][a].N_COINS; s++) this.inputs.push("0.00");
                                p["g"][a].N_COINS - p["g"][t].N_COINS > 0 && (this.inputs = this.inputs.filter((function(e, a) {
                                    return a < p["g"][t].N_COINS
                                })))
                            } else e && (this.inputs = new Array(n).fill("0.00"));
                            this.inputStyles = Array(n).fill({
                                backgroundColor: "#707070",
                                color: "#d0d0d0"
                            })
                        },
                        calcSlippage: function() {
                            var e = arguments,
                                t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function a() {
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return t.slippagePromise.cancel(), t.slippagePromise = h["n"](u["calc_slippage"].apply(u, Object(r["a"])(e))), a.next = 4, t.slippagePromise;
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        },
                        handleCheck: function(e) {
                            e === this.to_currency ? (0 == this.withdrawc && (this.withdrawc = !0), this.to_currency = null, d["f"].slippage = 0, d["f"].showSlippage = !1) : this.to_currency = e
                        },
                        setCalcBalances: function() {
                            var e = d["f"].N_COINS;
                            this.is_meta && (e = p["g"][this.currentPool].meta_N);
                            for (var t = 0; t < e; t++) {
                                var a = this.showstaked ? this.token_balance.plus(this.staked_balance) : this.token_balance,
                                    n = _()(1 * this.balances[t] * d["f"].c_rates[t] * a / this.token_supply);
                                o["a"].set(this.calc_balances, t, n)
                            }
                        },
                        update_balances: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, s, i, c, l, u;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (a = [], n = d["f"].underlying_coins, e.is_meta && (n = d["f"].all_coins), d["f"].default_account) {
                                                for (s = 0; s < n.length; s++) a.push([n[s]._address, n[s].methods.balanceOf(d["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]);
                                                a.push([d["f"].swap_token._address, d["f"].swap_token.methods.balanceOf(d["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()])
                                            } else e.token_balance = _()(0);
                                            for (i = 0; i < d["f"].N_COINS; i++) a.push([d["f"].swap._address, d["f"].swap.methods.balances(i).encodeABI()]);
                                            return e.is_meta && a.push.apply(a, Object(r["a"])(Array.from(Array(3), (function(e, t) {
                                                return [d["f"].base_swap._address, d["f"].base_swap.methods.balances(t).encodeABI()]
                                            })))), a.push([d["f"].gaugeContract._address, d["f"].gaugeContract.methods.balanceOf(d["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]), a.push([d["f"].swap_token._address, d["f"].swap_token.methods.totalSupply().encodeABI()]), t.next = 10, d["f"].multicall.methods.aggregate(a).call();
                                        case 10:
                                            c = t.sent, l = c[1].map((function(e) {
                                                return d["f"].web3.eth.abi.decodeParameter("uint256", e)
                                            })), e.token_supply = +l[l.length - 1], u = p["g"][e.currentPool].coin_precisions, e.is_meta && (u = p["g"][e.currentPool].meta_precisions), d["f"].default_account && (l.slice(0, n.length).map((function(t, a) {
                                                o["a"].set(e.wallet_balances, a, +t / u[a])
                                            })), e.token_balance = _()(l[n.length]), l = l.slice(n.length + 1)), l.slice(0, n.length + 1 + n.length).map((function(t, a) {
                                                o["a"].set(e.meta_balances, a, +t), e.is_meta && a > 1 && (t *= 1e18 * e.bal_info[1] / e.base_supply), o["a"].set(e.balances, a, +t), d["f"].default_account || o["a"].set(e.balances, a, 0)
                                            })), e.staked_balance = _()(l[l.length - 2]), e.unstakepercentage = e.toFixed(e.staked_balance.div(1e18));
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        handle_change_amounts: function(e, t) {
                            var a = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function n() {
                                var s, i, c, o, l, u, h, m, f, g;
                                return regeneratorRuntime.wrap((function(n) {
                                    while (1) switch (n.prev = n.next) {
                                        case 0:
                                            if (a.showWithdrawSlippage = !0, a.show_nobalance = !1, !t) {
                                                n.next = 5;
                                                break
                                            }
                                            return a.inputs[e] = t.target.value, n.abrupt("return");
                                        case 5:
                                            if ("susd" != a.currentPool) {
                                                n.next = 7;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 7:
                                            return a.to_currency = null, s = a.inputs.map((function(e, t) {
                                                return e / d["f"].c_rates[t]
                                            })), s = s.map((function(e) {
                                                return _()(Math.floor(e).toString()).toFixed(0)
                                            })), a.show_nobalance = !1, a.show_nobalance_i = 0, i = Object(r["a"])(Array(d["f"].N_COINS).keys()).map((function(e) {
                                                return [d["f"].swap._address, d["f"].swap.methods.balances(e).encodeABI()]
                                            })), a.is_meta && i.push.apply(i, Object(r["a"])(Array.from(Array(3), (function(e, t) {
                                                return [d["f"].base_swap._address, d["f"].base_swap.methods.balances(t).encodeABI()]
                                            })))), c = d["f"].swap._address, o = d["f"].swap.methods.calc_token_amount, a.is_meta && !a.withdrawc && (c = d["f"].deposit_zap._address, o = d["f"].deposit_zap.methods.calc_token_amount, s = s.filter((function(e, t) {
                                                return 1 != t
                                            }))), a.is_meta && a.withdrawc && (s = s.slice(0, 2)), i.push([c, o(s, !1).encodeABI()]), i.push([d["f"].swap_token._address, d["f"].swap_token.methods.balanceOf(d["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]), n.prev = 20, n.next = 23, d["f"].multicall.methods.aggregate(i).call();
                                        case 23:
                                            l = n.sent, u = l[1].map((function(e) {
                                                return d["f"].web3.eth.abi.decodeParameter("uint256", e)
                                            })), h = d["f"].N_COINS, a.is_meta && (h = p["g"][a.currentPool].meta_N), u.slice(0, h).forEach((function(e, t) {
                                                a.is_meta && t > 1 && (e *= 1e18 * a.bal_info[1] / a.base_supply);
                                                var n = +e * d["f"].c_rates[t];
                                                n < a.inputs[t] ? (a.show_nobalance |= !0, a.show_nobalance_i = t) : a.show_nobalance |= !1
                                            })), m = _()(u[u.length - 2]), m = m.div(_()(1 - d["f"].fee * d["f"].N_COINS / (4 * (d["f"].N_COINS - 1)))), f = _()(u[u.length - 1]), m.gt(f.plus(_()(a.staked_balance))) ? a.setAllInputBackground("red") : a.setAllInputBackground("blue"), a.calcSlippage(a.realInputs, !1), a.share = "---", a.shareStyles = {
                                                backgroundColor: "#707070",
                                                color: "#d0d0d0"
                                            }, n.next = 46;
                                            break;
                                        case 37:
                                            n.prev = 37, n.t0 = n["catch"](20), console.error(n.t0), console.error("ERROR IN HANDLE CHANGE AMOUNTS"), a.show_nobalance = !0, g = p["g"][d["f"].currentContract].coin_precisions, a.is_meta && (g = p["g"][d["f"].currentContract].meta_precisions), a.show_nobalance_i = a.meta_balances.findIndex((function(e, t) {
                                                return a.is_meta && t > 1 && (e *= 1e18 * a.bal_info[1] / a.base_supply), +a.inputs[t] > +e / g[t]
                                            })), a.setAllInputBackground("red");
                                        case 46:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [20, 37]
                                ])
                            })))()
                        },
                        getMinAmounts: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, s, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, u["update_fee_info"]();
                                        case 2:
                                            for (a = [], n = d["f"].N_COINS, s = p["g"][d["f"].currentContract].coin_precisions, e.is_meta && (n = p["g"][d["f"].currentContract].meta_N, s = p["g"][d["f"].currentContract].meta_precisions), r = 0; r < n; r++) a[r] = _()(.98).times(e.share / 100).times(_()(e.balances[r])), e.withdrawc || (a[r] = a[r].times(s[r]).times(d["f"].c_rates[r])), a[r] = a[r].times(_()(e.token_balance)).div(_()(e.token_supply)).toFixed(0, 1);
                                            return e.is_meta && !e.withdrawc && (a = a.filter((function(e, t) {
                                                return 1 != t
                                            }))), e.is_meta && e.withdrawc && (a = a.slice(0, 2)), t.abrupt("return", a);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        claim_SNX: function() {
                            var e = arguments,
                                t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function a() {
                                var n, s, r, i, c, o, u;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return n = e.length > 0 && void 0 !== e[0] && e[0], s = !(e.length > 1 && void 0 !== e[1]) || e[1], t.show_loading = !0, t.waitingMessage = "Please confirm claiming ".concat((t.pendingSNXRewards / 1e18).toFixed(2), " \n                    ").concat(["y", "iearn"].includes(t.currentPool) ? "YFI" : "SNX"), "sbtc" == t.currentPool && (t.waitingMessage += " and ".concat((t.pendingRENRewards / 1e18).toFixed(2), " REN")), "sbtc" != t.currentPool || n && s || (t.waitingMessage = "Please confirm claiming ".concat((t.withdrawSNXPool / 1e18).toFixed(2), "SNX \n                        and ").concat((t.withdrawRENPool / 1e18).toFixed(2), " REN")), r = Object(l["d"])(t.waitingMessage), i = r.dismiss, a.next = 9, Promise.all([h["i"]()]);
                                        case 9:
                                            return c = a.sent, t.ethPrice = c[0], t.estimateGas = 2e5, a.next = 14, d["f"].curveRewards.methods.earned(d["f"].default_account).call();
                                        case 14:
                                            if (o = a.sent, !(o > 0 && s)) {
                                                a.next = 18;
                                                break
                                            }
                                            return a.next = 18, new Promise((function(e, a) {
                                                d["f"].curveRewards.methods.getReward().send({
                                                    from: d["f"].default_account,
                                                    gasPrice: t.gasPriceWei,
                                                    gas: 4e5
                                                }).once("transactionHash", (function(e) {
                                                    i(), Object(l["c"])(e)
                                                })).on("receipt", (function() {
                                                    t.pendingSNXRewards = 0, e()
                                                })).catch((function(e) {
                                                    g["a"](e), i(), a(e)
                                                }))
                                            }));
                                        case 18:
                                            if ("sbtc" != t.currentPool || n && s) {
                                                a.next = 34;
                                                break
                                            }
                                            return t.estimateGas = 3e5, a.prev = 20, a.t0 = _.a, a.next = 24, t.balancerPool.methods.balanceOf(d["f"].default_account).call();
                                        case 24:
                                            return a.t1 = a.sent, u = (0, a.t0)(a.t1), a.next = 28, t.balancerPool.methods.exitPool(u.toFixed(0, 1), ["0", "0"]).send({
                                                from: d["f"].default_account,
                                                gasPrice: t.gasPriceWei,
                                                gas: 6e5
                                            }).once("transactionHash", (function(e) {
                                                i(), Object(l["c"])(e)
                                            }));
                                        case 28:
                                            a.next = 34;
                                            break;
                                        case 30:
                                            a.prev = 30, a.t2 = a["catch"](20), i(), g["a"](a.t2);
                                        case 34:
                                            t.show_loading = !1;
                                        case 35:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [20, 30]
                                ])
                            })))()
                        },
                        claim_SNX_Gauge: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, s;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, h["i"]();
                                        case 2:
                                            return e.ethPrice = t.sent, t.next = 5, d["f"].gaugeContract.methods.claim_rewards(d["f"].default_account).estimateGas();
                                        case 5:
                                            return a = t.sent, e.estimateGas = a, n = Object(l["d"])("Please confirm claiming ".concat("susdv2" == e.currentPool ? "SNX" : "BPT")), s = n.dismiss, t.next = 10, d["f"].gaugeContract.methods.claim_rewards(d["f"].default_account).send({
                                                from: d["f"].default_account,
                                                gasPrice: e.gasPriceWei,
                                                gas: 1.5 * a | 0
                                            }).once("transactionHash", (function(e) {
                                                s(), Object(l["c"])(e)
                                            }));
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        claim_CRV: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, s;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, h["i"]();
                                        case 2:
                                            return e.ethPrice = t.sent, t.next = 5, d["f"].minter.methods.mint(d["f"].gaugeContract._address).estimateGas();
                                        case 5:
                                            return a = t.sent, e.estimateGas = a, n = Object(l["d"])("Please confirm claiming CRV from ".concat(d["f"].currentContract, " gauge")), s = n.dismiss, t.next = 10, d["f"].minter.methods.mint(d["f"].gaugeContract._address).send({
                                                from: d["f"].default_account,
                                                gasPrice: e.gasPriceWei,
                                                gas: 1.5 * a | 0
                                            }).once("transactionHash", (function(e) {
                                                s(), Object(l["c"])(e)
                                            }));
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        unstakeStaked: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var a;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            a = _()(e.unstakepercentage).times(1e18), e.unstake(a, !1, !0);
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        unstake: function(e) {
                            var t = arguments,
                                a = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function n() {
                                var s, r, i, c, o;
                                return regeneratorRuntime.wrap((function(n) {
                                    while (1) switch (n.prev = n.next) {
                                        case 0:
                                            return s = t.length > 1 && void 0 !== t[1] && t[1], r = t.length > 2 && void 0 !== t[2] && t[2], a.waitingMessage = r ? "\n                        Please confirm unstaking ".concat(a.toFixed(e.div(_()(1e18))), " tokens\n                    ") : "\n                    Unstaking ".concat(a.toFixed(e.div(_()(1e18))), " tokens for withdrawal.\n                    <br>\n                    A bit more tokens are needed to unstake to ensure that withdrawal is successful.\n                    You'll see them in your unstaked balance afterwards.\n                        \n                "), i = Object(l["d"])(a.waitingMessage), c = i.dismiss, n.t0 = _.a, n.next = 7, d["f"].gaugeContract.methods.balanceOf(d["f"].default_account).call();
                                        case 7:
                                            return n.t1 = n.sent, o = (0, n.t0)(n.t1), o.lt(e) && (e = o), n.prev = 10, n.next = 13, new Promise((function(t, n) {
                                                d["f"].gaugeContract.methods.withdraw(e.toFixed(0, 1)).send({
                                                    from: d["f"].default_account,
                                                    gasPrice: a.gasPriceWei,
                                                    gas: 1e6
                                                }).once("transactionHash", (function(e) {
                                                    a.waitingMessage = "Waiting for unstake transaction to confirm", c(), Object(l["c"])(e), t()
                                                })).on("receipt", (function(t) {
                                                    a.staked_balance = a.staked_balance.minus(e), d["f"].curveStakedBalance -= e, u["update_fee_info"]()
                                                })).catch((function(e) {
                                                    c(), n(e)
                                                }))
                                            }));
                                        case 13:
                                            s && a.claim_CRV(), n.next = 22;
                                            break;
                                        case 16:
                                            throw n.prev = 16, n.t2 = n["catch"](10), g["a"](n.t2), a.waitingMessage = "", a.show_loading = !1, n.t2;
                                        case 22:
                                            a.waitingMessage = "", a.show_loading = !1;
                                        case 24:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [10, 16]
                                ])
                            })))()
                        },
                        setLoadingAction: function(e) {
                            var t = this;
                            this.loadingAction = e, setTimeout((function() {
                                return t.loadingAction = !1
                            }), 500)
                        },
                        cancelWithdrawSlippage: function() {
                            this.showSlippageModal = !1, this.confirmSlippage = !1, this.pendingUnstake = !1, this.pendingUnstakeOnly = !1, this.pendingExit = !1
                        },
                        check_handle_remove_liquidity: function() {
                            var e = arguments,
                                t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function a() {
                                var n, s, r;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            if (n = e.length > 0 && void 0 !== e[0] && e[0], s = e.length > 1 && void 0 !== e[1] && e[1], r = e.length > 2 && void 0 !== e[2] && e[2], !(t.slippage < -.05)) {
                                                a.next = 9;
                                                break
                                            }
                                            return t.pendingUnstake = n, t.pendingUnstakeOnly = s, t.pendingExit = r, t.showSlippageModal = !0, a.abrupt("return");
                                        case 9:
                                            t.handle_remove_liquidity(n, s, r);
                                        case 10:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        },
                        handle_remove_liquidity: function() {
                            var e = arguments,
                                t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function a() {
                                var n, s, r, i, c, m, f, w, v, b, x, k, P, y, N, S, C, I, A, O, R, M, F, j, G, B, E, W, X, q, T, z, D, L, H, U, $;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return n = e.length > 0 && void 0 !== e[0] && e[0], s = e.length > 1 && void 0 !== e[1] && e[1], e.length > 2 && void 0 !== e[2] && e[2], a.next = 5, u["update_fee_info"]();
                                        case 5:
                                            return a.next = 7, t.update_balances();
                                        case 7:
                                            if (r = 0 == n ? 1 : 2, t.loadingAction != r) {
                                                a.next = 10;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 10:
                                            return t.setLoadingAction(r), a.next = 13, Promise.all([h["i"]()]);
                                        case 13:
                                            i = a.sent, t.ethPrice = i[0], t.estimateGas = 0, ["susdv2", "sbtc", "y", "earn"].includes(t.currentPool) && (s ? (t.estimateGas = 125e3, "sbtc" == t.currentPool && (t.estimateGas += 3e5)) : (c = t.inputs.filter(Number).length, "---" == t.share ? t.estimateGas = 0 | d["g"].withdraw[t.currentPool].imbalance(c) : null !== t.to_currency && t.to_currency < 10 ? t.estimateGas = d["g"].depositzap[t.currentPool].withdraw / 2 : t.estimateGas = d["g"].depositzap[t.currentPool].withdrawShare / 2)), t.show_loading = !0, m = d["f"].deposit_zap, ([, "ren", "sbtc", "hbtc", "3pool"].includes(d["f"].currentContract) || t.is_meta && t.withdrawc) && (m = d["f"].swap), [], f = d["f"].N_COINS, t.is_meta && (f = p["g"][d["f"].currentContract].meta_N), w = 0;
                                        case 24:
                                            if (!(w < f)) {
                                                a.next = 34;
                                                break
                                            }
                                            if (t.inputs[w]) {
                                                a.next = 28;
                                                break
                                            }
                                            return o["a"].set(t.amounts, w, 0), a.abrupt("continue", 31);
                                        case 28:
                                            v = _()(t.calc_balances[w]).minus(_()(t.inputs[w])), b = t.calc_balances[w] > 0 && v.lte(_()(t.minAmount)) && v > 0, b ? o["a"].set(t.amounts, w, _()(t.calc_balances[w]).div(d["f"].c_rates[w]).toFixed(0, 1)) : o["a"].set(t.amounts, w, _()(Math.floor(t.inputs[w] / d["f"].c_rates[w]).toString()).toFixed(0, 1));
                                        case 31:
                                            w++, a.next = 24;
                                            break;
                                        case 34:
                                            if (t.amounts = t.amounts.map((function(e) {
                                                    return e || 0
                                                })), "---" != t.share) {
                                                a.next = 123;
                                                break
                                            }
                                            return k = d["f"].swap.methods.calc_token_amount, t.is_meta && !t.withdrawc && (k = d["f"].deposit_zap.methods.calc_token_amount), a.prev = 38, a.next = 41, k(t.realAmounts, !1).call();
                                        case 41:
                                            x = a.sent, a.next = 49;
                                            break;
                                        case 44:
                                            a.prev = 44, a.t0 = a["catch"](38), console.error(a.t0), t.show_nobalance = !0, t.show_nobalance_i = t.to_currency;
                                        case 49:
                                            if (x = _()(x).times(_()(1).plus(t.calcFee)), x = _()(Math.floor(x * t.getMaxSlippage).toString()).toFixed(0, 1), !t.token_balance.lt(_()(x)) && !n || "susd" == t.currentPool) {
                                                a.next = 56;
                                                break
                                            }
                                            return P = _()(x).minus(_()(t.token_balance)), n && (P = _()(x)), a.next = 56, t.unstake(P, n && !s, s);
                                        case 56:
                                            if (!s) {
                                                a.next = 58;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 58:
                                            if (y = t.inputs.filter(Number).length, !t.withdrawc && !["susdv2", "sbtc"].includes(t.currentPool)) {
                                                a.next = 89;
                                                break
                                            }
                                            return N = 0 | d["g"].withdraw[t.currentPool].imbalance(y), a.prev = 61, t.waitingMessage = "Please confirm withdrawal transaction", S = Object(l["d"])(t.waitingMessage), C = S.dismiss, a.prev = 64, a.next = 67, d["f"].swap.methods.remove_liquidity_imbalance(t.realAmounts, x).estimateGas({
                                                from: d["f"].default_account,
                                                gasPrice: t.gasPriceWei,
                                                gas: N
                                            });
                                        case 67:
                                            t.estimateGas = a.sent, a.next = 73;
                                            break;
                                        case 70:
                                            a.prev = 70, a.t1 = a["catch"](64), t.estimateGas = N / 2;
                                        case 73:
                                            return a.next = 75, h["r"](100);
                                        case 75:
                                            return a.next = 77, d["f"].swap.methods.remove_liquidity_imbalance(t.realAmounts, x).send({
                                                from: d["f"].default_account,
                                                gasPrice: t.gasPriceWei,
                                                gas: N
                                            }).once("transactionHash", (function(e) {
                                                C(), Object(l["c"])(e), t.waitingMessage = "Waiting for withdrawal to confirm: no further action needed"
                                            }));
                                        case 77:
                                            a.next = 87;
                                            break;
                                        case 79:
                                            throw a.prev = 79, a.t2 = a["catch"](61), console.error(a.t2), C(), g["a"](a.t2), t.waitingMessage = "", t.show_loading = !1, a.t2;
                                        case 87:
                                            a.next = 121;
                                            break;
                                        case 89:
                                            if (I = t.inputs, I = I.map((function(e) {
                                                    return e || 0
                                                })), A = d["f"].coin_precisions, t.is_meta && (A = p["g"][d["f"].currentContract].meta_precisions), O = t.inputs.map((function(e, a) {
                                                    e || (e = 0);
                                                    var n = _()(t.calc_balances[a]).minus(_()(e));
                                                    return t.calc_balances[a] > 0 && n.lte(_()(t.minAmount)) && n > 0 ? t.calc_balances[a].times(A[a]).toFixed(0, 1) : _()(e).times(A[a]).toFixed(0, 1)
                                                })), O = O.map((function(e) {
                                                    return e || 0
                                                })), R = 0 | d["g"].depositzap[t.currentPool].withdrawImbalance(y), t.waitingMessage = "Please approve ".concat(t.toFixed(x / 1e18), " Curve LP tokens for withdrawal"), M = Object(l["d"])(t.waitingMessage), C = M.dismiss, a.prev = 98, t.estimateGas = R / (["compound", "usdt"].includes(d["f"].currentContract) ? 1.5 : 2.5), ["ren", "sbtc", "hbtc", "3pool"].includes(d["f"].currentContract)) {
                                                a.next = 103;
                                                break
                                            }
                                            return a.next = 103, u["ensure_allowance_zap_out"](x, void 0, void 0, t.inf_approval);
                                        case 103:
                                            return C(), t.waitingMessage = "Please confirm withdrawal transaction", F = Object(l["d"])(t.waitingMessage), C = F.dismiss, a.next = 108, h["r"](100);
                                        case 108:
                                            return t.is_meta && (O = O.filter((function(e, t) {
                                                return 1 != t
                                            }))), a.next = 111, m.methods.remove_liquidity_imbalance(O, x).send({
                                                from: d["f"].default_account,
                                                gasPrice: t.gasPriceWei,
                                                gas: R
                                            }).once("transactionHash", (function(e) {
                                                C(), Object(l["c"])(e), t.waitingMessage = "Waiting for withdrawal to confirm: no further action needed"
                                            }));
                                        case 111:
                                            a.next = 121;
                                            break;
                                        case 113:
                                            throw a.prev = 113, a.t3 = a["catch"](98), console.error(a.t3), C(), g["a"](a.t3), t.waitingMessage = "", t.show_loading = !1, a.t3;
                                        case 121:
                                            a.next = 237;
                                            break;
                                        case 123:
                                            if (j = _()(t.token_balance), 100 != t.share) {
                                                a.next = 130;
                                                break
                                            }
                                            return a.t4 = _.a, a.next = 128, d["f"].swap_token.methods.balanceOf(d["f"].default_account).call();
                                        case 128:
                                            a.t5 = a.sent, j = (0, a.t4)(a.t5);
                                        case 130:
                                            if (t.showstaked && (j = j.plus(t.staked_balance)), G = _()(t.share).div(_()(100)).times(j), !t.token_balance.lt(G) && !n || "susd" == t.currentPool) {
                                                a.next = 137;
                                                break
                                            }
                                            return B = _()(G).minus(_()(t.token_balance)), n && (B = _()(G)), a.next = 137, t.unstake(B, n && !s, s);
                                        case 137:
                                            if (!s) {
                                                a.next = 139;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 139:
                                            if (G = G.toFixed(0, 1), !(null !== t.to_currency && t.to_currency < 10)) {
                                                a.next = 178;
                                                break
                                            }
                                            if (t.waitingMessage = "Please approve ".concat(t.toFixed(G / 1e18), " Curve LP tokens for withdrawal"), E = Object(l["d"])(t.waitingMessage), C = E.dismiss, t.estimateGas = d["g"].depositzap[t.currentPool].withdraw / 2, ["ren", "sbtc", "hbtc", "3pool"].includes(d["f"].currentContract)) {
                                                a.next = 147;
                                                break
                                            }
                                            return a.next = 147, u["ensure_allowance_zap_out"](G, void 0, void 0, t.inf_approval);
                                        case 147:
                                            return C(), a.prev = 148, a.next = 151, m.methods.calc_withdraw_one_coin(G, t.to_currency).call();
                                        case 151:
                                            W = a.sent, W = _()(W).times(_()(1).minus(t.calcFee)), a.next = 160;
                                            break;
                                        case 155:
                                            a.prev = 155, a.t6 = a["catch"](148), console.error(a.t6), t.show_nobalance = !0, t.show_nobalance_i = t.to_currency;
                                        case 160:
                                            return t.waitingMessage = "Please confirm withdrawal transaction", X = Object(l["d"])(t.waitingMessage), C = X.dismiss, q = [_()(G).toFixed(0, 1), t.to_currency, _()(W).times(_()(1).div(_()(t.getMaxSlippage))).toFixed(0, 1)], ["tbtc", "ren", "sbtc", "hbtc", "3pool", "gusd", "husd", "usdk", "usdn", "linkusd", "musd", "rsv", "dusd"].includes(d["f"].currentContract) || q.push(t.donate_dust), a.next = 166, h["r"](100);
                                        case 166:
                                            return a.prev = 166, a.next = 169, (T = m.methods).remove_liquidity_one_coin.apply(T, q).send({
                                                from: d["f"].default_account,
                                                gasPrice: t.gasPriceWei,
                                                gas: 0 | d["g"].depositzap[t.currentPool].withdraw
                                            }).once("transactionHash", (function(e) {
                                                C(), Object(l["c"])(e), t.waitingMessage = "Waiting for withdrawal \n                                <a href='https://etherscan.io/tx/".concat(e, "'>transaction</a>\n                                to confirm: no further action needed")
                                            }));
                                        case 169:
                                            a.next = 176;
                                            break;
                                        case 171:
                                            a.prev = 171, a.t7 = a["catch"](166), console.error(a.t7), C(), g["a"](a.t7);
                                        case 176:
                                            a.next = 237;
                                            break;
                                        case 178:
                                            if (!(10 == t.to_currency && "susd" != t.currentPool || t.is_meta && !t.withdrawc)) {
                                                a.next = 208;
                                                break
                                            }
                                            if (t.waitingMessage = "Please approve ".concat(t.toFixed(G / 1e18), " Curve LP tokens for withdrawal"), z = Object(l["d"])(t.waitingMessage), C = z.dismiss, a.prev = 181, t.estimateGas = d["g"].depositzap[t.currentPool].withdrawShare / 2, ["ren", "sbtc", "hbtc", "3pool"].includes(d["f"].currentContract)) {
                                                a.next = 186;
                                                break
                                            }
                                            return a.next = 186, u["ensure_allowance_zap_out"](G, void 0, void 0, t.inf_approval);
                                        case 186:
                                            return C(), t.waitingMessage = "Please confirm withdrawal transaction", D = Object(l["d"])(t.waitingMessage), C = D.dismiss, a.next = 191, t.getMinAmounts();
                                        case 191:
                                            return L = a.sent, a.next = 194, h["r"](100);
                                        case 194:
                                            return a.next = 196, m.methods.remove_liquidity(G, L).send({
                                                from: d["f"].default_account,
                                                gasPrice: t.gasPriceWei,
                                                gas: d["g"].depositzap[t.currentPool].withdrawShare
                                            }).once("transactionHash", (function(e) {
                                                C(), Object(l["c"])(e), t.waitingMessage = "Waiting for withdrawal \n                                <a href='https://etherscan.io/tx/".concat(e, "'>transaction</a>\n                                to confirm: no further action needed")
                                            }));
                                        case 196:
                                            a.next = 206;
                                            break;
                                        case 198:
                                            throw a.prev = 198, a.t8 = a["catch"](181), console.error(a.t8), C(), g["a"](a.t8), t.waitingMessage = "", t.show_loading = !1, a.t8;
                                        case 206:
                                            a.next = 237;
                                            break;
                                        case 208:
                                            return a.prev = 208, a.next = 211, t.getMinAmounts();
                                        case 211:
                                            return H = a.sent, t.waitingMessage = "Please confirm withdrawal transaction", U = Object(l["d"])(t.waitingMessage), C = U.dismiss, a.prev = 214, a.next = 217, d["f"].swap.methods.remove_liquidity(G, H).estimateGas({
                                                from: d["f"].default_account,
                                                gasPrice: t.gasPriceWei,
                                                gas: 6e5
                                            });
                                        case 217:
                                            t.estimateGas = a.sent, a.next = 223;
                                            break;
                                        case 220:
                                            a.prev = 220, a.t9 = a["catch"](214), t.estimateGas = 6e5;
                                        case 223:
                                            return a.next = 225, h["r"](100);
                                        case 225:
                                            return a.next = 227, d["f"].swap.methods.remove_liquidity(G, H).send({
                                                from: d["f"].default_account,
                                                gasPrice: t.gasPriceWei,
                                                gas: 6e5
                                            }).once("transactionHash", (function(e) {
                                                C(), Object(l["c"])(e), t.waitingMessage = "Waiting for withdrawal \n                                <a href='https://etherscan.io/tx/".concat(e, "'>transaction</a>\n                                to confirm: no further action needed")
                                            }));
                                        case 227:
                                            a.next = 237;
                                            break;
                                        case 229:
                                            throw a.prev = 229, a.t10 = a["catch"](208), console.error(a.t10), C(), g["a"](a.t10), t.waitingMessage = "", t.show_loading = !1, a.t10;
                                        case 237:
                                            if ("---" == t.share)
                                                for ($ = 0; $ < d["f"].N_COINS; $++) t.handle_change_amounts($);
                                            return t.show_loading = !1, t.waitingMessage = "", t.estimateGas = 0, a.next = 243, t.update_balances();
                                        case 243:
                                            return a.next = 245, u["update_fee_info"]();
                                        case 245:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [38, 44],
                                    [61, 79],
                                    [64, 70],
                                    [98, 113],
                                    [148, 155],
                                    [166, 171],
                                    [181, 198],
                                    [208, 229],
                                    [214, 220]
                                ])
                            })))()
                        },
                        handle_change_share: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, s, r, i, c, l, u, h, m;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (a = d["f"].deposit_zap, (["ren", "sbtc", "hbtc", "3pool"].includes(d["f"].currentContract) || e.is_meta && e.withdrawc) && (a = d["f"].swap), n = d["f"].N_COINS, e.is_meta && !e.withdrawc && (n = p["g"][e.currentPool].meta_N), e.warninglow = !1, e.showWithdrawSlippage = !1, e.show_nobalance = !1, null == e.to_currency && 0 == e.withdrawc && "---" == e.share && (e.to_currency = 10), "---" != e.share && null != e.to_currency && 10 != e.to_currency && (e.showWithdrawSlippage = !0), s = e.showstaked ? e.token_balance.plus(e.staked_balance) : e.token_balance, d["f"].showSlippage = !1, d["f"].slippage = 0, !(null !== e.to_currency && e.to_currency < 10)) {
                                                t.next = 43;
                                                break
                                            }
                                            if (r = _()(e.share).div(_()(100)).times(s).toFixed(0, 1), 100 != e.share) {
                                                t.next = 19;
                                                break
                                            }
                                            return t.next = 17, d["f"].swap_token.methods.balanceOf(d["f"].default_account || "0x0000000000000000000000000000000000000000").call();
                                        case 17:
                                            r = t.sent, e.showstaked && (r = _()(r).plus(_()(e.staked_balance)).toFixed(0, 1));
                                        case 19:
                                            return i = p["g"][d["f"].currentContract].coin_precisions[e.to_currency], e.is_meta && !e.withdrawc && (i = p["g"][d["f"].currentContract].meta_coin_precisions[e.to_currency]), c = Array(n).fill(0), l = e.to_currency, e.is_meta && !e.withdrawc && l > 0 && (l += 1), t.prev = 24, e.warninglow = !1, t.t0 = _.a, t.next = 29, a.methods.calc_withdraw_one_coin(r, e.to_currency).call();
                                        case 29:
                                            t.t1 = t.sent, c[l] = (0, t.t0)(t.t1), c[l].eq(_()(0)) && (e.warninglow = !0), t.next = 38;
                                            break;
                                        case 34:
                                            t.prev = 34, t.t2 = t["catch"](24), console.error(t.t2, "CALC WITHDRAW ONE COIN ERROR"), "" != e.share && (e.show_nobalance = !0, e.show_nobalance_i = e.to_currency);
                                        case 38:
                                            return u = c[l].div(i), e.inputs = e.inputs.map((function(e) {
                                                return 0
                                            })), e.inputs[l] = e.toFixed(_()(u), 2, 1), t.next = 43, e.calcSlippage([], !1, c, l);
                                        case 43:
                                            if (e.shareStyles.backgroundColor = "blue", e.shareStyles.color = "aqua", "---" == e.share ? e.share = 0 : e.share > 100 | e.share < 0 && (e.shareStyles.backgroundColor = "red"), !(null !== e.to_currency && e.to_currency < 10)) {
                                                t.next = 48;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 48:
                                            for (h = 0; h < n; h++) e.share >= 0 & e.share <= 100 ? (m = _()(e.share / 100 * e.balances[h] * d["f"].c_rates[h] * s / e.token_supply), o["a"].set(e.inputs, h, e.toFixed(m, 2, 1))) : o["a"].set(e.inputs, h, 0), o["a"].set(e.inputStyles, h, {
                                                backgroundColor: "#707070",
                                                color: "#d0d0d0"
                                            });
                                        case 49:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [24, 34]
                                ])
                            })))()
                        },
                        setAllInputBackground: function(e) {
                            var t = d["f"].N_COINS;
                            this.is_meta && (t = p["g"][d["f"].currentContract].meta_N);
                            for (var a = 0; a < t; a++) o["a"].set(this.inputStyles, a, Object.assign(this.inputStyles[a] || {}, {
                                backgroundColor: e
                            }))
                        },
                        handle_migrate_new: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if ("compound" != e.currentPool) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return", u["handle_migrate_new"]("new"));
                                        case 2:
                                            return e.share = 100, t.next = 5, e.handle_remove_liquidity();
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        migrateUSDT: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, s, r, i, c, o, m;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e.withdrawc = !1, a = e.inputs, a.push(0), e.handle_remove_liquidity(), t.next = 6, Object(d["j"])(d["f"].contracts.pax);
                                        case 6:
                                            return a = a.map((function(e, t) {
                                                return _()(e).times(p["g"].pax.coin_precisions[t]).toFixed(0)
                                            })), e.waitingMessage = "Please approve spending your coins", n = Object(l["d"])(e.waitingMessage), s = n.dismiss, t.next = 11, u["ensure_allowance"](a, !0, "pax", 3);
                                        case 11:
                                            return s(), r = new d["f"].web3.eth.Contract(p["g"].pax.deposit_abi, p["g"].pax.deposit_address), t.next = 15, d["f"].contracts.pax.swap.methods.calc_token_amount(a, !0).call();
                                        case 15:
                                            return i = t.sent, i = _()(Math.floor(.99 * i).toString()).toFixed(0, 1), e.waitingMessage = "Please confirm deposit to PAX pool transaction", c = Object(l["d"])(e.waitingMessage), s = c.dismiss, o = a.filter(Number).length, m = 0 | d["g"].depositzap.pax.deposit(o), t.next = 23, h["r"](100);
                                        case 23:
                                            try {
                                                r.methods.add_liquidity(a, i).send({
                                                    from: d["f"].default_account,
                                                    gas: m
                                                }).once("transactionHash", (function(t) {
                                                    s(), Object(l["c"])(t), e.waitingMessage = "Waiting for deposit to PAX transaction to confirm no further action required"
                                                }))
                                            } catch (f) {
                                                console.error(f), g["a"](f)
                                            }
                                        case 24:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        withdrawOldStaking: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, s;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.t0 = _.a, t.next = 3, d["f"].curveRewards.methods.balanceOf(d["f"].default_account).call();
                                        case 3:
                                            return t.t1 = t.sent, a = (0, t.t0)(t.t1), n = Object(l["d"])("Withdraw from old staking contract"), s = n.dismiss, t.prev = 6, t.next = 9, new Promise((function(t, n) {
                                                d["f"].curveRewards.methods.withdraw(a.toFixed(0, 1)).send({
                                                    from: d["f"].default_account,
                                                    gasPrice: e.gasPriceWei,
                                                    gas: 125e3
                                                }).once("transactionHash", (function(a) {
                                                    e.waitingMessage = "Waiting for unstake transaction to confirm", s(), Object(l["c"])(a), t()
                                                })).catch((function(e) {
                                                    s(), n(e)
                                                }))
                                            }));
                                        case 9:
                                            t.next = 16;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t2 = t["catch"](6), g["a"](t.t2), e.waitingMessage = "", e.show_loading = !1;
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [6, 11]
                                ])
                            })))()
                        },
                        getI: function(e) {
                            return this.is_meta && !this.withdrawc && e > 0 ? e + 1 : e
                        }
                    }
                }),
                x = b,
                k = (a("7c94"), a("2877")),
                P = Object(k["a"])(x, n, s, !1, null, null, null);
            t["default"] = P.exports
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
                s = [function() {
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
                c = a("0c7c"),
                o = a("2fa3"),
                l = a("fe5c"),
                u = a("901e"),
                d = a.n(u),
                p = {
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
                        return Object(r["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        !i["a"].fetched && e.getGasPrice(), i["a"].gasPriceInterval && Object(l["clearIntervalAsync"])(i["a"].gasPriceInterval), i["a"].gasPriceInterval && !i["a"].gasPriceInterval.stopped || (i["a"].gasPriceInterval = Object(l["setIntervalAsync"])((function() {
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
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
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
                            return Object(r["a"])(regeneratorRuntime.mark((function a() {
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
                h = p,
                m = (a("6e7b"), a("2877")),
                f = Object(m["a"])(h, n, s, !1, null, "207c7b6a", null);
            t["a"] = f.exports
        },
        fe5c: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "SetIntervalAsyncError", (function() {
                return c
            })), a.d(t, "clearIntervalAsync", (function() {
                return r
            })), a.d(t, "setIntervalAsync", (function() {
                return p
            }));
            var n = a("3bdc");
            const s = Math.pow(2, 31) - 1;

            function r(e) {
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
                        r = Object.values(e.promises).map(e => {
                            e.catch(n)
                        }),
                        i = setInterval(n, s);
                    yield Promise.all(r), clearInterval(i)
                })), i.apply(this, arguments)
            }
            class c extends Error {}
            Object.defineProperty(c.prototype, "name", {
                value: "SetIntervalAsyncError"
            });
            const o = 10;

            function l(e) {
                if ("function" !== typeof e) throw new c('Invalid argument: "handler". Expected a function.')
            }

            function u(e) {
                if (!("number" === typeof e && o <= e)) throw new c(`Invalid argument: "interval". Expected a number greater than or equal to ${o}.`)
            }
            class d {
                constructor() {
                    this.stopped = !1, this.id = 0, this.timeouts = {}, this.promises = {}
                }
            }

            function p(e, t, ...a) {
                l(e), u(t);
                const n = new d,
                    s = n.id;
                return n.timeouts[s] = setTimeout(h, t, n, e, t, ...a), n
            }

            function h(e, t, a, ...s) {
                const r = e.id;
                e.promises[r] = n((function*() {
                    const n = new Date;
                    try {
                        yield t(...s)
                    } catch (c) {
                        console.error(c)
                    }
                    const i = new Date;
                    if (!e.stopped) {
                        const c = i - n,
                            o = a > c ? a - c : 0;
                        e.timeouts[r + 1] = setTimeout(h, o, e, t, a, ...s)
                    }
                    delete e.timeouts[r], delete e.promises[r]
                }))(), e.id = r + 1
            }
        }
    }
]);
//# sourceMappingURL=chunk-512ea3c7.aae109ca.js.map