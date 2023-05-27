<script setup lang="ts">
import { StyleValue } from "vue";

const isExpanded = ref(false);
const props = defineProps<{ title: string; titleStyle?: StyleValue }>();
const emit = defineEmits<{
  (e: "expand"): void;
}>();

function expandCollapse() {
  isExpanded.value = !isExpanded.value;
  if (isExpanded.value) {
    emit("expand");
  }
}
</script>

<template>
  <div class="collapse-item">
    <div
      class="collapse-item__title"
      :style="titleStyle"
      @click="expandCollapse()"
      :class="{ 'is-expanded': isExpanded }"
    >
      <div class="collapse-item__title-icon">
        <fa :icon="isExpanded ? 'minus' : 'plus'" />
      </div>
      <div class="collapse-item__title-text">{{ props.title }}</div>
    </div>
    <div class="collapse-item__body" v-if="isExpanded">
      <slot />
    </div>
  </div>
</template>
