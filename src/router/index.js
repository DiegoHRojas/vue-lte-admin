import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./../views/Home.vue"),
  },

  {
    path: "/admin/:view",
    name: "Admin",
    component: () => import("./../views/Admin.vue"),
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
