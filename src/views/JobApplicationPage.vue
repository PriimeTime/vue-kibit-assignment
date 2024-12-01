<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BaseCard from "@/components/BaseCard.vue";
import HeaderText from "@/components/HeaderText.vue";
import { useJobsStore } from "@/stores/jobs";
import { useRoute } from "vue-router";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

const route = useRoute();
const jobStore = useJobsStore();

const job = jobStore.jobs.filter((job) => job.id === route.params.id)[0];
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex justify-center items-center mt-10">
      <BaseCard class="p-6 shadow-lg">
        <div v-if="job" class="space-y-4">
          <HeaderText class="text-2xl font-bold text-gray-800 text-center">
            Application as {{ job.title }}
          </HeaderText>
          <form>
            <div class="flex flex-col gap-4">
              <BaseInput placeholder="Name" />
              <BaseInput placeholder="Email" />
              <BaseInput
                type="textarea"
                placeholder="Tell us about yourself..."
              />
              <BaseButton class="w-full">Submit</BaseButton>
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
