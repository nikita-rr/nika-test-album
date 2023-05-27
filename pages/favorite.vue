<script setup lang="ts">
import { useFavoriteStore } from "~/store/favorite";

const favoriteStore = useFavoriteStore();
const favoriteList = favoriteStore.getFavoriteList();
</script>

<template>
  <div id="favorite" class="page-container">
    <div class="photos">
      <template v-if="favoriteList && favoriteList.length">
        <Photo v-for="item in favoriteList" :photo="item">
          <template #title>
            <span class="favorite-photo-title">{{ item.title }}</span>
          </template>
        </Photo>
      </template>
      <template v-else>
        <div class="favorite-empty-state">
          <fa
            class="favorite-empty-state__icon"
            :icon="['far', 'face-sad-cry']"
          />
          <h2 class="favorite-empty-state__title">Список избранного пуст</h2>
          <div class="favorite-empty-state__additional">
            Добавляйте изображения нажимая на звездочки
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
