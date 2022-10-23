import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () =>
            import(/* webpackChunkName: 'home' */ "../views/Main.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () =>
                    import(
                        /* webpackChunkName: 'landing' */ "../views/MainChildren/Home.vue"
                    ),
            },
            {
                path: "/trash",
                name: "trash",
                component: () =>
                    import(
                        /* webpackChunkName: 'trash' */ "../views/MainChildren/Trash.vue"
                    ),
            },
            {
                path: "/completed",
                name: "completed",
                component: () =>
                    import(
                        /* webpackChunkName: 'completed' */ "../views/MainChildren/Completed.vue"
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
                    import(
                        /* webpackChunkName: 'login' */ "../views/AuthChildren/Login.vue"
                    ),
            },
            {
                path: "/signup",
                name: "signup",
                component: () =>
                    import(
                        /* webpackChunkName: 'signup' */ "../views/AuthChildren/Signup.vue"
                    ),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
