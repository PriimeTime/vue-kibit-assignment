<script setup lang="ts">
import { login } from "@/api/authService";
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseInput from "@/components/BaseInput.vue";
import HeaderText from "@/components/HeaderText.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useAuthStore } from "@/stores/auth";
import { validateName, validatePassword } from "@/utils/validation";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const authStore = useAuthStore();

const username = ref("");
const password = ref("");
const errors = reactive({
  name: "",
  password: "",
});
const handleLogin = async () => {
  errors.name = "";
  errors.password = "";

  if (!validateName(username.value)) {
    errors.name = "Please enter a name!";
  }

  if (!validatePassword(password.value)) {
    errors.password = "Please enter a password longer than 5 characters!";
  }

  // Prevent submission if any errors exist
  if (errors.name || errors.password) {
    return;
  }

  try {
    const user = await login(username.value, password.value);
    authStore.setUser(user);
    router.push("/my-jobs");
  } catch (error: unknown) {
    console.log(error);
  }
};
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex justify-center items-center mt-10">
      <BaseCard>
        <HeaderText>Login</HeaderText>
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
          <p v-if="errors.name" class="text-red-600">{{ errors.password }}</p>
          <div class="flex max-h-14 w-full">
            <BaseButton class="my-2 mr-10" @click="handleLogin"
              >Login</BaseButton
            >
            <BaseButton
              @click="router.push('/register')"
              flat
              class="my-2 whitespace-nowrap w-auto"
              >Register instead</BaseButton
            >
          </div>
        </form>
      </BaseCard>
    </section>
  </DefaultLayout>
</template>
