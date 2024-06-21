<template>
  <header>
    <div class="container">
      <div class="header">
        <router-link to="/" class="logo"
          ><img
            class="icon_small"
            src="@/assets/img/icons/logo.svg"
            alt="logo"
        /></router-link>
        <SearchBar placeholder="Поиск товара" />
        <div class="icons">
          <img
            class="icon_small"
            src="@/assets/img/icons/heart.svg"
            alt="heart"
          />
          <img
            class="icon_small"
            src="@/assets/img/icons/cart.svg"
            alt="cart"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import SearchBar from "../ui/SearchBar.vue";
</script>
