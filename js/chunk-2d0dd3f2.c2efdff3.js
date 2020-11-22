(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0dd3f2"], {
        8125: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "window white"
                    }, [n("fieldset", {
                        staticClass: "poolsdialog donations"
                    }, [n("legend", [e._v("Donations")]), n("div", {
                        class: {
                            selected: 0 == e.activeLink
                        }
                    }, [n("a", {
                        attrs: {
                            href: "https://gitcoin.co/grants/453/curve-related-vyper-research?tab=description"
                        }
                    }, [e._v("0."), n("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://www.curve.fi/klein-vyper_optimized.svg?rev=98185d4fe81a0ff9206e8b34c66e2be5",
                            alt: "🌀 Curve"
                        }
                    }), n("span", {
                        staticClass: "text"
                    }, [e._v("Curve-related Vyper research")])])]), n("div", {
                        class: {
                            selected: 1 == e.activeLink
                        }
                    }, [n("a", {
                        attrs: {
                            href: "https://etherscan.io/address/0x28b88cfD875C883cDb61938C97B8d1baabf31c88"
                        }
                    }, [e._v("1."), n("img", {
                        staticClass: "icon ethicon",
                        attrs: {
                            src: "https://www.curve.fi/ethereum-brands_optimized.svg?rev=8160e2e87988f42e44fd33495dead52c"
                        }
                    }), n("span", {
                        staticClass: "text"
                    }, [e._v("0x28b88cfD875C883cDb61938C97B8d1baabf31c88")])])]), n("div", {
                        class: {
                            selected: 2 == e.activeLink
                        }
                    }, [n("a", {
                        attrs: {
                            href: "https://www.blockchain.com/btc/address/1C5UfsRKCzEbDbQxKLN7Jx8HFA1ff6dfp4"
                        }
                    }, [e._v("2."), n("img", {
                        staticClass: "icon btcicon",
                        attrs: {
                            src: "https://www.curve.fi/btc-brands_optimized.svg?rev=7cbd9f5561d25b6aa72c5ee927a9f10a"
                        }
                    }), n("span", {
                        staticClass: "text"
                    }, [e._v("1C5UfsRKCzEbDbQxKLN7Jx8HFA1ff6dfp4")])])])])])
                },
                a = [],
                r = (n("caad"), n("fb6a"), n("2532"), {
                    metaInfo: {
                        title: "Curve.fi :: Donate",
                        meta: [{
                            property: "og:title",
                            content: "curve.fi/donate"
                        }, {
                            property: "og:url",
                            content: "https://curve.fi/donate"
                        }, {
                            property: "og:type",
                            content: "website"
                        }, {
                            property: "og:description",
                            content: "Curve is an exchange liquidity pool on Ethereum designed for extremely efficient stablecoin trading"
                        }, {
                            property: "og:image",
                            content: "/curve.png"
                        }, {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }, {
                            name: "twitter:title",
                            content: "curve.fi/donate"
                        }, {
                            name: "twitter:site",
                            content: "@CurveFinance"
                        }, {
                            name: "twitter:creator",
                            content: "@CurveFinance"
                        }, {
                            name: "twitter:description",
                            content: "Curve is an exchange liquidity pool on Ethereum designed for extremely efficient stablecoin trading"
                        }, {
                            name: "twitter:url",
                            content: "https://curve.fi/donate"
                        }, {
                            name: "twitter:image",
                            content: "/curve.png/donate"
                        }]
                    },
                    data: function() {
                        return {
                            activeLink: -1,
                            keydownListener: null
                        }
                    },
                    computed: {
                        publicPath: function() {
                            return "/"
                        }
                    },
                    mounted: function() {
                        this.keydownListener = document.addEventListener("keydown", this.handle_navigating)
                    },
                    beforeDestroy: function() {
                        document.removeEventListener("keydown", this.handle_navigating)
                    },
                    methods: {
                        handle_navigating: function(e) {
                            if (-1 == this.activeLink) return this.activeLink = 0;
                            if ("ArrowUp" == e.code && 0 != this.activeLink && (e.preventDefault(), this.activeLink--), "ArrowDown" == e.code && this.activeLink < 2 && (e.preventDefault(), this.activeLink++), e.code.includes("Digit")) {
                                e.preventDefault();
                                var t = e.code.slice(-1);
                                if (t > 5) return;
                                this.activeLink = t
                            }
                            "Enter" == e.code && (e.preventDefault(), window.open(document.querySelector(".poolsdialog .selected a").href, "_blank", "noopener,noreferrer"))
                        }
                    }
                }),
                c = r,
                s = n("2877"),
                o = Object(s["a"])(c, i, a, !1, null, null, null);
            t["default"] = o.exports
        }
    }
]);
//# sourceMappingURL=chunk-2d0dd3f2.c2efdff3.js.map