<script setup lang="ts">
import { useFavoriteStore } from "~/store/favorite";

const favoriteStore = useFavoriteStore();
</script>

<template>
  <div id="favorite" class="page-container">
    <img
      v-for="item in favoriteStore.getFavoriteList()"
      :src="item.thumbnailUrl"
      :alt="item.url"
    />
  </div>
</template>
