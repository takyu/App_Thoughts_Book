import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

/**
 * test components
 */
import ApiTest from "@/components/test/ApiTest.vue";
import LocalStorageTest from "@/components/test/LocalStorageTest.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
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
