import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HeaderButton from "@/components/HeaderButton.vue";

describe("HeaderButton", () => {
  it("renders without crashing", () => {
    const wrapper = mount(HeaderButton);
    expect(wrapper.exists()).toBe(true);
  });

  it("emits 'click' event when clicked", async () => {
    const wrapper = mount(HeaderButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("matches snapshot", () => {
    const wrapper = mount(HeaderButton, {
      slots: {
        default: "Click Me",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
