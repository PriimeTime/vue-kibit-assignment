<script setup lang="ts">
import { formatCurrency } from "@/utils/currencyHelper";
import BaseButton from "@/components/BaseButton.vue";

const props = defineProps<{
  job: Job;
}>();
</script>

<template>
  <div class="border-2 border-black rounded-xl p-6">
    <div class="text-3xl font-bold">{{ props.job.title }}</div>
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
    <div class="flex justify-end"><BaseButton>Apply</BaseButton></div>
  </div>
</template>
