import { l as s } from "./index.6474dcd1.js";
const o = s("auth", {
  state: () => ({ isAuth: !1, user: "" }),
  actions: {
    login(t) {
      (this.isAuth = !0), (this.user = t);
    },
    logout() {
      (this.isAuth = !1), (this.user = ""), console.log("W");
    },
  },
  persist: {
    enabled: !0,
    strategies: [{ key: "auth", storage: localStorage }],
  },
});
export { o as u };
