<template>
  <div class="spinner" v-if="active">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingSpinner",
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
