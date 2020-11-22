(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-c7059232"], {
        "0319": function(t, e, i) {
            var s, o;
            (function(n) {
                t.exports ? (n["default"] = n, t.exports = n) : (s = [i("ea7f")], o = function(t) {
                    return n(t), n.Highcharts = t, n
                }.apply(e, s), void 0 === o || (t.exports = o))
            })((function(t) {
                function e(t, e, i, s) {
                    t.hasOwnProperty(e) || (t[e] = s.apply(null, i))
                }
                t = t ? t._modules : {}, e(t, "modules/full-screen.src.js", [t["parts/Chart.js"], t["parts/Globals.js"], t["parts/Utilities.js"]], (function(t, e, i) {
                    var s = i.addEvent;
                    return i = function() {
                        function t(t) {
                            this.chart = t, this.isOpen = !1, t = t.renderTo, this.browserProps || ("function" === typeof t.requestFullscreen ? this.browserProps = {
                                fullscreenChange: "fullscreenchange",
                                requestFullscreen: "requestFullscreen",
                                exitFullscreen: "exitFullscreen"
                            } : t.mozRequestFullScreen ? this.browserProps = {
                                fullscreenChange: "mozfullscreenchange",
                                requestFullscreen: "mozRequestFullScreen",
                                exitFullscreen: "mozCancelFullScreen"
                            } : t.webkitRequestFullScreen ? this.browserProps = {
                                fullscreenChange: "webkitfullscreenchange",
                                requestFullscreen: "webkitRequestFullScreen",
                                exitFullscreen: "webkitExitFullscreen"
                            } : t.msRequestFullscreen && (this.browserProps = {
                                fullscreenChange: "MSFullscreenChange",
                                requestFullscreen: "msRequestFullscreen",
                                exitFullscreen: "msExitFullscreen"
                            }))
                        }
                        return t.prototype.close = function() {
                            var t = this.chart;
                            this.isOpen && this.browserProps && t.container.ownerDocument instanceof Document && t.container.ownerDocument[this.browserProps.exitFullscreen](), this.unbindFullscreenEvent && this.unbindFullscreenEvent(), this.isOpen = !1, this.setButtonText()
                        }, t.prototype.open = function() {
                            var t = this,
                                e = t.chart;
                            if (t.browserProps) {
                                t.unbindFullscreenEvent = s(e.container.ownerDocument, t.browserProps.fullscreenChange, (function() {
                                    t.isOpen ? (t.isOpen = !1, t.close()) : (t.isOpen = !0, t.setButtonText())
                                }));
                                var i = e.renderTo[t.browserProps.requestFullscreen]();
                                i && i["catch"]((function() {
                                    alert("Full screen is not supported inside a frame.")
                                })), s(e, "destroy", t.unbindFullscreenEvent)
                            }
                        }, t.prototype.setButtonText = function() {
                            var t, e = this.chart,
                                i = e.exportDivElements,
                                s = e.options.exporting,
                                o = null === (t = null === s || void 0 === s ? void 0 : s.buttons) || void 0 === t ? void 0 : t.contextButton.menuItems;
                            t = e.options.lang, null !== s && void 0 !== s && s.menuItemDefinitions && null !== t && void 0 !== t && t.exitFullscreen && t.viewFullscreen && o && i && i.length && (i[o.indexOf("viewFullscreen")].innerHTML = this.isOpen ? t.exitFullscreen : s.menuItemDefinitions.viewFullscreen.text || t.viewFullscreen)
                        }, t.prototype.toggle = function() {
                            this.isOpen ? this.close() : this.open()
                        }, t
                    }(), e.Fullscreen = i, s(t, "beforeRender", (function() {
                        this.fullscreen = new e.Fullscreen(this)
                    })), e.Fullscreen
                })), e(t, "mixins/navigation.js", [], (function() {
                    return {
                        initUpdate: function(t) {
                            t.navigation || (t.navigation = {
                                updates: [],
                                update: function(t, e) {
                                    this.updates.forEach((function(i) {
                                        i.update.call(i.context, t, e)
                                    }))
                                }
                            })
                        },
                        addUpdate: function(t, e) {
                            e.navigation || this.initUpdate(e), e.navigation.updates.push({
                                update: t,
                                context: e
                            })
                        }
                    }
                })), e(t, "modules/exporting.src.js", [t["parts/Chart.js"], t["mixins/navigation.js"], t["parts/Globals.js"], t["parts/Options.js"], t["parts/SVGRenderer.js"], t["parts/Utilities.js"]], (function(t, e, i, s, o, n) {
                    var r = i.doc,
                        a = i.isTouchDevice,
                        h = i.win;
                    s = s.defaultOptions;
                    var l = n.addEvent,
                        c = n.css,
                        d = n.createElement,
                        p = n.discardElement,
                        u = n.extend,
                        f = n.find,
                        g = n.fireEvent,
                        m = n.isObject,
                        x = n.merge,
                        v = n.objectEach,
                        y = n.pick,
                        b = n.removeEvent,
                        k = n.uniqueKey,
                        M = h.navigator.userAgent,
                        w = i.Renderer.prototype.symbols,
                        S = /Edge\/|Trident\/|MSIE /.test(M),
                        A = /firefox/i.test(M);
                    u(s.lang, {
                        viewFullscreen: "View in full screen",
                        exitFullscreen: "Exit from full screen",
                        printChart: "Print chart",
                        downloadPNG: "Download PNG image",
                        downloadJPEG: "Download JPEG image",
                        downloadPDF: "Download PDF document",
                        downloadSVG: "Download SVG vector image",
                        contextButtonTitle: "Chart context menu"
                    }), s.navigation || (s.navigation = {}), x(!0, s.navigation, {
                        buttonOptions: {
                            theme: {},
                            symbolSize: 14,
                            symbolX: 12.5,
                            symbolY: 10.5,
                            align: "right",
                            buttonSpacing: 3,
                            height: 22,
                            verticalAlign: "top",
                            width: 24
                        }
                    }), x(!0, s.navigation, {
                        menuStyle: {
                            border: "1px solid #999999",
                            background: "#ffffff",
                            padding: "5px 0"
                        },
                        menuItemStyle: {
                            padding: "0.5em 1em",
                            color: "#333333",
                            background: "none",
                            fontSize: a ? "14px" : "11px",
                            transition: "background 250ms, color 250ms"
                        },
                        menuItemHoverStyle: {
                            background: "#335cad",
                            color: "#ffffff"
                        },
                        buttonOptions: {
                            symbolFill: "#666666",
                            symbolStroke: "#666666",
                            symbolStrokeWidth: 3,
                            theme: {
                                padding: 5
                            }
                        }
                    }), s.exporting = {
                        type: "image/png",
                        url: "https://export.highcharts.com/",
                        printMaxWidth: 780,
                        scale: 2,
                        buttons: {
                            contextButton: {
                                className: "highcharts-contextbutton",
                                menuClassName: "highcharts-contextmenu",
                                symbol: "menu",
                                titleKey: "contextButtonTitle",
                                menuItems: "viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")
                            }
                        },
                        menuItemDefinitions: {
                            viewFullscreen: {
                                textKey: "viewFullscreen",
                                onclick: function() {
                                    this.fullscreen.toggle()
                                }
                            },
                            printChart: {
                                textKey: "printChart",
                                onclick: function() {
                                    this.print()
                                }
                            },
                            separator: {
                                separator: !0
                            },
                            downloadPNG: {
                                textKey: "downloadPNG",
                                onclick: function() {
                                    this.exportChart()
                                }
                            },
                            downloadJPEG: {
                                textKey: "downloadJPEG",
                                onclick: function() {
                                    this.exportChart({
                                        type: "image/jpeg"
                                    })
                                }
                            },
                            downloadPDF: {
                                textKey: "downloadPDF",
                                onclick: function() {
                                    this.exportChart({
                                        type: "application/pdf"
                                    })
                                }
                            },
                            downloadSVG: {
                                textKey: "downloadSVG",
                                onclick: function() {
                                    this.exportChart({
                                        type: "image/svg+xml"
                                    })
                                }
                            }
                        }
                    }, i.post = function(t, e, i) {
                        var s = d("form", x({
                            method: "post",
                            action: t,
                            enctype: "multipart/form-data"
                        }, i), {
                            display: "none"
                        }, r.body);
                        v(e, (function(t, e) {
                            d("input", {
                                type: "hidden",
                                name: e,
                                value: t
                            }, null, s)
                        })), s.submit(), p(s)
                    }, i.isSafari && i.win.matchMedia("print").addListener((function(t) {
                        i.printingChart && (t.matches ? i.printingChart.beforePrint() : i.printingChart.afterPrint())
                    })), u(t.prototype, {
                        sanitizeSVG: function(t, e) {
                            var i = t.indexOf("</svg>") + 6,
                                s = t.substr(i);
                            return t = t.substr(0, i), e && e.exporting && e.exporting.allowHTML && s && (s = '<foreignObject x="0" y="0" width="' + e.chart.width + '" height="' + e.chart.height + '"><body xmlns="http://www.w3.org/1999/xhtml">' + s + "</body></foreignObject>", t = t.replace("</svg>", s + "</svg>")), t = t.replace(/zIndex="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g, " xlink:href=").replace(/\n/, " ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, " ").replace(/&shy;/g, "­"), this.ieSanitizeSVG && (t = this.ieSanitizeSVG(t)), t
                        },
                        getChartHTML: function() {
                            return this.styledMode && this.inlineStyles(), this.container.innerHTML
                        },
                        getSVG: function(t) {
                            var e, s = x(this.options, t);
                            s.plotOptions = x(this.userOptions.plotOptions, t && t.plotOptions), s.time = x(this.userOptions.time, t && t.time);
                            var o = d("div", null, {
                                    position: "absolute",
                                    top: "-9999em",
                                    width: this.chartWidth + "px",
                                    height: this.chartHeight + "px"
                                }, r.body),
                                n = this.renderTo.style.width,
                                a = this.renderTo.style.height;
                            n = s.exporting.sourceWidth || s.chart.width || /px$/.test(n) && parseInt(n, 10) || (s.isGantt ? 800 : 600), a = s.exporting.sourceHeight || s.chart.height || /px$/.test(a) && parseInt(a, 10) || 400, u(s.chart, {
                                animation: !1,
                                renderTo: o,
                                forExport: !0,
                                renderer: "SVGRenderer",
                                width: n,
                                height: a
                            }), s.exporting.enabled = !1, delete s.data, s.series = [], this.series.forEach((function(t) {
                                e = x(t.userOptions, {
                                    animation: !1,
                                    enableMouseTracking: !1,
                                    showCheckbox: !1,
                                    visible: t.visible
                                }), e.isInternal || s.series.push(e)
                            })), this.axes.forEach((function(t) {
                                t.userOptions.internalKey || (t.userOptions.internalKey = k())
                            }));
                            var h = new i.Chart(s, this.callback);
                            return t && ["xAxis", "yAxis", "series"].forEach((function(e) {
                                var i = {};
                                t[e] && (i[e] = t[e], h.update(i))
                            })), this.axes.forEach((function(t) {
                                var e = f(h.axes, (function(e) {
                                        return e.options.internalKey === t.userOptions.internalKey
                                    })),
                                    i = t.getExtremes(),
                                    s = i.userMin;
                                i = i.userMax, e && ("undefined" !== typeof s && s !== e.min || "undefined" !== typeof i && i !== e.max) && e.setExtremes(s, i, !0, !1)
                            })), n = h.getChartHTML(), g(this, "getSVG", {
                                chartCopy: h
                            }), n = this.sanitizeSVG(n, s), s = null, h.destroy(), p(o), n
                        },
                        getSVGForExport: function(t, e) {
                            var i = this.options.exporting;
                            return this.getSVG(x({
                                chart: {
                                    borderRadius: 0
                                }
                            }, i.chartOptions, e, {
                                exporting: {
                                    sourceWidth: t && t.sourceWidth || i.sourceWidth,
                                    sourceHeight: t && t.sourceHeight || i.sourceHeight
                                }
                            }))
                        },
                        getFilename: function() {
                            var t = this.userOptions.title && this.userOptions.title.text,
                                e = this.options.exporting.filename;
                            return e ? e.replace(/\//g, "-") : ("string" === typeof t && (e = t.toLowerCase().replace(/<\/?[^>]+(>|$)/g, "").replace(/[\s_]+/g, "-").replace(/[^a-z0-9\-]/g, "").replace(/^[\-]+/g, "").replace(/[\-]+/g, "-").substr(0, 24).replace(/[\-]+$/g, "")), (!e || 5 > e.length) && (e = "chart"), e)
                        },
                        exportChart: function(t, e) {
                            e = this.getSVGForExport(t, e), t = x(this.options.exporting, t), i.post(t.url, {
                                filename: t.filename ? t.filename.replace(/\//g, "-") : this.getFilename(),
                                type: t.type,
                                width: t.width || 0,
                                scale: t.scale,
                                svg: e
                            }, t.formAttributes)
                        },
                        moveContainers: function(t) {
                            (this.fixedDiv ? [this.fixedDiv, this.scrollingContainer] : [this.container]).forEach((function(e) {
                                t.appendChild(e)
                            }))
                        },
                        beforePrint: function() {
                            var t = r.body,
                                e = this.options.exporting.printMaxWidth,
                                i = {
                                    childNodes: t.childNodes,
                                    origDisplay: [],
                                    resetParams: void 0
                                };
                            this.isPrinting = !0, this.pointer.reset(null, 0), g(this, "beforePrint"), e && this.chartWidth > e && (i.resetParams = [this.options.chart.width, void 0, !1], this.setSize(e, void 0, !1)), [].forEach.call(i.childNodes, (function(t, e) {
                                1 === t.nodeType && (i.origDisplay[e] = t.style.display, t.style.display = "none")
                            })), this.moveContainers(t), this.printReverseInfo = i
                        },
                        afterPrint: function() {
                            if (this.printReverseInfo) {
                                var t = this.printReverseInfo.childNodes,
                                    e = this.printReverseInfo.origDisplay,
                                    s = this.printReverseInfo.resetParams;
                                this.moveContainers(this.renderTo), [].forEach.call(t, (function(t, i) {
                                    1 === t.nodeType && (t.style.display = e[i] || "")
                                })), this.isPrinting = !1, s && this.setSize.apply(this, s), delete this.printReverseInfo, delete i.printingChart, g(this, "afterPrint")
                            }
                        },
                        print: function() {
                            var t = this;
                            t.isPrinting || (i.printingChart = t, i.isSafari || t.beforePrint(), setTimeout((function() {
                                h.focus(), h.print(), i.isSafari || setTimeout((function() {
                                    t.afterPrint()
                                }), 1e3)
                            }), 1))
                        },
                        contextMenu: function(t, e, i, s, o, a, p) {
                            var f = this,
                                x = f.options.navigation,
                                v = f.chartWidth,
                                y = f.chartHeight,
                                b = "cache-" + t,
                                k = f[b],
                                M = Math.max(o, a);
                            if (!k) {
                                f.exportContextMenu = f[b] = k = d("div", {
                                    className: t
                                }, {
                                    position: "absolute",
                                    zIndex: 1e3,
                                    padding: M + "px",
                                    pointerEvents: "auto"
                                }, f.fixedDiv || f.container);
                                var w = d("ul", {
                                    className: "highcharts-menu"
                                }, {
                                    listStyle: "none",
                                    margin: 0,
                                    padding: 0
                                }, k);
                                f.styledMode || c(w, u({
                                    MozBoxShadow: "3px 3px 10px #888",
                                    WebkitBoxShadow: "3px 3px 10px #888",
                                    boxShadow: "3px 3px 10px #888"
                                }, x.menuStyle)), k.hideMenu = function() {
                                    c(k, {
                                        display: "none"
                                    }), p && p.setState(0), f.openMenu = !1, c(f.renderTo, {
                                        overflow: "hidden"
                                    }), n.clearTimeout(k.hideTimer), g(f, "exportMenuHidden")
                                }, f.exportEvents.push(l(k, "mouseleave", (function() {
                                    k.hideTimer = h.setTimeout(k.hideMenu, 500)
                                })), l(k, "mouseenter", (function() {
                                    n.clearTimeout(k.hideTimer)
                                })), l(r, "mouseup", (function(e) {
                                    f.pointer.inClass(e.target, t) || k.hideMenu()
                                })), l(k, "click", (function() {
                                    f.openMenu && k.hideMenu()
                                }))), e.forEach((function(t) {
                                    if ("string" === typeof t && (t = f.options.exporting.menuItemDefinitions[t]), m(t, !0)) {
                                        if (t.separator) var e = d("hr", null, null, w);
                                        else e = d("li", {
                                            className: "highcharts-menu-item",
                                            onclick: function(e) {
                                                e && e.stopPropagation(), k.hideMenu(), t.onclick && t.onclick.apply(f, arguments)
                                            },
                                            innerHTML: t.text || f.options.lang[t.textKey]
                                        }, null, w), f.styledMode || (e.onmouseover = function() {
                                            c(this, x.menuItemHoverStyle)
                                        }, e.onmouseout = function() {
                                            c(this, x.menuItemStyle)
                                        }, c(e, u({
                                            cursor: "pointer"
                                        }, x.menuItemStyle)));
                                        f.exportDivElements.push(e)
                                    }
                                })), f.exportDivElements.push(w, k), f.exportMenuWidth = k.offsetWidth, f.exportMenuHeight = k.offsetHeight
                            }
                            e = {
                                display: "block"
                            }, i + f.exportMenuWidth > v ? e.right = v - i - o - M + "px" : e.left = i - M + "px", s + a + f.exportMenuHeight > y && "top" !== p.alignOptions.verticalAlign ? e.bottom = y - s - M + "px" : e.top = s + a - M + "px", c(k, e), c(f.renderTo, {
                                overflow: ""
                            }), f.openMenu = !0, g(f, "exportMenuShown")
                        },
                        addButton: function(t) {
                            var e = this,
                                i = e.renderer,
                                s = x(e.options.navigation.buttonOptions, t),
                                o = s.onclick,
                                n = s.menuItems,
                                r = s.symbolSize || 12;
                            if (e.btnCount || (e.btnCount = 0), e.exportDivElements || (e.exportDivElements = [], e.exportSVGElements = []), !1 !== s.enabled) {
                                var a, h = s.theme,
                                    l = h.states,
                                    c = l && l.hover;
                                l = l && l.select, e.styledMode || (h.fill = y(h.fill, "#ffffff"), h.stroke = y(h.stroke, "none")), delete h.states, o ? a = function(t) {
                                    t && t.stopPropagation(), o.call(e, t)
                                } : n && (a = function(t) {
                                    t && t.stopPropagation(), e.contextMenu(d.menuClassName, n, d.translateX, d.translateY, d.width, d.height, d), d.setState(2)
                                }), s.text && s.symbol ? h.paddingLeft = y(h.paddingLeft, 25) : s.text || u(h, {
                                    width: s.width,
                                    height: s.height,
                                    padding: 0
                                }), e.styledMode || (h["stroke-linecap"] = "round", h.fill = y(h.fill, "#ffffff"), h.stroke = y(h.stroke, "none"));
                                var d = i.button(s.text, 0, 0, a, h, c, l).addClass(t.className).attr({
                                    title: y(e.options.lang[s._titleKey || s.titleKey], "")
                                });
                                if (d.menuClassName = t.menuClassName || "highcharts-menu-" + e.btnCount++, s.symbol) {
                                    var p = i.symbol(s.symbol, s.symbolX - r / 2, s.symbolY - r / 2, r, r, {
                                        width: r,
                                        height: r
                                    }).addClass("highcharts-button-symbol").attr({
                                        zIndex: 1
                                    }).add(d);
                                    e.styledMode || p.attr({
                                        stroke: s.symbolStroke,
                                        fill: s.symbolFill,
                                        "stroke-width": s.symbolStrokeWidth || 1
                                    })
                                }
                                d.add(e.exportingGroup).align(u(s, {
                                    width: d.width,
                                    x: y(s.x, e.buttonOffset)
                                }), !0, "spacingBox"), e.buttonOffset += (d.width + s.buttonSpacing) * ("right" === s.align ? -1 : 1), e.exportSVGElements.push(d, p)
                            }
                        },
                        destroyExport: function(t) {
                            var e = t ? t.target : this;
                            t = e.exportSVGElements;
                            var i, s = e.exportDivElements,
                                o = e.exportEvents;
                            t && (t.forEach((function(t, s) {
                                t && (t.onclick = t.ontouchstart = null, i = "cache-" + t.menuClassName, e[i] && delete e[i], e.exportSVGElements[s] = t.destroy())
                            })), t.length = 0), e.exportingGroup && (e.exportingGroup.destroy(), delete e.exportingGroup), s && (s.forEach((function(t, i) {
                                n.clearTimeout(t.hideTimer), b(t, "mouseleave"), e.exportDivElements[i] = t.onmouseout = t.onmouseover = t.ontouchstart = t.onclick = null, p(t)
                            })), s.length = 0), o && (o.forEach((function(t) {
                                t()
                            })), o.length = 0)
                        }
                    }), o.prototype.inlineToAttributes = "fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" "), o.prototype.inlineBlacklist = [/-/, /^(clipPath|cssText|d|height|width)$/, /^font$/, /[lL]ogical(Width|Height)$/, /perspective/, /TapHighlightColor/, /^transition/, /^length$/], o.prototype.unstyledElements = ["clipPath", "defs", "desc"], t.prototype.inlineStyles = function() {
                        function t(t) {
                            return t.replace(/([A-Z])/g, (function(t, e) {
                                return "-" + e.toLowerCase()
                            }))
                        }

                        function e(s) {
                            function r(e, i) {
                                if (c = u = !1, a) {
                                    for (f = a.length; f-- && !u;) u = a[f].test(i);
                                    c = !u
                                }
                                for ("transform" === i && "none" === e && (c = !0), f = n.length; f-- && !c;) c = n[f].test(i) || "function" === typeof e;
                                c || y[i] === e && "svg" !== s.nodeName || d[s.nodeName][i] === e || (o && -1 === o.indexOf(i) ? g += t(i) + ":" + e + ";" : e && s.setAttribute(t(i), e))
                            }
                            var c, u, f, g = "";
                            if (1 === s.nodeType && -1 === l.indexOf(s.nodeName)) {
                                var m = h.getComputedStyle(s, null),
                                    y = "svg" === s.nodeName ? {} : h.getComputedStyle(s.parentNode, null);
                                if (!d[s.nodeName]) {
                                    i = p.getElementsByTagName("svg")[0];
                                    var b = p.createElementNS(s.namespaceURI, s.nodeName);
                                    i.appendChild(b), d[s.nodeName] = x(h.getComputedStyle(b, null)), "text" === s.nodeName && delete d.text.fill, i.removeChild(b)
                                }
                                if (A || S)
                                    for (var k in m) r(m[k], k);
                                else v(m, r);
                                g && (m = s.getAttribute("style"), s.setAttribute("style", (m ? m + ";" : "") + g)), "svg" === s.nodeName && s.setAttribute("stroke-width", "1px"), "text" !== s.nodeName && [].forEach.call(s.children || s.childNodes, e)
                            }
                        }
                        var i, s = this.renderer,
                            o = s.inlineToAttributes,
                            n = s.inlineBlacklist,
                            a = s.inlineWhitelist,
                            l = s.unstyledElements,
                            d = {};
                        s = r.createElement("iframe"), c(s, {
                            width: "1px",
                            height: "1px",
                            visibility: "hidden"
                        }), r.body.appendChild(s);
                        var p = s.contentWindow.document;
                        p.open(), p.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>'), p.close(), e(this.container.querySelector("svg")), i.parentNode.removeChild(i)
                    }, w.menu = function(t, e, i, s) {
                        return [
                            ["M", t, e + 2.5],
                            ["L", t + i, e + 2.5],
                            ["M", t, e + s / 2 + .5],
                            ["L", t + i, e + s / 2 + .5],
                            ["M", t, e + s - 1.5],
                            ["L", t + i, e + s - 1.5]
                        ]
                    }, w.menuball = function(t, e, i, s) {
                        return t = [], s = s / 3 - 2, t.concat(this.circle(i - s, e, s, s), this.circle(i - s, e + s + 4, s, s), this.circle(i - s, e + 2 * (s + 4), s, s))
                    }, t.prototype.renderExporting = function() {
                        var t = this,
                            e = t.options.exporting,
                            i = e.buttons,
                            s = t.isDirtyExporting || !t.exportSVGElements;
                        t.buttonOffset = 0, t.isDirtyExporting && t.destroyExport(), s && !1 !== e.enabled && (t.exportEvents = [], t.exportingGroup = t.exportingGroup || t.renderer.g("exporting-group").attr({
                            zIndex: 3
                        }).add(), v(i, (function(e) {
                            t.addButton(e)
                        })), t.isDirtyExporting = !1), l(t, "destroy", t.destroyExport)
                    }, l(t, "init", (function() {
                        var t = this;
                        t.exporting = {
                            update: function(e, i) {
                                t.isDirtyExporting = !0, x(!0, t.options.exporting, e), y(i, !0) && t.redraw()
                            }
                        }, e.addUpdate((function(e, i) {
                            t.isDirtyExporting = !0, x(!0, t.options.navigation, e), y(i, !0) && t.redraw()
                        }), t)
                    })), t.prototype.callbacks.push((function(t) {
                        t.renderExporting(), l(t, "redraw", t.renderExporting)
                    }))
                })), e(t, "masters/modules/exporting.src.js", [], (function() {}))
            }))
        },
        "07ac": function(t, e, i) {
            var s = i("23e7"),
                o = i("6f53").values;
            s({
                target: "Object",
                stat: !0
            }, {
                values: function(t) {
                    return o(t)
                }
            })
        },
        "37d8": function(t, e, i) {
            var s, o;
            (function(n) {
                t.exports ? (n["default"] = n, t.exports = n) : (s = [i("ea7f")], o = function(t) {
                    return n(t), n.Highcharts = t, n
                }.apply(e, s), void 0 === o || (t.exports = o))
            })((function(t) {
                function e(t, e, i, s) {
                    t.hasOwnProperty(e) || (t[e] = s.apply(null, i))
                }
                t = t ? t._modules : {}, e(t, "parts/NavigatorAxis.js", [t["parts/Globals.js"], t["parts/Utilities.js"]], (function(t, e) {
                    var i = t.isTouchDevice,
                        s = e.addEvent,
                        o = e.correctFloat,
                        n = e.defined,
                        r = e.isNumber,
                        a = e.pick,
                        h = function() {
                            function t(t) {
                                this.axis = t
                            }
                            return t.prototype.destroy = function() {
                                this.axis = void 0
                            }, t.prototype.toFixedRange = function(t, e, i, s) {
                                var h = this.axis,
                                    l = h.chart;
                                l = l && l.fixedRange;
                                var c = (h.pointRange || 0) / 2;
                                return t = a(i, h.translate(t, !0, !h.horiz)), e = a(s, h.translate(e, !0, !h.horiz)), h = l && (e - t) / l, n(i) || (t = o(t + c)), n(s) || (e = o(e - c)), .7 < h && 1.3 > h && (s ? t = e - l : e = t + l), r(t) && r(e) || (t = e = void 0), {
                                    min: t,
                                    max: e
                                }
                            }, t
                        }();
                    return function() {
                        function t() {}
                        return t.compose = function(t) {
                            t.keepProps.push("navigatorAxis"), s(t, "init", (function() {
                                this.navigatorAxis || (this.navigatorAxis = new h(this))
                            })), s(t, "zoom", (function(t) {
                                var e = this.chart.options,
                                    s = e.navigator,
                                    o = this.navigatorAxis,
                                    r = e.chart.pinchType,
                                    a = e.rangeSelector;
                                e = e.chart.zoomType, this.isXAxis && (s && s.enabled || a && a.enabled) && ("y" === e ? t.zoomed = !1 : (!i && "xy" === e || i && "xy" === r) && this.options.range && (s = o.previousZoom, n(t.newMin) ? o.previousZoom = [this.min, this.max] : s && (t.newMin = s[0], t.newMax = s[1], o.previousZoom = void 0))), "undefined" !== typeof t.zoomed && t.preventDefault()
                            }))
                        }, t.AdditionsClass = h, t
                    }()
                })), e(t, "parts/ScrollbarAxis.js", [t["parts/Globals.js"], t["parts/Utilities.js"]], (function(t, e) {
                    var i = e.addEvent,
                        s = e.defined,
                        o = e.pick;
                    return function() {
                        function e() {}
                        return e.compose = function(e, n) {
                            i(e, "afterInit", (function() {
                                var e = this;
                                e.options && e.options.scrollbar && e.options.scrollbar.enabled && (e.options.scrollbar.vertical = !e.horiz, e.options.startOnTick = e.options.endOnTick = !1, e.scrollbar = new n(e.chart.renderer, e.options.scrollbar, e.chart), i(e.scrollbar, "changed", (function(i) {
                                    var n = o(e.options && e.options.min, e.min),
                                        r = o(e.options && e.options.max, e.max),
                                        a = s(e.dataMin) ? Math.min(n, e.min, e.dataMin) : n,
                                        h = (s(e.dataMax) ? Math.max(r, e.max, e.dataMax) : r) - a;
                                    s(n) && s(r) && (e.horiz && !e.reversed || !e.horiz && e.reversed ? (n = a + h * this.to, a += h * this.from) : (n = a + h * (1 - this.from), a += h * (1 - this.to)), o(this.options.liveRedraw, t.svg && !t.isTouchDevice && !this.chart.isBoosting) || "mouseup" === i.DOMType || !s(i.DOMType) ? e.setExtremes(a, n, !0, "mousemove" !== i.DOMType, i) : this.setRange(this.from, this.to))
                                })))
                            })), i(e, "afterRender", (function() {
                                var t = Math.min(o(this.options.min, this.min), this.min, o(this.dataMin, this.min)),
                                    e = Math.max(o(this.options.max, this.max), this.max, o(this.dataMax, this.max)),
                                    i = this.scrollbar,
                                    n = this.axisTitleMargin + (this.titleOffset || 0),
                                    r = this.chart.scrollbarsOffsets,
                                    a = this.options.margin || 0;
                                i && (this.horiz ? (this.opposite || (r[1] += n), i.position(this.left, this.top + this.height + 2 + r[1] - (this.opposite ? a : 0), this.width, this.height), this.opposite || (r[1] += a), n = 1) : (this.opposite && (r[0] += n), i.position(this.left + this.width + 2 + r[0] - (this.opposite ? 0 : a), this.top, this.width, this.height), this.opposite && (r[0] += a), n = 0), r[n] += i.size + i.options.margin, isNaN(t) || isNaN(e) || !s(this.min) || !s(this.max) || this.min === this.max ? i.setRange(0, 1) : (r = (this.min - t) / (e - t), t = (this.max - t) / (e - t), this.horiz && !this.reversed || !this.horiz && this.reversed ? i.setRange(r, t) : i.setRange(1 - t, 1 - r)))
                            })), i(e, "afterGetOffset", (function() {
                                var t = this.horiz ? 2 : 1,
                                    e = this.scrollbar;
                                e && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[t] += e.size + e.options.margin)
                            }))
                        }, e
                    }()
                })), e(t, "parts/Scrollbar.js", [t["parts/Axis.js"], t["parts/Globals.js"], t["parts/ScrollbarAxis.js"], t["parts/Utilities.js"], t["parts/Options.js"]], (function(t, e, i, s, o) {
                    var n = s.addEvent,
                        r = s.correctFloat,
                        a = s.defined,
                        h = s.destroyObjectProperties,
                        l = s.fireEvent,
                        c = s.merge,
                        d = s.pick,
                        p = s.removeEvent;
                    s = o.defaultOptions;
                    var u = e.hasTouch,
                        f = e.isTouchDevice,
                        g = e.swapXY = function(t, e) {
                            return e && t.forEach((function(t) {
                                for (var e, i = t.length, s = 0; s < i; s += 2) e = t[s + 1], "number" === typeof e && (t[s + 1] = t[s + 2], t[s + 2] = e)
                            })), t
                        };
                    return o = function() {
                        function t(t, e, i) {
                            this._events = [], this.from = this.chartY = this.chartX = 0, this.scrollbar = this.group = void 0, this.scrollbarButtons = [], this.scrollbarGroup = void 0, this.scrollbarLeft = 0, this.scrollbarRifles = void 0, this.scrollbarStrokeWidth = 1, this.to = this.size = this.scrollbarTop = 0, this.track = void 0, this.trackBorderWidth = 1, this.userOptions = {}, this.y = this.x = 0, this.chart = i, this.options = e, this.renderer = i.renderer, this.init(t, e, i)
                        }
                        return t.prototype.addEvents = function() {
                            var t = this.options.inverted ? [1, 0] : [0, 1],
                                e = this.scrollbarButtons,
                                i = this.scrollbarGroup.element,
                                s = this.track.element,
                                o = this.mouseDownHandler.bind(this),
                                r = this.mouseMoveHandler.bind(this),
                                a = this.mouseUpHandler.bind(this);
                            t = [
                                [e[t[0]].element, "click", this.buttonToMinClick.bind(this)],
                                [e[t[1]].element, "click", this.buttonToMaxClick.bind(this)],
                                [s, "click", this.trackClick.bind(this)],
                                [i, "mousedown", o],
                                [i.ownerDocument, "mousemove", r],
                                [i.ownerDocument, "mouseup", a]
                            ], u && t.push([i, "touchstart", o], [i.ownerDocument, "touchmove", r], [i.ownerDocument, "touchend", a]), t.forEach((function(t) {
                                n.apply(null, t)
                            })), this._events = t
                        }, t.prototype.buttonToMaxClick = function(t) {
                            var e = (this.to - this.from) * d(this.options.step, .2);
                            this.updatePosition(this.from + e, this.to + e), l(this, "changed", {
                                from: this.from,
                                to: this.to,
                                trigger: "scrollbar",
                                DOMEvent: t
                            })
                        }, t.prototype.buttonToMinClick = function(t) {
                            var e = r(this.to - this.from) * d(this.options.step, .2);
                            this.updatePosition(r(this.from - e), r(this.to - e)), l(this, "changed", {
                                from: this.from,
                                to: this.to,
                                trigger: "scrollbar",
                                DOMEvent: t
                            })
                        }, t.prototype.cursorToScrollbarPosition = function(t) {
                            var e = this.options;
                            return e = e.minWidth > this.calculatedWidth ? e.minWidth : 0, {
                                chartX: (t.chartX - this.x - this.xOffset) / (this.barWidth - e),
                                chartY: (t.chartY - this.y - this.yOffset) / (this.barWidth - e)
                            }
                        }, t.prototype.destroy = function() {
                            var t = this.chart.scroller;
                            this.removeEvents(), ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach((function(t) {
                                this[t] && this[t].destroy && (this[t] = this[t].destroy())
                            }), this), t && this === t.scrollbar && (t.scrollbar = null, h(t.scrollbarButtons))
                        }, t.prototype.drawScrollbarButton = function(t) {
                            var e = this.renderer,
                                i = this.scrollbarButtons,
                                s = this.options,
                                o = this.size,
                                n = e.g().add(this.group);
                            i.push(n), n = e.rect().addClass("highcharts-scrollbar-button").add(n), this.chart.styledMode || n.attr({
                                stroke: s.buttonBorderColor,
                                "stroke-width": s.buttonBorderWidth,
                                fill: s.buttonBackgroundColor
                            }), n.attr(n.crisp({
                                x: -.5,
                                y: -.5,
                                width: o + 1,
                                height: o + 1,
                                r: s.buttonBorderRadius
                            }, n.strokeWidth())), n = e.path(g([
                                ["M", o / 2 + (t ? -1 : 1), o / 2 - 3],
                                ["L", o / 2 + (t ? -1 : 1), o / 2 + 3],
                                ["L", o / 2 + (t ? 2 : -2), o / 2]
                            ], s.vertical)).addClass("highcharts-scrollbar-arrow").add(i[t]), this.chart.styledMode || n.attr({
                                fill: s.buttonArrowColor
                            })
                        }, t.prototype.init = function(e, i, s) {
                            this.scrollbarButtons = [], this.renderer = e, this.userOptions = i, this.options = c(t.defaultOptions, i), this.chart = s, this.size = d(this.options.size, this.options.height), i.enabled && (this.render(), this.addEvents())
                        }, t.prototype.mouseDownHandler = function(t) {
                            t = this.chart.pointer.normalize(t), t = this.cursorToScrollbarPosition(t), this.chartX = t.chartX, this.chartY = t.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = !0
                        }, t.prototype.mouseMoveHandler = function(t) {
                            var e = this.chart.pointer.normalize(t),
                                i = this.options.vertical ? "chartY" : "chartX",
                                s = this.initPositions || [];
                            !this.grabbedCenter || t.touches && 0 === t.touches[0][i] || (e = this.cursorToScrollbarPosition(e)[i], i = this[i], i = e - i, this.hasDragged = !0, this.updatePosition(s[0] + i, s[1] + i), this.hasDragged && l(this, "changed", {
                                from: this.from,
                                to: this.to,
                                trigger: "scrollbar",
                                DOMType: t.type,
                                DOMEvent: t
                            }))
                        }, t.prototype.mouseUpHandler = function(t) {
                            this.hasDragged && l(this, "changed", {
                                from: this.from,
                                to: this.to,
                                trigger: "scrollbar",
                                DOMType: t.type,
                                DOMEvent: t
                            }), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null
                        }, t.prototype.position = function(t, e, i, s) {
                            var o = this.options.vertical,
                                n = 0,
                                r = this.rendered ? "animate" : "attr";
                            this.x = t, this.y = e + this.trackBorderWidth, this.width = i, this.xOffset = this.height = s, this.yOffset = n, o ? (this.width = this.yOffset = i = n = this.size, this.xOffset = e = 0, this.barWidth = s - 2 * i, this.x = t += this.options.margin) : (this.height = this.xOffset = s = e = this.size, this.barWidth = i - 2 * s, this.y += this.options.margin), this.group[r]({
                                translateX: t,
                                translateY: this.y
                            }), this.track[r]({
                                width: i,
                                height: s
                            }), this.scrollbarButtons[1][r]({
                                translateX: o ? 0 : i - e,
                                translateY: o ? s - n : 0
                            })
                        }, t.prototype.removeEvents = function() {
                            this._events.forEach((function(t) {
                                p.apply(null, t)
                            })), this._events.length = 0
                        }, t.prototype.render = function() {
                            var t, e = this.renderer,
                                i = this.options,
                                s = this.size,
                                o = this.chart.styledMode;
                            this.group = t = e.g("scrollbar").attr({
                                zIndex: i.zIndex,
                                translateY: -99999
                            }).add(), this.track = e.rect().addClass("highcharts-scrollbar-track").attr({
                                x: 0,
                                r: i.trackBorderRadius || 0,
                                height: s,
                                width: s
                            }).add(t), o || this.track.attr({
                                fill: i.trackBackgroundColor,
                                stroke: i.trackBorderColor,
                                "stroke-width": i.trackBorderWidth
                            }), this.trackBorderWidth = this.track.strokeWidth(), this.track.attr({
                                y: -this.trackBorderWidth % 2 / 2
                            }), this.scrollbarGroup = e.g().add(t), this.scrollbar = e.rect().addClass("highcharts-scrollbar-thumb").attr({
                                height: s,
                                width: s,
                                r: i.barBorderRadius || 0
                            }).add(this.scrollbarGroup), this.scrollbarRifles = e.path(g([
                                ["M", -3, s / 4],
                                ["L", -3, 2 * s / 3],
                                ["M", 0, s / 4],
                                ["L", 0, 2 * s / 3],
                                ["M", 3, s / 4],
                                ["L", 3, 2 * s / 3]
                            ], i.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), o || (this.scrollbar.attr({
                                fill: i.barBackgroundColor,
                                stroke: i.barBorderColor,
                                "stroke-width": i.barBorderWidth
                            }), this.scrollbarRifles.attr({
                                stroke: i.rifleColor,
                                "stroke-width": 1
                            })), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-this.scrollbarStrokeWidth % 2 / 2, -this.scrollbarStrokeWidth % 2 / 2), this.drawScrollbarButton(0), this.drawScrollbarButton(1)
                        }, t.prototype.setRange = function(t, e) {
                            var i, s = this.options,
                                o = s.vertical,
                                n = s.minWidth,
                                h = this.barWidth,
                                l = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
                            if (a(h)) {
                                t = Math.max(t, 0);
                                var c = Math.ceil(h * t);
                                this.calculatedWidth = i = r(h * Math.min(e, 1) - c), i < n && (c = (h - n + i) * t, i = n), n = Math.floor(c + this.xOffset + this.yOffset), h = i / 2 - .5, this.from = t, this.to = e, o ? (this.scrollbarGroup[l]({
                                    translateY: n
                                }), this.scrollbar[l]({
                                    height: i
                                }), this.scrollbarRifles[l]({
                                    translateY: h
                                }), this.scrollbarTop = n, this.scrollbarLeft = 0) : (this.scrollbarGroup[l]({
                                    translateX: n
                                }), this.scrollbar[l]({
                                    width: i
                                }), this.scrollbarRifles[l]({
                                    translateX: h
                                }), this.scrollbarLeft = n, this.scrollbarTop = 0), 12 >= i ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(!0), !1 === s.showFull && (0 >= t && 1 <= e ? this.group.hide() : this.group.show()), this.rendered = !0
                            }
                        }, t.prototype.trackClick = function(t) {
                            var e = this.chart.pointer.normalize(t),
                                i = this.to - this.from,
                                s = this.y + this.scrollbarTop,
                                o = this.x + this.scrollbarLeft;
                            this.options.vertical && e.chartY > s || !this.options.vertical && e.chartX > o ? this.updatePosition(this.from + i, this.to + i) : this.updatePosition(this.from - i, this.to - i), l(this, "changed", {
                                from: this.from,
                                to: this.to,
                                trigger: "scrollbar",
                                DOMEvent: t
                            })
                        }, t.prototype.update = function(t) {
                            this.destroy(), this.init(this.chart.renderer, c(!0, this.options, t), this.chart)
                        }, t.prototype.updatePosition = function(t, e) {
                            1 < e && (t = r(1 - r(e - t)), e = 1), 0 > t && (e = r(e - t), t = 0), this.from = t, this.to = e
                        }, t.defaultOptions = {
                            height: f ? 20 : 14,
                            barBorderRadius: 0,
                            buttonBorderRadius: 0,
                            liveRedraw: void 0,
                            margin: 10,
                            minWidth: 6,
                            step: .2,
                            zIndex: 3,
                            barBackgroundColor: "#cccccc",
                            barBorderWidth: 1,
                            barBorderColor: "#cccccc",
                            buttonArrowColor: "#333333",
                            buttonBackgroundColor: "#e6e6e6",
                            buttonBorderColor: "#cccccc",
                            buttonBorderWidth: 1,
                            rifleColor: "#333333",
                            trackBackgroundColor: "#f2f2f2",
                            trackBorderColor: "#f2f2f2",
                            trackBorderWidth: 1
                        }, t
                    }(), e.Scrollbar || (s.scrollbar = c(!0, o.defaultOptions, s.scrollbar), e.Scrollbar = o, i.compose(t, o)), e.Scrollbar
                })), e(t, "parts/Navigator.js", [t["parts/Axis.js"], t["parts/Chart.js"], t["parts/Color.js"], t["parts/Globals.js"], t["parts/NavigatorAxis.js"], t["parts/Options.js"], t["parts/Scrollbar.js"], t["parts/Utilities.js"]], (function(t, e, i, s, o, n, r, a) {
                    i = i.parse;
                    var h = n.defaultOptions,
                        l = a.addEvent,
                        c = a.clamp,
                        d = a.correctFloat,
                        p = a.defined,
                        u = a.destroyObjectProperties,
                        f = a.erase,
                        g = a.extend,
                        m = a.find,
                        x = a.isArray,
                        v = a.isNumber,
                        y = a.merge,
                        b = a.pick,
                        k = a.removeEvent,
                        M = a.splat,
                        w = s.hasTouch,
                        S = s.isTouchDevice;
                    n = s.Series;
                    var A = function(t) {
                        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                        if (e = [].filter.call(e, v), e.length) return Math[t].apply(0, e)
                    };
                    a = "undefined" === typeof s.seriesTypes.areaspline ? "line" : "areaspline", g(h, {
                        navigator: {
                            height: 40,
                            margin: 25,
                            maskInside: !0,
                            handles: {
                                width: 7,
                                height: 15,
                                symbols: ["navigator-handle", "navigator-handle"],
                                enabled: !0,
                                lineWidth: 1,
                                backgroundColor: "#f2f2f2",
                                borderColor: "#999999"
                            },
                            maskFill: i("#6685c2").setOpacity(.3).get(),
                            outlineColor: "#cccccc",
                            outlineWidth: 1,
                            series: {
                                type: a,
                                fillOpacity: .05,
                                lineWidth: 1,
                                compare: null,
                                dataGrouping: {
                                    approximation: "average",
                                    enabled: !0,
                                    groupPixelWidth: 2,
                                    smoothed: !0,
                                    units: [
                                        ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                                        ["second", [1, 2, 5, 10, 15, 30]],
                                        ["minute", [1, 2, 5, 10, 15, 30]],
                                        ["hour", [1, 2, 3, 4, 6, 8, 12]],
                                        ["day", [1, 2, 3, 4]],
                                        ["week", [1, 2, 3]],
                                        ["month", [1, 3, 6]],
                                        ["year", null]
                                    ]
                                },
                                dataLabels: {
                                    enabled: !1,
                                    zIndex: 2
                                },
                                id: "highcharts-navigator-series",
                                className: "highcharts-navigator-series",
                                lineColor: null,
                                marker: {
                                    enabled: !1
                                },
                                threshold: null
                            },
                            xAxis: {
                                overscroll: 0,
                                className: "highcharts-navigator-xaxis",
                                tickLength: 0,
                                lineWidth: 0,
                                gridLineColor: "#e6e6e6",
                                gridLineWidth: 1,
                                tickPixelInterval: 200,
                                labels: {
                                    align: "left",
                                    style: {
                                        color: "#999999"
                                    },
                                    x: 3,
                                    y: -4
                                },
                                crosshair: !1
                            },
                            yAxis: {
                                className: "highcharts-navigator-yaxis",
                                gridLineWidth: 0,
                                startOnTick: !1,
                                endOnTick: !1,
                                minPadding: .1,
                                maxPadding: .1,
                                labels: {
                                    enabled: !1
                                },
                                crosshair: !1,
                                title: {
                                    text: null
                                },
                                tickLength: 0,
                                tickWidth: 0
                            }
                        }
                    }), s.Renderer.prototype.symbols["navigator-handle"] = function(t, e, i, s, o) {
                        return t = (o && o.width || 0) / 2, e = Math.round(t / 3) + .5, o = o && o.height || 0, [
                            ["M", -t - 1, .5],
                            ["L", t, .5],
                            ["L", t, o + .5],
                            ["L", -t - 1, o + .5],
                            ["L", -t - 1, .5],
                            ["M", -e, 4],
                            ["L", -e, o - 3],
                            ["M", e - 1, 4],
                            ["L", e - 1, o - 3]
                        ]
                    };
                    var T = function() {
                        function e(t) {
                            this.zoomedMin = this.zoomedMax = this.yAxis = this.xAxis = this.top = this.size = this.shades = this.rendered = this.range = this.outlineHeight = this.outline = this.opposite = this.navigatorSize = this.navigatorSeries = this.navigatorOptions = this.navigatorGroup = this.navigatorEnabled = this.left = this.height = this.handles = this.chart = this.baseSeries = void 0, this.init(t)
                        }
                        return e.prototype.drawHandle = function(t, e, i, s) {
                            var o = this.navigatorOptions.handles.height;
                            this.handles[e][s](i ? {
                                translateX: Math.round(this.left + this.height / 2),
                                translateY: Math.round(this.top + parseInt(t, 10) + .5 - o)
                            } : {
                                translateX: Math.round(this.left + parseInt(t, 10)),
                                translateY: Math.round(this.top + this.height / 2 - o / 2 - 1)
                            })
                        }, e.prototype.drawOutline = function(t, e, i, s) {
                            var o = this.navigatorOptions.maskInside,
                                n = this.outline.strokeWidth(),
                                r = n / 2,
                                a = n % 2 / 2;
                            n = this.outlineHeight;
                            var h = this.scrollbarHeight || 0,
                                l = this.size,
                                c = this.left - h,
                                d = this.top;
                            i ? (c -= r, i = d + e + a, e = d + t + a, a = [
                                ["M", c + n, d - h - a],
                                ["L", c + n, i],
                                ["L", c, i],
                                ["L", c, e],
                                ["L", c + n, e],
                                ["L", c + n, d + l + h]
                            ], o && a.push(["M", c + n, i - r], ["L", c + n, e + r])) : (t += c + h - a, e += c + h - a, d += r, a = [
                                ["M", c, d],
                                ["L", t, d],
                                ["L", t, d + n],
                                ["L", e, d + n],
                                ["L", e, d],
                                ["L", c + l + 2 * h, d]
                            ], o && a.push(["M", t - r, d], ["L", e + r, d])), this.outline[s]({
                                d: a
                            })
                        }, e.prototype.drawMasks = function(t, e, i, s) {
                            var o = this.left,
                                n = this.top,
                                r = this.height;
                            if (i) var a = [o, o, o],
                                h = [n, n + t, n + e],
                                l = [r, r, r],
                                c = [t, e - t, this.size - e];
                            else a = [o, o + t, o + e], h = [n, n, n], l = [t, e - t, this.size - e], c = [r, r, r];
                            this.shades.forEach((function(t, e) {
                                t[s]({
                                    x: a[e],
                                    y: h[e],
                                    width: l[e],
                                    height: c[e]
                                })
                            }))
                        }, e.prototype.renderElements = function() {
                            var t, e = this,
                                i = e.navigatorOptions,
                                s = i.maskInside,
                                o = e.chart,
                                n = o.renderer,
                                r = {
                                    cursor: o.inverted ? "ns-resize" : "ew-resize"
                                };
                            e.navigatorGroup = t = n.g("navigator").attr({
                                zIndex: 8,
                                visibility: "hidden"
                            }).add(), [!s, s, !s].forEach((function(s, a) {
                                e.shades[a] = n.rect().addClass("highcharts-navigator-mask" + (1 === a ? "-inside" : "-outside")).add(t), o.styledMode || e.shades[a].attr({
                                    fill: s ? i.maskFill : "rgba(0,0,0,0)"
                                }).css(1 === a && r)
                            })), e.outline = n.path().addClass("highcharts-navigator-outline").add(t), o.styledMode || e.outline.attr({
                                "stroke-width": i.outlineWidth,
                                stroke: i.outlineColor
                            }), i.handles.enabled && [0, 1].forEach((function(s) {
                                if (i.handles.inverted = o.inverted, e.handles[s] = n.symbol(i.handles.symbols[s], -i.handles.width / 2 - 1, 0, i.handles.width, i.handles.height, i.handles), e.handles[s].attr({
                                        zIndex: 7 - s
                                    }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][s]).add(t), !o.styledMode) {
                                    var a = i.handles;
                                    e.handles[s].attr({
                                        fill: a.backgroundColor,
                                        stroke: a.borderColor,
                                        "stroke-width": a.lineWidth
                                    }).css(r)
                                }
                            }))
                        }, e.prototype.update = function(t) {
                            (this.series || []).forEach((function(t) {
                                t.baseSeries && delete t.baseSeries.navigatorSeries
                            })), this.destroy(), y(!0, this.chart.options.navigator, this.options, t), this.init(this.chart)
                        }, e.prototype.render = function(t, e, i, s) {
                            var o, n, r = this.chart,
                                a = this.scrollbarHeight,
                                h = this.xAxis,
                                l = h.pointRange || 0,
                                u = h.navigatorAxis.fake ? r.xAxis[0] : h,
                                f = this.navigatorEnabled,
                                g = this.rendered,
                                m = r.inverted,
                                x = r.xAxis[0].minRange,
                                y = r.xAxis[0].options.maxRange;
                            if (!this.hasDragged || p(i)) {
                                if (t = d(t - l / 2), e = d(e + l / 2), !v(t) || !v(e)) {
                                    if (!g) return;
                                    i = 0, s = b(h.width, u.width)
                                }
                                this.left = b(h.left, r.plotLeft + a + (m ? r.plotWidth : 0)), this.size = n = o = b(h.len, (m ? r.plotHeight : r.plotWidth) - 2 * a), r = m ? a : o + 2 * a, i = b(i, h.toPixels(t, !0)), s = b(s, h.toPixels(e, !0)), v(i) && 1 / 0 !== Math.abs(i) || (i = 0, s = r), t = h.toValue(i, !0), e = h.toValue(s, !0);
                                var k = Math.abs(d(e - t));
                                k < x ? this.grabbedLeft ? i = h.toPixels(e - x - l, !0) : this.grabbedRight && (s = h.toPixels(t + x + l, !0)) : p(y) && d(k - l) > y && (this.grabbedLeft ? i = h.toPixels(e - y - l, !0) : this.grabbedRight && (s = h.toPixels(t + y + l, !0))), this.zoomedMax = c(Math.max(i, s), 0, n), this.zoomedMin = c(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(i, s), 0, n), this.range = this.zoomedMax - this.zoomedMin, n = Math.round(this.zoomedMax), i = Math.round(this.zoomedMin), f && (this.navigatorGroup.attr({
                                    visibility: "visible"
                                }), g = g && !this.hasDragged ? "animate" : "attr", this.drawMasks(i, n, m, g), this.drawOutline(i, n, m, g), this.navigatorOptions.handles.enabled && (this.drawHandle(i, 0, m, g), this.drawHandle(n, 1, m, g))), this.scrollbar && (m ? (m = this.top - a, u = this.left - a + (f || !u.opposite ? 0 : (u.titleOffset || 0) + u.axisTitleMargin), a = o + 2 * a) : (m = this.top + (f ? this.height : -a), u = this.left - a), this.scrollbar.position(u, m, r, a), this.scrollbar.setRange(this.zoomedMin / (o || 1), this.zoomedMax / (o || 1))), this.rendered = !0
                            }
                        }, e.prototype.addMouseEvents = function() {
                            var t, e, i = this,
                                s = i.chart,
                                o = s.container,
                                n = [];
                            i.mouseMoveHandler = t = function(t) {
                                i.onMouseMove(t)
                            }, i.mouseUpHandler = e = function(t) {
                                i.onMouseUp(t)
                            }, n = i.getPartsEvents("mousedown"), n.push(l(s.renderTo, "mousemove", t), l(o.ownerDocument, "mouseup", e)), w && (n.push(l(s.renderTo, "touchmove", t), l(o.ownerDocument, "touchend", e)), n.concat(i.getPartsEvents("touchstart"))), i.eventsToUnbind = n, i.series && i.series[0] && n.push(l(i.series[0].xAxis, "foundExtremes", (function() {
                                s.navigator.modifyNavigatorAxisExtremes()
                            })))
                        }, e.prototype.getPartsEvents = function(t) {
                            var e = this,
                                i = [];
                            return ["shades", "handles"].forEach((function(s) {
                                e[s].forEach((function(o, n) {
                                    i.push(l(o.element, t, (function(t) {
                                        e[s + "Mousedown"](t, n)
                                    })))
                                }))
                            })), i
                        }, e.prototype.shadesMousedown = function(t, e) {
                            t = this.chart.pointer.normalize(t);
                            var i = this.chart,
                                s = this.xAxis,
                                o = this.zoomedMin,
                                n = this.left,
                                r = this.size,
                                a = this.range,
                                h = t.chartX;
                            if (i.inverted && (h = t.chartY, n = this.top), 1 === e) this.grabbedCenter = h, this.fixedWidth = a, this.dragOffset = h - o;
                            else {
                                if (t = h - n - a / 2, 0 === e) t = Math.max(0, t);
                                else if (2 === e && t + a >= r)
                                    if (t = r - a, this.reversedExtremes) {
                                        t -= a;
                                        var l = this.getUnionExtremes().dataMin
                                    } else var c = this.getUnionExtremes().dataMax;
                                t !== o && (this.fixedWidth = a, e = s.navigatorAxis.toFixedRange(t, t + a, l, c), p(e.min) && i.xAxis[0].setExtremes(Math.min(e.min, e.max), Math.max(e.min, e.max), !0, null, {
                                    trigger: "navigator"
                                }))
                            }
                        }, e.prototype.handlesMousedown = function(t, e) {
                            this.chart.pointer.normalize(t), t = this.chart;
                            var i = t.xAxis[0],
                                s = this.reversedExtremes;
                            0 === e ? (this.grabbedLeft = !0, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = s ? i.min : i.max) : (this.grabbedRight = !0, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = s ? i.max : i.min), t.fixedRange = null
                        }, e.prototype.onMouseMove = function(t) {
                            var e = this,
                                i = e.chart,
                                o = e.left,
                                n = e.navigatorSize,
                                r = e.range,
                                a = e.dragOffset,
                                h = i.inverted;
                            t.touches && 0 === t.touches[0].pageX || (t = i.pointer.normalize(t), i = t.chartX, h && (o = e.top, i = t.chartY), e.grabbedLeft ? (e.hasDragged = !0, e.render(0, 0, i - o, e.otherHandlePos)) : e.grabbedRight ? (e.hasDragged = !0, e.render(0, 0, e.otherHandlePos, i - o)) : e.grabbedCenter && (e.hasDragged = !0, i < a ? i = a : i > n + a - r && (i = n + a - r), e.render(0, 0, i - a, i - a + r)), e.hasDragged && e.scrollbar && b(e.scrollbar.options.liveRedraw, s.svg && !S && !this.chart.isBoosting) && (t.DOMType = t.type, setTimeout((function() {
                                e.onMouseUp(t)
                            }), 0)))
                        }, e.prototype.onMouseUp = function(t) {
                            var e = this.chart,
                                i = this.xAxis,
                                s = this.scrollbar,
                                o = t.DOMEvent || t,
                                n = e.inverted,
                                r = this.rendered && !this.hasDragged ? "animate" : "attr",
                                a = Math.round(this.zoomedMax),
                                h = Math.round(this.zoomedMin);
                            if (this.hasDragged && (!s || !s.hasDragged) || "scrollbar" === t.trigger) {
                                if (s = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos) var l = this.fixedExtreme;
                                else if (this.zoomedMax === this.otherHandlePos) var c = this.fixedExtreme;
                                this.zoomedMax === this.size && (c = this.reversedExtremes ? s.dataMin : s.dataMax), 0 === this.zoomedMin && (l = this.reversedExtremes ? s.dataMax : s.dataMin), i = i.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, l, c), p(i.min) && e.xAxis[0].setExtremes(Math.min(i.min, i.max), Math.max(i.min, i.max), !0, !this.hasDragged && null, {
                                    trigger: "navigator",
                                    triggerOp: "navigator-drag",
                                    DOMEvent: o
                                })
                            }
                            "mousemove" !== t.DOMType && "touchmove" !== t.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && (this.shades && this.drawMasks(h, a, n, r), this.outline && this.drawOutline(h, a, n, r), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(h, 0, n, r), this.drawHandle(a, 1, n, r)))
                        }, e.prototype.removeEvents = function() {
                            this.eventsToUnbind && (this.eventsToUnbind.forEach((function(t) {
                                t()
                            })), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents()
                        }, e.prototype.removeBaseSeriesEvents = function() {
                            var t = this.baseSeries || [];
                            this.navigatorEnabled && t[0] && (!1 !== this.navigatorOptions.adaptToUpdatedData && t.forEach((function(t) {
                                k(t, "updatedData", this.updatedDataHandler)
                            }), this), t[0].xAxis && k(t[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes))
                        }, e.prototype.init = function(e) {
                            var i = e.options,
                                s = i.navigator,
                                n = s.enabled,
                                a = i.scrollbar,
                                h = a.enabled;
                            i = n ? s.height : 0;
                            var c = h ? a.height : 0;
                            this.handles = [], this.shades = [], this.chart = e, this.setBaseSeries(), this.height = i, this.scrollbarHeight = c, this.scrollbarEnabled = h, this.navigatorEnabled = n, this.navigatorOptions = s, this.scrollbarOptions = a, this.outlineHeight = i + c, this.opposite = b(s.opposite, !(n || !e.inverted));
                            var d = this;
                            n = d.baseSeries, a = e.xAxis.length, h = e.yAxis.length;
                            var p = n && n[0] && n[0].xAxis || e.xAxis[0] || {
                                options: {}
                            };
                            e.isDirtyBox = !0, d.navigatorEnabled ? (d.xAxis = new t(e, y({
                                breaks: p.options.breaks,
                                ordinal: p.options.ordinal
                            }, s.xAxis, {
                                id: "navigator-x-axis",
                                yAxis: "navigator-y-axis",
                                isX: !0,
                                type: "datetime",
                                index: a,
                                isInternal: !0,
                                offset: 0,
                                keepOrdinalPadding: !0,
                                startOnTick: !1,
                                endOnTick: !1,
                                minPadding: 0,
                                maxPadding: 0,
                                zoomEnabled: !1
                            }, e.inverted ? {
                                offsets: [c, 0, -c, 0],
                                width: i
                            } : {
                                offsets: [0, -c, 0, c],
                                height: i
                            })), d.yAxis = new t(e, y(s.yAxis, {
                                id: "navigator-y-axis",
                                alignTicks: !1,
                                offset: 0,
                                index: h,
                                isInternal: !0,
                                zoomEnabled: !1
                            }, e.inverted ? {
                                width: i
                            } : {
                                height: i
                            })), n || s.series.data ? d.updateNavigatorSeries(!1) : 0 === e.series.length && (d.unbindRedraw = l(e, "beforeRedraw", (function() {
                                0 < e.series.length && !d.series && (d.setBaseSeries(), d.unbindRedraw())
                            }))), d.reversedExtremes = e.inverted && !d.xAxis.reversed || !e.inverted && d.xAxis.reversed, d.renderElements(), d.addMouseEvents()) : (d.xAxis = {
                                chart: e,
                                navigatorAxis: {
                                    fake: !0
                                },
                                translate: function(t, i) {
                                    var s = e.xAxis[0],
                                        o = s.getExtremes(),
                                        n = s.len - 2 * c,
                                        r = A("min", s.options.min, o.dataMin);
                                    return s = A("max", s.options.max, o.dataMax) - r, i ? t * s / n + r : n * (t - r) / s
                                },
                                toPixels: function(t) {
                                    return this.translate(t)
                                },
                                toValue: function(t) {
                                    return this.translate(t, !0)
                                }
                            }, d.xAxis.navigatorAxis.axis = d.xAxis, d.xAxis.navigatorAxis.toFixedRange = o.AdditionsClass.prototype.toFixedRange.bind(d.xAxis.navigatorAxis)), e.options.scrollbar.enabled && (e.scrollbar = d.scrollbar = new r(e.renderer, y(e.options.scrollbar, {
                                margin: d.navigatorEnabled ? 0 : 10,
                                vertical: e.inverted
                            }), e), l(d.scrollbar, "changed", (function(t) {
                                var i = d.size,
                                    s = i * this.to;
                                i *= this.from, d.hasDragged = d.scrollbar.hasDragged, d.render(0, 0, i, s), (e.options.scrollbar.liveRedraw || "mousemove" !== t.DOMType && "touchmove" !== t.DOMType) && setTimeout((function() {
                                    d.onMouseUp(t)
                                }))
                            }))), d.addBaseSeriesEvents(), d.addChartEvents()
                        }, e.prototype.getUnionExtremes = function(t) {
                            var e, i = this.chart.xAxis[0],
                                s = this.xAxis,
                                o = s.options,
                                n = i.options;
                            return t && null === i.dataMin || (e = {
                                dataMin: b(o && o.min, A("min", n.min, i.dataMin, s.dataMin, s.min)),
                                dataMax: b(o && o.max, A("max", n.max, i.dataMax, s.dataMax, s.max))
                            }), e
                        }, e.prototype.setBaseSeries = function(t, e) {
                            var i = this.chart,
                                s = this.baseSeries = [];
                            t = t || i.options && i.options.navigator.baseSeries || (i.series.length ? m(i.series, (function(t) {
                                return !t.options.isInternal
                            })).index : 0), (i.series || []).forEach((function(e, i) {
                                e.options.isInternal || !e.options.showInNavigator && (i !== t && e.options.id !== t || !1 === e.options.showInNavigator) || s.push(e)
                            })), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(!0, e)
                        }, e.prototype.updateNavigatorSeries = function(t, e) {
                            var i, s, o, n = this,
                                r = n.chart,
                                a = n.baseSeries,
                                l = n.navigatorOptions.series,
                                c = {
                                    enableMouseTracking: !1,
                                    index: null,
                                    linkedTo: null,
                                    group: "nav",
                                    padXAxis: !1,
                                    xAxis: "navigator-x-axis",
                                    yAxis: "navigator-y-axis",
                                    showInLegend: !1,
                                    stacking: void 0,
                                    isInternal: !0,
                                    states: {
                                        inactive: {
                                            opacity: 1
                                        }
                                    }
                                },
                                d = n.series = (n.series || []).filter((function(t) {
                                    var e = t.baseSeries;
                                    return !(0 > a.indexOf(e)) || (e && (k(e, "updatedData", n.updatedDataHandler), delete e.navigatorSeries), t.chart && t.destroy(), !1)
                                }));
                            a && a.length && a.forEach((function(t) {
                                var p = t.navigatorSeries,
                                    u = g({
                                        color: t.color,
                                        visible: t.visible
                                    }, x(l) ? h.navigator.series : l);
                                p && !1 === n.navigatorOptions.adaptToUpdatedData || (c.name = "Navigator " + a.length, i = t.options || {}, o = i.navigatorOptions || {}, s = y(i, c, u, o), s.pointRange = b(u.pointRange, o.pointRange, h.plotOptions[s.type || "line"].pointRange), u = o.data || u.data, n.hasNavigatorData = n.hasNavigatorData || !!u, s.data = u || i.data && i.data.slice(0), p && p.options ? p.update(s, e) : (t.navigatorSeries = r.initSeries(s), t.navigatorSeries.baseSeries = t, d.push(t.navigatorSeries)))
                            })), (!l.data || a && a.length) && !x(l) || (n.hasNavigatorData = !1, l = M(l), l.forEach((function(t, e) {
                                c.name = "Navigator " + (d.length + 1), s = y(h.navigator.series, {
                                    color: r.series[e] && !r.series[e].options.isInternal && r.series[e].color || r.options.colors[e] || r.options.colors[0]
                                }, c, t), s.data = t.data, s.data && (n.hasNavigatorData = !0, d.push(r.initSeries(s)))
                            }))), t && this.addBaseSeriesEvents()
                        }, e.prototype.addBaseSeriesEvents = function() {
                            var t = this,
                                e = t.baseSeries || [];
                            e[0] && e[0].xAxis && l(e[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes), e.forEach((function(e) {
                                l(e, "show", (function() {
                                    this.navigatorSeries && this.navigatorSeries.setVisible(!0, !1)
                                })), l(e, "hide", (function() {
                                    this.navigatorSeries && this.navigatorSeries.setVisible(!1, !1)
                                })), !1 !== this.navigatorOptions.adaptToUpdatedData && e.xAxis && l(e, "updatedData", this.updatedDataHandler), l(e, "remove", (function() {
                                    this.navigatorSeries && (f(t.series, this.navigatorSeries), p(this.navigatorSeries.options) && this.navigatorSeries.remove(!1), delete this.navigatorSeries)
                                }))
                            }), this)
                        }, e.prototype.getBaseSeriesMin = function(t) {
                            return this.baseSeries.reduce((function(t, e) {
                                return Math.min(t, e.xData ? e.xData[0] : t)
                            }), t)
                        }, e.prototype.modifyNavigatorAxisExtremes = function() {
                            var t, e = this.xAxis;
                            "undefined" !== typeof e.getExtremes && (!(t = this.getUnionExtremes(!0)) || t.dataMin === e.min && t.dataMax === e.max || (e.min = t.dataMin, e.max = t.dataMax))
                        }, e.prototype.modifyBaseAxisExtremes = function() {
                            var t = this.chart.navigator,
                                e = this.getExtremes(),
                                i = e.dataMin,
                                s = e.dataMax;
                            e = e.max - e.min;
                            var o = t.stickToMin,
                                n = t.stickToMax,
                                r = b(this.options.overscroll, 0),
                                a = t.series && t.series[0],
                                h = !!this.setExtremes;
                            if (!this.eventArgs || "rangeSelectorButton" !== this.eventArgs.trigger) {
                                if (o) var l = i,
                                    c = l + e;
                                n && (c = s + r, o || (l = Math.max(i, c - e, t.getBaseSeriesMin(a && a.xData ? a.xData[0] : -Number.MAX_VALUE)))), h && (o || n) && v(l) && (this.min = this.userMin = l, this.max = this.userMax = c)
                            }
                            t.stickToMin = t.stickToMax = null
                        }, e.prototype.updatedDataHandler = function() {
                            var t = this.chart.navigator,
                                e = this.navigatorSeries,
                                i = t.getBaseSeriesMin(this.xData[0]);
                            t.stickToMax = t.reversedExtremes ? 0 === Math.round(t.zoomedMin) : Math.round(t.zoomedMax) >= Math.round(t.size), t.stickToMin = v(this.xAxis.min) && this.xAxis.min <= i && (!this.chart.fixedRange || !t.stickToMax), e && !t.hasNavigatorData && (e.options.pointStart = this.xData[0], e.setData(this.options.data, !1, null, !1))
                        }, e.prototype.addChartEvents = function() {
                            this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(l(this.chart, "redraw", (function() {
                                var t = this.navigator,
                                    e = t && (t.baseSeries && t.baseSeries[0] && t.baseSeries[0].xAxis || this.xAxis[0]);
                                e && t.render(e.min, e.max)
                            })), l(this.chart, "getMargins", (function() {
                                var t = this.navigator,
                                    e = t.opposite ? "plotTop" : "marginBottom";
                                this.inverted && (e = t.opposite ? "marginRight" : "plotLeft"), this[e] = (this[e] || 0) + (t.navigatorEnabled || !this.inverted ? t.outlineHeight : 0) + t.navigatorOptions.margin
                            })))
                        }, e.prototype.destroy = function() {
                            this.removeEvents(), this.xAxis && (f(this.chart.xAxis, this.xAxis), f(this.chart.axes, this.xAxis)), this.yAxis && (f(this.chart.yAxis, this.yAxis), f(this.chart.axes, this.yAxis)), (this.series || []).forEach((function(t) {
                                t.destroy && t.destroy()
                            })), "series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" ").forEach((function(t) {
                                this[t] && this[t].destroy && this[t].destroy(), this[t] = null
                            }), this), [this.handles].forEach((function(t) {
                                u(t)
                            }), this)
                        }, e
                    }();
                    return s.Navigator || (s.Navigator = T, o.compose(t), l(e, "beforeShowResetZoom", (function() {
                        var t = this.options,
                            e = t.navigator,
                            i = t.rangeSelector;
                        if ((e && e.enabled || i && i.enabled) && (!S && "x" === t.chart.zoomType || S && "x" === t.chart.pinchType)) return !1
                    })), l(e, "beforeRender", (function() {
                        var t = this.options;
                        (t.navigator.enabled || t.scrollbar.enabled) && (this.scroller = this.navigator = new T(this))
                    })), l(e, "afterSetChartSize", (function() {
                        var t = this.legend,
                            e = this.navigator;
                        if (e) {
                            var i = t && t.options,
                                s = e.xAxis,
                                o = e.yAxis,
                                n = e.scrollbarHeight;
                            this.inverted ? (e.left = e.opposite ? this.chartWidth - n - e.height : this.spacing[3] + n, e.top = this.plotTop + n) : (e.left = this.plotLeft + n, e.top = e.navigatorOptions.top || this.chartHeight - e.height - n - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (i && "bottom" === i.verticalAlign && "proximate" !== i.layout && i.enabled && !i.floating ? t.legendHeight + b(i.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), s && o && (this.inverted ? s.options.left = o.options.left = e.left : s.options.top = o.options.top = e.top, s.setAxisSize(), o.setAxisSize())
                        }
                    })), l(e, "update", (function(t) {
                        var e = t.options.navigator || {},
                            i = t.options.scrollbar || {};
                        this.navigator || this.scroller || !e.enabled && !i.enabled || (y(!0, this.options.navigator, e), y(!0, this.options.scrollbar, i), delete t.options.navigator, delete t.options.scrollbar)
                    })), l(e, "afterUpdate", (function(t) {
                        this.navigator || this.scroller || !this.options.navigator.enabled && !this.options.scrollbar.enabled || (this.scroller = this.navigator = new T(this), b(t.redraw, !0) && this.redraw(t.animation))
                    })), l(e, "afterAddSeries", (function() {
                        this.navigator && this.navigator.setBaseSeries(null, !1)
                    })), l(n, "afterUpdate", (function() {
                        this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, !1)
                    })), e.prototype.callbacks.push((function(t) {
                        var e = t.navigator;
                        e && t.xAxis[0] && (t = t.xAxis[0].getExtremes(), e.render(t.min, t.max))
                    }))), s.Navigator = T, s.Navigator
                })), e(t, "parts/OrdinalAxis.js", [t["parts/Axis.js"], t["parts/Globals.js"], t["parts/Utilities.js"]], (function(t, e, i) {
                    var s = i.addEvent,
                        o = i.css,
                        n = i.defined,
                        r = i.pick,
                        a = i.timeUnits;
                    i = e.Chart;
                    var h, l = e.Series;
                    return function(t) {
                        var i = function() {
                            function t(t) {
                                this.index = {}, this.axis = t
                            }
                            return t.prototype.beforeSetTickPositions = function() {
                                var t, e, i = this.axis,
                                    s = i.ordinal,
                                    o = [],
                                    n = !1,
                                    a = i.getExtremes(),
                                    h = a.min,
                                    l = a.max,
                                    c = i.isXAxis && !!i.options.breaks;
                                a = i.options.ordinal;
                                var d, p = Number.MAX_VALUE,
                                    u = i.chart.options.chart.ignoreHiddenSeries;
                                if (a || c) {
                                    i.series.forEach((function(e, i) {
                                        if (t = [], !(u && !1 === e.visible || !1 === e.takeOrdinalPosition && !c) && (o = o.concat(e.processedXData), f = o.length, o.sort((function(t, e) {
                                                return t - e
                                            })), p = Math.min(p, r(e.closestPointRange, p)), f)) {
                                            for (i = 0; i < f - 1;) o[i] !== o[i + 1] && t.push(o[i + 1]), i++;
                                            t[0] !== o[0] && t.unshift(o[0]), o = t
                                        }
                                        e.isSeriesBoosting && (d = !0)
                                    })), d && (o.length = 0);
                                    var f = o.length;
                                    if (2 < f) {
                                        var g = o[1] - o[0];
                                        for (e = f - 1; e-- && !n;) o[e + 1] - o[e] !== g && (n = !0);
                                        !i.options.keepOrdinalPadding && (o[0] - h > g || l - o[o.length - 1] > g) && (n = !0)
                                    } else i.options.overscroll && (2 === f ? p = o[1] - o[0] : 1 === f ? (p = i.options.overscroll, o = [o[0], o[0] + p]) : p = s.overscrollPointsRange);
                                    n ? (i.options.overscroll && (s.overscrollPointsRange = p, o = o.concat(s.getOverscrollPositions())), s.positions = o, g = i.ordinal2lin(Math.max(h, o[0]), !0), e = Math.max(i.ordinal2lin(Math.min(l, o[o.length - 1]), !0), 1), s.slope = l = (l - h) / (e - g), s.offset = h - g * l) : (s.overscrollPointsRange = r(i.closestPointRange, s.overscrollPointsRange), s.positions = i.ordinal.slope = s.offset = void 0)
                                }
                                i.isOrdinal = a && n, s.groupIntervalFactor = null
                            }, t.prototype.getExtendedPositions = function() {
                                var t, i = this,
                                    s = i.axis,
                                    o = s.constructor.prototype,
                                    n = s.chart,
                                    r = s.series[0].currentDataGrouping,
                                    a = i.index,
                                    h = r ? r.count + r.unitName : "raw",
                                    l = s.options.overscroll,
                                    c = s.getExtremes();
                                if (a || (a = i.index = {}), !a[h]) {
                                    var d = {
                                        series: [],
                                        chart: n,
                                        getExtremes: function() {
                                            return {
                                                min: c.dataMin,
                                                max: c.dataMax + l
                                            }
                                        },
                                        options: {
                                            ordinal: !0
                                        },
                                        ordinal: {},
                                        ordinal2lin: o.ordinal2lin,
                                        val2lin: o.val2lin
                                    };
                                    d.ordinal.axis = d, s.series.forEach((function(s) {
                                        t = {
                                            xAxis: d,
                                            xData: s.xData.slice(),
                                            chart: n,
                                            destroyGroupedData: e.noop,
                                            getProcessedData: e.Series.prototype.getProcessedData
                                        }, t.xData = t.xData.concat(i.getOverscrollPositions()), t.options = {
                                            dataGrouping: r ? {
                                                enabled: !0,
                                                forced: !0,
                                                approximation: "open",
                                                units: [
                                                    [r.unitName, [r.count]]
                                                ]
                                            } : {
                                                enabled: !1
                                            }
                                        }, s.processData.apply(t), d.series.push(t)
                                    })), s.ordinal.beforeSetTickPositions.apply({
                                        axis: d
                                    }), a[h] = d.ordinal.positions
                                }
                                return a[h]
                            }, t.prototype.getGroupIntervalFactor = function(t, e, i) {
                                i = i.processedXData;
                                var s = i.length,
                                    o = [],
                                    n = this.groupIntervalFactor;
                                if (!n) {
                                    for (n = 0; n < s - 1; n++) o[n] = i[n + 1] - i[n];
                                    o.sort((function(t, e) {
                                        return t - e
                                    })), o = o[Math.floor(s / 2)], t = Math.max(t, i[0]), e = Math.min(e, i[s - 1]), this.groupIntervalFactor = n = s * o / (e - t)
                                }
                                return n
                            }, t.prototype.getOverscrollPositions = function() {
                                var t = this.axis,
                                    e = t.options.overscroll,
                                    i = this.overscrollPointsRange,
                                    s = [],
                                    o = t.dataMax;
                                if (n(i))
                                    for (s.push(o); o <= t.dataMax + e;) o += i, s.push(o);
                                return s
                            }, t.prototype.postProcessTickInterval = function(t) {
                                var e = this.axis,
                                    i = this.slope;
                                return i ? e.options.breaks ? e.closestPointRange || t : t / (i / e.closestPointRange) : t
                            }, t
                        }();
                        t.Composition = i, t.compose = function(e, i, r) {
                            e.keepProps.push("ordinal");
                            var h = e.prototype;
                            e.prototype.getTimeTicks = function(t, e, i, s, o, r, h) {
                                void 0 === o && (o = []), void 0 === r && (r = 0);
                                var l, c, d = 0,
                                    p = {},
                                    u = [],
                                    f = -Number.MAX_VALUE,
                                    g = this.options.tickPixelInterval,
                                    m = this.chart.time,
                                    x = [];
                                if (!this.options.ordinal && !this.options.breaks || !o || 3 > o.length || "undefined" === typeof e) return m.getTimeTicks.apply(m, arguments);
                                var v = o.length;
                                for (l = 0; l < v; l++) {
                                    var y = l && o[l - 1] > i;
                                    if (o[l] < e && (d = l), l === v - 1 || o[l + 1] - o[l] > 5 * r || y) {
                                        if (o[l] > f) {
                                            for (c = m.getTimeTicks(t, o[d], o[l], s); c.length && c[0] <= f;) c.shift();
                                            c.length && (f = c[c.length - 1]), x.push(u.length), u = u.concat(c)
                                        }
                                        d = l + 1
                                    }
                                    if (y) break
                                }
                                if (c = c.info, h && c.unitRange <= a.hour) {
                                    for (l = u.length - 1, d = 1; d < l; d++)
                                        if (m.dateFormat("%d", u[d]) !== m.dateFormat("%d", u[d - 1])) {
                                            p[u[d]] = "day";
                                            var b = !0
                                        }
                                    b && (p[u[0]] = "day"), c.higherRanks = p
                                }
                                if (c.segmentStarts = x, u.info = c, h && n(g)) {
                                    var k;
                                    for (d = x = u.length, b = [], m = []; d--;) l = this.translate(u[d]), k && (m[d] = k - l), b[d] = k = l;
                                    for (m.sort(), m = m[Math.floor(m.length / 2)], m < .6 * g && (m = null), d = u[x - 1] > i ? x - 1 : x, k = void 0; d--;) l = b[d], x = Math.abs(k - l), k && x < .8 * g && (null === m || x < .8 * m) ? (p[u[d]] && !p[u[d + 1]] ? (x = d + 1, k = l) : x = d, u.splice(x, 1)) : k = l
                                }
                                return u
                            }, h.lin2val = function(t, e) {
                                var i = this.ordinal,
                                    s = i.positions;
                                if (s) {
                                    var o = i.slope,
                                        n = i.offset;
                                    if (i = s.length - 1, e)
                                        if (0 > t) t = s[0];
                                        else if (t > i) t = s[i];
                                    else {
                                        i = Math.floor(t);
                                        var r = t - i
                                    } else
                                        for (; i--;)
                                            if (e = o * i + n, t >= e) {
                                                o = o * (i + 1) + n, r = (t - e) / (o - e);
                                                break
                                            } return "undefined" !== typeof r && "undefined" !== typeof s[i] ? s[i] + (r ? r * (s[i + 1] - s[i]) : 0) : t
                                }
                                return t
                            }, h.val2lin = function(t, e) {
                                var i = this.ordinal,
                                    s = i.positions;
                                if (s) {
                                    var o, n = s.length;
                                    for (o = n; o--;)
                                        if (s[o] === t) {
                                            var r = o;
                                            break
                                        }
                                    for (o = n - 1; o--;)
                                        if (t > s[o] || 0 === o) {
                                            t = (t - s[o]) / (s[o + 1] - s[o]), r = o + t;
                                            break
                                        }
                                    e = e ? r : i.slope * (r || 0) + i.offset
                                } else e = t;
                                return e
                            }, h.ordinal2lin = h.val2lin, s(e, "afterInit", (function() {
                                this.ordinal || (this.ordinal = new t.Composition(this))
                            })), s(e, "foundExtremes", (function() {
                                this.isXAxis && n(this.options.overscroll) && this.max === this.dataMax && (!this.chart.mouseIsDown || this.isInternal) && (!this.eventArgs || this.eventArgs && "navigator" !== this.eventArgs.trigger) && (this.max += this.options.overscroll, !this.isInternal && n(this.userMin) && (this.min += this.options.overscroll))
                            })), s(e, "afterSetScale", (function() {
                                this.horiz && !this.isDirty && (this.isDirty = this.isOrdinal && this.chart.navigator && !this.chart.navigator.adaptToUpdatedData)
                            })), s(e, "initialAxisTranslation", (function() {
                                this.ordinal && (this.ordinal.beforeSetTickPositions(), this.tickInterval = this.ordinal.postProcessTickInterval(this.tickInterval))
                            })), s(i, "pan", (function(t) {
                                var e = this.xAxis[0],
                                    i = e.options.overscroll,
                                    s = t.originalEvent.chartX,
                                    n = this.options.chart && this.options.chart.panning,
                                    r = !1;
                                if (n && "y" !== n.type && e.options.ordinal && e.series.length) {
                                    var a = this.mouseDownX,
                                        h = e.getExtremes(),
                                        l = h.dataMax,
                                        c = h.min,
                                        d = h.max,
                                        p = this.hoverPoints,
                                        u = e.closestPointRange || e.ordinal && e.ordinal.overscrollPointsRange;
                                    a = (a - s) / (e.translationSlope * (e.ordinal.slope || u));
                                    var f = {
                                        ordinal: {
                                            positions: e.ordinal.getExtendedPositions()
                                        }
                                    };
                                    u = e.lin2val;
                                    var g = e.val2lin;
                                    if (f.ordinal.positions) {
                                        if (1 < Math.abs(a)) {
                                            if (p && p.forEach((function(t) {
                                                    t.setState()
                                                })), 0 > a) {
                                                p = f;
                                                var m = e.ordinal.positions ? e : f
                                            } else p = e.ordinal.positions ? e : f, m = f;
                                            f = m.ordinal.positions, l > f[f.length - 1] && f.push(l), this.fixedRange = d - c, a = e.navigatorAxis.toFixedRange(null, null, u.apply(p, [g.apply(p, [c, !0]) + a, !0]), u.apply(m, [g.apply(m, [d, !0]) + a, !0])), a.min >= Math.min(h.dataMin, c) && a.max <= Math.max(l, d) + i && e.setExtremes(a.min, a.max, !0, !1, {
                                                trigger: "pan"
                                            }), this.mouseDownX = s, o(this.container, {
                                                cursor: "move"
                                            })
                                        }
                                    } else r = !0
                                } else r = !0;
                                r || n && /y/.test(n.type) ? i && (e.max = e.dataMax + i) : t.preventDefault()
                            })), s(r, "updatedData", (function() {
                                var t = this.xAxis;
                                t && t.options.ordinal && delete t.ordinal.index
                            }))
                        }
                    }(h || (h = {})), h.compose(t, i, l), h
                })), e(t, "modules/broken-axis.src.js", [t["parts/Axis.js"], t["parts/Globals.js"], t["parts/Utilities.js"], t["parts/Stacking.js"]], (function(t, e, i, s) {
                    var o = i.addEvent,
                        n = i.find,
                        r = i.fireEvent,
                        a = i.isArray,
                        h = i.isNumber,
                        l = i.pick,
                        c = e.Series,
                        d = function() {
                            function e(t) {
                                this.hasBreaks = !1, this.axis = t
                            }
                            return e.isInBreak = function(t, e) {
                                var i = t.repeat || 1 / 0,
                                    s = t.from,
                                    o = t.to - t.from;
                                return e = e >= s ? (e - s) % i : i - (s - e) % i, t.inclusive ? e <= o : e < o && 0 !== e
                            }, e.lin2Val = function(t) {
                                var i, s = this.brokenAxis;
                                if (s = s && s.breakArray, !s) return t;
                                for (i = 0; i < s.length; i++) {
                                    var o = s[i];
                                    if (o.from >= t) break;
                                    (o.to < t || e.isInBreak(o, t)) && (t += o.len)
                                }
                                return t
                            }, e.val2Lin = function(t) {
                                var i = this.brokenAxis;
                                if (i = i && i.breakArray, !i) return t;
                                var s, o = t;
                                for (s = 0; s < i.length; s++) {
                                    var n = i[s];
                                    if (n.to <= t) o -= n.len;
                                    else {
                                        if (n.from >= t) break;
                                        if (e.isInBreak(n, t)) {
                                            o -= t - n.from;
                                            break
                                        }
                                    }
                                }
                                return o
                            }, e.prototype.findBreakAt = function(t, e) {
                                return n(e, (function(e) {
                                    return e.from < t && t < e.to
                                }))
                            }, e.prototype.isInAnyBreak = function(t, i) {
                                var s, o = this.axis,
                                    n = o.options.breaks,
                                    r = n && n.length;
                                if (r) {
                                    for (; r--;)
                                        if (e.isInBreak(n[r], t)) {
                                            var a = !0;
                                            s || (s = l(n[r].showPoints, !o.isXAxis))
                                        }
                                    var h = a && i ? a && !s : a
                                }
                                return h
                            }, e.prototype.setBreaks = function(i, s) {
                                var o = this,
                                    n = o.axis,
                                    h = a(i) && !!i.length;
                                n.isDirty = o.hasBreaks !== h, o.hasBreaks = h, n.options.breaks = n.userOptions.breaks = i, n.forceRedraw = !0, n.series.forEach((function(t) {
                                    t.isDirty = !0
                                })), h || n.val2lin !== e.val2Lin || (delete n.val2lin, delete n.lin2val), h && (n.userOptions.ordinal = !1, n.lin2val = e.lin2Val, n.val2lin = e.val2Lin, n.setExtremes = function(e, i, s, n, r) {
                                    if (o.hasBreaks) {
                                        for (var a, h = this.options.breaks; a = o.findBreakAt(e, h);) e = a.to;
                                        for (; a = o.findBreakAt(i, h);) i = a.from;
                                        i < e && (i = e)
                                    }
                                    t.prototype.setExtremes.call(this, e, i, s, n, r)
                                }, n.setAxisTranslation = function(i) {
                                    if (t.prototype.setAxisTranslation.call(this, i), o.unitLength = null, o.hasBreaks) {
                                        i = n.options.breaks || [];
                                        var s, a, h = [],
                                            c = [],
                                            d = 0,
                                            p = n.userMin || n.min,
                                            u = n.userMax || n.max,
                                            f = l(n.pointRangePadding, 0);
                                        i.forEach((function(t) {
                                            s = t.repeat || 1 / 0, e.isInBreak(t, p) && (p += t.to % s - p % s), e.isInBreak(t, u) && (u -= u % s - t.from % s)
                                        })), i.forEach((function(t) {
                                            for (m = t.from, s = t.repeat || 1 / 0; m - s > p;) m -= s;
                                            for (; m < p;) m += s;
                                            for (a = m; a < u; a += s) h.push({
                                                value: a,
                                                move: "in"
                                            }), h.push({
                                                value: a + (t.to - t.from),
                                                move: "out",
                                                size: t.breakSize
                                            })
                                        })), h.sort((function(t, e) {
                                            return t.value === e.value ? ("in" === t.move ? 0 : 1) - ("in" === e.move ? 0 : 1) : t.value - e.value
                                        }));
                                        var g = 0,
                                            m = p;
                                        h.forEach((function(t) {
                                            g += "in" === t.move ? 1 : -1, 1 === g && "in" === t.move && (m = t.value), 0 === g && (c.push({
                                                from: m,
                                                to: t.value,
                                                len: t.value - m - (t.size || 0)
                                            }), d += t.value - m - (t.size || 0))
                                        })), n.breakArray = o.breakArray = c, o.unitLength = u - p - d + f, r(n, "afterBreaks"), n.staticScale ? n.transA = n.staticScale : o.unitLength && (n.transA *= (u - n.min + f) / o.unitLength), f && (n.minPixelPadding = n.transA * n.minPointOffset), n.min = p, n.max = u
                                    }
                                }), l(s, !0) && n.chart.redraw()
                            }, e
                        }();
                    return e = function() {
                        function t() {}
                        return t.compose = function(t, e) {
                            t.keepProps.push("brokenAxis");
                            var i = c.prototype;
                            i.drawBreaks = function(t, e) {
                                var i, s, o, n, a = this,
                                    c = a.points;
                                if (t && t.brokenAxis && t.brokenAxis.hasBreaks) {
                                    var d = t.brokenAxis;
                                    e.forEach((function(e) {
                                        i = d && d.breakArray || [], s = t.isXAxis ? t.min : l(a.options.threshold, t.min), c.forEach((function(a) {
                                            n = l(a["stack" + e.toUpperCase()], a[e]), i.forEach((function(e) {
                                                h(s) && h(n) && (o = !1, s < e.from && n > e.to || s > e.from && n < e.from ? o = "pointBreak" : (s < e.from && n > e.from && n < e.to || s > e.from && n > e.to && n < e.from) && (o = "pointInBreak"), o && r(t, o, {
                                                    point: a,
                                                    brk: e
                                                }))
                                            }))
                                        }))
                                    }))
                                }
                            }, i.gappedPath = function() {
                                var t = this.currentDataGrouping,
                                    e = t && t.gapSize;
                                t = this.options.gapSize;
                                var i, o = this.points.slice(),
                                    n = o.length - 1,
                                    r = this.yAxis;
                                if (t && 0 < n)
                                    for ("value" !== this.options.gapUnit && (t *= this.basePointRange), e && e > t && e >= this.basePointRange && (t = e), i = void 0; n--;) i && !1 !== i.visible || (i = o[n + 1]), e = o[n], !1 !== i.visible && !1 !== e.visible && (i.x - e.x > t && (i = (e.x + i.x) / 2, o.splice(n + 1, 0, {
                                        isNull: !0,
                                        x: i
                                    }), r.stacking && this.options.stacking && (i = r.stacking.stacks[this.stackKey][i] = new s(r, r.options.stackLabels, !1, i, this.stack), i.total = 0)), i = e);
                                return this.getGraphPath(o)
                            }, o(t, "init", (function() {
                                this.brokenAxis || (this.brokenAxis = new d(this))
                            })), o(t, "afterInit", (function() {
                                "undefined" !== typeof this.brokenAxis && this.brokenAxis.setBreaks(this.options.breaks, !1)
                            })), o(t, "afterSetTickPositions", (function() {
                                var t = this.brokenAxis;
                                if (t && t.hasBreaks) {
                                    var e, i = this.tickPositions,
                                        s = this.tickPositions.info,
                                        o = [];
                                    for (e = 0; e < i.length; e++) t.isInAnyBreak(i[e]) || o.push(i[e]);
                                    this.tickPositions = o, this.tickPositions.info = s
                                }
                            })), o(t, "afterSetOptions", (function() {
                                this.brokenAxis && this.brokenAxis.hasBreaks && (this.options.ordinal = !1)
                            })), o(e, "afterGeneratePoints", (function() {
                                var t = this.options.connectNulls,
                                    e = this.points,
                                    i = this.xAxis,
                                    s = this.yAxis;
                                if (this.isDirty)
                                    for (var o = e.length; o--;) {
                                        var n = e[o],
                                            r = !(null === n.y && !1 === t) && (i && i.brokenAxis && i.brokenAxis.isInAnyBreak(n.x, !0) || s && s.brokenAxis && s.brokenAxis.isInAnyBreak(n.y, !0));
                                        n.visible = !r && !1 !== n.options.visible
                                    }
                            })), o(e, "afterRender", (function() {
                                this.drawBreaks(this.xAxis, ["x"]), this.drawBreaks(this.yAxis, l(this.pointArrayMap, ["y"]))
                            }))
                        }, t
                    }(), e.compose(t, c), e
                })), e(t, "masters/modules/broken-axis.src.js", [], (function() {})), e(t, "parts/DataGrouping.js", [t["parts/DateTimeAxis.js"], t["parts/Globals.js"], t["parts/Options.js"], t["parts/Point.js"], t["parts/Tooltip.js"], t["parts/Utilities.js"]], (function(t, e, i, s, o, n) {
                    var r = n.addEvent,
                        a = n.arrayMax,
                        h = n.arrayMin,
                        l = n.correctFloat,
                        c = n.defined,
                        d = n.error,
                        p = n.extend,
                        u = n.format,
                        f = n.isNumber,
                        g = n.merge,
                        m = n.pick,
                        x = e.Axis;
                    n = e.Series;
                    var v = e.approximations = {
                            sum: function(t) {
                                var e = t.length;
                                if (!e && t.hasNulls) var i = null;
                                else if (e)
                                    for (i = 0; e--;) i += t[e];
                                return i
                            },
                            average: function(t) {
                                var e = t.length;
                                return t = v.sum(t), f(t) && e && (t = l(t / e)), t
                            },
                            averages: function() {
                                var t = [];
                                return [].forEach.call(arguments, (function(e) {
                                    t.push(v.average(e))
                                })), "undefined" === typeof t[0] ? void 0 : t
                            },
                            open: function(t) {
                                return t.length ? t[0] : t.hasNulls ? null : void 0
                            },
                            high: function(t) {
                                return t.length ? a(t) : t.hasNulls ? null : void 0
                            },
                            low: function(t) {
                                return t.length ? h(t) : t.hasNulls ? null : void 0
                            },
                            close: function(t) {
                                return t.length ? t[t.length - 1] : t.hasNulls ? null : void 0
                            },
                            ohlc: function(t, e, i, s) {
                                if (t = v.open(t), e = v.high(e), i = v.low(i), s = v.close(s), f(t) || f(e) || f(i) || f(s)) return [t, e, i, s]
                            },
                            range: function(t, e) {
                                return t = v.low(t), e = v.high(e), f(t) || f(e) ? [t, e] : null === t && null === e ? null : void 0
                            }
                        },
                        y = function(t, e, i, s) {
                            var o, n = this,
                                r = n.data,
                                a = n.options && n.options.data,
                                h = [],
                                l = [],
                                d = [],
                                p = t.length,
                                u = !!e,
                                m = [],
                                x = n.pointArrayMap,
                                y = x && x.length,
                                b = ["x"].concat(x || ["y"]),
                                k = 0,
                                M = 0;
                            s = "function" === typeof s ? s : v[s] ? v[s] : v[n.getDGApproximation && n.getDGApproximation() || "average"], y ? x.forEach((function() {
                                m.push([])
                            })) : m.push([]);
                            var w = y || 1;
                            for (o = 0; o <= p && !(t[o] >= i[0]); o++);
                            for (o; o <= p; o++) {
                                for (;
                                    "undefined" !== typeof i[k + 1] && t[o] >= i[k + 1] || o === p;) {
                                    var S = i[k];
                                    n.dataGroupInfo = {
                                        start: n.cropStart + M,
                                        length: m[0].length
                                    };
                                    var A = s.apply(n, m);
                                    for (n.pointClass && !c(n.dataGroupInfo.options) && (n.dataGroupInfo.options = g(n.pointClass.prototype.optionsToObject.call({
                                            series: n
                                        }, n.options.data[n.cropStart + M])), b.forEach((function(t) {
                                            delete n.dataGroupInfo.options[t]
                                        }))), "undefined" !== typeof A && (h.push(S), l.push(A), d.push(n.dataGroupInfo)), M = o, S = 0; S < w; S++) m[S].length = 0, m[S].hasNulls = !1;
                                    if (k += 1, o === p) break
                                }
                                if (o === p) break;
                                if (x)
                                    for (S = n.cropStart + o, A = r && r[S] || n.pointClass.prototype.applyOptions.apply({
                                            series: n
                                        }, [a[S]]), S = 0; S < y; S++) {
                                        var T = A[x[S]];
                                        f(T) ? m[S].push(T) : null === T && (m[S].hasNulls = !0)
                                    } else S = u ? e[o] : null, f(S) ? m[0].push(S) : null === S && (m[0].hasNulls = !0)
                            }
                            return {
                                groupedXData: h,
                                groupedYData: l,
                                groupMap: d
                            }
                        },
                        b = {
                            approximations: v,
                            groupData: y
                        },
                        k = n.prototype,
                        M = k.processData,
                        w = k.generatePoints,
                        S = {
                            groupPixelWidth: 2,
                            dateTimeLabelFormats: {
                                millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"],
                                second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"],
                                minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                                hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                                day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                                week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                                month: ["%B %Y", "%B", "-%B %Y"],
                                year: ["%Y", "%Y", "-%Y"]
                            }
                        },
                        A = {
                            line: {},
                            spline: {},
                            area: {},
                            areaspline: {},
                            arearange: {},
                            column: {
                                groupPixelWidth: 10
                            },
                            columnrange: {
                                groupPixelWidth: 10
                            },
                            candlestick: {
                                groupPixelWidth: 10
                            },
                            ohlc: {
                                groupPixelWidth: 5
                            }
                        },
                        T = e.defaultDataGroupingUnits = [
                            ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                            ["second", [1, 2, 5, 10, 15, 30]],
                            ["minute", [1, 2, 5, 10, 15, 30]],
                            ["hour", [1, 2, 3, 4, 6, 8, 12]],
                            ["day", [1]],
                            ["week", [1]],
                            ["month", [1, 3, 6]],
                            ["year", null]
                        ];
                    return k.getDGApproximation = function() {
                        return this.is("arearange") ? "range" : this.is("ohlc") ? "ohlc" : this.is("column") ? "sum" : "average"
                    }, k.groupData = y, k.processData = function() {
                        var e, i = this.chart,
                            s = this.options.dataGrouping,
                            o = !1 !== this.allowDG && s && m(s.enabled, i.options.isStock),
                            n = this.visible || !i.options.chart.ignoreHiddenSeries,
                            r = this.currentDataGrouping,
                            a = !1;
                        if (this.forceCrop = o, this.groupPixelWidth = null, this.hasProcessed = !0, o && !this.requireSorting && (this.requireSorting = a = !0), o = !1 === M.apply(this, arguments) || !o, a && (this.requireSorting = !1), !o) {
                            this.destroyGroupedData(), o = s.groupAll ? this.xData : this.processedXData;
                            var h = s.groupAll ? this.yData : this.processedYData,
                                l = i.plotSizeX;
                            i = this.xAxis;
                            var d = i.options.ordinal,
                                p = this.groupPixelWidth = i.getGroupPixelWidth && i.getGroupPixelWidth();
                            if (p) {
                                this.isDirty = e = !0, this.points = null, a = i.getExtremes();
                                var u = a.min;
                                a = a.max, d = d && i.ordinal && i.ordinal.getGroupIntervalFactor(u, a, this) || 1, p = p * (a - u) / l * d, l = i.getTimeTicks(t.AdditionsClass.prototype.normalizeTimeTickInterval(p, s.units || T), Math.min(u, o[0]), Math.max(a, o[o.length - 1]), i.options.startOfWeek, o, this.closestPointRange), h = k.groupData.apply(this, [o, h, l, s.approximation]), o = h.groupedXData, d = h.groupedYData;
                                var f = 0;
                                if (s.smoothed && o.length) {
                                    var g = o.length - 1;
                                    for (o[g] = Math.min(o[g], a); g-- && 0 < g;) o[g] += p / 2;
                                    o[0] = Math.max(o[0], u)
                                }
                                for (g = 1; g < l.length; g++) l.info.segmentStarts && -1 !== l.info.segmentStarts.indexOf(g) || (f = Math.max(l[g] - l[g - 1], f));
                                u = l.info, u.gapSize = f, this.closestPointRange = l.info.totalRange, this.groupMap = h.groupMap, c(o[0]) && o[0] < i.min && n && ((!c(i.options.min) && i.min <= i.dataMin || i.min === i.dataMin) && (i.min = Math.min(o[0], i.min)), i.dataMin = Math.min(o[0], i.dataMin)), s.groupAll && (s = this.cropData(o, d, i.min, i.max, 1), o = s.xData, d = s.yData), this.processedXData = o, this.processedYData = d
                            } else this.groupMap = null;
                            this.hasGroupedData = e, this.currentDataGrouping = u, this.preventGraphAnimation = (r && r.totalRange) !== (u && u.totalRange)
                        }
                    }, k.destroyGroupedData = function() {
                        this.groupedData && (this.groupedData.forEach((function(t, e) {
                            t && (this.groupedData[e] = t.destroy ? t.destroy() : null)
                        }), this), this.groupedData.length = 0)
                    }, k.generatePoints = function() {
                        w.apply(this), this.destroyGroupedData(), this.groupedData = this.hasGroupedData ? this.points : null
                    }, r(s, "update", (function() {
                        if (this.dataGroup) return d(24, !1, this.series.chart), !1
                    })), r(o, "headerFormatter", (function(t) {
                        var e = this.chart,
                            i = e.time,
                            s = t.labelConfig,
                            o = s.series,
                            n = o.tooltipOptions,
                            r = o.options.dataGrouping,
                            a = n.xDateFormat,
                            h = o.xAxis,
                            l = n[(t.isFooter ? "footer" : "header") + "Format"];
                        if (h && "datetime" === h.options.type && r && f(s.key)) {
                            var c = o.currentDataGrouping;
                            if (r = r.dateTimeLabelFormats || S.dateTimeLabelFormats, c)
                                if (n = r[c.unitName], 1 === c.count) a = n[0];
                                else {
                                    a = n[1];
                                    var d = n[2]
                                }
                            else !a && r && (a = this.getXDateFormat(s, n, h));
                            a = i.dateFormat(a, s.key), d && (a += i.dateFormat(d, s.key + c.totalRange - 1)), o.chart.styledMode && (l = this.styledModeFormat(l)), t.text = u(l, {
                                point: p(s.point, {
                                    key: a
                                }),
                                series: o
                            }, e), t.preventDefault()
                        }
                    })), r(n, "destroy", k.destroyGroupedData), r(n, "afterSetOptions", (function(t) {
                        t = t.options;
                        var e = this.type,
                            s = this.chart.options.plotOptions,
                            o = i.defaultOptions.plotOptions[e].dataGrouping,
                            n = this.useCommonDataGrouping && S;
                        (A[e] || n) && (o || (o = g(S, A[e])), t.dataGrouping = g(n, o, s.series && s.series.dataGrouping, s[e].dataGrouping, this.userOptions.dataGrouping))
                    })), r(x, "afterSetScale", (function() {
                        this.series.forEach((function(t) {
                            t.hasProcessed = !1
                        }))
                    })), x.prototype.getGroupPixelWidth = function() {
                        var t, e, i = this.series,
                            s = i.length,
                            o = 0,
                            n = !1;
                        for (t = s; t--;)(e = i[t].options.dataGrouping) && (o = Math.max(o, m(e.groupPixelWidth, S.groupPixelWidth)));
                        for (t = s; t--;)(e = i[t].options.dataGrouping) && i[t].hasProcessed && (s = (i[t].processedXData || i[t].data).length, i[t].groupPixelWidth || s > this.chart.plotSizeX / o || s && e.forced) && (n = !0);
                        return n ? o : 0
                    }, x.prototype.setDataGrouping = function(t, e) {
                        var i;
                        if (e = m(e, !0), t || (t = {
                                forced: !1,
                                units: null
                            }), this instanceof x)
                            for (i = this.series.length; i--;) this.series[i].update({
                                dataGrouping: t
                            }, !1);
                        else this.chart.options.series.forEach((function(e) {
                            e.dataGrouping = t
                        }), !1);
                        this.ordinal && (this.ordinal.slope = void 0), e && this.chart.redraw()
                    }, e.dataGrouping = b, b
                })), e(t, "parts/OHLCSeries.js", [t["parts/Globals.js"], t["parts/Point.js"], t["parts/Utilities.js"]], (function(t, e, i) {
                    i = i.seriesType;
                    var s = t.seriesTypes;
                    i("ohlc", "column", {
                        lineWidth: 1,
                        tooltip: {
                            pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'
                        },
                        threshold: null,
                        states: {
                            hover: {
                                lineWidth: 3
                            }
                        },
                        stickyTracking: !0
                    }, {
                        directTouch: !1,
                        pointArrayMap: ["open", "high", "low", "close"],
                        toYData: function(t) {
                            return [t.open, t.high, t.low, t.close]
                        },
                        pointValKey: "close",
                        pointAttrToOptions: {
                            stroke: "color",
                            "stroke-width": "lineWidth"
                        },
                        init: function() {
                            s.column.prototype.init.apply(this, arguments), this.options.stacking = void 0
                        },
                        pointAttribs: function(t, e) {
                            e = s.column.prototype.pointAttribs.call(this, t, e);
                            var i = this.options;
                            return delete e.fill, !t.options.color && i.upColor && t.open < t.close && (e.stroke = i.upColor), e
                        },
                        translate: function() {
                            var t = this,
                                e = t.yAxis,
                                i = !!t.modifyValue,
                                o = ["plotOpen", "plotHigh", "plotLow", "plotClose", "yBottom"];
                            s.column.prototype.translate.apply(t), t.points.forEach((function(s) {
                                [s.open, s.high, s.low, s.close, s.low].forEach((function(n, r) {
                                    null !== n && (i && (n = t.modifyValue(n)), s[o[r]] = e.toPixels(n, !0))
                                })), s.tooltipPos[1] = s.plotHigh + e.pos - t.chart.plotTop
                            }))
                        },
                        drawPoints: function() {
                            var t = this,
                                e = t.chart,
                                i = function(t, e, i) {
                                    var s = t[0];
                                    t = t[1], "number" === typeof s[2] && (s[2] = Math.max(i + e, s[2])), "number" === typeof t[2] && (t[2] = Math.min(i - e, t[2]))
                                };
                            t.points.forEach((function(s) {
                                var o = s.graphic,
                                    n = !o;
                                if ("undefined" !== typeof s.plotY) {
                                    o || (s.graphic = o = e.renderer.path().add(t.group)), e.styledMode || o.attr(t.pointAttribs(s, s.selected && "select"));
                                    var r = o.strokeWidth(),
                                        a = r % 2 / 2,
                                        h = Math.round(s.plotX) - a,
                                        l = Math.round(s.shapeArgs.width / 2),
                                        c = [
                                            ["M", h, Math.round(s.yBottom)],
                                            ["L", h, Math.round(s.plotHigh)]
                                        ];
                                    if (null !== s.open) {
                                        var d = Math.round(s.plotOpen) + a;
                                        c.push(["M", h, d], ["L", h - l, d]), i(c, r / 2, d)
                                    }
                                    null !== s.close && (d = Math.round(s.plotClose) + a, c.push(["M", h, d], ["L", h + l, d]), i(c, r / 2, d)), o[n ? "attr" : "animate"]({
                                        d: c
                                    }).addClass(s.getClassName(), !0)
                                }
                            }))
                        },
                        animate: null
                    }, {
                        getClassName: function() {
                            return e.prototype.getClassName.call(this) + (this.open < this.close ? " highcharts-point-up" : " highcharts-point-down")
                        }
                    })
                })), e(t, "parts/CandlestickSeries.js", [t["parts/Globals.js"], t["parts/Options.js"], t["parts/Utilities.js"]], (function(t, e, i) {
                    e = e.defaultOptions;
                    var s = i.merge;
                    i = i.seriesType;
                    var o = t.seriesTypes;
                    i("candlestick", "ohlc", s(e.plotOptions.column, {
                        states: {
                            hover: {
                                lineWidth: 2
                            }
                        },
                        tooltip: e.plotOptions.ohlc.tooltip,
                        threshold: null,
                        lineColor: "#000000",
                        lineWidth: 1,
                        upColor: "#ffffff",
                        stickyTracking: !0
                    }), {
                        pointAttribs: function(t, e) {
                            var i = o.column.prototype.pointAttribs.call(this, t, e),
                                s = this.options,
                                n = t.open < t.close,
                                r = s.lineColor || this.color;
                            return i["stroke-width"] = s.lineWidth, i.fill = t.options.color || n && s.upColor || this.color, i.stroke = t.options.lineColor || n && s.upLineColor || r, e && (t = s.states[e], i.fill = t.color || i.fill, i.stroke = t.lineColor || i.stroke, i["stroke-width"] = t.lineWidth || i["stroke-width"]), i
                        },
                        drawPoints: function() {
                            var t = this,
                                e = t.chart,
                                i = t.yAxis.reversed;
                            t.points.forEach((function(s) {
                                var o = s.graphic,
                                    n = !o;
                                if ("undefined" !== typeof s.plotY) {
                                    o || (s.graphic = o = e.renderer.path().add(t.group)), t.chart.styledMode || o.attr(t.pointAttribs(s, s.selected && "select")).shadow(t.options.shadow);
                                    var r = o.strokeWidth() % 2 / 2,
                                        a = Math.round(s.plotX) - r,
                                        h = s.plotOpen,
                                        l = s.plotClose,
                                        c = Math.min(h, l);
                                    h = Math.max(h, l);
                                    var d = Math.round(s.shapeArgs.width / 2);
                                    l = i ? h !== s.yBottom : Math.round(c) !== Math.round(s.plotHigh);
                                    var p = i ? Math.round(c) !== Math.round(s.plotHigh) : h !== s.yBottom;
                                    c = Math.round(c) + r, h = Math.round(h) + r, r = [], r.push(["M", a - d, h], ["L", a - d, c], ["L", a + d, c], ["L", a + d, h], ["Z"], ["M", a, c], ["L", a, l ? Math.round(i ? s.yBottom : s.plotHigh) : c], ["M", a, h], ["L", a, p ? Math.round(i ? s.plotHigh : s.yBottom) : h]), o[n ? "attr" : "animate"]({
                                        d: r
                                    }).addClass(s.getClassName(), !0)
                                }
                            }))
                        }
                    })
                })), e(t, "mixins/on-series.js", [t["parts/Globals.js"], t["parts/Utilities.js"]], (function(t, e) {
                    var i = e.defined,
                        s = e.stableSort,
                        o = t.seriesTypes;
                    return {
                        getPlotBox: function() {
                            return t.Series.prototype.getPlotBox.call(this.options.onSeries && this.chart.get(this.options.onSeries) || this)
                        },
                        translate: function() {
                            o.column.prototype.translate.apply(this);
                            var t, e = this,
                                n = e.options,
                                r = e.chart,
                                a = e.points,
                                h = a.length - 1,
                                l = n.onSeries;
                            l = l && r.get(l), n = n.onKey || "y";
                            var c, d = l && l.options.step,
                                p = l && l.points,
                                u = p && p.length,
                                f = r.inverted,
                                g = e.xAxis,
                                m = e.yAxis,
                                x = 0;
                            if (l && l.visible && u) {
                                x = (l.pointXOffset || 0) + (l.barW || 0) / 2, r = l.currentDataGrouping;
                                var v = p[u - 1].x + (r ? r.totalRange : 0);
                                for (s(a, (function(t, e) {
                                        return t.x - e.x
                                    })), n = "plot" + n[0].toUpperCase() + n.substr(1); u-- && a[h];) {
                                    var y = p[u];
                                    if (r = a[h], r.y = y.y, y.x <= r.x && "undefined" !== typeof y[n]) {
                                        if (r.x <= v && (r.plotY = y[n], y.x < r.x && !d && (c = p[u + 1]) && "undefined" !== typeof c[n])) {
                                            var b = (r.x - y.x) / (c.x - y.x);
                                            r.plotY += b * (c[n] - y[n]), r.y += b * (c.y - y.y)
                                        }
                                        if (h--, u++, 0 > h) break
                                    }
                                }
                            }
                            a.forEach((function(s, o) {
                                if (s.plotX += x, ("undefined" === typeof s.plotY || f) && (0 <= s.plotX && s.plotX <= g.len ? f ? (s.plotY = g.translate(s.x, 0, 1, 0, 1), s.plotX = i(s.y) ? m.translate(s.y, 0, 0, 0, 1) : 0) : s.plotY = (g.opposite ? 0 : e.yAxis.len) + g.offset : s.shapeArgs = {}), (t = a[o - 1]) && t.plotX === s.plotX) {
                                    "undefined" === typeof t.stackIndex && (t.stackIndex = 0);
                                    var n = t.stackIndex + 1
                                }
                                s.stackIndex = n
                            })), this.onSeries = l
                        }
                    }
                })), e(t, "parts/FlagsSeries.js", [t["parts/Globals.js"], t["parts/SVGElement.js"], t["parts/SVGRenderer.js"], t["parts/Utilities.js"], t["mixins/on-series.js"]], (function(t, e, i, s, o) {
                    function n(t) {
                        x[t + "pin"] = function(e, i, s, o, n) {
                            var r = n && n.anchorX;
                            n = n && n.anchorY, "circle" === t && o > s && (e -= Math.round((o - s) / 2), s = o);
                            var a = x[t](e, i, s, o);
                            if (r && n) {
                                var h = r;
                                "circle" === t ? h = e + s / 2 : (e = a[0], s = a[1], "M" === e[0] && "L" === s[0] && (h = (e[1] + s[1]) / 2)), a.push(["M", h, i > n ? i : i + o], ["L", r, n]), a = a.concat(x.circle(r - 1, n - 1, 2, 2))
                            }
                            return a
                        }
                    }
                    var r = s.addEvent,
                        a = s.defined,
                        h = s.isNumber,
                        l = s.merge,
                        c = s.objectEach,
                        d = s.seriesType,
                        p = s.wrap;
                    s = t.noop;
                    var u = t.Renderer,
                        f = t.Series,
                        g = t.TrackerMixin,
                        m = t.VMLRenderer,
                        x = i.prototype.symbols;
                    d("flags", "column", {
                        pointRange: 0,
                        allowOverlapX: !1,
                        shape: "flag",
                        stackDistance: 12,
                        textAlign: "center",
                        tooltip: {
                            pointFormat: "{point.text}<br/>"
                        },
                        threshold: null,
                        y: -30,
                        fillColor: "#ffffff",
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineColor: "#000000",
                                fillColor: "#ccd6eb"
                            }
                        },
                        style: {
                            fontSize: "11px",
                            fontWeight: "bold"
                        }
                    }, {
                        sorted: !1,
                        noSharedTooltip: !0,
                        allowDG: !1,
                        takeOrdinalPosition: !1,
                        trackerGroups: ["markerGroup"],
                        forceCrop: !0,
                        init: f.prototype.init,
                        pointAttribs: function(t, e) {
                            var i = this.options,
                                s = t && t.color || this.color,
                                o = i.lineColor,
                                n = t && t.lineWidth;
                            return t = t && t.fillColor || i.fillColor, e && (t = i.states[e].fillColor, o = i.states[e].lineColor, n = i.states[e].lineWidth), {
                                fill: t || s,
                                stroke: o || s,
                                "stroke-width": n || i.lineWidth || 0
                            }
                        },
                        translate: o.translate,
                        getPlotBox: o.getPlotBox,
                        drawPoints: function() {
                            var i, s = this.points,
                                o = this.chart,
                                n = o.renderer,
                                r = o.inverted,
                                h = this.options,
                                d = h.y,
                                u = this.yAxis,
                                f = {},
                                g = [];
                            for (i = s.length; i--;) {
                                var m = s[i],
                                    x = (r ? m.plotY : m.plotX) > this.xAxis.len,
                                    v = m.plotX,
                                    y = m.stackIndex,
                                    b = m.options.shape || h.shape,
                                    k = m.plotY;
                                "undefined" !== typeof k && (k = m.plotY + d - ("undefined" !== typeof y && y * h.stackDistance)), m.anchorX = y ? void 0 : m.plotX;
                                var M = y ? void 0 : m.plotY,
                                    w = "flag" !== b;
                                y = m.graphic, "undefined" !== typeof k && 0 <= v && !x ? (y || (y = m.graphic = n.label("", null, null, b, null, null, h.useHTML), o.styledMode || y.attr(this.pointAttribs(m)).css(l(h.style, m.style)), y.attr({
                                    align: w ? "center" : "left",
                                    width: h.width,
                                    height: h.height,
                                    "text-align": h.textAlign
                                }).addClass("highcharts-point").add(this.markerGroup), m.graphic.div && (m.graphic.div.point = m), o.styledMode || y.shadow(h.shadow), y.isNew = !0), 0 < v && (v -= y.strokeWidth() % 2), b = {
                                    y: k,
                                    anchorY: M
                                }, h.allowOverlapX && (b.x = v, b.anchorX = m.anchorX), y.attr({
                                    text: m.options.title || h.title || "A"
                                })[y.isNew ? "attr" : "animate"](b), h.allowOverlapX || (f[m.plotX] ? f[m.plotX].size = Math.max(f[m.plotX].size, y.width) : f[m.plotX] = {
                                    align: w ? .5 : 0,
                                    size: y.width,
                                    target: v,
                                    anchorX: v
                                }), m.tooltipPos = [v, k + u.pos - o.plotTop]) : y && (m.graphic = y.destroy())
                            }
                            h.allowOverlapX || (c(f, (function(t) {
                                t.plotX = t.anchorX, g.push(t)
                            })), t.distribute(g, r ? u.len : this.xAxis.len, 100), s.forEach((function(t) {
                                var e = t.graphic && f[t.plotX];
                                e && (t.graphic[t.graphic.isNew ? "attr" : "animate"]({
                                    x: e.pos + e.align * e.size,
                                    anchorX: t.anchorX
                                }), a(e.pos) ? t.graphic.isNew = !1 : (t.graphic.attr({
                                    x: -9999,
                                    anchorX: -9999
                                }), t.graphic.isNew = !0))
                            }))), h.useHTML && p(this.markerGroup, "on", (function(t) {
                                return e.prototype.on.apply(t.apply(this, [].slice.call(arguments, 1)), [].slice.call(arguments, 1))
                            }))
                        },
                        drawTracker: function() {
                            var t = this.points;
                            g.drawTrackerPoint.apply(this), t.forEach((function(e) {
                                var i = e.graphic;
                                i && r(i.element, "mouseover", (function() {
                                    0 < e.stackIndex && !e.raised && (e._y = i.y, i.attr({
                                        y: e._y - 8
                                    }), e.raised = !0), t.forEach((function(t) {
                                        t !== e && t.raised && t.graphic && (t.graphic.attr({
                                            y: t._y
                                        }), t.raised = !1)
                                    }))
                                }))
                            }))
                        },
                        animate: function(t) {
                            t && this.setClip()
                        },
                        setClip: function() {
                            f.prototype.setClip.apply(this, arguments), !1 !== this.options.clip && this.sharedClipKey && this.markerGroup.clip(this.chart[this.sharedClipKey])
                        },
                        buildKDTree: s,
                        invertGroups: s
                    }, {
                        isValid: function() {
                            return h(this.y) || "undefined" === typeof this.y
                        }
                    }), x.flag = function(t, e, i, s, o) {
                        var n = o && o.anchorX || t;
                        o = o && o.anchorY || e;
                        var r = x.circle(n - 1, o - 1, 2, 2);
                        return r.push(["M", n, o], ["L", t, e + s], ["L", t, e], ["L", t + i, e], ["L", t + i, e + s], ["L", t, e + s], ["Z"]), r
                    }, n("circle"), n("square"), u === m && ["circlepin", "flag", "squarepin"].forEach((function(t) {
                        m.prototype.symbols[t] = x[t]
                    }))
                })), e(t, "parts/RangeSelector.js", [t["parts/Axis.js"], t["parts/Chart.js"], t["parts/Globals.js"], t["parts/Options.js"], t["parts/Utilities.js"]], (function(t, e, i, s, o) {
                    function n(t) {
                        this.init(t)
                    }
                    var r = s.defaultOptions,
                        a = o.addEvent,
                        h = o.createElement,
                        l = o.css,
                        c = o.defined,
                        d = o.destroyObjectProperties,
                        p = o.discardElement,
                        u = o.extend,
                        f = o.fireEvent,
                        g = o.isNumber,
                        m = o.merge,
                        x = o.objectEach,
                        v = o.pick,
                        y = o.pInt,
                        b = o.splat;
                    u(r, {
                        rangeSelector: {
                            verticalAlign: "top",
                            buttonTheme: {
                                width: 28,
                                height: 18,
                                padding: 2,
                                zIndex: 7
                            },
                            floating: !1,
                            x: 0,
                            y: 0,
                            height: void 0,
                            inputPosition: {
                                align: "right",
                                x: 0,
                                y: 0
                            },
                            buttonPosition: {
                                align: "left",
                                x: 0,
                                y: 0
                            },
                            labelStyle: {
                                color: "#666666"
                            }
                        }
                    }), r.lang = m(r.lang, {
                        rangeSelectorZoom: "Zoom",
                        rangeSelectorFrom: "From",
                        rangeSelectorTo: "To"
                    }), n.prototype = {
                        clickButton: function(e, i) {
                            var s = this.chart,
                                o = this.buttonOptions[e],
                                n = s.xAxis[0],
                                r = s.scroller && s.scroller.getUnionExtremes() || n || {},
                                h = r.dataMin,
                                l = r.dataMax,
                                c = n && Math.round(Math.min(n.max, v(l, n.max))),
                                d = o.type;
                            r = o._range;
                            var p, u = o.dataGrouping;
                            if (null !== h && null !== l) {
                                if (s.fixedRange = r, u && (this.forcedDataGrouping = !0, t.prototype.setDataGrouping.call(n || {
                                        chart: this.chart
                                    }, u, !1), this.frozenStates = o.preserveDataGrouping), "month" === d || "year" === d)
                                    if (n) {
                                        d = {
                                            range: o,
                                            max: c,
                                            chart: s,
                                            dataMin: h,
                                            dataMax: l
                                        };
                                        var f = n.minFromRange.call(d);
                                        g(d.newMax) && (c = d.newMax)
                                    } else r = o;
                                else if (r) f = Math.max(c - r, h), c = Math.min(f + r, l);
                                else if ("ytd" === d) {
                                    if (!n) return void(this.deferredYTDClick = e);
                                    "undefined" === typeof l && (h = Number.MAX_VALUE, l = Number.MIN_VALUE, s.series.forEach((function(t) {
                                        t = t.xData, h = Math.min(t[0], h), l = Math.max(t[t.length - 1], l)
                                    })), i = !1), c = this.getYTDExtremes(l, h, s.time.useUTC), f = p = c.min, c = c.max
                                } else "all" === d && n && (f = h, c = l);
                                if (f += o._offsetMin, c += o._offsetMax, this.setSelected(e), n) n.setExtremes(f, c, v(i, 1), null, {
                                    trigger: "rangeSelectorButton",
                                    rangeSelectorButton: o
                                });
                                else {
                                    var m = b(s.options.xAxis)[0],
                                        x = m.range;
                                    m.range = r;
                                    var y = m.min;
                                    m.min = p, a(s, "load", (function() {
                                        m.range = x, m.min = y
                                    }))
                                }
                            }
                        },
                        setSelected: function(t) {
                            this.selected = this.options.selected = t
                        },
                        defaultButtons: [{
                            type: "month",
                            count: 1,
                            text: "1m"
                        }, {
                            type: "month",
                            count: 3,
                            text: "3m"
                        }, {
                            type: "month",
                            count: 6,
                            text: "6m"
                        }, {
                            type: "ytd",
                            text: "YTD"
                        }, {
                            type: "year",
                            count: 1,
                            text: "1y"
                        }, {
                            type: "all",
                            text: "All"
                        }],
                        init: function(t) {
                            var e = this,
                                i = t.options.rangeSelector,
                                s = i.buttons || [].concat(e.defaultButtons),
                                o = i.selected,
                                n = function() {
                                    var t = e.minInput,
                                        i = e.maxInput;
                                    t && t.blur && f(t, "blur"), i && i.blur && f(i, "blur")
                                };
                            e.chart = t, e.options = i, e.buttons = [], e.buttonOptions = s, this.unMouseDown = a(t.container, "mousedown", n), this.unResize = a(t, "resize", n), s.forEach(e.computeButtonRange), "undefined" !== typeof o && s[o] && this.clickButton(o, !1), a(t, "load", (function() {
                                t.xAxis && t.xAxis[0] && a(t.xAxis[0], "setExtremes", (function(i) {
                                    this.max - this.min !== t.fixedRange && "rangeSelectorButton" !== i.trigger && "updatedData" !== i.trigger && e.forcedDataGrouping && !e.frozenStates && this.setDataGrouping(!1, !1)
                                }))
                            }))
                        },
                        updateButtonStates: function() {
                            var t = this,
                                e = this.chart,
                                i = e.xAxis[0],
                                s = Math.round(i.max - i.min),
                                o = !i.hasVisibleSeries,
                                n = e.scroller && e.scroller.getUnionExtremes() || i,
                                r = n.dataMin,
                                a = n.dataMax;
                            e = t.getYTDExtremes(a, r, e.time.useUTC);
                            var h = e.min,
                                l = e.max,
                                c = t.selected,
                                d = g(c),
                                p = t.options.allButtonsEnabled,
                                u = t.buttons;
                            t.buttonOptions.forEach((function(e, n) {
                                var f = e._range,
                                    g = e.type,
                                    m = e.count || 1,
                                    x = u[n],
                                    v = 0,
                                    y = e._offsetMax - e._offsetMin;
                                e = n === c;
                                var b = f > a - r,
                                    k = f < i.minRange,
                                    M = !1,
                                    w = !1;
                                f = f === s, ("month" === g || "year" === g) && s + 36e5 >= 864e5 * {
                                    month: 28,
                                    year: 365
                                }[g] * m - y && s - 36e5 <= 864e5 * {
                                    month: 31,
                                    year: 366
                                }[g] * m + y ? f = !0 : "ytd" === g ? (f = l - h + y === s, M = !e) : "all" === g && (f = i.max - i.min >= a - r, w = !e && d && f), g = !p && (b || k || w || o), m = e && f || f && !d && !M || e && t.frozenStates, g ? v = 3 : m && (d = !0, v = 2), x.state !== v && (x.setState(v), 0 === v && c === n && t.setSelected(null))
                            }))
                        },
                        computeButtonRange: function(t) {
                            var e = t.type,
                                i = t.count || 1,
                                s = {
                                    millisecond: 1,
                                    second: 1e3,
                                    minute: 6e4,
                                    hour: 36e5,
                                    day: 864e5,
                                    week: 6048e5
                                };
                            s[e] ? t._range = s[e] * i : "month" !== e && "year" !== e || (t._range = 864e5 * {
                                month: 30,
                                year: 365
                            }[e] * i), t._offsetMin = v(t.offsetMin, 0), t._offsetMax = v(t.offsetMax, 0), t._range += t._offsetMax - t._offsetMin
                        },
                        setInputValue: function(t, e) {
                            var i = this.chart.options.rangeSelector,
                                s = this.chart.time,
                                o = this[t + "Input"];
                            c(e) && (o.previousValue = o.HCTime, o.HCTime = e), o.value = s.dateFormat(i.inputEditDateFormat || "%Y-%m-%d", o.HCTime), this[t + "DateBox"].attr({
                                text: s.dateFormat(i.inputDateFormat || "%b %e, %Y", o.HCTime)
                            })
                        },
                        showInput: function(t) {
                            var e = this.inputGroup,
                                i = this[t + "DateBox"];
                            l(this[t + "Input"], {
                                left: e.translateX + i.x + "px",
                                top: e.translateY + "px",
                                width: i.width - 2 + "px",
                                height: i.height - 2 + "px",
                                border: "2px solid silver"
                            })
                        },
                        hideInput: function(t) {
                            l(this[t + "Input"], {
                                border: 0,
                                width: "1px",
                                height: "1px"
                            }), this.setInputValue(t)
                        },
                        drawInput: function(t) {
                            function e() {
                                var t = s.value,
                                    e = (p.inputDateParser || Date.parse)(t),
                                    i = a.xAxis[0],
                                    o = a.scroller && a.scroller.xAxis ? a.scroller.xAxis : i,
                                    r = o.dataMin;
                                o = o.dataMax, e !== s.previousValue && (s.previousValue = e, g(e) || (e = t.split("-"), e = Date.UTC(y(e[0]), y(e[1]) - 1, y(e[2]))), g(e) && (a.time.useUTC || (e += 6e4 * (new Date).getTimezoneOffset()), x ? e > n.maxInput.HCTime ? e = void 0 : e < r && (e = r) : e < n.minInput.HCTime ? e = void 0 : e > o && (e = o), "undefined" !== typeof e && i.setExtremes(x ? e : i.min, x ? i.max : e, void 0, void 0, {
                                    trigger: "rangeSelectorInput"
                                })))
                            }
                            var s, o, n = this,
                                a = n.chart,
                                c = a.renderer.style || {},
                                d = a.renderer,
                                p = a.options.rangeSelector,
                                f = n.div,
                                x = "min" === t,
                                v = this.inputGroup;
                            this[t + "Label"] = o = d.label(r.lang[x ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).addClass("highcharts-range-label").attr({
                                padding: 2
                            }).add(v), v.offset += o.width + 5, this[t + "DateBox"] = d = d.label("", v.offset).addClass("highcharts-range-input").attr({
                                padding: 2,
                                width: p.inputBoxWidth || 90,
                                height: p.inputBoxHeight || 17,
                                "text-align": "center"
                            }).on("click", (function() {
                                n.showInput(t), n[t + "Input"].focus()
                            })), a.styledMode || d.attr({
                                stroke: p.inputBoxBorderColor || "#cccccc",
                                "stroke-width": 1
                            }), d.add(v), v.offset += d.width + (x ? 10 : 0), this[t + "Input"] = s = h("input", {
                                name: t,
                                className: "highcharts-range-selector",
                                type: "text"
                            }, {
                                top: a.plotTop + "px"
                            }, f), a.styledMode || (o.css(m(c, p.labelStyle)), d.css(m({
                                color: "#333333"
                            }, c, p.inputStyle)), l(s, u({
                                position: "absolute",
                                border: 0,
                                width: "1px",
                                height: "1px",
                                padding: 0,
                                textAlign: "center",
                                fontSize: c.fontSize,
                                fontFamily: c.fontFamily,
                                top: "-9999em"
                            }, p.inputStyle))), s.onfocus = function() {
                                n.showInput(t)
                            }, s.onblur = function() {
                                s === i.doc.activeElement && e(), n.hideInput(t), s.blur()
                            }, s.onchange = e, s.onkeypress = function(t) {
                                13 === t.keyCode && e()
                            }
                        },
                        getPosition: function() {
                            var t = this.chart,
                                e = t.options.rangeSelector;
                            return t = "top" === e.verticalAlign ? t.plotTop - t.axisOffset[0] : 0, {
                                buttonTop: t + e.buttonPosition.y,
                                inputTop: t + e.inputPosition.y - 10
                            }
                        },
                        getYTDExtremes: function(t, e, i) {
                            var s = this.chart.time,
                                o = new s.Date(t),
                                n = s.get("FullYear", o);
                            return i = i ? s.Date.UTC(n, 0, 1) : +new s.Date(n, 0, 1), e = Math.max(e || 0, i), o = o.getTime(), {
                                max: Math.min(t || o, o),
                                min: e
                            }
                        },
                        render: function(t, e) {
                            var i = this,
                                s = i.chart,
                                o = s.renderer,
                                n = s.container,
                                a = s.options,
                                l = a.exporting && !1 !== a.exporting.enabled && a.navigation && a.navigation.buttonOptions,
                                c = r.lang,
                                d = i.div,
                                p = a.rangeSelector,
                                u = v(a.chart.style && a.chart.style.zIndex, 0) + 1;
                            a = p.floating;
                            var f = i.buttons;
                            d = i.inputGroup;
                            var g, m = p.buttonTheme,
                                x = p.buttonPosition,
                                y = p.inputPosition,
                                b = p.inputEnabled,
                                k = m && m.states,
                                M = s.plotLeft,
                                w = i.buttonGroup,
                                S = i.options.verticalAlign,
                                A = s.legend,
                                T = A && A.options,
                                P = x.y,
                                C = y.y,
                                O = s.hasLoaded,
                                E = O ? "animate" : "attr",
                                L = 0,
                                D = 0;
                            if (!1 !== p.enabled) {
                                i.rendered || (i.group = g = o.g("range-selector-group").attr({
                                    zIndex: 7
                                }).add(), i.buttonGroup = w = o.g("range-selector-buttons").add(g), i.zoomText = o.text(c.rangeSelectorZoom, 0, 15).add(w), s.styledMode || (i.zoomText.css(p.labelStyle), m["stroke-width"] = v(m["stroke-width"], 0)), i.buttonOptions.forEach((function(t, e) {
                                    f[e] = o.button(t.text, 0, 0, (function(s) {
                                        var o, n = t.events && t.events.click;
                                        n && (o = n.call(t, s)), !1 !== o && i.clickButton(e), i.isActive = !0
                                    }), m, k && k.hover, k && k.select, k && k.disabled).attr({
                                        "text-align": "center"
                                    }).add(w)
                                })), !1 !== b && (i.div = d = h("div", null, {
                                    position: "relative",
                                    height: 0,
                                    zIndex: u
                                }), n.parentNode.insertBefore(d, n), i.inputGroup = d = o.g("input-group").add(g), d.offset = 0, i.drawInput("min"), i.drawInput("max"))), i.zoomText[E]({
                                    x: v(M + x.x, M)
                                });
                                var B = v(M + x.x, M) + i.zoomText.getBBox().width + 5;
                                i.buttonOptions.forEach((function(t, e) {
                                    f[e][E]({
                                        x: B
                                    }), B += f[e].width + v(p.buttonSpacing, 5)
                                })), M = s.plotLeft - s.spacing[3], i.updateButtonStates(), l && this.titleCollision(s) && "top" === S && "right" === x.align && x.y + w.getBBox().height - 12 < (l.y || 0) + l.height && (L = -40), n = x.x - s.spacing[3], "right" === x.align ? n += L - M : "center" === x.align && (n -= M / 2), w.align({
                                    y: x.y,
                                    width: w.getBBox().width,
                                    align: x.align,
                                    x: n
                                }, !0, s.spacingBox), i.group.placed = O, i.buttonGroup.placed = O, !1 !== b && (L = l && this.titleCollision(s) && "top" === S && "right" === y.align && y.y - d.getBBox().height - 12 < (l.y || 0) + l.height + s.spacing[0] ? -40 : 0, "left" === y.align ? n = M : "right" === y.align && (n = -Math.max(s.axisOffset[1], -L)), d.align({
                                    y: y.y,
                                    width: d.getBBox().width,
                                    align: y.align,
                                    x: y.x + n - 2
                                }, !0, s.spacingBox), l = d.alignAttr.translateX + d.alignOptions.x - L + d.getBBox().x + 2, n = d.alignOptions.width, c = w.alignAttr.translateX + w.getBBox().x, M = w.getBBox().width + 20, (y.align === x.align || c + M > l && l + n > c && P < C + d.getBBox().height) && d.attr({
                                    translateX: d.alignAttr.translateX + (s.axisOffset[1] >= -L ? 0 : -L),
                                    translateY: d.alignAttr.translateY + w.getBBox().height + 10
                                }), i.setInputValue("min", t), i.setInputValue("max", e), i.inputGroup.placed = O), i.group.align({
                                    verticalAlign: S
                                }, !0, s.spacingBox), t = i.group.getBBox().height + 20, e = i.group.alignAttr.translateY, "bottom" === S && (A = T && "bottom" === T.verticalAlign && T.enabled && !T.floating ? A.legendHeight + v(T.margin, 10) : 0, t = t + A - 20, D = e - t - (a ? 0 : p.y) - (s.titleOffset ? s.titleOffset[2] : 0) - 10), "top" === S ? (a && (D = 0), s.titleOffset && s.titleOffset[0] && (D = s.titleOffset[0]), D += s.margin[0] - s.spacing[0] || 0) : "middle" === S && (C === P ? D = 0 > C ? e + void 0 : e : (C || P) && (D = 0 > C || 0 > P ? D - Math.min(C, P) : e - t + NaN)), i.group.translate(p.x, p.y + Math.floor(D)), !1 !== b && (i.minInput.style.marginTop = i.group.translateY + "px", i.maxInput.style.marginTop = i.group.translateY + "px"), i.rendered = !0
                            }
                        },
                        getHeight: function() {
                            var t = this.options,
                                e = this.group,
                                i = t.y,
                                s = t.buttonPosition.y,
                                o = t.inputPosition.y;
                            return t.height ? t.height : (t = e ? e.getBBox(!0).height + 13 + i : 0, e = Math.min(o, s), (0 > o && 0 > s || 0 < o && 0 < s) && (t += Math.abs(e)), t)
                        },
                        titleCollision: function(t) {
                            return !(t.options.title.text || t.options.subtitle.text)
                        },
                        update: function(t) {
                            var e = this.chart;
                            m(!0, e.options.rangeSelector, t), this.destroy(), this.init(e), e.rangeSelector.render()
                        },
                        destroy: function() {
                            var t = this,
                                e = t.minInput,
                                i = t.maxInput;
                            t.unMouseDown(), t.unResize(), d(t.buttons), e && (e.onfocus = e.onblur = e.onchange = null), i && (i.onfocus = i.onblur = i.onchange = null), x(t, (function(e, i) {
                                e && "chart" !== i && (e.destroy ? e.destroy() : e.nodeType && p(this[i])), e !== n.prototype[i] && (t[i] = null)
                            }), this)
                        }
                    }, t.prototype.minFromRange = function() {
                        var t = this.range,
                            e = t.type,
                            i = this.max,
                            s = this.chart.time,
                            o = function(t, i) {
                                var o = "year" === e ? "FullYear" : "Month",
                                    n = new s.Date(t),
                                    r = s.get(o, n);
                                return s.set(o, n, r + i), r === s.get(o, n) && s.set("Date", n, 0), n.getTime() - t
                            };
                        if (g(t)) var n = i - t,
                            r = t;
                        else n = i + o(i, -t.count), this.chart && (this.chart.fixedRange = i - n);
                        var a = v(this.dataMin, Number.MIN_VALUE);
                        return g(n) || (n = a), n <= a && (n = a, "undefined" === typeof r && (r = o(n, t.count)), this.newMax = Math.min(n + r, this.dataMax)), g(i) || (n = void 0), n
                    }, i.RangeSelector || (a(e, "afterGetContainer", (function() {
                        this.options.rangeSelector.enabled && (this.rangeSelector = new n(this))
                    })), a(e, "beforeRender", (function() {
                        var t = this.axes,
                            e = this.rangeSelector;
                        e && (g(e.deferredYTDClick) && (e.clickButton(e.deferredYTDClick), delete e.deferredYTDClick), t.forEach((function(t) {
                            t.updateNames(), t.setScale()
                        })), this.getAxisMargins(), e.render(), t = e.options.verticalAlign, e.options.floating || ("bottom" === t ? this.extraBottomMargin = !0 : "middle" !== t && (this.extraTopMargin = !0)))
                    })), a(e, "update", (function(t) {
                        var e = t.options.rangeSelector;
                        t = this.rangeSelector;
                        var i = this.extraBottomMargin,
                            s = this.extraTopMargin;
                        e && e.enabled && !c(t) && (this.options.rangeSelector.enabled = !0, this.rangeSelector = new n(this)), this.extraTopMargin = this.extraBottomMargin = !1, t && (t.render(), e = e && e.verticalAlign || t.options && t.options.verticalAlign, t.options.floating || ("bottom" === e ? this.extraBottomMargin = !0 : "middle" !== e && (this.extraTopMargin = !0)), this.extraBottomMargin !== i || this.extraTopMargin !== s) && (this.isDirtyBox = !0)
                    })), a(e, "render", (function() {
                        var t = this.rangeSelector;
                        t && !t.options.floating && (t.render(), t = t.options.verticalAlign, "bottom" === t ? this.extraBottomMargin = !0 : "middle" !== t && (this.extraTopMargin = !0))
                    })), a(e, "getMargins", (function() {
                        var t = this.rangeSelector;
                        t && (t = t.getHeight(), this.extraTopMargin && (this.plotTop += t), this.extraBottomMargin && (this.marginBottom += t))
                    })), e.prototype.callbacks.push((function(t) {
                        function e() {
                            i = t.xAxis[0].getExtremes(), s = t.legend, n = null === r || void 0 === r ? void 0 : r.options.verticalAlign, g(i.min) && r.render(i.min, i.max), r && s.display && "top" === n && n === s.options.verticalAlign && (o = m(t.spacingBox), o.y = "vertical" === s.options.layout ? t.plotTop : o.y + r.getHeight(), s.group.placed = !1, s.align(o))
                        }
                        var i, s, o, n, r = t.rangeSelector;
                        if (r) {
                            var h = a(t.xAxis[0], "afterSetExtremes", (function(t) {
                                    r.render(t.min, t.max)
                                })),
                                l = a(t, "redraw", e);
                            e()
                        }
                        a(t, "destroy", (function() {
                            r && (l(), h())
                        }))
                    })), i.RangeSelector = n)
                })), e(t, "parts/StockChart.js", [t["parts/Axis.js"], t["parts/Chart.js"], t["parts/Globals.js"], t["parts/Point.js"], t["parts/SVGRenderer.js"], t["parts/Utilities.js"]], (function(t, e, i, s, o, n) {
                    var r = n.addEvent,
                        a = n.arrayMax,
                        h = n.arrayMin,
                        l = n.clamp,
                        c = n.defined,
                        d = n.extend,
                        p = n.find,
                        u = n.format,
                        f = n.getOptions,
                        g = n.isNumber,
                        m = n.isString,
                        x = n.merge,
                        v = n.pick,
                        y = n.splat;
                    n = i.Series;
                    var b = n.prototype,
                        k = b.init,
                        M = b.processData,
                        w = s.prototype.tooltipFormatter;
                    i.StockChart = i.stockChart = function(t, i, s) {
                        var o, n = m(t) || t.nodeName,
                            r = arguments[n ? 1 : 0],
                            a = r,
                            h = r.series,
                            l = f(),
                            c = v(r.navigator && r.navigator.enabled, l.navigator.enabled, !0);
                        return r.xAxis = y(r.xAxis || {}).map((function(t, e) {
                            return x({
                                minPadding: 0,
                                maxPadding: 0,
                                overscroll: 0,
                                ordinal: !0,
                                title: {
                                    text: null
                                },
                                labels: {
                                    overflow: "justify"
                                },
                                showLastLabel: !0
                            }, l.xAxis, l.xAxis && l.xAxis[e], t, {
                                type: "datetime",
                                categories: null
                            }, c ? {
                                startOnTick: !1,
                                endOnTick: !1
                            } : null)
                        })), r.yAxis = y(r.yAxis || {}).map((function(t, e) {
                            return o = v(t.opposite, !0), x({
                                labels: {
                                    y: -2
                                },
                                opposite: o,
                                showLastLabel: !(!t.categories && "category" !== t.type),
                                title: {
                                    text: null
                                }
                            }, l.yAxis, l.yAxis && l.yAxis[e], t)
                        })), r.series = null, r = x({
                            chart: {
                                panning: {
                                    enabled: !0,
                                    type: "x"
                                },
                                pinchType: "x"
                            },
                            navigator: {
                                enabled: c
                            },
                            scrollbar: {
                                enabled: v(l.scrollbar.enabled, !0)
                            },
                            rangeSelector: {
                                enabled: v(l.rangeSelector.enabled, !0)
                            },
                            title: {
                                text: null
                            },
                            tooltip: {
                                split: v(l.tooltip.split, !0),
                                crosshairs: !0
                            },
                            legend: {
                                enabled: !1
                            }
                        }, r, {
                            isStock: !0
                        }), r.series = a.series = h, n ? new e(t, r, s) : new e(r, i)
                    }, r(n, "setOptions", (function(t) {
                        var e;
                        this.chart.options.isStock && (this.is("column") || this.is("columnrange") ? e = {
                            borderWidth: 0,
                            shadow: !1
                        } : this.is("scatter") || this.is("sma") || (e = {
                            marker: {
                                enabled: !1,
                                radius: 2
                            }
                        }), e && (t.plotOptions[this.type] = x(t.plotOptions[this.type], e)))
                    })), r(t, "autoLabelAlign", (function(t) {
                        var e = this.chart,
                            i = this.options;
                        e = e._labelPanes = e._labelPanes || {};
                        var s = this.options.labels;
                        this.chart.options.isStock && "yAxis" === this.coll && (i = i.top + "," + i.height, !e[i] && s.enabled && (15 === s.x && (s.x = 0), "undefined" === typeof s.align && (s.align = "right"), e[i] = this, t.align = "right", t.preventDefault()))
                    })), r(t, "destroy", (function() {
                        var t = this.chart,
                            e = this.options && this.options.top + "," + this.options.height;
                        e && t._labelPanes && t._labelPanes[e] === this && delete t._labelPanes[e]
                    })), r(t, "getPlotLinePath", (function(t) {
                        function e(t) {
                            var e = "xAxis" === t ? "yAxis" : "xAxis";
                            return t = r.options[e], g(t) ? [h[e][t]] : m(t) ? [h.get(t)] : a.map((function(t) {
                                return t[e]
                            }))
                        }
                        var i, s, o, n, r = this,
                            a = this.isLinked && !this.series ? this.linkedParent.series : this.series,
                            h = r.chart,
                            d = h.renderer,
                            u = r.left,
                            f = r.top,
                            x = [],
                            y = [],
                            b = t.translatedValue,
                            k = t.value,
                            M = t.force;
                        if (h.options.isStock && !1 !== t.acrossPanes && "xAxis" === r.coll || "yAxis" === r.coll) {
                            t.preventDefault(), y = e(r.coll);
                            var w = r.isXAxis ? h.yAxis : h.xAxis;
                            w.forEach((function(t) {
                                if (!c(t.options.id) || -1 === t.options.id.indexOf("navigator")) {
                                    var e = t.isXAxis ? "yAxis" : "xAxis";
                                    e = c(t.options[e]) ? h[e][t.options[e]] : h[e][0], r === e && y.push(t)
                                }
                            }));
                            var S = y.length ? [] : [r.isXAxis ? h.yAxis[0] : h.xAxis[0]];
                            y.forEach((function(t) {
                                -1 !== S.indexOf(t) || p(S, (function(e) {
                                    return e.pos === t.pos && e.len === t.len
                                })) || S.push(t)
                            }));
                            var A = v(b, r.translate(k, null, null, t.old));
                            g(A) && (r.horiz ? S.forEach((function(t) {
                                var e;
                                s = t.pos, n = s + t.len, i = o = Math.round(A + r.transB), "pass" !== M && (i < u || i > u + r.width) && (M ? i = o = l(i, u, u + r.width) : e = !0), e || x.push(["M", i, s], ["L", o, n])
                            })) : S.forEach((function(t) {
                                var e;
                                i = t.pos, o = i + t.len, s = n = Math.round(f + r.height - A), "pass" !== M && (s < f || s > f + r.height) && (M ? s = n = l(s, f, f + r.height) : e = !0), e || x.push(["M", i, s], ["L", o, n])
                            }))), t.path = 0 < x.length ? d.crispPolyLine(x, t.lineWidth || 1) : null
                        }
                    })), o.prototype.crispPolyLine = function(t, e) {
                        for (var i = 0; i < t.length; i += 2) {
                            var s = t[i],
                                o = t[i + 1];
                            s[1] === o[1] && (s[1] = o[1] = Math.round(s[1]) - e % 2 / 2), s[2] === o[2] && (s[2] = o[2] = Math.round(s[2]) + e % 2 / 2)
                        }
                        return t
                    }, r(t, "afterHideCrosshair", (function() {
                        this.crossLabel && (this.crossLabel = this.crossLabel.hide())
                    })), r(t, "afterDrawCrosshair", (function(t) {
                        var e, i;
                        if (c(this.crosshair.label) && this.crosshair.label.enabled && this.cross) {
                            var s = this.chart,
                                o = this.logarithmic,
                                n = this.options.crosshair.label,
                                r = this.horiz,
                                a = this.opposite,
                                h = this.left,
                                l = this.top,
                                p = this.crossLabel,
                                f = n.format,
                                m = "",
                                x = "inside" === this.options.tickPosition,
                                y = !1 !== this.crosshair.snap,
                                b = 0,
                                k = t.e || this.cross && this.cross.e,
                                M = t.point;
                            t = this.min;
                            var w = this.max;
                            o && (t = o.lin2log(t), w = o.lin2log(w)), o = r ? "center" : a ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center", p || (p = this.crossLabel = s.renderer.label(null, null, null, n.shape || "callout").addClass("highcharts-crosshair-label" + (this.series[0] && " highcharts-color-" + this.series[0].colorIndex)).attr({
                                align: n.align || o,
                                padding: v(n.padding, 8),
                                r: v(n.borderRadius, 3),
                                zIndex: 2
                            }).add(this.labelGroup), s.styledMode || p.attr({
                                fill: n.backgroundColor || this.series[0] && this.series[0].color || "#666666",
                                stroke: n.borderColor || "",
                                "stroke-width": n.borderWidth || 0
                            }).css(d({
                                color: "#ffffff",
                                fontWeight: "normal",
                                fontSize: "11px",
                                textAlign: "center"
                            }, n.style))), r ? (o = y ? M.plotX + h : k.chartX, l += a ? 0 : this.height) : (o = a ? this.width + h : 0, l = y ? M.plotY + l : k.chartY), f || n.formatter || (this.dateTime && (m = "%b %d, %Y"), f = "{value" + (m ? ":" + m : "") + "}"), m = y ? M[this.isXAxis ? "x" : "y"] : this.toValue(r ? k.chartX : k.chartY), p.attr({
                                text: f ? u(f, {
                                    value: m
                                }, s) : n.formatter.call(this, m),
                                x: o,
                                y: l,
                                visibility: m < t || m > w ? "hidden" : "visible"
                            }), n = p.getBBox(), g(p.y) && (r ? (x && !a || !x && a) && (l = p.y - n.height) : l = p.y - n.height / 2), r ? (e = h - n.x, i = h + this.width - n.x) : (e = "left" === this.labelAlign ? h : 0, i = "right" === this.labelAlign ? h + this.width : s.chartWidth), p.translateX < e && (b = e - p.translateX), p.translateX + n.width >= i && (b = -(p.translateX + n.width - i)), p.attr({
                                x: o + b,
                                y: l,
                                anchorX: r ? o : this.opposite ? 0 : s.chartWidth,
                                anchorY: r ? this.opposite ? s.chartHeight : 0 : l + n.height / 2
                            })
                        }
                    })), b.init = function() {
                        k.apply(this, arguments), this.setCompare(this.options.compare)
                    }, b.setCompare = function(t) {
                        this.modifyValue = "value" === t || "percent" === t ? function(e, i) {
                            var s = this.compareValue;
                            return "undefined" !== typeof e && "undefined" !== typeof s ? (e = "value" === t ? e - s : e / s * 100 - (100 === this.options.compareBase ? 0 : 100), i && (i.change = e), e) : 0
                        } : null, this.userOptions.compare = t, this.chart.hasRendered && (this.isDirty = !0)
                    }, b.processData = function(t) {
                        var e, i = -1,
                            s = !0 === this.options.compareStart ? 0 : 1;
                        if (M.apply(this, arguments), this.xAxis && this.processedYData) {
                            var o = this.processedXData,
                                n = this.processedYData,
                                r = n.length;
                            for (this.pointArrayMap && (i = this.pointArrayMap.indexOf(this.options.pointValKey || this.pointValKey || "y")), e = 0; e < r - s; e++) {
                                var a = n[e] && -1 < i ? n[e][i] : n[e];
                                if (g(a) && o[e + s] >= this.xAxis.min && 0 !== a) {
                                    this.compareValue = a;
                                    break
                                }
                            }
                        }
                    }, r(n, "afterGetExtremes", (function(t) {
                        if (t = t.dataExtremes, this.modifyValue && t) {
                            var e = [this.modifyValue(t.dataMin), this.modifyValue(t.dataMax)];
                            t.dataMin = h(e), t.dataMax = a(e)
                        }
                    })), t.prototype.setCompare = function(t, e) {
                        this.isXAxis || (this.series.forEach((function(e) {
                            e.setCompare(t)
                        })), v(e, !0) && this.chart.redraw())
                    }, s.prototype.tooltipFormatter = function(t) {
                        var e = this.series.chart.numberFormatter;
                        return t = t.replace("{point.change}", (0 < this.change ? "+" : "") + e(this.change, v(this.series.tooltipOptions.changeDecimals, 2))), w.apply(this, [t])
                    }, r(n, "render", (function() {
                        var t = this.chart;
                        if (!(t.is3d && t.is3d() || t.polar) && this.xAxis && !this.xAxis.isRadial) {
                            var e = this.yAxis.len;
                            if (this.xAxis.axisLine) {
                                var i = t.plotTop + t.plotHeight - this.yAxis.pos - this.yAxis.len,
                                    s = Math.floor(this.xAxis.axisLine.strokeWidth() / 2);
                                0 <= i && (e -= Math.max(s - i, 0))
                            }!this.clipBox && this.animate ? (this.clipBox = x(t.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = e) : t[this.sharedClipKey] && (t[this.sharedClipKey].animate({
                                width: this.xAxis.len,
                                height: e
                            }), t[this.sharedClipKey + "m"] && t[this.sharedClipKey + "m"].animate({
                                width: this.xAxis.len
                            }))
                        }
                    })), r(e, "update", (function(t) {
                        t = t.options, "scrollbar" in t && this.navigator && (x(!0, this.options.scrollbar, t.scrollbar), this.navigator.update({}, !1), delete t.scrollbar)
                    }))
                })), e(t, "masters/modules/stock.src.js", [], (function() {}))
            }))
        },
        4452: function(t, e, i) {
            ! function(e, s) {
                t.exports = s(i("ea7f"))
            }("undefined" != typeof self && self, (function(t) {
                return function(t) {
                    function e(s) {
                        if (i[s]) return i[s].exports;
                        var o = i[s] = {
                            i: s,
                            l: !1,
                            exports: {}
                        };
                        return t[s].call(o.exports, o, o.exports, e), o.l = !0, o.exports
                    }
                    var i = {};
                    return e.m = t, e.c = i, e.d = function(t, i, s) {
                        e.o(t, i) || Object.defineProperty(t, i, {
                            configurable: !1,
                            enumerable: !0,
                            get: s
                        })
                    }, e.n = function(t) {
                        var i = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return e.d(i, "a", i), i
                    }, e.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, e.p = "", e(e.s = 1)
                }([function(e, i) {
                    e.exports = t
                }, function(t, e, i) {
                    "use strict";

                    function s(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t.component(e.tagName || "highcharts", Object(o.a)(e.highcharts || r.a))
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = s, i.d(e, "Chart", (function() {
                        return a
                    }));
                    var o = i(2),
                        n = i(0),
                        r = i.n(n),
                        a = Object(o.a)(r.a)
                }, function(t, e, i) {
                    "use strict";

                    function s(t) {
                        return r(t) || n(t) || o()
                    }

                    function o() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }

                    function n(t) {
                        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                    }

                    function r(t) {
                        if (Array.isArray(t)) {
                            for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                            return i
                        }
                    }
                    var a = i(3),
                        h = function(t) {
                            return {
                                template: '<div ref="chart"></div>',
                                render: function(t) {
                                    return t("div", {
                                        ref: "chart"
                                    })
                                },
                                props: {
                                    constructorType: {
                                        type: String,
                                        default: "chart"
                                    },
                                    options: {
                                        type: Object,
                                        required: !0
                                    },
                                    callback: Function,
                                    updateArgs: {
                                        type: Array,
                                        default: function() {
                                            return [!0, !0]
                                        }
                                    },
                                    highcharts: {
                                        type: Object
                                    },
                                    deepCopyOnUpdate: {
                                        type: Boolean,
                                        default: !0
                                    }
                                },
                                watch: {
                                    options: {
                                        handler: function(t) {
                                            var e;
                                            (e = this.chart).update.apply(e, [Object(a.a)(t, this.deepCopyOnUpdate)].concat(s(this.updateArgs)))
                                        },
                                        deep: !0
                                    }
                                },
                                mounted: function() {
                                    var e = this.highcharts || t;
                                    this.options && e[this.constructorType] ? this.chart = e[this.constructorType](this.$refs.chart, Object(a.a)(this.options, !0), this.callback ? this.callback : null) : this.options ? console.warn("'".concat(this.constructorType, "' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.")) : console.warn('The "options" parameter was not passed.')
                                },
                                beforeDestroy: function() {
                                    this.chart && this.chart.destroy()
                                }
                            }
                        };
                    e.a = h
                }, function(t, e, i) {
                    "use strict";

                    function s(t, e, i) {
                        function o(o, r) {
                            !n.a.isObject(o, !i) || n.a.isClass(o) || n.a.isDOMElement(o) ? t[r] = e[r] : t[r] = s(t[r] || n.a.isArray(o) ? [] : {}, o, i)
                        }
                        return n.a.isArray(e) ? e.forEach(o) : n.a.objectEach(e, o), t
                    }
                    i.d(e, "a", (function() {
                        return r
                    }));
                    var o = i(0),
                        n = i.n(o),
                        r = function(t, e) {
                            return s({}, t, e)
                        }
                }])
            }))
        },
        a4e2: function(t, e, i) {
            "use strict";
            i.d(e, "f", (function() {
                return u
            })), i.d(e, "b", (function() {
                return f
            })), i.d(e, "a", (function() {
                return g
            })), i.d(e, "e", (function() {
                return x
            })), i.d(e, "c", (function() {
                return y
            })), i.d(e, "d", (function() {
                return k
            })), i.d(e, "g", (function() {
                return w
            }));
            i("99af"), i("4de4"), i("7db0"), i("caad"), i("d81d"), i("13d5"), i("fb6a"), i("4fad"), i("c1f9"), i("d3b7"), i("07ac"), i("ac1f"), i("2532"), i("3ca3"), i("1276"), i("ddb0");
            var s = i("b85c"),
                o = (i("96cf"), i("1da1")),
                n = i("3835"),
                r = i("5530"),
                a = i("ade3"),
                h = i("2b0e"),
                l = i("5245"),
                c = i("901e"),
                d = i.n(c),
                p = function() {
                    var t;
                    return t = {
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
                    }, Object(a["a"])(t, "tbtc", []), Object(a["a"])(t, "dusd", []), t
                },
                u = h["a"].observable({
                    volumes: Object(r["a"])({}, Object.fromEntries(Object.entries(p()).map((function(t) {
                        var e = Object(n["a"])(t, 2),
                            i = e[0];
                        e[1];
                        return [i, [-1, -1]]
                    })))),
                    volumeData: {
                        5: Object(r["a"])({}, p()),
                        30: Object(r["a"])({}, p()),
                        1440: Object(r["a"])({}, p())
                    },
                    allVolume: Object(r["a"])({}, p())
                });

            function f(t, e) {
                var i = e.find((function(e) {
                    return Date.parse(e[0]) / 1e3 - t > 0
                }));
                return void 0 === i ? e[e.length - 1][1] : i.price
            }

            function g(t) {
                return m.apply(this, arguments)
            }

            function m() {
                return m = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                    var i, o, r, a, h, l, c, d, p, g, m, x = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return i = x.length > 1 && void 0 !== x[1] && x[1], o = x.length > 2 && void 0 !== x[2] ? x[2] : 5, Array.isArray(e) || (e = [e]), e = e.map((function(t) {
                                    return "iearn" == t ? "y" : "susdv2" == t ? "susd" : "ren2" == t ? "ren" : "rens" == t ? "sbtc" : t
                                })), i || (e = e.filter((function(t) {
                                    return !u.volumeData[o][t].length
                                }))), r = e.map((function(t) {
                                    return "ren" == t && (t = "ren2"), "sbtc" == t && (t = "rens"), fetch("".concat(window.domain, "/raw-stats/").concat(t, "-").concat(o, "m.json"))
                                })), (e.includes("tbtc") || e.includes("ren") || e.includes("sbtc") || e.includes("hbtc")) && r.push(fetch("\n\t\t\thttps://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1589587198&to=".concat(Date.now() / 1e3 | 0))), t.next = 9, Promise.all(r);
                            case 9:
                                return r = t.sent, t.next = 12, Promise.all(r.map((function(t) {
                                    return t.json()
                                })));
                            case 12:
                                a = t.sent, h = a[a.length - 1], (e.includes("tbtc") || e.includes("ren") || e.includes("hbtc")) && (a = a.slice(0, -1)), l = Object(s["a"])(a.entries());
                                try {
                                    for (l.s(); !(c = l.n()).done;) d = Object(n["a"])(c.value, 2), p = d[0], g = d[1], m = e[p], ["tbtc", "ren", "sbtc", "hbtc"].includes(m) && (g = g.map((function(t) {
                                        return t.volume = Object.fromEntries(Object.entries(t.volume).map((function(e) {
                                            var i = Object(n["a"])(e, 2),
                                                s = i[0],
                                                o = i[1];
                                            return [s, o.map((function(e) {
                                                return e * f(t.timestamp, h.prices)
                                            }))]
                                        }))), t
                                    }))), u.volumeData[o][m] = g
                                } catch (v) {
                                    l.e(v)
                                } finally {
                                    l.f()
                                }
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), m.apply(this, arguments)
            }

            function x(t) {
                return v.apply(this, arguments)
            }

            function v() {
                return v = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                    var i, s, o, r, a, l, c, d, p, f, g, m, x = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (i = x.length > 1 && void 0 !== x[1] && x[1], Array.isArray(e) || (e = [e]), e = e.map((function(t) {
                                        return "iearn" == t ? "y" : "susdv2" == t ? "susd" : "ren" == t ? "ren2" : "sbtc" == t ? "rens" : t
                                    })), Object.values(u.volumes).filter((function(t) {
                                        return -1 != t[0]
                                    })).length != e.length || i) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return");
                            case 5:
                                return t.next = 7, Promise.all([fetch("".concat(window.domain, "/raw-stats/apys.json")), fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")]);
                            case 7:
                                return s = t.sent, t.next = 10, Promise.all(s.map((function(t) {
                                    return t.json()
                                })));
                            case 10:
                                for (o = t.sent, r = Object(n["a"])(o, 2), a = r[0], l = r[1], l = l.bitcoin.usd, c = 0, d = Object.entries(u.volumes); c < d.length; c++) p = Object(n["a"])(d[c], 2), f = p[0], g = p[1], -1 == g[0] && (m = "ren" == f ? a.volume.ren2 : "sbtc" == f ? a.volume.rens : a.volume[f], ["tbtc", "ren", "sbtc", "hbtc"].includes(f) && (m *= l), h["a"].set(u.volumes[f], 0, m || 0), h["a"].set(u.volumes[f], 1, "ren" == f ? a.volume.ren2 : "sbtc" == f ? a.volume.rens : a.volume[f]));
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), v.apply(this, arguments)
            }

            function y(t) {
                return b.apply(this, arguments)
            }

            function b() {
                return b = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                    var i, o, r, a, h, c, d = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (i = d.length > 1 && void 0 !== d[1] && d[1], o = d.length > 2 && void 0 !== d[2] ? d[2] : 30, e = "iearn" == e ? "y" : "susdv2" == e ? "susd" : e, !u.allVolume[e].length || i) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return");
                            case 5:
                                return t.next = 7, g(e, i, o);
                            case 7:
                                r = u.volumeData[o][e], u.volumeData[e] = r, a = Object(s["a"])(r);
                                try {
                                    for (a.s(); !(h = a.n()).done;) c = h.value, u.allVolume[e].push([1e3 * c.timestamp, Object.entries(c.volume).map((function(t) {
                                        var i = Object(n["a"])(t, 2),
                                            s = i[0],
                                            o = i[1],
                                            r = l["g"]["susd" == e ? "susdv2" : e].coin_precisions[s.split("-")[0]];
                                        return o[0] / r
                                    })).reduce((function(t, e) {
                                        return t + e
                                    }), 0)])
                                } catch (p) {
                                    a.e(p)
                                } finally {
                                    a.f()
                                }
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), b.apply(this, arguments)
            }

            function k(t) {
                return M.apply(this, arguments)
            }

            function M() {
                return M = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                    var i, s, o, n, r, a = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (i = a.length > 1 && void 0 !== a[1] && a[1], s = a.length > 2 && void 0 !== a[2] ? a[2] : 30, e = "iearn" == e ? "y" : "susdv2" == e ? "susd" : e, u.volumeData[s][e].length) {
                                    t.next = 6;
                                    break
                                }
                                return t.next = 6, g(e, i, s);
                            case 6:
                                for (o = [], n = function(t) {
                                        var i = u.volumeData[s][e],
                                            n = i[t],
                                            r = i[t - 1],
                                            a = n.balances.map((function(t, i) {
                                                return t / l["g"]["susd" == e ? "susdv2" : e].coin_precisions[i]
                                            })),
                                            h = n.rates.map((function(t, e) {
                                                return t / r.rates[e] - 1
                                            })),
                                            c = a.map((function(t, e) {
                                                return t * h[e]
                                            })),
                                            d = c.reduce((function(t, e) {
                                                return t + e
                                            }), 0),
                                            p = a.reduce((function(t, e) {
                                                return t + e
                                            }), 0),
                                            f = d / p,
                                            g = n.timestamp - r.timestamp,
                                            m = Math.pow(1 + f, 31536e3 / g);
                                        o.push([1e3 * n.timestamp, 100 * (m - 1)])
                                    }, r = 1; r < u.volumeData[s][e].length; r++) n(r);
                                return t.abrupt("return", o);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), M.apply(this, arguments)
            }

            function w() {
                for (var t = d()(0), e = 0, i = Object.values(u.volumes); e < i.length; e++) {
                    var s = i[e];
                    t = t.plus(d()(s[0]))
                }
                return t
            }
        },
        d68a: function(t, e, i) {
            var s, o;
            (function(n) {
                t.exports ? (n["default"] = n, t.exports = n) : (s = [i("ea7f"), i("0319")], o = function(t) {
                    return n(t), n.Highcharts = t, n
                }.apply(e, s), void 0 === o || (t.exports = o))
            })((function(t) {
                function e(t, e, i, s) {
                    t.hasOwnProperty(e) || (t[e] = s.apply(null, i))
                }
                var i = t ? t._modules : {};
                e(i, "mixins/ajax.js", [i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.merge,
                        s = e.objectEach;
                    t.ajax = function(t) {
                        var e = i(!0, {
                            url: !1,
                            type: "get",
                            dataType: "json",
                            success: !1,
                            error: !1,
                            data: !1,
                            headers: {}
                        }, t);
                        t = {
                            json: "application/json",
                            xml: "application/xml",
                            text: "text/plain",
                            octet: "application/octet-stream"
                        };
                        var o = new XMLHttpRequest;
                        if (!e.url) return !1;
                        o.open(e.type.toUpperCase(), e.url, !0), e.headers["Content-Type"] || o.setRequestHeader("Content-Type", t[e.dataType] || t.text), s(e.headers, (function(t, e) {
                            o.setRequestHeader(e, t)
                        })), o.onreadystatechange = function() {
                            if (4 === o.readyState) {
                                if (200 === o.status) {
                                    var t = o.responseText;
                                    if ("json" === e.dataType) try {
                                        t = JSON.parse(t)
                                    } catch (i) {
                                        return void(e.error && e.error(o, i))
                                    }
                                    return e.success && e.success(t)
                                }
                                e.error && e.error(o, o.responseText)
                            }
                        };
                        try {
                            e.data = JSON.stringify(e.data)
                        } catch (n) {}
                        o.send(e.data || !0)
                    }, t.getJSON = function(e, i) {
                        t.ajax({
                            url: e,
                            success: i,
                            dataType: "json",
                            headers: {
                                "Content-Type": "text/plain"
                            }
                        })
                    }
                })), e(i, "mixins/download-url.js", [i["parts/Globals.js"]], (function(t) {
                    var e = t.win,
                        i = e.navigator,
                        s = e.document,
                        o = e.URL || e.webkitURL || e,
                        n = /Edge\/\d+/.test(i.userAgent);
                    t.dataURLtoBlob = function(t) {
                        if ((t = t.match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/)) && 3 < t.length && e.atob && e.ArrayBuffer && e.Uint8Array && e.Blob && o.createObjectURL) {
                            var i = e.atob(t[3]),
                                s = new e.ArrayBuffer(i.length);
                            s = new e.Uint8Array(s);
                            for (var n = 0; n < s.length; ++n) s[n] = i.charCodeAt(n);
                            return t = new e.Blob([s], {
                                type: t[1]
                            }), o.createObjectURL(t)
                        }
                    }, t.downloadURL = function(o, r) {
                        var a = s.createElement("a");
                        if ("string" === typeof o || o instanceof String || !i.msSaveOrOpenBlob) {
                            if ((n || 2e6 < o.length) && (o = t.dataURLtoBlob(o), !o)) throw Error("Failed to convert to blob");
                            if ("undefined" !== typeof a.download) a.href = o, a.download = r, s.body.appendChild(a), a.click(), s.body.removeChild(a);
                            else try {
                                var h = e.open(o, "chart");
                                if ("undefined" === typeof h || null === h) throw Error("Failed to open window")
                            } catch (l) {
                                e.location.href = o
                            }
                        } else i.msSaveOrOpenBlob(o, r)
                    }
                })), e(i, "modules/export-data.src.js", [i["parts/Chart.js"], i["parts/Globals.js"], i["parts/Utilities.js"]], (function(e, i, s) {
                    function o(t, e) {
                        var i = a.navigator,
                            s = -1 < i.userAgent.indexOf("WebKit") && 0 > i.userAgent.indexOf("Chrome"),
                            o = a.URL || a.webkitURL || a;
                        try {
                            if (i.msSaveOrOpenBlob && a.MSBlobBuilder) {
                                var n = new a.MSBlobBuilder;
                                return n.append(t), n.getBlob("image/svg+xml")
                            }
                            if (!s) return o.createObjectURL(new a.Blob(["\ufeff" + t], {
                                type: e
                            }))
                        } catch (r) {}
                    }
                    var n = i.doc,
                        r = i.seriesTypes,
                        a = i.win,
                        h = s.addEvent,
                        l = s.defined,
                        c = s.extend,
                        d = s.find,
                        p = s.fireEvent,
                        u = s.getOptions,
                        f = s.isNumber,
                        g = s.pick;
                    s = s.setOptions;
                    var m = i.downloadURL;
                    s({
                        exporting: {
                            csv: {
                                columnHeaderFormatter: null,
                                dateFormat: "%Y-%m-%d %H:%M:%S",
                                decimalPoint: null,
                                itemDelimiter: null,
                                lineDelimiter: "\n"
                            },
                            showTable: !1,
                            useMultiLevelHeaders: !0,
                            useRowspanHeaders: !0
                        },
                        lang: {
                            downloadCSV: "Download CSV",
                            downloadXLS: "Download XLS",
                            exportData: {
                                categoryHeader: "Category",
                                categoryDatetimeHeader: "DateTime"
                            },
                            viewData: "View data table"
                        }
                    }), h(e, "render", (function() {
                        this.options && this.options.exporting && this.options.exporting.showTable && !this.options.chart.forExport && this.viewData()
                    })), e.prototype.setUpKeyToAxis = function() {
                        r.arearange && (r.arearange.prototype.keyToAxis = {
                            low: "y",
                            high: "y"
                        }), r.gantt && (r.gantt.prototype.keyToAxis = {
                            start: "x",
                            end: "x"
                        })
                    }, e.prototype.getDataRows = function(e) {
                        var i, s = this.hasParallelCoordinates,
                            o = this.time,
                            n = this.options.exporting && this.options.exporting.csv || {},
                            r = this.xAxis,
                            a = {},
                            h = [],
                            c = [],
                            u = [],
                            m = this.options.lang.exportData,
                            x = m.categoryHeader,
                            v = m.categoryDatetimeHeader,
                            y = function(i, s, o) {
                                if (n.columnHeaderFormatter) {
                                    var r = n.columnHeaderFormatter(i, s, o);
                                    if (!1 !== r) return r
                                }
                                return i ? i instanceof t.Axis ? i.options.title && i.options.title.text || (i.dateTime ? v : x) : e ? {
                                    columnTitle: 1 < o ? s : i.name,
                                    topLevelColumnTitle: i.name
                                } : i.name + (1 < o ? " (" + s + ")" : "") : x
                            },
                            b = function(t, e, i) {
                                var s = {},
                                    o = {};
                                return e.forEach((function(e) {
                                    var n = (t.keyToAxis && t.keyToAxis[e] || e) + "Axis";
                                    n = f(i) ? t.chart[n][i] : t[n], s[e] = n && n.categories || [], o[e] = n && n.dateTime
                                })), {
                                    categoryMap: s,
                                    dateTimeValueAxisMap: o
                                }
                            },
                            k = function(t, e) {
                                return t.data.filter((function(t) {
                                    return t.name
                                })).length && e && !e.categories && !t.keyToAxis ? t.pointArrayMap && t.pointArrayMap.filter((function(t) {
                                    return "x" === t
                                })).length ? (t.pointArrayMap.unshift("x"), t.pointArrayMap) : ["x", "y"] : t.pointArrayMap || ["y"]
                            },
                            M = [],
                            w = 0;
                        for (S in this.setUpKeyToAxis(), this.series.forEach((function(t) {
                                var h, l = t.xAxis,
                                    p = t.options.keys || k(t, l),
                                    f = p.length,
                                    m = !t.requireSorting && {},
                                    x = r.indexOf(l),
                                    v = b(t, p);
                                if (!1 !== t.options.includeInDataExport && !t.options.isInternal && !1 !== t.visible) {
                                    for (d(M, (function(t) {
                                            return t[0] === x
                                        })) || M.push([x, w]), h = 0; h < f;) i = y(t, p[h], p.length), u.push(i.columnTitle || i), e && c.push(i.topLevelColumnTitle || i), h++;
                                    var S = {
                                        chart: t.chart,
                                        autoIncrement: t.autoIncrement,
                                        options: t.options,
                                        pointArrayMap: t.pointArrayMap
                                    };
                                    t.options.data.forEach((function(e, i) {
                                        s && (v = b(t, p, i));
                                        var r = {
                                            series: S
                                        };
                                        t.pointClass.prototype.applyOptions.apply(r, [e]), e = r.x;
                                        var c = t.data[i] && t.data[i].name;
                                        for (h = 0, (!l || "name" === t.exportKey || !s && l && l.hasNames && c) && (e = c), m && (m[e] && (e += "|" + i), m[e] = !0), a[e] || (a[e] = [], a[e].xValues = []), a[e].x = r.x, a[e].name = c, a[e].xValues[x] = r.x; h < f;) i = p[h], c = r[i], a[e][w + h] = g(v.categoryMap[i][c], v.dateTimeValueAxisMap[i] ? o.dateFormat(n.dateFormat, c) : null, c), h++
                                    })), w += h
                                }
                            })), a) Object.hasOwnProperty.call(a, S) && h.push(a[S]);
                        var S = e ? [c, u] : [u];
                        for (w = M.length; w--;) {
                            var A = M[w][0],
                                T = M[w][1],
                                P = r[A];
                            h.sort((function(t, e) {
                                return t.xValues[A] - e.xValues[A]
                            })), m = y(P), S[0].splice(T, 0, m), e && S[1] && S[1].splice(T, 0, m), h.forEach((function(t) {
                                var e = t.name;
                                P && !l(e) && (P.dateTime ? (t.x instanceof Date && (t.x = t.x.getTime()), e = o.dateFormat(n.dateFormat, t.x)) : e = P.categories ? g(P.names[t.x], P.categories[t.x], t.x) : t.x), t.splice(T, 0, e)
                            }))
                        }
                        return S = S.concat(h), p(this, "exportData", {
                            dataRows: S
                        }), S
                    }, e.prototype.getCSV = function(t) {
                        var e = "",
                            i = this.getDataRows(),
                            s = this.options.exporting.csv,
                            o = g(s.decimalPoint, "," !== s.itemDelimiter && t ? 1.1.toLocaleString()[1] : "."),
                            n = g(s.itemDelimiter, "," === o ? ";" : ","),
                            r = s.lineDelimiter;
                        return i.forEach((function(t, s) {
                            for (var a, h = t.length; h--;) a = t[h], "string" === typeof a && (a = '"' + a + '"'), "number" === typeof a && "." !== o && (a = a.toString().replace(".", o)), t[h] = a;
                            e += t.join(n), s < i.length - 1 && (e += r)
                        })), e
                    }, e.prototype.getTable = function(t) {
                        var e = '<table id="highcharts-data-table-' + this.index + '">',
                            i = this.options,
                            s = t ? 1.1.toLocaleString()[1] : ".",
                            o = g(i.exporting.useMultiLevelHeaders, !0);
                        t = this.getDataRows(o);
                        var n = 0,
                            r = o ? t.shift() : null,
                            a = t.shift(),
                            h = function(t, e, i, o) {
                                var n = g(o, "");
                                return e = "text" + (e ? " " + e : ""), "number" === typeof n ? (n = n.toString(), "," === s && (n = n.replace(".", s)), e = "number") : o || (e = "empty"), "<" + t + (i ? " " + i : "") + ' class="' + e + '">' + n + "</" + t + ">"
                            };
                        !1 !== i.exporting.tableCaption && (e += '<caption class="highcharts-table-caption">' + g(i.exporting.tableCaption, i.title.text ? i.title.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;") : "Chart") + "</caption>");
                        for (var l = 0, c = t.length; l < c; ++l) t[l].length > n && (n = t[l].length);
                        return e += function(t, e, s) {
                            var n = "<thead>",
                                r = 0;
                            s = s || e && e.length;
                            var a, l = 0;
                            if (a = o && t && e) {
                                t: if (a = t.length, e.length === a) {
                                    for (; a--;)
                                        if (t[a] !== e[a]) {
                                            a = !1;
                                            break t
                                        }
                                    a = !0
                                } else a = !1;a = !a
                            }
                            if (a) {
                                for (n += "<tr>"; r < s; ++r) {
                                    a = t[r];
                                    var c = t[r + 1];
                                    a === c ? ++l : l ? (n += h("th", "highcharts-table-topheading", 'scope="col" colspan="' + (l + 1) + '"', a), l = 0) : (a === e[r] ? i.exporting.useRowspanHeaders ? (c = 2, delete e[r]) : (c = 1, e[r] = "") : c = 1, n += h("th", "highcharts-table-topheading", 'scope="col"' + (1 < c ? ' valign="top" rowspan="' + c + '"' : ""), a))
                                }
                                n += "</tr>"
                            }
                            if (e) {
                                for (n += "<tr>", r = 0, s = e.length; r < s; ++r) "undefined" !== typeof e[r] && (n += h("th", null, 'scope="col"', e[r]));
                                n += "</tr>"
                            }
                            return n + "</thead>"
                        }(r, a, Math.max(n, a.length)), e += "<tbody>", t.forEach((function(t) {
                            e += "<tr>";
                            for (var i = 0; i < n; i++) e += h(i ? "td" : "th", null, i ? "" : 'scope="row"', t[i]);
                            e += "</tr>"
                        })), e += "</tbody></table>", t = {
                            html: e
                        }, p(this, "afterGetTable", t), t.html
                    }, e.prototype.downloadCSV = function() {
                        var t = this.getCSV(!0);
                        m(o(t, "text/csv") || "data:text/csv,\ufeff" + encodeURIComponent(t), this.getFilename() + ".csv")
                    }, e.prototype.downloadXLS = function() {
                        var t = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Ark1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"0.00";} .text{ mso-number-format:"@";}</style><meta name=ProgId content=Excel.Sheet><meta charset=UTF-8></head><body>' + this.getTable(!0) + "</body></html>";
                        m(o(t, "application/vnd.ms-excel") || "data:application/vnd.ms-excel;base64," + a.btoa(unescape(encodeURIComponent(t))), this.getFilename() + ".xls")
                    }, e.prototype.viewData = function() {
                        this.dataTableDiv || (this.dataTableDiv = n.createElement("div"), this.dataTableDiv.className = "highcharts-data-table", this.renderTo.parentNode.insertBefore(this.dataTableDiv, this.renderTo.nextSibling)), this.dataTableDiv.innerHTML = this.getTable(), p(this, "afterViewData", this.dataTableDiv)
                    }, (e = u().exporting) && (c(e.menuItemDefinitions, {
                        downloadCSV: {
                            textKey: "downloadCSV",
                            onclick: function() {
                                this.downloadCSV()
                            }
                        },
                        downloadXLS: {
                            textKey: "downloadXLS",
                            onclick: function() {
                                this.downloadXLS()
                            }
                        },
                        viewData: {
                            textKey: "viewData",
                            onclick: function() {
                                this.viewData()
                            }
                        }
                    }), e.buttons && e.buttons.contextButton.menuItems.push("separator", "downloadCSV", "downloadXLS", "viewData")), r.map && (r.map.prototype.exportKey = "name"), r.mapbubble && (r.mapbubble.prototype.exportKey = "name"), r.treemap && (r.treemap.prototype.exportKey = "name")
                })), e(i, "masters/modules/export-data.src.js", [], (function() {}))
            }))
        },
        ea7f: function(t, e, i) {
            var s;
            (function(o, n) {
                t.exports ? (n["default"] = n, t.exports = o.document ? n(o) : n) : (s = function() {
                    return n(o)
                }.call(e, i, e, t), void 0 === s || (t.exports = s))
            })("undefined" !== typeof window ? window : this, (function(t) {
                function e(t, e, i, s) {
                    t.hasOwnProperty(e) || (t[e] = s.apply(null, i))
                }
                var i = {};
                return e(i, "parts/Globals.js", [], (function() {
                    var e = "undefined" !== typeof t ? t : "undefined" !== typeof window ? window : {},
                        i = e.document,
                        s = e.navigator && e.navigator.userAgent || "",
                        o = i && i.createElementNS && !!i.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                        n = /(edge|msie|trident)/i.test(s) && !e.opera,
                        r = -1 !== s.indexOf("Firefox"),
                        a = -1 !== s.indexOf("Chrome"),
                        h = r && 4 > parseInt(s.split("Firefox/")[1], 10);
                    return {
                        product: "Highcharts",
                        version: "8.1.1",
                        deg2rad: 2 * Math.PI / 360,
                        doc: i,
                        hasBidiBug: h,
                        hasTouch: !!e.TouchEvent,
                        isMS: n,
                        isWebKit: -1 !== s.indexOf("AppleWebKit"),
                        isFirefox: r,
                        isChrome: a,
                        isSafari: !a && -1 !== s.indexOf("Safari"),
                        isTouchDevice: /(Mobile|Android|Windows Phone)/.test(s),
                        SVG_NS: "http://www.w3.org/2000/svg",
                        chartCount: 0,
                        seriesTypes: {},
                        symbolSizes: {},
                        svg: o,
                        win: e,
                        marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
                        noop: function() {},
                        charts: [],
                        dateFormats: {}
                    }
                })), e(i, "parts/Utilities.js", [i["parts/Globals.js"]], (function(t) {
                    function e(t, i, s, o) {
                        var n = m(t),
                            r = n ? "Highcharts error #" + t + ": www.highcharts.com/errors/" + t + "/" : t.toString(),
                            a = function() {
                                if (i) throw Error(r);
                                l.console && -1 === e.messages.indexOf(r) && console.log(r)
                            };
                        if ("undefined" !== typeof o) {
                            var h = "";
                            n && (r += "?"), _(o, (function(t, e) {
                                h += "\n" + e + ": " + t, n && (r += encodeURI(e) + "=" + encodeURI(t))
                            })), r += h
                        }
                        s ? $(s, "displayError", {
                            code: t,
                            message: r,
                            params: o
                        }, a) : a(), e.messages.push(r)
                    }

                    function i() {
                        var t, e = arguments,
                            i = {},
                            o = function(t, e) {
                                return "object" !== typeof t && (t = {}), _(e, (function(i, n) {
                                    !s(i, !0) || g(i) || f(i) ? t[n] = e[n] : t[n] = o(t[n] || {}, i)
                                })), t
                            };
                        !0 === e[0] && (i = e[1], e = Array.prototype.slice.call(e, 2));
                        var n = e.length;
                        for (t = 0; t < n; t++) i = o(i, e[t]);
                        return i
                    }

                    function s(t, e) {
                        return !!t && "object" === typeof t && (!e || !u(t))
                    }

                    function o(t, e, i) {
                        var s;
                        return p(e) ? v(i) ? t.setAttribute(e, i) : t && t.getAttribute && ((s = t.getAttribute(e)) || "class" !== e || (s = t.getAttribute(e + "Name"))) : _(e, (function(e, i) {
                            t.setAttribute(i, e)
                        })), s
                    }

                    function n() {
                        for (var t = arguments, e = t.length, i = 0; i < e; i++) {
                            var s = t[i];
                            if ("undefined" !== typeof s && null !== s) return s
                        }
                    }

                    function r(t, e) {
                        if (!t) return e;
                        var i = t.split(".").reverse();
                        if (1 === i.length) return e[t];
                        for (t = i.pop();
                            "undefined" !== typeof t && "undefined" !== typeof e && null !== e;) e = e[t], t = i.pop();
                        return e
                    }
                    t.timers = [];
                    var a = t.charts,
                        h = t.doc,
                        l = t.win;
                    (e || (e = {})).messages = [], t.error = e;
                    var c = function() {
                        function e(t, e, i) {
                            this.options = e, this.elem = t, this.prop = i
                        }
                        return e.prototype.dSetter = function() {
                            var t = this.paths,
                                e = t && t[0];
                            t = t && t[1];
                            var i = [],
                                s = this.now || 0;
                            if (1 !== s && e && t)
                                if (e.length === t.length && 1 > s)
                                    for (var o = 0; o < t.length; o++) {
                                        for (var n = e[o], r = t[o], a = [], h = 0; h < r.length; h++) {
                                            var l = n[h],
                                                c = r[h];
                                            a[h] = "number" === typeof l && "number" === typeof c && ("A" !== r[0] || 4 !== h && 5 !== h) ? l + s * (c - l) : c
                                        }
                                        i.push(a)
                                    } else i = t;
                                else i = this.toD || [];
                            this.elem.attr("d", i, void 0, !0)
                        }, e.prototype.update = function() {
                            var t = this.elem,
                                e = this.prop,
                                i = this.now,
                                s = this.options.step;
                            this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, s && s.call(t, i, this)
                        }, e.prototype.run = function(e, i, s) {
                            var o = this,
                                n = o.options,
                                r = function(t) {
                                    return !r.stopped && o.step(t)
                                },
                                a = l.requestAnimationFrame || function(t) {
                                    setTimeout(t, 13)
                                },
                                h = function() {
                                    for (var e = 0; e < t.timers.length; e++) t.timers[e]() || t.timers.splice(e--, 1);
                                    t.timers.length && a(h)
                                };
                            e !== i || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = e, this.end = i, this.unit = s, this.now = this.start, this.pos = 0, r.elem = this.elem, r.prop = this.prop, r() && 1 === t.timers.push(r) && a(h)) : (delete n.curAnim[this.prop], n.complete && 0 === Object.keys(n.curAnim).length && n.complete.call(this.elem))
                        }, e.prototype.step = function(t) {
                            var e = +new Date,
                                i = this.options,
                                s = this.elem,
                                o = i.complete,
                                n = i.duration,
                                r = i.curAnim;
                            if (s.attr && !s.element) t = !1;
                            else if (t || e >= n + this.startTime) {
                                this.now = this.end, this.pos = 1, this.update();
                                var a = r[this.prop] = !0;
                                _(r, (function(t) {
                                    !0 !== t && (a = !1)
                                })), a && o && o.call(s), t = !1
                            } else this.pos = i.easing((e - this.startTime) / n), this.now = this.start + (this.end - this.start) * this.pos, this.update(), t = !0;
                            return t
                        }, e.prototype.initPath = function(t, e, i) {
                            function s(t, e) {
                                for (; t.length < d;) {
                                    var i = t[0],
                                        s = e[d - t.length];
                                    s && "M" === i[0] && (t[0] = "C" === s[0] ? ["C", i[1], i[2], i[1], i[2], i[1], i[2]] : ["L", i[1], i[2]]), t.unshift(i), a && t.push(t[t.length - 1])
                                }
                            }

                            function o(t, e) {
                                for (; t.length < d;)
                                    if (e = t[t.length / h - 1].slice(), "C" === e[0] && (e[1] = e[5], e[2] = e[6]), a) {
                                        var i = t[t.length / h].slice();
                                        t.splice(t.length / 2, 0, e, i)
                                    } else t.push(e)
                            }
                            var n = t.startX,
                                r = t.endX;
                            e = e && e.slice(), i = i.slice();
                            var a = t.isArea,
                                h = a ? 2 : 1;
                            if (!e) return [i, i];
                            if (n && r) {
                                for (t = 0; t < n.length; t++) {
                                    if (n[t] === r[0]) {
                                        var l = t;
                                        break
                                    }
                                    if (n[0] === r[r.length - n.length + t]) {
                                        l = t;
                                        var c = !0;
                                        break
                                    }
                                    if (n[n.length - 1] === r[r.length - n.length + t]) {
                                        l = n.length - t;
                                        break
                                    }
                                }
                                "undefined" === typeof l && (e = [])
                            }
                            if (e.length && m(l)) {
                                var d = i.length + l * h;
                                c ? (s(e, i), o(i, e)) : (s(i, e), o(e, i))
                            }
                            return [e, i]
                        }, e.prototype.fillSetter = function() {
                            e.prototype.strokeSetter.apply(this, arguments)
                        }, e.prototype.strokeSetter = function() {
                            this.elem.attr(this.prop, t.color(this.start).tweenTo(t.color(this.end), this.pos), null, !0)
                        }, e
                    }();
                    t.Fx = c, t.merge = i;
                    var d = t.pInt = function(t, e) {
                            return parseInt(t, e || 10)
                        },
                        p = t.isString = function(t) {
                            return "string" === typeof t
                        },
                        u = t.isArray = function(t) {
                            return t = Object.prototype.toString.call(t), "[object Array]" === t || "[object Array Iterator]" === t
                        };
                    t.isObject = s;
                    var f = t.isDOMElement = function(t) {
                            return s(t) && "number" === typeof t.nodeType
                        },
                        g = t.isClass = function(t) {
                            var e = t && t.constructor;
                            return !(!s(t, !0) || f(t) || !e || !e.name || "Object" === e.name)
                        },
                        m = t.isNumber = function(t) {
                            return "number" === typeof t && !isNaN(t) && 1 / 0 > t && -1 / 0 < t
                        },
                        x = t.erase = function(t, e) {
                            for (var i = t.length; i--;)
                                if (t[i] === e) {
                                    t.splice(i, 1);
                                    break
                                }
                        },
                        v = t.defined = function(t) {
                            return "undefined" !== typeof t && null !== t
                        };
                    t.attr = o;
                    var y = t.splat = function(t) {
                            return u(t) ? t : [t]
                        },
                        b = t.syncTimeout = function(t, e, i) {
                            return 0 < e ? setTimeout(t, e, i) : (t.call(0, i), -1)
                        },
                        k = t.clearTimeout = function(t) {
                            v(t) && clearTimeout(t)
                        },
                        M = t.extend = function(t, e) {
                            var i;
                            for (i in t || (t = {}), e) t[i] = e[i];
                            return t
                        };
                    t.pick = n;
                    var w = t.css = function(e, i) {
                            t.isMS && !t.svg && i && "undefined" !== typeof i.opacity && (i.filter = "alpha(opacity=" + 100 * i.opacity + ")"), M(e.style, i)
                        },
                        S = t.createElement = function(t, e, i, s, o) {
                            return t = h.createElement(t), e && M(t, e), o && w(t, {
                                padding: "0",
                                border: "none",
                                margin: "0"
                            }), i && w(t, i), s && s.appendChild(t), t
                        },
                        A = t.extendClass = function(t, e) {
                            var i = function() {};
                            return i.prototype = new t, M(i.prototype, e), i
                        },
                        T = t.pad = function(t, e, i) {
                            return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || "0") + t
                        },
                        P = t.relativeLength = function(t, e, i) {
                            return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t)
                        },
                        C = t.wrap = function(t, e, i) {
                            var s = t[e];
                            t[e] = function() {
                                var t = Array.prototype.slice.call(arguments),
                                    e = arguments,
                                    o = this;
                                return o.proceed = function() {
                                    s.apply(o, arguments.length ? arguments : e)
                                }, t.unshift(s), t = i.apply(this, t), o.proceed = null, t
                            }
                        },
                        O = t.format = function(e, i, s) {
                            var o = "{",
                                n = !1,
                                a = [],
                                h = /f$/,
                                l = /\.([0-9])/,
                                c = t.defaultOptions.lang,
                                d = s && s.time || t.time;
                            for (s = s && s.numberFormatter || H; e;) {
                                var p = e.indexOf(o);
                                if (-1 === p) break;
                                var u = e.slice(0, p);
                                if (n) {
                                    if (u = u.split(":"), o = r(u.shift() || "", i), u.length && "number" === typeof o)
                                        if (u = u.join(":"), h.test(u)) {
                                            var f = parseInt((u.match(l) || ["", "-1"])[1], 10);
                                            null !== o && (o = s(o, f, c.decimalPoint, -1 < u.indexOf(",") ? c.thousandsSep : ""))
                                        } else o = d.dateFormat(u, o);
                                    a.push(o)
                                } else a.push(u);
                                e = e.slice(p + 1), o = (n = !n) ? "}" : "{"
                            }
                            return a.push(e), a.join("")
                        },
                        E = t.getMagnitude = function(t) {
                            return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
                        },
                        L = t.normalizeTickInterval = function(t, e, i, s, o) {
                            var r = t;
                            i = n(i, 1);
                            var a = t / i;
                            for (e || (e = o ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === s && (1 === i ? e = e.filter((function(t) {
                                    return 0 === t % 1
                                })) : .1 >= i && (e = [1 / i]))), s = 0; s < e.length && (r = e[s], !(o && r * i >= t || !o && a <= (e[s] + (e[s + 1] || e[s])) / 2)); s++);
                            return R(r * i, -Math.round(Math.log(.001) / Math.LN10))
                        },
                        D = t.stableSort = function(t, e) {
                            var i, s, o = t.length;
                            for (s = 0; s < o; s++) t[s].safeI = s;
                            for (t.sort((function(t, s) {
                                    return i = e(t, s), 0 === i ? t.safeI - s.safeI : i
                                })), s = 0; s < o; s++) delete t[s].safeI
                        },
                        B = t.arrayMin = function(t) {
                            for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
                            return i
                        },
                        I = t.arrayMax = function(t) {
                            for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
                            return i
                        },
                        z = t.destroyObjectProperties = function(t, e) {
                            _(t, (function(i, s) {
                                i && i !== e && i.destroy && i.destroy(), delete t[s]
                            }))
                        },
                        j = t.discardElement = function(e) {
                            var i = t.garbageBin;
                            i || (i = S("div")), e && i.appendChild(e), i.innerHTML = ""
                        },
                        R = t.correctFloat = function(t, e) {
                            return parseFloat(t.toPrecision(e || 14))
                        },
                        G = t.setAnimation = function(t, e) {
                            e.renderer.globalAnimation = n(t, e.options.chart.animation, !0)
                        },
                        N = t.animObject = function(t) {
                            return s(t) ? i(t) : {
                                duration: t ? 500 : 0
                            }
                        },
                        W = t.timeUnits = {
                            millisecond: 1,
                            second: 1e3,
                            minute: 6e4,
                            hour: 36e5,
                            day: 864e5,
                            week: 6048e5,
                            month: 24192e5,
                            year: 314496e5
                        },
                        H = t.numberFormat = function(e, i, s, o) {
                            e = +e || 0, i = +i;
                            var r = t.defaultOptions.lang,
                                a = (e.toString().split(".")[1] || "").split("e")[0].length,
                                h = e.toString().split("e");
                            if (-1 === i) i = Math.min(a, 20);
                            else if (m(i)) {
                                if (i && h[1] && 0 > h[1]) {
                                    var l = i + +h[1];
                                    0 <= l ? (h[0] = (+h[0]).toExponential(l).split("e")[0], i = l) : (h[0] = h[0].split(".")[0] || 0, e = 20 > i ? (h[0] * Math.pow(10, h[1])).toFixed(i) : 0, h[1] = 0)
                                }
                            } else i = 2;
                            var c = (Math.abs(h[1] ? h[0] : e) + Math.pow(10, -Math.max(i, a) - 1)).toFixed(i);
                            return a = String(d(c)), l = 3 < a.length ? a.length % 3 : 0, s = n(s, r.decimalPoint), o = n(o, r.thousandsSep), e = (0 > e ? "-" : "") + (l ? a.substr(0, l) + o : ""), e += a.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + o), i && (e += s + c.slice(-i)), h[1] && 0 !== +e && (e += "e" + h[1]), e
                        };
                    Math.easeInOutSine = function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    };
                    var X = t.getStyle = function(i, s, o) {
                            return "width" === s ? (s = Math.min(i.offsetWidth, i.scrollWidth), o = i.getBoundingClientRect && i.getBoundingClientRect().width, o < s && o >= s - 1 && (s = Math.floor(o)), Math.max(0, s - t.getStyle(i, "padding-left") - t.getStyle(i, "padding-right"))) : "height" === s ? Math.max(0, Math.min(i.offsetHeight, i.scrollHeight) - t.getStyle(i, "padding-top") - t.getStyle(i, "padding-bottom")) : (l.getComputedStyle || e(27, !0), (i = l.getComputedStyle(i, void 0)) && (i = i.getPropertyValue(s), n(o, "opacity" !== s) && (i = d(i))), i)
                        },
                        F = t.inArray = function(t, i, s) {
                            return e(32, !1, void 0, {
                                "Highcharts.inArray": "Array.indexOf"
                            }), i.indexOf(t, s)
                        },
                        Y = t.find = Array.prototype.find ? function(t, e) {
                            return t.find(e)
                        } : function(t, e) {
                            var i, s = t.length;
                            for (i = 0; i < s; i++)
                                if (e(t[i], i)) return t[i]
                        };
                    t.keys = function() {
                        return e(32, !1, void 0, {
                            "Highcharts.keys": "Object.keys"
                        }), Object.keys.apply(arguments)
                    };
                    var U = t.offset = function(t) {
                            var e = h.documentElement;
                            return t = t.parentElement || t.parentNode ? t.getBoundingClientRect() : {
                                top: 0,
                                left: 0
                            }, {
                                top: t.top + (l.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                                left: t.left + (l.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                            }
                        },
                        V = t.stop = function(e, i) {
                            for (var s = t.timers.length; s--;) t.timers[s].elem !== e || i && i !== t.timers[s].prop || (t.timers[s].stopped = !0)
                        },
                        _ = t.objectEach = function(t, e, i) {
                            for (var s in t) Object.hasOwnProperty.call(t, s) && e.call(i || t[s], t[s], s, t)
                        };
                    _({
                        map: "map",
                        each: "forEach",
                        grep: "filter",
                        reduce: "reduce",
                        some: "some"
                    }, (function(i, s) {
                        t[s] = function(t) {
                            var o;
                            return e(32, !1, void 0, (o = {}, o["Highcharts." + s] = "Array." + i, o)), Array.prototype[i].apply(t, [].slice.call(arguments, 1))
                        }
                    }));
                    var K, q = t.addEvent = function(e, i, s, o) {
                            void 0 === o && (o = {});
                            var n = e.addEventListener || t.addEventListenerPolyfill,
                                r = "function" === typeof e && e.prototype ? e.prototype.protoEvents = e.prototype.protoEvents || {} : e.hcEvents = e.hcEvents || {};
                            return t.Point && e instanceof t.Point && e.series && e.series.chart && (e.series.chart.runTrackerClick = !0), n && n.call(e, i, s, !1), r[i] || (r[i] = []), r[i].push({
                                    fn: s,
                                    order: "number" === typeof o.order ? o.order : 1 / 0
                                }), r[i].sort((function(t, e) {
                                    return t.order - e.order
                                })),
                                function() {
                                    Z(e, i, s)
                                }
                        },
                        Z = t.removeEvent = function(e, i, s) {
                            function o(i, s) {
                                var o = e.removeEventListener || t.removeEventListenerPolyfill;
                                o && o.call(e, i, s, !1)
                            }

                            function n(t) {
                                var s;
                                if (e.nodeName) {
                                    if (i) {
                                        var n = {};
                                        n[i] = !0
                                    } else n = t;
                                    _(n, (function(e, i) {
                                        if (t[i])
                                            for (s = t[i].length; s--;) o(i, t[i][s].fn)
                                    }))
                                }
                            }
                            var r;
                            ["protoEvents", "hcEvents"].forEach((function(t, a) {
                                var h = (a = a ? e : e.prototype) && a[t];
                                h && (i ? (r = h[i] || [], s ? (h[i] = r.filter((function(t) {
                                    return s !== t.fn
                                })), o(i, s)) : (n(h), h[i] = [])) : (n(h), a[t] = {}))
                            }))
                        },
                        $ = t.fireEvent = function(t, e, i, s) {
                            var o;
                            if (i = i || {}, h.createEvent && (t.dispatchEvent || t.fireEvent)) {
                                var n = h.createEvent("Events");
                                n.initEvent(e, !0, !0), M(n, i), t.dispatchEvent ? t.dispatchEvent(n) : t.fireEvent(e, n)
                            } else i.target || M(i, {
                                    preventDefault: function() {
                                        i.defaultPrevented = !0
                                    },
                                    target: t,
                                    type: e
                                }),
                                function(e, s) {
                                    void 0 === e && (e = []), void 0 === s && (s = []);
                                    var n = 0,
                                        r = 0,
                                        a = e.length + s.length;
                                    for (o = 0; o < a; o++) !1 === (e[n] ? s[r] ? e[n].order <= s[r].order ? e[n++] : s[r++] : e[n++] : s[r++]).fn.call(t, i) && i.preventDefault()
                                }(t.protoEvents && t.protoEvents[e], t.hcEvents && t.hcEvents[e]);
                            s && !i.defaultPrevented && s.call(t, i)
                        },
                        J = t.animate = function(t, e, o) {
                            var n, r, a, h = "";
                            if (!s(o)) {
                                var l = arguments;
                                o = {
                                    duration: l[2],
                                    easing: l[3],
                                    complete: l[4]
                                }
                            }
                            m(o.duration) || (o.duration = 400), o.easing = "function" === typeof o.easing ? o.easing : Math[o.easing] || Math.easeInOutSine, o.curAnim = i(e), _(e, (function(i, s) {
                                V(t, s), a = new c(t, o, s), r = null, "d" === s && u(e.d) ? (a.paths = a.initPath(t, t.pathArray, e.d), a.toD = e.d, n = 0, r = 1) : t.attr ? n = t.attr(s) : (n = parseFloat(X(t, s)) || 0, "opacity" !== s && (h = "px")), r || (r = i), r && r.match && r.match("px") && (r = r.replace(/px/g, "")), a.run(n, r, h)
                            }))
                        },
                        Q = t.seriesType = function(e, s, o, n, r) {
                            var a = st(),
                                h = t.seriesTypes;
                            return a.plotOptions[e] = i(a.plotOptions[s], o), h[e] = A(h[s] || function() {}, n), h[e].prototype.type = e, r && (h[e].prototype.pointClass = A(t.Point, r)), h[e]
                        },
                        tt = t.uniqueKey = function() {
                            var t = Math.random().toString(36).substring(2, 9) + "-",
                                e = 0;
                            return function() {
                                return "highcharts-" + (K ? "" : t) + e++
                            }
                        }(),
                        et = t.useSerialIds = function(t) {
                            return K = n(t, K)
                        },
                        it = t.isFunction = function(t) {
                            return "function" === typeof t
                        },
                        st = t.getOptions = function() {
                            return t.defaultOptions
                        },
                        ot = t.setOptions = function(e) {
                            return t.defaultOptions = i(!0, t.defaultOptions, e), (e.time || e.global) && t.time.update(i(t.defaultOptions.global, t.defaultOptions.time, e.global, e.time)), t.defaultOptions
                        };
                    return l.jQuery && (l.jQuery.fn.highcharts = function() {
                        var e = [].slice.call(arguments);
                        if (this[0]) return e[0] ? (new(t[p(e[0]) ? e.shift() : "Chart"])(this[0], e[0], e[1]), this) : a[o(this[0], "data-highcharts-chart")]
                    }), {
                        Fx: t.Fx,
                        addEvent: q,
                        animate: J,
                        animObject: N,
                        arrayMax: I,
                        arrayMin: B,
                        attr: o,
                        clamp: function(t, e, i) {
                            return t > e ? t < i ? t : i : e
                        },
                        clearTimeout: k,
                        correctFloat: R,
                        createElement: S,
                        css: w,
                        defined: v,
                        destroyObjectProperties: z,
                        discardElement: j,
                        erase: x,
                        error: e,
                        extend: M,
                        extendClass: A,
                        find: Y,
                        fireEvent: $,
                        format: O,
                        getMagnitude: E,
                        getNestedProperty: r,
                        getOptions: st,
                        getStyle: X,
                        inArray: F,
                        isArray: u,
                        isClass: g,
                        isDOMElement: f,
                        isFunction: it,
                        isNumber: m,
                        isObject: s,
                        isString: p,
                        merge: i,
                        normalizeTickInterval: L,
                        numberFormat: H,
                        objectEach: _,
                        offset: U,
                        pad: T,
                        pick: n,
                        pInt: d,
                        relativeLength: P,
                        removeEvent: Z,
                        seriesType: Q,
                        setAnimation: G,
                        setOptions: ot,
                        splat: y,
                        stableSort: D,
                        stop: V,
                        syncTimeout: b,
                        timeUnits: W,
                        uniqueKey: tt,
                        useSerialIds: et,
                        wrap: C
                    }
                })), e(i, "parts/Color.js", [i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.isNumber,
                        s = e.merge,
                        o = e.pInt;
                    return e = function() {
                        function t(e) {
                            if (this.parsers = [{
                                    regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                                    parse: function(t) {
                                        return [o(t[1]), o(t[2]), o(t[3]), parseFloat(t[4], 10)]
                                    }
                                }, {
                                    regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                                    parse: function(t) {
                                        return [o(t[1]), o(t[2]), o(t[3]), 1]
                                    }
                                }], this.rgba = [], !(this instanceof t)) return new t(e);
                            this.init(e)
                        }
                        return t.parse = function(e) {
                            return new t(e)
                        }, t.prototype.init = function(e) {
                            var i, s;
                            if ((this.input = e = t.names[e && e.toLowerCase ? e.toLowerCase() : ""] || e) && e.stops) this.stops = e.stops.map((function(e) {
                                return new t(e[1])
                            }));
                            else {
                                if (e && e.charAt && "#" === e.charAt()) {
                                    var o = e.length;
                                    e = parseInt(e.substr(1), 16), 7 === o ? i = [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 1] : 4 === o && (i = [(3840 & e) >> 4 | (3840 & e) >> 8, (240 & e) >> 4 | 240 & e, (15 & e) << 4 | 15 & e, 1])
                                }
                                if (!i)
                                    for (s = this.parsers.length; s-- && !i;) {
                                        var n = this.parsers[s];
                                        (o = n.regex.exec(e)) && (i = n.parse(o))
                                    }
                            }
                            this.rgba = i || []
                        }, t.prototype.get = function(t) {
                            var e = this.input,
                                o = this.rgba;
                            if ("undefined" !== typeof this.stops) {
                                var n = s(e);
                                n.stops = [].concat(n.stops), this.stops.forEach((function(e, i) {
                                    n.stops[i] = [n.stops[i][0], e.get(t)]
                                }))
                            } else n = o && i(o[0]) ? "rgb" === t || !t && 1 === o[3] ? "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")" : "a" === t ? o[3] : "rgba(" + o.join(",") + ")" : e;
                            return n
                        }, t.prototype.brighten = function(t) {
                            var e, s = this.rgba;
                            if (this.stops) this.stops.forEach((function(e) {
                                e.brighten(t)
                            }));
                            else if (i(t) && 0 !== t)
                                for (e = 0; 3 > e; e++) s[e] += o(255 * t), 0 > s[e] && (s[e] = 0), 255 < s[e] && (s[e] = 255);
                            return this
                        }, t.prototype.setOpacity = function(t) {
                            return this.rgba[3] = t, this
                        }, t.prototype.tweenTo = function(t, e) {
                            var i = this.rgba,
                                s = t.rgba;
                            return s.length && i && i.length ? (t = 1 !== s[3] || 1 !== i[3], e = (t ? "rgba(" : "rgb(") + Math.round(s[0] + (i[0] - s[0]) * (1 - e)) + "," + Math.round(s[1] + (i[1] - s[1]) * (1 - e)) + "," + Math.round(s[2] + (i[2] - s[2]) * (1 - e)) + (t ? "," + (s[3] + (i[3] - s[3]) * (1 - e)) : "") + ")") : e = t.input || "none", e
                        }, t.names = {
                            white: "#ffffff",
                            black: "#000000"
                        }, t
                    }(), t.Color = e, t.color = e.parse, t.Color
                })), e(i, "parts/SVGElement.js", [i["parts/Color.js"], i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e, i) {
                    var s = e.deg2rad,
                        o = e.doc,
                        n = e.hasTouch,
                        r = e.isFirefox,
                        a = e.noop,
                        h = e.svg,
                        l = e.SVG_NS,
                        c = e.win,
                        d = i.animate,
                        p = i.animObject,
                        u = i.attr,
                        f = i.createElement,
                        g = i.css,
                        m = i.defined,
                        x = i.erase,
                        v = i.extend,
                        y = i.fireEvent,
                        b = i.isArray,
                        k = i.isFunction,
                        M = i.isNumber,
                        w = i.isString,
                        S = i.merge,
                        A = i.objectEach,
                        T = i.pick,
                        P = i.pInt,
                        C = i.stop,
                        O = i.uniqueKey;
                    return i = function() {
                        function i() {
                            this.height = this.element = void 0, this.opacity = 1, this.renderer = void 0, this.SVG_NS = l, this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" "), this.width = void 0
                        }
                        return i.prototype._defaultGetter = function(t) {
                            return t = T(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)), t
                        }, i.prototype._defaultSetter = function(t, e, i) {
                            i.setAttribute(e, t)
                        }, i.prototype.add = function(t) {
                            var e = this.renderer,
                                i = this.element;
                            if (t && (this.parentGroup = t), this.parentInverted = t && t.inverted, "undefined" !== typeof this.textStr && "text" === this.element.nodeName && e.buildText(this), this.added = !0, !t || t.handleZ || this.zIndex) var s = this.zIndexSetter();
                            return s || (t ? t.element : e.box).appendChild(i), this.onAdd && this.onAdd(), this
                        }, i.prototype.addClass = function(t, e) {
                            var i = e ? "" : this.attr("class") || "";
                            return t = (t || "").split(/ /g).reduce((function(t, e) {
                                return -1 === i.indexOf(e) && t.push(e), t
                            }), i ? [i] : []).join(" "), t !== i && this.attr("class", t), this
                        }, i.prototype.afterSetters = function() {
                            this.doTransform && (this.updateTransform(), this.doTransform = !1)
                        }, i.prototype.align = function(t, e, i) {
                            var s, o, n, r = {},
                                a = this.renderer,
                                h = a.alignedObjects;
                            t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || w(i)) && (this.alignTo = s = i || "renderer", x(h, this), h.push(this), i = void 0)) : (t = this.alignOptions, e = this.alignByTranslate, s = this.alignTo), i = T(i, a[s], a), s = t.align, a = t.verticalAlign, h = (i.x || 0) + (t.x || 0);
                            var l = (i.y || 0) + (t.y || 0);
                            return "right" === s ? o = 1 : "center" === s && (o = 2), o && (h += (i.width - (t.width || 0)) / o), r[e ? "translateX" : "x"] = Math.round(h), "bottom" === a ? n = 1 : "middle" === a && (n = 2), n && (l += (i.height - (t.height || 0)) / n), r[e ? "translateY" : "y"] = Math.round(l), this[this.placed ? "animate" : "attr"](r), this.placed = !0, this.alignAttr = r, this
                        }, i.prototype.alignSetter = function(t) {
                            var e = {
                                left: "start",
                                center: "middle",
                                right: "end"
                            };
                            e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]))
                        }, i.prototype.animate = function(t, e, i) {
                            var s = p(T(e, this.renderer.globalAnimation, !0));
                            return T(o.hidden, o.msHidden, o.webkitHidden, !1) && (s.duration = 0), 0 !== s.duration ? (i && (s.complete = i), d(this, t, s)) : (this.attr(t, void 0, i), A(t, (function(t, e) {
                                s.step && s.step.call(this, t, {
                                    prop: e,
                                    pos: 1
                                })
                            }), this)), this
                        }, i.prototype.applyTextOutline = function(t) {
                            var i, s = this.element; - 1 !== t.indexOf("contrast") && (t = t.replace(/contrast/g, this.renderer.getContrast(s.style.fill))), t = t.split(" ");
                            var o = t[t.length - 1];
                            if ((i = t[0]) && "none" !== i && e.svg) {
                                this.fakeTS = !0, t = [].slice.call(s.getElementsByTagName("tspan")), this.ySetter = this.xSetter, i = i.replace(/(^[\d\.]+)(.*?)$/g, (function(t, e, i) {
                                    return 2 * e + i
                                })), this.removeTextOutline(t);
                                var n = !!s.textContent && /^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(s.textContent),
                                    a = s.firstChild;
                                t.forEach((function(t, e) {
                                    0 === e && (t.setAttribute("x", s.getAttribute("x")), e = s.getAttribute("y"), t.setAttribute("y", e || 0), null === e && s.setAttribute("y", 0)), e = t.cloneNode(!0), u(n && !r ? t : e, {
                                        class: "highcharts-text-outline",
                                        fill: o,
                                        stroke: o,
                                        "stroke-width": i,
                                        "stroke-linejoin": "round"
                                    }), s.insertBefore(e, a)
                                })), n && r && t[0] && (t = t[0].cloneNode(!0), t.textContent = " ", s.insertBefore(t, a))
                            }
                        }, i.prototype.attr = function(t, e, i, s) {
                            var o, n, r, a = this.element,
                                h = this,
                                l = this.symbolCustomAttribs;
                            if ("string" === typeof t && "undefined" !== typeof e) {
                                var c = t;
                                t = {}, t[c] = e
                            }
                            return "string" === typeof t ? h = (this[t + "Getter"] || this._defaultGetter).call(this, t, a) : (A(t, (function(e, i) {
                                n = !1, s || C(this, i), this.symbolName && -1 !== l.indexOf(i) && (o || (this.symbolAttr(t), o = !0), n = !0), !this.rotation || "x" !== i && "y" !== i || (this.doTransform = !0), n || (r = this[i + "Setter"] || this._defaultSetter, r.call(this, e, i, a), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i) && this.updateShadows(i, e, r))
                            }), this), this.afterSetters()), i && i.call(this), h
                        }, i.prototype.clip = function(t) {
                            return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
                        }, i.prototype.crisp = function(t, e) {
                            e = e || t.strokeWidth || 0;
                            var i = Math.round(e) % 2 / 2;
                            return t.x = Math.floor(t.x || this.x || 0) + i, t.y = Math.floor(t.y || this.y || 0) + i, t.width = Math.floor((t.width || this.width || 0) - 2 * i), t.height = Math.floor((t.height || this.height || 0) - 2 * i), m(t.strokeWidth) && (t.strokeWidth = e), t
                        }, i.prototype.complexColor = function(e, i, s) {
                            var o, n, r, a, h, l, c, d, p, u, f, g = this.renderer,
                                x = [];
                            y(this.renderer, "complexColor", {
                                args: arguments
                            }, (function() {
                                if (e.radialGradient ? n = "radialGradient" : e.linearGradient && (n = "linearGradient"), n) {
                                    if (r = e[n], h = g.gradients, l = e.stops, p = s.radialReference, b(r) && (e[n] = r = {
                                            x1: r[0],
                                            y1: r[1],
                                            x2: r[2],
                                            y2: r[3],
                                            gradientUnits: "userSpaceOnUse"
                                        }), "radialGradient" === n && p && !m(r.gradientUnits) && (a = r, r = S(r, g.getRadialAttr(p, a), {
                                            gradientUnits: "userSpaceOnUse"
                                        })), A(r, (function(t, e) {
                                            "id" !== e && x.push(e, t)
                                        })), A(l, (function(t) {
                                            x.push(t)
                                        })), x = x.join(","), h[x]) u = h[x].attr("id");
                                    else {
                                        r.id = u = O();
                                        var v = h[x] = g.createElement(n).attr(r).add(g.defs);
                                        v.radAttr = a, v.stops = [], l.forEach((function(e) {
                                            0 === e[1].indexOf("rgba") ? (o = t.parse(e[1]), c = o.get("rgb"), d = o.get("a")) : (c = e[1], d = 1), e = g.createElement("stop").attr({
                                                offset: e[0],
                                                "stop-color": c,
                                                "stop-opacity": d
                                            }).add(v), v.stops.push(e)
                                        }))
                                    }
                                    f = "url(" + g.url + "#" + u + ")", s.setAttribute(i, f), s.gradient = x, e.toString = function() {
                                        return f
                                    }
                                }
                            }))
                        }, i.prototype.css = function(t) {
                            var e = this.styles,
                                i = {},
                                s = this.element,
                                o = "",
                                n = !e,
                                r = ["textOutline", "textOverflow", "width"];
                            if (t && t.color && (t.fill = t.color), e && A(t, (function(t, s) {
                                    e && e[s] !== t && (i[s] = t, n = !0)
                                })), n) {
                                if (e && (t = v(e, i)), t)
                                    if (null === t.width || "auto" === t.width) delete this.textWidth;
                                    else if ("text" === s.nodeName.toLowerCase() && t.width) var a = this.textWidth = P(t.width);
                                if (this.styles = t, a && !h && this.renderer.forExport && delete t.width, s.namespaceURI === this.SVG_NS) {
                                    var l = function(t, e) {
                                        return "-" + e.toLowerCase()
                                    };
                                    A(t, (function(t, e) {
                                        -1 === r.indexOf(e) && (o += e.replace(/([A-Z])/g, l) + ":" + t + ";")
                                    })), o && u(s, "style", o)
                                } else g(s, t);
                                this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t && t.textOutline && this.applyTextOutline(t.textOutline))
                            }
                            return this
                        }, i.prototype.dashstyleSetter = function(t) {
                            var e = this["stroke-width"];
                            if ("inherit" === e && (e = 1), t = t && t.toLowerCase()) {
                                var i = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                                for (t = i.length; t--;) i[t] = "" + P(i[t]) * T(e, NaN);
                                t = i.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
                            }
                        }, i.prototype.destroy = function() {
                            var t = this,
                                e = t.element || {},
                                i = t.renderer,
                                s = i.isSVG && "SPAN" === e.nodeName && t.parentGroup || void 0,
                                o = e.ownerSVGElement;
                            if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, C(t), t.clipPath && o) {
                                var n = t.clipPath;
                                [].forEach.call(o.querySelectorAll("[clip-path],[CLIP-PATH]"), (function(t) {
                                    -1 < t.getAttribute("clip-path").indexOf(n.element.id) && t.removeAttribute("clip-path")
                                })), t.clipPath = n.destroy()
                            }
                            if (t.stops) {
                                for (o = 0; o < t.stops.length; o++) t.stops[o].destroy();
                                t.stops.length = 0, t.stops = void 0
                            }
                            for (t.safeRemoveChild(e), i.styledMode || t.destroyShadows(); s && s.div && 0 === s.div.childNodes.length;) e = s.parentGroup, t.safeRemoveChild(s.div), delete s.div, s = e;
                            t.alignTo && x(i.alignedObjects, t), A(t, (function(e, i) {
                                t[i] && t[i].parentGroup === t && t[i].destroy && t[i].destroy(), delete t[i]
                            }))
                        }, i.prototype.destroyShadows = function() {
                            (this.shadows || []).forEach((function(t) {
                                this.safeRemoveChild(t)
                            }), this), this.shadows = void 0
                        }, i.prototype.destroyTextPath = function(t, e) {
                            var i = t.getElementsByTagName("text")[0];
                            if (i) {
                                if (i.removeAttribute("dx"), i.removeAttribute("dy"), e.element.setAttribute("id", ""), this.textPathWrapper && i.getElementsByTagName("textPath").length) {
                                    for (t = this.textPathWrapper.element.childNodes; t.length;) i.appendChild(t[0]);
                                    i.removeChild(this.textPathWrapper.element)
                                }
                            } else(t.getAttribute("dx") || t.getAttribute("dy")) && (t.removeAttribute("dx"), t.removeAttribute("dy"));
                            this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy())
                        }, i.prototype.dSetter = function(t, e, i) {
                            b(t) && ("string" === typeof t[0] && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce((function(t, e, i) {
                                return e && e.join ? (i ? t + " " : "") + e.join(" ") : (e || "").toString()
                            }), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t)
                        }, i.prototype.fadeOut = function(t) {
                            var e = this;
                            e.animate({
                                opacity: 0
                            }, {
                                duration: T(t, 150),
                                complete: function() {
                                    e.attr({
                                        y: -9999
                                    }).hide()
                                }
                            })
                        }, i.prototype.fillSetter = function(t, e, i) {
                            "string" === typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i)
                        }, i.prototype.getBBox = function(t, e) {
                            var o, n = this.renderer,
                                r = this.element,
                                a = this.styles,
                                h = this.textStr,
                                l = n.cache,
                                c = n.cacheKeys,
                                d = r.namespaceURI === this.SVG_NS;
                            e = T(e, this.rotation, 0);
                            var p = n.styledMode ? r && i.prototype.getStyle.call(r, "font-size") : a && a.fontSize;
                            if (m(h)) {
                                var u = h.toString(); - 1 === u.indexOf("<") && (u = u.replace(/[0-9]/g, "0")), u += ["", e, p, this.textWidth, a && a.textOverflow, a && a.fontWeight].join()
                            }
                            if (u && !t && (o = l[u]), !o) {
                                if (d || n.forExport) {
                                    try {
                                        var f = this.fakeTS && function(t) {
                                            [].forEach.call(r.querySelectorAll(".highcharts-text-outline"), (function(e) {
                                                e.style.display = t
                                            }))
                                        };
                                        k(f) && f("none"), o = r.getBBox ? v({}, r.getBBox()) : {
                                            width: r.offsetWidth,
                                            height: r.offsetHeight
                                        }, k(f) && f("")
                                    } catch (g) {}(!o || 0 > o.width) && (o = {
                                        width: 0,
                                        height: 0
                                    })
                                } else o = this.htmlGetBBox();
                                if (n.isSVG && (t = o.width, n = o.height, d && (o.height = n = {
                                        "11px,17": 14,
                                        "13px,20": 16
                                    }[a && a.fontSize + "," + Math.round(n)] || n), e && (a = e * s, o.width = Math.abs(n * Math.sin(a)) + Math.abs(t * Math.cos(a)), o.height = Math.abs(n * Math.cos(a)) + Math.abs(t * Math.sin(a)))), u && 0 < o.height) {
                                    for (; 250 < c.length;) delete l[c.shift()];
                                    l[u] || c.push(u), l[u] = o
                                }
                            }
                            return o
                        }, i.prototype.getStyle = function(t) {
                            return c.getComputedStyle(this.element || this, "").getPropertyValue(t)
                        }, i.prototype.hasClass = function(t) {
                            return -1 !== ("" + this.attr("class")).split(" ").indexOf(t)
                        }, i.prototype.hide = function(t) {
                            return t ? this.attr({
                                y: -9999
                            }) : this.attr({
                                visibility: "hidden"
                            }), this
                        }, i.prototype.htmlGetBBox = function() {
                            return {
                                height: 0,
                                width: 0,
                                x: 0,
                                y: 0
                            }
                        }, i.prototype.init = function(t, e) {
                            this.element = "span" === e ? f(e) : o.createElementNS(this.SVG_NS, e), this.renderer = t, y(this, "afterInit")
                        }, i.prototype.invert = function(t) {
                            return this.inverted = t, this.updateTransform(), this
                        }, i.prototype.on = function(t, e) {
                            var i, s, o, r = this.element;
                            return n && "click" === t ? (r.ontouchstart = function(t) {
                                i = t.touches[0].clientX, s = t.touches[0].clientY
                            }, r.ontouchend = function(t) {
                                i && 4 <= Math.sqrt(Math.pow(i - t.changedTouches[0].clientX, 2) + Math.pow(s - t.changedTouches[0].clientY, 2)) || e.call(r, t), o = !0, t.preventDefault()
                            }, r.onclick = function(t) {
                                o || e.call(r, t)
                            }) : r["on" + t] = e, this
                        }, i.prototype.opacitySetter = function(t, e, i) {
                            this[e] = t, i.setAttribute(e, t)
                        }, i.prototype.removeClass = function(t) {
                            return this.attr("class", ("" + this.attr("class")).replace(w(t) ? new RegExp("(^| )" + t + "( |$)") : t, " ").replace(/ +/g, " ").trim())
                        }, i.prototype.removeTextOutline = function(t) {
                            for (var e, i = t.length; i--;) e = t[i], "highcharts-text-outline" === e.getAttribute("class") && x(t, this.element.removeChild(e))
                        }, i.prototype.safeRemoveChild = function(t) {
                            var e = t.parentNode;
                            e && e.removeChild(t)
                        }, i.prototype.setRadialReference = function(t) {
                            var e = this.element.gradient && this.renderer.gradients[this.element.gradient];
                            return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
                        }, i.prototype.setTextPath = function(t, e) {
                            var i = this.element,
                                s = {
                                    textAnchor: "text-anchor"
                                },
                                o = !1,
                                n = this.textPathWrapper,
                                r = !n;
                            e = S(!0, {
                                enabled: !0,
                                attributes: {
                                    dy: -5,
                                    startOffset: "50%",
                                    textAnchor: "middle"
                                }
                            }, e);
                            var h = e.attributes;
                            if (t && e && e.enabled) {
                                n && null === n.element.parentNode ? (r = !0, n = n.destroy()) : n && this.removeTextOutline.call(n.parentGroup, [].slice.call(i.getElementsByTagName("tspan"))), this.options && this.options.padding && (h.dx = -this.options.padding), n || (this.textPathWrapper = n = this.renderer.createElement("textPath"), o = !0);
                                var l = n.element;
                                if ((e = t.element.getAttribute("id")) || t.element.setAttribute("id", e = O()), r)
                                    for (t = i.getElementsByTagName("tspan"); t.length;) t[0].setAttribute("y", 0), M(h.dx) && t[0].setAttribute("x", -h.dx), l.appendChild(t[0]);
                                o && n && n.add({
                                    element: this.text ? this.text.element : i
                                }), l.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + e), m(h.dy) && (l.parentNode.setAttribute("dy", h.dy), delete h.dy), m(h.dx) && (l.parentNode.setAttribute("dx", h.dx), delete h.dx), A(h, (function(t, e) {
                                    l.setAttribute(s[e] || e, t)
                                })), i.removeAttribute("transform"), this.removeTextOutline.call(n, [].slice.call(i.getElementsByTagName("tspan"))), this.text && !this.renderer.styledMode && this.attr({
                                    fill: "none",
                                    "stroke-width": 0
                                }), this.applyTextOutline = this.updateTransform = a
                            } else n && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(i, t), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));
                            return this
                        }, i.prototype.shadow = function(t, e, i) {
                            var s, o = [],
                                n = this.element,
                                r = !1,
                                a = this.oldShadowOptions,
                                h = {
                                    color: "#000000",
                                    offsetX: 1,
                                    offsetY: 1,
                                    opacity: .15,
                                    width: 3
                                };
                            if (!0 === t ? s = h : "object" === typeof t && (s = v(h, t)), s && (s && a && A(s, (function(t, e) {
                                    t !== a[e] && (r = !0)
                                })), r && this.destroyShadows(), this.oldShadowOptions = s), s) {
                                if (!this.shadows) {
                                    var l = s.opacity / s.width,
                                        c = this.parentInverted ? "translate(-1,-1)" : "translate(" + s.offsetX + ", " + s.offsetY + ")";
                                    for (h = 1; h <= s.width; h++) {
                                        var d = n.cloneNode(!1),
                                            p = 2 * s.width + 1 - 2 * h;
                                        u(d, {
                                            stroke: t.color || "#000000",
                                            "stroke-opacity": l * h,
                                            "stroke-width": p,
                                            transform: c,
                                            fill: "none"
                                        }), d.setAttribute("class", (d.getAttribute("class") || "") + " highcharts-shadow"), i && (u(d, "height", Math.max(u(d, "height") - p, 0)), d.cutHeight = p), e ? e.element.appendChild(d) : n.parentNode && n.parentNode.insertBefore(d, n), o.push(d)
                                    }
                                    this.shadows = o
                                }
                            } else this.destroyShadows();
                            return this
                        }, i.prototype.show = function(t) {
                            return this.attr({
                                visibility: t ? "inherit" : "visible"
                            })
                        }, i.prototype.strokeSetter = function(t, e, s) {
                            this[e] = t, this.stroke && this["stroke-width"] ? (i.prototype.fillSetter.call(this, this.stroke, "stroke", s), s.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === t && this.hasStroke ? (s.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (s.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0)
                        }, i.prototype.strokeWidth = function() {
                            if (!this.renderer.styledMode) return this["stroke-width"] || 0;
                            var t = this.getStyle("stroke-width"),
                                e = 0;
                            if (t.indexOf("px") === t.length - 2) e = P(t);
                            else if ("" !== t) {
                                var i = o.createElementNS(l, "rect");
                                u(i, {
                                    width: t,
                                    "stroke-width": 0
                                }), this.element.parentNode.appendChild(i), e = i.getBBox().width, i.parentNode.removeChild(i)
                            }
                            return e
                        }, i.prototype.symbolAttr = function(t) {
                            var e = this;
                            "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach((function(i) {
                                e[i] = T(t[i], e[i])
                            })), e.attr({
                                d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
                            })
                        }, i.prototype.textSetter = function(t) {
                            t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this))
                        }, i.prototype.titleSetter = function(t) {
                            var e = this.element.getElementsByTagName("title")[0];
                            e || (e = o.createElementNS(this.SVG_NS, "title"), this.element.appendChild(e)), e.firstChild && e.removeChild(e.firstChild), e.appendChild(o.createTextNode(String(T(t, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")))
                        }, i.prototype.toFront = function() {
                            var t = this.element;
                            return t.parentNode.appendChild(t), this
                        }, i.prototype.translate = function(t, e) {
                            return this.attr({
                                translateX: t,
                                translateY: e
                            })
                        }, i.prototype.updateShadows = function(t, e, i) {
                            var s = this.shadows;
                            if (s)
                                for (var o = s.length; o--;) i.call(s[o], "height" === t ? Math.max(e - (s[o].cutHeight || 0), 0) : "d" === t ? this.d : e, t, s[o])
                        }, i.prototype.updateTransform = function() {
                            var t = this.translateX || 0,
                                e = this.translateY || 0,
                                i = this.scaleX,
                                s = this.scaleY,
                                o = this.inverted,
                                n = this.rotation,
                                r = this.matrix,
                                a = this.element;
                            o && (t += this.width, e += this.height), t = ["translate(" + t + "," + e + ")"], m(r) && t.push("matrix(" + r.join(",") + ")"), o ? t.push("rotate(90) scale(-1,1)") : n && t.push("rotate(" + n + " " + T(this.rotationOriginX, a.getAttribute("x"), 0) + " " + T(this.rotationOriginY, a.getAttribute("y") || 0) + ")"), (m(i) || m(s)) && t.push("scale(" + T(i, 1) + " " + T(s, 1) + ")"), t.length && a.setAttribute("transform", t.join(" "))
                        }, i.prototype.visibilitySetter = function(t, e, i) {
                            "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t
                        }, i.prototype.xGetter = function(t) {
                            return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")), this._defaultGetter(t)
                        }, i.prototype.zIndexSetter = function(t, e) {
                            var i = this.renderer,
                                s = this.parentGroup,
                                o = (s || i).element || i.box,
                                n = this.element,
                                r = !1;
                            i = o === i.box;
                            var a, h = this.added;
                            if (m(t) ? (n.setAttribute("data-z-index", t), t = +t, this[e] === t && (h = !1)) : m(this[e]) && n.removeAttribute("data-z-index"), this[e] = t, h) {
                                for ((t = this.zIndex) && s && (s.handleZ = !0), e = o.childNodes, a = e.length - 1; 0 <= a && !r; a--) {
                                    s = e[a], h = s.getAttribute("data-z-index");
                                    var l = !m(h);
                                    s !== n && (0 > t && l && !i && !a ? (o.insertBefore(n, e[a]), r = !0) : (P(h) <= t || l && (!m(t) || 0 <= t)) && (o.insertBefore(n, e[a + 1] || null), r = !0))
                                }
                                r || (o.insertBefore(n, e[i ? 3 : 0] || null), r = !0)
                            }
                            return r
                        }, i
                    }(), i.prototype["stroke-widthSetter"] = i.prototype.strokeSetter, i.prototype.yGetter = i.prototype.xGetter, i.prototype.matrixSetter = i.prototype.rotationOriginXSetter = i.prototype.rotationOriginYSetter = i.prototype.rotationSetter = i.prototype.scaleXSetter = i.prototype.scaleYSetter = i.prototype.translateXSetter = i.prototype.translateYSetter = i.prototype.verticalAlignSetter = function(t, e) {
                        this[e] = t, this.doTransform = !0
                    }, e.SVGElement = i, e.SVGElement
                })), e(i, "parts/SVGLabel.js", [i["parts/SVGElement.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = this && this.__extends || function() {
                            var t = function(e, i) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                }, t(e, i)
                            };
                            return function(e, i) {
                                function s() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s)
                            }
                        }(),
                        s = e.defined,
                        o = e.extend,
                        n = e.isNumber,
                        r = e.merge,
                        a = e.removeEvent;
                    return function(e) {
                        function h(t, i, s, o, n, r, a, l, c, d) {
                            var p = e.call(this) || this;
                            if (p.init(t, "g"), p.textStr = i, p.x = s, p.y = o, p.anchorX = r, p.anchorY = a, p.baseline = c, p.className = d, "button" !== d && p.addClass("highcharts-label"), d && p.addClass("highcharts-" + d), p.text = t.text("", 0, 0, l).attr({
                                    zIndex: 1
                                }), "string" === typeof n) {
                                var u = /^url\((.*?)\)$/.test(n);
                                (p.renderer.symbols[n] || u) && (p.symbolKey = n)
                            }
                            return p.bBox = h.emptyBBox, p.padding = 3, p.paddingLeft = 0, p.baselineOffset = 0, p.needsBox = t.styledMode || u, p.deferredAttr = {}, p.alignFactor = 0, p
                        }
                        return i(h, e), h.prototype.alignSetter = function(t) {
                            t = {
                                left: 0,
                                center: .5,
                                right: 1
                            }[t], t !== this.alignFactor && (this.alignFactor = t, this.bBox && n(this.xSetting) && this.attr({
                                x: this.xSetting
                            }))
                        }, h.prototype.anchorXSetter = function(t, e) {
                            this.anchorX = t, this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting)
                        }, h.prototype.anchorYSetter = function(t, e) {
                            this.anchorY = t, this.boxAttr(e, t - this.ySetting)
                        }, h.prototype.boxAttr = function(t, e) {
                            this.box ? this.box.attr(t, e) : this.deferredAttr[t] = e
                        }, h.prototype.css = function(e) {
                            if (e) {
                                var i = {};
                                e = r(e), h.textProps.forEach((function(t) {
                                    "undefined" !== typeof e[t] && (i[t] = e[t], delete e[t])
                                })), this.text.css(i);
                                var s = "fontSize" in i || "fontWeight" in i;
                                ("width" in i || s) && (this.updateBoxSize(), s && this.updateTextPadding())
                            }
                            return t.prototype.css.call(this, e)
                        }, h.prototype.destroy = function() {
                            a(this.element, "mouseenter"), a(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), t.prototype.destroy.call(this)
                        }, h.prototype.fillSetter = function(t, e) {
                            t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t)
                        }, h.prototype.getBBox = function() {
                            var t = this.bBox,
                                e = this.padding;
                            return {
                                width: t.width + 2 * e,
                                height: t.height + 2 * e,
                                x: t.x - e,
                                y: t.y - e
                            }
                        }, h.prototype.getCrispAdjust = function() {
                            return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2
                        }, h.prototype.heightSetter = function(t) {
                            this.heightSetting = t
                        }, h.prototype.on = function(e, i) {
                            var s = this,
                                o = s.text,
                                n = o && "SPAN" === o.element.tagName ? o : void 0;
                            if (n) {
                                var r = function(t) {
                                    ("mouseenter" === e || "mouseleave" === e) && t.relatedTarget instanceof Element && (s.element.contains(t.relatedTarget) || n.element.contains(t.relatedTarget)) || i.call(s.element, t)
                                };
                                n.on(e, r)
                            }
                            return t.prototype.on.call(s, e, r || i), s
                        }, h.prototype.onAdd = function() {
                            var t = this.textStr;
                            this.text.add(this), this.attr({
                                text: s(t) ? t : "",
                                x: this.x,
                                y: this.y
                            }), this.box && s(this.anchorX) && this.attr({
                                anchorX: this.anchorX,
                                anchorY: this.anchorY
                            })
                        }, h.prototype.paddingSetter = function(t) {
                            s(t) && t !== this.padding && (this.padding = t, this.updateTextPadding())
                        }, h.prototype.paddingLeftSetter = function(t) {
                            s(t) && t !== this.paddingLeft && (this.paddingLeft = t, this.updateTextPadding())
                        }, h.prototype.rSetter = function(t, e) {
                            this.boxAttr(e, t)
                        }, h.prototype.shadow = function(t) {
                            return t && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(t)), this
                        }, h.prototype.strokeSetter = function(t, e) {
                            this.stroke = t, this.boxAttr(e, t)
                        }, h.prototype["stroke-widthSetter"] = function(t, e) {
                            t && (this.needsBox = !0), this["stroke-width"] = t, this.boxAttr(e, t)
                        }, h.prototype["text-alignSetter"] = function(t) {
                            this.textAlign = t
                        }, h.prototype.textSetter = function(t) {
                            "undefined" !== typeof t && this.text.attr({
                                text: t
                            }), this.updateBoxSize(), this.updateTextPadding()
                        }, h.prototype.updateBoxSize = function() {
                            var t = this.text.element.style,
                                e = {},
                                i = this.padding,
                                r = this.paddingLeft,
                                a = n(this.widthSetting) && n(this.heightSetting) && !this.textAlign || !s(this.text.textStr) ? h.emptyBBox : this.text.getBBox();
                            this.width = (this.widthSetting || a.width || 0) + 2 * i + r, this.height = (this.heightSetting || a.height || 0) + 2 * i, this.baselineOffset = i + Math.min(this.renderer.fontMetrics(t && t.fontSize, this.text).b, a.height || 1 / 0), this.needsBox && (this.box || (t = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), t.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), t.add(this), t = this.getCrispAdjust(), e.x = t, e.y = (this.baseline ? -this.baselineOffset : 0) + t), e.width = Math.round(this.width), e.height = Math.round(this.height), this.box.attr(o(e, this.deferredAttr)), this.deferredAttr = {}), this.bBox = a
                        }, h.prototype.updateTextPadding = function() {
                            var t = this.text,
                                e = this.baseline ? 0 : this.baselineOffset,
                                i = this.paddingLeft + this.padding;
                            s(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (i += {
                                center: .5,
                                right: 1
                            }[this.textAlign] * (this.widthSetting - this.bBox.width)), i === t.x && e === t.y || (t.attr("x", i), t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0), this.updateBoxSize()), "undefined" !== typeof e && t.attr("y", e)), t.x = i, t.y = e
                        }, h.prototype.widthSetter = function(t) {
                            this.widthSetting = n(t) ? t : void 0
                        }, h.prototype.xSetter = function(t) {
                            this.x = t, this.alignFactor && (t -= this.alignFactor * ((this.widthSetting || this.bBox.width) + 2 * this.padding), this["forceAnimate:x"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting)
                        }, h.prototype.ySetter = function(t) {
                            this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting)
                        }, h.emptyBBox = {
                            width: 0,
                            height: 0,
                            x: 0,
                            y: 0
                        }, h.textProps = "color cursor direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" "), h
                    }(t)
                })), e(i, "parts/SVGRenderer.js", [i["parts/Color.js"], i["parts/Globals.js"], i["parts/SVGElement.js"], i["parts/SVGLabel.js"], i["parts/Utilities.js"]], (function(t, e, i, s, o) {
                    var n = o.addEvent,
                        r = o.attr,
                        a = o.createElement,
                        h = o.css,
                        l = o.defined,
                        c = o.destroyObjectProperties,
                        d = o.extend,
                        p = o.isArray,
                        u = o.isNumber,
                        f = o.isObject,
                        g = o.isString,
                        m = o.merge,
                        x = o.objectEach,
                        v = o.pick,
                        y = o.pInt,
                        b = o.splat,
                        k = o.uniqueKey,
                        M = e.charts,
                        w = e.deg2rad,
                        S = e.doc,
                        A = e.isFirefox,
                        T = e.isMS,
                        P = e.isWebKit;
                    o = e.noop;
                    var C = e.svg,
                        O = e.SVG_NS,
                        E = e.symbolSizes,
                        L = e.win,
                        D = function() {
                            function e(t, e, i, s, o, n, r) {
                                this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0, this.init(t, e, i, s, o, n, r)
                            }
                            return e.prototype.init = function(t, e, i, s, o, a, l) {
                                var c, d = this.createElement("svg").attr({
                                    version: "1.1",
                                    class: "highcharts-root"
                                });
                                l || d.css(this.getStyle(s)), s = d.element, t.appendChild(s), r(t, "dir", "ltr"), -1 === t.innerHTML.indexOf("xmlns") && r(s, "xmlns", this.SVG_NS), this.isSVG = !0, this.box = s, this.boxWrapper = d, this.alignedObjects = [], this.url = (A || P) && S.getElementsByTagName("base").length ? L.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(S.createTextNode("Created with Highcharts 8.1.1")), this.defs = this.createElement("defs").add(), this.allowHTML = a, this.forExport = o, this.styledMode = l, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), A && t.getBoundingClientRect && (e = function() {
                                    h(t, {
                                        left: 0,
                                        top: 0
                                    }), c = t.getBoundingClientRect(), h(t, {
                                        left: Math.ceil(c.left) - c.left + "px",
                                        top: Math.ceil(c.top) - c.top + "px"
                                    })
                                }, e(), this.unSubPixelFix = n(L, "resize", e))
                            }, e.prototype.definition = function(t) {
                                function e(t, s) {
                                    var o;
                                    return b(t).forEach((function(t) {
                                        var n = i.createElement(t.tagName),
                                            r = {};
                                        x(t, (function(t, e) {
                                            "tagName" !== e && "children" !== e && "textContent" !== e && (r[e] = t)
                                        })), n.attr(r), n.add(s || i.defs), t.textContent && n.element.appendChild(S.createTextNode(t.textContent)), e(t.children || [], n), o = n
                                    })), o
                                }
                                var i = this;
                                return e(t)
                            }, e.prototype.getStyle = function(t) {
                                return this.style = d({
                                    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                                    fontSize: "12px"
                                }, t)
                            }, e.prototype.setStyle = function(t) {
                                this.boxWrapper.css(this.getStyle(t))
                            }, e.prototype.isHidden = function() {
                                return !this.boxWrapper.getBBox().width
                            }, e.prototype.destroy = function() {
                                var t = this.defs;
                                return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), c(this.gradients || {}), this.gradients = null, t && (this.defs = t.destroy()), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null
                            }, e.prototype.createElement = function(t) {
                                var e = new this.Element;
                                return e.init(this, t), e
                            }, e.prototype.getRadialAttr = function(t, e) {
                                return {
                                    cx: t[0] - t[2] / 2 + e.cx * t[2],
                                    cy: t[1] - t[2] / 2 + e.cy * t[2],
                                    r: e.r * t[2]
                                }
                            }, e.prototype.truncate = function(t, e, i, s, o, n, r) {
                                var a, h, l = this,
                                    c = t.rotation,
                                    d = s ? 1 : 0,
                                    p = (i || s).length,
                                    u = p,
                                    f = [],
                                    g = function(t) {
                                        e.firstChild && e.removeChild(e.firstChild), t && e.appendChild(S.createTextNode(t))
                                    },
                                    m = function(n, a) {
                                        if (a = a || n, "undefined" === typeof f[a])
                                            if (e.getSubStringLength) try {
                                                f[a] = o + e.getSubStringLength(0, s ? a + 1 : a)
                                            } catch (h) {} else l.getSpanWidth && (g(r(i || s, n)), f[a] = o + l.getSpanWidth(t, e));
                                        return f[a]
                                    };
                                t.rotation = 0;
                                var x = m(e.textContent.length);
                                if (h = o + x > n) {
                                    for (; d <= p;) u = Math.ceil((d + p) / 2), s && (a = r(s, u)), x = m(u, a && a.length - 1), d === p ? d = p + 1 : x > n ? p = u - 1 : d = u;
                                    0 === p ? g("") : i && p === i.length - 1 || g(a || r(i || s, u))
                                }
                                return s && s.splice(0, u), t.actualWidth = x, t.rotation = c, h
                            }, e.prototype.buildText = function(t) {
                                var e, i, s = t.element,
                                    o = this,
                                    n = o.forExport,
                                    a = v(t.textStr, "").toString(),
                                    l = -1 !== a.indexOf("<"),
                                    c = s.childNodes,
                                    d = r(s, "x"),
                                    p = t.styles,
                                    u = t.textWidth,
                                    f = p && p.lineHeight,
                                    m = p && p.textOutline,
                                    b = p && "ellipsis" === p.textOverflow,
                                    k = p && "nowrap" === p.whiteSpace,
                                    M = p && p.fontSize,
                                    w = c.length;
                                p = u && !t.added && this.box;
                                var A = function(t) {
                                        var e;
                                        return o.styledMode || (e = /(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : M || o.style.fontSize || 12), f ? y(f) : o.fontMetrics(e, t.getAttribute("style") ? t : s).h
                                    },
                                    T = function(t, e) {
                                        return x(o.escapes, (function(i, s) {
                                            e && -1 !== e.indexOf(i) || (t = t.toString().replace(new RegExp(i, "g"), s))
                                        })), t
                                    },
                                    P = function(t, e) {
                                        var i = t.indexOf("<");
                                        if (t = t.substring(i, t.indexOf(">") - i), i = t.indexOf(e + "="), -1 !== i && (i = i + e.length + 1, e = t.charAt(i), '"' === e || "'" === e)) return t = t.substring(i + 1), t.substring(0, t.indexOf(e))
                                    },
                                    E = /<br.*?>/g,
                                    L = [a, b, k, f, m, M, u].join();
                                if (L !== t.textCache) {
                                    for (t.textCache = L; w--;) s.removeChild(c[w]);
                                    l || m || b || u || -1 !== a.indexOf(" ") && (!k || E.test(a)) ? (p && p.appendChild(s), l ? (a = o.styledMode ? a.replace(/<(b|strong)>/g, '<span class="highcharts-strong">').replace(/<(i|em)>/g, '<span class="highcharts-emphasized">') : a.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">'), a = a.replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(E)) : a = [a], a = a.filter((function(t) {
                                        return "" !== t
                                    })), a.forEach((function(a, l) {
                                        var c = 0,
                                            p = 0;
                                        a = a.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                                        var f = a.split("|||");
                                        f.forEach((function(a) {
                                            if ("" !== a || 1 === f.length) {
                                                var g, m, x = {},
                                                    v = S.createElementNS(o.SVG_NS, "tspan");
                                                if ((g = P(a, "class")) && r(v, "class", g), (g = P(a, "style")) && (g = g.replace(/(;| |^)color([ :])/, "$1fill$2"), r(v, "style", g)), (m = P(a, "href")) && !n && -1 === m.split(":")[0].toLowerCase().indexOf("javascript")) {
                                                    var y = S.createElementNS(o.SVG_NS, "a");
                                                    r(y, "href", m), r(v, "class", "highcharts-anchor"), y.appendChild(v), o.styledMode || h(v, {
                                                        cursor: "pointer"
                                                    })
                                                }
                                                if (a = T(a.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " "), " " !== a) {
                                                    if (v.appendChild(S.createTextNode(a)), c ? x.dx = 0 : l && null !== d && (x.x = d), r(v, x), s.appendChild(y || v), !c && i && (!C && n && h(v, {
                                                            display: "block"
                                                        }), r(v, "dy", A(v))), u) {
                                                        var w = a.replace(/([^\^])-/g, "$1- ").split(" ");
                                                        if (x = !k && (1 < f.length || l || 1 < w.length), y = 0, m = A(v), b) e = o.truncate(t, v, a, void 0, 0, Math.max(0, u - parseInt(M || 12, 10)), (function(t, e) {
                                                            return t.substring(0, e) + "…"
                                                        }));
                                                        else if (x)
                                                            for (; w.length;) w.length && !k && 0 < y && (v = S.createElementNS(O, "tspan"), r(v, {
                                                                dy: m,
                                                                x: d
                                                            }), g && r(v, "style", g), v.appendChild(S.createTextNode(w.join(" ").replace(/- /g, "-"))), s.appendChild(v)), o.truncate(t, v, null, w, 0 === y ? p : 0, u, (function(t, e) {
                                                                return w.slice(0, e).join(" ").replace(/- /g, "-")
                                                            })), p = t.actualWidth, y++
                                                    }
                                                    c++
                                                }
                                            }
                                        })), i = i || s.childNodes.length
                                    })), b && e && t.attr("title", T(t.textStr || "", ["&lt;", "&gt;"])), p && p.removeChild(s), g(m) && t.applyTextOutline && t.applyTextOutline(m)) : s.appendChild(S.createTextNode(T(a)))
                                }
                            }, e.prototype.getContrast = function(e) {
                                return e = t.parse(e).rgba, e[0] *= 1, e[1] *= 1.2, e[2] *= .5, 459 < e[0] + e[1] + e[2] ? "#000000" : "#FFFFFF"
                            }, e.prototype.button = function(t, e, i, s, o, r, a, h, l, c) {
                                var p = this.label(t, e, i, l, void 0, void 0, c, void 0, "button"),
                                    u = 0,
                                    f = this.styledMode;
                                if (t = o && o.style || {}, o && o.style && delete o.style, p.attr(m({
                                        padding: 8,
                                        r: 2
                                    }, o)), !f) {
                                    o = m({
                                        fill: "#f7f7f7",
                                        stroke: "#cccccc",
                                        "stroke-width": 1,
                                        style: {
                                            color: "#333333",
                                            cursor: "pointer",
                                            fontWeight: "normal"
                                        }
                                    }, {
                                        style: t
                                    }, o);
                                    var g = o.style;
                                    delete o.style, r = m(o, {
                                        fill: "#e6e6e6"
                                    }, r);
                                    var x = r.style;
                                    delete r.style, a = m(o, {
                                        fill: "#e6ebf5",
                                        style: {
                                            color: "#000000",
                                            fontWeight: "bold"
                                        }
                                    }, a);
                                    var v = a.style;
                                    delete a.style, h = m(o, {
                                        style: {
                                            color: "#cccccc"
                                        }
                                    }, h);
                                    var y = h.style;
                                    delete h.style
                                }
                                return n(p.element, T ? "mouseover" : "mouseenter", (function() {
                                    3 !== u && p.setState(1)
                                })), n(p.element, T ? "mouseout" : "mouseleave", (function() {
                                    3 !== u && p.setState(u)
                                })), p.setState = function(t) {
                                    1 !== t && (p.state = u = t), p.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t || 0]), f || p.attr([o, r, a, h][t || 0]).css([g, x, v, y][t || 0])
                                }, f || p.attr(o).css(d({
                                    cursor: "default"
                                }, g)), p.on("click", (function(t) {
                                    3 !== u && s.call(p, t)
                                }))
                            }, e.prototype.crispLine = function(t, e, i) {
                                void 0 === i && (i = "round");
                                var s = t[0],
                                    o = t[1];
                                return s[1] === o[1] && (s[1] = o[1] = Math[i](s[1]) - e % 2 / 2), s[2] === o[2] && (s[2] = o[2] = Math[i](s[2]) + e % 2 / 2), t
                            }, e.prototype.path = function(t) {
                                var e = this.styledMode ? {} : {
                                    fill: "none"
                                };
                                return p(t) ? e.d = t : f(t) && d(e, t), this.createElement("path").attr(e)
                            }, e.prototype.circle = function(t, e, i) {
                                return t = f(t) ? t : "undefined" === typeof t ? {} : {
                                    x: t,
                                    y: e,
                                    r: i
                                }, e = this.createElement("circle"), e.xSetter = e.ySetter = function(t, e, i) {
                                    i.setAttribute("c" + e, t)
                                }, e.attr(t)
                            }, e.prototype.arc = function(t, e, i, s, o, n) {
                                return f(t) ? (s = t, e = s.y, i = s.r, t = s.x) : s = {
                                    innerR: s,
                                    start: o,
                                    end: n
                                }, t = this.symbol("arc", t, e, i, i, s), t.r = i, t
                            }, e.prototype.rect = function(t, e, i, s, o, n) {
                                o = f(t) ? t.r : o;
                                var a = this.createElement("rect");
                                return t = f(t) ? t : "undefined" === typeof t ? {} : {
                                    x: t,
                                    y: e,
                                    width: Math.max(i, 0),
                                    height: Math.max(s, 0)
                                }, this.styledMode || ("undefined" !== typeof n && (t.strokeWidth = n, t = a.crisp(t)), t.fill = "none"), o && (t.r = o), a.rSetter = function(t, e, i) {
                                    a.r = t, r(i, {
                                        rx: t,
                                        ry: t
                                    })
                                }, a.rGetter = function() {
                                    return a.r
                                }, a.attr(t)
                            }, e.prototype.setSize = function(t, e, i) {
                                var s = this.alignedObjects,
                                    o = s.length;
                                for (this.width = t, this.height = e, this.boxWrapper.animate({
                                        width: t,
                                        height: e
                                    }, {
                                        step: function() {
                                            this.attr({
                                                viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                                            })
                                        },
                                        duration: v(i, !0) ? void 0 : 0
                                    }); o--;) s[o].align()
                            }, e.prototype.g = function(t) {
                                var e = this.createElement("g");
                                return t ? e.attr({
                                    class: "highcharts-" + t
                                }) : e
                            }, e.prototype.image = function(t, e, i, s, o, r) {
                                var a = {
                                        preserveAspectRatio: "none"
                                    },
                                    h = function(t, e) {
                                        t.setAttributeNS ? t.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : t.setAttribute("hc-svg-href", e)
                                    },
                                    l = function(e) {
                                        h(c.element, t), r.call(c, e)
                                    };
                                1 < arguments.length && d(a, {
                                    x: e,
                                    y: i,
                                    width: s,
                                    height: o
                                });
                                var c = this.createElement("image").attr(a);
                                return r ? (h(c.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), a = new L.Image, n(a, "load", l), a.src = t, a.complete && l({})) : h(c.element, t), c
                            }, e.prototype.symbol = function(t, e, i, s, o, n) {
                                var r, c = this,
                                    p = /^url\((.*?)\)$/,
                                    u = p.test(t),
                                    f = !u && (this.symbols[t] ? t : "circle"),
                                    g = f && this.symbols[f];
                                if (g) {
                                    "number" === typeof e && (r = g.call(this.symbols, Math.round(e || 0), Math.round(i || 0), s || 0, o || 0, n));
                                    var m = this.path(r);
                                    c.styledMode || m.attr("fill", "none"), d(m, {
                                        symbolName: f,
                                        x: e,
                                        y: i,
                                        width: s,
                                        height: o
                                    }), n && d(m, n)
                                } else if (u) {
                                    var x = t.match(p)[1];
                                    m = this.image(x), m.imgwidth = v(E[x] && E[x].width, n && n.width), m.imgheight = v(E[x] && E[x].height, n && n.height);
                                    var y = function() {
                                        m.attr({
                                            width: m.width,
                                            height: m.height
                                        })
                                    };
                                    ["width", "height"].forEach((function(t) {
                                        m[t + "Setter"] = function(t, e) {
                                            var i = {},
                                                s = this["img" + e],
                                                o = "width" === e ? "translateX" : "translateY";
                                            this[e] = t, l(s) && (n && "within" === n.backgroundSize && this.width && this.height && (s = Math.round(s * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(e, s), this.alignByTranslate || (i[o] = ((this[e] || 0) - s) / 2, this.attr(i)))
                                        }
                                    })), l(e) && m.attr({
                                        x: e,
                                        y: i
                                    }), m.isImg = !0, l(m.imgwidth) && l(m.imgheight) ? y() : (m.attr({
                                        width: 0,
                                        height: 0
                                    }), a("img", {
                                        onload: function() {
                                            var t = M[c.chartIndex];
                                            0 === this.width && (h(this, {
                                                position: "absolute",
                                                top: "-999em"
                                            }), S.body.appendChild(this)), E[x] = {
                                                width: this.width,
                                                height: this.height
                                            }, m.imgwidth = this.width, m.imgheight = this.height, m.element && y(), this.parentNode && this.parentNode.removeChild(this), c.imgCount--, c.imgCount || !t || t.hasLoaded || t.onload()
                                        },
                                        src: x
                                    }), this.imgCount++)
                                }
                                return m
                            }, e.prototype.clipRect = function(t, e, i, s) {
                                var o = k() + "-",
                                    n = this.createElement("clipPath").attr({
                                        id: o
                                    }).add(this.defs);
                                return t = this.rect(t, e, i, s, 0).add(n), t.id = o, t.clipPath = n, t.count = 0, t
                            }, e.prototype.text = function(t, e, i, s) {
                                var o = {};
                                return !s || !this.allowHTML && this.forExport ? (o.x = Math.round(e || 0), i && (o.y = Math.round(i)), l(t) && (o.text = t), t = this.createElement("text").attr(o), s || (t.xSetter = function(t, e, i) {
                                    var s, o = i.getElementsByTagName("tspan"),
                                        n = i.getAttribute(e);
                                    for (s = 0; s < o.length; s++) {
                                        var r = o[s];
                                        r.getAttribute(e) === n && r.setAttribute(e, t)
                                    }
                                    i.setAttribute(e, t)
                                }), t) : this.html(t, e, i)
                            }, e.prototype.fontMetrics = function(t, e) {
                                return t = !this.styledMode && /px/.test(t) || !L.getComputedStyle ? t || e && e.style && e.style.fontSize || this.style && this.style.fontSize : e && i.prototype.getStyle.call(e, "font-size"), t = /px/.test(t) ? y(t) : 12, e = 24 > t ? t + 3 : Math.round(1.2 * t), {
                                    h: e,
                                    b: Math.round(.8 * e),
                                    f: t
                                }
                            }, e.prototype.rotCorr = function(t, e, i) {
                                var s = t;
                                return e && i && (s = Math.max(s * Math.cos(e * w), 4)), {
                                    x: -t / 3 * Math.sin(e * w),
                                    y: s
                                }
                            }, e.prototype.pathToSegments = function(t) {
                                for (var e = [], i = [], s = {
                                        A: 8,
                                        C: 7,
                                        H: 2,
                                        L: 3,
                                        M: 3,
                                        Q: 5,
                                        S: 5,
                                        T: 3,
                                        V: 2
                                    }, o = 0; o < t.length; o++) g(i[0]) && u(t[o]) && i.length === s[i[0].toUpperCase()] && t.splice(o, 0, i[0].replace("M", "L").replace("m", "l")), "string" === typeof t[o] && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[o]);
                                return e.push(i.slice(0)), e
                            }, e.prototype.label = function(t, e, i, o, n, r, a, h, l) {
                                return new s(this, t, e, i, o, n, r, a, h, l)
                            }, e
                        }();
                    return D.prototype.Element = i, D.prototype.SVG_NS = O, D.prototype.draw = o, D.prototype.escapes = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "'": "&#39;",
                        '"': "&quot;"
                    }, D.prototype.symbols = {
                        circle: function(t, e, i, s) {
                            return this.arc(t + i / 2, e + s / 2, i / 2, s / 2, {
                                start: .5 * Math.PI,
                                end: 2.5 * Math.PI,
                                open: !1
                            })
                        },
                        square: function(t, e, i, s) {
                            return [
                                ["M", t, e],
                                ["L", t + i, e],
                                ["L", t + i, e + s],
                                ["L", t, e + s],
                                ["Z"]
                            ]
                        },
                        triangle: function(t, e, i, s) {
                            return [
                                ["M", t + i / 2, e],
                                ["L", t + i, e + s],
                                ["L", t, e + s],
                                ["Z"]
                            ]
                        },
                        "triangle-down": function(t, e, i, s) {
                            return [
                                ["M", t, e],
                                ["L", t + i, e],
                                ["L", t + i / 2, e + s],
                                ["Z"]
                            ]
                        },
                        diamond: function(t, e, i, s) {
                            return [
                                ["M", t + i / 2, e],
                                ["L", t + i, e + s / 2],
                                ["L", t + i / 2, e + s],
                                ["L", t, e + s / 2],
                                ["Z"]
                            ]
                        },
                        arc: function(t, e, i, s, o) {
                            var n = [];
                            if (o) {
                                var r = o.start || 0,
                                    a = o.end || 0,
                                    h = o.r || i;
                                i = o.r || s || i;
                                var c = .001 > Math.abs(a - r - 2 * Math.PI);
                                a -= .001, s = o.innerR, c = v(o.open, c);
                                var d = Math.cos(r),
                                    p = Math.sin(r),
                                    u = Math.cos(a),
                                    f = Math.sin(a);
                                r = v(o.longArc, .001 > a - r - Math.PI ? 0 : 1), n.push(["M", t + h * d, e + i * p], ["A", h, i, 0, r, v(o.clockwise, 1), t + h * u, e + i * f]), l(s) && n.push(c ? ["M", t + s * u, e + s * f] : ["L", t + s * u, e + s * f], ["A", s, s, 0, r, l(o.clockwise) ? 1 - o.clockwise : 0, t + s * d, e + s * p]), c || n.push(["Z"])
                            }
                            return n
                        },
                        callout: function(t, e, i, s, o) {
                            var n = Math.min(o && o.r || 0, i, s),
                                r = n + 6,
                                a = o && o.anchorX || 0;
                            o = o && o.anchorY || 0;
                            var h = [
                                ["M", t + n, e],
                                ["L", t + i - n, e],
                                ["C", t + i, e, t + i, e, t + i, e + n],
                                ["L", t + i, e + s - n],
                                ["C", t + i, e + s, t + i, e + s, t + i - n, e + s],
                                ["L", t + n, e + s],
                                ["C", t, e + s, t, e + s, t, e + s - n],
                                ["L", t, e + n],
                                ["C", t, e, t, e, t + n, e]
                            ];
                            return a && a > i ? o > e + r && o < e + s - r ? h.splice(3, 1, ["L", t + i, o - 6], ["L", t + i + 6, o], ["L", t + i, o + 6], ["L", t + i, e + s - n]) : h.splice(3, 1, ["L", t + i, s / 2], ["L", a, o], ["L", t + i, s / 2], ["L", t + i, e + s - n]) : a && 0 > a ? o > e + r && o < e + s - r ? h.splice(7, 1, ["L", t, o + 6], ["L", t - 6, o], ["L", t, o - 6], ["L", t, e + n]) : h.splice(7, 1, ["L", t, s / 2], ["L", a, o], ["L", t, s / 2], ["L", t, e + n]) : o && o > s && a > t + r && a < t + i - r ? h.splice(5, 1, ["L", a + 6, e + s], ["L", a, e + s + 6], ["L", a - 6, e + s], ["L", t + n, e + s]) : o && 0 > o && a > t + r && a < t + i - r && h.splice(1, 1, ["L", a - 6, e], ["L", a, e - 6], ["L", a + 6, e], ["L", i - n, e]), h
                        }
                    }, e.SVGRenderer = D, e.Renderer = e.SVGRenderer, e.Renderer
                })), e(i, "parts/Html.js", [i["parts/Globals.js"], i["parts/SVGElement.js"], i["parts/SVGRenderer.js"], i["parts/Utilities.js"]], (function(t, e, i, s) {
                    var o = s.attr,
                        n = s.createElement,
                        r = s.css,
                        a = s.defined,
                        h = s.extend,
                        l = s.pick,
                        c = s.pInt,
                        d = t.isFirefox,
                        p = t.isMS,
                        u = t.isWebKit,
                        f = t.win;
                    h(e.prototype, {
                        htmlCss: function(t) {
                            var e = "SPAN" === this.element.tagName && t && "width" in t,
                                i = l(e && t.width, void 0);
                            if (e) {
                                delete t.width, this.textWidth = i;
                                var s = !0
                            }
                            return t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), this.styles = h(this.styles, t), r(this.element, t), s && this.htmlUpdateTransform(), this
                        },
                        htmlGetBBox: function() {
                            var t = this.element;
                            return {
                                x: t.offsetLeft,
                                y: t.offsetTop,
                                width: t.offsetWidth,
                                height: t.offsetHeight
                            }
                        },
                        htmlUpdateTransform: function() {
                            if (this.added) {
                                var t = this.renderer,
                                    e = this.element,
                                    i = this.translateX || 0,
                                    s = this.translateY || 0,
                                    o = this.x || 0,
                                    n = this.y || 0,
                                    h = this.textAlign || "left",
                                    l = {
                                        left: 0,
                                        center: .5,
                                        right: 1
                                    }[h],
                                    d = this.styles,
                                    p = d && d.whiteSpace;
                                if (r(e, {
                                        marginLeft: i,
                                        marginTop: s
                                    }), !t.styledMode && this.shadows && this.shadows.forEach((function(t) {
                                        r(t, {
                                            marginLeft: i + 1,
                                            marginTop: s + 1
                                        })
                                    })), this.inverted && [].forEach.call(e.childNodes, (function(i) {
                                        t.invertChild(i, e)
                                    })), "SPAN" === e.tagName) {
                                    d = this.rotation;
                                    var u, f = this.textWidth && c(this.textWidth),
                                        g = [d, h, e.innerHTML, this.textWidth, this.textAlign].join();
                                    (u = f !== this.oldTextWidth) && !(u = f > this.oldTextWidth) && ((u = this.textPxLength) || (r(e, {
                                        width: "",
                                        whiteSpace: p || "nowrap"
                                    }), u = e.offsetWidth), u = u > f), u && (/[ \-]/.test(e.textContent || e.innerText) || "ellipsis" === e.style.textOverflow) ? (r(e, {
                                        width: f + "px",
                                        display: "block",
                                        whiteSpace: p || "normal"
                                    }), this.oldTextWidth = f, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1, g !== this.cTT && (p = t.fontMetrics(e.style.fontSize, e).b, !a(d) || d === (this.oldRotation || 0) && h === this.oldAlign || this.setSpanRotation(d, l, p), this.getSpanCorrection(!a(d) && this.textPxLength || e.offsetWidth, p, l, d, h)), r(e, {
                                        left: o + (this.xCorr || 0) + "px",
                                        top: n + (this.yCorr || 0) + "px"
                                    }), this.cTT = g, this.oldRotation = d, this.oldAlign = h
                                }
                            } else this.alignOnAdd = !0
                        },
                        setSpanRotation: function(t, e, i) {
                            var s = {},
                                o = this.renderer.getTransformKey();
                            s[o] = s.transform = "rotate(" + t + "deg)", s[o + (d ? "Origin" : "-origin")] = s.transformOrigin = 100 * e + "% " + i + "px", r(this.element, s)
                        },
                        getSpanCorrection: function(t, e, i) {
                            this.xCorr = -t * i, this.yCorr = -e
                        }
                    }), h(i.prototype, {
                        getTransformKey: function() {
                            return p && !/Edge/.test(f.navigator.userAgent) ? "-ms-transform" : u ? "-webkit-transform" : d ? "MozTransform" : f.opera ? "-o-transform" : ""
                        },
                        html: function(t, i, s) {
                            var r = this.createElement("span"),
                                a = r.element,
                                c = r.renderer,
                                d = c.isSVG,
                                p = function(t, i) {
                                    ["opacity", "visibility"].forEach((function(s) {
                                        t[s + "Setter"] = function(o, n, r) {
                                            var a = t.div ? t.div.style : i;
                                            e.prototype[s + "Setter"].call(this, o, n, r), a && (a[n] = o)
                                        }
                                    })), t.addedSetters = !0
                                };
                            return r.textSetter = function(t) {
                                t !== a.innerHTML && (delete this.bBox, delete this.oldTextWidth), this.textStr = t, a.innerHTML = l(t, ""), r.doTransform = !0
                            }, d && p(r, r.element.style), r.xSetter = r.ySetter = r.alignSetter = r.rotationSetter = function(t, e) {
                                "align" === e && (e = "textAlign"), r[e] = t, r.doTransform = !0
                            }, r.afterSetters = function() {
                                this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1)
                            }, r.attr({
                                text: t,
                                x: Math.round(i),
                                y: Math.round(s)
                            }).css({
                                position: "absolute"
                            }), c.styledMode || r.css({
                                fontFamily: this.style.fontFamily,
                                fontSize: this.style.fontSize
                            }), a.style.whiteSpace = "nowrap", r.css = r.htmlCss, d && (r.add = function(t) {
                                var e = c.box.parentNode,
                                    i = [];
                                if (this.parentGroup = t) {
                                    var s = t.div;
                                    if (!s) {
                                        for (; t;) i.push(t), t = t.parentGroup;
                                        i.reverse().forEach((function(t) {
                                            function a(e, i) {
                                                t[i] = e, "translateX" === i ? c.left = e + "px" : c.top = e + "px", t.doTransform = !0
                                            }
                                            var l = o(t.element, "class");
                                            s = t.div = t.div || n("div", l ? {
                                                className: l
                                            } : void 0, {
                                                position: "absolute",
                                                left: (t.translateX || 0) + "px",
                                                top: (t.translateY || 0) + "px",
                                                display: t.display,
                                                opacity: t.opacity,
                                                pointerEvents: t.styles && t.styles.pointerEvents
                                            }, s || e);
                                            var c = s.style;
                                            h(t, {
                                                classSetter: function(t) {
                                                    return function(e) {
                                                        this.element.setAttribute("class", e), t.className = e
                                                    }
                                                }(s),
                                                on: function() {
                                                    return i[0].div && r.on.apply({
                                                        element: i[0].div
                                                    }, arguments), t
                                                },
                                                translateXSetter: a,
                                                translateYSetter: a
                                            }), t.addedSetters || p(t)
                                        }))
                                    }
                                } else s = e;
                                return s.appendChild(a), r.added = !0, r.alignOnAdd && r.htmlUpdateTransform(), r
                            }), r
                        }
                    })
                })), e(i, "parts/Tick.js", [i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.clamp,
                        s = e.correctFloat,
                        o = e.defined,
                        n = e.destroyObjectProperties,
                        r = e.extend,
                        a = e.fireEvent,
                        h = e.isNumber,
                        l = e.merge,
                        c = e.objectEach,
                        d = e.pick,
                        p = t.deg2rad;
                    return e = function() {
                        function t(t, e, i, s, o) {
                            this.isNewLabel = this.isNew = !0, this.axis = t, this.pos = e, this.type = i || "", this.parameters = o || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, a(this, "init"), i || s || this.addLabel()
                        }
                        return t.prototype.addLabel = function() {
                            var t = this,
                                e = t.axis,
                                i = e.options,
                                n = e.chart,
                                a = e.categories,
                                h = e.logarithmic,
                                l = e.names,
                                c = t.pos,
                                p = d(t.options && t.options.labels, i.labels),
                                u = e.tickPositions,
                                f = c === u[0],
                                g = c === u[u.length - 1];
                            l = this.parameters.category || (a ? d(a[c], l[c], c) : c);
                            var m, x, v = t.label;
                            if (a = (!p.step || 1 === p.step) && 1 === e.tickInterval, u = u.info, e.dateTime && u) var y = n.time.resolveDTLFormat(i.dateTimeLabelFormats[!i.grid && u.higherRanks[c] || u.unitName]),
                                b = y.main;
                            t.isFirst = f, t.isLast = g, t.formatCtx = {
                                axis: e,
                                chart: n,
                                isFirst: f,
                                isLast: g,
                                dateTimeLabelFormat: b,
                                tickPositionInfo: u,
                                value: h ? s(h.lin2log(l)) : l,
                                pos: c
                            }, i = e.labelFormatter.call(t.formatCtx, this.formatCtx), (x = y && y.list) && (t.shortenLabel = function() {
                                for (m = 0; m < x.length; m++)
                                    if (v.attr({
                                            text: e.labelFormatter.call(r(t.formatCtx, {
                                                dateTimeLabelFormat: x[m]
                                            }))
                                        }), v.getBBox().width < e.getSlotWidth(t) - 2 * d(p.padding, 5)) return;
                                v.attr({
                                    text: ""
                                })
                            }), a && e._addedPlotLB && e.isXAxis && t.moveLabel(i, p), o(v) || t.movedLabel ? v && v.textStr !== i && !a && (!v.textWidth || p.style && p.style.width || v.styles.width || v.css({
                                width: null
                            }), v.attr({
                                text: i
                            }), v.textPxLength = v.getBBox().width) : (t.label = v = t.createLabel({
                                x: 0,
                                y: 0
                            }, i, p), t.rotation = 0)
                        }, t.prototype.createLabel = function(t, e, i) {
                            var s = this.axis,
                                n = s.chart;
                            return (t = o(e) && i.enabled ? n.renderer.text(e, t.x, t.y, i.useHTML).add(s.labelGroup) : null) && (n.styledMode || t.css(l(i.style)), t.textPxLength = t.getBBox().width), t
                        }, t.prototype.destroy = function() {
                            n(this, this.axis)
                        }, t.prototype.getPosition = function(t, e, o, n) {
                            var r = this.axis,
                                h = r.chart,
                                l = n && h.oldChartHeight || h.chartHeight;
                            return t = {
                                x: t ? s(r.translate(e + o, null, null, n) + r.transB) : r.left + r.offset + (r.opposite ? (n && h.oldChartWidth || h.chartWidth) - r.right - r.left : 0),
                                y: t ? l - r.bottom + r.offset - (r.opposite ? r.height : 0) : s(l - r.translate(e + o, null, null, n) - r.transB)
                            }, t.y = i(t.y, -1e5, 1e5), a(this, "afterGetPosition", {
                                pos: t
                            }), t
                        }, t.prototype.getLabelPosition = function(t, e, i, s, n, r, h, l) {
                            var c = this.axis,
                                d = c.transA,
                                u = c.isLinked && c.linkedParent ? c.linkedParent.reversed : c.reversed,
                                f = c.staggerLines,
                                g = c.tickRotCorr || {
                                    x: 0,
                                    y: 0
                                },
                                m = n.y,
                                x = s || c.reserveSpaceDefault ? 0 : -c.labelOffset * ("center" === c.labelAlign ? .5 : 1),
                                v = {};
                            return o(m) || (m = 0 === c.side ? i.rotation ? -8 : -i.getBBox().height : 2 === c.side ? g.y + 8 : Math.cos(i.rotation * p) * (g.y - i.getBBox(!1, 0).height / 2)), t = t + n.x + x + g.x - (r && s ? r * d * (u ? -1 : 1) : 0), e = e + m - (r && !s ? r * d * (u ? 1 : -1) : 0), f && (i = h / (l || 1) % f, c.opposite && (i = f - i - 1), e += c.labelOffset / f * i), v.x = t, v.y = Math.round(e), a(this, "afterGetLabelPosition", {
                                pos: v,
                                tickmarkOffset: r,
                                index: h
                            }), v
                        }, t.prototype.getLabelSize = function() {
                            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
                        }, t.prototype.getMarkPath = function(t, e, i, s, o, n) {
                            return n.crispLine([
                                ["M", t, e],
                                ["L", t + (o ? 0 : -i), e + (o ? i : 0)]
                            ], s)
                        }, t.prototype.handleOverflow = function(t) {
                            var e = this.axis,
                                i = e.options.labels,
                                s = t.x,
                                o = e.chart.chartWidth,
                                n = e.chart.spacing,
                                r = d(e.labelLeft, Math.min(e.pos, n[3]));
                            n = d(e.labelRight, Math.max(e.isRadial ? 0 : e.pos + e.len, o - n[1]));
                            var a, h = this.label,
                                l = this.rotation,
                                c = {
                                    left: 0,
                                    center: .5,
                                    right: 1
                                }[e.labelAlign || h.attr("align")],
                                u = h.getBBox().width,
                                f = e.getSlotWidth(this),
                                g = f,
                                m = 1,
                                x = {};
                            l || "justify" !== d(i.overflow, "justify") ? 0 > l && s - c * u < r ? a = Math.round(s / Math.cos(l * p) - r) : 0 < l && s + c * u > n && (a = Math.round((o - s) / Math.cos(l * p))) : (o = s + (1 - c) * u, s - c * u < r ? g = t.x + g * (1 - c) - r : o > n && (g = n - t.x + g * c, m = -1), g = Math.min(f, g), g < f && "center" === e.labelAlign && (t.x += m * (f - g - c * (f - Math.min(u, g)))), (u > g || e.autoRotation && (h.styles || {}).width) && (a = g)), a && (this.shortenLabel ? this.shortenLabel() : (x.width = Math.floor(a) + "px", (i.style || {}).textOverflow || (x.textOverflow = "ellipsis"), h.css(x)))
                        }, t.prototype.moveLabel = function(t, e) {
                            var i = this,
                                s = i.label,
                                o = !1,
                                n = i.axis,
                                r = n.reversed,
                                a = n.chart.inverted;
                            if (s && s.textStr === t ? (i.movedLabel = s, o = !0, delete i.label) : c(n.ticks, (function(e) {
                                    o || e.isNew || e === i || !e.label || e.label.textStr !== t || (i.movedLabel = e.label, o = !0, e.labelPos = i.movedLabel.xy, delete e.label)
                                })), !o && (i.labelPos || s)) {
                                var h = i.labelPos || s.xy;
                                s = a ? h.x : r ? 0 : n.width + n.left, n = a ? r ? n.width + n.left : 0 : h.y, i.movedLabel = i.createLabel({
                                    x: s,
                                    y: n
                                }, t, e), i.movedLabel && i.movedLabel.attr({
                                    opacity: 0
                                })
                            }
                        }, t.prototype.render = function(t, e, i) {
                            var s = this.axis,
                                o = s.horiz,
                                n = this.pos,
                                r = d(this.tickmarkOffset, s.tickmarkOffset);
                            n = this.getPosition(o, n, r, e), r = n.x;
                            var h = n.y;
                            s = o && r === s.pos + s.len || !o && h === s.pos ? -1 : 1, i = d(i, 1), this.isActive = !0, this.renderGridLine(e, i, s), this.renderMark(n, i, s), this.renderLabel(n, e, i, t), this.isNew = !1, a(this, "afterRender")
                        }, t.prototype.renderGridLine = function(t, e, i) {
                            var s = this.axis,
                                o = s.options,
                                n = this.gridLine,
                                r = {},
                                a = this.pos,
                                h = this.type,
                                l = d(this.tickmarkOffset, s.tickmarkOffset),
                                c = s.chart.renderer,
                                p = h ? h + "Grid" : "grid",
                                u = o[p + "LineWidth"],
                                f = o[p + "LineColor"];
                            o = o[p + "LineDashStyle"], n || (s.chart.styledMode || (r.stroke = f, r["stroke-width"] = u, o && (r.dashstyle = o)), h || (r.zIndex = 1), t && (e = 0), this.gridLine = n = c.path().attr(r).addClass("highcharts-" + (h ? h + "-" : "") + "grid-line").add(s.gridGroup)), n && (i = s.getPlotLinePath({
                                value: a + l,
                                lineWidth: n.strokeWidth() * i,
                                force: "pass",
                                old: t
                            })) && n[t || this.isNew ? "attr" : "animate"]({
                                d: i,
                                opacity: e
                            })
                        }, t.prototype.renderMark = function(t, e, i) {
                            var s = this.axis,
                                o = s.options,
                                n = s.chart.renderer,
                                r = this.type,
                                a = r ? r + "Tick" : "tick",
                                h = s.tickSize(a),
                                l = this.mark,
                                c = !l,
                                p = t.x;
                            t = t.y;
                            var u = d(o[a + "Width"], !r && s.isXAxis ? 1 : 0);
                            o = o[a + "Color"], h && (s.opposite && (h[0] = -h[0]), c && (this.mark = l = n.path().addClass("highcharts-" + (r ? r + "-" : "") + "tick").add(s.axisGroup), s.chart.styledMode || l.attr({
                                stroke: o,
                                "stroke-width": u
                            })), l[c ? "attr" : "animate"]({
                                d: this.getMarkPath(p, t, h[0], l.strokeWidth() * i, s.horiz, n),
                                opacity: e
                            }))
                        }, t.prototype.renderLabel = function(t, e, i, s) {
                            var o = this.axis,
                                n = o.horiz,
                                r = o.options,
                                a = this.label,
                                l = r.labels,
                                c = l.step;
                            o = d(this.tickmarkOffset, o.tickmarkOffset);
                            var p = !0,
                                u = t.x;
                            t = t.y, a && h(u) && (a.xy = t = this.getLabelPosition(u, t, a, n, l, o, s, c), this.isFirst && !this.isLast && !d(r.showFirstLabel, 1) || this.isLast && !this.isFirst && !d(r.showLastLabel, 1) ? p = !1 : !n || l.step || l.rotation || e || 0 === i || this.handleOverflow(t), c && s % c && (p = !1), p && h(t.y) ? (t.opacity = i, a[this.isNewLabel ? "attr" : "animate"](t), this.isNewLabel = !1) : (a.attr("y", -9999), this.isNewLabel = !0))
                        }, t.prototype.replaceMovedLabel = function() {
                            var t = this.label,
                                e = this.axis,
                                i = e.reversed,
                                s = this.axis.chart.inverted;
                            if (t && !this.isNew) {
                                var o = s ? t.xy.x : i ? e.left : e.width + e.left;
                                i = s ? i ? e.width + e.top : e.top : t.xy.y, t.animate({
                                    x: o,
                                    y: i,
                                    opacity: 0
                                }, void 0, t.destroy), delete this.label
                            }
                            e.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel
                        }, t
                    }(), t.Tick = e, t.Tick
                })), e(i, "parts/Time.js", [i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.defined,
                        s = e.error,
                        o = e.extend,
                        n = e.isObject,
                        r = e.merge,
                        a = e.objectEach,
                        h = e.pad,
                        l = e.pick,
                        c = e.splat,
                        d = e.timeUnits,
                        p = t.win;
                    return e = function() {
                        function e(t) {
                            this.options = {}, this.variableTimezone = this.useUTC = !1, this.Date = p.Date, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.update(t)
                        }
                        return e.prototype.get = function(t, e) {
                            if (this.variableTimezone || this.timezoneOffset) {
                                var i = e.getTime(),
                                    s = i - this.getTimezoneOffset(e);
                                return e.setTime(s), t = e["getUTC" + t](), e.setTime(i), t
                            }
                            return this.useUTC ? e["getUTC" + t]() : e["get" + t]()
                        }, e.prototype.set = function(t, e, i) {
                            if (this.variableTimezone || this.timezoneOffset) {
                                if ("Milliseconds" === t || "Seconds" === t || "Minutes" === t) return e["setUTC" + t](i);
                                var s = this.getTimezoneOffset(e);
                                return s = e.getTime() - s, e.setTime(s), e["setUTC" + t](i), t = this.getTimezoneOffset(e), s = e.getTime() + t, e.setTime(s)
                            }
                            return this.useUTC ? e["setUTC" + t](i) : e["set" + t](i)
                        }, e.prototype.update = function(t) {
                            var e = l(t && t.useUTC, !0);
                            this.options = t = r(!0, this.options || {}, t), this.Date = t.Date || p.Date || Date, this.timezoneOffset = (this.useUTC = e) && t.timezoneOffset, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.variableTimezone = !(e && !t.getTimezoneOffset && !t.timezone)
                        }, e.prototype.makeTime = function(e, i, s, o, n, r) {
                            if (this.useUTC) {
                                var a = this.Date.UTC.apply(0, arguments),
                                    h = this.getTimezoneOffset(a);
                                a += h;
                                var c = this.getTimezoneOffset(a);
                                h !== c ? a += c - h : h - 36e5 !== this.getTimezoneOffset(a - 36e5) || t.isSafari || (a -= 36e5)
                            } else a = new this.Date(e, i, l(s, 1), l(o, 0), l(n, 0), l(r, 0)).getTime();
                            return a
                        }, e.prototype.timezoneOffsetFunction = function() {
                            var t = this,
                                e = this.options,
                                i = p.moment;
                            if (!this.useUTC) return function(t) {
                                return 6e4 * new Date(t.toString()).getTimezoneOffset()
                            };
                            if (e.timezone) {
                                if (i) return function(t) {
                                    return 6e4 * -i.tz(t, e.timezone).utcOffset()
                                };
                                s(25)
                            }
                            return this.useUTC && e.getTimezoneOffset ? function(t) {
                                return 6e4 * e.getTimezoneOffset(t.valueOf())
                            } : function() {
                                return 6e4 * (t.timezoneOffset || 0)
                            }
                        }, e.prototype.dateFormat = function(e, s, n) {
                            var r;
                            if (!i(s) || isNaN(s)) return (null === (r = t.defaultOptions.lang) || void 0 === r ? void 0 : r.invalidDate) || "";
                            e = l(e, "%Y-%m-%d %H:%M:%S");
                            var c = this;
                            r = new this.Date(s);
                            var d = this.get("Hours", r),
                                p = this.get("Day", r),
                                u = this.get("Date", r),
                                f = this.get("Month", r),
                                g = this.get("FullYear", r),
                                m = t.defaultOptions.lang,
                                x = null === m || void 0 === m ? void 0 : m.weekdays,
                                v = null === m || void 0 === m ? void 0 : m.shortWeekdays;
                            return r = o({
                                a: v ? v[p] : x[p].substr(0, 3),
                                A: x[p],
                                d: h(u),
                                e: h(u, 2, " "),
                                w: p,
                                b: m.shortMonths[f],
                                B: m.months[f],
                                m: h(f + 1),
                                o: f + 1,
                                y: g.toString().substr(2, 2),
                                Y: g,
                                H: h(d),
                                k: d,
                                I: h(d % 12 || 12),
                                l: d % 12 || 12,
                                M: h(this.get("Minutes", r)),
                                p: 12 > d ? "AM" : "PM",
                                P: 12 > d ? "am" : "pm",
                                S: h(r.getSeconds()),
                                L: h(Math.floor(s % 1e3), 3)
                            }, t.dateFormats), a(r, (function(t, i) {
                                for (; - 1 !== e.indexOf("%" + i);) e = e.replace("%" + i, "function" === typeof t ? t.call(c, s) : t)
                            })), n ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                        }, e.prototype.resolveDTLFormat = function(t) {
                            return n(t, !0) ? t : (t = c(t), {
                                main: t[0],
                                from: t[1],
                                to: t[2]
                            })
                        }, e.prototype.getTimeTicks = function(t, e, s, n) {
                            var r, a = this,
                                h = [],
                                c = {},
                                p = new a.Date(e),
                                u = t.unitRange,
                                f = t.count || 1;
                            if (n = l(n, 1), i(e)) {
                                if (a.set("Milliseconds", p, u >= d.second ? 0 : f * Math.floor(a.get("Milliseconds", p) / f)), u >= d.second && a.set("Seconds", p, u >= d.minute ? 0 : f * Math.floor(a.get("Seconds", p) / f)), u >= d.minute && a.set("Minutes", p, u >= d.hour ? 0 : f * Math.floor(a.get("Minutes", p) / f)), u >= d.hour && a.set("Hours", p, u >= d.day ? 0 : f * Math.floor(a.get("Hours", p) / f)), u >= d.day && a.set("Date", p, u >= d.month ? 1 : Math.max(1, f * Math.floor(a.get("Date", p) / f))), u >= d.month) {
                                    a.set("Month", p, u >= d.year ? 0 : f * Math.floor(a.get("Month", p) / f));
                                    var g = a.get("FullYear", p)
                                }
                                u >= d.year && a.set("FullYear", p, g - g % f), u === d.week && (g = a.get("Day", p), a.set("Date", p, a.get("Date", p) - g + n + (g < n ? -7 : 0))), g = a.get("FullYear", p), n = a.get("Month", p);
                                var m = a.get("Date", p),
                                    x = a.get("Hours", p);
                                for (e = p.getTime(), a.variableTimezone && (r = s - e > 4 * d.month || a.getTimezoneOffset(e) !== a.getTimezoneOffset(s)), e = p.getTime(), p = 1; e < s;) h.push(e), e = u === d.year ? a.makeTime(g + p * f, 0) : u === d.month ? a.makeTime(g, n + p * f) : !r || u !== d.day && u !== d.week ? r && u === d.hour && 1 < f ? a.makeTime(g, n, m, x + p * f) : e + u * f : a.makeTime(g, n, m + p * f * (u === d.day ? 1 : 7)), p++;
                                h.push(e), u <= d.hour && 1e4 > h.length && h.forEach((function(t) {
                                    0 === t % 18e5 && "000000000" === a.dateFormat("%H%M%S%L", t) && (c[t] = "day")
                                }))
                            }
                            return h.info = o(t, {
                                higherRanks: c,
                                totalRange: u * f
                            }), h
                        }, e
                    }(), t.Time = e, t.Time
                })), e(i, "parts/Options.js", [i["parts/Globals.js"], i["parts/Time.js"], i["parts/Color.js"], i["parts/Utilities.js"]], (function(t, e, i, s) {
                    return i = i.parse, s = s.merge, t.defaultOptions = {
                        colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
                        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                        lang: {
                            loading: "Loading...",
                            months: "January February March April May June July August September October November December".split(" "),
                            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                            decimalPoint: ".",
                            numericSymbols: "kMGTPE".split(""),
                            resetZoom: "Reset zoom",
                            resetZoomTitle: "Reset zoom level 1:1",
                            thousandsSep: " "
                        },
                        global: {},
                        time: {
                            Date: void 0,
                            getTimezoneOffset: void 0,
                            timezone: void 0,
                            timezoneOffset: 0,
                            useUTC: !0
                        },
                        chart: {
                            styledMode: !1,
                            borderRadius: 0,
                            colorCount: 10,
                            defaultSeriesType: "line",
                            ignoreHiddenSeries: !0,
                            spacing: [10, 10, 15, 10],
                            resetZoomButton: {
                                theme: {
                                    zIndex: 6
                                },
                                position: {
                                    align: "right",
                                    x: -10,
                                    y: 10
                                }
                            },
                            width: null,
                            height: null,
                            borderColor: "#335cad",
                            backgroundColor: "#ffffff",
                            plotBorderColor: "#cccccc"
                        },
                        title: {
                            text: "Chart title",
                            align: "center",
                            margin: 15,
                            widthAdjust: -44
                        },
                        subtitle: {
                            text: "",
                            align: "center",
                            widthAdjust: -44
                        },
                        caption: {
                            margin: 15,
                            text: "",
                            align: "left",
                            verticalAlign: "bottom"
                        },
                        plotOptions: {},
                        labels: {
                            style: {
                                position: "absolute",
                                color: "#333333"
                            }
                        },
                        legend: {
                            enabled: !0,
                            align: "center",
                            alignColumns: !0,
                            layout: "horizontal",
                            labelFormatter: function() {
                                return this.name
                            },
                            borderColor: "#999999",
                            borderRadius: 0,
                            navigation: {
                                activeColor: "#003399",
                                inactiveColor: "#cccccc"
                            },
                            itemStyle: {
                                color: "#333333",
                                cursor: "pointer",
                                fontSize: "12px",
                                fontWeight: "bold",
                                textOverflow: "ellipsis"
                            },
                            itemHoverStyle: {
                                color: "#000000"
                            },
                            itemHiddenStyle: {
                                color: "#cccccc"
                            },
                            shadow: !1,
                            itemCheckboxStyle: {
                                position: "absolute",
                                width: "13px",
                                height: "13px"
                            },
                            squareSymbol: !0,
                            symbolPadding: 5,
                            verticalAlign: "bottom",
                            x: 0,
                            y: 0,
                            title: {
                                style: {
                                    fontWeight: "bold"
                                }
                            }
                        },
                        loading: {
                            labelStyle: {
                                fontWeight: "bold",
                                position: "relative",
                                top: "45%"
                            },
                            style: {
                                position: "absolute",
                                backgroundColor: "#ffffff",
                                opacity: .5,
                                textAlign: "center"
                            }
                        },
                        tooltip: {
                            enabled: !0,
                            animation: t.svg,
                            borderRadius: 3,
                            dateTimeLabelFormats: {
                                millisecond: "%A, %b %e, %H:%M:%S.%L",
                                second: "%A, %b %e, %H:%M:%S",
                                minute: "%A, %b %e, %H:%M",
                                hour: "%A, %b %e, %H:%M",
                                day: "%A, %b %e, %Y",
                                week: "Week from %A, %b %e, %Y",
                                month: "%B %Y",
                                year: "%Y"
                            },
                            footerFormat: "",
                            padding: 8,
                            snap: t.isTouchDevice ? 25 : 10,
                            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                            pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                            backgroundColor: i("#f7f7f7").setOpacity(.85).get(),
                            borderWidth: 1,
                            shadow: !0,
                            style: {
                                color: "#333333",
                                cursor: "default",
                                fontSize: "12px",
                                whiteSpace: "nowrap"
                            }
                        },
                        credits: {
                            enabled: !0,
                            href: "https://www.highcharts.com?credits",
                            position: {
                                align: "right",
                                x: -10,
                                verticalAlign: "bottom",
                                y: -5
                            },
                            style: {
                                cursor: "pointer",
                                color: "#999999",
                                fontSize: "9px"
                            },
                            text: "Highcharts.com"
                        }
                    }, t.time = new e(s(t.defaultOptions.global, t.defaultOptions.time)), t.dateFormat = function(e, i, s) {
                        return t.time.dateFormat(e, i, s)
                    }, {
                        dateFormat: t.dateFormat,
                        defaultOptions: t.defaultOptions,
                        time: t.time
                    }
                })), e(i, "parts/Axis.js", [i["parts/Color.js"], i["parts/Globals.js"], i["parts/Tick.js"], i["parts/Utilities.js"], i["parts/Options.js"]], (function(t, e, i, s, o) {
                    var n = s.addEvent,
                        r = s.animObject,
                        a = s.arrayMax,
                        h = s.arrayMin,
                        l = s.clamp,
                        c = s.correctFloat,
                        d = s.defined,
                        p = s.destroyObjectProperties,
                        u = s.error,
                        f = s.extend,
                        g = s.fireEvent,
                        m = s.format,
                        x = s.getMagnitude,
                        v = s.isArray,
                        y = s.isFunction,
                        b = s.isNumber,
                        k = s.isString,
                        M = s.merge,
                        w = s.normalizeTickInterval,
                        S = s.objectEach,
                        A = s.pick,
                        T = s.relativeLength,
                        P = s.removeEvent,
                        C = s.splat,
                        O = s.syncTimeout,
                        E = o.defaultOptions,
                        L = e.deg2rad;
                    return s = function() {
                        function s(t, e) {
                            this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.oldMin = this.oldMax = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0, this.init(t, e)
                        }
                        return s.prototype.init = function(t, e) {
                            var i = e.isX,
                                s = this;
                            s.chart = t, s.horiz = t.inverted && !s.isZAxis ? !i : i, s.isXAxis = i, s.coll = s.coll || (i ? "xAxis" : "yAxis"), g(this, "init", {
                                userOptions: e
                            }), s.opposite = e.opposite, s.side = e.side || (s.horiz ? s.opposite ? 0 : 2 : s.opposite ? 1 : 3), s.setOptions(e);
                            var o = this.options,
                                r = o.type;
                            s.labelFormatter = o.labels.formatter || s.defaultLabelFormatter, s.userOptions = e, s.minPixelPadding = 0, s.reversed = o.reversed, s.visible = !1 !== o.visible, s.zoomEnabled = !1 !== o.zoomEnabled, s.hasNames = "category" === r || !0 === o.categories, s.categories = o.categories || s.hasNames, s.names || (s.names = [], s.names.keys = {}), s.plotLinesAndBandsGroups = {}, s.positiveValuesOnly = !(!s.logarithmic || o.allowNegativeLog), s.isLinked = d(o.linkedTo), s.ticks = {}, s.labelEdge = [], s.minorTicks = {}, s.plotLinesAndBands = [], s.alternateBands = {}, s.len = 0, s.minRange = s.userMinRange = o.minRange || o.maxZoom, s.range = o.range, s.offset = o.offset || 0, s.max = null, s.min = null, s.crosshair = A(o.crosshair, C(t.options.tooltip.crosshairs)[i ? 0 : 1], !1), e = s.options.events, -1 === t.axes.indexOf(s) && (i ? t.axes.splice(t.xAxis.length, 0, s) : t.axes.push(s), t[s.coll].push(s)), s.series = s.series || [], t.inverted && !s.isZAxis && i && "undefined" === typeof s.reversed && (s.reversed = !0), s.labelRotation = s.options.labels.rotation, S(e, (function(t, e) {
                                y(t) && n(s, e, t)
                            })), g(this, "afterInit")
                        }, s.prototype.setOptions = function(t) {
                            this.options = M(s.defaultOptions, "yAxis" === this.coll && s.defaultYAxisOptions, [s.defaultTopAxisOptions, s.defaultRightAxisOptions, s.defaultBottomAxisOptions, s.defaultLeftAxisOptions][this.side], M(E[this.coll], t)), g(this, "afterSetOptions", {
                                userOptions: t
                            })
                        }, s.prototype.defaultLabelFormatter = function() {
                            var t = this.axis,
                                e = this.value,
                                i = t.chart.time,
                                s = t.categories,
                                o = this.dateTimeLabelFormat,
                                n = E.lang,
                                r = n.numericSymbols;
                            n = n.numericSymbolMagnitude || 1e3;
                            var a = r && r.length,
                                h = t.options.labels.format;
                            t = t.logarithmic ? Math.abs(e) : t.tickInterval;
                            var l = this.chart,
                                c = l.numberFormatter;
                            if (h) var d = m(h, this, l);
                            else if (s) d = e;
                            else if (o) d = i.dateFormat(o, e);
                            else if (a && 1e3 <= t)
                                for (; a-- && "undefined" === typeof d;) i = Math.pow(n, a + 1), t >= i && 0 === 10 * e % i && null !== r[a] && 0 !== e && (d = c(e / i, -1) + r[a]);
                            return "undefined" === typeof d && (d = 1e4 <= Math.abs(e) ? c(e, -1) : c(e, -1, void 0, "")), d
                        }, s.prototype.getSeriesExtremes = function() {
                            var t, e = this,
                                i = e.chart;
                            g(this, "getSeriesExtremes", null, (function() {
                                e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = null, e.softThreshold = !e.isXAxis, e.stacking && e.stacking.buildStacks(), e.series.forEach((function(s) {
                                    if (s.visible || !i.options.chart.ignoreHiddenSeries) {
                                        var o = s.options,
                                            n = o.threshold;
                                        if (e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= n && (n = null), e.isXAxis) {
                                            if (o = s.xData, o.length) {
                                                t = s.getXExtremes(o);
                                                var r = t.min,
                                                    a = t.max;
                                                b(r) || r instanceof Date || (o = o.filter(b), t = s.getXExtremes(o), r = t.min, a = t.max), o.length && (e.dataMin = Math.min(A(e.dataMin, r), r), e.dataMax = Math.max(A(e.dataMax, a), a))
                                            }
                                        } else s = s.applyExtremes(), b(s.dataMin) && (r = s.dataMin, e.dataMin = Math.min(A(e.dataMin, r), r)), b(s.dataMax) && (a = s.dataMax, e.dataMax = Math.max(A(e.dataMax, a), a)), d(n) && (e.threshold = n), (!o.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1)
                                    }
                                }))
                            })), g(this, "afterGetSeriesExtremes")
                        }, s.prototype.translate = function(t, e, i, s, o, n) {
                            var r = this.linkedParent || this,
                                a = 1,
                                h = 0,
                                l = s ? r.oldTransA : r.transA;
                            s = s ? r.oldMin : r.min;
                            var c = r.minPixelPadding;
                            return o = (r.isOrdinal || r.brokenAxis && r.brokenAxis.hasBreaks || r.logarithmic && o) && r.lin2val, l || (l = r.transA), i && (a *= -1, h = r.len), r.reversed && (a *= -1, h -= a * (r.sector || r.len)), e ? (t = (t * a + h - c) / l + s, o && (t = r.lin2val(t))) : (o && (t = r.val2lin(t)), t = b(s) ? a * (t - s) * l + h + a * c + (b(n) ? l * n : 0) : void 0), t
                        }, s.prototype.toPixels = function(t, e) {
                            return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
                        }, s.prototype.toValue = function(t, e) {
                            return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
                        }, s.prototype.getPlotLinePath = function(t) {
                            function e(t, e, i) {
                                return ("pass" !== x && t < e || t > i) && (x ? t = l(t, e, i) : r = !0), t
                            }
                            var i, s, o, n, r, a = this,
                                h = a.chart,
                                c = a.left,
                                d = a.top,
                                p = t.old,
                                u = t.value,
                                f = t.translatedValue,
                                m = t.lineWidth,
                                x = t.force,
                                v = p && h.oldChartHeight || h.chartHeight,
                                y = p && h.oldChartWidth || h.chartWidth,
                                k = a.transB;
                            return t = {
                                value: u,
                                lineWidth: m,
                                old: p,
                                force: x,
                                acrossPanes: t.acrossPanes,
                                translatedValue: f
                            }, g(this, "getPlotLinePath", t, (function(t) {
                                f = A(f, a.translate(u, null, null, p)), f = l(f, -1e5, 1e5), i = o = Math.round(f + k), s = n = Math.round(v - f - k), b(f) ? a.horiz ? (s = d, n = v - a.bottom, i = o = e(i, c, c + a.width)) : (i = c, o = y - a.right, s = n = e(s, d, d + a.height)) : (r = !0, x = !1), t.path = r && !x ? null : h.renderer.crispLine([
                                    ["M", i, s],
                                    ["L", o, n]
                                ], m || 1)
                            })), t.path
                        }, s.prototype.getLinearTickPositions = function(t, e, i) {
                            var s = c(Math.floor(e / t) * t);
                            i = c(Math.ceil(i / t) * t);
                            var o, n = [];
                            if (c(s + t) === s && (o = 20), this.single) return [e];
                            for (e = s; e <= i;) {
                                if (n.push(e), e = c(e + t, o), e === r) break;
                                var r = e
                            }
                            return n
                        }, s.prototype.getMinorTickInterval = function() {
                            var t = this.options;
                            return !0 === t.minorTicks ? A(t.minorTickInterval, "auto") : !1 === t.minorTicks ? null : t.minorTickInterval
                        }, s.prototype.getMinorTickPositions = function() {
                            var t = this.options,
                                e = this.tickPositions,
                                i = this.minorTickInterval,
                                s = [],
                                o = this.pointRangePadding || 0,
                                n = this.min - o;
                            o = this.max + o;
                            var r = o - n;
                            if (r && r / i < this.len / 3) {
                                var a = this.logarithmic;
                                if (a) this.paddedTicks.forEach((function(t, e, o) {
                                    e && s.push.apply(s, a.getLogTickPositions(i, o[e - 1], o[e], !0))
                                }));
                                else if (this.dateTime && "auto" === this.getMinorTickInterval()) s = s.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i), n, o, t.startOfWeek));
                                else
                                    for (t = n + (e[0] - n) % i; t <= o && t !== s[0]; t += i) s.push(t)
                            }
                            return 0 !== s.length && this.trimTicks(s), s
                        }, s.prototype.adjustForMinRange = function() {
                            var t, e, i, s, o = this.options,
                                n = this.min,
                                r = this.max,
                                l = this.logarithmic;
                            if (this.isXAxis && "undefined" === typeof this.minRange && !l && (d(o.min) || d(o.max) ? this.minRange = null : (this.series.forEach((function(o) {
                                    for (s = o.xData, e = o.xIncrement ? 1 : s.length - 1; 0 < e; e--) i = s[e] - s[e - 1], ("undefined" === typeof t || i < t) && (t = i)
                                })), this.minRange = Math.min(5 * t, this.dataMax - this.dataMin))), r - n < this.minRange) {
                                var c = this.dataMax - this.dataMin >= this.minRange,
                                    p = this.minRange,
                                    u = (p - r + n) / 2;
                                u = [n - u, A(o.min, n - u)], c && (u[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin), n = a(u), r = [n + p, A(o.max, n + p)], c && (r[2] = l ? l.log2lin(this.dataMax) : this.dataMax), r = h(r), r - n < p && (u[0] = r - p, u[1] = A(o.min, r - p), n = a(u))
                            }
                            this.min = n, this.max = r
                        }, s.prototype.getClosest = function() {
                            var t;
                            return this.categories ? t = 1 : this.series.forEach((function(e) {
                                var i = e.closestPointRange,
                                    s = e.visible || !e.chart.options.chart.ignoreHiddenSeries;
                                !e.noSharedTooltip && d(i) && s && (t = d(t) ? Math.min(t, i) : i)
                            })), t
                        }, s.prototype.nameToX = function(t) {
                            var e = v(this.categories),
                                i = e ? this.categories : this.names,
                                s = t.options.x;
                            if (t.series.requireSorting = !1, d(s) || (s = !1 === this.options.uniqueNames ? t.series.autoIncrement() : e ? i.indexOf(t.name) : A(i.keys[t.name], -1)), -1 === s) {
                                if (!e) var o = i.length
                            } else o = s;
                            return "undefined" !== typeof o && (this.names[o] = t.name, this.names.keys[t.name] = o), o
                        }, s.prototype.updateNames = function() {
                            var t = this,
                                e = this.names;
                            0 < e.length && (Object.keys(e.keys).forEach((function(t) {
                                delete e.keys[t]
                            })), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((function(e) {
                                e.xIncrement = null, e.points && !e.isDirtyData || (t.max = Math.max(t.max, e.xData.length - 1), e.processData(), e.generatePoints()), e.data.forEach((function(i, s) {
                                    if (i && i.options && "undefined" !== typeof i.name) {
                                        var o = t.nameToX(i);
                                        "undefined" !== typeof o && o !== i.x && (i.x = o, e.xData[s] = o)
                                    }
                                }))
                            })))
                        }, s.prototype.setAxisTranslation = function(t) {
                            var e = this,
                                i = e.max - e.min,
                                s = e.axisPointRange || 0,
                                o = 0,
                                n = 0,
                                r = e.linkedParent,
                                a = !!e.categories,
                                h = e.transA,
                                l = e.isXAxis;
                            if (l || a || s) {
                                var c = e.getClosest();
                                r ? (o = r.minPointOffset, n = r.pointRangePadding) : e.series.forEach((function(t) {
                                    var i = a ? 1 : l ? A(t.options.pointRange, c, 0) : e.axisPointRange || 0,
                                        r = t.options.pointPlacement;
                                    s = Math.max(s, i), e.single && !a || (t = t.is("xrange") ? !l : l, o = Math.max(o, t && k(r) ? 0 : i / 2), n = Math.max(n, t && "on" === r ? 0 : i))
                                })), r = e.ordinal && e.ordinal.slope && c ? e.ordinal.slope / c : 1, e.minPointOffset = o *= r, e.pointRangePadding = n *= r, e.pointRange = Math.min(s, e.single && a ? 1 : i), l && (e.closestPointRange = c)
                            }
                            t && (e.oldTransA = h), e.translationSlope = e.transA = h = e.staticScale || e.len / (i + n || 1), e.transB = e.horiz ? e.left : e.bottom, e.minPixelPadding = h * o, g(this, "afterSetAxisTranslation")
                        }, s.prototype.minFromRange = function() {
                            return this.max - this.range
                        }, s.prototype.setTickInterval = function(t) {
                            var e = this,
                                i = e.chart,
                                s = e.logarithmic,
                                o = e.options,
                                n = e.isXAxis,
                                r = e.isLinked,
                                a = o.maxPadding,
                                h = o.minPadding,
                                l = o.tickInterval,
                                p = o.tickPixelInterval,
                                f = e.categories,
                                m = b(e.threshold) ? e.threshold : null,
                                v = e.softThreshold;
                            e.dateTime || f || r || this.getTickAmount();
                            var y = A(e.userMin, o.min),
                                k = A(e.userMax, o.max);
                            if (r) {
                                e.linkedParent = i[e.coll][o.linkedTo];
                                var M = e.linkedParent.getExtremes();
                                e.min = A(M.min, M.dataMin), e.max = A(M.max, M.dataMax), o.type !== e.linkedParent.options.type && u(11, 1, i)
                            } else {
                                if (!v && d(m))
                                    if (e.dataMin >= m) M = m, h = 0;
                                    else if (e.dataMax <= m) {
                                    var S = m;
                                    a = 0
                                }
                                e.min = A(y, M, e.dataMin), e.max = A(k, S, e.dataMax)
                            }
                            s && (e.positiveValuesOnly && !t && 0 >= Math.min(e.min, A(e.dataMin, e.min)) && u(10, 1, i), e.min = c(s.log2lin(e.min), 16), e.max = c(s.log2lin(e.max), 16)), e.range && d(e.max) && (e.userMin = e.min = y = Math.max(e.dataMin, e.minFromRange()), e.userMax = k = e.max, e.range = null), g(e, "foundExtremes"), e.beforePadding && e.beforePadding(), e.adjustForMinRange(), !(f || e.axisPointRange || e.stacking && e.stacking.usePercentage || r) && d(e.min) && d(e.max) && (i = e.max - e.min) && (!d(y) && h && (e.min -= i * h), !d(k) && a && (e.max += i * a)), b(e.userMin) || (b(o.softMin) && o.softMin < e.min && (e.min = y = o.softMin), b(o.floor) && (e.min = Math.max(e.min, o.floor))), b(e.userMax) || (b(o.softMax) && o.softMax > e.max && (e.max = k = o.softMax), b(o.ceiling) && (e.max = Math.min(e.max, o.ceiling))), v && d(e.dataMin) && (m = m || 0, !d(y) && e.min < m && e.dataMin >= m ? e.min = e.options.minRange ? Math.min(m, e.max - e.minRange) : m : !d(k) && e.max > m && e.dataMax <= m && (e.max = e.options.minRange ? Math.max(m, e.min + e.minRange) : m)), e.tickInterval = e.min === e.max || "undefined" === typeof e.min || "undefined" === typeof e.max ? 1 : r && !l && p === e.linkedParent.options.tickPixelInterval ? l = e.linkedParent.tickInterval : A(l, this.tickAmount ? (e.max - e.min) / Math.max(this.tickAmount - 1, 1) : void 0, f ? 1 : (e.max - e.min) * p / Math.max(e.len, p)), n && !t && e.series.forEach((function(t) {
                                t.processData(e.min !== e.oldMin || e.max !== e.oldMax)
                            })), e.setAxisTranslation(!0), g(this, "initialAxisTranslation"), e.pointRange && !l && (e.tickInterval = Math.max(e.pointRange, e.tickInterval)), t = A(o.minTickInterval, e.dateTime && !e.series.some((function(t) {
                                return t.noSharedTooltip
                            })) ? e.closestPointRange : 0), !l && e.tickInterval < t && (e.tickInterval = t), e.dateTime || e.logarithmic || l || (e.tickInterval = w(e.tickInterval, void 0, x(e.tickInterval), A(o.allowDecimals, .5 > e.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount)), this.tickAmount || (e.tickInterval = e.unsquish()), this.setTickPositions()
                        }, s.prototype.setTickPositions = function() {
                            var t = this.options,
                                e = t.tickPositions,
                                i = this.getMinorTickInterval(),
                                s = t.tickPositioner,
                                o = this.hasVerticalPanning(),
                                n = "colorAxis" === this.coll,
                                r = (n || !o) && t.startOnTick;
                            o = (n || !o) && t.endOnTick, this.tickmarkOffset = this.categories && "between" === t.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === i && this.tickInterval ? this.tickInterval / 5 : i, this.single = this.min === this.max && d(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== t.allowDecimals), this.tickPositions = i = e && e.slice(), !i && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? i = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (i = [this.min, this.max], u(19, !1, this.chart)), i.length > this.len && (i = [i[0], i.pop()], i[0] === i[1] && (i.length = 1)), this.tickPositions = i, s && (s = s.apply(this, [this.min, this.max]))) && (this.tickPositions = i = s), this.paddedTicks = i.slice(0), this.trimTicks(i, r, o), this.isLinked || (this.single && 2 > i.length && !this.categories && !this.series.some((function(t) {
                                return t.is("heatmap") && "between" === t.options.pointPlacement
                            })) && (this.min -= .5, this.max += .5), e || s || this.adjustTickAmount()), g(this, "afterSetTickPositions")
                        }, s.prototype.trimTicks = function(t, e, i) {
                            var s = t[0],
                                o = t[t.length - 1],
                                n = !this.isOrdinal && this.minPointOffset || 0;
                            if (g(this, "trimTicks"), !this.isLinked) {
                                if (e && -1 / 0 !== s) this.min = s;
                                else
                                    for (; this.min - n > t[0];) t.shift();
                                if (i) this.max = o;
                                else
                                    for (; this.max + n < t[t.length - 1];) t.pop();
                                0 === t.length && d(s) && !this.options.tickPositions && t.push((o + s) / 2)
                            }
                        }, s.prototype.alignToOthers = function() {
                            var t, e = {},
                                i = this.options;
                            return !1 === this.chart.options.chart.alignTicks || !1 === i.alignTicks || !1 === i.startOnTick || !1 === i.endOnTick || this.logarithmic || this.chart[this.coll].forEach((function(i) {
                                var s = i.options;
                                s = [i.horiz ? s.left : s.top, s.width, s.height, s.pane].join(), i.series.length && (e[s] ? t = !0 : e[s] = 1)
                            })), t
                        }, s.prototype.getTickAmount = function() {
                            var t = this.options,
                                e = t.tickAmount,
                                i = t.tickPixelInterval;
                            !d(t.tickInterval) && !e && this.len < i && !this.isRadial && !this.logarithmic && t.startOnTick && t.endOnTick && (e = 2), !e && this.alignToOthers() && (e = Math.ceil(this.len / i) + 1), 4 > e && (this.finalTickAmt = e, e = 5), this.tickAmount = e
                        }, s.prototype.adjustTickAmount = function() {
                            var t, e = this.options,
                                i = this.tickInterval,
                                s = this.tickPositions,
                                o = this.tickAmount,
                                n = this.finalTickAmt,
                                r = s && s.length,
                                a = A(this.threshold, this.softThreshold ? 0 : null);
                            if (this.hasData()) {
                                if (r < o) {
                                    for (t = this.min; s.length < o;) s.length % 2 || t === a ? s.push(c(s[s.length - 1] + i)) : s.unshift(c(s[0] - i));
                                    this.transA *= (r - 1) / (o - 1), this.min = e.startOnTick ? s[0] : Math.min(this.min, s[0]), this.max = e.endOnTick ? s[s.length - 1] : Math.max(this.max, s[s.length - 1])
                                } else r > o && (this.tickInterval *= 2, this.setTickPositions());
                                if (d(n)) {
                                    for (i = e = s.length; i--;)(3 === n && 1 === i % 2 || 2 >= n && 0 < i && i < e - 1) && s.splice(i, 1);
                                    this.finalTickAmt = void 0
                                }
                            }
                        }, s.prototype.setScale = function() {
                            var t, e = !1,
                                i = !1;
                            this.series.forEach((function(t) {
                                var s;
                                e = e || t.isDirtyData || t.isDirty, i = i || (null === (s = t.xAxis) || void 0 === s ? void 0 : s.isDirty) || !1
                            })), this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), (t = this.len !== this.oldAxisLength) || e || i || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = t || this.min !== this.oldMin || this.max !== this.oldMax)) : this.stacking && this.stacking.cleanStacks(), e && this.panningState && (this.panningState.isDirty = !0), g(this, "afterSetScale")
                        }, s.prototype.setExtremes = function(t, e, i, s, o) {
                            var n = this,
                                r = n.chart;
                            i = A(i, !0), n.series.forEach((function(t) {
                                delete t.kdTree
                            })), o = f(o, {
                                min: t,
                                max: e
                            }), g(n, "setExtremes", o, (function() {
                                n.userMin = t, n.userMax = e, n.eventArgs = o, i && r.redraw(s)
                            }))
                        }, s.prototype.zoom = function(t, e) {
                            var i = this,
                                s = this.dataMin,
                                o = this.dataMax,
                                n = this.options,
                                r = Math.min(s, A(n.min, s)),
                                a = Math.max(o, A(n.max, o));
                            return t = {
                                newMin: t,
                                newMax: e
                            }, g(this, "zoom", t, (function(t) {
                                var e = t.newMin,
                                    n = t.newMax;
                                e === i.min && n === i.max || (i.allowZoomOutside || (d(s) && (e < r && (e = r), e > a && (e = a)), d(o) && (n < r && (n = r), n > a && (n = a))), i.displayBtn = "undefined" !== typeof e || "undefined" !== typeof n, i.setExtremes(e, n, !1, void 0, {
                                    trigger: "zoom"
                                })), t.zoomed = !0
                            })), t.zoomed
                        }, s.prototype.setAxisSize = function() {
                            var t = this.chart,
                                e = this.options,
                                i = e.offsets || [0, 0, 0, 0],
                                s = this.horiz,
                                o = this.width = Math.round(T(A(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)),
                                n = this.height = Math.round(T(A(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)),
                                r = this.top = Math.round(T(A(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop));
                            e = this.left = Math.round(T(A(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft)), this.bottom = t.chartHeight - n - r, this.right = t.chartWidth - o - e, this.len = Math.max(s ? o : n, 0), this.pos = s ? e : r
                        }, s.prototype.getExtremes = function() {
                            var t = this.logarithmic;
                            return {
                                min: t ? c(t.lin2log(this.min)) : this.min,
                                max: t ? c(t.lin2log(this.max)) : this.max,
                                dataMin: this.dataMin,
                                dataMax: this.dataMax,
                                userMin: this.userMin,
                                userMax: this.userMax
                            }
                        }, s.prototype.getThreshold = function(t) {
                            var e = this.logarithmic,
                                i = e ? e.lin2log(this.min) : this.min;
                            return e = e ? e.lin2log(this.max) : this.max, null === t || -1 / 0 === t ? t = i : 1 / 0 === t ? t = e : i > t ? t = i : e < t && (t = e), this.translate(t, 0, 1, 0, 1)
                        }, s.prototype.autoLabelAlign = function(t) {
                            var e = (A(t, 0) - 90 * this.side + 720) % 360;
                            return t = {
                                align: "center"
                            }, g(this, "autoLabelAlign", t, (function(t) {
                                15 < e && 165 > e ? t.align = "right" : 195 < e && 345 > e && (t.align = "left")
                            })), t.align
                        }, s.prototype.tickSize = function(t) {
                            var e = this.options,
                                i = e["tick" === t ? "tickLength" : "minorTickLength"],
                                s = A(e["tick" === t ? "tickWidth" : "minorTickWidth"], "tick" === t && this.isXAxis && !this.categories ? 1 : 0);
                            if (s && i) {
                                "inside" === e[t + "Position"] && (i = -i);
                                var o = [i, s]
                            }
                            return t = {
                                tickSize: o
                            }, g(this, "afterTickSize", t), t.tickSize
                        }, s.prototype.labelMetrics = function() {
                            var t = this.tickPositions && this.tickPositions[0] || 0;
                            return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[t] && this.ticks[t].label)
                        }, s.prototype.unsquish = function() {
                            var t, e, i, s = this.options.labels,
                                o = this.horiz,
                                n = this.tickInterval,
                                r = n,
                                a = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / n),
                                h = s.rotation,
                                l = this.labelMetrics(),
                                p = Number.MAX_VALUE,
                                u = this.max - this.min,
                                f = function(t) {
                                    var e = t / (a || 1);
                                    return e = 1 < e ? Math.ceil(e) : 1, e * n > u && 1 / 0 !== t && 1 / 0 !== a && u && (e = Math.ceil(u / n)), c(e * n)
                                };
                            return o ? (i = !s.staggerLines && !s.step && (d(h) ? [h] : a < A(s.autoRotationLimit, 80) && s.autoRotation)) && i.forEach((function(i) {
                                if (i === h || i && -90 <= i && 90 >= i) {
                                    e = f(Math.abs(l.h / Math.sin(L * i)));
                                    var s = e + Math.abs(i / 360);
                                    s < p && (p = s, t = i, r = e)
                                }
                            })) : s.step || (r = f(l.h)), this.autoRotation = i, this.labelRotation = A(t, h), r
                        }, s.prototype.getSlotWidth = function(t) {
                            var e, i = this.chart,
                                s = this.horiz,
                                o = this.options.labels,
                                n = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                                r = i.margin[3];
                            if (t && b(t.slotWidth)) return t.slotWidth;
                            if (s && o && 2 > (o.step || 0)) return o.rotation ? 0 : (this.staggerLines || 1) * this.len / n;
                            if (!s) {
                                if (t = null === (e = null === o || void 0 === o ? void 0 : o.style) || void 0 === e ? void 0 : e.width, void 0 !== t) return parseInt(t, 10);
                                if (r) return r - i.spacing[3]
                            }
                            return .33 * i.chartWidth
                        }, s.prototype.renderUnsquish = function() {
                            var t = this.chart,
                                e = t.renderer,
                                i = this.tickPositions,
                                s = this.ticks,
                                o = this.options.labels,
                                n = o && o.style || {},
                                r = this.horiz,
                                a = this.getSlotWidth(),
                                h = Math.max(1, Math.round(a - 2 * (o.padding || 5))),
                                l = {},
                                c = this.labelMetrics(),
                                d = o.style && o.style.textOverflow,
                                p = 0;
                            if (k(o.rotation) || (l.rotation = o.rotation || 0), i.forEach((function(t) {
                                    t = s[t], t.movedLabel && t.replaceMovedLabel(), t && t.label && t.label.textPxLength > p && (p = t.label.textPxLength)
                                })), this.maxLabelLength = p, this.autoRotation) p > h && p > c.h ? l.rotation = this.labelRotation : this.labelRotation = 0;
                            else if (a) {
                                var u = h;
                                if (!d) {
                                    var f = "clip";
                                    for (h = i.length; !r && h--;) {
                                        var g = i[h];
                                        (g = s[g].label) && (g.styles && "ellipsis" === g.styles.textOverflow ? g.css({
                                            textOverflow: "clip"
                                        }) : g.textPxLength > a && g.css({
                                            width: a + "px"
                                        }), g.getBBox().height > this.len / i.length - (c.h - c.f) && (g.specificTextOverflow = "ellipsis"))
                                    }
                                }
                            }
                            l.rotation && (u = p > .5 * t.chartHeight ? .33 * t.chartHeight : p, d || (f = "ellipsis")), (this.labelAlign = o.align || this.autoLabelAlign(this.labelRotation)) && (l.align = this.labelAlign), i.forEach((function(t) {
                                var e = (t = s[t]) && t.label,
                                    i = n.width,
                                    o = {};
                                e && (e.attr(l), t.shortenLabel ? t.shortenLabel() : u && !i && "nowrap" !== n.whiteSpace && (u < e.textPxLength || "SPAN" === e.element.tagName) ? (o.width = u + "px", d || (o.textOverflow = e.specificTextOverflow || f), e.css(o)) : e.styles && e.styles.width && !o.width && !i && e.css({
                                    width: null
                                }), delete e.specificTextOverflow, t.rotation = l.rotation)
                            }), this), this.tickRotCorr = e.rotCorr(c.b, this.labelRotation || 0, 0 !== this.side)
                        }, s.prototype.hasData = function() {
                            return this.series.some((function(t) {
                                return t.hasData()
                            })) || this.options.showEmpty && d(this.min) && d(this.max)
                        }, s.prototype.addTitle = function(t) {
                            var e, i = this.chart.renderer,
                                s = this.horiz,
                                o = this.opposite,
                                n = this.options.title,
                                r = this.chart.styledMode;
                            this.axisTitle || ((e = n.textAlign) || (e = (s ? {
                                low: "left",
                                middle: "center",
                                high: "right"
                            } : {
                                low: o ? "right" : "left",
                                middle: "center",
                                high: o ? "left" : "right"
                            })[n.align]), this.axisTitle = i.text(n.text, 0, 0, n.useHTML).attr({
                                zIndex: 7,
                                rotation: n.rotation || 0,
                                align: e
                            }).addClass("highcharts-axis-title"), r || this.axisTitle.css(M(n.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), r || n.style.width || this.isRadial || this.axisTitle.css({
                                width: this.len + "px"
                            }), this.axisTitle[t ? "show" : "hide"](t)
                        }, s.prototype.generateTick = function(t) {
                            var e = this.ticks;
                            e[t] ? e[t].addLabel() : e[t] = new i(this, t)
                        }, s.prototype.getOffset = function() {
                            var t, e = this,
                                i = e.chart,
                                s = i.renderer,
                                o = e.options,
                                n = e.tickPositions,
                                r = e.ticks,
                                a = e.horiz,
                                h = e.side,
                                l = i.inverted && !e.isZAxis ? [1, 0, 3, 2][h] : h,
                                c = 0,
                                p = 0,
                                u = o.title,
                                f = o.labels,
                                m = 0,
                                x = i.axisOffset;
                            i = i.clipOffset;
                            var v = [-1, 1, 1, -1][h],
                                y = o.className,
                                b = e.axisParent,
                                k = e.hasData();
                            if (e.showAxis = t = k || A(o.showEmpty, !0), e.staggerLines = e.horiz && f.staggerLines, e.axisGroup || (e.gridGroup = s.g("grid").attr({
                                    zIndex: o.gridZIndex || 1
                                }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (y || "")).add(b), e.axisGroup = s.g("axis").attr({
                                    zIndex: o.zIndex || 2
                                }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (y || "")).add(b), e.labelGroup = s.g("axis-labels").attr({
                                    zIndex: f.zIndex || 7
                                }).addClass("highcharts-" + e.coll.toLowerCase() + "-labels " + (y || "")).add(b)), k || e.isLinked ? (n.forEach((function(t, i) {
                                    e.generateTick(t, i)
                                })), e.renderUnsquish(), e.reserveSpaceDefault = 0 === h || 2 === h || {
                                    1: "left",
                                    3: "right"
                                }[h] === e.labelAlign, A(f.reserveSpace, "center" === e.labelAlign || null, e.reserveSpaceDefault) && n.forEach((function(t) {
                                    m = Math.max(r[t].getLabelSize(), m)
                                })), e.staggerLines && (m *= e.staggerLines), e.labelOffset = m * (e.opposite ? -1 : 1)) : S(r, (function(t, e) {
                                    t.destroy(), delete r[e]
                                })), u && u.text && !1 !== u.enabled && (e.addTitle(t), t && !1 !== u.reserveSpace)) {
                                e.titleOffset = c = e.axisTitle.getBBox()[a ? "height" : "width"];
                                var M = u.offset;
                                p = d(M) ? 0 : A(u.margin, a ? 5 : 10)
                            }
                            e.renderLine(), e.offset = v * A(o.offset, x[h] ? x[h] + (o.margin || 0) : 0), e.tickRotCorr = e.tickRotCorr || {
                                x: 0,
                                y: 0
                            }, s = 0 === h ? -e.labelMetrics().h : 2 === h ? e.tickRotCorr.y : 0, p = Math.abs(m) + p, m && (p = p - s + v * (a ? A(f.y, e.tickRotCorr.y + 8 * v) : f.x)), e.axisTitleMargin = A(M, p), e.getMaxLabelDimensions && (e.maxLabelDimensions = e.getMaxLabelDimensions(r, n)), a = this.tickSize("tick"), x[h] = Math.max(x[h], e.axisTitleMargin + c + v * e.offset, p, n && n.length && a ? a[0] + v * e.offset : 0), o = o.offset ? 0 : 2 * Math.floor(e.axisLine.strokeWidth() / 2), i[l] = Math.max(i[l], o), g(this, "afterGetOffset")
                        }, s.prototype.getLinePath = function(t) {
                            var e = this.chart,
                                i = this.opposite,
                                s = this.offset,
                                o = this.horiz,
                                n = this.left + (i ? this.width : 0) + s;
                            return s = e.chartHeight - this.bottom - (i ? this.height : 0) + s, i && (t *= -1), e.renderer.crispLine([
                                ["M", o ? this.left : n, o ? s : this.top],
                                ["L", o ? e.chartWidth - this.right : n, o ? s : e.chartHeight - this.bottom]
                            ], t)
                        }, s.prototype.renderLine = function() {
                            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
                                stroke: this.options.lineColor,
                                "stroke-width": this.options.lineWidth,
                                zIndex: 7
                            }))
                        }, s.prototype.getTitlePosition = function() {
                            var t = this.horiz,
                                e = this.left,
                                i = this.top,
                                s = this.len,
                                o = this.options.title,
                                n = t ? e : i,
                                r = this.opposite,
                                a = this.offset,
                                h = o.x || 0,
                                l = o.y || 0,
                                c = this.axisTitle,
                                d = this.chart.renderer.fontMetrics(o.style && o.style.fontSize, c);
                            return c = Math.max(c.getBBox(null, 0).height - d.h - 1, 0), s = {
                                low: n + (t ? 0 : s),
                                middle: n + s / 2,
                                high: n + (t ? s : 0)
                            }[o.align], e = (t ? i + this.height : e) + (t ? 1 : -1) * (r ? -1 : 1) * this.axisTitleMargin + [-c, c, d.f, -c][this.side], t = {
                                x: t ? s + h : e + (r ? this.width : 0) + a + h,
                                y: t ? e + l - (r ? this.height : 0) + a : s + l
                            }, g(this, "afterGetTitlePosition", {
                                titlePosition: t
                            }), t
                        }, s.prototype.renderMinorTick = function(t) {
                            var e = this.chart.hasRendered && b(this.oldMin),
                                s = this.minorTicks;
                            s[t] || (s[t] = new i(this, t, "minor")), e && s[t].isNew && s[t].render(null, !0), s[t].render(null, !1, 1)
                        }, s.prototype.renderTick = function(t, e) {
                            var s = this.isLinked,
                                o = this.ticks,
                                n = this.chart.hasRendered && b(this.oldMin);
                            (!s || t >= this.min && t <= this.max) && (o[t] || (o[t] = new i(this, t)), n && o[t].isNew && o[t].render(e, !0, -1), o[t].render(e))
                        }, s.prototype.render = function() {
                            var t, s, o = this,
                                n = o.chart,
                                a = o.logarithmic,
                                h = o.options,
                                l = o.isLinked,
                                c = o.tickPositions,
                                d = o.axisTitle,
                                p = o.ticks,
                                u = o.minorTicks,
                                f = o.alternateBands,
                                m = h.stackLabels,
                                x = h.alternateGridColor,
                                v = o.tickmarkOffset,
                                y = o.axisLine,
                                k = o.showAxis,
                                M = r(n.renderer.globalAnimation);
                            o.labelEdge.length = 0, o.overlap = !1, [p, u, f].forEach((function(t) {
                                S(t, (function(t) {
                                    t.isActive = !1
                                }))
                            })), (o.hasData() || l) && (o.minorTickInterval && !o.categories && o.getMinorTickPositions().forEach((function(t) {
                                o.renderMinorTick(t)
                            })), c.length && (c.forEach((function(t, e) {
                                o.renderTick(t, e)
                            })), v && (0 === o.min || o.single) && (p[-1] || (p[-1] = new i(o, -1, null, !0)), p[-1].render(-1))), x && c.forEach((function(i, r) {
                                s = "undefined" !== typeof c[r + 1] ? c[r + 1] + v : o.max - v, 0 === r % 2 && i < o.max && s <= o.max + (n.polar ? -v : v) && (f[i] || (f[i] = new e.PlotLineOrBand(o)), t = i + v, f[i].options = {
                                    from: a ? a.lin2log(t) : t,
                                    to: a ? a.lin2log(s) : s,
                                    color: x,
                                    className: "highcharts-alternate-grid"
                                }, f[i].render(), f[i].isActive = !0)
                            })), o._addedPlotLB || ((h.plotLines || []).concat(h.plotBands || []).forEach((function(t) {
                                o.addPlotBandOrLine(t)
                            })), o._addedPlotLB = !0)), [p, u, f].forEach((function(t) {
                                var e, i = [],
                                    s = M.duration;
                                S(t, (function(t, e) {
                                    t.isActive || (t.render(e, !1, 0), t.isActive = !1, i.push(e))
                                })), O((function() {
                                    for (e = i.length; e--;) t[i[e]] && !t[i[e]].isActive && (t[i[e]].destroy(), delete t[i[e]])
                                }), t !== f && n.hasRendered && s ? s : 0)
                            })), y && (y[y.isPlaced ? "animate" : "attr"]({
                                d: this.getLinePath(y.strokeWidth())
                            }), y.isPlaced = !0, y[k ? "show" : "hide"](k)), d && k && (h = o.getTitlePosition(), b(h.y) ? (d[d.isNew ? "attr" : "animate"](h), d.isNew = !1) : (d.attr("y", -9999), d.isNew = !0)), m && m.enabled && o.stacking && o.stacking.renderStackTotals(), o.isDirty = !1, g(this, "afterRender")
                        }, s.prototype.redraw = function() {
                            this.visible && (this.render(), this.plotLinesAndBands.forEach((function(t) {
                                t.render()
                            }))), this.series.forEach((function(t) {
                                t.isDirty = !0
                            }))
                        }, s.prototype.getKeepProps = function() {
                            return this.keepProps || s.keepProps
                        }, s.prototype.destroy = function(t) {
                            var e, i = this,
                                s = i.plotLinesAndBands;
                            if (g(this, "destroy", {
                                    keepEvents: t
                                }), t || P(i), [i.ticks, i.minorTicks, i.alternateBands].forEach((function(t) {
                                    p(t)
                                })), s)
                                for (t = s.length; t--;) s[t].destroy();
                            for (e in "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach((function(t) {
                                    i[t] && (i[t] = i[t].destroy())
                                })), i.plotLinesAndBandsGroups) i.plotLinesAndBandsGroups[e] = i.plotLinesAndBandsGroups[e].destroy();
                            S(i, (function(t, e) {
                                -1 === i.getKeepProps().indexOf(e) && delete i[e]
                            }))
                        }, s.prototype.drawCrosshair = function(e, i) {
                            var s, o = this.crosshair,
                                n = A(o.snap, !0),
                                r = this.cross,
                                a = this.chart;
                            if (g(this, "drawCrosshair", {
                                    e: e,
                                    point: i
                                }), e || (e = this.cross && this.cross.e), this.crosshair && !1 !== (d(i) || !n)) {
                                if (n ? d(i) && (s = A("colorAxis" !== this.coll ? i.crosshairPos : null, this.isXAxis ? i.plotX : this.len - i.plotY)) : s = e && (this.horiz ? e.chartX - this.pos : this.len - e.chartY + this.pos), d(s)) {
                                    var h = {
                                        value: i && (this.isXAxis ? i.x : A(i.stackY, i.y)),
                                        translatedValue: s
                                    };
                                    a.polar && f(h, {
                                        isCrosshair: !0,
                                        chartX: e && e.chartX,
                                        chartY: e && e.chartY,
                                        point: i
                                    }), h = this.getPlotLinePath(h) || null
                                }
                                if (!d(h)) return void this.hideCrosshair();
                                n = this.categories && !this.isRadial, r || (this.cross = r = a.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (n ? "category " : "thin ") + o.className).attr({
                                    zIndex: A(o.zIndex, 2)
                                }).add(), a.styledMode || (r.attr({
                                    stroke: o.color || (n ? t.parse("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                                    "stroke-width": A(o.width, 1)
                                }).css({
                                    "pointer-events": "none"
                                }), o.dashStyle && r.attr({
                                    dashstyle: o.dashStyle
                                }))), r.show().attr({
                                    d: h
                                }), n && !o.width && r.attr({
                                    "stroke-width": this.transA
                                }), this.cross.e = e
                            } else this.hideCrosshair();
                            g(this, "afterDrawCrosshair", {
                                e: e,
                                point: i
                            })
                        }, s.prototype.hideCrosshair = function() {
                            this.cross && this.cross.hide(), g(this, "afterHideCrosshair")
                        }, s.prototype.hasVerticalPanning = function() {
                            var t, e;
                            return /y/.test((null === (e = null === (t = this.chart.options.chart) || void 0 === t ? void 0 : t.panning) || void 0 === e ? void 0 : e.type) || "")
                        }, s.defaultOptions = {
                            dateTimeLabelFormats: {
                                millisecond: {
                                    main: "%H:%M:%S.%L",
                                    range: !1
                                },
                                second: {
                                    main: "%H:%M:%S",
                                    range: !1
                                },
                                minute: {
                                    main: "%H:%M",
                                    range: !1
                                },
                                hour: {
                                    main: "%H:%M",
                                    range: !1
                                },
                                day: {
                                    main: "%e. %b"
                                },
                                week: {
                                    main: "%e. %b"
                                },
                                month: {
                                    main: "%b '%y"
                                },
                                year: {
                                    main: "%Y"
                                }
                            },
                            endOnTick: !1,
                            labels: {
                                enabled: !0,
                                indentation: 10,
                                x: 0,
                                style: {
                                    color: "#666666",
                                    cursor: "default",
                                    fontSize: "11px"
                                }
                            },
                            maxPadding: .01,
                            minorTickLength: 2,
                            minorTickPosition: "outside",
                            minPadding: .01,
                            showEmpty: !0,
                            startOfWeek: 1,
                            startOnTick: !1,
                            tickLength: 10,
                            tickPixelInterval: 100,
                            tickmarkPlacement: "between",
                            tickPosition: "outside",
                            title: {
                                align: "middle",
                                style: {
                                    color: "#666666"
                                }
                            },
                            type: "linear",
                            minorGridLineColor: "#f2f2f2",
                            minorGridLineWidth: 1,
                            minorTickColor: "#999999",
                            lineColor: "#ccd6eb",
                            lineWidth: 1,
                            gridLineColor: "#e6e6e6",
                            tickColor: "#ccd6eb"
                        }, s.defaultYAxisOptions = {
                            endOnTick: !0,
                            maxPadding: .05,
                            minPadding: .05,
                            tickPixelInterval: 72,
                            showLastLabel: !0,
                            labels: {
                                x: -8
                            },
                            startOnTick: !0,
                            title: {
                                rotation: 270,
                                text: "Values"
                            },
                            stackLabels: {
                                allowOverlap: !1,
                                enabled: !1,
                                crop: !0,
                                overflow: "justify",
                                formatter: function() {
                                    var t = this.axis.chart.numberFormatter;
                                    return t(this.total, -1)
                                },
                                style: {
                                    color: "#000000",
                                    fontSize: "11px",
                                    fontWeight: "bold",
                                    textOutline: "1px contrast"
                                }
                            },
                            gridLineWidth: 1,
                            lineWidth: 0
                        }, s.defaultLeftAxisOptions = {
                            labels: {
                                x: -15
                            },
                            title: {
                                rotation: 270
                            }
                        }, s.defaultRightAxisOptions = {
                            labels: {
                                x: 15
                            },
                            title: {
                                rotation: 90
                            }
                        }, s.defaultBottomAxisOptions = {
                            labels: {
                                autoRotation: [-45],
                                x: 0
                            },
                            margin: 15,
                            title: {
                                rotation: 0
                            }
                        }, s.defaultTopAxisOptions = {
                            labels: {
                                autoRotation: [-45],
                                x: 0
                            },
                            margin: 15,
                            title: {
                                rotation: 0
                            }
                        }, s.keepProps = "extKey hcEvents names series userMax userMin".split(" "), s
                    }(), e.Axis = s, e.Axis
                })), e(i, "parts/DateTimeAxis.js", [i["parts/Axis.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.addEvent,
                        s = e.getMagnitude,
                        o = e.normalizeTickInterval,
                        n = e.timeUnits,
                        r = function() {
                            function t(t) {
                                this.axis = t
                            }
                            return t.prototype.normalizeTimeTickInterval = function(t, e) {
                                var i = e || [
                                    ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                                    ["second", [1, 2, 5, 10, 15, 30]],
                                    ["minute", [1, 2, 5, 10, 15, 30]],
                                    ["hour", [1, 2, 3, 4, 6, 8, 12]],
                                    ["day", [1, 2]],
                                    ["week", [1, 2]],
                                    ["month", [1, 2, 3, 4, 6]],
                                    ["year", null]
                                ];
                                e = i[i.length - 1];
                                var r, a = n[e[0]],
                                    h = e[1];
                                for (r = 0; r < i.length && (e = i[r], a = n[e[0]], h = e[1], !(i[r + 1] && t <= (a * h[h.length - 1] + n[i[r + 1][0]]) / 2)); r++);
                                return a === n.year && t < 5 * a && (h = [1, 2, 5]), t = o(t / a, h, "year" === e[0] ? Math.max(s(t / a), 1) : 1), {
                                    unitRange: a,
                                    count: t,
                                    unitName: e[0]
                                }
                            }, t
                        }();
                    return e = function() {
                        function t() {}
                        return t.compose = function(t) {
                            t.keepProps.push("dateTime"), t.prototype.getTimeTicks = function() {
                                return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
                            }, i(t, "init", (function(t) {
                                "datetime" !== t.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new r(this))
                            }))
                        }, t.AdditionsClass = r, t
                    }(), e.compose(t), e
                })), e(i, "parts/LogarithmicAxis.js", [i["parts/Axis.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.addEvent,
                        s = e.getMagnitude,
                        o = e.normalizeTickInterval,
                        n = e.pick,
                        r = function() {
                            function t(t) {
                                this.axis = t
                            }
                            return t.prototype.getLogTickPositions = function(t, e, i, r) {
                                var a = this.axis,
                                    h = a.len,
                                    l = a.options,
                                    c = [];
                                if (r || (this.minorAutoInterval = void 0), .5 <= t) t = Math.round(t), c = a.getLinearTickPositions(t, e, i);
                                else if (.08 <= t) {
                                    var d, p;
                                    for (l = Math.floor(e), h = .3 < t ? [1, 2, 4] : .15 < t ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; l < i + 1 && !p; l++) {
                                        var u = h.length;
                                        for (d = 0; d < u && !p; d++) {
                                            var f = this.log2lin(this.lin2log(l) * h[d]);
                                            f > e && (!r || g <= i) && "undefined" !== typeof g && c.push(g), g > i && (p = !0);
                                            var g = f
                                        }
                                    }
                                } else e = this.lin2log(e), i = this.lin2log(i), t = r ? a.getMinorTickInterval() : l.tickInterval, t = n("auto" === t ? null : t, this.minorAutoInterval, l.tickPixelInterval / (r ? 5 : 1) * (i - e) / ((r ? h / a.tickPositions.length : h) || 1)), t = o(t, void 0, s(t)), c = a.getLinearTickPositions(t, e, i).map(this.log2lin), r || (this.minorAutoInterval = t / 5);
                                return r || (a.tickInterval = t), c
                            }, t.prototype.lin2log = function(t) {
                                return Math.pow(10, t)
                            }, t.prototype.log2lin = function(t) {
                                return Math.log(t) / Math.LN10
                            }, t
                        }();
                    return e = function() {
                        function t() {}
                        return t.compose = function(t) {
                            t.keepProps.push("logarithmic");
                            var e = t.prototype,
                                s = r.prototype;
                            e.log2lin = s.log2lin, e.lin2log = s.lin2log, i(t, "init", (function(t) {
                                var e = this.logarithmic;
                                "logarithmic" !== t.userOptions.type ? this.logarithmic = void 0 : (e || (e = this.logarithmic = new r(this)), this.log2lin !== e.log2lin && (e.log2lin = this.log2lin.bind(this)), this.lin2log !== e.lin2log && (e.lin2log = this.lin2log.bind(this)))
                            })), i(t, "afterInit", (function() {
                                var t = this.logarithmic;
                                t && (this.lin2val = function(e) {
                                    return t.lin2log(e)
                                }, this.val2lin = function(e) {
                                    return t.log2lin(e)
                                })
                            }))
                        }, t
                    }(), e.compose(t), e
                })), e(i, "parts/PlotLineOrBand.js", [i["parts/Axis.js"], i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e, i) {
                    var s = i.arrayMax,
                        o = i.arrayMin,
                        n = i.defined,
                        r = i.destroyObjectProperties,
                        a = i.erase,
                        h = i.extend,
                        l = i.merge,
                        c = i.objectEach,
                        d = i.pick,
                        p = function() {
                            function t(t, e) {
                                this.axis = t, e && (this.options = e, this.id = e.id)
                            }
                            return t.prototype.render = function() {
                                e.fireEvent(this, "render");
                                var t = this,
                                    i = t.axis,
                                    s = i.horiz,
                                    o = i.logarithmic,
                                    r = t.options,
                                    a = r.label,
                                    h = t.label,
                                    p = r.to,
                                    u = r.from,
                                    f = r.value,
                                    g = n(u) && n(p),
                                    m = n(f),
                                    x = t.svgElem,
                                    v = !x,
                                    y = [],
                                    b = r.color,
                                    k = d(r.zIndex, 0),
                                    M = r.events;
                                y = {
                                    class: "highcharts-plot-" + (g ? "band " : "line ") + (r.className || "")
                                };
                                var w = {},
                                    S = i.chart.renderer,
                                    A = g ? "bands" : "lines";
                                if (o && (u = o.log2lin(u), p = o.log2lin(p), f = o.log2lin(f)), i.chart.styledMode || (m ? (y.stroke = b || "#999999", y["stroke-width"] = d(r.width, 1), r.dashStyle && (y.dashstyle = r.dashStyle)) : g && (y.fill = b || "#e6ebf5", r.borderWidth && (y.stroke = r.borderColor, y["stroke-width"] = r.borderWidth))), w.zIndex = k, A += "-" + k, (o = i.plotLinesAndBandsGroups[A]) || (i.plotLinesAndBandsGroups[A] = o = S.g("plot-" + A).attr(w).add()), v && (t.svgElem = x = S.path().attr(y).add(o)), m) y = i.getPlotLinePath({
                                    value: f,
                                    lineWidth: x.strokeWidth(),
                                    acrossPanes: r.acrossPanes
                                });
                                else {
                                    if (!g) return;
                                    y = i.getPlotBandPath(u, p, r)
                                }
                                return !t.eventsAdded && M && (c(M, (function(e, i) {
                                    x.on(i, (function(e) {
                                        M[i].apply(t, [e])
                                    }))
                                })), t.eventsAdded = !0), (v || !x.d) && y && y.length ? x.attr({
                                    d: y
                                }) : x && (y ? (x.show(!0), x.animate({
                                    d: y
                                })) : x.d && (x.hide(), h && (t.label = h = h.destroy()))), a && (n(a.text) || n(a.formatter)) && y && y.length && 0 < i.width && 0 < i.height && !y.isFlat ? (a = l({
                                    align: s && g && "center",
                                    x: s ? !g && 4 : 10,
                                    verticalAlign: !s && g && "middle",
                                    y: s ? g ? 16 : 10 : g ? 6 : -4,
                                    rotation: s && !g && 90
                                }, a), this.renderLabel(a, y, g, k)) : h && h.hide(), t
                            }, t.prototype.renderLabel = function(t, e, i, n) {
                                var r = this.label,
                                    a = this.axis.chart.renderer;
                                r || (r = {
                                    align: t.textAlign || t.align,
                                    rotation: t.rotation,
                                    class: "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || "")
                                }, r.zIndex = n, n = this.getLabelText(t), this.label = r = a.text(n, 0, 0, t.useHTML).attr(r).add(), this.axis.chart.styledMode || r.css(t.style)), a = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]], e = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]], i = o(a), n = o(e), r.align(t, !1, {
                                    x: i,
                                    y: n,
                                    width: s(a) - i,
                                    height: s(e) - n
                                }), r.show(!0)
                            }, t.prototype.getLabelText = function(t) {
                                return n(t.formatter) ? t.formatter.call(this) : t.text
                            }, t.prototype.destroy = function() {
                                a(this.axis.plotLinesAndBands, this), delete this.axis, r(this)
                            }, t
                        }();
                    return h(t.prototype, {
                        getPlotBandPath: function(t, e) {
                            var i = this.getPlotLinePath({
                                    value: e,
                                    force: !0,
                                    acrossPanes: this.options.acrossPanes
                                }),
                                s = this.getPlotLinePath({
                                    value: t,
                                    force: !0,
                                    acrossPanes: this.options.acrossPanes
                                }),
                                o = [],
                                n = this.horiz,
                                r = 1;
                            if (t = t < this.min && e < this.min || t > this.max && e > this.max, s && i) {
                                if (t) {
                                    var a = s.toString() === i.toString();
                                    r = 0
                                }
                                for (t = 0; t < s.length; t += 2) {
                                    e = s[t];
                                    var h = s[t + 1],
                                        l = i[t],
                                        c = i[t + 1];
                                    "M" !== e[0] && "L" !== e[0] || "M" !== h[0] && "L" !== h[0] || "M" !== l[0] && "L" !== l[0] || "M" !== c[0] && "L" !== c[0] || (n && l[1] === e[1] ? (l[1] += r, c[1] += r) : n || l[2] !== e[2] || (l[2] += r, c[2] += r), o.push(["M", e[1], e[2]], ["L", h[1], h[2]], ["L", c[1], c[2]], ["L", l[1], l[2]], ["Z"])), o.isFlat = a
                                }
                            }
                            return o
                        },
                        addPlotBand: function(t) {
                            return this.addPlotBandOrLine(t, "plotBands")
                        },
                        addPlotLine: function(t) {
                            return this.addPlotBandOrLine(t, "plotLines")
                        },
                        addPlotBandOrLine: function(t, e) {
                            var i = new p(this, t).render(),
                                s = this.userOptions;
                            if (i) {
                                if (e) {
                                    var o = s[e] || [];
                                    o.push(t), s[e] = o
                                }
                                this.plotLinesAndBands.push(i), this._addedPlotLB = !0
                            }
                            return i
                        },
                        removePlotBandOrLine: function(t) {
                            for (var e = this.plotLinesAndBands, i = this.options, s = this.userOptions, o = e.length; o--;) e[o].id === t && e[o].destroy();
                            [i.plotLines || [], s.plotLines || [], i.plotBands || [], s.plotBands || []].forEach((function(e) {
                                for (o = e.length; o--;)(e[o] || {}).id === t && a(e, e[o])
                            }))
                        },
                        removePlotBand: function(t) {
                            this.removePlotBandOrLine(t)
                        },
                        removePlotLine: function(t) {
                            this.removePlotBandOrLine(t)
                        }
                    }), e.PlotLineOrBand = p, e.PlotLineOrBand
                })), e(i, "parts/Tooltip.js", [i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = t.doc,
                        s = e.clamp,
                        o = e.css,
                        n = e.defined,
                        r = e.discardElement,
                        a = e.extend,
                        h = e.fireEvent,
                        l = e.format,
                        c = e.isNumber,
                        d = e.isString,
                        p = e.merge,
                        u = e.pick,
                        f = e.splat,
                        g = e.syncTimeout,
                        m = e.timeUnits,
                        x = function() {
                            function x(t, e) {
                                this.container = void 0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.now = {}, this.options = {}, this.outside = !1, this.chart = t, this.init(t, e)
                            }
                            return x.prototype.applyFilter = function() {
                                var t = this.chart;
                                t.renderer.definition({
                                    tagName: "filter",
                                    id: "drop-shadow-" + t.index,
                                    opacity: .5,
                                    children: [{
                                        tagName: "feGaussianBlur",
                                        in: "SourceAlpha",
                                        stdDeviation: 1
                                    }, {
                                        tagName: "feOffset",
                                        dx: 1,
                                        dy: 1
                                    }, {
                                        tagName: "feComponentTransfer",
                                        children: [{
                                            tagName: "feFuncA",
                                            type: "linear",
                                            slope: .3
                                        }]
                                    }, {
                                        tagName: "feMerge",
                                        children: [{
                                            tagName: "feMergeNode"
                                        }, {
                                            tagName: "feMergeNode",
                                            in: "SourceGraphic"
                                        }]
                                    }]
                                }), t.renderer.definition({
                                    tagName: "style",
                                    textContent: ".highcharts-tooltip-" + t.index + "{filter:url(#drop-shadow-" + t.index + ")}"
                                })
                            }, x.prototype.bodyFormatter = function(t) {
                                return t.map((function(t) {
                                    var e = t.series.tooltipOptions;
                                    return (e[(t.point.formatPrefix || "point") + "Formatter"] || t.point.tooltipFormatter).call(t.point, e[(t.point.formatPrefix || "point") + "Format"] || "")
                                }))
                            }, x.prototype.cleanSplit = function(t) {
                                this.chart.series.forEach((function(e) {
                                    var i = e && e.tt;
                                    i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1)
                                }))
                            }, x.prototype.defaultFormatter = function(t) {
                                var e = this.points || f(this),
                                    i = [t.tooltipFooterHeaderFormatter(e[0])];
                                return i = i.concat(t.bodyFormatter(e)), i.push(t.tooltipFooterHeaderFormatter(e[0], !0)), i
                            }, x.prototype.destroy = function() {
                                this.label && (this.label = this.label.destroy()), this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()), this.renderer && (this.renderer = this.renderer.destroy(), r(this.container)), e.clearTimeout(this.hideTimer), e.clearTimeout(this.tooltipTimeout)
                            }, x.prototype.getAnchor = function(t, e) {
                                var i, s, o = this.chart,
                                    n = o.pointer,
                                    r = o.inverted,
                                    a = o.plotTop,
                                    h = o.plotLeft,
                                    l = 0,
                                    c = 0;
                                return t = f(t), this.followPointer && e ? ("undefined" === typeof e.chartX && (e = n.normalize(e)), t = [e.chartX - h, e.chartY - a]) : t[0].tooltipPos ? t = t[0].tooltipPos : (t.forEach((function(t) {
                                    i = t.series.yAxis, s = t.series.xAxis, l += t.plotX + (!r && s ? s.left - h : 0), c += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!r && i ? i.top - a : 0)
                                })), l /= t.length, c /= t.length, t = [r ? o.plotWidth - c : l, this.shared && !r && 1 < t.length && e ? e.chartY - a : r ? o.plotHeight - l : c]), t.map(Math.round)
                            }, x.prototype.getDateFormat = function(t, e, i, s) {
                                var o = this.chart.time,
                                    n = o.dateFormat("%m-%d %H:%M:%S.%L", e),
                                    r = {
                                        millisecond: 15,
                                        second: 12,
                                        minute: 9,
                                        hour: 6,
                                        day: 3
                                    },
                                    a = "millisecond";
                                for (h in m) {
                                    if (t === m.week && +o.dateFormat("%w", e) === i && "00:00:00.000" === n.substr(6)) {
                                        var h = "week";
                                        break
                                    }
                                    if (m[h] > t) {
                                        h = a;
                                        break
                                    }
                                    if (r[h] && n.substr(r[h]) !== "01-01 00:00:00.000".substr(r[h])) break;
                                    "week" !== h && (a = h)
                                }
                                if (h) var l = o.resolveDTLFormat(s[h]).main;
                                return l
                            }, x.prototype.getLabel = function() {
                                var e, i, s, r = this,
                                    a = this.chart.renderer,
                                    h = this.chart.styledMode,
                                    l = this.options,
                                    c = "tooltip" + (n(l.className) ? " " + l.className : ""),
                                    d = (null === (e = l.style) || void 0 === e ? void 0 : e.pointerEvents) || (!this.followPointer && l.stickOnContact ? "auto" : "none");
                                e = function() {
                                    r.inContact = !0
                                };
                                var p = function() {
                                    var t = r.chart.hoverSeries;
                                    r.inContact = !1, t && t.onMouseOut && t.onMouseOut()
                                };
                                if (!this.label) {
                                    if (this.outside && (this.container = s = t.doc.createElement("div"), s.className = "highcharts-tooltip-container", o(s, {
                                            position: "absolute",
                                            top: "1px",
                                            pointerEvents: d,
                                            zIndex: 3
                                        }), t.doc.body.appendChild(s), this.renderer = a = new t.Renderer(s, 0, 0, null === (i = this.chart.options.chart) || void 0 === i ? void 0 : i.style, void 0, void 0, a.styledMode)), this.split ? this.label = a.g(c) : (this.label = a.label("", 0, 0, l.shape || "callout", null, null, l.useHTML, null, c).attr({
                                            padding: l.padding,
                                            r: l.borderRadius
                                        }), h || this.label.attr({
                                            fill: l.backgroundColor,
                                            "stroke-width": l.borderWidth
                                        }).css(l.style).css({
                                            pointerEvents: d
                                        }).shadow(l.shadow)), h && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index)), r.outside && !r.split) {
                                        var u = this.label,
                                            f = u.xSetter,
                                            g = u.ySetter;
                                        u.xSetter = function(t) {
                                            f.call(u, r.distance), s.style.left = t + "px"
                                        }, u.ySetter = function(t) {
                                            g.call(u, r.distance), s.style.top = t + "px"
                                        }
                                    }
                                    this.label.on("mouseenter", e).on("mouseleave", p).attr({
                                        zIndex: 8
                                    }).add()
                                }
                                return this.label
                            }, x.prototype.getPosition = function(t, e, s) {
                                var o, n = this.chart,
                                    r = this.distance,
                                    a = {},
                                    h = n.inverted && s.h || 0,
                                    l = this.outside,
                                    c = l ? i.documentElement.clientWidth - 2 * r : n.chartWidth,
                                    d = l ? Math.max(i.body.scrollHeight, i.documentElement.scrollHeight, i.body.offsetHeight, i.documentElement.offsetHeight, i.documentElement.clientHeight) : n.chartHeight,
                                    p = n.pointer.getChartPosition(),
                                    f = n.containerScaling,
                                    g = function(t) {
                                        return f ? t * f.scaleX : t
                                    },
                                    m = function(t) {
                                        return f ? t * f.scaleY : t
                                    },
                                    x = function(i) {
                                        var o = "x" === i;
                                        return [i, o ? c : d, o ? t : e].concat(l ? [o ? g(t) : m(e), o ? p.left - r + g(s.plotX + n.plotLeft) : p.top - r + m(s.plotY + n.plotTop), 0, o ? c : d] : [o ? t : e, o ? s.plotX + n.plotLeft : s.plotY + n.plotTop, o ? n.plotLeft : n.plotTop, o ? n.plotLeft + n.plotWidth : n.plotTop + n.plotHeight])
                                    },
                                    v = x("y"),
                                    y = x("x"),
                                    b = !this.followPointer && u(s.ttBelow, !n.inverted === !!s.negative),
                                    k = function(t, e, i, s, o, n, l) {
                                        var c = "y" === t ? m(r) : g(r),
                                            d = (i - s) / 2,
                                            p = s < o - r,
                                            u = o + r + s < e,
                                            f = o - c - i + d;
                                        if (o = o + c - d, b && u) a[t] = o;
                                        else if (!b && p) a[t] = f;
                                        else if (p) a[t] = Math.min(l - s, 0 > f - h ? f : f - h);
                                        else {
                                            if (!u) return !1;
                                            a[t] = Math.max(n, o + h + i > e ? o : o + h)
                                        }
                                    },
                                    M = function(t, e, i, s, o) {
                                        var n;
                                        return o < r || o > e - r ? n = !1 : a[t] = o < i / 2 ? 1 : o > e - s / 2 ? e - s - 2 : o - i / 2, n
                                    },
                                    w = function(t) {
                                        var e = v;
                                        v = y, y = e, o = t
                                    },
                                    S = function() {
                                        !1 !== k.apply(0, v) ? !1 !== M.apply(0, y) || o || (w(!0), S()) : o ? a.x = a.y = 0 : (w(!0), S())
                                    };
                                return (n.inverted || 1 < this.len) && w(), S(), a
                            }, x.prototype.getXDateFormat = function(t, e, i) {
                                e = e.dateTimeLabelFormats;
                                var s = i && i.closestPointRange;
                                return (s ? this.getDateFormat(s, t.x, i.options.startOfWeek, e) : e.day) || e.year
                            }, x.prototype.hide = function(t) {
                                var i = this;
                                e.clearTimeout(this.hideTimer), t = u(t, this.options.hideDelay, 500), this.isHidden || (this.hideTimer = g((function() {
                                    i.getLabel().fadeOut(t ? void 0 : t), i.isHidden = !0
                                }), t))
                            }, x.prototype.init = function(t, e) {
                                this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                                    x: 0,
                                    y: 0
                                }, this.isHidden = !0, this.split = e.split && !t.inverted && !t.polar, this.shared = e.shared || this.split, this.outside = u(e.outside, !(!t.scrollablePixelsX && !t.scrollablePixelsY))
                            }, x.prototype.isStickyOnContact = function() {
                                return !(this.followPointer || !this.options.stickOnContact || !this.inContact)
                            }, x.prototype.move = function(t, i, s, o) {
                                var n = this,
                                    r = n.now,
                                    h = !1 !== n.options.animation && !n.isHidden && (1 < Math.abs(t - r.x) || 1 < Math.abs(i - r.y)),
                                    l = n.followPointer || 1 < n.len;
                                a(r, {
                                    x: h ? (2 * r.x + t) / 3 : t,
                                    y: h ? (r.y + i) / 2 : i,
                                    anchorX: l ? void 0 : h ? (2 * r.anchorX + s) / 3 : s,
                                    anchorY: l ? void 0 : h ? (r.anchorY + o) / 2 : o
                                }), n.getLabel().attr(r), n.drawTracker(), h && (e.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout((function() {
                                    n && n.move(t, i, s, o)
                                }), 32))
                            }, x.prototype.refresh = function(t, i) {
                                var s = this.chart,
                                    o = this.options,
                                    n = t,
                                    r = {},
                                    a = [],
                                    l = o.formatter || this.defaultFormatter;
                                r = this.shared;
                                var c = s.styledMode;
                                if (o.enabled) {
                                    e.clearTimeout(this.hideTimer), this.followPointer = f(n)[0].series.tooltipOptions.followPointer;
                                    var d = this.getAnchor(n, i);
                                    i = d[0];
                                    var p = d[1];
                                    !r || n.series && n.series.noSharedTooltip ? r = n.getLabelConfig() : (s.pointer.applyInactiveState(n), n.forEach((function(t) {
                                        t.setState("hover"), a.push(t.getLabelConfig())
                                    })), r = {
                                        x: n[0].category,
                                        y: n[0].y
                                    }, r.points = a, n = n[0]), this.len = a.length, s = l.call(r, this), l = n.series, this.distance = u(l.tooltipOptions.distance, 16), !1 === s ? this.hide() : (this.split ? this.renderSplit(s, f(t)) : (t = this.getLabel(), o.style.width && !c || t.css({
                                        width: this.chart.spacingBox.width + "px"
                                    }), t.attr({
                                        text: s && s.join ? s.join("") : s
                                    }), t.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + u(n.colorIndex, l.colorIndex)), c || t.attr({
                                        stroke: o.borderColor || n.color || l.color || "#666666"
                                    }), this.updatePosition({
                                        plotX: i,
                                        plotY: p,
                                        negative: n.negative,
                                        ttBelow: n.ttBelow,
                                        h: d[2] || 0
                                    })), this.isHidden && this.label && this.label.attr({
                                        opacity: 1
                                    }).show(), this.isHidden = !1), h(this, "refresh")
                                }
                            }, x.prototype.renderSplit = function(e, i) {
                                function o(t, e, i, o, n) {
                                    return void 0 === n && (n = !0), i ? (e = T ? 0 : O, t = s(t - o / 2, S.left, S.right - o)) : (e -= P, t = n ? t - o - k : t + k, t = s(t, n ? t : S.left, S.right)), {
                                        x: t,
                                        y: e
                                    }
                                }
                                var n = this,
                                    r = n.chart,
                                    h = n.chart,
                                    l = h.plotHeight,
                                    c = h.plotLeft,
                                    p = h.plotTop,
                                    f = h.pointer,
                                    g = h.renderer,
                                    m = h.scrollablePixelsY,
                                    x = void 0 === m ? 0 : m;
                                m = h.scrollingContainer, m = void 0 === m ? {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                } : m;
                                var v = m.scrollLeft,
                                    y = m.scrollTop,
                                    b = h.styledMode,
                                    k = n.distance,
                                    M = n.options,
                                    w = n.options.positioner,
                                    S = {
                                        left: v,
                                        right: v + h.chartWidth,
                                        top: y,
                                        bottom: y + h.chartHeight
                                    },
                                    A = n.getLabel(),
                                    T = !(!r.xAxis[0] || !r.xAxis[0].opposite),
                                    P = p + y,
                                    C = 0,
                                    O = l - x;
                                d(e) && (e = [!1, e]), e = e.slice(0, i.length + 1).reduce((function(t, e, r) {
                                    if (!1 !== e && "" !== e) {
                                        r = i[r - 1] || {
                                            isHeader: !0,
                                            plotX: i[0].plotX,
                                            plotY: l,
                                            series: {}
                                        };
                                        var a = r.isHeader,
                                            h = a ? n : r.series,
                                            d = h.tt,
                                            f = r.isHeader,
                                            m = r.series,
                                            v = "highcharts-color-" + u(r.colorIndex, m.colorIndex, "none");
                                        d || (d = {
                                            padding: M.padding,
                                            r: M.borderRadius
                                        }, b || (d.fill = M.backgroundColor, d["stroke-width"] = M.borderWidth), d = g.label("", 0, 0, M[f ? "headerShape" : "shape"] || "callout", void 0, void 0, M.useHTML).addClass((f ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + v).attr(d).add(A)), d.isActive = !0, d.attr({
                                            text: e
                                        }), b || d.css(M.style).shadow(M.shadow).attr({
                                            stroke: M.borderColor || r.color || m.color || "#333333"
                                        }), e = h.tt = d, f = e.getBBox(), h = f.width + e.strokeWidth(), a && (C = f.height, O += C, T && (P -= C)), m = r.plotX, m = void 0 === m ? 0 : m, v = r.plotY, v = void 0 === v ? 0 : v;
                                        var E = r.series;
                                        if (r.isHeader) {
                                            m = c + m;
                                            var L = p + l / 2
                                        } else d = E.xAxis, E = E.yAxis, m = d.pos + s(m, -k, d.len + k), E.pos + v >= y + p && E.pos + v <= y + p + l - x && (L = E.pos + v);
                                        m = s(m, S.left - k, S.right + k), "number" === typeof L ? (f = f.height + 1, v = w ? w.call(n, h, f, r) : o(m, L, a, h), t.push({
                                            align: w ? 0 : void 0,
                                            anchorX: m,
                                            anchorY: L,
                                            boxWidth: h,
                                            point: r,
                                            rank: u(v.rank, a ? 1 : 0),
                                            size: f,
                                            target: v.y,
                                            tt: e,
                                            x: v.x
                                        })) : e.isActive = !1
                                    }
                                    return t
                                }), []), !w && e.some((function(t) {
                                    return t.x < S.left
                                })) && (e = e.map((function(t) {
                                    var e = o(t.anchorX, t.anchorY, t.point.isHeader, t.boxWidth, !1);
                                    return a(t, {
                                        target: e.y,
                                        x: e.x
                                    })
                                }))), n.cleanSplit(), t.distribute(e, O), e.forEach((function(t) {
                                    var e = t.pos;
                                    t.tt.attr({
                                        visibility: "undefined" === typeof e ? "hidden" : "inherit",
                                        x: t.x,
                                        y: e + P,
                                        anchorX: t.anchorX,
                                        anchorY: t.anchorY
                                    })
                                })), e = n.container, r = n.renderer, n.outside && e && r && (h = A.getBBox(), r.setSize(h.width + h.x, h.height + h.y, !1), f = f.getChartPosition(), e.style.left = f.left + "px", e.style.top = f.top + "px")
                            }, x.prototype.drawTracker = function() {
                                if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy();
                                else {
                                    var t = this.chart,
                                        e = this.label,
                                        i = t.hoverPoint;
                                    if (e && i) {
                                        var s = {
                                            x: 0,
                                            y: 0,
                                            width: 0,
                                            height: 0
                                        };
                                        i = this.getAnchor(i);
                                        var o = e.getBBox();
                                        i[0] += t.plotLeft - e.translateX, i[1] += t.plotTop - e.translateY, s.x = Math.min(0, i[0]), s.y = Math.min(0, i[1]), s.width = 0 > i[0] ? Math.max(Math.abs(i[0]), o.width - i[0]) : Math.max(Math.abs(i[0]), o.width), s.height = 0 > i[1] ? Math.max(Math.abs(i[1]), o.height - Math.abs(i[1])) : Math.max(Math.abs(i[1]), o.height), this.tracker ? this.tracker.attr(s) : (this.tracker = e.renderer.rect(s).addClass("highcharts-tracker").add(e), t.styledMode || this.tracker.attr({
                                            fill: "rgba(0,0,0,0)"
                                        }))
                                    }
                                }
                            }, x.prototype.styledModeFormat = function(t) {
                                return t.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"')
                            }, x.prototype.tooltipFooterHeaderFormatter = function(t, e) {
                                var i = e ? "footer" : "header",
                                    s = t.series,
                                    o = s.tooltipOptions,
                                    n = o.xDateFormat,
                                    r = s.xAxis,
                                    a = r && "datetime" === r.options.type && c(t.key),
                                    d = o[i + "Format"];
                                return e = {
                                    isFooter: e,
                                    labelConfig: t
                                }, h(this, "headerFormatter", e, (function(e) {
                                    a && !n && (n = this.getXDateFormat(t, o, r)), a && n && (t.point && t.point.tooltipDateKeys || ["key"]).forEach((function(t) {
                                        d = d.replace("{point." + t + "}", "{point." + t + ":" + n + "}")
                                    })), s.chart.styledMode && (d = this.styledModeFormat(d)), e.text = l(d, {
                                        point: t,
                                        series: s
                                    }, this.chart)
                                })), e.text
                            }, x.prototype.update = function(t) {
                                this.destroy(), p(!0, this.chart.options.tooltip.userOptions, t), this.init(this.chart, p(!0, this.options, t))
                            }, x.prototype.updatePosition = function(t) {
                                var e = this.chart,
                                    i = e.pointer,
                                    s = this.getLabel(),
                                    n = t.plotX + e.plotLeft,
                                    r = t.plotY + e.plotTop;
                                if (i = i.getChartPosition(), t = (this.options.positioner || this.getPosition).call(this, s.width, s.height, t), this.outside) {
                                    var a = (this.options.borderWidth || 0) + 2 * this.distance;
                                    this.renderer.setSize(s.width + a, s.height + a, !1), (e = e.containerScaling) && (o(this.container, {
                                        transform: "scale(" + e.scaleX + ", " + e.scaleY + ")"
                                    }), n *= e.scaleX, r *= e.scaleY), n += i.left - t.x, r += i.top - t.y
                                }
                                this.move(Math.round(t.x), Math.round(t.y || 0), n, r)
                            }, x
                        }();
                    return t.Tooltip = x, t.Tooltip
                })), e(i, "parts/Pointer.js", [i["parts/Color.js"], i["parts/Globals.js"], i["parts/Tooltip.js"], i["parts/Utilities.js"]], (function(t, e, i, s) {
                    var o = t.parse,
                        n = e.charts,
                        r = e.noop,
                        a = s.addEvent,
                        h = s.attr,
                        l = s.css,
                        c = s.defined,
                        d = s.extend,
                        p = s.find,
                        u = s.fireEvent,
                        f = s.isNumber,
                        g = s.isObject,
                        m = s.objectEach,
                        x = s.offset,
                        v = s.pick,
                        y = s.splat;
                    return t = function() {
                        function t(t, e) {
                            this.lastValidTouch = {}, this.pinchDown = [], this.runChartClick = !1, this.chart = t, this.hasDragged = !1, this.options = e, this.unbindContainerMouseLeave = function() {}, this.init(t, e)
                        }
                        return t.prototype.applyInactiveState = function(t) {
                            var e, i = [];
                            (t || []).forEach((function(t) {
                                e = t.series, i.push(e), e.linkedParent && i.push(e.linkedParent), e.linkedSeries && (i = i.concat(e.linkedSeries)), e.navigatorSeries && i.push(e.navigatorSeries)
                            })), this.chart.series.forEach((function(t) {
                                -1 === i.indexOf(t) ? t.setState("inactive", !0) : t.options.inactiveOtherPoints && t.setAllPointsToState("inactive")
                            }))
                        }, t.prototype.destroy = function() {
                            var t = this;
                            "undefined" !== typeof t.unDocMouseMove && t.unDocMouseMove(), this.unbindContainerMouseLeave(), e.chartCount || (e.unbindDocumentMouseUp && (e.unbindDocumentMouseUp = e.unbindDocumentMouseUp()), e.unbindDocumentTouchEnd && (e.unbindDocumentTouchEnd = e.unbindDocumentTouchEnd())), clearInterval(t.tooltipTimeout), m(t, (function(e, i) {
                                t[i] = void 0
                            }))
                        }, t.prototype.drag = function(t) {
                            var e = this.chart,
                                i = e.options.chart,
                                s = t.chartX,
                                n = t.chartY,
                                r = this.zoomHor,
                                a = this.zoomVert,
                                h = e.plotLeft,
                                l = e.plotTop,
                                c = e.plotWidth,
                                d = e.plotHeight,
                                p = this.selectionMarker,
                                u = this.mouseDownX || 0,
                                f = this.mouseDownY || 0,
                                m = g(i.panning) ? i.panning && i.panning.enabled : i.panning,
                                x = i.panKey && t[i.panKey + "Key"];
                            if ((!p || !p.touch) && (s < h ? s = h : s > h + c && (s = h + c), n < l ? n = l : n > l + d && (n = l + d), this.hasDragged = Math.sqrt(Math.pow(u - s, 2) + Math.pow(f - n, 2)), 10 < this.hasDragged)) {
                                var v = e.isInsidePlot(u - h, f - l);
                                e.hasCartesianSeries && (this.zoomX || this.zoomY) && v && !x && !p && (this.selectionMarker = p = e.renderer.rect(h, l, r ? 1 : c, a ? 1 : d, 0).attr({
                                    class: "highcharts-selection-marker",
                                    zIndex: 7
                                }).add(), e.styledMode || p.attr({
                                    fill: i.selectionMarkerFill || o("#335cad").setOpacity(.25).get()
                                })), p && r && (s -= u, p.attr({
                                    width: Math.abs(s),
                                    x: (0 < s ? 0 : s) + u
                                })), p && a && (s = n - f, p.attr({
                                    height: Math.abs(s),
                                    y: (0 < s ? 0 : s) + f
                                })), v && !p && m && e.pan(t, i.panning)
                            }
                        }, t.prototype.dragStart = function(t) {
                            var e = this.chart;
                            e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
                        }, t.prototype.drop = function(t) {
                            var e = this,
                                i = this.chart,
                                s = this.hasPinched;
                            if (this.selectionMarker) {
                                var o, n = {
                                        originalEvent: t,
                                        xAxis: [],
                                        yAxis: []
                                    },
                                    r = this.selectionMarker,
                                    a = r.attr ? r.attr("x") : r.x,
                                    h = r.attr ? r.attr("y") : r.y,
                                    p = r.attr ? r.attr("width") : r.width,
                                    g = r.attr ? r.attr("height") : r.height;
                                (this.hasDragged || s) && (i.axes.forEach((function(i) {
                                    if (i.zoomEnabled && c(i.min) && (s || e[{
                                            xAxis: "zoomX",
                                            yAxis: "zoomY"
                                        }[i.coll]]) && f(a) && f(h)) {
                                        var r = i.horiz,
                                            l = "touchend" === t.type ? i.minPixelPadding : 0,
                                            d = i.toValue((r ? a : h) + l);
                                        r = i.toValue((r ? a + p : h + g) - l), n[i.coll].push({
                                            axis: i,
                                            min: Math.min(d, r),
                                            max: Math.max(d, r)
                                        }), o = !0
                                    }
                                })), o && u(i, "selection", n, (function(t) {
                                    i.zoom(d(t, s ? {
                                        animation: !1
                                    } : null))
                                }))), f(i.index) && (this.selectionMarker = this.selectionMarker.destroy()), s && this.scaleGroups()
                            }
                            i && f(i.index) && (l(i.container, {
                                cursor: i._cursor
                            }), i.cancelClick = 10 < this.hasDragged, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                        }, t.prototype.findNearestKDPoint = function(t, e, i) {
                            var s, o = this.chart,
                                n = o.hoverPoint;
                            return o = o.tooltip, n && o && o.isStickyOnContact() ? n : (t.forEach((function(t) {
                                var o = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y");
                                if (t = t.searchPoint(i, o), (o = g(t, !0)) && !(o = !g(s, !0))) {
                                    o = s.distX - t.distX;
                                    var n = s.dist - t.dist,
                                        r = (t.series.group && t.series.group.zIndex) - (s.series.group && s.series.group.zIndex);
                                    o = 0 < (0 !== o && e ? o : 0 !== n ? n : 0 !== r ? r : s.series.index > t.series.index ? -1 : 1)
                                }
                                o && (s = t)
                            })), s)
                        }, t.prototype.getChartCoordinatesFromPoint = function(t, e) {
                            var i = t.series,
                                s = i.xAxis;
                            i = i.yAxis;
                            var o = v(t.clientX, t.plotX),
                                n = t.shapeArgs;
                            return s && i ? e ? {
                                chartX: s.len + s.pos - o,
                                chartY: i.len + i.pos - t.plotY
                            } : {
                                chartX: o + s.pos,
                                chartY: t.plotY + i.pos
                            } : n && n.x && n.y ? {
                                chartX: n.x,
                                chartY: n.y
                            } : void 0
                        }, t.prototype.getChartPosition = function() {
                            return this.chartPosition || (this.chartPosition = x(this.chart.container))
                        }, t.prototype.getCoordinates = function(t) {
                            var e = {
                                xAxis: [],
                                yAxis: []
                            };
                            return this.chart.axes.forEach((function(i) {
                                e[i.isXAxis ? "xAxis" : "yAxis"].push({
                                    axis: i,
                                    value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                                })
                            })), e
                        }, t.prototype.getHoverData = function(t, e, i, s, o, n) {
                            var r, a = [];
                            s = !(!s || !t);
                            var h = e && !e.stickyTracking,
                                l = {
                                    chartX: n ? n.chartX : void 0,
                                    chartY: n ? n.chartY : void 0,
                                    shared: o
                                };
                            return u(this, "beforeGetHoverData", l), h = h ? [e] : i.filter((function(t) {
                                return l.filter ? l.filter(t) : t.visible && !(!o && t.directTouch) && v(t.options.enableMouseTracking, !0) && t.stickyTracking
                            })), e = (r = s || !n ? t : this.findNearestKDPoint(h, o, n)) && r.series, r && (o && !e.noSharedTooltip ? (h = i.filter((function(t) {
                                return l.filter ? l.filter(t) : t.visible && !(!o && t.directTouch) && v(t.options.enableMouseTracking, !0) && !t.noSharedTooltip
                            })), h.forEach((function(t) {
                                var e = p(t.points, (function(t) {
                                    return t.x === r.x && !t.isNull
                                }));
                                g(e) && (t.chart.isBoosting && (e = t.getPoint(e)), a.push(e))
                            }))) : a.push(r)), l = {
                                hoverPoint: r
                            }, u(this, "afterGetHoverData", l), {
                                hoverPoint: l.hoverPoint,
                                hoverSeries: e,
                                hoverPoints: a
                            }
                        }, t.prototype.getPointFromEvent = function(t) {
                            t = t.target;
                            for (var e; t && !e;) e = t.point, t = t.parentNode;
                            return e
                        }, t.prototype.onTrackerMouseOut = function(t) {
                            t = t.relatedTarget || t.toElement;
                            var e = this.chart.hoverSeries;
                            this.isDirectTouch = !1, !e || !t || e.stickyTracking || this.inClass(t, "highcharts-tooltip") || this.inClass(t, "highcharts-series-" + e.index) && this.inClass(t, "highcharts-tracker") || e.onMouseOut()
                        }, t.prototype.inClass = function(t, e) {
                            for (var i; t;) {
                                if (i = h(t, "class")) {
                                    if (-1 !== i.indexOf(e)) return !0;
                                    if (-1 !== i.indexOf("highcharts-container")) return !1
                                }
                                t = t.parentNode
                            }
                        }, t.prototype.init = function(t, e) {
                            this.options = e, this.chart = t, this.runChartClick = e.chart.events && !!e.chart.events.click, this.pinchDown = [], this.lastValidTouch = {}, i && (t.tooltip = new i(t, e.tooltip), this.followTouchMove = v(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
                        }, t.prototype.normalize = function(t, e) {
                            var i = t.touches,
                                s = i ? i.length ? i.item(0) : v(i.changedTouches, t.changedTouches)[0] : t;
                            return e || (e = this.getChartPosition()), i = s.pageX - e.left, e = s.pageY - e.top, (s = this.chart.containerScaling) && (i /= s.scaleX, e /= s.scaleY), d(t, {
                                chartX: Math.round(i),
                                chartY: Math.round(e)
                            })
                        }, t.prototype.onContainerClick = function(t) {
                            var e = this.chart,
                                i = e.hoverPoint;
                            t = this.normalize(t);
                            var s = e.plotLeft,
                                o = e.plotTop;
                            e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (u(i.series, "click", d(t, {
                                point: i
                            })), e.hoverPoint && i.firePointEvent("click", t)) : (d(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - s, t.chartY - o) && u(e, "click", t)))
                        }, t.prototype.onContainerMouseDown = function(t) {
                            t = this.normalize(t), e.isFirefox && 0 !== t.button && this.onContainerMouseMove(t), "undefined" !== typeof t.button && 1 !== (1 & (t.buttons || t.button)) || (this.zoomOption(t), this.dragStart(t))
                        }, t.prototype.onContainerMouseLeave = function(t) {
                            var i = n[v(e.hoverChartIndex, -1)],
                                s = this.chart.tooltip;
                            t = this.normalize(t), i && (t.relatedTarget || t.toElement) && (i.pointer.reset(), i.pointer.chartPosition = void 0), s && !s.isHidden && this.reset()
                        }, t.prototype.onContainerMouseMove = function(t) {
                            var e = this.chart;
                            t = this.normalize(t), this.setHoverChartIndex(), t.preventDefault || (t.returnValue = !1), "mousedown" === e.mouseIsDown && this.drag(t), e.openMenu || !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || this.runPointActions(t)
                        }, t.prototype.onDocumentTouchEnd = function(t) {
                            n[e.hoverChartIndex] && n[e.hoverChartIndex].pointer.drop(t)
                        }, t.prototype.onContainerTouchMove = function(t) {
                            this.touch(t)
                        }, t.prototype.onContainerTouchStart = function(t) {
                            this.zoomOption(t), this.touch(t, !0)
                        }, t.prototype.onDocumentMouseMove = function(t) {
                            var e = this.chart,
                                i = this.chartPosition;
                            t = this.normalize(t, i);
                            var s = e.tooltip;
                            !i || s && s.isStickyOnContact() || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || this.inClass(t.target, "highcharts-tracker") || this.reset()
                        }, t.prototype.onDocumentMouseUp = function(t) {
                            var i = n[v(e.hoverChartIndex, -1)];
                            i && i.pointer.drop(t)
                        }, t.prototype.pinch = function(t) {
                            var e = this,
                                i = e.chart,
                                s = e.pinchDown,
                                o = t.touches || [],
                                n = o.length,
                                a = e.lastValidTouch,
                                h = e.hasZoom,
                                l = e.selectionMarker,
                                c = {},
                                p = 1 === n && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick),
                                u = {};
                            1 < n && (e.initiated = !0), h && e.initiated && !p && t.preventDefault(), [].map.call(o, (function(t) {
                                return e.normalize(t)
                            })), "touchstart" === t.type ? ([].forEach.call(o, (function(t, e) {
                                s[e] = {
                                    chartX: t.chartX,
                                    chartY: t.chartY
                                }
                            })), a.x = [s[0].chartX, s[1] && s[1].chartX], a.y = [s[0].chartY, s[1] && s[1].chartY], i.axes.forEach((function(t) {
                                if (t.zoomEnabled) {
                                    var e = i.bounds[t.horiz ? "h" : "v"],
                                        s = t.minPixelPadding,
                                        o = t.toPixels(Math.min(v(t.options.min, t.dataMin), t.dataMin)),
                                        n = t.toPixels(Math.max(v(t.options.max, t.dataMax), t.dataMax)),
                                        r = Math.max(o, n);
                                    e.min = Math.min(t.pos, Math.min(o, n) - s), e.max = Math.max(t.pos + t.len, r + s)
                                }
                            })), e.res = !0) : e.followTouchMove && 1 === n ? this.runPointActions(e.normalize(t)) : s.length && (l || (e.selectionMarker = l = d({
                                destroy: r,
                                touch: !0
                            }, i.plotBox)), e.pinchTranslate(s, o, c, l, u, a), e.hasPinched = h, e.scaleGroups(c, u), e.res && (e.res = !1, this.reset(!1, 0)))
                        }, t.prototype.pinchTranslate = function(t, e, i, s, o, n) {
                            this.zoomHor && this.pinchTranslateDirection(!0, t, e, i, s, o, n), this.zoomVert && this.pinchTranslateDirection(!1, t, e, i, s, o, n)
                        }, t.prototype.pinchTranslateDirection = function(t, e, i, s, o, n, r, a) {
                            var h, l, c = this.chart,
                                d = t ? "x" : "y",
                                p = t ? "X" : "Y",
                                u = "chart" + p,
                                f = t ? "width" : "height",
                                g = c["plot" + (t ? "Left" : "Top")],
                                m = a || 1,
                                x = c.inverted,
                                v = c.bounds[t ? "h" : "v"],
                                y = 1 === e.length,
                                b = e[0][u],
                                k = i[0][u],
                                M = !y && e[1][u],
                                w = !y && i[1][u];
                            if (i = function() {
                                    "number" === typeof w && 20 < Math.abs(b - M) && (m = a || Math.abs(k - w) / Math.abs(b - M)), l = (g - k) / m + b, h = c["plot" + (t ? "Width" : "Height")] / m
                                }, i(), e = l, e < v.min) {
                                e = v.min;
                                var S = !0
                            } else e + h > v.max && (e = v.max - h, S = !0);
                            S ? (k -= .8 * (k - r[d][0]), "number" === typeof w && (w -= .8 * (w - r[d][1])), i()) : r[d] = [k, w], x || (n[d] = l - g, n[f] = h), n = x ? 1 / m : m, o[f] = h, o[d] = e, s[x ? t ? "scaleY" : "scaleX" : "scale" + p] = m, s["translate" + p] = n * g + (k - n * b)
                        }, t.prototype.reset = function(t, e) {
                            var i = this.chart,
                                s = i.hoverSeries,
                                o = i.hoverPoint,
                                n = i.hoverPoints,
                                r = i.tooltip,
                                a = r && r.shared ? n : o;
                            t && a && y(a).forEach((function(e) {
                                e.series.isCartesian && "undefined" === typeof e.plotX && (t = !1)
                            })), t ? r && a && y(a).length && (r.refresh(a), r.shared && n ? n.forEach((function(t) {
                                t.setState(t.state, !0), t.series.isCartesian && (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t), t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t))
                            })) : o && (o.setState(o.state, !0), i.axes.forEach((function(t) {
                                t.crosshair && o.series[t.coll] === t && t.drawCrosshair(null, o)
                            })))) : (o && o.onMouseOut(), n && n.forEach((function(t) {
                                t.setState()
                            })), s && s.onMouseOut(), r && r.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i.axes.forEach((function(t) {
                                t.hideCrosshair()
                            })), this.hoverX = i.hoverPoints = i.hoverPoint = null)
                        }, t.prototype.runPointActions = function(t, i) {
                            var s = this.chart,
                                o = s.tooltip && s.tooltip.options.enabled ? s.tooltip : void 0,
                                r = !!o && o.shared,
                                h = i || s.hoverPoint,
                                l = h && h.series || s.hoverSeries;
                            l = this.getHoverData(h, l, s.series, (!t || "touchmove" !== t.type) && (!!i || l && l.directTouch && this.isDirectTouch), r, t), h = l.hoverPoint;
                            var c = l.hoverPoints;
                            if (i = (l = l.hoverSeries) && l.tooltipOptions.followPointer, r = r && l && !l.noSharedTooltip, h && (h !== s.hoverPoint || o && o.isHidden)) {
                                if ((s.hoverPoints || []).forEach((function(t) {
                                        -1 === c.indexOf(t) && t.setState()
                                    })), s.hoverSeries !== l && l.onMouseOver(), this.applyInactiveState(c), (c || []).forEach((function(t) {
                                        t.setState("hover")
                                    })), s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"), !h.series) return;
                                s.hoverPoints = c, s.hoverPoint = h, h.firePointEvent("mouseOver"), o && o.refresh(r ? c : h, t)
                            } else i && o && !o.isHidden && (h = o.getAnchor([{}], t), o.updatePosition({
                                plotX: h[0],
                                plotY: h[1]
                            }));
                            this.unDocMouseMove || (this.unDocMouseMove = a(s.container.ownerDocument, "mousemove", (function(t) {
                                var i = n[e.hoverChartIndex];
                                i && i.pointer.onDocumentMouseMove(t)
                            }))), s.axes.forEach((function(e) {
                                var i, o = v((e.crosshair || {}).snap, !0);
                                o && ((i = s.hoverPoint) && i.series[e.coll] === e || (i = p(c, (function(t) {
                                    return t.series[e.coll] === e
                                })))), i || !o ? e.drawCrosshair(t, i) : e.hideCrosshair()
                            }))
                        }, t.prototype.scaleGroups = function(t, e) {
                            var i, s = this.chart;
                            s.series.forEach((function(o) {
                                i = t || o.getPlotBox(), o.xAxis && o.xAxis.zoomEnabled && o.group && (o.group.attr(i), o.markerGroup && (o.markerGroup.attr(i), o.markerGroup.clip(e ? s.clipRect : null)), o.dataLabelsGroup && o.dataLabelsGroup.attr(i))
                            })), s.clipRect.attr(e || s.clipBox)
                        }, t.prototype.setDOMEvents = function() {
                            var t = this.chart.container,
                                i = t.ownerDocument;
                            t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.unbindContainerMouseLeave = a(t, "mouseleave", this.onContainerMouseLeave.bind(this)), e.unbindDocumentMouseUp || (e.unbindDocumentMouseUp = a(i, "mouseup", this.onDocumentMouseUp.bind(this))), e.hasTouch && (a(t, "touchstart", this.onContainerTouchStart.bind(this)), a(t, "touchmove", this.onContainerTouchMove.bind(this)), e.unbindDocumentTouchEnd || (e.unbindDocumentTouchEnd = a(i, "touchend", this.onDocumentTouchEnd.bind(this))))
                        }, t.prototype.setHoverChartIndex = function() {
                            var t = this.chart,
                                i = e.charts[v(e.hoverChartIndex, -1)];
                            i && i !== t && i.pointer.onContainerMouseLeave({
                                relatedTarget: !0
                            }), i && i.mouseIsDown || (e.hoverChartIndex = t.index)
                        }, t.prototype.touch = function(t, e) {
                            var i = this.chart;
                            if (this.setHoverChartIndex(), 1 === t.touches.length)
                                if (t = this.normalize(t), i.isInsidePlot(t.chartX - i.plotLeft, t.chartY - i.plotTop) && !i.openMenu) {
                                    if (e && this.runPointActions(t), "touchmove" === t.type) {
                                        e = this.pinchDown;
                                        var s = !!e[0] && 4 <= Math.sqrt(Math.pow(e[0].chartX - t.chartX, 2) + Math.pow(e[0].chartY - t.chartY, 2))
                                    }
                                    v(s, !0) && this.pinch(t)
                                } else e && this.reset();
                            else 2 === t.touches.length && this.pinch(t)
                        }, t.prototype.zoomOption = function(t) {
                            var e = this.chart,
                                i = e.options.chart,
                                s = i.zoomType || "";
                            e = e.inverted, /touch/.test(t.type) && (s = v(i.pinchType, s)), this.zoomX = t = /x/.test(s), this.zoomY = s = /y/.test(s), this.zoomHor = t && !e || s && e, this.zoomVert = s && !e || t && e, this.hasZoom = t || s
                        }, t
                    }(), e.Pointer = t
                })), e(i, "parts/MSPointer.js", [i["parts/Globals.js"], i["parts/Pointer.js"], i["parts/Utilities.js"]], (function(t, e, i) {
                    function s() {
                        var t = [];
                        return t.item = function(t) {
                            return this[t]
                        }, d(u, (function(e) {
                            t.push({
                                pageX: e.pageX,
                                pageY: e.pageY,
                                target: e.target
                            })
                        })), t
                    }

                    function o(e, i, o, n) {
                        "touch" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_TOUCH || !r[t.hoverChartIndex] || (n(e), n = r[t.hoverChartIndex].pointer, n[i]({
                            type: o,
                            target: e.currentTarget,
                            preventDefault: h,
                            touches: s()
                        }))
                    }
                    var n = this && this.__extends || function() {
                            var t = function(e, i) {
                                return t = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                                }, t(e, i)
                            };
                            return function(e, i) {
                                function s() {
                                    this.constructor = e
                                }
                                t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s)
                            }
                        }(),
                        r = t.charts,
                        a = t.doc,
                        h = t.noop,
                        l = i.addEvent,
                        c = i.css,
                        d = i.objectEach,
                        p = i.removeEvent,
                        u = {},
                        f = !!t.win.PointerEvent;
                    return function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return n(e, t), e.prototype.batchMSEvents = function(t) {
                            t(this.chart.container, f ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, f ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(a, f ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                        }, e.prototype.destroy = function() {
                            this.batchMSEvents(p), t.prototype.destroy.call(this)
                        }, e.prototype.init = function(e, i) {
                            t.prototype.init.call(this, e, i), this.hasZoom && c(e.container, {
                                "-ms-touch-action": "none",
                                "touch-action": "none"
                            })
                        }, e.prototype.onContainerPointerDown = function(t) {
                            o(t, "onContainerTouchStart", "touchstart", (function(t) {
                                u[t.pointerId] = {
                                    pageX: t.pageX,
                                    pageY: t.pageY,
                                    target: t.currentTarget
                                }
                            }))
                        }, e.prototype.onContainerPointerMove = function(t) {
                            o(t, "onContainerTouchMove", "touchmove", (function(t) {
                                u[t.pointerId] = {
                                    pageX: t.pageX,
                                    pageY: t.pageY
                                }, u[t.pointerId].target || (u[t.pointerId].target = t.currentTarget)
                            }))
                        }, e.prototype.onDocumentPointerUp = function(t) {
                            o(t, "onDocumentTouchEnd", "touchend", (function(t) {
                                delete u[t.pointerId]
                            }))
                        }, e.prototype.setDOMEvents = function() {
                            t.prototype.setDOMEvents.call(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(l)
                        }, e
                    }(e)
                })), e(i, "parts/Legend.js", [i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.addEvent,
                        s = e.animObject,
                        o = e.css,
                        n = e.defined,
                        r = e.discardElement,
                        a = e.find,
                        h = e.fireEvent,
                        l = e.format,
                        c = e.isNumber,
                        d = e.merge,
                        p = e.pick,
                        u = e.relativeLength,
                        f = e.setAnimation,
                        g = e.stableSort,
                        m = e.syncTimeout;
                    e = e.wrap;
                    var x = t.isFirefox,
                        v = t.marginNames,
                        y = t.win,
                        b = function() {
                            function e(t, e) {
                                this.allItems = [], this.contentGroup = this.box = void 0, this.display = !1, this.group = void 0, this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0, this.options = {}, this.padding = 0, this.pages = [], this.proximate = !1, this.scrollGroup = void 0, this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0, this.chart = t, this.init(t, e)
                            }
                            return e.prototype.init = function(t, e) {
                                this.chart = t, this.setOptions(e), e.enabled && (this.render(), i(this.chart, "endResize", (function() {
                                    this.legend.positionCheckboxes()
                                })), this.proximate ? this.unchartrender = i(this.chart, "render", (function() {
                                    this.legend.proximatePositions(), this.legend.positionItems()
                                })) : this.unchartrender && this.unchartrender())
                            }, e.prototype.setOptions = function(t) {
                                var e = p(t.padding, 8);
                                this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = d(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop || 0, this.itemMarginBottom = t.itemMarginBottom || 0, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = p(t.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t.layout && !this.chart.inverted, this.baseline = void 0
                            }, e.prototype.update = function(t, e) {
                                var i = this.chart;
                                this.setOptions(d(!0, this.options, t)), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, p(e, !0) && i.redraw(), h(this, "afterUpdate")
                            }, e.prototype.colorizeItem = function(t, e) {
                                if (t.legendGroup[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
                                    var i = this.options,
                                        s = t.legendItem,
                                        o = t.legendLine,
                                        n = t.legendSymbol,
                                        r = this.itemHiddenStyle.color;
                                    i = e ? i.itemStyle.color : r;
                                    var a = e && t.color || r,
                                        l = t.options && t.options.marker,
                                        c = {
                                            fill: a
                                        };
                                    s && s.css({
                                        fill: i,
                                        color: i
                                    }), o && o.attr({
                                        stroke: a
                                    }), n && (l && n.isMarker && (c = t.pointAttribs(), e || (c.stroke = c.fill = r)), n.attr(c))
                                }
                                h(this, "afterColorizeItem", {
                                    item: t,
                                    visible: e
                                })
                            }, e.prototype.positionItems = function() {
                                this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes()
                            }, e.prototype.positionItem = function(t) {
                                var e = this,
                                    i = this.options,
                                    s = i.symbolPadding,
                                    o = !i.rtl,
                                    r = t._legendItemPos;
                                i = r[0], r = r[1];
                                var a = t.checkbox,
                                    l = t.legendGroup;
                                l && l.element && (s = {
                                    translateX: o ? i : this.legendWidth - i - 2 * s - 4,
                                    translateY: r
                                }, o = function() {
                                    h(e, "afterPositionItem", {
                                        item: t
                                    })
                                }, n(l.translateY) ? l.animate(s, {
                                    complete: o
                                }) : (l.attr(s), o())), a && (a.x = i, a.y = r)
                            }, e.prototype.destroyItem = function(t) {
                                var e = t.checkbox;
                                ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach((function(e) {
                                    t[e] && (t[e] = t[e].destroy())
                                })), e && r(t.checkbox)
                            }, e.prototype.destroy = function() {
                                function t(t) {
                                    this[t] && (this[t] = this[t].destroy())
                                }
                                this.getAllItems().forEach((function(e) {
                                    ["legendItem", "legendGroup"].forEach(t, e)
                                })), "clipRect up down pager nav box title group".split(" ").forEach(t, this), this.display = null
                            }, e.prototype.positionCheckboxes = function() {
                                var t = this.group && this.group.alignAttr,
                                    e = this.clipHeight || this.legendHeight,
                                    i = this.titleHeight;
                                if (t) {
                                    var s = t.translateY;
                                    this.allItems.forEach((function(n) {
                                        var r = n.checkbox;
                                        if (r) {
                                            var a = s + i + r.y + (this.scrollOffset || 0) + 3;
                                            o(r, {
                                                left: t.translateX + n.checkboxOffset + r.x - 20 + "px",
                                                top: a + "px",
                                                display: this.proximate || a > s - 6 && a < s + e - 6 ? "" : "none"
                                            })
                                        }
                                    }), this)
                                }
                            }, e.prototype.renderTitle = function() {
                                var t = this.options,
                                    e = this.padding,
                                    i = t.title,
                                    s = 0;
                                i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, null, null, null, t.useHTML, null, "legend-title").attr({
                                    zIndex: 1
                                }), this.chart.styledMode || this.title.css(i.style), this.title.add(this.group)), i.width || this.title.css({
                                    width: this.maxLegendWidth + "px"
                                }), t = this.title.getBBox(), s = t.height, this.offsetWidth = t.width, this.contentGroup.attr({
                                    translateY: s
                                })), this.titleHeight = s
                            }, e.prototype.setText = function(t) {
                                var e = this.options;
                                t.legendItem.attr({
                                    text: e.labelFormat ? l(e.labelFormat, t, this.chart) : e.labelFormatter.call(t)
                                })
                            }, e.prototype.renderItem = function(t) {
                                var e = this.chart,
                                    i = e.renderer,
                                    s = this.options,
                                    o = this.symbolWidth,
                                    n = s.symbolPadding,
                                    r = this.itemStyle,
                                    a = this.itemHiddenStyle,
                                    h = "horizontal" === s.layout ? p(s.itemDistance, 20) : 0,
                                    l = !s.rtl,
                                    c = t.legendItem,
                                    u = !t.series,
                                    f = !u && t.series.drawLegendSymbol ? t.series : t,
                                    g = f.options;
                                g = this.createCheckboxForItem && g && g.showCheckbox, h = o + n + h + (g ? 20 : 0);
                                var m = s.useHTML,
                                    x = t.options.className;
                                c || (t.legendGroup = i.g("legend-item").addClass("highcharts-" + f.type + "-series highcharts-color-" + t.colorIndex + (x ? " " + x : "") + (u ? " highcharts-series-" + t.index : "")).attr({
                                    zIndex: 1
                                }).add(this.scrollGroup), t.legendItem = c = i.text("", l ? o + n : -n, this.baseline || 0, m), e.styledMode || c.css(d(t.visible ? r : a)), c.attr({
                                    align: l ? "left" : "right",
                                    zIndex: 2
                                }).add(t.legendGroup), this.baseline || (this.fontMetrics = i.fontMetrics(e.styledMode ? 12 : r.fontSize, c), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, c.attr("y", this.baseline)), this.symbolHeight = s.symbolHeight || this.fontMetrics.f, f.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, c, m)), g && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), !e.styledMode && r.width || c.css({
                                    width: (s.itemWidth || this.widthOption || e.spacingBox.width) - h + "px"
                                }), this.setText(t), e = c.getBBox(), t.itemWidth = t.checkboxOffset = s.itemWidth || t.legendItemWidth || e.width + h, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(t.legendItemHeight || e.height || this.symbolHeight)
                            }, e.prototype.layoutItem = function(t) {
                                var e = this.options,
                                    i = this.padding,
                                    s = "horizontal" === e.layout,
                                    o = t.itemHeight,
                                    n = this.itemMarginBottom,
                                    r = this.itemMarginTop,
                                    a = s ? p(e.itemDistance, 20) : 0,
                                    h = this.maxLegendWidth;
                                e = e.alignColumns && this.totalItemWidth > h ? this.maxItemWidth : t.itemWidth, s && this.itemX - i + e > h && (this.itemX = i, this.lastLineHeight && (this.itemY += r + this.lastLineHeight + n), this.lastLineHeight = 0), this.lastItemY = r + this.itemY + n, this.lastLineHeight = Math.max(o, this.lastLineHeight), t._legendItemPos = [this.itemX, this.itemY], s ? this.itemX += e : (this.itemY += r + o + n, this.lastLineHeight = o), this.offsetWidth = this.widthOption || Math.max((s ? this.itemX - i - (t.checkbox ? 0 : a) : e) + i, this.offsetWidth)
                            }, e.prototype.getAllItems = function() {
                                var t = [];
                                return this.chart.series.forEach((function(e) {
                                    var i = e && e.options;
                                    e && p(i.showInLegend, !n(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
                                })), h(this, "afterGetAllItems", {
                                    allItems: t
                                }), t
                            }, e.prototype.getAlignment = function() {
                                var t = this.options;
                                return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0)
                            }, e.prototype.adjustMargins = function(t, e) {
                                var i = this.chart,
                                    s = this.options,
                                    o = this.getAlignment();
                                o && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach((function(r, a) {
                                    r.test(o) && !n(t[a]) && (i[v[a]] = Math.max(i[v[a]], i.legend[(a + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][a] * s[a % 2 ? "x" : "y"] + p(s.margin, 12) + e[a] + (i.titleOffset[a] || 0)))
                                }))
                            }, e.prototype.proximatePositions = function() {
                                var e = this.chart,
                                    i = [],
                                    s = "left" === this.options.align;
                                this.allItems.forEach((function(t) {
                                    var o = s;
                                    if (t.yAxis && t.points) {
                                        t.xAxis.options.reversed && (o = !o);
                                        var n = a(o ? t.points : t.points.slice(0).reverse(), (function(t) {
                                            return c(t.plotY)
                                        }));
                                        o = this.itemMarginTop + t.legendItem.getBBox().height + this.itemMarginBottom;
                                        var r = t.yAxis.top - e.plotTop;
                                        t.visible ? (n = n ? n.plotY : t.yAxis.height, n += r - .3 * o) : n = r + t.yAxis.height, i.push({
                                            target: n,
                                            size: o,
                                            item: t
                                        })
                                    }
                                }), this), t.distribute(i, e.plotHeight), i.forEach((function(t) {
                                    t.item._legendItemPos[1] = e.plotTop - e.spacing[0] + t.pos
                                }))
                            }, e.prototype.render = function() {
                                var t = this.chart,
                                    e = t.renderer,
                                    i = this.group,
                                    s = this.box,
                                    o = this.options,
                                    n = this.padding;
                                this.itemX = n, this.itemY = this.initialItemY, this.lastItemY = this.offsetWidth = 0, this.widthOption = u(o.width, t.spacingBox.width - n);
                                var r = t.spacingBox.width - 2 * n - o.x; - 1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (r /= 2), this.maxLegendWidth = this.widthOption || r, i || (this.group = i = e.g("legend").attr({
                                    zIndex: 7
                                }).add(), this.contentGroup = e.g().attr({
                                    zIndex: 1
                                }).add(i), this.scrollGroup = e.g().add(this.contentGroup)), this.renderTitle();
                                var a = this.getAllItems();
                                g(a, (function(t, e) {
                                    return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
                                })), o.reversed && a.reverse(), this.allItems = a, this.display = r = !!a.length, this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0, a.forEach(this.renderItem, this), a.forEach(this.layoutItem, this), a = (this.widthOption || this.offsetWidth) + n;
                                var l = this.lastItemY + this.lastLineHeight + this.titleHeight;
                                l = this.handleOverflow(l), l += n, s || (this.box = s = e.rect().addClass("highcharts-legend-box").attr({
                                    r: o.borderRadius
                                }).add(i), s.isNew = !0), t.styledMode || s.attr({
                                    stroke: o.borderColor,
                                    "stroke-width": o.borderWidth || 0,
                                    fill: o.backgroundColor || "none"
                                }).shadow(o.shadow), 0 < a && 0 < l && (s[s.isNew ? "attr" : "animate"](s.crisp.call({}, {
                                    x: 0,
                                    y: 0,
                                    width: a,
                                    height: l
                                }, s.strokeWidth())), s.isNew = !1), s[r ? "show" : "hide"](), t.styledMode && "none" === i.getStyle("display") && (a = l = 0), this.legendWidth = a, this.legendHeight = l, r && this.align(), this.proximate || this.positionItems(), h(this, "afterRender")
                            }, e.prototype.align = function(t) {
                                void 0 === t && (t = this.chart.spacingBox);
                                var e = this.chart,
                                    i = this.options,
                                    s = t.y;
                                /(lth|ct|rth)/.test(this.getAlignment()) && 0 < e.titleOffset[0] ? s += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < e.titleOffset[2] && (s -= e.titleOffset[2]), s !== t.y && (t = d(t, {
                                    y: s
                                })), this.group.align(d(i, {
                                    width: this.legendWidth,
                                    height: this.legendHeight,
                                    verticalAlign: this.proximate ? "top" : i.verticalAlign
                                }), !0, t)
                            }, e.prototype.handleOverflow = function(t) {
                                var e = this,
                                    i = this.chart,
                                    s = i.renderer,
                                    o = this.options,
                                    n = o.y,
                                    r = this.padding;
                                n = i.spacingBox.height + ("top" === o.verticalAlign ? -n : n) - r;
                                var a, h, l = o.maxHeight,
                                    c = this.clipRect,
                                    d = o.navigation,
                                    u = p(d.animation, !0),
                                    f = d.arrowSize || 12,
                                    g = this.nav,
                                    m = this.pages,
                                    x = this.allItems,
                                    v = function(t) {
                                        "number" === typeof t ? c.attr({
                                            height: t
                                        }) : c && (e.clipRect = c.destroy(), e.contentGroup.clip()), e.contentGroup.div && (e.contentGroup.div.style.clip = t ? "rect(" + r + "px,9999px," + (r + t) + "px,0)" : "auto")
                                    },
                                    y = function(t) {
                                        return e[t] = s.circle(0, 0, 1.3 * f).translate(f / 2, f / 2).add(g), i.styledMode || e[t].attr("fill", "rgba(0,0,0,0.0001)"), e[t]
                                    };
                                return "horizontal" !== o.layout || "middle" === o.verticalAlign || o.floating || (n /= 2), l && (n = Math.min(n, l)), m.length = 0, t > n && !1 !== d.enabled ? (this.clipHeight = a = Math.max(n - 20 - this.titleHeight - r, 0), this.currentPage = p(this.currentPage, 1), this.fullHeight = t, x.forEach((function(t, e) {
                                    var i = t._legendItemPos[1],
                                        s = Math.round(t.legendItem.getBBox().height),
                                        o = m.length;
                                    (!o || i - m[o - 1] > a && (h || i) !== m[o - 1]) && (m.push(h || i), o++), t.pageIx = o - 1, h && (x[e - 1].pageIx = o - 1), e === x.length - 1 && i + s - m[o - 1] > a && i !== h && (m.push(i), t.pageIx = o), i !== h && (h = i)
                                })), c || (c = e.clipRect = s.clipRect(0, r, 9999, 0), e.contentGroup.clip(c)), v(a), g || (this.nav = g = s.g().attr({
                                    zIndex: 1
                                }).add(this.group), this.up = s.symbol("triangle", 0, 0, f, f).add(g), y("upTracker").on("click", (function() {
                                    e.scroll(-1, u)
                                })), this.pager = s.text("", 15, 10).addClass("highcharts-legend-navigation"), i.styledMode || this.pager.css(d.style), this.pager.add(g), this.down = s.symbol("triangle-down", 0, 0, f, f).add(g), y("downTracker").on("click", (function() {
                                    e.scroll(1, u)
                                }))), e.scroll(0), t = n) : g && (v(), this.nav = g.destroy(), this.scrollGroup.attr({
                                    translateY: 1
                                }), this.clipHeight = 0), t
                            }, e.prototype.scroll = function(t, e) {
                                var i = this,
                                    o = this.chart,
                                    n = this.pages,
                                    r = n.length,
                                    a = this.currentPage + t;
                                t = this.clipHeight;
                                var l = this.options.navigation,
                                    c = this.pager,
                                    d = this.padding;
                                a > r && (a = r), 0 < a && ("undefined" !== typeof e && f(e, o), this.nav.attr({
                                    translateX: d,
                                    translateY: t + this.padding + 7 + this.titleHeight,
                                    visibility: "visible"
                                }), [this.up, this.upTracker].forEach((function(t) {
                                    t.attr({
                                        class: 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                                    })
                                })), c.attr({
                                    text: a + "/" + r
                                }), [this.down, this.downTracker].forEach((function(t) {
                                    t.attr({
                                        x: 18 + this.pager.getBBox().width,
                                        class: a === r ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                                    })
                                }), this), o.styledMode || (this.up.attr({
                                    fill: 1 === a ? l.inactiveColor : l.activeColor
                                }), this.upTracker.css({
                                    cursor: 1 === a ? "default" : "pointer"
                                }), this.down.attr({
                                    fill: a === r ? l.inactiveColor : l.activeColor
                                }), this.downTracker.css({
                                    cursor: a === r ? "default" : "pointer"
                                })), this.scrollOffset = -n[a - 1] + this.initialItemY, this.scrollGroup.animate({
                                    translateY: this.scrollOffset
                                }), this.currentPage = a, this.positionCheckboxes(), e = s(p(e, o.renderer.globalAnimation, !0)), m((function() {
                                    h(i, "afterScroll", {
                                        currentPage: a
                                    })
                                }), e.duration || 0))
                            }, e
                        }();
                    return (/Trident\/7\.0/.test(y.navigator && y.navigator.userAgent) || x) && e(b.prototype, "positionItem", (function(t, e) {
                        var i = this,
                            s = function() {
                                e._legendItemPos && t.call(i, e)
                            };
                        s(), i.bubbleLegend || setTimeout(s)
                    })), t.Legend = b, t.Legend
                })), e(i, "parts/Chart.js", [i["parts/Axis.js"], i["parts/Globals.js"], i["parts/Legend.js"], i["parts/MSPointer.js"], i["parts/Options.js"], i["parts/Pointer.js"], i["parts/Time.js"], i["parts/Utilities.js"]], (function(t, e, i, s, o, n, r, a) {
                    var h = e.charts,
                        l = e.doc,
                        c = e.seriesTypes,
                        d = e.win,
                        p = o.defaultOptions,
                        u = a.addEvent,
                        f = a.animate,
                        g = a.animObject,
                        m = a.attr,
                        x = a.createElement,
                        v = a.css,
                        y = a.defined,
                        b = a.discardElement,
                        k = a.erase,
                        M = a.error,
                        w = a.extend,
                        S = a.find,
                        A = a.fireEvent,
                        T = a.getStyle,
                        P = a.isArray,
                        C = a.isFunction,
                        O = a.isNumber,
                        E = a.isObject,
                        L = a.isString,
                        D = a.merge,
                        B = a.numberFormat,
                        I = a.objectEach,
                        z = a.pick,
                        j = a.pInt,
                        R = a.relativeLength,
                        G = a.removeEvent,
                        N = a.setAnimation,
                        W = a.splat,
                        H = a.syncTimeout,
                        X = a.uniqueKey,
                        F = e.marginNames,
                        Y = function() {
                            function o(t, e, i) {
                                this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0, this.getArgs(t, e, i)
                            }
                            return o.prototype.getArgs = function(t, e, i) {
                                L(t) || t.nodeName ? (this.renderTo = t, this.init(e, i)) : this.init(t, e)
                            }, o.prototype.init = function(t, i) {
                                var s, o = t.series,
                                    n = t.plotOptions || {};
                                A(this, "init", {
                                    args: arguments
                                }, (function() {
                                    t.series = null, s = D(p, t);
                                    var a = s.chart || {};
                                    I(s.plotOptions, (function(t, e) {
                                        E(t) && (t.tooltip = n[e] && D(n[e].tooltip) || void 0)
                                    })), s.tooltip.userOptions = t.chart && t.chart.forExport && t.tooltip.userOptions || t.tooltip, s.series = t.series = o, this.userOptions = t;
                                    var l = a.events;
                                    this.margin = [], this.spacing = [], this.bounds = {
                                        h: {},
                                        v: {}
                                    }, this.labelCollectors = [], this.callback = i, this.isResizing = 0, this.options = s, this.axes = [], this.series = [], this.time = t.time && Object.keys(t.time).length ? new r(t.time) : e.time, this.numberFormatter = a.numberFormatter || B, this.styledMode = a.styledMode, this.hasCartesianSeries = a.showAxes;
                                    var c = this;
                                    c.index = h.length, h.push(c), e.chartCount++, l && I(l, (function(t, e) {
                                        C(t) && u(c, e, t)
                                    })), c.xAxis = [], c.yAxis = [], c.pointCount = c.colorCounter = c.symbolCounter = 0, A(c, "afterInit"), c.firstRender()
                                }))
                            }, o.prototype.initSeries = function(t) {
                                var e = this.options.chart;
                                e = t.type || e.type || e.defaultSeriesType;
                                var i = c[e];
                                return i || M(17, !0, this, {
                                    missingModuleFor: e
                                }), e = new i, e.init(this, t), e
                            }, o.prototype.setSeriesData = function() {
                                this.getSeriesOrderByLinks().forEach((function(t) {
                                    t.points || t.data || !t.enabledDataSorting || t.setData(t.options.data, !1)
                                }))
                            }, o.prototype.getSeriesOrderByLinks = function() {
                                return this.series.concat().sort((function(t, e) {
                                    return t.linkedSeries.length || e.linkedSeries.length ? e.linkedSeries.length - t.linkedSeries.length : 0
                                }))
                            }, o.prototype.orderSeries = function(t) {
                                var e = this.series;
                                for (t = t || 0; t < e.length; t++) e[t] && (e[t].index = t, e[t].name = e[t].getName())
                            }, o.prototype.isInsidePlot = function(t, e, i) {
                                var s = i ? e : t;
                                return t = i ? t : e, s = {
                                    x: s,
                                    y: t,
                                    isInsidePlot: 0 <= s && s <= this.plotWidth && 0 <= t && t <= this.plotHeight
                                }, A(this, "afterIsInsidePlot", s), s.isInsidePlot
                            }, o.prototype.redraw = function(t) {
                                A(this, "beforeRedraw");
                                var e = this,
                                    i = e.axes,
                                    s = e.series,
                                    o = e.pointer,
                                    n = e.legend,
                                    r = e.userOptions.legend,
                                    a = e.isDirtyLegend,
                                    h = e.hasCartesianSeries,
                                    l = e.isDirtyBox,
                                    c = e.renderer,
                                    d = c.isHidden(),
                                    p = [];
                                for (e.setResponsive && e.setResponsive(!1), N(!!e.hasRendered && t, e), d && e.temporaryDisplay(), e.layOutTitles(), t = s.length; t--;) {
                                    var u = s[t];
                                    if (u.options.stacking) {
                                        var f = !0;
                                        if (u.isDirty) {
                                            var g = !0;
                                            break
                                        }
                                    }
                                }
                                if (g)
                                    for (t = s.length; t--;) u = s[t], u.options.stacking && (u.isDirty = !0);
                                s.forEach((function(t) {
                                    t.isDirty && ("point" === t.options.legendType ? (t.updateTotals && t.updateTotals(), a = !0) : r && (r.labelFormatter || r.labelFormat) && (a = !0)), t.isDirtyData && A(t, "updatedData")
                                })), a && n && n.options.enabled && (n.render(), e.isDirtyLegend = !1), f && e.getStacks(), h && i.forEach((function(t) {
                                    e.isResizing && t.tickPositions || (t.updateNames(), t.setScale())
                                })), e.getMargins(), h && (i.forEach((function(t) {
                                    t.isDirty && (l = !0)
                                })), i.forEach((function(t) {
                                    var e = t.min + "," + t.max;
                                    t.extKey !== e && (t.extKey = e, p.push((function() {
                                        A(t, "afterSetExtremes", w(t.eventArgs, t.getExtremes())), delete t.eventArgs
                                    }))), (l || f) && t.redraw()
                                }))), l && e.drawChartBox(), A(e, "predraw"), s.forEach((function(t) {
                                    (l || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1
                                })), o && o.reset(!0), c.draw(), A(e, "redraw"), A(e, "render"), d && e.temporaryDisplay(!0), p.forEach((function(t) {
                                    t.call()
                                }))
                            }, o.prototype.get = function(t) {
                                function e(e) {
                                    return e.id === t || e.options && e.options.id === t
                                }
                                var i, s = this.series,
                                    o = S(this.axes, e) || S(this.series, e);
                                for (i = 0; !o && i < s.length; i++) o = S(s[i].points || [], e);
                                return o
                            }, o.prototype.getAxes = function() {
                                var e = this,
                                    i = this.options,
                                    s = i.xAxis = W(i.xAxis || {});
                                i = i.yAxis = W(i.yAxis || {}), A(this, "getAxes"), s.forEach((function(t, e) {
                                    t.index = e, t.isX = !0
                                })), i.forEach((function(t, e) {
                                    t.index = e
                                })), s.concat(i).forEach((function(i) {
                                    new t(e, i)
                                })), A(this, "afterGetAxes")
                            }, o.prototype.getSelectedPoints = function() {
                                var t = [];
                                return this.series.forEach((function(e) {
                                    t = t.concat(e.getPointsCollection().filter((function(t) {
                                        return z(t.selectedStaging, t.selected)
                                    })))
                                })), t
                            }, o.prototype.getSelectedSeries = function() {
                                return this.series.filter((function(t) {
                                    return t.selected
                                }))
                            }, o.prototype.setTitle = function(t, e, i) {
                                this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i)
                            }, o.prototype.applyDescription = function(t, e) {
                                var i = this,
                                    s = "title" === t ? {
                                        color: "#333333",
                                        fontSize: this.options.isStock ? "16px" : "18px"
                                    } : {
                                        color: "#666666"
                                    };
                                s = this.options[t] = D(!this.styledMode && {
                                    style: s
                                }, this.options[t], e);
                                var o = this[t];
                                o && e && (this[t] = o = o.destroy()), s && !o && (o = this.renderer.text(s.text, 0, 0, s.useHTML).attr({
                                    align: s.align,
                                    class: "highcharts-" + t,
                                    zIndex: s.zIndex || 4
                                }).add(), o.update = function(e) {
                                    i[{
                                        title: "setTitle",
                                        subtitle: "setSubtitle",
                                        caption: "setCaption"
                                    }[t]](e)
                                }, this.styledMode || o.css(s.style), this[t] = o)
                            }, o.prototype.layOutTitles = function(t) {
                                var e = [0, 0, 0],
                                    i = this.renderer,
                                    s = this.spacingBox;
                                ["title", "subtitle", "caption"].forEach((function(t) {
                                    var o = this[t],
                                        n = this.options[t],
                                        r = n.verticalAlign || "top";
                                    if (t = "title" === t ? -3 : "top" === r ? e[0] + 2 : 0, o) {
                                        if (!this.styledMode) var a = n.style.fontSize;
                                        a = i.fontMetrics(a, o).b, o.css({
                                            width: (n.width || s.width + (n.widthAdjust || 0)) + "px"
                                        });
                                        var h = Math.round(o.getBBox(n.useHTML).height);
                                        o.align(w({
                                            y: "bottom" === r ? a : t + a,
                                            height: h
                                        }, n), !1, "spacingBox"), n.floating || ("top" === r ? e[0] = Math.ceil(e[0] + h) : "bottom" === r && (e[2] = Math.ceil(e[2] + h)))
                                    }
                                }), this), e[0] && "top" === (this.options.title.verticalAlign || "top") && (e[0] += this.options.title.margin), e[2] && "bottom" === this.options.caption.verticalAlign && (e[2] += this.options.caption.margin);
                                var o = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
                                this.titleOffset = e, A(this, "afterLayOutTitles"), !this.isDirtyBox && o && (this.isDirtyBox = this.isDirtyLegend = o, this.hasRendered && z(t, !0) && this.isDirtyBox && this.redraw())
                            }, o.prototype.getChartSize = function() {
                                var t = this.options.chart,
                                    e = t.width;
                                t = t.height;
                                var i = this.renderTo;
                                y(e) || (this.containerWidth = T(i, "width")), y(t) || (this.containerHeight = T(i, "height")), this.chartWidth = Math.max(0, e || this.containerWidth || 600), this.chartHeight = Math.max(0, R(t, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                            }, o.prototype.temporaryDisplay = function(t) {
                                var e = this.renderTo;
                                if (t)
                                    for (; e && e.style;) e.hcOrigStyle && (v(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (l.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
                                else
                                    for (; e && e.style;)
                                        if (l.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, l.body.appendChild(e)), ("none" === T(e, "display", !1) || e.hcOricDetached) && (e.hcOrigStyle = {
                                                display: e.style.display,
                                                height: e.style.height,
                                                overflow: e.style.overflow
                                            }, t = {
                                                display: "block",
                                                overflow: "hidden"
                                            }, e !== this.renderTo && (t.height = 0), v(e, t), e.offsetWidth || e.style.setProperty("display", "block", "important")), e = e.parentNode, e === l.body) break
                            }, o.prototype.setClassName = function(t) {
                                this.container.className = "highcharts-container " + (t || "")
                            }, o.prototype.getContainer = function() {
                                var t, i, s = this.options,
                                    o = s.chart,
                                    n = this.renderTo,
                                    r = X();
                                n || (this.renderTo = n = o.renderTo), L(n) && (this.renderTo = n = l.getElementById(n)), n || M(13, !0, this);
                                var a = j(m(n, "data-highcharts-chart"));
                                O(a) && h[a] && h[a].hasRendered && h[a].destroy(), m(n, "data-highcharts-chart", this.index), n.innerHTML = "", o.skipClone || n.offsetWidth || this.temporaryDisplay(), this.getChartSize(), a = this.chartWidth;
                                var c = this.chartHeight;
                                if (v(n, {
                                        overflow: "hidden"
                                    }), this.styledMode || (t = w({
                                        position: "relative",
                                        overflow: "hidden",
                                        width: a + "px",
                                        height: c + "px",
                                        textAlign: "left",
                                        lineHeight: "normal",
                                        zIndex: 0,
                                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                                        userSelect: "none"
                                    }, o.style)), this.container = n = x("div", {
                                        id: r
                                    }, t, n), this._cursor = n.style.cursor, this.renderer = new(e[o.renderer] || e.Renderer)(n, a, c, null, o.forExport, s.exporting && s.exporting.allowHTML, this.styledMode), N(void 0, this), this.setClassName(o.className), this.styledMode)
                                    for (i in s.defs) this.renderer.definition(s.defs[i]);
                                else this.renderer.setStyle(o.style);
                                this.renderer.chartIndex = this.index, A(this, "afterGetContainer")
                            }, o.prototype.getMargins = function(t) {
                                var e = this.spacing,
                                    i = this.margin,
                                    s = this.titleOffset;
                                this.resetMargins(), s[0] && !y(i[0]) && (this.plotTop = Math.max(this.plotTop, s[0] + e[0])), s[2] && !y(i[2]) && (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])), this.legend && this.legend.display && this.legend.adjustMargins(i, e), A(this, "getMargins"), t || this.getAxisMargins()
                            }, o.prototype.getAxisMargins = function() {
                                var t = this,
                                    e = t.axisOffset = [0, 0, 0, 0],
                                    i = t.colorAxis,
                                    s = t.margin,
                                    o = function(t) {
                                        t.forEach((function(t) {
                                            t.visible && t.getOffset()
                                        }))
                                    };
                                t.hasCartesianSeries ? o(t.axes) : i && i.length && o(i), F.forEach((function(i, o) {
                                    y(s[o]) || (t[i] += e[o])
                                })), t.setChartSize()
                            }, o.prototype.reflow = function(t) {
                                var e = this,
                                    i = e.options.chart,
                                    s = e.renderTo,
                                    o = y(i.width) && y(i.height),
                                    n = i.width || T(s, "width");
                                i = i.height || T(s, "height"), s = t ? t.target : d, o || e.isPrinting || !n || !i || s !== d && s !== l || (n === e.containerWidth && i === e.containerHeight || (a.clearTimeout(e.reflowTimeout), e.reflowTimeout = H((function() {
                                    e.container && e.setSize(void 0, void 0, !1)
                                }), t ? 100 : 0)), e.containerWidth = n, e.containerHeight = i)
                            }, o.prototype.setReflow = function(t) {
                                var e = this;
                                !1 === t || this.unbindReflow ? !1 === t && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = u(d, "resize", (function(t) {
                                    e.options && e.reflow(t)
                                })), u(this, "destroy", this.unbindReflow))
                            }, o.prototype.setSize = function(t, e, i) {
                                var s = this,
                                    o = s.renderer;
                                s.isResizing += 1, N(i, s), i = o.globalAnimation, s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, "undefined" !== typeof t && (s.options.chart.width = t), "undefined" !== typeof e && (s.options.chart.height = e), s.getChartSize(), s.styledMode || (i ? f : v)(s.container, {
                                    width: s.chartWidth + "px",
                                    height: s.chartHeight + "px"
                                }, i), s.setChartSize(!0), o.setSize(s.chartWidth, s.chartHeight, i), s.axes.forEach((function(t) {
                                    t.isDirty = !0, t.setScale()
                                })), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(i), s.oldChartHeight = null, A(s, "resize"), H((function() {
                                    s && A(s, "endResize", null, (function() {
                                        --s.isResizing
                                    }))
                                }), g(i).duration || 0)
                            }, o.prototype.setChartSize = function(t) {
                                var e, i, s, o, n = this.inverted,
                                    r = this.renderer,
                                    a = this.chartWidth,
                                    h = this.chartHeight,
                                    l = this.options.chart,
                                    c = this.spacing,
                                    d = this.clipOffset;
                                this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(a - e - this.marginRight)), this.plotHeight = o = Math.max(0, Math.round(h - i - this.marginBottom)), this.plotSizeX = n ? o : s, this.plotSizeY = n ? s : o, this.plotBorderWidth = l.plotBorderWidth || 0, this.spacingBox = r.spacingBox = {
                                    x: c[3],
                                    y: c[0],
                                    width: a - c[3] - c[1],
                                    height: h - c[0] - c[2]
                                }, this.plotBox = r.plotBox = {
                                    x: e,
                                    y: i,
                                    width: s,
                                    height: o
                                }, a = 2 * Math.floor(this.plotBorderWidth / 2), n = Math.ceil(Math.max(a, d[3]) / 2), r = Math.ceil(Math.max(a, d[0]) / 2), this.clipBox = {
                                    x: n,
                                    y: r,
                                    width: Math.floor(this.plotSizeX - Math.max(a, d[1]) / 2 - n),
                                    height: Math.max(0, Math.floor(this.plotSizeY - Math.max(a, d[2]) / 2 - r))
                                }, t || this.axes.forEach((function(t) {
                                    t.setAxisSize(), t.setAxisTranslation()
                                })), A(this, "afterSetChartSize", {
                                    skipAxes: t
                                })
                            }, o.prototype.resetMargins = function() {
                                A(this, "resetMargins");
                                var t = this,
                                    e = t.options.chart;
                                ["margin", "spacing"].forEach((function(i) {
                                    var s = e[i],
                                        o = E(s) ? s : [s, s, s, s];
                                    ["Top", "Right", "Bottom", "Left"].forEach((function(s, n) {
                                        t[i][n] = z(e[i + s], o[n])
                                    }))
                                })), F.forEach((function(e, i) {
                                    t[e] = z(t.margin[i], t.spacing[i])
                                })), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
                            }, o.prototype.drawChartBox = function() {
                                var t, e = this.options.chart,
                                    i = this.renderer,
                                    s = this.chartWidth,
                                    o = this.chartHeight,
                                    n = this.chartBackground,
                                    r = this.plotBackground,
                                    a = this.plotBorder,
                                    h = this.styledMode,
                                    l = this.plotBGImage,
                                    c = e.backgroundColor,
                                    d = e.plotBackgroundColor,
                                    p = e.plotBackgroundImage,
                                    u = this.plotLeft,
                                    f = this.plotTop,
                                    g = this.plotWidth,
                                    m = this.plotHeight,
                                    x = this.plotBox,
                                    v = this.clipRect,
                                    y = this.clipBox,
                                    b = "animate";
                                if (n || (this.chartBackground = n = i.rect().addClass("highcharts-background").add(), b = "attr"), h) var k = t = n.strokeWidth();
                                else k = e.borderWidth || 0, t = k + (e.shadow ? 8 : 0), c = {
                                    fill: c || "none"
                                }, (k || n["stroke-width"]) && (c.stroke = e.borderColor, c["stroke-width"] = k), n.attr(c).shadow(e.shadow);
                                n[b]({
                                    x: t / 2,
                                    y: t / 2,
                                    width: s - t - k % 2,
                                    height: o - t - k % 2,
                                    r: e.borderRadius
                                }), b = "animate", r || (b = "attr", this.plotBackground = r = i.rect().addClass("highcharts-plot-background").add()), r[b](x), h || (r.attr({
                                    fill: d || "none"
                                }).shadow(e.plotShadow), p && (l ? (p !== l.attr("href") && l.attr("href", p), l.animate(x)) : this.plotBGImage = i.image(p, u, f, g, m).add())), v ? v.animate({
                                    width: y.width,
                                    height: y.height
                                }) : this.clipRect = i.clipRect(y), b = "animate", a || (b = "attr", this.plotBorder = a = i.rect().addClass("highcharts-plot-border").attr({
                                    zIndex: 1
                                }).add()), h || a.attr({
                                    stroke: e.plotBorderColor,
                                    "stroke-width": e.plotBorderWidth || 0,
                                    fill: "none"
                                }), a[b](a.crisp({
                                    x: u,
                                    y: f,
                                    width: g,
                                    height: m
                                }, -a.strokeWidth())), this.isDirtyBox = !1, A(this, "afterDrawChartBox")
                            }, o.prototype.propFromSeries = function() {
                                var t, e, i, s = this,
                                    o = s.options.chart,
                                    n = s.options.series;
                                ["inverted", "angular", "polar"].forEach((function(r) {
                                    for (t = c[o.type || o.defaultSeriesType], i = o[r] || t && t.prototype[r], e = n && n.length; !i && e--;)(t = c[n[e].type]) && t.prototype[r] && (i = !0);
                                    s[r] = i
                                }))
                            }, o.prototype.linkSeries = function() {
                                var t = this,
                                    e = t.series;
                                e.forEach((function(t) {
                                    t.linkedSeries.length = 0
                                })), e.forEach((function(e) {
                                    var i = e.options.linkedTo;
                                    L(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i)) && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, i.enabledDataSorting && e.setDataSortingOptions(), e.visible = z(e.options.visible, i.options.visible, e.visible))
                                })), A(this, "afterLinkSeries")
                            }, o.prototype.renderSeries = function() {
                                this.series.forEach((function(t) {
                                    t.translate(), t.render()
                                }))
                            }, o.prototype.renderLabels = function() {
                                var t = this,
                                    e = t.options.labels;
                                e.items && e.items.forEach((function(i) {
                                    var s = w(e.style, i.style),
                                        o = j(s.left) + t.plotLeft,
                                        n = j(s.top) + t.plotTop + 12;
                                    delete s.left, delete s.top, t.renderer.text(i.html, o, n).attr({
                                        zIndex: 2
                                    }).css(s).add()
                                }))
                            }, o.prototype.render = function() {
                                var t = this.axes,
                                    e = this.colorAxis,
                                    s = this.renderer,
                                    o = this.options,
                                    n = 0,
                                    r = function(t) {
                                        t.forEach((function(t) {
                                            t.visible && t.render()
                                        }))
                                    };
                                this.setTitle(), this.legend = new i(this, o.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), o = this.plotWidth, t.some((function(t) {
                                    if (t.horiz && t.visible && t.options.labels.enabled && t.series.length) return n = 21, !0
                                }));
                                var a = this.plotHeight = Math.max(this.plotHeight - n, 0);
                                t.forEach((function(t) {
                                    t.setScale()
                                })), this.getAxisMargins();
                                var h = 1.1 < o / this.plotWidth,
                                    l = 1.05 < a / this.plotHeight;
                                (h || l) && (t.forEach((function(t) {
                                    (t.horiz && h || !t.horiz && l) && t.setTickInterval(!0)
                                })), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries ? r(t) : e && e.length && r(e), this.seriesGroup || (this.seriesGroup = s.g("series-group").attr({
                                    zIndex: 3
                                }).add()), this.renderSeries(), this.renderLabels(), this.addCredits(), this.setResponsive && this.setResponsive(), this.updateContainerScaling(), this.hasRendered = !0
                            }, o.prototype.addCredits = function(t) {
                                var e = this,
                                    i = D(!0, this.options.credits, t);
                                i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", (function() {
                                    i.href && (d.location.href = i.href)
                                })).attr({
                                    align: i.position.align,
                                    zIndex: 8
                                }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function(t) {
                                    e.credits = e.credits.destroy(), e.addCredits(t)
                                })
                            }, o.prototype.updateContainerScaling = function() {
                                var t = this.container;
                                if (2 < t.offsetWidth && 2 < t.offsetHeight && t.getBoundingClientRect) {
                                    var e = t.getBoundingClientRect(),
                                        i = e.width / t.offsetWidth;
                                    t = e.height / t.offsetHeight, 1 !== i || 1 !== t ? this.containerScaling = {
                                        scaleX: i,
                                        scaleY: t
                                    } : delete this.containerScaling
                                }
                            }, o.prototype.destroy = function() {
                                var t, i = this,
                                    s = i.axes,
                                    o = i.series,
                                    n = i.container,
                                    r = n && n.parentNode;
                                for (A(i, "destroy"), i.renderer.forExport ? k(h, i) : h[i.index] = void 0, e.chartCount--, i.renderTo.removeAttribute("data-highcharts-chart"), G(i), t = s.length; t--;) s[t] = s[t].destroy();
                                for (this.scroller && this.scroller.destroy && this.scroller.destroy(), t = o.length; t--;) o[t] = o[t].destroy();
                                "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach((function(t) {
                                    var e = i[t];
                                    e && e.destroy && (i[t] = e.destroy())
                                })), n && (n.innerHTML = "", G(n), r && b(n)), I(i, (function(t, e) {
                                    delete i[e]
                                }))
                            }, o.prototype.firstRender = function() {
                                var t = this,
                                    i = t.options;
                                t.isReadyToRender && !t.isReadyToRender() || (t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), (P(i.series) ? i.series : []).forEach((function(e) {
                                    t.initSeries(e)
                                })), t.linkSeries(), t.setSeriesData(), A(t, "beforeRender"), n && (t.pointer = e.hasTouch || !d.PointerEvent && !d.MSPointerEvent ? new n(t, i) : new s(t, i)), t.render(), t.renderer.imgCount || t.hasLoaded || t.onload(), t.temporaryDisplay(!0))
                            }, o.prototype.onload = function() {
                                this.callbacks.concat([this.callback]).forEach((function(t) {
                                    t && "undefined" !== typeof this.index && t.apply(this, [this])
                                }), this), A(this, "load"), A(this, "render"), y(this.index) && this.setReflow(this.options.chart.reflow), this.hasLoaded = !0
                            }, o
                        }();
                    return Y.prototype.callbacks = [], e.chart = function(t, e, i) {
                        return new Y(t, e, i)
                    }, e.Chart = Y
                })), e(i, "parts/ScrollablePlotArea.js", [i["parts/Chart.js"], i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e, i) {
                    var s = i.addEvent,
                        o = i.createElement,
                        n = i.pick,
                        r = i.stop;
                    s(t, "afterSetChartSize", (function(t) {
                        var i = this.options.chart.scrollablePlotArea,
                            s = i && i.minWidth;
                        if (i = i && i.minHeight, !this.renderer.forExport) {
                            if (s) {
                                if (this.scrollablePixelsX = s = Math.max(0, s - this.chartWidth)) {
                                    this.plotWidth += s, this.inverted ? (this.clipBox.height += s, this.plotBox.height += s) : (this.clipBox.width += s, this.plotBox.width += s);
                                    var o = {
                                        1: {
                                            name: "right",
                                            value: s
                                        }
                                    }
                                }
                            } else i && (this.scrollablePixelsY = s = Math.max(0, i - this.chartHeight)) && (this.plotHeight += s, this.inverted ? (this.clipBox.width += s, this.plotBox.width += s) : (this.clipBox.height += s, this.plotBox.height += s), o = {
                                2: {
                                    name: "bottom",
                                    value: s
                                }
                            });
                            o && !t.skipAxes && this.axes.forEach((function(t) {
                                o[t.side] ? t.getPlotLinePath = function() {
                                    var i = o[t.side].name,
                                        s = this[i];
                                    this[i] = s - o[t.side].value;
                                    var n = e.Axis.prototype.getPlotLinePath.apply(this, arguments);
                                    return this[i] = s, n
                                } : (t.setAxisSize(), t.setAxisTranslation())
                            }))
                        }
                    })), s(t, "render", (function() {
                        this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed()
                    })), t.prototype.setUpScrolling = function() {
                        var t = this,
                            e = {
                                WebkitOverflowScrolling: "touch",
                                overflowX: "hidden",
                                overflowY: "hidden"
                            };
                        this.scrollablePixelsX && (e.overflowX = "auto"), this.scrollablePixelsY && (e.overflowY = "auto"), this.scrollingContainer = o("div", {
                            className: "highcharts-scrolling"
                        }, e, this.renderTo), s(this.scrollingContainer, "scroll", (function() {
                            t.pointer && delete t.pointer.chartPosition
                        })), this.innerContainer = o("div", {
                            className: "highcharts-inner-container"
                        }, null, this.scrollingContainer), this.innerContainer.appendChild(this.container), this.setUpScrolling = null
                    }, t.prototype.moveFixedElements = function() {
                        var t, e = this.container,
                            i = this.fixedRenderer,
                            s = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" ");
                        this.scrollablePixelsX && !this.inverted ? t = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted || this.scrollablePixelsY && !this.inverted ? t = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (t = ".highcharts-yaxis"), s.push(t, t + "-labels"), s.forEach((function(t) {
                            [].forEach.call(e.querySelectorAll(t), (function(t) {
                                (t.namespaceURI === i.SVG_NS ? i.box : i.box.parentNode).appendChild(t), t.style.pointerEvents = "auto"
                            }))
                        }))
                    }, t.prototype.applyFixed = function() {
                        var t, i, a = !this.fixedDiv,
                            h = this.options.chart.scrollablePlotArea;
                        a ? (this.fixedDiv = o("div", {
                            className: "highcharts-fixed"
                        }, {
                            position: "absolute",
                            overflow: "hidden",
                            pointerEvents: "none",
                            zIndex: 2
                        }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.renderTo.style.overflow = "visible", this.fixedRenderer = i = new e.Renderer(this.fixedDiv, this.chartWidth, this.chartHeight, null === (t = this.options.chart) || void 0 === t ? void 0 : t.style), this.scrollableMask = i.path().attr({
                            fill: this.options.chart.backgroundColor || "#fff",
                            "fill-opacity": n(h.opacity, .85),
                            zIndex: -1
                        }).addClass("highcharts-scrollable-mask").add(), this.moveFixedElements(), s(this, "afterShowResetZoom", this.moveFixedElements), s(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight), t = this.chartWidth + (this.scrollablePixelsX || 0), i = this.chartHeight + (this.scrollablePixelsY || 0), r(this.container), this.container.style.width = t + "px", this.container.style.height = i + "px", this.renderer.boxWrapper.attr({
                            width: t,
                            height: i,
                            viewBox: [0, 0, t, i].join(" ")
                        }), this.chartBackground.attr({
                            width: t,
                            height: i
                        }), this.scrollingContainer.style.height = this.chartHeight + "px", a && (h.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * h.scrollPositionX), h.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * h.scrollPositionY)), i = this.axisOffset, a = this.plotTop - i[0] - 1, h = this.plotLeft - i[3] - 1, t = this.plotTop + this.plotHeight + i[2] + 1, i = this.plotLeft + this.plotWidth + i[1] + 1;
                        var l = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
                            c = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
                        a = this.scrollablePixelsX ? [
                            ["M", 0, a],
                            ["L", this.plotLeft - 1, a],
                            ["L", this.plotLeft - 1, t],
                            ["L", 0, t],
                            ["Z"],
                            ["M", l, a],
                            ["L", this.chartWidth, a],
                            ["L", this.chartWidth, t],
                            ["L", l, t],
                            ["Z"]
                        ] : this.scrollablePixelsY ? [
                            ["M", h, 0],
                            ["L", h, this.plotTop - 1],
                            ["L", i, this.plotTop - 1],
                            ["L", i, 0],
                            ["Z"],
                            ["M", h, c],
                            ["L", h, this.chartHeight],
                            ["L", i, this.chartHeight],
                            ["L", i, c],
                            ["Z"]
                        ] : [
                            ["M", 0, 0]
                        ], "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
                            d: a
                        })
                    }
                })), e(i, "parts/StackingAxis.js", [i["parts/Utilities.js"]], (function(t) {
                    var e = t.addEvent,
                        i = t.destroyObjectProperties,
                        s = t.fireEvent,
                        o = t.objectEach,
                        n = t.pick,
                        r = function() {
                            function t(t) {
                                this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t
                            }
                            return t.prototype.buildStacks = function() {
                                var t, e = this.axis,
                                    i = e.series,
                                    o = n(e.options.reversedStacks, !0),
                                    r = i.length;
                                if (!e.isXAxis) {
                                    for (this.usePercentage = !1, t = r; t--;) {
                                        var a = i[o ? t : r - t - 1];
                                        a.setStackedPoints(), a.setGroupedPoints()
                                    }
                                    for (t = 0; t < r; t++) i[t].modifyStacks();
                                    s(e, "afterBuildStacks")
                                }
                            }, t.prototype.cleanStacks = function() {
                                if (!this.axis.isXAxis) {
                                    if (this.oldStacks) var t = this.stacks = this.oldStacks;
                                    o(t, (function(t) {
                                        o(t, (function(t) {
                                            t.cumulative = t.total
                                        }))
                                    }))
                                }
                            }, t.prototype.resetStacks = function() {
                                var t = this,
                                    e = t.stacks;
                                t.axis.isXAxis || o(e, (function(e) {
                                    o(e, (function(i, s) {
                                        i.touched < t.stacksTouched ? (i.destroy(), delete e[s]) : (i.total = null, i.cumulative = null)
                                    }))
                                }))
                            }, t.prototype.renderStackTotals = function() {
                                var t = this.axis.chart,
                                    e = t.renderer,
                                    i = this.stacks,
                                    s = this.stackTotalGroup = this.stackTotalGroup || e.g("stack-labels").attr({
                                        visibility: "visible",
                                        zIndex: 6
                                    }).add();
                                s.translate(t.plotLeft, t.plotTop), o(i, (function(t) {
                                    o(t, (function(t) {
                                        t.render(s)
                                    }))
                                }))
                            }, t
                        }();
                    return function() {
                        function t() {}
                        return t.compose = function(i) {
                            e(i, "init", t.onInit), e(i, "destroy", t.onDestroy)
                        }, t.onDestroy = function() {
                            var t = this.stacking;
                            if (t) {
                                var e = t.stacks;
                                o(e, (function(t, s) {
                                    i(t), e[s] = null
                                })), t && t.stackTotalGroup && t.stackTotalGroup.destroy()
                            }
                        }, t.onInit = function() {
                            this.stacking || (this.stacking = new r(this))
                        }, t
                    }()
                })), e(i, "mixins/legend-symbol.js", [i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.merge,
                        s = e.pick;
                    return t.LegendSymbolMixin = {
                        drawRectangle: function(t, e) {
                            var i = t.symbolHeight,
                                o = t.options.squareSymbol;
                            e.legendSymbol = this.chart.renderer.rect(o ? (t.symbolWidth - i) / 2 : 0, t.baseline - i + 1, o ? i : t.symbolWidth, i, s(t.options.symbolRadius, i / 2)).addClass("highcharts-point").attr({
                                zIndex: 3
                            }).add(e.legendGroup)
                        },
                        drawLineMarker: function(t) {
                            var e = this.options,
                                o = e.marker,
                                n = t.symbolWidth,
                                r = t.symbolHeight,
                                a = r / 2,
                                h = this.chart.renderer,
                                l = this.legendGroup;
                            t = t.baseline - Math.round(.3 * t.fontMetrics.b);
                            var c = {};
                            this.chart.styledMode || (c = {
                                "stroke-width": e.lineWidth || 0
                            }, e.dashStyle && (c.dashstyle = e.dashStyle)), this.legendLine = h.path(["M", 0, t, "L", n, t]).addClass("highcharts-graph").attr(c).add(l), o && !1 !== o.enabled && n && (e = Math.min(s(o.radius, a), a), 0 === this.symbol.indexOf("url") && (o = i(o, {
                                width: r,
                                height: r
                            }), e = 0), this.legendSymbol = o = h.symbol(this.symbol, n / 2 - e, t - e, 2 * e, 2 * e, o).addClass("highcharts-point").add(l), o.isMarker = !0)
                        }
                    }, t.LegendSymbolMixin
                })), e(i, "parts/Point.js", [i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.animObject,
                        s = e.defined,
                        o = e.erase,
                        n = e.extend,
                        r = e.fireEvent,
                        a = e.format,
                        h = e.getNestedProperty,
                        l = e.isArray,
                        c = e.isNumber,
                        d = e.isObject,
                        p = e.syncTimeout,
                        u = e.pick,
                        f = e.removeEvent,
                        g = e.uniqueKey;
                    return e = function() {
                        function t() {
                            this.colorIndex = this.category = void 0, this.formatPrefix = "point", this.id = void 0, this.isNull = !1, this.percentage = this.options = this.name = void 0, this.selected = !1, this.total = this.series = void 0, this.visible = !0, this.x = void 0
                        }
                        return t.prototype.animateBeforeDestroy = function() {
                            var t, e = this,
                                i = {
                                    x: e.startXPos,
                                    opacity: 0
                                },
                                s = e.getGraphicalProps();
                            s.singular.forEach((function(s) {
                                t = "dataLabel" === s, e[s] = e[s].animate(t ? {
                                    x: e[s].startXPos,
                                    y: e[s].startYPos,
                                    opacity: 0
                                } : i)
                            })), s.plural.forEach((function(t) {
                                e[t].forEach((function(t) {
                                    t.element && t.animate(n({
                                        x: e.startXPos
                                    }, t.startYPos ? {
                                        x: t.startXPos,
                                        y: t.startYPos
                                    } : {}))
                                }))
                            }))
                        }, t.prototype.applyOptions = function(e, i) {
                            var s = this.series,
                                o = s.options.pointValKey || s.pointValKey;
                            return e = t.prototype.optionsToObject.call(this, e), n(this, e), this.options = this.options ? n(this.options, e) : e, e.group && delete this.group, e.dataLabels && delete this.dataLabels, o && (this.y = t.prototype.getNestedProperty.call(this, o)), this.formatPrefix = (this.isNull = u(this.isValid && !this.isValid(), null === this.x || !c(this.y))) ? "null" : "point", this.selected && (this.state = "select"), "name" in this && "undefined" === typeof i && s.xAxis && s.xAxis.hasNames && (this.x = s.xAxis.nameToX(this)), "undefined" === typeof this.x && s && (this.x = "undefined" === typeof i ? s.autoIncrement(this) : i), this
                        }, t.prototype.destroy = function() {
                            function t() {
                                for (r in (e.graphic || e.dataLabel || e.dataLabels) && (f(e), e.destroyElements()), e) e[r] = null
                            }
                            var e = this,
                                s = e.series,
                                n = s.chart;
                            s = s.options.dataSorting;
                            var r, a = n.hoverPoints,
                                h = i(e.series.chart.renderer.globalAnimation);
                            e.legendItem && n.legend.destroyItem(e), a && (e.setState(), o(a, e), a.length || (n.hoverPoints = null)), e === n.hoverPoint && e.onMouseOut(), s && s.enabled ? (this.animateBeforeDestroy(), p(t, h.duration)) : t(), n.pointCount--
                        }, t.prototype.destroyElements = function(t) {
                            var e = this;
                            t = e.getGraphicalProps(t), t.singular.forEach((function(t) {
                                e[t] = e[t].destroy()
                            })), t.plural.forEach((function(t) {
                                e[t].forEach((function(t) {
                                    t.element && t.destroy()
                                })), delete e[t]
                            }))
                        }, t.prototype.firePointEvent = function(t, e, i) {
                            var s = this,
                                o = this.series.options;
                            (o.point.events[t] || s.options && s.options.events && s.options.events[t]) && s.importEvents(), "click" === t && o.allowPointSelect && (i = function(t) {
                                s.select && s.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                            }), r(s, t, e, i)
                        }, t.prototype.getClassName = function() {
                            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                        }, t.prototype.getGraphicalProps = function(t) {
                            var e, i = this,
                                s = [],
                                o = {
                                    singular: [],
                                    plural: []
                                };
                            for (t = t || {
                                    graphic: 1,
                                    dataLabel: 1
                                }, t.graphic && s.push("graphic", "shadowGroup"), t.dataLabel && s.push("dataLabel", "dataLabelUpper", "connector"), e = s.length; e--;) {
                                var n = s[e];
                                i[n] && o.singular.push(n)
                            }
                            return ["dataLabel", "connector"].forEach((function(e) {
                                var s = e + "s";
                                t[e] && i[s] && o.plural.push(s)
                            })), o
                        }, t.prototype.getLabelConfig = function() {
                            return {
                                x: this.category,
                                y: this.y,
                                color: this.color,
                                colorIndex: this.colorIndex,
                                key: this.name || this.category,
                                series: this.series,
                                point: this,
                                percentage: this.percentage,
                                total: this.total || this.stackTotal
                            }
                        }, t.prototype.getNestedProperty = function(t) {
                            if (t) return 0 === t.indexOf("custom.") ? h(t, this.options) : this[t]
                        }, t.prototype.getZone = function() {
                            var t = this.series,
                                e = t.zones;
                            t = t.zoneAxis || "y";
                            var i, s = 0;
                            for (i = e[s]; this[t] >= i.value;) i = e[++s];
                            return this.nonZonedColor || (this.nonZonedColor = this.color), this.color = i && i.color && !this.options.color ? i.color : this.nonZonedColor, i
                        }, t.prototype.hasNewShapeType = function() {
                            return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType
                        }, t.prototype.init = function(t, e, i) {
                            return this.series = t, this.applyOptions(e, i), this.id = s(this.id) ? this.id : g(), this.resolveColor(), t.chart.pointCount++, r(this, "afterInit"), this
                        }, t.prototype.optionsToObject = function(e) {
                            var i = {},
                                s = this.series,
                                o = s.options.keys,
                                n = o || s.pointArrayMap || ["y"],
                                r = n.length,
                                a = 0,
                                h = 0;
                            if (c(e) || null === e) i[n[0]] = e;
                            else if (l(e))
                                for (!o && e.length > r && (s = typeof e[0], "string" === s ? i.name = e[0] : "number" === s && (i.x = e[0]), a++); h < r;) o && "undefined" === typeof e[a] || (0 < n[h].indexOf(".") ? t.prototype.setNestedProperty(i, e[a], n[h]) : i[n[h]] = e[a]), a++, h++;
                            else "object" === typeof e && (i = e, e.dataLabels && (s._hasPointLabels = !0), e.marker && (s._hasPointMarkers = !0));
                            return i
                        }, t.prototype.resolveColor = function() {
                            var t = this.series,
                                e = t.chart.options.chart.colorCount,
                                i = t.chart.styledMode;
                            delete this.nonZonedColor, i || this.options.color || (this.color = t.color), t.options.colorByPoint ? (i || (e = t.options.colors || t.chart.options.colors, this.color = this.color || e[t.colorCounter], e = e.length), i = t.colorCounter, t.colorCounter++, t.colorCounter === e && (t.colorCounter = 0)) : i = t.colorIndex, this.colorIndex = u(this.colorIndex, i)
                        }, t.prototype.setNestedProperty = function(t, e, i) {
                            return i.split(".").reduce((function(t, i, s, o) {
                                return t[i] = o.length - 1 === s ? e : d(t[i], !0) ? t[i] : {}, t[i]
                            }), t), t
                        }, t.prototype.tooltipFormatter = function(t) {
                            var e = this.series,
                                i = e.tooltipOptions,
                                s = u(i.valueDecimals, ""),
                                o = i.valuePrefix || "",
                                n = i.valueSuffix || "";
                            return e.chart.styledMode && (t = e.chart.tooltip.styledModeFormat(t)), (e.pointArrayMap || ["y"]).forEach((function(e) {
                                e = "{point." + e, (o || n) && (t = t.replace(RegExp(e + "}", "g"), o + e + "}" + n)), t = t.replace(RegExp(e + "}", "g"), e + ":,." + s + "f}")
                            })), a(t, {
                                point: this,
                                series: this.series
                            }, e.chart)
                        }, t
                    }(), t.Point = e
                })), e(i, "parts/Series.js", [i["parts/Globals.js"], i["mixins/legend-symbol.js"], i["parts/Options.js"], i["parts/Point.js"], i["parts/SVGElement.js"], i["parts/Utilities.js"]], (function(t, e, i, s, o, n) {
                    var r = i.defaultOptions,
                        a = n.addEvent,
                        h = n.animObject,
                        l = n.arrayMax,
                        c = n.arrayMin,
                        d = n.clamp,
                        p = n.correctFloat,
                        u = n.defined,
                        f = n.erase,
                        g = n.error,
                        m = n.extend,
                        x = n.find,
                        v = n.fireEvent,
                        y = n.getNestedProperty,
                        b = n.isArray,
                        k = n.isFunction,
                        M = n.isNumber,
                        w = n.isString,
                        S = n.merge,
                        A = n.objectEach,
                        T = n.pick,
                        P = n.removeEvent;
                    i = n.seriesType;
                    var C = n.splat,
                        O = n.syncTimeout,
                        E = t.seriesTypes,
                        L = t.win;
                    t.Series = i("line", null, {
                        lineWidth: 2,
                        allowPointSelect: !1,
                        crisp: !0,
                        showCheckbox: !1,
                        animation: {
                            duration: 1e3
                        },
                        events: {},
                        marker: {
                            enabledThreshold: 2,
                            lineColor: "#ffffff",
                            lineWidth: 0,
                            radius: 4,
                            states: {
                                normal: {
                                    animation: !0
                                },
                                hover: {
                                    animation: {
                                        duration: 50
                                    },
                                    enabled: !0,
                                    radiusPlus: 2,
                                    lineWidthPlus: 1
                                },
                                select: {
                                    fillColor: "#cccccc",
                                    lineColor: "#000000",
                                    lineWidth: 2
                                }
                            }
                        },
                        point: {
                            events: {}
                        },
                        dataLabels: {
                            align: "center",
                            formatter: function() {
                                var t = this.series.chart.numberFormatter;
                                return "number" !== typeof this.y ? "" : t(this.y, -1)
                            },
                            padding: 5,
                            style: {
                                fontSize: "11px",
                                fontWeight: "bold",
                                color: "contrast",
                                textOutline: "1px contrast"
                            },
                            verticalAlign: "bottom",
                            x: 0,
                            y: 0
                        },
                        cropThreshold: 300,
                        opacity: 1,
                        pointRange: 0,
                        softThreshold: !0,
                        states: {
                            normal: {
                                animation: !0
                            },
                            hover: {
                                animation: {
                                    duration: 50
                                },
                                lineWidthPlus: 1,
                                marker: {},
                                halo: {
                                    size: 10,
                                    opacity: .25
                                }
                            },
                            select: {
                                animation: {
                                    duration: 0
                                }
                            },
                            inactive: {
                                animation: {
                                    duration: 50
                                },
                                opacity: .2
                            }
                        },
                        stickyTracking: !0,
                        turboThreshold: 1e3,
                        findNearestPointBy: "x"
                    }, {
                        axisTypes: ["xAxis", "yAxis"],
                        coll: "series",
                        colorCounter: 0,
                        cropShoulder: 1,
                        directTouch: !1,
                        eventsToUnbind: [],
                        isCartesian: !0,
                        parallelArrays: ["x", "y"],
                        pointClass: s,
                        requireSorting: !0,
                        sorted: !0,
                        init: function(t, e) {
                            v(this, "init", {
                                options: e
                            });
                            var i, s = this,
                                o = t.series;
                            this.eventOptions = this.eventOptions || {}, s.chart = t, s.options = e = s.setOptions(e), s.linkedSeries = [], s.bindAxes(), m(s, {
                                name: e.name,
                                state: "",
                                visible: !1 !== e.visible,
                                selected: !0 === e.selected
                            });
                            var n = e.events;
                            A(n, (function(t, e) {
                                k(t) && s.eventOptions[e] !== t && (k(s.eventOptions[e]) && P(s, e, s.eventOptions[e]), s.eventOptions[e] = t, a(s, e, t))
                            })), (n && n.click || e.point && e.point.events && e.point.events.click || e.allowPointSelect) && (t.runTrackerClick = !0), s.getColor(), s.getSymbol(), s.parallelArrays.forEach((function(t) {
                                s[t + "Data"] || (s[t + "Data"] = [])
                            })), s.isCartesian && (t.hasCartesianSeries = !0), o.length && (i = o[o.length - 1]), s._i = T(i && i._i, -1) + 1, s.opacity = s.options.opacity, t.orderSeries(this.insert(o)), e.dataSorting && e.dataSorting.enabled ? s.setDataSortingOptions() : s.points || s.data || s.setData(e.data, !1), v(this, "afterInit")
                        },
                        is: function(t) {
                            return E[t] && this instanceof E[t]
                        },
                        insert: function(t) {
                            var e, i = this.options.index;
                            if (M(i)) {
                                for (e = t.length; e--;)
                                    if (i >= T(t[e].options.index, t[e]._i)) {
                                        t.splice(e + 1, 0, this);
                                        break
                                    } - 1 === e && t.unshift(this), e += 1
                            } else t.push(this);
                            return T(e, t.length - 1)
                        },
                        bindAxes: function() {
                            var t, e = this,
                                i = e.options,
                                s = e.chart;
                            v(this, "bindAxes", null, (function() {
                                (e.axisTypes || []).forEach((function(o) {
                                    s[o].forEach((function(s) {
                                        t = s.options, (i[o] === t.index || "undefined" !== typeof i[o] && i[o] === t.id || "undefined" === typeof i[o] && 0 === t.index) && (e.insert(s.series), e[o] = s, s.isDirty = !0)
                                    })), e[o] || e.optionalAxis === o || g(18, !0, s)
                                }))
                            })), v(this, "afterBindAxes")
                        },
                        updateParallelArrays: function(t, e) {
                            var i = t.series,
                                s = arguments,
                                o = M(e) ? function(s) {
                                    var o = "y" === s && i.toYData ? i.toYData(t) : t[s];
                                    i[s + "Data"][e] = o
                                } : function(t) {
                                    Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(s, 2))
                                };
                            i.parallelArrays.forEach(o)
                        },
                        hasData: function() {
                            return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length
                        },
                        autoIncrement: function() {
                            var t, e = this.options,
                                i = this.xIncrement,
                                s = e.pointIntervalUnit,
                                o = this.chart.time;
                            return i = T(i, e.pointStart, 0), this.pointInterval = t = T(this.pointInterval, e.pointInterval, 1), s && (e = new o.Date(i), "day" === s ? o.set("Date", e, o.get("Date", e) + t) : "month" === s ? o.set("Month", e, o.get("Month", e) + t) : "year" === s && o.set("FullYear", e, o.get("FullYear", e) + t), t = e.getTime() - i), this.xIncrement = i + t, i
                        },
                        setDataSortingOptions: function() {
                            var t = this.options;
                            m(this, {
                                requireSorting: !1,
                                sorted: !1,
                                enabledDataSorting: !0,
                                allowDG: !1
                            }), u(t.pointRange) || (t.pointRange = 1)
                        },
                        setOptions: function(t) {
                            var e = this.chart,
                                i = e.options,
                                s = i.plotOptions,
                                o = e.userOptions || {};
                            t = S(t), e = e.styledMode;
                            var n = {
                                plotOptions: s,
                                userOptions: t
                            };
                            v(this, "setOptions", n);
                            var a = n.plotOptions[this.type],
                                h = o.plotOptions || {};
                            return this.userOptions = n.userOptions, o = S(a, s.series, o.plotOptions && o.plotOptions[this.type], t), this.tooltipOptions = S(r.tooltip, r.plotOptions.series && r.plotOptions.series.tooltip, r.plotOptions[this.type].tooltip, i.tooltip.userOptions, s.series && s.series.tooltip, s[this.type].tooltip, t.tooltip), this.stickyTracking = T(t.stickyTracking, h[this.type] && h[this.type].stickyTracking, h.series && h.series.stickyTracking, !(!this.tooltipOptions.shared || this.noSharedTooltip) || o.stickyTracking), null === a.marker && delete o.marker, this.zoneAxis = o.zoneAxis, i = this.zones = (o.zones || []).slice(), !o.negativeColor && !o.negativeFillColor || o.zones || (s = {
                                value: o[this.zoneAxis + "Threshold"] || o.threshold || 0,
                                className: "highcharts-negative"
                            }, e || (s.color = o.negativeColor, s.fillColor = o.negativeFillColor), i.push(s)), i.length && u(i[i.length - 1].value) && i.push(e ? {} : {
                                color: this.color,
                                fillColor: this.fillColor
                            }), v(this, "afterSetOptions", {
                                options: o
                            }), o
                        },
                        getName: function() {
                            return T(this.options.name, "Series " + (this.index + 1))
                        },
                        getCyclic: function(t, e, i) {
                            var s = this.chart,
                                o = this.userOptions,
                                n = t + "Index",
                                r = t + "Counter",
                                a = i ? i.length : T(s.options.chart[t + "Count"], s[t + "Count"]);
                            if (!e) {
                                var h = T(o[n], o["_" + n]);
                                u(h) || (s.series.length || (s[r] = 0), o["_" + n] = h = s[r] % a, s[r] += 1), i && (e = i[h])
                            }
                            "undefined" !== typeof h && (this[n] = h), this[t] = e
                        },
                        getColor: function() {
                            this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || r.plotOptions[this.type].color, this.chart.options.colors)
                        },
                        getPointsCollection: function() {
                            return (this.hasGroupedData ? this.points : this.data) || []
                        },
                        getSymbol: function() {
                            this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
                        },
                        findPointIndex: function(t, e) {
                            var i, s = t.id,
                                o = t.x,
                                n = this.points,
                                r = this.options.dataSorting;
                            if (s) var a = this.chart.get(s);
                            else if (this.linkedParent || this.enabledDataSorting) {
                                var h = r && r.matchByName ? "name" : "index";
                                if (a = x(n, (function(e) {
                                        return !e.touched && e[h] === t[h]
                                    })), !a) return
                            }
                            if (a) {
                                var l = a && a.index;
                                "undefined" !== typeof l && (i = !0)
                            }
                            return "undefined" === typeof l && M(o) && (l = this.xData.indexOf(o, e)), -1 !== l && "undefined" !== typeof l && this.cropped && (l = l >= this.cropStart ? l - this.cropStart : l), !i && n[l] && n[l].touched && (l = void 0), l
                        },
                        drawLegendSymbol: e.drawLineMarker,
                        updateData: function(t, e) {
                            var i, s, o, n = this.options,
                                r = n.dataSorting,
                                a = this.points,
                                h = [],
                                c = this.requireSorting,
                                d = t.length === a.length,
                                p = !0;
                            if (this.xIncrement = null, t.forEach((function(t, e) {
                                    var s = u(t) && this.pointClass.prototype.optionsToObject.call({
                                            series: this
                                        }, t) || {},
                                        l = s.x;
                                    s.id || M(l) ? (l = this.findPointIndex(s, o), -1 === l || "undefined" === typeof l ? h.push(t) : a[l] && t !== n.data[l] ? (a[l].update(t, !1, null, !1), a[l].touched = !0, c && (o = l + 1)) : a[l] && (a[l].touched = !0), (!d || e !== l || r && r.enabled || this.hasDerivedData) && (i = !0)) : h.push(t)
                                }), this), i)
                                for (t = a.length; t--;)(s = a[t]) && !s.touched && s.remove && s.remove(!1, e);
                            else !d || r && r.enabled ? p = !1 : (t.forEach((function(t, e) {
                                a[e].update && t !== a[e].y && a[e].update(t, !1, null, !1)
                            })), h.length = 0);
                            return a.forEach((function(t) {
                                t && (t.touched = !1)
                            })), !!p && (h.forEach((function(t) {
                                this.addPoint(t, !1, null, null, !1)
                            }), this), null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = l(this.xData), this.autoIncrement()), !0)
                        },
                        setData: function(t, e, i, s) {
                            var o, n = this,
                                r = n.points,
                                a = r && r.length || 0,
                                h = n.options,
                                l = n.chart,
                                c = h.dataSorting,
                                d = null,
                                p = n.xAxis;
                            d = h.turboThreshold;
                            var u, f = this.xData,
                                m = this.yData,
                                x = (o = n.pointArrayMap) && o.length,
                                v = h.keys,
                                y = 0,
                                k = 1;
                            if (t = t || [], o = t.length, e = T(e, !0), c && c.enabled && (t = this.sortData(t)), !1 !== s && o && a && !n.cropped && !n.hasGroupedData && n.visible && !n.isSeriesBoosting && (u = this.updateData(t, i)), !u) {
                                if (n.xIncrement = null, n.colorCounter = 0, this.parallelArrays.forEach((function(t) {
                                        n[t + "Data"].length = 0
                                    })), d && o > d)
                                    if (d = n.getFirstValidPoint(t), M(d))
                                        for (i = 0; i < o; i++) f[i] = this.autoIncrement(), m[i] = t[i];
                                    else if (b(d))
                                    if (x)
                                        for (i = 0; i < o; i++) s = t[i], f[i] = s[0], m[i] = s.slice(1, x + 1);
                                    else
                                        for (v && (y = v.indexOf("x"), k = v.indexOf("y"), y = 0 <= y ? y : 0, k = 0 <= k ? k : 1), i = 0; i < o; i++) s = t[i], f[i] = s[y], m[i] = s[k];
                                else g(12, !1, l);
                                else
                                    for (i = 0; i < o; i++) "undefined" !== typeof t[i] && (s = {
                                        series: n
                                    }, n.pointClass.prototype.applyOptions.apply(s, [t[i]]), n.updateParallelArrays(s, i));
                                for (m && w(m[0]) && g(14, !0, l), n.data = [], n.options.data = n.userOptions.data = t, i = a; i--;) r[i] && r[i].destroy && r[i].destroy();
                                p && (p.minRange = p.userMinRange), n.isDirty = l.isDirtyBox = !0, n.isDirtyData = !!r, i = !1
                            }
                            "point" === h.legendType && (this.processData(), this.generatePoints()), e && l.redraw(i)
                        },
                        sortData: function(t) {
                            var e = this,
                                i = e.options.dataSorting.sortKey || "y",
                                s = function(t, e) {
                                    return u(e) && t.pointClass.prototype.optionsToObject.call({
                                        series: t
                                    }, e) || {}
                                };
                            return t.forEach((function(i, o) {
                                t[o] = s(e, i), t[o].index = o
                            }), this), t.concat().sort((function(t, e) {
                                return t = y(i, t), e = y(i, e), e < t ? -1 : e > t ? 1 : 0
                            })).forEach((function(t, e) {
                                t.x = e
                            }), this), e.linkedSeries && e.linkedSeries.forEach((function(e) {
                                var i = e.options,
                                    o = i.data;
                                i.dataSorting && i.dataSorting.enabled || !o || (o.forEach((function(i, n) {
                                    o[n] = s(e, i), t[n] && (o[n].x = t[n].x, o[n].index = n)
                                })), e.setData(o, !1))
                            })), t
                        },
                        getProcessedData: function(t) {
                            var e = this.xData,
                                i = this.yData,
                                s = e.length,
                                o = 0,
                                n = this.xAxis,
                                r = this.options,
                                a = r.cropThreshold,
                                h = t || this.getExtremesFromAll || r.getExtremesFromAll,
                                l = this.isCartesian;
                            t = n && n.val2lin, r = !(!n || !n.logarithmic);
                            var c = this.requireSorting;
                            if (n) {
                                n = n.getExtremes();
                                var d = n.min,
                                    p = n.max
                            }
                            if (l && this.sorted && !h && (!a || s > a || this.forceCrop))
                                if (e[s - 1] < d || e[0] > p) e = [], i = [];
                                else if (this.yData && (e[0] < d || e[s - 1] > p)) {
                                o = this.cropData(this.xData, this.yData, d, p), e = o.xData, i = o.yData, o = o.start;
                                var u = !0
                            }
                            for (a = e.length || 1; --a;)
                                if (s = r ? t(e[a]) - t(e[a - 1]) : e[a] - e[a - 1], 0 < s && ("undefined" === typeof f || s < f)) var f = s;
                                else 0 > s && c && (g(15, !1, this.chart), c = !1);
                            return {
                                xData: e,
                                yData: i,
                                cropped: u,
                                cropStart: o,
                                closestPointRange: f
                            }
                        },
                        processData: function(t) {
                            var e = this.xAxis;
                            if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
                            t = this.getProcessedData(), this.cropped = t.cropped, this.cropStart = t.cropStart, this.processedXData = t.xData, this.processedYData = t.yData, this.closestPointRange = this.basePointRange = t.closestPointRange
                        },
                        cropData: function(t, e, i, s, o) {
                            var n, r = t.length,
                                a = 0,
                                h = r;
                            for (o = T(o, this.cropShoulder), n = 0; n < r; n++)
                                if (t[n] >= i) {
                                    a = Math.max(0, n - o);
                                    break
                                }
                            for (i = n; i < r; i++)
                                if (t[i] > s) {
                                    h = i + o;
                                    break
                                }
                            return {
                                xData: t.slice(a, h),
                                yData: e.slice(a, h),
                                start: a,
                                end: h
                            }
                        },
                        generatePoints: function() {
                            var t, e = this.options,
                                i = e.data,
                                s = this.data,
                                o = this.processedXData,
                                n = this.processedYData,
                                r = this.pointClass,
                                a = o.length,
                                h = this.cropStart || 0,
                                l = this.hasGroupedData;
                            e = e.keys;
                            var c, d = [];
                            for (s || l || (s = [], s.length = i.length, s = this.data = s), e && l && (this.options.keys = !1), c = 0; c < a; c++) {
                                var p = h + c;
                                if (l) {
                                    var u = (new r).init(this, [o[c]].concat(C(n[c])));
                                    u.dataGroup = this.groupMap[c], u.dataGroup.options && (u.options = u.dataGroup.options, m(u, u.dataGroup.options), delete u.dataLabels)
                                } else(u = s[p]) || "undefined" === typeof i[p] || (s[p] = u = (new r).init(this, i[p], o[c]));
                                u && (u.index = p, d[c] = u)
                            }
                            if (this.options.keys = e, s && (a !== (t = s.length) || l))
                                for (c = 0; c < t; c++) c !== h || l || (c += a), s[c] && (s[c].destroyElements(), s[c].plotX = void 0);
                            this.data = s, this.points = d, v(this, "afterGeneratePoints")
                        },
                        getXExtremes: function(t) {
                            return {
                                min: c(t),
                                max: l(t)
                            }
                        },
                        getExtremes: function(t, e) {
                            var i, s = this.xAxis,
                                o = this.yAxis,
                                n = this.processedXData || this.xData,
                                r = [],
                                a = 0,
                                h = 0,
                                d = 0,
                                p = this.requireSorting ? this.cropShoulder : 0,
                                u = !!o && o.positiveValuesOnly;
                            for (t = t || this.stackedYData || this.processedYData || [], o = t.length, s && (d = s.getExtremes(), h = d.min, d = d.max), i = 0; i < o; i++) {
                                var f = n[i],
                                    g = t[i],
                                    m = (M(g) || b(g)) && (g.length || 0 < g || !u);
                                if (f = e || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !s || (n[i + p] || f) >= h && (n[i - p] || f) <= d, m && f)
                                    if (m = g.length)
                                        for (; m--;) M(g[m]) && (r[a++] = g[m]);
                                    else r[a++] = g
                            }
                            return t = {
                                dataMin: c(r),
                                dataMax: l(r)
                            }, v(this, "afterGetExtremes", {
                                dataExtremes: t
                            }), t
                        },
                        applyExtremes: function() {
                            var t = this.getExtremes();
                            return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t
                        },
                        getFirstValidPoint: function(t) {
                            for (var e = null, i = t.length, s = 0; null === e && s < i;) e = t[s], s++;
                            return e
                        },
                        translate: function() {
                            this.processedXData || this.processData(), this.generatePoints();
                            var t, e, i = this.options,
                                s = i.stacking,
                                o = this.xAxis,
                                n = o.categories,
                                r = this.enabledDataSorting,
                                a = this.yAxis,
                                h = this.points,
                                l = h.length,
                                c = !!this.modifyValue,
                                f = this.pointPlacementToXValue(),
                                g = !!f,
                                m = i.threshold,
                                x = i.startFromThreshold ? m : 0,
                                y = this.zoneAxis || "y",
                                k = Number.MAX_VALUE;
                            for (t = 0; t < l; t++) {
                                var w = h[t],
                                    S = w.x,
                                    A = w.y,
                                    P = w.low,
                                    C = s && a.stacking && a.stacking.stacks[(this.negStacks && A < (x ? 0 : m) ? "-" : "") + this.stackKey];
                                if (a.positiveValuesOnly && null !== A && 0 >= A && (w.isNull = !0), w.plotX = e = p(d(o.translate(S, 0, 0, 0, 1, f, "flags" === this.type), -1e5, 1e5)), s && this.visible && C && C[S]) {
                                    var O = this.getStackIndicator(O, S, this.index);
                                    if (!w.isNull) var E = C[S],
                                        L = E.points[O.key]
                                }
                                if (b(L) && (P = L[0], A = L[1], P === x && O.key === C[S].base && (P = T(M(m) && m, a.min)), a.positiveValuesOnly && 0 >= P && (P = null), w.total = w.stackTotal = E.total, w.percentage = E.total && w.y / E.total * 100, w.stackY = A, this.irregularWidths || E.setOffset(this.pointXOffset || 0, this.barW || 0)), w.yBottom = u(P) ? d(a.translate(P, 0, 1, 0, 1), -1e5, 1e5) : null, c && (A = this.modifyValue(A, w)), w.plotY = "number" === typeof A && 1 / 0 !== A ? d(a.translate(A, 0, 1, 0, 1), -1e5, 1e5) : void 0, w.isInside = this.isPointInside(w), w.clientX = g ? p(o.translate(S, 0, 0, 0, 1, f)) : e, w.negative = w[y] < (i[y + "Threshold"] || m || 0), w.category = n && "undefined" !== typeof n[w.x] ? n[w.x] : w.x, !w.isNull && !1 !== w.visible) {
                                    "undefined" !== typeof D && (k = Math.min(k, Math.abs(e - D)));
                                    var D = e
                                }
                                w.zone = this.zones.length && w.getZone(), !w.graphic && this.group && r && (w.isNew = !0)
                            }
                            this.closestPointRangePx = k, v(this, "afterTranslate")
                        },
                        getValidPoints: function(t, e, i) {
                            var s = this.chart;
                            return (t || this.points || []).filter((function(t) {
                                return !(e && !s.isInsidePlot(t.plotX, t.plotY, s.inverted)) && (!1 !== t.visible && (i || !t.isNull))
                            }))
                        },
                        getClipBox: function(t, e) {
                            var i = this.options,
                                s = this.chart,
                                o = s.inverted,
                                n = this.xAxis,
                                r = n && this.yAxis,
                                a = s.options.chart.scrollablePlotArea || {};
                            return t && !1 === i.clip && r ? t = o ? {
                                y: -s.chartWidth + r.len + r.pos,
                                height: s.chartWidth,
                                width: s.chartHeight,
                                x: -s.chartHeight + n.len + n.pos
                            } : {
                                y: -r.pos,
                                height: s.chartHeight,
                                width: s.chartWidth,
                                x: -n.pos
                            } : (t = this.clipBox || s.clipBox, e && (t.width = s.plotSizeX, t.x = (s.scrollablePixelsX || 0) * (a.scrollPositionX || 0))), e ? {
                                width: t.width,
                                x: t.x
                            } : t
                        },
                        setClip: function(t) {
                            var e = this.chart,
                                i = this.options,
                                s = e.renderer,
                                o = e.inverted,
                                n = this.clipBox,
                                r = this.getClipBox(t),
                                a = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, r.height, i.xAxis, i.yAxis].join(),
                                h = e[a],
                                l = e[a + "m"];
                            t && (r.width = 0, o && (r.x = e.plotHeight + (!1 !== i.clip ? 0 : e.plotTop))), h ? e.hasLoaded || h.attr(r) : (t && (e[a + "m"] = l = s.clipRect(o ? e.plotSizeX + 99 : -99, o ? -e.plotLeft : -e.plotTop, 99, o ? e.chartWidth : e.chartHeight)), e[a] = h = s.clipRect(r), h.count = {
                                length: 0
                            }), t && !h.count[this.index] && (h.count[this.index] = !0, h.count.length += 1), (!1 !== i.clip || t) && (this.group.clip(t || n ? h : e.clipRect), this.markerGroup.clip(l), this.sharedClipKey = a), t || (h.count[this.index] && (delete h.count[this.index], --h.count.length), 0 === h.count.length && a && e[a] && (n || (e[a] = e[a].destroy()), e[a + "m"] && (e[a + "m"] = e[a + "m"].destroy())))
                        },
                        animate: function(t) {
                            var e = this.chart,
                                i = h(this.options.animation);
                            if (!e.hasRendered)
                                if (t) this.setClip(i);
                                else {
                                    var s = this.sharedClipKey;
                                    t = e[s];
                                    var o = this.getClipBox(i, !0);
                                    t && t.animate(o, i), e[s + "m"] && e[s + "m"].animate({
                                        width: o.width + 99,
                                        x: o.x - (e.inverted ? 0 : 99)
                                    }, i)
                                }
                        },
                        afterAnimate: function() {
                            this.setClip(), v(this, "afterAnimate"), this.finishedAnimating = !0
                        },
                        drawPoints: function() {
                            var t, e, i = this.points,
                                s = this.chart,
                                o = this.options.marker,
                                n = this[this.specialGroup] || this.markerGroup,
                                r = this.xAxis,
                                a = T(o.enabled, !(r && !r.isRadial) || null, this.closestPointRangePx >= o.enabledThreshold * o.radius);
                            if (!1 !== o.enabled || this._hasPointMarkers)
                                for (t = 0; t < i.length; t++) {
                                    var h = i[t],
                                        l = (e = h.graphic) ? "animate" : "attr",
                                        c = h.marker || {},
                                        d = !!h.marker;
                                    if ((a && "undefined" === typeof c.enabled || c.enabled) && !h.isNull && !1 !== h.visible) {
                                        var p = T(c.symbol, this.symbol),
                                            u = this.markerAttribs(h, h.selected && "select");
                                        this.enabledDataSorting && (h.startXPos = r.reversed ? -u.width : r.width);
                                        var f = !1 !== h.isInside;
                                        e ? e[f ? "show" : "hide"](f).animate(u) : f && (0 < u.width || h.hasImage) && (h.graphic = e = s.renderer.symbol(p, u.x, u.y, u.width, u.height, d ? c : o).add(n), this.enabledDataSorting && s.hasRendered && (e.attr({
                                            x: h.startXPos
                                        }), l = "animate")), e && "animate" === l && e[f ? "show" : "hide"](f).animate(u), e && !s.styledMode && e[l](this.pointAttribs(h, h.selected && "select")), e && e.addClass(h.getClassName(), !0)
                                    } else e && (h.graphic = e.destroy())
                                }
                        },
                        markerAttribs: function(t, e) {
                            var i = this.options,
                                s = i.marker,
                                o = t.marker || {},
                                n = o.symbol || s.symbol,
                                r = T(o.radius, s.radius);
                            return e && (s = s.states[e], e = o.states && o.states[e], r = T(e && e.radius, s && s.radius, r + (s && s.radiusPlus || 0))), t.hasImage = n && 0 === n.indexOf("url"), t.hasImage && (r = 0), t = {
                                x: i.crisp ? Math.floor(t.plotX) - r : t.plotX - r,
                                y: t.plotY - r
                            }, r && (t.width = t.height = 2 * r), t
                        },
                        pointAttribs: function(t, e) {
                            var i = this.options.marker,
                                s = t && t.options,
                                o = s && s.marker || {},
                                n = this.color,
                                r = s && s.color,
                                a = t && t.color;
                            s = T(o.lineWidth, i.lineWidth);
                            var h = t && t.zone && t.zone.color;
                            return t = 1, n = r || h || a || n, r = o.fillColor || i.fillColor || n, n = o.lineColor || i.lineColor || n, e = e || "normal", i = i.states[e], e = o.states && o.states[e] || {}, s = T(e.lineWidth, i.lineWidth, s + T(e.lineWidthPlus, i.lineWidthPlus, 0)), r = e.fillColor || i.fillColor || r, n = e.lineColor || i.lineColor || n, t = T(e.opacity, i.opacity, t), {
                                stroke: n,
                                "stroke-width": s,
                                fill: r,
                                opacity: t
                            }
                        },
                        destroy: function(t) {
                            var e, i, s, r, a = this,
                                h = a.chart,
                                l = /AppleWebKit\/533/.test(L.navigator.userAgent),
                                c = a.data || [];
                            for (v(a, "destroy"), this.removeEvents(t), (a.axisTypes || []).forEach((function(t) {
                                    (r = a[t]) && r.series && (f(r.series, a), r.isDirty = r.forceRedraw = !0)
                                })), a.legendItem && a.chart.legend.destroyItem(a), i = c.length; i--;)(s = c[i]) && s.destroy && s.destroy();
                            a.points = null, n.clearTimeout(a.animationTimeout), A(a, (function(t, i) {
                                t instanceof o && !t.survive && (e = l && "group" === i ? "hide" : "destroy", t[e]())
                            })), h.hoverSeries === a && (h.hoverSeries = null), f(h.series, a), h.orderSeries(), A(a, (function(e, i) {
                                t && "hcEvents" === i || delete a[i]
                            }))
                        },
                        getGraphPath: function(t, e, i) {
                            var s, o, n = this,
                                r = n.options,
                                a = r.step,
                                h = [],
                                l = [];
                            return t = t || n.points, (s = t.reversed) && t.reverse(), (a = {
                                right: 1,
                                center: 2
                            }[a] || a && 3) && s && (a = 4 - a), t = this.getValidPoints(t, !1, !(r.connectNulls && !e && !i)), t.forEach((function(s, c) {
                                var d = s.plotX,
                                    p = s.plotY,
                                    f = t[c - 1];
                                (s.leftCliff || f && f.rightCliff) && !i && (o = !0), s.isNull && !u(e) && 0 < c ? o = !r.connectNulls : s.isNull && !e ? o = !0 : (0 === c || o ? c = [
                                    ["M", s.plotX, s.plotY]
                                ] : n.getPointSpline ? c = [n.getPointSpline(t, s, c)] : a ? (c = 1 === a ? [
                                    ["L", f.plotX, p]
                                ] : 2 === a ? [
                                    ["L", (f.plotX + d) / 2, f.plotY],
                                    ["L", (f.plotX + d) / 2, p]
                                ] : [
                                    ["L", d, f.plotY]
                                ], c.push(["L", d, p])) : c = [
                                    ["L", d, p]
                                ], l.push(s.x), a && (l.push(s.x), 2 === a && l.push(s.x)), h.push.apply(h, c), o = !1)
                            })), h.xMap = l, n.graphPath = h
                        },
                        drawGraph: function() {
                            var t = this,
                                e = this.options,
                                i = (this.gappedPath || this.getGraphPath).call(this),
                                s = this.chart.styledMode,
                                o = [
                                    ["graph", "highcharts-graph"]
                                ];
                            s || o[0].push(e.lineColor || this.color || "#cccccc", e.dashStyle), o = t.getZonesGraphs(o), o.forEach((function(o, n) {
                                var r = o[0],
                                    a = t[r],
                                    h = a ? "animate" : "attr";
                                a ? (a.endX = t.preventGraphAnimation ? null : i.xMap, a.animate({
                                    d: i
                                })) : i.length && (t[r] = a = t.chart.renderer.path(i).addClass(o[1]).attr({
                                    zIndex: 1
                                }).add(t.group)), a && !s && (r = {
                                    stroke: o[2],
                                    "stroke-width": e.lineWidth,
                                    fill: t.fillGraph && t.color || "none"
                                }, o[3] ? r.dashstyle = o[3] : "square" !== e.linecap && (r["stroke-linecap"] = r["stroke-linejoin"] = "round"), a[h](r).shadow(2 > n && e.shadow)), a && (a.startX = i.xMap, a.isArea = i.isArea)
                            }))
                        },
                        getZonesGraphs: function(t) {
                            return this.zones.forEach((function(e, i) {
                                i = ["zone-graph-" + i, "highcharts-graph highcharts-zone-graph-" + i + " " + (e.className || "")], this.chart.styledMode || i.push(e.color || this.color, e.dashStyle || this.options.dashStyle), t.push(i)
                            }), this), t
                        },
                        applyZones: function() {
                            var t, e, i, s, o, n, r, a, h = this,
                                l = this.chart,
                                c = l.renderer,
                                p = this.zones,
                                u = this.clips || [],
                                f = this.graph,
                                g = this.area,
                                m = Math.max(l.chartWidth, l.chartHeight),
                                x = this[(this.zoneAxis || "y") + "Axis"],
                                v = l.inverted,
                                y = !1;
                            if (p.length && (f || g) && x && "undefined" !== typeof x.min) {
                                var b = x.reversed,
                                    k = x.horiz;
                                f && !this.showLine && f.hide(), g && g.hide();
                                var M = x.getExtremes();
                                p.forEach((function(p, w) {
                                    t = b ? k ? l.plotWidth : 0 : k ? 0 : x.toPixels(M.min) || 0, t = d(T(e, t), 0, m), e = d(Math.round(x.toPixels(T(p.value, M.max), !0) || 0), 0, m), y && (t = e = x.toPixels(M.max)), s = Math.abs(t - e), o = Math.min(t, e), n = Math.max(t, e), x.isXAxis ? (i = {
                                        x: v ? n : o,
                                        y: 0,
                                        width: s,
                                        height: m
                                    }, k || (i.x = l.plotHeight - i.x)) : (i = {
                                        x: 0,
                                        y: v ? n : o,
                                        width: m,
                                        height: s
                                    }, k && (i.y = l.plotWidth - i.y)), v && c.isVML && (i = x.isXAxis ? {
                                        x: 0,
                                        y: b ? o : n,
                                        height: i.width,
                                        width: l.chartWidth
                                    } : {
                                        x: i.y - l.plotLeft - l.spacingBox.x,
                                        y: 0,
                                        width: i.height,
                                        height: l.chartHeight
                                    }), u[w] ? u[w].animate(i) : u[w] = c.clipRect(i), r = h["zone-area-" + w], a = h["zone-graph-" + w], f && a && a.clip(u[w]), g && r && r.clip(u[w]), y = p.value > M.max, h.resetZones && 0 === e && (e = void 0)
                                })), this.clips = u
                            } else h.visible && (f && f.show(!0), g && g.show(!0))
                        },
                        invertGroups: function(t) {
                            function e() {
                                ["group", "markerGroup"].forEach((function(e) {
                                    i[e] && (s.renderer.isVML && i[e].attr({
                                        width: i.yAxis.len,
                                        height: i.xAxis.len
                                    }), i[e].width = i.yAxis.len, i[e].height = i.xAxis.len, i[e].invert(!i.isRadialSeries && t))
                                }))
                            }
                            var i = this,
                                s = i.chart;
                            i.xAxis && (i.eventsToUnbind.push(a(s, "resize", e)), e(), i.invertGroups = e)
                        },
                        plotGroup: function(t, e, i, s, o) {
                            var n = this[t],
                                r = !n;
                            return i = {
                                visibility: i,
                                zIndex: s || .1
                            }, "undefined" === typeof this.opacity || this.chart.styledMode || (i.opacity = this.opacity), r && (this[t] = n = this.chart.renderer.g().add(o)), n.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (u(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (n.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), n.attr(i)[r ? "attr" : "animate"](this.getPlotBox()), n
                        },
                        getPlotBox: function() {
                            var t = this.chart,
                                e = this.xAxis,
                                i = this.yAxis;
                            return t.inverted && (e = i, i = this.xAxis), {
                                translateX: e ? e.left : t.plotLeft,
                                translateY: i ? i.top : t.plotTop,
                                scaleX: 1,
                                scaleY: 1
                            }
                        },
                        removeEvents: function(t) {
                            t ? this.eventsToUnbind.length && (this.eventsToUnbind.forEach((function(t) {
                                t()
                            })), this.eventsToUnbind.length = 0) : P(this)
                        },
                        render: function() {
                            var t = this,
                                e = t.chart,
                                i = t.options,
                                s = !t.finishedAnimating && e.renderer.isSVG && h(i.animation).duration,
                                o = t.visible ? "inherit" : "hidden",
                                n = i.zIndex,
                                r = t.hasRendered,
                                a = e.seriesGroup,
                                l = e.inverted;
                            v(this, "render");
                            var c = t.plotGroup("group", "series", o, n, a);
                            t.markerGroup = t.plotGroup("markerGroup", "markers", o, n, a), s && t.animate && t.animate(!0), c.inverted = !(!t.isCartesian && !t.invertable) && l, t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), t.drawDataLabels && t.drawDataLabels(), t.redrawPoints && t.redrawPoints(), t.drawTracker && !1 !== t.options.enableMouseTracking && t.drawTracker(), t.invertGroups(l), !1 === i.clip || t.sharedClipKey || r || c.clip(e.clipRect), s && t.animate && t.animate(), r || (t.animationTimeout = O((function() {
                                t.afterAnimate()
                            }), s || 0)), t.isDirty = !1, t.hasRendered = !0, v(t, "afterRender")
                        },
                        redraw: function() {
                            var t = this.chart,
                                e = this.isDirty || this.isDirtyData,
                                i = this.group,
                                s = this.xAxis,
                                o = this.yAxis;
                            i && (t.inverted && i.attr({
                                width: t.plotWidth,
                                height: t.plotHeight
                            }), i.animate({
                                translateX: T(s && s.left, t.plotLeft),
                                translateY: T(o && o.top, t.plotTop)
                            })), this.translate(), this.render(), e && delete this.kdTree
                        },
                        kdAxisArray: ["clientX", "plotY"],
                        searchPoint: function(t, e) {
                            var i = this.xAxis,
                                s = this.yAxis,
                                o = this.chart.inverted;
                            return this.searchKDTree({
                                clientX: o ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                                plotY: o ? s.len - t.chartX + s.pos : t.chartY - s.pos
                            }, e, t)
                        },
                        buildKDTree: function(t) {
                            function e(t, s, o) {
                                var n;
                                if (n = t && t.length) {
                                    var r = i.kdAxisArray[s % o];
                                    return t.sort((function(t, e) {
                                        return t[r] - e[r]
                                    })), n = Math.floor(n / 2), {
                                        point: t[n],
                                        left: e(t.slice(0, n), s + 1, o),
                                        right: e(t.slice(n + 1), s + 1, o)
                                    }
                                }
                            }
                            this.buildingKdTree = !0;
                            var i = this,
                                s = -1 < i.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                            delete i.kdTree, O((function() {
                                i.kdTree = e(i.getValidPoints(null, !i.directTouch), s, s), i.buildingKdTree = !1
                            }), i.options.kdNow || t && "touchstart" === t.type ? 0 : 1)
                        },
                        searchKDTree: function(t, e, i) {
                            function s(t, e, i, h) {
                                var l = e.point,
                                    c = o.kdAxisArray[i % h],
                                    d = l,
                                    p = u(t[n]) && u(l[n]) ? Math.pow(t[n] - l[n], 2) : null,
                                    f = u(t[r]) && u(l[r]) ? Math.pow(t[r] - l[r], 2) : null;
                                return f = (p || 0) + (f || 0), l.dist = u(f) ? Math.sqrt(f) : Number.MAX_VALUE, l.distX = u(p) ? Math.sqrt(p) : Number.MAX_VALUE, c = t[c] - l[c], f = 0 > c ? "left" : "right", p = 0 > c ? "right" : "left", e[f] && (f = s(t, e[f], i + 1, h), d = f[a] < d[a] ? f : l), e[p] && Math.sqrt(c * c) < d[a] && (t = s(t, e[p], i + 1, h), d = t[a] < d[a] ? t : d), d
                            }
                            var o = this,
                                n = this.kdAxisArray[0],
                                r = this.kdAxisArray[1],
                                a = e ? "distX" : "dist";
                            if (e = -1 < o.options.findNearestPointBy.indexOf("y") ? 2 : 1, this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return s(t, this.kdTree, e, e)
                        },
                        pointPlacementToXValue: function() {
                            var t = this.options,
                                e = t.pointRange,
                                i = this.xAxis;
                            return t = t.pointPlacement, "between" === t && (t = i.reversed ? -.5 : .5), M(t) ? t * T(e, i.pointRange) : 0
                        },
                        isPointInside: function(t) {
                            return "undefined" !== typeof t.plotY && "undefined" !== typeof t.plotX && 0 <= t.plotY && t.plotY <= this.yAxis.len && 0 <= t.plotX && t.plotX <= this.xAxis.len
                        }
                    })
                })), e(i, "parts/Stacking.js", [i["parts/Axis.js"], i["parts/Chart.js"], i["parts/Globals.js"], i["parts/StackingAxis.js"], i["parts/Utilities.js"]], (function(t, e, i, s, o) {
                    var n = o.correctFloat,
                        r = o.defined,
                        a = o.destroyObjectProperties,
                        h = o.format,
                        l = o.isNumber,
                        c = o.pick,
                        d = i.Series,
                        p = function() {
                            function t(t, e, i, s, o) {
                                var n = t.chart.inverted;
                                this.axis = t, this.isNegative = i, this.options = e = e || {}, this.x = s, this.total = null, this.points = {}, this.hasValidPoints = !1, this.stack = o, this.rightCliff = this.leftCliff = 0, this.alignOptions = {
                                    align: e.align || (n ? i ? "left" : "right" : "center"),
                                    verticalAlign: e.verticalAlign || (n ? "middle" : i ? "bottom" : "top"),
                                    y: e.y,
                                    x: e.x
                                }, this.textAlign = e.textAlign || (n ? i ? "right" : "left" : "center")
                            }
                            return t.prototype.destroy = function() {
                                a(this, this.axis)
                            }, t.prototype.render = function(t) {
                                var e = this.axis.chart,
                                    i = this.options,
                                    s = i.format;
                                s = s ? h(s, this, e) : i.formatter.call(this), this.label ? this.label.attr({
                                    text: s,
                                    visibility: "hidden"
                                }) : (this.label = e.renderer.label(s, null, null, i.shape, null, null, i.useHTML, !1, "stack-labels"), s = {
                                    r: i.borderRadius || 0,
                                    text: s,
                                    rotation: i.rotation,
                                    padding: c(i.padding, 5),
                                    visibility: "hidden"
                                }, e.styledMode || (s.fill = i.backgroundColor, s.stroke = i.borderColor, s["stroke-width"] = i.borderWidth, this.label.css(i.style)), this.label.attr(s), this.label.added || this.label.add(t)), this.label.labelrank = e.plotHeight
                            }, t.prototype.setOffset = function(t, e, i, s, o) {
                                var n = this.axis,
                                    a = n.chart;
                                s = n.translate(n.stacking.usePercentage ? 100 : s || this.total, 0, 0, 0, 1), i = n.translate(i || 0), i = r(s) && Math.abs(s - i), t = c(o, a.xAxis[0].translate(this.x)) + t, n = r(s) && this.getStackBox(a, this, t, s, e, i, n), e = this.label, i = this.isNegative, t = "justify" === c(this.options.overflow, "justify");
                                var h = this.textAlign;
                                e && n && (o = e.getBBox(), s = e.padding, h = "left" === h ? a.inverted ? -s : s : "right" === h ? o.width : a.inverted && "center" === h ? o.width / 2 : a.inverted ? i ? o.width + s : -s : o.width / 2, i = a.inverted ? o.height / 2 : i ? -s : o.height, this.alignOptions.x = c(this.options.x, 0), this.alignOptions.y = c(this.options.y, 0), n.x -= h, n.y -= i, e.align(this.alignOptions, null, n), a.isInsidePlot(e.alignAttr.x + h - this.alignOptions.x, e.alignAttr.y + i - this.alignOptions.y) ? e.show() : (e.alignAttr.y = -9999, t = !1), t && d.prototype.justifyDataLabel.call(this.axis, e, this.alignOptions, e.alignAttr, o, n), e.attr({
                                    x: e.alignAttr.x,
                                    y: e.alignAttr.y
                                }), c(!t && this.options.crop, !0) && ((a = l(e.x) && l(e.y) && a.isInsidePlot(e.x - s + e.width, e.y) && a.isInsidePlot(e.x + s, e.y)) || e.hide()))
                            }, t.prototype.getStackBox = function(t, e, i, s, o, n, r) {
                                var a = e.axis.reversed,
                                    h = t.inverted,
                                    l = r.height + r.pos - (h ? t.plotLeft : t.plotTop);
                                return e = e.isNegative && !a || !e.isNegative && a, {
                                    x: h ? e ? s - r.right : s - n + r.pos - t.plotLeft : i + t.xAxis[0].transB - t.plotLeft,
                                    y: h ? r.height - i - o : e ? l - s - n : l - s,
                                    width: h ? n : o,
                                    height: h ? o : n
                                }
                            }, t
                        }();
                    return e.prototype.getStacks = function() {
                        var t = this,
                            e = t.inverted;
                        t.yAxis.forEach((function(t) {
                            t.stacking && t.stacking.stacks && t.hasVisibleSeries && (t.stacking.oldStacks = t.stacking.stacks)
                        })), t.series.forEach((function(i) {
                            var s = i.xAxis && i.xAxis.options || {};
                            !i.options.stacking || !0 !== i.visible && !1 !== t.options.chart.ignoreHiddenSeries || (i.stackKey = [i.type, c(i.options.stack, ""), e ? s.top : s.left, e ? s.height : s.width].join())
                        }))
                    }, s.compose(t), d.prototype.setGroupedPoints = function() {
                        this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length && d.prototype.setStackedPoints.call(this, "group")
                    }, d.prototype.setStackedPoints = function(t) {
                        var e = t || this.options.stacking;
                        if (e && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                            var i = this.processedXData,
                                s = this.processedYData,
                                o = [],
                                a = s.length,
                                h = this.options,
                                l = h.threshold,
                                d = c(h.startFromThreshold && l, 0);
                            h = h.stack, t = t ? this.type + "," + e : this.stackKey;
                            var u, f, g = "-" + t,
                                m = this.negStacks,
                                x = this.yAxis,
                                v = x.stacking.stacks,
                                y = x.stacking.oldStacks;
                            for (x.stacking.stacksTouched += 1, f = 0; f < a; f++) {
                                var b = i[f],
                                    k = s[f],
                                    M = this.getStackIndicator(M, b, this.index),
                                    w = M.key,
                                    S = (u = m && k < (d ? 0 : l)) ? g : t;
                                v[S] || (v[S] = {}), v[S][b] || (y[S] && y[S][b] ? (v[S][b] = y[S][b], v[S][b].total = null) : v[S][b] = new p(x, x.options.stackLabels, u, b, h)), S = v[S][b], null !== k ? (S.points[w] = S.points[this.index] = [c(S.cumulative, d)], r(S.cumulative) || (S.base = w), S.touched = x.stacking.stacksTouched, 0 < M.index && !1 === this.singleStacks && (S.points[w][0] = S.points[this.index + "," + b + ",0"][0])) : S.points[w] = S.points[this.index] = null, "percent" === e ? (u = u ? t : g, m && v[u] && v[u][b] ? (u = v[u][b], S.total = u.total = Math.max(u.total, S.total) + Math.abs(k) || 0) : S.total = n(S.total + (Math.abs(k) || 0))) : "group" === e ? null !== k && (S.total = (S.total || 0) + 1) : S.total = n(S.total + (k || 0)), S.cumulative = "group" === e ? (S.total || 1) - 1 : c(S.cumulative, d) + (k || 0), null !== k && (S.points[w].push(S.cumulative), o[f] = S.cumulative, S.hasValidPoints = !0)
                            }
                            "percent" === e && (x.stacking.usePercentage = !0), "group" !== e && (this.stackedYData = o), x.stacking.oldStacks = {}
                        }
                    }, d.prototype.modifyStacks = function() {
                        var t, e = this,
                            i = e.stackKey,
                            s = e.yAxis.stacking.stacks,
                            o = e.processedXData,
                            n = e.options.stacking;
                        e[n + "Stacker"] && [i, "-" + i].forEach((function(i) {
                            for (var r, a, h = o.length; h--;) r = o[h], t = e.getStackIndicator(t, r, e.index, i), (a = (r = s[i] && s[i][r]) && r.points[t.key]) && e[n + "Stacker"](a, r, h)
                        }))
                    }, d.prototype.percentStacker = function(t, e, i) {
                        e = e.total ? 100 / e.total : 0, t[0] = n(t[0] * e), t[1] = n(t[1] * e), this.stackedYData[i] = t[1]
                    }, d.prototype.getStackIndicator = function(t, e, i, s) {
                        return !r(t) || t.x !== e || s && t.key !== s ? t = {
                            x: e,
                            index: 0,
                            key: s
                        } : t.index++, t.key = [i, e, t.index].join(), t
                    }, i.StackItem = p, i.StackItem
                })), e(i, "parts/Dynamics.js", [i["parts/Axis.js"], i["parts/Chart.js"], i["parts/Globals.js"], i["parts/Options.js"], i["parts/Point.js"], i["parts/Time.js"], i["parts/Utilities.js"]], (function(t, e, i, s, o, n, r) {
                    var a = s.time,
                        h = r.addEvent,
                        l = r.animate,
                        c = r.createElement,
                        d = r.css,
                        p = r.defined,
                        u = r.erase,
                        f = r.error,
                        g = r.extend,
                        m = r.fireEvent,
                        x = r.isArray,
                        v = r.isNumber,
                        y = r.isObject,
                        b = r.isString,
                        k = r.merge,
                        M = r.objectEach,
                        w = r.pick,
                        S = r.relativeLength,
                        A = r.setAnimation,
                        T = r.splat;
                    s = i.Series;
                    var P = i.seriesTypes;
                    i.cleanRecursively = function(t, e) {
                        var s = {};
                        return M(t, (function(o, n) {
                            y(t[n], !0) && !t.nodeType && e[n] ? (o = i.cleanRecursively(t[n], e[n]), Object.keys(o).length && (s[n] = o)) : (y(t[n]) || t[n] !== e[n]) && (s[n] = t[n])
                        })), s
                    }, g(e.prototype, {
                        addSeries: function(t, e, i) {
                            var s, o = this;
                            return t && (e = w(e, !0), m(o, "addSeries", {
                                options: t
                            }, (function() {
                                s = o.initSeries(t), o.isDirtyLegend = !0, o.linkSeries(), s.enabledDataSorting && s.setData(t.data, !1), m(o, "afterAddSeries", {
                                    series: s
                                }), e && o.redraw(i)
                            }))), s
                        },
                        addAxis: function(t, e, i, s) {
                            return this.createAxis(e ? "xAxis" : "yAxis", {
                                axis: t,
                                redraw: i,
                                animation: s
                            })
                        },
                        addColorAxis: function(t, e, i) {
                            return this.createAxis("colorAxis", {
                                axis: t,
                                redraw: e,
                                animation: i
                            })
                        },
                        createAxis: function(e, s) {
                            var o = this.options,
                                n = "colorAxis" === e,
                                r = s.redraw,
                                a = s.animation;
                            s = k(s.axis, {
                                index: this[e].length,
                                isX: "xAxis" === e
                            });
                            var h = n ? new i.ColorAxis(this, s) : new t(this, s);
                            return o[e] = T(o[e] || {}), o[e].push(s), n && (this.isDirtyLegend = !0, this.axes.forEach((function(t) {
                                t.series = []
                            })), this.series.forEach((function(t) {
                                t.bindAxes(), t.isDirtyData = !0
                            }))), w(r, !0) && this.redraw(a), h
                        },
                        showLoading: function(t) {
                            var e = this,
                                i = e.options,
                                s = e.loadingDiv,
                                o = i.loading,
                                n = function() {
                                    s && d(s, {
                                        left: e.plotLeft + "px",
                                        top: e.plotTop + "px",
                                        width: e.plotWidth + "px",
                                        height: e.plotHeight + "px"
                                    })
                                };
                            s || (e.loadingDiv = s = c("div", {
                                className: "highcharts-loading highcharts-loading-hidden"
                            }, null, e.container), e.loadingSpan = c("span", {
                                className: "highcharts-loading-inner"
                            }, null, s), h(e, "redraw", n)), s.className = "highcharts-loading", e.loadingSpan.innerHTML = w(t, i.lang.loading, ""), e.styledMode || (d(s, g(o.style, {
                                zIndex: 10
                            })), d(e.loadingSpan, o.labelStyle), e.loadingShown || (d(s, {
                                opacity: 0,
                                display: ""
                            }), l(s, {
                                opacity: o.style.opacity || .5
                            }, {
                                duration: o.showDuration || 0
                            }))), e.loadingShown = !0, n()
                        },
                        hideLoading: function() {
                            var t = this.options,
                                e = this.loadingDiv;
                            e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || l(e, {
                                opacity: 0
                            }, {
                                duration: t.loading.hideDuration || 100,
                                complete: function() {
                                    d(e, {
                                        display: "none"
                                    })
                                }
                            })), this.loadingShown = !1
                        },
                        propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
                        propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
                        propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
                        collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"],
                        update: function(t, e, s, o) {
                            var r, h, l, c = this,
                                d = {
                                    credits: "addCredits",
                                    title: "setTitle",
                                    subtitle: "setSubtitle",
                                    caption: "setCaption"
                                },
                                u = t.isResponsiveOptions,
                                f = [];
                            if (m(c, "update", {
                                    options: t
                                }), u || c.setResponsive(!1, !0), t = i.cleanRecursively(t, c.options), k(!0, c.userOptions, t), r = t.chart) {
                                if (k(!0, c.options.chart, r), "className" in r && c.setClassName(r.className), "reflow" in r && c.setReflow(r.reflow), "inverted" in r || "polar" in r || "type" in r) {
                                    c.propFromSeries();
                                    var g = !0
                                }
                                "alignTicks" in r && (g = !0), M(r, (function(t, e) {
                                    -1 !== c.propsRequireUpdateSeries.indexOf("chart." + e) && (h = !0), -1 !== c.propsRequireDirtyBox.indexOf(e) && (c.isDirtyBox = !0), -1 !== c.propsRequireReflow.indexOf(e) && (u ? c.isDirtyBox = !0 : l = !0)
                                })), !c.styledMode && "style" in r && c.renderer.setStyle(r.style)
                            }!c.styledMode && t.colors && (this.options.colors = t.colors), t.plotOptions && k(!0, this.options.plotOptions, t.plotOptions), t.time && this.time === a && (this.time = new n(t.time)), M(t, (function(t, e) {
                                c[e] && "function" === typeof c[e].update ? c[e].update(t, !1) : "function" === typeof c[d[e]] && c[d[e]](t), "chart" !== e && -1 !== c.propsRequireUpdateSeries.indexOf(e) && (h = !0)
                            })), this.collectionsWithUpdate.forEach((function(e) {
                                if (t[e]) {
                                    if ("series" === e) {
                                        var i = [];
                                        c[e].forEach((function(t, e) {
                                            t.options.isInternal || i.push(w(t.options.index, e))
                                        }))
                                    }
                                    T(t[e]).forEach((function(t, o) {
                                        var n, r = p(t.id);
                                        r && (n = c.get(t.id)), n || (n = c[e][i ? i[o] : o]) && r && p(n.options.id) && (n = void 0), n && n.coll === e && (n.update(t, !1), s && (n.touched = !0)), !n && s && c.collectionsWithInit[e] && (c.collectionsWithInit[e][0].apply(c, [t].concat(c.collectionsWithInit[e][1] || []).concat([!1])).touched = !0)
                                    })), s && c[e].forEach((function(t) {
                                        t.touched || t.options.isInternal ? delete t.touched : f.push(t)
                                    }))
                                }
                            })), f.forEach((function(t) {
                                t.remove && t.remove(!1)
                            })), g && c.axes.forEach((function(t) {
                                t.update({}, !1)
                            })), h && c.getSeriesOrderByLinks().forEach((function(t) {
                                t.chart && t.update({}, !1)
                            }), this), t.loading && k(!0, c.options.loading, t.loading), g = r && r.width, r = r && r.height, b(r) && (r = S(r, g || c.chartWidth)), l || v(g) && g !== c.chartWidth || v(r) && r !== c.chartHeight ? c.setSize(g, r, o) : w(e, !0) && c.redraw(o), m(c, "afterUpdate", {
                                options: t,
                                redraw: e,
                                animation: o
                            })
                        },
                        setSubtitle: function(t, e) {
                            this.applyDescription("subtitle", t), this.layOutTitles(e)
                        },
                        setCaption: function(t, e) {
                            this.applyDescription("caption", t), this.layOutTitles(e)
                        }
                    }), e.prototype.collectionsWithInit = {
                        xAxis: [e.prototype.addAxis, [!0]],
                        yAxis: [e.prototype.addAxis, [!1]],
                        series: [e.prototype.addSeries]
                    }, g(o.prototype, {
                        update: function(t, e, i, s) {
                            function o() {
                                r.applyOptions(t);
                                var s = h && r.hasDummyGraphic;
                                s = null === r.y ? !s : s, h && s && (r.graphic = h.destroy(), delete r.hasDummyGraphic), y(t, !0) && (h && h.element && t && t.marker && "undefined" !== typeof t.marker.symbol && (r.graphic = h.destroy()), t && t.dataLabels && r.dataLabel && (r.dataLabel = r.dataLabel.destroy()), r.connector && (r.connector = r.connector.destroy())), n = r.index, a.updateParallelArrays(r, n), c.data[n] = y(c.data[n], !0) || y(t, !0) ? r.options : w(t, c.data[n]), a.isDirty = a.isDirtyData = !0, !a.fixedBox && a.hasCartesianSeries && (l.isDirtyBox = !0), "point" === c.legendType && (l.isDirtyLegend = !0), e && l.redraw(i)
                            }
                            var n, r = this,
                                a = r.series,
                                h = r.graphic,
                                l = a.chart,
                                c = a.options;
                            e = w(e, !0), !1 === s ? o() : r.firePointEvent("update", {
                                options: t
                            }, o)
                        },
                        remove: function(t, e) {
                            this.series.removePoint(this.series.data.indexOf(this), t, e)
                        }
                    }), g(s.prototype, {
                        addPoint: function(t, e, i, s, o) {
                            var n = this.options,
                                r = this.data,
                                a = this.chart,
                                h = this.xAxis;
                            h = h && h.hasNames && h.names;
                            var l, c = n.data,
                                d = this.xData;
                            e = w(e, !0);
                            var p = {
                                series: this
                            };
                            this.pointClass.prototype.applyOptions.apply(p, [t]);
                            var u = p.x,
                                f = d.length;
                            if (this.requireSorting && u < d[f - 1])
                                for (l = !0; f && d[f - 1] > u;) f--;
                            this.updateParallelArrays(p, "splice", f, 0, 0), this.updateParallelArrays(p, f), h && p.name && (h[u] = p.name), c.splice(f, 0, t), l && (this.data.splice(f, 0, null), this.processData()), "point" === n.legendType && this.generatePoints(), i && (r[0] && r[0].remove ? r[0].remove(!1) : (r.shift(), this.updateParallelArrays(p, "shift"), c.shift())), !1 !== o && m(this, "addPoint", {
                                point: p
                            }), this.isDirtyData = this.isDirty = !0, e && a.redraw(s)
                        },
                        removePoint: function(t, e, i) {
                            var s = this,
                                o = s.data,
                                n = o[t],
                                r = s.points,
                                a = s.chart,
                                h = function() {
                                    r && r.length === o.length && r.splice(t, 1), o.splice(t, 1), s.options.data.splice(t, 1), s.updateParallelArrays(n || {
                                        series: s
                                    }, "splice", t, 1), n && n.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && a.redraw()
                                };
                            A(i, a), e = w(e, !0), n ? n.firePointEvent("remove", null, h) : h()
                        },
                        remove: function(t, e, i, s) {
                            function o() {
                                n.destroy(s), n.remove = null, r.isDirtyLegend = r.isDirtyBox = !0, r.linkSeries(), w(t, !0) && r.redraw(e)
                            }
                            var n = this,
                                r = n.chart;
                            !1 !== i ? m(n, "remove", null, o) : o()
                        },
                        update: function(t, e) {
                            t = i.cleanRecursively(t, this.userOptions), m(this, "update", {
                                options: t
                            });
                            var s, o = this,
                                n = o.chart,
                                r = o.userOptions,
                                a = o.initialType || o.type,
                                h = t.type || r.type || n.options.chart.type,
                                l = !(this.hasDerivedData || t.dataGrouping || h && h !== this.type || "undefined" !== typeof t.pointStart || t.pointInterval || t.pointIntervalUnit || t.keys),
                                c = P[a].prototype,
                                d = ["eventOptions", "navigatorSeries", "baseSeries"],
                                p = o.finishedAnimating && {
                                    animation: !1
                                },
                                u = {};
                            for (s in l && (d.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== t.visible && d.push("area", "graph"), o.parallelArrays.forEach((function(t) {
                                    d.push(t + "Data")
                                })), t.data && (t.dataSorting && g(o.options.dataSorting, t.dataSorting), this.setData(t.data, !1))), t = k(r, p, {
                                    index: "undefined" === typeof r.index ? o.index : r.index,
                                    pointStart: w(r.pointStart, o.xData[0])
                                }, !l && {
                                    data: o.options.data
                                }, t), l && t.data && (t.data = o.options.data), d = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(d), d.forEach((function(t) {
                                    d[t] = o[t], delete o[t]
                                })), o.remove(!1, null, !1, !0), c) o[s] = void 0;
                            if (P[h || a] ? g(o, P[h || a].prototype) : f(17, !0, n, {
                                    missingModuleFor: h || a
                                }), d.forEach((function(t) {
                                    o[t] = d[t]
                                })), o.init(n, t), l && this.points) {
                                var x = o.options;
                                !1 === x.visible ? (u.graphic = 1, u.dataLabel = 1) : o._hasPointLabels || (t = x.marker, r = x.dataLabels, t && (!1 === t.enabled || "symbol" in t) && (u.graphic = 1), r && !1 === r.enabled && (u.dataLabel = 1)), this.points.forEach((function(t) {
                                    t && t.series && (t.resolveColor(), Object.keys(u).length && t.destroyElements(u), !1 === x.showInLegend && t.legendItem && n.legend.destroyItem(t))
                                }), this)
                            }
                            o.initialType = a, n.linkSeries(), m(this, "afterUpdate"), w(e, !0) && n.redraw(!!l && void 0)
                        },
                        setName: function(t) {
                            this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0
                        }
                    }), g(t.prototype, {
                        update: function(t, e) {
                            var i = this.chart,
                                s = t && t.events || {};
                            t = k(this.userOptions, t), i.options[this.coll].indexOf && (i.options[this.coll][i.options[this.coll].indexOf(this.userOptions)] = t), M(i.options[this.coll].events, (function(t, e) {
                                "undefined" === typeof s[e] && (s[e] = void 0)
                            })), this.destroy(!0), this.init(i, g(t, {
                                events: s
                            })), i.isDirtyBox = !0, w(e, !0) && i.redraw()
                        },
                        remove: function(t) {
                            for (var e = this.chart, i = this.coll, s = this.series, o = s.length; o--;) s[o] && s[o].remove(!1);
                            u(e.axes, this), u(e[i], this), x(e.options[i]) ? e.options[i].splice(this.options.index, 1) : delete e.options[i], e[i].forEach((function(t, e) {
                                t.options.index = t.userOptions.index = e
                            })), this.destroy(), e.isDirtyBox = !0, w(t, !0) && e.redraw()
                        },
                        setTitle: function(t, e) {
                            this.update({
                                title: t
                            }, e)
                        },
                        setCategories: function(t, e) {
                            this.update({
                                categories: t
                            }, e)
                        }
                    })
                })), e(i, "parts/AreaSeries.js", [i["parts/Globals.js"], i["parts/Color.js"], i["mixins/legend-symbol.js"], i["parts/Utilities.js"]], (function(t, e, i, s) {
                    var o = e.parse,
                        n = s.objectEach,
                        r = s.pick;
                    e = s.seriesType;
                    var a = t.Series;
                    e("area", "line", {
                        softThreshold: !1,
                        threshold: 0
                    }, {
                        singleStacks: !1,
                        getStackPoints: function(t) {
                            var e, i = [],
                                s = [],
                                o = this.xAxis,
                                a = this.yAxis,
                                h = a.stacking.stacks[this.stackKey],
                                l = {},
                                c = this.index,
                                d = a.series,
                                p = d.length,
                                u = r(a.options.reversedStacks, !0) ? 1 : -1;
                            if (t = t || this.points, this.options.stacking) {
                                for (e = 0; e < t.length; e++) t[e].leftNull = t[e].rightNull = void 0, l[t[e].x] = t[e];
                                n(h, (function(t, e) {
                                    null !== t.total && s.push(e)
                                })), s.sort((function(t, e) {
                                    return t - e
                                }));
                                var f = d.map((function(t) {
                                    return t.visible
                                }));
                                s.forEach((function(t, n) {
                                    var r, d, g = 0;
                                    if (l[t] && !l[t].isNull) i.push(l[t]), [-1, 1].forEach((function(i) {
                                        var o = 1 === i ? "rightNull" : "leftNull",
                                            a = 0,
                                            g = h[s[n + i]];
                                        if (g)
                                            for (e = c; 0 <= e && e < p;) r = g.points[e], r || (e === c ? l[t][o] = !0 : f[e] && (d = h[t].points[e]) && (a -= d[1] - d[0])), e += u;
                                        l[t][1 === i ? "rightCliff" : "leftCliff"] = a
                                    }));
                                    else {
                                        for (e = c; 0 <= e && e < p;) {
                                            if (r = h[t].points[e]) {
                                                g = r[1];
                                                break
                                            }
                                            e += u
                                        }
                                        g = a.translate(g, 0, 1, 0, 1), i.push({
                                            isNull: !0,
                                            plotX: o.translate(t, 0, 0, 0, 1),
                                            x: t,
                                            plotY: g,
                                            yBottom: g
                                        })
                                    }
                                }))
                            }
                            return i
                        },
                        getGraphPath: function(t) {
                            var e, i = a.prototype.getGraphPath,
                                s = this.options,
                                o = s.stacking,
                                n = this.yAxis,
                                h = [],
                                l = [],
                                c = this.index,
                                d = n.stacking.stacks[this.stackKey],
                                p = s.threshold,
                                u = Math.round(n.getThreshold(s.threshold));
                            s = r(s.connectNulls, "percent" === o);
                            var f = function(e, i, s) {
                                var r = t[e];
                                e = o && d[r.x].points[c];
                                var a = r[s + "Null"] || 0;
                                if (s = r[s + "Cliff"] || 0, r = !0, s || a) {
                                    var f = (a ? e[0] : e[1]) + s,
                                        g = e[0] + s;
                                    r = !!a
                                } else !o && t[i] && t[i].isNull && (f = g = p);
                                "undefined" !== typeof f && (l.push({
                                    plotX: m,
                                    plotY: null === f ? u : n.getThreshold(f),
                                    isNull: r,
                                    isCliff: !0
                                }), h.push({
                                    plotX: m,
                                    plotY: null === g ? u : n.getThreshold(g),
                                    doCurve: !1
                                }))
                            };
                            for (t = t || this.points, o && (t = this.getStackPoints(t)), e = 0; e < t.length; e++) {
                                o || (t[e].leftCliff = t[e].rightCliff = t[e].leftNull = t[e].rightNull = void 0);
                                var g = t[e].isNull,
                                    m = r(t[e].rectPlotX, t[e].plotX),
                                    x = r(t[e].yBottom, u);
                                g && !s || (s || f(e, e - 1, "left"), g && !o && s || (l.push(t[e]), h.push({
                                    x: e,
                                    plotX: m,
                                    plotY: x
                                })), s || f(e, e + 1, "right"))
                            }
                            return e = i.call(this, l, !0, !0), h.reversed = !0, g = i.call(this, h, !0, !0), (x = g[0]) && "M" === x[0] && (g[0] = ["L", x[1], x[2]]), g = e.concat(g), i = i.call(this, l, !1, s), g.xMap = e.xMap, this.areaPath = g, i
                        },
                        drawGraph: function() {
                            this.areaPath = [], a.prototype.drawGraph.apply(this);
                            var t = this,
                                e = this.areaPath,
                                i = this.options,
                                s = [
                                    ["area", "highcharts-area", this.color, i.fillColor]
                                ];
                            this.zones.forEach((function(e, o) {
                                s.push(["zone-area-" + o, "highcharts-area highcharts-zone-area-" + o + " " + e.className, e.color || t.color, e.fillColor || i.fillColor])
                            })), s.forEach((function(s) {
                                var n = s[0],
                                    a = t[n],
                                    h = a ? "animate" : "attr",
                                    l = {};
                                a ? (a.endX = t.preventGraphAnimation ? null : e.xMap, a.animate({
                                    d: e
                                })) : (l.zIndex = 0, a = t[n] = t.chart.renderer.path(e).addClass(s[1]).add(t.group), a.isArea = !0), t.chart.styledMode || (l.fill = r(s[3], o(s[2]).setOpacity(r(i.fillOpacity, .75)).get())), a[h](l), a.startX = e.xMap, a.shiftUnit = i.step ? 2 : 1
                            }))
                        },
                        drawLegendSymbol: i.drawRectangle
                    })
                })), e(i, "parts/SplineSeries.js", [i["parts/Utilities.js"]], (function(t) {
                    var e = t.pick;
                    t = t.seriesType, t("spline", "line", {}, {
                        getPointSpline: function(t, i, s) {
                            var o = i.plotX || 0,
                                n = i.plotY || 0,
                                r = t[s - 1];
                            if (s = t[s + 1], r && !r.isNull && !1 !== r.doCurve && !i.isCliff && s && !s.isNull && !1 !== s.doCurve && !i.isCliff) {
                                t = r.plotY || 0;
                                var a = s.plotX || 0;
                                s = s.plotY || 0;
                                var h = 0,
                                    l = (1.5 * o + (r.plotX || 0)) / 2.5,
                                    c = (1.5 * n + t) / 2.5;
                                a = (1.5 * o + a) / 2.5;
                                var d = (1.5 * n + s) / 2.5;
                                a !== l && (h = (d - c) * (a - o) / (a - l) + n - d), c += h, d += h, c > t && c > n ? (c = Math.max(t, n), d = 2 * n - c) : c < t && c < n && (c = Math.min(t, n), d = 2 * n - c), d > s && d > n ? (d = Math.max(s, n), c = 2 * n - d) : d < s && d < n && (d = Math.min(s, n), c = 2 * n - d), i.rightContX = a, i.rightContY = d
                            }
                            return i = ["C", e(r.rightContX, r.plotX, 0), e(r.rightContY, r.plotY, 0), e(l, o, 0), e(c, n, 0), o, n], r.rightContX = r.rightContY = void 0, i
                        }
                    })
                })), e(i, "parts/AreaSplineSeries.js", [i["parts/Globals.js"], i["mixins/legend-symbol.js"], i["parts/Options.js"], i["parts/Utilities.js"]], (function(t, e, i, s) {
                    s = s.seriesType, t = t.seriesTypes.area.prototype, s("areaspline", "spline", i.defaultOptions.plotOptions.area, {
                        getStackPoints: t.getStackPoints,
                        getGraphPath: t.getGraphPath,
                        drawGraph: t.drawGraph,
                        drawLegendSymbol: e.drawRectangle
                    })
                })), e(i, "parts/ColumnSeries.js", [i["parts/Globals.js"], i["parts/Color.js"], i["mixins/legend-symbol.js"], i["parts/Utilities.js"]], (function(t, e, i, s) {
                    var o = e.parse,
                        n = s.animObject,
                        r = s.clamp,
                        a = s.defined,
                        h = s.extend,
                        l = s.isNumber,
                        c = s.merge,
                        d = s.pick;
                    e = s.seriesType;
                    var p = t.Series;
                    e("column", "line", {
                        borderRadius: 0,
                        centerInCategory: !1,
                        groupPadding: .2,
                        marker: null,
                        pointPadding: .1,
                        minPointLength: 0,
                        cropThreshold: 50,
                        pointRange: null,
                        states: {
                            hover: {
                                halo: !1,
                                brightness: .1
                            },
                            select: {
                                color: "#cccccc",
                                borderColor: "#000000"
                            }
                        },
                        dataLabels: {
                            align: void 0,
                            verticalAlign: void 0,
                            y: void 0
                        },
                        softThreshold: !1,
                        startFromThreshold: !0,
                        stickyTracking: !1,
                        tooltip: {
                            distance: 6
                        },
                        threshold: 0,
                        borderColor: "#ffffff"
                    }, {
                        cropShoulder: 0,
                        directTouch: !0,
                        trackerGroups: ["group", "dataLabelsGroup"],
                        negStacks: !0,
                        init: function() {
                            p.prototype.init.apply(this, arguments);
                            var t = this,
                                e = t.chart;
                            e.hasRendered && e.series.forEach((function(e) {
                                e.type === t.type && (e.isDirty = !0)
                            }))
                        },
                        getColumnMetrics: function() {
                            var t = this,
                                e = t.options,
                                i = t.xAxis,
                                s = t.yAxis,
                                o = i.options.reversedStacks;
                            o = i.reversed && !o || !i.reversed && o;
                            var n, r = {},
                                a = 0;
                            !1 === e.grouping ? a = 1 : t.chart.series.forEach((function(e) {
                                var i = e.yAxis,
                                    o = e.options;
                                if (e.type === t.type && (e.visible || !t.chart.options.chart.ignoreHiddenSeries) && s.len === i.len && s.pos === i.pos) {
                                    if (o.stacking && "group" !== o.stacking) {
                                        n = e.stackKey, "undefined" === typeof r[n] && (r[n] = a++);
                                        var h = r[n]
                                    } else !1 !== o.grouping && (h = a++);
                                    e.columnIndex = h
                                }
                            }));
                            var h = Math.min(Math.abs(i.transA) * (i.ordinal && i.ordinal.slope || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len),
                                l = h * e.groupPadding,
                                c = (h - 2 * l) / (a || 1);
                            return e = Math.min(e.maxPointWidth || i.len, d(e.pointWidth, c * (1 - 2 * e.pointPadding))), t.columnMetrics = {
                                width: e,
                                offset: (c - e) / 2 + (l + ((t.columnIndex || 0) + (o ? 1 : 0)) * c - h / 2) * (o ? -1 : 1),
                                paddedWidth: c,
                                columnCount: a
                            }, t.columnMetrics
                        },
                        crispCol: function(t, e, i, s) {
                            var o = this.chart,
                                n = this.borderWidth,
                                r = -(n % 2 ? .5 : 0);
                            return n = n % 2 ? .5 : 1, o.inverted && o.renderer.isVML && (n += 1), this.options.crisp && (i = Math.round(t + i) + r, t = Math.round(t) + r, i -= t), s = Math.round(e + s) + n, r = .5 >= Math.abs(e) && .5 < s, e = Math.round(e) + n, s -= e, r && s && (--e, s += 1), {
                                x: t,
                                y: e,
                                width: i,
                                height: s
                            }
                        },
                        adjustForMissingColumns: function(e, i, s, o) {
                            var n = this,
                                r = this.options.stacking;
                            if (!s.isNull && 1 < o.columnCount) {
                                var a = 0,
                                    h = 0;
                                Highcharts.objectEach(this.yAxis.stacking && this.yAxis.stacking.stacks, (function(e) {
                                    if ("number" === typeof s.x && (e = e[s.x.toString()])) {
                                        var i = e.points[n.index],
                                            o = e.total;
                                        r ? (i && (a = h), e.hasValidPoints && h++) : t.isArray(i) && (a = i[1], h = o || 0)
                                    }
                                })), e = (s.plotX || 0) + ((h - 1) * o.paddedWidth + i) / 2 - i - a * o.paddedWidth
                            }
                            return e
                        },
                        translate: function() {
                            var t = this,
                                e = t.chart,
                                i = t.options,
                                s = t.dense = 2 > t.closestPointRange * t.xAxis.transA;
                            s = t.borderWidth = d(i.borderWidth, s ? 0 : 1);
                            var o = t.xAxis,
                                n = t.yAxis,
                                h = i.threshold,
                                c = t.translatedThreshold = n.getThreshold(h),
                                u = d(i.minPointLength, 5),
                                f = t.getColumnMetrics(),
                                g = f.width,
                                m = t.barW = Math.max(g, 1 + 2 * s),
                                x = t.pointXOffset = f.offset,
                                v = t.dataMin,
                                y = t.dataMax;
                            e.inverted && (c -= .5), i.pointPadding && (m = Math.ceil(m)), p.prototype.translate.apply(t), t.points.forEach((function(s) {
                                var p = d(s.yBottom, c),
                                    b = 999 + Math.abs(p),
                                    k = g,
                                    M = s.plotX || 0;
                                b = r(s.plotY, -b, n.len + b);
                                var w = M + x,
                                    S = m,
                                    A = Math.min(b, p),
                                    T = Math.max(b, p) - A;
                                if (u && Math.abs(T) < u) {
                                    T = u;
                                    var P = !n.reversed && !s.negative || n.reversed && s.negative;
                                    l(h) && l(y) && s.y === h && y <= h && (n.min || 0) < h && v !== y && (P = !P), A = Math.abs(A - c) > u ? p - u : c - (P ? u : 0)
                                }
                                a(s.options.pointWidth) && (k = S = Math.ceil(s.options.pointWidth), w -= Math.round((k - g) / 2)), i.centerInCategory && (w = t.adjustForMissingColumns(w, k, s, f)), s.barX = w, s.pointWidth = k, s.tooltipPos = e.inverted ? [n.len + n.pos - e.plotLeft - b, o.len + o.pos - e.plotTop - (M || 0) - x - S / 2, T] : [w + S / 2, b + n.pos - e.plotTop, T], s.shapeType = t.pointClass.prototype.shapeType || "rect", s.shapeArgs = t.crispCol.apply(t, s.isNull ? [w, c, S, 0] : [w, A, S, T])
                            }))
                        },
                        getSymbol: t.noop,
                        drawLegendSymbol: i.drawRectangle,
                        drawGraph: function() {
                            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
                        },
                        pointAttribs: function(t, e) {
                            var i = this.options,
                                s = this.pointAttrToOptions || {},
                                n = s.stroke || "borderColor",
                                r = s["stroke-width"] || "borderWidth",
                                a = t && t.color || this.color,
                                h = t && t[n] || i[n] || this.color || a,
                                l = t && t[r] || i[r] || this[r] || 0;
                            s = t && t.options.dashStyle || i.dashStyle;
                            var p = d(t && t.opacity, i.opacity, 1);
                            if (t && this.zones.length) {
                                var u = t.getZone();
                                a = t.options.color || u && (u.color || t.nonZonedColor) || this.color, u && (h = u.borderColor || h, s = u.dashStyle || s, l = u.borderWidth || l)
                            }
                            return e && t && (t = c(i.states[e], t.options.states && t.options.states[e] || {}), e = t.brightness, a = t.color || "undefined" !== typeof e && o(a).brighten(t.brightness).get() || a, h = t[n] || h, l = t[r] || l, s = t.dashStyle || s, p = d(t.opacity, p)), n = {
                                fill: a,
                                stroke: h,
                                "stroke-width": l,
                                opacity: p
                            }, s && (n.dashstyle = s), n
                        },
                        drawPoints: function() {
                            var t, e = this,
                                i = this.chart,
                                s = e.options,
                                o = i.renderer,
                                n = s.animationLimit || 250;
                            e.points.forEach((function(r) {
                                var a = r.graphic,
                                    h = !!a,
                                    d = a && i.pointCount < n ? "animate" : "attr";
                                l(r.plotY) && null !== r.y ? (t = r.shapeArgs, a && r.hasNewShapeType() && (a = a.destroy()), e.enabledDataSorting && (r.startXPos = e.xAxis.reversed ? -(t ? t.width : 0) : e.xAxis.width), a || (r.graphic = a = o[r.shapeType](t).add(r.group || e.group)) && e.enabledDataSorting && i.hasRendered && i.pointCount < n && (a.attr({
                                    x: r.startXPos
                                }), h = !0, d = "animate"), a && h && a[d](c(t)), s.borderRadius && a[d]({
                                    r: s.borderRadius
                                }), i.styledMode || a[d](e.pointAttribs(r, r.selected && "select")).shadow(!1 !== r.allowShadow && s.shadow, null, s.stacking && !s.borderRadius), a.addClass(r.getClassName(), !0)) : a && (r.graphic = a.destroy())
                            }))
                        },
                        animate: function(t) {
                            var e = this,
                                i = this.yAxis,
                                s = e.options,
                                o = this.chart.inverted,
                                a = {},
                                l = o ? "translateX" : "translateY";
                            if (t) a.scaleY = .001, t = r(i.toPixels(s.threshold), i.pos, i.pos + i.len), o ? a.translateX = t - i.len : a.translateY = t, e.clipBox && e.setClip(), e.group.attr(a);
                            else {
                                var c = e.group.attr(l);
                                e.group.animate({
                                    scaleY: 1
                                }, h(n(e.options.animation), {
                                    step: function(t, s) {
                                        e.group && (a[l] = c + s.pos * (i.pos - c), e.group.attr(a))
                                    }
                                }))
                            }
                        },
                        remove: function() {
                            var t = this,
                                e = t.chart;
                            e.hasRendered && e.series.forEach((function(e) {
                                e.type === t.type && (e.isDirty = !0)
                            })), p.prototype.remove.apply(t, arguments)
                        }
                    })
                })), e(i, "parts/BarSeries.js", [i["parts/Utilities.js"]], (function(t) {
                    t = t.seriesType, t("bar", "column", null, {
                        inverted: !0
                    })
                })), e(i, "parts/ScatterSeries.js", [i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.addEvent;
                    e = e.seriesType;
                    var s = t.Series;
                    e("scatter", "line", {
                        lineWidth: 0,
                        findNearestPointBy: "xy",
                        jitter: {
                            x: 0,
                            y: 0
                        },
                        marker: {
                            enabled: !0
                        },
                        tooltip: {
                            headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                        }
                    }, {
                        sorted: !1,
                        requireSorting: !1,
                        noSharedTooltip: !0,
                        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
                        takeOrdinalPosition: !1,
                        drawGraph: function() {
                            this.options.lineWidth && s.prototype.drawGraph.call(this)
                        },
                        applyJitter: function() {
                            var t = this,
                                e = this.options.jitter,
                                i = this.points.length;
                            e && this.points.forEach((function(s, o) {
                                ["x", "y"].forEach((function(n, r) {
                                    var a = "plot" + n.toUpperCase();
                                    if (e[n] && !s.isNull) {
                                        var h = t[n + "Axis"],
                                            l = e[n] * h.transA;
                                        if (h && !h.isLog) {
                                            var c = Math.max(0, s[a] - l);
                                            h = Math.min(h.len, s[a] + l), r = 1e4 * Math.sin(o + r * i), s[a] = c + (h - c) * (r - Math.floor(r)), "x" === n && (s.clientX = s.plotX)
                                        }
                                    }
                                }))
                            }))
                        }
                    }), i(s, "afterTranslate", (function() {
                        this.applyJitter && this.applyJitter()
                    }))
                })), e(i, "mixins/centered-series.js", [i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.isNumber,
                        s = e.pick,
                        o = e.relativeLength,
                        n = t.deg2rad;
                    t.CenteredSeriesMixin = {
                        getCenter: function() {
                            var t = this.options,
                                e = this.chart,
                                i = 2 * (t.slicedOffset || 0),
                                n = e.plotWidth - 2 * i,
                                r = e.plotHeight - 2 * i,
                                a = t.center,
                                h = Math.min(n, r),
                                l = t.size,
                                c = t.innerSize || 0;
                            for ("string" === typeof l && (l = parseFloat(l)), "string" === typeof c && (c = parseFloat(c)), t = [s(a[0], "50%"), s(a[1], "50%"), s(l && 0 > l ? void 0 : t.size, "100%"), s(c && 0 > c ? void 0 : t.innerSize || 0, "0%")], e.angular && (t[3] = 0), a = 0; 4 > a; ++a) l = t[a], e = 2 > a || 2 === a && /%$/.test(l), t[a] = o(l, [n, r, h, t[2]][a]) + (e ? i : 0);
                            return t[3] > t[2] && (t[3] = t[2]), t
                        },
                        getStartAndEndRadians: function(t, e) {
                            return t = i(t) ? t : 0, e = i(e) && e > t && 360 > e - t ? e : t + 360, {
                                start: n * (t + -90),
                                end: n * (e + -90)
                            }
                        }
                    }
                })), e(i, "parts/PieSeries.js", [i["parts/Globals.js"], i["mixins/legend-symbol.js"], i["parts/Point.js"], i["parts/Utilities.js"]], (function(t, e, i, s) {
                    var o = s.addEvent,
                        n = s.clamp,
                        r = s.defined,
                        a = s.fireEvent,
                        h = s.isNumber,
                        l = s.merge,
                        c = s.pick,
                        d = s.relativeLength,
                        p = s.seriesType,
                        u = s.setAnimation;
                    s = t.CenteredSeriesMixin;
                    var f = s.getStartAndEndRadians,
                        g = t.noop,
                        m = t.Series;
                    p("pie", "line", {
                        center: [null, null],
                        clip: !1,
                        colorByPoint: !0,
                        dataLabels: {
                            allowOverlap: !0,
                            connectorPadding: 5,
                            connectorShape: "fixedOffset",
                            crookDistance: "70%",
                            distance: 30,
                            enabled: !0,
                            formatter: function() {
                                return this.point.isNull ? void 0 : this.point.name
                            },
                            softConnector: !0,
                            x: 0
                        },
                        fillColor: void 0,
                        ignoreHiddenPoint: !0,
                        inactiveOtherPoints: !0,
                        legendType: "point",
                        marker: null,
                        size: null,
                        showInLegend: !1,
                        slicedOffset: 10,
                        stickyTracking: !1,
                        tooltip: {
                            followPointer: !0
                        },
                        borderColor: "#ffffff",
                        borderWidth: 1,
                        lineWidth: void 0,
                        states: {
                            hover: {
                                brightness: .1
                            }
                        }
                    }, {
                        isCartesian: !1,
                        requireSorting: !1,
                        directTouch: !0,
                        noSharedTooltip: !0,
                        trackerGroups: ["group", "dataLabelsGroup"],
                        axisTypes: [],
                        pointAttribs: t.seriesTypes.column.prototype.pointAttribs,
                        animate: function(t) {
                            var e = this,
                                i = e.points,
                                s = e.startAngleRad;
                            t || i.forEach((function(t) {
                                var i = t.graphic,
                                    o = t.shapeArgs;
                                i && o && (i.attr({
                                    r: c(t.startR, e.center && e.center[3] / 2),
                                    start: s,
                                    end: s
                                }), i.animate({
                                    r: o.r,
                                    start: o.start,
                                    end: o.end
                                }, e.options.animation))
                            }))
                        },
                        hasData: function() {
                            return !!this.processedXData.length
                        },
                        updateTotals: function() {
                            var t, e = 0,
                                i = this.points,
                                s = i.length,
                                o = this.options.ignoreHiddenPoint;
                            for (t = 0; t < s; t++) {
                                var n = i[t];
                                e += o && !n.visible || n.isNull ? 0 : n.y
                            }
                            for (this.total = e, t = 0; t < s; t++) n = i[t], n.percentage = 0 < e && (n.visible || !o) ? n.y / e * 100 : 0, n.total = e
                        },
                        generatePoints: function() {
                            m.prototype.generatePoints.call(this), this.updateTotals()
                        },
                        getX: function(t, e, i) {
                            var s = this.center,
                                o = this.radii ? this.radii[i.index] : s[2] / 2;
                            return t = Math.asin(n((t - s[1]) / (o + i.labelDistance), -1, 1)), s[0] + (e ? -1 : 1) * Math.cos(t) * (o + i.labelDistance) + (0 < i.labelDistance ? (e ? -1 : 1) * this.options.dataLabels.padding : 0)
                        },
                        translate: function(t) {
                            this.generatePoints();
                            var e = 0,
                                i = this.options,
                                s = i.slicedOffset,
                                o = s + (i.borderWidth || 0),
                                n = f(i.startAngle, i.endAngle),
                                r = this.startAngleRad = n.start;
                            n = (this.endAngleRad = n.end) - r;
                            var h = this.points,
                                l = i.dataLabels.distance;
                            i = i.ignoreHiddenPoint;
                            var p, u = h.length;
                            for (t || (this.center = t = this.getCenter()), p = 0; p < u; p++) {
                                var g = h[p],
                                    m = r + e * n;
                                i && !g.visible || (e += g.percentage / 100);
                                var x = r + e * n;
                                g.shapeType = "arc", g.shapeArgs = {
                                    x: t[0],
                                    y: t[1],
                                    r: t[2] / 2,
                                    innerR: t[3] / 2,
                                    start: Math.round(1e3 * m) / 1e3,
                                    end: Math.round(1e3 * x) / 1e3
                                }, g.labelDistance = c(g.options.dataLabels && g.options.dataLabels.distance, l), g.labelDistance = d(g.labelDistance, g.shapeArgs.r), this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, g.labelDistance), x = (x + m) / 2, x > 1.5 * Math.PI ? x -= 2 * Math.PI : x < -Math.PI / 2 && (x += 2 * Math.PI), g.slicedTranslation = {
                                    translateX: Math.round(Math.cos(x) * s),
                                    translateY: Math.round(Math.sin(x) * s)
                                };
                                var v = Math.cos(x) * t[2] / 2,
                                    y = Math.sin(x) * t[2] / 2;
                                g.tooltipPos = [t[0] + .7 * v, t[1] + .7 * y], g.half = x < -Math.PI / 2 || x > Math.PI / 2 ? 1 : 0, g.angle = x, m = Math.min(o, g.labelDistance / 5), g.labelPosition = {
                                    natural: {
                                        x: t[0] + v + Math.cos(x) * g.labelDistance,
                                        y: t[1] + y + Math.sin(x) * g.labelDistance
                                    },
                                    final: {},
                                    alignment: 0 > g.labelDistance ? "center" : g.half ? "right" : "left",
                                    connectorPosition: {
                                        breakAt: {
                                            x: t[0] + v + Math.cos(x) * m,
                                            y: t[1] + y + Math.sin(x) * m
                                        },
                                        touchingSliceAt: {
                                            x: t[0] + v,
                                            y: t[1] + y
                                        }
                                    }
                                }
                            }
                            a(this, "afterTranslate")
                        },
                        drawEmpty: function() {
                            var t = this.startAngleRad,
                                e = this.endAngleRad,
                                i = this.options;
                            if (0 === this.total) {
                                var s = this.center[0],
                                    o = this.center[1];
                                this.graph || (this.graph = this.chart.renderer.arc(s, o, this.center[1] / 2, 0, t, e).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({
                                    d: Highcharts.SVGRenderer.prototype.symbols.arc(s, o, this.center[2] / 2, 0, {
                                        start: t,
                                        end: e,
                                        innerR: this.center[3] / 2
                                    })
                                }), this.chart.styledMode || this.graph.attr({
                                    "stroke-width": i.borderWidth,
                                    fill: i.fillColor || "none",
                                    stroke: i.color || "#cccccc"
                                })
                            } else this.graph && (this.graph = this.graph.destroy())
                        },
                        redrawPoints: function() {
                            var t, e, i, s, o = this,
                                n = o.chart,
                                r = n.renderer,
                                a = o.options.shadow;
                            this.drawEmpty(), !a || o.shadowGroup || n.styledMode || (o.shadowGroup = r.g("shadow").attr({
                                zIndex: -1
                            }).add(o.group)), o.points.forEach((function(h) {
                                var c = {};
                                if (e = h.graphic, !h.isNull && e) {
                                    if (s = h.shapeArgs, t = h.getTranslate(), !n.styledMode) {
                                        var d = h.shadowGroup;
                                        a && !d && (d = h.shadowGroup = r.g("shadow").add(o.shadowGroup)), d && d.attr(t), i = o.pointAttribs(h, h.selected && "select")
                                    }
                                    h.delayedRendering ? (e.setRadialReference(o.center).attr(s).attr(t), n.styledMode || e.attr(i).attr({
                                        "stroke-linejoin": "round"
                                    }).shadow(a, d), h.delayedRendering = !1) : (e.setRadialReference(o.center), n.styledMode || l(!0, c, i), l(!0, c, s, t), e.animate(c)), e.attr({
                                        visibility: h.visible ? "inherit" : "hidden"
                                    }), e.addClass(h.getClassName())
                                } else e && (h.graphic = e.destroy())
                            }))
                        },
                        drawPoints: function() {
                            var t = this.chart.renderer;
                            this.points.forEach((function(e) {
                                e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy()), e.graphic || (e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0)
                            }))
                        },
                        searchPoint: g,
                        sortByAngle: function(t, e) {
                            t.sort((function(t, i) {
                                return "undefined" !== typeof t.angle && (i.angle - t.angle) * e
                            }))
                        },
                        drawLegendSymbol: e.drawRectangle,
                        getCenter: s.getCenter,
                        getSymbol: g,
                        drawGraph: null
                    }, {
                        init: function() {
                            i.prototype.init.apply(this, arguments);
                            var t = this;
                            t.name = c(t.name, "Slice");
                            var e = function(e) {
                                t.slice("select" === e.type)
                            };
                            return o(t, "select", e), o(t, "unselect", e), t
                        },
                        isValid: function() {
                            return h(this.y) && 0 <= this.y
                        },
                        setVisible: function(t, e) {
                            var i = this,
                                s = i.series,
                                o = s.chart,
                                n = s.options.ignoreHiddenPoint;
                            e = c(e, n), t !== i.visible && (i.visible = i.options.visible = t = "undefined" === typeof t ? !i.visible : t, s.options.data[s.data.indexOf(i)] = i.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach((function(e) {
                                i[e] && i[e][t ? "show" : "hide"](!0)
                            })), i.legendItem && o.legend.colorizeItem(i, t), t || "hover" !== i.state || i.setState(""), n && (s.isDirty = !0), e && o.redraw())
                        },
                        slice: function(t, e, i) {
                            var s = this.series;
                            u(i, s.chart), c(e, !0), this.sliced = this.options.sliced = r(t) ? t : !this.sliced, s.options.data[s.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate()), this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
                        },
                        getTranslate: function() {
                            return this.sliced ? this.slicedTranslation : {
                                translateX: 0,
                                translateY: 0
                            }
                        },
                        haloPath: function(t) {
                            var e = this.shapeArgs;
                            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                                innerR: e.r - 1,
                                start: e.start,
                                end: e.end
                            })
                        },
                        connectorShapes: {
                            fixedOffset: function(t, e, i) {
                                var s = e.breakAt;
                                return e = e.touchingSliceAt, [
                                    ["M", t.x, t.y], i.softConnector ? ["C", t.x + ("left" === t.alignment ? -5 : 5), t.y, 2 * s.x - e.x, 2 * s.y - e.y, s.x, s.y] : ["L", s.x, s.y],
                                    ["L", e.x, e.y]
                                ]
                            },
                            straight: function(t, e) {
                                return e = e.touchingSliceAt, [
                                    ["M", t.x, t.y],
                                    ["L", e.x, e.y]
                                ]
                            },
                            crookedLine: function(t, e, i) {
                                e = e.touchingSliceAt;
                                var s = this.series,
                                    o = s.center[0],
                                    n = s.chart.plotWidth,
                                    r = s.chart.plotLeft;
                                s = t.alignment;
                                var a = this.shapeArgs.r;
                                return i = d(i.crookDistance, 1), n = "left" === s ? o + a + (n + r - o - a) * (1 - i) : r + (o - a) * i, i = ["L", n, t.y], o = !0, ("left" === s ? n > t.x || n < e.x : n < t.x || n > e.x) && (o = !1), t = [
                                    ["M", t.x, t.y]
                                ], o && t.push(i), t.push(["L", e.x, e.y]), t
                            }
                        },
                        getConnectorPath: function() {
                            var t = this.labelPosition,
                                e = this.series.options.dataLabels,
                                i = e.connectorShape,
                                s = this.connectorShapes;
                            return s[i] && (i = s[i]), i.call(this, {
                                x: t.final.x,
                                y: t.final.y,
                                alignment: t.alignment
                            }, t.connectorPosition, e)
                        }
                    })
                })), e(i, "parts/DataLabels.js", [i["parts/Globals.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = t.noop,
                        s = t.seriesTypes,
                        o = e.animObject,
                        n = e.arrayMax,
                        r = e.clamp,
                        a = e.defined,
                        h = e.extend,
                        l = e.fireEvent,
                        c = e.format,
                        d = e.isArray,
                        p = e.merge,
                        u = e.objectEach,
                        f = e.pick,
                        g = e.relativeLength,
                        m = e.splat,
                        x = e.stableSort,
                        v = t.Series;
                    t.distribute = function(e, i, s) {
                        function o(t, e) {
                            return t.target - e.target
                        }
                        var n, a = !0,
                            h = e,
                            l = [],
                            c = 0,
                            d = h.reducedLen || i;
                        for (n = e.length; n--;) c += e[n].size;
                        if (c > d) {
                            for (x(e, (function(t, e) {
                                    return (e.rank || 0) - (t.rank || 0)
                                })), c = n = 0; c <= d;) c += e[n].size, n++;
                            l = e.splice(n - 1, e.length)
                        }
                        for (x(e, o), e = e.map((function(t) {
                                return {
                                    size: t.size,
                                    targets: [t.target],
                                    align: f(t.align, .5)
                                }
                            })); a;) {
                            for (n = e.length; n--;) a = e[n], c = (Math.min.apply(0, a.targets) + Math.max.apply(0, a.targets)) / 2, a.pos = r(c - a.size * a.align, 0, i - a.size);
                            for (n = e.length, a = !1; n--;) 0 < n && e[n - 1].pos + e[n - 1].size > e[n].pos && (e[n - 1].size += e[n].size, e[n - 1].targets = e[n - 1].targets.concat(e[n].targets), e[n - 1].align = .5, e[n - 1].pos + e[n - 1].size > i && (e[n - 1].pos = i - e[n - 1].size), e.splice(n, 1), a = !0)
                        }
                        h.push.apply(h, l), n = 0, e.some((function(e) {
                            var o = 0;
                            if (e.targets.some((function() {
                                    if (h[n].pos = e.pos + o, "undefined" !== typeof s && Math.abs(h[n].pos - h[n].target) > s) return h.slice(0, n + 1).forEach((function(t) {
                                        delete t.pos
                                    })), h.reducedLen = (h.reducedLen || i) - .1 * i, h.reducedLen > .1 * i && t.distribute(h, i, s), !0;
                                    o += h[n].size, n++
                                }))) return !0
                        })), x(h, o)
                    }, v.prototype.drawDataLabels = function() {
                        function t(t, e) {
                            var i = e.filter;
                            return !i || (e = i.operator, t = t[i.property], i = i.value, ">" === e && t > i || "<" === e && t < i || ">=" === e && t >= i || "<=" === e && t <= i || "==" === e && t == i || "===" === e && t === i)
                        }

                        function e(t, e) {
                            var i, s = [];
                            if (d(t) && !d(e)) s = t.map((function(t) {
                                return p(t, e)
                            }));
                            else if (d(e) && !d(t)) s = e.map((function(e) {
                                return p(t, e)
                            }));
                            else if (d(t) || d(e))
                                for (i = Math.max(t.length, e.length); i--;) s[i] = p(t[i], e[i]);
                            else s = p(t, e);
                            return s
                        }
                        var i, s = this,
                            n = s.chart,
                            r = s.options,
                            h = r.dataLabels,
                            g = s.points,
                            x = s.hasRendered || 0,
                            v = o(r.animation).duration,
                            y = Math.min(v, 200),
                            b = !n.renderer.forExport && f(h.defer, 0 < y),
                            k = n.renderer;
                        if (h = e(e(n.options.plotOptions && n.options.plotOptions.series && n.options.plotOptions.series.dataLabels, n.options.plotOptions && n.options.plotOptions[s.type] && n.options.plotOptions[s.type].dataLabels), h), l(this, "drawDataLabels"), d(h) || h.enabled || s._hasPointLabels) {
                            var M = s.plotGroup("dataLabelsGroup", "data-labels", b && !x ? "hidden" : "inherit", h.zIndex || 6);
                            b && (M.attr({
                                opacity: +x
                            }), x || setTimeout((function() {
                                var t = s.dataLabelsGroup;
                                t && (s.visible && M.show(!0), t[r.animation ? "animate" : "attr"]({
                                    opacity: 1
                                }, {
                                    duration: y
                                }))
                            }), v - y)), g.forEach((function(o) {
                                i = m(e(h, o.dlOptions || o.options && o.options.dataLabels)), i.forEach((function(e, i) {
                                    var h = e.enabled && (!o.isNull || o.dataLabelOnNull) && t(o, e),
                                        l = o.dataLabels ? o.dataLabels[i] : o.dataLabel,
                                        d = o.connectors ? o.connectors[i] : o.connector,
                                        p = f(e.distance, o.labelDistance),
                                        g = !l;
                                    if (h) {
                                        var m = o.getLabelConfig(),
                                            x = f(e[o.formatPrefix + "Format"], e.format);
                                        m = a(x) ? c(x, m, n) : (e[o.formatPrefix + "Formatter"] || e.formatter).call(m, e), x = e.style;
                                        var v = e.rotation;
                                        n.styledMode || (x.color = f(e.color, x.color, s.color, "#000000"), "contrast" === x.color ? (o.contrastColor = k.getContrast(o.color || s.color), x.color = !a(p) && e.inside || 0 > p || r.stacking ? o.contrastColor : "#000000") : delete o.contrastColor, r.cursor && (x.cursor = r.cursor));
                                        var y = {
                                            r: e.borderRadius || 0,
                                            rotation: v,
                                            padding: e.padding,
                                            zIndex: 1
                                        };
                                        n.styledMode || (y.fill = e.backgroundColor, y.stroke = e.borderColor, y["stroke-width"] = e.borderWidth), u(y, (function(t, e) {
                                            "undefined" === typeof t && delete y[e]
                                        }))
                                    }!l || h && a(m) ? h && a(m) && (l ? y.text = m : (o.dataLabels = o.dataLabels || [], l = o.dataLabels[i] = v ? k.text(m, 0, -9999, e.useHTML).addClass("highcharts-data-label") : k.label(m, 0, -9999, e.shape, null, null, e.useHTML, null, "data-label"), i || (o.dataLabel = l), l.addClass(" highcharts-data-label-color-" + o.colorIndex + " " + (e.className || "") + (e.useHTML ? " highcharts-tracker" : ""))), l.options = e, l.attr(y), n.styledMode || l.css(x).shadow(e.shadow), l.added || l.add(M), e.textPath && !e.useHTML && (l.setTextPath(o.getDataLabelPath && o.getDataLabelPath(l) || o.graphic, e.textPath), o.dataLabelPath && !e.textPath.enabled && (o.dataLabelPath = o.dataLabelPath.destroy())), s.alignDataLabel(o, l, e, null, g)) : (o.dataLabel = o.dataLabel && o.dataLabel.destroy(), o.dataLabels && (1 === o.dataLabels.length ? delete o.dataLabels : delete o.dataLabels[i]), i || delete o.dataLabel, d && (o.connector = o.connector.destroy(), o.connectors && (1 === o.connectors.length ? delete o.connectors : delete o.connectors[i])))
                                }))
                            }))
                        }
                        l(this, "afterDrawDataLabels")
                    }, v.prototype.alignDataLabel = function(t, e, i, s, o) {
                        var n = this,
                            r = this.chart,
                            a = this.isCartesian && r.inverted,
                            l = this.enabledDataSorting,
                            c = f(t.dlBox && t.dlBox.centerX, t.plotX, -9999),
                            d = f(t.plotY, -9999),
                            p = e.getBBox(),
                            u = i.rotation,
                            g = i.align,
                            m = r.isInsidePlot(c, Math.round(d), a),
                            x = "justify" === f(i.overflow, l ? "none" : "justify"),
                            v = this.visible && !1 !== t.visible && (t.series.forceDL || l && !x || m || i.inside && s && r.isInsidePlot(c, a ? s.x + 1 : s.y + s.height - 1, a)),
                            y = function(i) {
                                l && n.xAxis && !x && n.setDataLabelStartPos(t, e, o, m, i)
                            };
                        if (v) {
                            var b = r.renderer.fontMetrics(r.styledMode ? void 0 : i.style.fontSize, e).b;
                            s = h({
                                x: a ? this.yAxis.len - d : c,
                                y: Math.round(a ? this.xAxis.len - c : d),
                                width: 0,
                                height: 0
                            }, s), h(i, {
                                width: p.width,
                                height: p.height
                            }), u ? (x = !1, c = r.renderer.rotCorr(b, u), c = {
                                x: s.x + (i.x || 0) + s.width / 2 + c.x,
                                y: s.y + (i.y || 0) + {
                                    top: 0,
                                    middle: .5,
                                    bottom: 1
                                }[i.verticalAlign] * s.height
                            }, y(c), e[o ? "attr" : "animate"](c).attr({
                                align: g
                            }), y = (u + 720) % 360, y = 180 < y && 360 > y, "left" === g ? c.y -= y ? p.height : 0 : "center" === g ? (c.x -= p.width / 2, c.y -= p.height / 2) : "right" === g && (c.x -= p.width, c.y -= y ? 0 : p.height), e.placed = !0, e.alignAttr = c) : (y(s), e.align(i, null, s), c = e.alignAttr), x && 0 <= s.height ? this.justifyDataLabel(e, i, c, p, s, o) : f(i.crop, !0) && (v = r.isInsidePlot(c.x, c.y) && r.isInsidePlot(c.x + p.width, c.y + p.height)), i.shape && !u && e[o ? "attr" : "animate"]({
                                anchorX: a ? r.plotWidth - t.plotY : t.plotX,
                                anchorY: a ? r.plotHeight - t.plotX : t.plotY
                            })
                        }
                        o && l && (e.placed = !1), v || l && !x || (e.hide(!0), e.placed = !1)
                    }, v.prototype.setDataLabelStartPos = function(t, e, i, s, o) {
                        var n = this.chart,
                            r = n.inverted,
                            a = this.xAxis,
                            h = a.reversed,
                            l = r ? e.height / 2 : e.width / 2;
                        t = (t = t.pointWidth) ? t / 2 : 0, a = r ? o.x : h ? -l - t : a.width - l + t, o = r ? h ? this.yAxis.height - l + t : -l - t : o.y, e.startXPos = a, e.startYPos = o, s ? "hidden" === e.visibility && (e.show(), e.attr({
                            opacity: 0
                        }).animate({
                            opacity: 1
                        })) : e.attr({
                            opacity: 1
                        }).animate({
                            opacity: 0
                        }, void 0, e.hide), n.hasRendered && (i && e.attr({
                            x: e.startXPos,
                            y: e.startYPos
                        }), e.placed = !0)
                    }, v.prototype.justifyDataLabel = function(t, e, i, s, o, n) {
                        var r = this.chart,
                            a = e.align,
                            h = e.verticalAlign,
                            l = t.box ? 0 : t.padding || 0,
                            c = e.x;
                        c = void 0 === c ? 0 : c;
                        var d = e.y,
                            p = void 0 === d ? 0 : d;
                        if (d = i.x + l, 0 > d) {
                            "right" === a && 0 <= c ? (e.align = "left", e.inside = !0) : c -= d;
                            var u = !0
                        }
                        return d = i.x + s.width - l, d > r.plotWidth && ("left" === a && 0 >= c ? (e.align = "right", e.inside = !0) : c += r.plotWidth - d, u = !0), d = i.y + l, 0 > d && ("bottom" === h && 0 <= p ? (e.verticalAlign = "top", e.inside = !0) : p -= d, u = !0), d = i.y + s.height - l, d > r.plotHeight && ("top" === h && 0 >= p ? (e.verticalAlign = "bottom", e.inside = !0) : p += r.plotHeight - d, u = !0), u && (e.x = c, e.y = p, t.placed = !n, t.align(e, void 0, o)), u
                    }, s.pie && (s.pie.prototype.dataLabelPositioners = {
                        radialDistributionY: function(t) {
                            return t.top + t.distributeBox.pos
                        },
                        radialDistributionX: function(t, e, i, s) {
                            return t.getX(i < e.top + 2 || i > e.bottom - 2 ? s : i, e.half, e)
                        },
                        justify: function(t, e, i) {
                            return i[0] + (t.half ? -1 : 1) * (e + t.labelDistance)
                        },
                        alignToPlotEdges: function(t, e, i, s) {
                            return t = t.getBBox().width, e ? t + s : i - t - s
                        },
                        alignToConnectors: function(t, e, i, s) {
                            var o, n = 0;
                            return t.forEach((function(t) {
                                o = t.dataLabel.getBBox().width, o > n && (n = o)
                            })), e ? n + s : i - n - s
                        }
                    }, s.pie.prototype.drawDataLabels = function() {
                        var e, i, s, o, r, h, l, c, d, u, g, m, x = this,
                            y = x.data,
                            b = x.chart,
                            k = x.options.dataLabels || {},
                            M = k.connectorPadding,
                            w = b.plotWidth,
                            S = b.plotHeight,
                            A = b.plotLeft,
                            T = Math.round(b.chartWidth / 3),
                            P = x.center,
                            C = P[2] / 2,
                            O = P[1],
                            E = [
                                [],
                                []
                            ],
                            L = [0, 0, 0, 0],
                            D = x.dataLabelPositioners;
                        x.visible && (k.enabled || x._hasPointLabels) && (y.forEach((function(t) {
                            t.dataLabel && t.visible && t.dataLabel.shortened && (t.dataLabel.attr({
                                width: "auto"
                            }).css({
                                width: "auto",
                                textOverflow: "clip"
                            }), t.dataLabel.shortened = !1)
                        })), v.prototype.drawDataLabels.apply(x), y.forEach((function(t) {
                            t.dataLabel && (t.visible ? (E[t.half].push(t), t.dataLabel._pos = null, !a(k.style.width) && !a(t.options.dataLabels && t.options.dataLabels.style && t.options.dataLabels.style.width) && t.dataLabel.getBBox().width > T && (t.dataLabel.css({
                                width: Math.round(.7 * T) + "px"
                            }), t.dataLabel.shortened = !0)) : (t.dataLabel = t.dataLabel.destroy(), t.dataLabels && 1 === t.dataLabels.length && delete t.dataLabels))
                        })), E.forEach((function(i, s) {
                            var n, p = i.length,
                                v = [];
                            if (p) {
                                if (x.sortByAngle(i, s - .5), 0 < x.maxLabelDistance) {
                                    var y = Math.max(0, O - C - x.maxLabelDistance),
                                        T = Math.min(O + C + x.maxLabelDistance, b.plotHeight);
                                    i.forEach((function(t) {
                                        0 < t.labelDistance && t.dataLabel && (t.top = Math.max(0, O - C - t.labelDistance), t.bottom = Math.min(O + C + t.labelDistance, b.plotHeight), n = t.dataLabel.getBBox().height || 21, t.distributeBox = {
                                            target: t.labelPosition.natural.y - t.top + n / 2,
                                            size: n,
                                            rank: t.y
                                        }, v.push(t.distributeBox))
                                    })), y = T + n - y, t.distribute(v, y, y / 5)
                                }
                                for (g = 0; g < p; g++) {
                                    if (e = i[g], h = e.labelPosition, o = e.dataLabel, u = !1 === e.visible ? "hidden" : "inherit", d = y = h.natural.y, v && a(e.distributeBox) && ("undefined" === typeof e.distributeBox.pos ? u = "hidden" : (l = e.distributeBox.size, d = D.radialDistributionY(e))), delete e.positionIndex, k.justify) c = D.justify(e, C, P);
                                    else switch (k.alignTo) {
                                        case "connectors":
                                            c = D.alignToConnectors(i, s, w, A);
                                            break;
                                        case "plotEdges":
                                            c = D.alignToPlotEdges(o, s, w, A);
                                            break;
                                        default:
                                            c = D.radialDistributionX(x, e, d, y)
                                    }
                                    o._attr = {
                                        visibility: u,
                                        align: h.alignment
                                    }, m = e.options.dataLabels || {}, o._pos = {
                                        x: c + f(m.x, k.x) + ({
                                            left: M,
                                            right: -M
                                        }[h.alignment] || 0),
                                        y: d + f(m.y, k.y) - 10
                                    }, h.final.x = c, h.final.y = d, f(k.crop, !0) && (r = o.getBBox().width, y = null, c - r < M && 1 === s ? (y = Math.round(r - c + M), L[3] = Math.max(y, L[3])) : c + r > w - M && 0 === s && (y = Math.round(c + r - w + M), L[1] = Math.max(y, L[1])), 0 > d - l / 2 ? L[0] = Math.max(Math.round(l / 2 - d), L[0]) : d + l / 2 > S && (L[2] = Math.max(Math.round(d + l / 2 - S), L[2])), o.sideOverflow = y)
                                }
                            }
                        })), 0 === n(L) || this.verifyDataLabelOverflow(L)) && (this.placeDataLabels(), this.points.forEach((function(t) {
                            var e;
                            (m = p(k, t.options.dataLabels), i = f(m.connectorWidth, 1)) && (s = t.connector, (o = t.dataLabel) && o._pos && t.visible && 0 < t.labelDistance ? (u = o._attr.visibility, (e = !s) && (t.connector = s = b.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + t.colorIndex + (t.className ? " " + t.className : "")).add(x.dataLabelsGroup), b.styledMode || s.attr({
                                "stroke-width": i,
                                stroke: m.connectorColor || t.color || "#666666"
                            })), s[e ? "attr" : "animate"]({
                                d: t.getConnectorPath()
                            }), s.attr("visibility", u)) : s && (t.connector = s.destroy()))
                        })))
                    }, s.pie.prototype.placeDataLabels = function() {
                        this.points.forEach((function(t) {
                            var e, i = t.dataLabel;
                            i && t.visible && ((e = i._pos) ? (i.sideOverflow && (i._attr.width = Math.max(i.getBBox().width - i.sideOverflow, 0), i.css({
                                width: i._attr.width + "px",
                                textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
                            }), i.shortened = !0), i.attr(i._attr), i[i.moved ? "animate" : "attr"](e), i.moved = !0) : i && i.attr({
                                y: -9999
                            })), delete t.distributeBox
                        }), this)
                    }, s.pie.prototype.alignDataLabel = i, s.pie.prototype.verifyDataLabelOverflow = function(t) {
                        var e = this.center,
                            i = this.options,
                            s = i.center,
                            o = i.minSize || 80,
                            n = null !== i.size;
                        if (!n) {
                            if (null !== s[0]) var a = Math.max(e[2] - Math.max(t[1], t[3]), o);
                            else a = Math.max(e[2] - t[1] - t[3], o), e[0] += (t[3] - t[1]) / 2;
                            null !== s[1] ? a = r(a, o, e[2] - Math.max(t[0], t[2])) : (a = r(a, o, e[2] - t[0] - t[2]), e[1] += (t[0] - t[2]) / 2), a < e[2] ? (e[2] = a, e[3] = Math.min(g(i.innerSize || 0, a), a), this.translate(e), this.drawDataLabels && this.drawDataLabels()) : n = !0
                        }
                        return n
                    }), s.column && (s.column.prototype.alignDataLabel = function(t, e, i, s, o) {
                        var n = this.chart.inverted,
                            r = t.series,
                            a = t.dlBox || t.shapeArgs,
                            h = f(t.below, t.plotY > f(this.translatedThreshold, r.yAxis.len)),
                            l = f(i.inside, !!this.options.stacking);
                        a && (s = p(a), 0 > s.y && (s.height += s.y, s.y = 0), a = s.y + s.height - r.yAxis.len, 0 < a && a < s.height && (s.height -= a), n && (s = {
                            x: r.yAxis.len - s.y - s.height,
                            y: r.xAxis.len - s.x - s.width,
                            width: s.height,
                            height: s.width
                        }), l || (n ? (s.x += h ? 0 : s.width, s.width = 0) : (s.y += h ? s.height : 0, s.height = 0))), i.align = f(i.align, !n || l ? "center" : h ? "right" : "left"), i.verticalAlign = f(i.verticalAlign, n || l ? "middle" : h ? "top" : "bottom"), v.prototype.alignDataLabel.call(this, t, e, i, s, o), i.inside && t.contrastColor && e.css({
                            color: t.contrastColor
                        })
                    })
                })), e(i, "modules/overlapping-datalabels.src.js", [i["parts/Chart.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.addEvent,
                        s = e.fireEvent,
                        o = e.isArray,
                        n = e.isNumber,
                        r = e.objectEach,
                        a = e.pick;
                    i(t, "render", (function() {
                        var t = [];
                        (this.labelCollectors || []).forEach((function(e) {
                            t = t.concat(e())
                        })), (this.yAxis || []).forEach((function(e) {
                            e.stacking && e.options.stackLabels && !e.options.stackLabels.allowOverlap && r(e.stacking.stacks, (function(e) {
                                r(e, (function(e) {
                                    t.push(e.label)
                                }))
                            }))
                        })), (this.series || []).forEach((function(e) {
                            var i = e.options.dataLabels;
                            e.visible && (!1 !== i.enabled || e._hasPointLabels) && (e.nodes || e.points).forEach((function(e) {
                                e.visible && (o(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : []).forEach((function(i) {
                                    var s = i.options;
                                    i.labelrank = a(s.labelrank, e.labelrank, e.shapeArgs && e.shapeArgs.height), s.allowOverlap || t.push(i)
                                }))
                            }))
                        })), this.hideOverlappingLabels(t)
                    })), t.prototype.hideOverlappingLabels = function(t) {
                        var e, i, o, r = this,
                            a = t.length,
                            h = r.renderer,
                            l = !1,
                            c = function(t) {
                                var e, i, s = t.box ? 0 : t.padding || 0,
                                    o = e = 0;
                                if (t && (!t.alignAttr || t.placed)) {
                                    var r = t.alignAttr || {
                                            x: t.attr("x"),
                                            y: t.attr("y")
                                        },
                                        a = t.parentGroup;
                                    t.width || (e = t.getBBox(), t.width = e.width, t.height = e.height, e = h.fontMetrics(null, t.element).h);
                                    var l = t.width - 2 * s;
                                    return (i = {
                                        left: "0",
                                        center: "0.5",
                                        right: "1"
                                    }[t.alignValue]) ? o = +i * l : n(t.x) && Math.round(t.x) !== t.translateX && (o = t.x - t.translateX), {
                                        x: r.x + (a.translateX || 0) + s - o,
                                        y: r.y + (a.translateY || 0) + s - e,
                                        width: t.width - 2 * s,
                                        height: t.height - 2 * s
                                    }
                                }
                            };
                        for (i = 0; i < a; i++)(e = t[i]) && (e.oldOpacity = e.opacity, e.newOpacity = 1, e.absoluteBox = c(e));
                        for (t.sort((function(t, e) {
                                return (e.labelrank || 0) - (t.labelrank || 0)
                            })), i = 0; i < a; i++) {
                            var d = (c = t[i]) && c.absoluteBox;
                            for (e = i + 1; e < a; ++e) {
                                var p = (o = t[e]) && o.absoluteBox;
                                !d || !p || c === o || 0 === c.newOpacity || 0 === o.newOpacity || p.x > d.x + d.width || p.x + p.width < d.x || p.y > d.y + d.height || p.y + p.height < d.y || ((c.labelrank < o.labelrank ? c : o).newOpacity = 0)
                            }
                        }
                        t.forEach((function(t) {
                            if (t) {
                                var e = t.newOpacity;
                                t.oldOpacity !== e && (t.alignAttr && t.placed ? (t[e ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), l = !0, t.alignAttr.opacity = e, t[t.isOld ? "animate" : "attr"](t.alignAttr, null, (function() {
                                    r.styledMode || t.css({
                                        pointerEvents: e ? "auto" : "none"
                                    }), t.visibility = e ? "inherit" : "hidden", t.placed = !!e
                                })), s(r, "afterHideOverlappingLabel")) : t.attr({
                                    opacity: e
                                })), t.isOld = !0
                            }
                        })), l && s(r, "afterHideAllOverlappingLabels")
                    }
                })), e(i, "parts/Interaction.js", [i["parts/Chart.js"], i["parts/Globals.js"], i["parts/Legend.js"], i["parts/Options.js"], i["parts/Point.js"], i["parts/Utilities.js"]], (function(t, e, i, s, o, n) {
                    var r = s.defaultOptions,
                        a = n.addEvent,
                        h = n.createElement,
                        l = n.css,
                        c = n.defined,
                        d = n.extend,
                        p = n.fireEvent,
                        u = n.isArray,
                        f = n.isFunction,
                        g = n.isNumber,
                        m = n.isObject,
                        x = n.merge,
                        v = n.objectEach,
                        y = n.pick,
                        b = e.hasTouch;
                    s = e.Series, n = e.seriesTypes;
                    var k = e.svg,
                        M = e.TrackerMixin = {
                            drawTrackerPoint: function() {
                                var t, e = this,
                                    i = e.chart,
                                    s = i.pointer,
                                    o = function(t) {
                                        var e = s.getPointFromEvent(t);
                                        "undefined" !== typeof e && (s.isDirectTouch = !0, e.onMouseOver(t))
                                    };
                                e.points.forEach((function(e) {
                                    t = u(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : [], e.graphic && (e.graphic.element.point = e), t.forEach((function(t) {
                                        t.div ? t.div.point = e : t.element.point = e
                                    }))
                                })), e._hasTracking || (e.trackerGroups.forEach((function(t) {
                                    e[t] && (e[t].addClass("highcharts-tracker").on("mouseover", o).on("mouseout", (function(t) {
                                        s.onTrackerMouseOut(t)
                                    })), b && e[t].on("touchstart", o), !i.styledMode && e.options.cursor && e[t].css(l).css({
                                        cursor: e.options.cursor
                                    }))
                                })), e._hasTracking = !0), p(this, "afterDrawTracker")
                            },
                            drawTrackerGraph: function() {
                                var t = this,
                                    e = t.options,
                                    i = e.trackByArea,
                                    s = [].concat(i ? t.areaPath : t.graphPath),
                                    o = t.chart,
                                    n = o.pointer,
                                    r = o.renderer,
                                    a = o.options.tooltip.snap,
                                    h = t.tracker,
                                    l = function(e) {
                                        o.hoverSeries !== t && t.onMouseOver()
                                    },
                                    c = "rgba(192,192,192," + (k ? 1e-4 : .002) + ")";
                                h ? h.attr({
                                    d: s
                                }) : t.graph && (t.tracker = r.path(s).attr({
                                    visibility: t.visible ? "visible" : "hidden",
                                    zIndex: 2
                                }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), o.styledMode || t.tracker.attr({
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    stroke: c,
                                    fill: i ? c : "none",
                                    "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * a)
                                }), [t.tracker, t.markerGroup].forEach((function(t) {
                                    t.addClass("highcharts-tracker").on("mouseover", l).on("mouseout", (function(t) {
                                        n.onTrackerMouseOut(t)
                                    })), e.cursor && !o.styledMode && t.css({
                                        cursor: e.cursor
                                    }), b && t.on("touchstart", l)
                                }))), p(this, "afterDrawTracker")
                            }
                        };
                    n.column && (n.column.prototype.drawTracker = M.drawTrackerPoint), n.pie && (n.pie.prototype.drawTracker = M.drawTrackerPoint), n.scatter && (n.scatter.prototype.drawTracker = M.drawTrackerPoint), d(i.prototype, {
                        setItemEvents: function(t, e, i) {
                            var s = this,
                                n = s.chart.renderer.boxWrapper,
                                r = t instanceof o,
                                a = "highcharts-legend-" + (r ? "point" : "series") + "-active",
                                h = s.chart.styledMode;
                            (i ? [e, t.legendSymbol] : [t.legendGroup]).forEach((function(i) {
                                i && i.on("mouseover", (function() {
                                    t.visible && s.allItems.forEach((function(e) {
                                        t !== e && e.setState("inactive", !r)
                                    })), t.setState("hover"), t.visible && n.addClass(a), h || e.css(s.options.itemHoverStyle)
                                })).on("mouseout", (function() {
                                    s.chart.styledMode || e.css(x(t.visible ? s.itemStyle : s.itemHiddenStyle)), s.allItems.forEach((function(e) {
                                        t !== e && e.setState("", !r)
                                    })), n.removeClass(a), t.setState()
                                })).on("click", (function(e) {
                                    var i = function() {
                                        t.setVisible && t.setVisible(), s.allItems.forEach((function(e) {
                                            t !== e && e.setState(t.visible ? "inactive" : "", !r)
                                        }))
                                    };
                                    n.removeClass(a), e = {
                                        browserEvent: e
                                    }, t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : p(t, "legendItemClick", e, i)
                                }))
                            }))
                        },
                        createCheckboxForItem: function(t) {
                            t.checkbox = h("input", {
                                type: "checkbox",
                                className: "highcharts-legend-checkbox",
                                checked: t.selected,
                                defaultChecked: t.selected
                            }, this.options.itemCheckboxStyle, this.chart.container), a(t.checkbox, "click", (function(e) {
                                p(t.series || t, "checkboxClick", {
                                    checked: e.target.checked,
                                    item: t
                                }, (function() {
                                    t.select()
                                }))
                            }))
                        }
                    }), d(t.prototype, {
                        showResetZoom: function() {
                            function t() {
                                e.zoomOut()
                            }
                            var e = this,
                                i = r.lang,
                                s = e.options.chart.resetZoomButton,
                                o = s.theme,
                                n = o.states,
                                a = "chart" === s.relativeTo || "spaceBox" === s.relativeTo ? null : "plotBox";
                            p(this, "beforeShowResetZoom", null, (function() {
                                e.resetZoomButton = e.renderer.button(i.resetZoom, null, null, t, o, n && n.hover).attr({
                                    align: s.position.align,
                                    title: i.resetZoomTitle
                                }).addClass("highcharts-reset-zoom").add().align(s.position, !1, a)
                            })), p(this, "afterShowResetZoom")
                        },
                        zoomOut: function() {
                            p(this, "selection", {
                                resetSelection: !0
                            }, this.zoom)
                        },
                        zoom: function(t) {
                            var e, i = this,
                                s = i.pointer,
                                o = !1,
                                n = i.inverted ? s.mouseDownX : s.mouseDownY;
                            !t || t.resetSelection ? (i.axes.forEach((function(t) {
                                e = t.zoom()
                            })), s.initiated = !1) : t.xAxis.concat(t.yAxis).forEach((function(t) {
                                var r = t.axis,
                                    a = i.inverted ? r.left : r.top,
                                    h = i.inverted ? a + r.width : a + r.height,
                                    l = r.isXAxis,
                                    d = !1;
                                (!l && n >= a && n <= h || l || !c(n)) && (d = !0), s[l ? "zoomX" : "zoomY"] && d && (e = r.zoom(t.min, t.max), r.displayBtn && (o = !0))
                            }));
                            var r = i.resetZoomButton;
                            o && !r ? i.showResetZoom() : !o && m(r) && (i.resetZoomButton = r.destroy()), e && i.redraw(y(i.options.chart.animation, t && t.animation, 100 > i.pointCount))
                        },
                        pan: function(t, i) {
                            var s, o = this,
                                n = o.hoverPoints,
                                r = o.options.chart,
                                a = o.options.mapNavigation && o.options.mapNavigation.enabled;
                            i = "object" === typeof i ? i : {
                                enabled: i,
                                type: "x"
                            }, r && r.panning && (r.panning = i);
                            var h = i.type;
                            p(this, "pan", {
                                originalEvent: t
                            }, (function() {
                                n && n.forEach((function(t) {
                                    t.setState()
                                }));
                                var i = [1];
                                "xy" === h ? i = [1, 0] : "y" === h && (i = [0]), i.forEach((function(i) {
                                    var n = o[i ? "xAxis" : "yAxis"][0],
                                        r = n.horiz,
                                        l = t[r ? "chartX" : "chartY"];
                                    r = r ? "mouseDownX" : "mouseDownY";
                                    var c = o[r],
                                        d = (n.pointRange || 0) / 2,
                                        p = n.reversed && !o.inverted || !n.reversed && o.inverted ? -1 : 1,
                                        u = n.getExtremes(),
                                        f = n.toValue(c - l, !0) + d * p;
                                    p = n.toValue(c + n.len - l, !0) - d * p;
                                    var m = p < f;
                                    c = m ? p : f, f = m ? f : p;
                                    var x = n.hasVerticalPanning(),
                                        v = n.panningState;
                                    n.series.forEach((function(t) {
                                        if (x && !i && (!v || v.isDirty)) {
                                            var e = t.getProcessedData(!0);
                                            t = t.getExtremes(e.yData, !0), v || (v = {
                                                startMin: Number.MAX_VALUE,
                                                startMax: -Number.MAX_VALUE
                                            }), g(t.dataMin) && g(t.dataMax) && (v.startMin = Math.min(t.dataMin, v.startMin), v.startMax = Math.max(t.dataMax, v.startMax))
                                        }
                                    })), p = Math.min(e.pick(null === v || void 0 === v ? void 0 : v.startMin, u.dataMin), d ? u.min : n.toValue(n.toPixels(u.min) - n.minPixelPadding)), d = Math.max(e.pick(null === v || void 0 === v ? void 0 : v.startMax, u.dataMax), d ? u.max : n.toValue(n.toPixels(u.max) + n.minPixelPadding)), n.panningState = v, n.isOrdinal || (m = p - c, 0 < m && (f += m, c = p), m = f - d, 0 < m && (f = d, c -= m), (n.series.length && c !== u.min && f !== u.max && i || v && c >= p && f <= d) && (n.setExtremes(c, f, !1, !1, {
                                        trigger: "pan"
                                    }), o.resetZoomButton || a || !h.match("y") || (o.showResetZoom(), n.displayBtn = !1), s = !0), o[r] = l)
                                })), s && o.redraw(!1), l(o.container, {
                                    cursor: "move"
                                })
                            }))
                        }
                    }), d(o.prototype, {
                        select: function(t, e) {
                            var i = this,
                                s = i.series,
                                o = s.chart;
                            this.selectedStaging = t = y(t, !i.selected), i.firePointEvent(t ? "select" : "unselect", {
                                accumulate: e
                            }, (function() {
                                i.selected = i.options.selected = t, s.options.data[s.data.indexOf(i)] = i.options, i.setState(t && "select"), e || o.getSelectedPoints().forEach((function(t) {
                                    var e = t.series;
                                    t.selected && t !== i && (t.selected = t.options.selected = !1, e.options.data[e.data.indexOf(t)] = t.options, t.setState(o.hoverPoints && e.options.inactiveOtherPoints ? "inactive" : ""), t.firePointEvent("unselect"))
                                }))
                            })), delete this.selectedStaging
                        },
                        onMouseOver: function(t) {
                            var e = this.series.chart,
                                i = e.pointer;
                            t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e.inverted), i.runPointActions(t, this)
                        },
                        onMouseOut: function() {
                            var t = this.series.chart;
                            this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach((function(t) {
                                t.setState()
                            })), t.hoverPoints = t.hoverPoint = null
                        },
                        importEvents: function() {
                            if (!this.hasImportedEvents) {
                                var t = this,
                                    e = x(t.series.options.point, t.options).events;
                                t.events = e, v(e, (function(e, i) {
                                    f(e) && a(t, i, e)
                                })), this.hasImportedEvents = !0
                            }
                        },
                        setState: function(t, e) {
                            var i, s = this.series,
                                o = this.state,
                                n = s.options.states[t || "normal"] || {},
                                a = r.plotOptions[s.type].marker && s.options.marker,
                                h = a && !1 === a.enabled,
                                l = a && a.states && a.states[t || "normal"] || {},
                                c = !1 === l.enabled,
                                u = s.stateMarkerGraphic,
                                f = this.marker || {},
                                g = s.chart,
                                m = s.halo,
                                x = a && s.markerAttribs;
                            if (t = t || "", !(t === this.state && !e || this.selected && "select" !== t || !1 === n.enabled || t && (c || h && !1 === l.enabled) || t && f.states && f.states[t] && !1 === f.states[t].enabled)) {
                                if (this.state = t, x && (i = s.markerAttribs(this, t)), this.graphic) {
                                    if (o && this.graphic.removeClass("highcharts-point-" + o), t && this.graphic.addClass("highcharts-point-" + t), !g.styledMode) {
                                        var v = s.pointAttribs(this, t),
                                            b = y(g.options.chart.animation, n.animation);
                                        s.options.inactiveOtherPoints && v.opacity && ((this.dataLabels || []).forEach((function(t) {
                                            t && t.animate({
                                                opacity: v.opacity
                                            }, b)
                                        })), this.connector && this.connector.animate({
                                            opacity: v.opacity
                                        }, b)), this.graphic.animate(v, b)
                                    }
                                    i && this.graphic.animate(i, y(g.options.chart.animation, l.animation, a.animation)), u && u.hide()
                                } else t && l && (o = f.symbol || s.symbol, u && u.currentSymbol !== o && (u = u.destroy()), i && (u ? u[e ? "animate" : "attr"]({
                                    x: i.x,
                                    y: i.y
                                }) : o && (s.stateMarkerGraphic = u = g.renderer.symbol(o, i.x, i.y, i.width, i.height).add(s.markerGroup), u.currentSymbol = o)), !g.styledMode && u && u.attr(s.pointAttribs(this, t))), u && (u[t && this.isInside ? "show" : "hide"](), u.element.point = this);
                                t = n.halo, n = (u = this.graphic || u) && u.visibility || "inherit", t && t.size && u && "hidden" !== n && !this.isCluster ? (m || (s.halo = m = g.renderer.path().add(u.parentGroup)), m.show()[e ? "animate" : "attr"]({
                                    d: this.haloPath(t.size)
                                }), m.attr({
                                    class: "highcharts-halo highcharts-color-" + y(this.colorIndex, s.colorIndex) + (this.className ? " " + this.className : ""),
                                    visibility: n,
                                    zIndex: -1
                                }), m.point = this, g.styledMode || m.attr(d({
                                    fill: this.color || s.color,
                                    "fill-opacity": t.opacity
                                }, t.attributes))) : m && m.point && m.point.haloPath && m.animate({
                                    d: m.point.haloPath(0)
                                }, null, m.hide), p(this, "afterSetState")
                            }
                        },
                        haloPath: function(t) {
                            return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - t, this.plotY - t, 2 * t, 2 * t)
                        }
                    }), d(s.prototype, {
                        onMouseOver: function() {
                            var t = this.chart,
                                e = t.hoverSeries;
                            t.pointer.setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && p(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
                        },
                        onMouseOut: function() {
                            var t = this.options,
                                e = this.chart,
                                i = e.tooltip,
                                s = e.hoverPoint;
                            e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && p(this, "mouseOut"), !i || this.stickyTracking || i.shared && !this.noSharedTooltip || i.hide(), e.series.forEach((function(t) {
                                t.setState("", !0)
                            }))
                        },
                        setState: function(t, e) {
                            var i = this,
                                s = i.options,
                                o = i.graph,
                                n = s.inactiveOtherPoints,
                                r = s.states,
                                a = s.lineWidth,
                                h = s.opacity,
                                l = y(r[t || "normal"] && r[t || "normal"].animation, i.chart.options.chart.animation);
                            if (s = 0, t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach((function(e) {
                                    e && (i.state && e.removeClass("highcharts-series-" + i.state), t && e.addClass("highcharts-series-" + t))
                                })), i.state = t, !i.chart.styledMode)) {
                                if (r[t] && !1 === r[t].enabled) return;
                                if (t && (a = r[t].lineWidth || a + (r[t].lineWidthPlus || 0), h = y(r[t].opacity, h)), o && !o.dashstyle)
                                    for (r = {
                                            "stroke-width": a
                                        }, o.animate(r, l); i["zone-graph-" + s];) i["zone-graph-" + s].attr(r), s += 1;
                                n || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach((function(t) {
                                    t && t.animate({
                                        opacity: h
                                    }, l)
                                }))
                            }
                            e && n && i.points && i.setAllPointsToState(t)
                        },
                        setAllPointsToState: function(t) {
                            this.points.forEach((function(e) {
                                e.setState && e.setState(t)
                            }))
                        },
                        setVisible: function(t, e) {
                            var i = this,
                                s = i.chart,
                                o = i.legendItem,
                                n = s.options.chart.ignoreHiddenSeries,
                                r = i.visible,
                                a = (i.visible = t = i.options.visible = i.userOptions.visible = "undefined" === typeof t ? !r : t) ? "show" : "hide";
                            ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((function(t) {
                                i[t] && i[t][a]()
                            })), s.hoverSeries !== i && (s.hoverPoint && s.hoverPoint.series) !== i || i.onMouseOut(), o && s.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && s.series.forEach((function(t) {
                                t.options.stacking && t.visible && (t.isDirty = !0)
                            })), i.linkedSeries.forEach((function(e) {
                                e.setVisible(t, !1)
                            })), n && (s.isDirtyBox = !0), p(i, a), !1 !== e && s.redraw()
                        },
                        show: function() {
                            this.setVisible(!0)
                        },
                        hide: function() {
                            this.setVisible(!1)
                        },
                        select: function(t) {
                            this.selected = t = this.options.selected = "undefined" === typeof t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), p(this, t ? "select" : "unselect")
                        },
                        drawTracker: M.drawTrackerGraph
                    })
                })), e(i, "parts/Responsive.js", [i["parts/Chart.js"], i["parts/Utilities.js"]], (function(t, e) {
                    var i = e.find,
                        s = e.isArray,
                        o = e.isObject,
                        n = e.merge,
                        r = e.objectEach,
                        a = e.pick,
                        h = e.splat,
                        l = e.uniqueKey;
                    t.prototype.setResponsive = function(t, e) {
                        var s = this.options.responsive,
                            o = [],
                            r = this.currentResponsive;
                        !e && s && s.rules && s.rules.forEach((function(t) {
                            "undefined" === typeof t._id && (t._id = l()), this.matchResponsiveRule(t, o)
                        }), this), e = n.apply(0, o.map((function(t) {
                            return i(s.rules, (function(e) {
                                return e._id === t
                            })).chartOptions
                        }))), e.isResponsiveOptions = !0, o = o.toString() || void 0, o !== (r && r.ruleIds) && (r && this.update(r.undoOptions, t, !0), o ? (r = this.currentOptions(e), r.isResponsiveOptions = !0, this.currentResponsive = {
                            ruleIds: o,
                            mergedOptions: e,
                            undoOptions: r
                        }, this.update(e, t, !0)) : this.currentResponsive = void 0)
                    }, t.prototype.matchResponsiveRule = function(t, e) {
                        var i = t.condition;
                        (i.callback || function() {
                            return this.chartWidth <= a(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= a(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= a(i.minWidth, 0) && this.chartHeight >= a(i.minHeight, 0)
                        }).call(this) && e.push(t._id)
                    }, t.prototype.currentOptions = function(t) {
                        function e(t, n, a, l) {
                            var c;
                            r(t, (function(t, r) {
                                if (!l && -1 < i.collectionsWithUpdate.indexOf(r))
                                    for (t = h(t), a[r] = [], c = 0; c < Math.max(t.length, n[r].length); c++) n[r][c] && (void 0 === t[c] ? a[r][c] = n[r][c] : (a[r][c] = {}, e(t[c], n[r][c], a[r][c], l + 1)));
                                else o(t) ? (a[r] = s(t) ? [] : {}, e(t, n[r] || {}, a[r], l + 1)) : a[r] = "undefined" === typeof n[r] ? null : n[r]
                            }))
                        }
                        var i = this,
                            n = {};
                        return e(t, this.options, n, 0), n
                    }
                })), e(i, "masters/highcharts.src.js", [i["parts/Globals.js"]], (function(t) {
                    return t
                })), i["masters/highcharts.src.js"]._modules = i, i["masters/highcharts.src.js"]
            }))
        }
    }
]);
//# sourceMappingURL=chunk-c7059232.3c053406.js.map