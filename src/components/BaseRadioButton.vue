<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  value: string;
  id: string;
  name: string;
}>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="flex items-center space-x-2">
    <input
      type="radio"
      :id="props.id"
      :name="props.name"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', props.value)"
    />
    <span class="text-teal-900">
      <slot />
    </span>
  </label>
</template>
