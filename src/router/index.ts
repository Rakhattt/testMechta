import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "products",
    component: () => import("../components/module/Products.vue"),
    meta: {
      breadcrumb: "Товары",
      pageTitle: "Общие товары",
    },
  },
  {
    path: "/:id",
    name: "productDetail",
    component: () => import("../components/moduleInner/ProductDetail.vue"),
    meta: {
      breadcrumb: "Товар",
      pageTitle: "Тест",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
