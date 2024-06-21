<template>
  <div class="filter">
    <span>Сортировать:</span>
    <div
      v-for="(option, index) in options"
      :key="index"
      class="filter-item"
      :class="{ active: activeSort === option.value }"
      @click="sortProducts(option.value)"
    >
      {{ option.text }}
    </div>
  </div>
  <div class="filter-select">
    <span>Сортировать: </span>
    <select @change="sortProducts($event.target.value)" :value="activeSort" class="filter-select_items">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { IPropsFilter } from "@/type/index.ts";

defineProps<IPropsFilter>();

const emit = defineEmits<{
  (e: "sort", value: string): void;
}>();
const sortProducts = (value: string) => {
  emit("sort", value);
};
</script>
