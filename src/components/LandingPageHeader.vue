<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import { useJobsStore } from "@/stores/jobs";
import { ref } from "vue";

const jobStore = useJobsStore();

const searchInputValue = ref("");

const search = () => {
  jobStore.searchTerm = searchInputValue.value;
};
</script>

<template>
  <section class="w-full flex justify-center">
    <div class="w-full max-w-[40rem] shadow-xl rounded-xl p-6 m-10">
      <div class="text-3xl font-bold p-2">Find the job of your dreams</div>
      <div class="w-full m-2 flex justify-between">
        <BaseInput
          class="w-full"
          placeholder="Search for jobs"
          v-model="searchInputValue"
        ></BaseInput>
        <BaseButton @click="search" class="mx-2">Search</BaseButton>
      </div>
    </div>
  </section>
</template>
