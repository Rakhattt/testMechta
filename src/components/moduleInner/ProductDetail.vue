<template>
  <section>
    <div class="container">
      <Loading :active="loading" />
      <div class="product-detail" v-if="product">
        <h2 class="product-detail_title">{{ product.title }}</h2>
        <div class="product-rating">
          <img
            class="product-rating_icon"
            src="@/assets/img/icons/stars.svg"
            alt="stars"
          />
          {{ product.rating }} отзывов
        </div>
        <div class="product-detail_wrap">
          <div class="product-detail_left">
            <img
              :src="product.image"
              alt="Product Image"
              class="product-detail_image"
            />
          </div>
          <div class="product-detail_right">
            <h2 class="product-title">{{ product.description }}</h2>
            <div class="product-detail_pr">О товаре</div>
            <div
              class="product-detail-wrapper"
              v-if="product.countryManufacturer"
            >
              <div class="product-detail-text_left">Страна-изготовитель</div>
              <div class="product-detail-text_right">
                {{ product.countryManufacturer }}
              </div>
            </div>
            <div class="product-detail-wrapper" v-if="product.material">
              <div class="product-detail-text_left">Материал оправы</div>
              <div class="product-detail-text_right">
                {{ product.material }}
              </div>
            </div>
            <div class="product-detail-wrapper" v-if="product.lenseMaterial">
              <div class="product-detail-text_left">Материал линзы</div>
              <div class="product-detail-text_right">
                {{ product.lenseMaterial }}
              </div>
            </div>
            <div class="product-detail-wrapper" v-if="product.lenseWidth">
              <div class="product-detail-text_left">Ширина линзы, мм</div>
              <div class="product-detail-text_right">
                {{ product.lenseWidth }}
              </div>
            </div>
            <div class="product-detail-wrapper" v-if="product.connector">
              <div class="product-detail-text_left">Разъем</div>
              <div class="product-detail-text_right">
                {{ product.connector }}
              </div>
            </div>
            <div class="product-detail_block">
              <div class="product-detail_price">{{ product.price }} ₸</div>
              <div class="d-flex">
                <button class="product-detail_button" @click="showModal = true">
                  Купить
                </button>
                <div class="product-detail_heart">
                  <img src="@/assets/img/icons/heart_blue.svg" alt="heart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal :visible="showModal" @close="showModal = false" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Modal from "../moduleInner/Modal.vue";
import Loading from "../ui/Loading.vue";
import { useProductDetailStore } from "@/store/productDetail";

const route = useRoute();
const product = ref<any>(null);
const showModal = ref(false);
const loading = ref(true);
const store = useProductDetailStore();

const getProductDetails = async (id: string) => {
  loading.value = true;
  try {
    const response = await store.getProductsDetailStore(id);
    product.value = response.data;
    loading.value = false;
  } catch (error) {
    console.error("Error", error);
  }
};

onMounted(() => {
  const id = route.params.id as string;
  getProductDetails(id);
});
</script>
@/servicesLib
