import { defineStore } from "pinia";
import { getProducts } from "@/services/products";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    searchQuery: "",
  }),
  actions: {
    setProducts(products: any) {
      this.products = products;
      this.saveToLocalStorage();
    },
    appendProducts(products: any) {
      this.products = [...this.products, ...products];
      this.saveToLocalStorage();
    },
    setSearchQuery(query: string) {
      this.searchQuery = query;
      this.saveToLocalStorage();
    },
    clearProducts() {
      this.products = [];
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("products", JSON.stringify(this.products));
      localStorage.setItem("searchQuery", this.searchQuery);
    },
    loadFromLocalStorage() {
      const products = localStorage.getItem("products");
      const searchQuery = localStorage.getItem("searchQuery");
      if (products) {
        this.products = JSON.parse(products);
      }
      if (searchQuery) {
        this.searchQuery = searchQuery;
      }
    },
    async getProductsStore(page: number, limit: number, orderParam: string) {
      return await getProducts(page, limit, orderParam);
    },
  },
});
