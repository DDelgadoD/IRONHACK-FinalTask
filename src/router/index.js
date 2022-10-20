import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/', 
    name: "home", 
    component: () => import(/* webpackChunkName: 'home' */ '../views/Home.vue')
  },
  { 
    path: '/login', 
    component: () => import(/* webpackChunkName: 'login' */ '../views/LogOrSign.vue'),
    children: [
      {
          path: '',
          name: 'login',
          component: () => import(/* webpackChunkName: 'login' */ '../components/Login.vue')
      },
      {
        path: '/signup',
        name: 'signup',
        component: () => import(/* webpackChunkName: 'signup' */'../components/Signup.vue')
    }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
