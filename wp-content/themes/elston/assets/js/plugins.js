//html5 shiv script
(function (l, f) {
  function m() {
    var a = e.elements;
    return "string" == typeof a ? a.split(" ") : a;
  }
  function i(a) {
    var b = n[a[o]];
    b || ((b = {}), h++, (a[o] = h), (n[h] = b));
    return b;
  }
  function p(a, b, c) {
    b || (b = f);
    if (g) return b.createElement(a);
    c || (c = i(b));
    b = c.cache[a]
      ? c.cache[a].cloneNode()
      : r.test(a)
      ? (c.cache[a] = c.createElem(a)).cloneNode()
      : c.createElem(a);
    return b.canHaveChildren && !s.test(a) ? c.frag.appendChild(b) : b;
  }
  function t(a, b) {
    if (!b.cache)
      (b.cache = {}),
        (b.createElem = a.createElement),
        (b.createFrag = a.createDocumentFragment),
        (b.frag = b.createFrag());
    a.createElement = function (c) {
      return !e.shivMethods ? b.createElem(c) : p(c, a, b);
    };
    a.createDocumentFragment = Function(
      "h,f",
      "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
        m()
          .join()
          .replace(/[\w\-]+/g, function (a) {
            b.createElem(a);
            b.frag.createElement(a);
            return 'c("' + a + '")';
          }) +
        ");return n}"
    )(e, b.frag);
  }
  function q(a) {
    a || (a = f);
    var b = i(a);
    if (e.shivCSS && !j && !b.hasCSS) {
      var c,
        d = a;
      c = d.createElement("p");
      d = d.getElementsByTagName("head")[0] || d.documentElement;
      c.innerHTML =
        "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";
      c = d.insertBefore(c.lastChild, d.firstChild);
      b.hasCSS = !!c;
    }
    g || t(a, b);
    return a;
  }
  var k = l.html5 || {},
    s = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
    r =
      /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
    j,
    o = "_html5shiv",
    h = 0,
    n = {},
    g;
  (function () {
    try {
      var a = f.createElement("a");
      a.innerHTML = "<xyz></xyz>";
      j = "hidden" in a;
      var b;
      if (!(b = 1 == a.childNodes.length)) {
        f.createElement("a");
        var c = f.createDocumentFragment();
        b =
          "undefined" == typeof c.cloneNode ||
          "undefined" == typeof c.createDocumentFragment ||
          "undefined" == typeof c.createElement;
      }
      g = b;
    } catch (d) {
      g = j = !0;
    }
  })();
  var e = {
    elements:
      k.elements ||
      "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
    version: "3.7.0",
    shivCSS: !1 !== k.shivCSS,
    supportsUnknownElements: g,
    shivMethods: !1 !== k.shivMethods,
    type: "default",
    shivDocument: q,
    createElement: p,
    createDocumentFragment: function (a, b) {
      a || (a = f);
      if (g) return a.createDocumentFragment();
      for (
        var b = b || i(a), c = b.frag.cloneNode(), d = 0, e = m(), h = e.length;
        d < h;
        d++
      )
        c.createElement(e[d]);
      return c;
    },
  };
  l.html5 = e;
  q(f);
})(this, document);

//respond script
/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */
!(function (a) {
  "use strict";
  a.matchMedia =
    a.matchMedia ||
    (function (a) {
      var b,
        c = a.documentElement,
        d = c.firstElementChild || c.firstChild,
        e = a.createElement("body"),
        f = a.createElement("div");
      return (
        (f.id = "mq-test-1"),
        (f.style.cssText = "position:absolute;top:-100em"),
        (e.style.background = "none"),
        e.appendChild(f),
        function (a) {
          return (
            (f.innerHTML =
              '&shy;<style media="' +
              a +
              '"> #mq-test-1 { width: 42px; }</style>'),
            c.insertBefore(e, d),
            (b = 42 === f.offsetWidth),
            c.removeChild(e),
            { matches: b, media: a }
          );
        }
      );
    })(a.document);
})(this),
  (function (a) {
    "use strict";
    function b() {
      u(!0);
    }
    var c = {};
    (a.respond = c), (c.update = function () {});
    var d = [],
      e = (function () {
        var b = !1;
        try {
          b = new a.XMLHttpRequest();
        } catch (c) {
          b = new a.ActiveXObject("Microsoft.XMLHTTP");
        }
        return function () {
          return b;
        };
      })(),
      f = function (a, b) {
        var c = e();
        c &&
          (c.open("GET", a, !0),
          (c.onreadystatechange = function () {
            4 !== c.readyState ||
              (200 !== c.status && 304 !== c.status) ||
              b(c.responseText);
          }),
          4 !== c.readyState && c.send(null));
      };
    if (
      ((c.ajax = f),
      (c.queue = d),
      (c.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes:
          /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
        maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
      }),
      (c.mediaQueriesSupported =
        a.matchMedia &&
        null !== a.matchMedia("only all") &&
        a.matchMedia("only all").matches),
      !c.mediaQueriesSupported)
    ) {
      var g,
        h,
        i,
        j = a.document,
        k = j.documentElement,
        l = [],
        m = [],
        n = [],
        o = {},
        p = 30,
        q = j.getElementsByTagName("head")[0] || k,
        r = j.getElementsByTagName("base")[0],
        s = q.getElementsByTagName("link"),
        t = function () {
          var a,
            b = j.createElement("div"),
            c = j.body,
            d = k.style.fontSize,
            e = c && c.style.fontSize,
            f = !1;
          return (
            (b.style.cssText = "position:absolute;font-size:1em;width:1em"),
            c ||
              ((c = f = j.createElement("body")),
              (c.style.background = "none")),
            (k.style.fontSize = "100%"),
            (c.style.fontSize = "100%"),
            c.appendChild(b),
            f && k.insertBefore(c, k.firstChild),
            (a = b.offsetWidth),
            f ? k.removeChild(c) : c.removeChild(b),
            (k.style.fontSize = d),
            e && (c.style.fontSize = e),
            (a = i = parseFloat(a))
          );
        },
        u = function (b) {
          var c = "clientWidth",
            d = k[c],
            e = ("CSS1Compat" === j.compatMode && d) || j.body[c] || d,
            f = {},
            o = s[s.length - 1],
            r = new Date().getTime();
          if (b && g && p > r - g)
            return a.clearTimeout(h), (h = a.setTimeout(u, p)), void 0;
          g = r;
          for (var v in l)
            if (l.hasOwnProperty(v)) {
              var w = l[v],
                x = w.minw,
                y = w.maxw,
                z = null === x,
                A = null === y,
                B = "em";
              x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? i || t() : 1)),
                y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? i || t() : 1)),
                (w.hasquery &&
                  ((z && A) || !(z || e >= x) || !(A || y >= e))) ||
                  (f[w.media] || (f[w.media] = []),
                  f[w.media].push(m[w.rules]));
            }
          for (var C in n)
            n.hasOwnProperty(C) &&
              n[C] &&
              n[C].parentNode === q &&
              q.removeChild(n[C]);
          n.length = 0;
          for (var D in f)
            if (f.hasOwnProperty(D)) {
              var E = j.createElement("style"),
                F = f[D].join("\n");
              (E.type = "text/css"),
                (E.media = D),
                q.insertBefore(E, o.nextSibling),
                E.styleSheet
                  ? (E.styleSheet.cssText = F)
                  : E.appendChild(j.createTextNode(F)),
                n.push(E);
            }
        },
        v = function (a, b, d) {
          var e = a.replace(c.regex.keyframes, "").match(c.regex.media),
            f = (e && e.length) || 0;
          b = b.substring(0, b.lastIndexOf("/"));
          var g = function (a) {
              return a.replace(c.regex.urls, "$1" + b + "$2$3");
            },
            h = !f && d;
          b.length && (b += "/"), h && (f = 1);
          for (var i = 0; f > i; i++) {
            var j, k, n, o;
            h
              ? ((j = d), m.push(g(a)))
              : ((j = e[i].match(c.regex.findStyles) && RegExp.$1),
                m.push(RegExp.$2 && g(RegExp.$2))),
              (n = j.split(",")),
              (o = n.length);
            for (var p = 0; o > p; p++)
              (k = n[p]),
                l.push({
                  media:
                    (k.split("(")[0].match(c.regex.only) && RegExp.$2) || "all",
                  rules: m.length - 1,
                  hasquery: k.indexOf("(") > -1,
                  minw:
                    k.match(c.regex.minw) &&
                    parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                  maxw:
                    k.match(c.regex.maxw) &&
                    parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                });
          }
          u();
        },
        w = function () {
          if (d.length) {
            var b = d.shift();
            f(b.href, function (c) {
              v(c, b.href, b.media),
                (o[b.href] = !0),
                a.setTimeout(function () {
                  w();
                }, 0);
            });
          }
        },
        x = function () {
          for (var b = 0; b < s.length; b++) {
            var c = s[b],
              e = c.href,
              f = c.media,
              g = c.rel && "stylesheet" === c.rel.toLowerCase();
            e &&
              g &&
              !o[e] &&
              (c.styleSheet && c.styleSheet.rawCssText
                ? (v(c.styleSheet.rawCssText, e, f), (o[e] = !0))
                : ((!/^([a-zA-Z:]*\/\/)/.test(e) && !r) ||
                    e.replace(RegExp.$1, "").split("/")[0] ===
                      a.location.host) &&
                  ("//" === e.substring(0, 2) && (e = a.location.protocol + e),
                  d.push({ href: e, media: f })));
          }
          w();
        };
      x(),
        (c.update = x),
        (c.getEmValue = t),
        a.addEventListener
          ? a.addEventListener("resize", b, !1)
          : a.attachEvent && a.attachEvent("onresize", b);
    }
  })(this);

//placeholders script
/* Placeholders.js v4.0.1 */
/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
!(function (a) {
  "use strict";
  function b() {}
  function c() {
    try {
      return document.activeElement;
    } catch (a) {}
  }
  function d(a, b) {
    for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return !0;
    return !1;
  }
  function e(a, b, c) {
    return a.addEventListener
      ? a.addEventListener(b, c, !1)
      : a.attachEvent
      ? a.attachEvent("on" + b, c)
      : void 0;
  }
  function f(a, b) {
    var c;
    a.createTextRange
      ? ((c = a.createTextRange()), c.move("character", b), c.select())
      : a.selectionStart && (a.focus(), a.setSelectionRange(b, b));
  }
  function g(a, b) {
    try {
      return (a.type = b), !0;
    } catch (c) {
      return !1;
    }
  }
  function h(a, b) {
    if (a && a.getAttribute(B)) b(a);
    else
      for (
        var c,
          d = a ? a.getElementsByTagName("input") : N,
          e = a ? a.getElementsByTagName("textarea") : O,
          f = d ? d.length : 0,
          g = e ? e.length : 0,
          h = f + g,
          i = 0;
        h > i;
        i++
      )
        (c = f > i ? d[i] : e[i - f]), b(c);
  }
  function i(a) {
    h(a, k);
  }
  function j(a) {
    h(a, l);
  }
  function k(a, b) {
    var c = !!b && a.value !== b,
      d = a.value === a.getAttribute(B);
    if ((c || d) && "true" === a.getAttribute(C)) {
      a.removeAttribute(C),
        (a.value = a.value.replace(a.getAttribute(B), "")),
        (a.className = a.className.replace(A, ""));
      var e = a.getAttribute(I);
      parseInt(e, 10) >= 0 &&
        (a.setAttribute("maxLength", e), a.removeAttribute(I));
      var f = a.getAttribute(D);
      return f && (a.type = f), !0;
    }
    return !1;
  }
  function l(a) {
    var b = a.getAttribute(B);
    if ("" === a.value && b) {
      a.setAttribute(C, "true"), (a.value = b), (a.className += " " + z);
      var c = a.getAttribute(I);
      c || (a.setAttribute(I, a.maxLength), a.removeAttribute("maxLength"));
      var d = a.getAttribute(D);
      return (
        d
          ? (a.type = "text")
          : "password" === a.type &&
            g(a, "text") &&
            a.setAttribute(D, "password"),
        !0
      );
    }
    return !1;
  }
  function m(a) {
    return function () {
      P && a.value === a.getAttribute(B) && "true" === a.getAttribute(C)
        ? f(a, 0)
        : k(a);
    };
  }
  function n(a) {
    return function () {
      l(a);
    };
  }
  function o(a) {
    return function () {
      i(a);
    };
  }
  function p(a) {
    return function (b) {
      return (
        (v = a.value),
        "true" === a.getAttribute(C) &&
        v === a.getAttribute(B) &&
        d(x, b.keyCode)
          ? (b.preventDefault && b.preventDefault(), !1)
          : void 0
      );
    };
  }
  function q(a) {
    return function () {
      k(a, v), "" === a.value && (a.blur(), f(a, 0));
    };
  }
  function r(a) {
    return function () {
      a === c() &&
        a.value === a.getAttribute(B) &&
        "true" === a.getAttribute(C) &&
        f(a, 0);
    };
  }
  function s(a) {
    var b = a.form;
    b &&
      "string" == typeof b &&
      ((b = document.getElementById(b)),
      b.getAttribute(E) || (e(b, "submit", o(b)), b.setAttribute(E, "true"))),
      e(a, "focus", m(a)),
      e(a, "blur", n(a)),
      P && (e(a, "keydown", p(a)), e(a, "keyup", q(a)), e(a, "click", r(a))),
      a.setAttribute(F, "true"),
      a.setAttribute(B, T),
      (P || a !== c()) && l(a);
  }
  var t = document.createElement("input"),
    u = void 0 !== t.placeholder;
  if (
    ((a.Placeholders = {
      nativeSupport: u,
      disable: u ? b : i,
      enable: u ? b : j,
    }),
    !u)
  ) {
    var v,
      w = [
        "text",
        "search",
        "url",
        "tel",
        "email",
        "password",
        "number",
        "textarea",
      ],
      x = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
      y = "#ccc",
      z = "placeholdersjs",
      A = new RegExp("(?:^|\\s)" + z + "(?!\\S)"),
      B = "data-placeholder-value",
      C = "data-placeholder-active",
      D = "data-placeholder-type",
      E = "data-placeholder-submit",
      F = "data-placeholder-bound",
      G = "data-placeholder-focus",
      H = "data-placeholder-live",
      I = "data-placeholder-maxlength",
      J = 100,
      K = document.getElementsByTagName("head")[0],
      L = document.documentElement,
      M = a.Placeholders,
      N = document.getElementsByTagName("input"),
      O = document.getElementsByTagName("textarea"),
      P = "false" === L.getAttribute(G),
      Q = "false" !== L.getAttribute(H),
      R = document.createElement("style");
    R.type = "text/css";
    var S = document.createTextNode("." + z + " {color:" + y + ";}");
    R.styleSheet ? (R.styleSheet.cssText = S.nodeValue) : R.appendChild(S),
      K.insertBefore(R, K.firstChild);
    for (var T, U, V = 0, W = N.length + O.length; W > V; V++)
      (U = V < N.length ? N[V] : O[V - N.length]),
        (T = U.attributes.placeholder),
        T && ((T = T.nodeValue), T && d(w, U.type) && s(U));
    var X = setInterval(function () {
      for (var a = 0, b = N.length + O.length; b > a; a++)
        (U = a < N.length ? N[a] : O[a - N.length]),
          (T = U.attributes.placeholder),
          T
            ? ((T = T.nodeValue),
              T &&
                d(w, U.type) &&
                (U.getAttribute(F) || s(U),
                (T !== U.getAttribute(B) ||
                  ("password" === U.type && !U.getAttribute(D))) &&
                  ("password" === U.type &&
                    !U.getAttribute(D) &&
                    g(U, "text") &&
                    U.setAttribute(D, "password"),
                  U.value === U.getAttribute(B) && (U.value = T),
                  U.setAttribute(B, T))))
            : U.getAttribute(C) && (k(U), U.removeAttribute(B));
      Q || clearInterval(X);
    }, J);
    e(a, "beforeunload", function () {
      M.disable();
    });
  }
})(this);

