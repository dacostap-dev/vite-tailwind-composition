import { createRouter, createWebHashHistory } from "vue-router";
import login from "../pages/login.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../layouts/dashboard.vue"),
    children: [
      {
        path: "",
        name: "page1",
        component: () => import("../pages/page1.vue"),
      },
      {
        path: "page-2",
        name: "page2",
        component: () => import("../pages/page2.vue"),
      },
    ]
  },

];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
