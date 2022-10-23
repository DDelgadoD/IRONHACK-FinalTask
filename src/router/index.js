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
          import(/* webpackChunkName: 'landing' */ "../components/Landing.vue"),
      },
      {
        path: "/trash",
        name: "trash",
        component: () =>
          import(/* webpackChunkName: 'trash' */ "../components/Trash.vue"),
      },
      {
        path: "/completed",
        name: "completed",
        component: () =>
          import(
            /* webpackChunkName: 'completed' */ "../components/Completed.vue"
          ),
      },
    ],
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: 'auths' */ "../views/Auths.vue"),
    children: [
      {
        path: "/login",
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
