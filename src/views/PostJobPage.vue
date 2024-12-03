<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HeaderText from "@/components/HeaderText.vue";
import BaseInput from "@/components/BaseInput.vue";
import { reactive, ref } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import { useJobsStore } from "@/stores/jobs";
import { createJob } from "@/api/jobsService";
import { convertStringToNumber } from "@/utils/numberHelper";
import { useRouter } from "vue-router";
import { bindJobToUser } from "@/api/authService";
import { useAuthStore } from "@/stores/auth";

const title = ref("");
const description = ref("");
const tags = ref("");
const salary = ref("");

const router = useRouter();

const jobStore = useJobsStore();
const authStore = useAuthStore();

const errors = reactive({
  title: "",
  description: "",
  tags: "",
  salary: "",
});

const postJob = async (job: Job) => {
  jobStore.loading = true;
  try {
    if (!authStore.user) {
      throw new Error("User not found");
    }

    await createJob(job);
    if (!authStore.user.jobs) {
      authStore.user.jobs = [];
    }
    authStore.user.jobs.push(job.id);
    jobStore.jobs.push(job);
    router.push("/my-jobs");
  } catch (error) {
    console.error(error);
  } finally {
    jobStore.loading = false;
  }
};

const handleSubmit = () => {
  errors.title = "";
  errors.description = "";
  errors.tags = "";
  errors.salary = "";

  if (title.value.length === 0) {
    errors.title = "Please enter a title!";
  }

  if (description.value.length === 0) {
    errors.description = "Please enter a description!";
  }

  if (tags.value.length === 0) {
    errors.tags = "Please enter a location!";
  }

  if (salary.value.length === 0) {
    errors.salary = "Please enter a salary!";
  }

  if (errors.title || errors.description || errors.tags || errors.salary) {
    return;
  }

  const job: Job = {
    id: Math.random().toString(),
    title: title.value,
    description: description.value,
    tags: tags.value.split(","),
    created: Date.now(),
    salary: {
      amount: convertStringToNumber(salary.value),
      currency: "USD",
    },
  };

  bindJobToUser(job.id);
  postJob(job);
};
</script>

<template>
  <DefaultLayout>
    <BaseCard class="m-auto mt-10">
      <HeaderText class="text-center mb-10">Post a new job below</HeaderText>
      <form @submit.prevent>
        <div class="flex flex-col space-y-4">
          <BaseInput placeholder="Job Title" v-model="title"></BaseInput>
          <p v-if="errors.title" class="text-red-600">{{ errors.title }}</p>
          <BaseInput
            type="textarea"
            placeholder="Description"
            v-model="description"
          ></BaseInput>
          <p v-if="errors.description" class="text-red-600">
            {{ errors.description }}
          </p>
          <BaseInput
            placeholder="Tags separated by comma"
            v-model="tags"
          ></BaseInput>
          <p v-if="errors.tags" class="text-red-600">{{ errors.tags }}</p>
          <BaseInput
            type="number"
            placeholder="Salary"
            v-model="salary"
          ></BaseInput>
          <p v-if="errors.salary" class="text-red-600">{{ errors.salary }}</p>
          <BaseButton @click="handleSubmit" class="w-full">Post Job</BaseButton>
        </div>
      </form>
    </BaseCard>
  </DefaultLayout>
</template>
