import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/', 
    name: "home", 
    component: () => import('../views/Home.vue')
  },
  { 
    path: '/login', 
    component: () => import('../views/LogOrSign.vue'),
    children: [
      {
          path: '',
          name: 'login',
          component: () => import('../components/Login.vue')
      },
      {
        path: '/signup',
        name: 'signup',
        component: () => import('../components/Signup.vue')
    }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
