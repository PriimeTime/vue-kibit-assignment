import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import BaseRadioButton from "@/components/BaseRadioButton.vue";

describe("RadioButton", () => {
  it("renders without crashing", () => {
    const wrapper = mount(BaseRadioButton, {
      props: {
        id: "option1",
        name: "group1",
        value: "value1",
        modelValue: "",
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("binds the 'checked' attribute based on modelValue", () => {
    const wrapper = mount(BaseRadioButton, {
      props: {
        id: "option1",
        name: "group1",
        value: "value1",
        modelValue: "value1",
      },
    });
    const input = wrapper.find("input");
    expect(input.element.checked).toBe(true);
  });

  it("emits 'update:modelValue' when the value changes", async () => {
    const wrapper = mount(BaseRadioButton, {
      props: {
        id: "option1",
        name: "group1",
        value: "value1",
        modelValue: "",
      },
    });
    const input = wrapper.find("input");

    await input.setValue();
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual(["value1"]);
  });

  it("matches snapshot", () => {
    const wrapper = mount(BaseRadioButton, {
      props: {
        id: "option1",
        name: "group1",
        value: "value1",
        modelValue: "value2",
      },
      slots: {
        default: "Option 1",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
