import { createRouter, createWebHashHistory } from "vue-router";
import login from "../pages/login.vue";

const routes = [
  {
    path: "",
    name: "dashboard",
    component: () => import("../pages/dashboard.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
