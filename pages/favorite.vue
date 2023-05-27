<script setup lang="ts">
import { useFavoriteStore } from "~/store/favorite";

const favoriteStore = useFavoriteStore();
</script>

<template>
  <div id="favorite" class="page-container">
    <div class="photos">
      <Photo v-for="item in favoriteStore.getFavoriteList()" :photo="item">
        <template #title>
          <span class="favorite-photo-title">{{ item.title }}</span>
        </template>
      </Photo>
    </div>
  </div>
</template>
