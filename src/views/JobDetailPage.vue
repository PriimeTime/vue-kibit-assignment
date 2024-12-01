<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import HeaderText from "@/components/HeaderText.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useJobsStore } from "@/stores/jobs";
import { formatCurrency } from "@/utils/currencyHelper";
import { formatDate } from "@/utils/dateHelper";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const jobStore = useJobsStore();

const job = jobStore.jobs.filter((job) => job.id === route.params.id)[0];
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex justify-center items-center mt-10">
      <BaseCard class="p-6 shadow-lg">
        <div v-if="job" class="space-y-4">
          <HeaderText class="text-2xl font-bold text-gray-800">{{
            job.title
          }}</HeaderText>
          <p class="text-gray-700">{{ job.description }}</p>
          <p class="text-lg font-semibold text-gray-800">
            {{ formatCurrency(job.salary.amount) }}
            {{ job.salary.currency }}
          </p>
          <div>
            <span class="font-semibold text-gray-600">Tags:</span>
            <div class="flex flex-wrap gap-2 mt-2">
              <span
                v-for="tag in job.tags"
                :key="tag"
                class="bg-teal-100 teal-900 text-xs font-medium px-2 py-1 rounded"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <p class="text-sm text-gray-500">
            <span class="font-semibold">Created at:</span>
            {{ formatDate(job.created) }}
          </p>
          <BaseButton
            @click="
              router.push({
                name: 'job-application',
                params: { id: job.id },
              })
            "
            class="w-full"
            >Apply</BaseButton
          >
        </div>
        <div v-else class="text-center space-y-2">
          <HeaderText class="text-xl font-semibold text-gray-800"
            >Job not found</HeaderText
          >
          <p class="text-gray-600">
            The job you are looking for does not exist or has been removed.
          </p>
        </div>
      </BaseCard>
    </section>
  </DefaultLayout>
</template>
