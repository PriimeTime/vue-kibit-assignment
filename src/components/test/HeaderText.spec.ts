import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HeaderText from "@/components/HeaderText.vue";

describe("HeaderText", () => {
  it("renders without crashing", () => {
    const wrapper = mount(HeaderText);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders slot content", () => {
    const slotContent = "Hello, World!";
    const wrapper = mount(HeaderText, {
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.text()).toContain(slotContent);
  });

  it("matches snapshot", () => {
    const wrapper = mount(HeaderText, {
      slots: {
        default: "Snapshot Header",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
