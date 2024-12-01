import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import type { S } from "vitest/dist/chunks/config.Cy0C388Z.js";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    searchTerm: ref("") as Ref<string>,
    jobs: [
      {
        id: "1",
        title: "Frontend Developer",
        description:
          "We are looking for a frontend developer to join our team.",
        tags: ["frontend", "developer", "javascript"],
        created: Date.now(),
        salary: {
          amount: 50000,
          currency: "USD",
        },
      },
      {
        id: "2",
        title: "Backend Developer",
        description: "We are looking for a backend developer to join our team.",
        tags: ["backend", "developer", "nodejs"],
        created: Date.now(),
        salary: {
          amount: 60000,
          currency: "USD",
        },
      },
      {
        id: "3",
        title: "Fullstack Developer",
        description:
          "We are looking for a fullstack developer to join our team.",
        tags: ["fullstack", "developer", "javascript"],
        created: Date.now(),
        salary: {
          amount: 70000,
          currency: "USD",
        },
      },
    ] as Job[],
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
