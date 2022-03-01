import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

/**
 * test components
 */
import ApiTest from "@/views/test/ApiTest.vue";
import LocalStorageTest from "@/views/test/LocalStorageTest.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/apitest",
    name: "ApiTest",
    component: ApiTest,
  },
  {
    path: "/localstoragetest",
    name: "LocalStorageTest",
    component: LocalStorageTest,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
