<template>
  <nav
    class="group flex h-screen w-24 flex-col bg-slate-700 py-4 duration-500 sm:w-64"
    :class="[isOpen ? 'w-64' : 'w-24']"
  >
    <div class="flex items-center justify-between">
      <span class="p-2 text-white">Daniel Acosta</span>
      <Icon
        name="MenuIcon"
        :outline="true"
        class="mr-2 h-5 w-5 text-white"
        @click="changeSidebar"
      ></Icon>
    </div>

    <hr class="bg-white" />
    <NavItem
      v-for="item in items"
      :key="item"
      :title="item.title"
      :icon="item.icon"
      :children="item.children"
    >
    </NavItem>
  </nav>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import NavItemVue from "./NavItem.vue";
export default {
  components: {
    NavItem: NavItemVue,
    Icon: defineAsyncComponent(() => import("../components/Icon.vue")),
  },
  data() {
    return {
      isOpen: true,
      items: [
        {
          title: "Maestros",
          icon: "DocumentTextIcon",
          route: "kristen.ramos@example.com",
          children: [
            {
              title: "Bancos",
              route: "kristen.ramos@example.com",
            },
            {
              title: "Areas",
              route: "kristen.ramos@example.com",
            },
          ],
        },
        {
          title: "Departamentos",
          icon: "OfficeBuildingIcon",
          route: "kristen.ramos@example.com",
        },
        {
          title: "Usuarios",
          icon: "UserCircleIcon",
          route: "kristen.ramos@example.com",
        },
        {
          title: "Chats",
          icon: "ChatAltIcon",
          route: "kristen.ramos@example.com",
        },
        {
          title: "Seguridad",
          icon: "ShieldCheckIcon",
          route: "kristen.ramos@example.com",
        },
      ],
    };
  },
  methods: {
    changeSidebar() {
      console.log("changeSidebar");
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style></style>
