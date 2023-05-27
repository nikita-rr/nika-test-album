<script setup lang="ts">
import { useFavoriteStore } from "~/store/favorite";

const favoriteStore = useFavoriteStore();
</script>

<template>
  <div id="favorite" class="page-container">
    <div class="photos">
      <Photo v-for="item in favoriteStore.getFavoriteList()" :photo="item" />
    </div>
  </div>
</template>
