<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  flat?: boolean;
}>();

const emit = defineEmits(["click"]);

const buttonClass = computed(() => {
  return props.flat
    ? "p-2 min-w-20 text-teal-900 flex justify-center items-center whitespace-nowrap"
    : "p-2 min-w-20 rounded-md text-white border-teal-900 border-2 bg-teal-900 hover:text-teal-900 hover:bg-white flex justify-center items-center whitespace-nowrap";
});
</script>

<template>
  <button @click="emit('click')" :class="buttonClass">
    <slot />
  </button>
</template>
