import { T as l } from "./Tasks.636e68f2.js";
import { i as r } from "./index.0b576dc2.js";
import { r as s, o as c, b as u, q as n } from "./index.4bfbbcf5.js";
import "./auth.a934d963.js";
import "./index.5913c7f2.js";
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
