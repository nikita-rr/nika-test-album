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
    setTimeout(() => {
      //Просто что б загрузка немного покрутилась
      loading.value = false;
    }, 400);
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <CollapseItem
    :title="props.album.title"
    :title-style="{ paddingLeft: '60px' }"
    :loading="loading"
    @expand="fetchData()"
  >
    <div class="photos">
      <Photo v-for="item in photos" :photo="item" />
    </div>
  </CollapseItem>
</template>
