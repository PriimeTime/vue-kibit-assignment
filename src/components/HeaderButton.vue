<script setup lang="ts">
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    @click="emit('click')"
    class="p-2 w-20 lg:mx-2 rounded-md text-white text-xs md:text-xl border-teal-900 border-2 bg-teal-900 flex justify-center items-center whitespace-nowrap"
  >
    <slot />
  </button>
</template>
