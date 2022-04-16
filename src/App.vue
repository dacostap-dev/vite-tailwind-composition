<template><router-view></router-view></template>
<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    Nav: defineAsyncComponent(() => import("./components/Nav.vue")),
  },
};
</script>
<style></style>
