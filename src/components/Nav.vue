<template>
  <nav
    class="group fixed flex h-screen flex-col bg-slate-700 py-4 duration-200"
    :class="[isNavOpen ? 'w-64' : 'w-24']"
  >
    <div class="flex items-center justify-between">
      <span class="p-2 text-white" :class="{ hidden: !isNavOpen }"
        >Daniel Acosta</span
      >
      <Icon
        name="UserIcon"
        :outline="true"
        class="h-10 w-10 grow p-1.5 text-white"
        :class="{ hidden: isNavOpen }"
        @click="changeSidebar"
      ></Icon>
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
      :isNavOpen="isNavOpen"
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
      isNavOpen: true,
      items: [
        {
          title: "Maestros",
          icon: "DocumentTextIcon",
          route: "kristen.ramos@example.com",
          children: [
            {
              title: "Bancos",
              icon: "DocumentTextIcon",
              route: "kristen.ramos@example.com",
            },
            {
              title: "Areas",
              icon: "DocumentTextIcon",
              route: "kristen.ramos@example.com",
            },
          ],
        },
        {
          title: "Departamentos",
          icon: "OfficeBuildingIcon",
          route: "kristen.ramos@example.com",
          children: [
            {
              title: "Bancos",
              icon: "OfficeBuildingIcon",
              route: "kristen.ramos@example.com",
            },
            {
              title: "Areas",
              icon: "OfficeBuildingIcon",
              route: "kristen.ramos@example.com",
            },
          ],
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
      this.isNavOpen = !this.isNavOpen;
      this.$emit("isNavOpen", this.isNavOpen);
    },
  },
};
</script>

<style></style>
