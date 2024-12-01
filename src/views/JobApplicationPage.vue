<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BaseCard from "@/components/BaseCard.vue";
import HeaderText from "@/components/HeaderText.vue";
import { useJobsStore } from "@/stores/jobs";
import { useRoute, useRouter } from "vue-router";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import { reactive, ref } from "vue";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "@/utils/validation";

const route = useRoute();
const router = useRouter();
const jobStore = useJobsStore();

const name = ref("");
const email = ref("");
const about = ref("");

const errors = reactive({
  name: "",
  email: "",
});

const job = jobStore.jobs.filter((job) => job.id === route.params.id)[0];

const handleSubmitApplication = () => {
  errors.name = "";
  errors.email = "";

  if (!validateName(name.value)) {
    errors.name = "Please enter a name!";
  }

  if (!validateEmail(email.value)) {
    errors.email = "Invalid email address!";
  }

  // Prevent submission if any errors exist
  if (errors.name || errors.email) {
    return;
  }

  // TODO: submit application to backend

  router.push("/application-success");
};
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex justify-center items-center mt-10">
      <BaseCard class="p-6 shadow-lg">
        <div v-if="job" class="space-y-4">
          <HeaderText class="text-2xl font-bold text-gray-800 text-center">
            Application as {{ job.title }}
          </HeaderText>
          <form @submit.prevent>
            <div class="flex flex-col gap-4">
              <BaseInput v-model="name" placeholder="Name" />
              <p v-if="errors.name" class="text-red-600">
                {{ errors.name }}
              </p>
              <BaseInput v-model="email" type="email" placeholder="Email" />
              <p v-if="errors.email" class="text-red-600">{{ errors.email }}</p>
              <BaseInput
                v-model="about"
                type="textarea"
                placeholder="Tell us about yourself..."
              />
              <BaseButton @click="handleSubmitApplication" class="w-full"
                >Submit Application</BaseButton
              >
            </div>
          </form>
        </div>
        <div v-else class="text-center space-y-2">
          <HeaderText class="text-xl font-semibold text-gray-800">
            Job not found
          </HeaderText>
        </div>
      </BaseCard>
    </section>
  </DefaultLayout>
</template>
