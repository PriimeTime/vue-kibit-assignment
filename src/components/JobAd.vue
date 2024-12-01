<script setup lang="ts">
import { formatCurrency } from "@/utils/currencyHelper";
import BaseButton from "@/components/BaseButton.vue";
import HeaderText from "@/components/HeaderText.vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  job: Job;
}>();

const router = useRouter();
</script>

<template>
  <div class="border-2 border-black rounded-xl p-6">
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
    <div class="flex justify-end">
      <BaseButton @click="router.push(`job-detail/${props.job.id}`)"
        >I'm interested</BaseButton
      >
    </div>
  </div>
</template>
