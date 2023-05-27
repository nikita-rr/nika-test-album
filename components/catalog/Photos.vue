<template>
  <div class="photos">
    <div class="photos__item" v-for="item in props.photos">
      <div class="photos__item-inner">
        <img
          class="photos__item-inner-image"
          :src="item.thumbnailUrl"
          :alt="item.title"
        />
        <div class="photos__item-inner-name">
          {{ item.title }}
        </div>
        <ButtonFavorite
          :is-active="favoriteStore.isExistsInFavorite(item.id)"
          @click="onButtonFavoriteClick(item)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPhoto } from "~/interfaces/IPhoto";
import { useFavoriteStore } from "~/store/favorite";
const props = defineProps<{ photos: IPhoto[] }>();

const favoriteStore = useFavoriteStore();

function onButtonFavoriteClick(photo: IPhoto) {
  if (favoriteStore.isExistsInFavorite(photo.id)) {
    favoriteStore.removeFromFavorite(photo.id);
  } else {
    favoriteStore.addToFavorite(photo);
  }
}
</script>
