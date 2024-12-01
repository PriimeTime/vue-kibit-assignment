<script setup lang="ts">
import type { InputType } from "@/types/InputType";

const props = defineProps<{
  modelValue: string;
  type?: InputType;
  placeholder: string;
}>();

const emit = defineEmits(["update:modelValue", "keydown"]);
</script>

<template>
  <div>
    <template v-if="props.type === 'textarea'">
      <textarea
        class="border-teal-900 border-2 rounded-lg p-2 w-full focus:outline-none"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @keydown="emit('keydown', $event)"
        @input="
          emit(
            'update:modelValue',
            ($event.target as HTMLTextAreaElement)?.value
          )
        "
      ></textarea>
    </template>
    <template v-else>
      <input
        class="border-teal-900 border-2 rounded-lg p-2 w-full focus:outline-none"
        :type="props.type"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @keydown="emit('keydown', $event)"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
        "
      />
    </template>
  </div>
</template>
