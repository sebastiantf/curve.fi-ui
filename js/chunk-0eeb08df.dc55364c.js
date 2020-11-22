(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-0eeb08df"], {
        "2cd1": function(e, s, t) {},
        a9b7: function(e, s, t) {
            "use strict";
            var a = t("2cd1"),
                r = t.n(a);
            r.a
        },
        faaa: function(e, s, t) {
            "use strict";
            t.r(s);
            var a = function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("div", {
                        staticClass: "window white"
                    }, [t("fieldset", {
                        staticClass: "contractsdialog"
                    }, [t("legend", [t("button", {
                        staticClass: "buttoncontracts",
                        on: {
                            click: function(s) {
                                e.showContracts = 1
                            }
                        }
                    }, [e._v("Contracts")]), t("button", {
                        on: {
                            click: function(s) {
                                e.showContracts = 3
                            }
                        }
                    }, [e._v("DAO Contracts")])]), e._m(0), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == e.showContracts,
                            expression: "showContracts == 1"
                        }]
                    }, [t("fieldset", [t("legend", [e._v("Curve Pool Registry")]), t("a", {
                        attrs: {
                            href: "https://etherscan.io/address/0x7002B727Ef8F5571Cb5F9D70D13DBEEb4dFAe9d1"
                        }
                    }, [t("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://www.curve.fi/curveIcons/curve-registry.svg"
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "text"
                    }, [e._v("Curve Registry address")])]), t("a", {
                        attrs: {
                            href: "https://etherscan.io/address/0xc1DB00a8E5Ef7bfa476395cdbcc98235477cDE4E"
                        }
                    }, [t("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://www.curve.fi/curveIcons/curve-registry.svg"
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "text"
                    }, [e._v("Curve calc address")])]), t("a", {
                        attrs: {
                            href: "https://github.com/curvefi/curve-pool-registry/blob/b17/doc/notebook/playbook.ipynb"
                        }
                    }, [t("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://www.curve.fi/curveIcons/curve-registry.svg"
                        }
                    }), t("span", {
                        staticClass: "text"
                    }, [e._v("Curve Registry docs")])])]), t("fieldset", [t("legend", [e._v("Insurance")]), t("a", {
                        attrs: {
                            href: "https://app.nexusmutual.io/#/SmartContractCover"
                        }
                    }, [t("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://www.curve.fi/curveIcons/nexusmutual.png"
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "text"
                    }, [e._v("Stablecoin pools - curvev2.nexusmutual.eth")])]), t("a", {
                        attrs: {
                            href: "https://etherscan.io/address/0xc1DB00a8E5Ef7bfa476395cdbcc98235477cDE4E"
                        }
                    }, [t("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://www.curve.fi/curveIcons/nexusmutual.png"
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "text"
                    }, [e._v("BTC pools - curvebtc.nexusmutual.eth")])])]), e._l(e.contractAddresses, (function(s, a) {
                        return t("fieldset", [t("legend", [e._v(e._s(e.allPools[a]))]), t("a", {
                            attrs: {
                                href: "https://etherscan.io/address/" + s.swap
                            }
                        }, [t("img", {
                            staticClass: "icon",
                            attrs: {
                                src: e.getTokenUrl(a)
                            }
                        }), e._v(" "), t("span", {
                            staticClass: "text"
                        }, [e._v("swap address")])]), t("a", {
                            attrs: {
                                href: "https://etherscan.io/address/" + s.token
                            }
                        }, [t("img", {
                            staticClass: "icon",
                            attrs: {
                                src: e.getTokenUrl(a)
                            }
                        }), t("span", {
                            staticClass: "text"
                        }, [e._v("[" + e._s(e.tokenNames[a].ticker) + "] " + e._s(e.tokenNames[a].name) + " token address")])]), t("a", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !["ren", "sbtc", "hbtc", "3pool"].includes(e.allPools[a]),
                                expression: "!['ren', 'sbtc', 'hbtc', '3pool'].includes(allPools[i])"
                            }],
                            attrs: {
                                href: "https://etherscan.io/address/" + e.depositZaps[a].deposit
                            }
                        }, [t("img", {
                            staticClass: "icon",
                            attrs: {
                                src: e.getTokenUrl(a)
                            }
                        }), e._v(" "), t("span", {
                            staticClass: "text"
                        }, [e._v("deposit address")])]), t("a", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: ["susdv2", "sbtc", "y", "iearn"].includes(e.allPools[a]),
                                expression: "['susdv2', 'sbtc', 'y', 'iearn'].includes(allPools[i])"
                            }],
                            attrs: {
                                href: "https://etherscan.io/address/" + e.rewardsAddresses[e.allPools[a]]
                            }
                        }, [t("img", {
                            staticClass: "icon",
                            attrs: {
                                src: e.getTokenUrl(a)
                            }
                        }), e._v(" "), t("span", {
                            staticClass: "text"
                        }, [e._v("staking rewards address")])]), t("a", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: ["ren"].includes(e.allPools[a]),
                                expression: "['ren'].includes(allPools[i])"
                            }],
                            attrs: {
                                href: "https://etherscan.io/address/0x9fe350DfA5F66bC086243F21A8F0932514316627"
                            }
                        }, [t("img", {
                            staticClass: "icon",
                            attrs: {
                                src: e.getTokenUrl(a)
                            }
                        }), e._v(" "), t("span", {
                            staticClass: "text"
                        }, [e._v("old adapter address")])]), t("a", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: ["ren", "sbtc"].includes(e.allPools[a]),
                                expression: "['ren','sbtc'].includes(allPools[i])"
                            }],
                            attrs: {
                                href: "https://etherscan.io/address/" + e.adapterAddresses[e.allPools[a]]
                            }
                        }, [t("img", {
                            staticClass: "icon",
                            attrs: {
                                src: e.getTokenUrl(a)
                            }
                        }), e._v(" "), t("span", {
                            staticClass: "text"
                        }, [e._v("adapter address")])]), t("a", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: ["y", "iearn"].includes(e.allPools[a]),
                                expression: "['y', 'iearn'].includes(allPools[i])"
                            }],
                            attrs: {
                                href: "https://etherscan.io/token/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e"
                            }
                        }, [t("img", {
                            staticClass: "icon",
                            attrs: {
                                src: "https://www.curve.fi/curveIcons/yfi.png"
                            }
                        }), e._v(" YFI token ")])])
                    }))], 2), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 3 == e.showContracts,
                            expression: "showContracts == 3"
                        }]
                    }, [t("fieldset", [t("legend", [e._v("Curve DAO")]), t("a", {
                        attrs: {
                            href: "https://etherscan.io/address/0xD533a949740bb3306d119CC777fa900bA034cd52"
                        }
                    }, [t("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "text"
                    }, [e._v("CRV token")])]), e._m(1), e._m(2), e._m(3), e._m(4), e._m(5)]), t("fieldset", [t("legend", [e._v("Aragon DAO")]), t("a", {
                        attrs: {
                            href: "https://mainnet.aragon.org/#/dao.curvefi.eth"
                        }
                    }, [t("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://www.curve.fi/curveIcons/aragon.png"
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "text"
                    }, [e._v("Aragon DAO")])]), t("a", {
                        attrs: {
                            href: "https://mainnet.aragon.org/#/curveemergency"
                        }
                    }, [t("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://www.curve.fi/curveIcons/aragon.png"
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "text"
                    }, [e._v("Emergency DAO")])])]), e._l(e.gaugeAddresses, (function(s, a) {
                        return t("fieldset", [t("legend", [e._v(" " + e._s(s.name) + " gauge ")]), t("a", {
                            class: {
                                disabledGauge: "usdt" == s.name
                            },
                            attrs: {
                                href: "https://etherscan.io/address/" + s.address
                            }
                        }, [t("img", {
                            staticClass: "icon",
                            attrs: {
                                src: e.getTokenUrl(a)
                            }
                        }), e._v(" "), t("span", {
                            staticClass: "text"
                        }, [e._v(e._s(s.name) + " Gauge address")])])])
                    }))], 2)])])
                },
                r = [function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("p", {
                        staticClass: "simple-error"
                    }, [e._v(" Do "), t("b", [e._v("not")]), e._v(" send funds directly to the Curve contracts. You need to deposit them! ")])
                }, function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("a", {
                        attrs: {
                            href: "https://etherscan.io/address/0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2"
                        }
                    }, [t("span", {
                        staticClass: "text"
                    }, [e._v("Voting Escrow")])])
                }, function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("a", {
                        attrs: {
                            href: "https://etherscan.io/address/0x575ccd8e2d300e2377b43478339e364000318e2c"
                        }
                    }, [t("span", {
                        staticClass: "text"
                    }, [e._v("Vesting Escrow")])])
                }, function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("a", {
                        attrs: {
                            href: "https://etherscan.io/address/0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB"
                        }
                    }, [t("span", {
                        staticClass: "text"
                    }, [e._v("Gauge Controller")])])
                }, function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("a", {
                        attrs: {
                            href: "https://etherscan.io/address/0xd061D61a4d941c39E5453435B6345Dc261C2fcE0"
                        }
                    }, [t("span", {
                        staticClass: "text"
                    }, [e._v("Minter")])])
                }, function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("a", {
                        attrs: {
                            href: "https://etherscan.io/address/0x6e8f6D1DA6232d5E40b0B8758A0145D6C5123eB7"
                        }
                    }, [t("span", {
                        staticClass: "text"
                    }, [e._v("Pool Proxy")])])
                }],
                n = (t("4de4"), t("caad"), t("d81d"), t("b64b"), t("5245")),
                c = {
                    data: function() {
                        return {
                            allPools: ["compound", "usdt", "y", "busd", "susdv2", "pax", "tbtc", "ren", "sbtc", "hbtc", "3pool", "gusd", "husd", "usdk", "usdn", "linkusd", "musd", "rsv", "dusd"],
                            tokenNames: [{
                                name: "cCurve",
                                ticker: "cCrv"
                            }, {
                                name: "tCurve",
                                ticker: "tCrv"
                            }, {
                                name: "yCurve",
                                ticker: "yCrv"
                            }, {
                                name: "bCurve",
                                ticker: "bCrv"
                            }, {
                                name: "sCurve",
                                ticker: "sCrv"
                            }, {
                                name: "pCurve",
                                ticker: "pCrv"
                            }, {
                                name: "tbtcCurve",
                                ticker: "tbtcCrv"
                            }, {
                                name: "renCurve",
                                ticker: "renCrv"
                            }, {
                                name: "sbtcCurve",
                                ticker: "sbtcCrv"
                            }, {
                                name: "hbtcCurve",
                                ticker: "hbtcCrv"
                            }, {
                                name: "3poolCurve",
                                ticker: "3poolCrv"
                            }, {
                                name: "gusdCurve",
                                ticker: "gusdCrv"
                            }, {
                                name: "husdCurve",
                                ticker: "husdCrv"
                            }, {
                                name: "usdkCurve",
                                ticker: "usdkCrv"
                            }, {
                                name: "usdnCurve",
                                ticker: "usdnCrv"
                            }, {
                                name: "linkusdCurve",
                                ticker: "linkusdCrv"
                            }, {
                                name: "musdCurve",
                                ticker: "musdCrv"
                            }, {
                                name: "rsvCurve",
                                ticker: "rsvCrv"
                            }, {
                                name: "dusdCurve",
                                ticker: "dusdCrv"
                            }],
                            showContracts: 1
                        }
                    },
                    computed: {
                        contractAddresses: function() {
                            return Object.keys(n["g"]).filter((function(e) {
                                return !["y", "susd"].includes(e)
                            })).map((function(e) {
                                return {
                                    swap: n["g"][e].swap_address,
                                    token: n["g"][e].token_address
                                }
                            }))
                        },
                        depositZaps: function() {
                            return Object.keys(n["g"]).filter((function(e) {
                                return !["y", "susd"].includes(e)
                            })).map((function(e) {
                                return {
                                    deposit: n["g"][e].deposit_address,
                                    token: n["g"][e].token_address
                                }
                            }))
                        },
                        publicPath: function() {
                            return "/"
                        },
                        adapterAddresses: function() {
                            return {
                                ren: "0x73aB2Bd10aD10F7174a1AD5AFAe3ce3D991C5047",
                                sbtc: "0xAEade605D01FE9a8e9C4B3AA0130A90d62167029"
                            }
                        },
                        rewardsAddresses: function() {
                            return {
                                susdv2: "0xdcb6a51ea3ca5d3fd898fd6564757c7aaec3ca92",
                                sbtc: "0x13C1542A468319688B89E323fe9A3Be3A90EBb27",
                                y: "0x0001FB050Fe7312791bF6475b96569D83F695C9f"
                            }
                        },
                        gaugeAddresses: function() {
                            return [{
                                name: "Compound",
                                address: "0x7ca5b0a2910B33e9759DC7dDB0413949071D7575"
                            }, {
                                name: "USDT",
                                address: "0xBC89cd85491d81C6AD2954E6d0362Ee29fCa8F53"
                            }, {
                                name: "Y",
                                address: "0xFA712EE4788C042e2B7BB55E6cb8ec569C4530c1"
                            }, {
                                name: "bUSD",
                                address: "0x69Fb7c45726cfE2baDeE8317005d3F94bE838840"
                            }, {
                                name: "susdv2",
                                address: "0xA90996896660DEcC6E997655E065b23788857849"
                            }, {
                                name: "PAX",
                                address: "0x64E3C23bfc40722d3B649844055F1D51c1ac041d"
                            }, {
                                name: "RenBTC",
                                address: "0xB1F2cdeC61db658F091671F5f199635aEF202CAC"
                            }, {
                                name: "sbtc",
                                address: "0x705350c4BcD35c9441419DdD5d2f097d7a55410F"
                            }, {
                                name: "hbtc",
                                address: "0x4c18E409Dc8619bFb6a1cB56D114C3f592E0aE79"
                            }, {
                                name: "3pool",
                                address: "0xbFcF63294aD7105dEa65aA58F8AE5BE2D9d0952A"
                            }, {
                                name: "gusd",
                                address: "0xC5cfaDA84E902aD92DD40194f0883ad49639b023"
                            }, {
                                name: "husd",
                                address: "0x2db0E83599a91b508Ac268a6197b8B14F5e72840"
                            }, {
                                name: "usdk",
                                address: "0xC2b1DF84112619D190193E48148000e3990Bf627"
                            }, {
                                name: "usdn",
                                address: "0xF98450B5602fa59CC66e1379DFfB6FDDc724CfC4"
                            }, {
                                name: "musd",
                                address: "0x5f626c30EC1215f4EdCc9982265E8b1F411D1352"
                            }, {
                                name: "tbtc",
                                address: "0x6828bcF74279eE32f2723eC536c22c51Eed383C6"
                            }, {
                                name: "rsv",
                                address: "0x4dC4A289a8E33600D8bD4cf5F6313E43a37adec7"
                            }, {
                                name: "dusd",
                                address: "0xAEA6c312f4b3E04D752946d329693F7293bC2e6D"
                            }]
                        }
                    },
                    methods: {
                        getTokenUrl: function(e) {
                            var s = "/";
                            return console.log(e, "GET TOKEN URL"), s + "curveIcons/" + this.tokenNames[e].ticker + ".png"
                        }
                    },
                    metaInfo: {
                        title: "Curve.fi :: Contracts",
                        meta: [{
                            property: "og:title",
                            content: "beta.curve.fi/contracts"
                        }, {
                            property: "og:url",
                            content: "https://curve.fi/contracts"
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
                            content: "beta.curve.fi/contracts"
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
                            content: "https://curve.fi/contracts"
                        }, {
                            name: "twitter:image",
                            content: "/curve.png"
                        }]
                    }
                },
                i = c,
                o = (t("a9b7"), t("2877")),
                d = Object(o["a"])(i, a, r, !1, null, "773e0652", null);
            s["default"] = d.exports
        }
    }
]);
//# sourceMappingURL=chunk-0eeb08df.dc55364c.js.map