import {
  _ as v,
  b as o,
  c as d,
  F as p,
  n as f,
  f as u,
  t as _,
  p as k,
  j as h,
  d as x,
  r as t,
  o as T,
  e as m,
} from "./index.6474dcd1.js";
import { T as y } from "./Tasks.31faa64b.js";
import { i as B } from "./index.6b8ad705.js";
import "./auth.8e58f513.js";
import "./index.5fbf75cc.js";
const L = (a) => (k("data-v-35901256"), (a = a()), h(), a),
  g = { class: "container day-case" },
  I = L(() => x("h1", null, "Timeline", -1)),
  S = { class: "col mb-4" },
  b = { key: 0 },
  F = {
    __name: "TimeLine",
    props: { tasks: Object, loaded: Boolean },
    setup(a) {
      return (n, i) => (
        o(),
        d("div", g, [
          I,
          a.loaded
            ? (o(!0),
              d(
                p,
                { key: 0 },
                f(
                  a.tasks,
                  (s) => (
                    o(),
                    d("div", S, [
                      s.max_time
                        ? (o(),
                          d("div", b, _(s.max_time) + ": " + _(s.title), 1))
                        : u("", !0),
                    ])
                  )
                ),
                256
              ))
            : u("", !0),
        ])
      );
    },
  },
  N = v(F, [["__scopeId", "data-v-35901256"]]),
  D = {
    __name: "Landing",
    setup(a) {
      const n = t(!1),
        i = t(void 0),
        s = t(void 0),
        l = t(void 0),
        c = t({ discarded: [], completed: [], active: [] });
      return (
        T(async () => {
          (i.value = await B()),
            i.value.map((e) =>
              e.discarded
                ? c.value.discarded.push(e)
                : e.completed
                ? c.value.completed.push(e)
                : c.value.active.push(e)
            ),
            (s.value = c.value.active),
            (l.value = [...s.value].sort((e, r) =>
              e.max_time > r.max_time ? 1 : -1
            )),
            (n.value = !0);
        }),
        (e, r) => (
          o(),
          d(
            p,
            null,
            [
              m(N, { loaded: n.value, tasks: l.value }, null, 8, [
                "loaded",
                "tasks",
              ]),
              m(y, { loaded: n.value, tasks: s.value }, null, 8, [
                "loaded",
                "tasks",
              ]),
            ],
            64
          )
        )
      );
    },
  };
export { D as default };
