import { b as Ns, e as Ws } from "./index.c46e4d2d.js";
import {
  _ as It,
  b as ae,
  c as ne,
  d as P,
  f as st,
  i as Ps,
  t as Qe,
  u as Rs,
  p as Lt,
  j as Ut,
  F as Fs,
  n as Cs,
  e as Is,
} from "./index.be43a535.js";
const Ls = "/IRONHACK-FinalTask/assets/reloj.05b499f9.svg",
  Us = "/IRONHACK-FinalTask/assets/editar.1669d2c7.svg",
  Hs = "/IRONHACK-FinalTask/assets/completo.fbde7499.svg",
  Es = "/IRONHACK-FinalTask/assets/cerrar.977b2f8a.svg"; //! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ht;
function l() {
  return Ht.apply(null, arguments);
}
function As(e) {
  Ht = e;
}
function L(e) {
  return (
    e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
  );
}
function oe(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function y(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function dt(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e) if (y(e, t)) return !1;
  return !0;
}
function x(e) {
  return e === void 0;
}
function J(e) {
  return (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  );
}
function De(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function Et(e, t) {
  var s = [],
    r,
    a = e.length;
  for (r = 0; r < a; ++r) s.push(t(e[r], r));
  return s;
}
function ee(e, t) {
  for (var s in t) y(t, s) && (e[s] = t[s]);
  return (
    y(t, "toString") && (e.toString = t.toString),
    y(t, "valueOf") && (e.valueOf = t.valueOf),
    e
  );
}
function V(e, t, s, r) {
  return ds(e, t, s, r, !0).utc();
}
function Vs() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1,
  };
}
function f(e) {
  return e._pf == null && (e._pf = Vs()), e._pf;
}
var rt;
Array.prototype.some
  ? (rt = Array.prototype.some)
  : (rt = function (e) {
      var t = Object(this),
        s = t.length >>> 0,
        r;
      for (r = 0; r < s; r++) if (r in t && e.call(this, t[r], r, t)) return !0;
      return !1;
    });
function ht(e) {
  if (e._isValid == null) {
    var t = f(e),
      s = rt.call(t.parsedDateParts, function (a) {
        return a != null;
      }),
      r =
        !isNaN(e._d.getTime()) &&
        t.overflow < 0 &&
        !t.empty &&
        !t.invalidEra &&
        !t.invalidMonth &&
        !t.invalidWeekday &&
        !t.weekdayMismatch &&
        !t.nullInput &&
        !t.invalidFormat &&
        !t.userInvalidated &&
        (!t.meridiem || (t.meridiem && s));
    if (
      (e._strict &&
        (r =
          r &&
          t.charsLeftOver === 0 &&
          t.unusedTokens.length === 0 &&
          t.bigHour === void 0),
      Object.isFrozen == null || !Object.isFrozen(e))
    )
      e._isValid = r;
    else return r;
  }
  return e._isValid;
}
function He(e) {
  var t = V(NaN);
  return e != null ? ee(f(t), e) : (f(t).userInvalidated = !0), t;
}
var Wt = (l.momentProperties = []),
  Ke = !1;
