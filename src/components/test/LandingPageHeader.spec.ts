import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LandingPageHeader from "@/components/LandingPageHeader.vue";
import { createTestingPinia } from "@pinia/testing";
import { useJobsStore } from "@/stores/jobs";

const testConfig = {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
      }),
    ],
  },
};

describe("LandingPageHeader", () => {
  it("renders without crashing", () => {
    const wrapper = mount(LandingPageHeader, testConfig);
    expect(wrapper.exists()).toBe(true);
  });

  it("updates store's searchTerm when search button is clicked", async () => {
    const wrapper = mount(LandingPageHeader, testConfig);

    const searchInput = wrapper.find("input");
    const searchButton = wrapper.find("button");

    await searchInput.setValue("developer");
    await searchButton.trigger("click");

    const jobStore = useJobsStore();
    expect(jobStore.searchTerm).toBe("developer");
  });

  it("triggers search on pressing Enter key", async () => {
    const wrapper = mount(LandingPageHeader, testConfig);

    const searchInput = wrapper.find("input");

    await searchInput.setValue("frontend");
    await searchInput.trigger("keydown", { key: "Enter" });

    const jobStore = useJobsStore();
    expect(jobStore.searchTerm).toBe("frontend");
  });

  it("resets search results when input is cleared", async () => {
    const wrapper = mount(LandingPageHeader, testConfig);

    const searchInput = wrapper.find("input");
    const jobStore = useJobsStore();

    await searchInput.setValue("designer");
    await searchInput.setValue("");

    expect(jobStore.searchTerm).toBe("");
  });

  it("matches snapshot", () => {
    const wrapper = mount(LandingPageHeader, testConfig);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
