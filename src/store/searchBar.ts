import { defineStore } from "pinia";
import { getSearchBar } from "@/services/searchBar";

export const getSearchBarStore = defineStore("getSearchBarStore", {
  actions: {
    async getSearchBarStore(query: string) {
      return await getSearchBar(query);
    },
  },
});
