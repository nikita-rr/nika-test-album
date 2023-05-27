<script setup lang="ts">
import { ref } from "vue";
import { IAlbum } from "~/interfaces/IAlbum";
import { IPhoto } from "~/interfaces/IPhoto";
import { fetchPhotos } from "~/requests/fetchPhotos";

const props = defineProps<{ album: IAlbum }>();
const loading = ref(false);
let photos = ref<IPhoto[]>([]);

async function fetchData() {
  try {
    loading.value = true;
    photos.value = await fetchPhotos(props.album.id);
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <CollapseItem
    :title="props.album.title"
    :title-style="{ paddingLeft: '60px' }"
    @expand="fetchData()"
  >
    <CatalogPhotos v-if="!loading" :photos="photos" />
  </CollapseItem>
</template>
