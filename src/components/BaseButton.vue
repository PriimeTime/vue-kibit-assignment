<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  flat: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const buttonClass = computed(() => {
  return props.flat
    ? "p-2 w-20 rounded-md border-white text-white border-2 hover:bg-white hover:text-teal-900"
    : "p-2 w-20 rounded-md text-white border-teal-900 border-2 bg-teal-900 hover:text-teal-900 hover:bg-white";
});
</script>

<template>
  <button @click="emit('click')" :class="buttonClass">
    <slot />
  </button>
</template>
