import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput.vue";

describe("BaseInput", () => {
  it("renders as an input by default", () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: "",
        placeholder: "Enter text",
      },
    });
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("renders as a textarea when type is 'textarea'", () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: "",
        type: "textarea",
        placeholder: "Enter text",
      },
    });
    expect(wrapper.find("textarea").exists()).toBe(true);
  });

  it("emits 'update:modelValue' when input changes", async () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: "",
        placeholder: "Enter text",
      },
    });
    const input = wrapper.find("input");
    await input.setValue("Hello World");
    const emitted = wrapper.emitted("update:modelValue");
    expect(emitted).toBeTruthy();
    expect(emitted?.[0]).toEqual(["Hello World"]);
  });

  it("emits 'keydown' when a key is pressed", async () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: "",
        placeholder: "Enter text",
      },
    });
    const input = wrapper.find("input");
    await input.trigger("keydown", { key: "Enter" });

    const emitted = wrapper.emitted("keydown");
    expect(emitted).toBeTruthy();
    expect(emitted?.[0][0]).toHaveProperty("key", "Enter");
  });

  it("matches snapshot for input", () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: "",
        placeholder: "Enter text",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot for textarea", () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: "",
        type: "textarea",
        placeholder: "Enter text",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
