(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6ed21c16"], {
        3689: function(t, e, r) {
            "use strict";
            r.r(e);
            var s = function() {
                    var t, e = this,
                        r = e.$createElement,
                        s = e._self._c || r;
                    return s("div", {
                        class: (t = {
                            root: !0
                        }, t[e.$route.name] = !0, t),
                        attrs: {
                            id: "app"
                        }
                    }, [s("div", {
                        staticClass: "screencontainer"
                    }, [s("div", {
                        staticClass: "top-menu-bar"
                    }, [s("label", {
                        staticClass: "border-menu",
                        attrs: {
                            for: "hamburger"
                        }
                    }), s("input", {
                        attrs: {
                            type: "checkbox",
                            id: "hamburger"
                        }
                    }), s("div", {
                        staticClass: "poolsdropdown"
                    }, [s("button", {
                        staticClass: "simplebutton"
                    }, [e._v("☰")]), s("div", {
                        staticClass: "dropdown"
                    }, [s("router-link", {
                        attrs: {
                            to: "/compound/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("Compound")]), s("router-link", {
                        attrs: {
                            to: "/usdt/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("USDT")]), s("router-link", {
                        attrs: {
                            to: "/pax/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("PAX")]), s("router-link", {
                        attrs: {
                            to: "/iearn/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("Y")]), s("router-link", {
                        attrs: {
                            to: "/busd/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("bUSD")]), s("router-link", {
                        attrs: {
                            to: "/susdv2/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("sUSD")]), s("router-link", {
                        attrs: {
                            to: "/ren/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("renBTC")]), s("router-link", {
                        attrs: {
                            to: "/sbtc/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("sBTC")]), s("router-link", {
                        attrs: {
                            to: "/hbtc/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("hBTC")]), s("router-link", {
                        attrs: {
                            to: "/3pool/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("3pool")]), s("router-link", {
                        attrs: {
                            to: "/gusd/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("gusd")]), s("router-link", {
                        attrs: {
                            to: "/husd/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("husd")]), s("router-link", {
                        attrs: {
                            to: "/usdk/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("usdk")]), s("router-link", {
                        attrs: {
                            to: "/usdn/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("usdn")]), s("router-link", {
                        attrs: {
                            to: "/linkusd/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("linkusd")]), s("router-link", {
                        attrs: {
                            to: "/musd/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("musd")]), s("router-link", {
                        attrs: {
                            to: "/rsv/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("rsv")]), s("router-link", {
                        attrs: {
                            to: "/tbtc/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("tbtc")]), s("router-link", {
                        attrs: {
                            to: "/dusd/" + (e.$route.path.split("/")[2] || "")
                        }
                    }, [e._v("dusd")]), s("p", [e._v("____________")]), s("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.defaultAccount,
                            expression: "defaultAccount !== null"
                        }],
                        staticClass: "simplebutton margintop",
                        attrs: {
                            id: "myAddress"
                        }
                    }, [s("a", {
                        attrs: {
                            href: "https://etherscan.io/address/" + e.default_account,
                            rel: "noopener noreferrer"
                        }
                    }, [e._v(" " + e._s(e.defaultAccount) + " ")])]), s("button", {
                        staticClass: "simplebutton margintop",
                        on: {
                            click: e.changeWallets
                        }
                    }, [e._v("Change wallet")]), s("button", {
                        staticClass: "simplebutton margintop",
                        attrs: {
                            id: "changeAccounts"
                        },
                        on: {
                            click: e.changeAccounts
                        }
                    }, [e._v("Change accounts")])], 1)]), s("router-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [e._v("Home")]), s("a", {
                        attrs: {
                            href: "https://dao.curve.fi"
                        }
                    }, [e._v("DAO")]), s("router-link", {
                        staticClass: "useCRV",
                        attrs: {
                            to: "/usecrv"
                        }
                    }, [e._v("Use "), s("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV")]), s("router-link", {
                        attrs: {
                            to: "/trade"
                        }
                    }, [e._v("Trade")]), s("div", {
                        staticClass: "poolsdropdown"
                    }, [s("router-link", {
                        attrs: {
                            to: "/combinedstats"
                        }
                    }, [e._v("Stats")]), s("div", {
                        staticClass: "dropdown"
                    }, [s("router-link", {
                        attrs: {
                            to: "/combinedstats"
                        }
                    }, [e._v("Stats")]), s("router-link", {
                        attrs: {
                            to: "/dailystats"
                        }
                    }, [e._v("Daily stats")]), s("router-link", {
                        attrs: {
                            to: "/volumepercoin"
                        }
                    }, [e._v("Coin volumes")]), s("router-link", {
                        attrs: {
                            to: "/volumeperpair"
                        }
                    }, [e._v("Pair volumes")]), s("router-link", {
                        attrs: {
                            to: "/totaldeposits"
                        }
                    }, [e._v("Total deposits")])], 1)], 1), s("router-link", {
                        attrs: {
                            to: "/curvepay"
                        }
                    }, [e._v("Pay")]), s("router-link", {
                        attrs: {
                            to: "/risks"
                        }
                    }, [e._v("Risks")]), s("div", {
                        staticClass: "poolsdropdown right"
                    }, [s("span", [e._v("?")]), s("div", {
                        staticClass: "dropdown"
                    }, [s("router-link", {
                        attrs: {
                            to: "/whitepaper"
                        }
                    }, [e._v("Whitepaper")]), s("router-link", {
                        attrs: {
                            to: "/audits"
                        }
                    }, [e._v("Audits")]), s("router-link", {
                        attrs: {
                            to: "/events"
                        }
                    }, [e._v("Events")]), s("router-link", {
                        attrs: {
                            to: "/contracts"
                        }
                    }, [e._v("Contracts")]), s("router-link", {
                        attrs: {
                            to: "/bugbounty"
                        }
                    }, [e._v("Bug Bounty")]), s("router-link", {
                        attrs: {
                            to: "/rootfaq"
                        }
                    }, [e._v("FAQ")]), s("router-link", {
                        attrs: {
                            to: "/integrations"
                        }
                    }, [e._v("Integrations")]), s("router-link", {
                        attrs: {
                            to: "/donate"
                        }
                    }, [e._v("Donate")]), s("router-link", {
                        attrs: {
                            to: "/devdocs"
                        }
                    }, [e._v("Developer Docs")]), s("a", {
                        attrs: {
                            href: "https://guides.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Guides")]), s("a", {
                        attrs: {
                            href: "https://resources.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Resources")]), s("p", [e._v("____________")]), s("a", {
                        attrs: {
                            href: "https://twitter.com/CurveFinance",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("#Twitter")]), s("a", {
                        attrs: {
                            href: "https://t.me/curvefi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("@Telegram")]), s("a", {
                        attrs: {
                            href: "https://t.me/curveficn",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("@Telegram CN")]), s("a", {
                        attrs: {
                            href: "https://discord.gg/9uEHakc",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("@Discord")]), s("a", {
                        attrs: {
                            href: "https://explore.duneanalytics.com/public/dashboards/RTH47mNjQcoLv5oG0HMDdI0iDq7BHxk1PzCRdwQB",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Dune Analytics")]), s("p", [e._v("____________")]), s("a", {
                        attrs: {
                            href: "https://github.com/curvefi/curve-contract"
                        }
                    }, [e._v("git@")]), s("a", {
                        attrs: {
                            href: "https://github.com/curvefi/curve-vue"
                        }
                    }, [e._v("git@UI")])], 1)]), s("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://dao.curve.fi"
                        }
                    }, [e._v("DAO")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/usecrv"
                        }
                    }, [e._v("Use CRV")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/combinedstats"
                        }
                    }, [e._v("Stats")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/dailystats"
                        }
                    }, [e._v("Daily stats")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/volumepercoin"
                        }
                    }, [e._v("Coin volumes")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/volumeperpair"
                        }
                    }, [e._v("Pair volumes")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/totaldeposits"
                        }
                    }, [e._v("Total deposits")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/whitepaper"
                        }
                    }, [e._v("Whitepaper")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/audits"
                        }
                    }, [e._v("Audits")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/events"
                        }
                    }, [e._v("Events")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/bugbounty"
                        }
                    }, [e._v("Bug Bounty")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/rootfaq"
                        }
                    }, [e._v("FAQ")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/integrations"
                        }
                    }, [e._v("Integrations")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/donate"
                        }
                    }, [e._v("Donate")]), s("router-link", {
                        staticClass: "showmobile",
                        attrs: {
                            to: "/devdocs"
                        }
                    }, [e._v("Developer Docs")]), s("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://guides.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Guides")]), s("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://resources.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Resources")]), s("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://twitter.com/CurveFinance",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("#Twitter")]), s("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://t.me/curvefi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("@Telegram")]), s("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://discord.gg/9uEHakc",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("@Discord")]), s("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://explore.duneanalytics.com/public/dashboards/RTH47mNjQcoLv5oG0HMDdI0iDq7BHxk1PzCRdwQB",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Dune Analytics")]), s("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://github.com/curvefi/curve-contract"
                        }
                    }, [e._v("git@")]), s("a", {
                        staticClass: "showmobile",
                        attrs: {
                            href: "https://github.com/curvefi/curve-vue"
                        }
                    }, [e._v("git@UI")]), s("button", {
                        staticClass: "simplebutton showmobile",
                        on: {
                            click: e.changeWallets
                        }
                    }, [e._v("Change wallet")]), s("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: ["ledger", "trezor"].includes(e.walletName),
                            expression: "['ledger', 'trezor'].includes(walletName)"
                        }],
                        staticClass: "simplebutton showmobile",
                        attrs: {
                            id: "changeAccounts"
                        },
                        on: {
                            click: e.changeAccounts
                        }
                    }, [e._v("Change accounts")])], 1), s("div", {
                        attrs: {
                            id: "screen"
                        }
                    }, [s("div", {
                        class: "blue window " + e.$route.name
                    }, [s("h1", [s("img", {
                        attrs: {
                            src: e.logoSrc,
                            alt: "🌀 Curve"
                        }
                    })])]), e.hasConnectedWallet ? s("div", {
                        staticClass: "info-message gentle-message window half-width gentle-message"
                    }, [e._v(" You haven't connected a wallet. "), s("button", {
                        on: {
                            click: e.changeWallets
                        }
                    }, [e._v("Connect wallet")])]) : e._e(), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.plsReturn,
                            expression: "plsReturn"
                        }],
                        staticClass: "simple-error window"
                    }, [e._v(" Your recent withdrawal from Curve resulted in getting 1000 more USDT because of another user mistakenly transferring funds to the contract. If you wish to return them - please contact us on "), s("a", {
                        attrs: {
                            href: "https://twitter.com/CurveFinance"
                        }
                    }, [e._v("Twitter")]), e._v("/"), s("a", {
                        attrs: {
                            href: "https://t.me/curvefi"
                        }
                    }, [e._v("Telegram")]), e._v("/"), s("a", {
                        attrs: {
                            href: "https://discord.gg/9uEHakc",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("@Discord")]), e._v(". Thank you! ")]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.plsReturn2,
                            expression: "plsReturn2"
                        }],
                        staticClass: "simple-error window"
                    }, [e._v(" Your recently made a huge arb in USDK pool where someone incurred a huge loss. If you wish to return partially - please contract us on "), s("a", {
                        attrs: {
                            href: "https://twitter.com/CurveFinance"
                        }
                    }, [e._v("Twitter")]), e._v("/"), s("a", {
                        attrs: {
                            href: "https://t.me/curvefi"
                        }
                    }, [e._v("Telegram")]), e._v("/"), s("a", {
                        attrs: {
                            href: "https://discord.gg/9uEHakc",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("@Discord")]), e._v(". Thank you! ")]), s("router-view")], 1)]), s("footer", [s("a", {
                        attrs: {
                            href: "https://twitter.com/CurveFinance",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("#Twitter")]), s("a", {
                        attrs: {
                            href: "https://t.me/curvefi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("@Telegram")]), s("a", {
                        attrs: {
                            href: "https://t.me/curveficn",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("@Telegram CN")]), s("a", {
                        attrs: {
                            href: "https://discord.gg/9uEHakc",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("@Discord")]), s("a", {
                        attrs: {
                            href: "https://guides.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Guides")]), s("a", {
                        attrs: {
                            href: "https://resources.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Resources")]), s("a", {
                        attrs: {
                            href: "https://explore.duneanalytics.com/public/dashboards/RTH47mNjQcoLv5oG0HMDdI0iDq7BHxk1PzCRdwQB",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Dune Analytics")]), s("a", {
                        attrs: {
                            href: "https://github.com/curvefi/curve-contract"
                        }
                    }, [e._v("git@")]), s("a", {
                        attrs: {
                            href: "https://github.com/curvefi/curve-vue"
                        }
                    }, [e._v("git@UI")]), s("router-link", {
                        attrs: {
                            to: "/devdocs"
                        }
                    }, [e._v("Developer Docs")])], 1)])
                },
                o = [],
                a = (r("caad"), r("fb6a"), r("b0c0"), r("96cf"), r("1da1")),
                n = r("5530"),
                i = r("51bf"),
                u = r("d99e"),
                c = {
                    metaInfo: {
                        title: "Curve.fi",
                        meta: [{
                            property: "og:title",
                            content: "curve.fi"
                        }, {
                            property: "og:url",
                            content: "https://curve.fi"
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
                            content: "curve.fi"
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
                            content: "https://curve.fi"
                        }, {
                            name: "twitter:image",
                            content: "/curve.png"
                        }]
                    },
                    components: {},
                    computed: Object(n["a"])({}, i["h"], {
                        poolMenu: function() {
                            return i["k"]
                        },
                        publicPath: function() {
                            return "/"
                        },
                        logoSrc: function() {
                            return i["f"].swapbtc || "linkusd" == i["f"].currentContract ? "https://www.curve.fi/logo_ren_beta_optimized.svg" : "https://www.curve.fi/logo_optimized.svg"
                        },
                        hasConnectedWallet: function() {
                            return "0x0000000000000000000000000000000000000000" == this.default_account && !["Donate", "StatsDaily", "Audits", "Stats", "Contracts", "FAQ", "RootFAQ"].includes(this.$route.name)
                        },
                        plsReturn: function() {
                            return i["f"].currentContract.toLowerCase() == "0x72c20f89008729c91b6bb85f3104fda942494cef".toLowerCase()
                        },
                        plsReturn2: function() {
                            return i["f"].currentContract.toLowerCase() == "0xB2398330970C7cAd95535D076BA3f64Cc6aFd43d".toLowerCase()
                        },
                        defaultAccount: function() {
                            return this.default_account && "0x0000000000000000000000000000000000000000" != this.default_account ? this.default_account.slice(0, 6) + "..." + this.default_account.slice(-6) : null
                        }
                    }),
                    methods: {
                        changePools: function(t) {
                            Object(i["e"])(t)
                        },
                        changeWallets: function() {
                            return Object(a["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            Object(u["a"])();
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
                                            return t.abrupt("return", u["e"].accountSelect());
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }
                    }
                },
                l = c,
                v = (r("3986"), r("2877")),
                p = Object(v["a"])(l, s, o, !1, null, "26f6f231", null);
            e["default"] = p.exports
        },
        3986: function(t, e, r) {
            "use strict";
            var s = r("a1af"),
                o = r.n(s);
            o.a
        },
        a1af: function(t, e, r) {}
    }
]);
//# sourceMappingURL=chunk-6ed21c16.104b5b1c.js.map