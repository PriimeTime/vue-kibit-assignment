<script setup lang="ts">
import HeaderButton from "@/components/HeaderButton.vue";
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();

const isLoggedIn = computed(() => authStore.user);

const handleAuth = () => {
  if (isLoggedIn.value) {
    authStore.logout();
    router.push("/");
  } else {
    router.push("/login");
  }
};

const router = useRouter();
</script>

<template>
  <header class="flex h-16 bg-teal-900">
    <div
      @click="router.push('/')"
      class="flex items-center text-3xl whitespace-nowrap text-white p-2 hover:cursor-pointer"
    >
      Job Advertisement Plaform
    </div>
    <div class="flex justify-end w-full p-2">
      <HeaderButton @click="router.push('/')">Home</HeaderButton>
      <HeaderButton v-if="isLoggedIn" @click="router.push('/my-jobs')"
        >My Jobs</HeaderButton
      >
      <HeaderButton @click="handleAuth">{{
        isLoggedIn ? "Logout" : "Login"
      }}</HeaderButton>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>
