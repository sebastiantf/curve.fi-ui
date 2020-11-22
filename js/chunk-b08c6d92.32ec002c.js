(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-b08c6d92"], {
        "2bd5": function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return i
            })), a.d(t, "a", (function() {
                return o
            }));
            a("caad"), a("4fad"), a("2ca0");
            var n, s = a("3835"),
                c = a("ade3"),
                r = a("2b0e"),
                i = r["a"].observable((n = {
                    address: null,
                    sdk: null,
                    transactions: []
                }, Object(c["a"])(n, "address", null), Object(c["a"])(n, "default_account", null), Object(c["a"])(n, "minersFee", 17e3), Object(c["a"])(n, "minersLockFee", 0), Object(c["a"])(n, "minersReleaseFee", 0), Object(c["a"])(n, "mintFee", 0), Object(c["a"])(n, "burnFee", 0), Object(c["a"])(n, "confirmations", 6), Object(c["a"])(n, "space", null), Object(c["a"])(n, "box", null), Object(c["a"])(n, "showModal", !1), Object(c["a"])(n, "showModal1", !1), Object(c["a"])(n, "showModalRecover", !1), Object(c["a"])(n, "msg_signature", null), Object(c["a"])(n, "password", null), Object(c["a"])(n, "aes_key", null), Object(c["a"])(n, "fireUser", null), Object(c["a"])(n, "loaded", !1), Object(c["a"])(n, "adapterContract", null), Object(c["a"])(n, "recover", !1), n));

            function o() {
                for (var e = 0, t = 0, a = Object.entries(localStorage); t < a.length; t++) {
                    var n = Object(s["a"])(a[t], 2),
                        c = n[0],
                        r = n[1];
                    c.startsWith("curvebtc_") && (r = JSON.parse(r), r.removed || ([0, 3].includes(r.type) && ![14, 15, 17].includes(r.state) && e++, 1 == r.type && 65 != r.state && e++))
                }
                return e
            }
        },
        "2ca0": function(e, t, a) {
            "use strict";
            var n = a("23e7"),
                s = a("06cf").f,
                c = a("50c4"),
                r = a("5a34"),
                i = a("1d80"),
                o = a("ab13"),
                l = a("c430"),
                u = "".startsWith,
                d = Math.min,
                b = o("startsWith"),
                p = !l && !b && !! function() {
                    var e = s(String.prototype, "startsWith");
                    return e && !e.writable
                }();
            n({
                target: "String",
                proto: !0,
                forced: !p && !b
            }, {
                startsWith: function(e) {
                    var t = String(i(this));
                    r(e);
                    var a = c(d(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                        n = String(e);
                    return u ? u.call(t, n, a) : t.slice(a, a + n.length) === n
                }
            })
        },
        "3d70": function(e, t, a) {
            "use strict";
            var n = a("6213"),
                s = a.n(n);
            s.a
        },
        6213: function(e, t, a) {},
        "6f8b": function(e, t, a) {
            "use strict";
            a.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "window white"
                    }, [a("div", {
                        staticClass: "aligncontainer"
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.contactUs,
                            expression: "contactUs"
                        }],
                        staticClass: "info-message gentle-message pulseinfo"
                    }, [e._v(" We believe there was an issue with your swap. Please contact us on "), a("a", {
                        attrs: {
                            href: "https://t.me/curvefi"
                        }
                    }, [e._v("Telegram")]), e._v(" or "), a("a", {
                        attrs: {
                            href: "https://twitter.com/CurveFinance"
                        }
                    }, [e._v("Twitter")]), e._v(". ")]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.swapbtc,
                            expression: "swapbtc"
                        }],
                        staticClass: "info-message gentle-message betaversion"
                    }, [e._v(" This is a beta version. Please test with small amounts and use with caution. ")]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["ren", "sbtc"].includes(e.currentPool),
                            expression: "['ren', 'sbtc'].includes(currentPool)"
                        }],
                        staticClass: "swapBTC-container info-message gentle-message"
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.swapbtc,
                            expression: "swapbtc"
                        }],
                        attrs: {
                            id: "swapbtc",
                            type: "checkbox",
                            value: "swapbtc"
                        },
                        domProps: {
                            checked: Array.isArray(e.swapbtc) ? e._i(e.swapbtc, "swapbtc") > -1 : e.swapbtc
                        },
                        on: {
                            change: function(t) {
                                var a = e.swapbtc,
                                    n = t.target,
                                    s = !!n.checked;
                                if (Array.isArray(a)) {
                                    var c = "swapbtc",
                                        r = e._i(a, c);
                                    n.checked ? r < 0 && (e.swapbtc = a.concat([c])) : r > -1 && (e.swapbtc = a.slice(0, r).concat(a.slice(r + 1)))
                                } else e.swapbtc = s
                            }
                        }
                    }), a("label", {
                        attrs: {
                            for: "swapbtc"
                        }
                    }, [e._v("Swap "), a("img", {
                        staticClass: "token-icon vamiddle",
                        attrs: {
                            src: "https://www.curve.fi/tokens/btc.svg"
                        }
                    }), a("a", {
                        attrs: {
                            href: "https://guides.curve.fi/how-to-swap-bitcoin-for-wbtc-or-renbtc/",
                            rel: "noopener norefferer"
                        }
                    }, [e._v("[?]")]), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.hasIncomplete > 0 && 0 == e.swapbtc,
                            expression: "hasIncomplete > 0 && swapbtc == false"
                        }]
                    }, [e._v(" (" + e._s(e.hasIncomplete) + " incomplete tx) ")])]), a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.loading,
                            expression: "loading"
                        }],
                        staticClass: "loading line"
                    })])]), e.swapbtc ? a("swap-native", {
                        on: {
                            loaded: e.loaded
                        }
                    }) : e._e(), !e.swapbtc || e.swapbtc && !e.loaded ? a("swap") : e._e()], 1)
                },
                s = [],
                c = (a("caad"), a("d81d"), a("d3b7"), a("2532"), a("51bf")),
                r = a("2bd5"),
                i = a("cc22"),
                o = (a("f5b9"), function() {
                    return {
                        component: Promise.all([a.e("chunk-722bfaca"), a.e("chunk-a8c0c812"), a.e("chunk-42381ebe")]).then(a.bind(null, "44bd")),
                        loading: i["default"],
                        delay: 0
                    }
                }),
                l = {
                    components: {
                        Swap: i["default"],
                        SwapNative: o
                    },
                    data: function() {
                        return {
                            loading: !1
                        }
                    },
                    created: function() {
                        var e = this;
                        this.$route.path.includes("native") && (this.swapbtc = !0), this.$route.path.includes("recover") && (r["b"].recover = !0), this.$watch((function() {
                            return c["f"].currentContract
                        }), (function(t, a) {
                            ["ren", "sbtc"].includes(a) && !["ren", "sbtc"].includes(t) && (e.swapbtc = !1)
                        }), {
                            immediate: !0
                        })
                    },
                    watch: {
                        swapbtc: function(e) {
                            this.loading = !!e
                        }
                    },
                    computed: {
                        swapComponent: function() {
                            return console.log(c["f"].currentContract, "CURRENT CONTRACT"), this.swapbtc && ["ren", "sbtc"].includes(c["f"].currentContract) ? "SwapNative" : "Swap"
                        },
                        currentPool: function() {
                            return c["h"].currentPool()
                        },
                        hasIncomplete: function() {
                            return r["a"]()
                        },
                        swapbtc: {
                            get: function() {
                                return c["f"].swapbtc && ["ren", "sbtc"].includes(c["f"].currentContract)
                            },
                            set: function(e) {
                                c["f"].swapbtc = e
                            }
                        },
                        publicPath: function() {
                            return "/"
                        },
                        default_account: function() {
                            return c["h"].default_account()
                        },
                        contactUs: function() {
                            return ["0x0f87dd03a74e6a48d56661d96f44880c79b9d795"].map((function(e) {
                                return e.toLowerCase()
                            })).includes(this.default_account.toLowerCase())
                        }
                    },
                    methods: {
                        loaded: function() {
                            "SwapNative" == this.swapComponent && (this.loading = !1)
                        }
                    }
                },
                u = l,
                d = (a("3d70"), a("2877")),
                b = Object(d["a"])(u, n, s, !1, null, "44622375", null);
            t["default"] = b.exports
        },
        f5b9: function(e, t, a) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("span", {
                        staticClass: "loading line"
                    })
                },
                s = [],
                c = {},
                r = c,
                i = a("2877"),
                o = Object(i["a"])(r, n, s, !1, null, null, null);
            o.exports
        }
    }
]);
//# sourceMappingURL=chunk-b08c6d92.32ec002c.js.map