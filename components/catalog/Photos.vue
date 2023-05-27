<template>
  <div class="photos">
    <div class="photos__item" v-for="item in props.photos">
      <img
        class="photos__item-image"
        :src="item.thumbnailUrl"
        :alt="item.title"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPhoto } from "~/interfaces/IPhoto";

const props = defineProps<{ photos: IPhoto[] }>();
</script>
