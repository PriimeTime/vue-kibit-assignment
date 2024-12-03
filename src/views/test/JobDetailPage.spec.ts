import { mount } from "@vue/test-utils";
import JobDetailPage from "@/views/JobDetailPage.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import HeaderText from "@/components/HeaderText.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { createTestingPinia } from "@pinia/testing";
import { useRouter, useRoute } from "vue-router";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useJobsStore } from "@/stores/jobs";

vi.mock("vue-router", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
  useRoute: vi.fn(() => ({
    params: { id: "1" },
  })),
}));

describe("JobDetailPage", () => {
  const mockJob = {
    id: "1",
    title: "Frontend Developer",
    description: "Develop awesome UIs",
    salary: { amount: 70000, currency: "USD" },
    tags: ["Vue.js", "JavaScript", "Frontend"],
    created: "2024-12-01",
  };

  it("renders job details when job exists", () => {
    const wrapper = mount(JobDetailPage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              jobs: {
                jobs: [mockJob],
              },
            },
            stubActions: false,
          }),
        ],
        components: { BaseButton, BaseCard, HeaderText, DefaultLayout },
      },
    });

    expect(wrapper.findComponent(HeaderText).text()).toBe(mockJob.title);
    expect(wrapper.text()).toContain(mockJob.description);
    expect(wrapper.text()).toContain("$70,000.00 USD");
    expect(wrapper.text()).toContain("Vue.js");
    expect(wrapper.text()).toContain("Created at:");
  });
});