//isotope script
/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */
!(function (t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, n) {
      var o,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, n);
          o = void 0 === o ? l : o;
        }),
        void 0 !== o ? o : t
      );
    }
    function h(t, e) {
      t.each(function (t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : ((o = new s(n, e)), a.data(n, i, o));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = o.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        n(a));
  }
  function n(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var o = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return n(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = 0,
            o = i[n];
          e = e || [];
          for (var s = this._onceEvents && this._onceEvents[t]; o; ) {
            var r = s && s[o];
            r && (this.off(t, o), delete s[o]),
              o.apply(this, e),
              (n += r ? 0 : 1),
              (o = i[n]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = -1 == t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        h > e;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function o() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var o = n(e);
        (s.isBoxSizeOuter = r = 200 == t(o.width)), i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = n(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          h > l;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          I = a.borderTopWidth + a.borderBottomWidth,
          z = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (z ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (z ? 0 : y + I)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + I)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i],
          o = n + "MatchesSelector";
        if (t[o]) return o;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      }),
      (i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e;
      }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!n) return void o.push(t);
              e(t, n) && o.push(t);
              for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++)
                o.push(i[s]);
            }
          }),
          o
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        var n = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[o];
          t && clearTimeout(t);
          var e = arguments,
            s = this;
          this[o] = setTimeout(function () {
            n.apply(s, e), delete s[o];
          }, i || 100);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? t()
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function n(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function o(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (n.prototype = Object.create(t.prototype));
    (d.constructor = n),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var n = h[i] || i;
          e[n] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = t[i ? "top" : "bottom"],
          s = this.layout.size,
          r =
            -1 != n.indexOf("%")
              ? (parseFloat(n) / 100) * s.width
              : parseInt(n, 10),
          a =
            -1 != o.indexOf("%")
              ? (parseFloat(o) / 100) * s.height
              : parseInt(o, 10);
        (r = isNaN(r) ? 0 : r),
          (a = isNaN(a) ? 0 : a),
          (r -= e ? s.paddingLeft : s.paddingRight),
          (a -= i ? s.paddingTop : s.paddingBottom),
          (this.position.x = r),
          (this.position.y = a);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[o];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = n ? "paddingTop" : "paddingBottom",
          h = n ? "top" : "bottom",
          d = n ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          s = parseInt(e, 10),
          r = o === this.position.x && s === this.position.y;
        if ((this.setPosition(t, e), r && !this.isTransitioning))
          return void this.layoutPosition();
        var a = t - i,
          u = e - n,
          h = {};
        (h.transform = this.getTranslate(a, u)),
          this.transition({
            to: h,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = n ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var n = this.element.offsetHeight;
          n = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + o(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          n = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[n],
          i(e.ingProperties) && this.disableTransition(),
          n in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
          n in e.onEnd)
        ) {
          var o = e.onEnd[n];
          o.call(this), delete e.onEnd[n];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      n
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, n, o, s) {
            return e(t, i, n, o, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, n, o) {
    "use strict";
    function s(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e);
      var o = ++l;
      (this.element.outlayerGUID = o), (f[o] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var o = m[n] || 1;
      return i * o;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = o),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    n.extend(c, e.prototype),
      (c.option = function (t) {
        n.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            n = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var s = e[o],
            r = new i(s, this);
          n.push(r);
        }
        return n;
      }),
      (c._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var n,
          o = this.options[t];
        o
          ? ("string" == typeof o
              ? (n = this.element.querySelector(o))
              : o instanceof HTMLElement && (n = o),
            (this[t] = n ? i(n)[e] : o))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var n = this._getItemLayoutPosition(t);
            (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          o.dispatchEvent(t + "Complete", null, [e]);
        }
        function n() {
          r++, r == s && i();
        }
        var o = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, n);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var o = h.Event(e);
            (o.type = t), this.$element.trigger(o, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              n.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        return t
          ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = n.makeArray(t)))
          : void 0;
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          o = i(t),
          s = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = n.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = n.extend({}, s.defaults)),
          n.extend(i.defaults, e),
          (i.compatOptions = n.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(o)),
          n.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = o), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      n = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), n.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var n = e[i];
            this.sortData[i] = n(this.element, this);
          }
        }
      });
    var o = i.destroy;
    return (
      (i.destroy = function () {
        o.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var n = i.prototype,
      o = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      o.forEach(function (t) {
        n[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (n.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (n.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (n.getSegmentSize = function (t, e) {
        var i = t + e,
          n = "outer" + e;
        if ((this._getMeasurement(i, n), !this[i])) {
          var o = this.getFirstItemSize();
          this[i] = (o && o[n]) || this.isotope.size["inner" + e];
        }
      }),
      (n.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (n.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function o() {
          i.apply(this, arguments);
        }
        return (
          (o.prototype = Object.create(n)),
          (o.prototype.constructor = o),
          e && (o.options = e),
          (o.prototype.namespace = t),
          (i.modes[t] = o),
          o
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    return (
      (i.compatOptions.fitWidth = "isFitWidth"),
      (i.prototype._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0;
      }),
      (i.prototype.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          s = o / n,
          r = n - (o % n),
          a = r && 1 > r ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (i.prototype.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          n = e(i);
        this.containerWidth = n && n.innerWidth;
      }),
      (i.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && 1 > e ? "round" : "ceil",
          n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (
          var o = this._getColGroup(n),
            s = Math.min.apply(Math, o),
            r = o.indexOf(s),
            a = { x: this.columnWidth * r, y: s },
            u = s + t.size.outerHeight,
            h = this.cols + 1 - o.length,
            d = 0;
          h > d;
          d++
        )
          this.colYs[r + d] = u;
        return a;
      }),
      (i.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
          var o = this.colYs.slice(n, n + t);
          e[n] = Math.max.apply(Math, o);
        }
        return e;
      }),
      (i.prototype._manageStamp = function (t) {
        var i = e(t),
          n = this._getElementOffset(t),
          o = this._getOption("originLeft"),
          s = o ? n.left : n.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? n.top : n.bottom) + i.outerHeight,
            l = a;
          u >= l;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (i.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (i.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (i.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      n = i.prototype,
      o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
    var r = n.measureColumns;
    n.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = n._getOption;
    return (
      (n._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var n = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          n
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          function (i, n, o, s, r, a) {
            return e(t, i, n, o, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope/js/item"),
          require("isotope/js/layout-mode"),
          require("isotope/js/layout-modes/masonry"),
          require("isotope/js/layout-modes/fit-rows"),
          require("isotope/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, n, o, s, r) {
    function a(t, e) {
      return function (i, n) {
        for (var o = 0; o < t.length; o++) {
          var s = t[o],
            r = i.sortData[s],
            a = n.sortData[s];
          if (r > a || a > r) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var n = t[i];
          n.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? o.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            n &&
            o.dispatchEvent("arrangeComplete", null, [o.filteredItems]);
        }
        var e,
          i,
          n,
          o = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (n = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a);
          }
        }
        return { matches: i, needReveal: n, needHide: o };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return n(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = o.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
          var n = t[i];
          n.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          n = i[0],
          o = n.match(/^\[(.+)\]$/),
          s = o && o[1],
          r = e(s, n),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        var t = this.options.sortBy;
        if (t) {
          var e = [].concat.apply(t, this.sortHistory),
            i = a(e, this.options.sortAscending);
          this.filteredItems.sort(i),
            t != this.sortHistory[0] && this.sortHistory.unshift(t);
        }
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            n,
            o = e.length;
          for (i = 0; o > i; i++)
            (n = e[i]), this.element.appendChild(n.element);
          var s = this._filter(e).matches;
          for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, n = 0; i && i > n; n++) {
          var s = e[n];
          o.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return (this.options.transitionDuration = i), n;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });

/*!
 * Packery layout mode PACKAGED v2.0.0
 * sub-classes Packery
 */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define("packery/js/rect", b)
    : "object" == typeof module && module.exports
    ? (module.exports = b())
    : ((a.Packery = a.Packery || {}), (a.Packery.Rect = b()));
})(window, function () {
  function a(b) {
    for (var c in a.defaults) this[c] = a.defaults[c];
    for (c in b) this[c] = b[c];
  }
  a.defaults = { x: 0, y: 0, width: 0, height: 0 };
  var b = a.prototype;
  return (
    (b.contains = function (a) {
      var b = a.width || 0,
        c = a.height || 0;
      return (
        this.x <= a.x &&
        this.y <= a.y &&
        this.x + this.width >= a.x + b &&
        this.y + this.height >= a.y + c
      );
    }),
    (b.overlaps = function (a) {
      var b = this.x + this.width,
        c = this.y + this.height,
        d = a.x + a.width,
        e = a.y + a.height;
      return this.x < d && b > a.x && this.y < e && c > a.y;
    }),
    (b.getMaximalFreeRects = function (b) {
      if (!this.overlaps(b)) return !1;
      var c,
        d = [],
        e = this.x + this.width,
        f = this.y + this.height,
        g = b.x + b.width,
        h = b.y + b.height;
      return (
        this.y < b.y &&
          ((c = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: b.y - this.y,
          })),
          d.push(c)),
        e > g &&
          ((c = new a({ x: g, y: this.y, width: e - g, height: this.height })),
          d.push(c)),
        f > h &&
          ((c = new a({ x: this.x, y: h, width: this.width, height: f - h })),
          d.push(c)),
        this.x < b.x &&
          ((c = new a({
            x: this.x,
            y: this.y,
            width: b.x - this.x,
            height: this.height,
          })),
          d.push(c)),
        d
      );
    }),
    (b.canFit = function (a) {
      return this.width >= a.width && this.height >= a.height;
    }),
    a
  );
}),
  (function (a, b) {
    if ("function" == typeof define && define.amd)
      define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof module && module.exports)
      module.exports = b(require("./rect"));
    else {
      var c = (a.Packery = a.Packery || {});
      c.Packer = b(c.Rect);
    }
  })(window, function (a) {
    function b(a, b, c) {
      (this.width = a || 0),
        (this.height = b || 0),
        (this.sortDirection = c || "downwardLeftToRight"),
        this.reset();
    }
    var c = b.prototype;
    (c.reset = function () {
      this.spaces = [];
      var b = new a({ x: 0, y: 0, width: this.width, height: this.height });
      this.spaces.push(b),
        (this.sorter = d[this.sortDirection] || d.downwardLeftToRight);
    }),
      (c.pack = function (a) {
        for (var b = 0; b < this.spaces.length; b++) {
          var c = this.spaces[b];
          if (c.canFit(a)) {
            this.placeInSpace(a, c);
            break;
          }
        }
      }),
      (c.columnPack = function (a) {
        for (var b = 0; b < this.spaces.length; b++) {
          var c = this.spaces[b],
            d =
              c.x <= a.x &&
              c.x + c.width >= a.x + a.width &&
              c.height >= a.height - 0.01;
          if (d) {
            (a.y = c.y), this.placed(a);
            break;
          }
        }
      }),
      (c.rowPack = function (a) {
        for (var b = 0; b < this.spaces.length; b++) {
          var c = this.spaces[b],
            d =
              c.y <= a.y &&
              c.y + c.height >= a.y + a.height &&
              c.width >= a.width - 0.01;
          if (d) {
            (a.x = c.x), this.placed(a);
            break;
          }
        }
      }),
      (c.placeInSpace = function (a, b) {
        (a.x = b.x), (a.y = b.y), this.placed(a);
      }),
      (c.placed = function (a) {
        for (var b = [], c = 0; c < this.spaces.length; c++) {
          var d = this.spaces[c],
            e = d.getMaximalFreeRects(a);
          e ? b.push.apply(b, e) : b.push(d);
        }
        (this.spaces = b), this.mergeSortSpaces();
      }),
      (c.mergeSortSpaces = function () {
        b.mergeRects(this.spaces), this.spaces.sort(this.sorter);
      }),
      (c.addSpace = function (a) {
        this.spaces.push(a), this.mergeSortSpaces();
      }),
      (b.mergeRects = function (a) {
        var b = 0,
          c = a[b];
        a: for (; c; ) {
          for (var d = 0, e = a[b + d]; e; ) {
            if (e == c) d++;
            else {
              if (e.contains(c)) {
                a.splice(b, 1), (c = a[b]);
                continue a;
              }
              c.contains(e) ? a.splice(b + d, 1) : d++;
            }
            e = a[b + d];
          }
          b++, (c = a[b]);
        }
        return a;
      });
    var d = {
      downwardLeftToRight: function (a, b) {
        return a.y - b.y || a.x - b.x;
      },
      rightwardTopToBottom: function (a, b) {
        return a.x - b.x || a.y - b.y;
      },
    };
    return b;
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define("packery/js/item", ["outlayer/outlayer", "./rect"], b)
      : "object" == typeof module && module.exports
      ? (module.exports = b(require("outlayer"), require("./rect")))
      : (a.Packery.Item = b(a.Outlayer, a.Packery.Rect));
  })(window, function (a, b) {
    var c = document.documentElement.style,
      d = "string" == typeof c.transform ? "transform" : "WebkitTransform",
      e = function () {
        a.Item.apply(this, arguments);
      },
      f = (e.prototype = Object.create(a.Item.prototype)),
      g = f._create;
    f._create = function () {
      g.call(this), (this.rect = new b());
    };
    var h = f.moveTo;
    return (
      (f.moveTo = function (a, b) {
        var c = Math.abs(this.position.x - a),
          d = Math.abs(this.position.y - b),
          e =
            this.layout.dragItemCount &&
            !this.isPlacing &&
            !this.isTransitioning &&
            1 > c &&
            1 > d;
        return e ? void this.goTo(a, b) : void h.apply(this, arguments);
      }),
      (f.enablePlacing = function () {
        this.removeTransitionStyles(),
          this.isTransitioning && d && (this.element.style[d] = "none"),
          (this.isTransitioning = !1),
          this.getSize(),
          this.layout._setRectSize(this.element, this.rect),
          (this.isPlacing = !0);
      }),
      (f.disablePlacing = function () {
        this.isPlacing = !1;
      }),
      (f.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.layout.packer.addSpace(this.rect),
          this.emitEvent("remove", [this]);
      }),
      (f.showDropPlaceholder = function () {
        var a = this.dropPlaceholder;
        a ||
          ((a = this.dropPlaceholder = document.createElement("div")),
          (a.className = "packery-drop-placeholder"),
          (a.style.position = "absolute")),
          (a.style.width = this.size.width + "px"),
          (a.style.height = this.size.height + "px"),
          this.positionDropPlaceholder(),
          this.layout.element.appendChild(a);
      }),
      (f.positionDropPlaceholder = function () {
        this.dropPlaceholder.style[d] =
          "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
      }),
      (f.hideDropPlaceholder = function () {
        this.layout.element.removeChild(this.dropPlaceholder);
      }),
      e
    );
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(
          "packery/js/packery",
          [
            "get-size/get-size",
            "outlayer/outlayer",
            "./rect",
            "./packer",
            "./item",
          ],
          b
        )
      : "object" == typeof module && module.exports
      ? (module.exports = b(
          require("get-size"),
          require("outlayer"),
          require("./rect"),
          require("./packer"),
          require("./item")
        ))
      : (a.Packery = b(
          a.getSize,
          a.Outlayer,
          a.Packery.Rect,
          a.Packery.Packer,
          a.Packery.Item
        ));
  })(window, function (a, b, c, d, e) {
    function f(a, b) {
      return a.position.y - b.position.y || a.position.x - b.position.x;
    }
    function g(a, b) {
      return a.position.x - b.position.x || a.position.y - b.position.y;
    }
    function h(a, b) {
      var c = b.x - a.x,
        d = b.y - a.y;
      return Math.sqrt(c * c + d * d);
    }
    c.prototype.canFit = function (a) {
      return this.width >= a.width - 1 && this.height >= a.height - 1;
    };
    var i = b.create("packery");
    i.Item = e;
    var j = i.prototype;
    (j._create = function () {
      b.prototype._create.call(this),
        (this.packer = new d()),
        (this.shiftPacker = new d()),
        (this.isEnabled = !0),
        (this.dragItemCount = 0);
      var a = this;
      (this.handleDraggabilly = {
        dragStart: function () {
          a.itemDragStart(this.element);
        },
        dragMove: function () {
          a.itemDragMove(this.element, this.position.x, this.position.y);
        },
        dragEnd: function () {
          a.itemDragEnd(this.element);
        },
      }),
        (this.handleUIDraggable = {
          start: function (b, c) {
            c && a.itemDragStart(b.currentTarget);
          },
          drag: function (b, c) {
            c &&
              a.itemDragMove(b.currentTarget, c.position.left, c.position.top);
          },
          stop: function (b, c) {
            c && a.itemDragEnd(b.currentTarget);
          },
        });
    }),
      (j._resetLayout = function () {
        this.getSize(), this._getMeasurements();
        var a, b, c;
        this._getOption("horizontal")
          ? ((a = 1 / 0),
            (b = this.size.innerHeight + this.gutter),
            (c = "rightwardTopToBottom"))
          : ((a = this.size.innerWidth + this.gutter),
            (b = 1 / 0),
            (c = "downwardLeftToRight")),
          (this.packer.width = this.shiftPacker.width = a),
          (this.packer.height = this.shiftPacker.height = b),
          (this.packer.sortDirection = this.shiftPacker.sortDirection = c),
          this.packer.reset(),
          (this.maxY = 0),
          (this.maxX = 0);
      }),
      (j._getMeasurements = function () {
        this._getMeasurement("columnWidth", "width"),
          this._getMeasurement("rowHeight", "height"),
          this._getMeasurement("gutter", "width");
      }),
      (j._getItemLayoutPosition = function (a) {
        if (
          (this._setRectSize(a.element, a.rect),
          this.isShifting || this.dragItemCount > 0)
        ) {
          var b = this._getPackMethod();
          this.packer[b](a.rect);
        } else this.packer.pack(a.rect);
        return this._setMaxXY(a.rect), a.rect;
      }),
      (j.shiftLayout = function () {
        (this.isShifting = !0), this.layout(), delete this.isShifting;
      }),
      (j._getPackMethod = function () {
        return this._getOption("horizontal") ? "rowPack" : "columnPack";
      }),
      (j._setMaxXY = function (a) {
        (this.maxX = Math.max(a.x + a.width, this.maxX)),
          (this.maxY = Math.max(a.y + a.height, this.maxY));
      }),
      (j._setRectSize = function (b, c) {
        var d = a(b),
          e = d.outerWidth,
          f = d.outerHeight;
        (e || f) &&
          ((e = this._applyGridGutter(e, this.columnWidth)),
          (f = this._applyGridGutter(f, this.rowHeight))),
          (c.width = Math.min(e, this.packer.width)),
          (c.height = Math.min(f, this.packer.height));
      }),
      (j._applyGridGutter = function (a, b) {
        if (!b) return a + this.gutter;
        b += this.gutter;
        var c = a % b,
          d = c && 1 > c ? "round" : "ceil";
        return (a = Math[d](a / b) * b);
      }),
      (j._getContainerSize = function () {
        return this._getOption("horizontal")
          ? { width: this.maxX - this.gutter }
          : { height: this.maxY - this.gutter };
      }),
      (j._manageStamp = function (a) {
        var b,
          d = this.getItem(a);
        if (d && d.isPlacing) b = d.rect;
        else {
          var e = this._getElementOffset(a);
          b = new c({
            x: this._getOption("originLeft") ? e.left : e.right,
            y: this._getOption("originTop") ? e.top : e.bottom,
          });
        }
        this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b);
      }),
      (j.sortItemsByPosition = function () {
        var a = this._getOption("horizontal") ? g : f;
        this.items.sort(a);
      }),
      (j.fit = function (a, b, c) {
        var d = this.getItem(a);
        d &&
          (this.stamp(d.element),
          d.enablePlacing(),
          this.updateShiftTargets(d),
          (b = void 0 === b ? d.rect.x : b),
          (c = void 0 === c ? d.rect.y : c),
          this.shift(d, b, c),
          this._bindFitEvents(d),
          d.moveTo(d.rect.x, d.rect.y),
          this.shiftLayout(),
          this.unstamp(d.element),
          this.sortItemsByPosition(),
          d.disablePlacing());
      }),
      (j._bindFitEvents = function (a) {
        function b() {
          d++, 2 == d && c.dispatchEvent("fitComplete", null, [a]);
        }
        var c = this,
          d = 0;
        a.once("layout", b), this.once("layoutComplete", b);
      }),
      (j.resize = function () {
        this.isResizeBound &&
          this.needsResizeLayout() &&
          (this.options.shiftPercentResize
            ? this.resizeShiftPercentLayout()
            : this.layout());
      }),
      (j.needsResizeLayout = function () {
        var b = a(this.element),
          c = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return b[c] != this.size[c];
      }),
      (j.resizeShiftPercentLayout = function () {
        var b = this._getItemsForLayout(this.items),
          c = this._getOption("horizontal"),
          d = c ? "y" : "x",
          e = c ? "height" : "width",
          f = c ? "rowHeight" : "columnWidth",
          g = c ? "innerHeight" : "innerWidth",
          h = this[f];
        if ((h = h && h + this.gutter)) {
          this._getMeasurements();
          var i = this[f] + this.gutter;
          b.forEach(function (a) {
            var b = Math.round(a.rect[d] / h);
            a.rect[d] = b * i;
          });
        } else {
          var j = a(this.element)[g] + this.gutter,
            k = this.packer[e];
          b.forEach(function (a) {
            a.rect[d] = (a.rect[d] / k) * j;
          });
        }
        this.shiftLayout();
      }),
      (j.itemDragStart = function (a) {
        if (this.isEnabled) {
          this.stamp(a);
          var b = this.getItem(a);
          b &&
            (b.enablePlacing(),
            b.showDropPlaceholder(),
            this.dragItemCount++,
            this.updateShiftTargets(b));
        }
      }),
      (j.updateShiftTargets = function (a) {
        this.shiftPacker.reset(), this._getBoundingRect();
        var b = this._getOption("originLeft"),
          d = this._getOption("originTop");
        this.stamps.forEach(function (a) {
          var e = this.getItem(a);
          if (!e || !e.isPlacing) {
            var f = this._getElementOffset(a),
              g = new c({ x: b ? f.left : f.right, y: d ? f.top : f.bottom });
            this._setRectSize(a, g), this.shiftPacker.placed(g);
          }
        }, this);
        var e = this._getOption("horizontal"),
          f = e ? "rowHeight" : "columnWidth",
          g = e ? "height" : "width";
        (this.shiftTargetKeys = []), (this.shiftTargets = []);
        var h,
          i = this[f];
        if ((i = i && i + this.gutter)) {
          var j = Math.ceil(a.rect[g] / i),
            k = Math.floor((this.shiftPacker[g] + this.gutter) / i);
          h = (k - j) * i;
          for (var l = 0; k > l; l++) this._addShiftTarget(l * i, 0, h);
        } else
          (h = this.shiftPacker[g] + this.gutter - a.rect[g]),
            this._addShiftTarget(0, 0, h);
        var m = this._getItemsForLayout(this.items),
          n = this._getPackMethod();
        m.forEach(function (a) {
          var b = a.rect;
          this._setRectSize(a.element, b),
            this.shiftPacker[n](b),
            this._addShiftTarget(b.x, b.y, h);
          var c = e ? b.x + b.width : b.x,
            d = e ? b.y : b.y + b.height;
          if ((this._addShiftTarget(c, d, h), i))
            for (var f = Math.round(b[g] / i), j = 1; f > j; j++) {
              var k = e ? c : b.x + i * j,
                l = e ? b.y + i * j : d;
              this._addShiftTarget(k, l, h);
            }
        }, this);
      }),
      (j._addShiftTarget = function (a, b, c) {
        var d = this._getOption("horizontal") ? b : a;
        if (!(0 !== d && d > c)) {
          var e = a + "," + b,
            f = -1 != this.shiftTargetKeys.indexOf(e);
          f ||
            (this.shiftTargetKeys.push(e),
            this.shiftTargets.push({ x: a, y: b }));
        }
      }),
      (j.shift = function (a, b, c) {
        var d,
          e = 1 / 0,
          f = { x: b, y: c };
        this.shiftTargets.forEach(function (a) {
          var b = h(a, f);
          e > b && ((d = a), (e = b));
        }),
          (a.rect.x = d.x),
          (a.rect.y = d.y);
      });
    var k = 120;
    (j.itemDragMove = function (a, b, c) {
      function d() {
        f.shift(e, b, c), e.positionDropPlaceholder(), f.layout();
      }
      var e = this.isEnabled && this.getItem(a);
      if (e) {
        (b -= this.size.paddingLeft), (c -= this.size.paddingTop);
        var f = this,
          g = new Date();
        this._itemDragTime && g - this._itemDragTime < k
          ? (clearTimeout(this.dragTimeout),
            (this.dragTimeout = setTimeout(d, k)))
          : (d(), (this._itemDragTime = g));
      }
    }),
      (j.itemDragEnd = function (a) {
        function b() {
          d++,
            2 == d &&
              (c.element.classList.remove("is-positioning-post-drag"),
              c.hideDropPlaceholder(),
              e.dispatchEvent("dragItemPositioned", null, [c]));
        }
        var c = this.isEnabled && this.getItem(a);
        if (c) {
          clearTimeout(this.dragTimeout),
            c.element.classList.add("is-positioning-post-drag");
          var d = 0,
            e = this;
          c.once("layout", b),
            this.once("layoutComplete", b),
            c.moveTo(c.rect.x, c.rect.y),
            this.layout(),
            (this.dragItemCount = Math.max(0, this.dragItemCount - 1)),
            this.sortItemsByPosition(),
            c.disablePlacing(),
            this.unstamp(c.element);
        }
      }),
      (j.bindDraggabillyEvents = function (a) {
        this._bindDraggabillyEvents(a, "on");
      }),
      (j.unbindDraggabillyEvents = function (a) {
        this._bindDraggabillyEvents(a, "off");
      }),
      (j._bindDraggabillyEvents = function (a, b) {
        var c = this.handleDraggabilly;
        a[b]("dragStart", c.dragStart),
          a[b]("dragMove", c.dragMove),
          a[b]("dragEnd", c.dragEnd);
      }),
      (j.bindUIDraggableEvents = function (a) {
        this._bindUIDraggableEvents(a, "on");
      }),
      (j.unbindUIDraggableEvents = function (a) {
        this._bindUIDraggableEvents(a, "off");
      }),
      (j._bindUIDraggableEvents = function (a, b) {
        var c = this.handleUIDraggable;
        a[b]("dragstart", c.start)[b]("drag", c.drag)[b]("dragstop", c.stop);
      });
    var l = j.destroy;
    return (
      (j.destroy = function () {
        l.apply(this, arguments), (this.isEnabled = !1);
      }),
      (i.Rect = c),
      (i.Packer = d),
      i
    );
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["isotope/js/layout-mode", "packery/js/packery"], b)
      : "object" == typeof module && module.exports
      ? (module.exports = b(
          require("isotope-layout/js/layout-mode"),
          require("packery")
        ))
      : b(a.Isotope.LayoutMode, a.Packery);
  })(window, function (a, b) {
    var c = a.create("packery"),
      d = c.prototype,
      e = { _getElementOffset: !0, _getMeasurement: !0 };
    for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
    var g = d._resetLayout;
    d._resetLayout = function () {
      (this.packer = this.packer || new b.Packer()),
        (this.shiftPacker = this.shiftPacker || new b.Packer()),
        g.apply(this, arguments);
    };
    var h = d._getItemLayoutPosition;
    d._getItemLayoutPosition = function (a) {
      return (a.rect = a.rect || new b.Rect()), h.call(this, a);
    };
    var i = d.needsResizeLayout;
    d.needsResizeLayout = function () {
      return this._getOption("horizontal")
        ? this.needsVerticalResizeLayout()
        : i.call(this);
    };
    var j = d._getOption;
    return (
      (d._getOption = function (a) {
        return "horizontal" == a
          ? void 0 !== this.options.isHorizontal
            ? this.options.isHorizontal
            : this.options.horizontal
          : j.apply(this.isotope, arguments);
      }),
      c
    );
  });

//sticky sidebar script
/*!
 * Theia Sticky Sidebar v1.5.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */
(function ($) {
  $.fn.theiaStickySidebar = function (options) {
    var defaults = {
      containerSelector: "",
      additionalMarginTop: 0,
      additionalMarginBottom: 0,
      updateSidebarHeight: true,
      minWidth: 0,
      disableOnResponsiveLayouts: true,
      sidebarBehavior: "modern",
    };
    options = $.extend(defaults, options);
    options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;
    options.additionalMarginBottom =
      parseInt(options.additionalMarginBottom) || 0;
    tryInitOrHookIntoEvents(options, this);
    function tryInitOrHookIntoEvents(options, $that) {
      var success = tryInit(options, $that);
      if (!success) {
        console.log(
          "TSS: Body width smaller than options.minWidth. Init is delayed."
        );
        $(document).scroll(
          (function (options, $that) {
            return function (evt) {
              var success = tryInit(options, $that);
              if (success) {
                $(this).unbind(evt);
              }
            };
          })(options, $that)
        );
        $(window).resize(
          (function (options, $that) {
            return function (evt) {
              var success = tryInit(options, $that);
              if (success) {
                $(this).unbind(evt);
              }
            };
          })(options, $that)
        );
      }
    }
    function tryInit(options, $that) {
      if (options.initialized === true) {
        return true;
      }
      if ($("body").width() < options.minWidth) {
        return false;
      }
      init(options, $that);
      return true;
    }
    function init(options, $that) {
      options.initialized = true;
      $("head").append(
        $(
          '<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'
        )
      );
      $that.each(function () {
        var o = {};
        o.sidebar = $(this);
        o.options = options || {};
        o.container = $(o.options.containerSelector);
        if (o.container.length == 0) {
          o.container = o.sidebar.parent();
        }
        o.sidebar.parents().css("-webkit-transform", "none");
        o.sidebar.css({
          position: "relative",
          overflow: "visible",
          "-webkit-box-sizing": "border-box",
          "-moz-box-sizing": "border-box",
          "box-sizing": "border-box",
        });
        o.stickySidebar = o.sidebar.find(".theiaStickySidebar");
        if (o.stickySidebar.length == 0) {
          var javaScriptMIMETypes =
            /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
          o.sidebar
            .find("script")
            .filter(function (index, script) {
              return (
                script.type.length === 0 ||
                script.type.match(javaScriptMIMETypes)
              );
            })
            .remove();
          o.stickySidebar = $("<div>")
            .addClass("theiaStickySidebar")
            .append(o.sidebar.children());
          o.sidebar.append(o.stickySidebar);
        }
        o.marginBottom = parseInt(o.sidebar.css("margin-bottom"));
        o.paddingTop = parseInt(o.sidebar.css("padding-top"));
        o.paddingBottom = parseInt(o.sidebar.css("padding-bottom"));
        var collapsedTopHeight = o.stickySidebar.offset().top;
        var collapsedBottomHeight = o.stickySidebar.outerHeight();
        o.stickySidebar.css("padding-top", 1);
        o.stickySidebar.css("padding-bottom", 1);
        collapsedTopHeight -= o.stickySidebar.offset().top;
        collapsedBottomHeight =
          o.stickySidebar.outerHeight() -
          collapsedBottomHeight -
          collapsedTopHeight;
        if (collapsedTopHeight == 0) {
          o.stickySidebar.css("padding-top", 0);
          o.stickySidebarPaddingTop = 0;
        } else {
          o.stickySidebarPaddingTop = 1;
        }
        if (collapsedBottomHeight == 0) {
          o.stickySidebar.css("padding-bottom", 0);
          o.stickySidebarPaddingBottom = 0;
        } else {
          o.stickySidebarPaddingBottom = 1;
        }
        o.previousScrollTop = null;
        o.fixedScrollTop = 0;
        resetSidebar();
        o.onScroll = function (o) {
          if (!o.stickySidebar.is(":visible")) {
            return;
          }
          if ($("body").width() < o.options.minWidth) {
            resetSidebar();
            return;
          }
          if (o.options.disableOnResponsiveLayouts) {
            var sidebarWidth = o.sidebar.outerWidth(
              o.sidebar.css("float") == "none"
            );
            if (sidebarWidth + 50 > o.container.width()) {
              resetSidebar();
              return;
            }
          }
          var scrollTop = $(document).scrollTop();
          var position = "static";
          if (
            scrollTop >=
            o.sidebar.offset().top +
              (o.paddingTop - o.options.additionalMarginTop)
          ) {
            var offsetTop = o.paddingTop + options.additionalMarginTop;
            var offsetBottom =
              o.paddingBottom + o.marginBottom + options.additionalMarginBottom;
            var containerTop = o.sidebar.offset().top;
            var containerBottom =
              o.sidebar.offset().top + getClearedHeight(o.container);
            var windowOffsetTop = 0 + options.additionalMarginTop;
            var windowOffsetBottom;
            var sidebarSmallerThanWindow =
              o.stickySidebar.outerHeight() + offsetTop + offsetBottom <
              $(window).height();
            if (sidebarSmallerThanWindow) {
              windowOffsetBottom =
                windowOffsetTop + o.stickySidebar.outerHeight();
            } else {
              windowOffsetBottom =
                $(window).height() -
                o.marginBottom -
                o.paddingBottom -
                options.additionalMarginBottom;
            }
            var staticLimitTop = containerTop - scrollTop + o.paddingTop;
            var staticLimitBottom =
              containerBottom - scrollTop - o.paddingBottom - o.marginBottom;
            var top = o.stickySidebar.offset().top - scrollTop;
            var scrollTopDiff = o.previousScrollTop - scrollTop;
            if (o.stickySidebar.css("position") == "fixed") {
              if (o.options.sidebarBehavior == "modern") {
                top += scrollTopDiff;
              }
            }
            if (o.options.sidebarBehavior == "stick-to-top") {
              top = options.additionalMarginTop;
            }
            if (o.options.sidebarBehavior == "stick-to-bottom") {
              top = windowOffsetBottom - o.stickySidebar.outerHeight();
            }
            if (scrollTopDiff > 0) {
              top = Math.min(top, windowOffsetTop);
            } else {
              top = Math.max(
                top,
                windowOffsetBottom - o.stickySidebar.outerHeight()
              );
            }
            top = Math.max(top, staticLimitTop);
            top = Math.min(
              top,
              staticLimitBottom - o.stickySidebar.outerHeight()
            );
            var sidebarSameHeightAsContainer =
              o.container.height() == o.stickySidebar.outerHeight();
            if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {
              position = "fixed";
            } else if (
              !sidebarSameHeightAsContainer &&
              top == windowOffsetBottom - o.stickySidebar.outerHeight()
            ) {
              position = "fixed";
            } else if (
              scrollTop + top - o.sidebar.offset().top - o.paddingTop <=
              options.additionalMarginTop
            ) {
              position = "static";
            } else {
              position = "absolute";
            }
          }
          if (position == "fixed") {
            o.stickySidebar.css({
              position: "fixed",
              width: getWidthForObject(o.stickySidebar) + "px",
              transform: "translateY(" + top + "px)",
              left:
                o.sidebar.offset().left +
                parseInt(o.sidebar.css("padding-left")) +
                "px",
              top: "0px",
            });
          } else if (position == "absolute") {
            var css = {};
            if (o.stickySidebar.css("position") != "absolute") {
              css.position = "absolute";
              css.transform =
                "translateY(" +
                (scrollTop +
                  top -
                  o.sidebar.offset().top -
                  o.stickySidebarPaddingTop -
                  o.stickySidebarPaddingBottom) +
                "px)";
              css.top = "0px";
            }
            css.width = getWidthForObject(o.stickySidebar) + "px";
            css.left = "";
            o.stickySidebar.css(css);
          } else if (position == "static") {
            resetSidebar();
          }
          if (position != "static") {
            if (o.options.updateSidebarHeight == true) {
              o.sidebar.css({
                "min-height":
                  o.stickySidebar.outerHeight() +
                  o.stickySidebar.offset().top -
                  o.sidebar.offset().top +
                  o.paddingBottom,
              });
            }
          }
          o.previousScrollTop = scrollTop;
        };
        o.onScroll(o);
        $(document).scroll(
          (function (o) {
            return function () {
              o.onScroll(o);
            };
          })(o)
        );
        $(window).resize(
          (function (o) {
            return function () {
              o.stickySidebar.css({ position: "static" });
              o.onScroll(o);
            };
          })(o)
        );
        function resetSidebar() {
          o.fixedScrollTop = 0;
          o.sidebar.css({ "min-height": "1px" });
          o.stickySidebar.css({
            position: "static",
            width: "",
            transform: "none",
          });
        }
        function getClearedHeight(e) {
          var height = e.height();
          e.children().each(function () {
            height = Math.max(height, $(this).height());
          });
          return height;
        }
      });
    }
    function getWidthForObject(object) {
      var width;
      try {
        width = object[0].getBoundingClientRect().width;
      } catch (err) {}
      if (typeof width === "undefined") {
        width = object.width();
      }
      return width;
    }
  };
})(jQuery);

//fullpage script
/*!
 * fullPage 2.8.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!(function (e, n) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], function (t) {
        return n(t, e, e.document, e.Math);
      })
    : "object" == typeof exports && exports
    ? (module.exports = n(require("jquery"), e, e.document, e.Math))
    : n(jQuery, e, e.document, e.Math);
})("undefined" != typeof window ? window : this, function (e, n, t, o, i) {
  "use strict";
  var a = "fullpage-wrapper",
    r = "." + a,
    s = "fp-scrollable",
    l = "." + s,
    c = "fp-responsive",
    d = "fp-notransition",
    f = "fp-destroyed",
    u = "fp-enabled",
    h = "fp-viewing",
    p = "active",
    v = "." + p,
    m = "fp-completely",
    g = "." + m,
    w = ".section",
    S = "fp-section",
    y = "." + S,
    b = y + v,
    x = y + ":first",
    C = y + ":last",
    T = "fp-tableCell",
    k = "." + T,
    I = "fp-auto-height",
    L = "fp-normal-scroll",
    E = "fp-nav",
    A = "#" + E,
    M = "fp-tooltip",
    O = "." + M,
    H = "fp-show-active",
    B = ".slide",
    R = "fp-slide",
    z = "." + R,
    D = z + v,
    P = "fp-slides",
    F = "." + P,
    q = "fp-slidesContainer",
    V = "." + q,
    j = "fp-table",
    Y = "fp-slidesNav",
    N = "." + Y,
    U = N + " a",
    X = "fp-controlArrow",
    W = "." + X,
    K = "fp-prev",
    Q = "." + K,
    G = X + " " + K,
    J = W + Q,
    Z = "fp-next",
    $ = "." + Z,
    _ = X + " " + Z,
    ee = W + $,
    ne = e(n),
    te = e(t),
    oe = {
      scrollbars: !0,
      mouseWheel: !0,
      hideScrollbars: !1,
      fadeScrollbars: !1,
      disableMouse: !0,
      interactiveScrollbars: !0,
    };
  (e.fn.fullpage = function (s) {
    function l(n, t) {
      ot("autoScrolling", n, t);
      var o = e(b);
      s.autoScrolling && !s.scrollBar
        ? (rt.css({ overflow: "hidden", height: "100%" }),
          X(Et.recordHistory, "internal"),
          vt.css({ "-ms-touch-action": "none", "touch-action": "none" }),
          o.length && $n(o.position().top))
        : (rt.css({ overflow: "visible", height: "initial" }),
          X(!1, "internal"),
          vt.css({ "-ms-touch-action": "", "touch-action": "" }),
          $n(0),
          o.length && rt.scrollTop(o.position().top));
    }
    function X(e, n) {
      ot("recordHistory", e, n);
    }
    function Q(e, n) {
      ot("scrollingSpeed", e, n);
    }
    function Z(e, n) {
      ot("fitToSection", e, n);
    }
    function $(e) {
      s.lockAnchors = e;
    }
    function ae(e) {
      e ? (Un(), Xn()) : (Nn(), Wn());
    }
    function re(n, t) {
      "undefined" != typeof t
        ? ((t = t.replace(/ /g, "").split(",")),
          e.each(t, function (e, t) {
            et(n, t, "m");
          }))
        : n
        ? (ae(!0), Kn())
        : (ae(!1), Qn());
    }
    function se(n, t) {
      "undefined" != typeof t
        ? ((t = t.replace(/ /g, "").split(",")),
          e.each(t, function (e, t) {
            et(n, t, "k");
          }))
        : (s.keyboardScrolling = n);
    }
    function le() {
      var n = e(b).prev(y);
      n.length || (!s.loopTop && !s.continuousVertical) || (n = e(y).last()),
        n.length && Xe(n, null, !0);
    }
    function ce() {
      var n = e(b).next(y);
      n.length ||
        (!s.loopBottom && !s.continuousVertical) ||
        (n = e(y).first()),
        n.length && Xe(n, null, !1);
    }
    function de(e, n) {
      Q(0, "internal"), fe(e, n), Q(Et.scrollingSpeed, "internal");
    }
    function fe(e, n) {
      var t = Bn(e);
      "undefined" != typeof n ? zn(e, n) : t.length > 0 && Xe(t);
    }
    function ue(e) {
      Ye("right", e);
    }
    function he(e) {
      Ye("left", e);
    }
    function pe(n) {
      if (!vt.hasClass(f)) {
        (gt = !0),
          (mt = ne.height()),
          e(y).each(function () {
            var n = e(this).find(F),
              t = e(this).find(z);
            s.verticalCentered &&
              e(this)
                .find(k)
                .css("height", On(e(this)) + "px"),
              e(this).css("height", mt + "px"),
              s.scrollOverflow &&
                (t.length
                  ? t.each(function () {
                      An(e(this));
                    })
                  : An(e(this))),
              t.length > 1 && mn(n, n.find(D));
          });
        var t = e(b),
          o = t.index(y);
        o && de(o + 1),
          (gt = !1),
          e.isFunction(s.afterResize) && n && s.afterResize.call(vt),
          e.isFunction(s.afterReBuild) && !n && s.afterReBuild.call(vt);
      }
    }
    function ve(n) {
      var t = st.hasClass(c);
      n
        ? t ||
          (l(!1, "internal"),
          Z(!1, "internal"),
          e(A).hide(),
          st.addClass(c),
          e.isFunction(s.afterResponsive) && s.afterResponsive.call(vt, n))
        : t &&
          (l(Et.autoScrolling, "internal"),
          Z(Et.autoScrolling, "internal"),
          e(A).show(),
          st.removeClass(c),
          e.isFunction(s.afterResponsive) && s.afterResponsive.call(vt, n));
    }
    function me() {
      return {
        options: s,
        internals: {
          getXmovement: En,
          removeAnimation: Cn,
          getTransforms: _n,
          lazyLoad: Ze,
          addAnimation: xn,
          performHorizontalMove: wn,
          silentLandscapeScroll: Zn,
          keepSlidesPosition: Ne,
          silentScroll: $n,
          styleSlides: be,
        },
      };
    }
    function ge() {
      s.css3 && (s.css3 = Yn()),
        (s.scrollBar = s.scrollBar || s.hybrid),
        Se(),
        ye(),
        re(!0),
        l(s.autoScrolling, "internal");
      var n = e(b).find(D);
      n.length &&
        (0 !== e(b).index(y) || (0 === e(b).index(y) && 0 !== n.index())) &&
        Zn(n),
        bn(),
        jn(),
        "complete" === t.readyState && tn(),
        ne.on("load", tn);
    }
    function we() {
      ne.on("scroll", He).on("hashchange", on).blur(fn).resize(yn),
        te
          .keydown(an)
          .keyup(sn)
          .on("click touchstart", A + " a", un)
          .on("click touchstart", U, hn)
          .on("click", O, rn),
        e(y).on("click touchstart", W, dn),
        s.normalScrollElements &&
          (te.on("mouseenter", s.normalScrollElements, function () {
            ae(!1);
          }),
          te.on("mouseleave", s.normalScrollElements, function () {
            ae(!0);
          }));
    }
    function Se() {
      var n = vt.find(s.sectionSelector);
      s.anchors.length ||
        (s.anchors = n
          .filter("[data-anchor]")
          .map(function () {
            return e(this).data("anchor").toString();
          })
          .get()),
        s.navigationTooltips.length ||
          (s.navigationTooltips = n
            .filter("[data-tooltip]")
            .map(function () {
              return e(this).data("tooltip").toString();
            })
            .get());
    }
    function ye() {
      vt.css({ height: "100%", position: "relative" }),
        vt.addClass(a),
        e("html").addClass(u),
        (mt = ne.height()),
        vt.removeClass(f),
        Te(),
        e(y).each(function (n) {
          var t = e(this),
            o = t.find(z),
            i = o.length;
          xe(t, n), Ce(t, n), i > 0 ? be(t, o, i) : s.verticalCentered && Mn(t);
        }),
        s.fixedElements && s.css3 && e(s.fixedElements).appendTo(st),
        s.navigation && Ie(),
        Ee(),
        s.scrollOverflow
          ? ("complete" === t.readyState && Le(), ne.on("load", Le))
          : Oe();
    }
    function be(n, t, o) {
      var i = 100 * o,
        a = 100 / o;
      t.wrapAll('<div class="' + q + '" />'),
        t.parent().wrap('<div class="' + P + '" />'),
        n.find(V).css("width", i + "%"),
        o > 1 && (s.controlArrows && ke(n), s.slidesNavigation && Pn(n, o)),
        t.each(function (n) {
          e(this).css("width", a + "%"), s.verticalCentered && Mn(e(this));
        });
      var r = n.find(D);
      r.length &&
      (0 !== e(b).index(y) || (0 === e(b).index(y) && 0 !== r.index()))
        ? Zn(r)
        : t.eq(0).addClass(p);
    }
    function xe(n, t) {
      t || 0 !== e(b).length || n.addClass(p),
        n.css("height", mt + "px"),
        s.paddingTop && n.css("padding-top", s.paddingTop),
        s.paddingBottom && n.css("padding-bottom", s.paddingBottom),
        "undefined" != typeof s.sectionsColor[t] &&
          n.css("background-color", s.sectionsColor[t]),
        "undefined" != typeof s.anchors[t] &&
          n.attr("data-anchor", s.anchors[t]);
    }
    function Ce(n, t) {
      "undefined" != typeof s.anchors[t] &&
        n.hasClass(p) &&
        In(s.anchors[t], t),
        s.menu &&
          s.css3 &&
          e(s.menu).closest(r).length &&
          e(s.menu).appendTo(st);
    }
    function Te() {
      vt.find(s.sectionSelector).addClass(S),
        vt.find(s.slideSelector).addClass(R);
    }
    function ke(e) {
      e
        .find(F)
        .after('<div class="' + G + '"></div><div class="' + _ + '"></div>'),
        "#fff" != s.controlArrowColor &&
          (e
            .find(ee)
            .css(
              "border-color",
              "transparent transparent transparent " + s.controlArrowColor
            ),
          e
            .find(J)
            .css(
              "border-color",
              "transparent " + s.controlArrowColor + " transparent transparent"
            )),
        s.loopHorizontal || e.find(J).hide();
    }
    function Ie() {
      st.append('<div id="' + E + '"><ul></ul></div>');
      var n = e(A);
      n.addClass(function () {
        return s.showActiveTooltip
          ? H + " " + s.navigationPosition
          : s.navigationPosition;
      });
      for (var t = 0; t < e(y).length; t++) {
        var o = "";
        s.anchors.length && (o = s.anchors[t]);
        var i = '<li><a href="#' + o + '"><span></span></a>',
          a = s.navigationTooltips[t];
        "undefined" != typeof a &&
          "" !== a &&
          (i +=
            '<div class="' +
            M +
            " " +
            s.navigationPosition +
            '">' +
            a +
            "</div>"),
          (i += "</li>"),
          n.find("ul").append(i);
      }
      e(A).css("margin-top", "-" + e(A).height() / 2 + "px"),
        e(A).find("li").eq(e(b).index(y)).find("a").addClass(p);
    }
    function Le() {
      e(y).each(function () {
        var n = e(this).find(z);
        n.length
          ? n.each(function () {
              An(e(this));
            })
          : An(e(this));
      }),
        Oe();
    }
    function Ee() {
      vt.find('iframe[src*="youtube.com/embed/"]').each(function () {
        Ae(e(this), "enablejsapi=1");
      });
    }
    function Ae(e, n) {
      var t = e.attr("src");
      e.attr("src", t + Me(t) + n);
    }
    function Me(e) {
      return /\?/.test(e) ? "&" : "?";
    }
    function Oe() {
      var n = e(b);
      n.addClass(m),
        s.scrollOverflowHandler.afterRender &&
          s.scrollOverflowHandler.afterRender(n),
        Ze(n),
        $e(n),
        e.isFunction(s.afterLoad) &&
          s.afterLoad.call(n, n.data("anchor"), n.index(y) + 1),
        e.isFunction(s.afterRender) && s.afterRender.call(vt);
    }
    function He() {
      var n;
      if (!s.autoScrolling || s.scrollBar) {
        var o = ne.scrollTop(),
          i = Re(o),
          a = 0,
          r = o + ne.height() / 2,
          l = st.height() - ne.height() === o,
          c = t.querySelectorAll(y);
        if (l) a = c.length - 1;
        else
          for (var d = 0; d < c.length; ++d) {
            var f = c[d];
            f.offsetTop <= r && (a = d);
          }
        if (
          (Be(i) &&
            (e(b).hasClass(m) || e(b).addClass(m).siblings().removeClass(m)),
          (n = e(c).eq(a)),
          !n.hasClass(p))
        ) {
          At = !0;
          var u = e(b),
            h = u.index(y) + 1,
            v = Ln(n),
            g = n.data("anchor"),
            w = n.index(y) + 1,
            S = n.find(D);
          if (S.length)
            var x = S.data("anchor"),
              C = S.index();
          St &&
            (n.addClass(p).siblings().removeClass(p),
            e.isFunction(s.onLeave) && s.onLeave.call(u, h, w, v),
            e.isFunction(s.afterLoad) && s.afterLoad.call(n, g, w),
            en(u),
            Ze(n),
            $e(n),
            In(g, w - 1),
            s.anchors.length && (ct = g),
            Fn(C, x, g, w)),
            clearTimeout(kt),
            (kt = setTimeout(function () {
              At = !1;
            }, 100));
        }
        s.fitToSection &&
          (clearTimeout(It),
          (It = setTimeout(function () {
            St &&
              s.fitToSection &&
              (e(b).is(n) && (gt = !0), Xe(e(b)), (gt = !1));
          }, s.fitToSectionDelay)));
      }
    }
    function Be(n) {
      var t = e(b).position().top,
        o = t + ne.height();
      return "up" == n
        ? o >= ne.scrollTop() + ne.height()
        : t <= ne.scrollTop();
    }
    function Re(e) {
      var n = e > Mt ? "down" : "up";
      return (Mt = e), (Dt = e), n;
    }
    function ze(e, n) {
      if (bt.m[e]) {
        var t = "down" === e ? "bottom" : "top",
          o = "down" === e ? ce : le;
        if (n.length > 0) {
          if (!s.scrollOverflowHandler.isScrolled(t, n)) return !0;
          o();
        } else o();
      }
    }
    function De(n) {
      var t = n.originalEvent,
        i = e(t.target).closest(y);
      if (!Pe(n.target) && Fe(t)) {
        s.autoScrolling && n.preventDefault();
        var a = s.scrollOverflowHandler.scrollable(i);
        if (St && !ut) {
          var r = Jn(t);
          (Bt = r.y),
            (Rt = r.x),
            i.find(F).length && o.abs(Ht - Rt) > o.abs(Ot - Bt)
              ? o.abs(Ht - Rt) > (ne.outerWidth() / 100) * s.touchSensitivity &&
                (Ht > Rt ? bt.m.right && ue(i) : bt.m.left && he(i))
              : s.autoScrolling &&
                o.abs(Ot - Bt) > (ne.height() / 100) * s.touchSensitivity &&
                (Ot > Bt ? ze("down", a) : Bt > Ot && ze("up", a));
        }
      }
    }
    function Pe(n, t) {
      t = t || 0;
      var o = e(n).parent();
      return t < s.normalScrollElementTouchThreshold &&
        o.is(s.normalScrollElements)
        ? !0
        : t == s.normalScrollElementTouchThreshold
        ? !1
        : Pe(o, ++t);
    }
    function Fe(e) {
      return "undefined" == typeof e.pointerType || "mouse" != e.pointerType;
    }
    function qe(e) {
      e.preventDefault();
      var n = e.originalEvent;
      if ((s.fitToSection && rt.stop(), Fe(n))) {
        var t = Jn(n);
        (Ot = t.y), (Ht = t.x);
      }
    }
    function Ve(e, n) {
      for (
        var t = 0, i = e.slice(o.max(e.length - n, 1)), a = 0;
        a < i.length;
        a++
      )
        t += i[a];
      return o.ceil(t / n);
    }
    function je(t) {
      var i = new Date().getTime(),
        a = e(g).hasClass(L);
      if (s.autoScrolling && !ft && !a) {
        t = t || n.event;
        var r = t.wheelDelta || -t.deltaY || -t.detail,
          l = o.max(-1, o.min(1, r)),
          c =
            "undefined" != typeof t.wheelDeltaX ||
            "undefined" != typeof t.deltaX,
          d =
            o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) ||
            o.abs(t.deltaX) < o.abs(t.deltaY) ||
            !c;
        yt.length > 149 && yt.shift(),
          yt.push(o.abs(r)),
          s.scrollBar &&
            (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
        var f = e(b),
          u = s.scrollOverflowHandler.scrollable(f),
          h = i - zt;
        if (((zt = i), h > 200 && (yt = []), St)) {
          var p = Ve(yt, 10),
            v = Ve(yt, 70),
            m = p >= v;
          m && d && (0 > l ? ze("down", u) : ze("up", u));
        }
        return !1;
      }
      s.fitToSection && rt.stop();
    }
    function Ye(n, t) {
      var o = "undefined" == typeof t ? e(b) : t,
        i = o.find(F),
        a = i.find(z).length;
      if (!(!i.length || ut || 2 > a)) {
        var r = i.find(D),
          l = null;
        if (((l = "left" === n ? r.prev(z) : r.next(z)), !l.length)) {
          if (!s.loopHorizontal) return;
          l = "left" === n ? r.siblings(":last") : r.siblings(":first");
        }
        (ut = !0), mn(i, l, n);
      }
    }
    function Ne() {
      e(D).each(function () {
        Zn(e(this), "internal");
      });
    }
    function Ue(e) {
      var n = e.position(),
        t = n.top,
        o = n.top > Dt,
        i = t - mt + e.outerHeight(),
        a = s.bigSectionsDestination;
      return (
        e.outerHeight() > mt
          ? ((!o && !a) || "bottom" === a) && (t = i)
          : (o || (gt && e.is(":last-child"))) && (t = i),
        (Dt = t),
        t
      );
    }
    function Xe(n, t, o) {
      if ("undefined" != typeof n) {
        var i = Ue(n),
          a = {
            element: n,
            callback: t,
            isMovementUp: o,
            dtop: i,
            yMovement: Ln(n),
            anchorLink: n.data("anchor"),
            sectionIndex: n.index(y),
            activeSlide: n.find(D),
            activeSection: e(b),
            leavingSection: e(b).index(y) + 1,
            localIsResizing: gt,
          };
        if (
          !(
            (a.activeSection.is(n) && !gt) ||
            (s.scrollBar && ne.scrollTop() === a.dtop && !n.hasClass(I))
          )
        ) {
          if (a.activeSlide.length)
            var r = a.activeSlide.data("anchor"),
              l = a.activeSlide.index();
          s.autoScrolling &&
            s.continuousVertical &&
            "undefined" != typeof a.isMovementUp &&
            ((!a.isMovementUp && "up" == a.yMovement) ||
              (a.isMovementUp && "down" == a.yMovement)) &&
            (a = Qe(a)),
            (!e.isFunction(s.onLeave) ||
              a.localIsResizing ||
              s.onLeave.call(
                a.activeSection,
                a.leavingSection,
                a.sectionIndex + 1,
                a.yMovement
              ) !== !1) &&
              (en(a.activeSection),
              n.addClass(p).siblings().removeClass(p),
              Ze(n),
              s.scrollOverflowHandler.onLeave(),
              (St = !1),
              Fn(l, r, a.anchorLink, a.sectionIndex),
              We(a),
              (ct = a.anchorLink),
              In(a.anchorLink, a.sectionIndex));
        }
      }
    }
    function We(n) {
      if (s.css3 && s.autoScrolling && !s.scrollBar) {
        var t = "translate3d(0px, -" + n.dtop + "px, 0px)";
        Hn(t, !0),
          s.scrollingSpeed
            ? (clearTimeout(Ct),
              (Ct = setTimeout(function () {
                Je(n);
              }, s.scrollingSpeed)))
            : Je(n);
      } else {
        var o = Ke(n);
        e(o.element)
          .animate(o.options, s.scrollingSpeed, s.easing)
          .promise()
          .done(function () {
            s.scrollBar
              ? setTimeout(function () {
                  Je(n);
                }, 30)
              : Je(n);
          });
      }
    }
    function Ke(e) {
      var n = {};
      return (
        s.autoScrolling && !s.scrollBar
          ? ((n.options = { top: -e.dtop }), (n.element = r))
          : ((n.options = { scrollTop: e.dtop }), (n.element = "html, body")),
        n
      );
    }
    function Qe(n) {
      return (
        n.isMovementUp
          ? e(b).before(n.activeSection.nextAll(y))
          : e(b).after(n.activeSection.prevAll(y).get().reverse()),
        $n(e(b).position().top),
        Ne(),
        (n.wrapAroundElements = n.activeSection),
        (n.dtop = n.element.position().top),
        (n.yMovement = Ln(n.element)),
        n
      );
    }
    function Ge(n) {
      n.wrapAroundElements &&
        n.wrapAroundElements.length &&
        (n.isMovementUp
          ? e(x).before(n.wrapAroundElements)
          : e(C).after(n.wrapAroundElements),
        $n(e(b).position().top),
        Ne());
    }
    function Je(n) {
      Ge(n),
        e.isFunction(s.afterLoad) &&
          !n.localIsResizing &&
          s.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1),
        s.scrollOverflowHandler.afterLoad(),
        $e(n.element),
        n.element.addClass(m).siblings().removeClass(m),
        (St = !0),
        e.isFunction(n.callback) && n.callback.call(this);
    }
    function Ze(n) {
      var n = nn(n);
      n.find(
        "img[data-src], source[data-src], audio[data-src], iframe[data-src]"
      ).each(function () {
        e(this).attr("src", e(this).data("src")),
          e(this).removeAttr("data-src"),
          e(this).is("source") && e(this).closest("video").get(0).load();
      });
    }
    function $e(n) {
      var n = nn(n);
      n.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-autoplay") &&
          "function" == typeof n.play &&
          n.play();
      }),
        n.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          n.hasAttribute("data-autoplay") && _e(n),
            (n.onload = function () {
              n.hasAttribute("data-autoplay") && _e(n);
            });
        });
    }
    function _e(e) {
      e.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
    function en(n) {
      var n = nn(n);
      n.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-keepplaying") ||
          "function" != typeof n.pause ||
          n.pause();
      }),
        n.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          /youtube\.com\/embed\//.test(e(this).attr("src")) &&
            !n.hasAttribute("data-keepplaying") &&
            e(this)
              .get(0)
              .contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
        });
    }
    function nn(n) {
      var t = n.find(D);
      return t.length && (n = e(t)), n;
    }
    function tn() {
      var e = n.location.hash.replace("#", "").split("/"),
        t = decodeURIComponent(e[0]),
        o = decodeURIComponent(e[1]);
      t && (s.animateAnchor ? zn(t, o) : de(t, o));
    }
    function on() {
      if (!At && !s.lockAnchors) {
        var e = n.location.hash.replace("#", "").split("/"),
          t = decodeURIComponent(e[0]),
          o = decodeURIComponent(e[1]),
          i = "undefined" == typeof ct,
          a = "undefined" == typeof ct && "undefined" == typeof o && !ut;
        t.length &&
          ((t && t !== ct && !i) || a || (!ut && dt != o)) &&
          zn(t, o);
      }
    }
    function an(n) {
      clearTimeout(Lt);
      var t = e(":focus");
      if (
        !t.is("textarea") &&
        !t.is("input") &&
        !t.is("select") &&
        "true" !== t.attr("contentEditable") &&
        "" !== t.attr("contentEditable") &&
        s.keyboardScrolling &&
        s.autoScrolling
      ) {
        var o = n.which,
          i = [40, 38, 32, 33, 34];
        e.inArray(o, i) > -1 && n.preventDefault(),
          (ft = n.ctrlKey),
          (Lt = setTimeout(function () {
            pn(n);
          }, 150));
      }
    }
    function rn() {
      e(this).prev().trigger("click");
    }
    function sn(e) {
      wt && (ft = e.ctrlKey);
    }
    function ln(e) {
      2 == e.which && ((Pt = e.pageY), vt.on("mousemove", vn));
    }
    function cn(e) {
      2 == e.which && vt.off("mousemove");
    }
    function dn() {
      var n = e(this).closest(y);
      e(this).hasClass(K) ? bt.m.left && he(n) : bt.m.right && ue(n);
    }
    function fn() {
      (wt = !1), (ft = !1);
    }
    function un(n) {
      n.preventDefault();
      var t = e(this).parent().index();
      Xe(e(y).eq(t));
    }
    function hn(n) {
      n.preventDefault();
      var t = e(this).closest(y).find(F),
        o = t.find(z).eq(e(this).closest("li").index());
      mn(t, o);
    }
    function pn(n) {
      var t = n.shiftKey;
      switch (n.which) {
        case 38:
        case 33:
          bt.k.up && le();
          break;
        case 32:
          if (t && bt.k.up) {
            le();
            break;
          }
        case 40:
        case 34:
          bt.k.down && ce();
          break;
        case 36:
          bt.k.up && fe(1);
          break;
        case 35:
          bt.k.down && fe(e(y).length);
          break;
        case 37:
          bt.k.left && he();
          break;
        case 39:
          bt.k.right && ue();
          break;
        default:
          return;
      }
    }
    function vn(e) {
      St &&
        (e.pageY < Pt && bt.m.up ? le() : e.pageY > Pt && bt.m.down && ce()),
        (Pt = e.pageY);
    }
    function mn(n, t, o) {
      var i = n.closest(y),
        a = {
          slides: n,
          destiny: t,
          direction: o,
          destinyPos: t.position(),
          slideIndex: t.index(),
          section: i,
          sectionIndex: i.index(y),
          anchorLink: i.data("anchor"),
          slidesNav: i.find(N),
          slideAnchor: Vn(t),
          prevSlide: i.find(D),
          prevSlideIndex: i.find(D).index(),
          localIsResizing: gt,
        };
      return (
        (a.xMovement = En(a.prevSlideIndex, a.slideIndex)),
        a.localIsResizing || (St = !1),
        s.onSlideLeave &&
        !a.localIsResizing &&
        "none" !== a.xMovement &&
        e.isFunction(s.onSlideLeave) &&
        s.onSlideLeave.call(
          a.prevSlide,
          a.anchorLink,
          a.sectionIndex + 1,
          a.prevSlideIndex,
          a.xMovement,
          a.slideIndex
        ) === !1
          ? void (ut = !1)
          : (en(a.prevSlide),
            t.addClass(p).siblings().removeClass(p),
            a.localIsResizing || Ze(t),
            !s.loopHorizontal &&
              s.controlArrows &&
              (i.find(J).toggle(0 !== a.slideIndex),
              i.find(ee).toggle(!t.is(":last-child"))),
            i.hasClass(p) &&
              Fn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex),
            void wn(n, a, !0))
      );
    }
    function gn(n) {
      Sn(n.slidesNav, n.slideIndex),
        n.localIsResizing ||
          (e.isFunction(s.afterSlideLoad) &&
            s.afterSlideLoad.call(
              n.destiny,
              n.anchorLink,
              n.sectionIndex + 1,
              n.slideAnchor,
              n.slideIndex
            ),
          (St = !0)),
        $e(n.destiny),
        (ut = !1);
    }
    function wn(e, n, t) {
      var i = n.destinyPos;
      if (s.css3) {
        var a = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
        xn(e.find(V)).css(_n(a)),
          (Tt = setTimeout(
            function () {
              t && gn(n);
            },
            s.scrollingSpeed,
            s.easing
          ));
      } else
        e.animate(
          { scrollLeft: o.round(i.left) },
          s.scrollingSpeed,
          s.easing,
          function () {
            t && gn(n);
          }
        );
    }
    function Sn(e, n) {
      e.find(v).removeClass(p), e.find("li").eq(n).find("a").addClass(p);
    }
    function yn() {
      if ((bn(), ht)) {
        var n = e(t.activeElement);
        if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
          var i = ne.height();
          o.abs(i - Ft) > (20 * o.max(Ft, i)) / 100 && (pe(!0), (Ft = i));
        }
      } else
        clearTimeout(xt),
          (xt = setTimeout(function () {
            pe(!0);
          }, 350));
    }
    function bn() {
      var e = s.responsive || s.responsiveWidth,
        n = s.responsiveHeight,
        t = e && ne.outerWidth() < e,
        o = n && ne.height() < n;
      e && n ? ve(t || o) : e ? ve(t) : n && ve(o);
    }
    function xn(e) {
      var n = "all " + s.scrollingSpeed + "ms " + s.easingcss3;
      return (
        e.removeClass(d), e.css({ "-webkit-transition": n, transition: n })
      );
    }
    function Cn(e) {
      return e.addClass(d);
    }
    function Tn(n, t) {
      s.navigation &&
        (e(A).find(v).removeClass(p),
        n
          ? e(A)
              .find('a[href="#' + n + '"]')
              .addClass(p)
          : e(A).find("li").eq(t).find("a").addClass(p));
    }
    function kn(n) {
      s.menu &&
        (e(s.menu).find(v).removeClass(p),
        e(s.menu)
          .find('[data-menuanchor="' + n + '"]')
          .addClass(p));
    }
    function In(e, n) {
      kn(e), Tn(e, n);
    }
    function Ln(n) {
      var t = e(b).index(y),
        o = n.index(y);
      return t == o ? "none" : t > o ? "up" : "down";
    }
    function En(e, n) {
      return e == n ? "none" : e > n ? "left" : "right";
    }
    function An(e) {
      if (!e.hasClass("fp-noscroll")) {
        e.css("overflow", "hidden");
        var n,
          t = s.scrollOverflowHandler,
          o = t.wrapContent(),
          i = e.closest(y),
          a = t.scrollable(e);
        a.length
          ? (n = t.scrollHeight(e))
          : ((n = e.get(0).scrollHeight),
            s.verticalCentered && (n = e.find(k).get(0).scrollHeight));
        var r =
          mt -
          parseInt(i.css("padding-bottom")) -
          parseInt(i.css("padding-top"));
        n > r
          ? a.length
            ? t.update(e, r)
            : (s.verticalCentered ? e.find(k).wrapInner(o) : e.wrapInner(o),
              t.create(e, r))
          : t.remove(e),
          e.css("overflow", "");
      }
    }
    function Mn(e) {
      e.hasClass(j) ||
        e
          .addClass(j)
          .wrapInner(
            '<div class="' + T + '" style="height:' + On(e) + 'px;" />'
          );
    }
    function On(e) {
      var n = mt;
      if (s.paddingTop || s.paddingBottom) {
        var t = e;
        t.hasClass(S) || (t = e.closest(y));
        var o =
          parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
        n = mt - o;
      }
      return n;
    }
    function Hn(e, n) {
      n ? xn(vt) : Cn(vt),
        vt.css(_n(e)),
        setTimeout(function () {
          vt.removeClass(d);
        }, 10);
    }
    function Bn(n) {
      var t = vt.find(y + '[data-anchor="' + n + '"]');
      return t.length || (t = e(y).eq(n - 1)), t;
    }
    function Rn(e, n) {
      var t = n.find(F),
        o = t.find(z + '[data-anchor="' + e + '"]');
      return o.length || (o = t.find(z).eq(e)), o;
    }
    function zn(e, n) {
      var t = Bn(e);
      t.length &&
        ("undefined" == typeof n && (n = 0),
        e === ct || t.hasClass(p)
          ? Dn(t, n)
          : Xe(t, function () {
              Dn(t, n);
            }));
    }
    function Dn(e, n) {
      if ("undefined" != typeof n) {
        var t = e.find(F),
          o = Rn(n, e);
        o.length && mn(t, o);
      }
    }
    function Pn(e, n) {
      e.append('<div class="' + Y + '"><ul></ul></div>');
      var t = e.find(N);
      t.addClass(s.slidesNavPosition);
      for (var o = 0; n > o; o++)
        t.find("ul").append('<li><a href="#"><span></span></a></li>');
      t.css("margin-left", "-" + t.width() / 2 + "px"),
        t.find("li").first().find("a").addClass(p);
    }
    function Fn(e, n, t, o) {
      var i = "";
      s.anchors.length &&
        !s.lockAnchors &&
        (e
          ? ("undefined" != typeof t && (i = t),
            "undefined" == typeof n && (n = e),
            (dt = n),
            qn(i + "/" + n))
          : "undefined" != typeof e
          ? ((dt = n), qn(t))
          : qn(t)),
        jn();
    }
    function qn(e) {
      if (s.recordHistory) location.hash = e;
      else if (ht || pt) n.history.replaceState(i, i, "#" + e);
      else {
        var t = n.location.href.split("#")[0];
        n.location.replace(t + "#" + e);
      }
    }
    function Vn(e) {
      var n = e.data("anchor"),
        t = e.index();
      return "undefined" == typeof n && (n = t), n;
    }
    function jn() {
      var n = e(b),
        t = n.find(D),
        o = Vn(n),
        i = Vn(t),
        a = String(o);
      t.length && (a = a + "-" + i), (a = a.replace("/", "-").replace("#", ""));
      var r = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");
      (st[0].className = st[0].className.replace(r, "")),
        st.addClass(h + "-" + a);
    }
    function Yn() {
      var e,
        o = t.createElement("p"),
        a = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform",
        };
      t.body.insertBefore(o, null);
      for (var r in a)
        o.style[r] !== i &&
          ((o.style[r] = "translate3d(1px,1px,1px)"),
          (e = n.getComputedStyle(o).getPropertyValue(a[r])));
      return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e;
    }
    function Nn() {
      t.addEventListener
        ? (t.removeEventListener("mousewheel", je, !1),
          t.removeEventListener("wheel", je, !1),
          t.removeEventListener("MozMousePixelScroll", je, !1))
        : t.detachEvent("onmousewheel", je);
    }
    function Un() {
      var e,
        o = "";
      n.addEventListener
        ? (e = "addEventListener")
        : ((e = "attachEvent"), (o = "on"));
      var a =
        "onwheel" in t.createElement("div")
          ? "wheel"
          : t.onmousewheel !== i
          ? "mousewheel"
          : "DOMMouseScroll";
      "DOMMouseScroll" == a
        ? t[e](o + "MozMousePixelScroll", je, !1)
        : t[e](o + a, je, !1);
    }
    function Xn() {
      vt.on("mousedown", ln).on("mouseup", cn);
    }
    function Wn() {
      vt.off("mousedown", ln).off("mouseup", cn);
    }
    function Kn() {
      if (ht || pt) {
        var n = Gn();
        e(r)
          .off("touchstart " + n.down)
          .on("touchstart " + n.down, qe)
          .off("touchmove " + n.move)
          .on("touchmove " + n.move, De);
      }
    }
    function Qn() {
      if (ht || pt) {
        var n = Gn();
        e(r)
          .off("touchstart " + n.down)
          .off("touchmove " + n.move);
      }
    }
    function Gn() {
      var e;
      return (e = n.PointerEvent
        ? { down: "pointerdown", move: "pointermove" }
        : { down: "MSPointerDown", move: "MSPointerMove" });
    }
    function Jn(e) {
      var n = [];
      return (
        (n.y =
          "undefined" != typeof e.pageY && (e.pageY || e.pageX)
            ? e.pageY
            : e.touches[0].pageY),
        (n.x =
          "undefined" != typeof e.pageX && (e.pageY || e.pageX)
            ? e.pageX
            : e.touches[0].pageX),
        pt &&
          Fe(e) &&
          s.scrollBar &&
          ((n.y = e.touches[0].pageY), (n.x = e.touches[0].pageX)),
        n
      );
    }
    function Zn(e, n) {
      Q(0, "internal"),
        "undefined" != typeof n && (gt = !0),
        mn(e.closest(F), e),
        "undefined" != typeof n && (gt = !1),
        Q(Et.scrollingSpeed, "internal");
    }
    function $n(e) {
      if (s.scrollBar) vt.scrollTop(e);
      else if (s.css3) {
        var n = "translate3d(0px, -" + e + "px, 0px)";
        Hn(n, !1);
      } else vt.css("top", -e);
    }
    function _n(e) {
      return {
        "-webkit-transform": e,
        "-moz-transform": e,
        "-ms-transform": e,
        transform: e,
      };
    }
    function et(e, n, t) {
      switch (n) {
        case "up":
          bt[t].up = e;
          break;
        case "down":
          bt[t].down = e;
          break;
        case "left":
          bt[t].left = e;
          break;
        case "right":
          bt[t].right = e;
          break;
        case "all":
          "m" == t ? re(e) : se(e);
      }
    }
    function nt(n) {
      l(!1, "internal"),
        re(!1),
        se(!1),
        vt.addClass(f),
        clearTimeout(Tt),
        clearTimeout(Ct),
        clearTimeout(xt),
        clearTimeout(kt),
        clearTimeout(It),
        ne.off("scroll", He).off("hashchange", on).off("resize", yn),
        te
          .off("click", A + " a")
          .off("mouseenter", A + " li")
          .off("mouseleave", A + " li")
          .off("click", U)
          .off("mouseover", s.normalScrollElements)
          .off("mouseout", s.normalScrollElements),
        e(y).off("click", W),
        clearTimeout(Tt),
        clearTimeout(Ct),
        n && tt();
    }
    function tt() {
      $n(0),
        vt
          .find(
            "img[data-src], source[data-src], audio[data-src], iframe[data-src]"
          )
          .each(function () {
            e(this).attr("src", e(this).data("src")),
              e(this).removeAttr("data-src");
          }),
        e(A + ", " + N + ", " + W).remove(),
        e(y).css({ height: "", "background-color": "", padding: "" }),
        e(z).css({ width: "" }),
        vt.css({
          height: "",
          position: "",
          "-ms-touch-action": "",
          "touch-action": "",
        }),
        rt.css({ overflow: "", height: "" }),
        e("html").removeClass(u),
        st.removeClass(c),
        e.each(st.get(0).className.split(/\s+/), function (e, n) {
          0 === n.indexOf(h) && st.removeClass(n);
        }),
        e(y + ", " + z).each(function () {
          s.scrollOverflowHandler.remove(e(this)),
            e(this).removeClass(j + " " + p);
        }),
        Cn(vt),
        vt.find(k + ", " + V + ", " + F).each(function () {
          e(this).replaceWith(this.childNodes);
        }),
        rt.scrollTop(0);
      var n = [S, R, q];
      e.each(n, function (n, t) {
        e("." + t).removeClass(t);
      });
    }
    function ot(e, n, t) {
      (s[e] = n), "internal" !== t && (Et[e] = n);
    }
    function it() {
      var n = [
        "fadingEffect",
        "continuousHorizontal",
        "scrollHorizontally",
        "interlockedSlides",
        "resetSliders",
        "responsiveSlides",
      ];
      return e("html").hasClass(u)
        ? void at(
            "error",
            "Fullpage.js can only be initialized once and you are doing it multiple times!"
          )
        : (s.continuousVertical &&
            (s.loopTop || s.loopBottom) &&
            ((s.continuousVertical = !1),
            at(
              "warn",
              "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          s.scrollBar &&
            s.scrollOverflow &&
            at(
              "warn",
              "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"
            ),
          s.continuousVertical &&
            s.scrollBar &&
            ((s.continuousVertical = !1),
            at(
              "warn",
              "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          n.forEach(function (e) {
            s[e] &&
              (console.log(e),
              at(
                "warn",
                "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js"
              ));
          }),
          void e.each(s.anchors, function (n, t) {
            var o = te.find("[name]").filter(function () {
                return (
                  e(this).attr("name") &&
                  e(this).attr("name").toLowerCase() == t.toLowerCase()
                );
              }),
              i = te.find("[id]").filter(function () {
                return (
                  e(this).attr("id") &&
                  e(this).attr("id").toLowerCase() == t.toLowerCase()
                );
              });
            (i.length || o.length) &&
              (at(
                "error",
                "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
              ),
              i.length &&
                at(
                  "error",
                  '"' +
                    t +
                    '" is is being used by another element `id` property'
                ),
              o.length &&
                at(
                  "error",
                  '"' +
                    t +
                    '" is is being used by another element `name` property'
                ));
          }));
    }
    function at(e, n) {
      console && console[e] && console[e]("fullPage: " + n);
    }
    if (e("html").hasClass(u)) return void it();
    var rt = e("html, body"),
      st = e("body"),
      lt = e.fn.fullpage;
    s = e.extend(
      {
        menu: !1,
        anchors: [],
        lockAnchors: !1,
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        scrollBar: !1,
        hybrid: !1,
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        continuousHorizontal: !0,
        scrollHorizontally: !1,
        interlockedSlides: !1,
        resetSliders: !1,
        fadingEffect: !1,
        normalScrollElements: null,
        scrollOverflow: !1,
        scrollOverflowHandler: ie,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        controlArrows: !0,
        controlArrowColor: "#fff",
        verticalCentered: !0,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: !1,
        sectionSelector: w,
        slideSelector: B,
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
      },
      s
    );
    var ct,
      dt,
      ft,
      ut = !1,
      ht = navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
      ),
      pt =
        "ontouchstart" in n ||
        navigator.msMaxTouchPoints > 0 ||
        navigator.maxTouchPoints,
      vt = e(this),
      mt = ne.height(),
      gt = !1,
      wt = !0,
      St = !0,
      yt = [],
      bt = {};
    (bt.m = { up: !0, down: !0, left: !0, right: !0 }),
      (bt.k = e.extend(!0, {}, bt.m));
    var xt,
      Ct,
      Tt,
      kt,
      It,
      Lt,
      Et = e.extend(!0, {}, s);
    it(),
      (oe.click = pt),
      (oe = e.extend(oe, s.scrollOverflowOptions)),
      e.extend(e.easing, {
        easeInOutCubic: function (e, n, t, o, i) {
          return (n /= i / 2) < 1
            ? (o / 2) * n * n * n + t
            : (o / 2) * ((n -= 2) * n * n + 2) + t;
        },
      }),
      e(this).length &&
        ((lt.setAutoScrolling = l),
        (lt.setRecordHistory = X),
        (lt.setScrollingSpeed = Q),
        (lt.setFitToSection = Z),
        (lt.setLockAnchors = $),
        (lt.setMouseWheelScrolling = ae),
        (lt.setAllowScrolling = re),
        (lt.setKeyboardScrolling = se),
        (lt.moveSectionUp = le),
        (lt.moveSectionDown = ce),
        (lt.silentMoveTo = de),
        (lt.moveTo = fe),
        (lt.moveSlideRight = ue),
        (lt.moveSlideLeft = he),
        (lt.reBuild = pe),
        (lt.setResponsive = ve),
        (lt.getFullpageData = me),
        (lt.destroy = nt),
        ge(),
        we());
    var At = !1,
      Mt = 0,
      Ot = 0,
      Ht = 0,
      Bt = 0,
      Rt = 0,
      zt = new Date().getTime(),
      Dt = 0,
      Pt = 0,
      Ft = mt;
  }),
    "undefined" != typeof IScroll &&
      ((IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this),
          this.wrapper.addEventListener("mousewheel", this),
          this.wrapper.addEventListener("DOMMouseScroll", this);
      }),
      (IScroll.prototype.wheelOff = function () {
        this.wrapper.removeEventListener("wheel", this),
          this.wrapper.removeEventListener("mousewheel", this),
          this.wrapper.removeEventListener("DOMMouseScroll", this);
      }));
  var ie = {
    refreshId: null,
    iScrollInstances: [],
    onLeave: function () {
      var n = e(b).find(l).data("iscrollInstance");
      "undefined" != typeof n && n && n.wheelOff();
    },
    afterLoad: function () {
      var n = e(b).find(l).data("iscrollInstance");
      "undefined" != typeof n && n && n.wheelOn();
    },
    create: function (n, t) {
      var o = n.find(l);
      o.height(t),
        o.each(function () {
          var n = jQuery(this),
            t = n.data("iscrollInstance");
          t &&
            e.each(ie.iScrollInstances, function () {
              e(this).destroy();
            }),
            (t = new IScroll(n.get(0), oe)),
            ie.iScrollInstances.push(t),
            n.data("iscrollInstance", t);
        });
    },
    isScrolled: function (e, n) {
      var t = n.data("iscrollInstance");
      return t
        ? "top" === e
          ? t.y >= 0 && !n.scrollTop()
          : "bottom" === e
          ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight
          : void 0
        : !0;
    },
    scrollable: function (e) {
      return e.find(F).length ? e.find(D).find(l) : e.find(l);
    },
    scrollHeight: function (e) {
      return e.find(l).children().first().get(0).scrollHeight;
    },
    remove: function (e) {
      var n = e.find(l);
      if (n.length) {
        var t = n.data("iscrollInstance");
        t.destroy(), n.data("iscrollInstance", null);
      }
      e.find(l).children().first().children().first().unwrap().unwrap();
    },
    update: function (n, t) {
      clearTimeout(ie.refreshId),
        (ie.refreshId = setTimeout(function () {
          e.each(ie.iScrollInstances, function () {
            e(this).get(0).refresh();
          });
        }, 150)),
        n
          .find(l)
          .css("height", t + "px")
          .parent()
          .css("height", t + "px");
    },
    wrapContent: function () {
      return '<div class="' + s + '"><div class="fp-scroller"></div></div>';
    },
  };
});
//# sourceMappingURL=jquery.fullpage.min.js.map

/*!
 * fullPage 2.9.2 - Extensions 0.0.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!(function (e, n) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], function (t) {
        return n(t, e, e.document, e.Math);
      })
    : "object" == typeof exports && exports
    ? (module.exports = n(require("jquery"), e, e.document, e.Math))
    : n(jQuery, e, e.document, e.Math);
})("undefined" != typeof window ? window : this, function (e, n, t, o, i) {
  "use strict";
  var r = "fullpage-wrapper",
    a = "." + r,
    l = "fp-scrollable",
    s = "." + l,
    c = "fp-responsive",
    d = "fp-notransition",
    f = "fp-destroyed",
    u = "fp-enabled",
    h = "fp-viewing",
    p = "active",
    v = "." + p,
    g = "fp-completely",
    m = "." + g,
    S = ".section",
    w = "fp-section",
    y = "." + w,
    b = y + v,
    x = y + ":first",
    C = y + ":last",
    T = "fp-tableCell",
    I = "." + T,
    k = "fp-auto-height",
    A = "fp-normal-scroll",
    M = "fp-nav",
    O = "#" + M,
    L = "fp-tooltip",
    E = "." + L,
    H = "fp-show-active",
    z = ".slide",
    B = "fp-slide",
    R = "." + B,
    D = R + v,
    P = "fp-slides",
    V = "." + P,
    W = "fp-slidesContainer",
    F = "." + W,
    Z = "fp-table",
    Y = "fp-slidesNav",
    j = "." + Y,
    N = j + " a",
    U = "fp-controlArrow",
    G = "." + U,
    X = "fp-prev",
    q = "." + X,
    Q = U + " " + X,
    _ = G + q,
    K = "fp-next",
    J = "." + K,
    $ = U + " " + K,
    ee = G + J,
    ne = e(n),
    te = e(t),
    oe = {
      scrollbars: !0,
      mouseWheel: !0,
      hideScrollbars: !1,
      fadeScrollbars: !1,
      disableMouse: !0,
      interactiveScrollbars: !0,
    };
  (e.fn.fullpage = function (l) {
    function s(n, t) {
      n || at(0), pt("autoScrolling", n, t);
      var o = e(b);
      l.autoScrolling && !l.scrollBar
        ? (mt.css({ overflow: "hidden", height: "100%" }),
          U(Wt.recordHistory, "internal"),
          kt.css({ "-ms-touch-action": "none", "touch-action": "none" }),
          o.length && at(o.position().top))
        : (mt.css({ overflow: "visible", height: "initial" }),
          U(!1, "internal"),
          kt.css({ "-ms-touch-action": "", "touch-action": "" }),
          o.length && mt.scrollTop(o.position().top));
    }
    function U(e, n) {
      pt("recordHistory", e, n);
    }
    function q(e, n) {
      "internal" !== n &&
        l.fadingEffect &&
        wt.fadingEffect &&
        wt.fadingEffect.update(e),
        pt("scrollingSpeed", e, n);
    }
    function K(e, n) {
      pt("fitToSection", e, n);
    }
    function J(e) {
      l.lockAnchors = e;
    }
    function re(e) {
      e ? (Jn(), $n()) : (Kn(), et());
    }
    function ae(n, t) {
      "undefined" != typeof t
        ? ((t = t.replace(/ /g, "").split(",")),
          e.each(t, function (e, t) {
            st(n, t, "m");
          }))
        : n
        ? (re(!0), nt())
        : (re(!1), tt());
    }
    function le(n, t) {
      "undefined" != typeof t
        ? ((t = t.replace(/ /g, "").split(",")),
          e.each(t, function (e, t) {
            st(n, t, "k");
          }))
        : (l.keyboardScrolling = n);
    }
    function se() {
      var n = e(b).prev(y);
      n.length || (!l.loopTop && !l.continuousVertical) || (n = e(y).last()),
        n.length && Qe(n, null, !0);
    }
    function ce() {
      var n = e(b).next(y);
      n.length ||
        (!l.loopBottom && !l.continuousVertical) ||
        (n = e(y).first()),
        n.length && Qe(n, null, !1);
    }
    function de(e, n) {
      q(0, "internal"), fe(e, n), q(Wt.scrollingSpeed, "internal");
    }
    function fe(e, n) {
      var t = Zn(e);
      "undefined" != typeof n ? jn(e, n) : t.length > 0 && Qe(t);
    }
    function ue(e) {
      Ue("right", e);
    }
    function he(e) {
      Ue("left", e);
    }
    function pe(n) {
      if (!kt.hasClass(f)) {
        (Mt = !0),
          (At = ne.height()),
          e(y).each(function () {
            var n = e(this).find(V),
              t = e(this).find(R);
            l.verticalCentered &&
              e(this)
                .find(I)
                .css("height", Wn(e(this)) + "px"),
              e(this).css("height", Ce(e(this)) + "px"),
              l.scrollOverflow &&
                (t.length
                  ? t.each(function () {
                      Pn(e(this));
                    })
                  : Pn(e(this))),
              t.length > 1 && Tn(n, n.find(D));
          });
        var t = e(b),
          o = t.index(y);
        o && de(o + 1),
          (Mt = !1),
          e.isFunction(l.afterResize) && n && l.afterResize.call(kt),
          e.isFunction(l.afterReBuild) && !n && l.afterReBuild.call(kt);
      }
    }
    function ve(n) {
      var t = St.hasClass(c);
      n
        ? t ||
          (s(!1, "internal"),
          K(!1, "internal"),
          e(O).hide(),
          St.addClass(c),
          e.isFunction(l.afterResponsive) && l.afterResponsive.call(kt, n),
          l.responsiveSlides &&
            wt.responsiveSlides &&
            wt.responsiveSlides.toSections())
        : t &&
          (s(Wt.autoScrolling, "internal"),
          K(Wt.autoScrolling, "internal"),
          e(O).show(),
          St.removeClass(c),
          e.isFunction(l.afterResponsive) && l.afterResponsive.call(kt, n),
          l.responsiveSlides &&
            wt.responsiveSlides &&
            wt.responsiveSlides.toSlides());
    }
    function ge() {
      return {
        options: l,
        internals: {
          getDestinationPosition: qe,
          isTouch: It,
          c: dn,
          getXmovement: Dn,
          removeAnimation: En,
          getTransforms: lt,
          lazyLoad: nn,
          addAnimation: Ln,
          performHorizontalMove: kn,
          landscapeScroll: Tn,
          silentLandscapeScroll: rt,
          keepSlidesPosition: Xe,
          silentScroll: at,
          styleSlides: xe,
          scrollHandler: Be,
          getSlidesDestiny: Ge,
          getEventsPage: it,
          getMSPointer: ot,
          isReallyTouch: Ze,
          checkParentForNormalScrollElement: Fe,
        },
      };
    }
    function me() {
      l.css3 && (l.css3 = _n()),
        (l.scrollBar = l.scrollBar || l.hybrid),
        ye(),
        be(),
        ae(!0),
        s(l.autoScrolling, "internal");
      var n = e(b).find(D);
      n.length &&
        (0 !== e(b).index(y) || (0 === e(b).index(y) && 0 !== n.index())) &&
        rt(n),
        On(),
        Qn(),
        "complete" === t.readyState && fn(),
        ne.on("load", fn);
    }
    function Se() {
      ne.on("scroll", Be).on("hashchange", un).blur(wn).resize(Mn),
        te
          .keydown(hn)
          .keyup(vn)
          .on("click touchstart", O + " a", yn)
          .on("click touchstart", N, bn)
          .on("click", E, pn),
        e(y).on("click touchstart", G, Sn),
        l.normalScrollElements &&
          (te.on("mouseenter", l.normalScrollElements, function () {
            re(!1);
          }),
          te.on("mouseleave", l.normalScrollElements, function () {
            re(!0);
          }));
    }
    function we(e) {
      var t = "fp_" + e + "Extension";
      (Ft[e] = l[e + "Key"]),
        (wt[e] = "undefined" != typeof n[t] ? new n[t]() : null),
        wt[e] && wt[e].c(e);
    }
    function ye() {
      var n = kt.find(l.sectionSelector);
      l.anchors.length ||
        (l.anchors = n
          .filter("[data-anchor]")
          .map(function () {
            return e(this).data("anchor").toString();
          })
          .get()),
        l.navigationTooltips.length ||
          (l.navigationTooltips = n
            .filter("[data-tooltip]")
            .map(function () {
              return e(this).data("tooltip").toString();
            })
            .get());
    }
    function be() {
      kt.css({ height: "100%", position: "relative" }),
        kt.addClass(r),
        e("html").addClass(u),
        (At = ne.height()),
        kt.removeClass(f),
        ke(),
        e(y).each(function (n) {
          var t = e(this),
            o = t.find(R),
            i = o.length;
          Te(t, n), Ie(t, n), i > 0 ? xe(t, o, i) : l.verticalCentered && Vn(t);
        }),
        l.fixedElements && l.css3 && e(l.fixedElements).appendTo(St),
        l.navigation && Me(),
        Le(),
        l.fadingEffect && wt.fadingEffect && wt.fadingEffect.apply(),
        l.scrollOverflow
          ? ("complete" === t.readyState && Oe(), ne.on("load", Oe))
          : ze();
    }
    function xe(n, t, o) {
      var i = 100 * o,
        r = 100 / o;
      t.wrapAll('<div class="' + W + '" />'),
        t.parent().wrap('<div class="' + P + '" />'),
        n.find(F).css("width", i + "%"),
        o > 1 && (l.controlArrows && Ae(n), l.slidesNavigation && Un(n, o)),
        t.each(function (n) {
          e(this).css("width", r + "%"), l.verticalCentered && Vn(e(this));
        });
      var a = n.find(D);
      a.length &&
      (0 !== e(b).index(y) || (0 === e(b).index(y) && 0 !== a.index()))
        ? rt(a)
        : t.eq(0).addClass(p);
    }
    function Ce(e) {
      return l.offsetSections && wt.offsetSections
        ? wt.offsetSections.getWindowHeight(e)
        : At;
    }
    function Te(n, t) {
      t || 0 !== e(b).length || n.addClass(p),
        n.css("height", Ce(n) + "px"),
        l.paddingTop && n.css("padding-top", l.paddingTop),
        l.paddingBottom && n.css("padding-bottom", l.paddingBottom),
        "undefined" != typeof l.sectionsColor[t] &&
          n.css("background-color", l.sectionsColor[t]),
        "undefined" != typeof l.anchors[t] &&
          n.attr("data-anchor", l.anchors[t]);
    }
    function Ie(n, t) {
      "undefined" != typeof l.anchors[t] &&
        n.hasClass(p) &&
        Bn(l.anchors[t], t),
        l.menu &&
          l.css3 &&
          e(l.menu).closest(a).length &&
          e(l.menu).appendTo(St);
    }
    function ke() {
      kt.find(l.sectionSelector).addClass(w),
        kt.find(l.slideSelector).addClass(B);
    }
    function Ae(e) {
      e
        .find(V)
        .after('<div class="' + Q + '"></div><div class="' + $ + '"></div>'),
        "#fff" != l.controlArrowColor &&
          (e
            .find(ee)
            .css(
              "border-color",
              "transparent transparent transparent " + l.controlArrowColor
            ),
          e
            .find(_)
            .css(
              "border-color",
              "transparent " + l.controlArrowColor + " transparent transparent"
            )),
        l.loopHorizontal || e.find(_).hide();
    }
    function Me() {
      St.append('<div id="' + M + '"><ul></ul></div>');
      var n = e(O);
      n.addClass(function () {
        return l.showActiveTooltip
          ? H + " " + l.navigationPosition
          : l.navigationPosition;
      });
      for (var t = 0; t < e(y).length; t++) {
        var o = "";
        l.anchors.length && (o = l.anchors[t]);
        var i = '<li><a href="#' + o + '"><span></span></a>',
          r = l.navigationTooltips[t];
        "undefined" != typeof r &&
          "" !== r &&
          (i +=
            '<div class="' +
            L +
            " " +
            l.navigationPosition +
            '">' +
            r +
            "</div>"),
          (i += "</li>"),
          n.find("ul").append(i);
      }
      e(O).css("margin-top", "-" + e(O).height() / 2 + "px"),
        e(O).find("li").eq(e(b).index(y)).find("a").addClass(p);
    }
    function Oe() {
      e(y).each(function () {
        var n = e(this).find(R);
        n.length
          ? n.each(function () {
              Pn(e(this));
            })
          : Pn(e(this));
      }),
        ze();
    }
    function Le() {
      kt.find('iframe[src*="youtube.com/embed/"]').each(function () {
        Ee(e(this), "enablejsapi=1");
      });
    }
    function Ee(e, n) {
      var t = e.attr("src");
      e.attr("src", t + He(t) + n);
    }
    function He(e) {
      return /\?/.test(e) ? "&" : "?";
    }
    function ze() {
      var n = e(b);
      n.addClass(g),
        l.scrollOverflowHandler.afterRender &&
          l.scrollOverflowHandler.afterRender(n),
        nn(n),
        tn(n),
        l.scrollOverflowHandler.afterLoad(),
        e.isFunction(l.afterLoad) &&
          l.afterLoad.call(n, n.data("anchor"), n.index(y) + 1),
        e.isFunction(l.afterRender) && l.afterRender.call(kt);
    }
    function Be() {
      var n;
      if ((!l.autoScrolling || l.scrollBar || ft("dragAndMove")) && !ht()) {
        var i = ft("dragAndMove")
            ? o.abs(wt.dragAndMove.getCurrentScroll())
            : ne.scrollTop(),
          r = De(i),
          a = 0,
          s = i + ne.height() / 2,
          c = ft("dragAndMove")
            ? wt.dragAndMove.getDocumentHeight()
            : St.height() - ne.height(),
          d = c === i,
          f = t.querySelectorAll(y);
        if (d) a = f.length - 1;
        else if (i)
          for (var u = 0; u < f.length; ++u) {
            var h = f[u];
            h.offsetTop <= s && (a = u);
          }
        else a = 0;
        if (
          (Re(r) &&
            (e(b).hasClass(g) || e(b).addClass(g).siblings().removeClass(g)),
          (n = e(f).eq(a)),
          !n.hasClass(p))
        ) {
          Zt = !0;
          var v,
            m,
            S = e(b),
            w = S.index(y) + 1,
            x = Rn(n),
            C = n.data("anchor"),
            T = n.index(y) + 1,
            I = n.find(D);
          I.length && ((m = I.data("anchor")), (v = I.index())),
            Lt &&
              (n.addClass(p).siblings().removeClass(p),
              e.isFunction(l.onLeave) && l.onLeave.call(S, w, T, x),
              e.isFunction(l.afterLoad) && l.afterLoad.call(n, C, T),
              rn(S),
              nn(n),
              tn(n),
              Bn(C, T - 1),
              l.anchors.length && (yt = C),
              Gn(v, m, C, T)),
            clearTimeout(Dt),
            (Dt = setTimeout(function () {
              Zt = !1;
            }, 100));
        }
        l.fitToSection &&
          (clearTimeout(Pt),
          (Pt = setTimeout(function () {
            Lt &&
              l.fitToSection &&
              (e(b).is(n) && (Mt = !0), Qe(e(b)), (Mt = !1));
          }, l.fitToSectionDelay)));
      }
    }
    function Re(n) {
      var t = e(b).position().top,
        o = t + ne.height();
      return "up" == n
        ? o >= ne.scrollTop() + ne.height()
        : t <= ne.scrollTop();
    }
    function De(e) {
      var n = e > Yt ? "down" : "up";
      return (Yt = e), (qt = e), n;
    }
    function Pe(e, n) {
      if (Ht.m[e]) {
        var t = "down" === e ? "bottom" : "top",
          o = "down" === e ? ce : se;
        if (
          (wt.scrollHorizontally &&
            (o = wt.scrollHorizontally.getScrollSection(e, o)),
          n.length > 0)
        ) {
          if (!l.scrollOverflowHandler.isScrolled(t, n)) return !0;
          o();
        } else o();
      }
    }
    function Ve(e) {
      var n = e.originalEvent;
      !Fe(e.target) && l.autoScrolling && Ze(n) && e.preventDefault();
    }
    function We(n) {
      var t = n.originalEvent,
        i = e(t.target).closest(y);
      if (!Fe(n.target) && Ze(t)) {
        l.autoScrolling && n.preventDefault();
        var r = l.scrollOverflowHandler.scrollable(i),
          a = it(t);
        (Ut = a.y),
          (Gt = a.x),
          i.find(V).length && o.abs(Nt - Gt) > o.abs(jt - Ut)
            ? !Ct &&
              o.abs(Nt - Gt) > (ne.outerWidth() / 100) * l.touchSensitivity &&
              (Nt > Gt ? Ht.m.right && ue(i) : Ht.m.left && he(i))
            : l.autoScrolling &&
              Lt &&
              o.abs(jt - Ut) > (ne.height() / 100) * l.touchSensitivity &&
              (jt > Ut ? Pe("down", r) : Ut > jt && Pe("up", r));
      }
    }
    function Fe(n, t) {
      t = t || 0;
      var o = e(n).parent();
      return t < l.normalScrollElementTouchThreshold &&
        o.is(l.normalScrollElements)
        ? !0
        : t == l.normalScrollElementTouchThreshold
        ? !1
        : Fe(o, ++t);
    }
    function Ze(e) {
      return "undefined" == typeof e.pointerType || "mouse" != e.pointerType;
    }
    function Ye(e) {
      var n = e.originalEvent;
      if ((l.fitToSection && mt.stop(), Ze(n))) {
        var t = it(n);
        (jt = t.y), (Nt = t.x);
      }
    }
    function je(e, n) {
      for (
        var t = 0, i = e.slice(o.max(e.length - n, 1)), r = 0;
        r < i.length;
        r++
      )
        t += i[r];
      return o.ceil(t / n);
    }
    function Ne(t) {
      var i = new Date().getTime(),
        r = e(m).hasClass(A);
      if (l.autoScrolling && !xt && !r) {
        t = t || n.event;
        var a = t.wheelDelta || -t.deltaY || -t.detail,
          s = o.max(-1, o.min(1, a)),
          c =
            "undefined" != typeof t.wheelDeltaX ||
            "undefined" != typeof t.deltaX,
          d =
            o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) ||
            o.abs(t.deltaX) < o.abs(t.deltaY) ||
            !c;
        Et.length > 149 && Et.shift(),
          Et.push(o.abs(a)),
          l.scrollBar &&
            (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
        var f = e(b),
          u = l.scrollOverflowHandler.scrollable(f),
          h = i - Xt;
        if (((Xt = i), h > 200 && (Et = []), Lt && !ut())) {
          var p = je(Et, 10),
            v = je(Et, 70),
            g = p >= v;
          g && d && (0 > s ? Pe("down", u) : Pe("up", u));
        }
        return !1;
      }
      l.fitToSection && mt.stop();
    }
    function Ue(n, t) {
      var o = "undefined" == typeof t ? e(b) : t,
        i = o.find(V);
      if (!(!i.length || ut() || Ct || i.find(R).length < 2)) {
        var r = Ge(n, i);
        (Ct = !0), Tn(i, r, n);
      }
    }
    function Ge(e, n) {
      var t = (n.find(R).length, n.find(D)),
        o = null;
      if (((o = "left" === e ? t.prev(R) : t.next(R)), !o.length)) {
        if (!l.loopHorizontal) return;
        o = "left" === e ? t.siblings(":last") : t.siblings(":first");
      }
      return o;
    }
    function Xe() {
      e(D).each(function () {
        rt(e(this), "internal");
      });
    }
    function qe(e) {
      var n = e.position(),
        t = n.top,
        o = ft("dragAndMove") ? wt.dragAndMove.isScrollingDown() : n.top > qt,
        i = t - At + e.outerHeight(),
        r = l.bigSectionsDestination;
      return (
        e.outerHeight() > At
          ? ((!o && !r) || "bottom" === r) && (t = i)
          : (o || (Mt && e.is(":last-child"))) && (t = i),
        l.offsetSections &&
          wt.offsetSections &&
          (t = wt.offsetSections.getSectionPosition(o, t, e)),
        (qt = t),
        t
      );
    }
    function Qe(n, t, o) {
      if ("undefined" != typeof n && n.length) {
        var i,
          r,
          a = qe(n),
          s = {
            element: n,
            callback: t,
            isMovementUp: o,
            dtop: a,
            yMovement: Rn(n),
            anchorLink: n.data("anchor"),
            sectionIndex: n.index(y),
            activeSlide: n.find(D),
            activeSection: e(b),
            leavingSection: e(b).index(y) + 1,
            localIsResizing: Mt,
          };
        (s.activeSection.is(n) && !Mt) ||
          (l.scrollBar && ne.scrollTop() === s.dtop && !n.hasClass(k)) ||
          (s.activeSlide.length &&
            ((i = s.activeSlide.data("anchor")), (r = s.activeSlide.index())),
          l.autoScrolling &&
            l.continuousVertical &&
            "undefined" != typeof s.isMovementUp &&
            ((!s.isMovementUp && "up" == s.yMovement) ||
              (s.isMovementUp && "down" == s.yMovement)) &&
            (s = Je(s)),
          (!e.isFunction(l.onLeave) ||
            s.localIsResizing ||
            l.onLeave.call(
              s.activeSection,
              s.leavingSection,
              s.sectionIndex + 1,
              s.yMovement
            ) !== !1) &&
            (ft("scrollOverflowReset") &&
              wt.scrollOverflowReset.setPrevious(s.activeSection),
            rn(s.activeSection),
            l.scrollOverflowHandler.beforeLeave(),
            n.addClass(p).siblings().removeClass(p),
            nn(n),
            l.scrollOverflowHandler.onLeave(),
            (Lt = !1),
            Gn(r, i, s.anchorLink, s.sectionIndex),
            _e(s),
            (yt = s.anchorLink),
            Bn(s.anchorLink, s.sectionIndex)));
      }
    }
    function _e(n) {
      if (l.css3 && l.autoScrolling && !l.scrollBar) {
        var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";
        Fn(t, !0),
          l.scrollingSpeed
            ? (clearTimeout(Bt),
              (Bt = setTimeout(function () {
                en(n);
              }, l.scrollingSpeed)))
            : en(n);
      } else {
        var i = Ke(n);
        e(i.element)
          .animate(i.options, l.scrollingSpeed, l.easing)
          .promise()
          .done(function () {
            l.scrollBar
              ? setTimeout(function () {
                  en(n);
                }, 30)
              : en(n);
          });
      }
    }
    function Ke(e) {
      var n = {};
      return (
        l.autoScrolling && !l.scrollBar
          ? ((n.options = { top: -e.dtop }), (n.element = a))
          : ((n.options = { scrollTop: e.dtop }), (n.element = "html, body")),
        n
      );
    }
    function Je(n) {
      return (
        n.isMovementUp
          ? e(b).before(n.activeSection.nextAll(y))
          : e(b).after(n.activeSection.prevAll(y).get().reverse()),
        at(e(b).position().top),
        Xe(),
        (n.wrapAroundElements = n.activeSection),
        (n.dtop = n.element.position().top),
        (n.yMovement = Rn(n.element)),
        n
      );
    }
    function $e(n) {
      n.wrapAroundElements &&
        n.wrapAroundElements.length &&
        (n.isMovementUp
          ? e(x).before(n.wrapAroundElements)
          : e(C).after(n.wrapAroundElements),
        at(e(b).position().top),
        Xe());
    }
    function en(n) {
      $e(n),
        e.isFunction(l.afterLoad) &&
          !n.localIsResizing &&
          l.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1),
        l.scrollOverflowHandler.afterLoad(),
        ft("scrollOverflowReset") && wt.scrollOverflowReset.reset(),
        l.resetSliders && wt.resetSliders && wt.resetSliders.apply(n),
        n.localIsResizing || tn(n.element),
        n.element.addClass(g).siblings().removeClass(g),
        (Lt = !0),
        e.isFunction(n.callback) && n.callback.call(this);
    }
    function nn(n) {
      if (l.lazyLoading) {
        var t,
          o = an(n);
        o.find(
          "img[data-src], source[data-src], audio[data-src], iframe[data-src]"
        ).each(function () {
          (t = e(this)),
            t.attr("src", t.data("src")),
            t.removeAttr("data-src"),
            t.is("source") && t.closest("video").get(0).load();
        });
      }
    }
    function tn(n) {
      var t = an(n);
      t.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-autoplay") &&
          "function" == typeof n.play &&
          n.play();
      }),
        t.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          n.hasAttribute("data-autoplay") && on(n),
            (n.onload = function () {
              n.hasAttribute("data-autoplay") && on(n);
            });
        });
    }
    function on(e) {
      e.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
    function rn(n) {
      var t = an(n);
      t.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-keepplaying") ||
          "function" != typeof n.pause ||
          n.pause();
      }),
        t.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          /youtube\.com\/embed\//.test(e(this).attr("src")) &&
            !n.hasAttribute("data-keepplaying") &&
            e(this)
              .get(0)
              .contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
        });
    }
    function an(n) {
      var t = n.find(D);
      return t.length && (n = e(t)), n;
    }
    function ln(e) {
      function n(e) {
        var n,
          o,
          i,
          r,
          l,
          s,
          c,
          d = "",
          f = 0;
        for (e = e.replace(/[^A-Za-z0-9+\/=]/g, ""); f < e.length; )
          (r = a.indexOf(e.charAt(f++))),
            (l = a.indexOf(e.charAt(f++))),
            (s = a.indexOf(e.charAt(f++))),
            (c = a.indexOf(e.charAt(f++))),
            (n = (r << 2) | (l >> 4)),
            (o = ((15 & l) << 4) | (s >> 2)),
            (i = ((3 & s) << 6) | c),
            (d += String.fromCharCode(n)),
            64 != s && (d += String.fromCharCode(o)),
            64 != c && (d += String.fromCharCode(i));
        return (d = t(d));
      }
      function t(e) {
        for (var n, t = "", o = 0, i = 0, r = 0; o < e.length; )
          (i = e.charCodeAt(o)),
            128 > i
              ? ((t += String.fromCharCode(i)), o++)
              : i > 191 && 224 > i
              ? ((r = e.charCodeAt(o + 1)),
                (t += String.fromCharCode(((31 & i) << 6) | (63 & r))),
                (o += 2))
              : ((r = e.charCodeAt(o + 1)),
                (n = e.charCodeAt(o + 2)),
                (t += String.fromCharCode(
                  ((15 & i) << 12) | ((63 & r) << 6) | (63 & n)
                )),
                (o += 3));
        return t;
      }
      function o(e) {
        return e;
      }
      function i(e) {
        return e.slice(3).slice(0, -3);
      }
      function r(e) {
        var t = e.split("_");
        if (t.length > 1) {
          var o = t[1],
            r = e.replace(i(t[1]), "").split("_")[0],
            a = r;
          return a + "_" + n(o.slice(3).slice(0, -3));
        }
        return i(e);
      }
      var a =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      return o(r(n(e)));
    }
    function sn() {
      if (t.domain.length) {
        var e = t.domain.replace(/^(www\.)/, "").split("."),
          n = (e.shift(), e.join("."));
        return n.replace(/(^\.*)|(\.*$)/g, "");
      }
      return "";
    }
    function cn(e) {
      var n = sn(),
        t = ["localhost", "127.0.0.1", "jshell.net", "UDdDQU5ZNlNN"],
        o = t[0],
        i = t[1],
        r = t[2],
        a = ln(t[3]),
        l = [o, i, r].indexOf(n) < 0 && 0 !== n.length,
        s = "undefined" != typeof Ft[e] && Ft[e].length;
      if (!s && l) return !1;
      var c = s ? ln(Ft[e]) : "";
      c = c.split("_");
      var d = c.length > 1 && c[1].indexOf(e, c[1].length - e.length) > -1,
        f = c[0].indexOf(n, c[0].length - n.length) < 0;
      return (!(f && l && a != c[0]) && d) || !l;
    }
    function dn(e) {
      if (!cn(e)) {
        var n = function () {
          "9999999" !== St.find("div").first().css("z-index") &&
            St.prepend(
              ln(
                "MTIzPGRpdiBzdHlsZT0iei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkOyB0b3A6IDIwcHg7IGxlZnQ6MjBweDsgYmFja2dyb3VuZDpyZWQ7IHBhZGRpbmc6IDdweCAxNXB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtZmFtaWx5OiBhcmlhbDsgY29sb3I6ICNmZmY7IGRpc3BsYXk6IGlubGluZS1ibG9jazsiPjxhIGhyZWY9Imh0dHA6Ly9hbHZhcm90cmlnby5jb20vZnVsbFBhZ2UvZXh0ZW5zaW9ucy8iIHN0eWxlPSJjb2xvcjogI2ZmZjsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7Ij5VbmxpY2Vuc2VkIGZ1bGxQYWdlLmpzIEV4dGVuc2lvbjwvYT48L2Rpdj4xMjM="
              )
            );
        };
        n(), setInterval(n, 2e3);
      }
    }
    function fn() {
      var e = n.location.hash.replace("#", "").split("/"),
        t = decodeURIComponent(e[0]),
        o = decodeURIComponent(e[1]);
      t && (l.animateAnchor ? jn(t, o) : de(t, o));
    }
    function un() {
      if (!Zt && !l.lockAnchors) {
        var e = n.location.hash.replace("#", "").split("/"),
          t = decodeURIComponent(e[0]),
          o = decodeURIComponent(e[1]),
          i = "undefined" == typeof yt,
          r = "undefined" == typeof yt && "undefined" == typeof o && !Ct;
        t.length &&
          ((t && t !== yt && !i) || r || (!Ct && bt != o)) &&
          jn(t, o);
      }
    }
    function hn(n) {
      clearTimeout(Vt);
      var t = e(":focus");
      if (
        !t.is("textarea") &&
        !t.is("input") &&
        !t.is("select") &&
        "true" !== t.attr("contentEditable") &&
        "" !== t.attr("contentEditable") &&
        l.keyboardScrolling &&
        l.autoScrolling
      ) {
        var o = n.which,
          i = [40, 38, 32, 33, 34];
        e.inArray(o, i) > -1 && n.preventDefault(),
          (xt = n.ctrlKey),
          (Vt = setTimeout(function () {
            xn(n);
          }, 150));
      }
    }
    function pn() {
      e(this).prev().trigger("click");
    }
    function vn(e) {
      Ot && (xt = e.ctrlKey);
    }
    function gn(e) {
      2 == e.which && ((Qt = e.pageY), kt.on("mousemove", Cn));
    }
    function mn(e) {
      2 == e.which && kt.off("mousemove");
    }
    function Sn() {
      var n = e(this).closest(y);
      e(this).hasClass(X) ? Ht.m.left && he(n) : Ht.m.right && ue(n);
    }
    function wn() {
      (Ot = !1), (xt = !1);
    }
    function yn(n) {
      n.preventDefault();
      var t = e(this).parent().index();
      Qe(e(y).eq(t));
    }
    function bn(n) {
      n.preventDefault();
      var t = e(this).closest(y).find(V),
        o = t.find(R).eq(e(this).closest("li").index());
      Tn(t, o);
    }
    function xn(n) {
      var t = n.shiftKey;
      if (Lt || !([37, 39].indexOf(n.which) < 0))
        switch (n.which) {
          case 38:
          case 33:
            Ht.k.up && se();
            break;
          case 32:
            if (t && Ht.k.up) {
              se();
              break;
            }
          case 40:
          case 34:
            Ht.k.down && ce();
            break;
          case 36:
            Ht.k.up && fe(1);
            break;
          case 35:
            Ht.k.down && fe(e(y).length);
            break;
          case 37:
            Ht.k.left && he();
            break;
          case 39:
            Ht.k.right && ue();
            break;
          default:
            return;
        }
    }
    function Cn(e) {
      Lt &&
        (e.pageY < Qt && Ht.m.up ? se() : e.pageY > Qt && Ht.m.down && ce()),
        (Qt = e.pageY);
    }
    function Tn(n, t, o) {
      var i = n.closest(y),
        r = {
          slides: n,
          destiny: t,
          direction: o,
          destinyPos: t.position(),
          slideIndex: t.index(),
          section: i,
          sectionIndex: i.index(y),
          anchorLink: i.data("anchor"),
          slidesNav: i.find(j),
          slideAnchor: qn(t),
          prevSlide: i.find(D),
          prevSlideIndex: i.find(D).index(),
          localIsResizing: Mt,
        };
      return (
        (r.xMovement = Dn(r.prevSlideIndex, r.slideIndex)),
        r.localIsResizing || (Lt = !1),
        l.onSlideLeave &&
        !r.localIsResizing &&
        "none" !== r.xMovement &&
        e.isFunction(l.onSlideLeave) &&
        l.onSlideLeave.call(
          r.prevSlide,
          r.anchorLink,
          r.sectionIndex + 1,
          r.prevSlideIndex,
          r.xMovement,
          r.slideIndex
        ) === !1
          ? void (Ct = !1)
          : (t.addClass(p).siblings().removeClass(p),
            r.localIsResizing || (rn(r.prevSlide), nn(t)),
            !l.loopHorizontal &&
              l.controlArrows &&
              (i.find(_).toggle(0 !== r.slideIndex),
              i.find(ee).toggle(!t.is(":last-child"))),
            i.hasClass(p) &&
              Gn(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex),
            wt.continuousHorizontal && wt.continuousHorizontal.apply(r),
            ht() ? In(r) : kn(n, r, !0),
            void (
              l.interlockedSlides &&
              wt.interlockedSlides &&
              wt.interlockedSlides.apply(r)
            ))
      );
    }
    function In(n) {
      wt.continuousHorizontal && wt.continuousHorizontal.afterSlideLoads(n),
        An(n.slidesNav, n.slideIndex),
        n.localIsResizing ||
          (e.isFunction(l.afterSlideLoad) &&
            l.afterSlideLoad.call(
              n.destiny,
              n.anchorLink,
              n.sectionIndex + 1,
              n.slideAnchor,
              n.slideIndex
            ),
          (Lt = !0),
          tn(n.destiny)),
        (Ct = !1),
        wt.interlockedSlides && wt.interlockedSlides.apply(n);
    }
    function kn(e, n, t) {
      var i = n.destinyPos;
      if (l.css3) {
        var r = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
        Ln(e.find(F)).css(lt(r)),
          (Rt = setTimeout(
            function () {
              t && In(n);
            },
            l.scrollingSpeed,
            l.easing
          ));
      } else
        e.animate(
          { scrollLeft: o.round(i.left) },
          l.scrollingSpeed,
          l.easing,
          function () {
            t && In(n);
          }
        );
    }
    function An(e, n) {
      e.find(v).removeClass(p), e.find("li").eq(n).find("a").addClass(p);
    }
    function Mn() {
      if ((On(), Tt)) {
        var n = e(t.activeElement);
        if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
          var i = ne.height();
          o.abs(i - _t) > (20 * o.max(_t, i)) / 100 && (pe(!0), (_t = i));
        }
      } else
        clearTimeout(zt),
          (zt = setTimeout(function () {
            pe(!0);
          }, 350));
    }
    function On() {
      var e = l.responsive || l.responsiveWidth,
        n = l.responsiveHeight,
        t = e && ne.outerWidth() < e,
        o = n && ne.height() < n;
      e && n ? ve(t || o) : e ? ve(t) : n && ve(o);
    }
    function Ln(e) {
      var n = "all " + l.scrollingSpeed + "ms " + l.easingcss3;
      return (
        e.removeClass(d), e.css({ "-webkit-transition": n, transition: n })
      );
    }
    function En(e) {
      return e.addClass(d);
    }
    function Hn(n, t) {
      l.navigation &&
        (e(O).find(v).removeClass(p),
        n
          ? e(O)
              .find('a[href="#' + n + '"]')
              .addClass(p)
          : e(O).find("li").eq(t).find("a").addClass(p));
    }
    function zn(n) {
      l.menu &&
        (e(l.menu).find(v).removeClass(p),
        e(l.menu)
          .find('[data-menuanchor="' + n + '"]')
          .addClass(p));
    }
    function Bn(e, n) {
      zn(e), Hn(e, n);
    }
    function Rn(n) {
      var t = e(b).index(y),
        o = n.index(y);
      return t == o ? "none" : t > o ? "up" : "down";
    }
    function Dn(e, n) {
      return e == n ? "none" : e > n ? "left" : "right";
    }
    function Pn(e) {
      if (!e.hasClass("fp-noscroll")) {
        e.css("overflow", "hidden");
        var n,
          t = l.scrollOverflowHandler,
          o = t.wrapContent(),
          i = e.closest(y),
          r = t.scrollable(e);
        r.length
          ? (n = t.scrollHeight(e))
          : ((n = e.get(0).scrollHeight),
            l.verticalCentered && (n = e.find(I).get(0).scrollHeight));
        var a =
          At -
          parseInt(i.css("padding-bottom")) -
          parseInt(i.css("padding-top"));
        n > a
          ? r.length
            ? t.update(e, a)
            : (l.verticalCentered ? e.find(I).wrapInner(o) : e.wrapInner(o),
              t.create(e, a, l.scrollOverflowOptions))
          : t.remove(e),
          e.css("overflow", "");
      }
    }
    function Vn(e) {
      e.hasClass(Z) ||
        e
          .addClass(Z)
          .wrapInner(
            '<div class="' + T + '" style="height:' + Wn(e) + 'px;" />'
          );
    }
    function Wn(e) {
      var n = Ce(e);
      if (l.paddingTop || l.paddingBottom) {
        var t = e;
        t.hasClass(w) || (t = e.closest(y));
        var o =
          parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
        n = At - o;
      }
      return n;
    }
    function Fn(e, n) {
      n ? Ln(kt) : En(kt),
        kt.css(lt(e)),
        setTimeout(function () {
          kt.removeClass(d);
        }, 10);
    }
    function Zn(n) {
      var t = kt.find(y + '[data-anchor="' + n + '"]');
      return t.length || (t = e(y).eq(n - 1)), t;
    }
    function Yn(e, n) {
      var t = n.find(V),
        o = t.find(R + '[data-anchor="' + e + '"]');
      return o.length || (o = t.find(R).eq(e)), o;
    }
    function jn(e, n) {
      var t = Zn(e);
      t.length &&
        ("undefined" == typeof n && (n = 0),
        e === yt || t.hasClass(p)
          ? Nn(t, n)
          : Qe(t, function () {
              Nn(t, n);
            }));
    }
    function Nn(e, n) {
      if ("undefined" != typeof n) {
        var t = e.find(V),
          o = Yn(n, e);
        o.length && Tn(t, o);
      }
    }
    function Un(e, n) {
      e.append('<div class="' + Y + '"><ul></ul></div>');
      var t = e.find(j);
      t.addClass(l.slidesNavPosition);
      for (var o = 0; n > o; o++)
        t.find("ul").append('<li><a href="#"><span></span></a></li>');
      t.css("margin-left", "-" + t.width() / 2 + "px"),
        t.find("li").first().find("a").addClass(p);
    }
    function Gn(e, n, t, o) {
      var i = "";
      l.anchors.length &&
        !l.lockAnchors &&
        (e
          ? ("undefined" != typeof t && (i = t),
            "undefined" == typeof n && (n = e),
            (bt = n),
            Xn(i + "/" + n))
          : "undefined" != typeof e
          ? ((bt = n), Xn(t))
          : Xn(t)),
        Qn();
    }
    function Xn(e) {
      if (l.recordHistory) location.hash = e;
      else if (Tt || It) n.history.replaceState(i, i, "#" + e);
      else {
        var t = n.location.href.split("#")[0];
        n.location.replace(t + "#" + e);
      }
    }
    function qn(e) {
      var n = e.data("anchor"),
        t = e.index();
      return "undefined" == typeof n && (n = t), n;
    }
    function Qn() {
      var n = e(b),
        t = n.find(D),
        o = qn(n),
        i = qn(t),
        r = String(o);
      t.length && (r = r + "-" + i), (r = r.replace("/", "-").replace("#", ""));
      var a = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");
      (St[0].className = St[0].className.replace(a, "")),
        St.addClass(h + "-" + r);
    }
    function _n() {
      var e,
        o = t.createElement("p"),
        r = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform",
        };
      t.body.insertBefore(o, null);
      for (var a in r)
        o.style[a] !== i &&
          ((o.style[a] = "translate3d(1px,1px,1px)"),
          (e = n.getComputedStyle(o).getPropertyValue(r[a])));
      return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e;
    }
    function Kn() {
      t.addEventListener
        ? (t.removeEventListener("mousewheel", Ne, !1),
          t.removeEventListener("wheel", Ne, !1),
          t.removeEventListener("MozMousePixelScroll", Ne, !1))
        : t.detachEvent("onmousewheel", Ne);
    }
    function Jn() {
      var e,
        o = "";
      n.addEventListener
        ? (e = "addEventListener")
        : ((e = "attachEvent"), (o = "on"));
      var r =
        "onwheel" in t.createElement("div")
          ? "wheel"
          : t.onmousewheel !== i
          ? "mousewheel"
          : "DOMMouseScroll";
      "DOMMouseScroll" == r
        ? t[e](o + "MozMousePixelScroll", Ne, !1)
        : t[e](o + r, Ne, !1);
    }
    function $n() {
      kt.on("mousedown", gn).on("mouseup", mn);
    }
    function et() {
      kt.off("mousedown", gn).off("mouseup", mn);
    }
    function nt() {
      if (Tt || It) {
        var n = ot();
        l.autoScrolling &&
          St.off("touchmove " + n.move).on("touchmove " + n.move, Ve),
          e(a)
            .off("touchstart " + n.down)
            .on("touchstart " + n.down, Ye)
            .off("touchmove " + n.move)
            .on("touchmove " + n.move, We);
      }
    }
    function tt() {
      if (Tt || It) {
        var n = ot();
        e(a)
          .off("touchstart " + n.down)
          .off("touchmove " + n.move);
      }
    }
    function ot() {
      var e;
      return (e = n.PointerEvent
        ? { down: "pointerdown", move: "pointermove" }
        : { down: "MSPointerDown", move: "MSPointerMove" });
    }
    function it(e) {
      var n = [];
      return (
        (n.y =
          "undefined" != typeof e.pageY && (e.pageY || e.pageX)
            ? e.pageY
            : e.touches[0].pageY),
        (n.x =
          "undefined" != typeof e.pageX && (e.pageY || e.pageX)
            ? e.pageX
            : e.touches[0].pageX),
        It &&
          Ze(e) &&
          l.scrollBar &&
          ((n.y = e.touches[0].pageY), (n.x = e.touches[0].pageX)),
        n
      );
    }
    function rt(e, n) {
      q(0, "internal"),
        "undefined" != typeof n && (Mt = !0),
        Tn(e.closest(V), e),
        "undefined" != typeof n && (Mt = !1),
        q(Wt.scrollingSpeed, "internal");
    }
    function at(e) {
      var n = o.round(e);
      if (l.css3 && l.autoScrolling && !l.scrollBar) {
        var t = "translate3d(0px, -" + n + "px, 0px)";
        Fn(t, !1);
      } else
        l.autoScrolling && !l.scrollBar ? kt.css("top", -n) : mt.scrollTop(n);
    }
    function lt(e) {
      return {
        "-webkit-transform": e,
        "-moz-transform": e,
        "-ms-transform": e,
        transform: e,
      };
    }
    function st(e, n, t) {
      switch (n) {
        case "up":
          Ht[t].up = e;
          break;
        case "down":
          Ht[t].down = e;
          break;
        case "left":
          Ht[t].left = e;
          break;
        case "right":
          Ht[t].right = e;
          break;
        case "all":
          "m" == t ? ae(e) : le(e);
      }
    }
    function ct(n) {
      s(!1, "internal"),
        ae(!1),
        le(!1),
        kt.addClass(f),
        clearTimeout(Rt),
        clearTimeout(Bt),
        clearTimeout(zt),
        clearTimeout(Dt),
        clearTimeout(Pt),
        ne.off("scroll", Be).off("hashchange", un).off("resize", Mn),
        te
          .off("click touchstart", O + " a")
          .off("mouseenter", O + " li")
          .off("mouseleave", O + " li")
          .off("click touchstart", N)
          .off("mouseover", l.normalScrollElements)
          .off("mouseout", l.normalScrollElements),
        e(y).off("click touchstart", G),
        ft("dragAndMove") && wt.dragAndMove.destroy(),
        clearTimeout(Rt),
        clearTimeout(Bt),
        n && dt();
    }
    function dt() {
      at(0),
        kt
          .find(
            "img[data-src], source[data-src], audio[data-src], iframe[data-src]"
          )
          .each(function () {
            e(this).attr("src", e(this).data("src")),
              e(this).removeAttr("data-src");
          }),
        e(O + ", " + j + ", " + G).remove(),
        e(y).css({ height: "", "background-color": "", padding: "" }),
        e(R).css({ width: "" }),
        kt.css({
          height: "",
          position: "",
          "-ms-touch-action": "",
          "touch-action": "",
        }),
        mt.css({ overflow: "", height: "" }),
        e("html").removeClass(u),
        St.removeClass(c),
        e.each(St.get(0).className.split(/\s+/), function (e, n) {
          0 === n.indexOf(h) && St.removeClass(n);
        }),
        e(y + ", " + R).each(function () {
          l.scrollOverflowHandler.remove(e(this)),
            e(this).removeClass(Z + " " + p);
        }),
        En(kt),
        kt.find(I + ", " + F + ", " + V).each(function () {
          e(this).replaceWith(this.childNodes);
        }),
        mt.scrollTop(0);
      var n = [w, B, W];
      e.each(n, function (n, t) {
        e("." + t).removeClass(t);
      });
    }
    function ft(e) {
      return l[e] && wt[e];
    }
    function ut() {
      return ft("dragAndMove") && wt.dragAndMove.isAnimating;
    }
    function ht() {
      return ft("dragAndMove") && wt.dragAndMove.isGrabbing;
    }
    function pt(e, n, t) {
      (l[e] = n), "internal" !== t && (Wt[e] = n);
    }
    function vt() {
      return e("html").hasClass(u)
        ? void gt(
            "error",
            "Fullpage.js can only be initialized once and you are doing it multiple times!"
          )
        : (l.continuousVertical &&
            (l.loopTop || l.loopBottom) &&
            ((l.continuousVertical = !1),
            gt(
              "warn",
              "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          l.scrollBar &&
            l.scrollOverflow &&
            gt(
              "warn",
              "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"
            ),
          !l.continuousVertical ||
            (!l.scrollBar && l.autoScrolling) ||
            ((l.continuousVertical = !1),
            gt(
              "warn",
              "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          void e.each(l.anchors, function (n, t) {
            var o = te.find("[name]").filter(function () {
                return (
                  e(this).attr("name") &&
                  e(this).attr("name").toLowerCase() == t.toLowerCase()
                );
              }),
              i = te.find("[id]").filter(function () {
                return (
                  e(this).attr("id") &&
                  e(this).attr("id").toLowerCase() == t.toLowerCase()
                );
              });
            (i.length || o.length) &&
              (gt(
                "error",
                "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
              ),
              i.length &&
                gt(
                  "error",
                  '"' +
                    t +
                    '" is is being used by another element `id` property'
                ),
              o.length &&
                gt(
                  "error",
                  '"' +
                    t +
                    '" is is being used by another element `name` property'
                ));
          }));
    }
    function gt(e, n) {
      console && console[e] && console[e]("fullPage: " + n);
    }
    if (e("html").hasClass(u)) return void vt();
    var mt = e("html, body"),
      St = e("body"),
      wt = e.fn.fullpage;
    l = e.extend(
      {
        menu: !1,
        anchors: [],
        lockAnchors: !1,
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        scrollBar: !1,
        hybrid: !1,
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        continuousHorizontal: !1,
        scrollHorizontally: !1,
        interlockedSlides: !1,
        dragAndMove: !1,
        offsetSections: !1,
        resetSliders: !1,
        fadingEffect: !1,
        normalScrollElements: null,
        scrollOverflow: !1,
        scrollOverflowReset: !1,
        scrollOverflowHandler: ie,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        controlArrows: !0,
        controlArrowColor: "#fff",
        verticalCentered: !0,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: !1,
        sectionSelector: S,
        slideSelector: z,
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        lazyLoading: !0,
      },
      l
    );
    var yt,
      bt,
      xt,
      Ct = !1,
      Tt = navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
      ),
      It =
        "ontouchstart" in n ||
        navigator.msMaxTouchPoints > 0 ||
        navigator.maxTouchPoints,
      kt = e(this),
      At = ne.height(),
      Mt = !1,
      Ot = !0,
      Lt = !0,
      Et = [],
      Ht = {};
    (Ht.m = { up: !0, down: !0, left: !0, right: !0 }),
      (Ht.k = e.extend(!0, {}, Ht.m));
    var zt,
      Bt,
      Rt,
      Dt,
      Pt,
      Vt,
      Wt = e.extend(!0, {}, l),
      Ft = {};
    vt(),
      (oe.click = It),
      (l.scrollOverflowOptions = e.extend(oe, l.scrollOverflowOptions)),
      e.extend(e.easing, {
        easeInOutCubic: function (e, n, t, o, i) {
          return (n /= i / 2) < 1
            ? (o / 2) * n * n * n + t
            : (o / 2) * ((n -= 2) * n * n + 2) + t;
        },
      }),
      e(this).length &&
        ((wt.setAutoScrolling = s),
        (wt.setRecordHistory = U),
        (wt.setScrollingSpeed = q),
        (wt.setFitToSection = K),
        (wt.setLockAnchors = J),
        (wt.setMouseWheelScrolling = re),
        (wt.setAllowScrolling = ae),
        (wt.setKeyboardScrolling = le),
        (wt.moveSectionUp = se),
        (wt.moveSectionDown = ce),
        (wt.silentMoveTo = de),
        (wt.moveTo = fe),
        (wt.moveSlideRight = ue),
        (wt.moveSlideLeft = he),
        (wt.reBuild = pe),
        (wt.setResponsive = ve),
        (wt.getFullpageData = ge),
        (wt.destroy = ct),
        (wt.landscapeScroll = Tn),
        we("continuousHorizontal"),
        we("scrollHorizontally"),
        we("resetSliders"),
        we("interlockedSlides"),
        we("responsiveSlides"),
        we("fadingEffect"),
        we("dragAndMove"),
        we("offsetSections"),
        we("scrollOverflowReset"),
        ft("dragAndMove") && wt.dragAndMove.init(),
        me(),
        Se(),
        ft("dragAndMove") && wt.dragAndMove.turnOffTouch());
    var Zt = !1,
      Yt = 0,
      jt = 0,
      Nt = 0,
      Ut = 0,
      Gt = 0,
      Xt = new Date().getTime(),
      qt = 0,
      Qt = 0,
      _t = At;
  }),
    "undefined" != typeof IScroll &&
      ((IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this),
          this.wrapper.addEventListener("mousewheel", this),
          this.wrapper.addEventListener("DOMMouseScroll", this);
      }),
      (IScroll.prototype.wheelOff = function () {
        this.wrapper.removeEventListener("wheel", this),
          this.wrapper.removeEventListener("mousewheel", this),
          this.wrapper.removeEventListener("DOMMouseScroll", this);
      }));
  var ie = {
    refreshId: null,
    iScrollInstances: [],
    toggleWheel: function (n) {
      var t = e(b).find(s);
      t.each(function () {
        var t = e(this).data("iscrollInstance");
        "undefined" != typeof t && t && (n ? t.wheelOn() : t.wheelOff());
      });
    },
    onLeave: function () {
      ie.toggleWheel(!1);
    },
    beforeLeave: function () {
      ie.onLeave();
    },
    afterLoad: function () {
      ie.toggleWheel(!0);
    },
    create: function (n, t, o) {
      var i = n.find(s);
      i.height(t),
        i.each(function () {
          var n = e(this),
            t = n.data("iscrollInstance");
          t &&
            e.each(ie.iScrollInstances, function () {
              e(this).destroy();
            }),
            (t = new IScroll(n.get(0), o)),
            t.on("scrollEnd", function () {
              (this.fp_isAtTop = this.y > -30),
                (this.fp_isAtEnd = this.y - this.maxScrollY < 30);
            }),
            ie.iScrollInstances.push(t),
            t.wheelOff(),
            n.data("iscrollInstance", t);
        });
    },
    isScrolled: function (e, n) {
      var t = n.data("iscrollInstance");
      return t
        ? "top" === e
          ? t.y >= 0 && !n.scrollTop()
          : "bottom" === e
          ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight
          : void 0
        : !0;
    },
    scrollable: function (e) {
      return e.find(V).length ? e.find(D).find(s) : e.find(s);
    },
    scrollHeight: function (e) {
      return e.find(s).children().first().get(0).scrollHeight;
    },
    remove: function (e) {
      var n = e.find(s);
      if (n.length) {
        var t = n.data("iscrollInstance");
        t && t.destroy(), n.data("iscrollInstance", null);
      }
      e.find(s).children().first().children().first().unwrap().unwrap();
    },
    update: function (n, t) {
      clearTimeout(ie.refreshId),
        (ie.refreshId = setTimeout(function () {
          e.each(ie.iScrollInstances, function () {
            e(this).get(0).refresh();
          });
        }, 150)),
        n
          .find(s)
          .css("height", t + "px")
          .parent()
          .css("height", t + "px");
    },
    wrapContent: function () {
      return '<div class="' + l + '"><div class="fp-scroller"></div></div>';
    },
  };
});

//magnific popup script
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

//owl carousel script
/**
 * Owl Carousel v2.1.6
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: "auto",
              "margin-left": d ? b : "",
              "margin-right": d ? "" : b,
            };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g--; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i);
          (this._clones = b),
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || "",
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; d > c; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass("active"),
            this.settings.center &&
              (this.$stage.children(".center").removeClass("center"),
              this.$stage.children().eq(this.current()).addClass("center"));
        },
      },
    ]),
    (e.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var b, c, e;
        (b = this.$element.find("img")),
          (c = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (e = this.$element.children(c).width()),
          b.length && 0 >= e && this.preloadAutoWidthImages(b);
      }
      this.$element.addClass(this.options.loadingClass),
        (this.$stage = a(
          "<" +
            this.settings.stageElement +
            ' class="' +
            this.settings.stageClass +
            '"/>'
        ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(":visible")
          ? this.refresh()
          : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            b >= a && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        c > b;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return this._items.length
        ? this._width === this.$element.width()
          ? !1
          : this.$element.is(":visible")
          ? (this.enter("resizing"),
            this.trigger("resize").isDefaultPrevented()
              ? (this.leave("resizing"), !1)
              : (this.invalidate("width"),
                this.refresh(),
                this.leave("resizing"),
                void this.trigger("resized")))
          : !1
        : !1;
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + ".owl.core",
          a.proxy(this.onTransitionEnd, this)
        ),
        this.settings.responsive !== !1 &&
          this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            a.proxy(this.onDragEnd, this)
          ));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          "mouseup.owl.core touchend.owl.core",
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              "mousemove.owl.core touchmove.owl.core",
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function (b, c) {
      var d = -1,
        e = 30,
        f = this.width(),
        g = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            g,
            a.proxy(function (a, h) {
              return (
                "left" === c && b > h - e && h + e > b
                  ? (d = a)
                  : "right" === c && b > h - f - e && h - f + e > b
                  ? (d = a + 1)
                  : this.op(b, "<", h) &&
                    this.op(b, ">", g[a + 1] || h - f) &&
                    (d = "left" === c ? a + 1 : a),
                -1 === d
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", g[this.minimum()])
            ? (d = b = this.minimum())
            : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
        d
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition: this.speed() / 1e3 + "s",
            })
          : c
          ? this.$stage.animate(
              { left: b + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + "px" });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        "string" === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)),
        a !== d &&
          ((this._speed = 0),
          (this._current = a),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(a)),
          this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || 1 > c
          ? (a = d)
          : (0 > a || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        for (
          b = this._items.length,
            c = this._items[--b].width(),
            d = this.$element.width();
          b-- &&
          ((c += this._items[b].width() + this.settings.margin), !(c > d));

        );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (0 > e),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h),
          d !== a &&
            i >= d - e &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.$element.is(":visible") && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      return a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
        ? !1
        : (this.leave("animating"), void this.trigger("translated"));
    }),
    (e.prototype.viewport = function () {
      var d;
      if (this.options.responsiveBaseElement !== b)
        d = a(this.options.responsiveBaseElement).width();
      else if (b.innerWidth) d = b.innerWidth;
      else {
        if (!c.documentElement || !c.documentElement.clientWidth)
          throw "Can not detect viewport width.";
        d = c.documentElement.clientWidth;
      }
      return d;
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)),
        a !== d &&
          (this.trigger("remove", { content: this._items[a], position: a }),
          this._items[a].remove(),
          this._items.splice(a, 1),
          this._mergers.splice(a, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function (a) {
                  c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        this.settings.responsive !== !1 &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : c > a;
        case ">":
          return d ? c > a : a > c;
        case ">=":
          return d ? c >= a : a >= c;
        case "<=":
          return d ? a >= c : c >= a;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        j = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            "function" == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && -1 !== a.namespace.indexOf("owl"))
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data("owl.carousel");
        f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + ".owl.carousel.core",
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f)
                );
            }
          )),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              )
                for (
                  var c = this._core.settings,
                    e = (c.center && Math.ceil(c.items / 2)) || c.items,
                    f = (c.center && -1 * e) || 0,
                    g =
                      (b.property && b.property.value !== d
                        ? b.property.value
                        : this._core.current()) + f,
                    h = this._core.clones().length,
                    i = a.proxy(function (a, b) {
                      this.load(b);
                    }, this);
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": "url(" + g + ")",
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" == a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.$stage.children().toArray().slice(b, c),
          e = [],
          f = 0;
        a.each(d, function (b, c) {
          e.push(a(c).height());
        }),
          (f = Math.max.apply(null, e)),
          this._core.$stage
            .parent()
            .height(f)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"'
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (a) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? '<div class="owl-video-tn ' +
                  j +
                  '" ' +
                  i +
                  '="' +
                  a +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  a +
                  ')"></div>'),
              b.after(d),
              b.after(e);
          };
        return (
          b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length
            ? (l(h.attr(i)), h.remove(), !1)
            : void ("youtube" === c.type
                ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"),
                  l(f))
                : "vimeo" === c.type
                ? a.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (a) {
                      (f = a[0].thumbnail_large), l(f);
                    },
                  })
                : "vzaar" === c.type &&
                  a.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + c.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (a) {
                      (f = a.framegrab_url), l(f);
                    },
                  }))
        );
      }),
      (e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          "youtube" === f.type
            ? (c =
                '<iframe width="' +
                g +
                '" height="' +
                h +
                '" src="//www.youtube.com/embed/' +
                f.id +
                "?autoplay=1&v=" +
                f.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === f.type
            ? (c =
                '<iframe src="//player.vimeo.com/video/' +
                f.id +
                '?autoplay=1" width="' +
                g +
                '" height="' +
                h +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : "vzaar" === f.type &&
              (c =
                '<iframe frameborder="0"height="' +
                h +
                '"width="' +
                g +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                f.id +
                '/player?autoplay=true"></iframe>'),
          a('<div class="owl-video-frame">' + c + "</div>").insertAfter(
            e.find(".owl-video")
          ),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              a.namespace && (this.swapping = "translated" == a.type);
            }, this),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype.play = function (a, b) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (e.prototype._getNextTimeout = function (d, e) {
        return (
          this._timeout && b.clearTimeout(this._timeout),
          b.setTimeout(
            a.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                c.hidden ||
                this._core.next(e || this._core.settings.autoplaySpeed);
            }, this),
            d || this._core.settings.autoplayTimeout
          )
        );
      }),
      (e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          (b.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a("<div>")
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "div",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : 0 > b && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          return g[b] !== d ? ((e = c ? b : !0), !1) : void 0;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

/*! */
/*!
 * slyder.js v1.0.0 - "Sogeking no shima deeeeeee - One Piece"
 * ~~~~~~~~~~~~~~~~~~
 *
 * Example of use HTML:
 * @see README.md
 *
 * Example of use JS:
 * $('.slyder-container').slyder({
 *     back: '.s-back .s-link',
 *     current: 's-current',
 *     hidden: 's-hidden',
 *     item: '.s-item',
 *     link: 'h3 .s-link',
 *     wrapper: 'slyder-wrapper'
 * });
 *
 * ~~~~~~~~~~~~~~~~~~
 * Copyright 2016 Achraf Chouk <achrafchouk@gmail.com>
 */
!(function (a) {
  "use strict";
  var b = function (b, c) {
    var d = this;
    (d.$el = b), (d.options = a.extend({}, c)), d.initialize();
  };
  (b.prototype.options = {}),
    (b.prototype.$el = null),
    (b.prototype.$items = null),
    (b.prototype.$wrap = null),
    (b.prototype.height = 0),
    (b.prototype.width = 0),
    (b.prototype.initialize = function () {
      var a = this;
      a.$el.wrap('<div class="' + a.options.wrapper + '" />'),
        (a.$wrap = a.$el.closest("." + a.options.wrapper)),
        (a.$items = a.$el.find(a.options.item)),
        (a.height = a.$el.height()),
        (a.width = a.$el.width()),
        a.iterate();
    }),
    (b.prototype.iterate = function () {
      var b = this;
      a.each(b.$items, function () {
        var c = a(this),
          d = c.find("> " + b.options.link),
          e = c.find("> ." + b.options.hidden),
          f = e.find("> " + b.options.back),
          g = c.closest("ul");
        g.hasClass(b.options.hidden) ? g.attr("data-h") : b.height;
        e.attr("data-h", e.height()),
          d.on("click", a.proxy(b.getNext, b)),
          f.on("click", a.proxy(b.getBack, b));
      });
    }),
    (b.prototype.getNext = function (b) {
      b.preventDefault();
      var c = this,
        d = a(b.target || b.currentTarget),
        e = d.closest(c.options.item),
        f = e.find("> ." + c.options.hidden),
        g = f.attr("data-h");
      e.addClass(c.options.current),
        c.$el.css({ height: g + "px", left: "-=" + c.width });
    }),
    (b.prototype.getBack = function (b) {
      b.preventDefault();
      var c = this,
        d = a(b.target || b.currentTarget),
        e = d.closest(c.options.item),
        f = e.closest("ul"),
        g = f.hasClass(c.options.hidden) ? f.attr("data-h") : c.height;
      e.removeClass(c.options.current),
        c.$el.css({ height: g + "px", left: "+=" + c.width });
    });
  var c = {
    init: function (c) {
      if (!this.length) return !1;
      var d = {
        back: ".s-back .s-link",
        current: "s-current",
        hidden: "s-hidden",
        item: ".s-item",
        link: "h3 .s-link",
        wrapper: "slyder-wrapper",
      };
      return this.each(function () {
        c && a.extend(d, c), new b(a(this), d);
      });
    },
    update: function () {},
    destroy: function () {},
  };
  a.fn.slyder = function (b) {
    return c[b]
      ? c[b].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof b && b
      ? void a.error("Method " + b + " does not exist on jQuery.Slyder")
      : c.init.apply(this, arguments);
  };
})(window.jQuery);

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransitions-touchevents-domprefixes-setclasses-shiv-testallprops-testprop !*/
!(function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, o, i, a, s;
    for (var l in C)
      if (C.hasOwnProperty(l)) {
        if (
          ((e = []),
          (t = C[l]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)
          (a = e[i]),
            (s = a.split(".")),
            1 === s.length
              ? (Modernizr[s[0]] = o)
              : (!Modernizr[s[0]] ||
                  Modernizr[s[0]] instanceof Boolean ||
                  (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                (Modernizr[s[0]][s[1]] = o)),
            y.push((o ? "" : "no-") + s.join("-"));
      }
  }
  function i(e) {
    var t = b.className,
      n = Modernizr._config.classPrefix || "";
    if ((S && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      S ? (b.className.baseVal = t) : (b.className = t));
  }
  function a(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function s() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : S
      ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function l(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function c(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function u(e, t, n) {
    var o;
    for (var i in e)
      if (e[i] in t)
        return n === !1
          ? e[i]
          : ((o = t[e[i]]), r(o, "function") ? c(o, n || t) : o);
    return !1;
  }
  function f(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function d() {
    var e = t.body;
    return e || ((e = s(S ? "svg" : "body")), (e.fake = !0)), e;
  }
  function p(e, n, r, o) {
    var i,
      a,
      l,
      c,
      u = "modernizr",
      f = s("div"),
      p = d();
    if (parseInt(r, 10))
      for (; r--; )
        (l = s("div")), (l.id = o ? o[r] : u + (r + 1)), f.appendChild(l);
    return (
      (i = s("style")),
      (i.type = "text/css"),
      (i.id = "s" + u),
      (p.fake ? p : f).appendChild(i),
      p.appendChild(f),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(t.createTextNode(e)),
      (f.id = u),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (c = b.style.overflow),
        (b.style.overflow = "hidden"),
        b.appendChild(p)),
      (a = n(f, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (b.style.overflow = c), b.offsetHeight)
        : f.parentNode.removeChild(f),
      !!a
    );
  }
  function m(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(f(t[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--; ) i.push("(" + f(t[o]) + ":" + r + ")");
      return (
        (i = i.join(" or ")),
        p(
          "@supports (" + i + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == getComputedStyle(e, null).position;
          }
        )
      );
    }
    return n;
  }
  function h(e, t, o, i) {
    function c() {
      f && (delete j.style, delete j.modElem);
    }
    if (((i = r(i, "undefined") ? !1 : i), !r(o, "undefined"))) {
      var u = m(e, o);
      if (!r(u, "undefined")) return u;
    }
    for (
      var f, d, p, h, v, g = ["modernizr", "tspan", "samp"];
      !j.style && g.length;

    )
      (f = !0), (j.modElem = s(g.shift())), (j.style = j.modElem.style);
    for (p = e.length, d = 0; p > d; d++)
      if (
        ((h = e[d]),
        (v = j.style[h]),
        a(h, "-") && (h = l(h)),
        j.style[h] !== n)
      ) {
        if (i || r(o, "undefined")) return c(), "pfx" == t ? h : !0;
        try {
          j.style[h] = o;
        } catch (y) {}
        if (j.style[h] != v) return c(), "pfx" == t ? h : !0;
      }
    return c(), !1;
  }
  function v(e, t, n, o, i) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + N.join(a + " ") + a).split(" ");
    return r(t, "string") || r(t, "undefined")
      ? h(s, t, o, i)
      : ((s = (e + " " + w.join(a + " ") + a).split(" ")), u(s, t, n));
  }
  function g(e, t, r) {
    return v(e, n, n, t, r);
  }
  var y = [],
    C = [],
    E = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        C.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        C.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = E), (Modernizr = new Modernizr());
  var b = t.documentElement,
    S = "svg" === b.nodeName.toLowerCase();
  S ||
    !(function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = C.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function o(e, t) {
        var n = C.elements;
        "string" != typeof n && (n = n.join(" ")),
          "string" != typeof e && (e = e.join(" ")),
          (C.elements = n + " " + e),
          c(t);
      }
      function i(e) {
        var t = y[e[v]];
        return t || ((t = {}), g++, (e[v] = g), (y[g] = t)), t;
      }
      function a(e, n, r) {
        if ((n || (n = t), f)) return n.createElement(e);
        r || (r = i(n));
        var o;
        return (
          (o = r.cache[e]
            ? r.cache[e].cloneNode()
            : h.test(e)
            ? (r.cache[e] = r.createElem(e)).cloneNode()
            : r.createElem(e)),
          !o.canHaveChildren || m.test(e) || o.tagUrn
            ? o
            : r.frag.appendChild(o)
        );
      }
      function s(e, n) {
        if ((e || (e = t), f)) return e.createDocumentFragment();
        n = n || i(e);
        for (
          var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length;
          l > a;
          a++
        )
          o.createElement(s[a]);
        return o;
      }
      function l(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return C.shivMethods ? a(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              r()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return (
                    t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                  );
                }) +
              ");return n}"
          )(C, t.frag));
      }
      function c(e) {
        e || (e = t);
        var r = i(e);
        return (
          !C.shivCSS ||
            u ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          f || l(e, r),
          e
        );
      }
      var u,
        f,
        d = "3.7.3",
        p = e.html5 || {},
        m =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        h =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        v = "_html5shiv",
        g = 0,
        y = {};
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (u = "hidden" in e),
            (f =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  "undefined" == typeof e.cloneNode ||
                  "undefined" == typeof e.createDocumentFragment ||
                  "undefined" == typeof e.createElement
                );
              })());
        } catch (n) {
          (u = !0), (f = !0);
        }
      })();
      var C = {
        elements:
          p.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: d,
        shivCSS: p.shivCSS !== !1,
        supportsUnknownElements: f,
        shivMethods: p.shivMethods !== !1,
        type: "default",
        shivDocument: c,
        createElement: a,
        createDocumentFragment: s,
        addElements: o,
      };
      (e.html5 = C),
        c(t),
        "object" == typeof module && module.exports && (module.exports = C);
    })("undefined" != typeof e ? e : this, t);
  var x = "Moz O ms Webkit",
    w = E._config.usePrefixes ? x.toLowerCase().split(" ") : [];
  E._domPrefixes = w;
  var _ = E._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  E._prefixes = _;
  var N = E._config.usePrefixes ? x.split(" ") : [];
  E._cssomPrefixes = N;
  var T = { elem: s("modernizr") };
  Modernizr._q.push(function () {
    delete T.elem;
  });
  var j = { style: T.elem.style };
  Modernizr._q.unshift(function () {
    delete j.style;
  });
  var z = (E.testStyles = p);
  Modernizr.addTest("touchevents", function () {
    var n;
    if ("ontouchstart" in e || (e.DocumentTouch && t instanceof DocumentTouch))
      n = !0;
    else {
      var r = [
        "@media (",
        _.join("touch-enabled),("),
        "heartz",
        ")",
        "{#modernizr{top:9px;position:absolute}}",
      ].join("");
      z(r, function (e) {
        n = 9 === e.offsetTop;
      });
    }
    return n;
  });
  E.testProp = function (e, t, r) {
    return h([e], n, t, r);
  };
  (E.testAllProps = v),
    (E.testAllProps = g),
    Modernizr.addTest("csstransitions", g("transition", "all", !0)),
    o(),
    i(y),
    delete E.addTest,
    delete E.addAsyncTest;
  for (var k = 0; k < Modernizr._q.length; k++) Modernizr._q[k]();
  e.Modernizr = Modernizr;
})(window, document);

/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", e)
    : "object" == typeof module && module.exports
    ? (module.exports = e())
    : (t.EvEmitter = e());
})("undefined" != typeof window ? window : this, function () {
  function t() {}
  var e = t.prototype;
  return (
    (e.on = function (t, e) {
      if (t && e) {
        var i = (this._events = this._events || {}),
          n = (i[t] = i[t] || []);
        return -1 == n.indexOf(e) && n.push(e), this;
      }
    }),
    (e.once = function (t, e) {
      if (t && e) {
        this.on(t, e);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[t] = i[t] || {});
        return (n[e] = !0), this;
      }
    }),
    (e.off = function (t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
        var n = i.indexOf(e);
        return -1 != n && i.splice(n, 1), this;
      }
    }),
    (e.emitEvent = function (t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
        var n = 0,
          o = i[n];
        e = e || [];
        for (var r = this._onceEvents && this._onceEvents[t]; o; ) {
          var s = r && r[o];
          s && (this.off(t, o), delete r[o]),
            o.apply(this, e),
            (n += s ? 0 : 1),
            (o = i[n]);
        }
        return this;
      }
    }),
    t
  );
}),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.imagesLoaded = e(t, t.EvEmitter));
  })(window, function (t, e) {
    function i(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function n(t) {
      var e = [];
      if (Array.isArray(t)) e = t;
      else if ("number" == typeof t.length)
        for (var i = 0; i < t.length; i++) e.push(t[i]);
      else e.push(t);
      return e;
    }
    function o(t, e, r) {
      return this instanceof o
        ? ("string" == typeof t && (t = document.querySelectorAll(t)),
          (this.elements = n(t)),
          (this.options = i({}, this.options)),
          "function" == typeof e ? (r = e) : i(this.options, e),
          r && this.on("always", r),
          this.getImages(),
          h && (this.jqDeferred = new h.Deferred()),
          void setTimeout(
            function () {
              this.check();
            }.bind(this)
          ))
        : new o(t, e, r);
    }
    function r(t) {
      this.img = t;
    }
    function s(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    var h = t.jQuery,
      a = t.console;
    (o.prototype = Object.create(e.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = t.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var d = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (t) {
        var e = new r(t);
        this.images.push(e);
      }),
      (o.prototype.addBackground = function (t, e) {
        var i = new s(t, e);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function t(t, i, n) {
          setTimeout(function () {
            e.progress(t, i, n);
          });
        }
        var e = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (e) {
                e.once("progress", t), e.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, t, e);
      }),
      (o.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      (r.prototype = Object.create(e.prototype)),
      (r.prototype.check = function () {
        var t = this.getIsImageComplete();
        return t
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (r.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var t = this.getIsImageComplete();
        t &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (o.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery),
          e &&
            ((h = e),
            (h.fn.imagesLoaded = function (t, e) {
              var i = new o(this, t, e);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
