(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-018bdb8c"], {
        "0c39": function(e, t, r) {},
        8870: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "window white"
                    }, [r("h2", [e._v("Curve FAQ")]), r("h3", [e._v("What is Curve?")]), r("a", {
                        attrs: {
                            href: "https://www.curve.fi/stableswap-paper.pdf"
                        }
                    }, [e._v("Whitepaper")]), e._m(0), e._m(1), r("div", [r("router-link", {
                        attrs: {
                            to: "/integrations"
                        }
                    }, [e._v("Integrations")])], 1), r("p"), e._m(2), e._m(3), r("p"), e._m(4), e._m(5), e._m(6), e._m(7), e._m(8), r("p"), r("h3", [e._v("Has Curve been audited?")]), r("p", [e._v("Curve smart contracts were "), r("router-link", {
                        attrs: {
                            to: "/audits"
                        }
                    }, [e._v("Audited")]), e._v(" by Trail of Bits.")], 1), r("p", [e._v("However, security audits don't eliminate risks completely. Please don’t supply your life savings, or assets you can’t afford to lose, to Curve, especially as a liquidity provider.")]), r("p", [e._v("Using Curve as an exchange user should be significantly less risky, but this is not advice.")]), r("h3", [r("router-link", {
                        attrs: {
                            to: "/bugbounty"
                        }
                    }, [e._v("Bug bounty")])], 1), r("h3", [e._v("Source code git")]), e._m(9), e._m(10), e._m(11), r("h3", [e._v("How do I trade on Curve?")]), r("p", [e._v("Before trading, you’ll have to approve Curve to interact with your stablecoin balance, similar to most DeFi applications.")]), r("p", [e._v("On the exchange page, select the asset you would like to convert (e.g. USDC), and the quantity (e.g. 1,000) - the exchange rate, and quantity that you will receive (including and all slippage and fees) will be displayed. The exchange rate might surprise you - that’s the power of Curve.")]), r("h3", [e._v("Fees")]), r("p", [e._v(" Currently the fee on all pools is 0.04% which all goes to liquidity providers. There is no admin fee. ")]), r("p", [e._v(" In the future, fees and pool parameters will be decided by a DAO. ")]), r("h3", [e._v("How do I provide liquidity to Curve?")]), e._m(12), r("p", [e._v(" You can deposit plain stablecoins - DAI/USDC/USDT/TUSD/BUSD/sUSD which will get converted underneath to cTokens for compound pool or yTokens for "), r("router-link", {
                        attrs: {
                            to: "/pax"
                        }
                    }, [e._v("pax")]), e._v(", "), r("router-link", {
                        attrs: {
                            to: "/y"
                        }
                    }, [e._v("y")]), e._v(", "), r("router-link", {
                        attrs: {
                            to: "/busd"
                        }
                    }, [e._v("busd")]), e._v(' pools or you can click the "Deposit wrapped" option to deposit cTokens or yTokens if you have them. ')], 1), r("p", [e._v(" You can also deposit Bitcoin ERC20s - renBTC, WBTC, sBTC in the "), r("router-link", {
                        attrs: {
                            to: "/ren"
                        }
                    }, [e._v("ren")]), e._v(" and "), r("router-link", {
                        attrs: {
                            to: "sbtc"
                        }
                    }, [e._v("pools")])], 1), r("h3", [e._v('What\'s "Use maximum amount of coins available"?')]), r("p", [e._v("This means using all USDC and DAI in your wallet. This way is recommended only if you have much less coins than currently in liquidity pool.")]), r("h3", [e._v('What\'s "Infinite approval - trust this contract forever"?')]), r("p", [e._v("This means that you preapprove the contract to to be able to spend any amount of your coins when you interact with it. This means that you won't be asked every time to appove the amount of coins you want to transfer to the contract. ")]), r("h3", [e._v("How to withdraw liquidity I provided?")]), r("p", [e._v("Go to the withdraw page. If you want to withdraw some percentage of your liquidity (the preferred way), type that percentage in the top field. You can, however, withdraw in a form of individual coins (USDC, DAI, ...), having the exchange happening for you, if you type amounts in lower fields. You'll get charge with the exchange fee in the latter case.")]), r("a", {
                        staticClass: "devserver",
                        attrs: {
                            href: "https://curve-dev.vercel.app"
                        }
                    }, [e._v("Development environment")])])
                },
                a = [function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("p", [e._v(" Curve is an exchange liquidity pool on Ethereum (like "), r("a", {
                        attrs: {
                            href: "https://uniswap.exchange/"
                        }
                    }, [e._v("Uniswap")]), e._v(") designed for (1) extremely efficient stablecoin trading (2) low risk, supplemental fee income for liquidity providers, without an opportunity cost.")])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("p", [e._v("Curve allows users (and smart contracts like "), r("a", {
                        attrs: {
                            href: "http://1inch.exchange/"
                        }
                    }, [e._v("1inch")]), e._v(", "), r("a", {
                        attrs: {
                            href: "https://paraswap.io/"
                        }
                    }, [e._v("Paraswap")]), e._v(", "), r("a", {
                        attrs: {
                            href: "https://swap.totle.com/"
                        }
                    }, [e._v("Totle")]), e._v(" and "), r("a", {
                        attrs: {
                            href: "https://dex.ag/"
                        }
                    }, [e._v("Dex.ag")]), e._v(") to trade between DAI and USDC with a bespoke low slippage, low fee algorithm designed specifically for stablecoins and earn fees. Behind the scenes, the liquidity pool is also supplied to the "), r("a", {
                        attrs: {
                            href: "https://compound.finance/"
                        }
                    }, [e._v("Compound")]), e._v(" protocol or "), r("a", {
                        attrs: {
                            href: "https://yearn.finance/"
                        }
                    }, [e._v("yearn.finance")]), e._v(" where it generates even more income for liquidity providers. ")])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", [r("a", {
                        attrs: {
                            href: "https://guides.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Guides")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", [r("a", {
                        attrs: {
                            href: "https://resources.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Resources")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("p", [r("a", {
                        attrs: {
                            href: "https://medium.com/@crypto.tutorials/curve-fi-how-does-it-work-b673a8fe16cc",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Getting started tutorial")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("p", [r("a", {
                        attrs: {
                            href: "https://www.youtube.com/watch?v=fGxTwm-rf1s",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("How to use Curve Y pool video")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("p", [r("a", {
                        attrs: {
                            href: "https://www.youtube.com/watch?v=1SN7zKlb5pk",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("How Curve.fi works")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("p", [r("a", {
                        attrs: {
                            href: "https://www.youtube.com/watch?v=4zxgQZclYPo",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("How to deposit BTC to sBTC pool")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("p", [r("a", {
                        attrs: {
                            href: "https://www.youtube.com/watch?v=8Z0PmN0F0vQ",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Deposit BTC into Curve pools")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("p", [r("a", {
                        attrs: {
                            href: "https://github.com/curvefi/curve-contract"
                        }
                    }, [e._v("Smart contracts")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("p", [r("a", {
                        attrs: {
                            href: "https://github.com/pengiundev/curve-vue"
                        }
                    }, [e._v("Frontend")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("p", [r("a", {
                        attrs: {
                            href: "https://github.com/curvefi/curve-pool-registry/blob/b17/doc/notebook/playbook.ipynb"
                        }
                    }, [e._v("Curve pool registry")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("p", [e._v("Curve uses "), r("a", {
                        attrs: {
                            href: "https://compound.finance/ctokens"
                        }
                    }, [e._v("cTokens")]), e._v(", or "), r("a", {
                        attrs: {
                            href: "https://docs.yearn.finance/"
                        }
                    }, [e._v("Ytokens")]), e._v(" assets for lending while market making, as the liquidity pool - this ensures that assets are always being put to work.")])
                }],
                n = (r("da1c"), r("2877")),
                i = {},
                s = Object(n["a"])(i, o, a, !1, null, "3c36e0bc", null);
            t["default"] = s.exports
        },
        da1c: function(e, t, r) {
            "use strict";
            var o = r("0c39"),
                a = r.n(o);
            a.a
        }
    }
]);
//# sourceMappingURL=chunk-018bdb8c.10e58651.js.map