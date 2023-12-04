/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
        ? n[o.call(e)] || "object"
        : typeof e;
  }
  var f = "3.6.0",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
            ? this[e + this.length]
            : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          }),
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          }),
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          }),
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                            ? n
                            : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " ",
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      },
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i",
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i",
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" },
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector),
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                          ? 1
                          : u
                            ? P(u, e) - P(u, t)
                            : 0
                      : 4 & n
                        ? -1
                        : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                        ? 1
                        : i
                          ? -1
                          : o
                            ? 1
                            : u
                              ? P(u, e) - P(u, t)
                              : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                      ? -1
                      : s[r] == p
                        ? 1
                        : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      "",
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                        ? t !== i
                        : "^=" === r
                          ? i && 0 === t.indexOf(i)
                          : "*=" === r
                            ? i && -1 < t.indexOf(i)
                            : "$=" === r
                              ? i && t.slice(-i.length) === i
                              : "~=" === r
                                ? -1 <
                                  (" " + t.replace(B, " ") + " ").indexOf(i)
                                : "|=" === r &&
                                  (t === i ||
                                    t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
                ? ((t = [e, e, "", o]),
                  b.setFilters.hasOwnProperty(e.toLowerCase())
                    ? le(function (e, t) {
                        var n,
                          r = a(e, o),
                          i = r.length;
                        while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else
            (p = Te(p === t ? p.splice(l, p.length) : p)),
              y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0,
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0,
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" }),
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e),
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r),
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t,
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t,
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(j).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
        ? S.grep(e, function (e) {
            return (e === n) !== r;
          })
        : "string" != typeof n
          ? S.grep(e, function (e) {
              return -1 < i.call(n, e) !== r;
            })
          : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            }),
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0),
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(S)
        : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      },
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith),
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock,
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
                ? [t]
                : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                  ? +i
                  : J.test(i)
                    ? JSON.parse(i)
                    : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                      ? t
                      : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0,
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o,
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
              ? this
              : this.each(function () {
                  var e = S.queue(this, t, n);
                  S._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this,
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o,
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp,
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      },
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler,
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l,
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n,
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      },
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: "absolute", visibility: "hidden", display: "block" },
    Ge = { letterSpacing: "0", fontWeight: "400" };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5,
            ),
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        "normal" === i && t in Ge && (i = Ge[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, "border", !1, i) -
                  0.5,
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Ye);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length,
        );
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
                (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing,
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      },
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement("input")),
    (nt = E.createElement("select").appendChild(E.createElement("option"))),
    (tt.type = "checkbox"),
    (y.checkOn = "" !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (y.radioValue = "t" === tt.value);
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = S.find.attr(e, t))
                    ? void 0
                    : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      },
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
            ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t);
              })
            : this.each(function () {
                var e, t, n, r;
                if (a) {
                  (t = 0), (n = S(this)), (r = vt(i));
                  while ((e = r[t++]))
                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                } else
                  (void 0 !== i && "boolean" !== o) ||
                    ((e = gt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        e || !1 === i ? "" : Y.get(this, "__className__") || "",
                      ));
              });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = S.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
          ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in r &&
            void 0 !== (e = r.get(t, "value"))
            ? e
            : "string" == typeof (e = t.value)
              ? e.replace(yt, "")
              : null == e
                ? ""
                : e
          : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : ht(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e),
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i,
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) At(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
                ? S.map(n, function (e) {
                    return { name: t.name, value: e.replace(Et, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Et, "\r\n") };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");
  function It(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + "").replace(
            Ht,
            bt.protocol + "//",
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded",
              ) &&
            (v.data = v.data.replace(Nt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Tt.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, "$1")),
              (o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : v.accepts["*"],
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              S.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                    ? (l = "notmodified")
                    : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && "withCredentials" in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                      ? "number" != typeof r.status
                        ? t(0, "error")
                        : t(r.status, r.statusText)
                      : t(
                          Bt[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") ||
                            "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders(),
                        ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                }),
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
              Ut.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base",
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                },
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length,
          );
        };
      },
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a],
                      ))
                    : void 0 === n
                      ? S.css(e, t, i)
                      : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n,
            );
          };
        },
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      },
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " ",
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      },
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

if (typeof Object.assign !== "function") {
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      "use strict";

      if (target === null || target === undefined) {
        throw new TypeError("Cannot convert undefined or null to object");
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true,
  });
}
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
(function (root, factory) {
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (typeof exports == "object") {
    // For Node.js.
    module.exports = factory(root);
  } else if (typeof define == "function" && define.amd) {
    // For AMD. Register as an anonymous module.
    define([], factory.bind(root, root));
  } else {
    // For browser globals (not exposing the function separately).
    factory(root);
  }
})(typeof global != "undefined" ? global : this, function (root) {
  if (root.CSS && root.CSS.escape) {
    return root.CSS.escape;
  }

  // https://drafts.csswg.org/cssom/#serialize-an-identifier
  var cssEscape = function (value) {
    if (arguments.length == 0) {
      throw new TypeError("`CSS.escape` requires an argument.");
    }
    var string = String(value);
    var length = string.length;
    var index = -1;
    var codeUnit;
    var result = "";
    var firstCodeUnit = string.charCodeAt(0);
    while (++index < length) {
      codeUnit = string.charCodeAt(index);
      // Note: there’s no need to special-case astral symbols, surrogate
      // pairs, or lone surrogates.

      // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
      // (U+FFFD).
      if (codeUnit == 0x0000) {
        result += "\uFFFD";
        continue;
      }

      if (
        // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
        // U+007F, […]
        (codeUnit >= 0x0001 && codeUnit <= 0x001f) ||
        codeUnit == 0x007f ||
        // If the character is the first character and is in the range [0-9]
        // (U+0030 to U+0039), […]
        (index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
        // If the character is the second character and is in the range [0-9]
        // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
        (index == 1 &&
          codeUnit >= 0x0030 &&
          codeUnit <= 0x0039 &&
          firstCodeUnit == 0x002d)
      ) {
        // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
        result += "\\" + codeUnit.toString(16) + " ";
        continue;
      }

      if (
        // If the character is the first character and is a `-` (U+002D), and
        // there is no second character, […]
        index == 0 &&
        length == 1 &&
        codeUnit == 0x002d
      ) {
        result += "\\" + string.charAt(index);
        continue;
      }

      // If the character is not handled by one of the above rules and is
      // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
      // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
      // U+005A), or [a-z] (U+0061 to U+007A), […]
      if (
        codeUnit >= 0x0080 ||
        codeUnit == 0x002d ||
        codeUnit == 0x005f ||
        (codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
        (codeUnit >= 0x0041 && codeUnit <= 0x005a) ||
        (codeUnit >= 0x0061 && codeUnit <= 0x007a)
      ) {
        // the character itself
        result += string.charAt(index);
        continue;
      }

      // Otherwise, the escaped character.
      // https://drafts.csswg.org/cssom/#escape-a-character
      result += "\\" + string.charAt(index);
    }
    return result;
  };

  if (!root.CSS) {
    root.CSS = {};
  }

  root.CSS.escape = cssEscape;
  return cssEscape;
});
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function value(predicate) {
      if (this == null) {
        throw TypeError('"this" is null or not defined');
      }

      var o = Object(this);
      var len = o.length >>> 0;

      if (typeof predicate !== "function") {
        throw TypeError("predicate must be a function");
      }

      var thisArg = arguments[1];
      var k = 0;

      while (k < len) {
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }

        k++;
      }

      return undefined;
    },
    configurable: true,
    writable: true,
  });
}
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define(e)
      : (t.ES6Promise = e());
})(this, function () {
  "use strict";
  function t(t) {
    var e = typeof t;
    return null !== t && ("object" === e || "function" === e);
  }
  function e(t) {
    return "function" == typeof t;
  }
  function n(t) {
    W = t;
  }
  function r(t) {
    z = t;
  }
  function o() {
    return function () {
      return process.nextTick(a);
    };
  }
  function i() {
    return "undefined" != typeof U
      ? function () {
          U(a);
        }
      : c();
  }
  function s() {
    var t = 0,
      e = new H(a),
      n = document.createTextNode("");
    return (
      e.observe(n, { characterData: !0 }),
      function () {
        n.data = t = ++t % 2;
      }
    );
  }
  function u() {
    var t = new MessageChannel();
    return (
      (t.port1.onmessage = a),
      function () {
        return t.port2.postMessage(0);
      }
    );
  }
  function c() {
    var t = setTimeout;
    return function () {
      return t(a, 1);
    };
  }
  function a() {
    for (var t = 0; t < N; t += 2) {
      var e = Q[t],
        n = Q[t + 1];
      e(n), (Q[t] = void 0), (Q[t + 1] = void 0);
    }
    N = 0;
  }
  function f() {
    try {
      var t = Function("return this")().require("vertx");
      return (U = t.runOnLoop || t.runOnContext), i();
    } catch (e) {
      return c();
    }
  }
  function l(t, e) {
    var n = this,
      r = new this.constructor(p);
    void 0 === r[V] && x(r);
    var o = n._state;
    if (o) {
      var i = arguments[o - 1];
      z(function () {
        return T(o, r, i, n._result);
      });
    } else j(n, r, t, e);
    return r;
  }
  function h(t) {
    var e = this;
    if (t && "object" == typeof t && t.constructor === e) return t;
    var n = new e(p);
    return w(n, t), n;
  }
  function p() {}
  function v() {
    return new TypeError("You cannot resolve a promise with itself");
  }
  function d() {
    return new TypeError(
      "A promises callback cannot return that same promise.",
    );
  }
  function _(t, e, n, r) {
    try {
      t.call(e, n, r);
    } catch (o) {
      return o;
    }
  }
  function y(t, e, n) {
    z(function (t) {
      var r = !1,
        o = _(
          n,
          e,
          function (n) {
            r || ((r = !0), e !== n ? w(t, n) : A(t, n));
          },
          function (e) {
            r || ((r = !0), S(t, e));
          },
          "Settle: " + (t._label || " unknown promise"),
        );
      !r && o && ((r = !0), S(t, o));
    }, t);
  }
  function m(t, e) {
    e._state === Z
      ? A(t, e._result)
      : e._state === $
        ? S(t, e._result)
        : j(
            e,
            void 0,
            function (e) {
              return w(t, e);
            },
            function (e) {
              return S(t, e);
            },
          );
  }
  function b(t, n, r) {
    n.constructor === t.constructor && r === l && n.constructor.resolve === h
      ? m(t, n)
      : void 0 === r
        ? A(t, n)
        : e(r)
          ? y(t, n, r)
          : A(t, n);
  }
  function w(e, n) {
    if (e === n) S(e, v());
    else if (t(n)) {
      var r = void 0;
      try {
        r = n.then;
      } catch (o) {
        return void S(e, o);
      }
      b(e, n, r);
    } else A(e, n);
  }
  function g(t) {
    t._onerror && t._onerror(t._result), E(t);
  }
  function A(t, e) {
    t._state === X &&
      ((t._result = e), (t._state = Z), 0 !== t._subscribers.length && z(E, t));
  }
  function S(t, e) {
    t._state === X && ((t._state = $), (t._result = e), z(g, t));
  }
  function j(t, e, n, r) {
    var o = t._subscribers,
      i = o.length;
    (t._onerror = null),
      (o[i] = e),
      (o[i + Z] = n),
      (o[i + $] = r),
      0 === i && t._state && z(E, t);
  }
  function E(t) {
    var e = t._subscribers,
      n = t._state;
    if (0 !== e.length) {
      for (
        var r = void 0, o = void 0, i = t._result, s = 0;
        s < e.length;
        s += 3
      )
        (r = e[s]), (o = e[s + n]), r ? T(n, r, o, i) : o(i);
      t._subscribers.length = 0;
    }
  }
  function T(t, n, r, o) {
    var i = e(r),
      s = void 0,
      u = void 0,
      c = !0;
    if (i) {
      try {
        s = r(o);
      } catch (a) {
        (c = !1), (u = a);
      }
      if (n === s) return void S(n, d());
    } else s = o;
    n._state !== X ||
      (i && c
        ? w(n, s)
        : c === !1
          ? S(n, u)
          : t === Z
            ? A(n, s)
            : t === $ && S(n, s));
  }
  function M(t, e) {
    try {
      e(
        function (e) {
          w(t, e);
        },
        function (e) {
          S(t, e);
        },
      );
    } catch (n) {
      S(t, n);
    }
  }
  function P() {
    return tt++;
  }
  function x(t) {
    (t[V] = tt++),
      (t._state = void 0),
      (t._result = void 0),
      (t._subscribers = []);
  }
  function C() {
    return new Error("Array Methods must be provided an Array");
  }
  function O(t) {
    return new et(this, t).promise;
  }
  function k(t) {
    var e = this;
    return new e(
      L(t)
        ? function (n, r) {
            for (var o = t.length, i = 0; i < o; i++)
              e.resolve(t[i]).then(n, r);
          }
        : function (t, e) {
            return e(new TypeError("You must pass an array to race."));
          },
    );
  }
  function F(t) {
    var e = this,
      n = new e(p);
    return S(n, t), n;
  }
  function Y() {
    throw new TypeError(
      "You must pass a resolver function as the first argument to the promise constructor",
    );
  }
  function q() {
    throw new TypeError(
      "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
    );
  }
  function D() {
    var t = void 0;
    if ("undefined" != typeof global) t = global;
    else if ("undefined" != typeof self) t = self;
    else
      try {
        t = Function("return this")();
      } catch (e) {
        throw new Error(
          "polyfill failed because global object is unavailable in this environment",
        );
      }
    var n = t.Promise;
    if (n) {
      var r = null;
      try {
        r = Object.prototype.toString.call(n.resolve());
      } catch (e) {}
      if ("[object Promise]" === r && !n.cast) return;
    }
    t.Promise = nt;
  }
  var K = void 0;
  K = Array.isArray
    ? Array.isArray
    : function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      };
  var L = K,
    N = 0,
    U = void 0,
    W = void 0,
    z = function (t, e) {
      (Q[N] = t), (Q[N + 1] = e), (N += 2), 2 === N && (W ? W(a) : R());
    },
    B = "undefined" != typeof window ? window : void 0,
    G = B || {},
    H = G.MutationObserver || G.WebKitMutationObserver,
    I =
      "undefined" == typeof self &&
      "undefined" != typeof process &&
      "[object process]" === {}.toString.call(process),
    J =
      "undefined" != typeof Uint8ClampedArray &&
      "undefined" != typeof importScripts &&
      "undefined" != typeof MessageChannel,
    Q = new Array(1e3),
    R = void 0;
  R = I
    ? o()
    : H
      ? s()
      : J
        ? u()
        : void 0 === B && "function" == typeof require
          ? f()
          : c();
  var V = Math.random().toString(36).substring(2),
    X = void 0,
    Z = 1,
    $ = 2,
    tt = 0,
    et = (function () {
      function t(t, e) {
        (this._instanceConstructor = t),
          (this.promise = new t(p)),
          this.promise[V] || x(this.promise),
          L(e)
            ? ((this.length = e.length),
              (this._remaining = e.length),
              (this._result = new Array(this.length)),
              0 === this.length
                ? A(this.promise, this._result)
                : ((this.length = this.length || 0),
                  this._enumerate(e),
                  0 === this._remaining && A(this.promise, this._result)))
            : S(this.promise, C());
      }
      return (
        (t.prototype._enumerate = function (t) {
          for (var e = 0; this._state === X && e < t.length; e++)
            this._eachEntry(t[e], e);
        }),
        (t.prototype._eachEntry = function (t, e) {
          var n = this._instanceConstructor,
            r = n.resolve;
          if (r === h) {
            var o = void 0,
              i = void 0,
              s = !1;
            try {
              o = t.then;
            } catch (u) {
              (s = !0), (i = u);
            }
            if (o === l && t._state !== X)
              this._settledAt(t._state, e, t._result);
            else if ("function" != typeof o)
              this._remaining--, (this._result[e] = t);
            else if (n === nt) {
              var c = new n(p);
              s ? S(c, i) : b(c, t, o), this._willSettleAt(c, e);
            } else
              this._willSettleAt(
                new n(function (e) {
                  return e(t);
                }),
                e,
              );
          } else this._willSettleAt(r(t), e);
        }),
        (t.prototype._settledAt = function (t, e, n) {
          var r = this.promise;
          r._state === X &&
            (this._remaining--, t === $ ? S(r, n) : (this._result[e] = n)),
            0 === this._remaining && A(r, this._result);
        }),
        (t.prototype._willSettleAt = function (t, e) {
          var n = this;
          j(
            t,
            void 0,
            function (t) {
              return n._settledAt(Z, e, t);
            },
            function (t) {
              return n._settledAt($, e, t);
            },
          );
        }),
        t
      );
    })(),
    nt = (function () {
      function t(e) {
        (this[V] = P()),
          (this._result = this._state = void 0),
          (this._subscribers = []),
          p !== e &&
            ("function" != typeof e && Y(),
            this instanceof t ? M(this, e) : q());
      }
      return (
        (t.prototype["catch"] = function (t) {
          return this.then(null, t);
        }),
        (t.prototype["finally"] = function (t) {
          var n = this,
            r = n.constructor;
          return e(t)
            ? n.then(
                function (e) {
                  return r.resolve(t()).then(function () {
                    return e;
                  });
                },
                function (e) {
                  return r.resolve(t()).then(function () {
                    throw e;
                  });
                },
              )
            : n.then(t, t);
        }),
        t
      );
    })();
  return (
    (nt.prototype.then = l),
    (nt.all = O),
    (nt.race = k),
    (nt.resolve = h),
    (nt.reject = F),
    (nt._setScheduler = n),
    (nt._setAsap = r),
    (nt._asap = z),
    (nt.polyfill = D),
    (nt.Promise = nt),
    nt.polyfill(),
    nt
  );
});
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once = (function () {
  "use strict";
  var n = /[\11\12\14\15\40]+/,
    e = "data-once",
    t = document;
  function r(n, t, r) {
    return n[t + "Attribute"](e, r);
  }
  function o(e) {
    if ("string" != typeof e) throw new TypeError("once ID must be a string");
    if ("" === e || n.test(e))
      throw new RangeError("once ID must not be empty or contain spaces");
    return '[data-once~="' + e + '"]';
  }
  function u(n) {
    if (!(n instanceof Element))
      throw new TypeError("The element must be an instance of Element");
    return !0;
  }
  function i(n, e) {
    void 0 === e && (e = t);
    var r = n;
    if (null === n) r = [];
    else {
      if (!n) throw new TypeError("Selector must not be empty");
      "string" != typeof n || (e !== t && !u(e))
        ? n instanceof Element && (r = [n])
        : (r = e.querySelectorAll(n));
    }
    return Array.prototype.slice.call(r);
  }
  function c(n, e, t) {
    return e.filter(function (e) {
      var r = u(e) && e.matches(n);
      return r && t && t(e), r;
    });
  }
  function f(e, t) {
    var o = t.add,
      u = t.remove,
      i = [];
    r(e, "has") &&
      r(e, "get")
        .trim()
        .split(n)
        .forEach(function (n) {
          i.indexOf(n) < 0 && n !== u && i.push(n);
        }),
      o && i.push(o);
    var c = i.join(" ");
    r(e, "" === c ? "remove" : "set", c);
  }
  function a(n, e, t) {
    return c(":not(" + o(n) + ")", i(e, t), function (e) {
      return f(e, { add: n });
    });
  }
  return (
    (a.remove = function (n, e, t) {
      return c(o(n), i(e, t), function (e) {
        return f(e, { remove: n });
      });
    }),
    (a.filter = function (n, e, t) {
      return c(o(n), i(e, t));
    }),
    (a.find = function (n, e) {
      return i(n ? o(n) : "[data-once]", e);
    }),
    a
  );
})();

/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function (e) {
  "use strict";
  if (typeof exports === "object" && typeof exports.nodeName !== "string") {
    e(require("jquery"));
  } else if (typeof define === "function" && define.amd) {
    define(["jquery"], e);
  } else {
    e(jQuery);
  }
})(function (t) {
  "use strict";
  var r = function (e) {
    e = e || "once";
    if (typeof e !== "string") {
      throw new TypeError("The jQuery Once id parameter must be a string");
    }
    return e;
  };
  t.fn.once = function (e) {
    var n = "jquery-once-" + r(e);
    return this.filter(function () {
      return t(this).data(n) !== true;
    }).data(n, true);
  };
  t.fn.removeOnce = function (e) {
    return this.findOnce(e).removeData("jquery-once-" + r(e));
  };
  t.fn.findOnce = function (e) {
    var n = "jquery-once-" + r(e);
    return this.filter(function () {
      return t(this).data(n) === true;
    });
  };
});

