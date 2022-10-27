import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuth: false,
    user: "",
  }),

  actions: {
    login(id) {
      this.isAuth = true;
      this.user = id;
    },

    logout() {
      this.isAuth = false;
      this.user = "";
      console.log("bye");
    },

    getUser() {
      return this.user;
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "auth",
        storage: localStorage,
      },
    ],
  },
});
