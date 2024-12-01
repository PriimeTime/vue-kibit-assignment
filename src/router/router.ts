import { useAuthStore } from "@/stores/auth";
import path from "path";
import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/LandingPage.vue"),
    meta: {},
  },
  {
    path: "/my-jobs",
    component: () => import("@/views/MyJobs.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
    meta: {},
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterPage.vue"),
    meta: {},
  },
  {
    path: "/job-detail/:id",
    name: "job-detail",
    component: () => import("@/views/JobDetailPage.vue"),
    meta: {},
  },
  {
    path: "/job-detail/:id/apply",
    name: "job-application",
    component: () => import("@/views/JobApplicationPage.vue"),
    meta: {},
  },
  {
    path: "/application-success",
    name: "application-success",
    component: () => import("@/views/ApplicationSuccessPage.vue"),
    meta: {},
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/ErrorPage.vue"),
    meta: {},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard
router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.user) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
