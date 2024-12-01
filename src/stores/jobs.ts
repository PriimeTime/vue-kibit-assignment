import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import type { S } from "vitest/dist/chunks/config.Cy0C388Z.js";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    loading: false, // TODO add this to a global loading hook ad create a global loading component
    searchTerm: ref("") as Ref<string>,
    jobs: [] as Job[],
  }),
  getters: {
    filteredJobs: (state) => (searchString: string) => {
      if (!searchString) {
        return state.jobs;
      }

      const lowercasedSearch = searchString.toLowerCase();
      return state.jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(lowercasedSearch) ||
          job.description.toLowerCase().includes(lowercasedSearch) ||
          job.tags.some((tag) => tag.toLowerCase().includes(lowercasedSearch))
      );
    },
  },
});
