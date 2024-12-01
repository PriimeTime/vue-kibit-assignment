<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    class="border-teal-900 border-2 rounded-lg p-2"
    :type="props.type"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="
      emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
    "
  />
</template>
