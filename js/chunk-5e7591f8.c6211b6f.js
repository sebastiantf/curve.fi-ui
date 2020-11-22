(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-5e7591f8", "chunk-9cbb5e92", "chunk-2d0d3a28"], {
        "0481": function(e, s, t) {
            "use strict";
            var a = t("23e7"),
                n = t("a2bf"),
                o = t("7b0b"),
                i = t("50c4"),
                r = t("a691"),
                l = t("65f0");
            a({
                target: "Array",
                proto: !0
            }, {
                flat: function() {
                    var e = arguments.length ? arguments[0] : void 0,
                        s = o(this),
                        t = i(s.length),
                        a = l(s, 0);
                    return a.length = n(a, s, s, t, 0, void 0 === e ? 1 : r(e)), a
                }
            })
        },
        "07ac": function(e, s, t) {
            var a = t("23e7"),
                n = t("6f53").values;
            a({
                target: "Object",
                stat: !0
            }, {
                values: function(e) {
                    return n(e)
                }
            })
        },
        "13b0": function(e, s, t) {
            "use strict";
            var a = this && this.__extends || function() {
                var e = function(s, t) {
                    return e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, s) {
                        e.__proto__ = s
                    } || function(e, s) {
                        for (var t in s) s.hasOwnProperty(t) && (e[t] = s[t])
                    }, e(s, t)
                };
                return function(s, t) {
                    function a() {
                        this.constructor = s
                    }
                    e(s, t), s.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
                }
            }();
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.ClientError = void 0;
            var n = function(e) {
                function s(t, a) {
                    var n = this,
                        o = s.extractMessage(t) + ": " + JSON.stringify({
                            response: t,
                            request: a
                        });
                    return n = e.call(this, o) || this, Object.setPrototypeOf(n, s.prototype), n.response = t, n.request = a, "function" === typeof Error.captureStackTrace && Error.captureStackTrace(n, s), n
                }
                return a(s, e), s.extractMessage = function(e) {
                    try {
                        return e.errors[0].message
                    } catch (s) {
                        return "GraphQL Error (Code: " + e.status + ")"
                    }
                }, s
            }(Error);
            s.ClientError = n
        },
        1478: function(e, s) {
            var t = function(e) {
                function s() {
                    this.fetch = !1, this.DOMException = e.DOMException
                }
                return s.prototype = e, new s
            }("undefined" !== typeof self ? self : this);
            (function(e) {
                (function(s) {
                    var t = {
                        searchParams: "URLSearchParams" in e,
                        iterable: "Symbol" in e && "iterator" in Symbol,
                        blob: "FileReader" in e && "Blob" in e && function() {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in e,
                        arrayBuffer: "ArrayBuffer" in e
                    };

                    function a(e) {
                        return e && DataView.prototype.isPrototypeOf(e)
                    }
                    if (t.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        o = ArrayBuffer.isView || function(e) {
                            return e && n.indexOf(Object.prototype.toString.call(e)) > -1
                        };

                    function i(e) {
                        if ("string" !== typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                        return e.toLowerCase()
                    }

                    function r(e) {
                        return "string" !== typeof e && (e = String(e)), e
                    }

                    function l(e) {
                        var s = {
                            next: function() {
                                var s = e.shift();
                                return {
                                    done: void 0 === s,
                                    value: s
                                }
                            }
                        };
                        return t.iterable && (s[Symbol.iterator] = function() {
                            return s
                        }), s
                    }

                    function c(e) {
                        this.map = {}, e instanceof c ? e.forEach((function(e, s) {
                            this.append(s, e)
                        }), this) : Array.isArray(e) ? e.forEach((function(e) {
                            this.append(e[0], e[1])
                        }), this) : e && Object.getOwnPropertyNames(e).forEach((function(s) {
                            this.append(s, e[s])
                        }), this)
                    }

                    function u(e) {
                        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        e.bodyUsed = !0
                    }

                    function d(e) {
                        return new Promise((function(s, t) {
                            e.onload = function() {
                                s(e.result)
                            }, e.onerror = function() {
                                t(e.error)
                            }
                        }))
                    }

                    function p(e) {
                        var s = new FileReader,
                            t = d(s);
                        return s.readAsArrayBuffer(e), t
                    }

                    function v(e) {
                        var s = new FileReader,
                            t = d(s);
                        return s.readAsText(e), t
                    }

                    function m(e) {
                        for (var s = new Uint8Array(e), t = new Array(s.length), a = 0; a < s.length; a++) t[a] = String.fromCharCode(s[a]);
                        return t.join("")
                    }

                    function f(e) {
                        if (e.slice) return e.slice(0);
                        var s = new Uint8Array(e.byteLength);
                        return s.set(new Uint8Array(e)), s.buffer
                    }

                    function b() {
                        return this.bodyUsed = !1, this._initBody = function(e) {
                            this._bodyInit = e, e ? "string" === typeof e ? this._bodyText = e : t.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : t.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : t.arrayBuffer && t.blob && a(e) ? (this._bodyArrayBuffer = f(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || o(e)) ? this._bodyArrayBuffer = f(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, t.blob && (this.blob = function() {
                            var e = u(this);
                            if (e) return e;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p)
                        }), this.text = function() {
                            var e = u(this);
                            if (e) return e;
                            if (this._bodyBlob) return v(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(m(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, t.formData && (this.formData = function() {
                            return this.text().then(w)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    c.prototype.append = function(e, s) {
                        e = i(e), s = r(s);
                        var t = this.map[e];
                        this.map[e] = t ? t + ", " + s : s
                    }, c.prototype["delete"] = function(e) {
                        delete this.map[i(e)]
                    }, c.prototype.get = function(e) {
                        return e = i(e), this.has(e) ? this.map[e] : null
                    }, c.prototype.has = function(e) {
                        return this.map.hasOwnProperty(i(e))
                    }, c.prototype.set = function(e, s) {
                        this.map[i(e)] = r(s)
                    }, c.prototype.forEach = function(e, s) {
                        for (var t in this.map) this.map.hasOwnProperty(t) && e.call(s, this.map[t], t, this)
                    }, c.prototype.keys = function() {
                        var e = [];
                        return this.forEach((function(s, t) {
                            e.push(t)
                        })), l(e)
                    }, c.prototype.values = function() {
                        var e = [];
                        return this.forEach((function(s) {
                            e.push(s)
                        })), l(e)
                    }, c.prototype.entries = function() {
                        var e = [];
                        return this.forEach((function(s, t) {
                            e.push([t, s])
                        })), l(e)
                    }, t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
                    var h = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function _(e) {
                        var s = e.toUpperCase();
                        return h.indexOf(s) > -1 ? s : e
                    }

                    function C(e, s) {
                        s = s || {};
                        var t = s.body;
                        if (e instanceof C) {
                            if (e.bodyUsed) throw new TypeError("Already read");
                            this.url = e.url, this.credentials = e.credentials, s.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, t || null == e._bodyInit || (t = e._bodyInit, e.bodyUsed = !0)
                        } else this.url = String(e);
                        if (this.credentials = s.credentials || this.credentials || "same-origin", !s.headers && this.headers || (this.headers = new c(s.headers)), this.method = _(s.method || this.method || "GET"), this.mode = s.mode || this.mode || null, this.signal = s.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && t) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(t)
                    }

                    function w(e) {
                        var s = new FormData;
                        return e.trim().split("&").forEach((function(e) {
                            if (e) {
                                var t = e.split("="),
                                    a = t.shift().replace(/\+/g, " "),
                                    n = t.join("=").replace(/\+/g, " ");
                                s.append(decodeURIComponent(a), decodeURIComponent(n))
                            }
                        })), s
                    }

                    function y(e) {
                        var s = new c,
                            t = e.replace(/\r?\n[\t ]+/g, " ");
                        return t.split(/\r?\n/).forEach((function(e) {
                            var t = e.split(":"),
                                a = t.shift().trim();
                            if (a) {
                                var n = t.join(":").trim();
                                s.append(a, n)
                            }
                        })), s
                    }

                    function g(e, s) {
                        s || (s = {}), this.type = "default", this.status = void 0 === s.status ? 200 : s.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in s ? s.statusText : "OK", this.headers = new c(s.headers), this.url = s.url || "", this._initBody(e)
                    }
                    C.prototype.clone = function() {
                        return new C(this, {
                            body: this._bodyInit
                        })
                    }, b.call(C.prototype), b.call(g.prototype), g.prototype.clone = function() {
                        return new g(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new c(this.headers),
                            url: this.url
                        })
                    }, g.error = function() {
                        var e = new g(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var x = [301, 302, 303, 307, 308];
                    g.redirect = function(e, s) {
                        if (-1 === x.indexOf(s)) throw new RangeError("Invalid status code");
                        return new g(null, {
                            status: s,
                            headers: {
                                location: e
                            }
                        })
                    }, s.DOMException = e.DOMException;
                    try {
                        new s.DOMException
                    } catch (A) {
                        s.DOMException = function(e, s) {
                            this.message = e, this.name = s;
                            var t = Error(e);
                            this.stack = t.stack
                        }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException
                    }

                    function P(e, a) {
                        return new Promise((function(n, o) {
                            var i = new C(e, a);
                            if (i.signal && i.signal.aborted) return o(new s.DOMException("Aborted", "AbortError"));
                            var r = new XMLHttpRequest;

                            function l() {
                                r.abort()
                            }
                            r.onload = function() {
                                var e = {
                                    status: r.status,
                                    statusText: r.statusText,
                                    headers: y(r.getAllResponseHeaders() || "")
                                };
                                e.url = "responseURL" in r ? r.responseURL : e.headers.get("X-Request-URL");
                                var s = "response" in r ? r.response : r.responseText;
                                n(new g(s, e))
                            }, r.onerror = function() {
                                o(new TypeError("Network request failed"))
                            }, r.ontimeout = function() {
                                o(new TypeError("Network request failed"))
                            }, r.onabort = function() {
                                o(new s.DOMException("Aborted", "AbortError"))
                            }, r.open(i.method, i.url, !0), "include" === i.credentials ? r.withCredentials = !0 : "omit" === i.credentials && (r.withCredentials = !1), "responseType" in r && t.blob && (r.responseType = "blob"), i.headers.forEach((function(e, s) {
                                r.setRequestHeader(s, e)
                            })), i.signal && (i.signal.addEventListener("abort", l), r.onreadystatechange = function() {
                                4 === r.readyState && i.signal.removeEventListener("abort", l)
                            }), r.send("undefined" === typeof i._bodyInit ? null : i._bodyInit)
                        }))
                    }
                    P.polyfill = !0, e.fetch || (e.fetch = P, e.Headers = c, e.Request = C, e.Response = g), s.Headers = c, s.Request = C, s.Response = g, s.fetch = P
                })({})
            })(t), delete t.fetch.polyfill, s = t.fetch, s.default = t.fetch, s.fetch = t.fetch, s.Headers = t.Headers, s.Request = t.Request, s.Response = t.Response, e.exports = s
        },
        "2b8d": function(e, s, t) {},
        "2bd5": function(e, s, t) {
            "use strict";
            t.d(s, "b", (function() {
                return r
            })), t.d(s, "a", (function() {
                return l
            }));
            t("caad"), t("4fad"), t("2ca0");
            var a, n = t("3835"),
                o = t("ade3"),
                i = t("2b0e"),
                r = i["a"].observable((a = {
                    address: null,
                    sdk: null,
                    transactions: []
                }, Object(o["a"])(a, "address", null), Object(o["a"])(a, "default_account", null), Object(o["a"])(a, "minersFee", 17e3), Object(o["a"])(a, "minersLockFee", 0), Object(o["a"])(a, "minersReleaseFee", 0), Object(o["a"])(a, "mintFee", 0), Object(o["a"])(a, "burnFee", 0), Object(o["a"])(a, "confirmations", 6), Object(o["a"])(a, "space", null), Object(o["a"])(a, "box", null), Object(o["a"])(a, "showModal", !1), Object(o["a"])(a, "showModal1", !1), Object(o["a"])(a, "showModalRecover", !1), Object(o["a"])(a, "msg_signature", null), Object(o["a"])(a, "password", null), Object(o["a"])(a, "aes_key", null), Object(o["a"])(a, "fireUser", null), Object(o["a"])(a, "loaded", !1), Object(o["a"])(a, "adapterContract", null), Object(o["a"])(a, "recover", !1), a));

            function l() {
                for (var e = 0, s = 0, t = Object.entries(localStorage); s < t.length; s++) {
                    var a = Object(n["a"])(t[s], 2),
                        o = a[0],
                        i = a[1];
                    o.startsWith("curvebtc_") && (i = JSON.parse(i), i.removed || ([0, 3].includes(i.type) && ![14, 15, 17].includes(i.state) && e++, 1 == i.type && 65 != i.state && e++))
                }
                return e
            }
        },
        "2ca0": function(e, s, t) {
            "use strict";
            var a = t("23e7"),
                n = t("06cf").f,
                o = t("50c4"),
                i = t("5a34"),
                r = t("1d80"),
                l = t("ab13"),
                c = t("c430"),
                u = "".startsWith,
                d = Math.min,
                p = l("startsWith"),
                v = !c && !p && !! function() {
                    var e = n(String.prototype, "startsWith");
                    return e && !e.writable
                }();
            a({
                target: "String",
                proto: !0,
                forced: !v && !p
            }, {
                startsWith: function(e) {
                    var s = String(r(this));
                    i(e);
                    var t = o(d(arguments.length > 1 ? arguments[1] : void 0, s.length)),
                        a = String(e);
                    return u ? u.call(s, a, t) : s.slice(t, t + a.length) === a
                }
            })
        },
        "3c57": function(e, s, t) {},
        4069: function(e, s, t) {
            var a = t("44d2");
            a("flat")
        },
        "5db7": function(e, s, t) {
            "use strict";
            var a = t("23e7"),
                n = t("a2bf"),
                o = t("7b0b"),
                i = t("50c4"),
                r = t("1c0b"),
                l = t("65f0");
            a({
                target: "Array",
                proto: !0
            }, {
                flatMap: function(e) {
                    var s, t = o(this),
                        a = i(t.length);
                    return r(e), s = l(t, 0), s.length = n(s, t, t, a, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), s
                }
            })
        },
        "5e35": function(e, s, t) {
            "use strict";
            t.d(s, "b", (function() {
                return o
            })), t.d(s, "a", (function() {
                return i
            }));
            t("d3b7"), t("96cf");
            var a = t("1da1"),
                n = t("2fa3"),
                o = {
                    btcPrice: null
                };

            function i() {
                return r.apply(this, arguments)
            }

            function r() {
                return r = Object(a["a"])(regeneratorRuntime.mark((function e() {
                    var s, t;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n["q"](fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"), 300);
                            case 2:
                                return s = e.sent, e.next = 5, s.json();
                            case 5:
                                return t = e.sent, o.btcPrice = t.bitcoin.usd, e.abrupt("return", t.bitcoin.usd);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), r.apply(this, arguments)
            }
        },
        "6eaa": function(e, s, t) {
            "use strict";
            var a = function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("div", {
                        staticClass: "window white"
                    }, [t("fieldset", [t("legend", [e._v("Total pool deposits and daily volume")]), t("div", {
                        class: {
                            "loading line": !e.total
                        },
                        attrs: {
                            id: "total-balances"
                        }
                    }, [e._v(" Deposits: "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.total,
                            expression: "total"
                        }]
                    }, [e._v(e._s(e._f("formatNumber")(e.total)) + "$")])]), t("div", {
                        class: {
                            "loading line": e.volume < 0
                        }
                    }, [e._v(" Daily volume: "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volume >= 0,
                            expression: "volume >= 0"
                        }]
                    }, [e._v(e._s(e._f("formatNumber")(e.volume, 0)) + "$")])]), e._t("default")], 2)])
                },
                n = [],
                o = (t("96cf"), t("1da1")),
                i = (t("6314"), t("5245"), t("2fa3"), t("901e"), t("a4e2")),
                r = (t("51bf"), t("5e35"), t("b44d")),
                l = {
                    props: {
                        totalVolume: {
                            default: void 0
                        }
                    },
                    data: function() {
                        return {
                            total: ""
                        }
                    },
                    computed: {
                        volume: function() {
                            return void 0 !== this.totalVolume ? this.totalVolume : i["g"]()
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function s() {
                            return regeneratorRuntime.wrap((function(s) {
                                while (1) switch (s.prev = s.next) {
                                    case 0:
                                        e.totalBalances(), void 0 === e.totalVolume && e.dailyVolume();
                                    case 2:
                                    case "end":
                                        return s.stop()
                                }
                            }), s)
                        })))()
                    },
                    methods: {
                        totalBalances: function() {
                            var e = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function s() {
                                var t;
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            return s.next = 2, r["b"]();
                                        case 2:
                                            t = s.sent, e.total = t;
                                        case 4:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            })))()
                        },
                        dailyVolume: function() {
                            return Object(o["a"])(regeneratorRuntime.mark((function e() {
                                var s;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return s = ["compound", "usdt", "y", "busd", "susd", "pax", "tbtc", "ren", "sbtc", "hbtc", "3pool"], e.next = 3, i["e"](s);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                },
                c = l,
                u = (t("e6cc"), t("2877")),
                d = Object(u["a"])(c, a, n, !1, null, "304cc845", null);
            s["a"] = d.exports
        },
        "73d9": function(e, s, t) {
            var a = t("44d2");
            a("flatMap")
        },
        7506: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, "print", (function() {
                return A
            }));
            var a = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0,
                n = a;

            function o(e) {
                return o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }
            var i = 10,
                r = 2;

            function l(e) {
                return c(e, [])
            }

            function c(e, s) {
                switch (o(e)) {
                    case "string":
                        return JSON.stringify(e);
                    case "function":
                        return e.name ? "[function ".concat(e.name, "]") : "[function]";
                    case "object":
                        return null === e ? "null" : u(e, s);
                    default:
                        return String(e)
                }
            }

            function u(e, s) {
                if (-1 !== s.indexOf(e)) return "[Circular]";
                var t = [].concat(s, [e]),
                    a = v(e);
                if (void 0 !== a) {
                    var n = a.call(e);
                    if (n !== e) return "string" === typeof n ? n : c(n, t)
                } else if (Array.isArray(e)) return p(e, t);
                return d(e, t)
            }

            function d(e, s) {
                var t = Object.keys(e);
                if (0 === t.length) return "{}";
                if (s.length > r) return "[" + m(e) + "]";
                var a = t.map((function(t) {
                    var a = c(e[t], s);
                    return t + ": " + a
                }));
                return "{ " + a.join(", ") + " }"
            }

            function p(e, s) {
                if (0 === e.length) return "[]";
                if (s.length > r) return "[Array]";
                for (var t = Math.min(i, e.length), a = e.length - t, n = [], o = 0; o < t; ++o) n.push(c(e[o], s));
                return 1 === a ? n.push("... 1 more item") : a > 1 && n.push("... ".concat(a, " more items")), "[" + n.join(", ") + "]"
            }

            function v(e) {
                var s = e[String(n)];
                return "function" === typeof s ? s : "function" === typeof e.inspect ? e.inspect : void 0
            }

            function m(e) {
                var s = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                if ("Object" === s && "function" === typeof e.constructor) {
                    var t = e.constructor.name;
                    if ("string" === typeof t && "" !== t) return t
                }
                return s
            }

            function f(e, s) {
                var t = Boolean(e);
                if (!t) throw new Error(null != s ? s : "Unexpected invariant triggered.")
            }

            function b(e) {
                var s = e.prototype.toJSON;
                "function" === typeof s || f(0), e.prototype.inspect = s, n && (e.prototype[n] = s)
            }
            var h = function() {
                function e(e, s, t) {
                    this.start = e.start, this.end = s.end, this.startToken = e, this.endToken = s, this.source = t
                }
                var s = e.prototype;
                return s.toJSON = function() {
                    return {
                        start: this.start,
                        end: this.end
                    }
                }, e
            }();
            b(h);
            var _ = function() {
                function e(e, s, t, a, n, o, i) {
                    this.kind = e, this.start = s, this.end = t, this.line = a, this.column = n, this.value = i, this.prev = o, this.next = null
                }
                var s = e.prototype;
                return s.toJSON = function() {
                    return {
                        kind: this.kind,
                        value: this.value,
                        line: this.line,
                        column: this.column
                    }
                }, e
            }();

            function C(e) {
                return null != e && "string" === typeof e.kind
            }
            b(_);
            var w = {
                    Name: [],
                    Document: ["definitions"],
                    OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
                    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
                    Variable: ["name"],
                    SelectionSet: ["selections"],
                    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
                    Argument: ["name", "value"],
                    FragmentSpread: ["name", "directives"],
                    InlineFragment: ["typeCondition", "directives", "selectionSet"],
                    FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
                    IntValue: [],
                    FloatValue: [],
                    StringValue: [],
                    BooleanValue: [],
                    NullValue: [],
                    EnumValue: [],
                    ListValue: ["values"],
                    ObjectValue: ["fields"],
                    ObjectField: ["name", "value"],
                    Directive: ["name", "arguments"],
                    NamedType: ["name"],
                    ListType: ["type"],
                    NonNullType: ["type"],
                    SchemaDefinition: ["description", "directives", "operationTypes"],
                    OperationTypeDefinition: ["type"],
                    ScalarTypeDefinition: ["description", "name", "directives"],
                    ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
                    InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
                    InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    UnionTypeDefinition: ["description", "name", "directives", "types"],
                    EnumTypeDefinition: ["description", "name", "directives", "values"],
                    EnumValueDefinition: ["description", "name", "directives"],
                    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
                    DirectiveDefinition: ["description", "name", "arguments", "locations"],
                    SchemaExtension: ["directives", "operationTypes"],
                    ScalarTypeExtension: ["name", "directives"],
                    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
                    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
                    UnionTypeExtension: ["name", "directives", "types"],
                    EnumTypeExtension: ["name", "directives", "values"],
                    InputObjectTypeExtension: ["name", "directives", "fields"]
                },
                y = Object.freeze({});

            function g(e, s) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w,
                    a = void 0,
                    n = Array.isArray(e),
                    o = [e],
                    i = -1,
                    r = [],
                    c = void 0,
                    u = void 0,
                    d = void 0,
                    p = [],
                    v = [],
                    m = e;
                do {
                    i++;
                    var f = i === o.length,
                        b = f && 0 !== r.length;
                    if (f) {
                        if (u = 0 === v.length ? void 0 : p[p.length - 1], c = d, d = v.pop(), b) {
                            if (n) c = c.slice();
                            else {
                                for (var h = {}, _ = 0, g = Object.keys(c); _ < g.length; _++) {
                                    var P = g[_];
                                    h[P] = c[P]
                                }
                                c = h
                            }
                            for (var A = 0, R = 0; R < r.length; R++) {
                                var V = r[R][0],
                                    Y = r[R][1];
                                n && (V -= A), n && null === Y ? (c.splice(V, 1), A++) : c[V] = Y
                            }
                        }
                        i = a.index, o = a.keys, r = a.edits, n = a.inArray, a = a.prev
                    } else {
                        if (u = d ? n ? i : o[i] : void 0, c = d ? d[u] : m, null === c || void 0 === c) continue;
                        d && p.push(u)
                    }
                    var k, F = void 0;
                    if (!Array.isArray(c)) {
                        if (!C(c)) throw new Error("Invalid AST Node: ".concat(l(c), "."));
                        var D = x(s, c.kind, f);
                        if (D) {
                            if (F = D.call(s, c, u, d, p, v), F === y) break;
                            if (!1 === F) {
                                if (!f) {
                                    p.pop();
                                    continue
                                }
                            } else if (void 0 !== F && (r.push([u, F]), !f)) {
                                if (!C(F)) {
                                    p.pop();
                                    continue
                                }
                                c = F
                            }
                        }
                    }
                    if (void 0 === F && b && r.push([u, c]), f) p.pop();
                    else a = {
                        inArray: n,
                        index: i,
                        keys: o,
                        edits: r,
                        prev: a
                    }, n = Array.isArray(c), o = n ? c : null !== (k = t[c.kind]) && void 0 !== k ? k : [], i = -1, r = [], d && v.push(d), d = c
                } while (void 0 !== a);
                return 0 !== r.length && (m = r[r.length - 1][1]), m
            }

            function x(e, s, t) {
                var a = e[s];
                if (a) {
                    if (!t && "function" === typeof a) return a;
                    var n = t ? a.leave : a.enter;
                    if ("function" === typeof n) return n
                } else {
                    var o = t ? e.leave : e.enter;
                    if (o) {
                        if ("function" === typeof o) return o;
                        var i = o[s];
                        if ("function" === typeof i) return i
                    }
                }
            }

            function P(e) {
                var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = -1 === e.indexOf("\n"),
                    n = " " === e[0] || "\t" === e[0],
                    o = '"' === e[e.length - 1],
                    i = "\\" === e[e.length - 1],
                    r = !a || o || i || t,
                    l = "";
                return !r || a && n || (l += "\n" + s), l += s ? e.replace(/\n/g, "\n" + s) : e, r && (l += "\n"), '"""' + l.replace(/"""/g, '\\"""') + '"""'
            }

            function A(e) {
                return g(e, {
                    leave: R
                })
            }
            var R = {
                Name: function(e) {
                    return e.value
                },
                Variable: function(e) {
                    return "$" + e.name
                },
                Document: function(e) {
                    return Y(e.definitions, "\n\n") + "\n"
                },
                OperationDefinition: function(e) {
                    var s = e.operation,
                        t = e.name,
                        a = F("(", Y(e.variableDefinitions, ", "), ")"),
                        n = Y(e.directives, " "),
                        o = e.selectionSet;
                    return t || n || a || "query" !== s ? Y([s, Y([t, a]), n, o], " ") : o
                },
                VariableDefinition: function(e) {
                    var s = e.variable,
                        t = e.type,
                        a = e.defaultValue,
                        n = e.directives;
                    return s + ": " + t + F(" = ", a) + F(" ", Y(n, " "))
                },
                SelectionSet: function(e) {
                    var s = e.selections;
                    return k(s)
                },
                Field: function(e) {
                    var s = e.alias,
                        t = e.name,
                        a = e.arguments,
                        n = e.directives,
                        o = e.selectionSet;
                    return Y([F("", s, ": ") + t + F("(", Y(a, ", "), ")"), Y(n, " "), o], " ")
                },
                Argument: function(e) {
                    var s = e.name,
                        t = e.value;
                    return s + ": " + t
                },
                FragmentSpread: function(e) {
                    var s = e.name,
                        t = e.directives;
                    return "..." + s + F(" ", Y(t, " "))
                },
                InlineFragment: function(e) {
                    var s = e.typeCondition,
                        t = e.directives,
                        a = e.selectionSet;
                    return Y(["...", F("on ", s), Y(t, " "), a], " ")
                },
                FragmentDefinition: function(e) {
                    var s = e.name,
                        t = e.typeCondition,
                        a = e.variableDefinitions,
                        n = e.directives,
                        o = e.selectionSet;
                    return "fragment ".concat(s).concat(F("(", Y(a, ", "), ")"), " ") + "on ".concat(t, " ").concat(F("", Y(n, " "), " ")) + o
                },
                IntValue: function(e) {
                    var s = e.value;
                    return s
                },
                FloatValue: function(e) {
                    var s = e.value;
                    return s
                },
                StringValue: function(e, s) {
                    var t = e.value,
                        a = e.block;
                    return a ? P(t, "description" === s ? "" : "  ") : JSON.stringify(t)
                },
                BooleanValue: function(e) {
                    var s = e.value;
                    return s ? "true" : "false"
                },
                NullValue: function() {
                    return "null"
                },
                EnumValue: function(e) {
                    var s = e.value;
                    return s
                },
                ListValue: function(e) {
                    var s = e.values;
                    return "[" + Y(s, ", ") + "]"
                },
                ObjectValue: function(e) {
                    var s = e.fields;
                    return "{" + Y(s, ", ") + "}"
                },
                ObjectField: function(e) {
                    var s = e.name,
                        t = e.value;
                    return s + ": " + t
                },
                Directive: function(e) {
                    var s = e.name,
                        t = e.arguments;
                    return "@" + s + F("(", Y(t, ", "), ")")
                },
                NamedType: function(e) {
                    var s = e.name;
                    return s
                },
                ListType: function(e) {
                    var s = e.type;
                    return "[" + s + "]"
                },
                NonNullType: function(e) {
                    var s = e.type;
                    return s + "!"
                },
                SchemaDefinition: V((function(e) {
                    var s = e.directives,
                        t = e.operationTypes;
                    return Y(["schema", Y(s, " "), k(t)], " ")
                })),
                OperationTypeDefinition: function(e) {
                    var s = e.operation,
                        t = e.type;
                    return s + ": " + t
                },
                ScalarTypeDefinition: V((function(e) {
                    var s = e.name,
                        t = e.directives;
                    return Y(["scalar", s, Y(t, " ")], " ")
                })),
                ObjectTypeDefinition: V((function(e) {
                    var s = e.name,
                        t = e.interfaces,
                        a = e.directives,
                        n = e.fields;
                    return Y(["type", s, F("implements ", Y(t, " & ")), Y(a, " "), k(n)], " ")
                })),
                FieldDefinition: V((function(e) {
                    var s = e.name,
                        t = e.arguments,
                        a = e.type,
                        n = e.directives;
                    return s + (O(t) ? F("(\n", D(Y(t, "\n")), "\n)") : F("(", Y(t, ", "), ")")) + ": " + a + F(" ", Y(n, " "))
                })),
                InputValueDefinition: V((function(e) {
                    var s = e.name,
                        t = e.type,
                        a = e.defaultValue,
                        n = e.directives;
                    return Y([s + ": " + t, F("= ", a), Y(n, " ")], " ")
                })),
                InterfaceTypeDefinition: V((function(e) {
                    var s = e.name,
                        t = e.interfaces,
                        a = e.directives,
                        n = e.fields;
                    return Y(["interface", s, F("implements ", Y(t, " & ")), Y(a, " "), k(n)], " ")
                })),
                UnionTypeDefinition: V((function(e) {
                    var s = e.name,
                        t = e.directives,
                        a = e.types;
                    return Y(["union", s, Y(t, " "), a && 0 !== a.length ? "= " + Y(a, " | ") : ""], " ")
                })),
                EnumTypeDefinition: V((function(e) {
                    var s = e.name,
                        t = e.directives,
                        a = e.values;
                    return Y(["enum", s, Y(t, " "), k(a)], " ")
                })),
                EnumValueDefinition: V((function(e) {
                    var s = e.name,
                        t = e.directives;
                    return Y([s, Y(t, " ")], " ")
                })),
                InputObjectTypeDefinition: V((function(e) {
                    var s = e.name,
                        t = e.directives,
                        a = e.fields;
                    return Y(["input", s, Y(t, " "), k(a)], " ")
                })),
                DirectiveDefinition: V((function(e) {
                    var s = e.name,
                        t = e.arguments,
                        a = e.repeatable,
                        n = e.locations;
                    return "directive @" + s + (O(t) ? F("(\n", D(Y(t, "\n")), "\n)") : F("(", Y(t, ", "), ")")) + (a ? " repeatable" : "") + " on " + Y(n, " | ")
                })),
                SchemaExtension: function(e) {
                    var s = e.directives,
                        t = e.operationTypes;
                    return Y(["extend schema", Y(s, " "), k(t)], " ")
                },
                ScalarTypeExtension: function(e) {
                    var s = e.name,
                        t = e.directives;
                    return Y(["extend scalar", s, Y(t, " ")], " ")
                },
                ObjectTypeExtension: function(e) {
                    var s = e.name,
                        t = e.interfaces,
                        a = e.directives,
                        n = e.fields;
                    return Y(["extend type", s, F("implements ", Y(t, " & ")), Y(a, " "), k(n)], " ")
                },
                InterfaceTypeExtension: function(e) {
                    var s = e.name,
                        t = e.interfaces,
                        a = e.directives,
                        n = e.fields;
                    return Y(["extend interface", s, F("implements ", Y(t, " & ")), Y(a, " "), k(n)], " ")
                },
                UnionTypeExtension: function(e) {
                    var s = e.name,
                        t = e.directives,
                        a = e.types;
                    return Y(["extend union", s, Y(t, " "), a && 0 !== a.length ? "= " + Y(a, " | ") : ""], " ")
                },
                EnumTypeExtension: function(e) {
                    var s = e.name,
                        t = e.directives,
                        a = e.values;
                    return Y(["extend enum", s, Y(t, " "), k(a)], " ")
                },
                InputObjectTypeExtension: function(e) {
                    var s = e.name,
                        t = e.directives,
                        a = e.fields;
                    return Y(["extend input", s, Y(t, " "), k(a)], " ")
                }
            };

            function V(e) {
                return function(s) {
                    return Y([s.description, e(s)], "\n")
                }
            }

            function Y(e) {
                var s, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return null !== (s = null === e || void 0 === e ? void 0 : e.filter((function(e) {
                    return e
                })).join(t)) && void 0 !== s ? s : ""
            }

            function k(e) {
                return e && 0 !== e.length ? "{\n" + D(Y(e, "\n")) + "\n}" : ""
            }

            function F(e, s) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return s ? e + s + t : ""
            }

            function D(e) {
                return e && "  " + e.replace(/\n/g, "\n  ")
            }

            function B(e) {
                return -1 !== e.indexOf("\n")
            }

            function O(e) {
                return e && e.some(B)
            }
        },
        "813b": function(e, s, t) {
            "use strict";
            var a = t("2b8d"),
                n = t.n(a);
            n.a
        },
        8591: function(e, s, t) {
            "use strict";
            var a = t("a9bc"),
                n = t.n(a);
            n.a
        },
        a2bf: function(e, s, t) {
            "use strict";
            var a = t("e8b5"),
                n = t("50c4"),
                o = t("0366"),
                i = function(e, s, t, r, l, c, u, d) {
                    var p, v = l,
                        m = 0,
                        f = !!u && o(u, d, 3);
                    while (m < r) {
                        if (m in t) {
                            if (p = f ? f(t[m], m, s) : t[m], c > 0 && a(p)) v = i(e, s, p, n(p.length), v, c - 1) - 1;
                            else {
                                if (v >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                                e[v] = p
                            }
                            v++
                        }
                        m++
                    }
                    return v
                };
            e.exports = i
        },
        a468: function(e, s, t) {
            "use strict";
            t.r(s);
            var a = function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("div", {
                        staticClass: "tradeview window white"
                    }, [t("fieldset", {
                        attrs: {
                            id: "onesplit"
                        }
                    }, [t("legend", {
                        staticClass: "text-center"
                    }, [e._v("Swap using all Curve pools")]), t("div", {
                        staticClass: "aligncontainer"
                    }, [t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.contactUs,
                            expression: "contactUs"
                        }],
                        staticClass: "info-message gentle-message pulseinfo"
                    }, [e._v(" We believe there was an issue with your swap. Please contact us on "), t("a", {
                        attrs: {
                            href: "https://t.me/curvefi"
                        }
                    }, [e._v("Telegram")]), e._v(" or "), t("a", {
                        attrs: {
                            href: "https://twitter.com/CurveFinance"
                        }
                    }, [e._v("Twitter")]), e._v(". ")]), t("div", {
                        staticClass: "swapBTC-wrapper"
                    }, [t("div", {
                        staticClass: "swapBTC-container info-message gentle-message"
                    }, [t("router-link", {
                        attrs: {
                            to: "/ren/native"
                        }
                    }, [e._v(" Swap "), t("img", {
                        staticClass: "token-icon vamiddle",
                        attrs: {
                            src: "https://www.curve.fi/tokens/btc.svg"
                        }
                    }), e._v(" ren pool "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.hasIncomplete > 0,
                            expression: "hasIncomplete > 0"
                        }]
                    }, [e._v(" (" + e._s(e.hasIncomplete) + " incomplete tx) ")])]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.loading,
                            expression: "loading"
                        }],
                        staticClass: "loading line"
                    })], 1), t("div", {
                        staticClass: "swapBTC-container info-message gentle-message second"
                    }, [t("router-link", {
                        attrs: {
                            to: "/sbtc/native"
                        }
                    }, [e._v(" Swap "), t("img", {
                        staticClass: "token-icon vamiddle",
                        attrs: {
                            src: "https://www.curve.fi/tokens/btc.svg"
                        }
                    }), e._v(" sbtc pool "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.hasIncomplete > 0,
                            expression: "hasIncomplete > 0"
                        }]
                    }, [e._v(" (" + e._s(e.hasIncomplete) + " incomplete tx) ")])])], 1)])]), t("one-split")], 1)])
                },
                n = [],
                o = (t("caad"), t("d81d"), t("d3b7"), t("2532"), t("3ca3"), t("ddb0"), t("96cf"), t("1da1")),
                i = t("dcde"),
                r = t("51bf"),
                l = t("2bd5"),
                c = (t("d899"), function() {
                    return {
                        component: Promise.all([t.e("chunk-722bfaca"), t.e("chunk-a8c0c812"), t.e("chunk-42381ebe"), t.e("chunk-2d0d3a28")]).then(t.bind(null, "44bd")),
                        loading: i["a"],
                        delay: 0
                    }
                }),
                u = {
                    data: function() {
                        return {
                            unwatch: null,
                            loading: !1
                        }
                    },
                    computed: {
                        currentPool: function() {
                            return r["h"].currentPool()
                        },
                        hasIncomplete: function() {
                            return l["a"]()
                        },
                        publicPath: function() {
                            return "/"
                        },
                        default_account: function() {
                            return r["h"].default_account()
                        },
                        contactUs: function() {
                            return ["0x0f87dd03a74e6a48d56661d96f44880c79b9d795"].map((function(e) {
                                return e.toLowerCase()
                            })).includes(this.default_account.toLowerCase())
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function s() {
                            return regeneratorRuntime.wrap((function(s) {
                                while (1) switch (s.prev = s.next) {
                                    case 0:
                                        e.unwatch = e.$watch((function() {
                                            return r["f"].initializedContracts
                                        }), function() {
                                            var s = Object(o["a"])(regeneratorRuntime.mark((function s(t) {
                                                return regeneratorRuntime.wrap((function(s) {
                                                    while (1) switch (s.prev = s.next) {
                                                        case 0:
                                                            Promise.all(["compound", "usdt", "iearn", "busd", "susdv2", "pax", "ren", "sbtc", "hbtc", "3pool", "gusd", "husd", "usdk", "usdn", "linkusd", "musd", "rsv", "tbtc", "dusd"].map((function(e) {
                                                                return Object(r["j"])(r["f"].contracts[e])
                                                            }))), e.unwatch();
                                                        case 2:
                                                        case "end":
                                                            return s.stop()
                                                    }
                                                }), s)
                                            })));
                                            return function(e) {
                                                return s.apply(this, arguments)
                                            }
                                        }());
                                    case 1:
                                    case "end":
                                        return s.stop()
                                }
                            }), s)
                        })))()
                    },
                    methods: {
                        loaded: function() {
                            "SwapNative" == this.swapComponent && (this.loading = !1)
                        }
                    },
                    components: {
                        OneSplit: i["a"],
                        SwapNative: c
                    }
                },
                d = u,
                p = (t("8591"), t("2877")),
                v = Object(p["a"])(d, a, n, !1, null, "7b942606", null);
            s["default"] = v.exports
        },
        a4e2: function(e, s, t) {
            "use strict";
            t.d(s, "f", (function() {
                return v
            })), t.d(s, "b", (function() {
                return m
            })), t.d(s, "a", (function() {
                return f
            })), t.d(s, "e", (function() {
                return h
            })), t.d(s, "c", (function() {
                return C
            })), t.d(s, "d", (function() {
                return y
            })), t.d(s, "g", (function() {
                return x
            }));
            t("99af"), t("4de4"), t("7db0"), t("caad"), t("d81d"), t("13d5"), t("fb6a"), t("4fad"), t("c1f9"), t("d3b7"), t("07ac"), t("ac1f"), t("2532"), t("3ca3"), t("1276"), t("ddb0");
            var a = t("b85c"),
                n = (t("96cf"), t("1da1")),
                o = t("3835"),
                i = t("5530"),
                r = t("ade3"),
                l = t("2b0e"),
                c = t("5245"),
                u = t("901e"),
                d = t.n(u),
                p = function() {
                    var e;
                    return e = {
                        compound: [],
                        usdt: [],
                        y: [],
                        busd: [],
                        susd: [],
                        pax: [],
                        tbtc: [],
                        ren: [],
                        sbtc: [],
                        hbtc: [],
                        "3pool": [],
                        gusd: [],
                        husd: [],
                        usdk: [],
                        usdn: [],
                        linkusd: [],
                        musd: [],
                        rsv: []
                    }, Object(r["a"])(e, "tbtc", []), Object(r["a"])(e, "dusd", []), e
                },
                v = l["a"].observable({
                    volumes: Object(i["a"])({}, Object.fromEntries(Object.entries(p()).map((function(e) {
                        var s = Object(o["a"])(e, 2),
                            t = s[0];
                        s[1];
                        return [t, [-1, -1]]
                    })))),
                    volumeData: {
                        5: Object(i["a"])({}, p()),
                        30: Object(i["a"])({}, p()),
                        1440: Object(i["a"])({}, p())
                    },
                    allVolume: Object(i["a"])({}, p())
                });

            function m(e, s) {
                var t = s.find((function(s) {
                    return Date.parse(s[0]) / 1e3 - e > 0
                }));
                return void 0 === t ? s[s.length - 1][1] : t.price
            }

            function f(e) {
                return b.apply(this, arguments)
            }

            function b() {
                return b = Object(n["a"])(regeneratorRuntime.mark((function e(s) {
                    var t, n, i, r, l, c, u, d, p, f, b, h = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return t = h.length > 1 && void 0 !== h[1] && h[1], n = h.length > 2 && void 0 !== h[2] ? h[2] : 5, Array.isArray(s) || (s = [s]), s = s.map((function(e) {
                                    return "iearn" == e ? "y" : "susdv2" == e ? "susd" : "ren2" == e ? "ren" : "rens" == e ? "sbtc" : e
                                })), t || (s = s.filter((function(e) {
                                    return !v.volumeData[n][e].length
                                }))), i = s.map((function(e) {
                                    return "ren" == e && (e = "ren2"), "sbtc" == e && (e = "rens"), fetch("".concat(window.domain, "/raw-stats/").concat(e, "-").concat(n, "m.json"))
                                })), (s.includes("tbtc") || s.includes("ren") || s.includes("sbtc") || s.includes("hbtc")) && i.push(fetch("\n\t\t\thttps://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1589587198&to=".concat(Date.now() / 1e3 | 0))), e.next = 9, Promise.all(i);
                            case 9:
                                return i = e.sent, e.next = 12, Promise.all(i.map((function(e) {
                                    return e.json()
                                })));
                            case 12:
                                r = e.sent, l = r[r.length - 1], (s.includes("tbtc") || s.includes("ren") || s.includes("hbtc")) && (r = r.slice(0, -1)), c = Object(a["a"])(r.entries());
                                try {
                                    for (c.s(); !(u = c.n()).done;) d = Object(o["a"])(u.value, 2), p = d[0], f = d[1], b = s[p], ["tbtc", "ren", "sbtc", "hbtc"].includes(b) && (f = f.map((function(e) {
                                        return e.volume = Object.fromEntries(Object.entries(e.volume).map((function(s) {
                                            var t = Object(o["a"])(s, 2),
                                                a = t[0],
                                                n = t[1];
                                            return [a, n.map((function(s) {
                                                return s * m(e.timestamp, l.prices)
                                            }))]
                                        }))), e
                                    }))), v.volumeData[n][b] = f
                                } catch (_) {
                                    c.e(_)
                                } finally {
                                    c.f()
                                }
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), b.apply(this, arguments)
            }

            function h(e) {
                return _.apply(this, arguments)
            }

            function _() {
                return _ = Object(n["a"])(regeneratorRuntime.mark((function e(s) {
                    var t, a, n, i, r, c, u, d, p, m, f, b, h = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (t = h.length > 1 && void 0 !== h[1] && h[1], Array.isArray(s) || (s = [s]), s = s.map((function(e) {
                                        return "iearn" == e ? "y" : "susdv2" == e ? "susd" : "ren" == e ? "ren2" : "sbtc" == e ? "rens" : e
                                    })), Object.values(v.volumes).filter((function(e) {
                                        return -1 != e[0]
                                    })).length != s.length || t) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                return e.next = 7, Promise.all([fetch("".concat(window.domain, "/raw-stats/apys.json")), fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")]);
                            case 7:
                                return a = e.sent, e.next = 10, Promise.all(a.map((function(e) {
                                    return e.json()
                                })));
                            case 10:
                                for (n = e.sent, i = Object(o["a"])(n, 2), r = i[0], c = i[1], c = c.bitcoin.usd, u = 0, d = Object.entries(v.volumes); u < d.length; u++) p = Object(o["a"])(d[u], 2), m = p[0], f = p[1], -1 == f[0] && (b = "ren" == m ? r.volume.ren2 : "sbtc" == m ? r.volume.rens : r.volume[m], ["tbtc", "ren", "sbtc", "hbtc"].includes(m) && (b *= c), l["a"].set(v.volumes[m], 0, b || 0), l["a"].set(v.volumes[m], 1, "ren" == m ? r.volume.ren2 : "sbtc" == m ? r.volume.rens : r.volume[m]));
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), _.apply(this, arguments)
            }

            function C(e) {
                return w.apply(this, arguments)
            }

            function w() {
                return w = Object(n["a"])(regeneratorRuntime.mark((function e(s) {
                    var t, n, i, r, l, u, d = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (t = d.length > 1 && void 0 !== d[1] && d[1], n = d.length > 2 && void 0 !== d[2] ? d[2] : 30, s = "iearn" == s ? "y" : "susdv2" == s ? "susd" : s, !v.allVolume[s].length || t) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                return e.next = 7, f(s, t, n);
                            case 7:
                                i = v.volumeData[n][s], v.volumeData[s] = i, r = Object(a["a"])(i);
                                try {
                                    for (r.s(); !(l = r.n()).done;) u = l.value, v.allVolume[s].push([1e3 * u.timestamp, Object.entries(u.volume).map((function(e) {
                                        var t = Object(o["a"])(e, 2),
                                            a = t[0],
                                            n = t[1],
                                            i = c["g"]["susd" == s ? "susdv2" : s].coin_precisions[a.split("-")[0]];
                                        return n[0] / i
                                    })).reduce((function(e, s) {
                                        return e + s
                                    }), 0)])
                                } catch (p) {
                                    r.e(p)
                                } finally {
                                    r.f()
                                }
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), w.apply(this, arguments)
            }

            function y(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return g = Object(n["a"])(regeneratorRuntime.mark((function e(s) {
                    var t, a, n, o, i, r = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (t = r.length > 1 && void 0 !== r[1] && r[1], a = r.length > 2 && void 0 !== r[2] ? r[2] : 30, s = "iearn" == s ? "y" : "susdv2" == s ? "susd" : s, v.volumeData[a][s].length) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 6, f(s, t, a);
                            case 6:
                                for (n = [], o = function(e) {
                                        var t = v.volumeData[a][s],
                                            o = t[e],
                                            i = t[e - 1],
                                            r = o.balances.map((function(e, t) {
                                                return e / c["g"]["susd" == s ? "susdv2" : s].coin_precisions[t]
                                            })),
                                            l = o.rates.map((function(e, s) {
                                                return e / i.rates[s] - 1
                                            })),
                                            u = r.map((function(e, s) {
                                                return e * l[s]
                                            })),
                                            d = u.reduce((function(e, s) {
                                                return e + s
                                            }), 0),
                                            p = r.reduce((function(e, s) {
                                                return e + s
                                            }), 0),
                                            m = d / p,
                                            f = o.timestamp - i.timestamp,
                                            b = Math.pow(1 + m, 31536e3 / f);
                                        n.push([1e3 * o.timestamp, 100 * (b - 1)])
                                    }, i = 1; i < v.volumeData[a][s].length; i++) o(i);
                                return e.abrupt("return", n);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), g.apply(this, arguments)
            }

            function x() {
                for (var e = d()(0), s = 0, t = Object.values(v.volumes); s < t.length; s++) {
                    var a = t[s];
                    e = e.plus(d()(a[0]))
                }
                return e
            }
        },
        a9bc: function(e, s, t) {},
        b44d: function(e, s, t) {
            "use strict";
            t.d(s, "b", (function() {
                return m
            })), t.d(s, "a", (function() {
                return b
            }));
            t("caad"), t("d81d"), t("b680"), t("4fad");
            var a = t("3835"),
                n = (t("96cf"), t("1da1")),
                o = t("2b0e"),
                i = t("6314"),
                r = t.n(i),
                l = t("5245"),
                c = t("2fa3"),
                u = t("901e"),
                d = t.n(u),
                p = t("51bf"),
                v = t("5e35");

            function m() {
                return f.apply(this, arguments)
            }

            function f() {
                return f = Object(n["a"])(regeneratorRuntime.mark((function e() {
                    var s, t, n, o, i, u, m, f, h, _, C, w, y, g, x, P;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (v["b"].btcPrice) {
                                    e.next = 3;
                                    break
                                }
                                return e.next = 3, v["a"]();
                            case 3:
                                for (s = d()(0), t = {}, n = {}, [], o = p["f"].web3 || new r.a(l["j"]), i = new o.eth.Contract(l["o"], l["p"]), u = [], m = Object.assign({}, l["g"]), delete m.susd, delete m.tbtc, delete m.y, f = 0, h = Object.entries(m); f < h.length; f++) _ = Object(a["a"])(h[f], 2), C = _[0], w = _[1], t[C] = new o.eth.Contract(l["c"], w.token_address), n[C] = new o.eth.Contract(w.swap_abi, w.swap_address), l["g"][C].is_meta ? u.push([n[C]._address, n[C].methods.balances(0).encodeABI()]) : u.push([t[C]._address, t[C].methods.totalSupply().encodeABI()]), u.push([n[C]._address, n[C].methods.get_virtual_price().encodeABI()]);
                                return new o.eth.Contract(l["c"], l["g"].susd.token_address), y = new o.eth.Contract(l["g"].susd.swap_abi, l["g"].susd.swap_address), g = new o.eth.Contract(l["y"], l["g"].susd.coins[0]), u.push([g._address, g.methods.getPricePerFullShare().encodeABI()], [y._address, y.methods.balances(0).encodeABI()]), e.next = 21, i.methods.aggregate(u).call();
                            case 21:
                                return x = e.sent, P = x[1].map((function(e) {
                                    return o.eth.abi.decodeParameter("uint256", e)
                                })), Object(c["d"])(P, 2).map((function(e, t, a) {
                                    var n = d()(e[0]).times(d()(e[1])).div(1e36);
                                    t != a.length - 1 && l["g"][Object.entries(m)[t][0]].is_meta && (n = d()(e[0]).div(1e18)), [6, 7, 8].includes(t) && (n = n.times(d()(v["b"].btcPrice))), s = s.plus(n)
                                })), s = s.toFixed(0), b.total = s, e.abrupt("return", s);
                            case 27:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), f.apply(this, arguments)
            }
            var b = o["a"].observable({
                total: null
            })
        },
        dca8: function(e, s, t) {
            var a = t("23e7"),
                n = t("bb2f"),
                o = t("d039"),
                i = t("861d"),
                r = t("f183").onFreeze,
                l = Object.freeze,
                c = o((function() {
                    l(1)
                }));
            a({
                target: "Object",
                stat: !0,
                forced: c,
                sham: !n
            }, {
                freeze: function(e) {
                    return l && i(e) ? l(r(e)) : e
                }
            })
        },
        e6cc: function(e, s, t) {
            "use strict";
            var a = t("3c57"),
                n = t.n(a);
            n.a
        },
        e852: function(e, s, t) {
            "use strict";
            var a = this && this.__assign || function() {
                    return a = Object.assign || function(e) {
                        for (var s, t = 1, a = arguments.length; t < a; t++)
                            for (var n in s = arguments[t], s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
                        return e
                    }, a.apply(this, arguments)
                },
                n = this && this.__awaiter || function(e, s, t, a) {
                    function n(e) {
                        return e instanceof t ? e : new t((function(s) {
                            s(e)
                        }))
                    }
                    return new(t || (t = Promise))((function(t, o) {
                        function i(e) {
                            try {
                                l(a.next(e))
                            } catch (s) {
                                o(s)
                            }
                        }

                        function r(e) {
                            try {
                                l(a["throw"](e))
                            } catch (s) {
                                o(s)
                            }
                        }

                        function l(e) {
                            e.done ? t(e.value) : n(e.value).then(i, r)
                        }
                        l((a = a.apply(e, s || [])).next())
                    }))
                },
                o = this && this.__generator || function(e, s) {
                    var t, a, n, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & n[0]) throw n[1];
                            return n[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: r(0),
                        throw: r(1),
                        return: r(2)
                    }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function r(e) {
                        return function(s) {
                            return l([e, s])
                        }
                    }

                    function l(o) {
                        if (t) throw new TypeError("Generator is already executing.");
                        while (i) try {
                            if (t = 1, a && (n = 2 & o[0] ? a["return"] : o[0] ? a["throw"] || ((n = a["return"]) && n.call(a), 0) : a.next) && !(n = n.call(a, o[1])).done) return n;
                            switch (a = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                                case 0:
                                case 1:
                                    n = o;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (n = i.trys, !(n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < n[1]) {
                                        i.label = n[1], n = o;
                                        break
                                    }
                                    if (n && i.label < n[2]) {
                                        i.label = n[2], i.ops.push(o);
                                        break
                                    }
                                    n[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            o = s.call(e, i)
                        } catch (r) {
                            o = [6, r], a = 0
                        } finally {
                            t = n = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }
                },
                i = this && this.__rest || function(e, s) {
                    var t = {};
                    for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && s.indexOf(a) < 0 && (t[a] = e[a]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) s.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (t[a[n]] = e[a[n]])
                    }
                    return t
                },
                r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.gql = s.request = s.rawRequest = s.GraphQLClient = void 0;
            var l = r(t("1478")),
                c = t("7506"),
                u = t("13b0"),
                d = t("13b0");
            Object.defineProperty(s, "ClientError", {
                enumerable: !0,
                get: function() {
                    return d.ClientError
                }
            });
            var p = function() {
                function e(e, s) {
                    this.url = e, this.options = s || {}
                }
                return e.prototype.rawRequest = function(e, s) {
                    return n(this, void 0, void 0, (function() {
                        var t, n, r, c, d, p, v, m, b;
                        return o(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return t = this.options, n = t.headers, r = i(t, ["headers"]), c = JSON.stringify({
                                        query: e,
                                        variables: s || void 0
                                    }), [4, l.default(this.url, a({
                                        method: "POST",
                                        headers: a({
                                            "Content-Type": "application/json"
                                        }, n),
                                        body: c
                                    }, r))];
                                case 1:
                                    return d = o.sent(), [4, f(d)];
                                case 2:
                                    if (p = o.sent(), d.ok && !p.errors && p.data) return v = d.headers, m = d.status, [2, a(a({}, p), {
                                        headers: v,
                                        status: m
                                    })];
                                    throw b = "string" === typeof p ? {
                                        error: p
                                    } : p, new u.ClientError(a(a({}, b), {
                                        status: d.status,
                                        headers: d.headers
                                    }), {
                                        query: e,
                                        variables: s
                                    })
                            }
                        }))
                    }))
                }, e.prototype.request = function(e, s) {
                    return n(this, void 0, void 0, (function() {
                        var t, n, r, c, d, p, v, m;
                        return o(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return t = this.options, n = t.headers, r = i(t, ["headers"]), c = b(e), d = JSON.stringify({
                                        query: c,
                                        variables: s || void 0
                                    }), [4, l.default(this.url, a({
                                        method: "POST",
                                        headers: a({
                                            "Content-Type": "application/json"
                                        }, n),
                                        body: d
                                    }, r))];
                                case 1:
                                    return p = o.sent(), [4, f(p)];
                                case 2:
                                    if (v = o.sent(), p.ok && !v.errors && v.data) return [2, v.data];
                                    throw m = "string" === typeof v ? {
                                        error: v
                                    } : v, new u.ClientError(a(a({}, m), {
                                        status: p.status
                                    }), {
                                        query: c,
                                        variables: s
                                    })
                            }
                        }))
                    }))
                }, e.prototype.setHeaders = function(e) {
                    return this.options.headers = e, this
                }, e.prototype.setHeader = function(e, s) {
                    var t, a = this.options.headers;
                    return a ? a[e] = s : this.options.headers = (t = {}, t[e] = s, t), this
                }, e
            }();

            function v(e, s, t) {
                return n(this, void 0, void 0, (function() {
                    var a;
                    return o(this, (function(n) {
                        return a = new p(e), [2, a.rawRequest(s, t)]
                    }))
                }))
            }

            function m(e, s, t) {
                return n(this, void 0, void 0, (function() {
                    var a;
                    return o(this, (function(n) {
                        return a = new p(e), [2, a.request(s, t)]
                    }))
                }))
            }

            function f(e) {
                var s = e.headers.get("Content-Type");
                return s && s.startsWith("application/json") ? e.json() : e.text()
            }

            function b(e) {
                return "string" === typeof e ? e : c.print(e)
            }

            function h(e) {
                for (var s = [], t = 1; t < arguments.length; t++) s[t - 1] = arguments[t];
                return e.reduce((function(e, t, a) {
                    return "" + e + t + (a in s ? s[a] : "")
                }), "")
            }
            s.GraphQLClient = p, s.rawRequest = v, s.request = m, s.default = m, s.gql = h
        },
        e89f: function(e, s, t) {
            "use strict";
            t.r(s);
            var a = function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("div", [e._m(0), t("basic-trade"), t("div", {
                        staticClass: "window white"
                    }, [t("fieldset", {
                        staticClass: "poolsdialog"
                    }, [t("legend", [e._v(" Curve pools "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: +e.sumBalances > 0,
                            expression: "+sumBalances > 0"
                        }],
                        staticClass: "tooltip"
                    }, [e._v(" $ "), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" Your total balances: $" + e._s(e._f("formatNumber")(+e.sumBalances.toFixed(2), 0)) + " ")])])]), t("div", {
                        class: {
                            selected: 0 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/compound"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("0.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("Compound")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[(c)DAI, (c)USDC]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[0]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[0]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(e.monthly_apy[0]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[0]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[0]
                        }
                    }, [e._v(e._s(e.daily_apy[0]))]), e._v("% "), t("br"), t("div", {
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v(" +" + e._s(e.CRVAPYs.compound && e.CRVAPYs.compound[0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs.compound && e.CRVAPYs.compound[1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs.compound && e.CRVAPYs.compound[3],
                            expression: "CRVAPYs.compound && CRVAPYs.compound[3]"
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs.compound && e.CRVAPYs.compound[3] > 0 && e.CRVAPYs.compound[3].toFixed(2)) + "% ")]), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs.compound && e.CRVAPYs.compound[2].toFixed(2)) + ") ")])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes.compound && e.volumes.compound[0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes.compound && e.volumes.compound[0] >= 0,
                            expression: "volumes.compound && volumes.compound[0] >= 0"
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes.compound && 0 | e.volumes.compound[0], 0)))]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.volumes.compound && e.volumes.compound[0],
                            expression: "!volumes.compound && volumes.compound[0]"
                        }]
                    }, [e._v("$0")])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.compound > 0,
                            expression: "balances.compound > 0"
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.compound && e.balances.compound.toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.compound > 0,
                            expression: "balances.compound > 0"
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.compound && e.balances.compound.toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 1 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/usdt"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("1.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("USDT")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[(c)DAI, (c)USDC, USDT]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[1]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[1]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(e.monthly_apy[1]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[1]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[1]
                        }
                    }, [e._v(e._s(e.daily_apy[1]))]), e._v("% "), t("br"), t("div", {
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v(" +" + e._s(e.CRVAPYs.usdt && e.CRVAPYs.usdt[0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs.usdt && e.CRVAPYs.usdt[1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs.usdt && e.CRVAPYs.usdt[3],
                            expression: "CRVAPYs.usdt && CRVAPYs.usdt[3]"
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs.usdt && e.CRVAPYs.usdt[3] > 0 && e.CRVAPYs.usdt[3].toFixed(2)) + "% ")]), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs.usdt && e.CRVAPYs.usdt[2].toFixed(2)) + ") ")])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes.usdt && e.volumes.usdt[0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes.usdt && e.volumes.usdt[0] >= 0,
                            expression: "volumes.usdt && volumes.usdt[0] >= 0"
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes.usdt && 0 | e.volumes.usdt[0], 0)))])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.usdt > 0,
                            expression: "balances.usdt > 0"
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e.balances.usdt && e.balances.usdt.toFixed(2)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.usdt > 0,
                            expression: "balances.usdt > 0"
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e.balances.usdt && e.balances.usdt.toFixed(2)))])])])])], 1), t("div", {
                        class: {
                            selected: 2 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/pax"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("2.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("PAX")]), t("span", {
                        staticClass: "pools"
                    }, [e._v(" ["), t("span", {
                        staticClass: "tooltip"
                    }, [e._v("(yc)DAI "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("router-link", {
                        attrs: {
                            to: "/yctokens"
                        }
                    }, [e._v("ycTokens")]), e._v(" are forked yTokens without owner and Compound lending available for ycUSDT ")], 1)]), e._v(", "), t("span", {
                        staticClass: "tooltip"
                    }, [e._v("(yc)USDC "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("router-link", {
                        attrs: {
                            to: "/yctokens"
                        }
                    }, [e._v("ycTokens")]), e._v(" are forked yTokens without owner and Compound lending available for ycUSDT ")], 1)]), e._v(", "), t("span", {
                        staticClass: "tooltip"
                    }, [e._v("(yc)USDT "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("router-link", {
                        attrs: {
                            to: "/yctokens"
                        }
                    }, [e._v("ycTokens")]), e._v(" are forked yTokens without owner and Compound lending available for ycUSDT ")], 1)]), e._v(", PAX] ")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[5]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[5]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(e.monthly_apy[5]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[5]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[5]
                        }
                    }, [e._v(e._s(e.daily_apy[5]))]), e._v("% "), t("div", {
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs.pax && e.CRVAPYs.pax[0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs.pax && e.CRVAPYs.pax[1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs.pax && e.CRVAPYs.pax[3],
                            expression: "CRVAPYs.pax && CRVAPYs.pax[3]"
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs.pax && e.CRVAPYs.pax[3] > 0 && e.CRVAPYs.pax[3].toFixed(2)) + "% ")]), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs.pax && e.CRVAPYs.pax[2].toFixed(2)) + ") ")])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes.pax && e.volumes.pax[0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes.pax && e.volumes.pax[0] >= 0,
                            expression: "volumes.pax && volumes.pax[0] >= 0"
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes.pax && 0 | e.volumes.pax[0], 0)))]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.volumes.pax && e.volumes.pax[0],
                            expression: "!volumes.pax && volumes.pax[0]"
                        }]
                    }, [e._v("$0")])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.pax > 0,
                            expression: "balances.pax > 0"
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.pax && e.balances.pax.toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.pax > 0,
                            expression: "balances.pax > 0"
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.pax && e.balances.pax.toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 3 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/y"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("3.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("Y")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[(y)DAI, (y)USDC, (y)USDT, (y)TUSD]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[2]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[2]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(e.monthly_apy[2]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[2]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[2]
                        }
                    }, [e._v(e._s(e.daily_apy[2]))]), e._v("% "), t("div", {
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs.y && e.CRVAPYs.y[0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs.y && e.CRVAPYs.y[1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs.y && e.CRVAPYs.y[3],
                            expression: "CRVAPYs.y && CRVAPYs.y[3]"
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs.y && e.CRVAPYs.y[3] > 0 && e.CRVAPYs.y[3].toFixed(2)) + "% ")]), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs.y && e.CRVAPYs.y[2].toFixed(2)) + ") ")])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes.y && e.volumes.y[0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes.y && e.volumes.y[0] >= 0,
                            expression: "volumes.y && volumes.y[0] >= 0"
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes.y && e.volumes.y[0], 0)))]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.volumes.y && e.volumes.y[0],
                            expression: "!volumes.y && volumes.y[0]"
                        }]
                    }, [e._v("$0")])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.y > 0,
                            expression: "balances.y > 0"
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.y && e.balances.y.toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.y > 0,
                            expression: "balances.y > 0"
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.y && e.balances.y.toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 4 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/busd"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("4.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("BUSD")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[(y)DAI, (y)USDC, (y)USDT, (y)BUSD]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[3]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[3]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(e.monthly_apy[3]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[3]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[3]
                        }
                    }, [e._v(e._s(e.daily_apy[3]))]), e._v("% "), t("div", {
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs.busd && e.CRVAPYs.busd[0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs.busd && e.CRVAPYs.busd[1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs.busd && e.CRVAPYs.busd[3],
                            expression: "CRVAPYs.busd && CRVAPYs.busd[3]"
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs.busd && e.CRVAPYs.busd[3] > 0 && e.CRVAPYs.busd[3].toFixed(2)) + "% ")]), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs.busd && e.CRVAPYs.busd[2].toFixed(2)) + ") ")])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes.busd && e.volumes.busd[0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes.busd && e.volumes.busd[0] >= 0,
                            expression: "volumes.busd && volumes.busd[0] >= 0"
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes.busd && 0 | e.volumes.busd[0], 0)))]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.volumes.busd && e.volumes.busd[0],
                            expression: "!volumes.busd && volumes.busd[0]"
                        }]
                    }, [e._v("$0")])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.busd > 0,
                            expression: "balances.busd > 0"
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.busd && e.balances.busd.toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.busd > 0,
                            expression: "balances.busd > 0"
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.busd && e.balances.busd.toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 5 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/susdv2"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("5.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("sUSD")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[DAI, USDC, USDT, sUSD]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[4]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[4]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[4] ? "N/A" : e.monthly_apy[4]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[4]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[4]
                        }
                    }, [e._v(e._s(e.daily_apy[4]) + "%")]), t("div", {
                        class: {
                            "loading line": null === e.snxRewards, "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e._f("toFixed2")(e.snxRewards)) + "% "), t("span", {
                        staticClass: "tooltip"
                    }, [e._v("SNX "), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" SNX LP reward annualized ")])])]), t("div", {
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs.susdv2 && e.CRVAPYs.susdv2[0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs.susdv2 && e.CRVAPYs.susdv2[1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs.susdv2 && e.CRVAPYs.susdv2[3],
                            expression: "CRVAPYs.susdv2 && CRVAPYs.susdv2[3]"
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs.susdv2 && e.CRVAPYs.susdv2[3] > 0 && e.CRVAPYs.susdv2[3].toFixed(2)) + "% ")]), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs.susdv2 && e.CRVAPYs.susdv2[2].toFixed(2)) + ") ")])])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes.susd && e.volumes.susd[0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes.susd && e.volumes.susd[0] >= 0,
                            expression: "volumes.susd && volumes.susd[0] >= 0"
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes.susd && 0 | e.volumes.susd[0], 0)))]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.volumes.susd && e.volumes.susd[0],
                            expression: "!volumes.susd && volumes.susd[0]"
                        }]
                    }, [e._v("$0")])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.susdv2 > 0,
                            expression: "balances.susdv2 > 0"
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.susdv2 && e.balances.susdv2.toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.susdv2 > 0,
                            expression: "balances.susdv2 > 0"
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.susdv2 && e.balances.susdv2.toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 6 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/ren"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("6.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("ren")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[renBTC, wBTC]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[7]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[7]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(e.monthly_apy[7]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[7]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[7]
                        }
                    }, [e._v(e._s(e.daily_apy[7]))]), e._v("% "), t("div", {
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs.ren && e.CRVAPYs.ren[0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs.ren && e.CRVAPYs.ren[1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs.ren && e.CRVAPYs.ren[3],
                            expression: "CRVAPYs.ren && CRVAPYs.ren[3]"
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs.ren && e.CRVAPYs.ren[3] > 0 && e.CRVAPYs.ren[3].toFixed(2)) + "% ")]), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs.ren && e.CRVAPYs.ren[2].toFixed(2)) + ") ")])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes.ren && e.volumes.ren[0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes.ren && e.volumes.ren[0] >= 0,
                            expression: "volumes.ren && volumes.ren[0] >= 0"
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes.ren && 0 | e.volumes.ren[0], 0)))])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.ren > 0,
                            expression: "balances.ren > 0"
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.ren && e.balances.ren.toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.ren > 0,
                            expression: "balances.ren > 0"
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.ren && e.balances.ren.toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 7 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/sbtc"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("7.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("sbtc")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[renBTC, wBTC, sBTC]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[8]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[8]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[8] ? "N/A" : e.monthly_apy[8]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[8]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[8]
                        }
                    }, [e._v(e._s(e.daily_apy[8]) + "%")]), t("div", {
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs.sbtc && e.CRVAPYs.sbtc[0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs.sbtc && e.CRVAPYs.sbtc[1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs.sbtc && e.CRVAPYs.sbtc[3],
                            expression: "CRVAPYs.sbtc && CRVAPYs.sbtc[3]"
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs.sbtc && e.CRVAPYs.sbtc[3] > 0 && e.CRVAPYs.sbtc[3].toFixed(2)) + "% ")]), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs.sbtc && e.CRVAPYs.sbtc[2].toFixed(2)) + ") ")])])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes.sbtc && e.volumes.sbtc[0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes.sbtc && e.volumes.sbtc[0] >= 0,
                            expression: "volumes.sbtc && volumes.sbtc[0] >= 0"
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes.sbtc && 0 | e.volumes.sbtc[0], 0)))])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.sbtc > 0,
                            expression: "balances.sbtc > 0"
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.sbtc && e.balances.sbtc.toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.sbtc > 0,
                            expression: "balances.sbtc > 0"
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances.sbtc && e.balances.sbtc.toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 8 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/hbtc"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("8.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("hbtc")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[hBTC, wBTC]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[9]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[9]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(e.monthly_apy[9]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[9]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[9]
                        }
                    }, [e._v(e._s(e.daily_apy[9]))]), e._v("% "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs.hbtc && e.CRVAPYs.hbtc[0],
                            expression: "CRVAPYs.hbtc && CRVAPYs.hbtc[0]"
                        }],
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs.hbtc && e.CRVAPYs.hbtc[0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs.hbtc && e.CRVAPYs.hbtc[1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs.hbtc && e.CRVAPYs.hbtc[3],
                            expression: "CRVAPYs.hbtc && CRVAPYs.hbtc[3]"
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs.hbtc && e.CRVAPYs.hbtc[3] > 0 && e.CRVAPYs.hbtc[3].toFixed(2)) + "% ")]), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs.hbtc && e.CRVAPYs.hbtc[2].toFixed(2)) + ") ")])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes.hbtc && e.volumes.hbtc[0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes.hbtc && e.volumes.hbtc[0] >= 0,
                            expression: "volumes.hbtc && volumes.hbtc[0] >= 0"
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes.hbtc && 0 | e.volumes.hbtc[0], 0)))])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.hbtc > 0,
                            expression: "balances.hbtc > 0"
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e.balances.hbtc && e.balances.hbtc.toFixed(2)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances.hbtc > 0,
                            expression: "balances.hbtc > 0"
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e.balances.hbtc && e.balances.hbtc.toFixed(2)))])])])])], 1), t("div", {
                        class: {
                            selected: 9 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/3pool"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("9.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("3pool")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[DAI, USDC, USDT]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[10]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[10]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[10] ? "N/A" : e.monthly_apy[10]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[10]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[10]
                        }
                    }, [e._v(e._s(e.daily_apy[10]) + "%")]), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["3pool"] && e.CRVAPYs["3pool"][0],
                            expression: "CRVAPYs['3pool'] && CRVAPYs['3pool'][0]"
                        }],
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs["3pool"] && e.CRVAPYs["3pool"][0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs["3pool"] && e.CRVAPYs["3pool"][1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["3pool"] && e.CRVAPYs["3pool"][3],
                            expression: 'CRVAPYs["3pool"] && CRVAPYs["3pool"][3]'
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs["3pool"] && e.CRVAPYs["3pool"][3] > 0 && e.CRVAPYs["3pool"][3].toFixed(2)) + "% ")]), e._v(" "), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs["3pool"] && e.CRVAPYs["3pool"][2].toFixed(2)) + ") ")])])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes["3pool"] && e.volumes["3pool"][0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes["3pool"] && e.volumes["3pool"][0] >= 0,
                            expression: 'volumes["3pool"] && volumes["3pool"][0] >= 0'
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes["3pool"] && 0 | e.volumes["3pool"][0], 0)))]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.volumes["3pool"] && e.volumes["3pool"][0],
                            expression: '!volumes["3pool"] && volumes["3pool"][0]'
                        }]
                    }, [e._v("$0")])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["3pool"] > 0,
                            expression: 'balances["3pool"] > 0'
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["3pool"] && e.balances["3pool"].toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["3pool"] > 0,
                            expression: 'balances["3pool"] > 0'
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["3pool"] && e.balances["3pool"].toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 10 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/gusd"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("10.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("gusd")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[GUSD, 3pool]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[11]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[11]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[11] ? "N/A" : e.monthly_apy[11]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[11]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[11]
                        }
                    }, [e._v(e._s(e.daily_apy[11]) + "%")]), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["gusd"] && void 0 !== e.CRVAPYs["gusd"][0],
                            expression: "CRVAPYs['gusd'] && CRVAPYs['gusd'][0] !== undefined"
                        }],
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs["gusd"] && e.CRVAPYs["gusd"][0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs["gusd"] && e.CRVAPYs["gusd"][1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["gusd"] && e.CRVAPYs["gusd"][3],
                            expression: 'CRVAPYs["gusd"] && CRVAPYs["gusd"][3]'
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs["gusd"] && e.CRVAPYs["gusd"][3] > 0 && e.CRVAPYs["gusd"][3].toFixed(2)) + "% ")]), e._v(" "), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs["gusd"] && e.CRVAPYs["gusd"][2].toFixed(2)) + ") ")])])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes["gusd"] && e.volumes["gusd"][0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes["gusd"] && e.volumes["gusd"][0] >= 0,
                            expression: 'volumes["gusd"] && volumes["gusd"][0] >= 0'
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes["gusd"] && 0 | e.volumes["gusd"][0], 0)))]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.volumes["gusd"] && e.volumes["gusd"][0],
                            expression: '!volumes["gusd"] && volumes["gusd"][0]'
                        }]
                    }, [e._v("$0")])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["gusd"] > 0,
                            expression: 'balances["gusd"] > 0'
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["gusd"] && e.balances["gusd"].toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["gusd"] > 0,
                            expression: 'balances["gusd"] > 0'
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["gusd"] && e.balances["gusd"].toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 11 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/husd"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("11.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("husd")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[HUSD, 3pool]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[12]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[12]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[12] ? "N/A" : e.monthly_apy[12]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[12]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[12]
                        }
                    }, [e._v(e._s(e.daily_apy[12]) + "%")]), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["husd"] && void 0 !== e.CRVAPYs["husd"][0],
                            expression: "CRVAPYs['husd'] && CRVAPYs['husd'][0] !== undefined"
                        }],
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs["husd"] && e.CRVAPYs["husd"][0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs["husd"] && e.CRVAPYs["husd"][1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["husd"] && e.CRVAPYs["husd"][3],
                            expression: 'CRVAPYs["husd"] && CRVAPYs["husd"][3]'
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs["husd"] && e.CRVAPYs["husd"][3] > 0 && e.CRVAPYs["husd"][3].toFixed(2)) + "% ")]), e._v(" "), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs["husd"] && e.CRVAPYs["husd"][2].toFixed(2)) + ") ")])])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes["husd"] && e.volumes["husd"][0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes["husd"] && e.volumes["husd"][0] >= 0,
                            expression: 'volumes["husd"] && volumes["husd"][0] >= 0'
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes["husd"] && 0 | e.volumes["husd"][0], 0)))]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.volumes["husd"] && e.volumes["husd"][0],
                            expression: '!volumes["husd"] && volumes["husd"][0]'
                        }]
                    }, [e._v("$0")])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["husd"] > 0,
                            expression: 'balances["husd"] > 0'
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["husd"] && e.balances["husd"].toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["husd"] > 0,
                            expression: 'balances["husd"] > 0'
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["husd"] && e.balances["husd"].toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 12 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/usdk"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("12.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("usdk")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[USDK, 3pool]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[13]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[13]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[13] ? "N/A" : e.monthly_apy[13]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[13]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[13]
                        }
                    }, [e._v(e._s(e.daily_apy[13]) + "%")]), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["usdk"] && void 0 !== e.CRVAPYs["usdk"][0],
                            expression: "CRVAPYs['usdk'] && CRVAPYs['usdk'][0] !== undefined"
                        }],
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs["usdk"] && e.CRVAPYs["usdk"][0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs["usdk"] && e.CRVAPYs["usdk"][1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["usdk"] && e.CRVAPYs["usdk"][3],
                            expression: 'CRVAPYs["usdk"] && CRVAPYs["usdk"][3]'
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs["usdk"] && e.CRVAPYs["usdk"][3] > 0 && e.CRVAPYs["usdk"][3].toFixed(2)) + "% ")]), e._v(" "), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs["usdk"] && e.CRVAPYs["usdk"][2].toFixed(2)) + ") ")])])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes["usdk"] && e.volumes["usdk"][0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes["usdk"] && e.volumes["usdk"][0] >= 0,
                            expression: 'volumes["usdk"] && volumes["usdk"][0] >= 0'
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes["usdk"] && 0 | e.volumes["usdk"][0], 0)))]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.volumes["usdk"] && e.volumes["usdk"][0],
                            expression: '!volumes["usdk"] && volumes["usdk"][0]'
                        }]
                    }, [e._v("$0")])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["usdk"] > 0,
                            expression: 'balances["usdk"] > 0'
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["usdk"] && e.balances["usdk"].toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["usdk"] > 0,
                            expression: 'balances["usdk"] > 0'
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["usdk"] && e.balances["usdk"].toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 13 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/usdn"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("13.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("usdn")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[USDN, 3pool]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[14]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[14]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[14] ? "N/A" : e.monthly_apy[14]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[14]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[14]
                        }
                    }, [e._v(e._s(e.daily_apy[14]) + "%")]), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["usdn"] && void 0 !== e.CRVAPYs["usdn"][0],
                            expression: "CRVAPYs['usdn'] && CRVAPYs['usdn'][0] !== undefined"
                        }],
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs["usdn"] && e.CRVAPYs["usdn"][0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs["usdn"] && e.CRVAPYs["usdn"][1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["usdn"] && e.CRVAPYs["usdn"][3],
                            expression: 'CRVAPYs["usdn"] && CRVAPYs["usdn"][3]'
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs["usdn"] && e.CRVAPYs["usdn"][3] > 0 && e.CRVAPYs["usdn"][3].toFixed(2)) + "% ")]), e._v(" "), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs["usdn"] && e.CRVAPYs["usdn"][2].toFixed(2)) + ") ")])])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes["usdn"] && e.volumes["usdn"][0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes["usdn"] && e.volumes["usdn"][0] >= 0,
                            expression: 'volumes["usdn"] && volumes["usdn"][0] >= 0'
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes["usdn"] && 0 | e.volumes["usdn"][0], 0)))]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.volumes["usdn"] && e.volumes["usdn"][0],
                            expression: '!volumes["usdn"] && volumes["usdn"][0]'
                        }]
                    }, [e._v("$0")])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["usdn"] > 0,
                            expression: 'balances["usdn"] > 0'
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["usdn"] && e.balances["usdn"].toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["usdn"] > 0,
                            expression: 'balances["usdn"] > 0'
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["usdn"] && e.balances["usdn"].toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 14 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/linkusd"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("14.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("linkusd")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[LINKUSD, 3pool]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[15]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[15]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[15] ? "N/A" : e.monthly_apy[15]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[15]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[15]
                        }
                    }, [e._v(e._s(e.daily_apy[15]) + "%")])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes["linkusd"] && e.volumes["linkusd"][0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes["linkusd"] && e.volumes["linkusd"][0] >= 0,
                            expression: 'volumes["linkusd"] && volumes["linkusd"][0] >= 0'
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes["linkusd"] && 0 | e.volumes["linkusd"][0], 0)))])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["linkusd"] > 0,
                            expression: 'balances["linkusd"] > 0'
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["linkusd"] && e.balances["linkusd"].toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["linkusd"] > 0,
                            expression: 'balances["linkusd"] > 0'
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["linkusd"] && e.balances["linkusd"].toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 15 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/musd"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("15.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("musd")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[musd, 3pool]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[16]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[16]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[16] ? "N/A" : e.monthly_apy[16]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[16]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[16]
                        }
                    }, [e._v(e._s(e.daily_apy[16]) + "%")]), t("div", {
                        class: {
                            "loading line": null === e.mtaRewards, "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e._f("toFixed2")(e.mtaRewards)) + "% "), t("span", {
                        staticClass: "tooltip"
                    }, [e._v("MTA "), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" MTA LP reward annualized ")])])]), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["musd"] && void 0 !== e.CRVAPYs["musd"][0],
                            expression: "CRVAPYs['musd'] && CRVAPYs['musd'][0] !== undefined"
                        }],
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs["musd"] && e.CRVAPYs["musd"][0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs["musd"] && e.CRVAPYs["musd"][1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["musd"] && e.CRVAPYs["musd"][3],
                            expression: 'CRVAPYs["musd"] && CRVAPYs["musd"][3]'
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs["musd"] && e.CRVAPYs["musd"][3] > 0 && e.CRVAPYs["musd"][3].toFixed(2)) + "% ")]), e._v(" "), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs["musd"] && e.CRVAPYs["musd"][2].toFixed(2)) + ") ")])])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes["musd"] && e.volumes["musd"][0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes["musd"] && e.volumes["musd"][0] >= 0,
                            expression: 'volumes["musd"] && volumes["musd"][0] >= 0'
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes["musd"] && 0 | e.volumes["musd"][0], 0)))])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["musd"] > 0,
                            expression: 'balances["musd"] > 0'
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["musd"] && e.balances["musd"].toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["musd"] > 0,
                            expression: 'balances["musd"] > 0'
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["musd"] && e.balances["musd"].toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 16 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/rsv"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("16.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("rsv")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[rsv, 3pool]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[17]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[17]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[17] ? "N/A" : e.monthly_apy[17]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[17]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[17]
                        }
                    }, [e._v(e._s(e.daily_apy[17]) + "%")]), t("div", {
                        class: {
                            "loading line": null === e.rsrRewards, "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e._f("toFixed2")(e.rsrRewards)) + "% "), t("span", {
                        staticClass: "tooltip"
                    }, [e._v("RSR "), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" RSR LP reward annualized ")])])]), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["rsv"] && void 0 !== e.CRVAPYs["rsv"][0],
                            expression: "CRVAPYs['rsv'] && CRVAPYs['rsv'][0] !== undefined"
                        }],
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs["rsv"] && e.CRVAPYs["rsv"][0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs["rsv"] && e.CRVAPYs["rsv"][1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["rsv"] && e.CRVAPYs["rsv"][3],
                            expression: 'CRVAPYs["rsv"] && CRVAPYs["rsv"][3]'
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs["rsv"] && e.CRVAPYs["rsv"][3] > 0 && e.CRVAPYs["rsv"][3].toFixed(2)) + "% ")]), e._v(" "), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs["rsv"] && e.CRVAPYs["rsv"][2].toFixed(2)) + ") ")])])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes["rsv"] && e.volumes["rsv"][0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes["rsv"] && e.volumes["rsv"][0] >= 0,
                            expression: 'volumes["rsv"] && volumes["rsv"][0] >= 0'
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes["rsv"] && 0 | e.volumes["rsv"][0], 0)))])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["rsv"] > 0,
                            expression: 'balances["rsv"] > 0'
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["rsv"] && e.balances["rsv"].toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["rsv"] > 0,
                            expression: 'balances["rsv"] > 0'
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["rsv"] && e.balances["rsv"].toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 17 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/tbtc"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("17.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("tbtc")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[tbtc, sbtcCrv]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[18]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[18]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[18] ? "N/A" : e.monthly_apy[18]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[18]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[18]
                        }
                    }, [e._v(e._s(e.daily_apy[18]) + "%")]), t("div", {
                        class: {
                            "loading line": null === e.keepRewards, "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e._f("toFixed2")(e.keepRewards)) + "% "), t("span", {
                        staticClass: "tooltip"
                    }, [e._v("KEEP "), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" KEEP LP reward annualized ")])])]), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["tbtc"] && void 0 !== e.CRVAPYs["tbtc"][0],
                            expression: "CRVAPYs['tbtc'] && CRVAPYs['tbtc'][0] !== undefined"
                        }],
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs["tbtc"] && e.CRVAPYs["tbtc"][0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs["tbtc"] && e.CRVAPYs["tbtc"][1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["tbtc"] && e.CRVAPYs["tbtc"][3],
                            expression: 'CRVAPYs["tbtc"] && CRVAPYs["tbtc"][3]'
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs["tbtc"] && e.CRVAPYs["tbtc"][3] > 0 && e.CRVAPYs["tbtc"][3].toFixed(2)) + "% ")]), e._v(" "), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized")])])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes["tbtc"] && e.volumes["tbtc"][0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes["tbtc"] && e.volumes["tbtc"][0] >= 0,
                            expression: 'volumes["tbtc"] && volumes["tbtc"][0] >= 0'
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes["tbtc"] && 0 | e.volumes["tbtc"][0], 0)))])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["tbtc"] > 0,
                            expression: 'balances["tbtc"] > 0'
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["tbtc"] && e.balances["tbtc"].toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["tbtc"] > 0,
                            expression: 'balances["tbtc"] > 0'
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["tbtc"] && e.balances["tbtc"].toFixed(2), 0)))])])])])], 1), t("div", {
                        class: {
                            selected: 19 == e.activePoolLink
                        }
                    }, [t("router-link", {
                        attrs: {
                            to: "/dusd"
                        }
                    }, [t("span", {
                        staticClass: "index"
                    }, [e._v("18.")]), t("span", {
                        staticClass: "pooltext"
                    }, [e._v("dusd")]), t("span", {
                        staticClass: "pools"
                    }, [e._v("[dusd, 3pool]")]), t("span", {
                        staticClass: "apr"
                    }, [t("span", [t("span", {
                        staticClass: "tooltip"
                    }, [e._v("APY: "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [t("div", [e._v("Pool APY + Lending APY (annualized)")]), t("div", [e._v("Daily APY: " + e._s(e.daily_apy[19]) + "%")]), t("div", [e._v("Weekly APY: " + e._s(e.weekly_apy[19]) + "%")]), t("div", [e._v("Monthly APY: " + e._s(0 == +e.monthly_apy[19] ? "N/A" : e.monthly_apy[19]) + "%")]), t("div", [e._v("Total APY: " + e._s(e.apy[19]) + "%")])])]), t("span", {
                        class: {
                            "loading line": !e.daily_apy[19]
                        }
                    }, [e._v(e._s(e.daily_apy[19]) + "%")]), t("div", {
                        class: {
                            "loading line": null === e.dfdRewards, "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e._f("toFixed2")(e.dfdRewards)) + "% "), t("span", {
                        staticClass: "tooltip"
                    }, [e._v("DFD "), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" DFD LP reward annualized ")])])]), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["dusd"] && void 0 !== e.CRVAPYs["dusd"][0],
                            expression: "CRVAPYs['dusd'] && CRVAPYs['dusd'][0] !== undefined"
                        }],
                        class: {
                            "incentive-apr": !0
                        }
                    }, [e._v("+" + e._s(e.CRVAPYs["dusd"] && e.CRVAPYs["dusd"][0].toFixed(2)) + "% "), t("br"), e._v(" to " + e._s(e.CRVAPYs["dusd"] && e.CRVAPYs["dusd"][1].toFixed(2)) + "% "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.CRVAPYs["dusd"] && e.CRVAPYs["dusd"][3],
                            expression: 'CRVAPYs["dusd"] && CRVAPYs["dusd"][3]'
                        }]
                    }, [t("br"), e._v("my: " + e._s(e.CRVAPYs["dusd"] && e.CRVAPYs["dusd"][3] > 0 && e.CRVAPYs["dusd"][3].toFixed(2)) + "% ")]), e._v(" "), t("span", {
                        staticClass: "tooltip"
                    }, [t("img", {
                        staticClass: "icon small",
                        attrs: {
                            src: "https://www.curve.fi/logo.png"
                        }
                    }), e._v(" CRV "), t("span", {
                        staticClass: "tooltiptext long"
                    }, [e._v(" CRV LP reward annualized(max APY can be reached with max boost of " + e._s(e.CRVAPYs["dusd"] && e.CRVAPYs["dusd"][2].toFixed(2)) + ") ")])])])])]), t("span", {
                        staticClass: "volume"
                    }, [e._v("Vol: "), t("span", {
                        class: {
                            "loading line": e.volumes["dusd"] && e.volumes["dusd"][0] < 0
                        }
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.volumes["dusd"] && e.volumes["dusd"][0] >= 0,
                            expression: 'volumes["dusd"] && volumes["dusd"][0] >= 0'
                        }]
                    }, [e._v("$" + e._s(e._f("formatNumber")(e.volumes["dusd"] && 0 | e.volumes["dusd"][0], 0)))])])]), t("span", {
                        staticClass: "balance"
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["dusd"] > 0,
                            expression: 'balances["dusd"] > 0'
                        }],
                        staticClass: "showmobile"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["dusd"] && e.balances["dusd"].toFixed(2), 0)) + " ")]), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.balances["dusd"] > 0,
                            expression: 'balances["dusd"] > 0'
                        }],
                        staticClass: "tooltip"
                    }, [t("img", {
                        attrs: {
                            src: "https://www.curve.fi/dollar-sign-solid.svg"
                        }
                    }), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v("Balance: $" + e._s(e._f("formatNumber")(e.balances["dusd"] && e.balances["dusd"].toFixed(2), 0)))])])])])], 1)])]), t("div", {
                        staticClass: "window white"
                    }, [t("fieldset", [t("legend", [e._v("veCRV stats")]), t("p", [e._v(" Total pending distribution: "), t("span", {
                        class: {
                            "loading line": 0 == e.totalProfit
                        }
                    }), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.totalProfit > 0,
                            expression: "totalProfit > 0"
                        }]
                    }, [e._v(" " + e._s(e.totalProfit && e.formatNumber(e.totalProfit)) + "$ accrued in fees for " + e._s(e.feesSince) + " days ")])]), t("p", [t("span", [e._v("veCRV holder/LP ratio: ")]), t("span", {
                        class: {
                            "loading line": null === e.ratio
                        }
                    }), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.ratio,
                            expression: "ratio !== null"
                        }],
                        staticClass: "greentext"
                    }, [e._v(e._s(e.ratio && e.ratio.toFixed(2)))])]), t("p", {
                        staticClass: "info-message gentle-message"
                    }, [e._v(" Having locked 1$ in CRV for 4 years is equal to having provided " + e._s(e.ratio && e.ratio.toFixed(2)) + "$ as an LP ")]), t("p"), e._v(" veCRV holder APY: " + e._s(e.feeAPY && e.feeAPY.toFixed(2)) + "% "), t("br"), e._v(" Yearly fee earnings per 1 veCRV: "), t("span", {
                        class: {
                            "loading line": null === e.feePerVeCRV
                        }
                    }), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null !== e.feePerVeCRV,
                            expression: "feePerVeCRV !== null"
                        }]
                    }, [e._v(e._s(e.feePerVeCRVFormat))]), e._v("$ "), t("br"), e._v(" My veCRV balance: " + e._s(e.myVeCRVFormat) + " "), t("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 0 == e.myVeCRV,
                            expression: "myVeCRV == 0"
                        }],
                        attrs: {
                            href: "https://dao.curve.fi/locker"
                        }
                    }, [e._v("Stake CRV")]), t("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.myVeCRV > 0,
                            expression: "myVeCRV > 0"
                        }]
                    }, [e._v(" My daily earnings: "), t("span", {
                        class: {
                            "loading line": null === e.myFee
                        }
                    }), e._v(" " + e._s(e.myFee && e.myFee.toFixed(2)) + "$ (" + e._s(e.myFee && (e.myFee / 24).toFixed(2)) + "$ per hour) "), t("br"), e._v(" My yearly earnings: "), t("span", {
                        class: {
                            "loading line": null === e.myFee
                        }
                    }), e._v(" " + e._s(e.myFee && e.formatNumber(365 * e.myFee)) + "$ "), e._m(1), t("br")]), t("p", {
                        staticClass: "nomarginend"
                    }, [e._v(" Daily earnings: "), t("span", {
                        class: {
                            "loading line": null === e.totalFees
                        }
                    }), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.totalFees > 0,
                            expression: "totalFees > 0"
                        }]
                    }, [e._v(" " + e._s(e.totalFeesFormat) + "$ ")]), t("br"), e._v(" Weekly earnings: "), t("span", {
                        class: {
                            "loading line": 0 == e.totalWeeklyFeeFormat
                        }
                    }), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.totalWeeklyFeeFormat,
                            expression: "totalWeeklyFeeFormat"
                        }]
                    }, [e._v(" " + e._s(e.totalWeeklyFeeFormat) + "$")])])])]), t("total-balances", {
                        attrs: {
                            "total-volume": e.totalVolume
                        }
                    }, [t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: +e.sumBalances > 0,
                            expression: "+sumBalances > 0"
                        }]
                    }, [e._v(" My deposits: " + e._s(e._f("formatNumber")(+e.sumBalances.toFixed(2), 0)) + "$ ")])])], 1)
                },
                n = [function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("p", {
                        staticClass: "info-message gentle-message window zksyncs"
                    }, [t("a", {
                        attrs: {
                            href: "https://zksync.curve.fi",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("ZkSync Curve testnet")])])
                }, function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("span", {
                        staticClass: "tooltip"
                    }, [e._v("[?] "), t("span", {
                        staticClass: "tooltiptext"
                    }, [e._v(" Daily trading fee annualized ")])])
                }];
            t("4de4"), t("7db0"), t("c740"), t("0481"), t("5db7"), t("caad"), t("d81d"), t("13d5"), t("fb6a"), t("4069"), t("73d9"), t("b0c0"), t("b680"), t("4fad"), t("c1f9"), t("d3b7"), t("07ac"), t("ac1f"), t("2532"), t("3ca3"), t("1276"), t("ddb0"), t("dca8");

            function o(e, s) {
                return s || (s = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(s)
                    }
                }))
            }
            var i = t("2909"),
                r = t("b85c"),
                l = t("3835"),
                c = (t("96cf"), t("1da1")),
                u = t("ade3"),
                d = t("2b0e"),
                p = t("6eaa"),
                v = t("a468"),
                m = t("5245"),
                f = t("a4e2"),
                b = (t("5e35"), t("2fa3")),
                h = t("51bf"),
                _ = t("e852"),
                C = t("b44d");

            function w() {
                var e = o(['\n\t\t\t\t\t{\n\t\t\t\t\t  gauges(where: { user: "', '"}) {\n\t\t\t\t\t    id\n\t\t\t\t\t    user\n\t\t\t\t\t    gauge\n\t\t\t\t\t    originalBalance\n\t\t\t\t\t    originalSupply\n\t\t\t\t\t    workingBalance\n\t\t\t\t\t    workingSupply\n\t\t\t\t\t  }\n\t\t\t\t\t}\n\t\t\t\t']);
                return w = function() {
                    return e
                }, e
            }
            var y = {
                    components: {
                        TotalBalances: p["a"],
                        BasicTrade: v["default"]
                    },
                    data: function() {
                        var e, s;
                        return {
                            activePoolLink: -1,
                            pools: ["compound", "usdt", "y", "busd", "susdv2", "pax", "ren", "sbtc", "hbtc", "3pool", "gusd", "husd", "usdk", "usdn", "linkusd", "musd", "rsv", "tbtc", "dusd"],
                            daily_apy: [],
                            weekly_apy: [],
                            monthly_apy: [],
                            apy: [],
                            start: 0,
                            end: 0,
                            volumes: (e = {
                                compound: [-1, -1],
                                usdt: [-1, -1],
                                y: [-1, -1],
                                busd: [-1, -1],
                                susd: [-1, -1],
                                pax: [-1, -1],
                                tbtc: [-1, -1],
                                ren: [-1, -1],
                                sbtc: [-1, -1],
                                hbtc: [-1, -1],
                                "3pool": [-1, -1],
                                gusd: [-1, -1],
                                husd: [-1, -1],
                                usdk: [-1, -1],
                                usdn: [-1, -1],
                                rsv: [-1, -1]
                            }, Object(u["a"])(e, "tbtc", [-1, -1]), Object(u["a"])(e, "dusd", [-1, -1]), e),
                            balances: (s = {
                                compound: -1,
                                usdt: -1,
                                y: -1,
                                busd: -1,
                                susdv2: -1,
                                pax: -1,
                                tbtc: -1,
                                ren: -1,
                                sbtc: -1,
                                hbtc: -1,
                                "3pool": -1,
                                gusd: -1,
                                husd: -1,
                                usdk: -1,
                                usdn: -1,
                                rsv: -1
                            }, Object(u["a"])(s, "tbtc", -1), Object(u["a"])(s, "dusd", -1), s),
                            snxRewards: null,
                            sbtcRewards: null,
                            yfiRewards: null,
                            balRewards: null,
                            mtaRewards: null,
                            keepRewards: null,
                            rsrRewards: null,
                            dfdRewards: null,
                            btcPrice: null,
                            CRVAPYs: {},
                            CRVboosts: {},
                            boosts: {},
                            feeAPY: null,
                            feePerVeCRV: null,
                            myVeCRV: null,
                            myFee: null,
                            totalFees: null,
                            weeklyVolume: null,
                            CRVprice: null,
                            lockedCRV: null,
                            ratio: null,
                            totalProfit: 0
                        }
                    },
                    created: function() {
                        var e = this;
                        return Object(c["a"])(regeneratorRuntime.mark((function s() {
                            var t, a;
                            return regeneratorRuntime.wrap((function(s) {
                                while (1) switch (s.prev = s.next) {
                                    case 0:
                                        t = new Date, t.setHours(0, 0, 0, 0), e.start = t.getTime() / 1e3, a = new Date, a.setHours(23, 59, 59, 999), e.end = a.getTime() / 1e3, e.$watch((function() {
                                            return h["f"].web3 && h["f"].multicall
                                        }), (function(s) {
                                            s && (e.getCurveRewards(), e.getBalances(), e.getVeCRVAPY())
                                        })), e.$watch((function() {
                                            return h["f"] && h["f"].allInitContracts.size
                                        }), function() {
                                            var s = Object(c["a"])(regeneratorRuntime.mark((function s(t) {
                                                var a, n, o, i, c, u, d, p, v, m, f, b, _, C, w, y, g, x, P, A, R, V;
                                                return regeneratorRuntime.wrap((function(s) {
                                                    while (1) switch (s.prev = s.next) {
                                                        case 0:
                                                            if (a = 0, 15 != t) {
                                                                s.next = 44;
                                                                break
                                                            }
                                                            return s.prev = 2, s.next = 5, fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
                                                        case 5:
                                                            return n = s.sent, s.next = 8, n.json();
                                                        case 8:
                                                            n = s.sent, n = n.bitcoin.usd, s.next = 22;
                                                            break;
                                                        case 12:
                                                            return s.prev = 12, s.t0 = s["catch"](2), console.error(s.t0), s.next = 17, fetch("https://api.coinpaprika.com/v1/tickers/btc-bitcoin");
                                                        case 17:
                                                            return n = s.sent, s.next = 20, n.json();
                                                        case 20:
                                                            n = s.sent, n = n.quotes.USD.price;
                                                        case 22:
                                                            o = 0, i = Object.entries(h["f"].contracts);
                                                        case 23:
                                                            if (!(o < i.length)) {
                                                                s.next = 44;
                                                                break
                                                            }
                                                            if (c = Object(l["a"])(i[o], 2), u = c[0], d = c[1], !["tbtc"].includes(u)) {
                                                                s.next = 27;
                                                                break
                                                            }
                                                            return s.abrupt("continue", 41);
                                                        case 27:
                                                            p = 0, v = 0, m = [], f = Object(r["a"])(d.coins.entries());
                                                            try {
                                                                for (f.s(); !(b = f.n()).done;) _ = Object(l["a"])(b.value, 2), C = _[0], w = _[1], p += d.balances[C] * d.c_rates[C], m.push([w._address, w.methods.balanceOf(d.swap._address).encodeABI()])
                                                            } catch (Y) {
                                                                f.e(Y)
                                                            } finally {
                                                                f.f()
                                                            }
                                                            return s.next = 34, h["f"].multicall.methods.aggregate(m).call();
                                                        case 34:
                                                            y = s.sent, g = y[1].map((function(e) {
                                                                return web3.eth.abi.decodeParameter("uint256", e)
                                                            })), x = Object(r["a"])(d.coins.entries());
                                                            try {
                                                                for (x.s(); !(P = x.n()).done;) A = Object(l["a"])(P.value, 2), R = A[0], A[1], v += g[R] * d.c_rates[R]
                                                            } catch (Y) {
                                                                x.e(Y)
                                                            } finally {
                                                                x.f()
                                                            }
                                                            V = v - p, ["ren", "sbtc", "hbtc", "tbtc"].includes(u) && (V *= n), a += V;
                                                        case 41:
                                                            o++, s.next = 23;
                                                            break;
                                                        case 44:
                                                            e.totalProfit = a;
                                                        case 45:
                                                        case "end":
                                                            return s.stop()
                                                    }
                                                }), s, null, [
                                                    [2, 12]
                                                ])
                                            })));
                                            return function(e) {
                                                return s.apply(this, arguments)
                                            }
                                        }());
                                    case 8:
                                    case "end":
                                        return s.stop()
                                }
                            }), s)
                        })))()
                    },
                    watch: {
                        totalBalances: function(e) {
                            this.compareLPCRV()
                        }
                    },
                    mounted: function() {
                        var e = this;
                        return Object(c["a"])(regeneratorRuntime.mark((function s() {
                            return regeneratorRuntime.wrap((function(s) {
                                while (1) switch (s.prev = s.next) {
                                    case 0:
                                        e.keydownListener = document.addEventListener("keydown", e.handle_pool_change), e.getAPY(), h["f"].web3 && h["f"].multicall && e.getCurveRewards() && e.getBalances() && e.getVeCRVAPY();
                                    case 3:
                                    case "end":
                                        return s.stop()
                                }
                            }), s)
                        })))()
                    },
                    beforeDestroy: function() {
                        document.removeEventListener("keydown", this.handle_pool_change)
                    },
                    computed: {
                        totalVolume: function() {
                            return f["g"]()
                        },
                        publicPath: function() {
                            return "/"
                        },
                        sumBalances: function() {
                            return Object.values(this.balances).filter((function(e) {
                                return e > 0
                            })).reduce((function(e, s) {
                                return e + s
                            }), 0)
                        },
                        decodedGauges: function() {
                            return ["0x7ca5b0a2910B33e9759DC7dDB0413949071D7575", "0xBC89cd85491d81C6AD2954E6d0362Ee29fCa8F53", "0xFA712EE4788C042e2B7BB55E6cb8ec569C4530c1", "0x69Fb7c45726cfE2baDeE8317005d3F94bE838840", "0x64E3C23bfc40722d3B649844055F1D51c1ac041d", "0xB1F2cdeC61db658F091671F5f199635aEF202CAC", "0xA90996896660DEcC6E997655E065b23788857849", "0x705350c4BcD35c9441419DdD5d2f097d7a55410F", "0x4c18E409Dc8619bFb6a1cB56D114C3f592E0aE79", "0xbFcF63294aD7105dEa65aA58F8AE5BE2D9d0952A", "0xC5cfaDA84E902aD92DD40194f0883ad49639b023", "0x2db0E83599a91b508Ac268a6197b8B14F5e72840", "0xC2b1DF84112619D190193E48148000e3990Bf627", "0xF98450B5602fa59CC66e1379DFfB6FDDc724CfC4", "0x5f626c30EC1215f4EdCc9982265E8b1F411D1352", "0x6828bcF74279eE32f2723eC536c22c51Eed383C6", "0x4dC4A289a8E33600D8bD4cf5F6313E43a37adec7", "0xAEA6c312f4b3E04D752946d329693F7293bC2e6D"]
                        },
                        poolInfo: function() {
                            return {
                                compound: {
                                    swap: "0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56",
                                    swap_token: "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
                                    name: "compound",
                                    gauge: "0x7ca5b0a2910B33e9759DC7dDB0413949071D7575"
                                },
                                usdt: {
                                    swap: "0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C",
                                    swap_token: "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23",
                                    name: "usdt",
                                    gauge: "0xBC89cd85491d81C6AD2954E6d0362Ee29fCa8F53"
                                },
                                y: {
                                    swap: "0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51",
                                    swap_token: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
                                    name: "y",
                                    gauge: "0xFA712EE4788C042e2B7BB55E6cb8ec569C4530c1"
                                },
                                busd: {
                                    swap: "0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27",
                                    swap_token: "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
                                    name: "busd",
                                    gauge: "0x69Fb7c45726cfE2baDeE8317005d3F94bE838840"
                                },
                                susdv2: {
                                    swap: "0xA5407eAE9Ba41422680e2e00537571bcC53efBfD",
                                    swap_token: "0xC25a3A3b969415c80451098fa907EC722572917F",
                                    name: "susdv2",
                                    gauge: "0xA90996896660DEcC6E997655E065b23788857849"
                                },
                                pax: {
                                    swap: "0x06364f10B501e868329afBc005b3492902d6C763",
                                    swap_token: "0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8",
                                    name: "pax",
                                    gauge: "0x64E3C23bfc40722d3B649844055F1D51c1ac041d"
                                },
                                ren: {
                                    swap: "0x93054188d876f558f4a66B2EF1d97d16eDf0895B",
                                    swap_token: "0x49849C98ae39Fff122806C06791Fa73784FB3675",
                                    name: "ren",
                                    gauge: "0xB1F2cdeC61db658F091671F5f199635aEF202CAC"
                                },
                                sbtc: {
                                    swap: "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714",
                                    swap_token: "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
                                    name: "sbtc",
                                    gauge: "0x705350c4BcD35c9441419DdD5d2f097d7a55410F"
                                },
                                hbtc: {
                                    swap: "0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F",
                                    swap_token: "0xb19059ebb43466C323583928285a49f558E572Fd",
                                    name: "hbtc",
                                    gauge: "0x4c18E409Dc8619bFb6a1cB56D114C3f592E0aE79"
                                },
                                "3pool": {
                                    swap: "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                                    swap_token: "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
                                    name: "3pool",
                                    gauge: "0xbFcF63294aD7105dEa65aA58F8AE5BE2D9d0952A"
                                },
                                gusd: {
                                    swap: "0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956",
                                    swap_token: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
                                    name: "gusd",
                                    gauge: "0xC5cfaDA84E902aD92DD40194f0883ad49639b023"
                                },
                                husd: {
                                    swap: "0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604",
                                    swap_token: "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
                                    name: "husd",
                                    gauge: "0x2db0E83599a91b508Ac268a6197b8B14F5e72840"
                                },
                                usdk: {
                                    swap: "0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb",
                                    swap_token: "0x97E2768e8E73511cA874545DC5Ff8067eB19B787",
                                    name: "usdk",
                                    gauge: "0xC2b1DF84112619D190193E48148000e3990Bf627"
                                },
                                usdn: {
                                    swap: "0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1",
                                    swap_token: "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522",
                                    name: "usdn",
                                    gauge: "0xF98450B5602fa59CC66e1379DFfB6FDDc724CfC4"
                                },
                                musd: {
                                    swap: "0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6",
                                    swap_token: "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6",
                                    name: "musd",
                                    gauge: "0x5f626c30EC1215f4EdCc9982265E8b1F411D1352"
                                },
                                rsv: {
                                    swap: "0xC18cC39da8b11dA8c3541C598eE022258F9744da",
                                    swap_token: "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35",
                                    name: "rsv",
                                    gauge: "0x4dC4A289a8E33600D8bD4cf5F6313E43a37adec7"
                                },
                                tbtc: {
                                    swap: "0xC25099792E9349C7DD09759744ea681C7de2cb66",
                                    swap_token: "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd",
                                    name: "tbtc",
                                    gauge: "0x6828bcF74279eE32f2723eC536c22c51Eed383C6"
                                },
                                dusd: {
                                    swap: "0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c",
                                    swap_token: "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
                                    name: "dusd",
                                    gauge: "0xAEA6c312f4b3E04D752946d329693F7293bC2e6D"
                                }
                            }
                        },
                        feePerVeCRVFormat: function() {
                            return b["g"](this.feePerVeCRV)
                        },
                        myVeCRVFormat: function() {
                            return b["g"](this.myVeCRV / 1e18)
                        },
                        totalFeesFormat: function() {
                            return b["g"](this.totalFees)
                        },
                        totalWeeklyVolumeFormat: function() {
                            return b["g"](Object.entries(this.weeklyVolume || {}).map((function(e) {
                                var s = Object(l["a"])(e, 2),
                                    t = (s[0], s[1]);
                                return t
                            })).reduce((function(e, s) {
                                return +e + +s
                            }), 0))
                        },
                        totalWeeklyFeeFormat: function() {
                            return b["g"](.02 * Object.entries(this.weeklyVolume || {}).map((function(e) {
                                var s = Object(l["a"])(e, 2),
                                    t = (s[0], s[1]);
                                return t
                            })).reduce((function(e, s) {
                                return +e + +s
                            }), 0) / 100)
                        },
                        totalBalances: function() {
                            return C["a"].total, this.lockedCRV, this.veCRVfees, Date.now()
                        },
                        feesSince: function() {
                            return Math.round(Math.abs((Date.now() - 1600551527e3) / 864e5))
                        }
                    },
                    methods: {
                        getCurveRewards: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function s() {
                                var t, a, n, o, i, r, c, u, d, p, v, f, b, _, C, w, y, g, x, P, A, R, V, Y, k, F, D, B, O, N, E;
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            return e.getCRVAPY(), t = new h["f"].web3.eth.Contract(m["g"].susdv2.sCurveRewards_abi, m["g"].susdv2.sCurveRewards_address), a = new h["f"].web3.eth.Contract(m["g"].sbtc.sCurveRewards_abi, m["g"].sbtc.sCurveRewards_address), n = new h["f"].web3.eth.Contract(m["g"].iearn.sCurveRewards_abi, m["g"].iearn.sCurveRewards_address), o = new h["f"].web3.eth.Contract(m["g"].musd.sCurveRewards_abi, m["g"].musd.sCurveRewards_address), i = new h["f"].web3.eth.Contract(m["g"].tbtc.sCurveRewards_abi, m["g"].tbtc.sCurveRewards_address), r = new h["f"].web3.eth.Contract(m["g"].rsv.sCurveRewards_abi, m["g"].rsv.sCurveRewards_address), c = new h["f"].web3.eth.Contract(m["g"].dusd.sCurveRewards_abi, m["g"].dusd.sCurveRewards_address), u = new h["f"].web3.eth.Contract(m["g"].susdv2.swap_abi, m["g"].susdv2.swap_address), d = new h["f"].web3.eth.Contract(m["g"].musd.swap_abi, m["g"].musd.swap_address), p = new h["f"].web3.eth.Contract(m["g"].tbtc.swap_abi, m["g"].tbtc.swap_address), v = new h["f"].web3.eth.Contract(m["g"].rsv.swap_abi, m["g"].rsv.swap_address), f = new h["f"].web3.eth.Contract(m["g"].dusd.swap_abi, m["g"].dusd.swap_address), b = new h["f"].web3.eth.Contract(m["g"].sbtc.swap_abi, m["g"].sbtc.swap_address), _ = new h["f"].web3.eth.Contract(m["g"].iearn.swap_abi, m["g"].iearn.swap_address), C = new h["f"].web3.eth.Contract(m["d"], m["e"]), w = [
                                                [t._address, t.methods.totalSupply().encodeABI()],
                                                [u._address, u.methods.get_virtual_price().encodeABI()],
                                                [t._address, t.methods.DURATION().encodeABI()],
                                                [t._address, t.methods.rewardRate().encodeABI()],
                                                [a._address, a.methods.totalSupply().encodeABI()],
                                                [b._address, b.methods.get_virtual_price().encodeABI()],
                                                [C._address, C.methods.getBalance("0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f").encodeABI()],
                                                [C._address, C.methods.getBalance("0x408e41876cccdc0f92210600ef50372656052a38").encodeABI()],
                                                [n._address, n.methods.totalSupply().encodeABI()],
                                                [_._address, _.methods.get_virtual_price().encodeABI()],
                                                [n._address, n.methods.DURATION().encodeABI()],
                                                [n._address, n.methods.rewardRate().encodeABI()],
                                                [t._address, t.methods.periodFinish().encodeABI()],
                                                [a._address, a.methods.periodFinish().encodeABI()],
                                                [n._address, n.methods.periodFinish().encodeABI()],
                                                [o._address, o.methods.totalSupply().encodeABI()],
                                                [d._address, d.methods.get_virtual_price().encodeABI()],
                                                [o._address, o.methods.DURATION().encodeABI()],
                                                [o._address, o.methods.rewardRate().encodeABI()],
                                                [o._address, o.methods.periodFinish().encodeABI()],
                                                [i._address, i.methods.totalSupply().encodeABI()],
                                                [p._address, p.methods.get_virtual_price().encodeABI()],
                                                [i._address, i.methods.DURATION().encodeABI()],
                                                [i._address, i.methods.rewardRate().encodeABI()],
                                                [i._address, i.methods.periodFinish().encodeABI()],
                                                [r._address, r.methods.totalSupply().encodeABI()],
                                                [v._address, v.methods.get_virtual_price().encodeABI()],
                                                [r._address, r.methods.DURATION().encodeABI()],
                                                [r._address, r.methods.rewardRate().encodeABI()],
                                                [r._address, r.methods.periodFinish().encodeABI()],
                                                [c._address, c.methods.totalSupply().encodeABI()],
                                                [f._address, f.methods.get_virtual_price().encodeABI()],
                                                [c._address, c.methods.DURATION().encodeABI()],
                                                [c._address, c.methods.rewardRate().encodeABI()],
                                                [c._address, c.methods.periodFinish().encodeABI()]
                                            ], s.next = 19, h["f"].multicall.methods.aggregate(w).call();
                                        case 19:
                                            return y = s.sent, g = y[1].map((function(e) {
                                                return h["f"].web3.eth.abi.decodeParameter("uint256", e)
                                            })), s.next = 23, e.fetchPrices();
                                        case 23:
                                            x = s.sent, P = Object(l["a"])(x, 10), A = P[0], R = P[1], V = P[2], Y = P[3], k = P[4], F = P[5], D = P[6], B = P[7], O = P[8], N = P[9], e.balRewards = .64 * (g[6] / 1e18 * A + g[7] / 1e18 * R) / k * Y * 100, e.snxRewards = g[2] * g[3] / 1e18 * 365 / 7 * A / (+g[0] * +g[1] / 1e36) * 100, E = Date.now() / 1e3, +g[12] + 1800 < E && (e.snxRewards = 0), e.sbtcRewards = (1e4 * A + 25e3 * R) / 7 * 365 / (V * g[4] * g[5] / 1e36) * 100, +g[13] + 1800 < E && (e.sbtcRewards = 0), e.yfiRewards = g[10] * g[11] / 1e18 * 365 / 7 * F / (+g[8] * +g[9] / 1e36) * 100, +g[14] + 1800 < E && (e.yfiRewards = 0), e.mtaRewards = g[17] * g[18] / 1e18 * 365 / 7 * D / (+g[15] * +g[16] / 1e36) * 100, +g[19] + 1800 < E && (e.mtaRewards = 0), e.keepRewards = g[22] * g[23] / 1e18 * 365 / 7 * B / (V * g[20] * g[21] / 1e36) * 100, +g[24] + 1800 < E && (e.keepRewards = 0), e.rsrRewards = g[27] * g[28] / 1e18 * 365 / 7 * O / (g[25] * g[26] / 1e36) * 100, +g[29] + 1800 < E && (e.rsrRewards = 0), e.dfdRewards = g[32] * g[33] / 1e18 * 365 / 7 * N / (g[30] * g[31] / 1e36) * 100, +g[34] + 1800 < E && (e.dfdRewards = 0);
                                        case 41:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            })))()
                        },
                        fetchPrices: function() {
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var s, t, a, n, o, i, r, l, c, u, d, p, v, m;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Promise.allSettled([fetch("https://api.coingecko.com/api/v3/simple/price?ids=havven,republic-protocol,bitcoin,balancer,yearn-finance,meta,keep-network,reserve-rights-token,defidollar-dao&vs_currencies=usd"), fetch("https://pushservice.curve.fi/static/tvl.txt")]);
                                        case 2:
                                            return s = e.sent, e.next = 5, Promise.all(s.map((function(e, s) {
                                                return "fulfilled" == e.status && e.value.json()
                                            })));
                                        case 5:
                                            if (t = e.sent, a = t[0] && t[0].havven.usd, n = t[0] && t[0]["republic-protocol"].usd, o = t[0] && t[0]["bitcoin"].usd, i = t[0] && t[0].balancer.usd, r = t[1], l = t[0] && t[0]["yearn-finance"].usd, c = t[0] && t[0].meta.usd, u = t[0] && t[0]["keep-network"].usd, d = t[0] && t[0]["reserve-rights-token"].usd, p = t[0] && t[0]["defidollar-dao"].usd, "rejected" != s[0].status) {
                                                e.next = 29;
                                                break
                                            }
                                            return e.next = 19, Promise.allSettled([fetch("https://api.coinpaprika.com/v1/tickers/hav-havven"), fetch("https://api.coinpaprika.com/v1/tickers/ren-republic-protocol"), fetch("https://api.coinpaprika.com/v1/tickers/btc-bitcoin"), fetch("https://poloniex.com/public?command=returnTicker"), fetch("https://api.coinpaprika.com/v1/tickers/mta-meta")]);
                                        case 19:
                                            return v = e.sent, e.next = 22, Promise.all(v.map((function(e) {
                                                return "fulfilled" == e.status && e.value.json()
                                            })));
                                        case 22:
                                            m = e.sent, a = m[0] && m[0].quotes.USD.price, n = m[1] && m[1].quotes.USD.price, o = m[2] && m[2].quotes.USD.price, i = m[3] && m[3]["USDT_BAL"].last, l = m[4] && m[4]["USDT_YFI"].last, c = m[5] && m[5].quotes.USD.price;
                                        case 29:
                                            return e.abrupt("return", [a, n, o, i, r, l, c, u, d, p]);
                                        case 30:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getBalances: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function s() {
                                var t, a, n, o, c, u, p, v, f;
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            if (h["f"].default_account) {
                                                s.next = 2;
                                                break
                                            }
                                            return s.abrupt("return");
                                        case 2:
                                            return h["f"].contracts.compound = h["f"], t = e.pools.flatMap((function(e) {
                                                return [
                                                    [m["g"][e].token_address, "0x70a08231000000000000000000000000" + h["f"].default_account.slice(2)],
                                                    [m["g"][e].swap_address, "0xbb7b8b80"]
                                                ]
                                            })), t.push([m["g"].susdv2.sCurveRewards_address, "0x70a08231000000000000000000000000" + h["f"].default_account.slice(2)]), t.push([m["g"].sbtc.sCurveRewards_address, "0x70a08231000000000000000000000000" + h["f"].default_account.slice(2)]), t.push([m["g"].iearn.sCurveRewards_address, "0x70a08231000000000000000000000000" + h["f"].default_account.slice(2)]), a = t.length, t.push.apply(t, Object(i["a"])(e.decodedGauges.map((function(e) {
                                                return [e, "0x70a08231000000000000000000000000" + h["f"].default_account.slice(2)]
                                            })))), s.next = 11, h["f"].multicall.methods.aggregate(t).call();
                                        case 11:
                                            n = s.sent, o = n[1].map((function(e) {
                                                return web3.eth.abi.decodeParameter("uint256", e)
                                            })), c = o.slice(a), o = o.slice(0, a), b["d"](o, 2).slice(0, e.pools.length).map((function(s, t) {
                                                var a = e.pools[t];
                                                d["a"].set(e.balances, a, +s[0] * +s[1] / 1e36), ["tbtc", "ren", "sbtc", "hbtc"].includes(a) && d["a"].set(e.balances, a, e.balances[a] * e.btcPrice)
                                            })), u = o.length, d["a"].set(e.balances, "susdv2", e.balances.susdv2 + +o[u - 3] * o[9] / 1e36), d["a"].set(e.balances, "sbtc", e.balances.sbtc + +o[u - 2] * o[15] / 1e36 * e.btcPrice), d["a"].set(e.balances, "y", e.balances.y + +o[u - 1] * o[5] / 1e36), p = Object(r["a"])(Object.values(e.poolInfo).entries());
                                            try {
                                                for (f = function() {
                                                        var s = Object(l["a"])(v.value, 2),
                                                            n = s[0],
                                                            i = s[1],
                                                            r = t.slice(a),
                                                            u = +c[r.findIndex((function(e) {
                                                                return e[0] == i.gauge
                                                            }))] * (o[2 * n + 1] / 1e18);
                                                        ["ren", "sbtc", "hbtc", "tbtc"].includes(i.name) && (u *= e.btcPrice), d["a"].set(e.balances, i.name, e.balances[i.name] + u / 1e18)
                                                    }, p.s(); !(v = p.n()).done;) f()
                                            } catch (_) {
                                                p.e(_)
                                            } finally {
                                                p.f()
                                            }
                                        case 22:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            })))()
                        },
                        handle_pool_change: function(e) {
                            if (document.querySelector("#from_currency") != document.activeElement && document.querySelector("#custom_slippage_input") != document.activeElement && document.querySelector("#custom_gas_input") != document.activeElement) {
                                if (-1 == this.activePoolLink) return this.activePoolLink = 0;
                                if ("ArrowUp" == e.code && 0 != this.activePoolLink && (e.preventDefault(), this.activePoolLink--), "ArrowDown" == e.code && this.activePoolLink < 17 && (e.preventDefault(), this.activePoolLink++), e.code.includes("Digit")) {
                                    e.preventDefault();
                                    var s = e.code.slice(-1);
                                    if (s > 6) return;
                                    this.activePoolLink = s
                                }
                                "Enter" == e.code && (e.preventDefault(), this.$router.push("/" + pools[this.activePoolLink]))
                            }
                        },
                        getAPY: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function s() {
                                var t, a, n, o, i, c, u, p, v, m, h, _, C, w, y, g, x;
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            return t = ["compound", "usdt", "y", "busd", "susd", "pax", "tbtc", "ren2", "rens", "hbtc", "3pool", "gusd", "husd", "usdk", "usdn", "linkusd", "musd", "rsv", "tbtc", "dusd"], s.next = 3, Promise.all([fetch("".concat(window.domain, "/raw-stats/apys.json")), b["q"](fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"), 300)]);
                                        case 3:
                                            return a = s.sent, s.next = 6, Promise.all(a.map((function(e) {
                                                return e.json()
                                            })));
                                        case 6:
                                            for (n = s.sent, o = n[0], e.btcPrice = n[1], e.btcPrice = e.btcPrice.bitcoin.usd, i = 0, c = Object.entries(f["f"].volumes); i < c.length; i++) u = Object(l["a"])(c[i], 2), p = u[0], u[1], f["f"].volumes[p] && -1 == f["f"].volumes[p][0] && (v = "ren" == p ? o.volume.ren2 : "sbtc" == p ? o.volume.rens : o.volume[p], d["a"].set(f["f"].volumes[p], 0, v || 0), ["tbtc", "ren", "sbtc", "hbtc"].includes(p) && (d["a"].set(f["f"].volumes[p], 0, v * e.btcPrice || 0), d["a"].set(f["f"].volumes[p], 1, v || 0)));
                                            e.volumes = f["f"].volumes, m = Object(r["a"])(t.entries());
                                            try {
                                                for (m.s(); !(h = m.n()).done;) _ = Object(l["a"])(h.value, 2), _[0], C = _[1], w = o.apy.day[C], y = o.apy.week[C], g = o.apy.month[C], x = o.apy.total[C], e.daily_apy.push((100 * w).toFixed(2)), e.weekly_apy.push((100 * y).toFixed(2)), e.monthly_apy.push((100 * g).toFixed(2)), e.apy.push((100 * x).toFixed(2))
                                            } catch (P) {
                                                m.e(P)
                                            } finally {
                                                m.f()
                                            }
                                        case 14:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            })))()
                        },
                        getCRVAPY: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function s() {
                                var t, a, n, o, i, l, c, u, p, v, m, f, b, C, y, g, x, P, A, R, V, Y, k;
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            return t = "0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB", a = "0x6207d866000000000000000000000000", ["compound", "usdt", "iearn", "busd", "susdv2", "pax", "ren", "sbtc", "hbtc", "3pool", "gusd", "husd", "usdk", "usdn", "musd", "tbtc", "rsv", "dusd"], s.next = 5, fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,curve-dao-token&vs_currencies=usd");
                                        case 5:
                                            return n = s.sent, s.next = 8, n.json();
                                        case 8:
                                            return n = s.sent, o = n.bitcoin.usd, i = n["curve-dao-token"].usd, e.CRVprice = i, l = e.decodedGauges.map((function(e) {
                                                return [t, a + e.slice(2)]
                                            })), s.next = 15, h["f"].multicall.methods.aggregate(l).call();
                                        case 15:
                                            return c = s.sent, u = c[1].map((function(e, s) {
                                                return [l[s][0], web3.eth.abi.decodeParameter("uint256", e) / 1e18]
                                            })), p = e.decodedGauges.map((function(e) {
                                                return [
                                                    [e, "0x180692d0"],
                                                    [e, "0x17e28089"],
                                                    [e, "0x18160ddd"]
                                                ]
                                            })), s.next = 20, h["f"].multicall.methods.aggregate(p.flat()).call();
                                        case 20:
                                            return v = s.sent, m = v[1].map((function(e) {
                                                return web3.eth.abi.decodeParameter("uint256", e)
                                            })), f = m.filter((function(e, s) {
                                                return s % 3 == 0
                                            })).map((function(e) {
                                                return e / 1e18
                                            })), b = m.filter((function(e, s) {
                                                return s % 3 == 1
                                            })).map((function(e) {
                                                return e / 1e18
                                            })), C = m.filter((function(e, s) {
                                                return s % 3 == 2
                                            })).map((function(e) {
                                                return e / 1e18
                                            })), y = Object.values(e.poolInfo).map((function(e) {
                                                return [e.swap, "0xbb7b8b80"]
                                            })), s.next = 28, h["f"].multicall.methods.aggregate(y).call();
                                        case 28:
                                            return g = s.sent, x = g[1].map((function(e, s) {
                                                return [y[s][0], web3.eth.abi.decodeParameter("uint256", e) / 1e18]
                                            })), u.map((function(s, t) {
                                                var a = Object.values(e.poolInfo).find((function(e) {
                                                        return e.gauge.toLowerCase() == "0x" + l[t][1].slice(34).toLowerCase()
                                                    })).name,
                                                    n = e.poolInfo[a].swap,
                                                    r = x.find((function(e) {
                                                        return e[0].toLowerCase() == n.toLowerCase()
                                                    }))[1],
                                                    c = b[t];
                                                C[t];
                                                ["ren", "sbtc", "hbtc", "tbtc"].includes(a) && (c *= o);
                                                var u = f[t] * s[1] * 31536e3 / c * .4 / r,
                                                    p = u * i * 100;
                                                isNaN(p) && (p = 0), Object.values(e.poolInfo).find((function(e) {
                                                    return e.name == a
                                                })).gauge_relative_weight = s[1], d["a"].set(e.CRVAPYs, a, [p, 2.5 * p, 2.5]), d["a"].set(e.CRVboosts, a, 2.5)
                                            })), P = new _["GraphQLClient"]("https://api.thegraph.com/subgraphs/name/pengiundev/curve-gauges-mainnet"), A = Object(_["gql"])(w(), h["f"].default_account.toLowerCase()), s.next = 35, P.request(A, {});
                                        case 35:
                                            R = s.sent, R = R.gauges, V = Object(r["a"])(R);
                                            try {
                                                for (k = function() {
                                                        var s = Y.value,
                                                            t = Object.values(e.poolInfo).find((function(e) {
                                                                return e.gauge.toLowerCase() == s.gauge.toLowerCase()
                                                            }));
                                                        t.previousWorkingBalance = s.workingBalance, d["a"].set(e.boosts, t.name, s.workingBalance / (.4 * s.originalBalance)), e.CRVAPYs[t.name].push(e.CRVAPYs[t.name][0] * e.boosts[t.name])
                                                    }, V.s(); !(Y = V.n()).done;) k()
                                            } catch (F) {
                                                V.e(F)
                                            } finally {
                                                V.f()
                                            }
                                        case 39:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            })))()
                        },
                        getVeCRVAPY: function() {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function s() {
                                var t, a, n, o, i, r, c, u, d, p, v, b, _, C, w, y, g;
                                return regeneratorRuntime.wrap((function(s) {
                                    while (1) switch (s.prev = s.next) {
                                        case 0:
                                            return t = new h["f"].web3.eth.Contract(m["l"], m["g"]["3pool"].gauge_address), a = new h["f"].web3.eth.Contract(m["g"]["3pool"].swap_abi, m["g"]["3pool"].swap_address), n = e.pools.flatMap((function(e) {
                                                return [
                                                    [m["g"][e].gauge_address, t.methods.totalSupply().encodeABI()],
                                                    [m["g"][e].swap_address, a.methods.get_virtual_price().encodeABI()],
                                                    [m["g"][e].gauge_address, t.methods.balanceOf(h["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]
                                                ]
                                            })), e.votingEscrow = new web3.eth.Contract(m["w"], m["x"]), n.push.apply(n, [
                                                [e.votingEscrow._address, e.votingEscrow.methods.totalSupply().encodeABI()],
                                                [e.votingEscrow._address, e.votingEscrow.methods.balanceOf(h["f"].default_account || "0x0000000000000000000000000000000000000000").encodeABI()]
                                            ]), s.next = 7, h["f"].multicall.methods.aggregate(n).call();
                                        case 7:
                                            return o = s.sent, i = o[1].flatMap((function(e) {
                                                return +web3.eth.abi.decodeParameter("uint256", e)
                                            })), r = i.slice(0, i.length - 2).map((function(e) {
                                                return e / 1e18
                                            })), c = r.filter((function(e, s) {
                                                return s % 3 == 0
                                            })), r.filter((function(e, s) {
                                                return s % 3 == 1
                                            })), u = r.filter((function(e, s) {
                                                return s % 3 == 2
                                            })), d = i[i.length - 2], e.myVeCRV = i[i.length - 1], c.map((function(e, s) {
                                                return d * u[s] / e / 1e18
                                            })), s.next = 18, Promise.all([fetch("https://pushservice.curve.fi/crv/circulating_supply"), fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,curve-dao-token&vs_currencies=usd")]);
                                        case 18:
                                            return p = s.sent, s.next = 21, Promise.all(p.map((function(e) {
                                                return e.json()
                                            })));
                                        case 21:
                                            return p = s.sent, v = p[0], v.supply, b = v.CRVLocked, e.lockedCRV = b, _ = p[1], _.bitcoin.usd, C = _["curve-dao-token"].usd, e.CRVprice = C, s.next = 32, Promise.all([f["e"](), f["a"](e.pools, !1, 1440)]);
                                        case 32:
                                            console.log(Object.values(Object.fromEntries(Object.entries(f["f"].volumes).filter((function(e) {
                                                var s = Object(l["a"])(e, 2),
                                                    t = s[0];
                                                s[1];
                                                return !["tbtc"].includes(t)
                                            })).map((function(e) {
                                                var s = Object(l["a"])(e, 2),
                                                    t = s[0],
                                                    a = s[1];
                                                return [t, a[0]]
                                            })))).reduce((function(e, s) {
                                                return +e + +s
                                            })), "DAILY VOLUME"), w = Object.fromEntries(Object.entries(f["f"].volumes).filter((function(e) {
                                                var s = Object(l["a"])(e, 2),
                                                    t = s[0];
                                                s[1];
                                                return !["tbtc"].includes(t)
                                            })).map((function(e) {
                                                var s = Object(l["a"])(e, 2),
                                                    t = s[0],
                                                    a = s[1];
                                                return [t, .02 * a[0] / 100]
                                            }))), e.totalFees = Object.values(w).reduce((function(e, s) {
                                                return e + s
                                            }), 0), e.feeAPY = 365 * +e.totalFees / (+d / 1e18 * +C) * 100, e.myFee = +e.totalFees * e.myVeCRV / d, e.feePerVeCRV = 365 * +e.totalFees / (d / 1e18), y = Object.entries(f["f"].volumeData[1440]).map((function(e) {
                                                var s = Object(l["a"])(e, 2),
                                                    t = s[0],
                                                    a = s[1];
                                                return [t, a.filter((function(e) {
                                                    return e.timestamp > Date.now() / 1e3 - 604800
                                                })).map((function(e) {
                                                    return Object.entries(e.volume).map((function(e) {
                                                        var s = Object(l["a"])(e, 2),
                                                            a = s[0],
                                                            n = s[1],
                                                            o = "coin_precisions";
                                                        return m["g"]["susd" == t ? "susdv2" : t].is_meta && (o = "meta_coin_precisions"), n[0] / m["g"]["susd" == t ? "susdv2" : t][o][a.split("-")[0]]
                                                    })).reduce((function(e, s) {
                                                        return +e + +s
                                                    }), 0)
                                                })).reduce((function(e, s) {
                                                    return +e + +s
                                                }), 0)]
                                            })), e.weeklyVolume = Object.fromEntries(y), g = .02 * Object.values(e.weeklyVolume).reduce((function(e, s) {
                                                return e + s
                                            })) / 100, e.totalFees = Object.values(w).reduce((function(e, s) {
                                                return e + s
                                            }), 0), e.myFee = +g / 7 * e.myVeCRV / d, e.feePerVeCRV = 52 * g / (d / 1e18), e.feeAPY = 52 * g / (+d / 1e18 * +C) * 100;
                                        case 45:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            })))()
                        },
                        formatNumber: function(e) {
                            return b["g"](e)
                        },
                        compareLPCRV: function() {
                            var e = C["a"].total,
                                s = .5 * this.totalVolume / e,
                                t = .5 * this.totalVolume / (this.lockedCRV / 1e18 * this.CRVprice);
                            this.ratio = t / s, isFinite(this.ratio) || (this.ratio = null)
                        }
                    }
                },
                g = y,
                x = (t("813b"), t("2877")),
                P = Object(x["a"])(g, a, n, !1, null, "30161758", null);
            s["default"] = P.exports
        }
    }
]);
//# sourceMappingURL=chunk-5e7591f8.c6211b6f.js.map