/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function () {
  var settingsElement = document.querySelector(
    'head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]',
  );
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

window.Drupal = {
  behaviors: {},
  locale: {},
};

(function (
  Drupal,
  drupalSettings,
  drupalTranslations,
  console,
  Proxy,
  Reflect,
) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === "function") {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || "unload";
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === "function") {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case "@":
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case "!":
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme("placeholder", args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || "";

    if (
      typeof drupalTranslations !== "undefined" &&
      drupalTranslations.strings &&
      drupalTranslations.strings[options.context] &&
      drupalTranslations.strings[options.context][str]
    ) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement("a");

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute("href", url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === "http:" && absoluteUrl.indexOf("https:") === 0) {
      protocol = "https:";
    }

    var baseUrl = ""
      .concat(protocol, "//")
      .concat(window.location.host)
      .concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return (
      absoluteUrl === baseUrl ||
      absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0
    );
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args["@count"] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(
      singular + pluralDelimiter + plural,
      args,
      options,
    ).split(pluralDelimiter);
    var index = 0;

    if (
      typeof drupalTranslations !== "undefined" &&
      drupalTranslations.pluralFormula
    ) {
      index =
        count in drupalTranslations.pluralFormula
          ? drupalTranslations.pluralFormula[count]
          : drupalTranslations.pluralFormula.default;
    } else if (args["@count"] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, "/");
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (
      drupalSettings.suppressDeprecationErrors === false &&
      typeof console !== "undefined" &&
      console.warn
    ) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
      deprecatedProperty = _ref2.deprecatedProperty,
      message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message,
          });
        }

        for (
          var _len = arguments.length,
            rest = new Array(_len > 2 ? _len - 2 : 0),
            _key = 2;
          _key < _len;
          _key++
        ) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      },
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (
        var _len2 = arguments.length,
          args = new Array(_len2 > 1 ? _len2 - 1 : 0),
          _key2 = 1;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">'.concat(Drupal.checkPlain(str), "</em>");
  };
})(
  Drupal,
  window.drupalSettings,
  window.drupalTranslations,
  window.console,
  window.Proxy,
  window.Reflect,
);
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += " js";

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener("DOMContentLoaded", listener);
    };

    if (document.readyState !== "loading") {
      setTimeout(callback, 0);
    } else {
      document.addEventListener("DOMContentLoaded", listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);
/*!
 * tabbable 5.3.2
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
        (function () {
          var n = e.tabbable,
            o = (e.tabbable = {});
          t(o),
            (o.noConflict = function () {
              return (e.tabbable = n), o;
            });
        })());
})(this, function (e) {
  "use strict";
  var t = [
      "input",
      "select",
      "textarea",
      "a[href]",
      "button",
      "[tabindex]:not(slot)",
      "audio[controls]",
      "video[controls]",
      '[contenteditable]:not([contenteditable="false"])',
      "details>summary:first-of-type",
      "details",
    ],
    n = t.join(","),
    o = "undefined" == typeof Element,
    r = o
      ? function () {}
      : Element.prototype.matches ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector,
    i =
      !o && Element.prototype.getRootNode
        ? function (e) {
            return e.getRootNode();
          }
        : function (e) {
            return e.ownerDocument;
          },
    a = function (e, t, o) {
      var i = Array.prototype.slice.apply(e.querySelectorAll(n));
      return t && r.call(e, n) && i.unshift(e), (i = i.filter(o));
    },
    l = function e(t, o, i) {
      for (var a = [], l = Array.from(t); l.length; ) {
        var u = l.shift();
        if ("SLOT" === u.tagName) {
          var c = u.assignedElements(),
            d = e(c.length ? c : u.children, !0, i);
          i.flatten ? a.push.apply(a, d) : a.push({ scope: u, candidates: d });
        } else {
          r.call(u, n) && i.filter(u) && (o || !t.includes(u)) && a.push(u);
          var f =
            u.shadowRoot ||
            ("function" == typeof i.getShadowRoot && i.getShadowRoot(u));
          if (f) {
            var s = e(!0 === f ? u.children : f.children, !0, i);
            i.flatten
              ? a.push.apply(a, s)
              : a.push({ scope: u, candidates: s });
          } else l.unshift.apply(l, u.children);
        }
      }
      return a;
    },
    u = function (e, t) {
      return e.tabIndex < 0 &&
        (t ||
          /^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) ||
          e.isContentEditable) &&
        isNaN(parseInt(e.getAttribute("tabindex"), 10))
        ? 0
        : e.tabIndex;
    },
    c = function (e, t) {
      return e.tabIndex === t.tabIndex
        ? e.documentOrder - t.documentOrder
        : e.tabIndex - t.tabIndex;
    },
    d = function (e) {
      return "INPUT" === e.tagName;
    },
    f = function (e) {
      return (
        (function (e) {
          return d(e) && "radio" === e.type;
        })(e) &&
        !(function (e) {
          if (!e.name) return !0;
          var t,
            n = e.form || i(e),
            o = function (e) {
              return n.querySelectorAll(
                'input[type="radio"][name="' + e + '"]',
              );
            };
          if (
            "undefined" != typeof window &&
            void 0 !== window.CSS &&
            "function" == typeof window.CSS.escape
          )
            t = o(window.CSS.escape(e.name));
          else
            try {
              t = o(e.name);
            } catch (e) {
              return (
                console.error(
                  "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                  e.message,
                ),
                !1
              );
            }
          var r = (function (e, t) {
            for (var n = 0; n < e.length; n++)
              if (e[n].checked && e[n].form === t) return e[n];
          })(t, e.form);
          return !r || r === e;
        })(e)
      );
    },
    s = function (e) {
      var t = e.getBoundingClientRect(),
        n = t.width,
        o = t.height;
      return 0 === n && 0 === o;
    },
    p = function (e, t) {
      return !(
        t.disabled ||
        (function (e) {
          return d(e) && "hidden" === e.type;
        })(t) ||
        (function (e, t) {
          var n = t.displayCheck,
            o = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var a = r.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (r.call(a, "details:not([open]) *")) return !0;
          var l = i(e).host,
            u =
              (null == l ? void 0 : l.ownerDocument.contains(l)) ||
              e.ownerDocument.contains(e);
          if (n && "full" !== n) {
            if ("non-zero-area" === n) return s(e);
          } else {
            if ("function" == typeof o) {
              for (var c = e; e; ) {
                var d = e.parentElement,
                  f = i(e);
                if (d && !d.shadowRoot && !0 === o(d)) return s(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : d || f === e.ownerDocument
                    ? d
                    : f.host;
              }
              e = c;
            }
            if (u) return !e.getClientRects().length;
          }
          return !1;
        })(t, e) ||
        (function (e) {
          return (
            "DETAILS" === e.tagName &&
            Array.prototype.slice.apply(e.children).some(function (e) {
              return "SUMMARY" === e.tagName;
            })
          );
        })(t) ||
        (function (e) {
          if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
            for (var t = e.parentElement; t; ) {
              if ("FIELDSET" === t.tagName && t.disabled) {
                for (var n = 0; n < t.children.length; n++) {
                  var o = t.children.item(n);
                  if ("LEGEND" === o.tagName)
                    return (
                      !!r.call(t, "fieldset[disabled] *") || !o.contains(e)
                    );
                }
                return !0;
              }
              t = t.parentElement;
            }
          return !1;
        })(t)
      );
    },
    h = function (e, t) {
      return !(f(t) || u(t) < 0 || !p(e, t));
    },
    m = t.concat("iframe").join(",");
  (e.focusable = function (e, t) {
    return (t = t || {}).getShadowRoot
      ? l([e], t.includeContainer, {
          filter: p.bind(null, t),
          flatten: !0,
          getShadowRoot: t.getShadowRoot,
        })
      : a(e, t.includeContainer, p.bind(null, t));
  }),
    (e.isFocusable = function (e, t) {
      if (((t = t || {}), !e)) throw new Error("No node provided");
      return !1 !== r.call(e, m) && p(t, e);
    }),
    (e.isTabbable = function (e, t) {
      if (((t = t || {}), !e)) throw new Error("No node provided");
      return !1 !== r.call(e, n) && h(t, e);
    }),
    (e.tabbable = function (e, t) {
      return (function e(t) {
        var n = [],
          o = [];
        return (
          t.forEach(function (t, r) {
            var i = !!t.scope,
              a = i ? t.scope : t,
              l = u(a, i),
              c = i ? e(t.candidates) : a;
            0 === l
              ? i
                ? n.push.apply(n, c)
                : n.push(a)
              : o.push({
                  documentOrder: r,
                  tabIndex: l,
                  item: t,
                  isScope: i,
                  content: c,
                });
          }),
          o
            .sort(c)
            .reduce(function (e, t) {
              return (
                t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
              );
            }, [])
            .concat(n)
        );
      })(
        (t = t || {}).getShadowRoot
          ? l([e], t.includeContainer, {
              filter: h.bind(null, t),
              flatten: !1,
              getShadowRoot: t.getShadowRoot,
            })
          : a(e, t.includeContainer, h.bind(null, t)),
      );
    }),
    Object.defineProperty(e, "__esModule", { value: !0 });
});

(function () {
  var g = function (e, h, f, g) {
    this.get = function (a) {
      for (
        var a = a + "=", c = document.cookie.split(";"), b = 0, e = c.length;
        b < e;
        b++
      ) {
        for (var d = c[b]; " " == d.charAt(0); ) d = d.substring(1, d.length);
        if (0 == d.indexOf(a)) return d.substring(a.length, d.length);
      }
      return null;
    };
    this.set = function (a, c) {
      var b = "",
        b = new Date();
      b.setTime(b.getTime() + 6048e5);
      b = "; expires=" + b.toGMTString();
      document.cookie = a + "=" + c + b + "; path=/; ";
    };
    this.check = function () {
      var a = this.get(f);
      if (a) a = a.split(":");
      else if (100 != e)
        "v" == h && (e = Math.random() >= e / 100 ? 0 : 100),
          (a = [h, e, 0]),
          this.set(f, a.join(":"));
      else return !0;
      var c = a[1];
      if (100 == c) return !0;
      switch (a[0]) {
        case "v":
          return !1;
        case "r":
          return (
            (c = a[2] % Math.floor(100 / c)),
            a[2]++,
            this.set(f, a.join(":")),
            !c
          );
      }
      return !0;
    };
    this.go = function () {
      if (this.check()) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = g;
        document.body && document.body.appendChild(a);
      }
    };
    this.start = function () {
      var t = this;
      "complete" !== document.readyState
        ? window.addEventListener
          ? window.addEventListener(
              "load",
              function () {
                t.go();
              },
              !1,
            )
          : window.attachEvent &&
            window.attachEvent("onload", function () {
              t.go();
            })
        : t.go();
    };
  };
  try {
    new g(
      100,
      "r",
      "QSI_S_ZN_0Jl5zHBrm9N4oZM",
      "https://zn0jl5zhbrm9n4ozm-apscommission.siteintercept.qualtrics.com/SIE/?Q_ZID=ZN_0Jl5zHBrm9N4oZM",
    ).start();
  } catch (i) {}
})();

/* <div id='ZN_0Jl5zHBrm9N4oZM'><!--DO NOT REMOVE-CONTENTS PLACED HERE--></div> */
/**
 * @file
 * Attaches several event listener to a web page.
 */

(function ($, Drupal, drupalSettings) {
  /* eslint max-nested-callbacks: ["error", 4] */

  "use strict";

  Drupal.google_analytics = {};

  $(document).ready(function () {
    // Attach mousedown, keyup, touchstart events to document only and catch
    // clicks on all elements.
    $(document.body).on("mousedown keyup touchstart", function (event) {
      // Catch the closest surrounding link of a clicked element.
      $(event.target)
        .closest("a,area")
        .each(function () {
          // Is the clicked URL internal?
          if (Drupal.google_analytics.isInternal(this.href)) {
            // Skip 'click' tracking, if custom tracking events are bound.
            if (
              $(this).is(".colorbox") &&
              drupalSettings.google_analytics.trackColorbox
            ) {
              // Do nothing here. The custom event will handle all tracking.
              // console.info('Click on .colorbox item has been detected.');
            }
            // Is download tracking activated and the file extension configured
            // for download tracking?
            else if (
              drupalSettings.google_analytics.trackDownload &&
              Drupal.google_analytics.isDownload(this.href)
            ) {
              // Download link clicked.
              gtag(
                "event",
                Drupal.google_analytics
                  .getDownloadExtension(this.href)
                  .toUpperCase(),
                {
                  event_category: "Downloads",
                  event_label: Drupal.google_analytics.getPageUrl(this.href),
                  transport_type: "beacon",
                },
              );
            } else if (Drupal.google_analytics.isInternalSpecial(this.href)) {
              // Keep the internal URL for Google Analytics website overlay intact.
              // @todo: May require tracking ID
              gtag("config", drupalSettings.google_analytics.account, {
                page_path: Drupal.google_analytics.getPageUrl(this.href),
                transport_type: "beacon",
              });
            }
          } else {
            if (
              drupalSettings.google_analytics.trackMailto &&
              $(this).is("a[href^='mailto:'],area[href^='mailto:']")
            ) {
              // Mailto link clicked.
              gtag("event", "Click", {
                event_category: "Mails",
                event_label: this.href.substring(7),
                transport_type: "beacon",
              });
            } else if (
              drupalSettings.google_analytics.trackTel &&
              $(this).is("a[href^='tel:'],area[href^='tel:']")
            ) {
              // Tel link clicked.
              gtag("event", "Click", {
                event_category: "Telephone calls",
                event_label: this.href.substring(4),
                transport_type: "beacon",
              });
            } else if (
              drupalSettings.google_analytics.trackOutbound &&
              this.href.match(/^\w+:\/\//i)
            ) {
              if (
                drupalSettings.google_analytics.trackDomainMode !== 2 ||
                (drupalSettings.google_analytics.trackDomainMode === 2 &&
                  !Drupal.google_analytics.isCrossDomain(
                    this.hostname,
                    drupalSettings.google_analytics.trackCrossDomains,
                  ))
              ) {
                // External link clicked / No top-level cross domain clicked.
                gtag("event", "Click", {
                  event_category: "Outbound links",
                  event_label: this.href,
                  transport_type: "beacon",
                });
              }
            }
          }
        });
    });

    // Track hash changes as unique pageviews, if this option has been enabled.
    if (drupalSettings.google_analytics.trackUrlFragments) {
      window.onhashchange = function () {
        gtag("config", drupalSettings.google_analytics.account, {
          page_path: location.pathname + location.search + location.hash,
        });
      };
    }

    // Colorbox: This event triggers when the transition has completed and the
    // newly loaded content has been revealed.
    if (drupalSettings.google_analytics.trackColorbox) {
      $(document).on("cbox_complete", function () {
        var href = $.colorbox.element().attr("href");
        if (href) {
          gtag("config", drupalSettings.google_analytics.account, {
            page_path: Drupal.google_analytics.getPageUrl(href),
          });
        }
      });
    }
  });

  /**
   * Check whether the hostname is part of the cross domains or not.
   *
   * @param {string} hostname
   *   The hostname of the clicked URL.
   * @param {array} crossDomains
   *   All cross domain hostnames as JS array.
   *
   * @return {boolean} isCrossDomain
   */
  Drupal.google_analytics.isCrossDomain = function (hostname, crossDomains) {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  };

  /**
   * Check whether this is a download URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isDownload
   */
  Drupal.google_analytics.isDownload = function (url) {
    var isDownload = new RegExp(
      "\\.(" +
        drupalSettings.google_analytics.trackDownloadExtensions +
        ")([?#].*)?$",
      "i",
    );
    return isDownload.test(url);
  };

  /**
   * Check whether this is an absolute internal URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternal
   */
  Drupal.google_analytics.isInternal = function (url) {
    var isInternal = new RegExp("^(https?)://" + window.location.host, "i");
    return isInternal.test(url);
  };

  /**
   * Check whether this is a special URL or not.
   *
   * URL types:
   *  - gotwo.module /go/* links.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternalSpecial
   */
  Drupal.google_analytics.isInternalSpecial = function (url) {
    var isInternalSpecial = new RegExp("(/go/.*)$", "i");
    return isInternalSpecial.test(url);
  };

  /**
   * Extract the relative internal URL from an absolute internal URL.
   *
   * Examples:
   * - https://mydomain.com/node/1 -> /node/1
   * - https://example.com/foo/bar -> https://example.com/foo/bar
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getPageUrl
   *   Internal website URL.
   */
  Drupal.google_analytics.getPageUrl = function (url) {
    var extractInternalUrl = new RegExp(
      "^(https?)://" + window.location.host,
      "i",
    );
    return url.replace(extractInternalUrl, "");
  };

  /**
   * Extract the download file extension from the URL.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getDownloadExtension
   *   The file extension of the passed url. e.g. 'zip', 'txt'
   */
  Drupal.google_analytics.getDownloadExtension = function (url) {
    var extractDownloadextension = new RegExp(
      "\\.(" +
        drupalSettings.google_analytics.trackDownloadExtensions +
        ")([?#].*)?$",
      "i",
    );
    var extension = extractDownloadextension.exec(url);
    return extension === null ? "" : extension[1];
  };
})(jQuery, Drupal, drupalSettings);
!(function (t) {
  Drupal.behaviors.govcms8_uikit_starter_BackToTop = {
    attach: function (i, a) {
      var o = t("body, html"),
        e = t(".back-to-top__link", i);
      t(window).scroll(function () {
        t(this).scrollTop() > 250
          ? e.addClass("is-visible")
          : e.removeClass("is-visible");
      }),
        e.click(function (t) {
          o.animate({ scrollTop: 0 }, 800, function () {
            o.attr("tabindex", "-1").focus().removeAttr("tabindex");
          }),
            t.preventDefault();
        });
    },
  };
})(jQuery),
  (function (t) {
    Drupal.behaviors.govcms8_uikit_starter_tableResponsive = {
      attach: function (i, a) {
        var o = t("table");
        t(o).wrap("<div class='table-responsive'></div>");
      },
    };
  })(jQuery);
jQuery(document).ready(function ($) {
  var pageWrapper, disclaimerCheckbox, disclaimerSubmit, down;
  if (
    (-1 < window.location.href.indexOf("?token=") &&
      $(".webform-submission-newsletter-subscription-form .required").focus(),
    $(".region.region-navigation nav ul li:nth-of-type(2)")
      .children()
      .text("About"),
    $(".region.region-navigation nav ul li:nth-of-type(3)")
      .children()
      .text("Accessibility"),
    $(".region.region-navigation nav ul li:nth-of-type(4)")
      .children()
      .text("Writing content"),
    $(".region.region-navigation nav ul li:nth-of-type(5)")
      .children()
      .text("Grammar, punctuation & conventions"),
    $(".region.region-navigation nav ul li:nth-of-type(6)")
      .children()
      .text("Content types"),
    $(".region.region-navigation nav ul li:nth-of-type(7)")
      .children()
      .text("Structuring content"),
    $(".region.region-navigation nav ul li:nth-of-type(8)")
      .children()
      .text("Referencing"),
    $("[required='required']").addClass("empty-required"),
    $("[required='required']").on("focus", function () {
      $(this).removeClass("empty-required");
    }),
    "undefined" != typeof sm_dev_mode &&
      1 == sm_dev_mode &&
      ((pageWrapper = $(".page-wrapper")),
      (alertOverlay = $("#accept-terms-overlay")),
      (disclaimerCheckbox = $("#disclaimer-checkbox")),
      (disclaimerSubmit = $("#disclaimer-agree")).attr(
        "disabled",
        !disclaimerCheckbox.prop("checked"),
      ),
      disclaimerCheckbox.change(function () {
        this.checked
          ? disclaimerSubmit.attr("disabled", !1)
          : disclaimerSubmit.attr("disabled", !0);
      }),
      "true" === sessionStorage.getItem("accepted")
        ? pageWrapper.removeClass("hidden")
        : (alertOverlay.removeClass("hidden"),
          disclaimerSubmit.click(function () {
            disclaimerCheckbox.prop("checked") &&
              (pageWrapper.removeClass("hidden"),
              $("#accept-terms-overlay").addClass("hidden"),
              sessionStorage.setItem("accepted", "true"));
          }))),
    0 < $("body.node-type-style-manual").length)
  ) {
    var hash,
      alertOverlay = $("main.main-content h2"),
      toc = "";
    if (alertOverlay.length < 3) return;
    alertOverlay.each(function (i) {
      var heading = $(this).text(),
        anchor = heading.replace(/\s+/g, "_").replace(/\W/g, "").toLowerCase();
      $(this)
        .addClass("anchor")
        .html(
          '<a class="icon icon--link" aria-hidden="true" href="#' +
            anchor +
            '"></a><span id="' +
            anchor +
            '">' +
            heading +
            "</span>",
        ),
        (list_class =
          "about this page" == heading.toLowerCase() ? "toc-separator" : ""),
        (toc +=
          '<li class="' +
          list_class +
          '"><a href="#' +
          anchor +
          '">' +
          heading +
          "</a></li>");
    }),
      $(".main-content p.abstract").after(
        '<nav class="au-inpage-nav-links hidden-print" aria-label="in page navigation"><h2 class="au-inpage-nav-links__heading">Guidance</h2><ul class="au-link-list">' +
          toc +
          "</ul></nav>",
      ),
      location.hash &&
        location.hash.length &&
        ((hash = decodeURIComponent(location.hash.substr(1))),
        setTimeout(function () {
          $("body,html").animate(
            { scrollTop: $("h2 span#" + hash + ":first").offset().top },
            800,
          );
        }, 800));
  }
  if (
    ($(document).on("click", 'a[href^="#"]', function (event) {
      $("html, body").animate(
        { scrollTop: $($.attr(this, "href")).offset().top },
        500,
      );
    }),
    0 < $('[id*="webform-submission-feedback-form-"]').length)
  ) {
    for (
      var className = document.getElementsByClassName("empty-required error"),
        classnameCount = className.length,
        IdStore = new Array(),
        j = 0;
      j < classnameCount;
      j++
    ) {
      IdStore[j] = className[j].id;
      for (var id = IdStore[j], i = 0; i < IdStore.length; i++)
        "true" == document.getElementById(id).getAttribute("aria-invalid") &&
          document.getElementById(id).setAttribute("aria-describedby", id);
    }
    var alertOverlay = document.getElementById(
        "edit-do-you-find-this-page-useful-no",
      ),
      radioYes = document.getElementById(
        "edit-do-you-find-this-page-useful-yes",
      ),
      radioPartial = document.getElementById(
        "edit-do-you-find-this-page-useful-partially",
      );
    jQuery(alertOverlay).addClass("empty-required"),
      jQuery(radioYes).addClass("empty-required"),
      jQuery(radioPartial).addClass("empty-required"),
      $('form[id*="webform"] .empty-required')
        .on("blur", function () {
          $(this).removeClass("empty-required");
        })
        .on("focus", function () {
          $(this).removeClass("empty-required");
        });
  }
  $(".form-email.error").attr("aria-describedby", "edit-email").focus(),
    $("form.webform-submission-form div.form-actions").attr(
      "id",
      "feedback_form_edit_actions",
    ),
    0 <= navigator.userAgent.search("Safari") &&
      navigator.userAgent.search("Chrome") < 0 &&
      0 <= navigator.userAgent.search("iPhone") &&
      ($("button.au-main-nav__toggle--open").click(function () {
        $(
          "#top, h2.visually-hidden, .layout-sidebar, button.au-main-nav__toggle--open, main.container, footer, #sm-header div header, #back-to-top",
        ).attr("aria-hidden", "true");
      }),
      $("button.au-main-nav__toggle--close").click(function () {
        $(
          "#top, h2.visually-hidden, .layout-sidebar, button.au-main-nav__toggle--open, main.container, footer, #sm-header div header, #back-to-top",
        ).removeAttr("aria-hidden");
      }),
      (down = {}),
      $(".au-main-nav.au-main-nav--dark .au-link-list li")
        .last()
        .keydown(function (e) {
          (down[e.keyCode] = !0),
            down[9] && $("button.au-main-nav__toggle--close").focus();
        })),
    (-1 < navigator.userAgent.search("MSIE") ||
      -1 < navigator.userAgent.indexOf("Trident")) &&
      $("main").attr("role", "main"),
    $(".populatesitemap").click(function () {
      alert("working"),
        $.ajax({
          type: "GET",
          url: "./sitemap.xml",
          dataType: "xml",
          error: function (e) {
            alert("An error occurred while processing XML file"),
              console.log("XML reading Failed: ", e);
          },
          success: function (response) {
            $(response)
              .find("url")
              .each(function () {
                var _name = "Link: " + $(this).find("loc").text();
                $("ul.sitemaplist").append("<li>" + _name + "</li>");
              });
          },
        });
    }),
    (Drupal.behaviors.recapcha_ajax_behaviour = {
      attach: function (context, settings) {
        if ("undefined" != typeof grecaptcha)
          for (
            var captchas = document.getElementsByClassName("g-recaptcha"),
              i = 0;
            i < captchas.length;
            i++
          ) {
            var site_key = captchas[i].getAttribute("data-sitekey");
            $(captchas[i]).html() ||
              grecaptcha.render(captchas[i], { sitekey: site_key });
          }
      },
    });
});
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    var context = this;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
    }

    return result;
  };
};
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, once) {
  var deprecatedMessageSuffix =
    "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;

  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix),
    });
    return originalJQOnce.apply(this, [id]);
  };

  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix),
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };

  var drupalOnce = once;

  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }

  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }

  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove,
  });
})(jQuery, once);
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data("summaryCallback");
    return this[0] && callback ? callback(this[0]).trim() : "";
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== "function") {
      var val = callback;

      callback = function callback() {
        return val;
      };
    }

    return this.data("summaryCallback", callback)
      .off("formUpdated.summary")
      .on("formUpdated.summary", function () {
        self.trigger("summaryUpdated");
      })
      .trigger("summaryUpdated");
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr("data-drupal-form-submit-last");

        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr("data-drupal-form-submit-last", formValues);
        }
      }

      $(once("form-single-submit", "body")).on(
        "submit.singleSubmit",
        'form:not([method~="GET"])',
        onFormSubmit,
      );
    },
  };

  function triggerFormUpdated(element) {
    $(element).trigger("formUpdated");
  }

  function fieldsList(form) {
    return [].map.call(form.querySelectorAll("[name][id]"), function (el) {
      return el.id;
    });
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is("form");
      var $forms = $(
        once("form-updated", contextIsForm ? $context : $context.find("form")),
      );
      var formFields;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = "change.formUpdated input.formUpdated ";
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(",");
          form.setAttribute("data-drupal-form-fields", formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(",");
        var currentFields = $(context).attr("data-drupal-form-fields");

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is("form");

      if (trigger === "unload") {
        once
          .remove(
            "form-updated",
            contextIsForm ? $context : $context.find("form"),
          )
          .forEach(function (form) {
            form.removeAttribute("data-drupal-form-fields");
            $(form).off(".formUpdated");
          });
      }
    },
  };
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ["name", "mail", "homepage"];
      var $forms = $(
        once("user-info-from-browser", "[data-user-info-from-browser]"),
      );

      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          var browserData = localStorage.getItem(
            "Drupal.visitor.".concat(info),
          );

          if (!$element.length) {
            return;
          }

          var emptyValue = $element[0].value === "";
          var defaultValue =
            $element.attr("data-drupal-default-value") === $element[0].value;

          if (browserData && (emptyValue || defaultValue)) {
            $element.each(function (index, item) {
              item.value = browserData;
            });
          }
        });
      }

      $forms.on("submit", function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));

          if ($element.length) {
            localStorage.setItem(
              "Drupal.visitor.".concat(info),
              $element[0].value,
            );
          }
        });
      });
    },
  };

  var handleFragmentLinkClickOrHashChange =
    function handleFragmentLinkClickOrHashChange(e) {
      var url;

      if (e.type === "click") {
        url = e.currentTarget.location
          ? e.currentTarget.location
          : e.currentTarget;
      } else {
        url = window.location;
      }

      var hash = url.hash.substr(1);

      if (hash) {
        var $target = $("#".concat(hash));
        $("body").trigger("formFragmentLinkClickOrHashChange", [$target]);
        setTimeout(function () {
          return $target.trigger("focus");
        }, 300);
      }
    };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(
    handleFragmentLinkClickOrHashChange,
    300,
    true,
  );
  $(window).on(
    "hashchange.form-fragment",
    debouncedHandleFragmentLinkClickOrHashChange,
  );
  $(document).on(
    "click.form-fragment",
    'a[href*="#"]',
    debouncedHandleFragmentLinkClickOrHashChange,
  );
})(jQuery, Drupal, Drupal.debounce);
/**
 * @file
 * Webform behaviors.
 */

