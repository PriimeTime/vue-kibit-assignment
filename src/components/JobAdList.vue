<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import JobAd from "@/components/JobAd.vue";
import { useJobsStore } from "@/stores/jobs";
import { computed } from "vue";
import BaseCard from "./BaseCard.vue";

const jobStore = useJobsStore();

const jobList = computed(() => jobStore.filteredJobs(jobStore.searchTerm));
</script>

<template>
  <section class="w-full flex justify-center">
    <BaseCard>
      <div class="flex justify-between w-full">
        <BaseButton>Refresh</BaseButton>
      </div>
      <JobAd
        v-if="jobList.length > 0"
        class="my-10"
        v-for="job in jobList"
        :job="job"
      />
      <div v-else class="rounded-xl w-full">
        <div class="text-2xl w-full flex justify-center text-slate-400 mt-10">
          No jobs found.
        </div>
      </div>
    </BaseCard>
  </section>
</template>
