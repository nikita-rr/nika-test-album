<script setup lang="ts">
const navigationItems = [
  {
    name: "Каталог",
    path: "/",
  },
  {
    name: "Избранное",
    path: "/favorite",
    icon: ["far", "star"],
    routeActiveIcon: "star",
  },
];
function isActiveRoute(routePath: string) {
  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
  <div class="navigation">
    <NuxtLink
      class="navigation__item"
      v-for="item in navigationItems"
      :to="item.path"
    >
      <div class="navigation__item-icon">
        <fa
          v-if="item.icon"
          :icon="isActiveRoute(item.path) ? item.routeActiveIcon : item.icon"
        />
      </div>
      <div class="navigation__item-name">{{ item.name }}</div>
    </NuxtLink>
  </div>
</template>
