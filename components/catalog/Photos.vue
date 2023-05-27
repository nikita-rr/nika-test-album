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
        <ButtonFavorite />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPhoto } from "~/interfaces/IPhoto";

const props = defineProps<{ photos: IPhoto[] }>();
</script>
