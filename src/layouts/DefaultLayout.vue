<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
  <header class="flex h-16 bg-teal-900">
    <div class="flex items-center text-3xl whitespace-nowrap text-white p-2">
      Job Advertisement Plaform
    </div>
    <div class="flex justify-end w-full p-2">
      <BaseButton class="mx-2" flat>Login</BaseButton>
      <BaseButton class="mx-2" flat>Register</BaseButton>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>
