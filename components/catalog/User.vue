<script setup lang="ts">
import { ref } from "vue";
import { IAlbum } from "~/interfaces/IAlbum";
import { IUser } from "~/interfaces/IUser";
import { fetchAlbums } from "~/requests/fetchAlbums";

const props = defineProps<{ user: IUser }>();
const loading = ref(false);
const albums = ref<IAlbum[]>([]);

async function fetchData() {
  try {
    loading.value = true;
    albums.value = await fetchAlbums(props.user.id);
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <CollapseItem
    :title="props.user.name"
    :title-style="{ paddingLeft: '30px' }"
    @expand="fetchData()"
  >
    <template v-if="!loading">
      <CatalogAlbum v-for="item in albums" :album="item" />
    </template>
  </CollapseItem>
</template>
