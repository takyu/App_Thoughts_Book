import { createRouter, createWebHistory } from "vue-router";

/**
 * components
 */
import BookIndex from "@/pages/BookIndex";
import BookSearch from "@/pages/BookSearch";
import BookEdit from "@/pages/BookEdit";

/**
 * test components
 */
import ApiTest from "@/components/test/ApiTest.vue";
import LocalStorageTest from "@/components/test/LocalStorageTest.vue";

const routes = [
  {
    path: "/",
    name: "BookIndex",
    component: BookIndex,
  },
  {
    path: "/search",
    name: "BookSearch",
    component: BookSearch,
  },
  {
    path: "/edit/:id",
    name: "BookEdit",
    component: BookEdit,
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
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
