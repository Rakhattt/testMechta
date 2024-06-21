import { defineStore } from "pinia";
import { getProductsDetail } from "@/services/productDetail";

export const useProductDetailStore = defineStore("productDetail", {
  actions: {
    async getProductsDetailStore(id: string) {
      return await getProductsDetail(id);
    },
  },
});
