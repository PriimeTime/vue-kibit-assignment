import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
  //   {
  //     path: "/",
  //     component: () => import("~/App.vue"),
  //     meta: {},
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