(function ($, Drupal) {
  "use strict";

  // Trigger Drupal's attaching of behaviors after the page is
  // completely loaded.
  // @see https://stackoverflow.com/questions/37838430/detect-if-page-is-load-from-back-button
  // @see https://stackoverflow.com/questions/20899274/how-to-refresh-page-on-back-button-click/20899422#20899422
  var isChrome = /chrom(e|ium)/.test(window.navigator.userAgent.toLowerCase());
  if (isChrome) {
    // Track back button in navigation.
    // @see https://stackoverflow.com/questions/37838430/detect-if-page-is-load-from-back-button
    var backButton = false;
    if (window.performance) {
      var navEntries = window.performance.getEntriesByType("navigation");
      if (navEntries.length > 0 && navEntries[0].type === "back_forward") {
        backButton = true;
      } else if (
        window.performance.navigation &&
        window.performance.navigation.type ===
          window.performance.navigation.TYPE_BACK_FORWARD
      ) {
        backButton = true;
      }
    }

    // If the back button is pressed, delay Drupal's attaching of behaviors.
    if (backButton) {
      var attachBehaviors = Drupal.attachBehaviors;
      Drupal.attachBehaviors = function (context, settings) {
        setTimeout(function (context, settings) {
          attachBehaviors(context, settings);
        }, 300);
      };
    }
  }
})(jQuery, Drupal);
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, Drupal) {
  var states = {
    postponed: [],
  };
  Drupal.states = states;

  function invert(a, invertState) {
    return invertState && typeof a !== "undefined" ? !a : a;
  }

  function _compare2(a, b) {
    if (a === b) {
      return typeof a === "undefined" ? a : true;
    }

    return typeof a === "undefined" || typeof b === "undefined";
  }

  function ternary(a, b) {
    if (typeof a === "undefined") {
      return b;
    }

    if (typeof b === "undefined") {
      return a;
    }

    return a && b;
  }

  Drupal.behaviors.states = {
    attach: function attach(context, settings) {
      var $states = $(context).find("[data-drupal-states]");
      var il = $states.length;

      var _loop = function _loop(i) {
        var config = JSON.parse($states[i].getAttribute("data-drupal-states"));
        Object.keys(config || {}).forEach(function (state) {
          new states.Dependent({
            element: $($states[i]),
            state: states.State.sanitize(state),
            constraints: config[state],
          });
        });
      };

      for (var i = 0; i < il; i++) {
        _loop(i);
      }

      while (states.postponed.length) {
        states.postponed.shift()();
      }
    },
  };

  states.Dependent = function (args) {
    var _this = this;

    $.extend(
      this,
      {
        values: {},
        oldValue: null,
      },
      args,
    );
    this.dependees = this.getDependees();
    Object.keys(this.dependees || {}).forEach(function (selector) {
      _this.initializeDependee(selector, _this.dependees[selector]);
    });
  };

  states.Dependent.comparisons = {
    RegExp: function RegExp(reference, value) {
      return reference.test(value);
    },
    Function: function Function(reference, value) {
      return reference(value);
    },
    Number: function Number(reference, value) {
      return typeof value === "string"
        ? _compare2(reference.toString(), value)
        : _compare2(reference, value);
    },
  };
  states.Dependent.prototype = {
    initializeDependee: function initializeDependee(selector, dependeeStates) {
      var _this2 = this;

      this.values[selector] = {};
      Object.keys(dependeeStates).forEach(function (i) {
        var state = dependeeStates[i];

        if ($.inArray(state, dependeeStates) === -1) {
          return;
        }

        state = states.State.sanitize(state);
        _this2.values[selector][state.name] = null;
        $(selector).on(
          "state:".concat(state),
          {
            selector: selector,
            state: state,
          },
          function (e) {
            _this2.update(e.data.selector, e.data.state, e.value);
          },
        );
        new states.Trigger({
          selector: selector,
          state: state,
        });
      });
    },
    compare: function compare(reference, selector, state) {
      var value = this.values[selector][state.name];

      if (reference.constructor.name in states.Dependent.comparisons) {
        return states.Dependent.comparisons[reference.constructor.name](
          reference,
          value,
        );
      }

      return _compare2(reference, value);
    },
    update: function update(selector, state, value) {
      if (value !== this.values[selector][state.name]) {
        this.values[selector][state.name] = value;
        this.reevaluate();
      }
    },
    reevaluate: function reevaluate() {
      var value = this.verifyConstraints(this.constraints);

      if (value !== this.oldValue) {
        this.oldValue = value;
        value = invert(value, this.state.invert);
        this.element.trigger({
          type: "state:".concat(this.state),
          value: value,
          trigger: true,
        });
      }
    },
    verifyConstraints: function verifyConstraints(constraints, selector) {
      var result;

      if ($.isArray(constraints)) {
        var hasXor = $.inArray("xor", constraints) === -1;
        var len = constraints.length;

        for (var i = 0; i < len; i++) {
          if (constraints[i] !== "xor") {
            var constraint = this.checkConstraints(constraints[i], selector, i);

            if (constraint && (hasXor || result)) {
              return hasXor;
            }

            result = result || constraint;
          }
        }
      } else if ($.isPlainObject(constraints)) {
        for (var n in constraints) {
          if (constraints.hasOwnProperty(n)) {
            result = ternary(
              result,
              this.checkConstraints(constraints[n], selector, n),
            );

            if (result === false) {
              return false;
            }
          }
        }
      }

      return result;
    },
    checkConstraints: function checkConstraints(value, selector, state) {
      if (typeof state !== "string" || /[0-9]/.test(state[0])) {
        state = null;
      } else if (typeof selector === "undefined") {
        selector = state;
        state = null;
      }

      if (state !== null) {
        state = states.State.sanitize(state);
        return invert(this.compare(value, selector, state), state.invert);
      }

      return this.verifyConstraints(value, selector);
    },
    getDependees: function getDependees() {
      var cache = {};
      var _compare = this.compare;

      this.compare = function (reference, selector, state) {
        (cache[selector] || (cache[selector] = [])).push(state.name);
      };

      this.verifyConstraints(this.constraints);
      this.compare = _compare;
      return cache;
    },
  };

  states.Trigger = function (args) {
    $.extend(this, args);

    if (this.state in states.Trigger.states) {
      this.element = $(this.selector);

      if (!this.element.data("trigger:".concat(this.state))) {
        this.initialize();
      }
    }
  };

  states.Trigger.prototype = {
    initialize: function initialize() {
      var _this3 = this;

      var trigger = states.Trigger.states[this.state];

      if (typeof trigger === "function") {
        trigger.call(window, this.element);
      } else {
        Object.keys(trigger || {}).forEach(function (event) {
          _this3.defaultTrigger(event, trigger[event]);
        });
      }

      this.element.data("trigger:".concat(this.state), true);
    },
    defaultTrigger: function defaultTrigger(event, valueFn) {
      var oldValue = valueFn.call(this.element);
      this.element.on(
        event,
        $.proxy(function (e) {
          var value = valueFn.call(this.element, e);

          if (oldValue !== value) {
            this.element.trigger({
              type: "state:".concat(this.state),
              value: value,
              oldValue: oldValue,
            });
            oldValue = value;
          }
        }, this),
      );
      states.postponed.push(
        $.proxy(function () {
          this.element.trigger({
            type: "state:".concat(this.state),
            value: oldValue,
            oldValue: null,
          });
        }, this),
      );
    },
  };
  states.Trigger.states = {
    empty: {
      keyup: function keyup() {
        return this.val() === "";
      },
    },
    checked: {
      change: function change() {
        var checked = false;
        this.each(function () {
          checked = $(this).prop("checked");
          return !checked;
        });
        return checked;
      },
    },
    value: {
      keyup: function keyup() {
        if (this.length > 1) {
          return this.filter(":checked").val() || false;
        }

        return this.val();
      },
      change: function change() {
        if (this.length > 1) {
          return this.filter(":checked").val() || false;
        }

        return this.val();
      },
    },
    collapsed: {
      collapsed: function collapsed(e) {
        return typeof e !== "undefined" && "value" in e
          ? e.value
          : !this.is("[open]");
      },
    },
  };

  states.State = function (state) {
    this.pristine = state;
    this.name = state;
    var process = true;

    do {
      while (this.name.charAt(0) === "!") {
        this.name = this.name.substring(1);
        this.invert = !this.invert;
      }

      if (this.name in states.State.aliases) {
        this.name = states.State.aliases[this.name];
      } else {
        process = false;
      }
    } while (process);
  };

  states.State.sanitize = function (state) {
    if (state instanceof states.State) {
      return state;
    }

    return new states.State(state);
  };

  states.State.aliases = {
    enabled: "!disabled",
    invisible: "!visible",
    invalid: "!valid",
    untouched: "!touched",
    optional: "!required",
    filled: "!empty",
    unchecked: "!checked",
    irrelevant: "!relevant",
    expanded: "!collapsed",
    open: "!collapsed",
    closed: "collapsed",
    readwrite: "!readonly",
  };
  states.State.prototype = {
    invert: false,
    toString: function toString() {
      return this.name;
    },
  };
  var $document = $(document);
  $document.on("state:disabled", function (e) {
    if (e.trigger) {
      $(e.target)
        .prop("disabled", e.value)
        .closest(".js-form-item, .js-form-submit, .js-form-wrapper")
        .toggleClass("form-disabled", e.value)
        .find("select, input, textarea")
        .prop("disabled", e.value);
    }
  });
  $document.on("state:required", function (e) {
    if (e.trigger) {
      if (e.value) {
        var label = "label".concat(
          e.target.id ? "[for=".concat(e.target.id, "]") : "",
        );
        var $label = $(e.target)
          .attr({
            required: "required",
            "aria-required": "true",
          })
          .closest(".js-form-item, .js-form-wrapper")
          .find(label);

        if (!$label.hasClass("js-form-required").length) {
          $label.addClass("js-form-required form-required");
        }
      } else {
        $(e.target)
          .removeAttr("required aria-required")
          .closest(".js-form-item, .js-form-wrapper")
          .find("label.js-form-required")
          .removeClass("js-form-required form-required");
      }
    }
  });
  $document.on("state:visible", function (e) {
    if (e.trigger) {
      $(e.target)
        .closest(".js-form-item, .js-form-submit, .js-form-wrapper")
        .toggle(e.value);
    }
  });
  $document.on("state:checked", function (e) {
    if (e.trigger) {
      $(e.target).prop("checked", e.value);
    }
  });
  $document.on("state:collapsed", function (e) {
    if (e.trigger) {
      if ($(e.target).is("[open]") === e.value) {
        $(e.target).find("> summary").trigger("click");
      }
    }
  });
})(jQuery, Drupal);
/**
 * @file
 * JavaScript behaviors for custom webform #states.
 */

