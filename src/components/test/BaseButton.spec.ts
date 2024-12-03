import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton.vue";

describe("BaseButton", () => {
  it("applies correct classes when 'flat' prop is true", () => {
    const wrapper = mount(BaseButton, {
      props: { flat: true },
    });
    expect(wrapper.attributes("class")).toContain("text-teal-900");
    expect(wrapper.attributes("class")).not.toContain("rounded-md");
  });

  it("emits 'click' event when clicked", async () => {
    const wrapper = mount(BaseButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("matches snapshot", () => {
    const wrapper = mount(BaseButton, {
      props: { flat: false },
      slots: {
        default: "Click me",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
