import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ErrorPage from "@/views/ErrorPage.vue";
import { createTestingPinia } from "@pinia/testing";
import { createRouter, createWebHistory } from "vue-router";

const mockRouter = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: { template: "<div>Home</div>" } }],
});

describe("ErrorPage", () => {
  it("renders without crashing", () => {
    const wrapper = mount(ErrorPage, {
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

  it("displays the error message", () => {
    const wrapper = mount(ErrorPage, {
      global: {
        plugins: [
          mockRouter,
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    expect(wrapper.text()).toContain("Page not found.");
  });

  it("matches snapshot", () => {
    const wrapper = mount(ErrorPage, {
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
