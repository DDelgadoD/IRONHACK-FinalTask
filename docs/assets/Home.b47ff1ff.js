import { _ as Y3, a as X3 } from "./title.41b47a33.js";
import {
  u as G3,
  i as W3,
  d as $3,
  c as H3,
  a as K3,
} from "./index.0b576dc2.js";
import {
  _ as V0,
  r as n2,
  o as Z0,
  a as q0,
  b as I1,
  c as N1,
  d as l1,
  e as L1,
  w as y2,
  f as j3,
  g as U0,
  h as Y0,
  i as x2,
  p as Q3,
  j as J3,
  k as tt,
  F as et,
} from "./index.4bfbbcf5.js";
import { u as it } from "./auth.a934d963.js";
import "./index.5913c7f2.js";
const rt = "/IRONHACK-FinalTask/assets/hogar.695494ed.png",
  at = "/IRONHACK-FinalTask/assets/papelera-color.d6df6a0e.png",
  nt = "/IRONHACK-FinalTask/assets/papelera.a1f24fea.png",
  st = "/IRONHACK-FinalTask/assets/objetivo-color.fe197f5b.png",
  ot = "/IRONHACK-FinalTask/assets/objetivo.668705ac.png",
  ct = "/IRONHACK-FinalTask/assets/ajuste.1f96ead0.png";
