<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BaseCard from "@/components/BaseCard.vue";
import HeaderText from "@/components/HeaderText.vue";
import BaseButton from "@/components/BaseButton.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { deleteJobAndUnbindFromUser, fetchJobs } from "@/api/jobsService";
import MyJobAd from "@/components/MyJobAd.vue";
import { useJobsStore } from "@/stores/jobs";

const authStore = useAuthStore();
const jobStore = useJobsStore();
const router = useRouter();

const myJobs = computed(() => {
  return jobStore.jobs.filter((job) =>
    (authStore.user?.jobs || []).includes(job.id)
  );
});

const handleRemoveJob = async (jobId: string) => {
  await deleteJobAndUnbindFromUser(jobId);
  jobStore.jobs = jobStore.jobs.filter((job: Job) => job.id !== jobId);
};

onMounted(async () => {
  jobStore.jobs = await fetchJobs();
});
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex flex-col justify-center items-center mt-10">
      <BaseCard>
        <HeaderText class="text-center"
          >Welcome {{ authStore.user?.username }}, below are the jobs you
          {{
            authStore.user?.type === "employer" ? "posted" : "applied for"
          }}</HeaderText
        >
      </BaseCard>
      <BaseCard class="mt-10">
        <div v-if="authStore.user?.type === 'employer'">
          <BaseButton @click="router.push('/post-job')" class="w-full"
            >Post a new job</BaseButton
          >
          <MyJobAd
            v-for="job in myJobs"
            :job="job"
            class="m-4"
            @delete="handleRemoveJob"
          ></MyJobAd>
        </div>
        <div v-else>
          <MyJobAd
            v-if="myJobs.length > 0"
            v-for="job in myJobs"
            :job="job"
            class="m-4"
          ></MyJobAd>
          <div v-else>
            <div class="flex text-2xl justify-center items-center">
              You have not applied for any jobs yet...
            </div>
          </div>
        </div>
      </BaseCard>
    </section>
  </DefaultLayout>
</template>
