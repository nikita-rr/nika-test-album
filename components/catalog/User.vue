<script setup lang="ts">
import { ref } from "vue";
import { IAlbum } from "~/interfaces/IAlbum";
import { IUser } from "~/interfaces/IUser";
import { fetchAlbums } from "~/requests/fetchAlbums";

const props = defineProps<{ user: IUser }>();
const loading = ref(false);
const albums = ref<IAlbum[]>([]);

// Компоненты Album и User получились очень похожими, но нужно понимать, что это разные сущности, что бы в них было меньше кода
// fetchData() можно поместить в CollapseItem и передавать нужную функцию из requests, а данные рисовать через slot scope.
// Но это плохо дня расширяемости и CollapseItem в таком случае будет получатся слишком перегруженым
async function fetchData() {
  try {
    loading.value = true;
    albums.value = await fetchAlbums(props.user.id);
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
    :title="props.user.name"
    :title-style="{ paddingLeft: '30px', fontWeight: '600' }"
    @expand="fetchData()"
    :loading="loading"
  >
    <CatalogAlbum v-for="item in albums" :album="item" :key="item.id" />
  </CollapseItem>
</template>
