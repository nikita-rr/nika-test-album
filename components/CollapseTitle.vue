<template>
  <div class="collapse-title" :class="{ 'is-expanded': props.isExpanded }">
    <div class="collapse-title__icon" >
      <fa :icon="props.isExpanded ? 'minus' : 'plus'" />
    </div>
    <div class="collapse-title__text">{{ props.title }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; isExpanded: boolean }>();
</script>
