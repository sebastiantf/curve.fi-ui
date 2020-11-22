(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-29f39a32"], {
        "3d15": function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return p
            }));
            const r = Symbol("Comlink.proxy"),
                i = Symbol("Comlink.endpoint"),
                o = Symbol("Comlink.releaseProxy"),
                u = new WeakSet,
                s = new Map([
                    ["proxy", {
                        canHandle: t => t && t[r],
                        serialize(t) {
                            const {
                                port1: n,
                                port2: e
                            } = new MessageChannel;
                            return a(t, n), [e, [e]]
                        },
                        deserialize: t => (t.start(), p(t))
                    }],
                    ["throw", {
                        canHandle: t => u.has(t),
                        serialize(t) {
                            const n = t instanceof Error;
                            let e = t;
                            return n && (e = {
                                isError: n,
                                message: t.message,
                                stack: t.stack
                            }), [e, []]
                        },
                        deserialize(t) {
                            if (t.isError) throw Object.assign(new Error, t);
                            throw t
                        }
                    }]
                ]);

            function a(t, n = self) {
                n.addEventListener("message", (function e(r) {
                    if (!r || !r.data) return;
                    const {
                        id: i,
                        type: o,
                        path: s
                    } = Object.assign({
                        path: []
                    }, r.data), c = (r.data.argumentList || []).map(M);
                    let p;
                    try {
                        const n = s.slice(0, -1).reduce((t, n) => t[n], t),
                            e = s.reduce((t, n) => t[n], t);
                        switch (o) {
                            case 0:
                                p = e;
                                break;
                            case 1:
                                n[s.slice(-1)[0]] = M(r.data.value), p = !0;
                                break;
                            case 2:
                                p = e.apply(n, c);
                                break;
                            case 3:
                                {
                                    const t = new e(...c);p = b(t)
                                }
                                break;
                            case 4:
                                {
                                    const {
                                        port1: n,
                                        port2: e
                                    } = new MessageChannel;a(t, e),
                                    p = y(n, [n])
                                }
                                break;
                            case 5:
                                p = void 0;
                                break
                        }
                    } catch (f) {
                        p = f, u.add(f)
                    }
                    Promise.resolve(p).catch(t => (u.add(t), t)).then(t => {
                        const [r, u] = N(t);
                        n.postMessage(Object.assign(Object.assign({}, r), {
                            id: i
                        }), u), 5 === o && (n.removeEventListener("message", e), h(n))
                    })
                })), n.start && n.start()
            }

            function c(t) {
                return "MessagePort" === t.constructor.name
            }

            function h(t) {
                c(t) && t.close()
            }

            function p(t, n) {
                return m(t, [], n)
            }

            function f(t) {
                if (t) throw new Error("Proxy has been released and is not useable")
            }

            function m(t, n = [], e = function() {}) {
                let r = !1;
                const u = new Proxy(e, {
                    get(e, i) {
                        if (f(r), i === o) return () => v(t, {
                            type: 5,
                            path: n.map(t => t.toString())
                        }).then(() => {
                            h(t), r = !0
                        });
                        if ("then" === i) {
                            if (0 === n.length) return {
                                then: () => u
                            };
                            const e = v(t, {
                                type: 0,
                                path: n.map(t => t.toString())
                            }).then(M);
                            return e.then.bind(e)
                        }
                        return m(t, [...n, i])
                    },
                    set(e, i, o) {
                        f(r);
                        const [u, s] = N(o);
                        return v(t, {
                            type: 1,
                            path: [...n, i].map(t => t.toString()),
                            value: u
                        }, s).then(M)
                    },
                    apply(e, o, u) {
                        f(r);
                        const s = n[n.length - 1];
                        if (s === i) return v(t, {
                            type: 4
                        }).then(M);
                        if ("bind" === s) return m(t, n.slice(0, -1));
                        const [a, c] = g(u);
                        return v(t, {
                            type: 2,
                            path: n.map(t => t.toString()),
                            argumentList: a
                        }, c).then(M)
                    },
                    construct(e, i) {
                        f(r);
                        const [o, u] = g(i);
                        return v(t, {
                            type: 3,
                            path: n.map(t => t.toString()),
                            argumentList: o
                        }, u).then(M)
                    }
                });
                return u
            }

            function l(t) {
                return Array.prototype.concat.apply([], t)
            }

            function g(t) {
                const n = t.map(N);
                return [n.map(t => t[0]), l(n.map(t => t[1]))]
            }
            const d = new WeakMap;

            function y(t, n) {
                return d.set(t, n), t
            }

            function b(t) {
                return Object.assign(t, {
                    [r]: !0
                })
            }

            function N(t) {
                for (const [n, e] of s)
                    if (e.canHandle(t)) {
                        const [r, i] = e.serialize(t);
                        return [{
                            type: 3,
                            name: n,
                            value: r
                        }, i]
                    }
                return [{
                    type: 0,
                    value: t
                }, d.get(t) || []]
            }

            function M(t) {
                switch (t.type) {
                    case 3:
                        return s.get(t.name).deserialize(t.value);
                    case 0:
                        return t.value
                }
            }

            function v(t, n, e) {
                return new Promise(r => {
                    const i = w();
                    t.addEventListener("message", (function n(e) {
                        e.data && e.data.id && e.data.id === i && (t.removeEventListener("message", n), r(e.data))
                    })), t.start && t.start(), t.postMessage(Object.assign({
                        id: i
                    }, n), e)
                })
            }

            function w() {
                return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-")
            }
        },
        "5fd7": function(t, n, e) {
            "use strict";
            var r = e("8c90"),
                i = e.n(r),
                o = 17,
                u = 9e15,
                s = 308,
                a = -324,
                c = 1e-10,
                h = function() {
                    for (var t = [], n = a + 1; n <= s; n++) t.push(Number("1e" + n));
                    var e = 323;
                    return function(n) {
                        return t[n + e]
                    }
                }(),
                p = function(t) {
                    return t instanceof N ? t : new N(t)
                },
                f = function(t, n) {
                    return (new N).fromMantissaExponent(t, n)
                },
                m = function(t, n) {
                    return (new N).fromMantissaExponent_noNormalize(t, n)
                };

            function l(t, n, e, r) {
                var i = n.mul(e.pow(r));
                return N.floor(t.div(i).mul(e.sub(1)).add(1).log10() / e.log10())
            }

            function g(t, n, e, r) {
                return n.mul(e.pow(r)).mul(N.sub(1, e.pow(t))).div(N.sub(1, e))
            }

            function d(t, n, e, r) {
                var i = n.add(r.mul(e)),
                    o = i.sub(e.div(2)),
                    u = o.pow(2);
                return o.neg().add(u.add(e.mul(t).mul(2)).sqrt()).div(e).floor()
            }

            function y(t, n, e, r) {
                var i = n.add(r.mul(e));
                return t.div(2).mul(i.mul(2).plus(t.sub(1).mul(e)))
            }

            function b(t, n, e) {
                return t.div(n).add(t.div(e))
            }
            var N = function() {
                    function t(n) {
                        this.mantissa = NaN, this.exponent = NaN, void 0 === n ? (this.m = 0, this.e = 0) : n instanceof t ? this.fromDecimal(n) : "number" === typeof n ? this.fromNumber(n) : this.fromString(n)
                    }
                    return Object.defineProperty(t.prototype, "m", {
                        get: function() {
                            return this.mantissa
                        },
                        set: function(t) {
                            this.mantissa = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "e", {
                        get: function() {
                            return this.exponent
                        },
                        set: function(t) {
                            this.exponent = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "s", {
                        get: function() {
                            return this.sign()
                        },
                        set: function(t) {
                            if (0 === t) return this.e = 0, void(this.m = 0);
                            this.sgn() !== t && (this.m = -this.m)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.fromMantissaExponent = function(n, e) {
                        return (new t).fromMantissaExponent(n, e)
                    }, t.fromMantissaExponent_noNormalize = function(n, e) {
                        return (new t).fromMantissaExponent_noNormalize(n, e)
                    }, t.fromDecimal = function(n) {
                        return (new t).fromDecimal(n)
                    }, t.fromNumber = function(n) {
                        return (new t).fromNumber(n)
                    }, t.fromString = function(n) {
                        return (new t).fromString(n)
                    }, t.fromValue = function(n) {
                        return (new t).fromValue(n)
                    }, t.fromValue_noAlloc = function(n) {
                        return n instanceof t ? n : new t(n)
                    }, t.abs = function(t) {
                        return p(t).abs()
                    }, t.neg = function(t) {
                        return p(t).neg()
                    }, t.negate = function(t) {
                        return p(t).neg()
                    }, t.negated = function(t) {
                        return p(t).neg()
                    }, t.sign = function(t) {
                        return p(t).sign()
                    }, t.sgn = function(t) {
                        return p(t).sign()
                    }, t.round = function(t) {
                        return p(t).round()
                    }, t.floor = function(t) {
                        return p(t).floor()
                    }, t.ceil = function(t) {
                        return p(t).ceil()
                    }, t.trunc = function(t) {
                        return p(t).trunc()
                    }, t.add = function(t, n) {
                        return p(t).add(n)
                    }, t.plus = function(t, n) {
                        return p(t).add(n)
                    }, t.sub = function(t, n) {
                        return p(t).sub(n)
                    }, t.subtract = function(t, n) {
                        return p(t).sub(n)
                    }, t.minus = function(t, n) {
                        return p(t).sub(n)
                    }, t.mul = function(t, n) {
                        return p(t).mul(n)
                    }, t.multiply = function(t, n) {
                        return p(t).mul(n)
                    }, t.times = function(t, n) {
                        return p(t).mul(n)
                    }, t.div = function(t, n) {
                        return p(t).div(n)
                    }, t.divide = function(t, n) {
                        return p(t).div(n)
                    }, t.recip = function(t) {
                        return p(t).recip()
                    }, t.reciprocal = function(t) {
                        return p(t).recip()
                    }, t.reciprocate = function(t) {
                        return p(t).reciprocate()
                    }, t.cmp = function(t, n) {
                        return p(t).cmp(n)
                    }, t.compare = function(t, n) {
                        return p(t).cmp(n)
                    }, t.eq = function(t, n) {
                        return p(t).eq(n)
                    }, t.equals = function(t, n) {
                        return p(t).eq(n)
                    }, t.neq = function(t, n) {
                        return p(t).neq(n)
                    }, t.notEquals = function(t, n) {
                        return p(t).notEquals(n)
                    }, t.lt = function(t, n) {
                        return p(t).lt(n)
                    }, t.lte = function(t, n) {
                        return p(t).lte(n)
                    }, t.gt = function(t, n) {
                        return p(t).gt(n)
                    }, t.gte = function(t, n) {
                        return p(t).gte(n)
                    }, t.max = function(t, n) {
                        return p(t).max(n)
                    }, t.min = function(t, n) {
                        return p(t).min(n)
                    }, t.clamp = function(t, n, e) {
                        return p(t).clamp(n, e)
                    }, t.clampMin = function(t, n) {
                        return p(t).clampMin(n)
                    }, t.clampMax = function(t, n) {
                        return p(t).clampMax(n)
                    }, t.cmp_tolerance = function(t, n, e) {
                        return p(t).cmp_tolerance(n, e)
                    }, t.compare_tolerance = function(t, n, e) {
                        return p(t).cmp_tolerance(n, e)
                    }, t.eq_tolerance = function(t, n, e) {
                        return p(t).eq_tolerance(n, e)
                    }, t.equals_tolerance = function(t, n, e) {
                        return p(t).eq_tolerance(n, e)
                    }, t.neq_tolerance = function(t, n, e) {
                        return p(t).neq_tolerance(n, e)
                    }, t.notEquals_tolerance = function(t, n, e) {
                        return p(t).notEquals_tolerance(n, e)
                    }, t.lt_tolerance = function(t, n, e) {
                        return p(t).lt_tolerance(n, e)
                    }, t.lte_tolerance = function(t, n, e) {
                        return p(t).lte_tolerance(n, e)
                    }, t.gt_tolerance = function(t, n, e) {
                        return p(t).gt_tolerance(n, e)
                    }, t.gte_tolerance = function(t, n, e) {
                        return p(t).gte_tolerance(n, e)
                    }, t.log10 = function(t) {
                        return p(t).log10()
                    }, t.absLog10 = function(t) {
                        return p(t).absLog10()
                    }, t.pLog10 = function(t) {
                        return p(t).pLog10()
                    }, t.log = function(t, n) {
                        return p(t).log(n)
                    }, t.log2 = function(t) {
                        return p(t).log2()
                    }, t.ln = function(t) {
                        return p(t).ln()
                    }, t.logarithm = function(t, n) {
                        return p(t).logarithm(n)
                    }, t.pow10 = function(t) {
                        return Number.isInteger(t) ? m(1, t) : f(Math.pow(10, t % 1), Math.trunc(t))
                    }, t.pow = function(t, n) {
                        return "number" === typeof t && 10 === t && "number" === typeof n && Number.isInteger(n) ? m(1, n) : p(t).pow(n)
                    }, t.exp = function(t) {
                        return p(t).exp()
                    }, t.sqr = function(t) {
                        return p(t).sqr()
                    }, t.sqrt = function(t) {
                        return p(t).sqrt()
                    }, t.cube = function(t) {
                        return p(t).cube()
                    }, t.cbrt = function(t) {
                        return p(t).cbrt()
                    }, t.dp = function(t) {
                        return p(t).dp()
                    }, t.decimalPlaces = function(t) {
                        return p(t).dp()
                    }, t.affordGeometricSeries = function(t, n, e, r) {
                        return l(p(t), p(n), p(e), r)
                    }, t.sumGeometricSeries = function(t, n, e, r) {
                        return g(t, p(n), p(e), r)
                    }, t.affordArithmeticSeries = function(t, n, e, r) {
                        return d(p(t), p(n), p(e), p(r))
                    }, t.sumArithmeticSeries = function(t, n, e, r) {
                        return y(p(t), p(n), p(e), p(r))
                    }, t.efficiencyOfPurchase = function(t, n, e) {
                        return b(p(t), p(n), p(e))
                    }, t.randomDecimalForTesting = function(t) {
                        if (20 * Math.random() < 1) return m(0, 0);
                        var n = 10 * Math.random();
                        10 * Math.random() < 1 && (n = Math.round(n)), n *= Math.sign(2 * Math.random() - 1);
                        var e = Math.floor(Math.random() * t * 2) - t;
                        return f(n, e)
                    }, t.prototype.normalize = function() {
                        if (this.m >= 1 && this.m < 10) return this;
                        if (0 === this.m) return this.m = 0, this.e = 0, this;
                        var t = Math.floor(Math.log10(Math.abs(this.m)));
                        return this.m = t === a ? 10 * this.m / 1e-323 : this.m / h(t), this.e += t, this
                    }, t.prototype.fromMantissaExponent = function(t, n) {
                        return isFinite(t) && isFinite(n) ? (this.m = t, this.e = n, this.normalize(), this) : (t = Number.NaN, n = Number.NaN, this)
                    }, t.prototype.fromMantissaExponent_noNormalize = function(t, n) {
                        return this.m = t, this.e = n, this
                    }, t.prototype.fromDecimal = function(t) {
                        return this.m = t.m, this.e = t.e, this
                    }, t.prototype.fromNumber = function(t) {
                        return isNaN(t) ? (this.m = Number.NaN, this.e = Number.NaN) : t === Number.POSITIVE_INFINITY ? (this.m = 1, this.e = u) : t === Number.NEGATIVE_INFINITY ? (this.m = -1, this.e = u) : 0 === t ? (this.m = 0, this.e = 0) : (this.e = Math.floor(Math.log10(Math.abs(t))), this.m = this.e === a ? 10 * t / 1e-323 : t / h(this.e), this.normalize()), this
                    }, t.prototype.fromString = function(t) {
                        if (-1 !== t.indexOf("e")) {
                            var n = t.split("e");
                            this.m = parseFloat(n[0]), this.e = parseFloat(n[1]), this.normalize()
                        } else if ("NaN" === t) this.m = Number.NaN, this.e = Number.NaN;
                        else if (this.fromNumber(parseFloat(t)), isNaN(this.m)) throw Error("[DecimalError] Invalid argument: " + t);
                        return this
                    }, t.prototype.fromValue = function(n) {
                        return n instanceof t ? this.fromDecimal(n) : "number" === typeof n ? this.fromNumber(n) : "string" === typeof n ? this.fromString(n) : (this.m = 0, this.e = 0, this)
                    }, t.prototype.toNumber = function() {
                        if (!isFinite(this.e)) return Number.NaN;
                        if (this.e > s) return this.m > 0 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
                        if (this.e < a) return 0;
                        if (this.e === a) return this.m > 0 ? 5e-324 : -5e-324;
                        var t = this.m * h(this.e);
                        if (!isFinite(t) || this.e < 0) return t;
                        var n = Math.round(t);
                        return Math.abs(n - t) < c ? n : t
                    }, t.prototype.mantissaWithDecimalPlaces = function(t) {
                        if (isNaN(this.m) || isNaN(this.e)) return Number.NaN;
                        if (0 === this.m) return 0;
                        var n = t + 1,
                            e = Math.ceil(Math.log10(Math.abs(this.m))),
                            r = Math.round(this.m * Math.pow(10, n - e)) * Math.pow(10, e - n);
                        return parseFloat(r.toFixed(Math.max(n - e, 0)))
                    }, t.prototype.toString = function() {
                        return isNaN(this.m) || isNaN(this.e) ? "NaN" : this.e >= u ? this.m > 0 ? "Infinity" : "-Infinity" : this.e <= -u || 0 === this.m ? "0" : this.e < 21 && this.e > -7 ? this.toNumber().toString() : this.m + "e" + (this.e >= 0 ? "+" : "") + this.e
                    }, t.prototype.toExponential = function(t) {
                        if (isNaN(this.m) || isNaN(this.e)) return "NaN";
                        if (this.e >= u) return this.m > 0 ? "Infinity" : "-Infinity";
                        if (this.e <= -u || 0 === this.m) return "0" + (t > 0 ? i()(".", t + 1, "0") : "") + "e+0";
                        if (this.e > a && this.e < s) return this.toNumber().toExponential(t);
                        isFinite(t) || (t = o);
                        var n = t + 1,
                            e = Math.max(1, Math.ceil(Math.log10(Math.abs(this.m)))),
                            r = Math.round(this.m * Math.pow(10, n - e)) * Math.pow(10, e - n);
                        return r.toFixed(Math.max(n - e, 0)) + "e" + (this.e >= 0 ? "+" : "") + this.e
                    }, t.prototype.toFixed = function(t) {
                        return isNaN(this.m) || isNaN(this.e) ? "NaN" : this.e >= u ? this.m > 0 ? "Infinity" : "-Infinity" : this.e <= -u || 0 === this.m ? "0" + (t > 0 ? i()(".", t + 1, "0") : "") : this.e >= o ? this.m.toString().replace(".", "").padEnd(this.e + 1, "0") + (t > 0 ? i()(".", t + 1, "0") : "") : this.toNumber().toFixed(t)
                    }, t.prototype.toPrecision = function(t) {
                        return this.e <= -7 ? this.toExponential(t - 1) : t > this.e ? this.toFixed(t - this.e - 1) : this.toExponential(t - 1)
                    }, t.prototype.valueOf = function() {
                        return this.toString()
                    }, t.prototype.toJSON = function() {
                        return this.toString()
                    }, t.prototype.toStringWithDecimalPlaces = function(t) {
                        return this.toExponential(t)
                    }, t.prototype.abs = function() {
                        return m(Math.abs(this.m), this.e)
                    }, t.prototype.neg = function() {
                        return m(-this.m, this.e)
                    }, t.prototype.negate = function() {
                        return this.neg()
                    }, t.prototype.negated = function() {
                        return this.neg()
                    }, t.prototype.sign = function() {
                        return Math.sign(this.m)
                    }, t.prototype.sgn = function() {
                        return this.sign()
                    }, t.prototype.round = function() {
                        return this.e < -1 ? new t(0) : this.e < o ? new t(Math.round(this.toNumber())) : this
                    }, t.prototype.floor = function() {
                        return this.e < -1 ? Math.sign(this.m) >= 0 ? new t(0) : new t(-1) : this.e < o ? new t(Math.floor(this.toNumber())) : this
                    }, t.prototype.ceil = function() {
                        return this.e < -1 ? Math.sign(this.m) > 0 ? new t(1) : new t(0) : this.e < o ? new t(Math.ceil(this.toNumber())) : this
                    }, t.prototype.trunc = function() {
                        return this.e < 0 ? new t(0) : this.e < o ? new t(Math.trunc(this.toNumber())) : this
                    }, t.prototype.add = function(t) {
                        var n, e, r = p(t);
                        return 0 === this.m ? r : 0 === r.m ? this : (this.e >= r.e ? (n = this, e = r) : (n = r, e = this), n.e - e.e > o ? n : f(Math.round(1e14 * n.m + 1e14 * e.m * h(e.e - n.e)), n.e - 14))
                    }, t.prototype.plus = function(t) {
                        return this.add(t)
                    }, t.prototype.sub = function(t) {
                        return this.add(p(t).neg())
                    }, t.prototype.subtract = function(t) {
                        return this.sub(t)
                    }, t.prototype.minus = function(t) {
                        return this.sub(t)
                    }, t.prototype.mul = function(n) {
                        if ("number" === typeof n) return n < 1e307 && n > -1e307 ? f(this.m * n, this.e) : f(1e-307 * this.m * n, this.e + 307);
                        var e = "string" === typeof n ? new t(n) : n;
                        return f(this.m * e.m, this.e + e.e)
                    }, t.prototype.multiply = function(t) {
                        return this.mul(t)
                    }, t.prototype.times = function(t) {
                        return this.mul(t)
                    }, t.prototype.div = function(t) {
                        return this.mul(p(t).recip())
                    }, t.prototype.divide = function(t) {
                        return this.div(t)
                    }, t.prototype.divideBy = function(t) {
                        return this.div(t)
                    }, t.prototype.dividedBy = function(t) {
                        return this.div(t)
                    }, t.prototype.recip = function() {
                        return f(1 / this.m, -this.e)
                    }, t.prototype.reciprocal = function() {
                        return this.recip()
                    }, t.prototype.reciprocate = function() {
                        return this.recip()
                    }, t.prototype.cmp = function(t) {
                        var n = p(t);
                        if (0 === this.m) {
                            if (0 === n.m) return 0;
                            if (n.m < 0) return 1;
                            if (n.m > 0) return -1
                        }
                        if (0 === n.m) {
                            if (this.m < 0) return -1;
                            if (this.m > 0) return 1
                        }
                        if (this.m > 0) return n.m < 0 || this.e > n.e ? 1 : this.e < n.e ? -1 : this.m > n.m ? 1 : this.m < n.m ? -1 : 0;
                        if (this.m < 0) return n.m > 0 || this.e > n.e ? -1 : this.e < n.e || this.m > n.m ? 1 : this.m < n.m ? -1 : 0;
                        throw Error("Unreachable code")
                    }, t.prototype.compare = function(t) {
                        return this.cmp(t)
                    }, t.prototype.eq = function(t) {
                        var n = p(t);
                        return this.e === n.e && this.m === n.m
                    }, t.prototype.equals = function(t) {
                        return this.eq(t)
                    }, t.prototype.neq = function(t) {
                        return !this.eq(t)
                    }, t.prototype.notEquals = function(t) {
                        return this.neq(t)
                    }, t.prototype.lt = function(t) {
                        var n = p(t);
                        return 0 === this.m ? n.m > 0 : 0 === n.m ? this.m <= 0 : this.e === n.e ? this.m < n.m : this.m > 0 ? n.m > 0 && this.e < n.e : n.m > 0 || this.e > n.e
                    }, t.prototype.lte = function(t) {
                        return !this.gt(t)
                    }, t.prototype.gt = function(t) {
                        var n = p(t);
                        return 0 === this.m ? n.m < 0 : 0 === n.m ? this.m > 0 : this.e === n.e ? this.m > n.m : this.m > 0 ? n.m < 0 || this.e > n.e : n.m < 0 && this.e < n.e
                    }, t.prototype.gte = function(t) {
                        return !this.lt(t)
                    }, t.prototype.max = function(t) {
                        var n = p(t);
                        return this.lt(n) ? n : this
                    }, t.prototype.min = function(t) {
                        var n = p(t);
                        return this.gt(n) ? n : this
                    }, t.prototype.clamp = function(t, n) {
                        return this.max(t).min(n)
                    }, t.prototype.clampMin = function(t) {
                        return this.max(t)
                    }, t.prototype.clampMax = function(t) {
                        return this.min(t)
                    }, t.prototype.cmp_tolerance = function(t, n) {
                        var e = p(t);
                        return this.eq_tolerance(e, n) ? 0 : this.cmp(e)
                    }, t.prototype.compare_tolerance = function(t, n) {
                        return this.cmp_tolerance(t, n)
                    }, t.prototype.eq_tolerance = function(n, e) {
                        var r = p(n);
                        return t.lte(this.sub(r).abs(), t.max(this.abs(), r.abs()).mul(e))
                    }, t.prototype.equals_tolerance = function(t, n) {
                        return this.eq_tolerance(t, n)
                    }, t.prototype.neq_tolerance = function(t, n) {
                        return !this.eq_tolerance(t, n)
                    }, t.prototype.notEquals_tolerance = function(t, n) {
                        return this.neq_tolerance(t, n)
                    }, t.prototype.lt_tolerance = function(t, n) {
                        var e = p(t);
                        return !this.eq_tolerance(e, n) && this.lt(e)
                    }, t.prototype.lte_tolerance = function(t, n) {
                        var e = p(t);
                        return this.eq_tolerance(e, n) || this.lt(e)
                    }, t.prototype.gt_tolerance = function(t, n) {
                        var e = p(t);
                        return !this.eq_tolerance(e, n) && this.gt(e)
                    }, t.prototype.gte_tolerance = function(t, n) {
                        var e = p(t);
                        return this.eq_tolerance(e, n) || this.gt(e)
                    }, t.prototype.log10 = function() {
                        return this.e + Math.log10(this.m)
                    }, t.prototype.absLog10 = function() {
                        return this.e + Math.log10(Math.abs(this.m))
                    }, t.prototype.pLog10 = function() {
                        return this.m <= 0 || this.e < 0 ? 0 : this.log10()
                    }, t.prototype.log = function(t) {
                        return Math.LN10 / Math.log(t) * this.log10()
                    }, t.prototype.log2 = function() {
                        return 3.321928094887362 * this.log10()
                    }, t.prototype.ln = function() {
                        return 2.302585092994046 * this.log10()
                    }, t.prototype.logarithm = function(t) {
                        return this.log(t)
                    }, t.prototype.pow = function(n) {
                        var e, r = n instanceof t ? n.toNumber() : n,
                            i = this.e * r;
                        if (Number.isSafeInteger(i) && (e = Math.pow(this.m, r), isFinite(e) && 0 !== e)) return f(e, i);
                        var o = Math.trunc(i),
                            u = i - o;
                        if (e = Math.pow(10, r * Math.log10(this.m) + u), isFinite(e) && 0 !== e) return f(e, o);
                        var s = t.pow10(r * this.absLog10());
                        return -1 === this.sign() && r % 2 === 1 ? s.neg() : s
                    }, t.prototype.pow_base = function(t) {
                        return p(t).pow(this)
                    }, t.prototype.factorial = function() {
                        var n = this.toNumber() + 1;
                        return t.pow(n / Math.E * Math.sqrt(n * Math.sinh(1 / n) + 1 / (810 * Math.pow(n, 6))), n).mul(Math.sqrt(2 * Math.PI / n))
                    }, t.prototype.exp = function() {
                        var n = this.toNumber();
                        return -706 < n && n < 709 ? t.fromNumber(Math.exp(n)) : t.pow(Math.E, n)
                    }, t.prototype.sqr = function() {
                        return f(Math.pow(this.m, 2), 2 * this.e)
                    }, t.prototype.sqrt = function() {
                        return this.m < 0 ? new t(Number.NaN) : this.e % 2 !== 0 ? f(3.16227766016838 * Math.sqrt(this.m), Math.floor(this.e / 2)) : f(Math.sqrt(this.m), Math.floor(this.e / 2))
                    }, t.prototype.cube = function() {
                        return f(Math.pow(this.m, 3), 3 * this.e)
                    }, t.prototype.cbrt = function() {
                        var t = 1,
                            n = this.m;
                        n < 0 && (t = -1, n = -n);
                        var e = t * Math.pow(n, 1 / 3),
                            r = this.e % 3;
                        return f(1 === r || -1 === r ? 2.154434690031884 * e : 0 !== r ? 4.641588833612779 * e : e, Math.floor(this.e / 3))
                    }, t.prototype.sinh = function() {
                        return this.exp().sub(this.negate().exp()).div(2)
                    }, t.prototype.cosh = function() {
                        return this.exp().add(this.negate().exp()).div(2)
                    }, t.prototype.tanh = function() {
                        return this.sinh().div(this.cosh())
                    }, t.prototype.asinh = function() {
                        return t.ln(this.add(this.sqr().add(1).sqrt()))
                    }, t.prototype.acosh = function() {
                        return t.ln(this.add(this.sqr().sub(1).sqrt()))
                    }, t.prototype.atanh = function() {
                        return this.abs().gte(1) ? Number.NaN : t.ln(this.add(1).div(new t(1).sub(this))) / 2
                    }, t.prototype.ascensionPenalty = function(t) {
                        return 0 === t ? this : this.pow(Math.pow(10, -t))
                    }, t.prototype.egg = function() {
                        return this.add(9)
                    }, t.prototype.lessThanOrEqualTo = function(t) {
                        return this.cmp(t) < 1
                    }, t.prototype.lessThan = function(t) {
                        return this.cmp(t) < 0
                    }, t.prototype.greaterThanOrEqualTo = function(t) {
                        return this.cmp(t) > -1
                    }, t.prototype.greaterThan = function(t) {
                        return this.cmp(t) > 0
                    }, t.prototype.decimalPlaces = function() {
                        return this.dp()
                    }, t.prototype.dp = function() {
                        if (!isFinite(this.mantissa)) return NaN;
                        if (this.exponent >= o) return 0;
                        var t = this.mantissa,
                            n = -this.exponent,
                            e = 1;
                        while (Math.abs(Math.round(t * e) / e - t) > c) e *= 10, n++;
                        return n > 0 ? n : 0
                    }, Object.defineProperty(t, "MAX_VALUE", {
                        get: function() {
                            return M
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "MIN_VALUE", {
                        get: function() {
                            return v
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "NUMBER_MAX_VALUE", {
                        get: function() {
                            return w
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "NUMBER_MIN_VALUE", {
                        get: function() {
                            return _
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                M = m(1, u),
                v = m(1, -u),
                w = p(Number.MAX_VALUE),
                _ = p(Number.MIN_VALUE);
            n["a"] = N
        },
        "8c90": function(t, n, e) {
            "use strict";
            t.exports = function(t, n, e) {
                if (null == t || null == n) return t;
                var r = String(t),
                    i = "number" === typeof n ? n : parseInt(n, 10);
                if (isNaN(i) || !isFinite(i)) return r;
                var o = r.length;
                if (o >= i) return r;
                var u = null == e ? "" : String(e);
                "" === u && (u = " ");
                var s = i - o;
                while (u.length < s) u += u;
                var a = u.length > s ? u.substr(0, s) : u;
                return r + a
            }
        }
    }
]);
//# sourceMappingURL=chunk-29f39a32.966a93d6.js.map