(function ($, Drupal) {
  "use strict";

  Drupal.webform = Drupal.webform || {};
  Drupal.webform.states = Drupal.webform.states || {};
  Drupal.webform.states.slideDown = Drupal.webform.states.slideDown || {};
  Drupal.webform.states.slideDown.duration = "slow";
  Drupal.webform.states.slideUp = Drupal.webform.states.slideUp || {};
  Drupal.webform.states.slideUp.duration = "fast";

  /* ************************************************************************ */
  // jQuery functions.
  /* ************************************************************************ */

  /**
   * Check if an element has a specified data attribute.
   *
   * @param {string} data
   *   The data attribute name.
   *
   * @return {boolean}
   *   TRUE if an element has a specified data attribute.
   */
  $.fn.hasData = function (data) {
    return typeof this.data(data) !== "undefined";
  };

  /**
   * Check if element is within the webform or not.
   *
   * @return {boolean}
   *   TRUE if element is within the webform.
   */
  $.fn.isWebform = function () {
    return $(this).closest(
      'form.webform-submission-form, form[id^="webform"], form[data-is-webform]',
    ).length
      ? true
      : false;
  };

  /**
   * Check if element is to be treated as a webform element.
   *
   * @return {boolean}
   *   TRUE if element is to be treated as a webform element.
   */
  $.fn.isWebformElement = function () {
    return $(this).isWebform() ||
      $(this).closest("[data-is-webform-element]").length
      ? true
      : false;
  };

  /* ************************************************************************ */
  // Trigger.
  /* ************************************************************************ */

  // The change event is triggered by cut-n-paste and select menus.
  // Issue #2445271: #states element empty check not triggered on mouse
  // based paste.
  // @see https://www.drupal.org/node/2445271
  Drupal.states.Trigger.states.empty.change = function change() {
    return this.val() === "";
  };

  /* ************************************************************************ */
  // Dependents.
  /* ************************************************************************ */

  // Apply solution included in #1962800 patch.
  // Issue #1962800: Form #states not working with literal integers as
  // values in IE11.
  // @see https://www.drupal.org/project/drupal/issues/1962800
  // @see https://www.drupal.org/files/issues/core-states-not-working-with-integers-ie11_1962800_46.patch
  //
  // This issue causes pattern, less than, and greater than support to break.
  // @see https://www.drupal.org/project/webform/issues/2981724
  var states = Drupal.states;
  Drupal.states.Dependent.prototype.compare = function compare(
    reference,
    selector,
    state,
  ) {
    var value = this.values[selector][state.name];

    var name = reference.constructor.name;
    if (!name) {
      name = $.type(reference);

      name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    if (name in states.Dependent.comparisons) {
      return states.Dependent.comparisons[name](reference, value);
    }

    if (reference.constructor.name in states.Dependent.comparisons) {
      return states.Dependent.comparisons[reference.constructor.name](
        reference,
        value,
      );
    }

    return _compare2(reference, value);
  };
  function _compare2(a, b) {
    if (a === b) {
      return typeof a === "undefined" ? a : true;
    }

    return typeof a === "undefined" || typeof b === "undefined";
  }

  // Adds pattern, less than, and greater than support to #state API.
  // @see http://drupalsun.com/julia-evans/2012/03/09/extending-form-api-states-regular-expressions
  Drupal.states.Dependent.comparisons.Object = function (reference, value) {
    if ("pattern" in reference) {
      return new RegExp(reference["pattern"]).test(value);
    } else if ("!pattern" in reference) {
      return !new RegExp(reference["!pattern"]).test(value);
    } else if ("less" in reference) {
      return value !== "" && parseFloat(reference["less"]) > parseFloat(value);
    } else if ("less_equal" in reference) {
      return (
        value !== "" && parseFloat(reference["less_equal"]) >= parseFloat(value)
      );
    } else if ("greater" in reference) {
      return (
        value !== "" && parseFloat(reference["greater"]) < parseFloat(value)
      );
    } else if ("greater_equal" in reference) {
      return (
        value !== "" &&
        parseFloat(reference["greater_equal"]) <= parseFloat(value)
      );
    } else if ("between" in reference || "!between" in reference) {
      if (value === "") {
        return false;
      }

      var between = reference["between"] || reference["!between"];
      var betweenParts = between.split(":");
      var greater = betweenParts[0];
      var less =
        typeof betweenParts[1] !== "undefined" ? betweenParts[1] : null;
      var isGreaterThan =
        greater === null ||
        greater === "" ||
        parseFloat(value) >= parseFloat(greater);
      var isLessThan =
        less === null || less === "" || parseFloat(value) <= parseFloat(less);
      var result = isGreaterThan && isLessThan;
      return reference["!between"] ? !result : result;
    } else {
      return reference.indexOf(value) !== false;
    }
  };

  /* ************************************************************************ */
  // States events.
  /* ************************************************************************ */

  var $document = $(document);

  $document.on("state:required", function (e) {
    if (e.trigger && $(e.target).isWebformElement()) {
      var $target = $(e.target);
      // Fix #required file upload.
      // @see Issue #2860529: Conditional required File upload field don't work.
      toggleRequired($target.find('input[type="file"]'), e.value);

      // Fix #required for radios and likert.
      // @see Issue #2856795: If radio buttons are required but not filled form is nevertheless submitted.
      if (
        $target.is(
          ".js-form-type-radios, .js-form-type-webform-radios-other, .js-webform-type-radios, .js-webform-type-webform-radios-other, .js-webform-type-webform-entity-radios, .webform-likert-table",
        )
      ) {
        $target.toggleClass("required", e.value);
        toggleRequired($target.find('input[type="radio"]'), e.value);
      }

      // Fix #required for checkboxes.
      // @see Issue #2938414: Checkboxes don't support #states required.
      // @see checkboxRequiredhandler
      if (
        $target.is(
          ".js-form-type-checkboxes, .js-form-type-webform-checkboxes-other, .js-webform-type-checkboxes, .js-webform-type-webform-checkboxes-other",
        )
      ) {
        $target.toggleClass("required", e.value);
        var $checkboxes = $target.find('input[type="checkbox"]');
        if (e.value) {
          // Add event handler.
          $checkboxes.on("click", statesCheckboxesRequiredEventHandler);
          // Initialize and add required attribute.
          checkboxesRequired($target);
        } else {
          // Remove event handler.
          $checkboxes.off("click", statesCheckboxesRequiredEventHandler);
          // Remove required attribute.
          toggleRequired($checkboxes, false);
        }
      }

      // Fix #required for tableselect.
      // @see Issue #3212581: Table select does not trigger client side validation
      if ($target.is(".js-webform-tableselect")) {
        $target.toggleClass("required", e.value);
        var isMultiple = $target.is("[multiple]");
        if (isMultiple) {
          // Checkboxes.
          var $tbody = $target.find("tbody");
          var $checkboxes = $tbody.find('input[type="checkbox"]');
          copyRequireMessage($target, $checkboxes);
          if (e.value) {
            $checkboxes.on(
              "click change",
              statesCheckboxesRequiredEventHandler,
            );
            checkboxesRequired($tbody);
          } else {
            $checkboxes.off(
              "click change ",
              statesCheckboxesRequiredEventHandler,
            );
            toggleRequired($tbody, false);
          }
        } else {
          // Radios.
          var $radios = $target.find('input[type="radio"]');
          copyRequireMessage($target, $radios);
          toggleRequired($radios, e.value);
        }
      }

      // Fix required label for elements without the for attribute.
      // @see Issue #3145300: Conditional Visible Select Other not working.
      if (
        $target.is(
          ".js-form-type-webform-select-other, .js-webform-type-webform-select-other",
        )
      ) {
        var $select = $target.find("select");
        toggleRequired($select, e.value);
        copyRequireMessage($target, $select);
      }
      if ($target.find("> label:not([for])").length) {
        $target
          .find("> label")
          .toggleClass("js-form-required form-required", e.value);
      }

      // Fix required label for checkboxes and radios.
      // @see Issue #2938414: Checkboxes don't support #states required
      // @see Issue #2731991: Setting required on radios marks all options required.
      // @see Issue #2856315: Conditional Logic - Requiring Radios in a Fieldset.
      // Fix #required for fieldsets.
      // @see Issue #2977569: Hidden fieldsets that become visible with conditional logic cannot be made required.
      if (
        $target.is(
          ".js-webform-type-radios, .js-webform-type-checkboxes, fieldset",
        )
      ) {
        $target
          .find("legend span.fieldset-legend:not(.visually-hidden)")
          .toggleClass("js-form-required form-required", e.value);
      }

      // Issue #2986017: Fieldsets shouldn't have required attribute.
      if ($target.is("fieldset")) {
        $target.removeAttr("required aria-required");
      }
    }
  });

  $document.on("state:checked", function (e) {
    if (e.trigger) {
      $(e.target).trigger("change");
    }
  });

  $document.on("state:readonly", function (e) {
    if (e.trigger && $(e.target).isWebformElement()) {
      $(e.target)
        .prop("readonly", e.value)
        .closest(".js-form-item, .js-form-wrapper")
        .toggleClass("webform-readonly", e.value)
        .find("input, textarea")
        .prop("readonly", e.value);

      // Trigger webform:readonly.
      $(e.target)
        .trigger("webform:readonly")
        .find("select, input, textarea, button")
        .trigger("webform:readonly");
    }
  });

  $document.on("state:visible state:visible-slide", function (e) {
    if (e.trigger && $(e.target).isWebformElement()) {
      if (e.value) {
        $(":input", e.target)
          .addBack()
          .each(function () {
            restoreValueAndRequired(this);
            triggerEventHandlers(this);
          });
      } else {
        // @see https://www.sitepoint.com/jquery-function-clear-form-data/
        $(":input", e.target)
          .addBack()
          .each(function () {
            backupValueAndRequired(this);
            clearValueAndRequired(this);
            triggerEventHandlers(this);
          });
      }
    }
  });

  $document.on("state:visible-slide", function (e) {
    if (e.trigger && $(e.target).isWebformElement()) {
      var effect = e.value ? "slideDown" : "slideUp";
      var duration = Drupal.webform.states[effect].duration;
      $(e.target)
        .closest(".js-form-item, .js-form-submit, .js-form-wrapper")
        [effect](duration);
    }
  });
  Drupal.states.State.aliases["invisible-slide"] = "!visible-slide";

  $document.on("state:disabled", function (e) {
    if (e.trigger && $(e.target).isWebformElement()) {
      // Make sure disabled property is set before triggering webform:disabled.
      // Copied from: core/misc/states.js
      $(e.target)
        .prop("disabled", e.value)
        .closest(".js-form-item, .js-form-submit, .js-form-wrapper")
        .toggleClass("form-disabled", e.value)
        .find("select, input, textarea, button")
        .prop("disabled", e.value);

      // Never disable hidden file[fids] because the existing values will
      // be completely lost when the webform is submitted.
      var fileElements = $(e.target).find(
        ':input[type="hidden"][name$="[fids]"]',
      );
      if (fileElements.length) {
        // Remove 'disabled' attribute from fieldset which will block
        // all disabled elements from being submitted.
        if ($(e.target).is("fieldset")) {
          $(e.target).prop("disabled", false);
        }
        fileElements.removeAttr("disabled");
      }

      // Trigger webform:disabled.
      $(e.target)
        .trigger("webform:disabled")
        .find("select, input, textarea, button")
        .trigger("webform:disabled");
    }
  });

  /* ************************************************************************ */
  // Behaviors.
  /* ************************************************************************ */

  /**
   * Adds HTML5 validation to required checkboxes.
   *
   * @type {Drupal~behavior}
   *
   * @see https://www.drupal.org/project/webform/issues/3068998
   */
  Drupal.behaviors.webformCheckboxesRequired = {
    attach: function (context) {
      $(
        ".js-form-type-checkboxes.required, .js-form-type-webform-checkboxes-other.required, .js-webform-type-checkboxes.required, .js-webform-type-webform-checkboxes-other.required, .js-webform-type-webform-radios-other.checkboxes",
        context,
      )
        .once("webform-checkboxes-required")
        .each(function () {
          var $element = $(this);
          $element
            .find('input[type="checkbox"]')
            .on("click", statesCheckboxesRequiredEventHandler);
          setTimeout(function () {
            checkboxesRequired($element);
          });
        });
    },
  };

  /**
   * Adds HTML5 validation to required radios.
   *
   * @type {Drupal~behavior}
   *
   * @see https://www.drupal.org/project/webform/issues/2856795
   */
  Drupal.behaviors.webformRadiosRequired = {
    attach: function (context) {
      $(
        ".js-form-type-radios, .js-form-type-webform-radios-other, .js-webform-type-radios, .js-webform-type-webform-radios-other, .js-webform-type-webform-entity-radios, .js-webform-type-webform-scale",
        context,
      )
        .once("webform-radios-required")
        .each(function () {
          var $element = $(this);
          setTimeout(function () {
            radiosRequired($element);
          });
        });
    },
  };

  /**
   * Adds HTML5 validation to required table select.
   *
   * @type {Drupal~behavior}
   *
   * @see https://www.drupal.org/project/webform/issues/2856795
   */
  Drupal.behaviors.webformTableSelectRequired = {
    attach: function (context) {
      $(".js-webform-tableselect.required", context)
        .once("webform-tableselect-required")
        .each(function () {
          var $element = $(this);
          var $tbody = $element.find("tbody");
          var isMultiple = $element.is("[multiple]");

          if (isMultiple) {
            // Check all checkbox triggers checkbox 'change' event on
            // select and deselect all.
            // @see Drupal.tableSelect
            $tbody
              .find('input[type="checkbox"]')
              .on("click change", function () {
                checkboxesRequired($tbody);
              });
          }

          setTimeout(function () {
            isMultiple ? checkboxesRequired($tbody) : radiosRequired($element);
          });
        });
    },
  };

  /**
   * Add HTML5 multiple checkboxes required validation.
   *
   * @param {jQuery} $element
   *   An jQuery object containing HTML5 radios.
   *
   * @see https://stackoverflow.com/a/37825072/145846
   */
  function checkboxesRequired($element) {
    var $firstCheckbox = $element.find('input[type="checkbox"]').first();
    var isChecked = $element.find('input[type="checkbox"]').is(":checked");
    toggleRequired($firstCheckbox, !isChecked);
    copyRequireMessage($element, $firstCheckbox);
  }

  /**
   * Add HTML5 radios required validation.
   *
   * @param {jQuery} $element
   *   An jQuery object containing HTML5 radios.
   *
   * @see https://www.drupal.org/project/webform/issues/2856795
   */
  function radiosRequired($element) {
    var $radios = $element.find('input[type="radio"]');
    var isRequired = $element.hasClass("required");
    toggleRequired($radios, isRequired);
    copyRequireMessage($element, $radios);
  }

  /* ************************************************************************ */
  // Event handlers.
  /* ************************************************************************ */

  /**
   * Trigger #states API HTML5 multiple checkboxes required validation.
   *
   * @see https://stackoverflow.com/a/37825072/145846
   */
  function statesCheckboxesRequiredEventHandler() {
    var $element = $(this).closest(
      ".js-webform-type-checkboxes, .js-webform-type-webform-checkboxes-other",
    );
    checkboxesRequired($element);
  }

  /**
   * Trigger an input's event handlers.
   *
   * @param {element} input
   *   An input.
   */
  function triggerEventHandlers(input) {
    var $input = $(input);
    var type = input.type;
    var tag = input.tagName.toLowerCase();
    // Add 'webform.states' as extra parameter to event handlers.
    // @see Drupal.behaviors.webformUnsaved
    var extraParameters = ["webform.states"];
    if (type === "checkbox" || type === "radio") {
      $input
        .trigger("change", extraParameters)
        .trigger("blur", extraParameters);
    } else if (tag === "select") {
      // Do not trigger the onchange event for Address element's country code
      // when it is initialized.
      // @see \Drupal\address\Element\Country
      if ($input.closest(".webform-type-address").length) {
        if (
          !$input.data("webform-states-address-initialized") &&
          $input.attr("autocomplete") === "country" &&
          $input.val() === $input.find("option[selected]").attr("value")
        ) {
          return;
        }
        $input.data("webform-states-address-initialized", true);
      }

      $input
        .trigger("change", extraParameters)
        .trigger("blur", extraParameters);
    } else if (type !== "submit" && type !== "button" && type !== "file") {
      // Make sure input mask is removed and then reset when value is restored.
      // @see https://www.drupal.org/project/webform/issues/3124155
      // @see https://www.drupal.org/project/webform/issues/3202795
      var hasInputMask =
        $.fn.inputmask && $input.hasClass("js-webform-input-mask");
      hasInputMask && $input.inputmask("remove");

      $input
        .trigger("input", extraParameters)
        .trigger("change", extraParameters)
        .trigger("keydown", extraParameters)
        .trigger("keyup", extraParameters)
        .trigger("blur", extraParameters);

      hasInputMask && $input.inputmask();
    }
  }

  /* ************************************************************************ */
  // Backup and restore value functions.
  /* ************************************************************************ */

  /**
   * Backup an input's current value and required attribute
   *
   * @param {element} input
   *   An input.
   */
  function backupValueAndRequired(input) {
    var $input = $(input);
    var type = input.type;
    var tag = input.tagName.toLowerCase(); // Normalize case.

    // Backup required.
    if ($input.prop("required") && !$input.hasData("webform-required")) {
      $input.data("webform-required", true);
    }

    // Backup value.
    if (!$input.hasData("webform-value")) {
      if (type === "checkbox" || type === "radio") {
        $input.data("webform-value", $input.prop("checked"));
      } else if (tag === "select") {
        var values = [];
        $input.find("option:selected").each(function (i, option) {
          values[i] = option.value;
        });
        $input.data("webform-value", values);
      } else if (type !== "submit" && type !== "button") {
        $input.data("webform-value", input.value);
      }
    }
  }

  /**
   * Restore an input's value and required attribute.
   *
   * @param {element} input
   *   An input.
   */
  function restoreValueAndRequired(input) {
    var $input = $(input);

    // Restore value.
    var value = $input.data("webform-value");
    if (typeof value !== "undefined") {
      var type = input.type;
      var tag = input.tagName.toLowerCase(); // Normalize case.

      if (type === "checkbox" || type === "radio") {
        $input.prop("checked", value);
      } else if (tag === "select") {
        $.each(value, function (i, option_value) {
          // Prevent "Syntax error, unrecognized expression" error by
          // escaping single quotes.
          // @see https://forum.jquery.com/topic/escape-characters-prior-to-using-selector
          option_value = option_value.replace(/'/g, "\\'");
          $input
            .find("option[value='" + option_value + "']")
            .prop("selected", true);
        });
      } else if (type !== "submit" && type !== "button") {
        input.value = value;
      }
      $input.removeData("webform-value");
    }

    // Restore required.
    var required = $input.data("webform-required");
    if (typeof required !== "undefined") {
      if (required) {
        $input.prop("required", true);
      }
      $input.removeData("webform-required");
    }
  }

  /**
   * Clear an input's value and required attributes.
   *
   * @param {element} input
   *   An input.
   */
  function clearValueAndRequired(input) {
    var $input = $(input);

    // Check for #states no clear attribute.
    // @see https://css-tricks.com/snippets/jquery/make-an-jquery-hasattr/
    if ($input.closest("[data-webform-states-no-clear]").length) {
      return;
    }

    // Clear value.
    var type = input.type;
    var tag = input.tagName.toLowerCase(); // Normalize case.
    if (type === "checkbox" || type === "radio") {
      $input.prop("checked", false);
    } else if (tag === "select") {
      if ($input.find('option[value=""]').length) {
        $input.val("");
      } else {
        input.selectedIndex = -1;
      }
    } else if (type !== "submit" && type !== "button") {
      input.value = type === "color" ? "#000000" : "";
    }

    // Clear required.
    $input.prop("required", false);
  }

  /* ************************************************************************ */
  // Helper functions.
  /* ************************************************************************ */

  /**
   * Toggle an input's required attributes.
   *
   * @param {element} $input
   *   An input.
   * @param {boolean} required
   *   Is input required.
   */
  function toggleRequired($input, required) {
    var isCheckboxOrRadio =
      $input.attr("type") === "radio" || $input.attr("type") === "checkbox";
    if (required) {
      if (isCheckboxOrRadio) {
        $input.attr({ required: "required" });
      } else {
        $input.attr({ required: "required", "aria-required": "true" });
      }
    } else {
      if (isCheckboxOrRadio) {
        $input.removeAttr("required");
      } else {
        $input.removeAttr("required aria-required");
      }
    }
  }

  /**
   * Copy the clientside_validation.module's message.
   *
   * @param {jQuery} $source
   *   The source element.
   * @param {jQuery} $destination
   *   The destination element.
   */
  function copyRequireMessage($source, $destination) {
    if ($source.attr("data-msg-required")) {
      $destination.attr("data-msg-required", $source.attr("data-msg-required"));
    }
  }
})(jQuery, Drupal);
/**
 * @file
 * JavaScript behaviors for webforms.
 */

(function ($, Drupal) {
  "use strict";

  /**
   * Remove single submit event listener.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for removing single submit event listener.
   *
   * @see Drupal.behaviors.formSingleSubmit
   */
  Drupal.behaviors.webformRemoveFormSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        $form.removeAttr("data-drupal-form-submit-last");
      }
      $("body")
        .once("webform-single-submit")
        .on(
          "submit.singleSubmit",
          "form.webform-remove-single-submit",
          onFormSubmit,
        );
    },
  };

  /**
   * Prevent webform autosubmit on wizard pages.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for disabling webform autosubmit.
   *   Wizard pages need to be progressed with the Previous or Next buttons,
   *   not by pressing Enter.
   */
  Drupal.behaviors.webformDisableAutoSubmit = {
    attach: function (context) {
      // Not using context so that inputs loaded via Ajax will have autosubmit
      // disabled.
      // @see http://stackoverflow.com/questions/11235622/jquery-disable-form-submit-on-enter
      $(".js-webform-disable-autosubmit input")
        .not(":button, :submit, :reset, :image, :file")
        .once("webform-disable-autosubmit")
        .on("keyup keypress", function (e) {
          if (e.which === 13) {
            e.preventDefault();
            return false;
          }
        });
    },
  };

  /**
   * Custom required and pattern validation error messages.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for the webform custom required and pattern
   *   validation error messages.
   *
   * @see http://stackoverflow.com/questions/5272433/html5-form-required-attribute-set-custom-validation-message
   **/
  Drupal.behaviors.webformRequiredError = {
    attach: function (context) {
      $(context)
        .find(
          ":input[data-webform-required-error], :input[data-webform-pattern-error]",
        )
        .once("webform-required-error")
        .on("invalid", function () {
          this.setCustomValidity("");
          if (this.valid) {
            return;
          }

          if (
            this.validity.patternMismatch &&
            $(this).attr("data-webform-pattern-error")
          ) {
            this.setCustomValidity($(this).attr("data-webform-pattern-error"));
          } else if (
            this.validity.valueMissing &&
            $(this).attr("data-webform-required-error")
          ) {
            this.setCustomValidity($(this).attr("data-webform-required-error"));
          }
        })
        .on("input change", function () {
          // Find all related elements by name and reset custom validity.
          // This specifically applies to required radios and checkboxes.
          var name = $(this).attr("name");
          $(this.form)
            .find(':input[name="' + name + '"]')
            .each(function () {
              this.setCustomValidity("");
            });
        });
    },
  };

  // When #state:required is triggered we need to reset the target elements
  // custom validity.
  $(document).on("state:required", function (e) {
    $(e.target)
      .filter("[data-webform-required-error]")
      .each(function () {
        this.setCustomValidity("");
      });
  });
})(jQuery, Drupal);
/**
 * @file
 * JavaScript behaviors for details element.
 */

(function ($, Drupal) {
  "use strict";

  // Determine if local storage exists and is enabled.
  // This approach is copied from Modernizr.
  // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
  var hasLocalStorage = (function () {
    try {
      localStorage.setItem("webform", "webform");
      localStorage.removeItem("webform");
      return true;
    } catch (e) {
      return false;
    }
  })();

  /**
   * Attach handler to save details open/close state.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformDetailsSave = {
    attach: function (context) {
      if (!hasLocalStorage) {
        return;
      }

      // Summary click event handler.
      $("details > summary", context)
        .once("webform-details-summary-save")
        .on("click", function () {
          var $details = $(this).parent();

          // @see https://css-tricks.com/snippets/jquery/make-an-jquery-hasattr/
          if ($details[0].hasAttribute("data-webform-details-nosave")) {
            return;
          }

          var name = Drupal.webformDetailsSaveGetName($details);
          if (!name) {
            return;
          }

          var open = $details.attr("open") !== "open" ? "1" : "0";
          localStorage.setItem(name, open);
        });

      // Initialize details open state via local storage.
      $("details", context)
        .once("webform-details-save")
        .each(function () {
          var $details = $(this);

          var name = Drupal.webformDetailsSaveGetName($details);
          if (!name) {
            return;
          }

          var open = localStorage.getItem(name);
          if (open === null) {
            return;
          }

          if (open === "1") {
            $details.attr("open", "open");
          } else {
            $details.removeAttr("open");
          }
        });
    },
  };

  /**
   * Get the name used to store the state of details element.
   *
   * @param {jQuery} $details
   *   A details element.
   *
   * @return {string}
   *   The name used to store the state of details element.
   */
  Drupal.webformDetailsSaveGetName = function ($details) {
    if (!hasLocalStorage) {
      return "";
    }

    // Ignore details that are vertical tabs pane.
    if ($details.hasClass("vertical-tabs__pane")) {
      return "";
    }

    // Any details element not included a webform must have define its own id.
    var webformId = $details.attr("data-webform-element-id");
    if (webformId) {
      return "Drupal.webform." + webformId.replace("--", ".");
    }

    var detailsId = $details.attr("id");
    if (!detailsId) {
      return "";
    }

    var $form = $details.parents("form");
    if (!$form.length || !$form.attr("id")) {
      return "";
    }

    var formId = $form.attr("id");
    if (!formId) {
      return "";
    }

    // ISSUE: When Drupal renders a webform in a modal dialog it appends a unique
    // identifier to webform ids and details ids. (i.e. my-form--FeSFISegTUI)
    // WORKAROUND: Remove the unique id that delimited using double dashes.
    formId = formId.replace(/--.+?$/, "").replace(/-/g, "_");
    detailsId = detailsId.replace(/--.+?$/, "").replace(/-/g, "_");
    return "Drupal.webform." + formId + "." + detailsId;
  };
})(jQuery, Drupal);
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement("div");
        liveElement.id = "drupal-live-announce";
        liveElement.className = "visually-hidden";
        liveElement.setAttribute("aria-live", "polite");
        liveElement.setAttribute("aria-busy", "false");
        document.body.appendChild(liveElement);
      }
    },
  };

  function announce() {
    var text = [];
    var priority = "polite";
    var announcement;
    var il = announcements.length;

    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === "assertive") {
        priority = "assertive";
      }
    }

    if (text.length) {
      liveElement.innerHTML = "";
      liveElement.setAttribute("aria-busy", "true");
      liveElement.setAttribute("aria-live", priority);
      liveElement.innerHTML = text.join("\n");
      liveElement.setAttribute("aria-busy", "false");
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority,
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);
/**
 * @file
 * JavaScript behaviors for details element.
 */

