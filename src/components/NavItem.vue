<template>
  <div
    class="group flex transform cursor-pointer items-center rounded-sm p-4 text-white transition-all duration-700"
    @click="isOpen = !isOpen"
  >
    <Icon
      :name="icon"
      :outline="true"
      class="mr-2"
      :class="[isNavOpen ? 'h-5 w-5' : 'h-8 w-8 ']"
    ></Icon>
    <span class="grow" :class="[isNavOpen ? 'block' : 'hidden']">{{
      title
    }}</span>

    <Icon
      v-if="hasChindren"
      name="ChevronRightIcon"
      :outline="true"
      :class="[isOpen ? 'rotate-90' : '']"
      class="h-5 w-5"
    ></Icon>
  </div>

  <div
    v-for="child in children"
    :key="child"
    class="flex items-center bg-slate-500 pl-10 text-white transition-all duration-300"
    :class="[isOpen ? 'h-10 p-4 ' : 'h-0 overflow-hidden']"
  >
    <Icon
      :name="child.icon"
      :outline="true"
      class="mr-4"
      :class="[isNavOpen ? 'h-5 w-5' : 'h-8 w-8 ']"
    ></Icon>

    <span class="grow" :class="[isNavOpen ? 'block' : 'hidden']">{{
      child.title
    }}</span>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "ChevronRightIcon",
    },
    children: {
      type: Array,
      required: false,
      default: [],
    },
    isNavOpen: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Icon: defineAsyncComponent(() => import("../components/Icon.vue")),
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    hasChindren() {
      return this.children.length > 0;
    },
  },
};
</script>

<style></style>
