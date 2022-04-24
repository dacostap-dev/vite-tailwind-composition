<template>
  <Nav @isNavOpen="changeSize"></Nav>
  <div
    class="flex h-screen w-screen flex-col duration-300"
    :class="[isOpen ? 'pl-64' : 'pl-24']"
  >
    <header class="bg-yellow-300">Soy Header</header>
    <main class="h-5/6 grow bg-purple-400">
      <div class="container p-3">
        <router-view></router-view>
      </div>
    </main>
    <footer class="mx-auto h-56 w-full columns-3 bg-green-400 p-10">
      <li class="list-disc">1</li>
      <li class="list-disc">1</li>
      <li class="list-disc">1</li>
      <li class="list-disc">1</li>
      <li class="list-disc">1</li>
      <li class="list-disc">1</li>
    </footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    Nav: defineAsyncComponent(() => import("../components/Nav.vue")),
  },
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    changeSize(isOpen) {
      this.isOpen = isOpen;
    },
  },
};
</script>

<style></style>
