<template>
  <component :is="icon" />
</template>

<script>
import * as solid from "@heroicons/vue/solid";
import * as outline from "@heroicons/vue/outline";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    outline: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    icons() {
      return { solid, outline };
    },

    icon() {
      return this.icons[this.outline ? "outline" : "solid"][this.name];
    },
  },
};
</script>
