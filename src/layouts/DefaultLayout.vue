<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import { useRouter } from "vue-router";

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
      <button
        @click="router.push('/')"
        class="p-2 w-20 mx-2 rounded-md text-white border-teal-900 border-2 bg-teal-900 flex justify-center items-center whitespace-nowrap"
      >
        Home
      </button>
      <button
        @click="router.push('/login')"
        class="p-2 w-20 mx-2 rounded-md text-white border-teal-900 border-2 bg-teal-900 flex justify-center items-center"
      >
        Login
      </button>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>
