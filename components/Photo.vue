<script setup lang="ts">
import { IPhoto } from "~/interfaces/IPhoto";
import { useFavoriteStore } from "~/store/favorite";

const showFullView = ref(false);

const props = defineProps<{ photo: IPhoto }>();

const favoriteStore = useFavoriteStore();

function onButtonFavoriteClick(photo: IPhoto) {
  if (favoriteStore.isExistsInFavorite(photo.id)) {
    favoriteStore.removeFromFavorite(photo.id);
  } else {
    favoriteStore.addToFavorite(photo);
  }
}
</script>

<template>
  <div class="photo">
    <div class="photo__inner" @click="showFullView = true">
      <img
        class="photo__inner-image"
        :src="props.photo.thumbnailUrl"
        :alt="props.photo.title"
      />
      <slot name="title">
        <div class="photo__inner-name">
          {{ props.photo.title }}
        </div>
      </slot>
      <ButtonFavorite
        :is-active="favoriteStore.isExistsInFavorite(props.photo.id)"
        @click.stop="onButtonFavoriteClick(props.photo)"
      />
    </div>
    <Transition name="common">
      <div class="photo__fullview" v-if="showFullView">
        <img
          class="photo__fullview-image"
          :src="props.photo.url"
          :alt="props.photo.title"
        />
        <button
          class="photo__fullview-button-close"
          @click="showFullView = false"
        >
          <fa class="photo__fullview-button-close-icon" icon="xmark" />
        </button>
      </div>
    </Transition>
  </div>
</template>
