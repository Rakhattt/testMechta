<template>
  <div class="product">
    <router-link :to="`/${product.id}`">
      <img
        v-if="!imageLoaded"
        src="@/assets/img/default.png"
        alt="Loading..."
        class="product-default-image"
      />
      <img
        v-show="imageLoaded"
        :src="product.image"
        alt="Product Image"
        class="product-image"
        @load="onImageLoad"
        :style="{ opacity: imageLoaded ? 1 : 0 }"
      />
    </router-link>
    <h2 class="product-title">{{ product.title }}</h2>
    <div class="product-rating">
      <img
        class="product-rating_icon"
        src="@/assets/img/icons/stars.svg"
        alt="stars"
      />
      {{ product.rating }} отзывов
    </div>
    <div class="product-wrap">
      <div class="product-price">Цена: {{ product.price }}</div>
      <div class="product-cart_icon">
        <div class="product-cart_img">
          <img src="@/assets/img/icons/cart_white.svg" alt="cart" />
        </div>
      </div>
    </div>
    <div class="product-abs">
      <img src="@/assets/img/icons/heart_white.svg" alt="heart" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IPropsProduct } from "@/type/index.ts"
import { ref } from "vue";

defineProps<{product: IPropsProduct}>();

const imageLoaded = ref(false);

const onImageLoad = () => {
  imageLoaded.value = true;
};
</script>
