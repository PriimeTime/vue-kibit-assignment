import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LoginPage from "@/views/LoginPage.vue";
import { createTestingPinia } from "@pinia/testing";
import { createRouter, createWebHistory } from "vue-router";

// Add a mock router
const mockRouter = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: { template: "<div>Home</div>" } }],
});

describe("LoginPage", () => {
  it("renders without crashing", () => {
    const wrapper = mount(LoginPage, {
      global: {
        plugins: [
          mockRouter, // Provide the mock router
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("matches snapshot", () => {
    const wrapper = mount(LoginPage, {
      global: {
        plugins: [
          mockRouter, // Provide the mock router
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
