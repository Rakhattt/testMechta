<template>
  <div class="search-bar">
    <input v-model="query" :placeholder="placeholder" @change="searchData" />
    <div class="header_search">
      <img
        class="icon_search"
        src="@/assets/img/icons/search.svg"
        alt="search"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useProductStore } from "@/store/product";
import { IPropsSearchBar } from "@/type/index.ts";
import { getSearchBarStore } from "@/store/searchBar";

defineProps<IPropsSearchBar>();

const query = ref("");
const productStore = useProductStore();
const loading = ref(false);
const searchBarStore = getSearchBarStore();
const searchData = async () => {
  productStore.setSearchQuery(query.value);
  productStore.clearProducts();

  try {
    loading.value = true;
    const response = await searchBarStore.getSearchBarStore(query.value);
    productStore.setProducts(response.data);
  } catch (error) {
    console.error("Error", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  productStore.loadFromLocalStorage();
  query.value = productStore.searchQuery;
});
</script>
