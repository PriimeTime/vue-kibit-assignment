<script setup lang="ts">
import { formatCurrency } from "@/utils/currencyHelper";
import BaseButton from "@/components/BaseButton.vue";
import HeaderText from "@/components/HeaderText.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const props = defineProps<{
  job: Job;
}>();

const emit = defineEmits<{
  delete: [string];
}>();
</script>

<template>
  <div v-if="job" class="border-2 border-black rounded-xl p-6">
    <HeaderText>{{ props.job.title }}</HeaderText>
    <div class="text-lg">{{ props.job.description }}</div>
    <div class="flex flex-col justify-between my-4">
      <div>
        <span class="font-bold mr-2">Tags:</span>
        <span>{{ props.job.tags.join(", ") }}</span>
      </div>
      <div>
        <span class="font-bold mr-2">Salary:</span>
        <span
          >{{ formatCurrency(props.job.salary.amount) }}
          {{ props.job.salary.currency }}</span
        >
      </div>
    </div>
    <div v-if="authStore.user?.type === 'employer'" class="flex justify-end">
      <BaseButton
        @click="() => emit('delete', props.job.id)"
        class="bg-red-600 border-red-600 hover:text-red-600"
        >Delete</BaseButton
      >
    </div>
  </div>
  <div v-else>
    <HeaderText>Job not found</HeaderText>
  </div>
</template>
