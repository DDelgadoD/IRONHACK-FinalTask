import { m as ae } from "./index.4bfbbcf5.js";
function Ye(i, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in i)) {
          const n = Object.getOwnPropertyDescriptor(r, s);
          n &&
            Object.defineProperty(
              i,
              s,
              n.get ? n : { enumerable: !0, get: () => r[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(i, Symbol.toStringTag, { value: "Module" })
  );
}
var Ze =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
const Qe = (i) => {
  let e;
  return (
    i
      ? (e = i)
      : typeof fetch > "u"
      ? (e = (...t) =>
          Ze(void 0, void 0, void 0, function* () {
            return yield (yield ae(
              () => Promise.resolve().then(() => ce),
              void 0
            )).fetch(...t);
          }))
      : (e = fetch),
    (...t) => e(...t)
  );
};
class Te extends Error {
  constructor(e, t = "FunctionsError", r) {
    super(e), (super.name = t), (this.context = r);
  }
}
class et extends Te {
  constructor(e) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      e
    );
  }
}
class tt extends Te {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class rt extends Te {
  constructor(e) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      e
    );
  }
}
var st =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
class it {
  constructor(e, { headers: t = {}, customFetch: r } = {}) {
    (this.url = e), (this.headers = t), (this.fetch = Qe(r));
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e, t = {}) {
    var r;
    return st(this, void 0, void 0, function* () {
      try {
        const { headers: s, body: n } = t;
        let o = {},
          a;
        n &&
          ((s && !Object.prototype.hasOwnProperty.call(s, "Content-Type")) ||
            !s) &&
          ((typeof Blob < "u" && n instanceof Blob) || n instanceof ArrayBuffer
            ? ((o["Content-Type"] = "application/octet-stream"), (a = n))
            : typeof n == "string"
            ? ((o["Content-Type"] = "text/plain"), (a = n))
            : typeof FormData < "u" && n instanceof FormData
            ? (a = n)
            : ((o["Content-Type"] = "application/json"),
              (a = JSON.stringify(n))));
        const u = yield this.fetch(`${this.url}/${e}`, {
            method: "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, o), this.headers),
              s
            ),
            body: a,
          }).catch((m) => {
            throw new et(m);
          }),
          h = u.headers.get("x-relay-error");
        if (h && h === "true") throw new tt(u);
        if (!u.ok) throw new rt(u);
        let c = (
            (r = u.headers.get("Content-Type")) !== null && r !== void 0
              ? r
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          d;
        return (
          c === "application/json"
            ? (d = yield u.json())
            : c === "application/octet-stream"
            ? (d = yield u.blob())
            : c === "multipart/form-data"
            ? (d = yield u.formData())
            : (d = yield u.text()),
          { data: d, error: null }
        );
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
}
var nt =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ot(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var te = { exports: {} };
(function (i, e) {
  var t = typeof self < "u" ? self : nt,
    r = (function () {
      function n() {
        (this.fetch = !1), (this.DOMException = t.DOMException);
      }
      return (n.prototype = t), new n();
    })();
  (function (n) {
    (function (o) {
      var a = {
        searchParams: "URLSearchParams" in n,
        iterable: "Symbol" in n && "iterator" in Symbol,
        blob:
          "FileReader" in n &&
          "Blob" in n &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in n,
        arrayBuffer: "ArrayBuffer" in n,
      };
      function u(l) {
        return l && DataView.prototype.isPrototypeOf(l);
      }
      if (a.arrayBuffer)
        var h = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          c =
            ArrayBuffer.isView ||
            function (l) {
              return l && h.indexOf(Object.prototype.toString.call(l)) > -1;
            };
      function d(l) {
        if (
          (typeof l != "string" && (l = String(l)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(l))
        )
          throw new TypeError("Invalid character in header field name");
        return l.toLowerCase();
      }
      function m(l) {
        return typeof l != "string" && (l = String(l)), l;
      }
      function y(l) {
        var f = {
          next: function () {
            var _ = l.shift();
            return { done: _ === void 0, value: _ };
          },
        };
        return (
          a.iterable &&
            (f[Symbol.iterator] = function () {
              return f;
            }),
          f
        );
      }
      function p(l) {
        (this.map = {}),
          l instanceof p
            ? l.forEach(function (f, _) {
                this.append(_, f);
              }, this)
            : Array.isArray(l)
            ? l.forEach(function (f) {
                this.append(f[0], f[1]);
              }, this)
            : l &&
              Object.getOwnPropertyNames(l).forEach(function (f) {
                this.append(f, l[f]);
              }, this);
      }
      (p.prototype.append = function (l, f) {
        (l = d(l)), (f = m(f));
        var _ = this.map[l];
        this.map[l] = _ ? _ + ", " + f : f;
      }),
        (p.prototype.delete = function (l) {
          delete this.map[d(l)];
        }),
        (p.prototype.get = function (l) {
          return (l = d(l)), this.has(l) ? this.map[l] : null;
        }),
        (p.prototype.has = function (l) {
          return this.map.hasOwnProperty(d(l));
        }),
        (p.prototype.set = function (l, f) {
          this.map[d(l)] = m(f);
        }),
        (p.prototype.forEach = function (l, f) {
          for (var _ in this.map)
            this.map.hasOwnProperty(_) && l.call(f, this.map[_], _, this);
        }),
        (p.prototype.keys = function () {
          var l = [];
          return (
            this.forEach(function (f, _) {
              l.push(_);
            }),
            y(l)
          );
        }),
        (p.prototype.values = function () {
          var l = [];
          return (
            this.forEach(function (f) {
              l.push(f);
            }),
            y(l)
          );
        }),
        (p.prototype.entries = function () {
          var l = [];
          return (
            this.forEach(function (f, _) {
              l.push([_, f]);
            }),
            y(l)
          );
        }),
        a.iterable && (p.prototype[Symbol.iterator] = p.prototype.entries);
      function g(l) {
        if (l.bodyUsed) return Promise.reject(new TypeError("Already read"));
        l.bodyUsed = !0;
      }
      function v(l) {
        return new Promise(function (f, _) {
          (l.onload = function () {
            f(l.result);
          }),
            (l.onerror = function () {
              _(l.error);
            });
        });
      }
      function k(l) {
        var f = new FileReader(),
          _ = v(f);
        return f.readAsArrayBuffer(l), _;
      }
      function U(l) {
        var f = new FileReader(),
          _ = v(f);
        return f.readAsText(l), _;
      }
      function L(l) {
        for (
          var f = new Uint8Array(l), _ = new Array(f.length), $ = 0;
          $ < f.length;
          $++
        )
          _[$] = String.fromCharCode(f[$]);
        return _.join("");
      }
      function S(l) {
        if (l.slice) return l.slice(0);
        var f = new Uint8Array(l.byteLength);
        return f.set(new Uint8Array(l)), f.buffer;
      }
      function N() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (l) {
            (this._bodyInit = l),
              l
                ? typeof l == "string"
                  ? (this._bodyText = l)
                  : a.blob && Blob.prototype.isPrototypeOf(l)
                  ? (this._bodyBlob = l)
                  : a.formData && FormData.prototype.isPrototypeOf(l)
                  ? (this._bodyFormData = l)
                  : a.searchParams && URLSearchParams.prototype.isPrototypeOf(l)
                  ? (this._bodyText = l.toString())
                  : a.arrayBuffer && a.blob && u(l)
                  ? ((this._bodyArrayBuffer = S(l.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : a.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(l) || c(l))
                  ? (this._bodyArrayBuffer = S(l))
                  : (this._bodyText = l = Object.prototype.toString.call(l))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof l == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : a.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(l) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          a.blob &&
            ((this.blob = function () {
              var l = g(this);
              if (l) return l;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? g(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(k);
            })),
          (this.text = function () {
            var l = g(this);
            if (l) return l;
            if (this._bodyBlob) return U(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(L(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          a.formData &&
            (this.formData = function () {
              return this.text().then(We);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var Ge = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function Ve(l) {
        var f = l.toUpperCase();
        return Ge.indexOf(f) > -1 ? f : l;
      }
      function M(l, f) {
        f = f || {};
        var _ = f.body;
        if (l instanceof M) {
          if (l.bodyUsed) throw new TypeError("Already read");
          (this.url = l.url),
            (this.credentials = l.credentials),
            f.headers || (this.headers = new p(l.headers)),
            (this.method = l.method),
            (this.mode = l.mode),
            (this.signal = l.signal),
            !_ && l._bodyInit != null && ((_ = l._bodyInit), (l.bodyUsed = !0));
        } else this.url = String(l);
        if (
          ((this.credentials =
            f.credentials || this.credentials || "same-origin"),
          (f.headers || !this.headers) && (this.headers = new p(f.headers)),
          (this.method = Ve(f.method || this.method || "GET")),
          (this.mode = f.mode || this.mode || null),
          (this.signal = f.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && _)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(_);
      }
      M.prototype.clone = function () {
        return new M(this, { body: this._bodyInit });
      };
      function We(l) {
        var f = new FormData();
        return (
          l
            .trim()
            .split("&")
            .forEach(function (_) {
              if (_) {
                var $ = _.split("="),
                  j = $.shift().replace(/\+/g, " "),
                  w = $.join("=").replace(/\+/g, " ");
                f.append(decodeURIComponent(j), decodeURIComponent(w));
              }
            }),
          f
        );
      }
      function Ke(l) {
        var f = new p(),
          _ = l.replace(/\r?\n[\t ]+/g, " ");
        return (
          _.split(/\r?\n/).forEach(function ($) {
            var j = $.split(":"),
              w = j.shift().trim();
            if (w) {
              var se = j.join(":").trim();
              f.append(w, se);
            }
          }),
          f
        );
      }
      N.call(M.prototype);
      function I(l, f) {
        f || (f = {}),
          (this.type = "default"),
          (this.status = f.status === void 0 ? 200 : f.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in f ? f.statusText : "OK"),
          (this.headers = new p(f.headers)),
          (this.url = f.url || ""),
          this._initBody(l);
      }
      N.call(I.prototype),
        (I.prototype.clone = function () {
          return new I(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url,
          });
        }),
        (I.error = function () {
          var l = new I(null, { status: 0, statusText: "" });
          return (l.type = "error"), l;
        });
      var Xe = [301, 302, 303, 307, 308];
      (I.redirect = function (l, f) {
        if (Xe.indexOf(f) === -1) throw new RangeError("Invalid status code");
        return new I(null, { status: f, headers: { location: l } });
      }),
        (o.DOMException = n.DOMException);
      try {
        new o.DOMException();
      } catch {
        (o.DOMException = function (f, _) {
          (this.message = f), (this.name = _);
          var $ = Error(f);
          this.stack = $.stack;
        }),
          (o.DOMException.prototype = Object.create(Error.prototype)),
          (o.DOMException.prototype.constructor = o.DOMException);
      }
      function fe(l, f) {
        return new Promise(function (_, $) {
          var j = new M(l, f);
          if (j.signal && j.signal.aborted)
            return $(new o.DOMException("Aborted", "AbortError"));
          var w = new XMLHttpRequest();
          function se() {
            w.abort();
          }
          (w.onload = function () {
            var Y = {
              status: w.status,
              statusText: w.statusText,
              headers: Ke(w.getAllResponseHeaders() || ""),
            };
            Y.url =
              "responseURL" in w
                ? w.responseURL
                : Y.headers.get("X-Request-URL");
            var pe = "response" in w ? w.response : w.responseText;
            _(new I(pe, Y));
          }),
            (w.onerror = function () {
              $(new TypeError("Network request failed"));
            }),
            (w.ontimeout = function () {
              $(new TypeError("Network request failed"));
            }),
            (w.onabort = function () {
              $(new o.DOMException("Aborted", "AbortError"));
            }),
            w.open(j.method, j.url, !0),
            j.credentials === "include"
              ? (w.withCredentials = !0)
              : j.credentials === "omit" && (w.withCredentials = !1),
            "responseType" in w && a.blob && (w.responseType = "blob"),
            j.headers.forEach(function (Y, pe) {
              w.setRequestHeader(pe, Y);
            }),
            j.signal &&
              (j.signal.addEventListener("abort", se),
              (w.onreadystatechange = function () {
                w.readyState === 4 && j.signal.removeEventListener("abort", se);
              })),
            w.send(typeof j._bodyInit > "u" ? null : j._bodyInit);
        });
      }
      return (
        (fe.polyfill = !0),
        n.fetch ||
          ((n.fetch = fe), (n.Headers = p), (n.Request = M), (n.Response = I)),
        (o.Headers = p),
        (o.Request = M),
        (o.Response = I),
        (o.fetch = fe),
        Object.defineProperty(o, "__esModule", { value: !0 }),
        o
      );
    })({});
  })(r),
    (r.fetch.ponyfill = !0),
    delete r.fetch.polyfill;
  var s = r;
  (e = s.fetch),
    (e.default = s.fetch),
    (e.fetch = s.fetch),
    (e.Headers = s.Headers),
    (e.Request = s.Request),
    (e.Response = s.Response),
    (i.exports = e);
})(te, te.exports);
const Ee = ot(te.exports),
  ce = Ye({ __proto__: null, default: Ee }, [te.exports]);
var at =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
class ct {
  constructor(e) {
    (this.shouldThrowOnError = !1),
      (this.method = e.method),
      (this.url = e.url),
      (this.headers = e.headers),
      (this.schema = e.schema),
      (this.body = e.body),
      (this.shouldThrowOnError = e.shouldThrowOnError),
      (this.signal = e.signal),
      (this.allowEmpty = e.allowEmpty),
      e.fetch
        ? (this.fetch = e.fetch)
        : typeof fetch > "u"
        ? (this.fetch = Ee)
        : (this.fetch = fetch);
  }
  throwOnError() {
    return (this.shouldThrowOnError = !0), this;
  }
  then(e, t) {
    this.schema === void 0 ||
      (["GET", "HEAD"].includes(this.method)
        ? (this.headers["Accept-Profile"] = this.schema)
        : (this.headers["Content-Profile"] = this.schema)),
      this.method !== "GET" &&
        this.method !== "HEAD" &&
        (this.headers["Content-Type"] = "application/json");
    const r = this.fetch;
    let s = r(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal,
    }).then((n) =>
      at(this, void 0, void 0, function* () {
        var o, a, u;
        let h = null,
          c = null,
          d = null,
          m = n.status,
          y = n.statusText;
        if (n.ok) {
          if (this.method !== "HEAD") {
            const k = yield n.text();
            k === "" ||
              (this.headers.Accept === "text/csv" ||
              (this.headers.Accept &&
                this.headers.Accept.includes("application/vnd.pgrst.plan+text"))
                ? (c = k)
                : (c = JSON.parse(k)));
          }
          const g =
              (o = this.headers.Prefer) === null || o === void 0
                ? void 0
                : o.match(/count=(exact|planned|estimated)/),
            v =
              (a = n.headers.get("content-range")) === null || a === void 0
                ? void 0
                : a.split("/");
          g && v && v.length > 1 && (d = parseInt(v[1]));
        } else {
          const g = yield n.text();
          try {
            h = JSON.parse(g);
          } catch {
            h = { message: g };
          }
          if (
            (h &&
              this.allowEmpty &&
              ((u = h == null ? void 0 : h.details) === null || u === void 0
                ? void 0
                : u.includes("Results contain 0 rows")) &&
              ((h = null), (m = 200), (y = "OK")),
            h && this.shouldThrowOnError)
          )
            throw h;
        }
        return { error: h, data: c, count: d, status: m, statusText: y };
      })
    );
    return (
      this.shouldThrowOnError ||
        (s = s.catch((n) => ({
          error: {
            message: `FetchError: ${n.message}`,
            details: "",
            hint: "",
            code: n.code || "",
          },
          data: null,
          count: null,
          status: 0,
          statusText: "",
        }))),
      s.then(e, t)
    );
  }
}
class ht extends ct {
  select(e) {
    let t = !1;
    const r = (e != null ? e : "*")
      .split("")
      .map((s) => (/\s/.test(s) && !t ? "" : (s === '"' && (t = !t), s)))
      .join("");
    return (
      this.url.searchParams.set("select", r),
      this.headers.Prefer && (this.headers.Prefer += ","),
      (this.headers.Prefer += "return=representation"),
      this
    );
  }
  order(e, { ascending: t = !0, nullsFirst: r, foreignTable: s } = {}) {
    const n = s ? `${s}.order` : "order",
      o = this.url.searchParams.get(n);
    return (
      this.url.searchParams.set(
        n,
        `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${
          r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"
        }`
      ),
      this
    );
  }
  limit(e, { foreignTable: t } = {}) {
    const r = typeof t > "u" ? "limit" : `${t}.limit`;
    return this.url.searchParams.set(r, `${e}`), this;
  }
  range(e, t, { foreignTable: r } = {}) {
    const s = typeof r > "u" ? "offset" : `${r}.offset`,
      n = typeof r > "u" ? "limit" : `${r}.limit`;
    return (
      this.url.searchParams.set(s, `${e}`),
      this.url.searchParams.set(n, `${t - e + 1}`),
      this
    );
  }
  abortSignal(e) {
    return (this.signal = e), this;
  }
  single() {
    return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
  }
  maybeSingle() {
    return (
      (this.headers.Accept = "application/vnd.pgrst.object+json"),
      (this.allowEmpty = !0),
      this
    );
  }
  csv() {
    return (this.headers.Accept = "text/csv"), this;
  }
  geojson() {
    return (this.headers.Accept = "application/geo+json"), this;
  }
  explain({
    analyze: e = !1,
    verbose: t = !1,
    settings: r = !1,
    buffers: s = !1,
    wal: n = !1,
    format: o = "text",
  } = {}) {
    const a = [
        e ? "analyze" : null,
        t ? "verbose" : null,
        r ? "settings" : null,
        s ? "buffers" : null,
        n ? "wal" : null,
      ]
        .filter(Boolean)
        .join("|"),
      u = this.headers.Accept;
    return (
      (this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${u}"; options=${a};`),
      o === "json" ? this : this
    );
  }
  rollback() {
    var e;
    return (
      ((e = this.headers.Prefer) !== null && e !== void 0 ? e : "").trim()
        .length > 0
        ? (this.headers.Prefer += ",tx=rollback")
        : (this.headers.Prefer = "tx=rollback"),
      this
    );
  }
  returns() {
    return this;
  }
}
class W extends ht {
  eq(e, t) {
    return this.url.searchParams.append(e, `eq.${t}`), this;
  }
  neq(e, t) {
    return this.url.searchParams.append(e, `neq.${t}`), this;
  }
  gt(e, t) {
    return this.url.searchParams.append(e, `gt.${t}`), this;
  }
  gte(e, t) {
    return this.url.searchParams.append(e, `gte.${t}`), this;
  }
  lt(e, t) {
    return this.url.searchParams.append(e, `lt.${t}`), this;
  }
  lte(e, t) {
    return this.url.searchParams.append(e, `lte.${t}`), this;
  }
  like(e, t) {
    return this.url.searchParams.append(e, `like.${t}`), this;
  }
  ilike(e, t) {
    return this.url.searchParams.append(e, `ilike.${t}`), this;
  }
  is(e, t) {
    return this.url.searchParams.append(e, `is.${t}`), this;
  }
  in(e, t) {
    const r = t
      .map((s) =>
        typeof s == "string" && new RegExp("[,()]").test(s) ? `"${s}"` : `${s}`
      )
      .join(",");
    return this.url.searchParams.append(e, `in.(${r})`), this;
  }
  contains(e, t) {
    return (
      typeof t == "string"
        ? this.url.searchParams.append(e, `cs.${t}`)
        : Array.isArray(t)
        ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
        : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
      this
    );
  }
  containedBy(e, t) {
    return (
      typeof t == "string"
        ? this.url.searchParams.append(e, `cd.${t}`)
        : Array.isArray(t)
        ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
        : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
      this
    );
  }
  rangeGt(e, t) {
    return this.url.searchParams.append(e, `sr.${t}`), this;
  }
  rangeGte(e, t) {
    return this.url.searchParams.append(e, `nxl.${t}`), this;
  }
  rangeLt(e, t) {
    return this.url.searchParams.append(e, `sl.${t}`), this;
  }
  rangeLte(e, t) {
    return this.url.searchParams.append(e, `nxr.${t}`), this;
  }
  rangeAdjacent(e, t) {
    return this.url.searchParams.append(e, `adj.${t}`), this;
  }
  overlaps(e, t) {
    return (
      typeof t == "string"
        ? this.url.searchParams.append(e, `ov.${t}`)
        : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
      this
    );
  }
  textSearch(e, t, { config: r, type: s } = {}) {
    let n = "";
    s === "plain"
      ? (n = "pl")
      : s === "phrase"
      ? (n = "ph")
      : s === "websearch" && (n = "w");
    const o = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(e, `${n}fts${o}.${t}`), this;
  }
  match(e) {
    return (
      Object.entries(e).forEach(([t, r]) => {
        this.url.searchParams.append(t, `eq.${r}`);
      }),
      this
    );
  }
  not(e, t, r) {
    return this.url.searchParams.append(e, `not.${t}.${r}`), this;
  }
  or(e, { foreignTable: t } = {}) {
    const r = t ? `${t}.or` : "or";
    return this.url.searchParams.append(r, `(${e})`), this;
  }
  filter(e, t, r) {
    return this.url.searchParams.append(e, `${t}.${r}`), this;
  }
}
class lt {
  constructor(e, { headers: t = {}, schema: r, fetch: s }) {
    (this.url = e), (this.headers = t), (this.schema = r), (this.fetch = s);
  }
  select(e, { head: t = !1, count: r } = {}) {
    const s = t ? "HEAD" : "GET";
    let n = !1;
    const o = (e != null ? e : "*")
      .split("")
      .map((a) => (/\s/.test(a) && !n ? "" : (a === '"' && (n = !n), a)))
      .join("");
    return (
      this.url.searchParams.set("select", o),
      r && (this.headers.Prefer = `count=${r}`),
      new W({
        method: s,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  insert(e, { count: t } = {}) {
    const r = "POST",
      s = [],
      n = e;
    if (
      (t && s.push(`count=${t}`),
      this.headers.Prefer && s.unshift(this.headers.Prefer),
      (this.headers.Prefer = s.join(",")),
      Array.isArray(e))
    ) {
      const o = e.reduce((a, u) => a.concat(Object.keys(u)), []);
      if (o.length > 0) {
        const a = [...new Set(o)].map((u) => `"${u}"`);
        this.url.searchParams.set("columns", a.join(","));
      }
    }
    return new W({
      method: r,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: n,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  upsert(e, { onConflict: t, ignoreDuplicates: r = !1, count: s } = {}) {
    const n = "POST",
      o = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
    t !== void 0 && this.url.searchParams.set("on_conflict", t);
    const a = e;
    return (
      s && o.push(`count=${s}`),
      this.headers.Prefer && o.unshift(this.headers.Prefer),
      (this.headers.Prefer = o.join(",")),
      new W({
        method: n,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: a,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  update(e, { count: t } = {}) {
    const r = "PATCH",
      s = [],
      n = e;
    return (
      t && s.push(`count=${t}`),
      this.headers.Prefer && s.unshift(this.headers.Prefer),
      (this.headers.Prefer = s.join(",")),
      new W({
        method: r,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: n,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  delete({ count: e } = {}) {
    const t = "DELETE",
      r = [];
    return (
      e && r.push(`count=${e}`),
      this.headers.Prefer && r.unshift(this.headers.Prefer),
      (this.headers.Prefer = r.join(",")),
      new W({
        method: t,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
}
const ut = "1.1.0",
  dt = { "X-Client-Info": `postgrest-js/${ut}` };
class ft {
  constructor(e, { headers: t = {}, schema: r, fetch: s } = {}) {
    (this.url = e),
      (this.headers = Object.assign(Object.assign({}, dt), t)),
      (this.schema = r),
      (this.fetch = s);
  }
  from(e) {
    const t = new URL(`${this.url}/${e}`);
    return new lt(t, {
      headers: Object.assign({}, this.headers),
      schema: this.schema,
      fetch: this.fetch,
    });
  }
  rpc(e, t = {}, { head: r = !1, count: s } = {}) {
    let n;
    const o = new URL(`${this.url}/rpc/${e}`);
    let a;
    r
      ? ((n = "HEAD"),
        Object.entries(t).forEach(([h, c]) => {
          o.searchParams.append(h, `${c}`);
        }))
      : ((n = "POST"), (a = t));
    const u = Object.assign({}, this.headers);
    return (
      s && (u.Prefer = `count=${s}`),
      new W({
        method: n,
        url: o,
        headers: u,
        schema: this.schema,
        body: a,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
}
var ve, Se;
function pt() {
  if (Se) return ve;
  Se = 1;
  var i = function () {
    if (typeof self == "object" && self) return self;
    if (typeof window == "object" && window) return window;
    throw new Error("Unable to resolve global `this`");
  };
  return (
    (ve = (function () {
      if (this) return this;
      if (typeof globalThis == "object" && globalThis) return globalThis;
      try {
        Object.defineProperty(Object.prototype, "__global__", {
          get: function () {
            return this;
          },
          configurable: !0,
        });
      } catch {
        return i();
      }
      try {
        return __global__ || i();
      } finally {
        delete Object.prototype.__global__;
      }
    })()),
    ve
  );
}
const vt = "websocket",
  _t =
    "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
  yt = [
    "websocket",
    "websockets",
    "socket",
    "networking",
    "comet",
    "push",
    "RFC-6455",
    "realtime",
    "server",
    "client",
  ],
  mt =
    "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
  gt = ["I\xF1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],
  bt = "1.0.34",
  wt = {
    type: "git",
    url: "https://github.com/theturtle32/WebSocket-Node.git",
  },
  Tt = "https://github.com/theturtle32/WebSocket-Node",
  Et = { node: ">=4.0.0" },
  Ot = {
    bufferutil: "^4.0.1",
    debug: "^2.2.0",
    "es5-ext": "^0.10.50",
    "typedarray-to-buffer": "^3.1.5",
    "utf-8-validate": "^5.0.2",
    yaeti: "^0.0.6",
  },
  kt = {
    "buffer-equal": "^1.0.0",
    gulp: "^4.0.2",
    "gulp-jshint": "^2.0.4",
    "jshint-stylish": "^2.2.1",
    jshint: "^2.0.0",
    tape: "^4.9.1",
  },
  jt = { verbose: !1 },
  St = { test: "tape test/unit/*.js", gulp: "gulp" },
  $t = "index",
  Rt = { lib: "./lib" },
  xt = "lib/browser.js",
  At = "Apache-2.0",
  Pt = {
    name: vt,
    description: _t,
    keywords: yt,
    author: mt,
    contributors: gt,
    version: bt,
    repository: wt,
    homepage: Tt,
    engines: Et,
    dependencies: Ot,
    devDependencies: kt,
    config: jt,
    scripts: St,
    main: $t,
    directories: Rt,
    browser: xt,
    license: At,
  };
var It = Pt.version,
  J;
if (typeof globalThis == "object") J = globalThis;
else
  try {
    J = pt();
  } catch {
  } finally {
    if ((!J && typeof window < "u" && (J = window), !J))
      throw new Error("Could not determine global this");
  }
var re = J.WebSocket || J.MozWebSocket,
  Dt = It;
function Ue(i, e) {
  var t;
  return e ? (t = new re(i, e)) : (t = new re(i)), t;
}
re &&
  ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (i) {
    Object.defineProperty(Ue, i, {
      get: function () {
        return re[i];
      },
    });
  });
var Ct = { w3cwebsocket: re ? Ue : null, version: Dt };
const Ut = "2.1.0",
  Lt = { "X-Client-Info": `realtime-js/${Ut}` },
  Ft = "1.0.0",
  Le = 1e4,
  Bt = 1e3;
var Q;
(function (i) {
  (i[(i.connecting = 0)] = "connecting"),
    (i[(i.open = 1)] = "open"),
    (i[(i.closing = 2)] = "closing"),
    (i[(i.closed = 3)] = "closed");
})(Q || (Q = {}));
var x;
(function (i) {
  (i.closed = "closed"),
    (i.errored = "errored"),
    (i.joined = "joined"),
    (i.joining = "joining"),
    (i.leaving = "leaving");
})(x || (x = {}));
var P;
(function (i) {
  (i.close = "phx_close"),
    (i.error = "phx_error"),
    (i.join = "phx_join"),
    (i.reply = "phx_reply"),
    (i.leave = "phx_leave"),
    (i.access_token = "access_token");
})(P || (P = {}));
var ge;
(function (i) {
  i.websocket = "websocket";
})(ge || (ge = {}));
var H;
(function (i) {
  (i.Connecting = "connecting"),
    (i.Open = "open"),
    (i.Closing = "closing"),
    (i.Closed = "closed");
})(H || (H = {}));
class Fe {
  constructor(e, t) {
    (this.callback = e),
      (this.timerCalc = t),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = e),
      (this.timerCalc = t);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
class Nt {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(e, t) {
    return e.constructor === ArrayBuffer
      ? t(this._binaryDecode(e))
      : t(typeof e == "string" ? JSON.parse(e) : {});
  }
  _binaryDecode(e) {
    const t = new DataView(e),
      r = new TextDecoder();
    return this._decodeBroadcast(e, t, r);
  }
  _decodeBroadcast(e, t, r) {
    const s = t.getUint8(1),
      n = t.getUint8(2);
    let o = this.HEADER_LENGTH + 2;
    const a = r.decode(e.slice(o, o + s));
    o = o + s;
    const u = r.decode(e.slice(o, o + n));
    o = o + n;
    const h = JSON.parse(r.decode(e.slice(o, e.byteLength)));
    return { ref: null, topic: a, event: u, payload: h };
  }
}
class _e {
  constructor(e, t, r = {}, s = Le) {
    (this.channel = e),
      (this.event = t),
      (this.payload = r),
      (this.timeout = s),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null),
      (this.rateLimited = !1);
  }
  resend(e) {
    (this.timeout = e),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    if (this._hasReceived("timeout")) return;
    this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }) === "rate limited" && (this.rateLimited = !0);
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, t) {
    var r;
    return (
      this._hasReceived(e) &&
        t(
          (r = this.receivedResp) === null || r === void 0 ? void 0 : r.response
        ),
      this.recHooks.push({ status: e, callback: t }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const e = (t) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = t),
        this._matchReceive(t);
    };
    this.channel._on(this.refEvent, {}, e),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout));
  }
  trigger(e, t) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: e, response: t });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    !this.refEvent || this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: e, response: t }) {
    this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var $e;
(function (i) {
  (i.SYNC = "sync"), (i.JOIN = "join"), (i.LEAVE = "leave");
})($e || ($e = {}));
class ee {
  constructor(e, t) {
    (this.channel = e),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const r = (t == null ? void 0 : t.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    this.channel._on(r.state, {}, (s) => {
      const { onJoin: n, onLeave: o, onSync: a } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = ee.syncState(this.state, s, n, o)),
        this.pendingDiffs.forEach((u) => {
          this.state = ee.syncDiff(this.state, u, n, o);
        }),
        (this.pendingDiffs = []),
        a();
    }),
      this.channel._on(r.diff, {}, (s) => {
        const { onJoin: n, onLeave: o, onSync: a } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(s)
          : ((this.state = ee.syncDiff(this.state, s, n, o)), a());
      }),
      this.onJoin((s, n, o) => {
        this.channel._trigger("presence", {
          event: "join",
          key: s,
          currentPresences: n,
          newPresences: o,
        });
      }),
      this.onLeave((s, n, o) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: s,
          currentPresences: n,
          leftPresences: o,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
  }
  static syncState(e, t, r, s) {
    const n = this.cloneDeep(e),
      o = this.transformState(t),
      a = {},
      u = {};
    return (
      this.map(n, (h, c) => {
        o[h] || (u[h] = c);
      }),
      this.map(o, (h, c) => {
        const d = n[h];
        if (d) {
          const m = c.map((v) => v.presence_ref),
            y = d.map((v) => v.presence_ref),
            p = c.filter((v) => y.indexOf(v.presence_ref) < 0),
            g = d.filter((v) => m.indexOf(v.presence_ref) < 0);
          p.length > 0 && (a[h] = p), g.length > 0 && (u[h] = g);
        } else a[h] = c;
      }),
      this.syncDiff(n, { joins: a, leaves: u }, r, s)
    );
  }
  static syncDiff(e, t, r, s) {
    const { joins: n, leaves: o } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves),
    };
    return (
      r || (r = () => {}),
      s || (s = () => {}),
      this.map(n, (a, u) => {
        var h;
        const c = (h = e[a]) !== null && h !== void 0 ? h : [];
        if (((e[a] = this.cloneDeep(u)), c.length > 0)) {
          const d = e[a].map((y) => y.presence_ref),
            m = c.filter((y) => d.indexOf(y.presence_ref) < 0);
          e[a].unshift(...m);
        }
        r(a, c, u);
      }),
      this.map(o, (a, u) => {
        let h = e[a];
        if (!h) return;
        const c = u.map((d) => d.presence_ref);
        (h = h.filter((d) => c.indexOf(d.presence_ref) < 0)),
          (e[a] = h),
          s(a, h, u),
          h.length === 0 && delete e[a];
      }),
      e
    );
  }
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
  }
  static transformState(e) {
    return (
      (e = this.cloneDeep(e)),
      Object.getOwnPropertyNames(e).reduce((t, r) => {
        const s = e[r];
        return (
          "metas" in s
            ? (t[r] = s.metas.map(
                (n) => (
                  (n.presence_ref = n.phx_ref),
                  delete n.phx_ref,
                  delete n.phx_ref_prev,
                  n
                )
              ))
            : (t[r] = s),
          t
        );
      }, {})
    );
  }
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  onJoin(e) {
    this.caller.onJoin = e;
  }
  onLeave(e) {
    this.caller.onLeave = e;
  }
  onSync(e) {
    this.caller.onSync = e;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var T;
(function (i) {
  (i.abstime = "abstime"),
    (i.bool = "bool"),
    (i.date = "date"),
    (i.daterange = "daterange"),
    (i.float4 = "float4"),
    (i.float8 = "float8"),
    (i.int2 = "int2"),
    (i.int4 = "int4"),
    (i.int4range = "int4range"),
    (i.int8 = "int8"),
    (i.int8range = "int8range"),
    (i.json = "json"),
    (i.jsonb = "jsonb"),
    (i.money = "money"),
    (i.numeric = "numeric"),
    (i.oid = "oid"),
    (i.reltime = "reltime"),
    (i.text = "text"),
    (i.time = "time"),
    (i.timestamp = "timestamp"),
    (i.timestamptz = "timestamptz"),
    (i.timetz = "timetz"),
    (i.tsrange = "tsrange"),
    (i.tstzrange = "tstzrange");
})(T || (T = {}));
const Re = (i, e, t = {}) => {
    var r;
    const s = (r = t.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(e).reduce((n, o) => ((n[o] = Mt(o, i, e, s)), n), {});
  },
  Mt = (i, e, t, r) => {
    const s = e.find((a) => a.name === i),
      n = s == null ? void 0 : s.type,
      o = t[i];
    return n && !r.includes(n) ? Be(n, o) : be(o);
  },
  Be = (i, e) => {
    if (i.charAt(0) === "_") {
      const t = i.slice(1, i.length);
      return zt(e, t);
    }
    switch (i) {
      case T.bool:
        return Jt(e);
      case T.float4:
      case T.float8:
      case T.int2:
      case T.int4:
      case T.int8:
      case T.numeric:
      case T.oid:
        return Ht(e);
      case T.json:
      case T.jsonb:
        return qt(e);
      case T.timestamp:
        return Gt(e);
      case T.abstime:
      case T.date:
      case T.daterange:
      case T.int4range:
      case T.int8range:
      case T.money:
      case T.reltime:
      case T.text:
      case T.time:
      case T.timestamptz:
      case T.timetz:
      case T.tsrange:
      case T.tstzrange:
        return be(e);
      default:
        return be(e);
    }
  },
  be = (i) => i,
  Jt = (i) => {
    switch (i) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return i;
    }
  },
  Ht = (i) => {
    if (typeof i == "string") {
      const e = parseFloat(i);
      if (!Number.isNaN(e)) return e;
    }
    return i;
  },
  qt = (i) => {
    if (typeof i == "string")
      try {
        return JSON.parse(i);
      } catch (e) {
        return console.log(`JSON parse error: ${e}`), i;
      }
    return i;
  },
  zt = (i, e) => {
    if (typeof i != "string") return i;
    const t = i.length - 1,
      r = i[t];
    if (i[0] === "{" && r === "}") {
      let n;
      const o = i.slice(1, t);
      try {
        n = JSON.parse("[" + o + "]");
      } catch {
        n = o ? o.split(",") : [];
      }
      return n.map((a) => Be(e, a));
    }
    return i;
  },
  Gt = (i) => (typeof i == "string" ? i.replace(" ", "T") : i);
var xe =
    (globalThis && globalThis.__awaiter) ||
    function (i, e, t, r) {
      function s(n) {
        return n instanceof t
          ? n
          : new t(function (o) {
              o(n);
            });
      }
      return new (t || (t = Promise))(function (n, o) {
        function a(c) {
          try {
            h(r.next(c));
          } catch (d) {
            o(d);
          }
        }
        function u(c) {
          try {
            h(r.throw(c));
          } catch (d) {
            o(d);
          }
        }
        function h(c) {
          c.done ? n(c.value) : s(c.value).then(a, u);
        }
        h((r = r.apply(i, e || [])).next());
      });
    },
  Ae;
(function (i) {
  (i.ALL = "*"),
    (i.INSERT = "INSERT"),
    (i.UPDATE = "UPDATE"),
    (i.DELETE = "DELETE");
})(Ae || (Ae = {}));
var Pe;
(function (i) {
  (i.BROADCAST = "broadcast"),
    (i.PRESENCE = "presence"),
    (i.POSTGRES_CHANGES = "postgres_changes");
})(Pe || (Pe = {}));
var Ie;
(function (i) {
  (i.SUBSCRIBED = "SUBSCRIBED"),
    (i.TIMED_OUT = "TIMED_OUT"),
    (i.CLOSED = "CLOSED"),
    (i.CHANNEL_ERROR = "CHANNEL_ERROR");
})(Ie || (Ie = {}));
class Oe {
  constructor(e, t = { config: {} }, r) {
    (this.topic = e),
      (this.params = t),
      (this.socket = r),
      (this.bindings = {}),
      (this.state = x.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.params.config = Object.assign(
        { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
        t.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new _e(this, P.join, this.params, this.timeout)),
      (this.rejoinTimer = new Fe(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = x.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((s) => s.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = x.closed),
          this.socket._remove(this);
      }),
      this._onError((s) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, s),
          (this.state = x.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        !this._isJoining() ||
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = x.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(P.reply, {}, (s, n) => {
        this._trigger(this._replyEventName(n), s);
      }),
      (this.presence = new ee(this));
  }
  subscribe(e, t = this.timeout) {
    var r, s;
    if (this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const {
        config: { broadcast: n, presence: o },
      } = this.params;
      this._onError((h) => e && e("CHANNEL_ERROR", h)),
        this._onClose(() => e && e("CLOSED"));
      const a = {},
        u = {
          broadcast: n,
          presence: o,
          postgres_changes:
            (s =
              (r = this.bindings.postgres_changes) === null || r === void 0
                ? void 0
                : r.map((h) => h.filter)) !== null && s !== void 0
              ? s
              : [],
        };
      this.socket.accessToken && (a.access_token = this.socket.accessToken),
        this.updateJoinPayload(Object.assign({ config: u }, a)),
        (this.joinedOnce = !0),
        this._rejoin(t),
        this.joinPush
          .receive("ok", ({ postgres_changes: h }) => {
            var c;
            if (
              (this.socket.accessToken &&
                this.socket.setAuth(this.socket.accessToken),
              h === void 0)
            ) {
              e && e("SUBSCRIBED");
              return;
            } else {
              const d = this.bindings.postgres_changes,
                m =
                  (c = d == null ? void 0 : d.length) !== null && c !== void 0
                    ? c
                    : 0,
                y = [];
              for (let p = 0; p < m; p++) {
                const g = d[p],
                  {
                    filter: { event: v, schema: k, table: U, filter: L },
                  } = g,
                  S = h && h[p];
                if (
                  S &&
                  S.event === v &&
                  S.schema === k &&
                  S.table === U &&
                  S.filter === L
                )
                  y.push(Object.assign(Object.assign({}, g), { id: S.id }));
                else {
                  this.unsubscribe(),
                    e &&
                      e(
                        "CHANNEL_ERROR",
                        new Error(
                          "mismatch between server and client bindings for postgres changes"
                        )
                      );
                  return;
                }
              }
              (this.bindings.postgres_changes = y), e && e("SUBSCRIBED");
              return;
            }
          })
          .receive("error", (h) => {
            e &&
              e(
                "CHANNEL_ERROR",
                new Error(
                  JSON.stringify(Object.values(h).join(", ") || "error")
                )
              );
          })
          .receive("timeout", () => {
            e && e("TIMED_OUT");
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  track(e, t = {}) {
    return xe(this, void 0, void 0, function* () {
      return yield this.send(
        { type: "presence", event: "track", payload: e },
        t.timeout || this.timeout
      );
    });
  }
  untrack(e = {}) {
    return xe(this, void 0, void 0, function* () {
      return yield this.send({ type: "presence", event: "untrack" }, e);
    });
  }
  on(e, t, r) {
    return this._on(e, t, r);
  }
  send(e, t = {}) {
    return new Promise((r) => {
      var s, n, o;
      const a = this._push(e.type, e, t.timeout || this.timeout);
      a.rateLimited && r("rate limited"),
        e.type === "broadcast" &&
          !(
            !(
              (o =
                (n =
                  (s = this.params) === null || s === void 0
                    ? void 0
                    : s.config) === null || n === void 0
                  ? void 0
                  : n.broadcast) === null || o === void 0
            ) && o.ack
          ) &&
          r("ok"),
        a.receive("ok", () => r("ok")),
        a.receive("timeout", () => r("timed out"));
    });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  unsubscribe(e = this.timeout) {
    this.state = x.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(P.close, "leave", this._joinRef());
    };
    return (
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      new Promise((r) => {
        const s = new _e(this, P.leave, {}, e);
        s
          .receive("ok", () => {
            t(), r("ok");
          })
          .receive("timeout", () => {
            t(), r("timed out");
          })
          .receive("error", () => {
            r("error");
          }),
          s.send(),
          this._canPush() || s.trigger("ok", {});
      })
    );
  }
  _push(e, t, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let s = new _e(this, e, t, r);
    return (
      this._canPush() ? s.send() : (s.startTimeout(), this.pushBuffer.push(s)),
      s
    );
  }
  _onMessage(e, t, r) {
    return t;
  }
  _isMember(e) {
    return this.topic === e;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(e, t, r) {
    var s, n;
    const o = e.toLocaleLowerCase(),
      { close: a, error: u, leave: h, join: c } = P;
    if (r && [a, u, h, c].indexOf(o) >= 0 && r !== this._joinRef()) return;
    let m = this._onMessage(o, t, r);
    if (t && !m)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o)
      ? (s = this.bindings.postgres_changes) === null ||
        s === void 0 ||
        s
          .filter((y) => {
            var p, g, v;
            return (
              ((p = y.filter) === null || p === void 0 ? void 0 : p.event) ===
                "*" ||
              ((v =
                (g = y.filter) === null || g === void 0 ? void 0 : g.event) ===
                null || v === void 0
                ? void 0
                : v.toLocaleLowerCase()) === o
            );
          })
          .map((y) => y.callback(m, r))
      : (n = this.bindings[o]) === null ||
        n === void 0 ||
        n
          .filter((y) => {
            var p, g, v, k, U, L;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
              if ("id" in y) {
                const S = y.id,
                  N =
                    (p = y.filter) === null || p === void 0 ? void 0 : p.event;
                return (
                  S &&
                  ((g = t.ids) === null || g === void 0
                    ? void 0
                    : g.includes(S)) &&
                  (N === "*" ||
                    (N == null ? void 0 : N.toLocaleLowerCase()) ===
                      ((v = t.data) === null || v === void 0
                        ? void 0
                        : v.type.toLocaleLowerCase()))
                );
              } else {
                const S =
                  (U =
                    (k = y == null ? void 0 : y.filter) === null || k === void 0
                      ? void 0
                      : k.event) === null || U === void 0
                    ? void 0
                    : U.toLocaleLowerCase();
                return (
                  S === "*" ||
                  S ===
                    ((L = t == null ? void 0 : t.event) === null || L === void 0
                      ? void 0
                      : L.toLocaleLowerCase())
                );
              }
            else return y.type.toLocaleLowerCase() === o;
          })
          .map((y) => {
            if (typeof m == "object" && "ids" in m) {
              const p = m.data,
                {
                  schema: g,
                  table: v,
                  commit_timestamp: k,
                  type: U,
                  errors: L,
                } = p;
              m = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: g,
                    table: v,
                    commit_timestamp: k,
                    eventType: U,
                    new: {},
                    old: {},
                    errors: L,
                  }
                ),
                this._getPayloadRecords(p)
              );
            }
            y.callback(m, r);
          });
  }
  _isClosed() {
    return this.state === x.closed;
  }
  _isJoined() {
    return this.state === x.joined;
  }
  _isJoining() {
    return this.state === x.joining;
  }
  _isLeaving() {
    return this.state === x.leaving;
  }
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  _on(e, t, r) {
    const s = e.toLocaleLowerCase(),
      n = { type: s, filter: t, callback: r };
    return (
      this.bindings[s] ? this.bindings[s].push(n) : (this.bindings[s] = [n]),
      this
    );
  }
  _off(e, t) {
    const r = e.toLocaleLowerCase();
    return (
      (this.bindings[r] = this.bindings[r].filter((s) => {
        var n;
        return !(
          ((n = s.type) === null || n === void 0
            ? void 0
            : n.toLocaleLowerCase()) === r && Oe.isEqual(s.filter, t)
        );
      })),
      this
    );
  }
  static isEqual(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const r in e) if (e[r] !== t[r]) return !1;
    return !0;
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(e) {
    this._on(P.close, {}, e);
  }
  _onError(e) {
    this._on(P.error, {}, (t) => e(t));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(e = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = x.joining),
      this.joinPush.resend(e));
  }
  _getPayloadRecords(e) {
    const t = { new: {}, old: {} };
    return (
      (e.type === "INSERT" || e.type === "UPDATE") &&
        (t.new = Re(e.columns, e.record)),
      (e.type === "UPDATE" || e.type === "DELETE") &&
        (t.old = Re(e.columns, e.old_record)),
      t
    );
  }
}
var Vt =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
const Wt = () => {};
class Kt {
  constructor(e, t) {
    var r;
    (this.accessToken = null),
      (this.channels = []),
      (this.endPoint = ""),
      (this.headers = Lt),
      (this.params = {}),
      (this.timeout = Le),
      (this.transport = Ct.w3cwebsocket),
      (this.heartbeatIntervalMs = 3e4),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.ref = 0),
      (this.logger = Wt),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new Nt()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.eventsPerSecondLimitMs = 100),
      (this.inThrottle = !1),
      (this.endPoint = `${e}/${ge.websocket}`),
      t != null && t.params && (this.params = t.params),
      t != null &&
        t.headers &&
        (this.headers = Object.assign(
          Object.assign({}, this.headers),
          t.headers
        )),
      t != null && t.timeout && (this.timeout = t.timeout),
      t != null && t.logger && (this.logger = t.logger),
      t != null && t.transport && (this.transport = t.transport),
      t != null &&
        t.heartbeatIntervalMs &&
        (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
    const s =
      (r = t == null ? void 0 : t.params) === null || r === void 0
        ? void 0
        : r.eventsPerSecond;
    s && (this.eventsPerSecondLimitMs = Math.floor(1e3 / s)),
      (this.reconnectAfterMs =
        t != null && t.reconnectAfterMs
          ? t.reconnectAfterMs
          : (n) => [1e3, 2e3, 5e3, 1e4][n - 1] || 1e4),
      (this.encode =
        t != null && t.encode ? t.encode : (n, o) => o(JSON.stringify(n))),
      (this.decode =
        t != null && t.decode
          ? t.decode
          : this.serializer.decode.bind(this.serializer)),
      (this.reconnectTimer = new Fe(
        () =>
          Vt(this, void 0, void 0, function* () {
            this.disconnect(), this.connect();
          }),
        this.reconnectAfterMs
      ));
  }
  connect() {
    this.conn ||
      ((this.conn = new this.transport(
        this._endPointURL(),
        [],
        null,
        this.headers
      )),
      this.conn &&
        ((this.conn.binaryType = "arraybuffer"),
        (this.conn.onopen = () => this._onConnOpen()),
        (this.conn.onerror = (e) => this._onConnError(e)),
        (this.conn.onmessage = (e) => this._onConnMessage(e)),
        (this.conn.onclose = (e) => this._onConnClose(e))));
  }
  disconnect(e, t) {
    this.conn &&
      ((this.conn.onclose = function () {}),
      e ? this.conn.close(e, t != null ? t : "") : this.conn.close(),
      (this.conn = null),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.reset());
  }
  getChannels() {
    return this.channels;
  }
  removeChannel(e) {
    return e
      .unsubscribe()
      .then((t) => (this.channels.length === 0 && this.disconnect(), t));
  }
  removeAllChannels() {
    return Promise.all(this.channels.map((e) => e.unsubscribe())).then(
      (e) => (this.disconnect(), e)
    );
  }
  log(e, t, r) {
    this.logger(e, t, r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Q.connecting:
        return H.Connecting;
      case Q.open:
        return H.Open;
      case Q.closing:
        return H.Closing;
      default:
        return H.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === H.Open;
  }
  channel(e, t = { config: {} }) {
    this.isConnected() || this.connect();
    const r = new Oe(`realtime:${e}`, t, this);
    return this.channels.push(r), r;
  }
  push(e) {
    const { topic: t, event: r, payload: s, ref: n } = e;
    let o = () => {
      this.encode(e, (a) => {
        var u;
        (u = this.conn) === null || u === void 0 || u.send(a);
      });
    };
    if ((this.log("push", `${t} ${r} (${n})`, s), this.isConnected()))
      if (["broadcast", "presence", "postgres_changes"].includes(r)) {
        if (this._throttle(o)()) return "rate limited";
      } else o();
    else this.sendBuffer.push(o);
  }
  setAuth(e) {
    (this.accessToken = e),
      this.channels.forEach((t) => {
        e && t.updateJoinPayload({ access_token: e }),
          t.joinedOnce &&
            t._isJoined() &&
            t._push(P.access_token, { access_token: e });
      });
  }
  _makeRef() {
    let e = this.ref + 1;
    return (
      e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString()
    );
  }
  _leaveOpenTopic(e) {
    let t = this.channels.find(
      (r) => r.topic === e && (r._isJoined() || r._isJoining())
    );
    t &&
      (this.log("transport", `leaving duplicate topic "${e}"`),
      t.unsubscribe());
  }
  _remove(e) {
    this.channels = this.channels.filter((t) => t._joinRef() !== e._joinRef());
  }
  _endPointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: Ft })
    );
  }
  _onConnMessage(e) {
    this.decode(e.data, (t) => {
      let { topic: r, event: s, payload: n, ref: o } = t;
      ((o && o === this.pendingHeartbeatRef) ||
        s === (n == null ? void 0 : n.type)) &&
        (this.pendingHeartbeatRef = null),
        this.log(
          "receive",
          `${n.status || ""} ${r} ${s} ${(o && "(" + o + ")") || ""}`,
          n
        ),
        this.channels
          .filter((a) => a._isMember(r))
          .forEach((a) => a._trigger(s, n, o)),
        this.stateChangeCallbacks.message.forEach((a) => a(t));
    });
  }
  _onConnOpen() {
    this.log("transport", `connected to ${this._endPointURL()}`),
      this._flushSendBuffer(),
      this.reconnectTimer.reset(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this._sendHeartbeat(),
        this.heartbeatIntervalMs
      )),
      this.stateChangeCallbacks.open.forEach((e) => e());
  }
  _onConnClose(e) {
    this.log("transport", "close", e),
      this._triggerChanError(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.scheduleTimeout(),
      this.stateChangeCallbacks.close.forEach((t) => t(e));
  }
  _onConnError(e) {
    this.log("transport", e.message),
      this._triggerChanError(),
      this.stateChangeCallbacks.error.forEach((t) => t(e));
  }
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(P.error));
  }
  _appendParams(e, t) {
    if (Object.keys(t).length === 0) return e;
    const r = e.match(/\?/) ? "&" : "?",
      s = new URLSearchParams(t);
    return `${e}${r}${s}`;
  }
  _flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
  }
  _sendHeartbeat() {
    var e;
    if (!!this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        (this.pendingHeartbeatRef = null),
          this.log(
            "transport",
            "heartbeat timeout. Attempting to re-establish connection"
          ),
          (e = this.conn) === null ||
            e === void 0 ||
            e.close(Bt, "hearbeat timeout");
        return;
      }
      (this.pendingHeartbeatRef = this._makeRef()),
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        }),
        this.setAuth(this.accessToken);
    }
  }
  _throttle(e, t = this.eventsPerSecondLimitMs) {
    return () =>
      this.inThrottle
        ? !0
        : (e(),
          (this.inThrottle = !0),
          setTimeout(() => {
            this.inThrottle = !1;
          }, t),
          !1);
  }
}
class Ne extends Error {
  constructor(e) {
    super(e), (this.__isStorageError = !0), (this.name = "StorageError");
  }
}
function R(i) {
  return typeof i == "object" && i !== null && "__isStorageError" in i;
}
class Xt extends Ne {
  constructor(e, t) {
    super(e), (this.name = "StorageApiError"), (this.status = t);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class Yt extends Ne {
  constructor(e, t) {
    super(e), (this.name = "StorageUnknownError"), (this.originalError = t);
  }
}
var Me =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
const Je = (i) => {
    let e;
    return (
      i
        ? (e = i)
        : typeof fetch > "u"
        ? (e = (...t) =>
            Me(void 0, void 0, void 0, function* () {
              return yield (yield ae(
                () => Promise.resolve().then(() => ce),
                void 0
              )).fetch(...t);
            }))
        : (e = fetch),
      (...t) => e(...t)
    );
  },
  Zt = () =>
    Me(void 0, void 0, void 0, function* () {
      return typeof Response > "u"
        ? (yield ae(() => Promise.resolve().then(() => ce), void 0)).Response
        : Response;
    });
var K =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
const De = (i) =>
    i.msg || i.message || i.error_description || i.error || JSON.stringify(i),
  Qt = (i, e) =>
    K(void 0, void 0, void 0, function* () {
      const t = yield Zt();
      i instanceof t
        ? i.json().then((r) => {
            e(new Xt(De(r), i.status || 500));
          })
        : e(new Yt(De(i), i));
    }),
  er = (i, e, t, r) => {
    const s = { method: i, headers: (e == null ? void 0 : e.headers) || {} };
    return i === "GET"
      ? s
      : ((s.headers = Object.assign(
          { "Content-Type": "application/json" },
          e == null ? void 0 : e.headers
        )),
        (s.body = JSON.stringify(r)),
        Object.assign(Object.assign({}, s), t));
  };
function he(i, e, t, r, s, n) {
  return K(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      i(t, er(e, r, s, n))
        .then((u) => {
          if (!u.ok) throw u;
          return r != null && r.noResolveJson ? u : u.json();
        })
        .then((u) => o(u))
        .catch((u) => Qt(u, a));
    });
  });
}
function we(i, e, t, r) {
  return K(this, void 0, void 0, function* () {
    return he(i, "GET", e, t, r);
  });
}
function q(i, e, t, r, s) {
  return K(this, void 0, void 0, function* () {
    return he(i, "POST", e, r, s, t);
  });
}
function tr(i, e, t, r, s) {
  return K(this, void 0, void 0, function* () {
    return he(i, "PUT", e, r, s, t);
  });
}
function He(i, e, t, r, s) {
  return K(this, void 0, void 0, function* () {
    return he(i, "DELETE", e, r, s, t);
  });
}
var D =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
const rr = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  sr = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
class ir {
  constructor(e, t = {}, r, s) {
    (this.url = e),
      (this.headers = t),
      (this.bucketId = r),
      (this.fetch = Je(s));
  }
  uploadOrUpdate(e, t, r, s) {
    return D(this, void 0, void 0, function* () {
      try {
        let n;
        const o = Object.assign(Object.assign({}, sr), s),
          a = Object.assign(
            Object.assign({}, this.headers),
            e === "POST" && { "x-upsert": String(o.upsert) }
          );
        typeof Blob < "u" && r instanceof Blob
          ? ((n = new FormData()),
            n.append("cacheControl", o.cacheControl),
            n.append("", r))
          : typeof FormData < "u" && r instanceof FormData
          ? ((n = r), n.append("cacheControl", o.cacheControl))
          : ((n = r),
            (a["cache-control"] = `max-age=${o.cacheControl}`),
            (a["content-type"] = o.contentType));
        const u = this._removeEmptyFolders(t),
          h = this._getFinalPath(u),
          c = yield this.fetch(`${this.url}/object/${h}`, {
            method: e,
            body: n,
            headers: a,
          });
        return c.ok
          ? { data: { path: u }, error: null }
          : { data: null, error: yield c.json() };
      } catch (n) {
        if (R(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  upload(e, t, r) {
    return D(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, t, r);
    });
  }
  update(e, t, r) {
    return D(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, t, r);
    });
  }
  move(e, t) {
    return D(this, void 0, void 0, function* () {
      try {
        return {
          data: yield q(
            this.fetch,
            `${this.url}/object/move`,
            { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (R(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  copy(e, t) {
    return D(this, void 0, void 0, function* () {
      try {
        return {
          data: {
            path: (yield q(
              this.fetch,
              `${this.url}/object/copy`,
              { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
              { headers: this.headers }
            )).Key,
          },
          error: null,
        };
      } catch (r) {
        if (R(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  createSignedUrl(e, t, r) {
    return D(this, void 0, void 0, function* () {
      try {
        const s = this._getFinalPath(e);
        let n = yield q(
          this.fetch,
          `${this.url}/object/sign/${s}`,
          { expiresIn: t },
          { headers: this.headers }
        );
        const o =
          r != null && r.download
            ? `&download=${r.download === !0 ? "" : r.download}`
            : "";
        return (
          (n = { signedUrl: encodeURI(`${this.url}${n.signedURL}${o}`) }),
          { data: n, error: null }
        );
      } catch (s) {
        if (R(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  createSignedUrls(e, t, r) {
    return D(this, void 0, void 0, function* () {
      try {
        const s = yield q(
            this.fetch,
            `${this.url}/object/sign/${this.bucketId}`,
            { expiresIn: t, paths: e },
            { headers: this.headers }
          ),
          n =
            r != null && r.download
              ? `&download=${r.download === !0 ? "" : r.download}`
              : "";
        return {
          data: s.map((o) =>
            Object.assign(Object.assign({}, o), {
              signedUrl: o.signedURL
                ? encodeURI(`${this.url}${o.signedURL}${n}`)
                : null,
            })
          ),
          error: null,
        };
      } catch (s) {
        if (R(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  download(e) {
    return D(this, void 0, void 0, function* () {
      try {
        const t = this._getFinalPath(e);
        return {
          data: yield (yield we(this.fetch, `${this.url}/object/${t}`, {
            headers: this.headers,
            noResolveJson: !0,
          })).blob(),
          error: null,
        };
      } catch (t) {
        if (R(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e),
      s =
        t != null && t.download
          ? `?download=${t.download === !0 ? "" : t.download}`
          : "";
    return {
      data: { publicUrl: encodeURI(`${this.url}/object/public/${r}${s}`) },
    };
  }
  remove(e) {
    return D(this, void 0, void 0, function* () {
      try {
        return {
          data: yield He(
            this.fetch,
            `${this.url}/object/${this.bucketId}`,
            { prefixes: e },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (t) {
        if (R(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  list(e, t, r) {
    return D(this, void 0, void 0, function* () {
      try {
        const s = Object.assign(Object.assign(Object.assign({}, rr), t), {
          prefix: e || "",
        });
        return {
          data: yield q(
            this.fetch,
            `${this.url}/object/list/${this.bucketId}`,
            s,
            { headers: this.headers },
            r
          ),
          error: null,
        };
      } catch (s) {
        if (R(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
}
const nr = "2.0.0",
  or = { "X-Client-Info": `storage-js/${nr}` };
var G =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
class ar {
  constructor(e, t = {}, r) {
    (this.url = e),
      (this.headers = Object.assign(Object.assign({}, or), t)),
      (this.fetch = Je(r));
  }
  listBuckets() {
    return G(this, void 0, void 0, function* () {
      try {
        return {
          data: yield we(this.fetch, `${this.url}/bucket`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (e) {
        if (R(e)) return { data: null, error: e };
        throw e;
      }
    });
  }
  getBucket(e) {
    return G(this, void 0, void 0, function* () {
      try {
        return {
          data: yield we(this.fetch, `${this.url}/bucket/${e}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (t) {
        if (R(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  createBucket(e, t = { public: !1 }) {
    return G(this, void 0, void 0, function* () {
      try {
        return {
          data: yield q(
            this.fetch,
            `${this.url}/bucket`,
            { id: e, name: e, public: t.public },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (R(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  updateBucket(e, t) {
    return G(this, void 0, void 0, function* () {
      try {
        return {
          data: yield tr(
            this.fetch,
            `${this.url}/bucket/${e}`,
            { id: e, name: e, public: t.public },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (R(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  emptyBucket(e) {
    return G(this, void 0, void 0, function* () {
      try {
        return {
          data: yield q(
            this.fetch,
            `${this.url}/bucket/${e}/empty`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (t) {
        if (R(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  deleteBucket(e) {
    return G(this, void 0, void 0, function* () {
      try {
        return {
          data: yield He(
            this.fetch,
            `${this.url}/bucket/${e}`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (t) {
        if (R(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
}
class cr extends ar {
  constructor(e, t = {}, r) {
    super(e, t, r);
  }
  from(e) {
    return new ir(this.url, this.headers, e, this.fetch);
  }
}
const hr = "2.0.4",
  lr = { "X-Client-Info": `supabase-js/${hr}` };
var ur =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
const dr = (i) => {
    let e;
    return (
      i ? (e = i) : typeof fetch > "u" ? (e = Ee) : (e = fetch),
      (...t) => e(...t)
    );
  },
  fr = () => (typeof Headers > "u" ? te.exports.Headers : Headers),
  pr = (i, e, t) => {
    const r = dr(t),
      s = fr();
    return (n, o) =>
      ur(void 0, void 0, void 0, function* () {
        var a;
        const u = (a = yield e()) !== null && a !== void 0 ? a : i;
        let h = new s(o == null ? void 0 : o.headers);
        return (
          h.has("apikey") || h.set("apikey", i),
          h.has("Authorization") || h.set("Authorization", `Bearer ${u}`),
          r(n, Object.assign(Object.assign({}, o), { headers: h }))
        );
      });
  };
function vr(i) {
  return i.replace(/\/$/, "");
}
function _r(i, e) {
  const { db: t, auth: r, realtime: s, global: n } = i,
    { db: o, auth: a, realtime: u, global: h } = e;
  return {
    db: Object.assign(Object.assign({}, o), t),
    auth: Object.assign(Object.assign({}, a), r),
    realtime: Object.assign(Object.assign({}, u), s),
    global: Object.assign(Object.assign({}, h), n),
  };
}
var le =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
function yr(i) {
  return Math.round(Date.now() / 1e3) + i;
}
function mr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (i) {
    const e = (Math.random() * 16) | 0;
    return (i == "x" ? e : (e & 3) | 8).toString(16);
  });
}
const z = () => typeof window < "u";
function A(i, e) {
  var t;
  e ||
    (e =
      ((t = window == null ? void 0 : window.location) === null || t === void 0
        ? void 0
        : t.href) || ""),
    (i = i.replace(/[\[\]]/g, "\\$&"));
  const r = new RegExp("[?&#]" + i + "(=([^&#]*)|&|#|$)"),
    s = r.exec(e);
  return s ? (s[2] ? decodeURIComponent(s[2].replace(/\+/g, " ")) : "") : null;
}
const qe = (i) => {
    let e;
    return (
      i
        ? (e = i)
        : typeof fetch > "u"
        ? (e = (...t) =>
            le(void 0, void 0, void 0, function* () {
              return yield (yield ae(
                () => Promise.resolve().then(() => ce),
                void 0
              )).fetch(...t);
            }))
        : (e = fetch),
      (...t) => e(...t)
    );
  },
  gr = (i) =>
    typeof i == "object" &&
    i !== null &&
    "status" in i &&
    "ok" in i &&
    "json" in i &&
    typeof i.json == "function",
  br = (i, e, t) =>
    le(void 0, void 0, void 0, function* () {
      yield i.setItem(e, JSON.stringify(t));
    }),
  Ce = (i, e) =>
    le(void 0, void 0, void 0, function* () {
      const t = yield i.getItem(e);
      if (!t) return null;
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    }),
  wr = (i, e) =>
    le(void 0, void 0, void 0, function* () {
      yield i.removeItem(e);
    }),
  Tr = (i) => {
    try {
      return atob(i.replace(/[-]/g, "+").replace(/[_]/g, "/"));
    } catch (e) {
      if (e instanceof ReferenceError)
        return Buffer.from(i, "base64").toString("utf-8");
      throw e;
    }
  };
class ue {
  constructor() {
    this.promise = new ue.promiseConstructor((e, t) => {
      (this.resolve = e), (this.reject = t);
    });
  }
}
ue.promiseConstructor = Promise;
function Er(i) {
  const e = i.split(".");
  if (e.length !== 3) throw new Error("JWT is not valid: not a JWT structure");
  const t = e[1];
  return JSON.parse(Tr(t));
}
class ke extends Error {
  constructor(e) {
    super(e), (this.__isAuthError = !0), (this.name = "AuthError");
  }
}
function O(i) {
  return typeof i == "object" && i !== null && "__isAuthError" in i;
}
class Or extends ke {
  constructor(e, t) {
    super(e), (this.name = "AuthApiError"), (this.status = t);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class ze extends ke {
  constructor(e, t) {
    super(e), (this.name = "AuthUnknownError"), (this.originalError = t);
  }
}
class de extends ke {
  constructor(e, t, r) {
    super(e), (this.name = t), (this.status = r);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class Z extends de {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400);
  }
}
class ye extends de {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400);
  }
}
class F extends de {
  constructor(e, t = null) {
    super(e, "AuthImplicitGrantRedirectError", 500),
      (this.details = null),
      (this.details = t);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class oe extends de {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t);
  }
}
var je =
    (globalThis && globalThis.__awaiter) ||
    function (i, e, t, r) {
      function s(n) {
        return n instanceof t
          ? n
          : new t(function (o) {
              o(n);
            });
      }
      return new (t || (t = Promise))(function (n, o) {
        function a(c) {
          try {
            h(r.next(c));
          } catch (d) {
            o(d);
          }
        }
        function u(c) {
          try {
            h(r.throw(c));
          } catch (d) {
            o(d);
          }
        }
        function h(c) {
          c.done ? n(c.value) : s(c.value).then(a, u);
        }
        h((r = r.apply(i, e || [])).next());
      });
    },
  kr =
    (globalThis && globalThis.__rest) ||
    function (i, e) {
      var t = {};
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) &&
          e.indexOf(r) < 0 &&
          (t[r] = i[r]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(i); s < r.length; s++)
          e.indexOf(r[s]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(i, r[s]) &&
            (t[r[s]] = i[r[s]]);
      return t;
    };
const ie = (i) =>
    i.msg || i.message || i.error_description || i.error || JSON.stringify(i),
  jr = (i, e) =>
    je(void 0, void 0, void 0, function* () {
      const t = [502, 503, 504];
      gr(i)
        ? t.includes(i.status)
          ? e(new oe(ie(i), i.status))
          : i
              .json()
              .then((r) => {
                e(new Or(ie(r), i.status || 500));
              })
              .catch((r) => {
                e(new ze(ie(r), r));
              })
        : e(new oe(ie(i), 0));
    }),
  Sr = (i, e, t, r) => {
    const s = { method: i, headers: (e == null ? void 0 : e.headers) || {} };
    return i === "GET"
      ? s
      : ((s.headers = Object.assign(
          { "Content-Type": "application/json;charset=UTF-8" },
          e == null ? void 0 : e.headers
        )),
        (s.body = JSON.stringify(r)),
        Object.assign(Object.assign({}, s), t));
  };
function E(i, e, t, r) {
  var s, n;
  return je(this, void 0, void 0, function* () {
    const o =
      (s = r == null ? void 0 : r.headers) !== null && s !== void 0 ? s : {};
    r != null && r.jwt && (o.Authorization = `Bearer ${r.jwt}`);
    const a =
      (n = r == null ? void 0 : r.query) !== null && n !== void 0 ? n : {};
    r != null && r.redirectTo && (a.redirect_to = r.redirectTo);
    const u = Object.keys(a).length
        ? "?" + new URLSearchParams(a).toString()
        : "",
      h = yield $r(
        i,
        e,
        t + u,
        { headers: o, noResolveJson: r == null ? void 0 : r.noResolveJson },
        {},
        r == null ? void 0 : r.body
      );
    return r != null && r.xform
      ? r == null
        ? void 0
        : r.xform(h)
      : { data: Object.assign({}, h), error: null };
  });
}
function $r(i, e, t, r, s, n) {
  return je(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      i(t, Sr(e, r, s, n))
        .then((u) => {
          if (!u.ok) throw u;
          return r != null && r.noResolveJson ? u : u.json();
        })
        .then((u) => o(u))
        .catch((u) => jr(u, a));
    });
  });
}
function V(i) {
  var e;
  let t = null;
  xr(i) && ((t = Object.assign({}, i)), (t.expires_at = yr(i.expires_in)));
  const r = (e = i.user) !== null && e !== void 0 ? e : i;
  return { data: { session: t, user: r }, error: null };
}
function B(i) {
  var e;
  return {
    data: { user: (e = i.user) !== null && e !== void 0 ? e : i },
    error: null,
  };
}
function Rr(i) {
  const {
      action_link: e,
      email_otp: t,
      hashed_token: r,
      redirect_to: s,
      verification_type: n,
    } = i,
    o = kr(i, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    a = {
      action_link: e,
      email_otp: t,
      hashed_token: r,
      redirect_to: s,
      verification_type: n,
    },
    u = Object.assign({}, o);
  return { data: { properties: a, user: u }, error: null };
}
function xr(i) {
  return i.access_token && i.refresh_token && i.expires_in;
}
var C =
    (globalThis && globalThis.__awaiter) ||
    function (i, e, t, r) {
      function s(n) {
        return n instanceof t
          ? n
          : new t(function (o) {
              o(n);
            });
      }
      return new (t || (t = Promise))(function (n, o) {
        function a(c) {
          try {
            h(r.next(c));
          } catch (d) {
            o(d);
          }
        }
        function u(c) {
          try {
            h(r.throw(c));
          } catch (d) {
            o(d);
          }
        }
        function h(c) {
          c.done ? n(c.value) : s(c.value).then(a, u);
        }
        h((r = r.apply(i, e || [])).next());
      });
    },
  Ar =
    (globalThis && globalThis.__rest) ||
    function (i, e) {
      var t = {};
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) &&
          e.indexOf(r) < 0 &&
          (t[r] = i[r]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(i); s < r.length; s++)
          e.indexOf(r[s]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(i, r[s]) &&
            (t[r[s]] = i[r[s]]);
      return t;
    };
class Pr {
  constructor({ url: e = "", headers: t = {}, fetch: r }) {
    (this.url = e),
      (this.headers = t),
      (this.fetch = qe(r)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      });
  }
  signOut(e) {
    return C(this, void 0, void 0, function* () {
      try {
        return (
          yield E(this.fetch, "POST", `${this.url}/logout`, {
            headers: this.headers,
            jwt: e,
            noResolveJson: !0,
          }),
          { data: null, error: null }
        );
      } catch (t) {
        if (O(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  inviteUserByEmail(e, t = {}) {
    return C(this, void 0, void 0, function* () {
      try {
        return yield E(this.fetch, "POST", `${this.url}/invite`, {
          body: { email: e, data: t.data },
          headers: this.headers,
          redirectTo: t.redirectTo,
          xform: B,
        });
      } catch (r) {
        if (O(r)) return { data: { user: null }, error: r };
        throw r;
      }
    });
  }
  generateLink(e) {
    return C(this, void 0, void 0, function* () {
      try {
        const { options: t } = e,
          r = Ar(e, ["options"]),
          s = Object.assign(Object.assign({}, r), t);
        return (
          "newEmail" in r &&
            ((s.new_email = r == null ? void 0 : r.newEmail),
            delete s.newEmail),
          yield E(this.fetch, "POST", `${this.url}/admin/generate_link`, {
            body: s,
            headers: this.headers,
            xform: Rr,
            redirectTo: t == null ? void 0 : t.redirectTo,
          })
        );
      } catch (t) {
        if (O(t)) return { data: { properties: null, user: null }, error: t };
        throw t;
      }
    });
  }
  createUser(e) {
    return C(this, void 0, void 0, function* () {
      try {
        return yield E(this.fetch, "POST", `${this.url}/admin/users`, {
          body: e,
          headers: this.headers,
          xform: B,
        });
      } catch (t) {
        if (O(t)) return { data: { user: null }, error: t };
        throw t;
      }
    });
  }
  listUsers() {
    return C(this, void 0, void 0, function* () {
      try {
        const { data: e, error: t } = yield E(
          this.fetch,
          "GET",
          `${this.url}/admin/users`,
          { headers: this.headers }
        );
        if (t) throw t;
        return { data: Object.assign({}, e), error: null };
      } catch (e) {
        if (O(e)) return { data: { users: [] }, error: e };
        throw e;
      }
    });
  }
  getUserById(e) {
    return C(this, void 0, void 0, function* () {
      try {
        return yield E(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          xform: B,
        });
      } catch (t) {
        if (O(t)) return { data: { user: null }, error: t };
        throw t;
      }
    });
  }
  updateUserById(e, t) {
    return C(this, void 0, void 0, function* () {
      try {
        return yield E(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
          body: t,
          headers: this.headers,
          xform: B,
        });
      } catch (r) {
        if (O(r)) return { data: { user: null }, error: r };
        throw r;
      }
    });
  }
  deleteUser(e) {
    return C(this, void 0, void 0, function* () {
      try {
        return yield E(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          xform: B,
        });
      } catch (t) {
        if (O(t)) return { data: { user: null }, error: t };
        throw t;
      }
    });
  }
  _listFactors(e) {
    return C(this, void 0, void 0, function* () {
      try {
        return {
          data: yield E(
            this.fetch,
            "GET",
            `${this.url}/admin/users/${e.userId}/factors`,
            { headers: this.headers, xform: B }
          ),
          error: null,
        };
      } catch (t) {
        if (O(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  _deleteFactor(e) {
    return C(this, void 0, void 0, function* () {
      try {
        return {
          data: yield E(
            this.fetch,
            "DELETE",
            `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
            { headers: this.headers, xform: B }
          ),
          error: null,
        };
      } catch (t) {
        if (O(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
}
const Ir = "2.2.0",
  Dr = "http://localhost:9999",
  Cr = "supabase.auth.token",
  Ur = { "X-Client-Info": `gotrue-js/${Ir}` },
  me = 10,
  ne = { MAX_RETRIES: 10, RETRY_INTERVAL: 2 },
  Lr = {
    getItem: (i) => (z() ? globalThis.localStorage.getItem(i) : null),
    setItem: (i, e) => {
      !z() || globalThis.localStorage.setItem(i, e);
    },
    removeItem: (i) => {
      !z() || globalThis.localStorage.removeItem(i);
    },
  };
function Fr() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
var b =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
Fr();
const Br = {
  url: Dr,
  storageKey: Cr,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Ur,
};
class Nr {
  constructor(e) {
    (this.stateChangeEmitters = new Map()),
      (this.networkRetries = 0),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0);
    const t = Object.assign(Object.assign({}, Br), e);
    (this.inMemorySession = null),
      (this.storageKey = t.storageKey),
      (this.autoRefreshToken = t.autoRefreshToken),
      (this.persistSession = t.persistSession),
      (this.storage = t.storage || Lr),
      (this.admin = new Pr({ url: t.url, headers: t.headers, fetch: t.fetch })),
      (this.url = t.url),
      (this.headers = t.headers),
      (this.fetch = qe(t.fetch)),
      (this.detectSessionInUrl = t.detectSessionInUrl),
      this.initialize(),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
      });
  }
  initialize() {
    return (
      this.initializePromise || (this.initializePromise = this._initialize()),
      this.initializePromise
    );
  }
  _initialize() {
    return b(this, void 0, void 0, function* () {
      if (this.initializePromise) return this.initializePromise;
      try {
        if (this.detectSessionInUrl && this._isImplicitGrantFlow()) {
          const { data: e, error: t } = yield this._getSessionFromUrl();
          if (t) return yield this._removeSession(), { error: t };
          const { session: r, redirectType: s } = e;
          return (
            yield this._saveSession(r),
            this._notifyAllSubscribers("SIGNED_IN", r),
            s === "recovery" &&
              this._notifyAllSubscribers("PASSWORD_RECOVERY", r),
            { error: null }
          );
        }
        return yield this._recoverAndRefresh(), { error: null };
      } catch (e) {
        return O(e)
          ? { error: e }
          : { error: new ze("Unexpected error during initialization", e) };
      } finally {
        this._handleVisibilityChange();
      }
    });
  }
  signUp(e) {
    var t, r;
    return b(this, void 0, void 0, function* () {
      try {
        yield this._removeSession();
        let s;
        if ("email" in e) {
          const { email: h, password: c, options: d } = e;
          s = yield E(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: d == null ? void 0 : d.emailRedirectTo,
            body: {
              email: h,
              password: c,
              data:
                (t = d == null ? void 0 : d.data) !== null && t !== void 0
                  ? t
                  : {},
              gotrue_meta_security: {
                captcha_token: d == null ? void 0 : d.captchaToken,
              },
            },
            xform: V,
          });
        } else if ("phone" in e) {
          const { phone: h, password: c, options: d } = e;
          s = yield E(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              phone: h,
              password: c,
              data:
                (r = d == null ? void 0 : d.data) !== null && r !== void 0
                  ? r
                  : {},
              gotrue_meta_security: {
                captcha_token: d == null ? void 0 : d.captchaToken,
              },
            },
            xform: V,
          });
        } else
          throw new ye(
            "You must provide either an email or phone number and a password"
          );
        const { data: n, error: o } = s;
        if (o || !n) return { data: { user: null, session: null }, error: o };
        const a = n.session,
          u = n.user;
        return (
          n.session &&
            (yield this._saveSession(n.session),
            this._notifyAllSubscribers("SIGNED_IN", a)),
          { data: { user: u, session: a }, error: null }
        );
      } catch (s) {
        if (O(s)) return { data: { user: null, session: null }, error: s };
        throw s;
      }
    });
  }
  signInWithPassword(e) {
    var t, r;
    return b(this, void 0, void 0, function* () {
      try {
        yield this._removeSession();
        let s;
        if ("email" in e) {
          const { email: a, password: u, options: h } = e;
          s = yield E(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                email: a,
                password: u,
                data:
                  (t = h == null ? void 0 : h.data) !== null && t !== void 0
                    ? t
                    : {},
                gotrue_meta_security: {
                  captcha_token: h == null ? void 0 : h.captchaToken,
                },
              },
              xform: V,
            }
          );
        } else if ("phone" in e) {
          const { phone: a, password: u, options: h } = e;
          s = yield E(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                phone: a,
                password: u,
                data:
                  (r = h == null ? void 0 : h.data) !== null && r !== void 0
                    ? r
                    : {},
                gotrue_meta_security: {
                  captcha_token: h == null ? void 0 : h.captchaToken,
                },
              },
              xform: V,
            }
          );
        } else
          throw new ye(
            "You must provide either an email or phone number and a password"
          );
        const { data: n, error: o } = s;
        return o || !n
          ? { data: { user: null, session: null }, error: o }
          : (n.session &&
              (yield this._saveSession(n.session),
              this._notifyAllSubscribers("SIGNED_IN", n.session)),
            { data: n, error: o });
      } catch (s) {
        if (O(s)) return { data: { user: null, session: null }, error: s };
        throw s;
      }
    });
  }
  signInWithOAuth(e) {
    var t, r, s;
    return b(this, void 0, void 0, function* () {
      return (
        yield this._removeSession(),
        this._handleProviderSignIn(e.provider, {
          redirectTo:
            (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
          scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
          queryParams:
            (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
        })
      );
    });
  }
  signInWithOtp(e) {
    var t, r, s, n;
    return b(this, void 0, void 0, function* () {
      try {
        if ((yield this._removeSession(), "email" in e)) {
          const { email: o, options: a } = e,
            { error: u } = yield E(this.fetch, "POST", `${this.url}/otp`, {
              headers: this.headers,
              body: {
                email: o,
                data:
                  (t = a == null ? void 0 : a.data) !== null && t !== void 0
                    ? t
                    : {},
                create_user:
                  (r = a == null ? void 0 : a.shouldCreateUser) !== null &&
                  r !== void 0
                    ? r
                    : !0,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              redirectTo: a == null ? void 0 : a.emailRedirectTo,
            });
          return { data: { user: null, session: null }, error: u };
        }
        if ("phone" in e) {
          const { phone: o, options: a } = e,
            { error: u } = yield E(this.fetch, "POST", `${this.url}/otp`, {
              headers: this.headers,
              body: {
                phone: o,
                data:
                  (s = a == null ? void 0 : a.data) !== null && s !== void 0
                    ? s
                    : {},
                create_user:
                  (n = a == null ? void 0 : a.shouldCreateUser) !== null &&
                  n !== void 0
                    ? n
                    : !0,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
            });
          return { data: { user: null, session: null }, error: u };
        }
        throw new ye("You must provide either an email or phone number.");
      } catch (o) {
        if (O(o)) return { data: { user: null, session: null }, error: o };
        throw o;
      }
    });
  }
  verifyOtp(e) {
    var t, r;
    return b(this, void 0, void 0, function* () {
      try {
        yield this._removeSession();
        const { data: s, error: n } = yield E(
          this.fetch,
          "POST",
          `${this.url}/verify`,
          {
            headers: this.headers,
            body: Object.assign(Object.assign({}, e), {
              gotrue_meta_security: {
                captchaToken:
                  (t = e.options) === null || t === void 0
                    ? void 0
                    : t.captchaToken,
              },
            }),
            redirectTo:
              (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
            xform: V,
          }
        );
        if (n) throw n;
        if (!s) throw "An error occurred on token verification.";
        const o = s.session,
          a = s.user;
        return (
          o != null &&
            o.access_token &&
            (yield this._saveSession(o),
            this._notifyAllSubscribers("SIGNED_IN", o)),
          { data: { user: a, session: o }, error: null }
        );
      } catch (s) {
        if (O(s)) return { data: { user: null, session: null }, error: s };
        throw s;
      }
    });
  }
  getSession() {
    return b(this, void 0, void 0, function* () {
      yield this.initializePromise;
      let e = null;
      if (this.persistSession) {
        const n = yield Ce(this.storage, this.storageKey);
        n !== null &&
          (this._isValidSession(n) ? (e = n) : yield this._removeSession());
      } else e = this.inMemorySession;
      if (!e) return { data: { session: null }, error: null };
      if (!(e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1))
        return { data: { session: e }, error: null };
      const { session: r, error: s } = yield this._callRefreshToken(
        e.refresh_token
      );
      return s
        ? { data: { session: null }, error: s }
        : { data: { session: r }, error: null };
    });
  }
  getUser(e) {
    var t, r;
    return b(this, void 0, void 0, function* () {
      try {
        if (!e) {
          const { data: s, error: n } = yield this.getSession();
          if (n) throw n;
          e =
            (r =
              (t = s.session) === null || t === void 0
                ? void 0
                : t.access_token) !== null && r !== void 0
              ? r
              : void 0;
        }
        return yield E(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: e,
          xform: B,
        });
      } catch (s) {
        if (O(s)) return { data: { user: null }, error: s };
        throw s;
      }
    });
  }
  updateUser(e) {
    return b(this, void 0, void 0, function* () {
      try {
        const { data: t, error: r } = yield this.getSession();
        if (r) throw r;
        if (!t.session) throw new Z();
        const s = t.session,
          { data: n, error: o } = yield E(
            this.fetch,
            "PUT",
            `${this.url}/user`,
            { headers: this.headers, body: e, jwt: s.access_token, xform: B }
          );
        if (o) throw o;
        return (
          (s.user = n.user),
          yield this._saveSession(s),
          this._notifyAllSubscribers("USER_UPDATED", s),
          { data: { user: s.user }, error: null }
        );
      } catch (t) {
        if (O(t)) return { data: { user: null }, error: t };
        throw t;
      }
    });
  }
  _decodeJWT(e) {
    return Er(e);
  }
  setSession(e) {
    return b(this, void 0, void 0, function* () {
      try {
        const t = Date.now() / 1e3;
        let r = t,
          s = !0,
          n = null;
        if (e.access_token && e.access_token.split(".")[1]) {
          const o = this._decodeJWT(e.access_token);
          o.exp && ((r = o.exp), (s = r <= t));
        }
        if (s) {
          if (!e.refresh_token) throw new Z();
          const { data: o, error: a } = yield this._refreshAccessToken(
            e.refresh_token
          );
          if (a) return { data: { session: null, user: null }, error: a };
          if (!o.session)
            return { data: { session: null, user: null }, error: null };
          n = o.session;
        } else {
          const { data: o, error: a } = yield this.getUser(e.access_token);
          if (a) throw a;
          n = {
            access_token: e.access_token,
            refresh_token: e.refresh_token,
            user: o.user,
            token_type: "bearer",
            expires_in: r - t,
            expires_at: r,
          };
        }
        return (
          yield this._saveSession(n),
          this._notifyAllSubscribers("TOKEN_REFRESHED", n),
          { data: { session: n, user: n.user }, error: null }
        );
      } catch (t) {
        if (O(t)) return { data: { session: null, user: null }, error: t };
        throw t;
      }
    });
  }
  refreshSession(e) {
    var t;
    return b(this, void 0, void 0, function* () {
      try {
        if (!e) {
          const { data: n, error: o } = yield this.getSession();
          if (o) throw o;
          e = (t = n.session) !== null && t !== void 0 ? t : void 0;
        }
        if (!(e != null && e.refresh_token)) throw new Z();
        const { session: r, error: s } = yield this._callRefreshToken(
          e.refresh_token
        );
        return s
          ? { data: { user: null, session: null }, error: s }
          : r
          ? { data: { user: r.user, session: r }, error: null }
          : { data: { user: null, session: null }, error: null };
      } catch (r) {
        if (O(r)) return { data: { user: null, session: null }, error: r };
        throw r;
      }
    });
  }
  _getSessionFromUrl() {
    return b(this, void 0, void 0, function* () {
      try {
        if (!z()) throw new F("No browser detected.");
        if (!this._isImplicitGrantFlow())
          throw new F("Not a valid implicit grant flow url.");
        const e = A("error_description");
        if (e) {
          const g = A("error_code");
          if (!g) throw new F("No error_code detected.");
          const v = A("error");
          throw v
            ? new F(e, { error: v, code: g })
            : new F("No error detected.");
        }
        const t = A("provider_token"),
          r = A("provider_refresh_token"),
          s = A("access_token");
        if (!s) throw new F("No access_token detected.");
        const n = A("expires_in");
        if (!n) throw new F("No expires_in detected.");
        const o = A("refresh_token");
        if (!o) throw new F("No refresh_token detected.");
        const a = A("token_type");
        if (!a) throw new F("No token_type detected.");
        const h = Math.round(Date.now() / 1e3) + parseInt(n),
          { data: c, error: d } = yield this.getUser(s);
        if (d) throw d;
        const m = c.user,
          y = {
            provider_token: t,
            provider_refresh_token: r,
            access_token: s,
            expires_in: parseInt(n),
            expires_at: h,
            refresh_token: o,
            token_type: a,
            user: m,
          },
          p = A("type");
        return (
          (window.location.hash = ""),
          { data: { session: y, redirectType: p }, error: null }
        );
      } catch (e) {
        if (O(e))
          return { data: { session: null, redirectType: null }, error: e };
        throw e;
      }
    });
  }
  _isImplicitGrantFlow() {
    return (
      z() && (Boolean(A("access_token")) || Boolean(A("error_description")))
    );
  }
  signOut() {
    var e;
    return b(this, void 0, void 0, function* () {
      const { data: t, error: r } = yield this.getSession();
      if (r) return { error: r };
      const s =
        (e = t.session) === null || e === void 0 ? void 0 : e.access_token;
      if (s) {
        const { error: n } = yield this.admin.signOut(s);
        if (n) return { error: n };
      }
      return (
        yield this._removeSession(),
        this._notifyAllSubscribers("SIGNED_OUT", null),
        { error: null }
      );
    });
  }
  onAuthStateChange(e) {
    const t = mr(),
      r = {
        id: t,
        callback: e,
        unsubscribe: () => {
          this.stateChangeEmitters.delete(t);
        },
      };
    return this.stateChangeEmitters.set(t, r), { data: { subscription: r } };
  }
  resetPasswordForEmail(e, t = {}) {
    return b(this, void 0, void 0, function* () {
      try {
        return yield E(this.fetch, "POST", `${this.url}/recover`, {
          body: {
            email: e,
            gotrue_meta_security: { captcha_token: t.captchaToken },
          },
          headers: this.headers,
          redirectTo: t.redirectTo,
        });
      } catch (r) {
        if (O(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  _refreshAccessToken(e) {
    return b(this, void 0, void 0, function* () {
      try {
        return yield E(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=refresh_token`,
          { body: { refresh_token: e }, headers: this.headers, xform: V }
        );
      } catch (t) {
        if (O(t)) return { data: { session: null, user: null }, error: t };
        throw t;
      }
    });
  }
  _isValidSession(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      "access_token" in e &&
      "refresh_token" in e &&
      "expires_at" in e
    );
  }
  _handleProviderSignIn(e, t = {}) {
    const r = this._getUrlForProvider(e, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams,
    });
    return (
      z() && (window.location.href = r),
      { data: { provider: e, url: r }, error: null }
    );
  }
  _recoverAndRefresh() {
    var e;
    return b(this, void 0, void 0, function* () {
      try {
        const t = yield Ce(this.storage, this.storageKey);
        if (!this._isValidSession(t)) {
          t !== null && (yield this._removeSession());
          return;
        }
        const r = Math.round(Date.now() / 1e3);
        if (((e = t.expires_at) !== null && e !== void 0 ? e : 1 / 0) < r + me)
          if (this.autoRefreshToken && t.refresh_token) {
            this.networkRetries++;
            const { error: s } = yield this._callRefreshToken(t.refresh_token);
            if (s) {
              if (
                (console.log(s.message),
                s instanceof oe && this.networkRetries < ne.MAX_RETRIES)
              ) {
                this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
                  (this.refreshTokenTimer = setTimeout(
                    () => this._recoverAndRefresh(),
                    Math.pow(ne.RETRY_INTERVAL, this.networkRetries) * 100
                  ));
                return;
              }
              yield this._removeSession();
            }
            this.networkRetries = 0;
          } else yield this._removeSession();
        else
          this.persistSession && (yield this._saveSession(t)),
            this._notifyAllSubscribers("SIGNED_IN", t);
      } catch (t) {
        console.error(t);
        return;
      }
    });
  }
  _callRefreshToken(e) {
    var t, r;
    return b(this, void 0, void 0, function* () {
      if (this.refreshingDeferred) return this.refreshingDeferred.promise;
      try {
        if (((this.refreshingDeferred = new ue()), !e)) throw new Z();
        const { data: s, error: n } = yield this._refreshAccessToken(e);
        if (n) throw n;
        if (!s.session) throw new Z();
        yield this._saveSession(s.session),
          this._notifyAllSubscribers("TOKEN_REFRESHED", s.session);
        const o = { session: s.session, error: null };
        return this.refreshingDeferred.resolve(o), o;
      } catch (s) {
        if (O(s)) {
          const n = { session: null, error: s };
          return (
            (t = this.refreshingDeferred) === null ||
              t === void 0 ||
              t.resolve(n),
            n
          );
        }
        throw (
          ((r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.reject(s),
          s)
        );
      } finally {
        this.refreshingDeferred = null;
      }
    });
  }
  _notifyAllSubscribers(e, t) {
    this.stateChangeEmitters.forEach((r) => r.callback(e, t));
  }
  _saveSession(e) {
    return b(this, void 0, void 0, function* () {
      this.persistSession || (this.inMemorySession = e);
      const t = e.expires_at;
      if (t) {
        const r = Math.round(Date.now() / 1e3),
          s = t - r,
          n = s > me ? me : 0.5;
        this._startAutoRefreshToken((s - n) * 1e3);
      }
      this.persistSession && e.expires_at && (yield this._persistSession(e));
    });
  }
  _persistSession(e) {
    return br(this.storage, this.storageKey, e);
  }
  _removeSession() {
    return b(this, void 0, void 0, function* () {
      this.persistSession
        ? yield wr(this.storage, this.storageKey)
        : (this.inMemorySession = null),
        this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer);
    });
  }
  _startAutoRefreshToken(e) {
    this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
      !(e <= 0 || !this.autoRefreshToken) &&
        ((this.refreshTokenTimer = setTimeout(
          () =>
            b(this, void 0, void 0, function* () {
              this.networkRetries++;
              const {
                data: { session: t },
                error: r,
              } = yield this.getSession();
              if (!r && t) {
                const { error: s } = yield this._callRefreshToken(
                  t.refresh_token
                );
                s || (this.networkRetries = 0),
                  s instanceof oe &&
                    this.networkRetries < ne.MAX_RETRIES &&
                    this._startAutoRefreshToken(
                      Math.pow(ne.RETRY_INTERVAL, this.networkRetries) * 100
                    );
              }
            }),
          e
        )),
        typeof this.refreshTokenTimer.unref == "function" &&
          this.refreshTokenTimer.unref());
  }
  _handleVisibilityChange() {
    if (!z() || !(window != null && window.addEventListener)) return !1;
    try {
      window == null ||
        window.addEventListener("visibilitychange", () =>
          b(this, void 0, void 0, function* () {
            document.visibilityState === "visible" &&
              (yield this.initializePromise, yield this._recoverAndRefresh());
          })
        );
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  _getUrlForProvider(e, t) {
    const r = [`provider=${encodeURIComponent(e)}`];
    if (
      (t != null &&
        t.redirectTo &&
        r.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`),
      t != null && t.scopes && r.push(`scopes=${encodeURIComponent(t.scopes)}`),
      t != null && t.queryParams)
    ) {
      const s = new URLSearchParams(t.queryParams);
      r.push(s.toString());
    }
    return `${this.url}/authorize?${r.join("&")}`;
  }
  _unenroll(e) {
    var t;
    return b(this, void 0, void 0, function* () {
      const { data: r, error: s } = yield this.getSession();
      return s
        ? { data: null, error: s }
        : yield E(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
            headers: this.headers,
            jwt:
              (t = r == null ? void 0 : r.session) === null || t === void 0
                ? void 0
                : t.access_token,
          });
    });
  }
  _enroll(e) {
    var t, r;
    return b(this, void 0, void 0, function* () {
      const { data: s, error: n } = yield this.getSession();
      if (n) return { data: null, error: n };
      const { data: o, error: a } = yield E(
        this.fetch,
        "POST",
        `${this.url}/factors`,
        {
          body: {
            friendly_name: e.friendlyName,
            factor_type: e.factorType,
            issuer: e.issuer,
          },
          headers: this.headers,
          jwt:
            (t = s == null ? void 0 : s.session) === null || t === void 0
              ? void 0
              : t.access_token,
        }
      );
      return a
        ? { data: null, error: a }
        : (!((r = o == null ? void 0 : o.totp) === null || r === void 0) &&
            r.qr_code &&
            (o.totp.qr_code = `data:image/svg+xml;utf-8,${o.totp.qr_code}`),
          { data: o, error: null });
    });
  }
  _verify(e) {
    var t;
    return b(this, void 0, void 0, function* () {
      const { data: r, error: s } = yield this.getSession();
      if (s) return { data: null, error: s };
      const { data: n, error: o } = yield E(
        this.fetch,
        "POST",
        `${this.url}/factors/${e.factorId}/verify`,
        {
          body: { code: e.code, challenge_id: e.challengeId },
          headers: this.headers,
          jwt:
            (t = r == null ? void 0 : r.session) === null || t === void 0
              ? void 0
              : t.access_token,
        }
      );
      return o
        ? { data: null, error: o }
        : (yield this._saveSession(
            Object.assign(
              { expires_at: Math.round(Date.now() / 1e3) + n.expires_in },
              n
            )
          ),
          this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", n),
          { data: n, error: o });
    });
  }
  _challenge(e) {
    var t;
    return b(this, void 0, void 0, function* () {
      const { data: r, error: s } = yield this.getSession();
      return s
        ? { data: null, error: s }
        : yield E(
            this.fetch,
            "POST",
            `${this.url}/factors/${e.factorId}/challenge`,
            {
              headers: this.headers,
              jwt:
                (t = r == null ? void 0 : r.session) === null || t === void 0
                  ? void 0
                  : t.access_token,
            }
          );
    });
  }
  _challengeAndVerify(e) {
    return b(this, void 0, void 0, function* () {
      const { data: t, error: r } = yield this._challenge({
        factorId: e.factorId,
      });
      return r
        ? { data: null, error: r }
        : yield this._verify({
            factorId: e.factorId,
            challengeId: t.id,
            code: e.code,
          });
    });
  }
  _listFactors() {
    return b(this, void 0, void 0, function* () {
      const {
        data: { user: e },
        error: t,
      } = yield this.getUser();
      if (t) return { data: null, error: t };
      const r = (e == null ? void 0 : e.factors) || [],
        s = r.filter(
          (n) => n.factor_type === "totp" && n.status === "verified"
        );
      return { data: { all: r, totp: s }, error: null };
    });
  }
  _getAuthenticatorAssuranceLevel() {
    var e, t;
    return b(this, void 0, void 0, function* () {
      const {
        data: { session: r },
        error: s,
      } = yield this.getSession();
      if (s) return { data: null, error: s };
      if (!r)
        return {
          data: {
            currentLevel: null,
            nextLevel: null,
            currentAuthenticationMethods: [],
          },
          error: null,
        };
      const n = this._decodeJWT(r.access_token);
      let o = null;
      n.aal && (o = n.aal);
      let a = o;
      ((t =
        (e = r.user.factors) === null || e === void 0
          ? void 0
          : e.filter((c) => c.status === "verified")) !== null && t !== void 0
        ? t
        : []
      ).length > 0 && (a = "aal2");
      const h = n.amr || [];
      return {
        data: {
          currentLevel: o,
          nextLevel: a,
          currentAuthenticationMethods: h,
        },
        error: null,
      };
    });
  }
}
class Mr extends Nr {
  constructor(e) {
    super(e);
  }
}
var Jr =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function s(n) {
      return n instanceof t
        ? n
        : new t(function (o) {
            o(n);
          });
    }
    return new (t || (t = Promise))(function (n, o) {
      function a(c) {
        try {
          h(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        try {
          h(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function h(c) {
        c.done ? n(c.value) : s(c.value).then(a, u);
      }
      h((r = r.apply(i, e || [])).next());
    });
  };
const Hr = { headers: lr },
  qr = { schema: "public" },
  zr = { autoRefreshToken: !0, persistSession: !0, detectSessionInUrl: !0 },
  Gr = {};
class Vr {
  constructor(e, t, r) {
    var s, n, o, a, u, h, c, d;
    if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
      throw new Error("supabaseUrl is required.");
    if (!t) throw new Error("supabaseKey is required.");
    const m = vr(e);
    if (
      ((this.realtimeUrl = `${m}/realtime/v1`.replace(/^http/i, "ws")),
      (this.authUrl = `${m}/auth/v1`),
      (this.storageUrl = `${m}/storage/v1`),
      m.match(/(supabase\.co)|(supabase\.in)/))
    ) {
      const k = m.split(".");
      this.functionsUrl = `${k[0]}.functions.${k[1]}.${k[2]}`;
    } else this.functionsUrl = `${m}/functions/v1`;
    const p = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
      g = {
        db: qr,
        realtime: Gr,
        auth: Object.assign(Object.assign({}, zr), { storageKey: p }),
        global: Hr,
      },
      v = _r(r != null ? r : {}, g);
    (this.storageKey =
      (n = (s = v.auth) === null || s === void 0 ? void 0 : s.storageKey) !==
        null && n !== void 0
        ? n
        : ""),
      (this.headers =
        (a = (o = v.global) === null || o === void 0 ? void 0 : o.headers) !==
          null && a !== void 0
          ? a
          : {}),
      (this.auth = this._initSupabaseAuthClient(
        (u = v.auth) !== null && u !== void 0 ? u : {},
        this.headers,
        (h = v.global) === null || h === void 0 ? void 0 : h.fetch
      )),
      (this.fetch = pr(
        t,
        this._getAccessToken.bind(this),
        (c = v.global) === null || c === void 0 ? void 0 : c.fetch
      )),
      (this.realtime = this._initRealtimeClient(
        Object.assign({ headers: this.headers }, v.realtime)
      )),
      (this.rest = new ft(`${m}/rest/v1`, {
        headers: this.headers,
        schema: (d = v.db) === null || d === void 0 ? void 0 : d.schema,
        fetch: this.fetch,
      })),
      this._listenForAuthEvents();
  }
  get functions() {
    return new it(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch,
    });
  }
  get storage() {
    return new cr(this.storageUrl, this.headers, this.fetch);
  }
  from(e) {
    return this.rest.from(e);
  }
  rpc(e, t = {}, r) {
    return this.rest.rpc(e, t, r);
  }
  channel(e, t = { config: {} }) {
    return this.realtime.channel(e, t);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var e, t;
    return Jr(this, void 0, void 0, function* () {
      const { data: r } = yield this.auth.getSession();
      return (t =
        (e = r.session) === null || e === void 0 ? void 0 : e.access_token) !==
        null && t !== void 0
        ? t
        : null;
    });
  }
  _initSupabaseAuthClient(
    {
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: s,
      storageKey: n,
    },
    o,
    a
  ) {
    const u = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    };
    return new Mr({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, u), o),
      storageKey: n,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: s,
      fetch: a,
    });
  }
  _initRealtimeClient(e) {
    return new Kt(
      this.realtimeUrl,
      Object.assign(Object.assign({}, e), {
        params: Object.assign(
          { apikey: this.supabaseKey },
          e == null ? void 0 : e.params
        ),
      })
    );
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((t, r) => {
      this._handleTokenChanged(
        t,
        r == null ? void 0 : r.access_token,
        "CLIENT"
      );
    });
  }
  _handleTokenChanged(e, t, r) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") &&
    this.changedAccessToken !== t
      ? (this.realtime.setAuth(t != null ? t : null),
        (this.changedAccessToken = t))
      : (e === "SIGNED_OUT" || e === "USER_DELETED") &&
        (this.realtime.setAuth(this.supabaseKey),
        r == "STORAGE" && this.auth.signOut());
  }
}
const Wr = (i, e, t) => new Vr(i, e, t),
  X = Wr(
    "https://udzlzmkqqsdnbbeqboub.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkemx6bWtxcXNkbmJiZXFib3ViIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjA3Njg4NSwiZXhwIjoxOTgxNjUyODg1fQ.kZX7oRFY5ZL2eI3p6W5p9PBpRPQOUxAuSv3i2dBEsyI"
  ),
  Xr = async (i, e) => await X.auth.signUp({ email: i, password: e }),
  Yr = async (i, e) =>
    await X.auth.signInWithPassword({ email: i, password: e }),
  Zr = async () => await X.auth.signOut(),
  Qr = async (i = "*", e = "id", t = !1) =>
    (await X.from("Tasks").select(i).order(e, { ascending: t })).data,
  es = async (i) => await X.from("Tasks").update({ discarded: !0 }).eq("id", i),
  ts = async (i) => await X.from("Tasks").update({ completed: !0 }).eq("id", i);
export { Zr as a, ts as c, es as d, Qr as g, Yr as l, Xr as s };
