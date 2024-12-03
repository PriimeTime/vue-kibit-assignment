import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseCard from "@/components/BaseCard.vue";

describe("BaseCard", () => {
  it("renders without crashing", () => {
    const wrapper = mount(BaseCard);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders slot content", () => {
    const slotContent = "This is a card!";
    const wrapper = mount(BaseCard, {
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.text()).toContain(slotContent);
  });

  it("matches snapshot", () => {
    const wrapper = mount(BaseCard, {
      slots: {
        default: "Snapshot Content",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
