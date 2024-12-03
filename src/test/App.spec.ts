import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import { createRouter, createWebHistory } from "vue-router";

// Create a mock router
const mockRouter = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: { template: "<div>Home</div>" } }, // Add at least one mock route
  ],
});

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = mount(App, {
      global: {
        plugins: [mockRouter], // Provide the mock router
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
