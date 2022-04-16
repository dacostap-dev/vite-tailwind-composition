<template>
  <div
    class="flex transform cursor-pointer items-center rounded-sm p-4 text-white transition-all duration-700"
    @click="isOpen = !isOpen"
  >
    <Icon
      :name="icon"
      :outline="true"
      class="mr-2 h-10 w-10 sm:h-5 sm:w-5"
    ></Icon>
    <span class="hidden grow sm:block">{{ title }}</span>

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
    class="flex items-center bg-green-300 p-4 pl-10"
    :class="[isOpen ? '' : 'hidden']"
  >
    <Icon name="MinusSmIcon" :outline="true" class="h-5 w-5"></Icon>

    <span>{{ child.title }}</span>
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
