<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BaseCard from "@/components/BaseCard.vue";
import HeaderText from "@/components/HeaderText.vue";
import BaseButton from "@/components/BaseButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex justify-center items-center mt-10">
      <BaseCard class="p-6 md:shadow">
        <div class="space-y-4">
          <HeaderText class="text-2xl font-bold text-gray-800 text-center">
            Your application has been submitted successfully!
          </HeaderText>
          <BaseButton @click="router.push('/')" class="w-full">
            Go back to home
          </BaseButton>
        </div>
      </BaseCard>
    </section>
  </DefaultLayout>
</template>
