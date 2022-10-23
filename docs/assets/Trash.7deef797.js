import { T as l } from "./Tasks.31faa64b.js";
import { i as r } from "./index.6b8ad705.js";
import { r as s, o as c, b as u, q as n } from "./index.6474dcd1.js";
import "./auth.8e58f513.js";
import "./index.5fbf75cc.js";
const h = {
  __name: "Trash",
  setup(i) {
    const o = s(!1),
      d = s(void 0),
      t = s(void 0),
      e = s({ discarded: [], completed: [], active: [] });
    return (
      c(async () => {
        (d.value = await r()),
          d.value.map((a) =>
            a.discarded
              ? e.value.discarded.push(a)
              : a.completed
              ? e.value.completed.push(a)
              : e.value.active.push(a)
          ),
          (t.value = e.value.discarded),
          console.log("task Discarded: ", e.value),
          (o.value = !0);
      }),
      (a, p) => (
        u(),
        n(l, { loaded: o.value, tasks: t.value }, null, 8, ["loaded", "tasks"])
      )
    );
  },
};
export { h as default };
