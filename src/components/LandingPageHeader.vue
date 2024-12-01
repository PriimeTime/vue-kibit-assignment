<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import { useJobsStore } from "@/stores/jobs";
import { ref, watch } from "vue";
import BaseCard from "@/components/BaseCard.vue";
import HeaderText from "@/components/HeaderText.vue";

const jobStore = useJobsStore();

const searchInputValue = ref("");

const search = () => {
  jobStore.searchTerm = searchInputValue.value;
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    search();
  }
};

// Reset search results when search input is empty
watch(searchInputValue, () => {
  if (searchInputValue.value === "") {
    search();
  }
});
</script>

<template>
  <section class="w-full flex justify-center">
    <BaseCard>
      <HeaderText>Find the job of your dreams</HeaderText>
      <div class="w-full m-2 flex justify-between">
        <BaseInput
          @keydown="handleKeyDown"
          class="w-full"
          placeholder="Search for jobs"
          v-model="searchInputValue"
        ></BaseInput>
        <BaseButton @click="search" class="mx-2">Search</BaseButton>
      </div>
    </BaseCard>
  </section>
</template>
