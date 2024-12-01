<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HeaderText from "@/components/HeaderText.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { register } from "@/api/authService";
import BaseRadioButton from "@/components/BaseRadioButton.vue";
import { validateName, validatePassword } from "@/utils/validation";

const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const type = ref<User["type"]>("employer");

const errors = reactive({
  name: "",
  password: "",
  confirmPassword: "",
});

const router = useRouter();

const handleRegister = async () => {
  errors.name = "";
  errors.password = "";
  errors.confirmPassword = "";

  if (!validateName(username.value)) {
    errors.name = "Please enter a name!";
  }

  if (!validatePassword(password.value)) {
    errors.password = "Please enter a password longer than 5 characters!";
  }

  if (password.value !== confirmPassword.value) {
    errors.confirmPassword = "Passwords do not match";
  }

  // Prevent submission if any errors exist
  if (errors.name || errors.password || errors.confirmPassword) {
    return;
  }

  try {
    await register(username.value, password.value, type.value);
    router.push("/login");
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex justify-center items-center mt-10">
      <BaseCard>
        <HeaderText>Register</HeaderText>
        <form @submit.prevent class="flex flex-col">
          <BaseInput
            class="my-2"
            type="text"
            placeholder="Username"
            v-model="username"
          />
          <p v-if="errors.name" class="text-red-600">{{ errors.name }}</p>
          <BaseInput
            class="my-2"
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <p v-if="errors.password" class="text-red-600">
            {{ errors.password }}
          </p>
          <BaseInput
            class="my-2"
            type="password"
            placeholder="Confirm Password"
            v-model="confirmPassword"
          />
          <p v-if="errors.confirmPassword" class="text-red-600">
            {{ errors.confirmPassword }}
          </p>
          <div class="my-4">
            <BaseRadioButton
              id="employer"
              name="user_type"
              value="employer"
              v-model="type"
            >
              Employer
            </BaseRadioButton>
            <BaseRadioButton
              id="applicant"
              name="user_type"
              value="applicant"
              v-model="type"
            >
              Applicant
            </BaseRadioButton>
          </div>

          <div class="flex max-h-14 w-full">
            <BaseButton class="my-2 mr-10" @click="handleRegister"
              >Register</BaseButton
            >
            <BaseButton
              @click="router.push('/login')"
              flat
              class="my-2 whitespace-nowrap w-auto"
              >Login instead</BaseButton
            >
          </div>
        </form>
      </BaseCard>
    </section>
  </DefaultLayout>
</template>