const X0 = (u) => (Q3("data-v-e50b2bed"), (u = u()), J3(), u),
  ut = { key: 0, class: "navbar navbar-expand-lg navbar-light background" },
  lt = { class: "container-fluid" },
  ft = U0(
    '<a class="navbar-brand" data-v-e50b2bed><img class="icono" src="' +
      Y3 +
      '" alt="Icono App" data-v-e50b2bed><img class="logo" src="' +
      X3 +
      '" alt="ControlAPP" data-v-e50b2bed></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-e50b2bed><span class="navbar-toggler-icon" data-v-e50b2bed></span></button>',
    2
  ),
  _t = {
    class: "collapse navbar-collapse justify-content-between mx-5",
    id: "navbarNav",
  },
  ht = { class: "navbar-nav" },
  dt = { class: "nav-item" },
  pt = X0(() => l1("img", { class: "icono", src: rt }, null, -1)),
  mt = { class: "nav-item" },
  gt = { key: 0, class: "icono", src: at },
  vt = { key: 1, class: "icono", src: nt },
  yt = { class: "nav-item" },
  xt = { key: 0, class: "icono", src: st },
  bt = { key: 1, class: "icono", src: ot },
  Tt = { class: "nav-item" },
  Ct = X0(() => l1("img", { class: "icono", src: ct }, null, -1)),
  wt = {
    __name: "Navbar",
    setup(u) {
      const t = G3(),
        e = n2(t.discarded),
        i = n2(t.completed),
        r = n2(void 0),
        a = n2(!1),
        n = n2({ discarded: [], completed: [], active: [] }),
        s = async () => {
          const o = await K3();
          alert(o), Y0.push("/login");
        };
      return (
        Z0(async () => {
          (r.value = await W3()),
            r.value.map((o) =>
              o.discarded
                ? n.value.discarded.push(o)
                : o.completed
                ? n.value.completed.push(o)
                : n.value.active.push(o)
            ),
            n.value.discarded.length > 0 && $3(),
            n.value.completed.length > 0 && H3(),
            (a.value = !0);
        }),
        (o, c) => {
          const l = q0("router-link");
          return a.value
            ? (I1(),
              N1("nav", ut, [
                l1("div", lt, [
                  ft,
                  l1("div", _t, [
                    l1("ul", ht, [
                      l1("li", dt, [
                        L1(
                          l,
                          {
                            class: "nav-link active",
                            "aria-current": "page",
                            to: { name: "home" },
                          },
                          { default: y2(() => [pt, x2(" Home ")]), _: 1 }
                        ),
                      ]),
                      l1("li", mt, [
                        L1(
                          l,
                          {
                            class: "nav-link",
                            "aria-current": "page",
                            to: "/trash",
                          },
                          {
                            default: y2(() => [
                              e.value
                                ? (I1(), N1("img", gt))
                                : (I1(), N1("img", vt)),
                              x2(" Paplelera "),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      l1("li", yt, [
                        L1(
                          l,
                          {
                            class: "nav-link",
                            "aria-current": "page",
                            to: "/completed",
                          },
                          {
                            default: y2(() => [
                              i.value
                                ? (I1(), N1("img", xt))
                                : (I1(), N1("img", bt)),
                              x2(" Completos "),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      l1("li", Tt, [
                        L1(
                          l,
                          { class: "nav-link", "aria-current": "page", to: "" },
                          {
                            default: y2(() => [Ct, x2(" Configuraci\xF3n ")]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                    l1("div", null, [
                      l1(
                        "button",
                        {
                          class: "btn btn-danger",
                          onClick: c[0] || (c[0] = (_) => s()),
                        },
                        "Logout"
                      ),
                    ]),
                  ]),
                ]),
              ]))
            : j3("", !0);
        }
      );
    },
  },
  kt = V0(wt, [["__scopeId", "data-v-e50b2bed"]]);
function m1(u) {
  if (u === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return u;
}
function G0(u, t) {
  (u.prototype = Object.create(t.prototype)),
    (u.prototype.constructor = u),
    (u.__proto__ = t);
}
/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var e1 = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  j1 = { duration: 0.5, overwrite: !1, delay: 0 },
  o0,
  H,
  V,
  s1 = 1e8,
  O = 1 / s1,
  X2 = Math.PI * 2,
  Pt = X2 / 4,
  St = 0,
  W0 = Math.sqrt,
  At = Math.cos,
  Ot = Math.sin,
  U = function (t) {
    return typeof t == "string";
  },
  z = function (t) {
    return typeof t == "function";
  },
  y1 = function (t) {
    return typeof t == "number";
  },
  c0 = function (t) {
    return typeof t > "u";
  },
  d1 = function (t) {
    return typeof t == "object";
  },
  K = function (t) {
    return t !== !1;
  },
  $0 = function () {
    return typeof window < "u";
  },
  b2 = function (t) {
    return z(t) || U(t);
  },
  H0 =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  G = Array.isArray,
  G2 = /(?:-?\.?\d|\.)+/gi,
  K0 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  G1 = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  I2 = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  j0 = /[+-]=-?[.\d]+/,
  Q0 = /[^,'"\[\]\s]+/gi,
  Mt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  R,
  n1,
  W2,
  u0,
  i1 = {},
  k2 = {},
  J0,
  t3 = function (t) {
    return (k2 = U1(t, i1)) && r1;
  },
  l0 = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  P2 = function (t, e) {
    return !e && console.warn(t);
  },
  e3 = function (t, e) {
    return (t && (i1[t] = e) && k2 && (k2[t] = e)) || i1;
  },
  _2 = function () {
    return 0;
  },
  Dt = { suppressEvents: !0, isStart: !0, kill: !1 },
  T2 = { suppressEvents: !0, kill: !1 },
  Rt = { suppressEvents: !0 },
  f0 = {},
  w1 = [],
  $2 = {},
  i3,
  J = {},
  N2 = {},
  w0 = 30,
  C2 = [],
  _0 = "",
  h0 = function (t) {
    var e = t[0],
      i,
      r;
    if ((d1(e) || z(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
      for (r = C2.length; r-- && !C2[r].targetTest(e); );
      i = C2[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new w3(t[r], i)))) ||
        t.splice(r, 1);
    return t;
  },
  V1 = function (t) {
    return t._gsap || h0(o1(t))[0]._gsap;
  },
  r3 = function (t, e, i) {
    return (i = t[e]) && z(i)
      ? t[e]()
      : (c0(i) && t.getAttribute && t.getAttribute(e)) || i;
  },
  j = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  I = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  Y = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  $1 = function (t, e) {
    var i = e.charAt(0),
      r = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
    );
  },
  Et = function (t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
    return r < i;
  },
  S2 = function () {
    var t = w1.length,
      e = w1.slice(0),
      i,
      r;
    for ($2 = {}, w1.length = 0, i = 0; i < t; i++)
      (r = e[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  a3 = function (t, e, i, r) {
    w1.length && S2(),
      t.render(e, i, r || (H && e < 0 && (t._initted || t._startAt))),
      w1.length && S2();
  },
  n3 = function (t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(Q0).length < 2
      ? e
      : U(t)
      ? t.trim()
      : t;
  },
  s3 = function (t) {
    return t;
  },
  u1 = function (t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  },
  Ft = function (t) {
    return function (e, i) {
      for (var r in i)
        r in e || (r === "duration" && t) || r === "ease" || (e[r] = i[r]);
    };
  },
  U1 = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  k0 = function u(t, e) {
    for (var i in e)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (t[i] = d1(e[i]) ? u(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t;
  },
  A2 = function (t, e) {
    var i = {},
      r;
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  },
  u2 = function (t) {
    var e = t.parent || R,
      i = t.keyframes ? Ft(G(t.keyframes)) : u1;
    if (K(t.inherit))
      for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  },
  zt = function (t, e) {
    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
    return i < 0;
  },
  o3 = function (t, e, i, r, a) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var n = t[r],
      s;
    if (a) for (s = e[a]; n && n[a] > s; ) n = n._prev;
    return (
      n ? ((e._next = n._next), (n._next = e)) : ((e._next = t[i]), (t[i] = e)),
      e._next ? (e._next._prev = e) : (t[r] = e),
      (e._prev = n),
      (e.parent = e._dp = t),
      e
    );
  },
  E2 = function (t, e, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var a = e._prev,
      n = e._next;
    a ? (a._next = n) : t[i] === e && (t[i] = n),
      n ? (n._prev = a) : t[r] === e && (t[r] = a),
      (e._next = e._prev = e.parent = null);
  },
  P1 = function (t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
      (t._act = 0);
  },
  Z1 = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
    return t;
  },
  It = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  H2 = function (t, e, i, r) {
    return (
      t._startAt &&
      (H
        ? t._startAt.revert(T2)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, r))
    );
  },
  Nt = function u(t) {
    return !t || (t._ts && u(t.parent));
  },
  P0 = function (t) {
    return t._repeat ? Q1(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  Q1 = function (t, e) {
    var i = Math.floor((t /= e));
    return t && i === t ? i - 1 : i;
  },
  O2 = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  F2 = function (t) {
    return (t._end = Y(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || O) || 0)
    ));
  },
  z2 = function (t, e) {
    var i = t._dp;
    return (
      i &&
        i.smoothChildTiming &&
        t._ts &&
        ((t._start = Y(
          i._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        F2(t),
        i._dirty || Z1(i, t)),
      t
    );
  },
  c3 = function (t, e) {
    var i;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((i = O2(t.rawTime(), e)),
        (!e._dur || v2(0, e.totalDuration(), i) - e._tTime > O) &&
          e.render(i, !0)),
      Z1(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (i = t; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      t._zTime = -O;
    }
  },
  _1 = function (t, e, i, r) {
    return (
      e.parent && P1(e),
      (e._start = Y(
        (y1(i) ? i : i || t !== R ? a1(t, i, e) : t._time) + e._delay
      )),
      (e._end = Y(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      o3(t, e, "_first", "_last", t._sort ? "_start" : 0),
      K2(e) || (t._recent = e),
      r || c3(t, e),
      t._ts < 0 && z2(t, t._tTime),
      t
    );
  },
  u3 = function (t, e) {
    return (
      (i1.ScrollTrigger || l0("scrollTrigger", e)) &&
      i1.ScrollTrigger.create(e, t)
    );
  },
  l3 = function (t, e, i, r, a) {
    if ((p0(t, e, a), !t._initted)) return 1;
    if (
      !i &&
      t._pt &&
      !H &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      i3 !== t1.frame
    )
      return w1.push(t), (t._lazy = [a, r]), 1;
  },
  Lt = function u(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || u(e));
  },
  K2 = function (t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart";
  },
  Bt = function (t, e, i, r) {
    var a = t.ratio,
      n =
        e < 0 ||
        (!e &&
          ((!t._start && Lt(t) && !(!t._initted && K2(t))) ||
            ((t._ts < 0 || t._dp._ts < 0) && !K2(t))))
          ? 0
          : 1,
      s = t._rDelay,
      o = 0,
      c,
      l,
      _;
    if (
      (s &&
        t._repeat &&
        ((o = v2(0, t._tDur, e)),
        (l = Q1(o, s)),
        t._yoyo && l & 1 && (n = 1 - n),
        l !== Q1(t._tTime, s) &&
          ((a = 1 - n), t.vars.repeatRefresh && t._initted && t.invalidate())),
      n !== a || H || r || t._zTime === O || (!e && t._zTime))
    ) {
      if (!t._initted && l3(t, e, r, i, o)) return;
      for (
        _ = t._zTime,
          t._zTime = e || (i ? O : 0),
          i || (i = e && !_),
          t.ratio = n,
          t._from && (n = 1 - n),
          t._time = 0,
          t._tTime = o,
          c = t._pt;
        c;

      )
        c.r(n, c.d), (c = c._next);
      e < 0 && H2(t, e, i, !0),
        t._onUpdate && !i && c1(t, "onUpdate"),
        o && t._repeat && !i && t.parent && c1(t, "onRepeat"),
        (e >= t._tDur || e < 0) &&
          t.ratio === n &&
          (n && P1(t, 1),
          !i &&
            !H &&
            (c1(t, n ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()));
    } else t._zTime || (t._zTime = e);
  },
  Vt = function (t, e, i) {
    var r;
    if (i > e)
      for (r = t._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > e) return r;
        r = r._next;
      }
    else
      for (r = t._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < e) return r;
        r = r._prev;
      }
  },
  J1 = function (t, e, i, r) {
    var a = t._repeat,
      n = Y(e) || 0,
      s = t._tTime / t._tDur;
    return (
      s && !r && (t._time *= n / t._dur),
      (t._dur = n),
      (t._tDur = a ? (a < 0 ? 1e10 : Y(n * (a + 1) + t._rDelay * a)) : n),
      s > 0 && !r && z2(t, (t._tTime = t._tDur * s)),
      t.parent && F2(t),
      i || Z1(t.parent, t),
      t
    );
  },
  S0 = function (t) {
    return t instanceof $ ? Z1(t) : J1(t, t._dur);
  },
  Zt = { _start: 0, endTime: _2, totalDuration: _2 },
  a1 = function u(t, e, i) {
    var r = t.labels,
      a = t._recent || Zt,
      n = t.duration() >= s1 ? a.endTime(!1) : t._dur,
      s,
      o,
      c;
    return U(e) && (isNaN(e) || e in r)
      ? ((o = e.charAt(0)),
        (c = e.substr(-1) === "%"),
        (s = e.indexOf("=")),
        o === "<" || o === ">"
          ? (s >= 0 && (e = e.replace(/=/, "")),
            (o === "<" ? a._start : a.endTime(a._repeat >= 0)) +
              (parseFloat(e.substr(1)) || 0) *
                (c ? (s < 0 ? a : i).totalDuration() / 100 : 1))
          : s < 0
          ? (e in r || (r[e] = n), r[e])
          : ((o = parseFloat(e.charAt(s - 1) + e.substr(s + 1))),
            c && i && (o = (o / 100) * (G(i) ? i[0] : i).totalDuration()),
            s > 1 ? u(t, e.substr(0, s - 1), i) + o : n + o))
      : e == null
      ? n
      : +e;
  },
  l2 = function (t, e, i) {
    var r = y1(e[1]),
      a = (r ? 2 : 1) + (t < 2 ? 0 : 1),
      n = e[a],
      s,
      o;
    if ((r && (n.duration = e[1]), (n.parent = i), t)) {
      for (s = n, o = i; o && !("immediateRender" in s); )
        (s = o.vars.defaults || {}), (o = K(o.vars.inherit) && o.parent);
      (n.immediateRender = K(s.immediateRender)),
        t < 2 ? (n.runBackwards = 1) : (n.startAt = e[a - 1]);
    }
    return new q(e[0], n, e[a + 1]);
  },
  A1 = function (t, e) {
    return t || t === 0 ? e(t) : e;
  },
  v2 = function (t, e, i) {
    return i < t ? t : i > e ? e : i;
  },
  X = function (t, e) {
    return !U(t) || !(e = Mt.exec(t)) ? "" : e[1];
  },
  qt = function (t, e, i) {
    return A1(i, function (r) {
      return v2(t, e, r);
    });
  },
  j2 = [].slice,
  f3 = function (t, e) {
    return (
      t &&
      d1(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && d1(t[0]))) &&
      !t.nodeType &&
      t !== n1
    );
  },
  Ut = function (t, e, i) {
    return (
      i === void 0 && (i = []),
      t.forEach(function (r) {
        var a;
        return (U(r) && !e) || f3(r, 1)
          ? (a = i).push.apply(a, o1(r))
          : i.push(r);
      }) || i
    );
  },
  o1 = function (t, e, i) {
    return V && !e && V.selector
      ? V.selector(t)
      : U(t) && !i && (W2 || !t2())
      ? j2.call((e || u0).querySelectorAll(t), 0)
      : G(t)
      ? Ut(t, i)
      : f3(t)
      ? j2.call(t, 0)
      : t
      ? [t]
      : [];
  },
  Q2 = function (t) {
    return (
      (t = o1(t)[0] || P2("Invalid scope") || {}),
      function (e) {
        var i = t.current || t.nativeElement || t;
        return o1(
          e,
          i.querySelectorAll
            ? i
            : i === t
            ? P2("Invalid scope") || u0.createElement("div")
            : t
        );
      }
    );
  },
  _3 = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  h3 = function (t) {
    if (z(t)) return t;
    var e = d1(t) ? t : { each: t },
      i = q1(e.ease),
      r = e.from || 0,
      a = parseFloat(e.base) || 0,
      n = {},
      s = r > 0 && r < 1,
      o = isNaN(r) || s,
      c = e.axis,
      l = r,
      _ = r;
    return (
      U(r)
        ? (l = _ = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !s && o && ((l = r[0]), (_ = r[1])),
      function (h, d, p) {
        var f = (p || e).length,
          m = n[f],
          g,
          v,
          y,
          b,
          x,
          k,
          w,
          C,
          T;
        if (!m) {
          if (((T = e.grid === "auto" ? 0 : (e.grid || [1, s1])[1]), !T)) {
            for (
              w = -s1;
              w < (w = p[T++].getBoundingClientRect().left) && T < f;

            );
            T--;
          }
          for (
            m = n[f] = [],
              g = o ? Math.min(T, f) * l - 0.5 : r % T,
              v = T === s1 ? 0 : o ? (f * _) / T - 0.5 : (r / T) | 0,
              w = 0,
              C = s1,
              k = 0;
            k < f;
            k++
          )
            (y = (k % T) - g),
              (b = v - ((k / T) | 0)),
              (m[k] = x = c ? Math.abs(c === "y" ? b : y) : W0(y * y + b * b)),
              x > w && (w = x),
              x < C && (C = x);
          r === "random" && _3(m),
            (m.max = w - C),
            (m.min = C),
            (m.v = f =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (T > f
                    ? f - 1
                    : c
                    ? c === "y"
                      ? f / T
                      : T
                    : Math.max(T, f / T)) ||
                0) * (r === "edges" ? -1 : 1)),
            (m.b = f < 0 ? a - f : a),
            (m.u = X(e.amount || e.each) || 0),
            (i = i && f < 0 ? b3(i) : i);
        }
        return (
          (f = (m[h] - m.min) / m.max || 0), Y(m.b + (i ? i(f) : f) * m.v) + m.u
        );
      }
    );
  },
  J2 = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (i) {
      var r = Y(Math.round(parseFloat(i) / t) * t * e);
      return (r - (r % 1)) / e + (y1(i) ? 0 : X(i));
    };
  },
  d3 = function (t, e) {
    var i = G(t),
      r,
      a;
    return (
      !i &&
        d1(t) &&
        ((r = i = t.radius || s1),
        t.values
          ? ((t = o1(t.values)), (a = !y1(t[0])) && (r *= r))
          : (t = J2(t.increment))),
      A1(
        e,
        i
          ? z(t)
            ? function (n) {
                return (a = t(n)), Math.abs(a - n) <= r ? a : n;
              }
            : function (n) {
                for (
                  var s = parseFloat(a ? n.x : n),
                    o = parseFloat(a ? n.y : 0),
                    c = s1,
                    l = 0,
                    _ = t.length,
                    h,
                    d;
                  _--;

                )
                  a
                    ? ((h = t[_].x - s), (d = t[_].y - o), (h = h * h + d * d))
                    : (h = Math.abs(t[_] - s)),
                    h < c && ((c = h), (l = _));
                return (
                  (l = !r || c <= r ? t[l] : n),
                  a || l === n || y1(n) ? l : l + X(n)
                );
              }
          : J2(t)
      )
    );
  },
  p3 = function (t, e, i, r) {
    return A1(G(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
      return G(t)
        ? t[~~(Math.random() * t.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  Yt = function () {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return function (r) {
      return e.reduce(function (a, n) {
        return n(a);
      }, r);
    };
  },
  Xt = function (t, e) {
    return function (i) {
      return t(parseFloat(i)) + (e || X(i));
    };
  },
  Gt = function (t, e, i) {
    return g3(t, e, 0, 1, i);
  },
  m3 = function (t, e, i) {
    return A1(i, function (r) {
      return t[~~e(r)];
    });
  },
  Wt = function u(t, e, i) {
    var r = e - t;
    return G(t)
      ? m3(t, u(0, t.length), e)
      : A1(i, function (a) {
          return ((r + ((a - t) % r)) % r) + t;
        });
  },
  $t = function u(t, e, i) {
    var r = e - t,
      a = r * 2;
    return G(t)
      ? m3(t, u(0, t.length - 1), e)
      : A1(i, function (n) {
          return (n = (a + ((n - t) % a)) % a || 0), t + (n > r ? a - n : n);
        });
  },
  h2 = function (t) {
    for (var e = 0, i = "", r, a, n, s; ~(r = t.indexOf("random(", e)); )
      (n = t.indexOf(")", r)),
        (s = t.charAt(r + 7) === "["),
        (a = t.substr(r + 7, n - r - 7).match(s ? Q0 : G2)),
        (i +=
          t.substr(e, r - e) + p3(s ? a : +a[0], s ? 0 : +a[1], +a[2] || 1e-5)),
        (e = n + 1);
    return i + t.substr(e, t.length - e);
  },
  g3 = function (t, e, i, r, a) {
    var n = e - t,
      s = r - i;
    return A1(a, function (o) {
      return i + (((o - t) / n) * s || 0);
    });
  },
  Ht = function u(t, e, i, r) {
    var a = isNaN(t + e)
      ? 0
      : function (d) {
          return (1 - d) * t + d * e;
        };
    if (!a) {
      var n = U(t),
        s = {},
        o,
        c,
        l,
        _,
        h;
      if ((i === !0 && (r = 1) && (i = null), n))
        (t = { p: t }), (e = { p: e });
      else if (G(t) && !G(e)) {
        for (l = [], _ = t.length, h = _ - 2, c = 1; c < _; c++)
          l.push(u(t[c - 1], t[c]));
        _--,
          (a = function (p) {
            p *= _;
            var f = Math.min(h, ~~p);
            return l[f](p - f);
          }),
          (i = e);
      } else r || (t = U1(G(t) ? [] : {}, t));
      if (!l) {
        for (o in e) d0.call(s, t, o, "get", e[o]);
        a = function (p) {
          return v0(p, s) || (n ? t.p : t);
        };
      }
    }
    return A1(i, a);
  },
  A0 = function (t, e, i) {
    var r = t.labels,
      a = s1,
      n,
      s,
      o;
    for (n in r)
      (s = r[n] - e),
        s < 0 == !!i && s && a > (s = Math.abs(s)) && ((o = n), (a = s));
    return o;
  },
  c1 = function (t, e, i) {
    var r = t.vars,
      a = r[e],
      n = V,
      s = t._ctx,
      o,
      c,
      l;
    if (!!a)
      return (
        (o = r[e + "Params"]),
        (c = r.callbackScope || t),
        i && w1.length && S2(),
        s && (V = s),
        (l = o ? a.apply(c, o) : a.call(c)),
        (V = n),
        l
      );
  },
  o2 = function (t) {
    return (
      P1(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!H),
      t.progress() < 1 && c1(t, "onInterrupt"),
      t
    );
  },
  W1,
  Kt = function (t) {
    t = (!t.name && t.default) || t;
    var e = t.name,
      i = z(t),
      r =
        e && !i && t.init
          ? function () {
              this._props = [];
            }
          : t,
      a = { init: _2, render: v0, add: d0, kill: _4, modifier: f4, rawVars: 0 },
      n = { targetTest: 0, get: 0, getSetter: g0, aliases: {}, register: 0 };
    if ((t2(), t !== r)) {
      if (J[e]) return;
      u1(r, u1(A2(t, a), n)),
        U1(r.prototype, U1(a, A2(t, n))),
        (J[(r.prop = e)] = r),
        t.targetTest && (C2.push(r), (f0[e] = 1)),
        (e =
          (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
          "Plugin");
    }
    e3(e, r), t.register && t.register(r1, r, Q);
  },
  M = 255,
  c2 = {
    aqua: [0, M, M],
    lime: [0, M, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, M],
    navy: [0, 0, 128],
    white: [M, M, M],
    olive: [128, 128, 0],
    yellow: [M, M, 0],
    orange: [M, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [M, 0, 0],
    pink: [M, 192, 203],
    cyan: [0, M, M],
    transparent: [M, M, M, 0],
  },
  L2 = function (t, e, i) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? e + (i - e) * t * 6
        : t < 0.5
        ? i
        : t * 3 < 2
        ? e + (i - e) * (2 / 3 - t) * 6
        : e) *
        M +
        0.5) |
        0
    );
  },
  v3 = function (t, e, i) {
    var r = t ? (y1(t) ? [t >> 16, (t >> 8) & M, t & M] : 0) : c2.black,
      a,
      n,
      s,
      o,
      c,
      l,
      _,
      h,
      d,
      p;
    if (!r) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), c2[t]))
        r = c2[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((a = t.charAt(1)),
            (n = t.charAt(2)),
            (s = t.charAt(3)),
            (t =
              "#" +
              a +
              a +
              n +
              n +
              s +
              s +
              (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
          t.length === 9)
        )
          return (
            (r = parseInt(t.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & M, r & M, parseInt(t.substr(7), 16) / 255]
          );
        (t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & M, t & M]);
      } else if (t.substr(0, 3) === "hsl") {
        if (((r = p = t.match(G2)), !e))
          (o = (+r[0] % 360) / 360),
            (c = +r[1] / 100),
            (l = +r[2] / 100),
            (n = l <= 0.5 ? l * (c + 1) : l + c - l * c),
            (a = l * 2 - n),
            r.length > 3 && (r[3] *= 1),
            (r[0] = L2(o + 1 / 3, a, n)),
            (r[1] = L2(o, a, n)),
            (r[2] = L2(o - 1 / 3, a, n));
        else if (~t.indexOf("="))
          return (r = t.match(K0)), i && r.length < 4 && (r[3] = 1), r;
      } else r = t.match(G2) || c2.transparent;
      r = r.map(Number);
    }
    return (
      e &&
        !p &&
        ((a = r[0] / M),
        (n = r[1] / M),
        (s = r[2] / M),
        (_ = Math.max(a, n, s)),
        (h = Math.min(a, n, s)),
        (l = (_ + h) / 2),
        _ === h
          ? (o = c = 0)
          : ((d = _ - h),
            (c = l > 0.5 ? d / (2 - _ - h) : d / (_ + h)),
            (o =
              _ === a
                ? (n - s) / d + (n < s ? 6 : 0)
                : _ === n
                ? (s - a) / d + 2
                : (a - n) / d + 4),
            (o *= 60)),
        (r[0] = ~~(o + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(l * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  y3 = function (t) {
    var e = [],
      i = [],
      r = -1;
    return (
      t.split(k1).forEach(function (a) {
        var n = a.match(G1) || [];
        e.push.apply(e, n), i.push((r += n.length + 1));
      }),
      (e.c = i),
      e
    );
  },
  O0 = function (t, e, i) {
    var r = "",
      a = (t + r).match(k1),
      n = e ? "hsla(" : "rgba(",
      s = 0,
      o,
      c,
      l,
      _;
    if (!a) return t;
    if (
      ((a = a.map(function (h) {
        return (
          (h = v3(h, e, 1)) &&
          n +
            (e ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
            ")"
        );
      })),
      i && ((l = y3(t)), (o = i.c), o.join(r) !== l.c.join(r)))
    )
      for (c = t.replace(k1, "1").split(G1), _ = c.length - 1; s < _; s++)
        r +=
          c[s] +
          (~o.indexOf(s)
            ? a.shift() || n + "0,0,0,0)"
            : (l.length ? l : a.length ? a : i).shift());
    if (!c)
      for (c = t.split(k1), _ = c.length - 1; s < _; s++) r += c[s] + a[s];
    return r + c[_];
  },
  k1 = (function () {
    var u =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in c2) u += "|" + t + "\\b";
    return new RegExp(u + ")", "gi");
  })(),
  jt = /hsl[a]?\(/,
  x3 = function (t) {
    var e = t.join(" "),
      i;
    if (((k1.lastIndex = 0), k1.test(e)))
      return (
        (i = jt.test(e)),
        (t[1] = O0(t[1], i)),
        (t[0] = O0(t[0], i, y3(t[1]))),
        !0
      );
  },
  d2,
  t1 = (function () {
    var u = Date.now,
      t = 500,
      e = 33,
      i = u(),
      r = i,
      a = 1e3 / 240,
      n = a,
      s = [],
      o,
      c,
      l,
      _,
      h,
      d,
      p = function f(m) {
        var g = u() - r,
          v = m === !0,
          y,
          b,
          x,
          k;
        if (
          (g > t && (i += g - e),
          (r += g),
          (x = r - i),
          (y = x - n),
          (y > 0 || v) &&
            ((k = ++_.frame),
            (h = x - _.time * 1e3),
            (_.time = x = x / 1e3),
            (n += y + (y >= a ? 4 : a - y)),
            (b = 1)),
          v || (o = c(f)),
          b)
        )
          for (d = 0; d < s.length; d++) s[d](x, h, k, m);
      };
    return (
      (_ = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (m) {
          return h / (1e3 / (m || 60));
        },
        wake: function () {
          J0 &&
            (!W2 &&
              $0() &&
              ((n1 = W2 = window),
              (u0 = n1.document || {}),
              (i1.gsap = r1),
              (n1.gsapVersions || (n1.gsapVersions = [])).push(r1.version),
              t3(k2 || n1.GreenSockGlobals || (!n1.gsap && n1) || {}),
              (l = n1.requestAnimationFrame)),
            o && _.sleep(),
            (c =
              l ||
              function (m) {
                return setTimeout(m, (n - _.time * 1e3 + 1) | 0);
              }),
            (d2 = 1),
            p(2));
        },
        sleep: function () {
          (l ? n1.cancelAnimationFrame : clearTimeout)(o), (d2 = 0), (c = _2);
        },
        lagSmoothing: function (m, g) {
          (t = m || 1 / O), (e = Math.min(g, t, 0));
        },
        fps: function (m) {
          (a = 1e3 / (m || 240)), (n = _.time * 1e3 + a);
        },
        add: function (m, g, v) {
          var y = g
            ? function (b, x, k, w) {
                m(b, x, k, w), _.remove(y);
              }
            : m;
          return _.remove(m), s[v ? "unshift" : "push"](y), t2(), y;
        },
        remove: function (m, g) {
          ~(g = s.indexOf(m)) && s.splice(g, 1) && d >= g && d--;
        },
        _listeners: s,
      }),
      _
    );
  })(),
  t2 = function () {
    return !d2 && t1.wake();
  },
  P = {},
  Qt = /^[\d.\-M][\d.\-,\s]/,
  Jt = /["']/g,
  t4 = function (t) {
    for (
      var e = {},
        i = t.substr(1, t.length - 3).split(":"),
        r = i[0],
        a = 1,
        n = i.length,
        s,
        o,
        c;
      a < n;
      a++
    )
      (o = i[a]),
        (s = a !== n - 1 ? o.lastIndexOf(",") : o.length),
        (c = o.substr(0, s)),
        (e[r] = isNaN(c) ? c.replace(Jt, "").trim() : +c),
        (r = o.substr(s + 1).trim());
    return e;
  },
  e4 = function (t) {
    var e = t.indexOf("(") + 1,
      i = t.indexOf(")"),
      r = t.indexOf("(", e);
    return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
  },
  i4 = function (t) {
    var e = (t + "").split("("),
      i = P[e[0]];
    return i && e.length > 1 && i.config
      ? i.config.apply(
          null,
          ~t.indexOf("{") ? [t4(e[1])] : e4(t).split(",").map(n3)
        )
      : P._CE && Qt.test(t)
      ? P._CE("", t)
      : i;
  },
  b3 = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  T3 = function u(t, e) {
    for (var i = t._first, r; i; )
      i instanceof $
        ? u(i, e)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== e &&
          (i.timeline
            ? u(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  },
  q1 = function (t, e) {
    return (t && (z(t) ? t : P[t] || i4(t))) || e;
  },
  Y1 = function (t, e, i, r) {
    i === void 0 &&
      (i = function (o) {
        return 1 - e(1 - o);
      }),
      r === void 0 &&
        (r = function (o) {
          return o < 0.5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2;
        });
    var a = { easeIn: e, easeOut: i, easeInOut: r },
      n;
    return (
      j(t, function (s) {
        (P[s] = i1[s] = a), (P[(n = s.toLowerCase())] = i);
        for (var o in a)
          P[
            n + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")
          ] = P[s + "." + o] = a[o];
      }),
      a
    );
  },
  C3 = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
    };
  },
  B2 = function u(t, e, i) {
    var r = e >= 1 ? e : 1,
      a = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      n = (a / X2) * (Math.asin(1 / r) || 0),
      s = function (l) {
        return l === 1 ? 1 : r * Math.pow(2, -10 * l) * Ot((l - n) * a) + 1;
      },
      o =
        t === "out"
          ? s
          : t === "in"
          ? function (c) {
              return 1 - s(1 - c);
            }
          : C3(s);
    return (
      (a = X2 / a),
      (o.config = function (c, l) {
        return u(t, c, l);
      }),
      o
    );
  },
  V2 = function u(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function (n) {
        return n ? --n * n * ((e + 1) * n + e) + 1 : 0;
      },
      r =
        t === "out"
          ? i
          : t === "in"
          ? function (a) {
              return 1 - i(1 - a);
            }
          : C3(i);
    return (
      (r.config = function (a) {
        return u(t, a);
      }),
      r
    );
  };
j("Linear,Quad,Cubic,Quart,Quint,Strong", function (u, t) {
  var e = t < 5 ? t + 1 : t;
  Y1(
    u + ",Power" + (e - 1),
    t
      ? function (i) {
          return Math.pow(i, e);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, e);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, e) / 2
        : 1 - Math.pow((1 - i) * 2, e) / 2;
    }
  );
});
P.Linear.easeNone = P.none = P.Linear.easeIn;
Y1("Elastic", B2("in"), B2("out"), B2());
(function (u, t) {
  var e = 1 / t,
    i = 2 * e,
    r = 2.5 * e,
    a = function (s) {
      return s < e
        ? u * s * s
        : s < i
        ? u * Math.pow(s - 1.5 / t, 2) + 0.75
        : s < r
        ? u * (s -= 2.25 / t) * s + 0.9375
        : u * Math.pow(s - 2.625 / t, 2) + 0.984375;
    };
  Y1(
    "Bounce",
    function (n) {
      return 1 - a(1 - n);
    },
    a
  );
})(7.5625, 2.75);
Y1("Expo", function (u) {
  return u ? Math.pow(2, 10 * (u - 1)) : 0;
});
Y1("Circ", function (u) {
  return -(W0(1 - u * u) - 1);
});
Y1("Sine", function (u) {
  return u === 1 ? 1 : -At(u * Pt) + 1;
});
Y1("Back", V2("in"), V2("out"), V2());
P.SteppedEase =
  P.steps =
  i1.SteppedEase =
    {
      config: function (t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t,
          r = t + (e ? 0 : 1),
          a = e ? 1 : 0,
          n = 1 - O;
        return function (s) {
          return (((r * v2(0, n, s)) | 0) + a) * i;
        };
      },
    };
j1.ease = P["quad.out"];
j(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (u) {
    return (_0 += u + "," + u + "Params,");
  }
);
var w3 = function (t, e) {
    (this.id = St++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : r3),
      (this.set = e ? e.getSetter : g0);
  },
  e2 = (function () {
    function u(e) {
      (this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        J1(this, +e.duration, 1, 1),
        (this.data = e.data),
        V && ((this._ctx = V), V.data.push(this)),
        d2 || t1.wake();
    }
    var t = u.prototype;
    return (
      (t.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (t.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            J1(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (i, r) {
        if ((t2(), !arguments.length)) return this._tTime;
        var a = this._dp;
        if (a && a.smoothChildTiming && this._ts) {
          for (z2(this, i), !a._dp || a.parent || c3(a, this); a && a.parent; )
            a.parent._time !==
              a._start +
                (a._ts >= 0
                  ? a._tTime / a._ts
                  : (a.totalDuration() - a._tTime) / -a._ts) &&
              a.totalTime(a._tTime, !0),
              (a = a.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            _1(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === O) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), a3(this, i, r)),
          this
        );
      }),
      (t.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + P0(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (t.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (t.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                P0(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (t.iteration = function (i, r) {
        var a = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * a, r)
          : this._repeat
          ? Q1(this._tTime, a) + 1
          : 1;
      }),
      (t.timeScale = function (i) {
        if (!arguments.length) return this._rts === -O ? 0 : this._rts;
        if (this._rts === i) return this;
        var r =
          this.parent && this._ts ? O2(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -O ? 0 : this._rts),
          this.totalTime(v2(-this._delay, this._tDur, r), !0),
          F2(this),
          It(this)
        );
      }),
      (t.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (t2(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== O &&
                      (this._tTime -= O)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && _1(r, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (t.endTime = function (i) {
        return (
          this._start +
          (K(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? O2(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (t.revert = function (i) {
        i === void 0 && (i = Rt);
        var r = H;
        return (
          (H = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (H = r),
          this
        );
      }),
      (t.globalTime = function (i) {
        for (var r = this, a = arguments.length ? i : r.rawTime(); r; )
          (a = r._start + a / (r._ts || 1)), (r = r._dp);
        return !this.parent && this.vars.immediateRender ? -1 : a;
      }),
      (t.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), S0(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (t.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), S0(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (t.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (t.seek = function (i, r) {
        return this.totalTime(a1(this, i), K(r));
      }),
      (t.restart = function (i, r) {
        return this.play().totalTime(i ? -this._delay : 0, K(r));
      }),
      (t.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -O : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -O), this;
      }),
      (t.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          a;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (a = i.rawTime(!0)) >= r &&
            a < this.endTime(!0) - O)
        );
      }),
      (t.eventCallback = function (i, r, a) {
        var n = this.vars;
        return arguments.length > 1
          ? (r
              ? ((n[i] = r),
                a && (n[i + "Params"] = a),
                i === "onUpdate" && (this._onUpdate = r))
              : delete n[i],
            this)
          : n[i];
      }),
      (t.then = function (i) {
        var r = this;
        return new Promise(function (a) {
          var n = z(i) ? i : s3,
            s = function () {
              var c = r.then;
              (r.then = null),
                z(n) && (n = n(r)) && (n.then || n === r) && (r.then = c),
                a(n),
                (r.then = c);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? s()
            : (r._prom = s);
        });
      }),
      (t.kill = function () {
        o2(this);
      }),
      u
    );
  })();
u1(e2.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -O,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var $ = (function (u) {
  G0(t, u);
  function t(i, r) {
    var a;
    return (
      i === void 0 && (i = {}),
      (a = u.call(this, i) || this),
      (a.labels = {}),
      (a.smoothChildTiming = !!i.smoothChildTiming),
      (a.autoRemoveChildren = !!i.autoRemoveChildren),
      (a._sort = K(i.sortChildren)),
      R && _1(i.parent || R, m1(a), r),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      i.scrollTrigger && u3(m1(a), i.scrollTrigger),
      a
    );
  }
  var e = t.prototype;
  return (
    (e.to = function (r, a, n) {
      return l2(0, arguments, this), this;
    }),
    (e.from = function (r, a, n) {
      return l2(1, arguments, this), this;
    }),
    (e.fromTo = function (r, a, n, s) {
      return l2(2, arguments, this), this;
    }),
    (e.set = function (r, a, n) {
      return (
        (a.duration = 0),
        (a.parent = this),
        u2(a).repeatDelay || (a.repeat = 0),
        (a.immediateRender = !!a.immediateRender),
        new q(r, a, a1(this, n), 1),
        this
      );
    }),
    (e.call = function (r, a, n) {
      return _1(this, q.delayedCall(0, r, a), n);
    }),
    (e.staggerTo = function (r, a, n, s, o, c, l) {
      return (
        (n.duration = a),
        (n.stagger = n.stagger || s),
        (n.onComplete = c),
        (n.onCompleteParams = l),
        (n.parent = this),
        new q(r, n, a1(this, o)),
        this
      );
    }),
    (e.staggerFrom = function (r, a, n, s, o, c, l) {
      return (
        (n.runBackwards = 1),
        (u2(n).immediateRender = K(n.immediateRender)),
        this.staggerTo(r, a, n, s, o, c, l)
      );
    }),
    (e.staggerFromTo = function (r, a, n, s, o, c, l, _) {
      return (
        (s.startAt = n),
        (u2(s).immediateRender = K(s.immediateRender)),
        this.staggerTo(r, a, s, o, c, l, _)
      );
    }),
    (e.render = function (r, a, n) {
      var s = this._time,
        o = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        l = r <= 0 ? 0 : Y(r),
        _ = this._zTime < 0 != r < 0 && (this._initted || !c),
        h,
        d,
        p,
        f,
        m,
        g,
        v,
        y,
        b,
        x,
        k,
        w;
      if (
        (this !== R && l > o && r >= 0 && (l = o), l !== this._tTime || n || _)
      ) {
        if (
          (s !== this._time &&
            c &&
            ((l += this._time - s), (r += this._time - s)),
          (h = l),
          (b = this._start),
          (y = this._ts),
          (g = !y),
          _ && (c || (s = this._zTime), (r || !a) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((k = this._yoyo),
            (m = c + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(m * 100 + r, a, n);
          if (
            ((h = Y(l % m)),
            l === o
              ? ((f = this._repeat), (h = c))
              : ((f = ~~(l / m)),
                f && f === l / m && ((h = c), f--),
                h > c && (h = c)),
            (x = Q1(this._tTime, m)),
            !s && this._tTime && x !== f && (x = f),
            k && f & 1 && ((h = c - h), (w = 1)),
            f !== x && !this._lock)
          ) {
            var C = k && x & 1,
              T = C === (k && f & 1);
            if (
              (f < x && (C = !C),
              (s = C ? 0 : c),
              (this._lock = 1),
              (this.render(s || (w ? 0 : Y(f * m)), a, !c)._lock = 0),
              (this._tTime = l),
              !a && this.parent && c1(this, "onRepeat"),
              this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
              (s && s !== this._time) ||
                g !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (o = this._tDur),
              T &&
                ((this._lock = 2),
                (s = C ? c : -1e-4),
                this.render(s, !0),
                this.vars.repeatRefresh && !w && this.invalidate()),
              (this._lock = 0),
              !this._ts && !g)
            )
              return this;
            T3(this, w);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((v = Vt(this, Y(s), Y(h))), v && (l -= h - (h = v._start))),
          (this._tTime = l),
          (this._time = h),
          (this._act = !y),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (s = 0)),
          !s && h && !a && (c1(this, "onStart"), this._tTime !== l))
        )
          return this;
        if (h >= s && r >= 0)
          for (d = this._first; d; ) {
            if (
              ((p = d._next), (d._act || h >= d._start) && d._ts && v !== d)
            ) {
              if (d.parent !== this) return this.render(r, a, n);
              if (
                (d.render(
                  d._ts > 0
                    ? (h - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (h - d._start) * d._ts,
                  a,
                  n
                ),
                h !== this._time || (!this._ts && !g))
              ) {
                (v = 0), p && (l += this._zTime = -O);
                break;
              }
            }
            d = p;
          }
        else {
          d = this._last;
          for (var S = r < 0 ? r : h; d; ) {
            if (((p = d._prev), (d._act || S <= d._end) && d._ts && v !== d)) {
              if (d.parent !== this) return this.render(r, a, n);
              if (
                (d.render(
                  d._ts > 0
                    ? (S - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (S - d._start) * d._ts,
                  a,
                  n || (H && (d._initted || d._startAt))
                ),
                h !== this._time || (!this._ts && !g))
              ) {
                (v = 0), p && (l += this._zTime = S ? -O : O);
                break;
              }
            }
            d = p;
          }
        }
        if (
          v &&
          !a &&
          (this.pause(),
          (v.render(h >= s ? 0 : -O)._zTime = h >= s ? 1 : -1),
          this._ts)
        )
          return (this._start = b), F2(this), this.render(r, a, n);
        this._onUpdate && !a && c1(this, "onUpdate", !0),
          ((l === o && this._tTime >= this.totalDuration()) || (!l && s)) &&
            (b === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !c) &&
                ((l === o && this._ts > 0) || (!l && this._ts < 0)) &&
                P1(this, 1),
              !a &&
                !(r < 0 && !s) &&
                (l || s || !o) &&
                (c1(
                  this,
                  l === o && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(l < o && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (e.add = function (r, a) {
      var n = this;
      if ((y1(a) || (a = a1(this, a, r)), !(r instanceof e2))) {
        if (G(r))
          return (
            r.forEach(function (s) {
              return n.add(s, a);
            }),
            this
          );
        if (U(r)) return this.addLabel(r, a);
        if (z(r)) r = q.delayedCall(0, r);
        else return this;
      }
      return this !== r ? _1(this, r, a) : this;
    }),
    (e.getChildren = function (r, a, n, s) {
      r === void 0 && (r = !0),
        a === void 0 && (a = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = -s1);
      for (var o = [], c = this._first; c; )
        c._start >= s &&
          (c instanceof q
            ? a && o.push(c)
            : (n && o.push(c), r && o.push.apply(o, c.getChildren(!0, a, n)))),
          (c = c._next);
      return o;
    }),
    (e.getById = function (r) {
      for (var a = this.getChildren(1, 1, 1), n = a.length; n--; )
        if (a[n].vars.id === r) return a[n];
    }),
    (e.remove = function (r) {
      return U(r)
        ? this.removeLabel(r)
        : z(r)
        ? this.killTweensOf(r)
        : (E2(this, r),
          r === this._recent && (this._recent = this._last),
          Z1(this));
    }),
    (e.totalTime = function (r, a) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Y(
              t1.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          u.prototype.totalTime.call(this, r, a),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (e.addLabel = function (r, a) {
      return (this.labels[r] = a1(this, a)), this;
    }),
    (e.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (e.addPause = function (r, a, n) {
      var s = q.delayedCall(0, a || _2, n);
      return (
        (s.data = "isPause"), (this._hasPause = 1), _1(this, s, a1(this, r))
      );
    }),
    (e.removePause = function (r) {
      var a = this._first;
      for (r = a1(this, r); a; )
        a._start === r && a.data === "isPause" && P1(a), (a = a._next);
    }),
    (e.killTweensOf = function (r, a, n) {
      for (var s = this.getTweensOf(r, n), o = s.length; o--; )
        b1 !== s[o] && s[o].kill(r, a);
      return this;
    }),
    (e.getTweensOf = function (r, a) {
      for (var n = [], s = o1(r), o = this._first, c = y1(a), l; o; )
        o instanceof q
          ? Et(o._targets, s) &&
            (c
              ? (!b1 || (o._initted && o._ts)) &&
                o.globalTime(0) <= a &&
                o.globalTime(o.totalDuration()) > a
              : !a || o.isActive()) &&
            n.push(o)
          : (l = o.getTweensOf(s, a)).length && n.push.apply(n, l),
          (o = o._next);
      return n;
    }),
    (e.tweenTo = function (r, a) {
      a = a || {};
      var n = this,
        s = a1(n, r),
        o = a,
        c = o.startAt,
        l = o.onStart,
        _ = o.onStartParams,
        h = o.immediateRender,
        d,
        p = q.to(
          n,
          u1(
            {
              ease: a.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: s,
              overwrite: "auto",
              duration:
                a.duration ||
                Math.abs(
                  (s - (c && "time" in c ? c.time : n._time)) / n.timeScale()
                ) ||
                O,
              onStart: function () {
                if ((n.pause(), !d)) {
                  var m =
                    a.duration ||
                    Math.abs(
                      (s - (c && "time" in c ? c.time : n._time)) /
                        n.timeScale()
                    );
                  p._dur !== m && J1(p, m, 0, 1).render(p._time, !0, !0),
                    (d = 1);
                }
                l && l.apply(p, _ || []);
              },
            },
            a
          )
        );
      return h ? p.render(0) : p;
    }),
    (e.tweenFromTo = function (r, a, n) {
      return this.tweenTo(a, u1({ startAt: { time: a1(this, r) } }, n));
    }),
    (e.recent = function () {
      return this._recent;
    }),
    (e.nextLabel = function (r) {
      return r === void 0 && (r = this._time), A0(this, a1(this, r));
    }),
    (e.previousLabel = function (r) {
      return r === void 0 && (r = this._time), A0(this, a1(this, r), 1);
    }),
    (e.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + O);
    }),
    (e.shiftChildren = function (r, a, n) {
      n === void 0 && (n = 0);
      for (var s = this._first, o = this.labels, c; s; )
        s._start >= n && ((s._start += r), (s._end += r)), (s = s._next);
      if (a) for (c in o) o[c] >= n && (o[c] += r);
      return Z1(this);
    }),
    (e.invalidate = function (r) {
      var a = this._first;
      for (this._lock = 0; a; ) a.invalidate(r), (a = a._next);
      return u.prototype.invalidate.call(this, r);
    }),
    (e.clear = function (r) {
      r === void 0 && (r = !0);
      for (var a = this._first, n; a; ) (n = a._next), this.remove(a), (a = n);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Z1(this)
      );
    }),
    (e.totalDuration = function (r) {
      var a = 0,
        n = this,
        s = n._last,
        o = s1,
        c,
        l,
        _;
      if (arguments.length)
        return n.timeScale(
          (n._repeat < 0 ? n.duration() : n.totalDuration()) /
            (n.reversed() ? -r : r)
        );
      if (n._dirty) {
        for (_ = n.parent; s; )
          (c = s._prev),
            s._dirty && s.totalDuration(),
            (l = s._start),
            l > o && n._sort && s._ts && !n._lock
              ? ((n._lock = 1), (_1(n, s, l - s._delay, 1)._lock = 0))
              : (o = l),
            l < 0 &&
              s._ts &&
              ((a -= l),
              ((!_ && !n._dp) || (_ && _.smoothChildTiming)) &&
                ((n._start += l / n._ts), (n._time -= l), (n._tTime -= l)),
              n.shiftChildren(-l, !1, -1 / 0),
              (o = 0)),
            s._end > a && s._ts && (a = s._end),
            (s = c);
        J1(n, n === R && n._time > a ? n._time : a, 1, 1), (n._dirty = 0);
      }
      return n._tDur;
    }),
    (t.updateRoot = function (r) {
      if ((R._ts && (a3(R, O2(r, R)), (i3 = t1.frame)), t1.frame >= w0)) {
        w0 += e1.autoSleep || 120;
        var a = R._first;
        if ((!a || !a._ts) && e1.autoSleep && t1._listeners.length < 2) {
          for (; a && !a._ts; ) a = a._next;
          a || t1.sleep();
        }
      }
    }),
    t
  );
})(e2);
u1($.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var r4 = function (t, e, i, r, a, n, s) {
    var o = new Q(this._pt, t, e, 0, 1, M3, null, a),
      c = 0,
      l = 0,
      _,
      h,
      d,
      p,
      f,
      m,
      g,
      v;
    for (
      o.b = i,
        o.e = r,
        i += "",
        r += "",
        (g = ~r.indexOf("random(")) && (r = h2(r)),
        n && ((v = [i, r]), n(v, t, e), (i = v[0]), (r = v[1])),
        h = i.match(I2) || [];
      (_ = I2.exec(r));

    )
      (p = _[0]),
        (f = r.substring(c, _.index)),
        d ? (d = (d + 1) % 5) : f.substr(-5) === "rgba(" && (d = 1),
        p !== h[l++] &&
          ((m = parseFloat(h[l - 1]) || 0),
          (o._pt = {
            _next: o._pt,
            p: f || l === 1 ? f : ",",
            s: m,
            c: p.charAt(1) === "=" ? $1(m, p) - m : parseFloat(p) - m,
            m: d && d < 4 ? Math.round : 0,
          }),
          (c = I2.lastIndex));
    return (
      (o.c = c < r.length ? r.substring(c, r.length) : ""),
      (o.fp = s),
      (j0.test(r) || g) && (o.e = 0),
      (this._pt = o),
      o
    );
  },
  d0 = function (t, e, i, r, a, n, s, o, c, l) {
    z(r) && (r = r(a || 0, t, n));
    var _ = t[e],
      h =
        i !== "get"
          ? i
          : z(_)
          ? c
            ? t[
                e.indexOf("set") || !z(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](c)
            : t[e]()
          : _,
      d = z(_) ? (c ? c4 : A3) : m0,
      p;
    if (
      (U(r) &&
        (~r.indexOf("random(") && (r = h2(r)),
        r.charAt(1) === "=" &&
          ((p = $1(h, r) + (X(h) || 0)), (p || p === 0) && (r = p))),
      !l || h !== r || t0)
    )
      return !isNaN(h * r) && r !== ""
        ? ((p = new Q(
            this._pt,
            t,
            e,
            +h || 0,
            r - (h || 0),
            typeof _ == "boolean" ? l4 : O3,
            0,
            d
          )),
          c && (p.fp = c),
          s && p.modifier(s, this, t),
          (this._pt = p))
        : (!_ && !(e in t) && l0(e, r),
          r4.call(this, t, e, h, r, d, o || e1.stringFilter, c));
  },
  a4 = function (t, e, i, r, a) {
    if (
      (z(t) && (t = f2(t, a, e, i, r)),
      !d1(t) || (t.style && t.nodeType) || G(t) || H0(t))
    )
      return U(t) ? f2(t, a, e, i, r) : t;
    var n = {},
      s;
    for (s in t) n[s] = f2(t[s], a, e, i, r);
    return n;
  },
  k3 = function (t, e, i, r, a, n) {
    var s, o, c, l;
    if (
      J[t] &&
      (s = new J[t]()).init(
        a,
        s.rawVars ? e[t] : a4(e[t], r, a, n, i),
        i,
        r,
        n
      ) !== !1 &&
      ((i._pt = o = new Q(i._pt, a, t, 0, 1, s.render, s, 0, s.priority)),
      i !== W1)
    )
      for (c = i._ptLookup[i._targets.indexOf(a)], l = s._props.length; l--; )
        c[s._props[l]] = o;
    return s;
  },
  b1,
  t0,
  p0 = function u(t, e, i) {
    var r = t.vars,
      a = r.ease,
      n = r.startAt,
      s = r.immediateRender,
      o = r.lazy,
      c = r.onUpdate,
      l = r.onUpdateParams,
      _ = r.callbackScope,
      h = r.runBackwards,
      d = r.yoyoEase,
      p = r.keyframes,
      f = r.autoRevert,
      m = t._dur,
      g = t._startAt,
      v = t._targets,
      y = t.parent,
      b = y && y.data === "nested" ? y.vars.targets : v,
      x = t._overwrite === "auto" && !o0,
      k = t.timeline,
      w,
      C,
      T,
      S,
      A,
      F,
      N,
      L,
      D,
      Z,
      B,
      W,
      O1;
    if (
      (k && (!p || !a) && (a = "none"),
      (t._ease = q1(a, j1.ease)),
      (t._yEase = d ? b3(q1(d === !0 ? a : d, j1.ease)) : 0),
      d &&
        t._yoyo &&
        !t._repeat &&
        ((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
      (t._from = !k && !!r.runBackwards),
      !k || (p && !r.stagger))
    ) {
      if (
        ((L = v[0] ? V1(v[0]).harness : 0),
        (W = L && r[L.prop]),
        (w = A2(r, f0)),
        g &&
          (g._zTime < 0 && g.progress(1),
          e < 0 && h && s && !f ? g.render(-1, !0) : g.revert(h && m ? T2 : Dt),
          (g._lazy = 0)),
        n)
      ) {
        if (
          (P1(
            (t._startAt = q.set(
              v,
              u1(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: y,
                  immediateRender: !0,
                  lazy: K(o),
                  startAt: null,
                  delay: 0,
                  onUpdate: c,
                  onUpdateParams: l,
                  callbackScope: _,
                  stagger: 0,
                },
                n
              )
            ))
          ),
          (t._startAt._dp = 0),
          e < 0 && (H || (!s && !f)) && t._startAt.revert(T2),
          s && m && e <= 0 && i <= 0)
        ) {
          e && (t._zTime = e);
          return;
        }
      } else if (h && m && !g) {
        if (
          (e && (s = !1),
          (T = u1(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: s && K(o),
              immediateRender: s,
              stagger: 0,
              parent: y,
            },
            w
          )),
          W && (T[L.prop] = W),
          P1((t._startAt = q.set(v, T))),
          (t._startAt._dp = 0),
          e < 0 && (H ? t._startAt.revert(T2) : t._startAt.render(-1, !0)),
          (t._zTime = e),
          !s)
        )
          u(t._startAt, O, O);
        else if (!e) return;
      }
      for (
        t._pt = t._ptCache = 0, o = (m && K(o)) || (o && !m), C = 0;
        C < v.length;
        C++
      ) {
        if (
          ((A = v[C]),
          (N = A._gsap || h0(v)[C]._gsap),
          (t._ptLookup[C] = Z = {}),
          $2[N.id] && w1.length && S2(),
          (B = b === v ? C : b.indexOf(A)),
          L &&
            (D = new L()).init(A, W || w, t, B, b) !== !1 &&
            ((t._pt = S =
              new Q(t._pt, A, D.name, 0, 1, D.render, D, 0, D.priority)),
            D._props.forEach(function (M1) {
              Z[M1] = S;
            }),
            D.priority && (F = 1)),
          !L || W)
        )
          for (T in w)
            J[T] && (D = k3(T, w, t, B, A, b))
              ? D.priority && (F = 1)
              : (Z[T] = S =
                  d0.call(t, A, T, "get", w[T], B, b, 0, r.stringFilter));
        t._op && t._op[C] && t.kill(A, t._op[C]),
          x &&
            t._pt &&
            ((b1 = t),
            R.killTweensOf(A, Z, t.globalTime(e)),
            (O1 = !t.parent),
            (b1 = 0)),
          t._pt && o && ($2[N.id] = 1);
      }
      F && D3(t), t._onInit && t._onInit(t);
    }
    (t._onUpdate = c),
      (t._initted = (!t._op || t._pt) && !O1),
      p && e <= 0 && k.render(s1, !0, !0);
  },
  n4 = function (t, e, i, r, a, n, s) {
    var o = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
      c,
      l,
      _,
      h;
    if (!o)
      for (
        o = t._ptCache[e] = [], _ = t._ptLookup, h = t._targets.length;
        h--;

      ) {
        if (((c = _[h][e]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== e && c.fp !== e; ) c = c._next;
        if (!c) return (t0 = 1), (t.vars[e] = "+=0"), p0(t, s), (t0 = 0), 1;
        o.push(c);
      }
    for (h = o.length; h--; )
      (l = o[h]),
        (c = l._pt || l),
        (c.s = (r || r === 0) && !a ? r : c.s + (r || 0) + n * c.c),
        (c.c = i - c.s),
        l.e && (l.e = I(i) + X(l.e)),
        l.b && (l.b = c.s + X(l.b));
  },
  s4 = function (t, e) {
    var i = t[0] ? V1(t[0]).harness : 0,
      r = i && i.aliases,
      a,
      n,
      s,
      o;
    if (!r) return e;
    a = U1({}, e);
    for (n in r)
      if (n in a) for (o = r[n].split(","), s = o.length; s--; ) a[o[s]] = a[n];
    return a;
  },
  o4 = function (t, e, i, r) {
    var a = e.ease || r || "power1.inOut",
      n,
      s;
    if (G(e))
      (s = i[t] || (i[t] = [])),
        e.forEach(function (o, c) {
          return s.push({ t: (c / (e.length - 1)) * 100, v: o, e: a });
        });
    else
      for (n in e)
        (s = i[n] || (i[n] = [])),
          n === "ease" || s.push({ t: parseFloat(t), v: e[n], e: a });
  },
  f2 = function (t, e, i, r, a) {
    return z(t)
      ? t.call(e, i, r, a)
      : U(t) && ~t.indexOf("random(")
      ? h2(t)
      : t;
  },
  P3 = _0 + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  S3 = {};
j(P3 + ",id,stagger,delay,duration,paused,scrollTrigger", function (u) {
  return (S3[u] = 1);
});
var q = (function (u) {
  G0(t, u);
  function t(i, r, a, n) {
    var s;
    typeof r == "number" && ((a.duration = r), (r = a), (a = null)),
      (s = u.call(this, n ? r : u2(r)) || this);
    var o = s.vars,
      c = o.duration,
      l = o.delay,
      _ = o.immediateRender,
      h = o.stagger,
      d = o.overwrite,
      p = o.keyframes,
      f = o.defaults,
      m = o.scrollTrigger,
      g = o.yoyoEase,
      v = r.parent || R,
      y = (G(i) || H0(i) ? y1(i[0]) : "length" in r) ? [i] : o1(i),
      b,
      x,
      k,
      w,
      C,
      T,
      S,
      A;
    if (
      ((s._targets = y.length
        ? h0(y)
        : P2(
            "GSAP target " + i + " not found. https://greensock.com",
            !e1.nullTargetWarn
          ) || []),
      (s._ptLookup = []),
      (s._overwrite = d),
      p || h || b2(c) || b2(l))
    ) {
      if (
        ((r = s.vars),
        (b = s.timeline =
          new $({
            data: "nested",
            defaults: f || {},
            targets: v && v.data === "nested" ? v.vars.targets : y,
          })),
        b.kill(),
        (b.parent = b._dp = m1(s)),
        (b._start = 0),
        h || b2(c) || b2(l))
      ) {
        if (((w = y.length), (S = h && h3(h)), d1(h)))
          for (C in h) ~P3.indexOf(C) && (A || (A = {}), (A[C] = h[C]));
        for (x = 0; x < w; x++)
          (k = A2(r, S3)),
            (k.stagger = 0),
            g && (k.yoyoEase = g),
            A && U1(k, A),
            (T = y[x]),
            (k.duration = +f2(c, m1(s), x, T, y)),
            (k.delay = (+f2(l, m1(s), x, T, y) || 0) - s._delay),
            !h &&
              w === 1 &&
              k.delay &&
              ((s._delay = l = k.delay), (s._start += l), (k.delay = 0)),
            b.to(T, k, S ? S(x, T, y) : 0),
            (b._ease = P.none);
        b.duration() ? (c = l = 0) : (s.timeline = 0);
      } else if (p) {
        u2(u1(b.vars.defaults, { ease: "none" })),
          (b._ease = q1(p.ease || r.ease || "none"));
        var F = 0,
          N,
          L,
          D;
        if (G(p))
          p.forEach(function (Z) {
            return b.to(y, Z, ">");
          }),
            b.duration();
        else {
          k = {};
          for (C in p)
            C === "ease" || C === "easeEach" || o4(C, p[C], k, p.easeEach);
          for (C in k)
            for (
              N = k[C].sort(function (Z, B) {
                return Z.t - B.t;
              }),
                F = 0,
                x = 0;
              x < N.length;
              x++
            )
              (L = N[x]),
                (D = {
                  ease: L.e,
                  duration: ((L.t - (x ? N[x - 1].t : 0)) / 100) * c,
                }),
                (D[C] = L.v),
                b.to(y, D, F),
                (F += D.duration);
          b.duration() < c && b.to({}, { duration: c - b.duration() });
        }
      }
      c || s.duration((c = b.duration()));
    } else s.timeline = 0;
    return (
      d === !0 && !o0 && ((b1 = m1(s)), R.killTweensOf(y), (b1 = 0)),
      _1(v, m1(s), a),
      r.reversed && s.reverse(),
      r.paused && s.paused(!0),
      (_ ||
        (!c &&
          !p &&
          s._start === Y(v._time) &&
          K(_) &&
          Nt(m1(s)) &&
          v.data !== "nested")) &&
        ((s._tTime = -O), s.render(Math.max(0, -l) || 0)),
      m && u3(m1(s), m),
      s
    );
  }
  var e = t.prototype;
  return (
    (e.render = function (r, a, n) {
      var s = this._time,
        o = this._tDur,
        c = this._dur,
        l = r < 0,
        _ = r > o - O && !l ? o : r < O ? 0 : r,
        h,
        d,
        p,
        f,
        m,
        g,
        v,
        y,
        b;
      if (!c) Bt(this, r, a, n);
      else if (
        _ !== this._tTime ||
        !r ||
        n ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== l)
      ) {
        if (((h = _), (y = this.timeline), this._repeat)) {
          if (((f = c + this._rDelay), this._repeat < -1 && l))
            return this.totalTime(f * 100 + r, a, n);
          if (
            ((h = Y(_ % f)),
            _ === o
              ? ((p = this._repeat), (h = c))
              : ((p = ~~(_ / f)),
                p && p === _ / f && ((h = c), p--),
                h > c && (h = c)),
            (g = this._yoyo && p & 1),
            g && ((b = this._yEase), (h = c - h)),
            (m = Q1(this._tTime, f)),
            h === s && !n && this._initted)
          )
            return (this._tTime = _), this;
          p !== m &&
            (y && this._yEase && T3(y, g),
            this.vars.repeatRefresh &&
              !g &&
              !this._lock &&
              ((this._lock = n = 1),
              (this.render(Y(f * p), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (l3(this, l ? r : h, n, a, _)) return (this._tTime = 0), this;
          if (s !== this._time) return this;
          if (c !== this._dur) return this.render(r, a, n);
        }
        if (
          ((this._tTime = _),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = v = (b || this._ease)(h / c)),
          this._from && (this.ratio = v = 1 - v),
          h && !s && !a && (c1(this, "onStart"), this._tTime !== _))
        )
          return this;
        for (d = this._pt; d; ) d.r(v, d.d), (d = d._next);
        (y &&
          y.render(
            r < 0 ? r : !h && g ? -O : y._dur * y._ease(h / this._dur),
            a,
            n
          )) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !a &&
            (l && H2(this, r, a, n), c1(this, "onUpdate")),
          this._repeat &&
            p !== m &&
            this.vars.onRepeat &&
            !a &&
            this.parent &&
            c1(this, "onRepeat"),
          (_ === this._tDur || !_) &&
            this._tTime === _ &&
            (l && !this._onUpdate && H2(this, r, !0, !0),
            (r || !c) &&
              ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) &&
              P1(this, 1),
            !a &&
              !(l && !s) &&
              (_ || s || g) &&
              (c1(this, _ === o ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(_ < o && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (e.targets = function () {
      return this._targets;
    }),
    (e.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        u.prototype.invalidate.call(this, r)
      );
    }),
    (e.resetTo = function (r, a, n, s) {
      d2 || t1.wake(), this._ts || this.play();
      var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || p0(this, o),
        (c = this._ease(o / this._dur)),
        n4(this, r, a, n, s, c, o)
          ? this.resetTo(r, a, n, s)
          : (z2(this, 0),
            this.parent ||
              o3(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (e.kill = function (r, a) {
      if ((a === void 0 && (a = "all"), !r && (!a || a === "all")))
        return (this._lazy = this._pt = 0), this.parent ? o2(this) : this;
      if (this.timeline) {
        var n = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, a, b1 && b1.vars.overwrite !== !0)
            ._first || o2(this),
          this.parent &&
            n !== this.timeline.totalDuration() &&
            J1(this, (this._dur * this.timeline._tDur) / n, 0, 1),
          this
        );
      }
      var s = this._targets,
        o = r ? o1(r) : s,
        c = this._ptLookup,
        l = this._pt,
        _,
        h,
        d,
        p,
        f,
        m,
        g;
      if ((!a || a === "all") && zt(s, o))
        return a === "all" && (this._pt = 0), o2(this);
      for (
        _ = this._op = this._op || [],
          a !== "all" &&
            (U(a) &&
              ((f = {}),
              j(a, function (v) {
                return (f[v] = 1);
              }),
              (a = f)),
            (a = s4(s, a))),
          g = s.length;
        g--;

      )
        if (~o.indexOf(s[g])) {
          (h = c[g]),
            a === "all"
              ? ((_[g] = a), (p = h), (d = {}))
              : ((d = _[g] = _[g] || {}), (p = a));
          for (f in p)
            (m = h && h[f]),
              m &&
                ((!("kill" in m.d) || m.d.kill(f) === !0) && E2(this, m, "_pt"),
                delete h[f]),
              d !== "all" && (d[f] = 1);
        }
      return this._initted && !this._pt && l && o2(this), this;
    }),
    (t.to = function (r, a) {
      return new t(r, a, arguments[2]);
    }),
    (t.from = function (r, a) {
      return l2(1, arguments);
    }),
    (t.delayedCall = function (r, a, n, s) {
      return new t(a, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: a,
        onReverseComplete: a,
        onCompleteParams: n,
        onReverseCompleteParams: n,
        callbackScope: s,
      });
    }),
    (t.fromTo = function (r, a, n) {
      return l2(2, arguments);
    }),
    (t.set = function (r, a) {
      return (a.duration = 0), a.repeatDelay || (a.repeat = 0), new t(r, a);
    }),
    (t.killTweensOf = function (r, a, n) {
      return R.killTweensOf(r, a, n);
    }),
    t
  );
})(e2);
u1(q.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
j("staggerTo,staggerFrom,staggerFromTo", function (u) {
  q[u] = function () {
    var t = new $(),
      e = j2.call(arguments, 0);
    return e.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), t[u].apply(t, e);
  };
});
var m0 = function (t, e, i) {
    return (t[e] = i);
  },
  A3 = function (t, e, i) {
    return t[e](i);
  },
  c4 = function (t, e, i, r) {
    return t[e](r.fp, i);
  },
  u4 = function (t, e, i) {
    return t.setAttribute(e, i);
  },
  g0 = function (t, e) {
    return z(t[e]) ? A3 : c0(t[e]) && t.setAttribute ? u4 : m0;
  },
  O3 = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
  },
  l4 = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  M3 = function (t, e) {
    var i = e._pt,
      r = "";
    if (!t && e.b) r = e.b;
    else if (t === 1 && e.e) r = e.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += e.c;
    }
    e.set(e.t, e.p, r, e);
  },
  v0 = function (t, e) {
    for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
  },
  f4 = function (t, e, i, r) {
    for (var a = this._pt, n; a; )
      (n = a._next), a.p === r && a.modifier(t, e, i), (a = n);
  },
  _4 = function (t) {
    for (var e = this._pt, i, r; e; )
      (r = e._next),
        (e.p === t && !e.op) || e.op === t
          ? E2(this, e, "_pt")
          : e.dep || (i = 1),
        (e = r);
    return !i;
  },
  h4 = function (t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
  },
  D3 = function (t) {
    for (var e = t._pt, i, r, a, n; e; ) {
      for (i = e._next, r = a; r && r.pr > e.pr; ) r = r._next;
      (e._prev = r ? r._prev : n) ? (e._prev._next = e) : (a = e),
        (e._next = r) ? (r._prev = e) : (n = e),
        (e = i);
    }
    t._pt = a;
  },
  Q = (function () {
    function u(e, i, r, a, n, s, o, c, l) {
      (this.t = i),
        (this.s = a),
        (this.c = n),
        (this.p = r),
        (this.r = s || O3),
        (this.d = o || this),
        (this.set = c || m0),
        (this.pr = l || 0),
        (this._next = e),
        e && (e._prev = this);
    }
    var t = u.prototype;
    return (
      (t.modifier = function (i, r, a) {
        (this.mSet = this.mSet || this.set),
          (this.set = h4),
          (this.m = i),
          (this.mt = a),
          (this.tween = r);
      }),
      u
    );
  })();
j(
  _0 +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (u) {
    return (f0[u] = 1);
  }
);
i1.TweenMax = i1.TweenLite = q;
i1.TimelineLite = i1.TimelineMax = $;
R = new $({
  sortChildren: !1,
  defaults: j1,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
e1.stringFilter = x3;
var i2 = [],
  w2 = {},
  d4 = [],
  M0 = 0,
  Z2 = function (t) {
    return (w2[t] || d4).map(function (e) {
      return e();
    });
  },
  e0 = function () {
    var t = Date.now(),
      e = [];
    t - M0 > 2 &&
      (Z2("matchMediaInit"),
      i2.forEach(function (i) {
        var r = i.queries,
          a = i.conditions,
          n,
          s,
          o,
          c;
        for (s in r)
          (n = n1.matchMedia(r[s]).matches),
            n && (o = 1),
            n !== a[s] && ((a[s] = n), (c = 1));
        c && (i.revert(), o && e.push(i));
      }),
      Z2("matchMediaRevert"),
      e.forEach(function (i) {
        return i.onMatch(i);
      }),
      (M0 = t),
      Z2("matchMedia"));
  },
  R3 = (function () {
    function u(e, i) {
      (this.selector = i && Q2(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        e && this.add(e);
    }
    var t = u.prototype;
    return (
      (t.add = function (i, r, a) {
        z(i) && ((a = r), (r = i), (i = z));
        var n = this,
          s = function () {
            var c = V,
              l = n.selector,
              _;
            return (
              c && c !== n && c.data.push(n),
              a && (n.selector = Q2(a)),
              (V = n),
              (_ = r.apply(n, arguments)),
              z(_) && n._r.push(_),
              (V = c),
              (n.selector = l),
              (n.isReverted = !1),
              _
            );
          };
        return (n.last = s), i === z ? s(n) : i ? (n[i] = s) : s;
      }),
      (t.ignore = function (i) {
        var r = V;
        (V = null), i(this), (V = r);
      }),
      (t.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof u
              ? i.push.apply(i, r.getTweens())
              : r instanceof q &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (i, r) {
        var a = this;
        if (i) {
          var n = this.getTweens();
          this.data.forEach(function (o) {
            o.data === "isFlip" &&
              (o.revert(),
              o.getChildren(!0, !0, !1).forEach(function (c) {
                return n.splice(n.indexOf(c), 1);
              }));
          }),
            n
              .map(function (o) {
                return { g: o.globalTime(0), t: o };
              })
              .sort(function (o, c) {
                return c.g - o.g || -1;
              })
              .forEach(function (o) {
                return o.t.revert(i);
              }),
            this.data.forEach(function (o) {
              return !(o instanceof e2) && o.revert && o.revert(i);
            }),
            this._r.forEach(function (o) {
              return o(i, a);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (o) {
            return o.kill && o.kill();
          });
        if ((this.clear(), r)) {
          var s = i2.indexOf(this);
          ~s && i2.splice(s, 1);
        }
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      u
    );
  })(),
  p4 = (function () {
    function u(e) {
      (this.contexts = []), (this.scope = e);
    }
    var t = u.prototype;
    return (
      (t.add = function (i, r, a) {
        d1(i) || (i = { matches: i });
        var n = new R3(0, a || this.scope),
          s = (n.conditions = {}),
          o,
          c,
          l;
        this.contexts.push(n), (r = n.add("onMatch", r)), (n.queries = i);
        for (c in i)
          c === "all"
            ? (l = 1)
            : ((o = n1.matchMedia(i[c])),
              o &&
                (i2.indexOf(n) < 0 && i2.push(n),
                (s[c] = o.matches) && (l = 1),
                o.addListener
                  ? o.addListener(e0)
                  : o.addEventListener("change", e0)));
        return l && r(n), this;
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      (t.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      u
    );
  })(),
  M2 = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      e.forEach(function (r) {
        return Kt(r);
      });
    },
    timeline: function (t) {
      return new $(t);
    },
    getTweensOf: function (t, e) {
      return R.getTweensOf(t, e);
    },
    getProperty: function (t, e, i, r) {
      U(t) && (t = o1(t)[0]);
      var a = V1(t || {}).get,
        n = i ? s3 : n3;
      return (
        i === "native" && (i = ""),
        t &&
          (e
            ? n(((J[e] && J[e].get) || a)(t, e, i, r))
            : function (s, o, c) {
                return n(((J[s] && J[s].get) || a)(t, s, o, c));
              })
      );
    },
    quickSetter: function (t, e, i) {
      if (((t = o1(t)), t.length > 1)) {
        var r = t.map(function (l) {
            return r1.quickSetter(l, e, i);
          }),
          a = r.length;
        return function (l) {
          for (var _ = a; _--; ) r[_](l);
        };
      }
      t = t[0] || {};
      var n = J[e],
        s = V1(t),
        o = (s.harness && (s.harness.aliases || {})[e]) || e,
        c = n
          ? function (l) {
              var _ = new n();
              (W1._pt = 0),
                _.init(t, i ? l + i : l, W1, 0, [t]),
                _.render(1, _),
                W1._pt && v0(1, W1);
            }
          : s.set(t, o);
      return n
        ? c
        : function (l) {
            return c(t, o, i ? l + i : l, s, 1);
          };
    },
    quickTo: function (t, e, i) {
      var r,
        a = r1.to(
          t,
          U1(((r = {}), (r[e] = "+=0.1"), (r.paused = !0), r), i || {})
        ),
        n = function (o, c, l) {
          return a.resetTo(e, o, c, l);
        };
      return (n.tween = a), n;
    },
    isTweening: function (t) {
      return R.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = q1(t.ease, j1.ease)), k0(j1, t || {});
    },
    config: function (t) {
      return k0(e1, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        i = t.effect,
        r = t.plugins,
        a = t.defaults,
        n = t.extendTimeline;
      (r || "").split(",").forEach(function (s) {
        return (
          s && !J[s] && !i1[s] && P2(e + " effect requires " + s + " plugin.")
        );
      }),
        (N2[e] = function (s, o, c) {
          return i(o1(s), u1(o || {}, a), c);
        }),
        n &&
          ($.prototype[e] = function (s, o, c) {
            return this.add(N2[e](s, d1(o) ? o : (c = o) && {}, this), c);
          });
    },
    registerEase: function (t, e) {
      P[t] = q1(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? q1(t, e) : P;
    },
    getById: function (t) {
      return R.getById(t);
    },
    exportRoot: function (t, e) {
      t === void 0 && (t = {});
      var i = new $(t),
        r,
        a;
      for (
        i.smoothChildTiming = K(t.smoothChildTiming),
          R.remove(i),
          i._dp = 0,
          i._time = i._tTime = R._time,
          r = R._first;
        r;

      )
        (a = r._next),
          (e ||
            !(
              !r._dur &&
              r instanceof q &&
              r.vars.onComplete === r._targets[0]
            )) &&
            _1(i, r, r._start - r._delay),
          (r = a);
      return _1(R, i, 0), i;
    },
    context: function (t, e) {
      return t ? new R3(t, e) : V;
    },
    matchMedia: function (t) {
      return new p4(t);
    },
    matchMediaRefresh: function () {
      return (
        i2.forEach(function (t) {
          var e = t.conditions,
            i,
            r;
          for (r in e) e[r] && ((e[r] = !1), (i = 1));
          i && t.revert();
        }) || e0()
      );
    },
    addEventListener: function (t, e) {
      var i = w2[t] || (w2[t] = []);
      ~i.indexOf(e) || i.push(e);
    },
    removeEventListener: function (t, e) {
      var i = w2[t],
        r = i && i.indexOf(e);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: Wt,
      wrapYoyo: $t,
      distribute: h3,
      random: p3,
      snap: d3,
      normalize: Gt,
      getUnit: X,
      clamp: qt,
      splitColor: v3,
      toArray: o1,
      selector: Q2,
      mapRange: g3,
      pipe: Yt,
      unitize: Xt,
      interpolate: Ht,
      shuffle: _3,
    },
    install: t3,
    effects: N2,
    ticker: t1,
    updateRoot: $.updateRoot,
    plugins: J,
    globalTimeline: R,
    core: {
      PropTween: Q,
      globals: e3,
      Tween: q,
      Timeline: $,
      Animation: e2,
      getCache: V1,
      _removeLinkedListItem: E2,
      reverting: function () {
        return H;
      },
      context: function (t) {
        return t && V && (V.data.push(t), (t._ctx = V)), V;
      },
      suppressOverwrites: function (t) {
        return (o0 = t);
      },
    },
  };
j("to,from,fromTo,delayedCall,set,killTweensOf", function (u) {
  return (M2[u] = q[u]);
});
t1.add($.updateRoot);
W1 = M2.to({}, { duration: 0 });
var m4 = function (t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
      i = i._next;
    return i;
  },
  g4 = function (t, e) {
    var i = t._targets,
      r,
      a,
      n;
    for (r in e)
      for (a = i.length; a--; )
        (n = t._ptLookup[a][r]),
          n &&
            (n = n.d) &&
            (n._pt && (n = m4(n, r)),
            n && n.modifier && n.modifier(e[r], t, i[a], r));
  },
  q2 = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (r, a, n) {
        n._onInit = function (s) {
          var o, c;
          if (
            (U(a) &&
              ((o = {}),
              j(a, function (l) {
                return (o[l] = 1);
              }),
              (a = o)),
            e)
          ) {
            o = {};
            for (c in a) o[c] = e(a[c]);
            a = o;
          }
          g4(s, a);
        };
      },
    };
  },
  r1 =
    M2.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, r, a) {
          var n, s, o;
          this.tween = i;
          for (n in e)
            (o = t.getAttribute(n) || ""),
              (s = this.add(
                t,
                "setAttribute",
                (o || 0) + "",
                e[n],
                r,
                a,
                0,
                0,
                n
              )),
              (s.op = n),
              (s.b = o),
              this._props.push(n);
        },
        render: function (t, e) {
          for (var i = e._pt; i; )
            H ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
        },
      },
      q2("roundProps", J2),
      q2("modifiers"),
      q2("snap", d3)
    ) || M2;
q.version = $.version = r1.version = "3.11.3";
J0 = 1;
$0() && t2();
P.Power0;
P.Power1;
P.Power2;
P.Power3;
P.Power4;
P.Linear;
P.Quad;
P.Cubic;
P.Quart;
P.Quint;
P.Strong;
P.Elastic;
P.Back;
P.SteppedEase;
P.Bounce;
P.Sine;
P.Expo;
P.Circ;
/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var D0,
  T1,
  H1,
  y0,
  B1,
  R0,
  x0,
  v4 = function () {
    return typeof window < "u";
  },
  x1 = {},
  z1 = 180 / Math.PI,
  K1 = Math.PI / 180,
  X1 = Math.atan2,
  E0 = 1e8,
  b0 = /([A-Z])/g,
  y4 = /(left|right|width|margin|padding|x)/i,
  x4 = /[\s,\(]\S/,
  v1 = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  i0 = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  },
  b4 = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
      e
    );
  },
  T4 = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
      e
    );
  },
  C4 = function (t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  E3 = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  F3 = function (t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
  },
  w4 = function (t, e, i) {
    return (t.style[e] = i);
  },
  k4 = function (t, e, i) {
    return t.style.setProperty(e, i);
  },
  P4 = function (t, e, i) {
    return (t._gsap[e] = i);
  },
  S4 = function (t, e, i) {
    return (t._gsap.scaleX = t._gsap.scaleY = i);
  },
  A4 = function (t, e, i, r, a) {
    var n = t._gsap;
    (n.scaleX = n.scaleY = i), n.renderTransform(a, n);
  },
  O4 = function (t, e, i, r, a) {
    var n = t._gsap;
    (n[e] = i), n.renderTransform(a, n);
  },
  E = "transform",
  f1 = E + "Origin",
  M4 = function (t, e) {
    var i = this,
      r = this.target,
      a = r.style;
    if (t in x1) {
      if (
        ((this.tfm = this.tfm || {}),
        t !== "transform" &&
          ((t = v1[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (n) {
                return (i.tfm[n] = g1(r, n));
              })
            : (this.tfm[t] = r._gsap.x ? r._gsap[t] : g1(r, t))),
        this.props.indexOf(E) >= 0)
      )
        return;
      r._gsap.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(f1, e, "")),
        (t = E);
    }
    (a || e) && this.props.push(t, e, a[t]);
  },
  z3 = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  D4 = function () {
    var t = this.props,
      e = this.target,
      i = e.style,
      r = e._gsap,
      a,
      n;
    for (a = 0; a < t.length; a += 3)
      t[a + 1]
        ? (e[t[a]] = t[a + 2])
        : t[a + 2]
        ? (i[t[a]] = t[a + 2])
        : i.removeProperty(t[a].replace(b0, "-$1").toLowerCase());
    if (this.tfm) {
      for (n in this.tfm) r[n] = this.tfm[n];
      r.svg &&
        (r.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        (a = x0()),
        a && !a.isStart && !i[E] && (z3(i), (r.uncache = 1));
    }
  },
  I3 = function (t, e) {
    var i = { target: t, props: [], revert: D4, save: M4 };
    return (
      e &&
        e.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  N3,
  r0 = function (t, e) {
    var i = T1.createElementNS
      ? T1.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : T1.createElement(t);
    return i.style ? i : T1.createElement(t);
  },
  h1 = function u(t, e, i) {
    var r = getComputedStyle(t);
    return (
      r[e] ||
      r.getPropertyValue(e.replace(b0, "-$1").toLowerCase()) ||
      r.getPropertyValue(e) ||
      (!i && u(t, r2(e) || e, 1)) ||
      ""
    );
  },
  F0 = "O,Moz,ms,Ms,Webkit".split(","),
  r2 = function (t, e, i) {
    var r = e || B1,
      a = r.style,
      n = 5;
    if (t in a && !i) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      n-- && !(F0[n] + t in a);

    );
    return n < 0 ? null : (n === 3 ? "ms" : n >= 0 ? F0[n] : "") + t;
  },
  a0 = function () {
    v4() &&
      window.document &&
      ((D0 = window),
      (T1 = D0.document),
      (H1 = T1.documentElement),
      (B1 = r0("div") || { style: {} }),
      r0("div"),
      (E = r2(E)),
      (f1 = E + "Origin"),
      (B1.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (N3 = !!r2("perspective")),
      (x0 = r1.core.reverting),
      (y0 = 1));
  },
  U2 = function u(t) {
    var e = r0(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      r = this.nextSibling,
      a = this.style.cssText,
      n;
    if (
      (H1.appendChild(e),
      e.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (n = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = u);
      } catch {}
    else this._gsapBBox && (n = this._gsapBBox());
    return (
      i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
      H1.removeChild(e),
      (this.style.cssText = a),
      n
    );
  },
  z0 = function (t, e) {
    for (var i = e.length; i--; )
      if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  },
  L3 = function (t) {
    var e;
    try {
      e = t.getBBox();
    } catch {
      e = U2.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === U2 || (e = U2.call(t, !0)),
      e && !e.width && !e.x && !e.y
        ? {
            x: +z0(t, ["x", "cx", "x1"]) || 0,
            y: +z0(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : e
    );
  },
  B3 = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && L3(t));
  },
  p2 = function (t, e) {
    if (e) {
      var i = t.style;
      e in x1 && e !== f1 && (e = E),
        i.removeProperty
          ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") &&
              (e = "-" + e),
            i.removeProperty(e.replace(b0, "-$1").toLowerCase()))
          : i.removeAttribute(e);
    }
  },
  C1 = function (t, e, i, r, a, n) {
    var s = new Q(t._pt, e, i, 0, 1, n ? F3 : E3);
    return (t._pt = s), (s.b = r), (s.e = a), t._props.push(i), s;
  },
  I0 = { deg: 1, rad: 1, turn: 1 },
  R4 = { grid: 1, flex: 1 },
  S1 = function u(t, e, i, r) {
    var a = parseFloat(i) || 0,
      n = (i + "").trim().substr((a + "").length) || "px",
      s = B1.style,
      o = y4.test(e),
      c = t.tagName.toLowerCase() === "svg",
      l = (c ? "client" : "offset") + (o ? "Width" : "Height"),
      _ = 100,
      h = r === "px",
      d = r === "%",
      p,
      f,
      m,
      g;
    return r === n || !a || I0[r] || I0[n]
      ? a
      : (n !== "px" && !h && (a = u(t, e, i, "px")),
        (g = t.getCTM && B3(t)),
        (d || n === "%") && (x1[e] || ~e.indexOf("adius"))
          ? ((p = g ? t.getBBox()[o ? "width" : "height"] : t[l]),
            I(d ? (a / p) * _ : (a / 100) * p))
          : ((s[o ? "width" : "height"] = _ + (h ? n : r)),
            (f =
              ~e.indexOf("adius") || (r === "em" && t.appendChild && !c)
                ? t
                : t.parentNode),
            g && (f = (t.ownerSVGElement || {}).parentNode),
            (!f || f === T1 || !f.appendChild) && (f = T1.body),
            (m = f._gsap),
            m && d && m.width && o && m.time === t1.time && !m.uncache
              ? I((a / m.width) * _)
              : ((d || n === "%") &&
                  !R4[h1(f, "display")] &&
                  (s.position = h1(t, "position")),
                f === t && (s.position = "static"),
                f.appendChild(B1),
                (p = B1[l]),
                f.removeChild(B1),
                (s.position = "absolute"),
                o && d && ((m = V1(f)), (m.time = t1.time), (m.width = f[l])),
                I(h ? (p * a) / _ : p && a ? (_ / p) * a : 0))));
  },
  g1 = function (t, e, i, r) {
    var a;
    return (
      y0 || a0(),
      e in v1 &&
        e !== "transform" &&
        ((e = v1[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
      x1[e] && e !== "transform"
        ? ((a = g2(t, r)),
          (a =
            e !== "transformOrigin"
              ? a[e]
              : a.svg
              ? a.origin
              : R2(h1(t, f1)) + " " + a.zOrigin + "px"))
        : ((a = t.style[e]),
          (!a || a === "auto" || r || ~(a + "").indexOf("calc(")) &&
            (a =
              (D2[e] && D2[e](t, e, i)) ||
              h1(t, e) ||
              r3(t, e) ||
              (e === "opacity" ? 1 : 0))),
      i && !~(a + "").trim().indexOf(" ") ? S1(t, e, a, i) + i : a
    );
  },
  E4 = function (t, e, i, r) {
    if (!i || i === "none") {
      var a = r2(e, t, 1),
        n = a && h1(t, a, 1);
      n && n !== i
        ? ((e = a), (i = n))
        : e === "borderColor" && (i = h1(t, "borderTopColor"));
    }
    var s = new Q(this._pt, t.style, e, 0, 1, M3),
      o = 0,
      c = 0,
      l,
      _,
      h,
      d,
      p,
      f,
      m,
      g,
      v,
      y,
      b,
      x;
    if (
      ((s.b = i),
      (s.e = r),
      (i += ""),
      (r += ""),
      r === "auto" && ((t.style[e] = r), (r = h1(t, e) || r), (t.style[e] = i)),
      (l = [i, r]),
      x3(l),
      (i = l[0]),
      (r = l[1]),
      (h = i.match(G1) || []),
      (x = r.match(G1) || []),
      x.length)
    ) {
      for (; (_ = G1.exec(r)); )
        (m = _[0]),
          (v = r.substring(o, _.index)),
          p
            ? (p = (p + 1) % 5)
            : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (p = 1),
          m !== (f = h[c++] || "") &&
            ((d = parseFloat(f) || 0),
            (b = f.substr((d + "").length)),
            m.charAt(1) === "=" && (m = $1(d, m) + b),
            (g = parseFloat(m)),
            (y = m.substr((g + "").length)),
            (o = G1.lastIndex - y.length),
            y ||
              ((y = y || e1.units[e] || b),
              o === r.length && ((r += y), (s.e += y))),
            b !== y && (d = S1(t, e, f, y) || 0),
            (s._pt = {
              _next: s._pt,
              p: v || c === 1 ? v : ",",
              s: d,
              c: g - d,
              m: (p && p < 4) || e === "zIndex" ? Math.round : 0,
            }));
      s.c = o < r.length ? r.substring(o, r.length) : "";
    } else s.r = e === "display" && r === "none" ? F3 : E3;
    return j0.test(r) && (s.e = 0), (this._pt = s), s;
  },
  N0 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  F4 = function (t) {
    var e = t.split(" "),
      i = e[0],
      r = e[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((t = i), (i = r), (r = t)),
      (e[0] = N0[i] || i),
      (e[1] = N0[r] || r),
      e.join(" ")
    );
  },
  z4 = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i = e.t,
        r = i.style,
        a = e.u,
        n = i._gsap,
        s,
        o,
        c;
      if (a === "all" || a === !0) (r.cssText = ""), (o = 1);
      else
        for (a = a.split(","), c = a.length; --c > -1; )
          (s = a[c]),
            x1[s] && ((o = 1), (s = s === "transformOrigin" ? f1 : E)),
            p2(i, s);
      o &&
        (p2(i, E),
        n &&
          (n.svg && i.removeAttribute("transform"),
          g2(i, 1),
          (n.uncache = 1),
          z3(r)));
    }
  },
  D2 = {
    clearProps: function (t, e, i, r, a) {
      if (a.data !== "isFromStart") {
        var n = (t._pt = new Q(t._pt, e, i, 0, 0, z4));
        return (n.u = r), (n.pr = -10), (n.tween = a), t._props.push(i), 1;
      }
    },
  },
  m2 = [1, 0, 0, 1, 0, 0],
  V3 = {},
  Z3 = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  L0 = function (t) {
    var e = h1(t, E);
    return Z3(e) ? m2 : e.substr(7).match(K0).map(I);
  },
  T0 = function (t, e) {
    var i = t._gsap || V1(t),
      r = t.style,
      a = L0(t),
      n,
      s,
      o,
      c;
    return i.svg && t.getAttribute("transform")
      ? ((o = t.transform.baseVal.consolidate().matrix),
        (a = [o.a, o.b, o.c, o.d, o.e, o.f]),
        a.join(",") === "1,0,0,1,0,0" ? m2 : a)
      : (a === m2 &&
          !t.offsetParent &&
          t !== H1 &&
          !i.svg &&
          ((o = r.display),
          (r.display = "block"),
          (n = t.parentNode),
          (!n || !t.offsetParent) &&
            ((c = 1), (s = t.nextElementSibling), H1.appendChild(t)),
          (a = L0(t)),
          o ? (r.display = o) : p2(t, "display"),
          c &&
            (s
              ? n.insertBefore(t, s)
              : n
              ? n.appendChild(t)
              : H1.removeChild(t))),
        e && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a);
  },
  n0 = function (t, e, i, r, a, n) {
    var s = t._gsap,
      o = a || T0(t, !0),
      c = s.xOrigin || 0,
      l = s.yOrigin || 0,
      _ = s.xOffset || 0,
      h = s.yOffset || 0,
      d = o[0],
      p = o[1],
      f = o[2],
      m = o[3],
      g = o[4],
      v = o[5],
      y = e.split(" "),
      b = parseFloat(y[0]) || 0,
      x = parseFloat(y[1]) || 0,
      k,
      w,
      C,
      T;
    i
      ? o !== m2 &&
        (w = d * m - p * f) &&
        ((C = b * (m / w) + x * (-f / w) + (f * v - m * g) / w),
        (T = b * (-p / w) + x * (d / w) - (d * v - p * g) / w),
        (b = C),
        (x = T))
      : ((k = L3(t)),
        (b = k.x + (~y[0].indexOf("%") ? (b / 100) * k.width : b)),
        (x = k.y + (~(y[1] || y[0]).indexOf("%") ? (x / 100) * k.height : x))),
      r || (r !== !1 && s.smooth)
        ? ((g = b - c),
          (v = x - l),
          (s.xOffset = _ + (g * d + v * f) - g),
          (s.yOffset = h + (g * p + v * m) - v))
        : (s.xOffset = s.yOffset = 0),
      (s.xOrigin = b),
      (s.yOrigin = x),
      (s.smooth = !!r),
      (s.origin = e),
      (s.originIsAbsolute = !!i),
      (t.style[f1] = "0px 0px"),
      n &&
        (C1(n, s, "xOrigin", c, b),
        C1(n, s, "yOrigin", l, x),
        C1(n, s, "xOffset", _, s.xOffset),
        C1(n, s, "yOffset", h, s.yOffset)),
      t.setAttribute("data-svg-origin", b + " " + x);
  },
  g2 = function (t, e) {
    var i = t._gsap || new w3(t);
    if ("x" in i && !e && !i.uncache) return i;
    var r = t.style,
      a = i.scaleX < 0,
      n = "px",
      s = "deg",
      o = getComputedStyle(t),
      c = h1(t, f1) || "0",
      l,
      _,
      h,
      d,
      p,
      f,
      m,
      g,
      v,
      y,
      b,
      x,
      k,
      w,
      C,
      T,
      S,
      A,
      F,
      N,
      L,
      D,
      Z,
      B,
      W,
      O1,
      M1,
      a2,
      D1,
      C0,
      p1,
      R1;
    return (
      (l = _ = h = f = m = g = v = y = b = 0),
      (d = p = 1),
      (i.svg = !!(t.getCTM && B3(t))),
      o.translate &&
        ((o.translate !== "none" ||
          o.scale !== "none" ||
          o.rotate !== "none") &&
          (r[E] =
            (o.translate !== "none"
              ? "translate3d(" +
                (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") +
            (o.scale !== "none"
              ? "scale(" + o.scale.split(" ").join(",") + ") "
              : "") +
            (o[E] !== "none" ? o[E] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (w = T0(t, i.svg)),
      i.svg &&
        (i.uncache
          ? ((W = t.getBBox()),
            (c = i.xOrigin - W.x + "px " + (i.yOrigin - W.y) + "px"),
            (B = ""))
          : (B = !e && t.getAttribute("data-svg-origin")),
        n0(t, B || c, !!B || i.originIsAbsolute, i.smooth !== !1, w)),
      (x = i.xOrigin || 0),
      (k = i.yOrigin || 0),
      w !== m2 &&
        ((A = w[0]),
        (F = w[1]),
        (N = w[2]),
        (L = w[3]),
        (l = D = w[4]),
        (_ = Z = w[5]),
        w.length === 6
          ? ((d = Math.sqrt(A * A + F * F)),
            (p = Math.sqrt(L * L + N * N)),
            (f = A || F ? X1(F, A) * z1 : 0),
            (v = N || L ? X1(N, L) * z1 + f : 0),
            v && (p *= Math.abs(Math.cos(v * K1))),
            i.svg && ((l -= x - (x * A + k * N)), (_ -= k - (x * F + k * L))))
          : ((R1 = w[6]),
            (C0 = w[7]),
            (M1 = w[8]),
            (a2 = w[9]),
            (D1 = w[10]),
            (p1 = w[11]),
            (l = w[12]),
            (_ = w[13]),
            (h = w[14]),
            (C = X1(R1, D1)),
            (m = C * z1),
            C &&
              ((T = Math.cos(-C)),
              (S = Math.sin(-C)),
              (B = D * T + M1 * S),
              (W = Z * T + a2 * S),
              (O1 = R1 * T + D1 * S),
              (M1 = D * -S + M1 * T),
              (a2 = Z * -S + a2 * T),
              (D1 = R1 * -S + D1 * T),
              (p1 = C0 * -S + p1 * T),
              (D = B),
              (Z = W),
              (R1 = O1)),
            (C = X1(-N, D1)),
            (g = C * z1),
            C &&
              ((T = Math.cos(-C)),
              (S = Math.sin(-C)),
              (B = A * T - M1 * S),
              (W = F * T - a2 * S),
              (O1 = N * T - D1 * S),
              (p1 = L * S + p1 * T),
              (A = B),
              (F = W),
              (N = O1)),
            (C = X1(F, A)),
            (f = C * z1),
            C &&
              ((T = Math.cos(C)),
              (S = Math.sin(C)),
              (B = A * T + F * S),
              (W = D * T + Z * S),
              (F = F * T - A * S),
              (Z = Z * T - D * S),
              (A = B),
              (D = W)),
            m &&
              Math.abs(m) + Math.abs(f) > 359.9 &&
              ((m = f = 0), (g = 180 - g)),
            (d = I(Math.sqrt(A * A + F * F + N * N))),
            (p = I(Math.sqrt(Z * Z + R1 * R1))),
            (C = X1(D, Z)),
            (v = Math.abs(C) > 2e-4 ? C * z1 : 0),
            (b = p1 ? 1 / (p1 < 0 ? -p1 : p1) : 0)),
        i.svg &&
          ((B = t.getAttribute("transform")),
          (i.forceCSS = t.setAttribute("transform", "") || !Z3(h1(t, E))),
          B && t.setAttribute("transform", B))),
      Math.abs(v) > 90 &&
        Math.abs(v) < 270 &&
        (a
          ? ((d *= -1), (v += f <= 0 ? 180 : -180), (f += f <= 0 ? 180 : -180))
          : ((p *= -1), (v += v <= 0 ? 180 : -180))),
      (e = e || i.uncache),
      (i.x =
        l -
        ((i.xPercent =
          l &&
          ((!e && i.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0)))
          ? (t.offsetWidth * i.xPercent) / 100
          : 0) +
        n),
      (i.y =
        _ -
        ((i.yPercent =
          _ &&
          ((!e && i.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0)))
          ? (t.offsetHeight * i.yPercent) / 100
          : 0) +
        n),
      (i.z = h + n),
      (i.scaleX = I(d)),
      (i.scaleY = I(p)),
      (i.rotation = I(f) + s),
      (i.rotationX = I(m) + s),
      (i.rotationY = I(g) + s),
      (i.skewX = v + s),
      (i.skewY = y + s),
      (i.transformPerspective = b + n),
      (i.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (r[f1] = R2(c)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = e1.force3D),
      (i.renderTransform = i.svg ? N4 : N3 ? q3 : I4),
      (i.uncache = 0),
      i
    );
  },
  R2 = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  Y2 = function (t, e, i) {
    var r = X(e);
    return I(parseFloat(e) + parseFloat(S1(t, "x", i + "px", r))) + r;
  },
  I4 = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      q3(t, e);
  },
  E1 = "0deg",
  s2 = "0px",
  F1 = ") ",
  q3 = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      a = i.yPercent,
      n = i.x,
      s = i.y,
      o = i.z,
      c = i.rotation,
      l = i.rotationY,
      _ = i.rotationX,
      h = i.skewX,
      d = i.skewY,
      p = i.scaleX,
      f = i.scaleY,
      m = i.transformPerspective,
      g = i.force3D,
      v = i.target,
      y = i.zOrigin,
      b = "",
      x = (g === "auto" && t && t !== 1) || g === !0;
    if (y && (_ !== E1 || l !== E1)) {
      var k = parseFloat(l) * K1,
        w = Math.sin(k),
        C = Math.cos(k),
        T;
      (k = parseFloat(_) * K1),
        (T = Math.cos(k)),
        (n = Y2(v, n, w * T * -y)),
        (s = Y2(v, s, -Math.sin(k) * -y)),
        (o = Y2(v, o, C * T * -y + y));
    }
    m !== s2 && (b += "perspective(" + m + F1),
      (r || a) && (b += "translate(" + r + "%, " + a + "%) "),
      (x || n !== s2 || s !== s2 || o !== s2) &&
        (b +=
          o !== s2 || x
            ? "translate3d(" + n + ", " + s + ", " + o + ") "
            : "translate(" + n + ", " + s + F1),
      c !== E1 && (b += "rotate(" + c + F1),
      l !== E1 && (b += "rotateY(" + l + F1),
      _ !== E1 && (b += "rotateX(" + _ + F1),
      (h !== E1 || d !== E1) && (b += "skew(" + h + ", " + d + F1),
      (p !== 1 || f !== 1) && (b += "scale(" + p + ", " + f + F1),
      (v.style[E] = b || "translate(0, 0)");
  },
  N4 = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      a = i.yPercent,
      n = i.x,
      s = i.y,
      o = i.rotation,
      c = i.skewX,
      l = i.skewY,
      _ = i.scaleX,
      h = i.scaleY,
      d = i.target,
      p = i.xOrigin,
      f = i.yOrigin,
      m = i.xOffset,
      g = i.yOffset,
      v = i.forceCSS,
      y = parseFloat(n),
      b = parseFloat(s),
      x,
      k,
      w,
      C,
      T;
    (o = parseFloat(o)),
      (c = parseFloat(c)),
      (l = parseFloat(l)),
      l && ((l = parseFloat(l)), (c += l), (o += l)),
      o || c
        ? ((o *= K1),
          (c *= K1),
          (x = Math.cos(o) * _),
          (k = Math.sin(o) * _),
          (w = Math.sin(o - c) * -h),
          (C = Math.cos(o - c) * h),
          c &&
            ((l *= K1),
            (T = Math.tan(c - l)),
            (T = Math.sqrt(1 + T * T)),
            (w *= T),
            (C *= T),
            l &&
              ((T = Math.tan(l)),
              (T = Math.sqrt(1 + T * T)),
              (x *= T),
              (k *= T))),
          (x = I(x)),
          (k = I(k)),
          (w = I(w)),
          (C = I(C)))
        : ((x = _), (C = h), (k = w = 0)),
      ((y && !~(n + "").indexOf("px")) || (b && !~(s + "").indexOf("px"))) &&
        ((y = S1(d, "x", n, "px")), (b = S1(d, "y", s, "px"))),
      (p || f || m || g) &&
        ((y = I(y + p - (p * x + f * w) + m)),
        (b = I(b + f - (p * k + f * C) + g))),
      (r || a) &&
        ((T = d.getBBox()),
        (y = I(y + (r / 100) * T.width)),
        (b = I(b + (a / 100) * T.height))),
      (T =
        "matrix(" + x + "," + k + "," + w + "," + C + "," + y + "," + b + ")"),
      d.setAttribute("transform", T),
      v && (d.style[E] = T);
  },
  L4 = function (t, e, i, r, a) {
    var n = 360,
      s = U(a),
      o = parseFloat(a) * (s && ~a.indexOf("rad") ? z1 : 1),
      c = o - r,
      l = r + c + "deg",
      _,
      h;
    return (
      s &&
        ((_ = a.split("_")[1]),
        _ === "short" && ((c %= n), c !== c % (n / 2) && (c += c < 0 ? n : -n)),
        _ === "cw" && c < 0
          ? (c = ((c + n * E0) % n) - ~~(c / n) * n)
          : _ === "ccw" && c > 0 && (c = ((c - n * E0) % n) - ~~(c / n) * n)),
      (t._pt = h = new Q(t._pt, e, i, r, c, b4)),
      (h.e = l),
      (h.u = "deg"),
      t._props.push(i),
      h
    );
  },
  B0 = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  B4 = function (t, e, i) {
    var r = B0({}, i._gsap),
      a = "perspective,force3D,transformOrigin,svgOrigin",
      n = i.style,
      s,
      o,
      c,
      l,
      _,
      h,
      d,
      p;
    r.svg
      ? ((c = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (n[E] = e),
        (s = g2(i, 1)),
        p2(i, E),
        i.setAttribute("transform", c))
      : ((c = getComputedStyle(i)[E]), (n[E] = e), (s = g2(i, 1)), (n[E] = c));
    for (o in x1)
      (c = r[o]),
        (l = s[o]),
        c !== l &&
          a.indexOf(o) < 0 &&
          ((d = X(c)),
          (p = X(l)),
          (_ = d !== p ? S1(i, o, c, p) : parseFloat(c)),
          (h = parseFloat(l)),
          (t._pt = new Q(t._pt, s, o, _, h - _, i0)),
          (t._pt.u = p || 0),
          t._props.push(o));
    B0(s, r);
  };
j("padding,margin,Width,Radius", function (u, t) {
  var e = "Top",
    i = "Right",
    r = "Bottom",
    a = "Left",
    n = (t < 3 ? [e, i, r, a] : [e + a, e + i, r + i, r + a]).map(function (s) {
      return t < 2 ? u + s : "border" + s + u;
    });
  D2[t > 1 ? "border" + u : u] = function (s, o, c, l, _) {
    var h, d;
    if (arguments.length < 4)
      return (
        (h = n.map(function (p) {
          return g1(s, p, c);
        })),
        (d = h.join(" ")),
        d.split(h[0]).length === 5 ? h[0] : d
      );
    (h = (l + "").split(" ")),
      (d = {}),
      n.forEach(function (p, f) {
        return (d[p] = h[f] = h[f] || h[((f - 1) / 2) | 0]);
      }),
      s.init(o, d, _);
  };
});
var U3 = {
  name: "css",
  register: a0,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, e, i, r, a) {
    var n = this._props,
      s = t.style,
      o = i.vars.startAt,
      c,
      l,
      _,
      h,
      d,
      p,
      f,
      m,
      g,
      v,
      y,
      b,
      x,
      k,
      w,
      C;
    y0 || a0(),
      (this.styles = this.styles || I3(t)),
      (C = this.styles.props),
      (this.tween = i);
    for (f in e)
      if (f !== "autoRound" && ((l = e[f]), !(J[f] && k3(f, e, i, r, t, a)))) {
        if (
          ((d = typeof l),
          (p = D2[f]),
          d === "function" && ((l = l.call(i, r, t, a)), (d = typeof l)),
          d === "string" && ~l.indexOf("random(") && (l = h2(l)),
          p)
        )
          p(this, t, f, l, i) && (w = 1);
        else if (f.substr(0, 2) === "--")
          (c = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
            (l += ""),
            (k1.lastIndex = 0),
            k1.test(c) || ((m = X(c)), (g = X(l))),
            g ? m !== g && (c = S1(t, f, c, g) + g) : m && (l += m),
            this.add(s, "setProperty", c, l, r, a, 0, 0, f),
            n.push(f),
            C.push(f, 0, s[f]);
        else if (d !== "undefined") {
          if (
            (o && f in o
              ? ((c = typeof o[f] == "function" ? o[f].call(i, r, t, a) : o[f]),
                U(c) && ~c.indexOf("random(") && (c = h2(c)),
                X(c + "") || (c += e1.units[f] || X(g1(t, f)) || ""),
                (c + "").charAt(1) === "=" && (c = g1(t, f)))
              : (c = g1(t, f)),
            (h = parseFloat(c)),
            (v = d === "string" && l.charAt(1) === "=" && l.substr(0, 2)),
            v && (l = l.substr(2)),
            (_ = parseFloat(l)),
            f in v1 &&
              (f === "autoAlpha" &&
                (h === 1 && g1(t, "visibility") === "hidden" && _ && (h = 0),
                C.push("visibility", 0, s.visibility),
                C1(
                  this,
                  s,
                  "visibility",
                  h ? "inherit" : "hidden",
                  _ ? "inherit" : "hidden",
                  !_
                )),
              f !== "scale" &&
                f !== "transform" &&
                ((f = v1[f]), ~f.indexOf(",") && (f = f.split(",")[0]))),
            (y = f in x1),
            y)
          ) {
            if (
              (this.styles.save(f),
              b ||
                ((x = t._gsap),
                (x.renderTransform && !e.parseTransform) ||
                  g2(t, e.parseTransform),
                (k = e.smoothOrigin !== !1 && x.smooth),
                (b = this._pt =
                  new Q(this._pt, s, E, 0, 1, x.renderTransform, x, 0, -1)),
                (b.dep = 1)),
              f === "scale")
            )
              (this._pt = new Q(
                this._pt,
                x,
                "scaleY",
                h,
                (v ? $1(h, v + _) : _) - h || 0,
                i0
              )),
                (this._pt.u = 0),
                n.push("scaleY", f),
                (f += "X");
            else if (f === "transformOrigin") {
              C.push(f1, 0, s[f1]),
                (l = F4(l)),
                x.svg
                  ? n0(t, l, 0, k, 0, this)
                  : ((g = parseFloat(l.split(" ")[2]) || 0),
                    g !== x.zOrigin && C1(this, x, "zOrigin", x.zOrigin, g),
                    C1(this, s, f, R2(c), R2(l)));
              continue;
            } else if (f === "svgOrigin") {
              n0(t, l, 1, k, 0, this);
              continue;
            } else if (f in V3) {
              L4(this, x, f, h, v ? $1(h, v + l) : l);
              continue;
            } else if (f === "smoothOrigin") {
              C1(this, x, "smooth", x.smooth, l);
              continue;
            } else if (f === "force3D") {
              x[f] = l;
              continue;
            } else if (f === "transform") {
              B4(this, l, t);
              continue;
            }
          } else f in s || (f = r2(f) || f);
          if (y || ((_ || _ === 0) && (h || h === 0) && !x4.test(l) && f in s))
            (m = (c + "").substr((h + "").length)),
              _ || (_ = 0),
              (g = X(l) || (f in e1.units ? e1.units[f] : m)),
              m !== g && (h = S1(t, f, c, g)),
              (this._pt = new Q(
                this._pt,
                y ? x : s,
                f,
                h,
                (v ? $1(h, v + _) : _) - h,
                !y && (g === "px" || f === "zIndex") && e.autoRound !== !1
                  ? C4
                  : i0
              )),
              (this._pt.u = g || 0),
              m !== g && g !== "%" && ((this._pt.b = c), (this._pt.r = T4));
          else if (f in s) E4.call(this, t, f, c, v ? v + l : l);
          else if (f in t) this.add(t, f, c || t[f], v ? v + l : l, r, a);
          else {
            l0(f, l);
            continue;
          }
          y || (f in s ? C.push(f, 0, s[f]) : C.push(f, 1, c || t[f])),
            n.push(f);
        }
      }
    w && D3(this);
  },
  render: function (t, e) {
    if (e.tween._time || !x0())
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    else e.styles.revert();
  },
  get: g1,
  aliases: v1,
  getSetter: function (t, e, i) {
    var r = v1[e];
    return (
      r && r.indexOf(",") < 0 && (e = r),
      e in x1 && e !== f1 && (t._gsap.x || g1(t, "x"))
        ? i && R0 === i
          ? e === "scale"
            ? S4
            : P4
          : (R0 = i || {}) && (e === "scale" ? A4 : O4)
        : t.style && !c0(t.style[e])
        ? w4
        : ~e.indexOf("-")
        ? k4
        : g0(t, e)
    );
  },
  core: { _removeProperty: p2, _getMatrix: T0 },
};
r1.utils.checkPrefix = r2;
r1.core.getStyleSaver = I3;
(function (u, t, e, i) {
  var r = j(u + "," + t + "," + e, function (a) {
    x1[a] = 1;
  });
  j(t, function (a) {
    (e1.units[a] = "deg"), (V3[a] = 1);
  }),
    (v1[r[13]] = u + "," + t),
    j(i, function (a) {
      var n = a.split(":");
      v1[n[1]] = r[n[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
j(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (u) {
    e1.units[u] = "px";
  }
);
r1.registerPlugin(U3);
var s0 = r1.registerPlugin(U3) || r1;
s0.core.Tween;
const V4 = { class: "list" },
  Z4 = U0(
    '<svg id="Cloud_scroll_Image" data-name="cloud scroll Image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1702.41 300" data-v-c388597b><title data-v-c388597b>cloud scroll</title><g id="clouds" data-v-c388597b><path class="cloud" id="Cloud11" fill="#f00" stroke="black" stroke-width="10" d="M1531.38,563c-2.85-.31-5.71-.55-8.55-1a63.48,63.48,0,0,1-7.76-1.44,19.3,19.3,0,0,1-5-2.33,5.68,5.68,0,0,1-2.7-6,12.26,12.26,0,0,1,1.23-4.35,28.82,28.82,0,0,1,17.42-13.75,14.73,14.73,0,0,1,9.66.59c.36.14.73.24,1.31.43.17-1.8.36-3.44.48-5.08a74.75,74.75,0,0,1,3.63-16.84c2.61-8.31,8.34-13,16.6-14.94,2.64-.62,5.33-1.06,8-1.54,4-.73,8,.28,11.9.83a16.06,16.06,0,0,1,1.62.38c.22-1.38.39-2.71.65-4a66.86,66.86,0,0,1,8-21.18,37.36,37.36,0,0,1,14.52-13.95c1.26-.69,2.56-1.33,3.77-2.1,5.31-3.41,11-3.63,16.84-1.88a52.53,52.53,0,0,1,8,3.17c1.42.69,2.46,2.12,3.79,3.06,4.8,3.39,9.27,7.08,11.9,12.47,9.62-6,19.94-7.38,30.78-5.89a56.17,56.17,0,0,1,5.9,1.09c14.88,3.71,24.43,13,28.52,27.76a59.23,59.23,0,0,1,1.65,19.27,24.78,24.78,0,0,1-3.71,11.78c-.59.94-1.12,1.9-1.81,3.1,1.07,0,1.9.06,2.71,0a54.5,54.5,0,0,1,23.15,2.92,20.79,20.79,0,0,1,5.42,3,4.08,4.08,0,0,1,.68,6.31,13.33,13.33,0,0,1-3.75,2.9c-3.43,1.89-7.26,2.48-11.09,2.79-8.92.73-17.87,1.21-26.79,2-9.48.77-18.94,1.76-28.42,2.57-5.8.5-11.61.85-17.42,1.26l-38.53,2.7c-7,.5-14,1-21,1.53-7.57.63-15.12,1.5-22.7,2.07-10.12.76-20.26,1.34-30.4,2-1,.07-1.89.22-2.84.33Zm117.23-86.71c1.06,2.95,2.29,5.67,3,8.51,2,8,.28,15.09-5.84,20.82a29.73,29.73,0,0,1-13.07,7.29,23.6,23.6,0,0,1-9.49.82,10.12,10.12,0,0,1-8.71-10.4c.15-5.25,2.76-9.06,7.15-11.75.68-.42,1.37-.59,1.92.14s.19,1.39-.39,1.9-1.28,1-1.91,1.45a10.2,10.2,0,0,0-4.1,8.06c-.17,4.58,2.75,7.88,7.32,8.08a26.42,26.42,0,0,0,17.4-5.73q10.09-7.6,7.22-19.87a40.19,40.19,0,0,0-7.66-15.33c-2.8-3.64-6.64-6.22-10.57-8.57a7.84,7.84,0,0,0-1.76-.75c-1.27-.38-2.76-.37-3.14-2.11,0-.22-.49-.39-.78-.5-5.56-2.12-11.12-3-16.64.14-2.57,1.47-5.15,2.91-7.67,4.45a26.61,26.61,0,0,0-7.35,6.47,58.56,58.56,0,0,0-11.3,26.66c-.31,1.84-.61,3.62,1,5.11a2.28,2.28,0,0,1,.4.86c.69,1.85.36,3-1,3.4s-2.65-.32-3.16-2.09a3.43,3.43,0,0,1-.16-.94,2,2,0,0,0-1.91-2.12c-3.54-.57-7.07-1.51-10.69-1-2.61.39-5.21.89-7.79,1.44-7.73,1.64-13.06,5.93-15.42,13.73a71.86,71.86,0,0,0-3.33,15.44c-.23,2.92-.82,5.88.07,8.82.26.87.06,1.76-.87,1.9a2.11,2.11,0,0,1-1.62-1,6,6,0,0,0-3.58-2.63,13.38,13.38,0,0,0-9.63.35,27.58,27.58,0,0,0-12.67,10.28,16.1,16.1,0,0,0-1.82,4.88,3.08,3.08,0,0,0,1.48,3.53,17.29,17.29,0,0,0,4.52,2.09,68,68,0,0,0,8.5,1.46c9.18,1.08,18.39.57,27.55-.13,18.9-1.45,37.76-3.24,56.66-4.72,13.71-1.08,27.44-1.9,41.16-2.83,5.26-.36,10.53-.74,15.79-1.07,8.11-.51,16.06-2.22,24.23-2.46,11.18-.34,22.34-1.4,33.5-2.24a31.5,31.5,0,0,0,11-2.33,12.32,12.32,0,0,0,3.37-2.22c1.24-1.18,1.17-2.25-.26-3.19a22.85,22.85,0,0,0-5.09-2.6,49.2,49.2,0,0,0-18.41-2.63c-2.7.15-5.38.68-8.07.92a2.37,2.37,0,0,1-1.88-.56,2.25,2.25,0,0,1,.18-1.92c.73-1.33,1.69-2.52,2.51-3.8,2-3.2,3.75-6.54,4.09-10.39.68-7.72.43-15.4-2.11-22.77-4-11.69-12-19.39-24-22.86a55.05,55.05,0,0,0-14.45-2.05,42.74,42.74,0,0,0-18.17,3.77A6.53,6.53,0,0,0,1648.61,476.24Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud10" d="M1202.77,416.28c3-7.46,8.11-13.22,12.94-19.15a37.76,37.76,0,0,1,24.12-13.56,80.74,80.74,0,0,1,11-1,32.9,32.9,0,0,1,22.91,8.31c8.91,7.77,13.54,17.42,13,29.38a30.43,30.43,0,0,1-1.85,10.09,8.34,8.34,0,0,0-.21,1.13l2.42-.63a12.82,12.82,0,0,1,7.56.28,7.27,7.27,0,0,1,4.87,4.64,54.45,54.45,0,0,1,1.49,6.75c.18.91.19,1.86.29,2.94,12.18-9.62,22.71-4.1,26.59,6.6a15,15,0,0,0,1.58-.36c6.19-2,12.33-1.53,18.36.55,4.59,1.59,7.48,5.07,9.43,9.38a22.07,22.07,0,0,1,2,13.07c-.06.37,0,.75-.08,1.31a12.48,12.48,0,0,0,1.52-.17,28.84,28.84,0,0,1,15.39.76c3.51,1.06,6.91,2.51,10.35,3.8a3.56,3.56,0,0,1,1,.63c1.06,1,1,2.18-.34,2.65-2.68.94-5.21,2.25-8.17,2.45-5.18.34-10.33,1-15.51,1.45-5.34.42-10.68.73-16,1a114.26,114.26,0,0,1-12.94.36c-4.57-.29-9.1,0-13.63.08-9.76.26-19.51.72-29.26,1-3.35.1-6.72.11-10.07-.07-4.76-.25-9.48.59-14.27.17-7.33-.65-14.68-1-22-1.27-9.11-.36-18.22-.71-27.34-.74-19.27,0-38.55,0-57.82.25-21.35.31-42.7,1-64,1.46-16.72.4-33.43-.09-50.12-1.16-2.06-.13-4.14.19-6.21.13-8.55-.23-17.1-.54-25.65-.81-1,0-2-.36-2.93.54-.25.25-.92.15-1.38.11-6.45-.57-12.91-1.12-19.35-1.75a20.17,20.17,0,0,1-3.72-.9c-2.4-.72-3.3-2.13-2.66-4.54a19.3,19.3,0,0,1,4.58-8.85,64.48,64.48,0,0,1,12.34-9.86,30.34,30.34,0,0,1,12.61-4.29l2.22-.28c-.61-.52-1-.89-1.39-1.19-5.38-3.86-7.78-10.14-5.82-16.47,2.24-7.25,6.36-13.39,13.07-17.13,5.85-3.27,12-6,18.16-8.69a27.16,27.16,0,0,1,13-2.29l3.21-6a53.32,53.32,0,0,1,12.21-15.3,275,275,0,0,1,26-20.46c10.79-7.29,22.74-10.33,35.61-10.26a33.91,33.91,0,0,1,10.82,1.92,25.51,25.51,0,0,1,11.34,7.77,52.41,52.41,0,0,1,11.15,23.07c1.71,7.75,1.58,15.57,1.42,23.41,0,1.33,0,2.67,0,4.55.94-.85,1.5-1.35,2-1.86A40.41,40.41,0,0,1,1187,408.65a17.61,17.61,0,0,1,7.84.37,10.41,10.41,0,0,1,7.19,5.85C1202.21,415.29,1202.46,415.69,1202.77,416.28Zm-1.38,20.78c2.36.78,4.25,1.64,5.24,3.69a13,13,0,0,1,1.07,10,21.34,21.34,0,0,1-3.52,6.77,54.1,54.1,0,0,1-9.44,8.83,43.34,43.34,0,0,1-16,8.35c-5,1.3-9.93,1.07-14.45-1.43a60,60,0,0,1-15.69-12.11,11.4,11.4,0,0,1-2.43-4.33c-1-3.57,1.56-6.07,5.11-5a3.45,3.45,0,0,0,2.9-.3c2.95-1.56,5.92-.9,8.81.22a1.68,1.68,0,0,1,.78,1.46c-.11.4-.93.82-1.44.83a10.86,10.86,0,0,1-2.32-.51c-1.76-.35-3.71-.65-5,.66s-2.5,1.25-4,.36a2.12,2.12,0,0,0-1.93,0,2.07,2.07,0,0,0-.23,1.92,13.55,13.55,0,0,0,2.29,3.59,66.63,66.63,0,0,0,13.84,10.65,15.73,15.73,0,0,0,8,2.09,23.87,23.87,0,0,0,10.19-2.4c7-3.09,12.77-7.86,18-13.32a17.15,17.15,0,0,0,4-7,11,11,0,0,0-.45-7.27c-.69-1.9-2.27-2.51-3.91-3.22-1.84-.81-2.29-1.89-1.82-3.89.25-1.09.61-2.16.94-3.23a27.21,27.21,0,0,0,.31-14.68,7.82,7.82,0,0,0-6-6.17,16.26,16.26,0,0,0-8.31-.06,37.3,37.3,0,0,0-19.22,11.56c-.83,1-1.61,2.2-3.14,1.71s-1.44-2-1.47-3.24c-.07-3.36,0-6.71,0-10.07a82.37,82.37,0,0,0-1.31-16.95,48.76,48.76,0,0,0-11.38-23.44,23,23,0,0,0-11.56-6.91,41,41,0,0,0-14-.95c-8.72.73-17,2.89-24.56,7.44-10.81,6.51-20.37,14.66-29.81,22.94a51.33,51.33,0,0,0-12.39,16.62c-1.38,2.86-3.16,5.75-7.34,4.75a6.35,6.35,0,0,0-3.07.38,66.06,66.06,0,0,0-8,2.56c-4.83,2.11-9.57,4.45-14.3,6.78-6.3,3.1-10.09,8.5-12.8,14.7a12.51,12.51,0,0,0,6.83,16.93c.88.39,1.76.77,2.65,1.11,1.12.43,2.25.83,3.38,1.23.8.28,1.6.66,1.38,1.65-.25,1.18-1.24,1-2.13.87l-.47-.08c-7.08-.95-13.87-.16-20.19,3.4a68.44,68.44,0,0,0-11.62,8.85c-2.42,2.16-3.66,5-4.72,7.95a10,10,0,0,0-.19,2.15c2,.28,3.76.66,5.56.77q12.81.75,25.64,1.37c5.75.27,11.5.44,17.26.54,1.88,0,3.77-.48,5.64-.41,5.84.24,11.66.62,17.49,1,15.59.94,31.18.64,46.77.31,21-.44,42.06-1,63.09-1.33,17.6-.24,35.2-.25,52.79-.12,9.83.07,19.66.59,29.49,1,6.07.25,12.14.66,18.2,1a15.38,15.38,0,0,0,1.92,0c2-.12,4-.4,5.93-.37,4.08,0,8.16.45,12.23.35,10-.25,20-.77,30-1,7.65-.22,15.32-.11,23-.37q11.14-.37,22.26-1.25c4.93-.39,9.82-1.22,14.72-1.86,1.47-.19,2.94-.43,4.41-.64l.06-.48c-2.36-.89-4.68-1.92-7.09-2.65-5.63-1.71-11.31-2.08-17-.11-.74.26-1.6,1-2.17.23-.43-.58-.29-1.6-.37-2.42a2.53,2.53,0,0,1,.16-.7,21.59,21.59,0,0,0-1.2-12.7c-2.16-5.13-5.61-8.68-11.29-9.67-1.1-.19-2.19-.51-3.29-.63a22.81,22.81,0,0,0-12.46,1.79,17.71,17.71,0,0,0,0,2.19c.49,3.93-1.45,7.09-3.25,10.28a1.76,1.76,0,0,1-2.42.94c-1.08-.53-1.08-1.54-.76-2.5a11.67,11.67,0,0,1,1.14-2.36,12.85,12.85,0,0,1,1.47-1.9c1-1.1,1-2.46,1.13-3.82a2.36,2.36,0,0,0-1-2.48c-.25-.16,0-1.09,0-1.67s.44-1.43.22-2c-1.68-4.09-4.28-7.2-8.83-8.39-5.55-1.45-13.27,2.79-15.58,8.61a46.9,46.9,0,0,1-2.37,5c-.48.9-1.08,1.91-2.41,1.42-.92-.35-1-1.29-.29-3,.62-1.39,1.42-2.69,2.08-4.05a8.81,8.81,0,0,0,1-2.66,27.14,27.14,0,0,0-1-11.15,5.76,5.76,0,0,0-3.85-4,10.36,10.36,0,0,0-11.52,3.69c-.24.32-.45.75-.78.88s-1.16.34-1.49.11-.48-.92-.5-1.43c0-.35.32-.71.46-1.08,1.17-3,2.73-5.84,3.42-8.92,2.69-12,0-22.69-8.72-31.59-5.11-5.23-11.16-8.82-18.55-9.69a52.69,52.69,0,0,0-14.35.4c-8.38,1.28-15.86,4.4-21.78,10.64a91,91,0,0,0-12.48,16.37c-2.06,3.49-3.78,7.29-3.69,11.51a30.41,30.41,0,0,1-1.54,9.9C1201.84,435.14,1201.66,436,1201.39,437.06Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud9" d="M299.59,205.44c1.86-3.07,3.3-6.08,6.45-7.58s6.33-1.4,9.53-.83c2.54-3.32,4.93-6.62,7.49-9.77a23.39,23.39,0,0,1,4.57-4.54c5.13-3.59,10.55-3.81,16-.62a23.22,23.22,0,0,1,6.68,6.12l1.29,1.68c.22-.14.41-.19.45-.29,3.24-7.91,18.42-17.24,27.22-18.36,5-.64,10-1,15,0a15.4,15.4,0,0,1,4.26,1.53c7.05,3.89,11.87,9.59,13.9,17.5a52.48,52.48,0,0,1,2,15.41c0,.55,0,1.1,0,2.17l2.24-1.79a19.8,19.8,0,0,1,15.51-4.19,10.81,10.81,0,0,1,8.77,7,21.55,21.55,0,0,1,1.13,11.79c-.09.62-.22,1.24-.27,1.54,1.46,1.47,2.72,2.76,4.18,4.24,1-.48,2.19-1,3.37-1.66,6.35-3.39,12,0,14.25,5.23a24.45,24.45,0,0,1,1.71,8.41,69.47,69.47,0,0,1-2.14,21.15c-.09.38-.15.77-.27,1.45.67-.3,1.11-.53,1.58-.7a32,32,0,0,1,5.16-1.82c5.78-1.05,11.52-1.6,17.26.59a19.11,19.11,0,0,1,9.71,7.45c2.87,4.42,5.7,8.88,8.43,13.39,1.05,1.75,2.21,3,4.34,3.34,2.6.44,5.15,1.15,7.71,1.79,4.56,1.14,8.07,4.08,11.62,6.93a6.07,6.07,0,0,1,1.22,1.48c1.49,2.3.52,4.55-2.21,4.93a56.92,56.92,0,0,1-6,.48c-9,.31-17.9.62-26.86.85-9.83.26-19.67.28-29.5.67-5.34.21-10.66,1-16,1.47a2.59,2.59,0,0,0-1.33.43,1.85,1.85,0,0,1-2.41.14,3.44,3.44,0,0,0-1.39-.25q-3.67-.4-7.37-.77a9.58,9.58,0,0,0-2.14,0c-4.51.6-9,1.34-13.53,1.82-6.75.72-13.52,1.45-20.3,1.8-6,.31-12,.22-18,.09-7.19-.16-14.38-.57-21.57-.82-7.51-.26-15-.37-22.54-.25-8.63.15-17.27-.16-25.9-.23-5.51-.05-11,.09-16.54-.08-3.19-.09-6.36-.58-9.54-.94-10.62-1.19-21.24-.69-31.87-.09-11.41.64-22.83,1.64-34.25,1.72-11.58.08-23.17-.78-34.75-1.23-1.44-.05-2.88-.22-4.32-.16a11.07,11.07,0,0,1-6.11-1.83c-1.5-.88-1.64-2.32-.12-3.18,3.35-1.9,5.71-4.86,8.43-7.43,1.92-1.82,3.89-3.58,5.83-5.36,5.9-5.4,13-8,20.81-8.89,4.57-.54,9.1-.12,13.65,0h1.56a7,7,0,0,0,0-3.69c-.94-6.73-.21-13.39.74-20.06,1.91-13.47,7.2-25.64,14.14-37.17,1.52-2.53,3.36-4.86,5.12-7.24,3.41-4.59,8.13-7.43,13.36-9.4a71.33,71.33,0,0,1,10.76-3.27c7.52-1.54,14.81-.22,21.81,2.71A16.82,16.82,0,0,1,299.59,205.44Zm147.46,23.48c-.49,1.94-.5,3.53-1.24,4.64a40.07,40.07,0,0,1-5.49,6.92A13.39,13.39,0,0,1,430,244.16c-1.79-.1-2.73-.7-2.5-1.58.35-1.4,1.52-1.16,2.55-1.08a11.48,11.48,0,0,0,7.48-2.08,21.13,21.13,0,0,0,6.12-7.29c.94-1.64-.17-5.27-1.73-6.3a1.88,1.88,0,0,0-.88-.26c-2.6-.21-2.69-.31-2.12-2.77.11-.47.25-.93.37-1.39a18.77,18.77,0,0,0-.47-10.88,8.6,8.6,0,0,0-8.24-6.22,17.39,17.39,0,0,0-12.66,4.16c-1.08.95-2.08,2-3.1,3-.62.61-1.18,1.44-2.22,1s-.9-1.42-.91-2.29,0-1.92.07-2.87a50.05,50.05,0,0,0-2-17.07c-1.89-6.81-6.18-11.64-12.2-15a14.79,14.79,0,0,0-4.5-1.53,31,31,0,0,0-12.17,0c-11.72,2.47-21.71,7.51-27.17,19a2.12,2.12,0,0,1-.11.21c-.69,1.12-1.56,1.31-2.55.37a16,16,0,0,1-2.14-2.57,21.75,21.75,0,0,0-6.28-6.18,11.68,11.68,0,0,0-14.8,1.38,55.07,55.07,0,0,0-5.17,6.29c-1.72,2.27-3.28,4.67-5,6.94a2.52,2.52,0,0,1-1.66.69,7.43,7.43,0,0,1-1.88-.33c-7.23-1.34-10.75,2.84-12.45,8.94a4.4,4.4,0,0,0,.27,2.09c1,3.78,2,7.55,3.07,11.32.11.41.3.8.57,1.51,1.55-2.33,2.9-4.39,4.28-6.43a14.47,14.47,0,0,1,2.1-2.82,31.79,31.79,0,0,1,4.61-3.39,25.1,25.1,0,0,1,4.75-2.23,9.56,9.56,0,0,1,9.47,1.79,19.91,19.91,0,0,1,6.3,8.32c.9,2.31,1.75,4.64,2.52,7,1.06,3.23,2.72,5.67,6.36,6.44a6.71,6.71,0,0,1,5.12,4.93,34.91,34.91,0,0,1,1.42,6.53c.64,6.19-1.22,11.88-4.15,17.22-4,7.34-10,12.79-17,17.27a23.84,23.84,0,0,1-9.13,3.47c-5.23.89-10.19.34-14.71-2.7a10,10,0,0,1-4.64-7,24.81,24.81,0,0,1,3.26-17.31c2.68-4.29,6.88-6.07,11.75-6.33a6.05,6.05,0,0,1,3.18.83,4.68,4.68,0,0,1,1.69,2.16,1.69,1.69,0,0,1-.51,1.58,1.65,1.65,0,0,1-1.57-.46c-.91-1.56-2.29-1.59-3.76-1.41a11.35,11.35,0,0,0-9.33,6.28,23.72,23.72,0,0,0-2.44,10.42c-.14,5.91,1.89,8.85,7.46,10.83a12,12,0,0,0,1.85.5,21.34,21.34,0,0,0,15-2.81,49.61,49.61,0,0,0,12.23-10.33A35.21,35.21,0,0,0,349,252.38,22.25,22.25,0,0,0,348.7,238a5.31,5.31,0,0,0-3.61-3.55c-.61-.18-1.21-.42-1.82-.6a7.38,7.38,0,0,1-4.72-4.14c-.66-1.46-1.25-2.94-1.82-4.43-.81-2.09-1.52-4.21-2.37-6.28a17,17,0,0,0-5.28-6.72,6.69,6.69,0,0,0-6.3-1.49c-4.47,1.33-8.33,3.55-10.19,8.2-.08.22-.22.51-.4.58-2.32.9-2.92,3.25-4.24,5-.68.89-1.17,1.93-1.9,2.76-1.09,1.24-2.38.9-2.86-.68-.12-.38-.11-.8-.2-1.19-.72-3.27-1.43-6.55-2.22-9.82a2.88,2.88,0,0,0-1-1.7c-1.21-.7-1.25-1.72-1.26-2.87a7.13,7.13,0,0,0-.29-2.55,14.7,14.7,0,0,0-7.19-7.74,37,37,0,0,0-11.76-3.11c-6.82-.82-13.15,1.13-19.39,3.54a28.46,28.46,0,0,0-13.64,10.53c-7.95,11.59-14.08,24-16.57,37.94-1.3,7.34-2.41,14.68-1.41,22.17.2,1.5.38,3,.44,4.53.1,2.35-.72,3-3,2.77a65.15,65.15,0,0,0-17,.1c-5.13.81-10.11,2.16-14.12,5.53-5.54,4.65-10.81,9.63-16.35,14.61a5,5,0,0,0,3.16,1c5.68.25,11.35.46,17,.84a287.77,287.77,0,0,0,31.9.46c10.78-.45,21.55-1.31,32.33-2a159,159,0,0,1,25.16.53c5.72.55,11.47,1.15,17.21,1.16,8.8,0,17.58-.43,26.39-.1,10.94.4,21.91.43,32.86.49,3.74,0,7.46.66,11.25.1,2.14-.32,4.42.49,6.64.5,7,0,14.08.08,21.1-.19,5.27-.2,10.52-.83,15.78-1.34,4.29-.43,8.66-.58,12.84-1.55,4.44-1,8.75-.19,13.11-.21,1.58,0,3.16.22,4.73.08,3.82-.32,7.62-1,11.45-1.15,7.91-.35,15.83-.45,23.74-.7q20.26-.62,40.53-1.29c.82,0,1.64-.25,2.78-.42a9.66,9.66,0,0,0-1.35-1.82c-3.3-2.52-6.45-5.3-10.65-6.28-2.64-.62-5.27-1.33-7.94-1.83a7.18,7.18,0,0,1-5-3.71c-2.65-4.38-5.43-8.68-8.13-13-4.35-7-11.07-9-18.77-8.73-1.9.06-3.8.51-5.7.74a12.49,12.49,0,0,0-5.75,2.24c-.72.51-1.43,1-2.15,1.53s-1.48,1.11-2.4.56-.69-1.48-.5-2.36c.35-1.56.61-3.14,1-4.7a62,62,0,0,0,1.65-22.36A13.76,13.76,0,0,0,460,229a6.68,6.68,0,0,0-8.3-2.31C450,227.35,448.37,228.26,447.05,228.92Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud8" d="M745.33,456.27c4.06-.4,8-1,12-1.13a28.81,28.81,0,0,1,17.57,5.46c1.37,1,2.79,1.87,4.18,2.82,6.37,4.38,10.13,10.51,11.95,17.92.26,1.09.36,2.21.55,3.31a3.48,3.48,0,0,0,.35.62c.67-.17,1.43-.31,2.15-.55a23.58,23.58,0,0,1,15.32.17c5.21,1.69,8.27,5.66,9.58,10.84a51.6,51.6,0,0,1,.92,7.59c.09.94,0,1.9,0,3.12.76-.13,1.43-.21,2.08-.37a32.33,32.33,0,0,1,12.84-.72,21.85,21.85,0,0,1,12.25,6.58A7.47,7.47,0,0,1,848,513c1.25,2,.65,3.75-1.63,4.17a27.42,27.42,0,0,1-5.73.35c-5.35-.14-10.7-.48-16.06-.63-15.92-.44-31.83,0-47.73,1-10.06.63-20.11,1.22-30.17,1.84a11.67,11.67,0,0,0-2.12.32,53.59,53.59,0,0,1-16.92,1.33c-10-.74-20.07-1.44-30.17-1.36-14.47.12-29-.36-43.42-.17q-30.72.4-61.41,1.48c-7.82.26-15.63,1.18-23.42,2-14.17,1.43-28.36,2.54-42.58,3.25-13.26.67-26.5,1.6-39.76,2.21a132,132,0,0,1-22.05-.37,28.22,28.22,0,0,1-6-1.41c-2.23-.82-2.45-2.56-.6-4,6.91-5.33,13.81-10.68,22.17-13.64,2.25-.79,4.53-1.53,6.57-2.22,2.89-7.48,5.63-14.81,8.54-22.07a27.69,27.69,0,0,1,16.68-16.23c5.21-1.94,10.46-3.38,16.13-3A16,16,0,0,1,541,473.32a82,82,0,0,1,4.35,8.25c.22.41.37.85.72,1.67.35-.86.62-1.37.78-1.92a63.32,63.32,0,0,1,9.6-18.95c2.15-3,4.25-6,6.24-9.1A68,68,0,0,1,581.21,434a231.34,231.34,0,0,1,26.22-15.94,50.9,50.9,0,0,1,18.83-5.29c7.9-.74,14.83,1.84,20.91,6.77a50.07,50.07,0,0,1,11.57,14.27c.39.68.8,1.36,1.35,2.29l2.26-1.44c3.12-2.08,6.13-4.38,9.4-6.2,9.65-5.41,20-6.78,30.86-4.9a18.51,18.51,0,0,1,5.57,2.09c2.46,1.32,4.73,3,7.1,4.47a68.14,68.14,0,0,0,8,4.8c6.16,2.77,11,7.11,15.22,12.18C741,450.07,743.1,453.26,745.33,456.27Zm-3,1a2.61,2.61,0,0,0-.19-.71c-.39-.7-.78-1.4-1.23-2.06a60.5,60.5,0,0,0-11.15-12.48,19,19,0,0,0-3.9-2.77,105.49,105.49,0,0,1-15.63-9.34,26.26,26.26,0,0,0-3.49-2.1,16.64,16.64,0,0,0-4.23-1.62c-10.06-1.74-19.79-.71-28.85,4.2-3.36,1.82-6.44,4.17-9.64,6.28-.73.48-1.42,1-2.19,1.46-1.79,1-3,.72-4.13-.92a23.26,23.26,0,0,1-1.22-2.06,49.14,49.14,0,0,0-9.48-12.3c-6.31-5.74-13.63-8.5-22.24-7.26a49.58,49.58,0,0,0-16.88,5.17A220.8,220.8,0,0,0,580,438.17a61.49,61.49,0,0,0-14.2,15.16c-2.18,3.26-4.31,6.55-6.65,9.69a67.14,67.14,0,0,0-10.92,22.53,8,8,0,0,1-.62,1.8c-.73,1.33-2.09,1.39-2.79,0s-1.08-2.84-1.73-4.21a75.82,75.82,0,0,0-3.94-7.92,14,14,0,0,0-12.41-6.88c-4.67-.06-9,1.2-13.3,2.74a25.38,25.38,0,0,0-15.71,15.17c-2.5,6.31-4.89,12.67-7.32,19-.07.18,0,.43.09.83a15,15,0,0,1,2.5-.94,1.64,1.64,0,0,1,1.41.47,1.53,1.53,0,0,1-.15,1.46,53.15,53.15,0,0,1-5.49,2.63,27.31,27.31,0,0,1-2.78.46c-9.51,2.65-17.63,7.8-25.12,14.07-.1.08-.11.28-.24.65a17.7,17.7,0,0,0,2.7.6c4.71.32,9.42.85,14.12.78,7.83-.11,15.66-.62,23.49-1,3.83-.16,7.67-.23,11.5-.46,9-.55,18-1.11,27-1.79,10.37-.79,20.73-1.57,31.07-2.6,12.74-1.27,25.49-2.22,38.3-2.29,10.8-.05,21.59-.39,32.39-.62,10.31-.22,20.62-.64,30.94-.65,12.79,0,25.59.28,38.38.5,2.47,0,4.94.38,7.41.55,4.38.28,8.77.55,13.16.78a2.13,2.13,0,0,0,1.53-.38,3.5,3.5,0,0,1,2.85-.93c6.31-.24,12.63-.41,18.94-.74,14.29-.75,28.58-1.67,42.87-2.35a366.56,366.56,0,0,1,37.65.39c2.87.16,5.76.13,8.64.15a14.84,14.84,0,0,0,1.94-.28,7.42,7.42,0,0,0-2.84-3.08c-5-3.87-10.81-4.54-16.86-3.57-2.12.34-4.18,1.06-6.27,1.58-1.82.46-2.56-.12-2.55-2,0-1,.2-2.08.14-3.11a60.24,60.24,0,0,0-.65-7.62,12.58,12.58,0,0,0-10.74-10.22,23.81,23.81,0,0,0-11.81.84c-3.76,1.35-4.5.72-5.26-3.26a33,33,0,0,0-2-7.36c-2.22-5-5.4-9.23-10.26-12-1.39-.79-2.65-1.8-4-2.68a27.34,27.34,0,0,0-13-4.34A41.52,41.52,0,0,0,741,460.9c-4.25,1.63-8.32,3.71-12.48,5.57a48.68,48.68,0,0,0-15.4,10.37A16.54,16.54,0,0,0,708.38,488a2.83,2.83,0,0,1-.68,1.86c-.71.58-1.53.09-2.13-.49a10.62,10.62,0,0,0-5.15-2.41,35.32,35.32,0,0,0-12.62-.83,19.6,19.6,0,0,0-14.06,8.24c-1.82,2.58-2.32,5.23-.45,8,.44.65.7,1.36,0,1.91a1.41,1.41,0,0,1-2.09-.45,7.21,7.21,0,0,1-1.16-2.08,8.59,8.59,0,0,1,.55-7.19A21.1,21.1,0,0,1,679.4,486a26.71,26.71,0,0,1,16.34-2.47c3.35.49,6.65,1.33,10.12,2.05a27.68,27.68,0,0,1,.89-3.25,15.1,15.1,0,0,1,2.12-4.51c3.29-3.8,6.7-7.55,11.21-10q3.69-2,7.49-3.79C732.41,461.79,737.29,459.6,742.33,457.3Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud7" d="M1054.45,128.08c-3-6.5-2.24-11.59,2.34-16.65,2-2.19,3.91-4.46,6.62-5.82a5.08,5.08,0,0,0,2.6-3.53c.56-2.17,1.11-4.34,1.68-6.5a31.71,31.71,0,0,1,7.88-14.09c5.55-5.76,11.25-11.37,18-15.76a50.23,50.23,0,0,1,20.64-7.27,46.21,46.21,0,0,1,12.43-.25,13.69,13.69,0,0,1,11.27,7.9,8.33,8.33,0,0,0,.56.78c.27-.55.51-1,.69-1.45,3.55-9,8.44-17.07,15.58-23.63a33.31,33.31,0,0,1,25.72-9.12c10.16.74,17.09,6.45,21.38,15.56a54.33,54.33,0,0,1,4.06,14.24A63.74,63.74,0,0,1,1207,74.66a11,11,0,0,0,.21,1.55c2.07-.42,4-.95,6-1.19,5.36-.63,10.15.66,14,4.59a13.25,13.25,0,0,1,3.67,9.86c0,3.27-.45,6.53-.7,9.8-.06.85-.1,1.7-.15,2.65a12,12,0,0,0,5.32-1.11c2.66-1.29,5.34-2.57,8.07-3.7a25.81,25.81,0,0,1,10-2.24,13.89,13.89,0,0,1,9.28,3.31,23.8,23.8,0,0,1,3.73,3.71,42.71,42.71,0,0,1,2.85,5.07c2.52-1,5.26-2.27,8.06-3.37a31.56,31.56,0,0,1,11.91-2.42,20.08,20.08,0,0,1,19.07,14.48,10.53,10.53,0,0,1-2.81,11,36.29,36.29,0,0,1-10.09,7.25c-2.93,1.45-6,2.65-9,3.88-3.48,1.4-7.11,1-10.67.56-13.14-1.72-26-.11-38.71,3.21a86.7,86.7,0,0,0-8.57,3.07,77.72,77.72,0,0,1-16.32,4.69c-6.22.92-12.27,0-18.33-1.27-12.29-2.52-24.55-5.26-37-6.78-5.87-.71-11.79-1.14-17.69-1.29-10.47-.28-21-.21-31.43-.34-15.12-.19-30.23-.37-45.35-.72-4.38-.1-8.75-.76-13.13-1.22a10.3,10.3,0,0,1-2.78-.69c-1.85-.76-2.26-2.23-.78-3.53a42.75,42.75,0,0,1,5.48-3.8A33,33,0,0,1,1054.45,128.08Zm-6.44,6.64a19.38,19.38,0,0,0,2.27.51c4.78.41,9.55,1,14.34,1.12,22.87.35,45.74.47,68.61.85,7.42.13,14.87.54,22.25,1.3,12.58,1.31,24.91,4.13,37.28,6.66,5.26,1.07,10.5,2.12,15.92,1.84,6.57-.34,12.7-2.4,18.72-4.82a84.91,84.91,0,0,1,18.14-5.27c8.47-1.35,16.94-2.47,25.54-1.66,2.55.24,5.09.54,7.64.67a17.62,17.62,0,0,0,6.65-.53,53.25,53.25,0,0,0,13.52-6.63,36.39,36.39,0,0,0,5.08-4.37,7.51,7.51,0,0,0,1.9-7.73,17.49,17.49,0,0,0-19-12.77,45.47,45.47,0,0,0-17.67,6.42c-.78.46-1.61,1.13-2.38.4a3,3,0,0,1-.68-2.11A7.06,7.06,0,0,0,1264,103c-.91-.9-1.8-1.83-2.78-2.64a11.27,11.27,0,0,0-10.06-2.65,69.29,69.29,0,0,0-8.89,2.77c-3.86,1.45-7.27,4.05-11.31,4.19a56.39,56.39,0,0,1,0,7.38c-1,7.15-4.15,12.93-11.25,15.74a77.21,77.21,0,0,1-9.51,3.24c-6.74,1.72-13.64,1.62-20.51,1.26a24,24,0,0,1-6.1-1.17c-8.29-2.63-14.27-11.07-14.53-20.36-.19-6.77,2.32-12.67,6.2-18a10.41,10.41,0,0,1,3.3-2.67,4.86,4.86,0,0,1,4.85,0,8.34,8.34,0,0,1,4.61,7.11,7.67,7.67,0,0,1-1.24,3.51,1.28,1.28,0,0,1-2,.55c-.71-.55-.41-1.23-.13-1.94a5.42,5.42,0,0,0,.67-2.67c-.42-2-1.49-3.82-3.63-4.38-2-.51-3.33.77-4.46,2.19a14.23,14.23,0,0,0-1.71,2.6c-.91,1.87-1.77,3.76-2.51,5.7a19.79,19.79,0,0,0,.4,15.42c2.7,6.21,7.22,10.41,14.13,11.24,10.54,1.27,20.9.63,30.8-3.76a17,17,0,0,0,9.87-19,32.24,32.24,0,0,1-.28-10.23,68.79,68.79,0,0,0,.18-9.08,8.76,8.76,0,0,0-3-6.11c-3.62-3.42-8-4.15-12.7-3.34-1.42.24-2.81.64-4.22.88-2.94.51-3.51-.07-3.68-3-.22-3.91-.49-7.82-1-11.7a47.83,47.83,0,0,0-3.91-14.52c-3.61-7.68-9.23-12.88-17.84-14a29.81,29.81,0,0,0-23.71,7c-8.78,7.4-14.44,17-17.62,28a8.45,8.45,0,0,1-.64,2.05c-.29.48-1,1.13-1.37,1a2.7,2.7,0,0,1-1.47-1.29,6.15,6.15,0,0,1-.37-1.87c-1.09-5.62-4.73-9.15-10.43-9.59a58.83,58.83,0,0,0-10.28.1,45.54,45.54,0,0,0-21.93,7.72,99.91,99.91,0,0,0-18,16.48,25.54,25.54,0,0,0-5.29,9.87c-.7,2.45-1.35,4.93-1.94,7.42a8.74,8.74,0,0,1-4.59,6.11c-2.68,1.35-4.5,3.55-6.35,5.75a10.38,10.38,0,0,0-2.53,7.31,7.63,7.63,0,0,0,2.83,6.08c1,.83.69,1.82-.63,2.3a9,9,0,0,0-.93.22C1053.69,131.41,1050.77,132.31,1048,134.72Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud6" d="M1733.57,72.4a5.81,5.81,0,0,0,1.21-.34c4-2.36,8-1.67,12,.07,8.54,3.73,13.66,10.18,15.63,19.3a31.65,31.65,0,0,1-.26,15.65c-.1.35-.17.72-.31,1.35,2-.45,3.75-.91,5.53-1.23,5.69-1,11.3-1,16.64,1.64,2.23,1.12,4.34,2.32,5.37,4.86.26.63,1.32,1.11,2.1,1.33,3.24.9,6.5,1.68,9.76,2.51a29.41,29.41,0,0,1,9.73,3.9c1.13.78,2.16,1.61,2.31,3.17a4.35,4.35,0,0,1-2.21,4.66,9.4,9.4,0,0,1-3.33,1.23,61.25,61.25,0,0,1-7.89.41q-25.66-.57-51.33-1.28a197.46,197.46,0,0,0-23.71,1.06c-6.21.58-12.41,1.29-18.63,1.8-2.05.17-4.14-.22-6.21-.11-10.06.53-20.11,1.23-30.18,1.7-11,.51-22,1.18-33.08,1.13-11.84-.06-23.57,1.33-35.36,1.92-10.14.52-20.28,1.05-30.44,1.09-5.41,0-10.82.83-16.23,1.36-2.2.21-2.92-.34-2.9-2.6a16.17,16.17,0,0,1,2.36-8c3.69-6.43,12.16-12.64,21.69-11.45,2.21.28,4.38.82,6.54,1.24.14-.2.3-.33.3-.45,0-5.13,1.95-9.69,4.17-14.13a27.74,27.74,0,0,1,3.88-5.43c1.55-1.82,3.34-3.44,5-5.15a18.55,18.55,0,0,1,9-5.26,3,3,0,0,0,2.69-2.76c2-10.1,8-17.4,16.32-23.05,5.51-3.73,11.36-6.49,18.1-7.12a29.37,29.37,0,0,1,15.7,2.33c.2-.74.42-1.38.55-2a28,28,0,0,1,5-11.32,46.13,46.13,0,0,1,15.82-13.71,90.5,90.5,0,0,1,10.89-5,21.43,21.43,0,0,1,15.27-.05c6.89,2.55,13.32,5.91,18.39,11.37a37.29,37.29,0,0,1,10,21.83c.27,2.61.11,5.26.13,7.9C1733.58,68.61,1733.57,70.4,1733.57,72.4ZM1606.33,90.68a15.06,15.06,0,0,0-6.83,3.1c-5.66,4.92-10.83,10.17-13,17.7a35.35,35.35,0,0,0-1.25,8c-.12,2-.82,2.54-2.78,2.12-1.49-.32-3-.75-4.44-1a20.63,20.63,0,0,0-6.66-.43c-5.46.77-9.67,3.63-13.23,7.59a16.08,16.08,0,0,0-3.68,8,15.24,15.24,0,0,1,1.52-.21c.36,1.49,1.47.89,2.32.84,5-.28,10-.66,15.08-.86,6.63-.26,13.28-.2,19.9-.58,15.17-.88,30.32-1.95,45.48-2.91,2.43-.15,4.92-.94,7.28.41.18.1.47,0,.71,0,2.88-.06,5.76,0,8.63-.19,9.91-.54,19.8-1.14,29.7-1.74,12.84-.77,25.68-1.59,38.52-2.34,7.26-.42,14.53-1,21.79-1,7.44-.07,14.87.38,22.31.54q17.5.36,35,.61a30.32,30.32,0,0,0,5.69-.63,2.63,2.63,0,0,0,2.36-2.11c.18-1.28-1-1.71-1.83-2.26-2.66-1.73-5.69-2.5-8.71-3.28-3.41-.89-6.82-1.74-10.21-2.65-1.35-.36-2.61-.93-3.06-2.41a5.53,5.53,0,0,0-2.85-3.08,20.2,20.2,0,0,0-11.53-2.62,32.46,32.46,0,0,0-11,2.32c-.89.37-1.89.68-2.73-.06s-.54-1.77-.17-2.66a27.21,27.21,0,0,0,.61-18.8c-1.44-4.82-3.66-9.24-8-12.2a45.73,45.73,0,0,0-4.95-2.94c-3.59-1.83-7.24-2.58-10.93-.21a3.83,3.83,0,0,1-.65.3c-2,.76-3.31.11-3.66-2a26.77,26.77,0,0,1-.24-4.3c0-2.24.24-4.48.14-6.71a35.21,35.21,0,0,0-9.82-23.34c-4.66-4.94-10.57-8-16.81-10.33a19.91,19.91,0,0,0-13.88-.06,55.5,55.5,0,0,0-19.26,11c-5,4.49-9.2,9.61-10.53,16.49-.23,1.18-.34,2.38-.57,3.55-.39,2-1.13,2.35-3,1.48a25.48,25.48,0,0,0-5.07-2.07A30.77,30.77,0,0,0,1631.53,61a49.74,49.74,0,0,0-13.91,10.11c-4.16,4.27-6.43,9.47-7.69,15.2a2,2,0,0,0,.12.65c13.39-1.31,22.6,10.74,20,22.84,1.42,0,2.84-.08,4.25,0,3.75.25,7,1.49,9.27,4.73a7,7,0,0,1,.45,7.91,18.21,18.21,0,0,1-8.32,7.7,12.53,12.53,0,0,1-9.36.38,7.28,7.28,0,0,1-4.06-3.55c-.43-.79-.83-1.7.21-2.3s1.49.11,2,.83l.12.21c1.19,2.14,3.16,2.79,5.45,2.85,4.65.13,10.23-3.52,12-7.88a4.74,4.74,0,0,0-.51-4.57,8,8,0,0,0-5.07-3.36,10.7,10.7,0,0,0-7.92.83c-.66.36-1.48.68-1.93-.06a3.39,3.39,0,0,1-.15-2,6.05,6.05,0,0,1,.51-1.33,15.52,15.52,0,0,0,.71-7.32c-.49-3.79-2.53-6.63-5.07-9.29-3.63-3.81-8.09-4.38-12.9-3.77C1608.55,92.66,1608.06,92.77,1606.33,90.68Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud5" d="M1510.8,264.33a1.29,1.29,0,0,0,.33-.18c5.53-6.8,13-9.16,21.35-8.74,8.11.39,14.83,4.07,20.43,9.89,2.93,3.05,3.92,6.88,4.38,10.92.51,4.48.21,6.62-1.75,12.43l1.57-.38c6.56-1.65,12.86-1.35,18.59,2.66,2.7,1.89,3.4,4.75,3.08,7.85a12.85,12.85,0,0,1-4.63,8.61c.47,0,.94-.12,1.41-.12,3,0,6-.48,9,.34,3.37.92,7,1,10.36,1.87,4.24,1.11,8.36,2.66,12.5,4.11,1,.35,2.32.89,2,2.29s-1.61,1.29-2.73,1.35c-2.31.15-4.62.38-6.93.46q-28.77,1-57.55,1.89c-14.39.47-28.78.88-43.17,1.38-22.79.79-45.56,1.83-68.35,2.38-17.43.42-34.88.42-52.28-.9-5.11-.39-10.19-1-15.28-1.55-.32,0-.63-.11-.94-.17-.89-.18-1.8-.39-1.86-1.52s.79-1.6,1.63-1.79c3.34-.77,6.69-1.57,10.07-2.09,2.75-.43,5.56-.5,8.4-.73,0,0,.2-.17.22-.3a23.59,23.59,0,0,1,5.8-11.64c3.25-3.85,6.38-7.81,9.56-11.71,3-3.68,7.16-5.34,11.57-6.33,3.17-.72,6.45-.92,9.91-1.38.36-1.79.76-3.81,1.17-5.83,1.55-7.71,5.12-14.6,8.74-21.46a73.1,73.1,0,0,1,10-14.62c4.58-5.15,9.88-9.32,16.54-11.52a10.5,10.5,0,0,0,1.54-.66,40.13,40.13,0,0,1,16.78-4.47,2.78,2.78,0,0,1,2.47.54,2.76,2.76,0,0,0,1.52.57,24.43,24.43,0,0,1,12.8,6.15,60,60,0,0,1,14.26,17.31c2.55,4.8,5.41,9.45,7,14.7C1510.41,264.06,1510.59,264.14,1510.8,264.33Zm-141.47,53.89-.06.64c2.26.24,4.52.51,6.78.72,13.07,1.25,26.2,1.29,39.31,1.33,10.07,0,20.15-.39,30.22-.69,12.15-.36,24.3-.79,36.45-1.21,20.87-.71,41.73-1.49,62.59-2.13,15.91-.48,31.82-.77,47.73-1.19,2.63-.07,5.26-.41,7.88-.65a11.87,11.87,0,0,0,1.76-.48,20.3,20.3,0,0,0-2.33-1.11,66,66,0,0,0-25.53-3.2,15.1,15.1,0,0,0-5.15,1c-6.3,3.07-11.81,1.5-17-2.51-2.67-2.09-2.28-5.07.83-6.42a23.75,23.75,0,0,1,4.83-1.31,1.54,1.54,0,0,1,1.32.66,1.52,1.52,0,0,1-.34,1.44,7.92,7.92,0,0,1-2.18.82c-1.26.38-2.72.34-3.57,1.76,1.14,1.88,3,2.56,4.81,3.43,3.92,1.94,7.62,1.33,11.07-1.12,1.56-1.11,3-2.4,4.46-3.64a8.41,8.41,0,0,0,2.94-6.59,5.49,5.49,0,0,0-2.77-5.21,16.66,16.66,0,0,0-6.26-2.25c-4.93-.74-9.56-.26-13.58,3.06-.84.7-1.94,1.49-3,.38s0-1.94.53-2.78a20.75,20.75,0,0,0,3.58-9.32c.55-6.41-.51-12.4-5.86-16.67-5.64-4.5-11.9-7.45-19.4-6.92-6.88.49-12.72,2.85-16.93,8.59a3.18,3.18,0,0,0-.68,2.61,22.89,22.89,0,0,1,0,3.21,1.56,1.56,0,0,1-2.09-1.27c-.6-2-1.12-4-1.79-5.9a76.21,76.21,0,0,0-12.25-22.68,64.76,64.76,0,0,0-8.68-8.92c-6.53-5.61-14-6.81-22.4-4.08-.71-1-1.73-.81-2.83-.32s-2.54,1-3.76,1.56c-2.95,1.42-5.9,2.84-8.79,4.39a27.83,27.83,0,0,0-7.71,5.56c-1.5,1.66-3,3.3-4.42,5a94.46,94.46,0,0,0-13.64,24.69c-1.48,3.84-2.1,8-3.1,12a2.39,2.39,0,0,0,.95,2.93,3.83,3.83,0,0,1,1.21,1.72,2.64,2.64,0,0,1-1.86,3.56c-1.45.44-2.52-.24-3-2-.19-.76-.25-1.54-.39-2.46a24.45,24.45,0,0,0-9.09.76c-3.73,1-7.43,2.15-10,5.3-3.65,4.45-7.37,8.86-10.82,13.46-2.33,3.11-4.53,6.41-3.88,10.71.17,1.16-.6,1.58-1.91,1.36a18.94,18.94,0,0,0-3.77-.5C1375,317.58,1372.19,317.94,1369.33,318.22Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud4" d="M832,237.34c2.63-2.11,4.91-4.09,7.34-5.87a15.6,15.6,0,0,1,14.74-2.55c.22.07.47.08.7.13.09-.15.25-.29.23-.41-.81-4.91,1.24-9.29,2.78-13.69,1.26-3.64,4.25-6.14,7-8.74,1.5-1.43,3.15-2.7,4.73-4.05,3.62-3.1,8.06-4.07,12.57-4.94a29.92,29.92,0,0,1,16.05,1.4,31.72,31.72,0,0,1,13.78,9.22,63.29,63.29,0,0,0,4.86,5c6.38,6.06,9.61,13.55,10.4,22.26a29.64,29.64,0,0,1-.38,9.64c1.75-.24,3.31-.44,4.87-.67,8.39-1.25,15.37,1.93,21.64,7.07a34.24,34.24,0,0,1,4.36,4.78,9.74,9.74,0,0,1,2.21,5c.18,1.35.55,2.67.72,4,.27,2-.48,2.91-2.47,2.88a30,30,0,0,1-4.54-.37,33,33,0,0,0-8.83-.27,34.66,34.66,0,0,1-7.41-.12c-5.67-.58-11.33-.3-17-.2-3.26,0-6.53-.15-9.8-.28-1.84-.07-3.67-.34-5.5-.33-12.63,0-25.27,0-37.9.16-6.39.07-12.77.42-19.16.61-1.2,0-2.4-.08-3.59-.13-10.4-.48-20.78-.15-31.17.39-4.47.24-9,.17-13.42.48-5.9.41-11.78,1.06-17.67,1.59a36.42,36.42,0,0,0-4.06.31c-1.61.33-3.16,1-4.77,1.38a2.5,2.5,0,0,1-1.93-.16c-.76-.69-.2-1.49.45-2a12.37,12.37,0,0,1,3.09-2.23c6-2.3,11.89-5.18,18.32-6.28,3.15-.54,6.34-.83,9.51-1.22.94-.12,1.88-.19,3.06-.31a8.26,8.26,0,0,0-.61-1.16,11,11,0,0,1-.2-13.7,30.91,30.91,0,0,1,11.86-9.14,11.89,11.89,0,0,1,10.88.39C829.24,236,830.8,236.73,832,237.34ZM957.75,265.1c-.35-4.24-.64-5.48-1.88-7.19-6.32-8.74-16.75-13.77-28.42-10.47-1,.28-1.9.83-2.89,1.11-.47.13-1.29.07-1.5-.23a3.17,3.17,0,0,1-.25-1.72c0-.2.23-.41.35-.62a9.71,9.71,0,0,0,1.52-5.45c-.06-1.76,0-3.52-.13-5.26-.78-8.07-3.68-15.15-9.78-20.74a32.66,32.66,0,0,1-4.39-4.41,25,25,0,0,0-11.26-8.3c-10.77-4.19-21.14-3.65-30.29,4.36-.72.63-1.52,1.19-2.2,1.86-2.45,2.4-5.16,4.66-6.46,7.94a61.16,61.16,0,0,0-2.34,7.78,11.74,11.74,0,0,0-.16,3.79c.18,2,.63,3.94.81,5.92a1.92,1.92,0,0,1-.74,1.55c-.71.41-1.37,0-1.71-.79-1.19-2.63-3.48-3.39-6.08-3.46-6.55-.19-11.08,3.5-15,8.15a4.48,4.48,0,0,0-.56,3.16c.44,2.91,4.87,6.79,7.8,7a6.62,6.62,0,0,0,2.58-.36,4.06,4.06,0,0,0,2.46-2.76c.39-1.18-.42-1.7-1.1-2.4-.3-.3-.45-1.22-.23-1.44a2,2,0,0,1,1.6-.5,3.52,3.52,0,0,1,2.46,3.7,6.57,6.57,0,0,1-2.62,4.93,7.87,7.87,0,0,1-9,.28c-3.79-2.48-6.91-5.49-6.9-10.45l-5.21-2.69a9.21,9.21,0,0,0-8.12-.3,27.73,27.73,0,0,0-11.13,8.5,8.15,8.15,0,0,0,.36,10.56,25.91,25.91,0,0,1,2,2.68c1,1.6.46,2.56-1.41,2.71-4,.32-8,.59-11.93,1a38.25,38.25,0,0,0-10.86,2.83,14.07,14.07,0,0,0-1.6,1.05c1.3,0,2.1.07,2.88,0,3.18-.33,6.35-.83,9.53-1,5.11-.31,10.22-.43,15.33-.62,7.27-.28,14.53-.6,21.8-.8,3.19-.08,6.4.12,9.59.12,6.55,0,13.1,0,19.64-.09,2.64,0,5.27-.39,7.9-.41q16.44-.1,32.86-.08c2.24,0,4.47.19,6.7.37a74.13,74.13,0,0,0,12.2.29,77.28,77.28,0,0,1,12-.11,91.91,91.91,0,0,0,13.38.33,41.71,41.71,0,0,1,6.19.41Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud3" d="M256.37,517.46c2.47-1.14,4.65-2.28,6.93-3.13a16.59,16.59,0,0,1,4.68-1c4.18-.26,7.57,1.32,9.58,5.07a6.43,6.43,0,0,0,5.5,3.67c5.5.43,9.57,3.41,13.05,7.31a34.68,34.68,0,0,1,4.07,5.89c.84,1.46,1.37,3.2.25,4.78s-3,1.72-4.78,1.44a170.15,170.15,0,0,0-32.3-1.42c-6.71.27-13.44,0-20.15.12-10.24.18-20.47.55-30.7.72-19,.32-38.07.21-57.09-.75-1.27-.07-2.55-.23-3.82-.26-6.45-.18-12.9-.19-19.33-.53-5-.26-10-.85-15-1.45a14.56,14.56,0,0,1-4.31-1.38c-2.23-1-2.73-3-1.08-4.88a12.12,12.12,0,0,1,4-2.91,42.7,42.7,0,0,1,6-1.79c.76-.21,1.54-.35,2.63-.59-3.37-3.16-3.63-6.71-1.79-10.5a4.83,4.83,0,0,1,3.85-2.94,48.22,48.22,0,0,1,5,0,1.23,1.23,0,0,0,.19-.4c.26-7.33,4.33-12.88,8.5-18.4a5.42,5.42,0,0,1,1-1c2.59-1.87,5.13-3.82,7.81-5.56a33.39,33.39,0,0,1,25-5.24c8.72,1.64,14.91,6.65,17.74,15.33.48,1.5.91,3,1.49,5,.45-.92.74-1.44,1-2a79.92,79.92,0,0,1,8.83-16.45c5.42-7.77,12.6-13.05,22-15.06a18.61,18.61,0,0,1,16.6,4,38.45,38.45,0,0,1,14,24.64,78.34,78.34,0,0,1,.82,18.16C256.34,516.43,256.37,516.9,256.37,517.46Zm42.08,21.36a11.21,11.21,0,0,0-.75-2.7c-3.5-5.77-7.76-10.59-15-11.43a8.77,8.77,0,0,1-7.38-5,6.71,6.71,0,0,0-6.5-3.74,18.58,18.58,0,0,0-4.24.69,15.73,15.73,0,0,0-6.87,3.75c-.76.71-1.64,1.42-2.79.83s-1.22-1.61-1.24-2.68a22.94,22.94,0,0,1,.09-2.87c.67-5.53.12-11-.61-16.49a36.22,36.22,0,0,0-12.81-23.68,16.3,16.3,0,0,0-14.48-3.89c-9.24,1.87-16.11,7.12-21.24,14.81A73.25,73.25,0,0,0,195,506c-.3,1-.61,2.16-1.9,2.16s-1.71-1.22-2-2.32c-.14-.54-.26-1.09-.41-1.63-.54-2-1-4-1.66-6-2.25-7-7.28-11.27-14.21-13-8.3-2-16.21-.41-23.51,3.94a53,53,0,0,0-6.45,4.58c-6.37,5.27-10.35,11.84-10.73,20.31a4.36,4.36,0,0,1-.64,2.65c-1,1-1.83-.3-2.7-.73-3.47-1.72-6.33-.09-6.62,3.77-.17,2.24.52,4,2.82,4.68,1.29.41,1.33,1.4,1.32,2.49s-.76,1.51-1.63,1.79c-.46.14-1,.16-1.41.28-2.71.67-5.45,1.25-8.12,2.06a4.69,4.69,0,0,0-3.59,3.22,30.48,30.48,0,0,0,5.15,1.32c8,.69,16.08,1.32,24.14,1.79,4.7.27,9.42,0,14.12.28,20.78,1.07,41.57,1,62.36.55,9.67-.22,19.35-.47,29-.63,6.08-.11,12.16.09,18.23-.15a155.83,155.83,0,0,1,28.23,1.39A28.27,28.27,0,0,0,298.45,538.82Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud2" d="M527.55,42.36a13.23,13.23,0,0,1,5.27-4.51,22.39,22.39,0,0,1,11.31-1.28,32.52,32.52,0,0,1,13.73,5.33A11.3,11.3,0,0,1,563,48.34c1.81,6.43,2.71,13,1.23,19.64-.29,1.31-.79,2.57-1.22,3.92a7.62,7.62,0,0,0,4.3,1.91c4.78,1,9.56,1.92,14.34,2.89a44.67,44.67,0,0,1,13.63,5.11A13.5,13.5,0,0,1,598,84a3,3,0,0,1,.63,3.53,3.13,3.13,0,0,1-3.17,2.11c-3.9-.2-7.81-.51-11.71-.64a116.08,116.08,0,0,0-12.92-.1,104.51,104.51,0,0,1-18,.37,27.23,27.23,0,0,0-4.49.29,7.77,7.77,0,0,1-.95.08c-4.75-.26-9.41.5-14.08,1.12-.4,0-.8.09-1.2.1-8.46.16-16.93.48-25.4.41-6.39-.06-12.77-.62-19.16-1-7.26-.38-14.53-.74-21.79-1.14-1.91-.11-3.84-.2-5.73-.49s-2.6-1.21-2.62-3.11a5.42,5.42,0,0,1,.16-1.66c1.52-5.16,3.9-9.78,8.19-13.23s9-3.21,13.73-1c1.29.61,2.49,1.42,3.88,2.22.21-.68.4-1.27.58-1.86a22.05,22.05,0,0,1,6.47-10.47c3.42-3,6.81-3.26,10.73-.8.32.2.65.38,1.2.7A45.88,45.88,0,0,1,507,47.6c1.84-3.51,4.27-6.43,8-7.89a17.86,17.86,0,0,1,5.1-1.13,7.3,7.3,0,0,1,6.4,2.65C526.79,41.59,527.13,41.91,527.55,42.36Zm33.13,28a33.21,33.21,0,0,0,1.09-3.38c1.15-5.95.33-11.79-1.19-17.55a8.36,8.36,0,0,0-3.42-4.79c-4.62-3.22-9.64-5.43-15.33-5.59-5-.14-9.73.6-12.56,5.68-1.27,2.27-2.34,2.12-3.71-.25a5.78,5.78,0,0,0-5.9-3.26A11.21,11.21,0,0,0,511,46.12a37.1,37.1,0,0,0-5.88,13.54,7.15,7.15,0,0,0,.68,5.49,7.3,7.3,0,0,1-.2,7.76c-.86,1.45-1.53,1.91-2.33,1.52s-.86-1.14,0-2.71c.77-1.4,1.33-2.88.61-4.34a27.64,27.64,0,0,0-3.48-5.68c-2.06-2.42-5.26-2.5-7.72-.47a17.33,17.33,0,0,0-2.79,3A19.49,19.49,0,0,0,486,73.35c-.35,2.5-1.23,2.79-3.39,1.41A46.08,46.08,0,0,0,478.17,72c-4.58-2.24-8.45-1.61-12.06,2a24.26,24.26,0,0,0-5.86,10.31,9,9,0,0,0-.13,1.88c1,.1,2,.25,2.9.29,7,.34,14.07.56,21.09,1,9,.59,18,1.44,27.06,1.23,3.83-.09,7.67-.26,11.49-.5,6.7-.44,13.39-1,20.09-1.42a69,69,0,0,1,9.09-.15,91.09,91.09,0,0,0,17.24-.19,66.29,66.29,0,0,1,15.55,0c3.09.36,6.21.47,9.32.63a15,15,0,0,0,2.32-.25c-.77-1.92-.8-1.87-2.58-2.89-5.57-3.2-11.74-4.5-17.94-5.79-4.81-1-9.82-1.26-14.47-3.8a13.23,13.23,0,0,1-.91,1.19c-3.1,3.23-7.08,4.23-11.35,4.23a6.82,6.82,0,0,1-6.39-6.08,6.56,6.56,0,0,1,4.81-7.1A12.19,12.19,0,0,1,558,68.36C558.79,68.94,559.61,69.55,560.68,70.32Zm-1.34,2.36c-1.23-.92-2.2-1.75-3.27-2.42A9.4,9.4,0,0,0,548.3,69a3.89,3.89,0,0,0-3,4.27c.13,1.92,1.74,3.82,3.64,3.82C552.85,77.11,556.49,76.23,559.34,72.68Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud1" d="M1313.82,164.91c.38-.63.82-1.28,1.19-2,4-7.34,9.38-13.5,15.46-19.13a26.4,26.4,0,0,1,10-5.6,14.61,14.61,0,0,1,5.67-.48,18.69,18.69,0,0,1,12.58,6.27,35,35,0,0,1,2.92,4.57,4.78,4.78,0,0,0,1-.33c5.45-2.76,11.93-.35,15.21,3.08a23.78,23.78,0,0,1,3.33,4.66c1.58,2.77,3,5.64,4.46,8.5,6.29-.56,11.36,1.82,15.43,6.53a7.27,7.27,0,0,1,.85,1.15c.75,1.37.34,2.61-1.18,3a22.5,22.5,0,0,1-4,.44c-6.76.49-13.53.93-20.28,1.47a28.3,28.3,0,0,0-4.71.88c-6.9,1.74-14,1.74-21,1.82-4.87,0-9.74-.26-14.61-.37-1.6,0-3.2,0-4.79.08l-33.09,1.3c-3.59.14-7.19.29-10.78.36a18.82,18.82,0,0,1-3.82-.3c-1.6-.3-2-1.11-2.13-2.69a8.21,8.21,0,0,1,1.59-5.32c4.64-7.69,13.27-11.53,22.71-9.93C1308.45,163.35,1311,164.21,1313.82,164.91Zm38.86,2.34.41.68a27.62,27.62,0,0,0,10.68.34,9.85,9.85,0,0,0,3.08-1.29c1.53-.86,1.66-1.67.73-3.13a6.91,6.91,0,0,0-4.47-3c-2.95-.65-5.95-1.05-8.94-1.5-.74-.11-1.64-.08-1.68-1a2.61,2.61,0,0,1,.92-1.73,16.45,16.45,0,0,1,2.37-1.61c4-2.55,3.45-6.79.9-9.42a17.93,17.93,0,0,0-12.42-5.47,7.56,7.56,0,0,0-4.94,1.53,7.74,7.74,0,0,1-2.87,1.65,7.22,7.22,0,0,0-3.53,1.86,53.22,53.22,0,0,0-4.05,3.74c-4.54,4.95-9,10-12,16.07-1.53,3-2.19,3-5.36,2.12a39.69,39.69,0,0,0-8.39-1.82c-7.91-.46-14.2,2.5-18.2,9.61a3.23,3.23,0,0,0-.34,3.37c3.33,0,6.6.09,9.87,0,8.07-.25,16.13-.71,24.21-.85s16-1.4,24.07-.3a51.41,51.41,0,0,0,8.14,0c6.71-.16,13.42-.17,20-1.7a73.73,73.73,0,0,1,17.33-2.05c3.11,0,6.23-.3,9.34-.49a9.25,9.25,0,0,0,1.31-.28,9.87,9.87,0,0,0-1-1.23c-3.48-3.08-7.28-5.19-12.19-4a2,2,0,0,1-2.59-1.12c-1.37-3.05-2.76-6.09-4.25-9.08a11.53,11.53,0,0,0-4.39-5.28,18.3,18.3,0,0,0-5.31-2.06,8.23,8.23,0,0,0-8,2.74,31.06,31.06,0,0,0-2.74,4.3c1.75.45,3.59.88,5.4,1.41a10.47,10.47,0,0,1,5.43,3.35c2.64,3.27,2.09,6.13-1.66,8-5.2,2.56-10.56,1.93-15.91.55a2,2,0,0,1-1.2-.74,4.3,4.3,0,0,1-.65-2.15,4,4,0,0,1,3-2.73,1.58,1.58,0,0,1,1.22.49,1.39,1.39,0,0,1,0,1.3A4.8,4.8,0,0,1,1352.68,167.25Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path></g><g id="clouds2" data-v-c388597b><path class="cloud" id="Cloud11" d="M1531.38,563c-2.85-.31-5.71-.55-8.55-1a63.48,63.48,0,0,1-7.76-1.44,19.3,19.3,0,0,1-5-2.33,5.68,5.68,0,0,1-2.7-6,12.26,12.26,0,0,1,1.23-4.35,28.82,28.82,0,0,1,17.42-13.75,14.73,14.73,0,0,1,9.66.59c.36.14.73.24,1.31.43.17-1.8.36-3.44.48-5.08a74.75,74.75,0,0,1,3.63-16.84c2.61-8.31,8.34-13,16.6-14.94,2.64-.62,5.33-1.06,8-1.54,4-.73,8,.28,11.9.83a16.06,16.06,0,0,1,1.62.38c.22-1.38.39-2.71.65-4a66.86,66.86,0,0,1,8-21.18,37.36,37.36,0,0,1,14.52-13.95c1.26-.69,2.56-1.33,3.77-2.1,5.31-3.41,11-3.63,16.84-1.88a52.53,52.53,0,0,1,8,3.17c1.42.69,2.46,2.12,3.79,3.06,4.8,3.39,9.27,7.08,11.9,12.47,9.62-6,19.94-7.38,30.78-5.89a56.17,56.17,0,0,1,5.9,1.09c14.88,3.71,24.43,13,28.52,27.76a59.23,59.23,0,0,1,1.65,19.27,24.78,24.78,0,0,1-3.71,11.78c-.59.94-1.12,1.9-1.81,3.1,1.07,0,1.9.06,2.71,0a54.5,54.5,0,0,1,23.15,2.92,20.79,20.79,0,0,1,5.42,3,4.08,4.08,0,0,1,.68,6.31,13.33,13.33,0,0,1-3.75,2.9c-3.43,1.89-7.26,2.48-11.09,2.79-8.92.73-17.87,1.21-26.79,2-9.48.77-18.94,1.76-28.42,2.57-5.8.5-11.61.85-17.42,1.26l-38.53,2.7c-7,.5-14,1-21,1.53-7.57.63-15.12,1.5-22.7,2.07-10.12.76-20.26,1.34-30.4,2-1,.07-1.89.22-2.84.33Zm117.23-86.71c1.06,2.95,2.29,5.67,3,8.51,2,8,.28,15.09-5.84,20.82a29.73,29.73,0,0,1-13.07,7.29,23.6,23.6,0,0,1-9.49.82,10.12,10.12,0,0,1-8.71-10.4c.15-5.25,2.76-9.06,7.15-11.75.68-.42,1.37-.59,1.92.14s.19,1.39-.39,1.9-1.28,1-1.91,1.45a10.2,10.2,0,0,0-4.1,8.06c-.17,4.58,2.75,7.88,7.32,8.08a26.42,26.42,0,0,0,17.4-5.73q10.09-7.6,7.22-19.87a40.19,40.19,0,0,0-7.66-15.33c-2.8-3.64-6.64-6.22-10.57-8.57a7.84,7.84,0,0,0-1.76-.75c-1.27-.38-2.76-.37-3.14-2.11,0-.22-.49-.39-.78-.5-5.56-2.12-11.12-3-16.64.14-2.57,1.47-5.15,2.91-7.67,4.45a26.61,26.61,0,0,0-7.35,6.47,58.56,58.56,0,0,0-11.3,26.66c-.31,1.84-.61,3.62,1,5.11a2.28,2.28,0,0,1,.4.86c.69,1.85.36,3-1,3.4s-2.65-.32-3.16-2.09a3.43,3.43,0,0,1-.16-.94,2,2,0,0,0-1.91-2.12c-3.54-.57-7.07-1.51-10.69-1-2.61.39-5.21.89-7.79,1.44-7.73,1.64-13.06,5.93-15.42,13.73a71.86,71.86,0,0,0-3.33,15.44c-.23,2.92-.82,5.88.07,8.82.26.87.06,1.76-.87,1.9a2.11,2.11,0,0,1-1.62-1,6,6,0,0,0-3.58-2.63,13.38,13.38,0,0,0-9.63.35,27.58,27.58,0,0,0-12.67,10.28,16.1,16.1,0,0,0-1.82,4.88,3.08,3.08,0,0,0,1.48,3.53,17.29,17.29,0,0,0,4.52,2.09,68,68,0,0,0,8.5,1.46c9.18,1.08,18.39.57,27.55-.13,18.9-1.45,37.76-3.24,56.66-4.72,13.71-1.08,27.44-1.9,41.16-2.83,5.26-.36,10.53-.74,15.79-1.07,8.11-.51,16.06-2.22,24.23-2.46,11.18-.34,22.34-1.4,33.5-2.24a31.5,31.5,0,0,0,11-2.33,12.32,12.32,0,0,0,3.37-2.22c1.24-1.18,1.17-2.25-.26-3.19a22.85,22.85,0,0,0-5.09-2.6,49.2,49.2,0,0,0-18.41-2.63c-2.7.15-5.38.68-8.07.92a2.37,2.37,0,0,1-1.88-.56,2.25,2.25,0,0,1,.18-1.92c.73-1.33,1.69-2.52,2.51-3.8,2-3.2,3.75-6.54,4.09-10.39.68-7.72.43-15.4-2.11-22.77-4-11.69-12-19.39-24-22.86a55.05,55.05,0,0,0-14.45-2.05,42.74,42.74,0,0,0-18.17,3.77A6.53,6.53,0,0,0,1648.61,476.24Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud10" d="M1202.77,416.28c3-7.46,8.11-13.22,12.94-19.15a37.76,37.76,0,0,1,24.12-13.56,80.74,80.74,0,0,1,11-1,32.9,32.9,0,0,1,22.91,8.31c8.91,7.77,13.54,17.42,13,29.38a30.43,30.43,0,0,1-1.85,10.09,8.34,8.34,0,0,0-.21,1.13l2.42-.63a12.82,12.82,0,0,1,7.56.28,7.27,7.27,0,0,1,4.87,4.64,54.45,54.45,0,0,1,1.49,6.75c.18.91.19,1.86.29,2.94,12.18-9.62,22.71-4.1,26.59,6.6a15,15,0,0,0,1.58-.36c6.19-2,12.33-1.53,18.36.55,4.59,1.59,7.48,5.07,9.43,9.38a22.07,22.07,0,0,1,2,13.07c-.06.37,0,.75-.08,1.31a12.48,12.48,0,0,0,1.52-.17,28.84,28.84,0,0,1,15.39.76c3.51,1.06,6.91,2.51,10.35,3.8a3.56,3.56,0,0,1,1,.63c1.06,1,1,2.18-.34,2.65-2.68.94-5.21,2.25-8.17,2.45-5.18.34-10.33,1-15.51,1.45-5.34.42-10.68.73-16,1a114.26,114.26,0,0,1-12.94.36c-4.57-.29-9.1,0-13.63.08-9.76.26-19.51.72-29.26,1-3.35.1-6.72.11-10.07-.07-4.76-.25-9.48.59-14.27.17-7.33-.65-14.68-1-22-1.27-9.11-.36-18.22-.71-27.34-.74-19.27,0-38.55,0-57.82.25-21.35.31-42.7,1-64,1.46-16.72.4-33.43-.09-50.12-1.16-2.06-.13-4.14.19-6.21.13-8.55-.23-17.1-.54-25.65-.81-1,0-2-.36-2.93.54-.25.25-.92.15-1.38.11-6.45-.57-12.91-1.12-19.35-1.75a20.17,20.17,0,0,1-3.72-.9c-2.4-.72-3.3-2.13-2.66-4.54a19.3,19.3,0,0,1,4.58-8.85,64.48,64.48,0,0,1,12.34-9.86,30.34,30.34,0,0,1,12.61-4.29l2.22-.28c-.61-.52-1-.89-1.39-1.19-5.38-3.86-7.78-10.14-5.82-16.47,2.24-7.25,6.36-13.39,13.07-17.13,5.85-3.27,12-6,18.16-8.69a27.16,27.16,0,0,1,13-2.29l3.21-6a53.32,53.32,0,0,1,12.21-15.3,275,275,0,0,1,26-20.46c10.79-7.29,22.74-10.33,35.61-10.26a33.91,33.91,0,0,1,10.82,1.92,25.51,25.51,0,0,1,11.34,7.77,52.41,52.41,0,0,1,11.15,23.07c1.71,7.75,1.58,15.57,1.42,23.41,0,1.33,0,2.67,0,4.55.94-.85,1.5-1.35,2-1.86A40.41,40.41,0,0,1,1187,408.65a17.61,17.61,0,0,1,7.84.37,10.41,10.41,0,0,1,7.19,5.85C1202.21,415.29,1202.46,415.69,1202.77,416.28Zm-1.38,20.78c2.36.78,4.25,1.64,5.24,3.69a13,13,0,0,1,1.07,10,21.34,21.34,0,0,1-3.52,6.77,54.1,54.1,0,0,1-9.44,8.83,43.34,43.34,0,0,1-16,8.35c-5,1.3-9.93,1.07-14.45-1.43a60,60,0,0,1-15.69-12.11,11.4,11.4,0,0,1-2.43-4.33c-1-3.57,1.56-6.07,5.11-5a3.45,3.45,0,0,0,2.9-.3c2.95-1.56,5.92-.9,8.81.22a1.68,1.68,0,0,1,.78,1.46c-.11.4-.93.82-1.44.83a10.86,10.86,0,0,1-2.32-.51c-1.76-.35-3.71-.65-5,.66s-2.5,1.25-4,.36a2.12,2.12,0,0,0-1.93,0,2.07,2.07,0,0,0-.23,1.92,13.55,13.55,0,0,0,2.29,3.59,66.63,66.63,0,0,0,13.84,10.65,15.73,15.73,0,0,0,8,2.09,23.87,23.87,0,0,0,10.19-2.4c7-3.09,12.77-7.86,18-13.32a17.15,17.15,0,0,0,4-7,11,11,0,0,0-.45-7.27c-.69-1.9-2.27-2.51-3.91-3.22-1.84-.81-2.29-1.89-1.82-3.89.25-1.09.61-2.16.94-3.23a27.21,27.21,0,0,0,.31-14.68,7.82,7.82,0,0,0-6-6.17,16.26,16.26,0,0,0-8.31-.06,37.3,37.3,0,0,0-19.22,11.56c-.83,1-1.61,2.2-3.14,1.71s-1.44-2-1.47-3.24c-.07-3.36,0-6.71,0-10.07a82.37,82.37,0,0,0-1.31-16.95,48.76,48.76,0,0,0-11.38-23.44,23,23,0,0,0-11.56-6.91,41,41,0,0,0-14-.95c-8.72.73-17,2.89-24.56,7.44-10.81,6.51-20.37,14.66-29.81,22.94a51.33,51.33,0,0,0-12.39,16.62c-1.38,2.86-3.16,5.75-7.34,4.75a6.35,6.35,0,0,0-3.07.38,66.06,66.06,0,0,0-8,2.56c-4.83,2.11-9.57,4.45-14.3,6.78-6.3,3.1-10.09,8.5-12.8,14.7a12.51,12.51,0,0,0,6.83,16.93c.88.39,1.76.77,2.65,1.11,1.12.43,2.25.83,3.38,1.23.8.28,1.6.66,1.38,1.65-.25,1.18-1.24,1-2.13.87l-.47-.08c-7.08-.95-13.87-.16-20.19,3.4a68.44,68.44,0,0,0-11.62,8.85c-2.42,2.16-3.66,5-4.72,7.95a10,10,0,0,0-.19,2.15c2,.28,3.76.66,5.56.77q12.81.75,25.64,1.37c5.75.27,11.5.44,17.26.54,1.88,0,3.77-.48,5.64-.41,5.84.24,11.66.62,17.49,1,15.59.94,31.18.64,46.77.31,21-.44,42.06-1,63.09-1.33,17.6-.24,35.2-.25,52.79-.12,9.83.07,19.66.59,29.49,1,6.07.25,12.14.66,18.2,1a15.38,15.38,0,0,0,1.92,0c2-.12,4-.4,5.93-.37,4.08,0,8.16.45,12.23.35,10-.25,20-.77,30-1,7.65-.22,15.32-.11,23-.37q11.14-.37,22.26-1.25c4.93-.39,9.82-1.22,14.72-1.86,1.47-.19,2.94-.43,4.41-.64l.06-.48c-2.36-.89-4.68-1.92-7.09-2.65-5.63-1.71-11.31-2.08-17-.11-.74.26-1.6,1-2.17.23-.43-.58-.29-1.6-.37-2.42a2.53,2.53,0,0,1,.16-.7,21.59,21.59,0,0,0-1.2-12.7c-2.16-5.13-5.61-8.68-11.29-9.67-1.1-.19-2.19-.51-3.29-.63a22.81,22.81,0,0,0-12.46,1.79,17.71,17.71,0,0,0,0,2.19c.49,3.93-1.45,7.09-3.25,10.28a1.76,1.76,0,0,1-2.42.94c-1.08-.53-1.08-1.54-.76-2.5a11.67,11.67,0,0,1,1.14-2.36,12.85,12.85,0,0,1,1.47-1.9c1-1.1,1-2.46,1.13-3.82a2.36,2.36,0,0,0-1-2.48c-.25-.16,0-1.09,0-1.67s.44-1.43.22-2c-1.68-4.09-4.28-7.2-8.83-8.39-5.55-1.45-13.27,2.79-15.58,8.61a46.9,46.9,0,0,1-2.37,5c-.48.9-1.08,1.91-2.41,1.42-.92-.35-1-1.29-.29-3,.62-1.39,1.42-2.69,2.08-4.05a8.81,8.81,0,0,0,1-2.66,27.14,27.14,0,0,0-1-11.15,5.76,5.76,0,0,0-3.85-4,10.36,10.36,0,0,0-11.52,3.69c-.24.32-.45.75-.78.88s-1.16.34-1.49.11-.48-.92-.5-1.43c0-.35.32-.71.46-1.08,1.17-3,2.73-5.84,3.42-8.92,2.69-12,0-22.69-8.72-31.59-5.11-5.23-11.16-8.82-18.55-9.69a52.69,52.69,0,0,0-14.35.4c-8.38,1.28-15.86,4.4-21.78,10.64a91,91,0,0,0-12.48,16.37c-2.06,3.49-3.78,7.29-3.69,11.51a30.41,30.41,0,0,1-1.54,9.9C1201.84,435.14,1201.66,436,1201.39,437.06Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud9" d="M299.59,205.44c1.86-3.07,3.3-6.08,6.45-7.58s6.33-1.4,9.53-.83c2.54-3.32,4.93-6.62,7.49-9.77a23.39,23.39,0,0,1,4.57-4.54c5.13-3.59,10.55-3.81,16-.62a23.22,23.22,0,0,1,6.68,6.12l1.29,1.68c.22-.14.41-.19.45-.29,3.24-7.91,18.42-17.24,27.22-18.36,5-.64,10-1,15,0a15.4,15.4,0,0,1,4.26,1.53c7.05,3.89,11.87,9.59,13.9,17.5a52.48,52.48,0,0,1,2,15.41c0,.55,0,1.1,0,2.17l2.24-1.79a19.8,19.8,0,0,1,15.51-4.19,10.81,10.81,0,0,1,8.77,7,21.55,21.55,0,0,1,1.13,11.79c-.09.62-.22,1.24-.27,1.54,1.46,1.47,2.72,2.76,4.18,4.24,1-.48,2.19-1,3.37-1.66,6.35-3.39,12,0,14.25,5.23a24.45,24.45,0,0,1,1.71,8.41,69.47,69.47,0,0,1-2.14,21.15c-.09.38-.15.77-.27,1.45.67-.3,1.11-.53,1.58-.7a32,32,0,0,1,5.16-1.82c5.78-1.05,11.52-1.6,17.26.59a19.11,19.11,0,0,1,9.71,7.45c2.87,4.42,5.7,8.88,8.43,13.39,1.05,1.75,2.21,3,4.34,3.34,2.6.44,5.15,1.15,7.71,1.79,4.56,1.14,8.07,4.08,11.62,6.93a6.07,6.07,0,0,1,1.22,1.48c1.49,2.3.52,4.55-2.21,4.93a56.92,56.92,0,0,1-6,.48c-9,.31-17.9.62-26.86.85-9.83.26-19.67.28-29.5.67-5.34.21-10.66,1-16,1.47a2.59,2.59,0,0,0-1.33.43,1.85,1.85,0,0,1-2.41.14,3.44,3.44,0,0,0-1.39-.25q-3.67-.4-7.37-.77a9.58,9.58,0,0,0-2.14,0c-4.51.6-9,1.34-13.53,1.82-6.75.72-13.52,1.45-20.3,1.8-6,.31-12,.22-18,.09-7.19-.16-14.38-.57-21.57-.82-7.51-.26-15-.37-22.54-.25-8.63.15-17.27-.16-25.9-.23-5.51-.05-11,.09-16.54-.08-3.19-.09-6.36-.58-9.54-.94-10.62-1.19-21.24-.69-31.87-.09-11.41.64-22.83,1.64-34.25,1.72-11.58.08-23.17-.78-34.75-1.23-1.44-.05-2.88-.22-4.32-.16a11.07,11.07,0,0,1-6.11-1.83c-1.5-.88-1.64-2.32-.12-3.18,3.35-1.9,5.71-4.86,8.43-7.43,1.92-1.82,3.89-3.58,5.83-5.36,5.9-5.4,13-8,20.81-8.89,4.57-.54,9.1-.12,13.65,0h1.56a7,7,0,0,0,0-3.69c-.94-6.73-.21-13.39.74-20.06,1.91-13.47,7.2-25.64,14.14-37.17,1.52-2.53,3.36-4.86,5.12-7.24,3.41-4.59,8.13-7.43,13.36-9.4a71.33,71.33,0,0,1,10.76-3.27c7.52-1.54,14.81-.22,21.81,2.71A16.82,16.82,0,0,1,299.59,205.44Zm147.46,23.48c-.49,1.94-.5,3.53-1.24,4.64a40.07,40.07,0,0,1-5.49,6.92A13.39,13.39,0,0,1,430,244.16c-1.79-.1-2.73-.7-2.5-1.58.35-1.4,1.52-1.16,2.55-1.08a11.48,11.48,0,0,0,7.48-2.08,21.13,21.13,0,0,0,6.12-7.29c.94-1.64-.17-5.27-1.73-6.3a1.88,1.88,0,0,0-.88-.26c-2.6-.21-2.69-.31-2.12-2.77.11-.47.25-.93.37-1.39a18.77,18.77,0,0,0-.47-10.88,8.6,8.6,0,0,0-8.24-6.22,17.39,17.39,0,0,0-12.66,4.16c-1.08.95-2.08,2-3.1,3-.62.61-1.18,1.44-2.22,1s-.9-1.42-.91-2.29,0-1.92.07-2.87a50.05,50.05,0,0,0-2-17.07c-1.89-6.81-6.18-11.64-12.2-15a14.79,14.79,0,0,0-4.5-1.53,31,31,0,0,0-12.17,0c-11.72,2.47-21.71,7.51-27.17,19a2.12,2.12,0,0,1-.11.21c-.69,1.12-1.56,1.31-2.55.37a16,16,0,0,1-2.14-2.57,21.75,21.75,0,0,0-6.28-6.18,11.68,11.68,0,0,0-14.8,1.38,55.07,55.07,0,0,0-5.17,6.29c-1.72,2.27-3.28,4.67-5,6.94a2.52,2.52,0,0,1-1.66.69,7.43,7.43,0,0,1-1.88-.33c-7.23-1.34-10.75,2.84-12.45,8.94a4.4,4.4,0,0,0,.27,2.09c1,3.78,2,7.55,3.07,11.32.11.41.3.8.57,1.51,1.55-2.33,2.9-4.39,4.28-6.43a14.47,14.47,0,0,1,2.1-2.82,31.79,31.79,0,0,1,4.61-3.39,25.1,25.1,0,0,1,4.75-2.23,9.56,9.56,0,0,1,9.47,1.79,19.91,19.91,0,0,1,6.3,8.32c.9,2.31,1.75,4.64,2.52,7,1.06,3.23,2.72,5.67,6.36,6.44a6.71,6.71,0,0,1,5.12,4.93,34.91,34.91,0,0,1,1.42,6.53c.64,6.19-1.22,11.88-4.15,17.22-4,7.34-10,12.79-17,17.27a23.84,23.84,0,0,1-9.13,3.47c-5.23.89-10.19.34-14.71-2.7a10,10,0,0,1-4.64-7,24.81,24.81,0,0,1,3.26-17.31c2.68-4.29,6.88-6.07,11.75-6.33a6.05,6.05,0,0,1,3.18.83,4.68,4.68,0,0,1,1.69,2.16,1.69,1.69,0,0,1-.51,1.58,1.65,1.65,0,0,1-1.57-.46c-.91-1.56-2.29-1.59-3.76-1.41a11.35,11.35,0,0,0-9.33,6.28,23.72,23.72,0,0,0-2.44,10.42c-.14,5.91,1.89,8.85,7.46,10.83a12,12,0,0,0,1.85.5,21.34,21.34,0,0,0,15-2.81,49.61,49.61,0,0,0,12.23-10.33A35.21,35.21,0,0,0,349,252.38,22.25,22.25,0,0,0,348.7,238a5.31,5.31,0,0,0-3.61-3.55c-.61-.18-1.21-.42-1.82-.6a7.38,7.38,0,0,1-4.72-4.14c-.66-1.46-1.25-2.94-1.82-4.43-.81-2.09-1.52-4.21-2.37-6.28a17,17,0,0,0-5.28-6.72,6.69,6.69,0,0,0-6.3-1.49c-4.47,1.33-8.33,3.55-10.19,8.2-.08.22-.22.51-.4.58-2.32.9-2.92,3.25-4.24,5-.68.89-1.17,1.93-1.9,2.76-1.09,1.24-2.38.9-2.86-.68-.12-.38-.11-.8-.2-1.19-.72-3.27-1.43-6.55-2.22-9.82a2.88,2.88,0,0,0-1-1.7c-1.21-.7-1.25-1.72-1.26-2.87a7.13,7.13,0,0,0-.29-2.55,14.7,14.7,0,0,0-7.19-7.74,37,37,0,0,0-11.76-3.11c-6.82-.82-13.15,1.13-19.39,3.54a28.46,28.46,0,0,0-13.64,10.53c-7.95,11.59-14.08,24-16.57,37.94-1.3,7.34-2.41,14.68-1.41,22.17.2,1.5.38,3,.44,4.53.1,2.35-.72,3-3,2.77a65.15,65.15,0,0,0-17,.1c-5.13.81-10.11,2.16-14.12,5.53-5.54,4.65-10.81,9.63-16.35,14.61a5,5,0,0,0,3.16,1c5.68.25,11.35.46,17,.84a287.77,287.77,0,0,0,31.9.46c10.78-.45,21.55-1.31,32.33-2a159,159,0,0,1,25.16.53c5.72.55,11.47,1.15,17.21,1.16,8.8,0,17.58-.43,26.39-.1,10.94.4,21.91.43,32.86.49,3.74,0,7.46.66,11.25.1,2.14-.32,4.42.49,6.64.5,7,0,14.08.08,21.1-.19,5.27-.2,10.52-.83,15.78-1.34,4.29-.43,8.66-.58,12.84-1.55,4.44-1,8.75-.19,13.11-.21,1.58,0,3.16.22,4.73.08,3.82-.32,7.62-1,11.45-1.15,7.91-.35,15.83-.45,23.74-.7q20.26-.62,40.53-1.29c.82,0,1.64-.25,2.78-.42a9.66,9.66,0,0,0-1.35-1.82c-3.3-2.52-6.45-5.3-10.65-6.28-2.64-.62-5.27-1.33-7.94-1.83a7.18,7.18,0,0,1-5-3.71c-2.65-4.38-5.43-8.68-8.13-13-4.35-7-11.07-9-18.77-8.73-1.9.06-3.8.51-5.7.74a12.49,12.49,0,0,0-5.75,2.24c-.72.51-1.43,1-2.15,1.53s-1.48,1.11-2.4.56-.69-1.48-.5-2.36c.35-1.56.61-3.14,1-4.7a62,62,0,0,0,1.65-22.36A13.76,13.76,0,0,0,460,229a6.68,6.68,0,0,0-8.3-2.31C450,227.35,448.37,228.26,447.05,228.92Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud8" d="M745.33,456.27c4.06-.4,8-1,12-1.13a28.81,28.81,0,0,1,17.57,5.46c1.37,1,2.79,1.87,4.18,2.82,6.37,4.38,10.13,10.51,11.95,17.92.26,1.09.36,2.21.55,3.31a3.48,3.48,0,0,0,.35.62c.67-.17,1.43-.31,2.15-.55a23.58,23.58,0,0,1,15.32.17c5.21,1.69,8.27,5.66,9.58,10.84a51.6,51.6,0,0,1,.92,7.59c.09.94,0,1.9,0,3.12.76-.13,1.43-.21,2.08-.37a32.33,32.33,0,0,1,12.84-.72,21.85,21.85,0,0,1,12.25,6.58A7.47,7.47,0,0,1,848,513c1.25,2,.65,3.75-1.63,4.17a27.42,27.42,0,0,1-5.73.35c-5.35-.14-10.7-.48-16.06-.63-15.92-.44-31.83,0-47.73,1-10.06.63-20.11,1.22-30.17,1.84a11.67,11.67,0,0,0-2.12.32,53.59,53.59,0,0,1-16.92,1.33c-10-.74-20.07-1.44-30.17-1.36-14.47.12-29-.36-43.42-.17q-30.72.4-61.41,1.48c-7.82.26-15.63,1.18-23.42,2-14.17,1.43-28.36,2.54-42.58,3.25-13.26.67-26.5,1.6-39.76,2.21a132,132,0,0,1-22.05-.37,28.22,28.22,0,0,1-6-1.41c-2.23-.82-2.45-2.56-.6-4,6.91-5.33,13.81-10.68,22.17-13.64,2.25-.79,4.53-1.53,6.57-2.22,2.89-7.48,5.63-14.81,8.54-22.07a27.69,27.69,0,0,1,16.68-16.23c5.21-1.94,10.46-3.38,16.13-3A16,16,0,0,1,541,473.32a82,82,0,0,1,4.35,8.25c.22.41.37.85.72,1.67.35-.86.62-1.37.78-1.92a63.32,63.32,0,0,1,9.6-18.95c2.15-3,4.25-6,6.24-9.1A68,68,0,0,1,581.21,434a231.34,231.34,0,0,1,26.22-15.94,50.9,50.9,0,0,1,18.83-5.29c7.9-.74,14.83,1.84,20.91,6.77a50.07,50.07,0,0,1,11.57,14.27c.39.68.8,1.36,1.35,2.29l2.26-1.44c3.12-2.08,6.13-4.38,9.4-6.2,9.65-5.41,20-6.78,30.86-4.9a18.51,18.51,0,0,1,5.57,2.09c2.46,1.32,4.73,3,7.1,4.47a68.14,68.14,0,0,0,8,4.8c6.16,2.77,11,7.11,15.22,12.18C741,450.07,743.1,453.26,745.33,456.27Zm-3,1a2.61,2.61,0,0,0-.19-.71c-.39-.7-.78-1.4-1.23-2.06a60.5,60.5,0,0,0-11.15-12.48,19,19,0,0,0-3.9-2.77,105.49,105.49,0,0,1-15.63-9.34,26.26,26.26,0,0,0-3.49-2.1,16.64,16.64,0,0,0-4.23-1.62c-10.06-1.74-19.79-.71-28.85,4.2-3.36,1.82-6.44,4.17-9.64,6.28-.73.48-1.42,1-2.19,1.46-1.79,1-3,.72-4.13-.92a23.26,23.26,0,0,1-1.22-2.06,49.14,49.14,0,0,0-9.48-12.3c-6.31-5.74-13.63-8.5-22.24-7.26a49.58,49.58,0,0,0-16.88,5.17A220.8,220.8,0,0,0,580,438.17a61.49,61.49,0,0,0-14.2,15.16c-2.18,3.26-4.31,6.55-6.65,9.69a67.14,67.14,0,0,0-10.92,22.53,8,8,0,0,1-.62,1.8c-.73,1.33-2.09,1.39-2.79,0s-1.08-2.84-1.73-4.21a75.82,75.82,0,0,0-3.94-7.92,14,14,0,0,0-12.41-6.88c-4.67-.06-9,1.2-13.3,2.74a25.38,25.38,0,0,0-15.71,15.17c-2.5,6.31-4.89,12.67-7.32,19-.07.18,0,.43.09.83a15,15,0,0,1,2.5-.94,1.64,1.64,0,0,1,1.41.47,1.53,1.53,0,0,1-.15,1.46,53.15,53.15,0,0,1-5.49,2.63,27.31,27.31,0,0,1-2.78.46c-9.51,2.65-17.63,7.8-25.12,14.07-.1.08-.11.28-.24.65a17.7,17.7,0,0,0,2.7.6c4.71.32,9.42.85,14.12.78,7.83-.11,15.66-.62,23.49-1,3.83-.16,7.67-.23,11.5-.46,9-.55,18-1.11,27-1.79,10.37-.79,20.73-1.57,31.07-2.6,12.74-1.27,25.49-2.22,38.3-2.29,10.8-.05,21.59-.39,32.39-.62,10.31-.22,20.62-.64,30.94-.65,12.79,0,25.59.28,38.38.5,2.47,0,4.94.38,7.41.55,4.38.28,8.77.55,13.16.78a2.13,2.13,0,0,0,1.53-.38,3.5,3.5,0,0,1,2.85-.93c6.31-.24,12.63-.41,18.94-.74,14.29-.75,28.58-1.67,42.87-2.35a366.56,366.56,0,0,1,37.65.39c2.87.16,5.76.13,8.64.15a14.84,14.84,0,0,0,1.94-.28,7.42,7.42,0,0,0-2.84-3.08c-5-3.87-10.81-4.54-16.86-3.57-2.12.34-4.18,1.06-6.27,1.58-1.82.46-2.56-.12-2.55-2,0-1,.2-2.08.14-3.11a60.24,60.24,0,0,0-.65-7.62,12.58,12.58,0,0,0-10.74-10.22,23.81,23.81,0,0,0-11.81.84c-3.76,1.35-4.5.72-5.26-3.26a33,33,0,0,0-2-7.36c-2.22-5-5.4-9.23-10.26-12-1.39-.79-2.65-1.8-4-2.68a27.34,27.34,0,0,0-13-4.34A41.52,41.52,0,0,0,741,460.9c-4.25,1.63-8.32,3.71-12.48,5.57a48.68,48.68,0,0,0-15.4,10.37A16.54,16.54,0,0,0,708.38,488a2.83,2.83,0,0,1-.68,1.86c-.71.58-1.53.09-2.13-.49a10.62,10.62,0,0,0-5.15-2.41,35.32,35.32,0,0,0-12.62-.83,19.6,19.6,0,0,0-14.06,8.24c-1.82,2.58-2.32,5.23-.45,8,.44.65.7,1.36,0,1.91a1.41,1.41,0,0,1-2.09-.45,7.21,7.21,0,0,1-1.16-2.08,8.59,8.59,0,0,1,.55-7.19A21.1,21.1,0,0,1,679.4,486a26.71,26.71,0,0,1,16.34-2.47c3.35.49,6.65,1.33,10.12,2.05a27.68,27.68,0,0,1,.89-3.25,15.1,15.1,0,0,1,2.12-4.51c3.29-3.8,6.7-7.55,11.21-10q3.69-2,7.49-3.79C732.41,461.79,737.29,459.6,742.33,457.3Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud7" d="M1054.45,128.08c-3-6.5-2.24-11.59,2.34-16.65,2-2.19,3.91-4.46,6.62-5.82a5.08,5.08,0,0,0,2.6-3.53c.56-2.17,1.11-4.34,1.68-6.5a31.71,31.71,0,0,1,7.88-14.09c5.55-5.76,11.25-11.37,18-15.76a50.23,50.23,0,0,1,20.64-7.27,46.21,46.21,0,0,1,12.43-.25,13.69,13.69,0,0,1,11.27,7.9,8.33,8.33,0,0,0,.56.78c.27-.55.51-1,.69-1.45,3.55-9,8.44-17.07,15.58-23.63a33.31,33.31,0,0,1,25.72-9.12c10.16.74,17.09,6.45,21.38,15.56a54.33,54.33,0,0,1,4.06,14.24A63.74,63.74,0,0,1,1207,74.66a11,11,0,0,0,.21,1.55c2.07-.42,4-.95,6-1.19,5.36-.63,10.15.66,14,4.59a13.25,13.25,0,0,1,3.67,9.86c0,3.27-.45,6.53-.7,9.8-.06.85-.1,1.7-.15,2.65a12,12,0,0,0,5.32-1.11c2.66-1.29,5.34-2.57,8.07-3.7a25.81,25.81,0,0,1,10-2.24,13.89,13.89,0,0,1,9.28,3.31,23.8,23.8,0,0,1,3.73,3.71,42.71,42.71,0,0,1,2.85,5.07c2.52-1,5.26-2.27,8.06-3.37a31.56,31.56,0,0,1,11.91-2.42,20.08,20.08,0,0,1,19.07,14.48,10.53,10.53,0,0,1-2.81,11,36.29,36.29,0,0,1-10.09,7.25c-2.93,1.45-6,2.65-9,3.88-3.48,1.4-7.11,1-10.67.56-13.14-1.72-26-.11-38.71,3.21a86.7,86.7,0,0,0-8.57,3.07,77.72,77.72,0,0,1-16.32,4.69c-6.22.92-12.27,0-18.33-1.27-12.29-2.52-24.55-5.26-37-6.78-5.87-.71-11.79-1.14-17.69-1.29-10.47-.28-21-.21-31.43-.34-15.12-.19-30.23-.37-45.35-.72-4.38-.1-8.75-.76-13.13-1.22a10.3,10.3,0,0,1-2.78-.69c-1.85-.76-2.26-2.23-.78-3.53a42.75,42.75,0,0,1,5.48-3.8A33,33,0,0,1,1054.45,128.08Zm-6.44,6.64a19.38,19.38,0,0,0,2.27.51c4.78.41,9.55,1,14.34,1.12,22.87.35,45.74.47,68.61.85,7.42.13,14.87.54,22.25,1.3,12.58,1.31,24.91,4.13,37.28,6.66,5.26,1.07,10.5,2.12,15.92,1.84,6.57-.34,12.7-2.4,18.72-4.82a84.91,84.91,0,0,1,18.14-5.27c8.47-1.35,16.94-2.47,25.54-1.66,2.55.24,5.09.54,7.64.67a17.62,17.62,0,0,0,6.65-.53,53.25,53.25,0,0,0,13.52-6.63,36.39,36.39,0,0,0,5.08-4.37,7.51,7.51,0,0,0,1.9-7.73,17.49,17.49,0,0,0-19-12.77,45.47,45.47,0,0,0-17.67,6.42c-.78.46-1.61,1.13-2.38.4a3,3,0,0,1-.68-2.11A7.06,7.06,0,0,0,1264,103c-.91-.9-1.8-1.83-2.78-2.64a11.27,11.27,0,0,0-10.06-2.65,69.29,69.29,0,0,0-8.89,2.77c-3.86,1.45-7.27,4.05-11.31,4.19a56.39,56.39,0,0,1,0,7.38c-1,7.15-4.15,12.93-11.25,15.74a77.21,77.21,0,0,1-9.51,3.24c-6.74,1.72-13.64,1.62-20.51,1.26a24,24,0,0,1-6.1-1.17c-8.29-2.63-14.27-11.07-14.53-20.36-.19-6.77,2.32-12.67,6.2-18a10.41,10.41,0,0,1,3.3-2.67,4.86,4.86,0,0,1,4.85,0,8.34,8.34,0,0,1,4.61,7.11,7.67,7.67,0,0,1-1.24,3.51,1.28,1.28,0,0,1-2,.55c-.71-.55-.41-1.23-.13-1.94a5.42,5.42,0,0,0,.67-2.67c-.42-2-1.49-3.82-3.63-4.38-2-.51-3.33.77-4.46,2.19a14.23,14.23,0,0,0-1.71,2.6c-.91,1.87-1.77,3.76-2.51,5.7a19.79,19.79,0,0,0,.4,15.42c2.7,6.21,7.22,10.41,14.13,11.24,10.54,1.27,20.9.63,30.8-3.76a17,17,0,0,0,9.87-19,32.24,32.24,0,0,1-.28-10.23,68.79,68.79,0,0,0,.18-9.08,8.76,8.76,0,0,0-3-6.11c-3.62-3.42-8-4.15-12.7-3.34-1.42.24-2.81.64-4.22.88-2.94.51-3.51-.07-3.68-3-.22-3.91-.49-7.82-1-11.7a47.83,47.83,0,0,0-3.91-14.52c-3.61-7.68-9.23-12.88-17.84-14a29.81,29.81,0,0,0-23.71,7c-8.78,7.4-14.44,17-17.62,28a8.45,8.45,0,0,1-.64,2.05c-.29.48-1,1.13-1.37,1a2.7,2.7,0,0,1-1.47-1.29,6.15,6.15,0,0,1-.37-1.87c-1.09-5.62-4.73-9.15-10.43-9.59a58.83,58.83,0,0,0-10.28.1,45.54,45.54,0,0,0-21.93,7.72,99.91,99.91,0,0,0-18,16.48,25.54,25.54,0,0,0-5.29,9.87c-.7,2.45-1.35,4.93-1.94,7.42a8.74,8.74,0,0,1-4.59,6.11c-2.68,1.35-4.5,3.55-6.35,5.75a10.38,10.38,0,0,0-2.53,7.31,7.63,7.63,0,0,0,2.83,6.08c1,.83.69,1.82-.63,2.3a9,9,0,0,0-.93.22C1053.69,131.41,1050.77,132.31,1048,134.72Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud6" d="M1733.57,72.4a5.81,5.81,0,0,0,1.21-.34c4-2.36,8-1.67,12,.07,8.54,3.73,13.66,10.18,15.63,19.3a31.65,31.65,0,0,1-.26,15.65c-.1.35-.17.72-.31,1.35,2-.45,3.75-.91,5.53-1.23,5.69-1,11.3-1,16.64,1.64,2.23,1.12,4.34,2.32,5.37,4.86.26.63,1.32,1.11,2.1,1.33,3.24.9,6.5,1.68,9.76,2.51a29.41,29.41,0,0,1,9.73,3.9c1.13.78,2.16,1.61,2.31,3.17a4.35,4.35,0,0,1-2.21,4.66,9.4,9.4,0,0,1-3.33,1.23,61.25,61.25,0,0,1-7.89.41q-25.66-.57-51.33-1.28a197.46,197.46,0,0,0-23.71,1.06c-6.21.58-12.41,1.29-18.63,1.8-2.05.17-4.14-.22-6.21-.11-10.06.53-20.11,1.23-30.18,1.7-11,.51-22,1.18-33.08,1.13-11.84-.06-23.57,1.33-35.36,1.92-10.14.52-20.28,1.05-30.44,1.09-5.41,0-10.82.83-16.23,1.36-2.2.21-2.92-.34-2.9-2.6a16.17,16.17,0,0,1,2.36-8c3.69-6.43,12.16-12.64,21.69-11.45,2.21.28,4.38.82,6.54,1.24.14-.2.3-.33.3-.45,0-5.13,1.95-9.69,4.17-14.13a27.74,27.74,0,0,1,3.88-5.43c1.55-1.82,3.34-3.44,5-5.15a18.55,18.55,0,0,1,9-5.26,3,3,0,0,0,2.69-2.76c2-10.1,8-17.4,16.32-23.05,5.51-3.73,11.36-6.49,18.1-7.12a29.37,29.37,0,0,1,15.7,2.33c.2-.74.42-1.38.55-2a28,28,0,0,1,5-11.32,46.13,46.13,0,0,1,15.82-13.71,90.5,90.5,0,0,1,10.89-5,21.43,21.43,0,0,1,15.27-.05c6.89,2.55,13.32,5.91,18.39,11.37a37.29,37.29,0,0,1,10,21.83c.27,2.61.11,5.26.13,7.9C1733.58,68.61,1733.57,70.4,1733.57,72.4ZM1606.33,90.68a15.06,15.06,0,0,0-6.83,3.1c-5.66,4.92-10.83,10.17-13,17.7a35.35,35.35,0,0,0-1.25,8c-.12,2-.82,2.54-2.78,2.12-1.49-.32-3-.75-4.44-1a20.63,20.63,0,0,0-6.66-.43c-5.46.77-9.67,3.63-13.23,7.59a16.08,16.08,0,0,0-3.68,8,15.24,15.24,0,0,1,1.52-.21c.36,1.49,1.47.89,2.32.84,5-.28,10-.66,15.08-.86,6.63-.26,13.28-.2,19.9-.58,15.17-.88,30.32-1.95,45.48-2.91,2.43-.15,4.92-.94,7.28.41.18.1.47,0,.71,0,2.88-.06,5.76,0,8.63-.19,9.91-.54,19.8-1.14,29.7-1.74,12.84-.77,25.68-1.59,38.52-2.34,7.26-.42,14.53-1,21.79-1,7.44-.07,14.87.38,22.31.54q17.5.36,35,.61a30.32,30.32,0,0,0,5.69-.63,2.63,2.63,0,0,0,2.36-2.11c.18-1.28-1-1.71-1.83-2.26-2.66-1.73-5.69-2.5-8.71-3.28-3.41-.89-6.82-1.74-10.21-2.65-1.35-.36-2.61-.93-3.06-2.41a5.53,5.53,0,0,0-2.85-3.08,20.2,20.2,0,0,0-11.53-2.62,32.46,32.46,0,0,0-11,2.32c-.89.37-1.89.68-2.73-.06s-.54-1.77-.17-2.66a27.21,27.21,0,0,0,.61-18.8c-1.44-4.82-3.66-9.24-8-12.2a45.73,45.73,0,0,0-4.95-2.94c-3.59-1.83-7.24-2.58-10.93-.21a3.83,3.83,0,0,1-.65.3c-2,.76-3.31.11-3.66-2a26.77,26.77,0,0,1-.24-4.3c0-2.24.24-4.48.14-6.71a35.21,35.21,0,0,0-9.82-23.34c-4.66-4.94-10.57-8-16.81-10.33a19.91,19.91,0,0,0-13.88-.06,55.5,55.5,0,0,0-19.26,11c-5,4.49-9.2,9.61-10.53,16.49-.23,1.18-.34,2.38-.57,3.55-.39,2-1.13,2.35-3,1.48a25.48,25.48,0,0,0-5.07-2.07A30.77,30.77,0,0,0,1631.53,61a49.74,49.74,0,0,0-13.91,10.11c-4.16,4.27-6.43,9.47-7.69,15.2a2,2,0,0,0,.12.65c13.39-1.31,22.6,10.74,20,22.84,1.42,0,2.84-.08,4.25,0,3.75.25,7,1.49,9.27,4.73a7,7,0,0,1,.45,7.91,18.21,18.21,0,0,1-8.32,7.7,12.53,12.53,0,0,1-9.36.38,7.28,7.28,0,0,1-4.06-3.55c-.43-.79-.83-1.7.21-2.3s1.49.11,2,.83l.12.21c1.19,2.14,3.16,2.79,5.45,2.85,4.65.13,10.23-3.52,12-7.88a4.74,4.74,0,0,0-.51-4.57,8,8,0,0,0-5.07-3.36,10.7,10.7,0,0,0-7.92.83c-.66.36-1.48.68-1.93-.06a3.39,3.39,0,0,1-.15-2,6.05,6.05,0,0,1,.51-1.33,15.52,15.52,0,0,0,.71-7.32c-.49-3.79-2.53-6.63-5.07-9.29-3.63-3.81-8.09-4.38-12.9-3.77C1608.55,92.66,1608.06,92.77,1606.33,90.68Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud5" d="M1510.8,264.33a1.29,1.29,0,0,0,.33-.18c5.53-6.8,13-9.16,21.35-8.74,8.11.39,14.83,4.07,20.43,9.89,2.93,3.05,3.92,6.88,4.38,10.92.51,4.48.21,6.62-1.75,12.43l1.57-.38c6.56-1.65,12.86-1.35,18.59,2.66,2.7,1.89,3.4,4.75,3.08,7.85a12.85,12.85,0,0,1-4.63,8.61c.47,0,.94-.12,1.41-.12,3,0,6-.48,9,.34,3.37.92,7,1,10.36,1.87,4.24,1.11,8.36,2.66,12.5,4.11,1,.35,2.32.89,2,2.29s-1.61,1.29-2.73,1.35c-2.31.15-4.62.38-6.93.46q-28.77,1-57.55,1.89c-14.39.47-28.78.88-43.17,1.38-22.79.79-45.56,1.83-68.35,2.38-17.43.42-34.88.42-52.28-.9-5.11-.39-10.19-1-15.28-1.55-.32,0-.63-.11-.94-.17-.89-.18-1.8-.39-1.86-1.52s.79-1.6,1.63-1.79c3.34-.77,6.69-1.57,10.07-2.09,2.75-.43,5.56-.5,8.4-.73,0,0,.2-.17.22-.3a23.59,23.59,0,0,1,5.8-11.64c3.25-3.85,6.38-7.81,9.56-11.71,3-3.68,7.16-5.34,11.57-6.33,3.17-.72,6.45-.92,9.91-1.38.36-1.79.76-3.81,1.17-5.83,1.55-7.71,5.12-14.6,8.74-21.46a73.1,73.1,0,0,1,10-14.62c4.58-5.15,9.88-9.32,16.54-11.52a10.5,10.5,0,0,0,1.54-.66,40.13,40.13,0,0,1,16.78-4.47,2.78,2.78,0,0,1,2.47.54,2.76,2.76,0,0,0,1.52.57,24.43,24.43,0,0,1,12.8,6.15,60,60,0,0,1,14.26,17.31c2.55,4.8,5.41,9.45,7,14.7C1510.41,264.06,1510.59,264.14,1510.8,264.33Zm-141.47,53.89-.06.64c2.26.24,4.52.51,6.78.72,13.07,1.25,26.2,1.29,39.31,1.33,10.07,0,20.15-.39,30.22-.69,12.15-.36,24.3-.79,36.45-1.21,20.87-.71,41.73-1.49,62.59-2.13,15.91-.48,31.82-.77,47.73-1.19,2.63-.07,5.26-.41,7.88-.65a11.87,11.87,0,0,0,1.76-.48,20.3,20.3,0,0,0-2.33-1.11,66,66,0,0,0-25.53-3.2,15.1,15.1,0,0,0-5.15,1c-6.3,3.07-11.81,1.5-17-2.51-2.67-2.09-2.28-5.07.83-6.42a23.75,23.75,0,0,1,4.83-1.31,1.54,1.54,0,0,1,1.32.66,1.52,1.52,0,0,1-.34,1.44,7.92,7.92,0,0,1-2.18.82c-1.26.38-2.72.34-3.57,1.76,1.14,1.88,3,2.56,4.81,3.43,3.92,1.94,7.62,1.33,11.07-1.12,1.56-1.11,3-2.4,4.46-3.64a8.41,8.41,0,0,0,2.94-6.59,5.49,5.49,0,0,0-2.77-5.21,16.66,16.66,0,0,0-6.26-2.25c-4.93-.74-9.56-.26-13.58,3.06-.84.7-1.94,1.49-3,.38s0-1.94.53-2.78a20.75,20.75,0,0,0,3.58-9.32c.55-6.41-.51-12.4-5.86-16.67-5.64-4.5-11.9-7.45-19.4-6.92-6.88.49-12.72,2.85-16.93,8.59a3.18,3.18,0,0,0-.68,2.61,22.89,22.89,0,0,1,0,3.21,1.56,1.56,0,0,1-2.09-1.27c-.6-2-1.12-4-1.79-5.9a76.21,76.21,0,0,0-12.25-22.68,64.76,64.76,0,0,0-8.68-8.92c-6.53-5.61-14-6.81-22.4-4.08-.71-1-1.73-.81-2.83-.32s-2.54,1-3.76,1.56c-2.95,1.42-5.9,2.84-8.79,4.39a27.83,27.83,0,0,0-7.71,5.56c-1.5,1.66-3,3.3-4.42,5a94.46,94.46,0,0,0-13.64,24.69c-1.48,3.84-2.1,8-3.1,12a2.39,2.39,0,0,0,.95,2.93,3.83,3.83,0,0,1,1.21,1.72,2.64,2.64,0,0,1-1.86,3.56c-1.45.44-2.52-.24-3-2-.19-.76-.25-1.54-.39-2.46a24.45,24.45,0,0,0-9.09.76c-3.73,1-7.43,2.15-10,5.3-3.65,4.45-7.37,8.86-10.82,13.46-2.33,3.11-4.53,6.41-3.88,10.71.17,1.16-.6,1.58-1.91,1.36a18.94,18.94,0,0,0-3.77-.5C1375,317.58,1372.19,317.94,1369.33,318.22Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud4" d="M832,237.34c2.63-2.11,4.91-4.09,7.34-5.87a15.6,15.6,0,0,1,14.74-2.55c.22.07.47.08.7.13.09-.15.25-.29.23-.41-.81-4.91,1.24-9.29,2.78-13.69,1.26-3.64,4.25-6.14,7-8.74,1.5-1.43,3.15-2.7,4.73-4.05,3.62-3.1,8.06-4.07,12.57-4.94a29.92,29.92,0,0,1,16.05,1.4,31.72,31.72,0,0,1,13.78,9.22,63.29,63.29,0,0,0,4.86,5c6.38,6.06,9.61,13.55,10.4,22.26a29.64,29.64,0,0,1-.38,9.64c1.75-.24,3.31-.44,4.87-.67,8.39-1.25,15.37,1.93,21.64,7.07a34.24,34.24,0,0,1,4.36,4.78,9.74,9.74,0,0,1,2.21,5c.18,1.35.55,2.67.72,4,.27,2-.48,2.91-2.47,2.88a30,30,0,0,1-4.54-.37,33,33,0,0,0-8.83-.27,34.66,34.66,0,0,1-7.41-.12c-5.67-.58-11.33-.3-17-.2-3.26,0-6.53-.15-9.8-.28-1.84-.07-3.67-.34-5.5-.33-12.63,0-25.27,0-37.9.16-6.39.07-12.77.42-19.16.61-1.2,0-2.4-.08-3.59-.13-10.4-.48-20.78-.15-31.17.39-4.47.24-9,.17-13.42.48-5.9.41-11.78,1.06-17.67,1.59a36.42,36.42,0,0,0-4.06.31c-1.61.33-3.16,1-4.77,1.38a2.5,2.5,0,0,1-1.93-.16c-.76-.69-.2-1.49.45-2a12.37,12.37,0,0,1,3.09-2.23c6-2.3,11.89-5.18,18.32-6.28,3.15-.54,6.34-.83,9.51-1.22.94-.12,1.88-.19,3.06-.31a8.26,8.26,0,0,0-.61-1.16,11,11,0,0,1-.2-13.7,30.91,30.91,0,0,1,11.86-9.14,11.89,11.89,0,0,1,10.88.39C829.24,236,830.8,236.73,832,237.34ZM957.75,265.1c-.35-4.24-.64-5.48-1.88-7.19-6.32-8.74-16.75-13.77-28.42-10.47-1,.28-1.9.83-2.89,1.11-.47.13-1.29.07-1.5-.23a3.17,3.17,0,0,1-.25-1.72c0-.2.23-.41.35-.62a9.71,9.71,0,0,0,1.52-5.45c-.06-1.76,0-3.52-.13-5.26-.78-8.07-3.68-15.15-9.78-20.74a32.66,32.66,0,0,1-4.39-4.41,25,25,0,0,0-11.26-8.3c-10.77-4.19-21.14-3.65-30.29,4.36-.72.63-1.52,1.19-2.2,1.86-2.45,2.4-5.16,4.66-6.46,7.94a61.16,61.16,0,0,0-2.34,7.78,11.74,11.74,0,0,0-.16,3.79c.18,2,.63,3.94.81,5.92a1.92,1.92,0,0,1-.74,1.55c-.71.41-1.37,0-1.71-.79-1.19-2.63-3.48-3.39-6.08-3.46-6.55-.19-11.08,3.5-15,8.15a4.48,4.48,0,0,0-.56,3.16c.44,2.91,4.87,6.79,7.8,7a6.62,6.62,0,0,0,2.58-.36,4.06,4.06,0,0,0,2.46-2.76c.39-1.18-.42-1.7-1.1-2.4-.3-.3-.45-1.22-.23-1.44a2,2,0,0,1,1.6-.5,3.52,3.52,0,0,1,2.46,3.7,6.57,6.57,0,0,1-2.62,4.93,7.87,7.87,0,0,1-9,.28c-3.79-2.48-6.91-5.49-6.9-10.45l-5.21-2.69a9.21,9.21,0,0,0-8.12-.3,27.73,27.73,0,0,0-11.13,8.5,8.15,8.15,0,0,0,.36,10.56,25.91,25.91,0,0,1,2,2.68c1,1.6.46,2.56-1.41,2.71-4,.32-8,.59-11.93,1a38.25,38.25,0,0,0-10.86,2.83,14.07,14.07,0,0,0-1.6,1.05c1.3,0,2.1.07,2.88,0,3.18-.33,6.35-.83,9.53-1,5.11-.31,10.22-.43,15.33-.62,7.27-.28,14.53-.6,21.8-.8,3.19-.08,6.4.12,9.59.12,6.55,0,13.1,0,19.64-.09,2.64,0,5.27-.39,7.9-.41q16.44-.1,32.86-.08c2.24,0,4.47.19,6.7.37a74.13,74.13,0,0,0,12.2.29,77.28,77.28,0,0,1,12-.11,91.91,91.91,0,0,0,13.38.33,41.71,41.71,0,0,1,6.19.41Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud3" d="M256.37,517.46c2.47-1.14,4.65-2.28,6.93-3.13a16.59,16.59,0,0,1,4.68-1c4.18-.26,7.57,1.32,9.58,5.07a6.43,6.43,0,0,0,5.5,3.67c5.5.43,9.57,3.41,13.05,7.31a34.68,34.68,0,0,1,4.07,5.89c.84,1.46,1.37,3.2.25,4.78s-3,1.72-4.78,1.44a170.15,170.15,0,0,0-32.3-1.42c-6.71.27-13.44,0-20.15.12-10.24.18-20.47.55-30.7.72-19,.32-38.07.21-57.09-.75-1.27-.07-2.55-.23-3.82-.26-6.45-.18-12.9-.19-19.33-.53-5-.26-10-.85-15-1.45a14.56,14.56,0,0,1-4.31-1.38c-2.23-1-2.73-3-1.08-4.88a12.12,12.12,0,0,1,4-2.91,42.7,42.7,0,0,1,6-1.79c.76-.21,1.54-.35,2.63-.59-3.37-3.16-3.63-6.71-1.79-10.5a4.83,4.83,0,0,1,3.85-2.94,48.22,48.22,0,0,1,5,0,1.23,1.23,0,0,0,.19-.4c.26-7.33,4.33-12.88,8.5-18.4a5.42,5.42,0,0,1,1-1c2.59-1.87,5.13-3.82,7.81-5.56a33.39,33.39,0,0,1,25-5.24c8.72,1.64,14.91,6.65,17.74,15.33.48,1.5.91,3,1.49,5,.45-.92.74-1.44,1-2a79.92,79.92,0,0,1,8.83-16.45c5.42-7.77,12.6-13.05,22-15.06a18.61,18.61,0,0,1,16.6,4,38.45,38.45,0,0,1,14,24.64,78.34,78.34,0,0,1,.82,18.16C256.34,516.43,256.37,516.9,256.37,517.46Zm42.08,21.36a11.21,11.21,0,0,0-.75-2.7c-3.5-5.77-7.76-10.59-15-11.43a8.77,8.77,0,0,1-7.38-5,6.71,6.71,0,0,0-6.5-3.74,18.58,18.58,0,0,0-4.24.69,15.73,15.73,0,0,0-6.87,3.75c-.76.71-1.64,1.42-2.79.83s-1.22-1.61-1.24-2.68a22.94,22.94,0,0,1,.09-2.87c.67-5.53.12-11-.61-16.49a36.22,36.22,0,0,0-12.81-23.68,16.3,16.3,0,0,0-14.48-3.89c-9.24,1.87-16.11,7.12-21.24,14.81A73.25,73.25,0,0,0,195,506c-.3,1-.61,2.16-1.9,2.16s-1.71-1.22-2-2.32c-.14-.54-.26-1.09-.41-1.63-.54-2-1-4-1.66-6-2.25-7-7.28-11.27-14.21-13-8.3-2-16.21-.41-23.51,3.94a53,53,0,0,0-6.45,4.58c-6.37,5.27-10.35,11.84-10.73,20.31a4.36,4.36,0,0,1-.64,2.65c-1,1-1.83-.3-2.7-.73-3.47-1.72-6.33-.09-6.62,3.77-.17,2.24.52,4,2.82,4.68,1.29.41,1.33,1.4,1.32,2.49s-.76,1.51-1.63,1.79c-.46.14-1,.16-1.41.28-2.71.67-5.45,1.25-8.12,2.06a4.69,4.69,0,0,0-3.59,3.22,30.48,30.48,0,0,0,5.15,1.32c8,.69,16.08,1.32,24.14,1.79,4.7.27,9.42,0,14.12.28,20.78,1.07,41.57,1,62.36.55,9.67-.22,19.35-.47,29-.63,6.08-.11,12.16.09,18.23-.15a155.83,155.83,0,0,1,28.23,1.39A28.27,28.27,0,0,0,298.45,538.82Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud2" d="M527.55,42.36a13.23,13.23,0,0,1,5.27-4.51,22.39,22.39,0,0,1,11.31-1.28,32.52,32.52,0,0,1,13.73,5.33A11.3,11.3,0,0,1,563,48.34c1.81,6.43,2.71,13,1.23,19.64-.29,1.31-.79,2.57-1.22,3.92a7.62,7.62,0,0,0,4.3,1.91c4.78,1,9.56,1.92,14.34,2.89a44.67,44.67,0,0,1,13.63,5.11A13.5,13.5,0,0,1,598,84a3,3,0,0,1,.63,3.53,3.13,3.13,0,0,1-3.17,2.11c-3.9-.2-7.81-.51-11.71-.64a116.08,116.08,0,0,0-12.92-.1,104.51,104.51,0,0,1-18,.37,27.23,27.23,0,0,0-4.49.29,7.77,7.77,0,0,1-.95.08c-4.75-.26-9.41.5-14.08,1.12-.4,0-.8.09-1.2.1-8.46.16-16.93.48-25.4.41-6.39-.06-12.77-.62-19.16-1-7.26-.38-14.53-.74-21.79-1.14-1.91-.11-3.84-.2-5.73-.49s-2.6-1.21-2.62-3.11a5.42,5.42,0,0,1,.16-1.66c1.52-5.16,3.9-9.78,8.19-13.23s9-3.21,13.73-1c1.29.61,2.49,1.42,3.88,2.22.21-.68.4-1.27.58-1.86a22.05,22.05,0,0,1,6.47-10.47c3.42-3,6.81-3.26,10.73-.8.32.2.65.38,1.2.7A45.88,45.88,0,0,1,507,47.6c1.84-3.51,4.27-6.43,8-7.89a17.86,17.86,0,0,1,5.1-1.13,7.3,7.3,0,0,1,6.4,2.65C526.79,41.59,527.13,41.91,527.55,42.36Zm33.13,28a33.21,33.21,0,0,0,1.09-3.38c1.15-5.95.33-11.79-1.19-17.55a8.36,8.36,0,0,0-3.42-4.79c-4.62-3.22-9.64-5.43-15.33-5.59-5-.14-9.73.6-12.56,5.68-1.27,2.27-2.34,2.12-3.71-.25a5.78,5.78,0,0,0-5.9-3.26A11.21,11.21,0,0,0,511,46.12a37.1,37.1,0,0,0-5.88,13.54,7.15,7.15,0,0,0,.68,5.49,7.3,7.3,0,0,1-.2,7.76c-.86,1.45-1.53,1.91-2.33,1.52s-.86-1.14,0-2.71c.77-1.4,1.33-2.88.61-4.34a27.64,27.64,0,0,0-3.48-5.68c-2.06-2.42-5.26-2.5-7.72-.47a17.33,17.33,0,0,0-2.79,3A19.49,19.49,0,0,0,486,73.35c-.35,2.5-1.23,2.79-3.39,1.41A46.08,46.08,0,0,0,478.17,72c-4.58-2.24-8.45-1.61-12.06,2a24.26,24.26,0,0,0-5.86,10.31,9,9,0,0,0-.13,1.88c1,.1,2,.25,2.9.29,7,.34,14.07.56,21.09,1,9,.59,18,1.44,27.06,1.23,3.83-.09,7.67-.26,11.49-.5,6.7-.44,13.39-1,20.09-1.42a69,69,0,0,1,9.09-.15,91.09,91.09,0,0,0,17.24-.19,66.29,66.29,0,0,1,15.55,0c3.09.36,6.21.47,9.32.63a15,15,0,0,0,2.32-.25c-.77-1.92-.8-1.87-2.58-2.89-5.57-3.2-11.74-4.5-17.94-5.79-4.81-1-9.82-1.26-14.47-3.8a13.23,13.23,0,0,1-.91,1.19c-3.1,3.23-7.08,4.23-11.35,4.23a6.82,6.82,0,0,1-6.39-6.08,6.56,6.56,0,0,1,4.81-7.1A12.19,12.19,0,0,1,558,68.36C558.79,68.94,559.61,69.55,560.68,70.32Zm-1.34,2.36c-1.23-.92-2.2-1.75-3.27-2.42A9.4,9.4,0,0,0,548.3,69a3.89,3.89,0,0,0-3,4.27c.13,1.92,1.74,3.82,3.64,3.82C552.85,77.11,556.49,76.23,559.34,72.68Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path><path class="cloud" id="Cloud1" d="M1313.82,164.91c.38-.63.82-1.28,1.19-2,4-7.34,9.38-13.5,15.46-19.13a26.4,26.4,0,0,1,10-5.6,14.61,14.61,0,0,1,5.67-.48,18.69,18.69,0,0,1,12.58,6.27,35,35,0,0,1,2.92,4.57,4.78,4.78,0,0,0,1-.33c5.45-2.76,11.93-.35,15.21,3.08a23.78,23.78,0,0,1,3.33,4.66c1.58,2.77,3,5.64,4.46,8.5,6.29-.56,11.36,1.82,15.43,6.53a7.27,7.27,0,0,1,.85,1.15c.75,1.37.34,2.61-1.18,3a22.5,22.5,0,0,1-4,.44c-6.76.49-13.53.93-20.28,1.47a28.3,28.3,0,0,0-4.71.88c-6.9,1.74-14,1.74-21,1.82-4.87,0-9.74-.26-14.61-.37-1.6,0-3.2,0-4.79.08l-33.09,1.3c-3.59.14-7.19.29-10.78.36a18.82,18.82,0,0,1-3.82-.3c-1.6-.3-2-1.11-2.13-2.69a8.21,8.21,0,0,1,1.59-5.32c4.64-7.69,13.27-11.53,22.71-9.93C1308.45,163.35,1311,164.21,1313.82,164.91Zm38.86,2.34.41.68a27.62,27.62,0,0,0,10.68.34,9.85,9.85,0,0,0,3.08-1.29c1.53-.86,1.66-1.67.73-3.13a6.91,6.91,0,0,0-4.47-3c-2.95-.65-5.95-1.05-8.94-1.5-.74-.11-1.64-.08-1.68-1a2.61,2.61,0,0,1,.92-1.73,16.45,16.45,0,0,1,2.37-1.61c4-2.55,3.45-6.79.9-9.42a17.93,17.93,0,0,0-12.42-5.47,7.56,7.56,0,0,0-4.94,1.53,7.74,7.74,0,0,1-2.87,1.65,7.22,7.22,0,0,0-3.53,1.86,53.22,53.22,0,0,0-4.05,3.74c-4.54,4.95-9,10-12,16.07-1.53,3-2.19,3-5.36,2.12a39.69,39.69,0,0,0-8.39-1.82c-7.91-.46-14.2,2.5-18.2,9.61a3.23,3.23,0,0,0-.34,3.37c3.33,0,6.6.09,9.87,0,8.07-.25,16.13-.71,24.21-.85s16-1.4,24.07-.3a51.41,51.41,0,0,0,8.14,0c6.71-.16,13.42-.17,20-1.7a73.73,73.73,0,0,1,17.33-2.05c3.11,0,6.23-.3,9.34-.49a9.25,9.25,0,0,0,1.31-.28,9.87,9.87,0,0,0-1-1.23c-3.48-3.08-7.28-5.19-12.19-4a2,2,0,0,1-2.59-1.12c-1.37-3.05-2.76-6.09-4.25-9.08a11.53,11.53,0,0,0-4.39-5.28,18.3,18.3,0,0,0-5.31-2.06,8.23,8.23,0,0,0-8,2.74,31.06,31.06,0,0,0-2.74,4.3c1.75.45,3.59.88,5.4,1.41a10.47,10.47,0,0,1,5.43,3.35c2.64,3.27,2.09,6.13-1.66,8-5.2,2.56-10.56,1.93-15.91.55a2,2,0,0,1-1.2-.74,4.3,4.3,0,0,1-.65-2.15,4,4,0,0,1,3-2.73,1.58,1.58,0,0,1,1.22.49,1.39,1.39,0,0,1,0,1.3A4.8,4.8,0,0,1,1352.68,167.25Z" transform="translate(-110.86 -24.33)" data-v-c388597b></path></g></svg>',
    1
  ),
  q4 = [Z4],
  U4 = {
    __name: "Footer",
    setup(u) {
      return (
        tt(() => {
          s0.to(clouds, {
            duration: 30,
            xPercent: "-=100",
            ease: "none",
            repeat: -1,
          }),
            s0.from("#clouds2", {
              duration: 30,
              xPercent: "+=100",
              ease: "none",
              repeat: -1,
            });
        }),
        (t, e) => (I1(), N1("div", V4, q4))
      );
    },
  },
  Y4 = V0(U4, [["__scopeId", "data-v-c388597b"]]),
  K4 = {
    __name: "Home",
    setup(u) {
      const t = it();
      return (
        Z0(async () => {
          t.isAuth ||
            (console.log("user aren't logged: \xBFD\xF3nde vas pimpim?"),
            Y0.push("/login"));
        }),
        (e, i) => {
          const r = q0("RouterView");
          return I1(), N1(et, null, [L1(kt), L1(r), L1(Y4)], 64);
        }
      );
    },
  };
export { K4 as default };
