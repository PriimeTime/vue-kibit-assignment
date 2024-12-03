import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import JobApplicationPage from "@/views/JobApplicationPage.vue";
import { createTestingPinia } from "@pinia/testing";
import { createRouter, createWebHistory } from "vue-router";
import { useJobsStore } from "@/stores/jobs";
import { useAuthStore } from "@/stores/auth";

const mockRouter = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/application-success",
      component: { template: "<div>Success</div>" },
    },
    { path: "/", component: { template: "<div>Home</div>" } },
  ],
});

vi.mock("@/api/jobsService", () => ({
  bindJobToUser: vi.fn(),
}));

describe("JobApplicationPage", () => {
  it("renders without crashing", () => {
    const wrapper = mount(JobApplicationPage, {
      global: {
        plugins: [
          mockRouter,
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("matches snapshot", () => {
    const wrapper = mount(JobApplicationPage, {
      global: {
        plugins: [
          mockRouter,
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
