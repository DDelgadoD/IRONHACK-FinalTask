import { l as r } from "./index.be43a535.js";
import { u as c } from "./auth.187cabc7.js";
import { g as i, l, a as n, d, c as u } from "./index.72bcf63d.js";
const p = r("tasks", {
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
  t = p(),
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
      t.loadedSupa == !1
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
export { T as a, S as b, b as c, y as d, w as e, g as f, h as i, p as u };
