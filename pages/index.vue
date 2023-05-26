<template>
  <div id="catalog" class="page-container">
    <UserCollapseItem v-for="user in data" :user="user" />
  </div>
</template>

<script setup lang="ts">
import { IUser } from "~/interfaces/IUser";
const { data } = await useFetch<IUser[]>(
  "http://jsonplaceholder.typicode.com/users"
);
</script>
