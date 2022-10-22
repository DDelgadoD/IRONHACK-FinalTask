import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: 'home' */ "../views/Home.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () =>
          import(/* webpackChunkName: 'login' */ "../components/Landing.vue"),
      },
      {
        path: "/trash",
        name: "trash",
        component: () =>
          import(/* webpackChunkName: 'login' */ "../components/Trash.vue"),
      },
      {
        path: "/completed",
        name: "completed",
        component: () =>
          import(/* webpackChunkName: 'login' */ "../components/Completed.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: 'login' */ "../views/Auths.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () =>
          import(/* webpackChunkName: 'login' */ "../components/Login.vue"),
      },
      {
        path: "/signup",
        name: "signup",
        component: () =>
          import(/* webpackChunkName: 'signup' */ "../components/Signup.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
