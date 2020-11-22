(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-60f57276"], {
        "0ac0": function(t, e, a) {
            "use strict";
            var n = a("bd9c"),
                c = a.n(n);
            c.a
        },
        "2bd5": function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                return i
            })), a.d(e, "a", (function() {
                return o
            }));
            a("caad"), a("4fad"), a("2ca0");
            var n, c = a("3835"),
                s = a("ade3"),
                r = a("2b0e"),
                i = r["a"].observable((n = {
                    address: null,
                    sdk: null,
                    transactions: []
                }, Object(s["a"])(n, "address", null), Object(s["a"])(n, "default_account", null), Object(s["a"])(n, "minersFee", 17e3), Object(s["a"])(n, "minersLockFee", 0), Object(s["a"])(n, "minersReleaseFee", 0), Object(s["a"])(n, "mintFee", 0), Object(s["a"])(n, "burnFee", 0), Object(s["a"])(n, "confirmations", 6), Object(s["a"])(n, "space", null), Object(s["a"])(n, "box", null), Object(s["a"])(n, "showModal", !1), Object(s["a"])(n, "showModal1", !1), Object(s["a"])(n, "showModalRecover", !1), Object(s["a"])(n, "msg_signature", null), Object(s["a"])(n, "password", null), Object(s["a"])(n, "aes_key", null), Object(s["a"])(n, "fireUser", null), Object(s["a"])(n, "loaded", !1), Object(s["a"])(n, "adapterContract", null), Object(s["a"])(n, "recover", !1), n));

            function o() {
                for (var t = 0, e = 0, a = Object.entries(localStorage); e < a.length; e++) {
                    var n = Object(c["a"])(a[e], 2),
                        s = n[0],
                        r = n[1];
                    s.startsWith("curvebtc_") && (r = JSON.parse(r), r.removed || ([0, 3].includes(r.type) && ![14, 15, 17].includes(r.state) && t++, 1 == r.type && 65 != r.state && t++))
                }
                return t
            }
        },
        "2ca0": function(t, e, a) {
            "use strict";
            var n = a("23e7"),
                c = a("06cf").f,
                s = a("50c4"),
                r = a("5a34"),
                i = a("1d80"),
                o = a("ab13"),
                l = a("c430"),
                u = "".startsWith,
                d = Math.min,
                b = o("startsWith"),
                w = !l && !b && !! function() {
                    var t = c(String.prototype, "startsWith");
                    return t && !t.writable
                }();
            n({
                target: "String",
                proto: !0,
                forced: !w && !b
            }, {
                startsWith: function(t) {
                    var e = String(i(this));
                    r(t);
                    var a = s(d(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                        n = String(t);
                    return u ? u.call(e, n, a) : e.slice(a, a + n.length) === n
                }
            })
        },
        bd9c: function(t, e, a) {},
        d8ef: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "window white"
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.swapbtc,
                            expression: "swapbtc"
                        }],
                        staticClass: "info-message gentle-message betaversion"
                    }, [t._v(" This is a beta version. Please test with small amounts and use with caution. ")]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["ren", "sbtc"].includes(t.currentPool),
                            expression: "['ren', 'sbtc'].includes(currentPool)"
                        }],
                        staticClass: "swapBTC-container info-message gentle-message"
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.swapbtc,
                            expression: "swapbtc"
                        }],
                        attrs: {
                            id: "swapbtc",
                            type: "checkbox",
                            value: "swapbtc"
                        },
                        domProps: {
                            checked: Array.isArray(t.swapbtc) ? t._i(t.swapbtc, "swapbtc") > -1 : t.swapbtc
                        },
                        on: {
                            change: function(e) {
                                var a = t.swapbtc,
                                    n = e.target,
                                    c = !!n.checked;
                                if (Array.isArray(a)) {
                                    var s = "swapbtc",
                                        r = t._i(a, s);
                                    n.checked ? r < 0 && (t.swapbtc = a.concat([s])) : r > -1 && (t.swapbtc = a.slice(0, r).concat(a.slice(r + 1)))
                                } else t.swapbtc = c
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "swapbtc"
                        }
                    }, [t._v("Withdraw "), a("img", {
                        staticClass: "token-icon vamiddle",
                        attrs: {
                            src: "https://www.curve.fi/tokens/btc.svg"
                        }
                    }), a("a", {
                        attrs: {
                            href: "https://guides.curve.fi/how-to-swap-bitcoin-for-wbtc-or-renbtc/",
                            rel: "noopener norefferer"
                        }
                    }, [t._v("[?]")]), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.hasIncomplete > 0 && 0 == t.swapbtc,
                            expression: "hasIncomplete > 0 && swapbtc == false"
                        }]
                    }, [t._v(" (" + t._s(t.hasIncomplete) + " incomplete tx) ")])]), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loading,
                            expression: "loading"
                        }],
                        staticClass: "loading line"
                    })]), t.swapbtc ? a("withdraw-native", {
                        on: {
                            loaded: t.loaded
                        }
                    }) : t._e(), !t.swapbtc || t.swapbtc && !t.loaded ? a("withdraw") : t._e()], 1)
                },
                c = [],
                s = (a("caad"), a("d3b7"), a("2532"), a("51bf")),
                r = a("2bd5"),
                i = a("d1e2"),
                o = (a("f5b9"), function() {
                    return {
                        component: Promise.all([a.e("chunk-722bfaca"), a.e("chunk-a8c0c812"), a.e("chunk-649d7095")]).then(a.bind(null, "cc13")),
                        loading: i["default"],
                        delay: 0
                    }
                }),
                l = {
                    components: {
                        Withdraw: i["default"],
                        WithdrawNative: o
                    },
                    created: function() {
                        var t = this;
                        this.$route.path.includes("native") && (this.swapbtc = !0), this.$watch((function() {
                            return s["f"].currentContract
                        }), (function(e, a) {
                            ["ren", "sbtc"].includes(a) && !["ren", "sbtc"].includes(e) && (t.swapbtc = !1)
                        }))
                    },
                    data: function() {
                        return {
                            loading: !1
                        }
                    },
                    watch: {
                        swapbtc: function(t) {
                            this.loading = !!t
                        }
                    },
                    computed: {
                        swapComponent: function() {
                            return this.swapbtc && ["ren", "sbtc"].includes(s["f"].currentContract) ? "WithdrawNative" : "Withdraw"
                        },
                        currentPool: function() {
                            return s["h"].currentPool()
                        },
                        hasIncomplete: function() {
                            return r["a"]()
                        },
                        swapbtc: {
                            get: function() {
                                return s["f"].swapbtc && ["ren", "sbtc"].includes(s["f"].currentContract)
                            },
                            set: function(t) {
                                s["f"].swapbtc = t
                            }
                        },
                        publicPath: function() {
                            return "/"
                        }
                    },
                    methods: {
                        loaded: function() {
                            "WithdrawNative" == this.swapComponent && (this.loading = !1)
                        }
                    }
                },
                u = l,
                d = (a("0ac0"), a("2877")),
                b = Object(d["a"])(u, n, c, !1, null, "269c65bd", null);
            e["default"] = b.exports
        },
        f5b9: function(t, e, a) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("span", {
                        staticClass: "loading line"
                    })
                },
                c = [],
                s = {},
                r = s,
                i = a("2877"),
                o = Object(i["a"])(r, n, c, !1, null, null, null);
            o.exports
        }
    }
]);
//# sourceMappingURL=chunk-60f57276.c0018d7d.js.map