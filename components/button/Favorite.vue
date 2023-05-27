<script setup lang="ts">
const isActive = ref(false);
</script>

<template>
  <button
    class="button-favorite"
    @click="isActive = !isActive"
    :class="{ 'is-active': isActive }"
  >
    <fa
      class="button-favorite__icon"
      :icon="isActive ? 'star' : ['far', 'star']"
    />
  </button>
</template>