(function ($, Drupal) {
  "use strict";

  Drupal.webform = Drupal.webform || {};
  Drupal.webform.detailsToggle = Drupal.webform.detailsToggle || {};
  Drupal.webform.detailsToggle.options =
    Drupal.webform.detailsToggle.options || {};

  /**
   * Attach handler to toggle details open/close state.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformDetailsToggle = {
    attach: function (context) {
      $(".js-webform-details-toggle", context)
        .once("webform-details-toggle")
        .each(function () {
          var $form = $(this);
          var $tabs = $form.find(".webform-tabs");

          // Get only the main details elements and ignore all nested details.
          var selector = $tabs.length
            ? ".webform-tab"
            : ".js-webform-details-toggle, .webform-elements";
          var $details = $form.find("details").filter(function () {
            var $parents = $(this).parentsUntil(selector);
            return $parents.find("details").length === 0;
          });

          // Toggle is only useful when there are two or more details elements.
          if ($details.length < 2) {
            return;
          }

          var options = $.extend(
            {
              button:
                '<button type="button" class="webform-details-toggle-state"></button>',
            },
            Drupal.webform.detailsToggle.options,
          );

          // Create toggle buttons.
          var $toggle = $(options.button)
            .attr("title", Drupal.t("Toggle details widget state."))
            .on("click", function (e) {
              // Get details that are not vertical tabs pane.
              var $details = $form.find("details:not(.vertical-tabs__pane)");
              var open;
              if (Drupal.webform.detailsToggle.isFormDetailsOpen($form)) {
                $details.removeAttr("open");
                open = 0;
              } else {
                $details.attr("open", "open");
                open = 1;
              }
              Drupal.webform.detailsToggle.setDetailsToggleLabel($form);

              // Set the saved states for all the details elements.
              // @see webform.element.details.save.js
              if (Drupal.webformDetailsSaveGetName) {
                $details.each(function () {
                  // Note: Drupal.webformDetailsSaveGetName checks if localStorage
                  // exists and is enabled.
                  // @see webform.element.details.save.js
                  var name = Drupal.webformDetailsSaveGetName($(this));
                  if (name) {
                    localStorage.setItem(name, open);
                  }
                });
              }
            })
            .wrap('<div class="webform-details-toggle-state-wrapper"></div>')
            .parent();

          if ($tabs.length) {
            // Add toggle state before the tabs.
            $tabs.find(".item-list:first-child").eq(0).before($toggle);
          } else {
            // Add toggle state link to first details element.
            $details.eq(0).before($toggle);
          }

          Drupal.webform.detailsToggle.setDetailsToggleLabel($form);
        });
    },
  };

  /**
   * Determine if a webform's details are all opened.
   *
   * @param {jQuery} $form
   *   A webform.
   *
   * @return {boolean}
   *   TRUE if a webform's details are all opened.
   */
  Drupal.webform.detailsToggle.isFormDetailsOpen = function ($form) {
    return $form.find("details[open]").length === $form.find("details").length;
  };

  /**
   * Set a webform's details toggle state widget label.
   *
   * @param {jQuery} $form
   *   A webform.
   */
  Drupal.webform.detailsToggle.setDetailsToggleLabel = function ($form) {
    var isOpen = Drupal.webform.detailsToggle.isFormDetailsOpen($form);

    var label = isOpen ? Drupal.t("Collapse all") : Drupal.t("Expand all");
    $form.find(".webform-details-toggle-state").html(label);

    var text = isOpen
      ? Drupal.t("All details have been expanded.")
      : Drupal.t("All details have been collapsed.");
    Drupal.announce(text);
  };
})(jQuery, Drupal);
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return (
      '<div id="'.concat(id, '" class="progress" aria-live="polite">') +
      '<div class="progress__label">&nbsp;</div>' +
      '<div class="progress__track"><div class="progress__bar"></div></div>' +
      '<div class="progress__percentage"></div>' +
      '<div class="progress__description">&nbsp;</div>' +
      "</div>"
    );
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || "GET";
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme("progressBar", id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element)
          .find("div.progress__bar")
          .css("width", "".concat(percentage, "%"));
        $(this.element)
          .find("div.progress__percentage")
          .html("".concat(percentage, "%"));
      }

      $("div.progress__description", this.element).html(message);
      $("div.progress__label", this.element).html(label);

      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (this.uri) {
        var pb = this;
        var uri = this.uri;

        if (uri.indexOf("?") === -1) {
          uri += "?";
        } else {
          uri += "&";
        }

        uri += "_format=json";
        $.ajax({
          type: this.method,
          url: uri,
          data: "",
          dataType: "json",
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(
              progress.percentage,
              progress.message,
              progress.label,
            );
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>".concat(e.message, "</pre>"));
          },
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(
        string,
      );
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    },
  });
})(jQuery, Drupal);
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function (Drupal) {
  Drupal.behaviors.responsiveImageAJAX = {
    attach: function attach() {
      if (window.picturefill) {
        window.picturefill();
      }
    },
  };
})(Drupal);
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
    iter["@@iterator"] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

(function ($, window, Drupal, drupalSettings, _ref) {
  var isFocusable = _ref.isFocusable,
    tabbable = _ref.tabbable;
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];

        if (typeof elementSettings.selector === "undefined") {
          elementSettings.selector = "#".concat(base);
        }

        once("drupal-ajax", $(elementSettings.selector)).forEach(function (el) {
          elementSettings.element = el;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      once("ajax", ".use-ajax-submit").forEach(function (el) {
        var elementSettings = {};
        elementSettings.url = $(el.form).attr("action");
        elementSettings.setClick = true;
        elementSettings.event = "click";
        elementSettings.progress = {
          type: "throbber",
        };
        elementSettings.base = el.id;
        elementSettings.element = el;
        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === "unload") {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    },
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode;
    var statusText;
    var responseText;

    if (xmlhttp.status) {
      statusCode = "\n"
        .concat(Drupal.t("An AJAX HTTP error occurred."), "\n")
        .concat(
          Drupal.t("HTTP Result Code: !status", {
            "!status": xmlhttp.status,
          }),
        );
    } else {
      statusCode = "\n".concat(
        Drupal.t("An AJAX HTTP request terminated abnormally."),
      );
    }

    statusCode += "\n".concat(Drupal.t("Debugging information follows."));
    var pathText = "\n".concat(
      Drupal.t("Path: !uri", {
        "!uri": uri,
      }),
    );
    statusText = "";

    try {
      statusText = "\n".concat(
        Drupal.t("StatusText: !statusText", {
          "!statusText": xmlhttp.statusText.trim(),
        }),
      );
    } catch (e) {}

    responseText = "";

    try {
      responseText = "\n".concat(
        Drupal.t("ResponseText: !responseText", {
          "!responseText": xmlhttp.responseText.trim(),
        }),
      );
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, "");
    responseText = responseText.replace(/[\n]+\s+/g, "\n");
    var readyStateText =
      xmlhttp.status === 0
        ? "\n".concat(
            Drupal.t("ReadyState: !readyState", {
              "!readyState": xmlhttp.readyState,
            }),
          )
        : "";
    customMessage = customMessage
      ? "\n".concat(
          Drupal.t("CustomMessage: !customMessage", {
            "!customMessage": customMessage,
          }),
        )
      : "";
    this.message =
      statusCode +
      pathText +
      statusText +
      customMessage +
      responseText +
      readyStateText;
    this.name = "AjaxError";
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error(
        "Drupal.ajax() function must be called with one configuration object only",
      );
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return (
        instance &&
        instance.element !== false &&
        !document.body.contains(instance.element)
      );
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    once("ajax", ".use-ajax", element).forEach(function (ajaxLink) {
      var $linkElement = $(ajaxLink);
      var elementSettings = {
        progress: {
          type: "throbber",
        },
        dialogType: $linkElement.data("dialog-type"),
        dialog: $linkElement.data("dialog-options"),
        dialogRenderer: $linkElement.data("dialog-renderer"),
        base: $linkElement.attr("id"),
        element: ajaxLink,
      };
      var href = $linkElement.attr("href");

      if (href) {
        elementSettings.url = href;
        elementSettings.event = "click";
      }

      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? "mousedown" : null,
      keypress: true,
      selector: base ? "#".concat(base) : null,
      effect: "none",
      speed: "none",
      method: "replaceWith",
      progress: {
        type: "throbber",
        message: Drupal.t("Please wait..."),
      },
      submit: {
        js: true,
      },
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = "#".concat(this.wrapper);
    }

    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);

      if ($element.is("a")) {
        this.url = $element.attr("href");
      } else if (this.element && element.form) {
        this.url = this.$form.attr("action");
      }
    }

    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, "/ajax$1");

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(
        formValues,
        elementSettings,
        options,
      ) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === "string") {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader("X-Drupal-Ajax-Token") !== "1") {
            var customMessage = Drupal.t(
              "The response failed verification so will not be processed.",
            );
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;

        if (status === "error" || status === "parsererror") {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: "json",
      jsonp: false,
      type: "POST",
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf("?") === -1) {
      ajax.options.url += "?";
    } else {
      ajax.options.url += "&";
    }

    var wrapper = "drupal_".concat(elementSettings.dialogType || "ajax");

    if (elementSettings.dialogRenderer) {
      wrapper += ".".concat(elementSettings.dialogRenderer);
    }

    ajax.options.url += ""
      .concat(Drupal.ajax.WRAPPER_FORMAT, "=")
      .concat(wrapper);
    $(ajax.element).on(elementSettings.event, function (event) {
      if (
        !drupalSettings.ajaxTrustedUrl[ajax.url] &&
        !Drupal.url.isLocal(ajax.url)
      ) {
        throw new Error(
          Drupal.t("The callback URL is not local and not trusted: !url", {
            "!url": ajax.url,
          }),
        );
      }

      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on("keypress", function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = "_wrapper_format";
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = "_drupal_ajax";

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert(
        "An error occurred while attempting to process "
          .concat(this.options.url, ": ")
          .concat(e.message),
      );
      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (
      event.which === 13 ||
      (event.which === 32 &&
        element.type !== "text" &&
        element.type !== "textarea" &&
        element.type !== "tel" &&
        element.type !== "number")
    ) {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert(
        "An error occurred while attempting to process "
          .concat(ajax.options.url, ": ")
          .concat(e.message),
      );
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, "serialize");
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data["ajax_page_state[theme]"] = pageState.theme;
    options.data["ajax_page_state[theme_token]"] = pageState.theme_token;
    options.data["ajax_page_state[libraries]"] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (
    formValues,
    element,
    options,
  ) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = "1";
      var v = $.fieldValue(this.element);

      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop("disabled", true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = "setProgressIndicator"
      .concat(this.progress.type.slice(0, 1).toUpperCase())
      .concat(this.progress.type.slice(1).toLowerCase());

    if (
      progressIndicatorMethod in this &&
      typeof this[progressIndicatorMethod] === "function"
    ) {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup =
      typeof message === "string"
        ? Drupal.theme("ajaxProgressMessage", message)
        : "";
    var throbber = '<div class="throbber">&nbsp;</div>';
    return '<div class="ajax-progress ajax-progress-throbber">'
      .concat(throbber)
      .concat(messageMarkup, "</div>");
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">'.concat(message, "</div>");
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append(
      $element,
    );
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar(
      "ajax-progress-".concat(this.element.id),
      $.noop,
      this.progress.method,
      $.noop,
    );

    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }

    if (this.progress.url) {
      progressBar.startMonitoring(
        this.progress.url,
        this.progress.interval || 1500,
      );
    }

    this.progress.element = $(
      Drupal.theme("ajaxProgressBar", progressBar.element),
    );
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(
      Drupal.theme("ajaxProgressThrobber", this.progress.message),
    );
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme("ajaxProgressIndicatorFullscreen"));
    $("body").append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.element).prop("disabled", false);
    var elementParents = $(this.element)
      .parents("[data-drupal-selector]")
      .addBack()
      .toArray();
    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);

        if (
          (response[i].command === "invoke" &&
            response[i].method === "focus") ||
          response[i].command === "focusFirst"
        ) {
          focusChanged = true;
        }
      }
    });

    if (
      !focusChanged &&
      this.element &&
      !$(this.element).data("disable-refocus")
    ) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector(
          '[data-drupal-selector="'.concat(
            elementParents[n].getAttribute("data-drupal-selector"),
            '"]',
          ),
        );
      }

      if (target) {
        $(target).trigger("focus");
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;
    var effect = {};

    if (type === "none") {
      effect.showEffect = "show";
      effect.hideEffect = "hide";
      effect.showSpeed = "";
    } else if (type === "fade") {
      effect.showEffect = "fadeIn";
      effect.hideEffect = "fadeOut";
      effect.showSpeed = speed;
    } else {
      effect.showEffect = "".concat(type, "Toggle");
      effect.hideEffect = "".concat(type, "Toggle");
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();
    $(this.element).prop("disabled", false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== "none" &&
      $newContent.filter(function (i) {
        return !(
          $newContent[i].nodeName === "#comment" ||
          ($newContent[i].nodeName === "#text" &&
            /^(\s|\n|\r)*$/.test($newContent[i].textContent))
        );
      }).length > 1
      ? Drupal.theme("ajaxWrapperMultipleRootElements", $newContent)
      : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $("<div></div>").append($elements);
  };

  Drupal.AjaxCommands = function () {};

  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = response.settings || ajax.settings || drupalSettings;
      var $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme(
        "ajaxWrapperNewContent",
        $newContent,
        ajax,
        response,
      );

      switch (method) {
        case "html":
        case "replaceWith":
        case "replaceAll":
        case "empty":
        case "remove":
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;

        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== "show") {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find(".ajax-new-content");

      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== "show") {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents("html").length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector)
        .each(function () {
          Drupal.detachBehaviors(this, settings);
        })
        .remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);

      if (!$element.hasClass("ajax-changed")) {
        $element.addClass("ajax-changed");

        if (response.asterisk) {
          $element
            .find(response.asterisk)
            .append(
              ' <abbr class="ajax-changed" title="'.concat(
                Drupal.t("Changed"),
                '">*</abbr> ',
              ),
            );
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace("#", "");

            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    focusFirst: function focusFirst(ajax, response, status) {
      var focusChanged = false;
      var container = document.querySelector(response.selector);

      if (container) {
        var tabbableElements = tabbable(container);

        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          container.focus();
          focusChanged = true;
        }
      }

      if (ajax.hasOwnProperty("element") && !focusChanged) {
        ajax.element.focus();
      }
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply(
        $element,
        _toConsumableArray(response.args),
      );
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector)
        .find("> tbody > tr:visible, > tr:visible")
        .removeClass("odd even")
        .filter(":even")
        .addClass("odd")
        .end()
        .filter(":odd")
        .addClass("even");
    },
    update_build_id: function update_build_id(ajax, response, status) {
      document
        .querySelectorAll(
          'input[name="form_build_id"][value="'.concat(response.old, '"]'),
        )
        .forEach(function (item) {
          item.value = response.new;
        });
    },
    add_css: function add_css(ajax, response, status) {
      $("head").prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(
        document.querySelector(response.messageWrapperQuerySelector),
      );

      if (response.clearPrevious) {
        messages.clear();
      }

      messages.add(response.message, response.messageOptions);
    },
  };
})(jQuery, window, Drupal, drupalSettings, window.tabbable);
/**
 * @file
 * JavaScript behaviors for webform scroll top.
 */

(function ($, Drupal) {
  "use strict";

  Drupal.webform = Drupal.webform || {};
  // Allow scrollTopOffset to be custom defined or based on whether there is a
  // floating toolbar.
  Drupal.webform.scrollTopOffset =
    Drupal.webform.scrollTopOffset ||
    ($("#toolbar-administration").length ? 140 : 10);

  /**
   * Scroll to top ajax command.
   *
   * @param {Element} element
   *   The element to scroll to.
   * @param {string} target
   *   Scroll to target. (form or page)
   */
  Drupal.webformScrollTop = function (element, target) {
    if (!target) {
      return;
    }

    var $element = $(element);

    // Scroll to the top of the view. This will allow users
    // to browse newly loaded content after e.g. clicking a pager
    // link.
    var offset = $element.offset();
    // We can't guarantee that the scrollable object should be
    // the body, as the view could be embedded in something
    // more complex such as a modal popup. Recurse up the DOM
    // and scroll the first element that has a non-zero top.
    var $scrollTarget = $element;
    while ($scrollTarget.scrollTop() === 0 && $($scrollTarget).parent()) {
      $scrollTarget = $scrollTarget.parent();
    }

    if (
      target === "page" &&
      $scrollTarget.length &&
      $scrollTarget[0].tagName === "HTML"
    ) {
      // Scroll to top when scroll target is the entire page.
      // @see https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
      var rect = $($scrollTarget)[0].getBoundingClientRect();
      if (
        !(
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= $(window).height() &&
          rect.right <= $(window).width()
        )
      ) {
        $scrollTarget.animate({ scrollTop: 0 }, 500);
      }
    } else {
      // Only scroll upward.
      if (
        offset.top - Drupal.webform.scrollTopOffset <
        $scrollTarget.scrollTop()
      ) {
        $scrollTarget.animate(
          { scrollTop: offset.top - Drupal.webform.scrollTopOffset },
          500,
        );
      }
    }
  };

  /**
   * Scroll element into view.
   *
   * @param {jQuery} $element
   *   An element.
   */
  Drupal.webformScrolledIntoView = function ($element) {
    if (!Drupal.webformIsScrolledIntoView($element)) {
      $("html, body").animate(
        { scrollTop: $element.offset().top - Drupal.webform.scrollTopOffset },
        500,
      );
    }
  };

  /**
   * Determine if element is visible in the viewport.
   *
   * @param {Element} element
   *   An element.
   *
   * @return {boolean}
   *   TRUE if element is visible in the viewport.
   *
   * @see https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
   */
  Drupal.webformIsScrolledIntoView = function (element) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(element).offset().top;
    var elemBottom = elemTop + $(element).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  };
})(jQuery, Drupal);
/**
 * @file
 * JavaScript behaviors for Ajax.
 */

