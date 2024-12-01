<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import JobAd from "@/components/JobAd.vue";
import { useJobsStore } from "@/stores/jobs";
import { computed, onMounted } from "vue";
import BaseCard from "@/components/BaseCard.vue";
import { fetchJobs } from "@/api/jobsService";
import HeaderText from "@/components/HeaderText.vue";

const jobStore = useJobsStore();

const getJobs = async () => {
  jobStore.loading = true;
  try {
    jobStore.jobs = await fetchJobs();
  } catch (error) {
    console.error(error);
  } finally {
    jobStore.loading = false;
  }
};

onMounted(async () => {
  await getJobs();
});

const jobList = computed(() => jobStore.filteredJobs(jobStore.searchTerm));
</script>

<template>
  <section class="w-full flex justify-center">
    <BaseCard>
      <HeaderText v-if="jobStore.loading" class="flex justify-center"
        >Loading...</HeaderText
      >
      <div v-else>
        <div class="flex justify-between w-full">
          <BaseButton @click="getJobs">Refresh</BaseButton>
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
      </div>
    </BaseCard>
  </section>
</template>
