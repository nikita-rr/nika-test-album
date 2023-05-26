<template>
  <div class="collapse-item">
    <CollapseTitle
      @click="isExpanded = !isExpanded"
      :title="props.user.name"
      :isExpanded="isExpanded"
    />
    <Collapse :when="isExpanded" class="v-collapse">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, aspernatur!
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Collapse } from "vue-collapsed";
import { IUser } from "~/interfaces/IUser";
const props = defineProps<{ user: IUser }>();
const isExpanded = ref(false);
</script>
