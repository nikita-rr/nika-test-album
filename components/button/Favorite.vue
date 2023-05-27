<script setup lang="ts">
const props = defineProps<{ isActive: boolean }>();
</script>

<template>
  <button class="button-favorite" :class="{ 'is-active': props.isActive }">
    <fa
      class="button-favorite__icon"
      :icon="isActive ? 'star' : ['far', 'star']"
    />
  </button>
</template>
