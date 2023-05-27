<template>
  <div id="catalog" class="page-container">
    <CatalogUser v-for="user in users" :user="user" />
  </div>
</template>

<script setup lang="ts">
import { IUser } from "~/interfaces/IUser";
import { fetchUsers } from "~/requests/fetchUsers";
const users = ref<IUser[]>();
users.value = await fetchUsers();
</script>