(function ($, Drupal, drupalSettings) {
  "use strict";

  Drupal.webform = Drupal.webform || {};
  Drupal.webform.ajax = Drupal.webform.ajax || {};
  // Allow scrollTopOffset to be custom defined or based on whether there is a
  // floating toolbar.
  Drupal.webform.ajax.scrollTopOffset =
    Drupal.webform.ajax.scrollTopOffset ||
    ($("#toolbar-administration").length ? 140 : 10);

  // Set global scroll top offset.
  // @todo Remove in Webform 6.x.
  Drupal.webform.scrollTopOffset = Drupal.webform.ajax.scrollTopOffset;

  /**
   * Provide Webform Ajax link behavior.
   *
   * Display fullscreen progress indicator instead of throbber.
   * Copied from: Drupal.behaviors.AJAX
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior to a.webform-ajax-link.
   */
  Drupal.behaviors.webformAjaxLink = {
    attach: function (context) {
      $(".webform-ajax-link", context)
        .once("webform-ajax-link")
        .each(function () {
          var element_settings = {};
          element_settings.progress = { type: "fullscreen" };

          // For anchor tags, these will go to the target of the anchor rather
          // than the usual location.
          var href = $(this).attr("href");
          if (href) {
            element_settings.url = href;
            element_settings.event = "click";
          }
          element_settings.dialogType = $(this).data("dialog-type");
          element_settings.dialogRenderer = $(this).data("dialog-renderer");
          element_settings.dialog = $(this).data("dialog-options");
          element_settings.base = $(this).attr("id");
          element_settings.element = this;
          Drupal.ajax(element_settings);

          // Close all open modal dialogs when opening off-canvas dialog.
          if (element_settings.dialogRenderer === "off_canvas") {
            $(this).on("click", function () {
              $(".ui-dialog.webform-ui-dialog:visible")
                .find(".ui-dialog-content")
                .dialog("close");
            });
          }
        });
    },
  };

  /**
   * Adds a hash (#) to current pages location for links and buttons
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior to a[data-hash] or :button[data-hash].
   *
   * @see \Drupal\webform_ui\WebformUiEntityElementsForm::getElementRow
   * @see Drupal.behaviors.webformFormTabs
   */
  Drupal.behaviors.webformAjaxHash = {
    attach: function (context) {
      $("[data-hash]", context)
        .once("webform-ajax-hash")
        .each(function () {
          var hash = $(this).data("hash");
          if (hash) {
            $(this).on("click", function () {
              location.hash = $(this).data("hash");
            });
          }
        });
    },
  };

  /**
   * Provide Ajax callback for confirmation back to link.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior to confirmation back to link.
   */
  Drupal.behaviors.webformConfirmationBackAjax = {
    attach: function (context) {
      $(".js-webform-confirmation-back-link-ajax", context)
        .once("webform-confirmation-back-ajax")
        .on("click", function (event) {
          var $form = $(this).parents("form");

          // Trigger the Ajax call back for the hidden submit button.
          // @see \Drupal\webform\WebformSubmissionForm::getCustomForm
          $form
            .find(".js-webform-confirmation-back-submit-ajax")
            .trigger("click");

          // Move the progress indicator from the submit button to after this link.
          // @todo Figure out a better way to set a progress indicator.
          var $progress_indicator = $form.find(".ajax-progress");
          if ($progress_indicator) {
            $(this).after($progress_indicator);
          }

          // Cancel the click event.
          event.preventDefault();
          event.stopPropagation();
        });
    },
  };

  /** ********************************************************************** **/
  // Ajax commands.
  /** ********************************************************************** **/

  /**
   * Track the updated table row key.
   */
  var updateKey;

  /**
   * Track the add element key.
   */
  var addElement;

  /**
   * Command to insert new content into the DOM.
   *
   * @param {Drupal.Ajax} ajax
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   The response from the Ajax request.
   * @param {string} response.data
   *   The data to use with the jQuery method.
   * @param {string} [response.method]
   *   The jQuery DOM manipulation method to be used.
   * @param {string} [response.selector]
   *   A optional jQuery selector string.
   * @param {object} [response.settings]
   *   An optional array of settings that will be used.
   * @param {number} [status]
   *   The XMLHttpRequest status.
   */
  Drupal.AjaxCommands.prototype.webformInsert = function (
    ajax,
    response,
    status,
  ) {
    // Insert the HTML.
    this.insert(ajax, response, status);

    // Add element.
    if (addElement) {
      var addSelector =
        addElement === "_root_"
          ? "#webform-ui-add-element"
          : '[data-drupal-selector="edit-webform-ui-elements-' +
            addElement +
            '-add"]';
      $(addSelector).trigger("click");
    }

    // If not add element, then scroll to and highlight the updated table row.
    if (!addElement && updateKey) {
      var $element = $('tr[data-webform-key="' + updateKey + '"]');

      // Highlight the updated element's row.
      $element.addClass("color-success");
      setTimeout(function () {
        $element.removeClass("color-success");
      }, 3000);

      // Focus first tabbable item for the updated elements and handlers.
      $element.find(":tabbable:not(.tabledrag-handle)").eq(0).trigger("focus");

      // Scroll element into view.
      Drupal.webformScrolledIntoView($element);
    } else {
      // Focus main content.
      $("#main-content").trigger("focus");
    }

    // Display main page's status message in a floating container.
    var $wrapper = $(response.selector);
    if ($wrapper.parents(".ui-dialog").length === 0) {
      var $messages = $wrapper.find(".messages");
      // If 'add element' don't show any messages.
      if (addElement) {
        $messages.remove();
      } else if ($messages.length) {
        var $floatingMessage = $("#webform-ajax-messages");
        if ($floatingMessage.length === 0) {
          $floatingMessage = $(
            '<div id="webform-ajax-messages" class="webform-ajax-messages"></div>',
          );
          $("body").append($floatingMessage);
        }
        if ($floatingMessage.is(":animated")) {
          $floatingMessage.stop(true, true);
        }
        $floatingMessage.html($messages).show().delay(3000).fadeOut(1000);
      }
    }

    updateKey = null; // Reset element update.
    addElement = null; // Reset add element.
  };

  /**
   * Scroll to top ajax command.
   *
   * @param {Drupal.Ajax} [ajax]
   *   A {@link Drupal.ajax} object.
   * @param {object} response
   *   Ajax response.
   * @param {string} response.selector
   *   Selector to use.
   *
   * @see Drupal.AjaxCommands.prototype.viewScrollTop
   */
  Drupal.AjaxCommands.prototype.webformScrollTop = function (ajax, response) {
    // Scroll top.
    Drupal.webformScrollTop(response.selector, response.target);

    // Focus on the form wrapper content bookmark if
    // .js-webform-autofocus is not enabled.
    // @see \Drupal\webform\Form\WebformAjaxFormTrait::buildAjaxForm
    var $form = $(response.selector + "-content").find("form");
    if (!$form.hasClass("js-webform-autofocus")) {
      $(response.selector + "-content").trigger("focus");
    }
  };

  /**
   * Command to refresh the current webform page.
   *
   * @param {Drupal.Ajax} [ajax]
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   The response from the Ajax request.
   * @param {string} response.url
   *   The URL to redirect to.
   * @param {number} [status]
   *   The XMLHttpRequest status.
   */
  Drupal.AjaxCommands.prototype.webformRefresh = function (
    ajax,
    response,
    status,
  ) {
    // Get URL path name.
    // @see https://stackoverflow.com/questions/6944744/javascript-get-portion-of-url-path
    var a = document.createElement("a");
    a.href = response.url;
    var forceReload = response.url.match(/\?reload=([^&]+)($|&)/)
      ? RegExp.$1
      : null;
    if (forceReload) {
      response.url = response.url.replace(/\?reload=([^&]+)($|&)/, "");
      this.redirect(ajax, response, status);
      return;
    }

    if (
      a.pathname === window.location.pathname &&
      $(".webform-ajax-refresh").length
    ) {
      updateKey = response.url.match(/[?|&]update=([^&]+)($|&)/)
        ? RegExp.$1
        : null;
      addElement = response.url.match(/[?|&]add_element=([^&]+)($|&)/)
        ? RegExp.$1
        : null;
      $(".webform-ajax-refresh").trigger("click");
    } else {
      // Clear unsaved information flag so that the current webform page
      // can be redirected.
      // @see Drupal.behaviors.webformUnsaved.clear
      if (Drupal.behaviors.webformUnsaved) {
        Drupal.behaviors.webformUnsaved.clear();
      }

      // For webform embedded in an iframe, open all redirects in the top
      // of the browser window.
      // @see \Drupal\webform_share\Controller\WebformShareController::page
      if (drupalSettings.webform_share && drupalSettings.webform_share.page) {
        window.top.location = response.url;
      } else {
        this.redirect(ajax, response, status);
      }
    }
  };

  /**
   * Command to close a off-canvas and modal dialog.
   *
   * If no selector is given, it defaults to trying to close the modal.
   *
   * @param {Drupal.Ajax} [ajax]
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   The response from the Ajax request.
   * @param {string} response.selector
   *   Selector to use.
   * @param {bool} response.persist
   *   Whether to persist the dialog element or not.
   * @param {number} [status]
   *   The HTTP status code.
   */
  Drupal.AjaxCommands.prototype.webformCloseDialog = function (
    ajax,
    response,
    status,
  ) {
    if ($("#drupal-off-canvas").length) {
      // Close off-canvas system tray which is not triggered by close dialog
      // command.
      // @see Drupal.behaviors.offCanvasEvents
      $("#drupal-off-canvas").remove();
      $("body").removeClass("js-tray-open");
      // Remove all *.off-canvas events
      $(document).off(".off-canvas");
      $(window).off(".off-canvas");
      var edge = document.documentElement.dir === "rtl" ? "left" : "right";
      var $mainCanvasWrapper = $("[data-off-canvas-main-canvas]");
      $mainCanvasWrapper.css("padding-" + edge, 0);

      // Resize tabs when closing off-canvas system tray.
      $(window).trigger("resize.tabs");
    }

    // https://stackoverflow.com/questions/15763909/jquery-ui-dialog-check-if-exists-by-instance-method
    if ($(response.selector).hasClass("ui-dialog-content")) {
      this.closeDialog(ajax, response, status);
    }
  };

  /**
   * Triggers confirm page reload.
   *
   * @param {Drupal.Ajax} [ajax]
   *   A {@link Drupal.ajax} object.
   * @param {object} response
   *   Ajax response.
   * @param {string} response.message
   *   A message to be displayed in the confirm dialog.
   */
  Drupal.AjaxCommands.prototype.webformConfirmReload = function (
    ajax,
    response,
  ) {
    if (window.confirm(response.message)) {
      window.location.reload(true);
    }
  };
})(jQuery, Drupal, drupalSettings);
/**
 * @file
 * JavaScript behaviors for message element integration.
 */

