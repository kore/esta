    /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
     * Build: http://modernizr.com/download/#-inlinesvg-svg-svgclippaths-touch-shiv-mq-cssclasses-teststyles-prefixes-ie8compat-load
     */
    window.Modernizr = function(e, t, n) {
        function r(e) {
            d.cssText = e
        }
        function i(e, t) {
            return r(g.join(e + ";") + (t || ""))
        }
        function s(e, t) {
            return typeof e === t
        }
        function o(e, t) {
            return!!~("" + e).indexOf(t)
        }
        function u(e, t, r) {
            for (var i in e) {
                var o = t[e[i]];
                if (o !== n)
                    return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
            }
            return!1
        }
        var a = "2.6.2", f = {}, l = !0, c = t.documentElement, h = "modernizr", p = t.createElement(h), d = p.style, v, m = {}.toString, g = " -webkit- -moz- -o- -ms- ".split(" "), y = {svg: "http://www.w3.org/2000/svg"}, b = {}, w = {}, E = {}, S = [], x = S.slice, T, N = function(e, n, r, i) {
            var s, o, u, a, f = t.createElement("div"), l = t.body, p = l || t.createElement("body");
            if (parseInt(r, 10))
                while (r--)
                    u = t.createElement("div"), u.id = i ? i[r] : h + (r + 1), f.appendChild(u);
            return s = ["&#173;", '<style id="s', h, '">', e, "</style>"].join(""), f.id = h, (l ? f : p).innerHTML += s, p.appendChild(f), l || (p.style.background = "", p.style.overflow = "hidden", a = c.style.overflow, c.style.overflow = "hidden", c.appendChild(p)), o = n(f, e), l ? f.parentNode.removeChild(f) : (p.parentNode.removeChild(p), c.style.overflow = a), !!o
        }, C = function(t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n)
                return n(t).matches;
            var r;
            return N("@media " + t + " { #" + h + " { position: absolute; } }", function(t) {
                r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
            }), r
        }, k = {}.hasOwnProperty, L;
        !s(k, "undefined") && !s(k.call, "undefined") ? L = function(e, t) {
            return k.call(e, t)
        } : L = function(e, t) {
            return t in e && s(e.constructor.prototype[t], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if (typeof t != "function")
                throw new TypeError;
            var n = x.call(arguments, 1), r = function() {
                if (this instanceof r) {
                    var i = function() {
                    };
                    i.prototype = t.prototype;
                    var s = new i, o = t.apply(s, n.concat(x.call(arguments)));
                    return Object(o) === o ? o : s
                }
                return t.apply(e, n.concat(x.call(arguments)))
            };
            return r
        }), b.touch = function() {
            var n;
            return"ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : N(["@media (", g.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = e.offsetTop === 9
            }), n
        }, b.svg = function() {
            return!!t.createElementNS && !!t.createElementNS(y.svg, "svg").createSVGRect
        }, b.inlinesvg = function() {
            var e = t.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == y.svg
        }, b.svgclippaths = function() {
            return!!t.createElementNS && /SVGClipPath/.test(m.call(t.createElementNS(y.svg, "clipPath")))
        };
        for (var A in b)
            L(b, A) && (T = A.toLowerCase(), f[T] = b[A](), S.push((f[T] ? "" : "no-") + T));
        return f.addTest = function(e, t) {
            if (typeof e == "object")
                for (var r in e)
                    L(e, r) && f.addTest(r, e[r]);
            else {
                e = e.toLowerCase();
                if (f[e] !== n)
                    return f;
                t = typeof t == "function" ? t() : t, typeof l != "undefined" && l && (c.className += " " + (t ? "" : "no-") + e), f[e] = t
            }
            return f
        }, r(""), p = v = null, function(e, t) {
            function n(e, t) {
                var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
            }
            function r() {
                var e = g.elements;
                return typeof e == "string" ? e.split(" ") : e
            }
            function i(e) {
                var t = v[e[p]];
                return t || (t = {}, d++, e[p] = d, v[d] = t), t
            }
            function s(e, n, r) {
                n || (n = t);
                if (m)
                    return n.createElement(e);
                r || (r = i(n));
                var s;
                return r.cache[e] ? s = r.cache[e].cloneNode() : c.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !l.test(e) ? r.frag.appendChild(s) : s
            }
            function o(e, n) {
                e || (e = t);
                if (m)
                    return e.createDocumentFragment();
                n = n || i(e);
                var s = n.frag.cloneNode(), o = 0, u = r(), a = u.length;
                for (; o < a; o++)
                    s.createElement(u[o]);
                return s
            }
            function u(e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                    return g.shivMethods ? s(n, e, t) : t.createElem(n)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(g, t.frag)
            }
            function a(e) {
                e || (e = t);
                var r = i(e);
                return g.shivCSS && !h && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), m || u(e, r), e
            }
            var f = e.html5 || {}, l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h, p = "_html5shiv", d = 0, v = {}, m;
            (function() {
                try {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>", h = "hidden"in e, m = e.childNodes.length == 1 || function() {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                    }()
                } catch (n) {
                    h = !0, m = !0
                }
            })();
            var g = {elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: f.shivCSS !== !1, supportsUnknownElements: m, shivMethods: f.shivMethods !== !1, type: "default", shivDocument: a, createElement: s, createDocumentFragment: o};
            e.html5 = g, a(t)
        }(this, t), f._version = a, f._prefixes = g, f.mq = C, f.testStyles = N, c.className = c.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (l ? " js " + S.join(" ") : ""), f
    }(this, this.document), function(e, t, n) {
        function r(e) {
            return"[object Function]" == d.call(e)
        }
        function i(e) {
            return"string" == typeof e
        }
        function s() {
        }
        function o(e) {
            return!e || "loaded" == e || "complete" == e || "uninitialized" == e
        }
        function u() {
            var e = v.shift();
            m = 1, e ? e.t ? h(function() {
                ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), u()) : m = 0
        }
        function a(e, n, r, i, s, a, f) {
            function l(t) {
                if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                    "img" != e && h(function() {
                        b.removeChild(c)
                    }, 50);
                    for (var r in T[n])
                        T[n].hasOwnProperty(r) && T[n][r].onload()
                }
            }
            var f = f || k.errorTimeout, c = t.createElement(e), d = 0, g = 0, w = {t: r, s: n, e: s, a: a, x: f};
            1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function() {
                l.call(this, g)
            }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
        }
        function f(e, t, n, r, s) {
            return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
        }
        function l() {
            var e = k;
            return e.loader = {load: f, i: 0}, e
        }
        var c = t.documentElement, h = e.setTimeout, p = t.getElementsByTagName("script")[0], d = {}.toString, v = [], m = 0, g = "MozAppearance"in c.style, y = g && !!t.createRange().compareNode, b = y ? c : p.parentNode, c = e.opera && "[object Opera]" == d.call(e.opera), c = !!t.attachEvent && !c, w = g ? "object" : c ? "script" : "img", E = c ? "script" : w, S = Array.isArray || function(e) {
            return"[object Array]" == d.call(e)
        }, x = [], T = {}, N = {timeout: function(e, t) {
                return t.length && (e.timeout = t[0]), e
            }}, C, k;
        k = function(e) {
            function t(e) {
                var e = e.split("!"), t = x.length, n = e.pop(), r = e.length, n = {url: n, origUrl: n, prefixes: e}, i, s, o;
                for (s = 0; s < r; s++)
                    o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
                for (s = 0; s < t; s++)
                    n = x[s](n);
                return n
            }
            function o(e, i, s, o, u) {
                var a = t(e), f = a.autoCallback;
                a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function() {
                    l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
                })))
            }
            function u(e, t) {
                function n(e, n) {
                    if (e) {
                        if (i(e))
                            n || (f = function() {
                                var e = [].slice.call(arguments);
                                l.apply(this, e), c()
                            }), o(e, f, t, 0, u);
                        else if (Object(e) === e)
                            for (p in h = function() {
                                var t = 0, n;
                                for (n in e)
                                    e.hasOwnProperty(n) && t++;
                                return t
                            }(), e)
                                e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function() {
                                    var e = [].slice.call(arguments);
                                    l.apply(this, e), c()
                                } : f[p] = function(e) {
                                    return function() {
                                        var t = [].slice.call(arguments);
                                        e && e.apply(this, t), c()
                                    }
                                }(l[p])), o(e[p], f, t, p, u))
                    } else
                        !n && c()
                }
                var u = !!e.test, a = e.load || e.both, f = e.callback || s, l = f, c = e.complete || s, h, p;
                n(u ? e.yep : e.nope, !!a), a && n(a)
            }
            var a, f, c = this.yepnope.loader;
            if (i(e))
                o(e, 0, c, 0);
            else if (S(e))
                for (a = 0; a < e.length; a++)
                    f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
            else
                Object(e) === e && u(e, c)
        }, k.addPrefix = function(e, t) {
            N[e] = t
        }, k.addFilter = function(e) {
            x.push(e)
        }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function() {
            t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
        }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function(e, n, r, i, a, f) {
            var l = t.createElement("script"), c, d, i = i || k.errorTimeout;
            l.src = e;
            for (d in r)
                l.setAttribute(d, r[d]);
            n = f ? u : n || s, l.onreadystatechange = l.onload = function() {
                !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
            }, h(function() {
                c || (c = 1, n(1))
            }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
        }, e.yepnope.injectCss = function(e, n, r, i, o, a) {
            var i = t.createElement("link"), f, n = a ? u : n || s;
            i.href = e, i.rel = "stylesheet", i.type = "text/css";
            for (f in r)
                i.setAttribute(f, r[f]);
            o || (p.parentNode.insertBefore(i, p), h(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest("ie8compat", function() {
        return!window.addEventListener && document.documentMode && document.documentMode === 7
    });
    /*!
     * jQuery JavaScript Library v1.9.0
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2013-1-14
     */
    (function(e, t) {
        "use strict";
        function _(e) {
            var t = e.length, n = y.type(e);
            return y.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
        }
        function P(e) {
            var t = D[e] = {};
            return y.each(e.match(w) || [], function(e, n) {
                t[n] = !0
            }), t
        }
        function j(e, n, r, i) {
            if (!y.acceptData(e))
                return;
            var s, o, u = y.expando, a = typeof n == "string", l = e.nodeType, c = l ? y.cache : e, h = l ? e[u] : e[u] && u;
            if ((!h || !c[h] || !i && !c[h].data) && a && r === t)
                return;
            h || (l ? e[u] = h = f.pop() || y.guid++ : h = u), c[h] || (c[h] = {}, l || (c[h].toJSON = y.noop));
            if (typeof n == "object" || typeof n == "function")
                i ? c[h] = y.extend(c[h], n) : c[h].data = y.extend(c[h].data, n);
            return s = c[h], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[y.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[y.camelCase(n)])) : o = s, o
        }
        function F(e, t, n) {
            if (!y.acceptData(e))
                return;
            var r, i, s, o = e.nodeType, u = o ? y.cache : e, a = o ? e[y.expando] : y.expando;
            if (!u[a])
                return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    y.isArray(t) ? t = t.concat(y.map(t, y.camelCase)) : t in r ? t = [t] : (t = y.camelCase(t), t in r ? t = [t] : t = t.split(" "));
                    for (i = 0, s = t.length; i < s; i++)
                        delete r[t[i]];
                    if (!(n ? q : y.isEmptyObject)(r))
                        return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!q(u[a]))
                    return
            }
            o ? y.cleanData([e], !0) : y.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        }
        function I(e, n, r) {
            if (r === t && e.nodeType === 1) {
                var i = "data-" + n.replace(B, "-$1").toLowerCase();
                r = e.getAttribute(i);
                if (typeof r == "string") {
                    try {
                        r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : H.test(r) ? y.parseJSON(r) : r
                    } catch (s) {
                    }
                    y.data(e, n, r)
                } else
                    r = t
            }
            return r
        }
        function q(e) {
            var t;
            for (t in e) {
                if (t === "data" && y.isEmptyObject(e[t]))
                    continue;
                if (t !== "toJSON")
                    return!1
            }
            return!0
        }
        function nt() {
            return!0
        }
        function rt() {
            return!1
        }
        function ft(e, t) {
            do
                e = e[t];
            while (e && e.nodeType !== 1);
            return e
        }
        function lt(e, t, n) {
            t = t || 0;
            if (y.isFunction(t))
                return y.grep(e, function(e, r) {
                    var i = !!t.call(e, r, e);
                    return i === n
                });
            if (t.nodeType)
                return y.grep(e, function(e) {
                    return e === t === n
                });
            if (typeof t == "string") {
                var r = y.grep(e, function(e) {
                    return e.nodeType === 1
                });
                if (ot.test(t))
                    return y.filter(t, r, !n);
                t = y.filter(t, r)
            }
            return y.grep(e, function(e) {
                return y.inArray(e, t) >= 0 === n
            })
        }
        function ct(e) {
            var t = ht.split("|"), n = e.createDocumentFragment();
            if (n.createElement)
                while (t.length)
                    n.createElement(t.pop());
            return n
        }
        function At(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }
        function Ot(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type, e
        }
        function Mt(e) {
            var t = Tt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }
        function _t(e, t) {
            var n, r = 0;
            for (; (n = e[r]) != null; r++)
                y._data(n, "globalEval", !t || y._data(t[r], "globalEval"))
        }
        function Dt(e, t) {
            if (t.nodeType !== 1 || !y.hasData(e))
                return;
            var n, r, i, s = y._data(e), o = y._data(t, s), u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; r < i; r++)
                        y.event.add(t, n, u[n][r])
            }
            o.data && (o.data = y.extend({}, o.data))
        }
        function Pt(e, t) {
            var n, r, i;
            if (t.nodeType !== 1)
                return;
            n = t.nodeName.toLowerCase();
            if (!y.support.noCloneEvent && t[y.expando]) {
                r = y._data(t);
                for (i in r.events)
                    y.removeEvent(t, i, r.handle);
                t.removeAttribute(y.expando)
            }
            if (n === "script" && t.text !== e.text)
                Ot(t).text = e.text, Mt(t);
            else if (n === "object")
                t.parentNode && (t.outerHTML = e.outerHTML), y.support.html5Clone && e.innerHTML && !y.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
            else if (n === "input" && Et.test(e.type))
                t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
            else if (n === "option")
                t.defaultSelected = t.selected = e.defaultSelected;
            else if (n === "input" || n === "textarea")
                t.defaultValue = e.defaultValue
        }
        function Ht(e, n) {
            var r, i, s = 0, o = typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll(n || "*") : t;
            if (!o)
                for (o = [], r = e.childNodes || e; (i = r[s]) != null; s++)
                    !n || y.nodeName(i, n) ? o.push(i) : y.merge(o, Ht(i, n));
            return n === t || n && y.nodeName(e, n) ? y.merge([e], o) : o
        }
        function Bt(e) {
            Et.test(e.type) && (e.defaultChecked = e.checked)
        }
        function Zt(e, t) {
            if (t in e)
                return t;
            var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Yt.length;
            while (i--) {
                t = Yt[i] + n;
                if (t in e)
                    return t
            }
            return r
        }
        function en(e, t) {
            return e = t || e, y.css(e, "display") === "none" || !y.contains(e.ownerDocument, e)
        }
        function tn(e, t) {
            var n, r = [], i = 0, s = e.length;
            for (; i < s; i++) {
                n = e[i];
                if (!n.style)
                    continue;
                r[i] = y._data(n, "olddisplay"), t ? (!r[i] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && en(n) && (r[i] = y._data(n, "olddisplay", on(n.nodeName)))) : !r[i] && !en(n) && y._data(n, "olddisplay", y.css(n, "display"))
            }
            for (i = 0; i < s; i++) {
                n = e[i];
                if (!n.style)
                    continue;
                if (!t || n.style.display === "none" || n.style.display === "")
                    n.style.display = t ? r[i] || "" : "none"
            }
            return e
        }
        function nn(e, t, n) {
            var r = Xt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }
        function rn(e, t, n, r, i) {
            var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0;
            for (; s < 4; s += 2)
                n === "margin" && (o += y.css(e, n + Gt[s], !0, i)), r ? (n === "content" && (o -= y.css(e, "padding" + Gt[s], !0, i)), n !== "margin" && (o -= y.css(e, "border" + Gt[s] + "Width", !0, i))) : (o += y.css(e, "padding" + Gt[s], !0, i), n !== "padding" && (o += y.css(e, "border" + Gt[s] + "Width", !0, i)));
            return o
        }
        function sn(e, t, n) {
            var r = !0, i = t === "width" ? e.offsetWidth : e.offsetHeight, s = Ft(e), o = y.support.boxSizing && y.css(e, "boxSizing", !1, s) === "border-box";
            if (i <= 0 || i == null) {
                i = jt(e, t, s);
                if (i < 0 || i == null)
                    i = e.style[t];
                if (Vt.test(i))
                    return i;
                r = o && (y.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + rn(e, t, n || (o ? "border" : "content"), r, s) + "px"
        }
        function on(e) {
            var t = i, n = Jt[e];
            if (!n) {
                n = un(e, t);
                if (n === "none" || !n)
                    It = (It || y("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), It.detach();
                Jt[e] = n
            }
            return n
        }
        function un(e, t) {
            var n = y(t.createElement(e)).appendTo(t.body), r = y.css(n[0], "display");
            return n.remove(), r
        }
        function pn(e, t, n, r) {
            var i;
            if (y.isArray(t))
                y.each(t, function(t, i) {
                    n || fn.test(e) ? r(e, i) : pn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
                });
            else if (!n && y.type(t) === "object")
                for (i in t)
                    pn(e + "[" + i + "]", t[i], n, r);
            else
                r(e, t)
        }
        function On(e) {
            return function(t, n) {
                typeof t != "string" && (n = t, t = "*");
                var r, i = 0, s = t.toLowerCase().match(w) || [];
                if (y.isFunction(n))
                    while (r = s[i++])
                        r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function Mn(e, t, n, r) {
            function o(u) {
                var a;
                return i[u] = !0, y.each(e[u] || [], function(e, u) {
                    var f = u(t, n, r);
                    if (typeof f == "string" && !s && !i[f])
                        return t.dataTypes.unshift(f), o(f), !1;
                    if (s)
                        return!(a = f)
                }), a
            }
            var i = {}, s = e === kn;
            return o(t.dataTypes[0]) || !i["*"] && o("*")
        }
        function _n(e, n) {
            var r, i, s = y.ajaxSettings.flatOptions || {};
            for (r in n)
                n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
            return i && y.extend(!0, e, i), e
        }
        function Dn(e, n, r) {
            var i, s, o, u, a = e.contents, f = e.dataTypes, l = e.responseFields;
            for (s in l)
                s in r && (n[l[s]] = r[s]);
            while (f[0] === "*")
                f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
            if (i)
                for (s in a)
                    if (a[s] && a[s].test(i)) {
                        f.unshift(s);
                        break
                    }
            if (f[0]in r)
                o = f[0];
            else {
                for (s in r) {
                    if (!f[0] || e.converters[s + " " + f[0]]) {
                        o = s;
                        break
                    }
                    u || (u = s)
                }
                o = o || u
            }
            if (o)
                return o !== f[0] && f.unshift(o), r[o]
        }
        function Pn(e, t) {
            var n, r, i, s, o = {}, u = 0, a = e.dataTypes.slice(), f = a[0];
            e.dataFilter && (t = e.dataFilter(t, e.dataType));
            if (a[1])
                for (n in e.converters)
                    o[n.toLowerCase()] = e.converters[n];
            for (; i = a[++u]; )
                if (i !== "*") {
                    if (f !== "*" && f !== i) {
                        n = o[f + " " + i] || o["* " + i];
                        if (!n)
                            for (r in o) {
                                s = r.split(" ");
                                if (s[1] === i) {
                                    n = o[f + " " + s[0]] || o["* " + s[0]];
                                    if (n) {
                                        n === !0 ? n = o[r] : o[r] !== !0 && (i = s[0], a.splice(u--, 0, i));
                                        break
                                    }
                                }
                            }
                        if (n !== !0)
                            if (n && e["throws"])
                                t = n(t);
                            else
                                try {
                                    t = n(t)
                                } catch (l) {
                                    return{state: "parsererror", error: n ? l : "No conversion from " + f + " to " + i}
                                }
                    }
                    f = i
                }
            return{state: "success", data: t}
        }
        function Rn() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {
            }
        }
        function Un() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
            }
        }
        function Qn() {
            return setTimeout(function() {
                zn = t
            }), zn = y.now()
        }
        function Gn(e, t) {
            y.each(t, function(t, n) {
                var r = (Kn[t] || []).concat(Kn["*"]), i = 0, s = r.length;
                for (; i < s; i++)
                    if (r[i].call(e, t, n))
                        return
            })
        }
        function Yn(e, t, n) {
            var r, i, s = 0, o = Jn.length, u = y.Deferred().always(function() {
                delete a.elem
            }), a = function() {
                if (i)
                    return!1;
                var t = zn || Qn(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length;
                for (; o < a; o++)
                    f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
            }, f = u.promise({elem: e, props: y.extend({}, t), opts: y.extend(!0, {specialEasing: {}}, n), originalProperties: t, originalOptions: n, startTime: zn || Qn(), duration: n.duration, tweens: [], createTween: function(t, n) {
                    var r = y.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                }, stop: function(t) {
                    var n = 0, r = t ? f.tweens.length : 0;
                    if (i)
                        return this;
                    i = !0;
                    for (; n < r; n++)
                        f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }}), l = f.props;
            Zn(l, f.opts.specialEasing);
            for (; s < o; s++) {
                r = Jn[s].call(f, e, l, f.opts);
                if (r)
                    return r
            }
            return Gn(f, l), y.isFunction(f.opts.start) && f.opts.start.call(e, f), y.fx.timer(y.extend(a, {elem: e, anim: f, queue: f.opts.queue})), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
        }
        function Zn(e, t) {
            var n, r, i, s, o;
            for (n in e) {
                r = y.camelCase(n), i = t[r], s = e[n], y.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = y.cssHooks[r];
                if (o && "expand"in o) {
                    s = o.expand(s), delete e[r];
                    for (n in s)
                        n in e || (e[n] = s[n], t[n] = i)
                } else
                    t[r] = i
            }
        }
        function er(e, t, n) {
            var r, i, s, o, u, a, f, l, c, h = this, p = e.style, d = {}, v = [], m = e.nodeType && en(e);
            n.queue || (l = y._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
                l.unqueued || c()
            }), l.unqueued++, h.always(function() {
                h.always(function() {
                    l.unqueued--, y.queue(e, "fx").length || l.empty.fire()
                })
            })), e.nodeType === 1 && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], y.css(e, "display") === "inline" && y.css(e, "float") === "none" && (!y.support.inlineBlockNeedsLayout || on(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", y.support.shrinkWrapBlocks || h.done(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (r in t) {
                s = t[r];
                if (Xn.exec(s)) {
                    delete t[r], a = a || s === "toggle";
                    if (s === (m ? "hide" : "show"))
                        continue;
                    v.push(r)
                }
            }
            o = v.length;
            if (o) {
                u = y._data(e, "fxshow") || y._data(e, "fxshow", {}), "hidden"in u && (m = u.hidden), a && (u.hidden = !m), m ? y(e).show() : h.done(function() {
                    y(e).hide()
                }), h.done(function() {
                    var t;
                    y._removeData(e, "fxshow");
                    for (t in d)
                        y.style(e, t, d[t])
                });
                for (r = 0; r < o; r++)
                    i = v[r], f = h.createTween(i, m ? u[i] : 0), d[i] = u[i] || y.style(e, i), i in u || (u[i] = f.start, m && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
            }
        }
        function tr(e, t, n, r, i) {
            return new tr.prototype.init(e, t, n, r, i)
        }
        function nr(e, t) {
            var n, r = {height: e}, i = 0;
            t = t ? 1 : 0;
            for (; i < 4; i += 2 - t)
                n = Gt[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }
        function rr(e) {
            return y.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
        }
        var n, r, i = e.document, s = e.location, o = e.jQuery, u = e.$, a = {}, f = [], l = "1.9.0", c = f.concat, h = f.push, p = f.slice, d = f.indexOf, v = a.toString, m = a.hasOwnProperty, g = l.trim, y = function(e, t) {
            return new y.fn.init(e, t, n)
        }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, S = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, T = /^[\],:{}\s]*$/, N = /(?:^|:|,)(?:\s*\[)+/g, C = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, k = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, L = /^-ms-/, A = /-([\da-z])/gi, O = function(e, t) {
            return t.toUpperCase()
        }, M = function() {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", M, !1), y.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", M), y.ready())
        };
        y.fn = y.prototype = {jquery: l, constructor: y, init: function(e, n, r) {
                var s, o;
                if (!e)
                    return this;
                if (typeof e == "string") {
                    e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = S.exec(e);
                    if (s && (s[1] || !n)) {
                        if (s[1]) {
                            n = n instanceof y ? n[0] : n, y.merge(this, y.parseHTML(s[1], n && n.nodeType ? n.ownerDocument || n : i, !0));
                            if (x.test(s[1]) && y.isPlainObject(n))
                                for (s in n)
                                    y.isFunction(this[s]) ? this[s](n[s]) : this.attr(s, n[s]);
                            return this
                        }
                        o = i.getElementById(s[2]);
                        if (o && o.parentNode) {
                            if (o.id !== s[2])
                                return r.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = i, this.selector = e, this
                    }
                    return!n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : y.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), y.makeArray(e, this))
            }, selector: "", length: 0, size: function() {
                return this.length
            }, toArray: function() {
                return p.call(this)
            }, get: function(e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            }, pushStack: function(e) {
                var t = y.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function(e, t) {
                return y.each(this, e, t)
            }, ready: function(e) {
                return y.ready.promise().done(e), this
            }, slice: function() {
                return this.pushStack(p.apply(this, arguments))
            }, first: function() {
                return this.eq(0)
            }, last: function() {
                return this.eq(-1)
            }, eq: function(e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, map: function(e) {
                return this.pushStack(y.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            }, end: function() {
                return this.prevObject || this.constructor(null)
            }, push: h, sort: [].sort, splice: [].splice}, y.fn.init.prototype = y.fn, y.extend = y.fn.extend = function() {
            var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
            typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !y.isFunction(u) && (u = {}), f === a && (u = this, --a);
            for (; a < f; a++)
                if ((e = arguments[a]) != null)
                    for (n in e) {
                        r = u[n], i = e[n];
                        if (u === i)
                            continue;
                        l && i && (y.isPlainObject(i) || (s = y.isArray(i))) ? (s ? (s = !1, o = r && y.isArray(r) ? r : []) : o = r && y.isPlainObject(r) ? r : {}, u[n] = y.extend(l, o, i)) : i !== t && (u[n] = i)
                    }
            return u
        }, y.extend({noConflict: function(t) {
                return e.$ === y && (e.$ = u), t && e.jQuery === y && (e.jQuery = o), y
            }, isReady: !1, readyWait: 1, holdReady: function(e) {
                e ? y.readyWait++ : y.ready(!0)
            }, ready: function(e) {
                if (e === !0 ? --y.readyWait : y.isReady)
                    return;
                if (!i.body)
                    return setTimeout(y.ready);
                y.isReady = !0;
                if (e !== !0 && --y.readyWait > 0)
                    return;
                r.resolveWith(i, [y]), y.fn.trigger && y(i).trigger("ready").off("ready")
            }, isFunction: function(e) {
                return y.type(e) === "function"
            }, isArray: Array.isArray || function(e) {
                return y.type(e) === "array"
            }, isWindow: function(e) {
                return e != null && e == e.window
            }, isNumeric: function(e) {
                return!isNaN(parseFloat(e)) && isFinite(e)
            }, type: function(e) {
                return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? a[v.call(e)] || "object" : typeof e
            }, isPlainObject: function(e) {
                if (!e || y.type(e) !== "object" || e.nodeType || y.isWindow(e))
                    return!1;
                try {
                    if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf"))
                        return!1
                } catch (n) {
                    return!1
                }
                var r;
                for (r in e)
                    ;
                return r === t || m.call(e, r)
            }, isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return!1;
                return!0
            }, error: function(e) {
                throw new Error(e)
            }, parseHTML: function(e, t, n) {
                if (!e || typeof e != "string")
                    return null;
                typeof t == "boolean" && (n = t, t = !1), t = t || i;
                var r = x.exec(e), s = !n && [];
                return r ? [t.createElement(r[1])] : (r = y.buildFragment([e], t, s), s && y(s).remove(), y.merge([], r.childNodes))
            }, parseJSON: function(t) {
                if (e.JSON && e.JSON.parse)
                    return e.JSON.parse(t);
                if (t === null)
                    return t;
                if (typeof t == "string") {
                    t = y.trim(t);
                    if (t && T.test(t.replace(C, "@").replace(k, "]").replace(N, "")))
                        return(new Function("return " + t))()
                }
                y.error("Invalid JSON: " + t)
            }, parseXML: function(n) {
                var r, i;
                if (!n || typeof n != "string")
                    return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (s) {
                    r = t
                }
                return(!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && y.error("Invalid XML: " + n), r
            }, noop: function() {
            }, globalEval: function(t) {
                t && y.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            }, camelCase: function(e) {
                return e.replace(L, "ms-").replace(A, O)
            }, nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function(e, t, n) {
                var r, i = 0, s = e.length, o = _(e);
                if (n)
                    if (o)
                        for (; i < s; i++) {
                            r = t.apply(e[i], n);
                            if (r === !1)
                                break
                        }
                    else
                        for (i in e) {
                            r = t.apply(e[i], n);
                            if (r === !1)
                                break
                        }
                else if (o)
                    for (; i < s; i++) {
                        r = t.call(e[i], i, e[i]);
                        if (r === !1)
                            break
                    }
                else
                    for (i in e) {
                        r = t.call(e[i], i, e[i]);
                        if (r === !1)
                            break
                    }
                return e
            }, trim: g && !g.call("﻿ ") ? function(e) {
                return e == null ? "" : g.call(e)
            } : function(e) {
                return e == null ? "" : (e + "").replace(E, "")
            }, makeArray: function(e, t) {
                var n = t || [];
                return e != null && (_(Object(e)) ? y.merge(n, typeof e == "string" ? [e] : e) : h.call(n, e)), n
            }, inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (d)
                        return d.call(t, e, n);
                    r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                    for (; n < r; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return-1
            }, merge: function(e, n) {
                var r = n.length, i = e.length, s = 0;
                if (typeof r == "number")
                    for (; s < r; s++)
                        e[i++] = n[s];
                else
                    while (n[s] !== t)
                        e[i++] = n[s++];
                return e.length = i, e
            }, grep: function(e, t, n) {
                var r, i = [], s = 0, o = e.length;
                n = !!n;
                for (; s < o; s++)
                    r = !!t(e[s], s), n !== r && i.push(e[s]);
                return i
            }, map: function(e, t, n) {
                var r, i = 0, s = e.length, o = _(e), u = [];
                if (o)
                    for (; i < s; i++)
                        r = t(e[i], i, n), r != null && (u[u.length] = r);
                else
                    for (i in e)
                        r = t(e[i], i, n), r != null && (u[u.length] = r);
                return c.apply([], u)
            }, guid: 1, proxy: function(e, n) {
                var r, i, s;
                return typeof n == "string" && (r = e[n], n = e, e = r), y.isFunction(e) ? (i = p.call(arguments, 2), s = function() {
                    return e.apply(n || this, i.concat(p.call(arguments)))
                }, s.guid = e.guid = e.guid || y.guid++, s) : t
            }, access: function(e, n, r, i, s, o, u) {
                var a = 0, f = e.length, l = r == null;
                if (y.type(r) === "object") {
                    s = !0;
                    for (a in r)
                        y.access(e, n, a, r[a], !0, o, u)
                } else if (i !== t) {
                    s = !0, y.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                        return l.call(y(e), n)
                    }));
                    if (n)
                        for (; a < f; a++)
                            n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
                }
                return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
            }, now: function() {
                return(new Date).getTime()
            }}), y.ready.promise = function(t) {
            if (!r) {
                r = y.Deferred();
                if (i.readyState === "complete")
                    setTimeout(y.ready);
                else if (i.addEventListener)
                    i.addEventListener("DOMContentLoaded", M, !1), e.addEventListener("load", y.ready, !1);
                else {
                    i.attachEvent("onreadystatechange", M), e.attachEvent("onload", y.ready);
                    var n = !1;
                    try {
                        n = e.frameElement == null && i.documentElement
                    } catch (s) {
                    }
                    n && n.doScroll && function o() {
                        if (!y.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(o, 50)
                            }
                            y.ready()
                        }
                    }()
                }
            }
            return r.promise(t)
        }, y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            a["[object " + t + "]"] = t.toLowerCase()
        }), n = y(i);
        var D = {};
        y.Callbacks = function(e) {
            e = typeof e == "string" ? D[e] || P(e) : y.extend({}, e);
            var n, r, i, s, o, u, a = [], f = !e.once && [], l = function(t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++)
                    if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            }, c = {add: function() {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            y.each(t, function(t, n) {
                                var i = y.type(n);
                                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                }, remove: function() {
                    return a && y.each(arguments, function(e, t) {
                        var n;
                        while ((n = y.inArray(t, a, n)) > - 1)
                            a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                }, has: function(e) {
                    return y.inArray(e, a) > -1
                }, empty: function() {
                    return a = [], this
                }, disable: function() {
                    return a = f = n = t, this
                }, disabled: function() {
                    return!a
                }, lock: function() {
                    return f = t, n || c.disable(), this
                }, locked: function() {
                    return!f
                }, fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                }, fire: function() {
                    return c.fireWith(this, arguments), this
                }, fired: function() {
                    return!!r
                }};
            return c
        }, y.extend({Deferred: function(e) {
                var t = [["resolve", "done", y.Callbacks("once memory"), "resolved"], ["reject", "fail", y.Callbacks("once memory"), "rejected"], ["notify", "progress", y.Callbacks("memory")]], n = "pending", r = {state: function() {
                        return n
                    }, always: function() {
                        return i.done(arguments).fail(arguments), this
                    }, then: function() {
                        var e = arguments;
                        return y.Deferred(function(n) {
                            y.each(t, function(t, s) {
                                var o = s[0], u = y.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = u && u.apply(this, arguments);
                                    e && y.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function(e) {
                        return e != null ? y.extend(e, r) : r
                    }}, i = {};
                return r.pipe = r.then, y.each(t, function(e, s) {
                    var o = s[2], u = s[3];
                    r[s[1]] = o.add, u && o.add(function() {
                        n = u
                    }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
                        return i[s[0] + "With"](this === i ? r : this, arguments), this
                    }, i[s[0] + "With"] = o.fireWith
                }), r.promise(i), e && e.call(i, i), i
            }, when: function(e) {
                var t = 0, n = p.call(arguments), r = n.length, i = r !== 1 || e && y.isFunction(e.promise) ? r : 0, s = i === 1 ? e : y.Deferred(), o = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? p.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                }, u, a, f;
                if (r > 1) {
                    u = new Array(r), a = new Array(r), f = new Array(r);
                    for (; t < r; t++)
                        n[t] && y.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
                }
                return i || s.resolveWith(f, n), s.promise()
            }}), y.support = function() {
            var t, n, r, s, o, u, a, f, l, c, h = i.createElement("div");
            h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*"), r = h.getElementsByTagName("a")[0];
            if (!n || !r || !n.length)
                return{};
            s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = h.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {getSetAttribute: h.className !== "t", leadingWhitespace: h.firstChild.nodeType === 3, tbody: !h.getElementsByTagName("tbody").length, htmlSerialize: !!h.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: r.getAttribute("href") === "/a", opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: !!u.value, optSelected: o.selected, enctype: !!i.createElement("form").enctype, html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", boxModel: i.compatMode === "CSS1Compat", deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1}, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
            try {
                delete h.test
            } catch (p) {
                t.deleteExpando = !1
            }
            u = i.createElement("input"), u.setAttribute("value", ""), t.input = u.getAttribute("value") === "", u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "t"), u.setAttribute("name", "t"), a = i.createDocumentFragment(), a.appendChild(u), t.appendChecked = u.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, h.attachEvent && (h.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), h.cloneNode(!0).click());
            for (c in{submit:!0, change:!0, focusin:!0})
                h.setAttribute(f = "on" + c, "t"), t[c + "Bubbles"] = f in e || h.attributes[f].expando === !1;
            return h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = h.style.backgroundClip === "content-box", y(function() {
                var n, r, s, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", u = i.getElementsByTagName("body")[0];
                if (!u)
                    return;
                n = i.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = h.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = l && s[0].offsetHeight === 0, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = h.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = u.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(h, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(h, null) || {width: "4px"}).width === "4px", r = h.appendChild(i.createElement("div")), r.style.cssText = h.style.cssText = o, r.style.marginRight = r.style.width = "0", h.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof h.style.zoom != "undefined" && (h.innerHTML = "", h.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = h.offsetWidth === 3, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", t.shrinkWrapBlocks = h.offsetWidth !== 3, u.style.zoom = 1), u.removeChild(n), n = h = s = r = null
            }), n = s = a = o = r = u = null, t
        }();
        var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, B = /([A-Z])/g;
        y.extend({cache: {}, expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function(e) {
                return e = e.nodeType ? y.cache[e[y.expando]] : e[y.expando], !!e && !q(e)
            }, data: function(e, t, n) {
                return j(e, t, n, !1)
            }, removeData: function(e, t) {
                return F(e, t, !1)
            }, _data: function(e, t, n) {
                return j(e, t, n, !0)
            }, _removeData: function(e, t) {
                return F(e, t, !0)
            }, acceptData: function(e) {
                var t = e.nodeName && y.noData[e.nodeName.toLowerCase()];
                return!t || t !== !0 && e.getAttribute("classid") === t
            }}), y.fn.extend({data: function(e, n) {
                var r, i, s = this[0], o = 0, u = null;
                if (e === t) {
                    if (this.length) {
                        u = y.data(s);
                        if (s.nodeType === 1 && !y._data(s, "parsedAttrs")) {
                            r = s.attributes;
                            for (; o < r.length; o++)
                                i = r[o].name, i.indexOf("data-") || (i = y.camelCase(i.substring(5)), I(s, i, u[i]));
                            y._data(s, "parsedAttrs", !0)
                        }
                    }
                    return u
                }
                return typeof e == "object" ? this.each(function() {
                    y.data(this, e)
                }) : y.access(this, function(n) {
                    if (n === t)
                        return s ? I(s, e, y.data(s, e)) : null;
                    this.each(function() {
                        y.data(this, e, n)
                    })
                }, null, n, arguments.length > 1, null, !0)
            }, removeData: function(e) {
                return this.each(function() {
                    y.removeData(this, e)
                })
            }}), y.extend({queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue", r = y._data(e, t), n && (!r || y.isArray(n) ? r = y._data(e, t, y.makeArray(n)) : r.push(n)), r || []
            }, dequeue: function(e, t) {
                t = t || "fx";
                var n = y.queue(e, t), r = n.length, i = n.shift(), s = y._queueHooks(e, t), o = function() {
                    y.dequeue(e, t)
                };
                i === "inprogress" && (i = n.shift(), r--), s.cur = i, i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
            }, _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return y._data(e, n) || y._data(e, n, {empty: y.Callbacks("once memory").add(function() {
                        y._removeData(e, t + "queue"), y._removeData(e, n)
                    })})
            }}), y.fn.extend({queue: function(e, n) {
                var r = 2;
                return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? y.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = y.queue(this, e, n);
                    y._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && y.dequeue(this, e)
                })
            }, dequeue: function(e) {
                return this.each(function() {
                    y.dequeue(this, e)
                })
            }, delay: function(e, t) {
                return e = y.fx ? y.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            }, clearQueue: function(e) {
                return this.queue(e || "fx", [])
            }, promise: function(e, n) {
                var r, i = 1, s = y.Deferred(), o = this, u = this.length, a = function() {
                    --i || s.resolveWith(o, [o])
                };
                typeof e != "string" && (n = e, e = t), e = e || "fx";
                while (u--)
                    r = y._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
                return a(), s.promise(n)
            }});
        var R, U, z = /[\t\r\n]/g, W = /\r/g, X = /^(?:input|select|textarea|button|object)$/i, V = /^(?:a|area)$/i, $ = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, J = /^(?:checked|selected)$/i, K = y.support.getSetAttribute, Q = y.support.input;
        y.fn.extend({attr: function(e, t) {
                return y.access(this, y.attr, e, t, arguments.length > 1)
            }, removeAttr: function(e) {
                return this.each(function() {
                    y.removeAttr(this, e)
                })
            }, prop: function(e, t) {
                return y.access(this, y.prop, e, t, arguments.length > 1)
            }, removeProp: function(e) {
                return e = y.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {
                    }
                })
            }, addClass: function(e) {
                var t, n, r, i, s, o = 0, u = this.length, a = typeof e == "string" && e;
                if (y.isFunction(e))
                    return this.each(function(t) {
                        y(this).addClass(e.call(this, t, this.className))
                    });
                if (a) {
                    t = (e || "").match(w) || [];
                    for (; o < u; o++) {
                        n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(z, " ") : " ");
                        if (r) {
                            s = 0;
                            while (i = t[s++])
                                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            n.className = y.trim(r)
                        }
                    }
                }
                return this
            }, removeClass: function(e) {
                var t, n, r, i, s, o = 0, u = this.length, a = arguments.length === 0 || typeof e == "string" && e;
                if (y.isFunction(e))
                    return this.each(function(t) {
                        y(this).removeClass(e.call(this, t, this.className))
                    });
                if (a) {
                    t = (e || "").match(w) || [];
                    for (; o < u; o++) {
                        n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(z, " ") : "");
                        if (r) {
                            s = 0;
                            while (i = t[s++])
                                while (r.indexOf(" " + i + " ") >= 0)
                                    r = r.replace(" " + i + " ", " ");
                            n.className = e ? y.trim(r) : ""
                        }
                    }
                }
                return this
            }, toggleClass: function(e, t) {
                var n = typeof e, r = typeof t == "boolean";
                return y.isFunction(e) ? this.each(function(n) {
                    y(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if (n === "string") {
                        var i, s = 0, o = y(this), u = t, a = e.match(w) || [];
                        while (i = a[s++])
                            u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                    } else if (n === "undefined" || n === "boolean")
                        this.className && y._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : y._data(this, "__className__") || ""
                })
            }, hasClass: function(e) {
                var t = " " + e + " ", n = 0, r = this.length;
                for (; n < r; n++)
                    if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(z, " ").indexOf(t) >= 0)
                        return!0;
                return!1
            }, val: function(e) {
                var n, r, i, s = this[0];
                if (!arguments.length) {
                    if (s)
                        return n = y.valHooks[s.type] || y.valHooks[s.nodeName.toLowerCase()], n && "get"in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(W, "") : r == null ? "" : r);
                    return
                }
                return i = y.isFunction(e), this.each(function(r) {
                    var s, o = y(this);
                    if (this.nodeType !== 1)
                        return;
                    i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : y.isArray(s) && (s = y.map(s, function(e) {
                        return e == null ? "" : e + ""
                    })), n = y.valHooks[this.type] || y.valHooks[this.nodeName.toLowerCase()];
                    if (!n || !("set"in n) || n.set(this, s, "value") === t)
                        this.value = s
                })
            }}), y.extend({valHooks: {option: {get: function(e) {
                        var t = e.attributes.value;
                        return!t || t.specified ? e.value : e.text
                    }}, select: {get: function(e) {
                        var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                        for (; a < u; a++) {
                            n = r[a];
                            if ((n.selected || a === i) && (y.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !y.nodeName(n.parentNode, "optgroup"))) {
                                t = y(n).val();
                                if (s)
                                    return t;
                                o.push(t)
                            }
                        }
                        return o
                    }, set: function(e, t) {
                        var n = y.makeArray(t);
                        return y(e).find("option").each(function() {
                            this.selected = y.inArray(y(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }}}, attr: function(e, n, r) {
                var i, s, o, u = e.nodeType;
                if (!e || u === 3 || u === 8 || u === 2)
                    return;
                if (typeof e.getAttribute == "undefined")
                    return y.prop(e, n, r);
                o = u !== 1 || !y.isXMLDoc(e), o && (n = n.toLowerCase(), s = y.attrHooks[n] || ($.test(n) ? U : R));
                if (r === t)
                    return s && o && "get"in s && (i = s.get(e, n)) !== null ? i : (typeof e.getAttribute != "undefined" && (i = e.getAttribute(n)), i == null ? t : i);
                if (r !== null)
                    return s && o && "set"in s && (i = s.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r);
                y.removeAttr(e, n)
            }, removeAttr: function(e, t) {
                var n, r, i = 0, s = t && t.match(w);
                if (s && e.nodeType === 1)
                    while (n = s[i++])
                        r = y.propFix[n] || n, $.test(n) ? !K && J.test(n) ? e[y.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : y.attr(e, n, ""), e.removeAttribute(K ? n : r)
            }, attrHooks: {type: {set: function(e, t) {
                        if (!y.support.radioValue && t === "radio" && y.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function(e, n, r) {
                var i, s, o, u = e.nodeType;
                if (!e || u === 3 || u === 8 || u === 2)
                    return;
                return o = u !== 1 || !y.isXMLDoc(e), o && (n = y.propFix[n] || n, s = y.propHooks[n]), r !== t ? s && "set"in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get"in s && (i = s.get(e, n)) !== null ? i : e[n]
            }, propHooks: {tabIndex: {get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : X.test(e.nodeName) || V.test(e.nodeName) && e.href ? 0 : t
                    }}}}), U = {get: function(e, n) {
                var r = y.prop(e, n), i = typeof r == "boolean" && e.getAttribute(n), s = typeof r == "boolean" ? Q && K ? i != null : J.test(n) ? e[y.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
                return s && s.value !== !1 ? n.toLowerCase() : t
            }, set: function(e, t, n) {
                return t === !1 ? y.removeAttr(e, n) : Q && K || !J.test(n) ? e.setAttribute(!K && y.propFix[n] || n, n) : e[y.camelCase("default-" + n)] = e[n] = !0, n
            }};
        if (!Q || !K)
            y.attrHooks.value = {get: function(e, n) {
                    var r = e.getAttributeNode(n);
                    return y.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
                }, set: function(e, t, n) {
                    if (!y.nodeName(e, "input"))
                        return R && R.set(e, t, n);
                    e.defaultValue = t
                }};
        K || (R = y.valHooks.button = {get: function(e, n) {
                var r = e.getAttributeNode(n);
                return r && (n === "id" || n === "name" || n === "coords" ? r.value !== "" : r.specified) ? r.value : t
            }, set: function(e, n, r) {
                var i = e.getAttributeNode(r);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.
                        value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
            }}, y.attrHooks.contenteditable = {get: R.get, set: function(e, t, n) {
                R.set(e, t === "" ? !1 : t, n)
            }}, y.each(["width", "height"], function(e, t) {
            y.attrHooks[t] = y.extend(y.attrHooks[t], {set: function(e, n) {
                    if (n === "")
                        return e.setAttribute(t, "auto"), n
                }})
        })), y.support.hrefNormalized || (y.each(["href", "src", "width", "height"], function(e, n) {
            y.attrHooks[n] = y.extend(y.attrHooks[n], {get: function(e) {
                    var r = e.getAttribute(n, 2);
                    return r == null ? t : r
                }})
        }), y.each(["href", "src"], function(e, t) {
            y.propHooks[t] = {get: function(e) {
                    return e.getAttribute(t, 4)
                }}
        })), y.support.style || (y.attrHooks.style = {get: function(e) {
                return e.style.cssText || t
            }, set: function(e, t) {
                return e.style.cssText = t + ""
            }}), y.support.optSelected || (y.propHooks.selected = y.extend(y.propHooks.selected, {get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }})), y.support.enctype || (y.propFix.enctype = "encoding"), y.support.checkOn || y.each(["radio", "checkbox"], function() {
            y.valHooks[this] = {get: function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }}
        }), y.each(["radio", "checkbox"], function() {
            y.valHooks[this] = y.extend(y.valHooks[this], {set: function(e, t) {
                    if (y.isArray(t))
                        return e.checked = y.inArray(y(e).val(), t) >= 0
                }})
        });
        var G = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|contextmenu)|click/, et = /^(?:focusinfocus|focusoutblur)$/, tt = /^([^.]*)(?:\.(.+)|)$/;
        y.event = {global: {}, add: function(e, n, r, i, s) {
                var o, u, a, f, l, c, h, p, d, v, m, g = e.nodeType !== 3 && e.nodeType !== 8 && y._data(e);
                if (!g)
                    return;
                r.handler && (o = r, r = o.handler, s = o.selector), r.guid || (r.guid = y.guid++), (f = g.events) || (f = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                    return typeof y == "undefined" || !!e && y.event.triggered === e.type ? t : y.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), n = (n || "").match(w) || [""], l = n.length;
                while (l--) {
                    a = tt.exec(n[l]) || [], d = m = a[1], v = (a[2] || "").split(".").sort(), h = y.event.special[d] || {}, d = (s ? h.delegateType : h.bindType) || d, h = y.event.special[d] || {}, c = y.extend({type: d, origType: m, data: i, handler: r, guid: r.guid, selector: s, needsContext: s && y.expr.match.needsContext.test(s), namespace: v.join(".")}, o);
                    if (!(p = f[d])) {
                        p = f[d] = [], p.delegateCount = 0;
                        if (!h.setup || h.setup.call(e, i, v, u) === !1)
                            e.addEventListener ? e.addEventListener(d, u, !1) : e.attachEvent && e.attachEvent("on" + d, u)
                    }
                    h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = r.guid)), s ? p.splice(p.delegateCount++, 0, c) : p.push(c), y.event.global[d] = !0
                }
                e = null
            }, remove: function(e, t, n, r, i) {
                var s, o, u, a, f, l, c, h, p, d, v, m = y.hasData(e) && y._data(e);
                if (!m || !(a = m.events))
                    return;
                t = (t || "").match(w) || [""], f = t.length;
                while (f--) {
                    u = tt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                    if (!p) {
                        for (p in a)
                            y.event.remove(e, p + t[f], n, r, !0);
                        continue
                    }
                    c = y.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = a[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length;
                    while (s--)
                        l = h[s], (i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector) && (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
                    o && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && y.removeEvent(e, p, m.handle), delete a[p])
                }
                y.isEmptyObject(a) && (delete m.handle, y._removeData(e, "events"))
            }, trigger: function(n, r, s, o) {
                var u, a, f, l, c, h, p, d = [s || i], v = n.type || n, m = n.namespace ? n.namespace.split(".") : [];
                a = f = s = s || i;
                if (s.nodeType === 3 || s.nodeType === 8)
                    return;
                if (et.test(v + y.event.triggered))
                    return;
                v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), c = v.indexOf(":") < 0 && "on" + v, n = n[y.expando] ? n : new y.Event(v, typeof n == "object" && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = s), r = r == null ? [n] : y.makeArray(r, [n]), p = y.event.special[v] || {};
                if (!o && p.trigger && p.trigger.apply(s, r) === !1)
                    return;
                if (!o && !p.noBubble && !y.isWindow(s)) {
                    l = p.delegateType || v, et.test(l + v) || (a = a.parentNode);
                    for (; a; a = a.parentNode)
                        d.push(a), f = a;
                    f === (s.ownerDocument || i) && d.push(f.defaultView || f.parentWindow || e)
                }
                u = 0;
                while ((a = d[u++]) && !n.isPropagationStopped())
                    n.type = u > 1 ? l : p.bindType || v, h = (y._data(a, "events") || {})[n.type] && y._data(a, "handle"), h && h.apply(a, r), h = c && a[c], h && y.acceptData(a) && h.apply && h.apply(a, r) === !1 && n.preventDefault();
                n.type = v;
                if (!o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (v !== "click" || !y.nodeName(s, "a")) && y.acceptData(s) && c && s[v] && !y.isWindow(s)) {
                    f = s[c], f && (s[c] = null), y.event.triggered = v;
                    try {
                        s[v]()
                    } catch (g) {
                    }
                    y.event.triggered = t, f && (s[c] = f)
                }
                return n.result
            }, dispatch: function(e) {
                e = y.event.fix(e);
                var n, r, i, s, o, u = [], a = p.call(arguments), f = (y._data(this, "events") || {})[e.type] || [], l = y.event.special[e.type] || {};
                a[0] = e, e.delegateTarget = this;
                if (l.preDispatch && l.preDispatch.call(this, e) === !1)
                    return;
                u = y.event.handlers.call(this, e, f), n = 0;
                while ((s = u[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, r = 0;
                    while ((o = s.handlers[r++]) && !e.isImmediatePropagationStopped())
                        if (!e.namespace_re || e.namespace_re.test(o.namespace))
                            e.handleObj = o, e.data = o.data, i = ((y.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation())
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }, handlers: function(e, n) {
                var r, i, s, o, u = [], a = n.delegateCount, f = e.target;
                if (a && f.nodeType && (!e.button || e.type !== "click"))
                    for (; f != this; f = f.parentNode || this)
                        if (f.disabled !== !0 || e.type !== "click") {
                            i = [];
                            for (r = 0; r < a; r++)
                                o = n[r], s = o.selector + " ", i[s] === t && (i[s] = o.needsContext ? y(s, this).index(f) >= 0 : y.find(s, this, null, [f]).length), i[s] && i.push(o);
                            i.length && u.push({elem: f, handlers: i})
                        }
                return a < n.length && u.push({elem: this, handlers: n.slice(a)}), u
            }, fix: function(e) {
                if (e[y.expando])
                    return e;
                var t, n, r = e, s = y.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
                e = new y.Event(r), t = o.length;
                while (t--)
                    n = o[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
            }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function(e, t) {
                    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, n) {
                    var r, s, o, u = n.button, a = n.fromElement;
                    return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                }}, special: {load: {noBubble: !0}, click: {trigger: function() {
                        if (y.nodeName(this, "input") && this.type === "checkbox" && this.click)
                            return this.click(), !1
                    }}, focus: {trigger: function() {
                        if (this !== i.activeElement && this.focus)
                            try {
                                return this.focus(), !1
                            } catch (e) {
                            }
                    }, delegateType: "focusin"}, blur: {trigger: function() {
                        if (this === i.activeElement && this.blur)
                            return this.blur(), !1
                    }, delegateType: "focusout"}, beforeunload: {postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }}}, simulate: function(e, t, n, r) {
                var i = y.extend(new y.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                r ? y.event.trigger(i, null, t) : y.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }}, y.removeEvent = i.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
        }, y.Event = function(e, t) {
            if (!(this instanceof y.Event))
                return new y.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? nt : rt) : this.type = e, t && y.extend(this, t), this.timeStamp = e && e.timeStamp || y.now(), this[y.expando] = !0
        }, y.Event.prototype = {isDefaultPrevented: rt, isPropagationStopped: rt, isImmediatePropagationStopped: rt, preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = nt;
                if (!e)
                    return;
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }, stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = nt;
                if (!e)
                    return;
                e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
            }, stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = nt, this.stopPropagation()
            }}, y.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function(e, t) {
            y.event.special[e] = {delegateType: t, bindType: t, handle: function(e) {
                    var n, r = this, i = e.relatedTarget, s = e.handleObj;
                    if (!i || i !== r && !y.contains(r, i))
                        e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                    return n
                }}
        }), y.support.submitBubbles || (y.event.special.submit = {setup: function() {
                if (y.nodeName(this, "form"))
                    return!1;
                y.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target, r = y.nodeName(n, "input") || y.nodeName(n, "button") ? n.form : t;
                    r && !y._data(r, "submitBubbles") && (y.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), y._data(r, "submitBubbles", !0))
                })
            }, postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && y.event.simulate("submit", this.parentNode, e, !0))
            }, teardown: function() {
                if (y.nodeName(this, "form"))
                    return!1;
                y.event.remove(this, "._submit")
            }}), y.support.changeBubbles || (y.event.special.change = {setup: function() {
                if (G.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio")
                        y.event.add(this, "propertychange._change", function(e) {
                            e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }), y.event.add(this, "click._change", function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1), y.event.simulate("change", this, e, !0)
                        });
                    return!1
                }
                y.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    G.test(t.nodeName) && !y._data(t, "changeBubbles") && (y.event.add(t, "change._change", function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && y.event.simulate("change", this.parentNode, e, !0)
                    }), y._data(t, "changeBubbles", !0))
                })
            }, handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                    return e.handleObj.handler.apply(this, arguments)
            }, teardown: function() {
                return y.event.remove(this, "._change"), !G.test(this.nodeName)
            }}), y.support.focusinBubbles || y.each({focus: "focusin", blur: "focusout"}, function(e, t) {
            var n = 0, r = function(e) {
                y.event.simulate(t, e.target, y.event.fix(e), !0)
            };
            y.event.special[t] = {setup: function() {
                    n++ === 0 && i.addEventListener(e, r, !0)
                }, teardown: function() {
                    --n === 0 && i.removeEventListener(e, r, !0)
                }}
        }), y.fn.extend({on: function(e, n, r, i, s) {
                var o, u;
                if (typeof e == "object") {
                    typeof n != "string" && (r = r || n, n = t);
                    for (u in e)
                        this.on(u, n, r, e[u], s);
                    return this
                }
                r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                if (i === !1)
                    i = rt;
                else if (!i)
                    return this;
                return s === 1 && (o = i, i = function(e) {
                    return y().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = y.guid++)), this.each(function() {
                    y.event.add(this, e, i, r, n)
                })
            }, one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            }, off: function(e, n, r) {
                var i, s;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj, y(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if (typeof e == "object") {
                    for (s in e)
                        this.off(s, n, e[s]);
                    return this
                }
                if (n === !1 || typeof n == "function")
                    r = n, n = t;
                return r === !1 && (r = rt), this.each(function() {
                    y.event.remove(this, e, r, n)
                })
            }, bind: function(e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function(e, t) {
                return this.off(e, null, t)
            }, delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            }, undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            }, trigger: function(e, t) {
                return this.each(function() {
                    y.event.trigger(e, t, this)
                })
            }, triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return y.event.trigger(e, t, n, !0)
            }, hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }}), y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            y.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, Y.test(t) && (y.event.fixHooks[t] = y.event.keyHooks), Z.test(t) && (y.event.fixHooks[t] = y.event.mouseHooks)
        }), function(e, t) {
            function rt(e) {
                return J.test(e + "")
            }
            function it() {
                var e, t = [];
                return e = function(n, r) {
                    return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
                }
            }
            function st(e) {
                return e[w] = !0, e
            }
            function ot(e) {
                var t = c.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return!1
                } finally {
                    t = null
                }
            }
            function ut(e, t, n, r) {
                var i, s, o, u, a, f, h, v, m, y;
                (t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [];
                if (!e || typeof e != "string")
                    return n;
                if ((u = t.nodeType) !== 1 && u !== 9)
                    return[];
                if (!p && !r) {
                    if (i = K.exec(e))
                        if (o = i[1]) {
                            if (u === 9) {
                                s = t.getElementById(o);
                                if (!s || !s.parentNode)
                                    return n;
                                if (s.id === o)
                                    return n.push(s), n
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o)
                                return n.push(s), n
                        } else {
                            if (i[2])
                                return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                            if ((o = i[3]) && S.getByClassName && t.getElementsByClassName)
                                return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n
                        }
                    if (S.qsa && !d.test(e)) {
                        h = !0, v = w, m = t, y = u === 9 && e;
                        if (u === 1 && t.nodeName.toLowerCase() !== "object") {
                            f = ht(e), (h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", a = f.length;
                            while (a--)
                                f[a] = v + pt(f[a]);
                            m = $.test(e) && t.parentNode || t, y = f.join(",")
                        }
                        if (y)
                            try {
                                return _.apply(n, D.call(m.querySelectorAll(y), 0)), n
                            } catch (b) {
                            } finally {
                                h || t.removeAttribute("id")
                            }
                    }
                }
                return Et(e.replace(R, "$1"), t, n, r)
            }
            function at(e, t) {
                var n = e && t && e.nextSibling;
                for (; n; n = n.nextSibling)
                    if (n === t)
                        return-1;
                return e ? 1 : -1
            }
            function ft(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            }
            function lt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return(n === "input" || n === "button") && t.type === e
                }
            }
            function ct(e) {
                return st(function(t) {
                    return t = +t, st(function(n, r) {
                        var i, s = e([], n.length, t), o = s.length;
                        while (o--)
                            n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function ht(e, t) {
                var n, r, s, o, u, a, f, l = C[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                u = e, a = [], f = i.preFilter;
                while (u) {
                    if (!n || (r = U.exec(u)))
                        r && (u = u.slice(r[0].length) || u), a.push(s = []);
                    n = !1;
                    if (r = z.exec(u))
                        n = r.shift(), s.push({value: n, type: r[0].replace(R, " ")}), u = u.slice(n.length);
                    for (o in i.filter)
                        (r = V[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), s.push({value: n, type: o, matches: r}), u = u.slice(n.length));
                    if (!n)
                        break
                }
                return t ? u.length : u ? ut.error(e) : C(e, a).slice(0)
            }
            function pt(e) {
                var t = 0, n = e.length, r = "";
                for (; t < n; t++)
                    r += e[t].value;
                return r
            }
            function dt(e, t, n) {
                var i = t.dir, s = n && t.dir === "parentNode", o = T++;
                return t.first ? function(t, n, r) {
                    while (t = t[i])
                        if (t.nodeType === 1 || s)
                            return e(t, n, r)
                } : function(t, n, u) {
                    var a, f, l, c = x + " " + o;
                    if (u) {
                        while (t = t[i])
                            if (t.nodeType === 1 || s)
                                if (e(t, n, u))
                                    return!0
                    } else
                        while (t = t[i])
                            if (t.nodeType === 1 || s) {
                                l = t[w] || (t[w] = {});
                                if ((f = l[i]) && f[0] === c) {
                                    if ((a = f[1]) === !0 || a === r)
                                        return a === !0
                                } else {
                                    f = l[i] = [c], f[1] = e(t, n, u) || r;
                                    if (f[1] === !0)
                                        return!0
                                }
                            }
                }
            }
            function vt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r))
                            return!1;
                    return!0
                } : e[0]
            }
            function mt(e, t, n, r, i) {
                var s, o = [], u = 0, a = e.length, f = t != null;
                for (; u < a; u++)
                    if (s = e[u])
                        if (!n || n(s, r, i))
                            o.push(s), f && t.push(u);
                return o
            }
            function gt(e, t, n, r, i, s) {
                return r && !r[w] && (r = gt(r)), i && !i[w] && (i = gt(i, s)), st(function(s, o, u, a) {
                    var f, l, c, h = [], p = [], d = o.length, v = s || wt(t || "*", u.nodeType ? [u] : u, []), m = e && (s || !t) ? mt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                    n && n(m, g, u, a);
                    if (r) {
                        f = mt(g, p), r(f, [], u, a), l = f.length;
                        while (l--)
                            if (c = f[l])
                                g[p[l]] = !(m[p[l]] = c)
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)
                                    (c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)
                                (c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                        }
                    } else
                        g = mt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
                })
            }
            function yt(e) {
                var t, n, r, s = e.length, o = i.relative[e[0].type], u = o || i.relative[" "], a = o ? 1 : 0, l = dt(function(e) {
                    return e === t
                }, u, !0), c = dt(function(e) {
                    return P.call(t, e) > -1
                }, u, !0), h = [function(e, n, r) {
                        return!o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }];
                for (; a < s; a++)
                    if (n = i.relative[e[a].type])
                        h = [dt(vt(h), n)];
                    else {
                        n = i.filter[e[a].type].apply(null, e[a].matches);
                        if (n[w]) {
                            r = ++a;
                            for (; r < s; r++)
                                if (i.relative[e[r].type])
                                    break;
                            return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, a < r && yt(e.slice(a, r)), r < s && yt(e = e.slice(r)), r < s && pt(e))
                        }
                        h.push(n)
                    }
                return vt(h)
            }
            function bt(e, t) {
                var n = 0, s = t.length > 0, o = e.length > 0, u = function(u, a, l, h, p) {
                    var d, v, m, g = [], y = 0, b = "0", w = u && [], E = p != null, S = f, T = u || o && i.find.TAG("*", p && a.parentNode || a), N = x += S == null ? 1 : Math.E;
                    E && (f = a !== c && a, r = n);
                    for (; (d = T[b]) != null; b++) {
                        if (o && d) {
                            for (v = 0; m = e[v]; v++)
                                if (m(d, a, l)) {
                                    h.push(d);
                                    break
                                }
                            E && (x = N, r = ++n)
                        }
                        s && ((d = !m && d) && y--, u && w.push(d))
                    }
                    y += b;
                    if (s && b !== y) {
                        for (v = 0; m = t[v]; v++)
                            m(w, g, a, l);
                        if (u) {
                            if (y > 0)
                                while (b--)
                                    !w[b] && !g[b] && (g[b] = M.call(h));
                            g = mt(g)
                        }
                        _.apply(h, g), E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h)
                    }
                    return E && (x = N, f = S), w
                };
                return s ? st(u) : u
            }
            function wt(e, t, n) {
                var r = 0, i = t.length;
                for (; r < i; r++)
                    ut(e, t[r], n);
                return n
            }
            function Et(e, t, n, r) {
                var s, o, a, f, l, c = ht(e);
                if (!r && c.length === 1) {
                    o = c[0] = c[0].slice(0);
                    if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !p && i.relative[o[1].type]) {
                        t = i.find.ID(a.matches[0].replace(et, tt), t)[0];
                        if (!t)
                            return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (s = V.needsContext.test(e) ? -1 : o.length - 1; s >= 0; s--) {
                        a = o[s];
                        if (i.relative[f = a.type])
                            break;
                        if (l = i.find[f])
                            if (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t)) {
                                o.splice(s, 1), e = r.length && pt(o);
                                if (!e)
                                    return _.apply(n, D.call(r, 0)), n;
                                break
                            }
                    }
                }
                return u(e, c)(r, t, p, n, $.test(e)), n
            }
            function St() {
            }
            var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, b, w = "sizzle" + -(new Date), E = e.document, S = {}, x = 0, T = 0, N = it(), C = it(), k = it(), L = typeof t, A = 1 << 31, O = [], M = O.pop, _ = O.push, D = O.slice, P = O.indexOf || function(e) {
                var t = 0, n = this.length;
                for (; t < n; t++)
                    if (this[t] === e)
                        return t;
                return-1
            }, H = "[\\x20\\t\\r\\n\\f]", B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", j = B.replace("w", "w#"), F = "([*^$|!~]?=)", I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]", q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)", R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"), U = new RegExp("^" + H + "*," + H + "*"), z = new RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"), W = new RegExp(q), X = new RegExp("^" + j + "$"), V = {ID: new RegExp("^#(" + B + ")"), CLASS: new RegExp("^\\.(" + B + ")"), NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"), TAG: new RegExp("^(" + B.replace("w", "w*") + ")"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"), needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")}, $ = /[\x20\t\r\n\f]*[+~]/, J = /\{\s*\[native code\]\s*\}/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Y = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function(e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
            };
            try {
                D.call(h.childNodes, 0)[0].nodeType
            } catch (nt) {
                D = function(e) {
                    var t, n = [];
                    for (; t = this[e]; e++)
                        n.push(t);
                    return n
                }
            }
            o = ut.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }, l = ut.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : E;
                if (n === c || n.nodeType !== 9 || !n.documentElement)
                    return c;
                c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), S.attributes = ot(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }), S.getByClassName = ot(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                }), S.getByName = ot(function(e) {
                    e.id = w + 0, e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", h.insertBefore(e, h.firstChild);
                    var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
                    return S.getIdNotName = !n.getElementById(w), h.removeChild(e), t
                }), i.attrHandle = ot(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#"
                }) ? {} : {href: function(e) {
                        return e.getAttribute("href", 2)
                    }, type: function(e) {
                        return e.getAttribute("type")
                    }}, S.getIdNotName ? (i.find.ID = function(e, t) {
                    if (typeof t.getElementById !== L && !p) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(et, tt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (i.find.ID = function(e, n) {
                    if (typeof n.getElementById !== L && !p) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(et, tt);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = S.tagNameNoComments ? function(e, t) {
                    if (typeof t.getElementsByTagName !== L)
                        return t.getElementsByTagName(e)
                } : function(e, t) {
                    var n, r = [], i = 0, s = t.getElementsByTagName(e);
                    if (e === "*") {
                        for (; n = s[i]; i++)
                            n.nodeType === 1 && r.push(n);
                        return r
                    }
                    return s
                }, i.find.NAME = S.getByName && function(e, t) {
                    if (typeof t.getElementsByName !== L)
                        return t.getElementsByName(name)
                }, i.find.CLASS = S.getByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== L && !p)
                        return t.getElementsByClassName(e)
                }, v = [], d = [":focus"];
                if (S.qsa = rt(n.querySelectorAll))
                    ot(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked")
                    }), ot(function(e) {
                        e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
                    });
                return(S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                    S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
                }), d = new RegExp(d.join("|")), v = new RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ? function(e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
                    return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e)
                                return!0;
                    return!1
                }, b = h.compareDocumentPosition ? function(e, t) {
                    var r;
                    if (e === t)
                        return a = !0, 0;
                    if (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t))
                        return r & 1 || e.parentNode && e.parentNode.nodeType === 11 ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : r & 4 ? -1 : 1;
                    return e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0, s = e.parentNode, o = t.parentNode, u = [e], f = [t];
                    if (e === t)
                        return a = !0, 0;
                    if (e.sourceIndex && t.sourceIndex)
                        return(~t.sourceIndex || A) - (g(E, e) && ~e.sourceIndex || A);
                    if (!s || !o)
                        return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
                    if (s === o)
                        return at(e, t);
                    r = e;
                    while (r = r.parentNode)
                        u.unshift(r);
                    r = t;
                    while (r = r.parentNode)
                        f.unshift(r);
                    while (u[i] === f[i])
                        i++;
                    return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0
                }, a = !1, [0, 0].sort(b), S.detectDuplicates = a, c
            }, ut.matches = function(e, t) {
                return ut(e, null, null, t)
            }, ut.matchesSelector = function(e, t) {
                (e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']");
                if (S.matchesSelector && !p && (!v || !v.test(t)) && !d.test(t))
                    try {
                        var n = m.call(e, t);
                        if (n || S.disconnectedMatch || e.document && e.document.nodeType !== 11)
                            return n
                    } catch (r) {
                    }
                return ut(t, c, null, [e]).length > 0
            }, ut.contains = function(e, t) {
                return(e.ownerDocument || e) !== c && l(e), g(e, t)
            }, ut.attr = function(e, t) {
                var n;
                return(e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, ut.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ut.uniqueSort = function(e) {
                var t, n = [], r = 1, i = 0;
                a = !S.detectDuplicates, e.sort(b);
                if (a) {
                    for (; t = e[r]; r++)
                        t === e[r - 1] && (i = n.push(r));
                    while (i--)
                        e.splice(n[i], 1)
                }
                return e
            }, s = ut.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (!i)
                    for (; t = e[r]; r++)
                        n += s(t);
                else if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string")
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += s(e)
                } else if (i === 3 || i === 4)
                    return e.nodeValue;
                return n
            }, i = ut.selectors = {cacheLength: 50, createPseudo: st, match: V, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function(e) {
                        return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ut.error(e[0]), e
                    }, PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }}, filter: {TAG: function(e) {
                        return e === "*" ? function() {
                            return!0
                        } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    }, CLASS: function(e) {
                        var t = N[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                        })
                    }, ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ut.attr(r, e);
                            return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.substr(i.length - n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.substr(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    }, CHILD: function(e, t, n, r, i) {
                        var s = e.slice(0, 3) !== "nth", o = e.slice(-4) !== "last", u = t === "of-type";
                        return r === 1 && i === 0 ? function(e) {
                            return!!e.parentNode
                        } : function(t, n, a) {
                            var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), y = !a && !u;
                            if (m) {
                                if (s) {
                                    while (v) {
                                        c = t;
                                        while (c = c[v])
                                            if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1)
                                                return!1;
                                        d = v = e === "only" && !d && "nextSibling"
                                    }
                                    return!0
                                }
                                d = [o ? m.firstChild : m.lastChild];
                                if (o && y) {
                                    l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if (c.nodeType === 1 && ++h && c === t) {
                                            l[e] = [x, p, h];
                                            break
                                        }
                                } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x)
                                    h = f[1];
                                else
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                            y && ((c[w] || (c[w] = {}))[e] = [x, h]);
                                            if (c === t)
                                                break
                                        }
                                return h -= i, h === r || h % r === 0 && h / r >= 0
                            }
                        }
                    }, PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                        return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                            var i, s = r(e, t), o = s.length;
                            while (o--)
                                i = P.call(e, s[o]), e[i] = !(n[i] = s[o])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }}, pseudos: {not: st(function(e) {
                        var t = [], n = [], r = u(e.replace(R, "$1"));
                        return r[w] ? st(function(e, t, n, i) {
                            var s, o = r(e, null, i, []), u = e.length;
                            while (u--)
                                if (s = o[u])
                                    e[u] = !(t[u] = s)
                        }) : function(e, i, s) {
                            return t[0] = e, r(t, null, s, n), !n.pop()
                        }
                    }), has: st(function(e) {
                        return function(t) {
                            return ut(e, t).length > 0
                        }
                    }), contains: st(function(e) {
                        return function(t) {
                            return(t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                    }), lang: st(function(e) {
                        return X.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function(t) {
                            var n;
                            do
                                if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)
                                    return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return!1
                        }
                    }), target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function(e) {
                        return e === h
                    }, focus: function(e) {
                        return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: function(e) {
                        return e.disabled === !1
                    }, disabled: function(e) {
                        return e.disabled === !0
                    }, checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    }, selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    }, empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4)
                                return!1;
                        return!0
                    }, parent: function(e) {
                        return!i.pseudos.empty(e)
                    }, header: function(e) {
                        return G.test(e.nodeName)
                    }, input: function(e) {
                        return Q.test(e.nodeName)
                    }, button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    }, text: function(e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                    }, first: ct(function() {
                        return[0]
                    }), last: ct(function(e, t) {
                        return[t - 1]
                    }), eq: ct(function(e, t, n) {
                        return[n < 0 ? n + t : n]
                    }), even: ct(function(e, t) {
                        var n = 0;
                        for (; n < t; n += 2)
                            e.push(n);
                        return e
                    }), odd: ct(function(e, t) {
                        var n = 1;
                        for (; n < t; n += 2)
                            e.push(n);
                        return e
                    }), lt: ct(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; --r >= 0; )
                            e.push(r);
                        return e
                    }), gt: ct(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; ++r < t; )
                            e.push(r);
                        return e
                    })}};
            for (n in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0})
                i.pseudos[n] = ft(n);
            for (n in{submit:!0, reset:!0})
                i.pseudos[n] = lt(n);
            u = ut.compile = function(e, t) {
                var n, r = [], i = [], s = k[e + " "];
                if (!s) {
                    t || (t = ht(e)), n = t.length;
                    while (n--)
                        s = yt(t[n]), s[w] ? r.push(s) : i.push(s);
                    s = k(e, bt(i, r))
                }
                return s
            }, i.pseudos.nth = i.pseudos.eq, i.filters = St.prototype = i.pseudos, i.setFilters = new St, l(), ut.attr = y.attr, y.find = ut, y.expr = ut.selectors, y.expr[":"] = y.expr.pseudos, y.unique = ut.uniqueSort, y.text = ut.getText, y.isXMLDoc = ut.isXML, y.contains = ut.contains
        }(e);
        var it = /Until$/, st = /^(?:parents|prev(?:Until|All))/, ot = /^.[^:#\[\.,]*$/, ut = y.expr.match.needsContext, at = {children: !0, contents: !0, next: !0, prev: !0};
        y.fn.extend({find: function(e) {
                var t, n, r;
                if (typeof e != "string")
                    return r = this, this.pushStack(y(e).filter(function() {
                        for (t = 0; t < r.length; t++)
                            if (y.contains(r[t], this))
                                return!0
                    }));
                n = [];
                for (t = 0; t < this.length; t++)
                    y.find(e, this[t], n);
                return n = this.pushStack(y.unique(n)), n.selector = (this.selector ? this.selector + " " : "") + e, n
            }, has: function(e) {
                var t, n = y(e, this), r = n.length;
                return this.filter(function() {
                    for (t = 0; t < r; t++)
                        if (y.contains(this, n[t]))
                            return!0
                })
            }, not: function(e) {
                return this.pushStack(lt(this, e, !1))
            }, filter: function(e) {
                return this.pushStack(lt(this, e, !0))
            }, is: function(e) {
                return!!e && (typeof e == "string" ? ut.test(e) ? y(e, this.context).index(this[0]) >= 0 : y.filter(e, this).length > 0 : this.filter(e).length > 0)
            }, closest: function(e, t) {
                var n, r = 0, i = this.length, s = [], o = ut.test(e) || typeof e != "string" ? y(e, t || this.context) : 0;
                for (; r < i; r++) {
                    n = this[r];
                    while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                        if (o ? o.index(n) > -1 : y.find.matchesSelector(n, e)) {
                            s.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                }
                return this.pushStack(s.length > 1 ? y.unique(s) : s)
            }, index: function(e) {
                return e ? typeof e == "string" ? y.inArray(this[0], y(e)) : y.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function(e, t) {
                var n = typeof e == "string" ? y(e, t) : y.makeArray(e && e.nodeType ? [e] : e), r = y.merge(this.get(), n);
                return this.pushStack(y.unique(r))
            }, addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }}), y.fn.andSelf = y.fn.addBack, y.each({parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            }, parents: function(e) {
                return y.dir(e, "parentNode")
            }, parentsUntil: function(e, t, n) {
                return y.dir(e, "parentNode", n)
            }, next: function(e) {
                return ft(e, "nextSibling")
            }, prev: function(e) {
                return ft(e, "previousSibling")
            }, nextAll: function(e) {
                return y.dir(e, "nextSibling")
            }, prevAll: function(e) {
                return y.dir(e, "previousSibling")
            }, nextUntil: function(e, t, n) {
                return y.dir(e, "nextSibling", n)
            }, prevUntil: function(e, t, n) {
                return y.dir(e, "previousSibling", n)
            }, siblings: function(e) {
                return y.sibling((e.parentNode || {}).firstChild, e)
            }, children: function(e) {
                return y.sibling(e.firstChild)
            }, contents: function(e) {
                return y.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : y.merge([], e.childNodes)
            }}, function(e, t) {
            y.fn[e] = function(n, r) {
                var i = y.map(this, t, n);
                return it.test(e) || (r = n), r && typeof r == "string" && (i = y.filter(r, i)), i = this.length > 1 && !at[e] ? y.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
            }
        }), y.extend({filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), t.length === 1 ? y.find.matchesSelector(t[0], e) ? [t[0]] : [] : y.find.matches(e, t)
            }, dir: function(e, n, r) {
                var i = [], s = e[n];
                while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !y(s).is(r)))
                    s.nodeType === 1 &&
                            i.push(s), s = s[n];
                return i
            }, sibling: function(e, t) {
                var n = [];
                for (; e; e = e.nextSibling)
                    e.nodeType === 1 && e !== t && n.push(e);
                return n
            }});
        var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", pt = / jQuery\d+="(?:null|\d+)"/g, dt = new RegExp("<(?:" + ht + ")[\\s/>]", "i"), vt = /^\s+/, mt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, gt = /<([\w:]+)/, yt = /<tbody/i, bt = /<|&#?\w+;/, wt = /<(?:script|style|link)/i, Et = /^(?:checkbox|radio)$/i, St = /checked\s*(?:[^=]|=\s*.checked.)/i, xt = /^$|\/(?:java|ecma)script/i, Tt = /^true\/(.*)/, Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ct = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: y.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, kt = ct(i), Lt = kt.appendChild(i.createElement("div"));
        Ct.optgroup = Ct.option, Ct.tbody = Ct.tfoot = Ct.colgroup = Ct.caption = Ct.thead, Ct.th = Ct.td, y.fn.extend({text: function(e) {
                return y.access(this, function(e) {
                    return e === t ? y.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
                }, null, e, arguments.length)
            }, wrapAll: function(e) {
                if (y.isFunction(e))
                    return this.each(function(t) {
                        y(this).wrapAll(e.call(this, t))
                    });
                if (this[0]) {
                    var t = y(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1)
                            e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function(e) {
                return y.isFunction(e) ? this.each(function(t) {
                    y(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = y(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function(e) {
                var t = y.isFunction(e);
                return this.each(function(n) {
                    y(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function() {
                return this.parent().each(function() {
                    y.nodeName(this, "body") || y(this).replaceWith(this.childNodes)
                }).end()
            }, append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e)
                })
            }, prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild)
                })
            }, before: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, remove: function(e, t) {
                var n, r = 0;
                for (; (n = this[r]) != null; r++)
                    if (!e || y.filter(e, [n]).length > 0)
                        !t && n.nodeType === 1 && y.cleanData(Ht(n)), n.parentNode && (t && y.contains(n.ownerDocument, n) && _t(Ht(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function() {
                var e, t = 0;
                for (; (e = this[t]) != null; t++) {
                    e.nodeType === 1 && y.cleanData(Ht(e, !1));
                    while (e.firstChild)
                        e.removeChild(e.firstChild);
                    e.options && y.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            }, clone: function(e, t) {
                return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                    return y.clone(this, e, t)
                })
            }, html: function(e) {
                return y.access(this, function(e) {
                    var n = this[0] || {}, r = 0, i = this.length;
                    if (e === t)
                        return n.nodeType === 1 ? n.innerHTML.replace(pt, "") : t;
                    if (typeof e == "string" && !wt.test(e) && (y.support.htmlSerialize || !dt.test(e)) && (y.support.leadingWhitespace || !vt.test(e)) && !Ct[(gt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(mt, "<$1></$2>");
                        try {
                            for (; r < i; r++)
                                n = this[r] || {}, n.nodeType === 1 && (y.cleanData(Ht(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (s) {
                        }
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function(e) {
                var t = y.isFunction(e);
                return!t && typeof e != "string" && (e = y(e).not(this).detach()), this.domManip([e], !0, function(e) {
                    var t = this.nextSibling, n = this.parentNode;
                    if (n && this.nodeType === 1 || this.nodeType === 11)
                        y(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e)
                })
            }, detach: function(e) {
                return this.remove(e, !0)
            }, domManip: function(e, n, r) {
                e = c.apply([], e);
                var i, s, o, u, a, f, l = 0, h = this.length, p = this, d = h - 1, v = e[0], m = y.isFunction(v);
                if (m || !(h <= 1 || typeof v != "string" || y.support.checkClone || !St.test(v)))
                    return this.each(function(i) {
                        var s = p.eq(i);
                        m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r)
                    });
                if (h) {
                    i = y.buildFragment(e, this[0].ownerDocument, !1, this), s = i.firstChild, i.childNodes.length === 1 && (i = s);
                    if (s) {
                        n = n && y.nodeName(s, "tr"), o = y.map(Ht(i, "script"), Ot), u = o.length;
                        for (; l < h; l++)
                            a = i, l !== d && (a = y.clone(a, !0, !0), u && y.merge(o, Ht(a, "script"))), r.call(n && y.nodeName(this[l], "table") ? At(this[l], "tbody") : this[l], a, l);
                        if (u) {
                            f = o[o.length - 1].ownerDocument, y.map(o, Mt);
                            for (l = 0; l < u; l++)
                                a = o[l], xt.test(a.type || "") && !y._data(a, "globalEval") && y.contains(f, a) && (a.src ? y.ajax({url: a.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0}) : y.globalEval((a.text || a.textContent || a.innerHTML || "").replace(Nt, "")))
                        }
                        i = s = null
                    }
                }
                return this
            }}), y.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function(e, t) {
            y.fn[e] = function(e) {
                var n, r = 0, i = [], s = y(e), o = s.length - 1;
                for (; r <= o; r++)
                    n = r === o ? this : this.clone(!0), y(s[r])[t](n), h.apply(i, n.get());
                return this.pushStack(i)
            }
        }), y.extend({clone: function(e, t, n) {
                var r, i, s, o, u, a = y.contains(e.ownerDocument, e);
                y.support.html5Clone || y.isXMLDoc(e) || !dt.test("<" + e.nodeName + ">") ? u = e.cloneNode(!0) : (Lt.innerHTML = e.outerHTML, Lt.removeChild(u = Lt.firstChild));
                if ((!y.support.noCloneEvent || !y.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !y.isXMLDoc(e)) {
                    r = Ht(u), i = Ht(e);
                    for (o = 0; (s = i[o]) != null; ++o)
                        r[o] && Pt(s, r[o])
                }
                if (t)
                    if (n) {
                        i = i || Ht(e), r = r || Ht(u);
                        for (o = 0; (s = i[o]) != null; o++)
                            Dt(s, r[o])
                    } else
                        Dt(e, u);
                return r = Ht(u, "script"), r.length > 0 && _t(r, !a && Ht(e, "script")), r = i = s = null, u
            }, buildFragment: function(e, t, n, r) {
                var i, s, o, u, a, f, l, c = e.length, h = ct(t), p = [], d = 0;
                for (; d < c; d++) {
                    s = e[d];
                    if (s || s === 0)
                        if (y.type(s) === "object")
                            y.merge(p, s.nodeType ? [s] : s);
                        else if (!bt.test(s))
                            p.push(t.createTextNode(s));
                        else {
                            u = u || h.appendChild(t.createElement("div")), o = (gt.exec(s) || ["", ""])[1].toLowerCase(), a = Ct[o] || Ct._default, u.innerHTML = a[1] + s.replace(mt, "<$1></$2>") + a[2], l = a[0];
                            while (l--)
                                u = u.lastChild;
                            !y.support.leadingWhitespace && vt.test(s) && p.push(t.createTextNode(vt.exec(s)[0]));
                            if (!y.support.tbody) {
                                s = o === "table" && !yt.test(s) ? u.firstChild : a[1] === "<table>" && !yt.test(s) ? u : 0, l = s && s.childNodes.length;
                                while (l--)
                                    y.nodeName(f = s.childNodes[l], "tbody") && !f.childNodes.length && s.removeChild(f)
                            }
                            y.merge(p, u.childNodes), u.textContent = "";
                            while (u.firstChild)
                                u.removeChild(u.firstChild);
                            u = h.lastChild
                        }
                }
                u && h.removeChild(u), y.support.appendChecked || y.grep(Ht(p, "input"), Bt), d = 0;
                while (s = p[d++]) {
                    if (r && y.inArray(s, r) !== -1)
                        continue;
                    i = y.contains(s.ownerDocument, s), u = Ht(h.appendChild(s), "script"), i && _t(u);
                    if (n) {
                        l = 0;
                        while (s = u[l++])
                            xt.test(s.type || "") && n.push(s)
                    }
                }
                return u = null, h
            }, cleanData: function(e, t) {
                var n, r, i, s, o = 0, u = y.expando, a = y.cache, l = y.support.deleteExpando, c = y.event.special;
                for (; (i = e[o]) != null; o++)
                    if (t || y.acceptData(i)) {
                        r = i[u], n = r && a[r];
                        if (n) {
                            if (n.events)
                                for (s in n.events)
                                    c[s] ? y.event.remove(i, s) : y.removeEvent(i, s, n.handle);
                            a[r] && (delete a[r], l ? delete i[u] : typeof i.removeAttribute != "undefined" ? i.removeAttribute(u) : i[u] = null, f.push(r))
                        }
                    }
            }});
        var jt, Ft, It, qt = /alpha\([^)]*\)/i, Rt = /opacity\s*=\s*([^)]*)/, Ut = /^(top|right|bottom|left)$/, zt = /^(none|table(?!-c[ea]).+)/, Wt = /^margin/, Xt = new RegExp("^(" + b + ")(.*)$", "i"), Vt = new RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"), $t = new RegExp("^([+-])=(" + b + ")", "i"), Jt = {BODY: "block"}, Kt = {position: "absolute", visibility: "hidden", display: "block"}, Qt = {letterSpacing: 0, fontWeight: 400}, Gt = ["Top", "Right", "Bottom", "Left"], Yt = ["Webkit", "O", "Moz", "ms"];
        y.fn.extend({css: function(e, n) {
                return y.access(this, function(e, n, r) {
                    var i, s, o = {}, u = 0;
                    if (y.isArray(n)) {
                        i = Ft(e), s = n.length;
                        for (; u < s; u++)
                            o[n[u]] = y.css(e, n[u], !1, i);
                        return o
                    }
                    return r !== t ? y.style(e, n, r) : y.css(e, n)
                }, e, n, arguments.length > 1)
            }, show: function() {
                return tn(this, !0)
            }, hide: function() {
                return tn(this)
            }, toggle: function(e) {
                var t = typeof e == "boolean";
                return this.each(function() {
                    (t ? e : en(this)) ? y(this).show() : y(this).hide()
                })
            }}), y.extend({cssHooks: {opacity: {get: function(e, t) {
                        if (t) {
                            var n = jt(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": y.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function(e, n, r, i) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)
                    return;
                var s, o, u, a = y.camelCase(n), f = e.style;
                n = y.cssProps[a] || (y.cssProps[a] = Zt(f, a)), u = y.cssHooks[n] || y.cssHooks[a];
                if (r === t)
                    return u && "get"in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                o = typeof r, o === "string" && (s = $t.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(y.css(e, n)), o = "number");
                if (r == null || o === "number" && isNaN(r))
                    return;
                o === "number" && !y.cssNumber[a] && (r += "px"), !y.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
                if (!u || !("set"in u) || (r = u.set(e, r, i)) !== t)
                    try {
                        f[n] = r
                    } catch (l) {
                    }
            }, css: function(e, n, r, i) {
                var s, o, u, a = y.camelCase(n);
                return n = y.cssProps[a] || (y.cssProps[a] = Zt(e.style, a)), u = y.cssHooks[n] || y.cssHooks[a], u && "get"in u && (s = u.get(e, !0, r)), s === t && (s = jt(e, n, i)), s === "normal" && n in Qt && (s = Qt[n]), r ? (o = parseFloat(s), r === !0 || y.isNumeric(o) ? o || 0 : s) : s
            }, swap: function(e, t, n, r) {
                var i, s, o = {};
                for (s in t)
                    o[s] = e.style[s], e.style[s] = t[s];
                i = n.apply(e, r || []);
                for (s in t)
                    e.style[s] = o[s];
                return i
            }}), e.getComputedStyle ? (Ft = function(t) {
            return e.getComputedStyle(t, null)
        }, jt = function(e, n, r) {
            var i, s, o, u = r || Ft(e), a = u ? u.getPropertyValue(n) || u[n] : t, f = e.style;
            return u && (a === "" && !y.contains(e.ownerDocument, e) && (a = y.style(e, n)), Vt.test(a) && Wt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
        }) : i.documentElement.currentStyle && (Ft = function(e) {
            return e.currentStyle
        }, jt = function(e, n, r) {
            var i, s, o, u = r || Ft(e), a = u ? u[n] : t, f = e.style;
            return a == null && f && f[n] && (a = f[n]), Vt.test(a) && !Ut.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
        }), y.each(["height", "width"], function(e, t) {
            y.cssHooks[t] = {get: function(e, n, r) {
                    if (n)
                        return e.offsetWidth === 0 && zt.test(y.css(e, "display")) ? y.swap(e, Kt, function() {
                            return sn(e, t, r)
                        }) : sn(e, t, r)
                }, set: function(e, n, r) {
                    var i = r && Ft(e);
                    return nn(e, n, r ? rn(e, t, r, y.support.boxSizing && y.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
                }}
        }), y.support.opacity || (y.cssHooks.opacity = {get: function(e, t) {
                return Rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            }, set: function(e, t) {
                var n = e.style, r = e.currentStyle, i = y.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && r.filter || n.filter || "";
                n.zoom = 1;
                if ((t >= 1 || t === "") && y.trim(s.replace(qt, "")) === "" && n.removeAttribute) {
                    n.removeAttribute("filter");
                    if (t === "" || r && !r.filter)
                        return
                }
                n.filter = qt.test(s) ? s.replace(qt, i) : s + " " + i
            }}), y(function() {
            y.support.reliableMarginRight || (y.cssHooks.marginRight = {get: function(e, t) {
                    if (t)
                        return y.swap(e, {display: "inline-block"}, jt, [e, "marginRight"])
                }}), !y.support.pixelPosition && y.fn.position && y.each(["top", "left"], function(e, t) {
                y.cssHooks[t] = {get: function(e, n) {
                        if (n)
                            return n = jt(e, t), Vt.test(n) ? y(e).position()[t] + "px" : n
                    }}
            })
        }), y.expr && y.expr.filters && (y.expr.filters.hidden = function(e) {
            return e.offsetWidth === 0 && e.offsetHeight === 0 || !y.support.reliableHiddenOffsets && (e.style && e.style.display || y.css(e, "display")) === "none"
        }, y.expr.filters.visible = function(e) {
            return!y.expr.filters.hidden(e)
        }), y.each({margin: "", padding: "", border: "Width"}, function(e, t) {
            y.cssHooks[e + t] = {expand: function(n) {
                    var r = 0, i = {}, s = typeof n == "string" ? n.split(" ") : [n];
                    for (; r < 4; r++)
                        i[e + Gt[r] + t] = s[r] || s[r - 2] || s[0];
                    return i
                }}, Wt.test(e) || (y.cssHooks[e + t].set = nn)
        });
        var an = /%20/g, fn = /\[\]$/, ln = /\r?\n/g, cn = /^(?:submit|button|image|reset)$/i, hn = /^(?:input|select|textarea|keygen)/i;
        y.fn.extend({serialize: function() {
                return y.param(this.serializeArray())
            }, serializeArray: function() {
                return this.map(function() {
                    var e = y.prop(this, "elements");
                    return e ? y.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !y(this).is(":disabled") && hn.test(this.nodeName) && !cn.test(e) && (this.checked || !Et.test(e))
                }).map(function(e, t) {
                    var n = y(this).val();
                    return n == null ? null : y.isArray(n) ? y.map(n, function(e) {
                        return{name: t.name, value: e.replace(ln, "\r\n")}
                    }) : {name: t.name, value: n.replace(ln, "\r\n")}
                }).get()
            }}), y.param = function(e, n) {
            var r, i = [], s = function(e, t) {
                t = y.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            n === t && (n = y.ajaxSettings && y.ajaxSettings.traditional);
            if (y.isArray(e) || e.jquery && !y.isPlainObject(e))
                y.each(e, function() {
                    s(this.name, this.value)
                });
            else
                for (r in e)
                    pn(r, e[r], n, s);
            return i.join("&").replace(an, "+")
        };
        var dn, vn, mn = y.now(), gn = /\?/, yn = /#.*$/, bn = /([?&])_=[^&]*/, wn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, En = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Sn = /^(?:GET|HEAD)$/, xn = /^\/\//, Tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Nn = y.fn.load, Cn = {}, kn = {}, Ln = "*/".concat("*");
        try {
            vn = s.href
        } catch (An) {
            vn = i.createElement("a"), vn.href = "", vn = vn.href
        }
        dn = Tn.exec(vn.toLowerCase()) || [], y.fn.load = function(e, n, r) {
            if (typeof e != "string" && Nn)
                return Nn.apply(this, arguments);
            var i, s, o, u = this, a = e.indexOf(" ");
            return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), y.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), u.length > 0 && y.ajax({url: e, type: s, dataType: "html", data: n}).done(function(e) {
                o = arguments, u.html(i ? y("<div>").append(y.parseHTML(e)).find(i) : e)
            }).complete(r && function(e, t) {
                u.each(r, o || [e.responseText, t, e])
            }), this
        }, y.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            y.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), y.each(["get", "post"], function(e, n) {
            y[n] = function(e, r, i, s) {
                return y.isFunction(r) && (s = s || i, i = r, r = t), y.ajax({url: e, type: n, dataType: s, data: r, success: i})
            }
        }), y.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: vn, type: "GET", isLocal: En.test(dn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Ln, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": e.String, "text html": !0, "text json": y.parseJSON, "text xml": y.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function(e, t) {
                return t ? _n(_n(e, y.ajaxSettings), t) : _n(y.ajaxSettings, e)
            }, ajaxPrefilter: On(Cn), ajaxTransport: On(kn), ajax: function(e, n) {
                function N(e, n, o, a) {
                    var l, g, b, w, S, T = n;
                    if (E === 2)
                        return;
                    E = 2, u && clearTimeout(u), r = t, s = a || "", x.readyState = e > 0 ? 4 : 0, o && (w = Dn(c, x, o));
                    if (e >= 200 && e < 300 || e === 304)
                        c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (y.lastModified[i] = S), S = x.getResponseHeader("etag"), S && (y.etag[i] = S)), e === 304 ? (l = !0, T = "notmodified") : (l = Pn(c, w), T = l.state, g = l.data, b = l.error, l = !b);
                    else {
                        b = T;
                        if (e || !T)
                            T = "error", e < 0 && (e = 0)
                    }
                    x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(m), m = t, f && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : b]), v.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --y.active || y.event.trigger("ajaxStop"))
                }
                typeof e == "object" && (n = e, e = t), n = n || {};
                var r, i, s, o, u, a, f, l, c = y.ajaxSetup({}, n), h = c.context || c, p = c.context && (h.nodeType || h.jquery) ? y(h) : y.event, d = y.Deferred(), v = y.Callbacks("once memory"), m = c.statusCode || {}, g = {}, b = {}, E = 0, S = "canceled", x = {readyState: 0, getResponseHeader: function(e) {
                        var t;
                        if (E === 2) {
                            if (!o) {
                                o = {};
                                while (t = wn.exec(s))
                                    o[t[1].toLowerCase()] = t[2]
                            }
                            t = o[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    }, getAllResponseHeaders: function() {
                        return E === 2 ? s : null
                    }, setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return E || (e = b[n] = b[n] || e, g[e] = t), this
                    }, overrideMimeType: function(e) {
                        return E || (c.mimeType = e), this
                    }, statusCode: function(e) {
                        var t;
                        if (e)
                            if (E < 2)
                                for (t in e)
                                    m[t] = [m[t], e[t]];
                            else
                                x.always(e[x.status]);
                        return this
                    }, abort: function(e) {
                        var t = e || S;
                        return r && r.abort(t), N(0, t), this
                    }};
                d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || vn) + "").replace(yn, "").replace(xn, dn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = y.trim(c.dataType || "*").toLowerCase().match(w) || [""], c.crossDomain == null && (a = Tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === dn[1] && a[2] === dn[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (dn[3] || (dn[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = y.param(c.data, c.traditional)), Mn(Cn, c, n, x);
                if (E === 2)
                    return x;
                f = c.global, f && y.active++ === 0 && y.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Sn.test(c.type), i = c.url, c.hasContent || (c.data && (i = c.url += (gn.test(i) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = bn.test(i) ? i.replace(bn, "$1_=" + mn++) : i + (gn.test(i) ? "&" : "?") + "_=" + mn++)), c.ifModified && (y.lastModified[i] && x.setRequestHeader("If-Modified-Since", y.lastModified[i]), y.etag[i] && x.setRequestHeader("If-None-Match", y.etag[i])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Ln + "; q=0.01" : "") : c.accepts["*"]);
                for (l in c.headers)
                    x.setRequestHeader(l, c.headers[l]);
                if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                    S = "abort";
                    for (l in{success:1, error:1, complete:1})
                        x[l](c[l]);
                    r = Mn(kn, c, n, x);
                    if (!r)
                        N(-1, "No Transport");
                    else {
                        x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                            x.abort("timeout")
                        }, c.timeout));
                        try {
                            E = 1, r.send(g, N)
                        } catch (T) {
                            if (!(E < 2))
                                throw T;
                            N(-1, T)
                        }
                    }
                    return x
                }
                return x.abort()
            }, getScript: function(e, n) {
                return y.get(e, t, n, "script")
            }, getJSON: function(e, t, n) {
                return y.get(e, t, n, "json")
            }}), y.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function(e) {
                    return y.globalEval(e), e
                }}}), y.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), y.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, r = i.head || y("head")[0] || i.documentElement;
                return{send: function(t, s) {
                        n = i.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                            if (t || !n.readyState || /loaded|complete/.test(n.readyState))
                                n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || s(200, "success")
                        }, r.insertBefore(n, r.firstChild)
                    }, abort: function() {
                        n && n.onload(t, !0)
                    }}
            }
        });
        var Hn = [], Bn = /(=)\?(?=&|$)|\?\?/;
        y.ajaxSetup({jsonp: "callback", jsonpCallback: function() {
                var e = Hn.pop() || y.expando + "_" + mn++;
                return this[e] = !0, e
            }}), y.ajaxPrefilter("json jsonp", function(n, r, i) {
            var s, o, u, a = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
            if (a || n.dataTypes[0] === "jsonp")
                return s = n.jsonpCallback = y.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Bn, "$1" + s) : n.jsonp !== !1 && (n.url += (gn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
                    return u || y.error(s + " was not called"), u[0]
                }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
                    u = arguments
                }, i.always(function() {
                    e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Hn.push(s)), u && y.isFunction(o) && o(u[0]), u = o = t
                }), "script"
        });
        var jn, Fn, In = 0, qn = e.ActiveXObject && function() {
            var e;
            for (e in jn)
                jn[e](t, !0)
        };
        y.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return!this.isLocal && Rn() || Un()
        } : Rn, Fn = y.ajaxSettings.xhr(), y.support.cors = !!Fn && "withCredentials"in Fn, Fn = y.support.ajax = !!Fn, Fn && y.ajaxTransport(function(n) {
            if (!n.crossDomain || y.support.cors) {
                var r;
                return{send: function(i, s) {
                        var o, u, a = n.xhr();
                        n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                        if (n.xhrFields)
                            for (u in n.xhrFields)
                                a[u] = n.xhrFields[u];
                        n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (u in i)
                                a.setRequestHeader(u, i[u])
                        } catch (f) {
                        }
                        a.send(n.hasContent && n.data || null), r = function(e, i) {
                            var u, f, l, c, h;
                            try {
                                if (r && (i || a.readyState === 4)) {
                                    r = t, o && (a.onreadystatechange = y.noop, qn && delete jn[o]);
                                    if (i)
                                        a.readyState !== 4 && a.abort();
                                    else {
                                        c = {}, u = a.status, h = a.responseXML, l = a.getAllResponseHeaders(), h && h.documentElement && (c.xml = h), typeof a.responseText == "string" && (c.text = a.responseText);
                                        try {
                                            f = a.statusText
                                        } catch (p) {
                                            f = ""
                                        }
                                        !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                    }
                                }
                            } catch (d) {
                                i || s(-1, d)
                            }
                            c && s(u, f, c, l)
                        }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++In, qn && (jn || (jn = {}, y(e).unload(qn)), jn[o] = r), a.onreadystatechange = r) : r()
                    }, abort: function() {
                        r && r(t, !0)
                    }}
            }
        });
        var zn, Wn, Xn = /^(?:toggle|show|hide)$/, Vn = new RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"), $n = /queueHooks$/, Jn = [er], Kn = {"*": [function(e, t) {
                    var n, r, i = this.createTween(e, t), s = Vn.exec(t), o = i.cur(), u = +o || 0, a = 1, f = 20;
                    if (s) {
                        n = +s[2], r = s[3] || (y.cssNumber[e] ? "" : "px");
                        if (r !== "px" && u) {
                            u = y.css(i.elem, e, !0) || n || 1;
                            do
                                a = a || ".5", u /= a, y.style(i.elem, e, u + r);
                            while (a !== (a = i.cur() / o) && a !== 1 && --f)
                        }
                        i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                    }
                    return i
                }]};
        y.Animation = y.extend(Yn, {tweener: function(e, t) {
                y.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                var n, r = 0, i = e.length;
                for (; r < i; r++)
                    n = e[r], Kn[n] = Kn[n] || [], Kn[n].unshift(t)
            }, prefilter: function(e, t) {
                t ? Jn.unshift(e) : Jn.push(e)
            }}), y.Tween = tr, tr.prototype = {constructor: tr, init: function(e, t, n, r, i, s) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (y.cssNumber[n] ? "" : "px")
            }, cur: function() {
                var e = tr.propHooks[this.prop];
                return e && e.get ? e.get(this) : tr.propHooks._default.get(this)
            }, run: function(e) {
                var t, n = tr.propHooks[this.prop];
                return this.options.duration ? this.pos = t = y.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tr.propHooks._default.set(this), this
            }}, tr.prototype.init.prototype = tr.prototype, tr.propHooks = {_default: {get: function(e) {
                    var t;
                    return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = y.css(e.elem, e.prop, "auto"), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
                }, set: function(e) {
                    y.fx.step[e.prop] ? y.fx.step[e.prop](e) : e.elem.style && (e.elem.style[y.cssProps[e.prop]] != null || y.cssHooks[e.prop]) ? y.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }}}, tr.propHooks.scrollTop = tr.propHooks.scrollLeft = {set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }}, y.each(["toggle", "show", "hide"], function(e, t) {
            var n = y.fn[t];
            y.fn[t] = function(e, r, i) {
                return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(nr(t, !0), e, r, i)
            }
        }), y.fn.extend({fadeTo: function(e, t, n, r) {
                return this.filter(en).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
            }, animate: function(e, t, n, r) {
                var i = y.isEmptyObject(e), s = y.speed(t, n, r), o = function() {
                    var t = Yn(this, y.extend({}, e), s);
                    o.finish = function() {
                        t.stop(!0)
                    }, (i || y._data(this, "finish")) && t.stop(!0)
                };
                return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            }, stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0, n = e != null && e + "queueHooks", s = y.timers, o = y._data(this);
                    if (n)
                        o[n] && o[n].stop && i(o[n]);
                    else
                        for (n in o)
                            o[n] && o[n].stop && $n.test(n) && i(o[n]);
                    for (n = s.length; n--; )
                        s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                    (t || !r) && y.dequeue(this, e)
                })
            }, finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = y._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = y.timers, o = r ? r.length : 0;
                    n.finish = !0, y.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this);
                    for (t = s.length; t--; )
                        s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }}), y.each({slideDown: nr("show"), slideUp: nr("hide"), slideToggle: nr("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function(e, t) {
            y.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), y.speed = function(e, t, n) {
            var r = e && typeof e == "object" ? y.extend({}, e) : {complete: n || !n && t || y.isFunction(e) && e, duration: e, easing: n && t || t && !y.isFunction(t) && t};
            r.duration = y.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in y.fx.speeds ? y.fx.speeds[r.duration] : y.fx.speeds._default;
            if (r.queue == null || r.queue === !0)
                r.queue = "fx";
            return r.old = r.complete, r.complete = function() {
                y.isFunction(r.old) && r.old.call(this), r.queue && y.dequeue(this, r.queue)
            }, r
        }, y.easing = {linear: function(e) {
                return e
            }, swing: function(e) {
                return.5 - Math.cos(e * Math.PI) / 2
            }}, y.timers = [], y.fx = tr.prototype.init, y.fx.tick = function() {
            var e, n = y.timers, r = 0;
            zn = y.now();
            for (; r < n.length; r++)
                e = n[r], !e() && n[r] === e && n.splice(r--, 1);
            n.length || y.fx.stop(), zn = t
        }, y.fx.timer = function(e) {
            e() && y.timers.push(e) && y.fx.start()
        }, y.fx.interval = 13, y.fx.start = function() {
            Wn || (Wn = setInterval(y.fx.tick, y.fx.interval))
        }, y.fx.stop = function() {
            clearInterval(Wn), Wn = null
        }, y.fx.speeds = {slow: 600, fast: 200, _default: 400}, y.fx.step = {}, y.expr && y.expr.filters && (y.expr.filters.animated = function(e) {
            return y.grep(y.timers, function(t) {
                return e === t.elem
            }).length
        }), y.fn.offset = function(e) {
            if (arguments.length)
                return e === t ? this : this.each(function(t) {
                    y.offset.setOffset(this, e, t)
                });
            var n, r, i = {top: 0, left: 0}, s = this[0], o = s && s.ownerDocument;
            if (!o)
                return;
            return n = o.documentElement, y.contains(n, s) ? (typeof s.getBoundingClientRect != "undefined" && (i = s.getBoundingClientRect()), r = rr(o), {top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : i
        }, y.offset = {setOffset: function(e, t, n) {
                var r = y.css(e, "position");
                r === "static" && (e.style.position = "relative");
                var i = y(e), s = i.offset(), o = y.css(e, "top"), u = y.css(e, "left"), a = (r === "absolute" || r === "fixed") && y.inArray("auto", [o, u]) > -1, f = {}, l = {}, c, h;
                a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), y.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using"in t ? t.using.call(e, f) : i.css(f)
            }}, y.fn.extend({position: function() {
                if (!this[0])
                    return;
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return y.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), y.nodeName(e[0], "html") || (n = e.offset()), n.top += y.css(e[0], "borderTopWidth", !0), n.left += y.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - y.css(r, "marginTop", !0), left: t.left - n.left - y.css(r, "marginLeft", !0)}
            }, offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent || i.documentElement;
                    while (e && !y.nodeName(e, "html") && y.css(e, "position") === "static")
                        e = e.offsetParent;
                    return e || i.documentElement
                })
            }}), y.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(e, n) {
            var r = /Y/.test(n);
            y.fn[e] = function(i) {
                return y.access(this, function(e, i, s) {
                    var o = rr(e);
                    if (s === t)
                        return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                    o ? o.scrollTo(r ? y(o).scrollLeft() : s, r ? s : y(o).scrollTop()) : e[i] = s
                }, e, i, arguments.length, null)
            }
        }), y.each({Height: "height", Width: "width"}, function(e, n) {
            y.each({padding: "inner" + e, content: n, "": "outer" + e}, function(r, i) {
                y.fn[i] = function(i, s) {
                    var o = arguments.length && (r || typeof i != "boolean"), u = r || (i === !0 || s === !0 ? "margin" : "border");
                    return y.access(this, function(n, r, i) {
                        var s;
                        return y.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? y.css(n, r, u) : y.style(n, r, i, u)
                    }, n, o ? i : t, o, null)
                }
            })
        }), e.jQuery = e.$ = y, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return y
        })
    })(window);
    (function(e, t, n) {
        "use strict";
        e.fn.foundationMediaQueryViewer = function(t) {
            var n = e.extend(t, {toggleKey: 77}), r = e(document);
            r.on("keyup.mediaQueryViewer", ":input", function(e) {
                e.which === n.toggleKey && e.stopPropagation()
            }), r.on("keyup.mediaQueryViewer", function(t) {
                var r = e("#fqv");
                t.which === n.toggleKey && (r.length > 0 ? r.remove() : e("body").prepend('<div id="fqv" style="position:fixed;top:4px;left:4px;z-index:999;color:#fff;"><p style="font-size:12px;background:rgba(0,0,0,0.75);padding:5px;margin-bottom:1px;line-height:1.2;"><span class="left">Media:</span> <span style="font-weight:bold;" class="show-for-xlarge">Extra Large</span><span style="font-weight:bold;" class="show-for-large">Large</span><span style="font-weight:bold;" class="show-for-medium">Medium</span><span style="font-weight:bold;" class="show-for-small">Small</span><span style="font-weight:bold;" class="show-for-landscape">Landscape</span><span style="font-weight:bold;" class="show-for-portrait">Portrait</span><span style="font-weight:bold;" class="show-for-touch">Touch</span></p></div>'))
            })
        }
    })(jQuery, this);
    /*
     * jQuery Custom Forms Plugin 1.0
     * www.ZURB.com
     * Copyright 2010, ZURB
     * Free to use under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     */
    (function(e) {
        var t = function() {
            return{tmp: [], hidden: null, adjust: function(t) {
                    var n = this;
                    n.hidden = t.parents().andSelf().filter(":hidden"), n.hidden.each(function() {
                        var t = e(this);
                        n.tmp.push(t.attr("style")), t.css({visibility: "hidden", display: "block"})
                    })
                }, reset: function() {
                    var t = this;
                    t.hidden.each(function(n) {
                        var r = e(this), i = t.tmp[n];
                        i === undefined ? r.removeAttr("style") : r.attr("style", i)
                    }), t.tmp = [], t.hidden = null
                }}
        };
        jQuery.foundation = jQuery.foundation || {}, jQuery.foundation.customForms = jQuery.foundation.customForms || {}, e.foundation.customForms.appendCustomMarkup = function(n) {
            function i(t, n) {
                var r = e(n).hide(), i = r.attr("type"), s = r.next("span.custom." + i);
                s.length === 0 && (s = e('<span class="custom ' + i + '"></span>').insertAfter(r)), s.toggleClass("checked", r.is(":checked")), s.toggleClass("disabled", r.is(":disabled"))
            }
            function s(r, i) {
                var s = t(), o = e(i), u = o.next("div.custom.dropdown"), a = u.find("ul"), f = u.find(".current"), l = u.find(".selector"), c = o.find("option"), h = c.filter(":selected"), p = 0, d = "", v, m = !1;
                if (o.hasClass(n.disable_class))
                    return;
                if (u.length === 0) {
                    var g = o.hasClass("small") ? "small" : o.hasClass("medium") ? "medium" : o.hasClass("large") ? "large" : o.hasClass("expand") ? "expand" : "";
                    u = e('<div class="' + ["custom", "dropdown", g].join(" ") + '"><a href="#" class="selector"></a><ul /></div>'), l = u.find(".selector"), a = u.find("ul"), d = c.map(function() {
                        return"<li>" + e(this).html() + "</li>"
                    }).get().join(""), a.append(d), m = u.prepend('<a href="#" class="current">' + h.html() + "</a>").find(".current"), o.after(u).hide()
                } else
                    d = c.map(function() {
                        return"<li>" + e(this).html() + "</li>"
                    }).get().join(""), a.html("").append(d);
                u.toggleClass("disabled", o.is(":disabled")), v = a.find("li"), c.each(function(t) {
                    this.selected && (v.eq(t).addClass("selected"), m && m.html(e(this).html()))
                }), a.css("width", "auto"), u.css("width", "auto"), u.is(".small, .medium, .large, .expand") || (u.addClass("open"), s.adjust(a), p = v.outerWidth() > p ? v.outerWidth() : p, s.reset(), u.removeClass("open"), u.width(p + 18), a.width(p + 16))
            }
            var r = {disable_class: "no-custom"};
            n = e.extend(r, n), e("form.custom input:radio[data-customforms!=disabled]").each(i), e("form.custom input:checkbox[data-customforms!=disabled]").each(i), e("form.custom select[data-customforms!=disabled]").each(s)
        };
        var n = function(t) {
            var n = 0, r = t.next();
            $options = t.find("option"), r.find("ul").html(""), $options.each(function() {
                $li = e("<li>" + e(this).html() + "</li>"), r.find("ul").append($li)
            }), $options.each(function(t) {
                this.selected && (r.find("li").eq(t).addClass("selected"), r.find(".current").html(e(this).html()))
            }), r.removeAttr("style").find("ul").removeAttr("style"), r.find("li").each(function() {
                r.addClass("open"), e(this).outerWidth() > n && (n = e(this).outerWidth()), r.removeClass("open")
            }), r.css("width", n + 18 + "px"), r.find("ul").css("width", n + 16 + "px")
        }, r = function(e) {
            var t = e.prev(), n = t[0];
            !1 === t.is(":disabled") && (n.checked = n.checked ? !1 : !0, e.toggleClass("checked"), t.trigger("change"))
        }, i = function(e) {
            var t = e.prev(), n = t.closest("form.custom"), r = t[0];
            !1 === t.is(":disabled") && (n.find('input:radio[name="' + t.attr("name") + '"]').next().not(e).removeClass("checked"), e.hasClass("checked") || e.toggleClass("checked"), r.checked = e.hasClass("checked"), t.trigger("change"))
        };
        e(document).on("click", "form.custom span.custom.checkbox", function(t) {
            t.preventDefault(), t.stopPropagation(), r(e(this))
        }), e(document).on("click", "form.custom span.custom.radio", function(t) {
            t.preventDefault(), t.stopPropagation(), i(e(this))
        }), e(document).on("change", "form.custom select[data-customforms!=disabled]", function(t) {
            n(e(this))
        }), e(document).on("click", "form.custom label", function(t) {
            var n = e("#" + e(this).attr("for") + "[data-customforms!=disabled]"), s, o;
            n.length !== 0 && (n.attr("type") === "checkbox" ? (t.preventDefault(), s = e(this).find("span.custom.checkbox"), s.length == 0 && (s = e(this).next("span.custom.checkbox")), s.length == 0 && (s = e(this).prev("span.custom.checkbox")), r(s)) : n.attr("type") === "radio" && (t.preventDefault(), o = e(this).find("span.custom.radio"), o.length == 0 && (o = e(this).next("span.custom.radio")), o.length == 0 && (o = e(this).prev("span.custom.radio")), i(o)))
        }), e(document).on("click", "form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector", function(t) {
            var n = e(this), r = n.closest("div.custom.dropdown"), i = r.prev();
            t.preventDefault(), e("div.dropdown").removeClass("open");
            if (!1 === i.is(":disabled"))
                return r.toggleClass("open"), r.hasClass("open") ? e(document).bind("click.customdropdown", function(t) {
                    r.removeClass("open"), e(document).unbind(".customdropdown")
                }) : e(document).unbind(".customdropdown"), !1
        }), e(document).on("click", "form.custom div.custom.dropdown li", function(t) {
            var n = e(this), r = n.closest("div.custom.dropdown"), i = r.prev(), s = 0;
            t.preventDefault(), t.stopPropagation(), e("div.dropdown").removeClass("open"), n.closest("ul").find("li").removeClass("selected"), n.addClass("selected"), r.removeClass("open").find("a.current").html(n.html()), n.closest("ul").find("li").each(function(e) {
                n[0] == this && (s = e)
            }), i[0].selectedIndex = s, i.trigger("change")
        }), e.fn.foundationCustomForms = e.foundation.customForms.appendCustomMarkup
    })(jQuery);
    /*
     * jQuery Reveal Plugin 1.1
     * www.ZURB.com
     * Copyright 2010, ZURB
     * Free to use under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     */
    /*globals jQuery */
    (function(e) {
        "use strict";
        var t = !1;
        e(document).on("click", "a[data-reveal-id]", function(t) {
            t.preventDefault();
            var n = e(this).attr("data-reveal-id");
            e("#" + n).reveal(e(this).data())
        }), e.fn.reveal = function(n) {
            var r = e(document), i = {animation: "fadeAndPop", animationSpeed: 300, closeOnBackgroundClick: !0, dismissModalClass: "close-reveal-modal", open: e.noop, opened: function() {
                    $('.reveal-modal-bg').css('height', '1000%');
                }, close: e.noop, closed: e.noop};
            return n = e.extend({}, i, n), this.not(".reveal-modal.open").each(function() {
                function c() {
                    u = !1
                }
                function h() {
                    u = !0
                }
                function p() {
                    var n = e(".reveal-modal.open");
                    n.length === 1 && (t = !0, n.trigger("reveal:close"))
                }
                function d() {
                    u || (h(), p(), i.addClass("open"), n.animation === "fadeAndPop" && (f.open.top = r.scrollTop() - o, f.open.opacity = 0, i.css(f.open), a.fadeIn(n.animationSpeed / 2), i.delay(n.animationSpeed / 2).animate({top: r.scrollTop() + s + "px", opacity: 1}, n.animationSpeed, function() {
                        i.trigger("reveal:opened")
                    })), n.animation === "fade" && (f.open.top = r.scrollTop() + s, f.open.opacity = 0, i.css(f.open), a.fadeIn(n.animationSpeed / 2), i.delay(n.animationSpeed / 2).animate({opacity: 1}, n.animationSpeed, function() {
                        i.trigger("reveal:opened")
                    })), n.animation === "none" && (f.open.top = r.scrollTop() + s, f.open.opacity = 1, i.css(f.open), a.css({display: "block"}), i.trigger("reveal:opened")))
                }
                function v() {
                    var e = i.find(".flex-video"), t = e.find("iframe");
                    t.length > 0 && (t.attr("src", t.data("src")), e.fadeIn(100))
                }
                function m() {
                    u || (h(), i.removeClass("open"), n.animation === "fadeAndPop" && (i.animate({top: r.scrollTop() - o + "px", opacity: 0}, n.animationSpeed / 2, function() {
                        i.css(f.close)
                    }), t ? i.trigger("reveal:closed") : a.delay(n.animationSpeed).fadeOut(n.animationSpeed, function() {
                        i.trigger("reveal:closed")
                    })), n.animation === "fade" && (i.animate({opacity: 0}, n.animationSpeed, function() {
                        i.css(f.close)
                    }), t ? i.trigger("reveal:closed") : a.delay(n.animationSpeed).fadeOut(n.animationSpeed, function() {
                        i.trigger("reveal:closed")
                    })), n.animation === "none" && (i.css(f.close), t || a.css({display: "none"}), i.trigger("reveal:closed")), t = !1)
                }
                function g() {
                    i.unbind(".reveal"), a.unbind(".reveal"), l.unbind(".reveal"), e("body").unbind(".reveal")
                }
                function y() {
                    var e = i.find(".flex-video"), t = e.find("iframe");
                    t.length > 0 && (t.data("src", t.attr("src")), t.attr("src", ""), e.fadeOut(100))
                }
                var i = e(this), s = parseInt(i.css("top"), 10), o = i.height() + s, u = !1, a = e(".reveal-modal-bg"), f = {open: {top: 0, opacity: 0, visibility: "visible", display: "block"}, close: {top: s, opacity: 1, visibility: "hidden", display: "none"}}, l;
                a.length === 0 && (a = e("<div />", {"class": "reveal-modal-bg"}).insertAfter(i), a.fadeTo("fast", .8)), i.bind("reveal:open.reveal", d), i.bind("reveal:open.reveal", v), i.bind("reveal:close.reveal", m), i.bind("reveal:closed.reveal", y), i.bind("reveal:opened.reveal reveal:closed.reveal", c), i.bind("reveal:closed.reveal", g), i.bind("reveal:open.reveal", n.open), i.bind("reveal:opened.reveal", n.opened), i.bind("reveal:close.reveal", n.close), i.bind("reveal:closed.reveal", n.closed), i.trigger("reveal:open"), l = e("." + n.dismissModalClass).bind("click.reveal", function() {
                    i.trigger("reveal:close")
                }), n.closeOnBackgroundClick && (a.css({cursor: "pointer"}), a.bind("click.reveal", function() {
                    i.trigger("reveal:close")
                })), e("body").bind("keyup.reveal", function(e) {
                    e.which === 27 && i.trigger("reveal:close")
                })
            })
        }
    })(jQuery);
    /*
     * jQuery Orbit Plugin 1.4.0
     * www.ZURB.com/playground
     * Copyright 2010, ZURB
     * Free to use under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     */
    (function(e) {
        "use strict";
        e.fn.findFirstImage = function() {
            return this.first().find("img").andSelf().filter("img").first()
        };
        var t = {defaults: {animation: "horizontal-push", animationSpeed: 600, timer: !0, advanceSpeed: 4e3, pauseOnHover: !1, startClockOnMouseOut: !1, startClockOnMouseOutAfter: 1e3, directionalNav: !0, directionalNavRightText: "Right", directionalNavLeftText: "Left", captions: !0, captionAnimation: "fade", captionAnimationSpeed: 600, resetTimerOnClick: !1, bullets: !1, bulletThumbs: !1, bulletThumbLocation: "", bulletThumbsHideOnSmall: !0, afterSlideChange: e.noop, afterLoadComplete: e.noop, fluid: !0, centerBullets: !0, singleCycle: !1, slideNumber: !1, stackOnSmall: !1}, activeSlide: 0, numberSlides: 0, orbitWidth: null, orbitHeight: null, locked: null, timerRunning: null, degrees: 0, wrapperHTML: '<div class="orbit-wrapper" />', timerHTML: '<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>', captionHTML: '<div class="orbit-caption"></div>', directionalNavHTML: '<div class="slider-nav hide-for-small"><span class="right"></span><span class="left"></span></div>', bulletHTML: '<ul class="orbit-bullets"></ul>', slideNumberHTML: '<span class="orbit-slide-counter"></span>', init: function(t, n) {
                var r, i = 0, s = this;
                this.clickTimer = e.proxy(this.clickTimer, this), this.addBullet = e.proxy(this.addBullet, this), this.resetAndUnlock = e.proxy(this.resetAndUnlock, this), this.stopClock = e.proxy(this.stopClock, this), this.startTimerAfterMouseLeave = e.proxy(this.startTimerAfterMouseLeave, this), this.clearClockMouseLeaveTimer = e.proxy(this.clearClockMouseLeaveTimer, this), this.rotateTimer = e.proxy(this.rotateTimer, this), this.options = e.extend({}, this.defaults, n), this.options.timer === "false" && (this.options.timer = !1), this.options.captions === "false" && (this.options.captions = !1), this.options.directionalNav === "false" && (this.options.directionalNav = !1), this.$element = e(t), this.$wrapper = this.$element.wrap(this.wrapperHTML).parent(), this.$slides = this.$element.children("img, a, div, figure, li"), this.$element.on("movestart", function(e) {
                    (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && e.preventDefault()
                }), this.$element.bind("orbit.next", function() {
                    s.shift("next")
                }), this.$element.bind("orbit.prev", function() {
                    s.shift("prev")
                }), this.$element.bind("swipeleft", function() {
                    e(this).trigger("orbit.next")
                }), this.$element.bind("swiperight", function() {
                    e(this).trigger("orbit.prev")
                }), this.$element.bind("orbit.goto", function(e, t) {
                    s.shift(t)
                }), this.$element.bind("orbit.start", function(e, t) {
                    s.startClock()
                }), this.$element.bind("orbit.stop", function(e, t) {
                    s.stopClock()
                }), r = this.$slides.filter("img"), r.length === 0 ? this.loaded() : r.bind("imageready", function() {
                    i += 1, i === r.length && s.loaded()
                })
            }, loaded: function() {
                this.$element.addClass("orbit").css({width: "1px", height: "1px"}), this.options.stackOnSmall && this.$element.addClass("orbit-stack-on-small"), this.$slides.addClass("orbit-slide").css({opacity: 0}), this.setDimentionsFromLargestSlide(), this.updateOptionsIfOnlyOneSlide(), this.setupFirstSlide(), this.notifySlideChange(), this.options.timer && (this.setupTimer(), this.startClock()), this.options.captions && this.setupCaptions(), this.options.directionalNav && this.setupDirectionalNav(), this.options.bullets && (this.setupBulletNav(), this.setActiveBullet()), this.options.afterLoadComplete.call(this), Holder.run()
            }, currentSlide: function() {
                return this.$slides.eq(this.activeSlide)
            }, notifySlideChange: function() {
                if (this.options.slideNumber) {
                    var t = this.activeSlide + 1 + " of " + this.$slides.length;
                    this.$element.trigger("orbit.change", {slideIndex: this.activeSlide, slideCount: this.$slides.length});
                    if (this.$counter === undefined) {
                        var n = e(this.slideNumberHTML).html(t);
                        this.$counter = n, this.$wrapper.append(this.$counter)
                    } else
                        this.$counter.html(t)
                }
            }, setDimentionsFromLargestSlide: function() {
                var t = this, n;
                t.$element.add(t.$wrapper).width(this.$slides.first().outerWidth()), t.$element.add(t.$wrapper).height(this.$slides.first().height()), t.orbitWidth = this.$slides.first().outerWidth(), t.orbitHeight = this.$slides.first().height(), n = this.$slides.first().findFirstImage().clone(), this.$slides.each(function() {
                    var r = e(this), i = r.outerWidth(), s = r.height();
                    i > t.$element.outerWidth() && (t.$element.add(t.$wrapper).width(i), t.orbitWidth = t.$element.outerWidth()), s > t.$element.height() && (t.$element.add(t.$wrapper).height(s), t.orbitHeight = t.$element.height(), n = e(this).findFirstImage().clone()), t.numberSlides += 1
                }), this.options.fluid && (typeof this.options.fluid == "string" && (n = e("<img>").attr("data-src", "holder.js/" + this.options.fluid)), t.$element.prepend(n), n.addClass("fluid-placeholder"), t.$element.add(t.$wrapper).css({width: "inherit"}), t.$element.add(t.$wrapper).css({height: "inherit"}), e(window).bind("resize", function() {
                    t.orbitWidth = t.$element.outerWidth(), t.orbitHeight = t.$element.height()
                }))
            }, lock: function() {
                this.locked = !0
            }, unlock: function() {
                this.locked = !1
            }, updateOptionsIfOnlyOneSlide: function() {
                this.$slides.length === 1 && (this.options.directionalNav = !1, this.options.timer = !1, this.options.bullets = !1)
            }, setupFirstSlide: function() {
                var e = this;
                this.$slides.first().css({"z-index": 3, opacity: 1}).fadeIn(function() {
                    e.$slides.css({display: "block"})
                })
            }, startClock: function() {
                var e = this;
                if (!this.options.timer)
                    return!1;
                this.$timer.is(":hidden") ? this.clock = setInterval(function() {
                    e.$element.trigger("orbit.next")
                }, this.options.advanceSpeed) : (this.timerRunning = !0, this.$pause.removeClass("active"), this.clock = setInterval(this.rotateTimer, this.options.advanceSpeed / 180, !1))
            }, rotateTimer: function(e) {
                var t = "rotate(" + this.degrees + "deg)";
                this.degrees += 2, this.$rotator.css({"-webkit-transform": t, "-moz-transform": t, "-o-transform": t, "-ms-transform": t}), e && (this.degrees = 0, this.$rotator.removeClass("move"), this.$mask.removeClass("move")), this.degrees > 180 && (this.$rotator.addClass("move"), this.$mask.addClass("move")), this.degrees > 360 && (this.$rotator.removeClass("move"), this.$mask.removeClass("move"), this.degrees = 0, this.$element.trigger("orbit.next"))
            }, stopClock: function() {
                if (!this.options.timer)
                    return!1;
                this.timerRunning = !1, clearInterval(this.clock), this.$pause.addClass("active")
            }, setupTimer: function() {
                this.$timer = e(this.timerHTML), this.$wrapper.append(this.$timer), this.$rotator = this.$timer.find(".rotator"), this.$mask = this.$timer.find(".mask"), this.$pause = this.$timer.find(".pause"), this.$timer.click(this.clickTimer), this.options.startClockOnMouseOut && (this.$wrapper.mouseleave(this.startTimerAfterMouseLeave), this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer)), this.options.pauseOnHover && this.$wrapper.mouseenter(this.stopClock)
            }, startTimerAfterMouseLeave: function() {
                var e = this;
                this.outTimer = setTimeout(function() {
                    e.timerRunning || e.startClock()
                }, this.options.startClockOnMouseOutAfter)
            }, clearClockMouseLeaveTimer: function() {
                clearTimeout(this.outTimer)
            }, clickTimer: function() {
                this.timerRunning ? this.stopClock() : this.startClock()
            }, setupCaptions: function() {
                this.$caption = e(this.captionHTML), this.$wrapper.append(this.$caption), this.setCaption()
            }, setCaption: function() {
                var t = this.currentSlide().attr("data-caption"), n;
                if (!this.options.captions)
                    return!1;
                if (t) {
                    if (e.trim(e(t).text()).length < 1)
                        return!1;
                    t.charAt(0) == "#" && (t = t.substring(1, t.length)), n = e("#" + t).html(), this.$caption.attr("id", t).html(n);
                    switch (this.options.captionAnimation) {
                        case"none":
                            this.$caption.show();
                            break;
                        case"fade":
                            this.$caption.fadeIn(this.options.captionAnimationSpeed);
                            break;
                        case"slideOpen":
                            this.$caption.slideDown(this.options.captionAnimationSpeed)
                        }
                } else
                    switch (this.options.captionAnimation) {
                        case"none":
                            this.$caption.hide();
                            break;
                        case"fade":
                            this.$caption.fadeOut(this.options.captionAnimationSpeed);
                            break;
                        case"slideOpen":
                            this.$caption.slideUp(this.options.captionAnimationSpeed)
                        }
            }, setupDirectionalNav: function() {
                var t = this, n = e(this.directionalNavHTML);
                n.find(".right").html(this.options.directionalNavRightText), n.find(".left").html(this.options.directionalNavLeftText), this.$wrapper.append(n), this.$wrapper.find(".left").click(function() {
                    t.stopClock(), t.options.resetTimerOnClick && (t.rotateTimer(!0), t.startClock()), t.$element.trigger("orbit.prev")
                }), this.$wrapper.find(".right").click(function() {
                    t.stopClock(), t.options.resetTimerOnClick && (t.rotateTimer(!0), t.startClock()), t.$element.trigger("orbit.next")
                })
            }, setupBulletNav: function() {
                this.$bullets = e(this.bulletHTML), this.$wrapper.append(this.$bullets), this.$slides.each(this.addBullet), this.$element.addClass("with-bullets"), this.options.centerBullets && this.$bullets.css("margin-left", -this.$bullets.outerWidth() / 2), this.options.bulletThumbsHideOnSmall && this.$bullets.addClass("hide-for-small")
            }, addBullet: function(t, n) {
                var r = t + 1, i = e("<li>" + r + "</li>"), s, o = this;
                this.options.bulletThumbs && (s = e(n).attr("data-thumb"), s && i.addClass("has-thumb").css({background: "url(" + this.options.bulletThumbLocation + s + ") no-repeat"})), this.$bullets.append(i), i.data("index", t), i.click(function() {
                    o.stopClock(), o.options.resetTimerOnClick && (o.rotateTimer(!0), o.startClock()), o.$element.trigger("orbit.goto", [i.data("index")])
                })
            }, setActiveBullet: function() {
                if (!this.options.bullets)
                    return!1;
                this.$bullets.find("li").removeClass("active").eq(this.activeSlide).addClass("active")
            }, resetAndUnlock: function() {
                this.$slides.eq(this.prevActiveSlide).css({"z-index": 1}), this.unlock(), this.options.afterSlideChange.call(this, this.$slides.eq(this.prevActiveSlide), this.$slides.eq(this.activeSlide))
            }, shift: function(t) {
                var n = t;
                this.prevActiveSlide = this.activeSlide;
                if (this.prevActiveSlide == n)
                    return!1;
                if (this.$slides.length == "1")
                    return!1;
                this.locked || (this.lock(), t == "next" ? (this.activeSlide++, this.activeSlide == this.numberSlides && (this.activeSlide = 0)) : t == "prev" ? (this.activeSlide--, this.activeSlide < 0 && (this.activeSlide = this.numberSlides - 1)) : (this.activeSlide = t, this.prevActiveSlide < this.activeSlide ? n = "next" : this.prevActiveSlide > this.activeSlide && (n = "prev")), this.setActiveBullet(), this.notifySlideChange(), this.$slides.eq(this.prevActiveSlide).css({"z-index": 2}), this.options.animation == "fade" && (this.$slides.eq(this.activeSlide).css({opacity: 0, "z-index": 3}).animate({opacity: 1}, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).animate({opacity: 0}, this.options.animationSpeed)), this.options.animation == "horizontal-slide" && (n == "next" && this.$slides.eq(this.activeSlide).css({left: this.orbitWidth, "z-index": 3}).css("opacity", 1).animate({left: 0}, this.options.animationSpeed, this.resetAndUnlock), n == "prev" && this.$slides.eq(this.activeSlide).css({left: -this.orbitWidth, "z-index": 3}).css("opacity", 1).animate({left: 0}, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0)), this.options.animation == "vertical-slide" && (n == "prev" && (this.$slides.eq(this.activeSlide).css({top: this.orbitHeight, "z-index": 3}).css("opacity", 1).animate({top: 0}, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0)), n == "next" && this.$slides.eq(this.activeSlide).css({top: -this.orbitHeight, "z-index": 3}).css("opacity", 1).animate({top: 0}, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0)), this.options.animation == "horizontal-push" && (n == "next" && (this.$slides.eq(this.activeSlide).css({left: this.orbitWidth, "z-index": 3}).animate({left: 0, opacity: 1}, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).animate({left: -this.orbitWidth}, this.options.animationSpeed, "", function() {
                    e(this).css({opacity: 0})
                })), n == "prev" && (this.$slides.eq(this.activeSlide).css({left: -this.orbitWidth, "z-index": 3}).animate({left: 0, opacity: 1}, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).animate({left: this.orbitWidth}, this.options.animationSpeed, "", function() {
                    e(this).css({opacity: 0})
                }))), this.options.animation == "vertical-push" && (n == "next" && (this.$slides.eq(this.activeSlide).css({top: -this.orbitHeight, "z-index": 3}).css("opacity", 1).animate({top: 0, opacity: 1}, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0).animate({top: this.orbitHeight}, this.options.animationSpeed, "")), n == "prev" && (this.$slides.eq(this.activeSlide).css({top: this.orbitHeight, "z-index": 3}).css("opacity", 1).animate({top: 0}, this.options.animationSpeed, this.resetAndUnlock), this.$slides.eq(this.prevActiveSlide).css("opacity", 0).animate({top: -this.orbitHeight}, this.options.animationSpeed))), this.setCaption()), this.activeSlide === this.$slides.length - 1 && this.options.singleCycle && this.stopClock()
            }};
        e.fn.orbit = function(n) {
            return this.each(function() {
                var r = e.extend({}, t);
                r.init(this, n)
            })
        }
    })(jQuery), function(e) {
        function n(t, n) {
            var r = e(t);
            r.bind("load.imageready", function() {
                n.apply(t, arguments), r.unbind("load.imageready")
            })
        }
        var t = {};
        e.event.special.imageready = {setup: function(e, n, r) {
                t = e || t
            }, add: function(r) {
                var i = e(this), s;
                this.nodeType === 1 && this.tagName.toLowerCase() === "img" && this.src !== "" && (t.forceLoad ? (s = i.attr("src"), i.attr("src", ""), n(this, r.handler), i.attr("src", s)) : this.complete || this.readyState === 4 ? r.handler.apply(this, arguments) : n(this, r.handler))
            }, teardown: function(t) {
                e(this).unbind(".imageready")
            }}
    }(jQuery);
    var Holder = Holder || {};
    (function(e, t) {
        function s(e, t) {
            var n = "complete", r = "readystatechange", i = !1, s = i, o = !0, u = e.document, a = u.documentElement, f = u.addEventListener ? "addEventListener" : "attachEvent", l = u.addEventListener ? "removeEventListener" : "detachEvent", c = u.addEventListener ? "" : "on", h = function(o) {
                (o.type != r || u.readyState == n) && ((o.type == "load" ? e : u)[l](c + o.type, h, i), !s && (s = !0) && t.call(e, null))
            }, p = function() {
                try {
                    a.doScroll("left")
                } catch (e) {
                    setTimeout(p, 50);
                    return
                }
                h("poll")
            };
            if (u.readyState == n)
                t.call(e, "lazy");
            else {
                if (u.createEventObject && a.doScroll) {
                    try {
                        o = !e.frameElement
                    } catch (d) {
                    }
                    o && p()
                }
                u[f](c + "DOMContentLoaded", h, i), u[f](c + r, h, i), e[f](c + "load", h, i)
            }
        }
        function o(e) {
            e = e.match(/^(\W)?(.*)/);
            var t = document["getElement" + (e[1] ? e[1] == "#" ? "ById" : "sByClassName" : "sByTagName")](e[2]), n = [];
            return t != null && (t.length ? n = t : t.length == 0 ? n = t : n = [t]), n
        }
        function u(e, t) {
            var n = {};
            for (var r in e)
                n[r] = e[r];
            for (var i in t)
                n[i] = t[i];
            return n
        }
        function a(e, t, n) {
            var r = [t.height, t.width].sort(), s = Math.round(r[1] / 16), o = Math.round(r[0] / 16), u = Math.max(n.size, s);
            i.width = t.width, i.height = t.height, e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = n.background, e.fillRect(0, 0, t.width, t.height), e.fillStyle = n.foreground, e.font = "bold " + u + "px sans-serif";
            var a = n.text ? n.text : t.width + "x" + t.height;
            return Math.round(e.measureText(a).width) / t.width > 1 && (u = Math.max(o, n.size)), e.font = "bold " + u + "px sans-serif", e.fillText(a, t.width / 2, t.height / 2, t.width), i.toDataURL("image/png")
        }
        var n = !1, r = !1, i = document.createElement("canvas");
        if (!i.getContext)
            r = !0;
        else if (i.toDataURL("image/png").indexOf("data:image/png") < 0)
            r = !0;
        else
            var f = i.getContext("2d");
        var l = {domain: "holder.js", images: "img", themes: {gray: {background: "#eee", foreground: "#aaa", size: 12}, social: {background: "#3a5a97", foreground: "#fff", size: 12}, industrial: {background: "#434A52", foreground: "#C2F200", size: 12}}};
        e.flags = {dimensions: {regex: /([0-9]+)x([0-9]+)/, output: function(e) {
                    var t = this.regex.exec(e);
                    return{width: +t[1], height: +t[2]}
                }}, colors: {regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i, output: function(e) {
                    var t = this.regex.exec(e);
                    return{size: l.themes.gray.size, foreground: "#" + t[2], background: "#" + t[1]}
                }}, text: {regex: /text\:(.*)/, output: function(e) {
                    return this.regex.exec(e)[1]
                }}};
        for (var c in e.flags)
            e.flags[c].match = function(e) {
                return e.match(this.regex)
            };
        e.add_theme = function(t, n) {
            return t != null && n != null && (l.themes[t] = n), e
        }, e.add_image = function(t, n) {
            var r = o(n);
            if (r.length)
                for (var i = 0, s = r.length; i < s; i++) {
                    var u = document.createElement("img");
                    u.setAttribute("data-src", t), r[i].appendChild(u)
                }
            return e
        }, e.run = function(t) {
            var n = u(l, t), i = o(n.images), s = !0;
            for (var c = i.length, h = 0; h < c; h++) {
                var p = l.themes.gray, d = i[h].getAttribute("data-src") || i[h].getAttribute("src");
                if (d && !!~d.indexOf(n.domain)) {
                    var v = !1, m = null, g = null, y = d.substr(d.indexOf(n.domain) + n.domain.length + 1).split("/");
                    for (sl = y.length, j = 0; j < sl; j++)
                        e.flags.dimensions.match(y[j]) ? (v = !0, m = e.flags.dimensions.output(y[j])) : e.flags.colors.match(y[j]) ? p = e.flags.colors.output(y[j]) : n.themes[y[j]] ? p = n.themes[y[j]] : e.flags.text.match(y[j]) && (g = e.flags.text.output(y[j]));
                    if (v) {
                        i[h].setAttribute("data-src", d);
                        var b = m.width + "x" + m.height;
                        i[h].setAttribute("alt", g ? g : p.text ? p.text + " [" + b + "]" : b), i[h].style.backgroundColor = p.background;
                        var p = g ? u(p, {text: g}) : p;
                        r || i[h].setAttribute("src", a(f, m, p))
                    }
                }
            }
            return e
        }, s(t, function() {
            n || e.run()
        })
    })(Holder, window);
    (function(e, t, n) {
        "use strict";
        e.fn.foundationNavigation = function(t) {
            var n = !1;
            Modernizr.touch || navigator.userAgent.match(/Windows Phone/i) ? (e(document).on("click.fndtn touchstart.fndtn", ".nav-bar a.flyout-toggle", function(t) {
                t.preventDefault();
                var r = e(this).siblings(".flyout").first();
                n === !1 && (e(".nav-bar .flyout").not(r).slideUp(500), r.slideToggle(500, function() {
                    n = !1
                })), n = !0
            }), e(".nav-bar>li.has-flyout", this).addClass("is-touch")) : e(".nav-bar>li.has-flyout", this).on("mouseenter mouseleave", function(t) {
                t.type == "mouseenter" && (e(".nav-bar").find(".flyout").hide(), e(this).children(".flyout").show());
                if (t.type == "mouseleave") {
                    var n = e(this).children(".flyout"), r = n.find("input"), i = function(t) {
                        var n;
                        return t.length > 0 ? (t.each(function() {
                            e(this).is(":focus") && (n = !0)
                        }), n) : !1
                    };
                    i(r) || e(this).children(".flyout").hide()
                }
            })
        }
    })(jQuery, this);
    (function(e, t, n) {
        "use strict";
        e.fn.foundationButtons = function(t) {
            var r = e(document), i = e.extend({dropdownAsToggle: !1, activeClass: "active"}, t), s = function(t) {
                e(".button.dropdown").find("ul").not(t).removeClass("show-dropdown")
            }, o = function(t) {
                var n = e(".button.dropdown").not(t);
                n.add(e("> span." + i.activeClass, n)).removeClass(i.activeClass)
            };
            r.on("click.fndtn", ".button.disabled", function(e) {
                e.preventDefault()
            }), e(".button.dropdown > ul", this).addClass("no-hover"), r.on("click.fndtn", ".button.dropdown:not(.split), .button.dropdown.split span", function(t) {
                var n = e(this), r = n.closest(".button.dropdown"), u = e("> ul", r);
                e.inArray(t.target.nodeName, ["A", "BUTTON"]) && t.preventDefault(), setTimeout(function() {
                    s(i.dropdownAsToggle ? "" : u), u.toggleClass("show-dropdown"), i.dropdownAsToggle && (o(r), n.toggleClass(i.activeClass))
                }, 0)
            }), r.on("click.fndtn", "body, html", function(t) {
                if (n == t.originalEvent)
                    return;
                e(t.originalEvent.target).is(".button.dropdown:not(.split), .button.dropdown.split span") || (s(), i.dropdownAsToggle && o())
            });
            var u = e(".button.dropdown:not(.large):not(.small):not(.tiny):visible", this).outerHeight() - 1, a = e(".button.large.dropdown:visible", this).outerHeight() - 1, f = e(".button.small.dropdown:visible", this).outerHeight() - 1, l = e(".button.tiny.dropdown:visible", this).outerHeight() - 1;
            e(".button.dropdown:not(.large):not(.small):not(.tiny) > ul", this).css("top", u), e(".button.dropdown.large > ul", this).css("top", a), e(".button.dropdown.small > ul", this).css("top", f), e(".button.dropdown.tiny > ul", this).css("top", l), e(".button.dropdown.up:not(.large):not(.small):not(.tiny) > ul", this).css("top", "auto").css("bottom", u - 2), e(".button.dropdown.up.large > ul", this).css("top", "auto").css("bottom", a - 2), e(".button.dropdown.up.small > ul", this).css("top", "auto").css("bottom", f - 2), e(".button.dropdown.up.tiny > ul", this).css("top", "auto").css("bottom", l - 2)
        }
    })(jQuery, this);
    (function(e, t, n, r) {
        "use strict";
        var i = {callback: e.noop, deep_linking: !0, init: !1}, s = {init: function(t) {
                return i = e.extend({}, i, t), this.each(function() {
                    i.init || s.events(), i.deep_linking && s.from_hash()
                })
            }, events: function() {
                e(n).on("click.fndtn", ".tabs a", function(t) {
                    s.set_tab(e(this).parent("dd, li"), t)
                }), i.init = !0
            }, set_tab: function(t, n) {
                var r = t.closest("dl, ul").find(".active"), s = t.children("a").attr("href"), o = /^#/.test(s), u = e(s + "Tab");
                o && u.length > 0 && (n && !i.deep_linking && n.preventDefault(), u.closest(".tabs-content").children("li").removeClass("active").hide(), u.css("display", "block").addClass("active")), r.removeClass("active"), t.addClass("active"), i.callback()
            }, from_hash: function() {
                var n = t.location.hash, r = e('a[href="' + n + '"]');
                r.trigger("click.fndtn")
            }};
        e.fn.foundationTabs = function(t) {
            if (s[t])
                return s[t].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof t == "object" || !t)
                return s.init.apply(this, arguments);
            e.error("Method " + t + " does not exist on jQuery.foundationTabs")
        }
    })(jQuery, this, this.document);
    /*
     * jQuery Foundation Tooltips 2.0.2
     * http://foundation.zurb.com
     * Copyright 2012, ZURB
     * Free to use under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     */
    /*jslint unparam: true, browser: true, indent: 2 */
    (function(e, t, n) {
        "use strict";
        var r = {bodyHeight: 0, selector: ".has-tip", additionalInheritableClasses: [], tooltipClass: ".tooltip", tipTemplate: function(e, t) {
                return'<span data-selector="' + e + '" class="' + r.tooltipClass.substring(1) + '">' + t + '<span class="nub"></span></span>'
            }}, i = {init: function(t) {
                return r = e.extend(r, t), r.selector = r.targetClass ? r.targetClass : r.selector, this.each(function() {
                    var t = e("body");
                    Modernizr.touch ? (t.on("click.tooltip touchstart.tooltip touchend.tooltip", r.selector, function(t) {
                        t.preventDefault(), e(r.tooltipClass).hide(), i.showOrCreateTip(e(this))
                    }), t.on("click.tooltip touchstart.tooltip touchend.tooltip", r.tooltipClass, function(t) {
                        t.preventDefault(), e(this).fadeOut(150)
                    })) : t.on("mouseenter.tooltip mouseleave.tooltip", r.selector, function(t) {
                        var n = e(this);
                        t.type === "mouseenter" ? i.showOrCreateTip(n) : t.type === "mouseleave" && i.hide(n)
                    }), e(this).data("tooltips", !0)
                })
            }, showOrCreateTip: function(e, t) {
                var n = i.getTip(e);
                n && n.length > 0 ? i.show(e) : i.create(e, t)
            }, getTip: function(t) {
                var n = i.selector(t), s = null;
                return n && (s = e("span[data-selector=" + n + "]" + r.tooltipClass)), s.length > 0 ? s : !1
            }, selector: function(e) {
                var t = e.attr("id"), r = e.data("selector");
                return t === n && r === n && (r = "tooltip" + Math.random().toString(36).substring(7), e.attr("data-selector", r)), t ? t : r
            }, create: function(t, n) {
                var s = e(r.tipTemplate(i.selector(t), e("<div>").html(n ? n : t.attr("title")).html())), o = i.inheritable_classes(t);
                s.addClass(o).appendTo("body"), Modernizr.touch && s.append('<span class="tap-to-close">tap to close </span>'), t.removeAttr("title"), i.show(t)
            }, reposition: function(n, r, i) {
                var s, o, u, a, f, l;
                r.css("visibility", "hidden").show(), s = n.data("width"), o = r.children(".nub"), u = o.outerHeight(), a = o.outerWidth(), l = function(e, t, n, r, i, s) {
                    return e.css({top: t, bottom: r, left: i, right: n, "max-width": s ? s : "auto"}).end()
                }, l(r, n.offset().top + n.outerHeight() + 10, "auto", "auto", n.offset().left, s), l(o, -u, "auto", "auto", 10);
                if (e(t).width() < 767) {
                    if (n.data("mobile-width"))
                        r.width(n.data("mobile-width")).css("left", 15).addClass("tip-override");
                    else {
                        f = n.closest(".columns"), f.length < 0 && (f = e("body"));
                        if (f.outerWidth())
                            r.width(f.outerWidth() - 25).css("left", 15).addClass("tip-override");
                        else {
                            var c = Math.ceil(e(t).width() * .9);
                            r.width(c).css("left", 15).addClass("tip-override")
                        }
                    }
                    l(o, -u, "auto", "auto", n.offset().left)
                } else
                    i && i.indexOf("tip-top") > -1 ? (l(r, n.offset().top - r.outerHeight() - u, "auto", "auto", n.offset().left, s).removeClass("tip-override"), l(o, "auto", "auto", -u, "auto")) : i && i.indexOf("tip-left") > -1 ? (l(r, n.offset().top + n.outerHeight() / 2 - u, "auto", "auto", n.offset().left - r.outerWidth() - 10, s).removeClass("tip-override"), l(o, r.outerHeight() / 2 - u / 2, -u, "auto", "auto")) : i && i.indexOf("tip-right") > -1 ? (l(r, n.offset().top + n.outerHeight() / 2 - u, "auto", "auto", n.offset().left + n.outerWidth() + 10, s).removeClass("tip-override"), l(o, r.outerHeight() / 2 - u / 2, "auto", "auto", -u)) : i && i.indexOf("tip-centered-top") > -1 ? (l(r, n.offset().top - r.outerHeight() - u, "auto", "auto", n.offset().left + (n.outerWidth() - r.outerWidth()) / 2, s).removeClass("tip-override"), l(o, "auto", r.outerWidth() / 2 - u / 2, -u, "auto")) : i && i.indexOf("tip-centered-bottom") > -1 && (l(r, n.offset().top + n.outerHeight() + 10, "auto", "auto", n.offset().left + (n.outerWidth() - r.outerWidth()) / 2, s).removeClass("tip-override"), l(o, -u, r.outerWidth() / 2 - u / 2, "auto", "auto"));
                r.css("visibility", "visible").hide()
            }, inheritable_classes: function(t) {
                var n = ["tip-top", "tip-left", "tip-bottom", "tip-right", "tip-centered-top", "tip-centered-bottom", "noradius"].concat(r.additionalInheritableClasses), i = t.attr("class"), s = i ? e.map(i.split(" "), function(t, r) {
                    if (e.inArray(t, n) !== -1)
                        return t
                }).join(" ") : "";
                return e.trim(s)
            }, show: function(e) {
                var t = i.getTip(e);
                i.reposition(e, t, e.attr("class")), t.fadeIn(150)
            }, hide: function(e) {
                var t = i.getTip(e);
                t.fadeOut(150)
            }, reload: function() {
                var t = e(this);
                return t.data("tooltips") ? t.foundationTooltips("destroy").foundationTooltips("init") : t.foundationTooltips("init")
            }, destroy: function() {
                return this.each(function() {
                    e(t).off(".tooltip"), e(r.selector).off(".tooltip"), e(r.tooltipClass).each(function(t) {
                        e(e(r.selector).get(t)).attr("title", e(this).text())
                    }).remove()
                })
            }};
        e.fn.foundationTooltips = function(t) {
            if (i[t])
                return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof t == "object" || !t)
                return i.init.apply(this, arguments);
            e.error("Method " + t + " does not exist on jQuery.foundationTooltips")
        }
    })(jQuery, this);
    (function(e, t, n) {
        "use strict";
        e.fn.foundationAccordion = function(t) {
            var n = function(e) {
                return e.hasClass("hover") && !Modernizr.touch
            };
            e(document).on("mouseenter", ".accordion li", function() {
                var t = e(this).parent();
                if (n(t)) {
                    var r = e(this).children(".content").first();
                    e(".content", t).not(r).hide().parent("li").removeClass("active"), r.show(0, function() {
                        r.parent("li").addClass("active")
                    })
                }
            }), e(document).on("click.fndtn", ".accordion li .title", function() {
                var t = e(this).closest("li"), r = t.parent();
                if (!n(r)) {
                    var i = t.children(".content").first();
                    t.hasClass("active") ? r.find("li").removeClass("active").end().find(".content").hide() : (e(".content", r).not(i).hide().parent("li").removeClass("active"), i.show(0, function() {
                        i.parent("li").addClass("active")
                    }))
                }
            })
        }
    })(jQuery, this);
    /*! http://mths.be/placeholder v2.0.7 by @mathias */
    (function(e, t, n) {
        function f(e) {
            var t = {}, r = /^jQuery\d+$/;
            return n.each(e.attributes, function(e, n) {
                n.specified && !r.test(n.name) && (t[n.name] = n.value)
            }), t
        }
        function l(e, r) {
            var i = this, s = n(i);
            if (i.value == s.attr("placeholder") && s.hasClass("placeholder"))
                if (s.data("placeholder-password")) {
                    s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id"));
                    if (e === !0)
                        return s[0].value = r;
                    s.focus()
                } else
                    i.value = "", s.removeClass("placeholder"), i == t.activeElement && i.select()
        }
        function c() {
            var e, t = this, r = n(t), i = r, s = this.id;
            if (t.value == "") {
                if (t.type == "password") {
                    if (!r.data("placeholder-textinput")) {
                        try {
                            e = r.clone().attr({type: "text"})
                        } catch (o) {
                            e = n("<input>").attr(n.extend(f(this), {type: "text"}))
                        }
                        e.removeAttr("name").data({"placeholder-password": !0, "placeholder-id": s}).bind("focus.placeholder", l), r.data({"placeholder-textinput": e, "placeholder-id": s}).before(e)
                    }
                    r = r.removeAttr("id").hide().prev().attr("id", s).show()
                }
                r.addClass("placeholder"), r[0].value = r.attr("placeholder")
            } else
                r.removeClass("placeholder")
        }
        var r = "placeholder"in t.createElement("input"), i = "placeholder"in t.createElement("textarea"), s = n.fn, o = n.valHooks, u, a;
        r && i ? (a = s.placeholder = function() {
            return this
        }, a.input = a.textarea = !0) : (a = s.placeholder = function() {
            var e = this;
            return e.filter((r ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({"focus.placeholder": l, "blur.placeholder": c}).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
        }, a.input = r, a.textarea = i, u = {get: function(e) {
                var t = n(e);
                return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
            }, set: function(e, r) {
                var i = n(e);
                return i.data("placeholder-enabled") ? (r == "" ? (e.value = r, e != t.activeElement && c.call(e)) : i.hasClass("placeholder") ? l.call(e, !0, r) || (e.value = r) : e.value = r, i) : e.value = r
            }}, r || (o.input = u), i || (o.textarea = u), n(function() {
            n(t).delegate("form", "submit.placeholder", function() {
                var e = n(".placeholder", this).each(l);
                setTimeout(function() {
                    e.each(c)
                }, 10)
            })
        }), n(e).bind("beforeunload.placeholder", function() {
            n(".placeholder").each(function() {
                this.value = ""
            })
        }))
    })(this, document, jQuery);
    (function(e, t, n) {
        "use strict";
        e.fn.foundationAlerts = function(t) {
            var n = e.extend({callback: e.noop}, t);
            e(document).on("click", ".alert-box a.close", function(t) {
                t.preventDefault(), e(this).closest(".alert-box").fadeOut(function() {
                    e(this).remove(), n.callback()
                })
            })
        }
    })(jQuery, this);
    /*
     * jQuery Foundation Top Bar 2.0.4
     * http://foundation.zurb.com
     * Copyright 2012, ZURB
     * Free to use under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     */
    /*jslint unparam: true, browser: true, indent: 2 */
    (function(e, t, n) {
        "use strict";
        var r = {index: 0, initialized: !1}, i = {init: function(n) {
                return this.each(function() {
                    r = e.extend(r, n), r.$w = e(t), r.$topbar = e("nav.top-bar"), r.$section = r.$topbar.find("section"), r.$titlebar = r.$topbar.children("ul:first");
                    var s = e("<div class='top-bar-js-breakpoint'/>").appendTo("body");
                    r.breakPoint = s.width(), s.remove(), r.initialized || (i.assemble(), r.initialized = !0), r.height || i.largestUL(), r.$topbar.parent().hasClass("fixed") && e("body").css("padding-top", r.$topbar.outerHeight()), e(".top-bar .toggle-topbar").off("click.fndtn").on("click.fndtn", function(e) {
                        e.preventDefault(), i.breakpoint() && (r.$topbar.toggleClass("expanded"), r.$topbar.css("min-height", "")), r.$topbar.hasClass("expanded") || (r.$section.css({left: "0%"}), r.$section.find(">.name").css({left: "100%"}), r.$section.find("li.moved").removeClass("moved"), r.index = 0)
                    }), e(".top-bar .has-dropdown>a").off("click.fndtn").on("click.fndtn", function(t) {
                        (Modernizr.touch || i.breakpoint()) && t.preventDefault();
                        if (i.breakpoint()) {
                            var n = e(this), s = n.closest("li");
                            r.index += 1, s.addClass("moved"), r.$section.css({left: -(100 * r.index) + "%"}), r.$section.find(">.name").css({left: 100 * r.index + "%"}), n.siblings("ul").height(r.height + r.$titlebar.outerHeight(!0)), r.$topbar.css("min-height", r.height + r.$titlebar.outerHeight(!0) * 2)
                        }
                    }), e(t).on("resize.fndtn.topbar", function() {
                        i.breakpoint() || r.$topbar.css("min-height", "")
                    }), e(".top-bar .has-dropdown .back").off("click.fndtn").on("click.fndtn", function(t) {
                        t.preventDefault();
                        var n = e(this), i = n.closest("li.moved"), s = i.parent();
                        r.index -= 1, r.$section.css({left: -(100 * r.index) + "%"}), r.$section.find(">.name").css({left: 100 * r.index + "%"}), r.index === 0 && r.$topbar.css("min-height", 0), setTimeout(function() {
                            i.removeClass("moved")
                        }, 300)
                    })
                })
            }, breakpoint: function() {
                return r.$w.width() < r.breakPoint
            }, assemble: function() {
                r.$section.detach(), r.$section.find(".has-dropdown>a").each(function() {
                    var t = e(this), n = t.siblings(".dropdown"), r = e('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');
                    r.find("h5>a").html(t.html()), n.prepend(r)
                }), r.$section.appendTo(r.$topbar)
            }, largestUL: function() {
                var t = r.$topbar.find("section ul ul"), n = t.first(), i = 0;
                t.each(function() {
                    e(this).children("li").length > n.children("li").length && (n = e(this))
                }), n.children("li").each(function() {
                    i += e(this).outerHeight(!0)
                }), r.height = i
            }};
        e.fn.foundationTopBar = function(t) {
            if (i[t])
                return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof t == "object" || !t)
                return i.init.apply(this, arguments);
            e.error("Method " + t + " does not exist on jQuery.foundationTopBar")
        };
        if (e(".sticky").length > 0) {
            var s = e(".sticky").length ? e(".sticky").offset().top : 0, o = e(t);
            o.scroll(function() {
                o.scrollTop() >= s ? e(".sticky").addClass("fixed") : o.scrollTop() < s && e(".sticky").removeClass("fixed")
            })
        }
    })(jQuery, this);
    /*
     * jQuery Foundation Joyride Plugin 2.0.3
     * http://foundation.zurb.com
     * Copyright 2012, ZURB
     * Free to use under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     */
    /*jslint unparam: true, browser: true, indent: 2 */
    (function(e, t, n) {
        "use strict";
        var r = {version: "2.0.3", tipLocation: "bottom", nubPosition: "auto", scrollSpeed: 300, timer: 0, startTimerOnClick: !0, startOffset: 0, nextButton: !0, tipAnimation: "fade", pauseAfter: [], tipAnimationFadeSpeed: 300, cookieMonster: !1, cookieName: "joyride", cookieDomain: !1, tipContainer: "body", postRideCallback: e.noop, postStepCallback: e.noop, template: {link: '<a href="#close" class="joyride-close-tip">X</a>', timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>', tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>', wrapper: '<div class="joyride-content-wrapper"></div>', button: '<a href="#" class="small button joyride-next-tip"></a>'}}, i = i || !1, s = {}, o = {init: function(n) {
                return this.each(function() {
                    if (e.isEmptyObject(s)) {
                        s = e.extend(!0, r, n), s.document = t.document, s.$document = e(s.document), s.$window = e(t), s.$content_el = e(this), s.body_offset = e(s.tipContainer).position(), s.$tip_content = e("> li", s.$content_el), s.paused = !1, s.attempts = 0, s.tipLocationPatterns = {top: ["bottom"], bottom: [], left: ["right", "top", "bottom"], right: ["left", "top", "bottom"]}, o.jquery_check(), e.isFunction(e.cookie) || (s.cookieMonster = !1);
                        if (!s.cookieMonster || !e.cookie(s.cookieName))
                            s.$tip_content.each(function(t) {
                                o.create({$li: e(this), index: t})
                            }), !s.startTimerOnClick && s.timer > 0 ? (o.show("init"), o.startTimer()) : o.show("init");
                        s.$document.on("click.joyride", ".joyride-next-tip, .joyride-modal-bg", function(e) {
                            e.preventDefault(), s.$li.next().length < 1 ? o.end() : s.timer > 0 ? (clearTimeout(s.automate), o.hide(), o.show(), o.startTimer()) : (o.hide(), o.show())
                        }), s.$document.on("click.joyride", ".joyride-close-tip", function(e) {
                            e.preventDefault(), o.end()
                        }), s.$window.bind("resize.joyride", function(e) {
                            o.is_phone() ? o.pos_phone() : o.pos_default()
                        })
                    } else
                        o.restart()
                })
            }, resume: function() {
                o.set_li(), o.show()
            }, tip_template: function(t) {
                var n, r;
                return t.tip_class = t.tip_class || "", n = e(s.template.tip).addClass(t.tip_class), r = e.trim(e(t.li).html()) + o.button_text(t.button_text) + s.template.link + o.timer_instance(t.index), n.append(e(s.template.wrapper)), n.first().attr("data-index", t.index), e(".joyride-content-wrapper", n).append(r), n[0]
            }, timer_instance: function(t) {
                var n;
                return t === 0 && s.startTimerOnClick && s.timer > 0 || s.timer === 0 ? n = "" : n = o.outerHTML(e(s.template.timer)[0]), n
            }, button_text: function(t) {
                return s.nextButton ? (t = e.trim(t) || "Next", t = o.outerHTML(e(s.template.button).append(t)[0])) : t = "", t
            }, create: function(t) {
                var n = t.$li.attr("data-button") || t.$li.attr("data-text"), r = t.$li.attr("class"), i = e(o.tip_template({tip_class: r, index: t.index, button_text: n, li: t.$li}));
                e(s.tipContainer).append(i)
            }, show: function(t) {
                var r = {}, i, u = [], a = 0, f, l = null;
                if (s.$li === n || e.inArray(s.$li.index(), s.pauseAfter) === -1) {
                    s.paused ? s.paused = !1 : o.set_li(t), s.attempts = 0;
                    if (s.$li.length && s.$target.length > 0) {
                        u = (s.$li.data("options") || ":").split(";"), a = u.length;
                        for (i = a - 1; i >= 0; i--)
                            f = u[i].split(":"), f.length === 2 && (r[e.trim(f[0])] = e.trim(f[1]));
                        s.tipSettings = e.extend({}, s, r), s.tipSettings.tipLocationPattern = s.tipLocationPatterns[s.tipSettings.tipLocation], /body/i.test(s.$target.selector) || o.scroll_to(), o.is_phone() ? o.pos_phone(!0) : o.pos_default(!0), l = e(".joyride-timer-indicator", s.$next_tip), /pop/i.test(s.tipAnimation) ? (l.outerWidth(0), s.timer > 0 ? (s.$next_tip.show(), l.animate({width: e(".joyride-timer-indicator-wrap", s.$next_tip).outerWidth()}, s.timer)) : s.$next_tip.show()) : /fade/i.test(s.tipAnimation) && (l.outerWidth(0), s.timer > 0 ? (s.$next_tip.fadeIn(s.tipAnimationFadeSpeed), s.$next_tip.show(), l.animate({width: e(".joyride-timer-indicator-wrap", s.$next_tip).outerWidth()}, s.timer)) : s.$next_tip.fadeIn(s.tipAnimationFadeSpeed)), s.$current_tip = s.$next_tip
                    } else
                        s.$li && s.$target.length < 1 ? o.show() : o.end()
                } else
                    s.paused = !0
            }, is_phone: function() {
                return i ? i.mq("only screen and (max-width: 767px)") : s.$window.width() < 767 ? !0 : !1
            }, hide: function() {
                s.postStepCallback(s.$li.index(), s.$current_tip), e(".joyride-modal-bg").hide(), s.$current_tip.hide()
            }, set_li: function(e) {
                e ? (s.$li = s.$tip_content.eq(s.startOffset), o.set_next_tip(), s.$current_tip = s.$next_tip) : (s.$li = s.$li.next(), o.set_next_tip()), o.set_target()
            }, set_next_tip: function() {
                s.$next_tip = e(".joyride-tip-guide[data-index=" + s.$li.index() + "]")
            }, set_target: function() {
                var t = s.$li.attr("data-class"), n = s.$li.attr("data-id"), r = function() {
                    return n ? e(s.document.getElementById(n)) : t ? e("." + t).first() : e("body")
                };
                s.$target = r()
            }, scroll_to: function() {
                var t, n;
                t = s.$window.height() / 2, n = Math.ceil(s.$target.offset().top - t + s.$next_tip.outerHeight()), e("html, body").stop().animate({scrollTop: n}, s.scrollSpeed)
            }, paused: function() {
                return e.inArray(s.$li.index() + 1, s.pauseAfter) === -1 ? !0 : !1
            }, destroy: function() {
                s.$document.off(".joyride"), e(t).off(".joyride"), e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), e(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(s.automate), s = {}
            }, restart: function() {
                o.hide(), s.$li = n, o.show("init")
            }, pos_default: function(t) {
                var n = Math.ceil(s.$window.height() / 2), r = s.$next_tip.offset(), i = e(".joyride-nub", s.$next_tip), u = Math.ceil(i.outerHeight() / 2), a = t || !1;
                a && (s.$next_tip.css("visibility", "hidden"), s.$next_tip.show()), /body/i.test(s.$target.selector) ? s.$li.length && o.pos_modal(i) : (o.bottom() ? (s.$next_tip.css({top: s.$target.offset().top + u + s.$target.outerHeight(), left: s.$target.offset().left}), o.nub_position(i, s.tipSettings.nubPosition, "top")) : o.top() ? (s.$next_tip.css({top: s.$target.offset().top - s.$next_tip.outerHeight() - u, left: s.$target.offset().left}), o.nub_position(i, s.tipSettings.nubPosition, "bottom")) : o.right() ? (s.$next_tip.css({top: s.$target.offset().top, left: s.$target.outerWidth() + s.$target.offset().left}), o.nub_position(i, s.tipSettings.nubPosition, "left")) : o.left() && (s.$next_tip.css({top: s.$target.offset().top, left: s.$target.offset().left - s.$next_tip.outerWidth() - u}), o.nub_position(i, s.tipSettings.nubPosition, "right")), !o.visible(o.corners(s.$next_tip)) && s.attempts < s.tipSettings.tipLocationPattern.length && (i.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), s.tipSettings.tipLocation = s.tipSettings.tipLocationPattern[s.attempts], s.attempts++, o.pos_default(!0))), a && (s.$next_tip.hide(), s.$next_tip.css("visibility", "visible"))
            }, pos_phone: function(t) {
                var n = s.$next_tip.outerHeight(), r = s.$next_tip.offset(), i = s.$target.outerHeight(), u = e(".joyride-nub", s.$next_tip), a = Math.ceil(u.outerHeight() / 2), f = t || !1;
                u.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), f && (s.$next_tip.css("visibility", "hidden"), s.$next_tip.show()), /body/i.test(s.$target.selector) ? s.$li.length && o.pos_modal(u) : o.top() ? (s.$next_tip.offset({top: s.$target.offset().top - n - a}), u.addClass("bottom")) : (s.$next_tip.offset({top: s.$target.offset().top + i + a}), u.addClass("top")), f && (s.$next_tip.hide(), s.$next_tip.css("visibility", "visible"))
            }, pos_modal: function(t) {
                o.center(), t.hide(), e(".joyride-modal-bg").length < 1 && e("body").append('<div class="joyride-modal-bg">').show(), /pop/i.test(s.tipAnimation) ? e(".joyride-modal-bg").show() : e(".joyride-modal-bg").fadeIn(s.tipAnimationFadeSpeed)
            }, center: function() {
                var e = s.$window;
                return s.$next_tip.css({top: (e.height() - s.$next_tip.outerHeight()) / 2 + e.scrollTop(), left: (e.width() - s.$next_tip.outerWidth()) / 2 + e.scrollLeft()}), !0
            }, bottom: function() {
                return/bottom/i.test(s.tipSettings.tipLocation)
            }, top: function() {
                return/top/i.test(s.tipSettings.tipLocation)
            }, right: function() {
                return/right/i.test(s.tipSettings.tipLocation)
            }, left: function() {
                return/left/i.test(s.tipSettings.tipLocation)
            }, corners: function(e) {
                var t = s.$window, n = t.width() + t.scrollLeft(), r = t.width() + t.scrollTop();
                return[e.offset().top <= t.scrollTop(), n <= e.offset().left + e.outerWidth(), r <= e.offset().top + e.outerHeight(), t.scrollLeft() >= e.offset().left]
            }, visible: function(e) {
                var t = e.length;
                while (t--)
                    if (e[t])
                        return!1;
                return!0
            }, nub_position: function(e, t, n) {
                t === "auto" ? e.addClass(n) : e.addClass(t)
            }, startTimer: function() {
                s.$li.length ? s.automate = setTimeout(function() {
                    o.hide(), o.show(), o.startTimer()
                }, s.timer) : clearTimeout(s.automate)
            }, end: function() {
                s.cookieMonster && e.cookie(s.cookieName, "ridden", {expires: 365, domain: s.cookieDomain}), s.timer > 0 && clearTimeout(s.automate), e(".joyride-modal-bg").hide(), s.$current_tip.hide(), s.postStepCallback(s.$li.index(), s.$current_tip), s.postRideCallback(s.$li.index(), s.$current_tip)
            }, jquery_check: function() {
                return e.isFunction(e.fn.on) ? !0 : (e.fn.on = function(e, t, n) {
                    return this.delegate(t, e, n)
                }, e.fn.off = function(e, t, n) {
                    return this.undelegate(t, e, n)
                }, !1)
            }, outerHTML: function(e) {
                return e.outerHTML || (new XMLSerializer).serializeToString(e)
            }, version: function() {
                return s.version
            }};
        e.fn.joyride = function(t) {
            if (o[t])
                return o[t].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof t == "object" || !t)
                return o.init.apply(this, arguments);
            e.error("Method " + t + " does not exist on jQuery.joyride")
        }
    })(jQuery, this);
    /*
     * jQuery Foundation Clearing 1.2.1
     * http://foundation.zurb.com
     * Copyright 2012, ZURB
     * Free to use under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     */
    /*jslint unparam: true, browser: true, indent: 2 */
    (function(e, t, n, r) {
        "use strict";
        var i = {templates: {viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><img src="#"><p class="clearing-caption"></p><a href="#" class="clearing-main-left"></a><a href="#" class="clearing-main-right"></a></div>'}, close_selectors: "a.clearing-close", initialized: !1, locked: !1}, s = {init: function(t, r) {
                return this.find("ul[data-clearing]").each(function() {
                    var t = e(n), r = e(this), o = o || {}, u = u || {}, a = r.data("fndtn.clearing.settings");
                    a || (o.$parent = r.parent(), r.data("fndtn.clearing.settings", e.extend({}, i, o)), s.assemble(r.find("li")), i.initialized || (s.events(r), Modernizr.touch && s.swipe_events()))
                })
            }, events: function(r) {
                var o = r.data("fndtn.clearing.settings");
                e(n).on("click.fndtn.clearing", "ul[data-clearing] li", function(t, n, r) {
                    var n = n || e(this), r = r || n, i = n.parent().data("fndtn.clearing.settings");
                    t.preventDefault(), i || n.parent().foundationClearing(), s.open(e(t.target), n, r), s.update_paddles(r)
                }).on("click.fndtn.clearing", ".clearing-main-right", function(e) {
                    s.nav(e, "next")
                }).on("click.fndtn.clearing", ".clearing-main-left", function(e) {
                    s.nav(e, "prev")
                }).on("click.fndtn.clearing", o.close_selectors, this.close).on("keydown.fndtn.clearing", this.keydown), e(t).on("resize.fndtn.clearing", this.resize), i.initialized = !0
            }, swipe_events: function() {
                e(n).bind("swipeleft", "ul[data-clearing]", function(e) {
                    s.nav(e, "next")
                }).bind("swiperight", "ul[data-clearing]", function(e) {
                    s.nav(e, "prev")
                }).bind("movestart", "ul[data-clearing]", function(e) {
                    (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && e.preventDefault()
                })
            }, assemble: function(e) {
                var t = e.parent(), n = t.data("fndtn.clearing.settings"), r = t.detach(), i = {grid: '<div class="carousel">' + this.outerHTML(r[0]) + "</div>", viewing: n.templates.viewing}, s = '<div class="clearing-assembled"><div>' + i.viewing + i.grid + "</div></div>";
                return n.$parent.append(s)
            }, open: function(e, t, n) {
                var r = n.closest(".clearing-assembled"), i = r.find("div:first"), o = i.find(".visible-img"), u = o.find("img").not(e);
                s.locked() || (u.attr("src", this.load(e)), u.loaded(function() {
                    r.addClass("clearing-blackout"), i.addClass("clearing-container"), this.caption(o.find(".clearing-caption"), e), o.show(), this.fix_height(n), this.center(u), this.shift(t, n, function() {
                        n.siblings().removeClass("visible"), n.addClass("visible")
                    })
                }.bind(this)))
            }, close: function(t) {
                t.preventDefault();
                var n = function(e) {
                    return/blackout/.test(e.selector) ? e : e.closest(".clearing-blackout")
                }(e(this)), r, s;
                return this === t.target && n && (r = n.find("div:first"), s = r.find(".visible-img"), i.prev_index = 0, n.find("ul[data-clearing]").attr("style", ""), n.removeClass("clearing-blackout"), r.removeClass("clearing-container"), s.hide()), !1
            }, keydown: function(t) {
                var n = e(".clearing-blackout").find("ul[data-clearing]");
                t.which === 39 && s.go(n, "next"), t.which === 37 && s.go(n, "prev"), t.which === 27 && e("a.clearing-close").trigger("click")
            }, nav: function(t, n) {
                var r = e(".clearing-blackout").find("ul[data-clearing]");
                t.preventDefault(), this.go(r, n)
            }, resize: function() {
                var t = e(".clearing-blackout .visible-img").find("img");
                t.length > 0 && s.center(t)
            }, fix_height: function(t) {
                var n = t.siblings();
                n.each(function() {
                    var t = e(this), n = t.find("img");
                    t.height() > n.outerHeight() && t.addClass("fix-height")
                }).closest("ul").width(n.length * 100 + "%")
            }, update_paddles: function(e) {
                var t = e.closest(".carousel").siblings(".visible-img");
                e.next().length > 0 ? t.find(".clearing-main-right").removeClass("disabled") : t.find(".clearing-main-right").addClass("disabled"), e.prev().length > 0 ? t.find(".clearing-main-left").removeClass("disabled") : t.find(".clearing-main-left").addClass("disabled")
            }, load: function(e) {
                var t = e.parent().attr("href");
                return this.preload(e), t ? t : e.attr("src")
            }, preload: function(e) {
                this.img(e.closest("li").next()), this.img(e.closest("li").prev())
            }, img: function(e) {
                if (e.length > 0) {
                    var t = new Image, n = e.find("a");
                    n.length > 0 ? t.src = n.attr("href") : t.src = e.find("img").attr("src")
                }
            }, caption: function(e, t) {
                var n = t.data("caption");
                n ? e.text(n).show() : e.text("").hide()
            }, go: function(e, t) {
                var n = e.find(".visible"), r = n[t]();
                r.length > 0 && r.find("img").trigger("click", [n, r])
            }, shift: function(e, t, n) {
                var r = t.parent(), s = i.prev_index, o = this.direction(r, e, t), u = parseInt(r.css("left"), 10), a = t.outerWidth(), f;
                t.index() !== s && !/skip/.test(o) ? /left/.test(o) ? (this.lock(), r.animate({left: u + a}, 300, this.unlock)) : /right/.test(o) && (this.lock(), r.animate({left: u - a}, 300, this.unlock)) : /skip/.test(o) && (f = t.index() - i.up_count, this.lock(), f > 0 ? r.animate({left: -(f * a)}, 300, this.unlock) : r.animate({left: 0}, 300, this.unlock)), n()
            }, lock: function() {
                i.locked = !0
            }, unlock: function() {
                i.locked = !1
            }, locked: function() {
                return i.locked
            }, direction: function(t, n, r) {
                var s = t.find("li"), o = s.outerWidth() + s.outerWidth() / 4, u = Math.floor(e(".clearing-container").outerWidth() / o) - 1, a = s.index(r), f;
                return i.up_count = u, this.adjacent(i.prev_index, a) ? a > u && a > i.prev_index ? f = "right" : a > u - 1 && a <= i.prev_index ? f = "left" : f = !1 : f = "skip", i.prev_index = a, f
            }, adjacent: function(e, t) {
                for (var n = t + 1; n >= t - 1; n--)
                    if (n === e)
                        return!0;
                return!1
            }, center: function(e) {
                e.css({marginLeft: -(e.outerWidth() / 2), marginTop: -(e.outerHeight() / 2)})
            }, outerHTML: function(e) {
                return e.outerHTML || (new XMLSerializer).serializeToString(e)
            }};
        e.fn.foundationClearing = function(t) {
            if (s[t])
                return s[t].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof t == "object" || !t)
                return s.init.apply(this, arguments);
            e.error("Method " + t + " does not exist on jQuery.foundationClearing")
        }, function(e) {
            e.fn.loaded = function(t, n) {
                function o() {
                    s -= 1, !s && t()
                }
                function u() {
                    this.one("load", o);
                    if (e.browser.msie) {
                        var t = this.attr("src"), n = t.match(/\?/) ? "&" : "?";
                        n += r.cachePrefix + "=" + (new Date).getTime(), this.attr("src", t + n)
                    }
                }
                var r = e.extend({}, e.fn.loaded.defaults, n), i = this.find("img").add(this.filter("img")), s = i.length;
                return i.each(function() {
                    var t = e(this);
                    if (!t.attr("src")) {
                        o();
                        return
                    }
                    this.complete || this.readyState === 4 ? o() : u.call(t)
                })
            }, e.fn.loaded.defaults = {cachePrefix: "random"}
        }(jQuery)
    })(jQuery, this, this.document);
    /*
     * jQuery Foundation Magellan 0.1.0
     * http://foundation.zurb.com
     * Copyright 2012, ZURB
     * Free to use under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     */
    /*jslint unparam: true, browser: true, indent: 2 */
    (function(e, t, n) {
        "use strict";
        e.fn.foundationMagellan = function(n) {
            var r = e(t), i = e(document), s = e("[data-magellan-expedition=fixed]"), o = {threshold: s.length ? s.outerHeight(!0) : 0, activeClass: "active"}, n = e.extend({}, o, n);
            i.on("magellan.arrival", "[data-magellan-arrival]", function(t) {
                var r = e(this), i = r.closest("[data-magellan-expedition]"), s = i.attr("data-magellan-active-class") || n.activeClass;
                r.closest("[data-magellan-expedition]").find("[data-magellan-arrival]").not(this).removeClass(s), r.addClass(s)
            });
            var u = e("[data-magellan-expedition]");
            u.find("[data-magellan-arrival]:first").addClass(u.attr("data-magellan-active-class") || n.activeClass), s.on("magellan.update-position", function() {
                var t = e(this);
                t.data("magellan-fixed-position", ""), t.data("magellan-top-offset", "")
            }).trigger("magellan.update-position"), r.on("resize.magellan", function() {
                s.trigger("magellan.update-position")
            }), r.on("scroll.magellan", function() {
                var t = r.scrollTop();
                s.each(function() {
                    var r = e(this);
                    r.data("magellan-top-offset") === "" && r.data("magellan-top-offset", r.offset().top);
                    var i = t + n.threshold > r.data("magellan-top-offset");
                    r.data("magellan-fixed-position") != i && (r.data("magellan-fixed-position", i), i ? r.css({position: "fixed", top: 0}) : r.css({position: "", top: ""}))
                })
            });
            var a = e("[data-magellan-destination]:last");
            a.length > 0 && r.on("scroll.magellan", function(t) {
                var s = r.scrollTop(), o = s + r.outerHeight(!0), u = Math.ceil(a.offset().top);
                e("[data-magellan-destination]").each(function() {
                    var t = e(this), r = t.attr("data-magellan-destination"), a = t.offset().top - s;
                    a <= n.threshold && e("[data-magellan-arrival=" + r + "]").trigger("magellan.arrival"), o >= i.outerHeight(!0) && u > s && u < o && e("[data-magellan-arrival]:last").trigger("magellan.arrival")
                })
            })
        }
    })(jQuery, this);