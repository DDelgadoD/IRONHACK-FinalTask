import { l as r } from "./index.4bfbbcf5.js";
import { u as c } from "./auth.a934d963.js";
import { g as i, l, a as n, d, c as u } from "./index.5913c7f2.js";
const k = r("tasks", {
    state: () => ({ loadedSupa: !1, tasks: [], discarded: !1, completed: !1 }),
    actions: {
      init(s) {
        (this.tasks = [...s]), (this.loadedSupa = !0);
      },
      disc() {
        this.discarded = !0;
      },
      comp() {
        this.completed = !0;
      },
      getTasks() {
        return this.tasks;
      },
      deleteTasks() {
        (this.tasks = ""),
          (this.loadedSupa = !1),
          (this.completed = !1),
          (this.discarded = !1);
      },
      deleteTask(s) {
        const e = this.tasks.map((o) => o.id).indexOf(s);
        console.log(e), this.tasks.splice(e, 1);
      },
      discardTask(s) {
        this.tasks.map((e) => {
          e.id == s && (e.discarded = !0);
        });
      },
      completeTask(s) {
        this.tasks.map((e) => {
          e.id == s && (e.completed = !0);
        });
      },
    },
    persist: {
      enabled: !0,
      strategies: [{ key: "tasks", storage: localStorage }],
    },
  }),
  t = k(),
  a = c(),
  g = async (s) => {
    const e = await l(s.value.email.content, s.value.password.content);
    return e.error == null && a.login(e.data.user.id), e.error;
  },
  T = async () => {
    let s = "logued out";
    const e = await n();
    return e.error == null ? (t.deleteTasks(), a.logout()) : (s = e.error), s;
  },
  h = async () => {
    let s;
    return (
      t.loaded == !1
        ? ((s = await i()), t.init(s), console.log("from supa: "))
        : ((s = t.getTasks()), console.log("from local: ")),
      console.log(s),
      s
    );
  },
  S = async (s) => {
    const e = await d(s);
    return e.error == null && t.discardTask(s), e.error;
  },
  w = async (s) => {
    const e = await u(s);
    return e.error == null && t.completeTask(s), e.error;
  },
  y = () => {
    t.disc();
  },
  b = () => {
    t.comp();
  };
export { T as a, S as b, b as c, y as d, w as e, g as f, h as i, k as u };
