<template>
  <Header />
  <Breadcrumbs />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/module/Header.vue";
import Breadcrumbs from "./components/ui/Breadcrumbs.vue";
export default defineComponent({
  name: "App",
  components: {
    Header,
    Breadcrumbs,
  },
});
</script>
