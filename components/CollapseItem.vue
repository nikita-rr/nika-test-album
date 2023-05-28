<script setup lang="ts">
import { StyleValue } from "vue";

const isExpanded = ref(false);
const props = defineProps<{
  title: string;
  titleStyle?: StyleValue;
  loading?: boolean;
}>();
const emit = defineEmits<{
  (e: "expand"): void;
}>();

function expandCollapse() {
  if (!props.loading) {
    isExpanded.value = !isExpanded.value;
    if (isExpanded.value) {
      emit("expand");
    }
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
        <template v-if="props.loading">
          <fa class="collapse-item__title-icon-loader" icon="spinner" />
        </template>
        <template v-else>
          <fa :icon="isExpanded ? 'minus' : 'plus'" />
        </template>
      </div>
      <div class="collapse-item__title-text">{{ props.title }}</div>
    </div>
    <div class="collapse-item__body" v-if="isExpanded && !props.loading">
      <slot />
    </div>
  </div>
</template>