function ft(e, t) {
  var s,
    r,
    a,
    n = Wt.length;
  if (
    (x(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
    x(t._i) || (e._i = t._i),
    x(t._f) || (e._f = t._f),
    x(t._l) || (e._l = t._l),
    x(t._strict) || (e._strict = t._strict),
    x(t._tzm) || (e._tzm = t._tzm),
    x(t._isUTC) || (e._isUTC = t._isUTC),
    x(t._offset) || (e._offset = t._offset),
    x(t._pf) || (e._pf = f(t)),
    x(t._locale) || (e._locale = t._locale),
    n > 0)
  )
    for (s = 0; s < n; s++) (r = Wt[s]), (a = t[r]), x(a) || (e[r] = a);
  return e;
}
function Ye(e) {
  ft(this, e),
    (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
    this.isValid() || (this._d = new Date(NaN)),
    Ke === !1 && ((Ke = !0), l.updateOffset(this), (Ke = !1));
}
function U(e) {
  return e instanceof Ye || (e != null && e._isAMomentObject != null);
}
function At(e) {
  l.suppressDeprecationWarnings === !1 &&
    typeof console < "u" &&
    console.warn &&
    console.warn("Deprecation warning: " + e);
}
function F(e, t) {
  var s = !0;
  return ee(function () {
    if ((l.deprecationHandler != null && l.deprecationHandler(null, e), s)) {
      var r = [],
        a,
        n,
        i,
        d = arguments.length;
      for (n = 0; n < d; n++) {
        if (((a = ""), typeof arguments[n] == "object")) {
          a +=
            `
[` +
            n +
            "] ";
          for (i in arguments[0])
            y(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else a = arguments[n];
        r.push(a);
      }
      At(
        e +
          `
Arguments: ` +
          Array.prototype.slice.call(r).join("") +
          `
` +
          new Error().stack
      ),
        (s = !1);
    }
    return t.apply(this, arguments);
  }, t);
}
var Pt = {};
function Vt(e, t) {
  l.deprecationHandler != null && l.deprecationHandler(e, t),
    Pt[e] || (At(t), (Pt[e] = !0));
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function G(e) {
  return (
    (typeof Function < "u" && e instanceof Function) ||
    Object.prototype.toString.call(e) === "[object Function]"
  );
}
function Gs(e) {
  var t, s;
  for (s in e)
    y(e, s) && ((t = e[s]), G(t) ? (this[s] = t) : (this["_" + s] = t));
  (this._config = e),
    (this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
        "|" +
        /\d{1,2}/.source
    ));
}
function at(e, t) {
  var s = ee({}, e),
    r;
  for (r in t)
    y(t, r) &&
      (oe(e[r]) && oe(t[r])
        ? ((s[r] = {}), ee(s[r], e[r]), ee(s[r], t[r]))
        : t[r] != null
        ? (s[r] = t[r])
        : delete s[r]);
  for (r in e) y(e, r) && !y(t, r) && oe(e[r]) && (s[r] = ee({}, s[r]));
  return s;
}
function ct(e) {
  e != null && this.set(e);
}
var nt;
Object.keys
  ? (nt = Object.keys)
  : (nt = function (e) {
      var t,
        s = [];
      for (t in e) y(e, t) && s.push(t);
      return s;
    });
var js = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L",
};
function $s(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return G(r) ? r.call(t, s) : r;
}
function A(e, t, s) {
  var r = "" + Math.abs(e),
    a = t - r.length,
    n = e >= 0;
  return (
    (n ? (s ? "+" : "") : "-") +
    Math.pow(10, Math.max(0, a)).toString().substr(1) +
    r
  );
}
var _t =
    /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
  be = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
  Xe = {},
  fe = {};
function h(e, t, s, r) {
  var a = r;
  typeof r == "string" &&
    (a = function () {
      return this[r]();
    }),
    e && (fe[e] = a),
    t &&
      (fe[t[0]] = function () {
        return A(a.apply(this, arguments), t[1], t[2]);
      }),
    s &&
      (fe[s] = function () {
        return this.localeData().ordinal(a.apply(this, arguments), e);
      });
}
function zs(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Zs(e) {
  var t = e.match(_t),
    s,
    r;
  for (s = 0, r = t.length; s < r; s++)
    fe[t[s]] ? (t[s] = fe[t[s]]) : (t[s] = zs(t[s]));
  return function (a) {
    var n = "",
      i;
    for (i = 0; i < r; i++) n += G(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function Ne(e, t) {
  return e.isValid()
    ? ((t = Gt(t, e.localeData())), (Xe[t] = Xe[t] || Zs(t)), Xe[t](e))
    : e.localeData().invalidDate();
}
function Gt(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (be.lastIndex = 0; s >= 0 && be.test(e); )
    (e = e.replace(be, r)), (be.lastIndex = 0), (s -= 1);
  return e;
}
var Bs = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A",
};
function qs(e) {
  var t = this._longDateFormat[e],
    s = this._longDateFormat[e.toUpperCase()];
  return t || !s
    ? t
    : ((this._longDateFormat[e] = s
        .match(_t)
        .map(function (r) {
          return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd"
            ? r.slice(1)
            : r;
        })
        .join("")),
      this._longDateFormat[e]);
}
var Js = "Invalid date";
function Qs() {
  return this._invalidDate;
}
var Ks = "%d",
  Xs = /\d{1,2}/;
function er(e) {
  return this._ordinal.replace("%d", e);
}
var tr = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years",
};
function sr(e, t, s, r) {
  var a = this._relativeTime[s];
  return G(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function rr(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return G(s) ? s(t) : s.replace(/%s/i, t);
}
var Se = {};
function O(e, t) {
  var s = e.toLowerCase();
  Se[s] = Se[s + "s"] = Se[t] = e;
}
function C(e) {
  return typeof e == "string" ? Se[e] || Se[e.toLowerCase()] : void 0;
}
function mt(e) {
  var t = {},
    s,
    r;
  for (r in e) y(e, r) && ((s = C(r)), s && (t[s] = e[r]));
  return t;
}
var jt = {};
function T(e, t) {
  jt[e] = t;
}
function ar(e) {
  var t = [],
    s;
  for (s in e) y(e, s) && t.push({ unit: s, priority: jt[s] });
  return (
    t.sort(function (r, a) {
      return r.priority - a.priority;
    }),
    t
  );
}
function Ee(e) {
  return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
}
function R(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function _(e) {
  var t = +e,
    s = 0;
  return t !== 0 && isFinite(t) && (s = R(t)), s;
}
function me(e, t) {
  return function (s) {
    return s != null
      ? ($t(this, e, s), l.updateOffset(this, t), this)
      : Re(this, e);
  };
}
function Re(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function $t(e, t, s) {
  e.isValid() &&
    !isNaN(s) &&
    (t === "FullYear" && Ee(e.year()) && e.month() === 1 && e.date() === 29
      ? ((s = _(s)),
        e._d["set" + (e._isUTC ? "UTC" : "") + t](
          s,
          e.month(),
          ze(s, e.month())
        ))
      : e._d["set" + (e._isUTC ? "UTC" : "") + t](s));
}
function nr(e) {
  return (e = C(e)), G(this[e]) ? this[e]() : this;
}
function ir(e, t) {
  if (typeof e == "object") {
    e = mt(e);
    var s = ar(e),
      r,
      a = s.length;
    for (r = 0; r < a; r++) this[s[r].unit](e[s[r].unit]);
  } else if (((e = C(e)), G(this[e]))) return this[e](t);
  return this;
}
var zt = /\d/,
  W = /\d\d/,
  Zt = /\d{3}/,
  yt = /\d{4}/,
  Ae = /[+-]?\d{6}/,
  g = /\d\d?/,
  Bt = /\d\d\d\d?/,
  qt = /\d\d\d\d\d\d?/,
  Ve = /\d{1,3}/,
  wt = /\d{1,4}/,
  Ge = /[+-]?\d{1,6}/,
  ye = /\d+/,
  je = /[+-]?\d+/,
  or = /Z|[+-]\d\d:?\d\d/gi,
  $e = /Z|[+-]\d\d(?::?\d\d)?/gi,
  lr = /[+-]?\d+(\.\d{1,3})?/,
  Oe =
    /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
  Fe;
Fe = {};
function u(e, t, s) {
  Fe[e] = G(t)
    ? t
    : function (r, a) {
        return r && s ? s : t;
      };
}
function ur(e, t) {
  return y(Fe, e) ? Fe[e](t._strict, t._locale) : new RegExp(dr(e));
}
function dr(e) {
  return N(
    e
      .replace("\\", "")
      .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, s, r, a, n) {
        return s || r || a || n;
      })
  );
}
function N(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var it = {};
function S(e, t) {
  var s,
    r = t,
    a;
  for (
    typeof e == "string" && (e = [e]),
      J(t) &&
        (r = function (n, i) {
          i[t] = _(n);
        }),
      a = e.length,
      s = 0;
    s < a;
    s++
  )
    it[e[s]] = r;
}
function Te(e, t) {
  S(e, function (s, r, a, n) {
    (a._w = a._w || {}), t(s, a._w, a, n);
  });
}
function hr(e, t, s) {
  t != null && y(it, e) && it[e](t, s._a, s, e);
}
var Y = 0,
  Z = 1,
  E = 2,
  D = 3,
  I = 4,
  B = 5,
  ie = 6,
  fr = 7,
  cr = 8;
function _r(e, t) {
  return ((e % t) + t) % t;
}
var p;
Array.prototype.indexOf
  ? (p = Array.prototype.indexOf)
  : (p = function (e) {
      var t;
      for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
      return -1;
    });
function ze(e, t) {
  if (isNaN(e) || isNaN(t)) return NaN;
  var s = _r(t, 12);
  return (e += (t - s) / 12), s === 1 ? (Ee(e) ? 29 : 28) : 31 - ((s % 7) % 2);
}
h("M", ["MM", 2], "Mo", function () {
  return this.month() + 1;
});
h("MMM", 0, 0, function (e) {
  return this.localeData().monthsShort(this, e);
});
h("MMMM", 0, 0, function (e) {
  return this.localeData().months(this, e);
});
O("month", "M");
T("month", 8);
u("M", g);
u("MM", g, W);
u("MMM", function (e, t) {
  return t.monthsShortRegex(e);
});
u("MMMM", function (e, t) {
  return t.monthsRegex(e);
});
S(["M", "MM"], function (e, t) {
  t[Z] = _(e) - 1;
});
S(["MMM", "MMMM"], function (e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? (t[Z] = a) : (f(s).invalidMonth = e);
});
var mr =
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ),
  Jt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  Qt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
  yr = Oe,
  wr = Oe;
function kr(e, t) {
  return e
    ? L(this._months)
      ? this._months[e.month()]
      : this._months[
          (this._months.isFormat || Qt).test(t) ? "format" : "standalone"
        ][e.month()]
    : L(this._months)
    ? this._months
    : this._months.standalone;
}
function Sr(e, t) {
  return e
    ? L(this._monthsShort)
      ? this._monthsShort[e.month()]
      : this._monthsShort[Qt.test(t) ? "format" : "standalone"][e.month()]
    : L(this._monthsShort)
    ? this._monthsShort
    : this._monthsShort.standalone;
}
function vr(e, t, s) {
  var r,
    a,
    n,
    i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (
      this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = [],
        r = 0;
      r < 12;
      ++r
    )
      (n = V([2e3, r])),
        (this._shortMonthsParse[r] = this.monthsShort(
          n,
          ""
        ).toLocaleLowerCase()),
        (this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase());
  return s
    ? t === "MMM"
      ? ((a = p.call(this._shortMonthsParse, i)), a !== -1 ? a : null)
      : ((a = p.call(this._longMonthsParse, i)), a !== -1 ? a : null)
    : t === "MMM"
    ? ((a = p.call(this._shortMonthsParse, i)),
      a !== -1
        ? a
        : ((a = p.call(this._longMonthsParse, i)), a !== -1 ? a : null))
    : ((a = p.call(this._longMonthsParse, i)),
      a !== -1
        ? a
        : ((a = p.call(this._shortMonthsParse, i)), a !== -1 ? a : null));
}
function gr(e, t, s) {
  var r, a, n;
  if (this._monthsParseExact) return vr.call(this, e, t, s);
  for (
    this._monthsParse ||
      ((this._monthsParse = []),
      (this._longMonthsParse = []),
      (this._shortMonthsParse = [])),
      r = 0;
    r < 12;
    r++
  ) {
    if (
      ((a = V([2e3, r])),
      s &&
        !this._longMonthsParse[r] &&
        ((this._longMonthsParse[r] = new RegExp(
          "^" + this.months(a, "").replace(".", "") + "$",
          "i"
        )),
        (this._shortMonthsParse[r] = new RegExp(
          "^" + this.monthsShort(a, "").replace(".", "") + "$",
          "i"
        ))),
      !s &&
        !this._monthsParse[r] &&
        ((n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, "")),
        (this._monthsParse[r] = new RegExp(n.replace(".", ""), "i"))),
      s && t === "MMMM" && this._longMonthsParse[r].test(e))
    )
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e)) return r;
    if (!s && this._monthsParse[r].test(e)) return r;
  }
}
function Kt(e, t) {
  var s;
  if (!e.isValid()) return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t)) t = _(t);
    else if (((t = e.localeData().monthsParse(t)), !J(t))) return e;
  }
  return (
    (s = Math.min(e.date(), ze(e.year(), t))),
    e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s),
    e
  );
}
function Xt(e) {
  return e != null
    ? (Kt(this, e), l.updateOffset(this, !0), this)
    : Re(this, "Month");
}
function Mr() {
  return ze(this.year(), this.month());
}
function pr(e) {
  return this._monthsParseExact
    ? (y(this, "_monthsRegex") || es.call(this),
      e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    : (y(this, "_monthsShortRegex") || (this._monthsShortRegex = yr),
      this._monthsShortStrictRegex && e
        ? this._monthsShortStrictRegex
        : this._monthsShortRegex);
}
function Dr(e) {
  return this._monthsParseExact
    ? (y(this, "_monthsRegex") || es.call(this),
      e ? this._monthsStrictRegex : this._monthsRegex)
    : (y(this, "_monthsRegex") || (this._monthsRegex = wr),
      this._monthsStrictRegex && e
        ? this._monthsStrictRegex
        : this._monthsRegex);
}
function es() {
  function e(i, d) {
    return d.length - i.length;
  }
  var t = [],
    s = [],
    r = [],
    a,
    n;
  for (a = 0; a < 12; a++)
    (n = V([2e3, a])),
      t.push(this.monthsShort(n, "")),
      s.push(this.months(n, "")),
      r.push(this.months(n, "")),
      r.push(this.monthsShort(n, ""));
  for (t.sort(e), s.sort(e), r.sort(e), a = 0; a < 12; a++)
    (t[a] = N(t[a])), (s[a] = N(s[a]));
  for (a = 0; a < 24; a++) r[a] = N(r[a]);
  (this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i")),
    (this._monthsShortRegex = this._monthsRegex),
    (this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
    (this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
h("Y", 0, 0, function () {
  var e = this.year();
  return e <= 9999 ? A(e, 4) : "+" + e;
});
h(0, ["YY", 2], 0, function () {
  return this.year() % 100;
});
h(0, ["YYYY", 4], 0, "year");
h(0, ["YYYYY", 5], 0, "year");
h(0, ["YYYYYY", 6, !0], 0, "year");
O("year", "y");
T("year", 1);
u("Y", je);
u("YY", g, W);
u("YYYY", wt, yt);
u("YYYYY", Ge, Ae);
u("YYYYYY", Ge, Ae);
S(["YYYYY", "YYYYYY"], Y);
S("YYYY", function (e, t) {
  t[Y] = e.length === 2 ? l.parseTwoDigitYear(e) : _(e);
});
S("YY", function (e, t) {
  t[Y] = l.parseTwoDigitYear(e);
});
S("Y", function (e, t) {
  t[Y] = parseInt(e, 10);
});
function ve(e) {
  return Ee(e) ? 366 : 365;
}
l.parseTwoDigitYear = function (e) {
  return _(e) + (_(e) > 68 ? 1900 : 2e3);
};
var ts = me("FullYear", !0);
function Yr() {
  return Ee(this.year());
}
function Or(e, t, s, r, a, n, i) {
  var d;
  return (
    e < 100 && e >= 0
      ? ((d = new Date(e + 400, t, s, r, a, n, i)),
        isFinite(d.getFullYear()) && d.setFullYear(e))
      : (d = new Date(e, t, s, r, a, n, i)),
    d
  );
}
function ge(e) {
  var t, s;
  return (
    e < 100 && e >= 0
      ? ((s = Array.prototype.slice.call(arguments)),
        (s[0] = e + 400),
        (t = new Date(Date.UTC.apply(null, s))),
        isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
      : (t = new Date(Date.UTC.apply(null, arguments))),
    t
  );
}
function Ce(e, t, s) {
  var r = 7 + t - s,
    a = (7 + ge(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function ss(e, t, s, r, a) {
  var n = (7 + s - r) % 7,
    i = Ce(e, r, a),
    d = 1 + 7 * (t - 1) + n + i,
    c,
    k;
  return (
    d <= 0
      ? ((c = e - 1), (k = ve(c) + d))
      : d > ve(e)
      ? ((c = e + 1), (k = d - ve(e)))
      : ((c = e), (k = d)),
    { year: c, dayOfYear: k }
  );
}
function Me(e, t, s) {
  var r = Ce(e.year(), t, s),
    a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1,
    n,
    i;
  return (
    a < 1
      ? ((i = e.year() - 1), (n = a + q(i, t, s)))
      : a > q(e.year(), t, s)
      ? ((n = a - q(e.year(), t, s)), (i = e.year() + 1))
      : ((i = e.year()), (n = a)),
    { week: n, year: i }
  );
}
function q(e, t, s) {
  var r = Ce(e, t, s),
    a = Ce(e + 1, t, s);
  return (ve(e) - r + a) / 7;
}
h("w", ["ww", 2], "wo", "week");
h("W", ["WW", 2], "Wo", "isoWeek");
O("week", "w");
O("isoWeek", "W");
T("week", 5);
T("isoWeek", 5);
u("w", g);
u("ww", g, W);
u("W", g);
u("WW", g, W);
Te(["w", "ww", "W", "WW"], function (e, t, s, r) {
  t[r.substr(0, 1)] = _(e);
});
function Tr(e) {
  return Me(e, this._week.dow, this._week.doy).week;
}
var br = { dow: 0, doy: 6 };
function xr() {
  return this._week.dow;
}
function Nr() {
  return this._week.doy;
}
function Wr(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Pr(e) {
  var t = Me(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
h("d", 0, "do", "day");
h("dd", 0, 0, function (e) {
  return this.localeData().weekdaysMin(this, e);
});
h("ddd", 0, 0, function (e) {
  return this.localeData().weekdaysShort(this, e);
});
h("dddd", 0, 0, function (e) {
  return this.localeData().weekdays(this, e);
});
h("e", 0, 0, "weekday");
h("E", 0, 0, "isoWeekday");
O("day", "d");
O("weekday", "e");
O("isoWeekday", "E");
T("day", 11);
T("weekday", 11);
T("isoWeekday", 11);
u("d", g);
u("e", g);
u("E", g);
u("dd", function (e, t) {
  return t.weekdaysMinRegex(e);
});
u("ddd", function (e, t) {
  return t.weekdaysShortRegex(e);
});
u("dddd", function (e, t) {
  return t.weekdaysRegex(e);
});
Te(["dd", "ddd", "dddd"], function (e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? (t.d = a) : (f(s).invalidWeekday = e);
});
Te(["d", "e", "E"], function (e, t, s, r) {
  t[r] = _(e);
});
function Rr(e, t) {
  return typeof e != "string"
    ? e
    : isNaN(e)
    ? ((e = t.weekdaysParse(e)), typeof e == "number" ? e : null)
    : parseInt(e, 10);
}
function Fr(e, t) {
  return typeof e == "string"
    ? t.weekdaysParse(e) % 7 || 7
    : isNaN(e)
    ? null
    : e;
}
function kt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Cr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  rs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  Ir = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  Lr = Oe,
  Ur = Oe,
  Hr = Oe;
function Er(e, t) {
  var s = L(this._weekdays)
    ? this._weekdays
    : this._weekdays[
        e && e !== !0 && this._weekdays.isFormat.test(t)
          ? "format"
          : "standalone"
      ];
  return e === !0 ? kt(s, this._week.dow) : e ? s[e.day()] : s;
}
function Ar(e) {
  return e === !0
    ? kt(this._weekdaysShort, this._week.dow)
    : e
    ? this._weekdaysShort[e.day()]
    : this._weekdaysShort;
}
function Vr(e) {
  return e === !0
    ? kt(this._weekdaysMin, this._week.dow)
    : e
    ? this._weekdaysMin[e.day()]
    : this._weekdaysMin;
}
function Gr(e, t, s) {
  var r,
    a,
    n,
    i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (
      this._weekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._minWeekdaysParse = [],
        r = 0;
      r < 7;
      ++r
    )
      (n = V([2e3, 1]).day(r)),
        (this._minWeekdaysParse[r] = this.weekdaysMin(
          n,
          ""
        ).toLocaleLowerCase()),
        (this._shortWeekdaysParse[r] = this.weekdaysShort(
          n,
          ""
        ).toLocaleLowerCase()),
        (this._weekdaysParse[r] = this.weekdays(n, "").toLocaleLowerCase());
  return s
    ? t === "dddd"
      ? ((a = p.call(this._weekdaysParse, i)), a !== -1 ? a : null)
      : t === "ddd"
      ? ((a = p.call(this._shortWeekdaysParse, i)), a !== -1 ? a : null)
      : ((a = p.call(this._minWeekdaysParse, i)), a !== -1 ? a : null)
    : t === "dddd"
    ? ((a = p.call(this._weekdaysParse, i)),
      a !== -1 || ((a = p.call(this._shortWeekdaysParse, i)), a !== -1)
        ? a
        : ((a = p.call(this._minWeekdaysParse, i)), a !== -1 ? a : null))
    : t === "ddd"
    ? ((a = p.call(this._shortWeekdaysParse, i)),
      a !== -1 || ((a = p.call(this._weekdaysParse, i)), a !== -1)
        ? a
        : ((a = p.call(this._minWeekdaysParse, i)), a !== -1 ? a : null))
    : ((a = p.call(this._minWeekdaysParse, i)),
      a !== -1 || ((a = p.call(this._weekdaysParse, i)), a !== -1)
        ? a
        : ((a = p.call(this._shortWeekdaysParse, i)), a !== -1 ? a : null));
}
function jr(e, t, s) {
  var r, a, n;
  if (this._weekdaysParseExact) return Gr.call(this, e, t, s);
  for (
    this._weekdaysParse ||
      ((this._weekdaysParse = []),
      (this._minWeekdaysParse = []),
      (this._shortWeekdaysParse = []),
      (this._fullWeekdaysParse = [])),
      r = 0;
    r < 7;
    r++
  ) {
    if (
      ((a = V([2e3, 1]).day(r)),
      s &&
        !this._fullWeekdaysParse[r] &&
        ((this._fullWeekdaysParse[r] = new RegExp(
          "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
          "i"
        )),
        (this._shortWeekdaysParse[r] = new RegExp(
          "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
          "i"
        )),
        (this._minWeekdaysParse[r] = new RegExp(
          "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
          "i"
        ))),
      this._weekdaysParse[r] ||
        ((n =
          "^" +
          this.weekdays(a, "") +
          "|^" +
          this.weekdaysShort(a, "") +
          "|^" +
          this.weekdaysMin(a, "")),
        (this._weekdaysParse[r] = new RegExp(n.replace(".", ""), "i"))),
      s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
    )
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e)) return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e)) return r;
    if (!s && this._weekdaysParse[r].test(e)) return r;
  }
}
function $r(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? ((e = Rr(e, this.localeData())), this.add(e - t, "d")) : t;
}
function zr(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Zr(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  if (e != null) {
    var t = Fr(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else return this.day() || 7;
}
function Br(e) {
  return this._weekdaysParseExact
    ? (y(this, "_weekdaysRegex") || St.call(this),
      e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    : (y(this, "_weekdaysRegex") || (this._weekdaysRegex = Lr),
      this._weekdaysStrictRegex && e
        ? this._weekdaysStrictRegex
        : this._weekdaysRegex);
}
function qr(e) {
  return this._weekdaysParseExact
    ? (y(this, "_weekdaysRegex") || St.call(this),
      e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    : (y(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ur),
      this._weekdaysShortStrictRegex && e
        ? this._weekdaysShortStrictRegex
        : this._weekdaysShortRegex);
}
function Jr(e) {
  return this._weekdaysParseExact
    ? (y(this, "_weekdaysRegex") || St.call(this),
      e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    : (y(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Hr),
      this._weekdaysMinStrictRegex && e
        ? this._weekdaysMinStrictRegex
        : this._weekdaysMinRegex);
}
function St() {
  function e(b, j) {
    return j.length - b.length;
  }
  var t = [],
    s = [],
    r = [],
    a = [],
    n,
    i,
    d,
    c,
    k;
  for (n = 0; n < 7; n++)
    (i = V([2e3, 1]).day(n)),
      (d = N(this.weekdaysMin(i, ""))),
      (c = N(this.weekdaysShort(i, ""))),
      (k = N(this.weekdays(i, ""))),
      t.push(d),
      s.push(c),
      r.push(k),
      a.push(d),
      a.push(c),
      a.push(k);
  t.sort(e),
    s.sort(e),
    r.sort(e),
    a.sort(e),
    (this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i")),
    (this._weekdaysShortRegex = this._weekdaysRegex),
    (this._weekdaysMinRegex = this._weekdaysRegex),
    (this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
    (this._weekdaysShortStrictRegex = new RegExp(
      "^(" + s.join("|") + ")",
      "i"
    )),
    (this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
function vt() {
  return this.hours() % 12 || 12;
}
function Qr() {
  return this.hours() || 24;
}
h("H", ["HH", 2], 0, "hour");
h("h", ["hh", 2], 0, vt);
h("k", ["kk", 2], 0, Qr);
h("hmm", 0, 0, function () {
  return "" + vt.apply(this) + A(this.minutes(), 2);
});
h("hmmss", 0, 0, function () {
  return "" + vt.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2);
});
h("Hmm", 0, 0, function () {
  return "" + this.hours() + A(this.minutes(), 2);
});
h("Hmmss", 0, 0, function () {
  return "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2);
});
function as(e, t) {
  h(e, 0, 0, function () {
    return this.localeData().meridiem(this.hours(), this.minutes(), t);
  });
}
as("a", !0);
as("A", !1);
O("hour", "h");
T("hour", 13);
function ns(e, t) {
  return t._meridiemParse;
}
u("a", ns);
u("A", ns);
u("H", g);
u("h", g);
u("k", g);
u("HH", g, W);
u("hh", g, W);
u("kk", g, W);
u("hmm", Bt);
u("hmmss", qt);
u("Hmm", Bt);
u("Hmmss", qt);
S(["H", "HH"], D);
S(["k", "kk"], function (e, t, s) {
  var r = _(e);
  t[D] = r === 24 ? 0 : r;
});
S(["a", "A"], function (e, t, s) {
  (s._isPm = s._locale.isPM(e)), (s._meridiem = e);
});
S(["h", "hh"], function (e, t, s) {
  (t[D] = _(e)), (f(s).bigHour = !0);
});
S("hmm", function (e, t, s) {
  var r = e.length - 2;
  (t[D] = _(e.substr(0, r))), (t[I] = _(e.substr(r))), (f(s).bigHour = !0);
});
S("hmmss", function (e, t, s) {
  var r = e.length - 4,
    a = e.length - 2;
  (t[D] = _(e.substr(0, r))),
    (t[I] = _(e.substr(r, 2))),
    (t[B] = _(e.substr(a))),
    (f(s).bigHour = !0);
});
S("Hmm", function (e, t, s) {
  var r = e.length - 2;
  (t[D] = _(e.substr(0, r))), (t[I] = _(e.substr(r)));
});
S("Hmmss", function (e, t, s) {
  var r = e.length - 4,
    a = e.length - 2;
  (t[D] = _(e.substr(0, r))),
    (t[I] = _(e.substr(r, 2))),
    (t[B] = _(e.substr(a)));
});
function Kr(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Xr = /[ap]\.?m?\.?/i,
  ea = me("Hours", !0);
function ta(e, t, s) {
  return e > 11 ? (s ? "pm" : "PM") : s ? "am" : "AM";
}
var is = {
    calendar: js,
    longDateFormat: Bs,
    invalidDate: Js,
    ordinal: Ks,
    dayOfMonthOrdinalParse: Xs,
    relativeTime: tr,
    months: mr,
    monthsShort: Jt,
    week: br,
    weekdays: Cr,
    weekdaysMin: Ir,
    weekdaysShort: rs,
    meridiemParse: Xr,
  },
  M = {},
  we = {},
  pe;
function sa(e, t) {
  var s,
    r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1) if (e[s] !== t[s]) return s;
  return r;
}
function Rt(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ra(e) {
  for (var t = 0, s, r, a, n; t < e.length; ) {
    for (
      n = Rt(e[t]).split("-"),
        s = n.length,
        r = Rt(e[t + 1]),
        r = r ? r.split("-") : null;
      s > 0;

    ) {
      if (((a = Ze(n.slice(0, s).join("-"))), a)) return a;
      if (r && r.length >= s && sa(n, r) >= s - 1) break;
      s--;
    }
    t++;
  }
  return pe;
}
function aa(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Ze(e) {
  var t = null,
    s;
  if (
    M[e] === void 0 &&
    typeof module < "u" &&
    module &&
    module.exports &&
    aa(e)
  )
    try {
      (t = pe._abbr), (s = require), s("./locale/" + e), se(t);
    } catch {
      M[e] = null;
    }
  return M[e];
}
function se(e, t) {
  var s;
  return (
    e &&
      (x(t) ? (s = Q(e)) : (s = gt(e, t)),
      s
        ? (pe = s)
        : typeof console < "u" &&
          console.warn &&
          console.warn(
            "Locale " + e + " not found. Did you forget to load it?"
          )),
    pe._abbr
  );
}
function gt(e, t) {
  if (t !== null) {
    var s,
      r = is;
    if (((t.abbr = e), M[e] != null))
      Vt(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ),
        (r = M[e]._config);
    else if (t.parentLocale != null)
      if (M[t.parentLocale] != null) r = M[t.parentLocale]._config;
      else if (((s = Ze(t.parentLocale)), s != null)) r = s._config;
      else
        return (
          we[t.parentLocale] || (we[t.parentLocale] = []),
          we[t.parentLocale].push({ name: e, config: t }),
          null
        );
    return (
      (M[e] = new ct(at(r, t))),
      we[e] &&
        we[e].forEach(function (a) {
          gt(a.name, a.config);
        }),
      se(e),
      M[e]
    );
  } else return delete M[e], null;
}
function na(e, t) {
  if (t != null) {
    var s,
      r,
      a = is;
    M[e] != null && M[e].parentLocale != null
      ? M[e].set(at(M[e]._config, t))
      : ((r = Ze(e)),
        r != null && (a = r._config),
        (t = at(a, t)),
        r == null && (t.abbr = e),
        (s = new ct(t)),
        (s.parentLocale = M[e]),
        (M[e] = s)),
      se(e);
  } else
    M[e] != null &&
      (M[e].parentLocale != null
        ? ((M[e] = M[e].parentLocale), e === se() && se(e))
        : M[e] != null && delete M[e]);
  return M[e];
}
function Q(e) {
  var t;
  if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
    return pe;
  if (!L(e)) {
    if (((t = Ze(e)), t)) return t;
    e = [e];
  }
  return ra(e);
}
function ia() {
  return nt(M);
}
function Mt(e) {
  var t,
    s = e._a;
  return (
    s &&
      f(e).overflow === -2 &&
      ((t =
        s[Z] < 0 || s[Z] > 11
          ? Z
          : s[E] < 1 || s[E] > ze(s[Y], s[Z])
          ? E
          : s[D] < 0 ||
            s[D] > 24 ||
            (s[D] === 24 && (s[I] !== 0 || s[B] !== 0 || s[ie] !== 0))
          ? D
          : s[I] < 0 || s[I] > 59
          ? I
          : s[B] < 0 || s[B] > 59
          ? B
          : s[ie] < 0 || s[ie] > 999
          ? ie
          : -1),
      f(e)._overflowDayOfYear && (t < Y || t > E) && (t = E),
      f(e)._overflowWeeks && t === -1 && (t = fr),
      f(e)._overflowWeekday && t === -1 && (t = cr),
      (f(e).overflow = t)),
    e
  );
}
var oa =
    /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  la =
    /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  ua = /Z|[+-]\d\d(?::?\d\d)?/,
  xe = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, !1],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, !1],
    ["YYYY", /\d{4}/, !1],
  ],
  et = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/],
  ],
  da = /^\/?Date\((-?\d+)/i,
  ha =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
  fa = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60,
  };
function os(e) {
  var t,
    s,
    r = e._i,
    a = oa.exec(r) || la.exec(r),
    n,
    i,
    d,
    c,
    k = xe.length,
    b = et.length;
  if (a) {
    for (f(e).iso = !0, t = 0, s = k; t < s; t++)
      if (xe[t][1].exec(a[1])) {
        (i = xe[t][0]), (n = xe[t][2] !== !1);
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = b; t < s; t++)
        if (et[t][1].exec(a[3])) {
          d = (a[2] || " ") + et[t][0];
          break;
        }
      if (d == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && d != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (ua.exec(a[4])) c = "Z";
      else {
        e._isValid = !1;
        return;
      }
    (e._f = i + (d || "") + (c || "")), Dt(e);
  } else e._isValid = !1;
}
function ca(e, t, s, r, a, n) {
  var i = [
    _a(e),
    Jt.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10),
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function _a(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function ma(e) {
  return e
    .replace(/\([^()]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .replace(/^\s\s*/, "")
    .replace(/\s\s*$/, "");
}
function ya(e, t, s) {
  if (e) {
    var r = rs.indexOf(e),
      a = new Date(t[0], t[1], t[2]).getDay();
    if (r !== a) return (f(s).weekdayMismatch = !0), (s._isValid = !1), !1;
  }
  return !0;
}
function wa(e, t, s) {
  if (e) return fa[e];
  if (t) return 0;
  var r = parseInt(s, 10),
    a = r % 100,
    n = (r - a) / 100;
  return n * 60 + a;
}
function ls(e) {
  var t = ha.exec(ma(e._i)),
    s;
  if (t) {
    if (((s = ca(t[4], t[3], t[2], t[5], t[6], t[7])), !ya(t[1], s, e))) return;
    (e._a = s),
      (e._tzm = wa(t[8], t[9], t[10])),
      (e._d = ge.apply(null, e._a)),
      e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      (f(e).rfc2822 = !0);
  } else e._isValid = !1;
}
function ka(e) {
  var t = da.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if ((os(e), e._isValid === !1)) delete e._isValid;
  else return;
  if ((ls(e), e._isValid === !1)) delete e._isValid;
  else return;
  e._strict ? (e._isValid = !1) : l.createFromInputFallback(e);
}
l.createFromInputFallback = F(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function de(e, t, s) {
  return e != null ? e : t != null ? t : s;
}
function Sa(e) {
  var t = new Date(l.now());
  return e._useUTC
    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
    : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function pt(e) {
  var t,
    s,
    r = [],
    a,
    n,
    i;
  if (!e._d) {
    for (
      a = Sa(e),
        e._w && e._a[E] == null && e._a[Z] == null && va(e),
        e._dayOfYear != null &&
          ((i = de(e._a[Y], a[Y])),
          (e._dayOfYear > ve(i) || e._dayOfYear === 0) &&
            (f(e)._overflowDayOfYear = !0),
          (s = ge(i, 0, e._dayOfYear)),
          (e._a[Z] = s.getUTCMonth()),
          (e._a[E] = s.getUTCDate())),
        t = 0;
      t < 3 && e._a[t] == null;
      ++t
    )
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
    e._a[D] === 24 &&
      e._a[I] === 0 &&
      e._a[B] === 0 &&
      e._a[ie] === 0 &&
      ((e._nextDay = !0), (e._a[D] = 0)),
      (e._d = (e._useUTC ? ge : Or).apply(null, r)),
      (n = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
      e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      e._nextDay && (e._a[D] = 24),
      e._w &&
        typeof e._w.d < "u" &&
        e._w.d !== n &&
        (f(e).weekdayMismatch = !0);
  }
}
function va(e) {
  var t, s, r, a, n, i, d, c, k;
  (t = e._w),
    t.GG != null || t.W != null || t.E != null
      ? ((n = 1),
        (i = 4),
        (s = de(t.GG, e._a[Y], Me(v(), 1, 4).year)),
        (r = de(t.W, 1)),
        (a = de(t.E, 1)),
        (a < 1 || a > 7) && (c = !0))
      : ((n = e._locale._week.dow),
        (i = e._locale._week.doy),
        (k = Me(v(), n, i)),
        (s = de(t.gg, e._a[Y], k.year)),
        (r = de(t.w, k.week)),
        t.d != null
          ? ((a = t.d), (a < 0 || a > 6) && (c = !0))
          : t.e != null
          ? ((a = t.e + n), (t.e < 0 || t.e > 6) && (c = !0))
          : (a = n)),
    r < 1 || r > q(s, n, i)
      ? (f(e)._overflowWeeks = !0)
      : c != null
      ? (f(e)._overflowWeekday = !0)
      : ((d = ss(s, r, a, n, i)),
        (e._a[Y] = d.year),
        (e._dayOfYear = d.dayOfYear));
}
l.ISO_8601 = function () {};
l.RFC_2822 = function () {};
function Dt(e) {
  if (e._f === l.ISO_8601) {
    os(e);
    return;
  }
  if (e._f === l.RFC_2822) {
    ls(e);
    return;
  }
  (e._a = []), (f(e).empty = !0);
  var t = "" + e._i,
    s,
    r,
    a,
    n,
    i,
    d = t.length,
    c = 0,
    k,
    b;
  for (a = Gt(e._f, e._locale).match(_t) || [], b = a.length, s = 0; s < b; s++)
    (n = a[s]),
      (r = (t.match(ur(n, e)) || [])[0]),
      r &&
        ((i = t.substr(0, t.indexOf(r))),
        i.length > 0 && f(e).unusedInput.push(i),
        (t = t.slice(t.indexOf(r) + r.length)),
        (c += r.length)),
      fe[n]
        ? (r ? (f(e).empty = !1) : f(e).unusedTokens.push(n), hr(n, r, e))
        : e._strict && !r && f(e).unusedTokens.push(n);
  (f(e).charsLeftOver = d - c),
    t.length > 0 && f(e).unusedInput.push(t),
    e._a[D] <= 12 &&
      f(e).bigHour === !0 &&
      e._a[D] > 0 &&
      (f(e).bigHour = void 0),
    (f(e).parsedDateParts = e._a.slice(0)),
    (f(e).meridiem = e._meridiem),
    (e._a[D] = ga(e._locale, e._a[D], e._meridiem)),
    (k = f(e).era),
    k !== null && (e._a[Y] = e._locale.erasConvertYear(k, e._a[Y])),
    pt(e),
    Mt(e);
}
function ga(e, t, s) {
  var r;
  return s == null
    ? t
    : e.meridiemHour != null
    ? e.meridiemHour(t, s)
    : (e.isPM != null &&
        ((r = e.isPM(s)), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)),
      t);
}
function Ma(e) {
  var t,
    s,
    r,
    a,
    n,
    i,
    d = !1,
    c = e._f.length;
  if (c === 0) {
    (f(e).invalidFormat = !0), (e._d = new Date(NaN));
    return;
  }
  for (a = 0; a < c; a++)
    (n = 0),
      (i = !1),
      (t = ft({}, e)),
      e._useUTC != null && (t._useUTC = e._useUTC),
      (t._f = e._f[a]),
      Dt(t),
      ht(t) && (i = !0),
      (n += f(t).charsLeftOver),
      (n += f(t).unusedTokens.length * 10),
      (f(t).score = n),
      d
        ? n < r && ((r = n), (s = t))
        : (r == null || n < r || i) && ((r = n), (s = t), i && (d = !0));
  ee(e, s || t);
}
function pa(e) {
  if (!e._d) {
    var t = mt(e._i),
      s = t.day === void 0 ? t.date : t.day;
    (e._a = Et(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function (r) {
        return r && parseInt(r, 10);
      }
    )),
      pt(e);
  }
}
function Da(e) {
  var t = new Ye(Mt(us(e)));
  return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
}
function us(e) {
  var t = e._i,
    s = e._f;
  return (
    (e._locale = e._locale || Q(e._l)),
    t === null || (s === void 0 && t === "")
      ? He({ nullInput: !0 })
      : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
        U(t)
          ? new Ye(Mt(t))
          : (De(t) ? (e._d = t) : L(s) ? Ma(e) : s ? Dt(e) : Ya(e),
            ht(e) || (e._d = null),
            e))
  );
}
function Ya(e) {
  var t = e._i;
  x(t)
    ? (e._d = new Date(l.now()))
    : De(t)
    ? (e._d = new Date(t.valueOf()))
    : typeof t == "string"
    ? ka(e)
    : L(t)
    ? ((e._a = Et(t.slice(0), function (s) {
        return parseInt(s, 10);
      })),
      pt(e))
    : oe(t)
    ? pa(e)
    : J(t)
    ? (e._d = new Date(t))
    : l.createFromInputFallback(e);
}
function ds(e, t, s, r, a) {
  var n = {};
  return (
    (t === !0 || t === !1) && ((r = t), (t = void 0)),
    (s === !0 || s === !1) && ((r = s), (s = void 0)),
    ((oe(e) && dt(e)) || (L(e) && e.length === 0)) && (e = void 0),
    (n._isAMomentObject = !0),
    (n._useUTC = n._isUTC = a),
    (n._l = s),
    (n._i = e),
    (n._f = t),
    (n._strict = r),
    Da(n)
  );
}
function v(e, t, s, r) {
  return ds(e, t, s, r, !1);
}
var Oa = F(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = v.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e < this ? this : e) : He();
    }
  ),
  Ta = F(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = v.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e > this ? this : e) : He();
    }
  );
function hs(e, t) {
  var s, r;
  if ((t.length === 1 && L(t[0]) && (t = t[0]), !t.length)) return v();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function ba() {
  var e = [].slice.call(arguments, 0);
  return hs("isBefore", e);
}
function xa() {
  var e = [].slice.call(arguments, 0);
  return hs("isAfter", e);
}
var Na = function () {
    return Date.now ? Date.now() : +new Date();
  },
  ke = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ];
function Wa(e) {
  var t,
    s = !1,
    r,
    a = ke.length;
  for (t in e)
    if (y(e, t) && !(p.call(ke, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[ke[r]]) {
      if (s) return !1;
      parseFloat(e[ke[r]]) !== _(e[ke[r]]) && (s = !0);
    }
  return !0;
}
function Pa() {
  return this._isValid;
}
function Ra() {
  return H(NaN);
}
function Be(e) {
  var t = mt(e),
    s = t.year || 0,
    r = t.quarter || 0,
    a = t.month || 0,
    n = t.week || t.isoWeek || 0,
    i = t.day || 0,
    d = t.hour || 0,
    c = t.minute || 0,
    k = t.second || 0,
    b = t.millisecond || 0;
  (this._isValid = Wa(t)),
    (this._milliseconds = +b + k * 1e3 + c * 6e4 + d * 1e3 * 60 * 60),
    (this._days = +i + n * 7),
    (this._months = +a + r * 3 + s * 12),
    (this._data = {}),
    (this._locale = Q()),
    this._bubble();
}
function We(e) {
  return e instanceof Be;
}
function ot(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Fa(e, t, s) {
  var r = Math.min(e.length, t.length),
    a = Math.abs(e.length - t.length),
    n = 0,
    i;
  for (i = 0; i < r; i++)
    ((s && e[i] !== t[i]) || (!s && _(e[i]) !== _(t[i]))) && n++;
  return n + a;
}
function fs(e, t) {
  h(e, 0, 0, function () {
    var s = this.utcOffset(),
      r = "+";
    return (
      s < 0 && ((s = -s), (r = "-")), r + A(~~(s / 60), 2) + t + A(~~s % 60, 2)
    );
  });
}
fs("Z", ":");
fs("ZZ", "");
u("Z", $e);
u("ZZ", $e);
S(["Z", "ZZ"], function (e, t, s) {
  (s._useUTC = !0), (s._tzm = Yt($e, e));
});
var Ca = /([\+\-]|\d\d)/gi;
function Yt(e, t) {
  var s = (t || "").match(e),
    r,
    a,
    n;
  return s === null
    ? null
    : ((r = s[s.length - 1] || []),
      (a = (r + "").match(Ca) || ["-", 0, 0]),
      (n = +(a[1] * 60) + _(a[2])),
      n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function Ot(e, t) {
  var s, r;
  return t._isUTC
    ? ((s = t.clone()),
      (r = (U(e) || De(e) ? e.valueOf() : v(e).valueOf()) - s.valueOf()),
      s._d.setTime(s._d.valueOf() + r),
      l.updateOffset(s, !1),
      s)
    : v(e).local();
}
function lt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
l.updateOffset = function () {};
function Ia(e, t, s) {
  var r = this._offset || 0,
    a;
  if (!this.isValid()) return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (((e = Yt($e, e)), e === null)) return this;
    } else Math.abs(e) < 16 && !s && (e = e * 60);
    return (
      !this._isUTC && t && (a = lt(this)),
      (this._offset = e),
      (this._isUTC = !0),
      a != null && this.add(a, "m"),
      r !== e &&
        (!t || this._changeInProgress
          ? ms(this, H(e - r, "m"), 1, !1)
          : this._changeInProgress ||
            ((this._changeInProgress = !0),
            l.updateOffset(this, !0),
            (this._changeInProgress = null))),
      this
    );
  } else return this._isUTC ? r : lt(this);
}
function La(e, t) {
  return e != null
    ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this)
    : -this.utcOffset();
}
function Ua(e) {
  return this.utcOffset(0, e);
}
function Ha(e) {
  return (
    this._isUTC &&
      (this.utcOffset(0, e),
      (this._isUTC = !1),
      e && this.subtract(lt(this), "m")),
    this
  );
}
function Ea() {
  if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Yt(or, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Aa(e) {
  return this.isValid()
    ? ((e = e ? v(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
    : !1;
}
function Va() {
  return (
    this.utcOffset() > this.clone().month(0).utcOffset() ||
    this.utcOffset() > this.clone().month(5).utcOffset()
  );
}
function Ga() {
  if (!x(this._isDSTShifted)) return this._isDSTShifted;
  var e = {},
    t;
  return (
    ft(e, this),
    (e = us(e)),
    e._a
      ? ((t = e._isUTC ? V(e._a) : v(e._a)),
        (this._isDSTShifted = this.isValid() && Fa(e._a, t.toArray()) > 0))
      : (this._isDSTShifted = !1),
    this._isDSTShifted
  );
}
function ja() {
  return this.isValid() ? !this._isUTC : !1;
}
function $a() {
  return this.isValid() ? this._isUTC : !1;
}
function cs() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var za = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
  Za =
    /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function H(e, t) {
  var s = e,
    r = null,
    a,
    n,
    i;
  return (
    We(e)
      ? (s = { ms: e._milliseconds, d: e._days, M: e._months })
      : J(e) || !isNaN(+e)
      ? ((s = {}), t ? (s[t] = +e) : (s.milliseconds = +e))
      : (r = za.exec(e))
      ? ((a = r[1] === "-" ? -1 : 1),
        (s = {
          y: 0,
          d: _(r[E]) * a,
          h: _(r[D]) * a,
          m: _(r[I]) * a,
          s: _(r[B]) * a,
          ms: _(ot(r[ie] * 1e3)) * a,
        }))
      : (r = Za.exec(e))
      ? ((a = r[1] === "-" ? -1 : 1),
        (s = {
          y: re(r[2], a),
          M: re(r[3], a),
          w: re(r[4], a),
          d: re(r[5], a),
          h: re(r[6], a),
          m: re(r[7], a),
          s: re(r[8], a),
        }))
      : s == null
      ? (s = {})
      : typeof s == "object" &&
        ("from" in s || "to" in s) &&
        ((i = Ba(v(s.from), v(s.to))),
        (s = {}),
        (s.ms = i.milliseconds),
        (s.M = i.months)),
    (n = new Be(s)),
    We(e) && y(e, "_locale") && (n._locale = e._locale),
    We(e) && y(e, "_isValid") && (n._isValid = e._isValid),
    n
  );
}
H.fn = Be.prototype;
H.invalid = Ra;
function re(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Ft(e, t) {
  var s = {};
  return (
    (s.months = t.month() - e.month() + (t.year() - e.year()) * 12),
    e.clone().add(s.months, "M").isAfter(t) && --s.months,
    (s.milliseconds = +t - +e.clone().add(s.months, "M")),
    s
  );
}
function Ba(e, t) {
  var s;
  return e.isValid() && t.isValid()
    ? ((t = Ot(t, e)),
      e.isBefore(t)
        ? (s = Ft(e, t))
        : ((s = Ft(t, e)),
          (s.milliseconds = -s.milliseconds),
          (s.months = -s.months)),
      s)
    : { milliseconds: 0, months: 0 };
}
function _s(e, t) {
  return function (s, r) {
    var a, n;
    return (
      r !== null &&
        !isNaN(+r) &&
        (Vt(
          t,
          "moment()." +
            t +
            "(period, number) is deprecated. Please use moment()." +
            t +
            "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        ),
        (n = s),
        (s = r),
        (r = n)),
      (a = H(s, r)),
      ms(this, a, e),
      this
    );
  };
}
function ms(e, t, s, r) {
  var a = t._milliseconds,
    n = ot(t._days),
    i = ot(t._months);
  !e.isValid() ||
    ((r = r == null ? !0 : r),
    i && Kt(e, Re(e, "Month") + i * s),
    n && $t(e, "Date", Re(e, "Date") + n * s),
    a && e._d.setTime(e._d.valueOf() + a * s),
    r && l.updateOffset(e, n || i));
}
var qa = _s(1, "add"),
  Ja = _s(-1, "subtract");
function ys(e) {
  return typeof e == "string" || e instanceof String;
}
function Qa(e) {
  return (
    U(e) ||
    De(e) ||
    ys(e) ||
    J(e) ||
    Xa(e) ||
    Ka(e) ||
    e === null ||
    e === void 0
  );
}
function Ka(e) {
  var t = oe(e) && !dt(e),
    s = !1,
    r = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms",
    ],
    a,
    n,
    i = r.length;
  for (a = 0; a < i; a += 1) (n = r[a]), (s = s || y(e, n));
  return t && s;
}
function Xa(e) {
  var t = L(e),
    s = !1;
  return (
    t &&
      (s =
        e.filter(function (r) {
          return !J(r) && ys(e);
        }).length === 0),
    t && s
  );
}
function en(e) {
  var t = oe(e) && !dt(e),
    s = !1,
    r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
    a,
    n;
  for (a = 0; a < r.length; a += 1) (n = r[a]), (s = s || y(e, n));
  return t && s;
}
function tn(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6
    ? "sameElse"
    : s < -1
    ? "lastWeek"
    : s < 0
    ? "lastDay"
    : s < 1
    ? "sameDay"
    : s < 2
    ? "nextDay"
    : s < 7
    ? "nextWeek"
    : "sameElse";
}
function sn(e, t) {
  arguments.length === 1 &&
    (arguments[0]
      ? Qa(arguments[0])
        ? ((e = arguments[0]), (t = void 0))
        : en(arguments[0]) && ((t = arguments[0]), (e = void 0))
      : ((e = void 0), (t = void 0)));
  var s = e || v(),
    r = Ot(s, this).startOf("day"),
    a = l.calendarFormat(this, r) || "sameElse",
    n = t && (G(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(n || this.localeData().calendar(a, this, v(s)));
}
function rn() {
  return new Ye(this);
}
function an(e, t) {
  var s = U(e) ? e : v(e);
  return this.isValid() && s.isValid()
    ? ((t = C(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() > s.valueOf()
        : s.valueOf() < this.clone().startOf(t).valueOf())
    : !1;
}
function nn(e, t) {
  var s = U(e) ? e : v(e);
  return this.isValid() && s.isValid()
    ? ((t = C(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() < s.valueOf()
        : this.clone().endOf(t).valueOf() < s.valueOf())
    : !1;
}
function on(e, t, s, r) {
  var a = U(e) ? e : v(e),
    n = U(t) ? t : v(t);
  return this.isValid() && a.isValid() && n.isValid()
    ? ((r = r || "()"),
      (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) &&
        (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s)))
    : !1;
}
function ln(e, t) {
  var s = U(e) ? e : v(e),
    r;
  return this.isValid() && s.isValid()
    ? ((t = C(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() === s.valueOf()
        : ((r = s.valueOf()),
          this.clone().startOf(t).valueOf() <= r &&
            r <= this.clone().endOf(t).valueOf()))
    : !1;
}
function un(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function dn(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function hn(e, t, s) {
  var r, a, n;
  if (!this.isValid()) return NaN;
  if (((r = Ot(e, this)), !r.isValid())) return NaN;
  switch (((a = (r.utcOffset() - this.utcOffset()) * 6e4), (t = C(t)), t)) {
    case "year":
      n = Pe(this, r) / 12;
      break;
    case "month":
      n = Pe(this, r);
      break;
    case "quarter":
      n = Pe(this, r) / 3;
      break;
    case "second":
      n = (this - r) / 1e3;
      break;
    case "minute":
      n = (this - r) / 6e4;
      break;
    case "hour":
      n = (this - r) / 36e5;
      break;
    case "day":
      n = (this - r - a) / 864e5;
      break;
    case "week":
      n = (this - r - a) / 6048e5;
      break;
    default:
      n = this - r;
  }
  return s ? n : R(n);
}
function Pe(e, t) {
  if (e.date() < t.date()) return -Pe(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()),
    r = e.clone().add(s, "months"),
    a,
    n;
  return (
    t - r < 0
      ? ((a = e.clone().add(s - 1, "months")), (n = (t - r) / (r - a)))
      : ((a = e.clone().add(s + 1, "months")), (n = (t - r) / (a - r))),
    -(s + n) || 0
  );
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function fn() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function cn(e) {
  if (!this.isValid()) return null;
  var t = e !== !0,
    s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999
    ? Ne(
        s,
        t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
      )
    : G(Date.prototype.toISOString)
    ? t
      ? this.toDate().toISOString()
      : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
          .toISOString()
          .replace("Z", Ne(s, "Z"))
    : Ne(s, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}
function _n() {
  if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
  var e = "moment",
    t = "",
    s,
    r,
    a,
    n;
  return (
    this.isLocal() ||
      ((e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
      (t = "Z")),
    (s = "[" + e + '("]'),
    (r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
    (a = "-MM-DD[T]HH:mm:ss.SSS"),
    (n = t + '[")]'),
    this.format(s + r + a + n)
  );
}
function mn(e) {
  e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
  var t = Ne(this, e);
  return this.localeData().postformat(t);
}
function yn(e, t) {
  return this.isValid() && ((U(e) && e.isValid()) || v(e).isValid())
    ? H({ to: this, from: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function wn(e) {
  return this.from(v(), e);
}
function kn(e, t) {
  return this.isValid() && ((U(e) && e.isValid()) || v(e).isValid())
    ? H({ from: this, to: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function Sn(e) {
  return this.to(v(), e);
}
function ws(e) {
  var t;
  return e === void 0
    ? this._locale._abbr
    : ((t = Q(e)), t != null && (this._locale = t), this);
}
var ks = F(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function (e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ss() {
  return this._locale;
}
var Ie = 1e3,
  ce = 60 * Ie,
  Le = 60 * ce,
  vs = (365 * 400 + 97) * 24 * Le;
function _e(e, t) {
  return ((e % t) + t) % t;
}
function gs(e, t, s) {
  return e < 100 && e >= 0
    ? new Date(e + 400, t, s) - vs
    : new Date(e, t, s).valueOf();
}
function Ms(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - vs : Date.UTC(e, t, s);
}
function vn(e) {
  var t, s;
  if (((e = C(e)), e === void 0 || e === "millisecond" || !this.isValid()))
    return this;
  switch (((s = this._isUTC ? Ms : gs), e)) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(this.year(), this.month() - (this.month() % 3), 1);
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(this.year(), this.month(), this.date() - this.weekday());
      break;
    case "isoWeek":
      t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      (t = this._d.valueOf()),
        (t -= _e(t + (this._isUTC ? 0 : this.utcOffset() * ce), Le));
      break;
    case "minute":
      (t = this._d.valueOf()), (t -= _e(t, ce));
      break;
    case "second":
      (t = this._d.valueOf()), (t -= _e(t, Ie));
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function gn(e) {
  var t, s;
  if (((e = C(e)), e === void 0 || e === "millisecond" || !this.isValid()))
    return this;
  switch (((s = this._isUTC ? Ms : gs), e)) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
      break;
    case "isoWeek":
      t =
        s(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      (t = this._d.valueOf()),
        (t += Le - _e(t + (this._isUTC ? 0 : this.utcOffset() * ce), Le) - 1);
      break;
    case "minute":
      (t = this._d.valueOf()), (t += ce - _e(t, ce) - 1);
      break;
    case "second":
      (t = this._d.valueOf()), (t += Ie - _e(t, Ie) - 1);
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function Mn() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function pn() {
  return Math.floor(this.valueOf() / 1e3);
}
function Dn() {
  return new Date(this.valueOf());
}
function Yn() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond(),
  ];
}
function On() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds(),
  };
}
function Tn() {
  return this.isValid() ? this.toISOString() : null;
}
function bn() {
  return ht(this);
}
function xn() {
  return ee({}, f(this));
}
function Nn() {
  return f(this).overflow;
}
function Wn() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict,
  };
}
h("N", 0, 0, "eraAbbr");
h("NN", 0, 0, "eraAbbr");
h("NNN", 0, 0, "eraAbbr");
h("NNNN", 0, 0, "eraName");
h("NNNNN", 0, 0, "eraNarrow");
h("y", ["y", 1], "yo", "eraYear");
h("y", ["yy", 2], 0, "eraYear");
h("y", ["yyy", 3], 0, "eraYear");
h("y", ["yyyy", 4], 0, "eraYear");
u("N", Tt);
u("NN", Tt);
u("NNN", Tt);
u("NNNN", Vn);
u("NNNNN", Gn);
S(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, s, r) {
  var a = s._locale.erasParse(e, r, s._strict);
  a ? (f(s).era = a) : (f(s).invalidEra = e);
});
u("y", ye);
u("yy", ye);
u("yyy", ye);
u("yyyy", ye);
u("yo", jn);
S(["y", "yy", "yyy", "yyyy"], Y);
S(["yo"], function (e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex &&
    (a = e.match(s._locale._eraYearOrdinalRegex)),
    s._locale.eraYearOrdinalParse
      ? (t[Y] = s._locale.eraYearOrdinalParse(e, a))
      : (t[Y] = parseInt(e, 10));
});
function Pn(e, t) {
  var s,
    r,
    a,
    n = this._eras || Q("en")._eras;
  for (s = 0, r = n.length; s < r; ++s) {
    switch (typeof n[s].since) {
      case "string":
        (a = l(n[s].since).startOf("day")), (n[s].since = a.valueOf());
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        (a = l(n[s].until).startOf("day").valueOf()),
          (n[s].until = a.valueOf());
        break;
    }
  }
  return n;
}
function Rn(e, t, s) {
  var r,
    a,
    n = this.eras(),
    i,
    d,
    c;
  for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
    if (
      ((i = n[r].name.toUpperCase()),
      (d = n[r].abbr.toUpperCase()),
      (c = n[r].narrow.toUpperCase()),
      s)
    )
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (d === e) return n[r];
          break;
        case "NNNN":
          if (i === e) return n[r];
          break;
        case "NNNNN":
          if (c === e) return n[r];
          break;
      }
    else if ([i, d, c].indexOf(e) >= 0) return n[r];
}
function Fn(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0
    ? l(e.since).year()
    : l(e.since).year() + (t - e.offset) * s;
}
function Cn() {
  var e,
    t,
    s,
    r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (
      ((s = this.clone().startOf("day").valueOf()),
      (r[e].since <= s && s <= r[e].until) ||
        (r[e].until <= s && s <= r[e].since))
    )
      return r[e].name;
  return "";
}
function In() {
  var e,
    t,
    s,
    r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (
      ((s = this.clone().startOf("day").valueOf()),
      (r[e].since <= s && s <= r[e].until) ||
        (r[e].until <= s && s <= r[e].since))
    )
      return r[e].narrow;
  return "";
}
function Ln() {
  var e,
    t,
    s,
    r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (
      ((s = this.clone().startOf("day").valueOf()),
      (r[e].since <= s && s <= r[e].until) ||
        (r[e].until <= s && s <= r[e].since))
    )
      return r[e].abbr;
  return "";
}
function Un() {
  var e,
    t,
    s,
    r,
    a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (
      ((s = a[e].since <= a[e].until ? 1 : -1),
      (r = this.clone().startOf("day").valueOf()),
      (a[e].since <= r && r <= a[e].until) ||
        (a[e].until <= r && r <= a[e].since))
    )
      return (this.year() - l(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function Hn(e) {
  return (
    y(this, "_erasNameRegex") || bt.call(this),
    e ? this._erasNameRegex : this._erasRegex
  );
}
function En(e) {
  return (
    y(this, "_erasAbbrRegex") || bt.call(this),
    e ? this._erasAbbrRegex : this._erasRegex
  );
}
function An(e) {
  return (
    y(this, "_erasNarrowRegex") || bt.call(this),
    e ? this._erasNarrowRegex : this._erasRegex
  );
}
function Tt(e, t) {
  return t.erasAbbrRegex(e);
}
function Vn(e, t) {
  return t.erasNameRegex(e);
}
function Gn(e, t) {
  return t.erasNarrowRegex(e);
}
function jn(e, t) {
  return t._eraYearOrdinalRegex || ye;
}
function bt() {
  var e = [],
    t = [],
    s = [],
    r = [],
    a,
    n,
    i = this.eras();
  for (a = 0, n = i.length; a < n; ++a)
    t.push(N(i[a].name)),
      e.push(N(i[a].abbr)),
      s.push(N(i[a].narrow)),
      r.push(N(i[a].name)),
      r.push(N(i[a].abbr)),
      r.push(N(i[a].narrow));
  (this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i")),
    (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
    (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
    (this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i"));
}
h(0, ["gg", 2], 0, function () {
  return this.weekYear() % 100;
});
h(0, ["GG", 2], 0, function () {
  return this.isoWeekYear() % 100;
});
function qe(e, t) {
  h(0, [e, e.length], 0, t);
}
qe("gggg", "weekYear");
qe("ggggg", "weekYear");
qe("GGGG", "isoWeekYear");
qe("GGGGG", "isoWeekYear");
O("weekYear", "gg");
O("isoWeekYear", "GG");
T("weekYear", 1);
T("isoWeekYear", 1);
u("G", je);
u("g", je);
u("GG", g, W);
u("gg", g, W);
u("GGGG", wt, yt);
u("gggg", wt, yt);
u("GGGGG", Ge, Ae);
u("ggggg", Ge, Ae);
Te(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, s, r) {
  t[r.substr(0, 2)] = _(e);
});
Te(["gg", "GG"], function (e, t, s, r) {
  t[r] = l.parseTwoDigitYear(e);
});
function $n(e) {
  return ps.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function zn(e) {
  return ps.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function Zn() {
  return q(this.year(), 1, 4);
}
function Bn() {
  return q(this.isoWeekYear(), 1, 4);
}
function qn() {
  var e = this.localeData()._week;
  return q(this.year(), e.dow, e.doy);
}
function Jn() {
  var e = this.localeData()._week;
  return q(this.weekYear(), e.dow, e.doy);
}
function ps(e, t, s, r, a) {
  var n;
  return e == null
    ? Me(this, r, a).year
    : ((n = q(e, r, a)), t > n && (t = n), Qn.call(this, e, t, s, r, a));
}
function Qn(e, t, s, r, a) {
  var n = ss(e, t, s, r, a),
    i = ge(n.year, 0, n.dayOfYear);
  return (
    this.year(i.getUTCFullYear()),
    this.month(i.getUTCMonth()),
    this.date(i.getUTCDate()),
    this
  );
}
h("Q", 0, "Qo", "quarter");
O("quarter", "Q");
T("quarter", 7);
u("Q", zt);
S("Q", function (e, t) {
  t[Z] = (_(e) - 1) * 3;
});
function Kn(e) {
  return e == null
    ? Math.ceil((this.month() + 1) / 3)
    : this.month((e - 1) * 3 + (this.month() % 3));
}
h("D", ["DD", 2], "Do", "date");
O("date", "D");
T("date", 9);
u("D", g);
u("DD", g, W);
u("Do", function (e, t) {
  return e
    ? t._dayOfMonthOrdinalParse || t._ordinalParse
    : t._dayOfMonthOrdinalParseLenient;
});
S(["D", "DD"], E);
S("Do", function (e, t) {
  t[E] = _(e.match(g)[0]);
});
var Ds = me("Date", !0);
h("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
O("dayOfYear", "DDD");
T("dayOfYear", 4);
u("DDD", Ve);
u("DDDD", Zt);
S(["DDD", "DDDD"], function (e, t, s) {
  s._dayOfYear = _(e);
});
function Xn(e) {
  var t =
    Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
h("m", ["mm", 2], 0, "minute");
O("minute", "m");
T("minute", 14);
u("m", g);
u("mm", g, W);
S(["m", "mm"], I);
var ei = me("Minutes", !1);
h("s", ["ss", 2], 0, "second");
O("second", "s");
T("second", 15);
u("s", g);
u("ss", g, W);
S(["s", "ss"], B);
var ti = me("Seconds", !1);
h("S", 0, 0, function () {
  return ~~(this.millisecond() / 100);
});
h(0, ["SS", 2], 0, function () {
  return ~~(this.millisecond() / 10);
});
h(0, ["SSS", 3], 0, "millisecond");
h(0, ["SSSS", 4], 0, function () {
  return this.millisecond() * 10;
});
h(0, ["SSSSS", 5], 0, function () {
  return this.millisecond() * 100;
});
h(0, ["SSSSSS", 6], 0, function () {
  return this.millisecond() * 1e3;
});
h(0, ["SSSSSSS", 7], 0, function () {
  return this.millisecond() * 1e4;
});
h(0, ["SSSSSSSS", 8], 0, function () {
  return this.millisecond() * 1e5;
});
h(0, ["SSSSSSSSS", 9], 0, function () {
  return this.millisecond() * 1e6;
});
O("millisecond", "ms");
T("millisecond", 16);
u("S", Ve, zt);
u("SS", Ve, W);
u("SSS", Ve, Zt);
var te, Ys;
for (te = "SSSS"; te.length <= 9; te += "S") u(te, ye);
function si(e, t) {
  t[ie] = _(("0." + e) * 1e3);
}
for (te = "S"; te.length <= 9; te += "S") S(te, si);
Ys = me("Milliseconds", !1);
h("z", 0, 0, "zoneAbbr");
h("zz", 0, 0, "zoneName");
function ri() {
  return this._isUTC ? "UTC" : "";
}
function ai() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var o = Ye.prototype;
o.add = qa;
o.calendar = sn;
o.clone = rn;
o.diff = hn;
o.endOf = gn;
o.format = mn;
o.from = yn;
o.fromNow = wn;
o.to = kn;
o.toNow = Sn;
o.get = nr;
o.invalidAt = Nn;
o.isAfter = an;
o.isBefore = nn;
o.isBetween = on;
o.isSame = ln;
o.isSameOrAfter = un;
o.isSameOrBefore = dn;
o.isValid = bn;
o.lang = ks;
o.locale = ws;
o.localeData = Ss;
o.max = Ta;
o.min = Oa;
o.parsingFlags = xn;
o.set = ir;
o.startOf = vn;
o.subtract = Ja;
o.toArray = Yn;
o.toObject = On;
o.toDate = Dn;
o.toISOString = cn;
o.inspect = _n;
typeof Symbol < "u" &&
  Symbol.for != null &&
  (o[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return "Moment<" + this.format() + ">";
  });
o.toJSON = Tn;
o.toString = fn;
o.unix = pn;
o.valueOf = Mn;
o.creationData = Wn;
o.eraName = Cn;
o.eraNarrow = In;
o.eraAbbr = Ln;
o.eraYear = Un;
o.year = ts;
o.isLeapYear = Yr;
o.weekYear = $n;
o.isoWeekYear = zn;
o.quarter = o.quarters = Kn;
o.month = Xt;
o.daysInMonth = Mr;
o.week = o.weeks = Wr;
o.isoWeek = o.isoWeeks = Pr;
o.weeksInYear = qn;
o.weeksInWeekYear = Jn;
o.isoWeeksInYear = Zn;
o.isoWeeksInISOWeekYear = Bn;
o.date = Ds;
o.day = o.days = $r;
o.weekday = zr;
o.isoWeekday = Zr;
o.dayOfYear = Xn;
o.hour = o.hours = ea;
o.minute = o.minutes = ei;
o.second = o.seconds = ti;
o.millisecond = o.milliseconds = Ys;
o.utcOffset = Ia;
o.utc = Ua;
o.local = Ha;
o.parseZone = Ea;
o.hasAlignedHourOffset = Aa;
o.isDST = Va;
o.isLocal = ja;
o.isUtcOffset = $a;
o.isUtc = cs;
o.isUTC = cs;
o.zoneAbbr = ri;
o.zoneName = ai;
o.dates = F("dates accessor is deprecated. Use date instead.", Ds);
o.months = F("months accessor is deprecated. Use month instead", Xt);
o.years = F("years accessor is deprecated. Use year instead", ts);
o.zone = F(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  La
);
o.isDSTShifted = F(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Ga
);
function ni(e) {
  return v(e * 1e3);
}
function ii() {
  return v.apply(null, arguments).parseZone();
}
function Os(e) {
  return e;
}
var w = ct.prototype;
w.calendar = $s;
w.longDateFormat = qs;
w.invalidDate = Qs;
w.ordinal = er;
w.preparse = Os;
w.postformat = Os;
w.relativeTime = sr;
w.pastFuture = rr;
w.set = Gs;
w.eras = Pn;
w.erasParse = Rn;
w.erasConvertYear = Fn;
w.erasAbbrRegex = En;
w.erasNameRegex = Hn;
w.erasNarrowRegex = An;
w.months = kr;
w.monthsShort = Sr;
w.monthsParse = gr;
w.monthsRegex = Dr;
w.monthsShortRegex = pr;
w.week = Tr;
w.firstDayOfYear = Nr;
w.firstDayOfWeek = xr;
w.weekdays = Er;
w.weekdaysMin = Vr;
w.weekdaysShort = Ar;
w.weekdaysParse = jr;
w.weekdaysRegex = Br;
w.weekdaysShortRegex = qr;
w.weekdaysMinRegex = Jr;
w.isPM = Kr;
w.meridiem = ta;
function Ue(e, t, s, r) {
  var a = Q(),
    n = V().set(r, t);
  return a[s](n, e);
}
function Ts(e, t, s) {
  if ((J(e) && ((t = e), (e = void 0)), (e = e || ""), t != null))
    return Ue(e, t, s, "month");
  var r,
    a = [];
  for (r = 0; r < 12; r++) a[r] = Ue(e, r, s, "month");
  return a;
}
function xt(e, t, s, r) {
  typeof e == "boolean"
    ? (J(t) && ((s = t), (t = void 0)), (t = t || ""))
    : ((t = e),
      (s = t),
      (e = !1),
      J(t) && ((s = t), (t = void 0)),
      (t = t || ""));
  var a = Q(),
    n = e ? a._week.dow : 0,
    i,
    d = [];
  if (s != null) return Ue(t, (s + n) % 7, r, "day");
  for (i = 0; i < 7; i++) d[i] = Ue(t, (i + n) % 7, r, "day");
  return d;
}
function oi(e, t) {
  return Ts(e, t, "months");
}
function li(e, t) {
  return Ts(e, t, "monthsShort");
}
function ui(e, t, s) {
  return xt(e, t, s, "weekdays");
}
function di(e, t, s) {
  return xt(e, t, s, "weekdaysShort");
}
function hi(e, t, s) {
  return xt(e, t, s, "weekdaysMin");
}
se("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD",
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC",
    },
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function (e) {
    var t = e % 10,
      s =
        _((e % 100) / 10) === 1
          ? "th"
          : t === 1
          ? "st"
          : t === 2
          ? "nd"
          : t === 3
          ? "rd"
          : "th";
    return e + s;
  },
});
l.lang = F("moment.lang is deprecated. Use moment.locale instead.", se);
l.langData = F(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Q
);
var $ = Math.abs;
function fi() {
  var e = this._data;
  return (
    (this._milliseconds = $(this._milliseconds)),
    (this._days = $(this._days)),
    (this._months = $(this._months)),
    (e.milliseconds = $(e.milliseconds)),
    (e.seconds = $(e.seconds)),
    (e.minutes = $(e.minutes)),
    (e.hours = $(e.hours)),
    (e.months = $(e.months)),
    (e.years = $(e.years)),
    this
  );
}
function bs(e, t, s, r) {
  var a = H(t, s);
  return (
    (e._milliseconds += r * a._milliseconds),
    (e._days += r * a._days),
    (e._months += r * a._months),
    e._bubble()
  );
}
function ci(e, t) {
  return bs(this, e, t, 1);
}
function _i(e, t) {
  return bs(this, e, t, -1);
}
function Ct(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function mi() {
  var e = this._milliseconds,
    t = this._days,
    s = this._months,
    r = this._data,
    a,
    n,
    i,
    d,
    c;
  return (
    (e >= 0 && t >= 0 && s >= 0) ||
      (e <= 0 && t <= 0 && s <= 0) ||
      ((e += Ct(ut(s) + t) * 864e5), (t = 0), (s = 0)),
    (r.milliseconds = e % 1e3),
    (a = R(e / 1e3)),
    (r.seconds = a % 60),
    (n = R(a / 60)),
    (r.minutes = n % 60),
    (i = R(n / 60)),
    (r.hours = i % 24),
    (t += R(i / 24)),
    (c = R(xs(t))),
    (s += c),
    (t -= Ct(ut(c))),
    (d = R(s / 12)),
    (s %= 12),
    (r.days = t),
    (r.months = s),
    (r.years = d),
    this
  );
}
function xs(e) {
  return (e * 4800) / 146097;
}
function ut(e) {
  return (e * 146097) / 4800;
}
function yi(e) {
  if (!this.isValid()) return NaN;
  var t,
    s,
    r = this._milliseconds;
  if (((e = C(e)), e === "month" || e === "quarter" || e === "year"))
    switch (((t = this._days + r / 864e5), (s = this._months + xs(t)), e)) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (((t = this._days + Math.round(ut(this._months))), e)) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function wi() {
  return this.isValid()
    ? this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        _(this._months / 12) * 31536e6
    : NaN;
}
function K(e) {
  return function () {
    return this.as(e);
  };
}
var ki = K("ms"),
  Si = K("s"),
  vi = K("m"),
  gi = K("h"),
  Mi = K("d"),
  pi = K("w"),
  Di = K("M"),
  Yi = K("Q"),
  Oi = K("y");
function Ti() {
  return H(this);
}
function bi(e) {
  return (e = C(e)), this.isValid() ? this[e + "s"]() : NaN;
}
function le(e) {
  return function () {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var xi = le("milliseconds"),
  Ni = le("seconds"),
  Wi = le("minutes"),
  Pi = le("hours"),
  Ri = le("days"),
  Fi = le("months"),
  Ci = le("years");
function Ii() {
  return R(this.days() / 7);
}
var z = Math.round,
  he = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
function Li(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function Ui(e, t, s, r) {
  var a = H(e).abs(),
    n = z(a.as("s")),
    i = z(a.as("m")),
    d = z(a.as("h")),
    c = z(a.as("d")),
    k = z(a.as("M")),
    b = z(a.as("w")),
    j = z(a.as("y")),
    X =
      (n <= s.ss && ["s", n]) ||
      (n < s.s && ["ss", n]) ||
      (i <= 1 && ["m"]) ||
      (i < s.m && ["mm", i]) ||
      (d <= 1 && ["h"]) ||
      (d < s.h && ["hh", d]) ||
      (c <= 1 && ["d"]) ||
      (c < s.d && ["dd", c]);
  return (
    s.w != null && (X = X || (b <= 1 && ["w"]) || (b < s.w && ["ww", b])),
    (X = X ||
      (k <= 1 && ["M"]) ||
      (k < s.M && ["MM", k]) ||
      (j <= 1 && ["y"]) || ["yy", j]),
    (X[2] = t),
    (X[3] = +e > 0),
    (X[4] = r),
    Li.apply(null, X)
  );
}
function Hi(e) {
  return e === void 0 ? z : typeof e == "function" ? ((z = e), !0) : !1;
}
function Ei(e, t) {
  return he[e] === void 0
    ? !1
    : t === void 0
    ? he[e]
    : ((he[e] = t), e === "s" && (he.ss = t - 1), !0);
}
function Ai(e, t) {
  if (!this.isValid()) return this.localeData().invalidDate();
  var s = !1,
    r = he,
    a,
    n;
  return (
    typeof e == "object" && ((t = e), (e = !1)),
    typeof e == "boolean" && (s = e),
    typeof t == "object" &&
      ((r = Object.assign({}, he, t)),
      t.s != null && t.ss == null && (r.ss = t.s - 1)),
    (a = this.localeData()),
    (n = Ui(this, !s, r, a)),
    s && (n = a.pastFuture(+this, n)),
    a.postformat(n)
  );
}
var tt = Math.abs;
function ue(e) {
  return (e > 0) - (e < 0) || +e;
}
function Je() {
  if (!this.isValid()) return this.localeData().invalidDate();
  var e = tt(this._milliseconds) / 1e3,
    t = tt(this._days),
    s = tt(this._months),
    r,
    a,
    n,
    i,
    d = this.asSeconds(),
    c,
    k,
    b,
    j;
  return d
    ? ((r = R(e / 60)),
      (a = R(r / 60)),
      (e %= 60),
      (r %= 60),
      (n = R(s / 12)),
      (s %= 12),
      (i = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
      (c = d < 0 ? "-" : ""),
      (k = ue(this._months) !== ue(d) ? "-" : ""),
      (b = ue(this._days) !== ue(d) ? "-" : ""),
      (j = ue(this._milliseconds) !== ue(d) ? "-" : ""),
      c +
        "P" +
        (n ? k + n + "Y" : "") +
        (s ? k + s + "M" : "") +
        (t ? b + t + "D" : "") +
        (a || r || e ? "T" : "") +
        (a ? j + a + "H" : "") +
        (r ? j + r + "M" : "") +
        (e ? j + i + "S" : ""))
    : "P0D";
}
var m = Be.prototype;
m.isValid = Pa;
m.abs = fi;
m.add = ci;
m.subtract = _i;
m.as = yi;
m.asMilliseconds = ki;
m.asSeconds = Si;
m.asMinutes = vi;
m.asHours = gi;
m.asDays = Mi;
m.asWeeks = pi;
m.asMonths = Di;
m.asQuarters = Yi;
m.asYears = Oi;
m.valueOf = wi;
m._bubble = mi;
m.clone = Ti;
m.get = bi;
m.milliseconds = xi;
m.seconds = Ni;
m.minutes = Wi;
m.hours = Pi;
m.days = Ri;
m.weeks = Ii;
m.months = Fi;
m.years = Ci;
m.humanize = Ai;
m.toISOString = Je;
m.toString = Je;
m.toJSON = Je;
m.locale = ws;
m.localeData = Ss;
m.toIsoString = F(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Je
);
m.lang = ks;
h("X", 0, 0, "unix");
h("x", 0, 0, "valueOf");
u("x", je);
u("X", lr);
S("X", function (e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
S("x", function (e, t, s) {
  s._d = new Date(_(e));
}); //! moment.js
l.version = "2.29.4";
As(v);
l.fn = o;
l.min = ba;
l.max = xa;
l.now = Na;
l.utc = V;
l.unix = ni;
l.months = oi;
l.isDate = De;
l.locale = se;
l.invalid = He;
l.duration = H;
l.isMoment = U;
l.weekdays = ui;
l.parseZone = ii;
l.localeData = Q;
l.isDuration = We;
l.monthsShort = li;
l.weekdaysMin = hi;
l.defineLocale = gt;
l.updateLocale = na;
l.locales = ia;
l.weekdaysShort = di;
l.normalizeUnits = C;
l.relativeTimeRounding = Hi;
l.relativeTimeThreshold = Ei;
l.calendarFormat = tn;
l.prototype = o;
l.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM",
};
const Nt = (e) => (Lt("data-v-402bde37"), (e = e()), Ut(), e),
  Vi = { class: "card-container d-flex" },
  Gi = { class: "card day-card" },
  ji = { class: "card-content" },
  $i = { class: "card-title" },
  zi = { key: 0, class: "ok-edit-img", src: Ls, alt: "" },
  Zi = { class: "card-body" },
  Bi = { class: "d-flex justify-content-end w-100 align-self-baseline" },
  qi = { key: 0, class: "card-time me-auto align-middle" },
  Ji = Nt(() => P("img", { class: "ok-edit-img", src: Us, alt: "" }, null, -1)),
  Qi = [Ji],
  Ki = Nt(() => P("img", { class: "ok-edit-img", src: Hs, alt: "" }, null, -1)),
  Xi = [Ki],
  eo = Nt(() => P("img", { class: "close-img", src: Es, alt: "" }, null, -1)),
  to = [eo],
  so = {
    __name: "Cards",
    props: { id: Number, title: String, body: String, time: String },
    setup(e) {
      const t = e,
        s = (a) => {
          Ns(a), alert("deleted", a);
        },
        r = (a) => {
          Ws(a), alert("completed!", a);
        };
      return (a, n) => (
        ae(),
        ne("div", Vi, [
          P("div", Gi, [
            P("div", ji, [
              P("div", $i, [
                t.time ? (ae(), ne("img", zi)) : st("", !0),
                Ps(" " + Qe(t.title), 1),
              ]),
              P("div", Zi, Qe(t.body), 1),
              P("div", Bi, [
                t.time
                  ? (ae(),
                    ne("p", qi, Qe(Rs(l)(t.time).format("D-M-Y, hh:mm:ss")), 1))
                  : st("", !0),
                P(
                  "div",
                  { onClick: n[0] || (n[0] = (i) => a.$emit("edit-modal")) },
                  Qi
                ),
                P("div", { onClick: n[1] || (n[1] = (i) => r(t.id)) }, Xi),
              ]),
            ]),
          ]),
          P(
            "div",
            { class: "close", onClick: n[2] || (n[2] = (i) => s(t.id)) },
            to
          ),
        ])
      );
    },
  },
  ro = It(so, [["__scopeId", "data-v-402bde37"]]);
const ao = (e) => (Lt("data-v-988b729c"), (e = e()), Ut(), e),
  no = { class: "container day-case" },
  io = ao(() => P("h1", null, "Tasks", -1)),
  oo = {
    key: 0,
    class: "row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4",
  },
  lo = { class: "col mb-4" },
  uo = {
    __name: "Tasks",
    props: { tasks: Object, loaded: Boolean },
    setup(e) {
      return (t, s) => (
        ae(),
        ne("div", no, [
          io,
          e.loaded
            ? (ae(),
              ne("div", oo, [
                (ae(!0),
                ne(
                  Fs,
                  null,
                  Cs(
                    e.tasks,
                    (r) => (
                      ae(),
                      ne("div", lo, [
                        Is(
                          ro,
                          {
                            id: r.id,
                            title: r.title,
                            body: r.content,
                            time: r.max_time,
                          },
                          null,
                          8,
                          ["id", "title", "body", "time"]
                        ),
                      ])
                    )
                  ),
                  256
                )),
              ]))
            : st("", !0),
        ])
      );
    },
  },
  co = It(uo, [["__scopeId", "data-v-988b729c"]]);
export { co as T };
