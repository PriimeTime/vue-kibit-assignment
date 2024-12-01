<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BaseCard from "@/components/BaseCard.vue";
import HeaderText from "@/components/HeaderText.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex justify-center items-center mt-10">
      <BaseCard>
        <HeaderText class="text-center"
          >Welcome {{ authStore.user?.username }}, below are the jobs you
          {{
            authStore.user?.type === "employer" ? "posted" : "applied for"
          }}</HeaderText
        >
      </BaseCard>
    </section>
  </DefaultLayout>
</template>
