import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ApplicationSuccessPage from "@/views/ApplicationSuccessPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createTestingPinia } from "@pinia/testing";

const mockRouter = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: { template: "<div>Home</div>" } }],
});

describe("ApplicationSuccessPage", () => {
  it("renders without crashing", () => {
    const wrapper = mount(ApplicationSuccessPage, {
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

  it("displays the success message", () => {
    const wrapper = mount(ApplicationSuccessPage, {
      global: {
        plugins: [
          mockRouter,
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    expect(wrapper.text()).toContain(
      "Your application has been submitted successfully!"
    );
  });

  it("navigates to the home page when button is clicked", async () => {
    const pushMock = vi.spyOn(mockRouter, "push");

    const wrapper = mount(ApplicationSuccessPage, {
      global: {
        plugins: [
          mockRouter,
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(pushMock).toHaveBeenCalledWith("/");
  });

  it("matches snapshot", () => {
    const wrapper = mount(ApplicationSuccessPage, {
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