(function ($, Drupal) {
  "use strict";

  // Determine if local storage exists and is enabled.
  // This approach is copied from Modernizr.
  // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
  var hasLocalStorage = (function () {
    try {
      localStorage.setItem("webform", "webform");
      localStorage.removeItem("webform");
      return true;
    } catch (e) {
      return false;
    }
  })();

  // Determine if session storage exists and is enabled.
  // This approach is copied from Modernizr.
  // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
  var hasSessionStorage = (function () {
    try {
      sessionStorage.setItem("webform", "webform");
      sessionStorage.removeItem("webform");
      return true;
    } catch (e) {
      return false;
    }
  })();

  /**
   * Behavior for handler message close.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformMessageClose = {
    attach: function (context) {
      $(context)
        .find(".js-webform-message--close")
        .once("webform-message--close")
        .each(function () {
          var $element = $(this);

          var id = $element.attr("data-message-id");
          var storage = $element.attr("data-message-storage");
          var effect = $element.attr("data-message-close-effect") || "hide";
          switch (effect) {
            case "slide":
              effect = "slideUp";
              break;

            case "fade":
              effect = "fadeOut";
              break;
          }

          // Check storage status.
          if (isClosed($element, storage, id)) {
            return;
          }

          // Only show element if it's style is not set to 'display: none'.
          if ($element.attr("style") !== "display: none;") {
            $element.show();
          }

          $element
            .find(".js-webform-message__link")
            .on("click", function (event) {
              $element[effect]();
              setClosed($element, storage, id);
              $element.trigger("close");
              event.preventDefault();
            });
        });
    },
  };

  function isClosed($element, storage, id) {
    if (!id || !storage) {
      return false;
    }

    switch (storage) {
      case "local":
        if (hasLocalStorage) {
          return localStorage.getItem("Drupal.webform.message." + id) || false;
        }
        return false;

      case "session":
        if (hasSessionStorage) {
          return (
            sessionStorage.getItem("Drupal.webform.message." + id) || false
          );
        }
        return false;

      default:
        return false;
    }
  }

  function setClosed($element, storage, id) {
    if (!id || !storage) {
      return;
    }

    switch (storage) {
      case "local":
        if (hasLocalStorage) {
          localStorage.setItem("Drupal.webform.message." + id, true);
        }
        break;

      case "session":
        if (hasSessionStorage) {
          sessionStorage.setItem("Drupal.webform.message." + id, true);
        }
        break;

      case "user":
      case "state":
      case "custom":
        $.get($element.find(".js-webform-message__link").attr("href"));
        return true;
    }
  }
})(jQuery, Drupal);
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!(function (r) {
  "function" == typeof define && define.amd
    ? define(["jquery"], r)
    : "object" == typeof module && module.exports
      ? (module.exports = function (e, t) {
          return (
            void 0 === t &&
              (t =
                "undefined" != typeof window
                  ? require("jquery")
                  : require("jquery")(e)),
            r(t),
            t
          );
        })
      : r(jQuery);
})(function (q) {
  "use strict";
  var m = /\r?\n/g,
    S = {};
  (S.fileapi = void 0 !== q('<input type="file">').get(0).files),
    (S.formdata = void 0 !== window.FormData);
  var _ = !!q.fn.prop;
  function o(e) {
    var t = e.data;
    e.isDefaultPrevented() ||
      (e.preventDefault(), q(e.target).closest("form").ajaxSubmit(t));
  }
  function i(e) {
    var t = e.target,
      r = q(t);
    if (!r.is("[type=submit],[type=image]")) {
      var a = r.closest("[type=submit]");
      if (0 === a.length) return;
      t = a[0];
    }
    var n,
      o = t.form;
    "image" === (o.clk = t).type &&
      (void 0 !== e.offsetX
        ? ((o.clk_x = e.offsetX), (o.clk_y = e.offsetY))
        : "function" == typeof q.fn.offset
          ? ((n = r.offset()),
            (o.clk_x = e.pageX - n.left),
            (o.clk_y = e.pageY - n.top))
          : ((o.clk_x = e.pageX - t.offsetLeft),
            (o.clk_y = e.pageY - t.offsetTop))),
      setTimeout(function () {
        o.clk = o.clk_x = o.clk_y = null;
      }, 100);
  }
  function N() {
    var e;
    q.fn.ajaxSubmit.debug &&
      ((e = "[jquery.form] " + Array.prototype.join.call(arguments, "")),
      window.console && window.console.log
        ? window.console.log(e)
        : window.opera && window.opera.postError && window.opera.postError(e));
  }
  (q.fn.attr2 = function () {
    if (!_) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return (e && e.jquery) || "string" == typeof e
      ? e
      : this.attr.apply(this, arguments);
  }),
    (q.fn.ajaxSubmit = function (M, e, t, r) {
      if (!this.length)
        return (
          N("ajaxSubmit: skipping submit process - no element selected"), this
        );
      var O,
        a,
        n,
        o,
        X = this;
      "function" == typeof M
        ? (M = { success: M })
        : "string" == typeof M || (!1 === M && 0 < arguments.length)
          ? ((M = { url: M, data: e, dataType: t }),
            "function" == typeof r && (M.success = r))
          : void 0 === M && (M = {}),
        (O = M.method || M.type || this.attr2("method")),
        (n =
          (n =
            (n =
              "string" == typeof (a = M.url || this.attr2("action"))
                ? q.trim(a)
                : "") ||
            window.location.href ||
            "") && (n.match(/^([^#]+)/) || [])[1]),
        (o =
          /(MSIE|Trident)/.test(navigator.userAgent || "") &&
          /^https/i.test(window.location.href || "")
            ? "javascript:false"
            : "about:blank"),
        (M = q.extend(
          !0,
          {
            url: n,
            success: q.ajaxSettings.success,
            type: O || q.ajaxSettings.type,
            iframeSrc: o,
          },
          M,
        ));
      var i = {};
      if ((this.trigger("form-pre-serialize", [this, M, i]), i.veto))
        return (
          N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this
        );
      if (M.beforeSerialize && !1 === M.beforeSerialize(this, M))
        return (
          N("ajaxSubmit: submit aborted via beforeSerialize callback"), this
        );
      var s = M.traditional;
      void 0 === s && (s = q.ajaxSettings.traditional);
      var u,
        c,
        C = [],
        l = this.formToArray(M.semantic, C, M.filtering);
      if (
        (M.data &&
          ((c = q.isFunction(M.data) ? M.data(l) : M.data),
          (M.extraData = c),
          (u = q.param(c, s))),
        M.beforeSubmit && !1 === M.beforeSubmit(l, this, M))
      )
        return N("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
      if ((this.trigger("form-submit-validate", [l, this, M, i]), i.veto))
        return (
          N("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this
        );
      var f = q.param(l, s);
      u && (f = f ? f + "&" + u : u),
        "GET" === M.type.toUpperCase()
          ? ((M.url += (0 <= M.url.indexOf("?") ? "&" : "?") + f),
            (M.data = null))
          : (M.data = f);
      var d,
        m,
        p,
        h = [];
      M.resetForm &&
        h.push(function () {
          X.resetForm();
        }),
        M.clearForm &&
          h.push(function () {
            X.clearForm(M.includeHidden);
          }),
        !M.dataType && M.target
          ? ((d = M.success || function () {}),
            h.push(function (e, t, r) {
              var a = arguments,
                n = M.replaceTarget ? "replaceWith" : "html";
              q(M.target)
                [n](e)
                .each(function () {
                  d.apply(this, a);
                });
            }))
          : M.success &&
            (q.isArray(M.success) ? q.merge(h, M.success) : h.push(M.success)),
        (M.success = function (e, t, r) {
          for (var a = M.context || this, n = 0, o = h.length; n < o; n++)
            h[n].apply(a, [e, t, r || X, X]);
        }),
        M.error &&
          ((m = M.error),
          (M.error = function (e, t, r) {
            var a = M.context || this;
            m.apply(a, [e, t, r, X]);
          })),
        M.complete &&
          ((p = M.complete),
          (M.complete = function (e, t) {
            var r = M.context || this;
            p.apply(r, [e, t, X]);
          }));
      var v =
          0 <
          q("input[type=file]:enabled", this).filter(function () {
            return "" !== q(this).val();
          }).length,
        g = "multipart/form-data",
        x = X.attr("enctype") === g || X.attr("encoding") === g,
        y = S.fileapi && S.formdata;
      N("fileAPI :" + y);
      var b,
        T = (v || x) && !y;
      !1 !== M.iframe && (M.iframe || T)
        ? M.closeKeepAlive
          ? q.get(M.closeKeepAlive, function () {
              b = w(l);
            })
          : (b = w(l))
        : (b =
            (v || x) && y
              ? (function (e) {
                  for (var r = new FormData(), t = 0; t < e.length; t++)
                    r.append(e[t].name, e[t].value);
                  if (M.extraData) {
                    var a = (function (e) {
                      var t,
                        r,
                        a = q.param(e, M.traditional).split("&"),
                        n = a.length,
                        o = [];
                      for (t = 0; t < n; t++)
                        (a[t] = a[t].replace(/\+/g, " ")),
                          (r = a[t].split("=")),
                          o.push([
                            decodeURIComponent(r[0]),
                            decodeURIComponent(r[1]),
                          ]);
                      return o;
                    })(M.extraData);
                    for (t = 0; t < a.length; t++)
                      a[t] && r.append(a[t][0], a[t][1]);
                  }
                  M.data = null;
                  var n = q.extend(!0, {}, q.ajaxSettings, M, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: O || "POST",
                  });
                  M.uploadProgress &&
                    (n.xhr = function () {
                      var e = q.ajaxSettings.xhr();
                      return (
                        e.upload &&
                          e.upload.addEventListener(
                            "progress",
                            function (e) {
                              var t = 0,
                                r = e.loaded || e.position,
                                a = e.total;
                              e.lengthComputable &&
                                (t = Math.ceil((r / a) * 100)),
                                M.uploadProgress(e, r, a, t);
                            },
                            !1,
                          ),
                        e
                      );
                    });
                  n.data = null;
                  var o = n.beforeSend;
                  return (
                    (n.beforeSend = function (e, t) {
                      M.formData ? (t.data = M.formData) : (t.data = r),
                        o && o.call(this, e, t);
                    }),
                    q.ajax(n)
                  );
                })(l)
              : q.ajax(M)),
        X.removeData("jqxhr").data("jqxhr", b);
      for (var j = 0; j < C.length; j++) C[j] = null;
      return this.trigger("form-submit-notify", [this, M]), this;
      function w(e) {
        var t,
          r,
          l,
          f,
          o,
          d,
          m,
          p,
          a,
          n,
          h,
          v,
          i = X[0],
          g = q.Deferred();
        if (
          ((g.abort = function (e) {
            p.abort(e);
          }),
          e)
        )
          for (r = 0; r < C.length; r++)
            (t = q(C[r])),
              _ ? t.prop("disabled", !1) : t.removeAttr("disabled");
        ((l = q.extend(!0, {}, q.ajaxSettings, M)).context = l.context || l),
          (o = "jqFormIO" + new Date().getTime());
        var s = i.ownerDocument,
          u = X.closest("body");
        if (
          (l.iframeTarget
            ? (n = (d = q(l.iframeTarget, s)).attr2("name"))
              ? (o = n)
              : d.attr2("name", o)
            : (d = q(
                '<iframe name="' + o + '" src="' + l.iframeSrc + '" />',
                s,
              )).css({ position: "absolute", top: "-1000px", left: "-1000px" }),
          (m = d[0]),
          (p = {
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: "n/a",
            getAllResponseHeaders: function () {},
            getResponseHeader: function () {},
            setRequestHeader: function () {},
            abort: function (e) {
              var t = "timeout" === e ? "timeout" : "aborted";
              N("aborting upload... " + t), (this.aborted = 1);
              try {
                m.contentWindow.document.execCommand &&
                  m.contentWindow.document.execCommand("Stop");
              } catch (e) {}
              d.attr("src", l.iframeSrc),
                (p.error = t),
                l.error && l.error.call(l.context, p, t, e),
                f && q.event.trigger("ajaxError", [p, l, t]),
                l.complete && l.complete.call(l.context, p, t);
            },
          }),
          (f = l.global) && 0 == q.active++ && q.event.trigger("ajaxStart"),
          f && q.event.trigger("ajaxSend", [p, l]),
          l.beforeSend && !1 === l.beforeSend.call(l.context, p, l))
        )
          return l.global && q.active--, g.reject(), g;
        if (p.aborted) return g.reject(), g;
        (a = i.clk) &&
          (n = a.name) &&
          !a.disabled &&
          ((l.extraData = l.extraData || {}),
          (l.extraData[n] = a.value),
          "image" === a.type &&
            ((l.extraData[n + ".x"] = i.clk_x),
            (l.extraData[n + ".y"] = i.clk_y)));
        var x = 1,
          y = 2;
        function b(t) {
          var r = null;
          try {
            t.contentWindow && (r = t.contentWindow.document);
          } catch (e) {
            N("cannot get iframe.contentWindow document: " + e);
          }
          if (r) return r;
          try {
            r = t.contentDocument ? t.contentDocument : t.document;
          } catch (e) {
            N("cannot get iframe.contentDocument: " + e), (r = t.document);
          }
          return r;
        }
        var c = q("meta[name=csrf-token]").attr("content"),
          T = q("meta[name=csrf-param]").attr("content");
        function j() {
          var e = X.attr2("target"),
            t = X.attr2("action"),
            r =
              X.attr("enctype") || X.attr("encoding") || "multipart/form-data";
          i.setAttribute("target", o),
            (O && !/post/i.test(O)) || i.setAttribute("method", "POST"),
            t !== l.url && i.setAttribute("action", l.url),
            l.skipEncodingOverride ||
              (O && !/post/i.test(O)) ||
              X.attr({
                encoding: "multipart/form-data",
                enctype: "multipart/form-data",
              }),
            l.timeout &&
              (v = setTimeout(function () {
                (h = !0), A(x);
              }, l.timeout));
          var a = [];
          try {
            if (l.extraData)
              for (var n in l.extraData)
                l.extraData.hasOwnProperty(n) &&
                  (q.isPlainObject(l.extraData[n]) &&
                  l.extraData[n].hasOwnProperty("name") &&
                  l.extraData[n].hasOwnProperty("value")
                    ? a.push(
                        q(
                          '<input type="hidden" name="' +
                            l.extraData[n].name +
                            '">',
                          s,
                        )
                          .val(l.extraData[n].value)
                          .appendTo(i)[0],
                      )
                    : a.push(
                        q('<input type="hidden" name="' + n + '">', s)
                          .val(l.extraData[n])
                          .appendTo(i)[0],
                      ));
            l.iframeTarget || d.appendTo(u),
              m.attachEvent
                ? m.attachEvent("onload", A)
                : m.addEventListener("load", A, !1),
              setTimeout(function e() {
                try {
                  var t = b(m).readyState;
                  N("state = " + t),
                    t &&
                      "uninitialized" === t.toLowerCase() &&
                      setTimeout(e, 50);
                } catch (e) {
                  N("Server abort: ", e, " (", e.name, ")"),
                    A(y),
                    v && clearTimeout(v),
                    (v = void 0);
                }
              }, 15);
            try {
              i.submit();
            } catch (e) {
              document.createElement("form").submit.apply(i);
            }
          } finally {
            i.setAttribute("action", t),
              i.setAttribute("enctype", r),
              e ? i.setAttribute("target", e) : X.removeAttr("target"),
              q(a).remove();
          }
        }
        T && c && ((l.extraData = l.extraData || {}), (l.extraData[T] = c)),
          l.forceSync ? j() : setTimeout(j, 10);
        var w,
          S,
          k,
          D = 50;
        function A(e) {
          if (!p.aborted && !k) {
            if (
              ((S = b(m)) || (N("cannot access response document"), (e = y)),
              e === x && p)
            )
              return p.abort("timeout"), void g.reject(p, "timeout");
            if (e === y && p)
              return (
                p.abort("server abort"),
                void g.reject(p, "error", "server abort")
              );
            if ((S && S.location.href !== l.iframeSrc) || h) {
              m.detachEvent
                ? m.detachEvent("onload", A)
                : m.removeEventListener("load", A, !1);
              var t,
                r = "success";
              try {
                if (h) throw "timeout";
                var a = "xml" === l.dataType || S.XMLDocument || q.isXMLDoc(S);
                if (
                  (N("isXml=" + a),
                  !a &&
                    window.opera &&
                    (null === S.body || !S.body.innerHTML) &&
                    --D)
                )
                  return (
                    N("requeing onLoad callback, DOM not available"),
                    void setTimeout(A, 250)
                  );
                var n = S.body ? S.body : S.documentElement;
                (p.responseText = n ? n.innerHTML : null),
                  (p.responseXML = S.XMLDocument ? S.XMLDocument : S),
                  a && (l.dataType = "xml"),
                  (p.getResponseHeader = function (e) {
                    return { "content-type": l.dataType }[e.toLowerCase()];
                  }),
                  n &&
                    ((p.status = Number(n.getAttribute("status")) || p.status),
                    (p.statusText =
                      n.getAttribute("statusText") || p.statusText));
                var o,
                  i,
                  s,
                  u = (l.dataType || "").toLowerCase(),
                  c = /(json|script|text)/.test(u);
                c || l.textarea
                  ? (o = S.getElementsByTagName("textarea")[0])
                    ? ((p.responseText = o.value),
                      (p.status = Number(o.getAttribute("status")) || p.status),
                      (p.statusText =
                        o.getAttribute("statusText") || p.statusText))
                    : c &&
                      ((i = S.getElementsByTagName("pre")[0]),
                      (s = S.getElementsByTagName("body")[0]),
                      i
                        ? (p.responseText = i.textContent
                            ? i.textContent
                            : i.innerText)
                        : s &&
                          (p.responseText = s.textContent
                            ? s.textContent
                            : s.innerText))
                  : "xml" === u &&
                    !p.responseXML &&
                    p.responseText &&
                    (p.responseXML = F(p.responseText));
                try {
                  w = E(p, u, l);
                } catch (e) {
                  (r = "parsererror"), (p.error = t = e || r);
                }
              } catch (e) {
                N("error caught: ", e), (r = "error"), (p.error = t = e || r);
              }
              p.aborted && (N("upload aborted"), (r = null)),
                p.status &&
                  (r =
                    (200 <= p.status && p.status < 300) || 304 === p.status
                      ? "success"
                      : "error"),
                "success" === r
                  ? (l.success && l.success.call(l.context, w, "success", p),
                    g.resolve(p.responseText, "success", p),
                    f && q.event.trigger("ajaxSuccess", [p, l]))
                  : r &&
                    (void 0 === t && (t = p.statusText),
                    l.error && l.error.call(l.context, p, r, t),
                    g.reject(p, "error", t),
                    f && q.event.trigger("ajaxError", [p, l, t])),
                f && q.event.trigger("ajaxComplete", [p, l]),
                f && !--q.active && q.event.trigger("ajaxStop"),
                l.complete && l.complete.call(l.context, p, r),
                (k = !0),
                l.timeout && clearTimeout(v),
                setTimeout(function () {
                  l.iframeTarget ? d.attr("src", l.iframeSrc) : d.remove(),
                    (p.responseXML = null);
                }, 100);
            }
          }
        }
        var F =
            q.parseXML ||
            function (e, t) {
              return (
                window.ActiveXObject
                  ? (((t = new ActiveXObject("Microsoft.XMLDOM")).async =
                      "false"),
                    t.loadXML(e))
                  : (t = new DOMParser().parseFromString(e, "text/xml")),
                t &&
                t.documentElement &&
                "parsererror" !== t.documentElement.nodeName
                  ? t
                  : null
              );
            },
          L =
            q.parseJSON ||
            function (e) {
              return window.eval("(" + e + ")");
            },
          E = function (e, t, r) {
            var a = e.getResponseHeader("content-type") || "",
              n = ("xml" === t || !t) && 0 <= a.indexOf("xml"),
              o = n ? e.responseXML : e.responseText;
            return (
              n &&
                "parsererror" === o.documentElement.nodeName &&
                q.error &&
                q.error("parsererror"),
              r && r.dataFilter && (o = r.dataFilter(o, t)),
              "string" == typeof o &&
                (("json" === t || !t) && 0 <= a.indexOf("json")
                  ? (o = L(o))
                  : ("script" === t || !t) &&
                    0 <= a.indexOf("javascript") &&
                    q.globalEval(o)),
              o
            );
          };
        return g;
      }
    }),
    (q.fn.ajaxForm = function (e, t, r, a) {
      if (
        (("string" == typeof e || (!1 === e && 0 < arguments.length)) &&
          ((e = { url: e, data: t, dataType: r }),
          "function" == typeof a && (e.success = a)),
        ((e = e || {}).delegation = e.delegation && q.isFunction(q.fn.on)),
        e.delegation || 0 !== this.length)
      )
        return e.delegation
          ? (q(document)
              .off("submit.form-plugin", this.selector, o)
              .off("click.form-plugin", this.selector, i)
              .on("submit.form-plugin", this.selector, e, o)
              .on("click.form-plugin", this.selector, e, i),
            this)
          : (e.beforeFormUnbind && e.beforeFormUnbind(this, e),
            this.ajaxFormUnbind()
              .on("submit.form-plugin", e, o)
              .on("click.form-plugin", e, i));
      var n = { s: this.selector, c: this.context };
      return (
        !q.isReady && n.s
          ? (N("DOM not ready, queuing ajaxForm"),
            q(function () {
              q(n.s, n.c).ajaxForm(e);
            }))
          : N(
              "terminating; zero elements found by selector" +
                (q.isReady ? "" : " (DOM not ready)"),
            ),
        this
      );
    }),
    (q.fn.ajaxFormUnbind = function () {
      return this.off("submit.form-plugin click.form-plugin");
    }),
    (q.fn.formToArray = function (e, t, r) {
      var a = [];
      if (0 === this.length) return a;
      var n,
        o,
        i,
        s,
        u,
        c,
        l,
        f,
        d,
        m,
        p = this[0],
        h = this.attr("id"),
        v =
          (v =
            e || void 0 === p.elements
              ? p.getElementsByTagName("*")
              : p.elements) && q.makeArray(v);
      if (
        (h &&
          (e || /(Edge|Trident)\//.test(navigator.userAgent)) &&
          (n = q(':input[form="' + h + '"]').get()).length &&
          (v = (v || []).concat(n)),
        !v || !v.length)
      )
        return a;
      for (
        q.isFunction(r) && (v = q.map(v, r)), o = 0, c = v.length;
        o < c;
        o++
      )
        if ((m = (u = v[o]).name) && !u.disabled)
          if (e && p.clk && "image" === u.type)
            p.clk === u &&
              (a.push({ name: m, value: q(u).val(), type: u.type }),
              a.push(
                { name: m + ".x", value: p.clk_x },
                { name: m + ".y", value: p.clk_y },
              ));
          else if ((s = q.fieldValue(u, !0)) && s.constructor === Array)
            for (t && t.push(u), i = 0, l = s.length; i < l; i++)
              a.push({ name: m, value: s[i] });
          else if (S.fileapi && "file" === u.type) {
            t && t.push(u);
            var g = u.files;
            if (g.length)
              for (i = 0; i < g.length; i++)
                a.push({ name: m, value: g[i], type: u.type });
            else a.push({ name: m, value: "", type: u.type });
          } else
            null != s &&
              (t && t.push(u),
              a.push({
                name: m,
                value: s,
                type: u.type,
                required: u.required,
              }));
      return (
        e ||
          !p.clk ||
          ((m = (d = (f = q(p.clk))[0]).name) &&
            !d.disabled &&
            "image" === d.type &&
            (a.push({ name: m, value: f.val() }),
            a.push(
              { name: m + ".x", value: p.clk_x },
              { name: m + ".y", value: p.clk_y },
            ))),
        a
      );
    }),
    (q.fn.formSerialize = function (e) {
      return q.param(this.formToArray(e));
    }),
    (q.fn.fieldSerialize = function (n) {
      var o = [];
      return (
        this.each(function () {
          var e = this.name;
          if (e) {
            var t = q.fieldValue(this, n);
            if (t && t.constructor === Array)
              for (var r = 0, a = t.length; r < a; r++)
                o.push({ name: e, value: t[r] });
            else null != t && o.push({ name: this.name, value: t });
          }
        }),
        q.param(o)
      );
    }),
    (q.fn.fieldValue = function (e) {
      for (var t = [], r = 0, a = this.length; r < a; r++) {
        var n = this[r],
          o = q.fieldValue(n, e);
        null == o ||
          (o.constructor === Array && !o.length) ||
          (o.constructor === Array ? q.merge(t, o) : t.push(o));
      }
      return t;
    }),
    (q.fieldValue = function (e, t) {
      var r = e.name,
        a = e.type,
        n = e.tagName.toLowerCase();
      if (
        (void 0 === t && (t = !0),
        t &&
          (!r ||
            e.disabled ||
            "reset" === a ||
            "button" === a ||
            (("checkbox" === a || "radio" === a) && !e.checked) ||
            (("submit" === a || "image" === a) && e.form && e.form.clk !== e) ||
            ("select" === n && -1 === e.selectedIndex)))
      )
        return null;
      if ("select" !== n) return q(e).val().replace(m, "\r\n");
      var o = e.selectedIndex;
      if (o < 0) return null;
      for (
        var i = [],
          s = e.options,
          u = "select-one" === a,
          c = u ? o + 1 : s.length,
          l = u ? o : 0;
        l < c;
        l++
      ) {
        var f = s[l];
        if (f.selected && !f.disabled) {
          var d =
            (d = f.value) ||
            (f.attributes && f.attributes.value && !f.attributes.value.specified
              ? f.text
              : f.value);
          if (u) return d;
          i.push(d);
        }
      }
      return i;
    }),
    (q.fn.clearForm = function (e) {
      return this.each(function () {
        q("input,select,textarea", this).clearFields(e);
      });
    }),
    (q.fn.clearFields = q.fn.clearInputs =
      function (r) {
        var a =
          /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
          var e = this.type,
            t = this.tagName.toLowerCase();
          a.test(e) || "textarea" === t
            ? (this.value = "")
            : "checkbox" === e || "radio" === e
              ? (this.checked = !1)
              : "select" === t
                ? (this.selectedIndex = -1)
                : "file" === e
                  ? /MSIE/.test(navigator.userAgent)
                    ? q(this).replaceWith(q(this).clone(!0))
                    : q(this).val("")
                  : r &&
                    ((!0 === r && /hidden/.test(e)) ||
                      ("string" == typeof r && q(this).is(r))) &&
                    (this.value = "");
        });
      }),
    (q.fn.resetForm = function () {
      return this.each(function () {
        var t = q(this),
          e = this.tagName.toLowerCase();
        switch (e) {
          case "input":
            this.checked = this.defaultChecked;
          case "textarea":
            return (this.value = this.defaultValue), !0;
          case "option":
          case "optgroup":
            var r = t.parents("select");
            return (
              r.length && r[0].multiple
                ? "option" === e
                  ? (this.selected = this.defaultSelected)
                  : t.find("option").resetForm()
                : r.resetForm(),
              !0
            );
          case "select":
            return (
              t.find("option").each(function (e) {
                if (
                  ((this.selected = this.defaultSelected),
                  this.defaultSelected && !t[0].multiple)
                )
                  return (t[0].selectedIndex = e), !1;
              }),
              !0
            );
          case "label":
            var a = q(t.attr("for")),
              n = t.find("input,select,textarea");
            return a[0] && n.unshift(a[0]), n.resetForm(), !0;
          case "form":
            return (
              ("function" != typeof this.reset &&
                ("object" != typeof this.reset || this.reset.nodeType)) ||
                this.reset(),
              !0
            );
          default:
            return t.find("form,input,label,select,textarea").resetForm(), !0;
        }
      });
    }),
    (q.fn.enable = function (e) {
      return (
        void 0 === e && (e = !0),
        this.each(function () {
          this.disabled = !e;
        })
      );
    }),
    (q.fn.selected = function (r) {
      return (
        void 0 === r && (r = !0),
        this.each(function () {
          var e,
            t = this.type;
          "checkbox" === t || "radio" === t
            ? (this.checked = r)
            : "option" === this.tagName.toLowerCase() &&
              ((e = q(this).parent("select")),
              r &&
                e[0] &&
                "select-one" === e[0].type &&
                e.find("option").selected(!1),
              (this.selected = r));
        })
      );
    }),
    (q.fn.ajaxSubmit.debug = !1);
});

/**
 * @file
 * JavaScript behaviors for options elements.
 */

(function ($, Drupal) {
  "use strict";

  /**
   * Attach handlers to options buttons element.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformOptionsButtons = {
    attach: function (context) {
      // Place <input> inside of <label> before the label.
      $(context)
        .find(
          'label.webform-options-display-buttons-label > input[type="checkbox"], label.webform-options-display-buttons-label > input[type="radio"]',
        )
        .each(function () {
          var $input = $(this);
          var $label = $input.parent();
          $input.detach().insertBefore($label);
        });
    },
  };
})(jQuery, Drupal);
/**
 * @file
 * JavaScript behaviors for checkboxes.
 */

(function ($, Drupal) {
  "use strict";

  /**
   * Adds check all or none checkboxes support.
   *
   * @type {Drupal~behavior}
   *
   * @see https://www.drupal.org/project/webform/issues/3068998
   */
  Drupal.behaviors.webformCheckboxesAllorNone = {
    attach: function (context) {
      $("[data-options-all], [data-options-none]", context)
        .once("webform-checkboxes-all-or-none")
        .each(function () {
          var $element = $(this);

          var options_all_value = $element.data("options-all");
          var options_none_value = $element.data("options-none");

          // Get all checkboxes.
          var $checkboxes = $element.find('input[type="checkbox"]');

          // Get all options/checkboxes.
          var $options = $checkboxes
            .not('[value="' + options_all_value + '"]')
            .not('[value="' + options_none_value + '"]');

          // Get options all and none checkboxes.
          var $options_all = $element.find(
            ':checkbox[value="' + options_all_value + '"]',
          );
          var $options_none = $element.find(
            ':checkbox[value="' + options_none_value + '"]',
          );

          // All of the above.
          if ($options_all.length) {
            $options_all.on("click", toggleCheckAllEventHandler);
            if ($options_all.prop("checked")) {
              toggleCheckAllEventHandler();
            }
          }

          // None of the above.
          if ($options_none.length) {
            $options_none.on("click", toggleCheckNoneEventHandler);
            toggleCheckNoneEventHandler();
          }

          $options.on("click", toggleCheckboxesEventHandler);
          toggleCheckboxesEventHandler();

          /**
           * Toggle check all checkbox checked state.
           */
          function toggleCheckAllEventHandler() {
            if ($options_all.prop("checked")) {
              // Uncheck options none.
              if ($options_none.is(":checked")) {
                $options_none
                  .prop("checked", false)
                  .trigger("change", ["webform.states"]);
              }
              // Check check all unchecked options.
              $options
                .not(":checked")
                .prop("checked", true)
                .trigger("change", ["webform.states"]);
            } else {
              // Check uncheck all checked options.
              $options
                .filter(":checked")
                .prop("checked", false)
                .trigger("change", ["webform.states"]);
            }
          }

          /**
           * Toggle check none checkbox checked state.
           */
          function toggleCheckNoneEventHandler() {
            if ($options_none.prop("checked")) {
              $checkboxes
                .not('[value="' + options_none_value + '"]')
                .filter(":checked")
                .prop("checked", false)
                .trigger("change", ["webform.states"]);
            }
          }

          /**
           * Toggle check all checkbox checked state.
           */
          function toggleCheckboxesEventHandler() {
            var isAllChecked =
              $options.filter(":checked").length === $options.length;
            if (
              $options_all.length &&
              $options_all.prop("checked") !== isAllChecked
            ) {
              $options_all
                .prop("checked", isAllChecked)
                .trigger("change", ["webform.states"]);
            }
            var isOneChecked = $options.is(":checked");
            if ($options_none.length && isOneChecked) {
              $options_none
                .prop("checked", false)
                .trigger("change", ["webform.states"]);
            }
          }
        });
    },
  };
})(jQuery, Drupal);
/**
 * @popperjs/core v2.11.5 - MIT License
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(
          ((e =
            "undefined" != typeof globalThis ? globalThis : e || self).Popper =
            {}),
        );
})(this, function (e) {
  "use strict";
  function t(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function n(e) {
    return e instanceof t(e).Element || e instanceof Element;
  }
  function r(e) {
    return e instanceof t(e).HTMLElement || e instanceof HTMLElement;
  }
  function o(e) {
    return (
      "undefined" != typeof ShadowRoot &&
      (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  var i = Math.max,
    a = Math.min,
    s = Math.round;
  function f(e, t) {
    void 0 === t && (t = !1);
    var n = e.getBoundingClientRect(),
      o = 1,
      i = 1;
    if (r(e) && t) {
      var a = e.offsetHeight,
        f = e.offsetWidth;
      f > 0 && (o = s(n.width) / f || 1), a > 0 && (i = s(n.height) / a || 1);
    }
    return {
      width: n.width / o,
      height: n.height / i,
      top: n.top / i,
      right: n.right / o,
      bottom: n.bottom / i,
      left: n.left / o,
      x: n.left / o,
      y: n.top / i,
    };
  }
  function c(e) {
    var n = t(e);
    return { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
  }
  function p(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function u(e) {
    return ((n(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function l(e) {
    return f(u(e)).left + c(e).scrollLeft;
  }
  function d(e) {
    return t(e).getComputedStyle(e);
  }
  function h(e) {
    var t = d(e),
      n = t.overflow,
      r = t.overflowX,
      o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r);
  }
  function m(e, n, o) {
    void 0 === o && (o = !1);
    var i,
      a,
      d = r(n),
      m =
        r(n) &&
        (function (e) {
          var t = e.getBoundingClientRect(),
            n = s(t.width) / e.offsetWidth || 1,
            r = s(t.height) / e.offsetHeight || 1;
          return 1 !== n || 1 !== r;
        })(n),
      v = u(n),
      g = f(e, m),
      y = { scrollLeft: 0, scrollTop: 0 },
      b = { x: 0, y: 0 };
    return (
      (d || (!d && !o)) &&
        (("body" !== p(n) || h(v)) &&
          (y =
            (i = n) !== t(i) && r(i)
              ? { scrollLeft: (a = i).scrollLeft, scrollTop: a.scrollTop }
              : c(i)),
        r(n)
          ? (((b = f(n, !0)).x += n.clientLeft), (b.y += n.clientTop))
          : v && (b.x = l(v))),
      {
        x: g.left + y.scrollLeft - b.x,
        y: g.top + y.scrollTop - b.y,
        width: g.width,
        height: g.height,
      }
    );
  }
  function v(e) {
    var t = f(e),
      n = e.offsetWidth,
      r = e.offsetHeight;
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    );
  }
  function g(e) {
    return "html" === p(e)
      ? e
      : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || u(e);
  }
  function y(e) {
    return ["html", "body", "#document"].indexOf(p(e)) >= 0
      ? e.ownerDocument.body
      : r(e) && h(e)
        ? e
        : y(g(e));
  }
  function b(e, n) {
    var r;
    void 0 === n && (n = []);
    var o = y(e),
      i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
      a = t(o),
      s = i ? [a].concat(a.visualViewport || [], h(o) ? o : []) : o,
      f = n.concat(s);
    return i ? f : f.concat(b(g(s)));
  }
  function x(e) {
    return ["table", "td", "th"].indexOf(p(e)) >= 0;
  }
  function w(e) {
    return r(e) && "fixed" !== d(e).position ? e.offsetParent : null;
  }
  function O(e) {
    for (var n = t(e), i = w(e); i && x(i) && "static" === d(i).position; )
      i = w(i);
    return i &&
      ("html" === p(i) || ("body" === p(i) && "static" === d(i).position))
      ? n
      : i ||
          (function (e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              r(e) &&
              "fixed" === d(e).position
            )
              return null;
            var n = g(e);
            for (
              o(n) && (n = n.host);
              r(n) && ["html", "body"].indexOf(p(n)) < 0;

            ) {
              var i = d(n);
              if (
                "none" !== i.transform ||
                "none" !== i.perspective ||
                "paint" === i.contain ||
                -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                (t && "filter" === i.willChange) ||
                (t && i.filter && "none" !== i.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(e) ||
          n;
  }
  var j = "top",
    E = "bottom",
    D = "right",
    A = "left",
    L = "auto",
    P = [j, E, D, A],
    M = "start",
    k = "end",
    W = "viewport",
    B = "popper",
    H = P.reduce(function (e, t) {
      return e.concat([t + "-" + M, t + "-" + k]);
    }, []),
    T = [].concat(P, [L]).reduce(function (e, t) {
      return e.concat([t, t + "-" + M, t + "-" + k]);
    }, []),
    R = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function S(e) {
    var t = new Map(),
      n = new Set(),
      r = [];
    function o(e) {
      n.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach(function (e) {
            if (!n.has(e)) {
              var r = t.get(e);
              r && o(r);
            }
          }),
        r.push(e);
    }
    return (
      e.forEach(function (e) {
        t.set(e.name, e);
      }),
      e.forEach(function (e) {
        n.has(e.name) || o(e);
      }),
      r
    );
  }
  function C(e) {
    return e.split("-")[0];
  }
  function q(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && o(n)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }
    return !1;
  }
  function V(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function N(e, r) {
    return r === W
      ? V(
          (function (e) {
            var n = t(e),
              r = u(e),
              o = n.visualViewport,
              i = r.clientWidth,
              a = r.clientHeight,
              s = 0,
              f = 0;
            return (
              o &&
                ((i = o.width),
                (a = o.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((s = o.offsetLeft), (f = o.offsetTop))),
              { width: i, height: a, x: s + l(e), y: f }
            );
          })(e),
        )
      : n(r)
        ? (function (e) {
            var t = f(e);
            return (
              (t.top = t.top + e.clientTop),
              (t.left = t.left + e.clientLeft),
              (t.bottom = t.top + e.clientHeight),
              (t.right = t.left + e.clientWidth),
              (t.width = e.clientWidth),
              (t.height = e.clientHeight),
              (t.x = t.left),
              (t.y = t.top),
              t
            );
          })(r)
        : V(
            (function (e) {
              var t,
                n = u(e),
                r = c(e),
                o = null == (t = e.ownerDocument) ? void 0 : t.body,
                a = i(
                  n.scrollWidth,
                  n.clientWidth,
                  o ? o.scrollWidth : 0,
                  o ? o.clientWidth : 0,
                ),
                s = i(
                  n.scrollHeight,
                  n.clientHeight,
                  o ? o.scrollHeight : 0,
                  o ? o.clientHeight : 0,
                ),
                f = -r.scrollLeft + l(e),
                p = -r.scrollTop;
              return (
                "rtl" === d(o || n).direction &&
                  (f += i(n.clientWidth, o ? o.clientWidth : 0) - a),
                { width: a, height: s, x: f, y: p }
              );
            })(u(e)),
          );
  }
  function I(e, t, o) {
    var s =
        "clippingParents" === t
          ? (function (e) {
              var t = b(g(e)),
                o =
                  ["absolute", "fixed"].indexOf(d(e).position) >= 0 && r(e)
                    ? O(e)
                    : e;
              return n(o)
                ? t.filter(function (e) {
                    return n(e) && q(e, o) && "body" !== p(e);
                  })
                : [];
            })(e)
          : [].concat(t),
      f = [].concat(s, [o]),
      c = f[0],
      u = f.reduce(
        function (t, n) {
          var r = N(e, n);
          return (
            (t.top = i(r.top, t.top)),
            (t.right = a(r.right, t.right)),
            (t.bottom = a(r.bottom, t.bottom)),
            (t.left = i(r.left, t.left)),
            t
          );
        },
        N(e, c),
      );
    return (
      (u.width = u.right - u.left),
      (u.height = u.bottom - u.top),
      (u.x = u.left),
      (u.y = u.top),
      u
    );
  }
  function _(e) {
    return e.split("-")[1];
  }
  function F(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function U(e) {
    var t,
      n = e.reference,
      r = e.element,
      o = e.placement,
      i = o ? C(o) : null,
      a = o ? _(o) : null,
      s = n.x + n.width / 2 - r.width / 2,
      f = n.y + n.height / 2 - r.height / 2;
    switch (i) {
      case j:
        t = { x: s, y: n.y - r.height };
        break;
      case E:
        t = { x: s, y: n.y + n.height };
        break;
      case D:
        t = { x: n.x + n.width, y: f };
        break;
      case A:
        t = { x: n.x - r.width, y: f };
        break;
      default:
        t = { x: n.x, y: n.y };
    }
    var c = i ? F(i) : null;
    if (null != c) {
      var p = "y" === c ? "height" : "width";
      switch (a) {
        case M:
          t[c] = t[c] - (n[p] / 2 - r[p] / 2);
          break;
        case k:
          t[c] = t[c] + (n[p] / 2 - r[p] / 2);
      }
    }
    return t;
  }
  function z(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
  }
  function X(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t;
    }, {});
  }
  function Y(e, t) {
    void 0 === t && (t = {});
    var r = t,
      o = r.placement,
      i = void 0 === o ? e.placement : o,
      a = r.boundary,
      s = void 0 === a ? "clippingParents" : a,
      c = r.rootBoundary,
      p = void 0 === c ? W : c,
      l = r.elementContext,
      d = void 0 === l ? B : l,
      h = r.altBoundary,
      m = void 0 !== h && h,
      v = r.padding,
      g = void 0 === v ? 0 : v,
      y = z("number" != typeof g ? g : X(g, P)),
      b = d === B ? "reference" : B,
      x = e.rects.popper,
      w = e.elements[m ? b : d],
      O = I(n(w) ? w : w.contextElement || u(e.elements.popper), s, p),
      A = f(e.elements.reference),
      L = U({ reference: A, element: x, strategy: "absolute", placement: i }),
      M = V(Object.assign({}, x, L)),
      k = d === B ? M : A,
      H = {
        top: O.top - k.top + y.top,
        bottom: k.bottom - O.bottom + y.bottom,
        left: O.left - k.left + y.left,
        right: k.right - O.right + y.right,
      },
      T = e.modifiersData.offset;
    if (d === B && T) {
      var R = T[i];
      Object.keys(H).forEach(function (e) {
        var t = [D, E].indexOf(e) >= 0 ? 1 : -1,
          n = [j, E].indexOf(e) >= 0 ? "y" : "x";
        H[e] += R[n] * t;
      });
    }
    return H;
  }
  var G = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function J() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function K(e) {
    void 0 === e && (e = {});
    var t = e,
      r = t.defaultModifiers,
      o = void 0 === r ? [] : r,
      i = t.defaultOptions,
      a = void 0 === i ? G : i;
    return function (e, t, r) {
      void 0 === r && (r = a);
      var i,
        s,
        f = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, G, a),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        c = [],
        p = !1,
        u = {
          state: f,
          setOptions: function (r) {
            var i = "function" == typeof r ? r(f.options) : r;
            l(),
              (f.options = Object.assign({}, a, f.options, i)),
              (f.scrollParents = {
                reference: n(e)
                  ? b(e)
                  : e.contextElement
                    ? b(e.contextElement)
                    : [],
                popper: b(t),
              });
            var s,
              p,
              d = (function (e) {
                var t = S(e);
                return R.reduce(function (e, n) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === n;
                    }),
                  );
                }, []);
              })(
                ((s = [].concat(o, f.options.modifiers)),
                (p = s.reduce(function (e, t) {
                  var n = e[t.name];
                  return (
                    (e[t.name] = n
                      ? Object.assign({}, n, t, {
                          options: Object.assign({}, n.options, t.options),
                          data: Object.assign({}, n.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {})),
                Object.keys(p).map(function (e) {
                  return p[e];
                })),
              );
            return (
              (f.orderedModifiers = d.filter(function (e) {
                return e.enabled;
              })),
              f.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options,
                  r = void 0 === n ? {} : n,
                  o = e.effect;
                if ("function" == typeof o) {
                  var i = o({ state: f, name: t, instance: u, options: r }),
                    a = function () {};
                  c.push(i || a);
                }
              }),
              u.update()
            );
          },
          forceUpdate: function () {
            if (!p) {
              var e = f.elements,
                t = e.reference,
                n = e.popper;
              if (J(t, n)) {
                (f.rects = {
                  reference: m(t, O(n), "fixed" === f.options.strategy),
                  popper: v(n),
                }),
                  (f.reset = !1),
                  (f.placement = f.options.placement),
                  f.orderedModifiers.forEach(function (e) {
                    return (f.modifiersData[e.name] = Object.assign(
                      {},
                      e.data,
                    ));
                  });
                for (var r = 0; r < f.orderedModifiers.length; r++)
                  if (!0 !== f.reset) {
                    var o = f.orderedModifiers[r],
                      i = o.fn,
                      a = o.options,
                      s = void 0 === a ? {} : a,
                      c = o.name;
                    "function" == typeof i &&
                      (f =
                        i({ state: f, options: s, name: c, instance: u }) || f);
                  } else (f.reset = !1), (r = -1);
              }
            }
          },
          update:
            ((i = function () {
              return new Promise(function (e) {
                u.forceUpdate(), e(f);
              });
            }),
            function () {
              return (
                s ||
                  (s = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (s = void 0), e(i());
                    });
                  })),
                s
              );
            }),
          destroy: function () {
            l(), (p = !0);
          },
        };
      if (!J(e, t)) return u;
      function l() {
        c.forEach(function (e) {
          return e();
        }),
          (c = []);
      }
      return (
        u.setOptions(r).then(function (e) {
          !p && r.onFirstUpdate && r.onFirstUpdate(e);
        }),
        u
      );
    };
  }
  var Q = { passive: !0 };
  var Z = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (e) {
      var n = e.state,
        r = e.instance,
        o = e.options,
        i = o.scroll,
        a = void 0 === i || i,
        s = o.resize,
        f = void 0 === s || s,
        c = t(n.elements.popper),
        p = [].concat(n.scrollParents.reference, n.scrollParents.popper);
      return (
        a &&
          p.forEach(function (e) {
            e.addEventListener("scroll", r.update, Q);
          }),
        f && c.addEventListener("resize", r.update, Q),
        function () {
          a &&
            p.forEach(function (e) {
              e.removeEventListener("scroll", r.update, Q);
            }),
            f && c.removeEventListener("resize", r.update, Q);
        }
      );
    },
    data: {},
  };
  var $ = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (e) {
        var t = e.state,
          n = e.name;
        t.modifiersData[n] = U({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement,
        });
      },
      data: {},
    },
    ee = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function te(e) {
    var n,
      r = e.popper,
      o = e.popperRect,
      i = e.placement,
      a = e.variation,
      f = e.offsets,
      c = e.position,
      p = e.gpuAcceleration,
      l = e.adaptive,
      h = e.roundOffsets,
      m = e.isFixed,
      v = f.x,
      g = void 0 === v ? 0 : v,
      y = f.y,
      b = void 0 === y ? 0 : y,
      x = "function" == typeof h ? h({ x: g, y: b }) : { x: g, y: b };
    (g = x.x), (b = x.y);
    var w = f.hasOwnProperty("x"),
      L = f.hasOwnProperty("y"),
      P = A,
      M = j,
      W = window;
    if (l) {
      var B = O(r),
        H = "clientHeight",
        T = "clientWidth";
      if (
        (B === t(r) &&
          "static" !== d((B = u(r))).position &&
          "absolute" === c &&
          ((H = "scrollHeight"), (T = "scrollWidth")),
        (B = B),
        i === j || ((i === A || i === D) && a === k))
      )
        (M = E),
          (b -=
            (m && B === W && W.visualViewport
              ? W.visualViewport.height
              : B[H]) - o.height),
          (b *= p ? 1 : -1);
      if (i === A || ((i === j || i === E) && a === k))
        (P = D),
          (g -=
            (m && B === W && W.visualViewport ? W.visualViewport.width : B[T]) -
            o.width),
          (g *= p ? 1 : -1);
    }
    var R,
      S = Object.assign({ position: c }, l && ee),
      C =
        !0 === h
          ? (function (e) {
              var t = e.x,
                n = e.y,
                r = window.devicePixelRatio || 1;
              return { x: s(t * r) / r || 0, y: s(n * r) / r || 0 };
            })({ x: g, y: b })
          : { x: g, y: b };
    return (
      (g = C.x),
      (b = C.y),
      p
        ? Object.assign(
            {},
            S,
            (((R = {})[M] = L ? "0" : ""),
            (R[P] = w ? "0" : ""),
            (R.transform =
              (W.devicePixelRatio || 1) <= 1
                ? "translate(" + g + "px, " + b + "px)"
                : "translate3d(" + g + "px, " + b + "px, 0)"),
            R),
          )
        : Object.assign(
            {},
            S,
            (((n = {})[M] = L ? b + "px" : ""),
            (n[P] = w ? g + "px" : ""),
            (n.transform = ""),
            n),
          )
    );
  }
  var ne = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = n.gpuAcceleration,
        o = void 0 === r || r,
        i = n.adaptive,
        a = void 0 === i || i,
        s = n.roundOffsets,
        f = void 0 === s || s,
        c = {
          placement: C(t.placement),
          variation: _(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: o,
          isFixed: "fixed" === t.options.strategy,
        };
      null != t.modifiersData.popperOffsets &&
        (t.styles.popper = Object.assign(
          {},
          t.styles.popper,
          te(
            Object.assign({}, c, {
              offsets: t.modifiersData.popperOffsets,
              position: t.options.strategy,
              adaptive: a,
              roundOffsets: f,
            }),
          ),
        )),
        null != t.modifiersData.arrow &&
          (t.styles.arrow = Object.assign(
            {},
            t.styles.arrow,
            te(
              Object.assign({}, c, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: f,
              }),
            ),
          )),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-placement": t.placement,
        }));
    },
    data: {},
  };
  var re = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var n = t.styles[e] || {},
          o = t.attributes[e] || {},
          i = t.elements[e];
        r(i) &&
          p(i) &&
          (Object.assign(i.style, n),
          Object.keys(o).forEach(function (e) {
            var t = o[e];
            !1 === t
              ? i.removeAttribute(e)
              : i.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function (e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(t.elements.popper.style, n.popper),
        (t.styles = n),
        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function () {
          Object.keys(t.elements).forEach(function (e) {
            var o = t.elements[e],
              i = t.attributes[e] || {},
              a = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e],
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            r(o) &&
              p(o) &&
              (Object.assign(o.style, a),
              Object.keys(i).forEach(function (e) {
                o.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  var oe = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          n = e.options,
          r = e.name,
          o = n.offset,
          i = void 0 === o ? [0, 0] : o,
          a = T.reduce(function (e, n) {
            return (
              (e[n] = (function (e, t, n) {
                var r = C(e),
                  o = [A, j].indexOf(r) >= 0 ? -1 : 1,
                  i =
                    "function" == typeof n
                      ? n(Object.assign({}, t, { placement: e }))
                      : n,
                  a = i[0],
                  s = i[1];
                return (
                  (a = a || 0),
                  (s = (s || 0) * o),
                  [A, D].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                );
              })(n, t.rects, i)),
              e
            );
          }, {}),
          s = a[t.placement],
          f = s.x,
          c = s.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += f),
          (t.modifiersData.popperOffsets.y += c)),
          (t.modifiersData[r] = a);
      },
    },
    ie = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ae(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return ie[e];
    });
  }
  var se = { start: "end", end: "start" };
  function fe(e) {
    return e.replace(/start|end/g, function (e) {
      return se[e];
    });
  }
  function ce(e, t) {
    void 0 === t && (t = {});
    var n = t,
      r = n.placement,
      o = n.boundary,
      i = n.rootBoundary,
      a = n.padding,
      s = n.flipVariations,
      f = n.allowedAutoPlacements,
      c = void 0 === f ? T : f,
      p = _(r),
      u = p
        ? s
          ? H
          : H.filter(function (e) {
              return _(e) === p;
            })
        : P,
      l = u.filter(function (e) {
        return c.indexOf(e) >= 0;
      });
    0 === l.length && (l = u);
    var d = l.reduce(function (t, n) {
      return (
        (t[n] = Y(e, {
          placement: n,
          boundary: o,
          rootBoundary: i,
          padding: a,
        })[C(n)]),
        t
      );
    }, {});
    return Object.keys(d).sort(function (e, t) {
      return d[e] - d[t];
    });
  }
  var pe = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name;
      if (!t.modifiersData[r]._skip) {
        for (
          var o = n.mainAxis,
            i = void 0 === o || o,
            a = n.altAxis,
            s = void 0 === a || a,
            f = n.fallbackPlacements,
            c = n.padding,
            p = n.boundary,
            u = n.rootBoundary,
            l = n.altBoundary,
            d = n.flipVariations,
            h = void 0 === d || d,
            m = n.allowedAutoPlacements,
            v = t.options.placement,
            g = C(v),
            y =
              f ||
              (g === v || !h
                ? [ae(v)]
                : (function (e) {
                    if (C(e) === L) return [];
                    var t = ae(e);
                    return [fe(e), t, fe(t)];
                  })(v)),
            b = [v].concat(y).reduce(function (e, n) {
              return e.concat(
                C(n) === L
                  ? ce(t, {
                      placement: n,
                      boundary: p,
                      rootBoundary: u,
                      padding: c,
                      flipVariations: h,
                      allowedAutoPlacements: m,
                    })
                  : n,
              );
            }, []),
            x = t.rects.reference,
            w = t.rects.popper,
            O = new Map(),
            P = !0,
            k = b[0],
            W = 0;
          W < b.length;
          W++
        ) {
          var B = b[W],
            H = C(B),
            T = _(B) === M,
            R = [j, E].indexOf(H) >= 0,
            S = R ? "width" : "height",
            q = Y(t, {
              placement: B,
              boundary: p,
              rootBoundary: u,
              altBoundary: l,
              padding: c,
            }),
            V = R ? (T ? D : A) : T ? E : j;
          x[S] > w[S] && (V = ae(V));
          var N = ae(V),
            I = [];
          if (
            (i && I.push(q[H] <= 0),
            s && I.push(q[V] <= 0, q[N] <= 0),
            I.every(function (e) {
              return e;
            }))
          ) {
            (k = B), (P = !1);
            break;
          }
          O.set(B, I);
        }
        if (P)
          for (
            var F = function (e) {
                var t = b.find(function (t) {
                  var n = O.get(t);
                  if (n)
                    return n.slice(0, e).every(function (e) {
                      return e;
                    });
                });
                if (t) return (k = t), "break";
              },
              U = h ? 3 : 1;
            U > 0;
            U--
          ) {
            if ("break" === F(U)) break;
          }
        t.placement !== k &&
          ((t.modifiersData[r]._skip = !0), (t.placement = k), (t.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function ue(e, t, n) {
    return i(e, a(t, n));
  }
  var le = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name,
        o = n.mainAxis,
        s = void 0 === o || o,
        f = n.altAxis,
        c = void 0 !== f && f,
        p = n.boundary,
        u = n.rootBoundary,
        l = n.altBoundary,
        d = n.padding,
        h = n.tether,
        m = void 0 === h || h,
        g = n.tetherOffset,
        y = void 0 === g ? 0 : g,
        b = Y(t, { boundary: p, rootBoundary: u, padding: d, altBoundary: l }),
        x = C(t.placement),
        w = _(t.placement),
        L = !w,
        P = F(x),
        k = "x" === P ? "y" : "x",
        W = t.modifiersData.popperOffsets,
        B = t.rects.reference,
        H = t.rects.popper,
        T =
          "function" == typeof y
            ? y(Object.assign({}, t.rects, { placement: t.placement }))
            : y,
        R =
          "number" == typeof T
            ? { mainAxis: T, altAxis: T }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
        S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        q = { x: 0, y: 0 };
      if (W) {
        if (s) {
          var V,
            N = "y" === P ? j : A,
            I = "y" === P ? E : D,
            U = "y" === P ? "height" : "width",
            z = W[P],
            X = z + b[N],
            G = z - b[I],
            J = m ? -H[U] / 2 : 0,
            K = w === M ? B[U] : H[U],
            Q = w === M ? -H[U] : -B[U],
            Z = t.elements.arrow,
            $ = m && Z ? v(Z) : { width: 0, height: 0 },
            ee = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            te = ee[N],
            ne = ee[I],
            re = ue(0, B[U], $[U]),
            oe = L
              ? B[U] / 2 - J - re - te - R.mainAxis
              : K - re - te - R.mainAxis,
            ie = L
              ? -B[U] / 2 + J + re + ne + R.mainAxis
              : Q + re + ne + R.mainAxis,
            ae = t.elements.arrow && O(t.elements.arrow),
            se = ae ? ("y" === P ? ae.clientTop || 0 : ae.clientLeft || 0) : 0,
            fe = null != (V = null == S ? void 0 : S[P]) ? V : 0,
            ce = z + ie - fe,
            pe = ue(m ? a(X, z + oe - fe - se) : X, z, m ? i(G, ce) : G);
          (W[P] = pe), (q[P] = pe - z);
        }
        if (c) {
          var le,
            de = "x" === P ? j : A,
            he = "x" === P ? E : D,
            me = W[k],
            ve = "y" === k ? "height" : "width",
            ge = me + b[de],
            ye = me - b[he],
            be = -1 !== [j, A].indexOf(x),
            xe = null != (le = null == S ? void 0 : S[k]) ? le : 0,
            we = be ? ge : me - B[ve] - H[ve] - xe + R.altAxis,
            Oe = be ? me + B[ve] + H[ve] - xe - R.altAxis : ye,
            je =
              m && be
                ? (function (e, t, n) {
                    var r = ue(e, t, n);
                    return r > n ? n : r;
                  })(we, me, Oe)
                : ue(m ? we : ge, me, m ? Oe : ye);
          (W[k] = je), (q[k] = je - me);
        }
        t.modifiersData[r] = q;
      }
    },
    requiresIfExists: ["offset"],
  };
  var de = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t,
        n = e.state,
        r = e.name,
        o = e.options,
        i = n.elements.arrow,
        a = n.modifiersData.popperOffsets,
        s = C(n.placement),
        f = F(s),
        c = [A, D].indexOf(s) >= 0 ? "height" : "width";
      if (i && a) {
        var p = (function (e, t) {
            return z(
              "number" !=
                typeof (e =
                  "function" == typeof e
                    ? e(Object.assign({}, t.rects, { placement: t.placement }))
                    : e)
                ? e
                : X(e, P),
            );
          })(o.padding, n),
          u = v(i),
          l = "y" === f ? j : A,
          d = "y" === f ? E : D,
          h =
            n.rects.reference[c] +
            n.rects.reference[f] -
            a[f] -
            n.rects.popper[c],
          m = a[f] - n.rects.reference[f],
          g = O(i),
          y = g ? ("y" === f ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
          b = h / 2 - m / 2,
          x = p[l],
          w = y - u[c] - p[d],
          L = y / 2 - u[c] / 2 + b,
          M = ue(x, L, w),
          k = f;
        n.modifiersData[r] = (((t = {})[k] = M), (t.centerOffset = M - L), t);
      }
    },
    effect: function (e) {
      var t = e.state,
        n = e.options.element,
        r = void 0 === n ? "[data-popper-arrow]" : n;
      null != r &&
        ("string" != typeof r || (r = t.elements.popper.querySelector(r))) &&
        q(t.elements.popper, r) &&
        (t.elements.arrow = r);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function he(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function me(e) {
    return [j, D, E, A].some(function (t) {
      return e[t] >= 0;
    });
  }
  var ve = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state,
          n = e.name,
          r = t.rects.reference,
          o = t.rects.popper,
          i = t.modifiersData.preventOverflow,
          a = Y(t, { elementContext: "reference" }),
          s = Y(t, { altBoundary: !0 }),
          f = he(a, r),
          c = he(s, o, i),
          p = me(f),
          u = me(c);
        (t.modifiersData[n] = {
          referenceClippingOffsets: f,
          popperEscapeOffsets: c,
          isReferenceHidden: p,
          hasPopperEscaped: u,
        }),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": p,
            "data-popper-escaped": u,
          }));
      },
    },
    ge = K({ defaultModifiers: [Z, $, ne, re] }),
    ye = [Z, $, ne, re, oe, pe, le, de, ve],
    be = K({ defaultModifiers: ye });
  (e.applyStyles = re),
    (e.arrow = de),
    (e.computeStyles = ne),
    (e.createPopper = be),
    (e.createPopperLite = ge),
    (e.defaultModifiers = ye),
    (e.detectOverflow = Y),
    (e.eventListeners = Z),
    (e.flip = pe),
    (e.hide = ve),
    (e.offset = oe),
    (e.popperGenerator = K),
    (e.popperOffsets = $),
    (e.preventOverflow = le),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
