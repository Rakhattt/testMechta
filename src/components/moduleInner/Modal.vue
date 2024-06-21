<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <img src="@/assets/img/icons/times.svg" alt="close" />
        </button>
        <div class="modal-body">
          <div class="modal-icon">
            <img src="@/assets/img/gift.png" alt="Gift" />
          </div>
          <h2>Спасибо за заказ!</h2>
          <p>Уже собираем</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { IPropsModal } from "@/type/index.ts"

defineProps<IPropsModal>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeModal = () => {
  emit("close");
};
</script>
