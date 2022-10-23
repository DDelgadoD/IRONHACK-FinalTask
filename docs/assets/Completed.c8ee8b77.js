import { T as d } from "./Tasks.31faa64b.js";
import { i as c } from "./index.6b8ad705.js";
import { r as s, o as u, b as r, q as n } from "./index.6474dcd1.js";
import "./auth.8e58f513.js";
import "./index.5fbf75cc.js";
const h = {
  __name: "Completed",
  setup(p) {
    const o = s(!1),
      t = s(void 0),
      l = s(void 0),
      a = s({ discarded: [], completed: [], active: [] });
    return (
      u(async () => {
        (t.value = await c()),
          t.value.map((e) =>
            e.discarded
              ? a.value.discarded.push(e)
              : e.completed
              ? a.value.completed.push(e)
              : a.value.active.push(e)
          ),
          (l.value = a.value.completed),
          console.log("task Completed: ", a.value),
          (o.value = !0);
      }),
      (e, i) => (
        r(),
        n(d, { loaded: o.value, tasks: l.value }, null, 8, ["loaded", "tasks"])
      )
    );
  },
};
export { h as default };
