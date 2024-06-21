<template>
  <main>
    <div class="container">
      <Filter
        :options="sortOptions"
        :active-sort="activeSort"
        @sort="handleSort"
      />
      <Loading :active="loading" />
      <div class="products" ref="productsContainer">
        <Product
          v-for="(product, index) in sortedProducts"
          :key="index"
          :product="product"
        ></Product>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, onBeforeUnmount } from "vue";
import Product from "../moduleInner/Product.vue";
import Filter from "../moduleInner/Filter.vue";
import Loading from "../ui/Loading.vue";
import { useProductStore } from "@/store/product";

const activeSort = ref("popularity");
const page = ref(1);
const limit = ref(12);
const loading = ref(false);
const endOfList = ref(false);
const productsContainer = ref<HTMLElement | null>(null);
const loadingNextPage = ref(false);
const productStore = useProductStore();

const sortOptions = [
  { text: "По популярности", value: "popularity" },
  { text: "Сначала подешевле", value: "price_asc" },
  { text: "Сначала подороже", value: "price_desc" },
  { text: "Сначала новое", value: "newest" },
  { text: "По алфавиту", value: "alphabet" },
];

const getDataProducts = async () => {
  if (
    loading.value ||
    endOfList.value ||
    loadingNextPage.value ||
    productStore.searchQuery
  )
    return;

  loadingNextPage.value = true;
  try {
    let orderParam =
      activeSort.value === "price_asc"
        ? "&order=asc"
        : activeSort.value === "price_desc"
          ? "&order=desc"
          : "";

    const response = await productStore.getProductsStore(
      page.value,
      limit.value,
      orderParam
    );

    if (response.data.length < limit.value) {
      endOfList.value = true;
    }
    productStore.appendProducts(response.data);
    page.value++;
  } catch (error) {
    console.error("Error", error);
  } finally {
    loadingNextPage.value = false;
    loading.value = false;
  }
};

const sortedProducts = computed(() => [...productStore.products]);

const handleSort = (sortValue: string) => {
  activeSort.value = sortValue;
  page.value = 1;
  endOfList.value = false;
  productStore.clearProducts();
  getDataProducts();
};

const handleScroll = () => {
  const element = productsContainer.value || document.documentElement;
  if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    getDataProducts();
  }
};

const addScrollListener = () => {
  const element = productsContainer.value || window;
  element.addEventListener("scroll", handleScroll);
};

const removeScrollListener = () => {
  const element = productsContainer.value || window;
  element.removeEventListener("scroll", handleScroll);
};

onMounted(() => {
  productStore.loadFromLocalStorage();
  if (!productStore.products.length) {
    getDataProducts();
  }
  addScrollListener();
});

onBeforeUnmount(() => {
  removeScrollListener();
});
</script>
