<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseInput from "@/components/BaseInput.vue";
import HeaderText from "@/components/HeaderText.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex justify-center items-center mt-10">
      <BaseCard>
        <HeaderText>Login</HeaderText>
        <form @submit.prevent class="flex flex-col">
          <BaseInput class="my-2" type="text" placeholder="Username" />
          <BaseInput class="my-2" type="password" placeholder="Password" />
          <div class="flex max-h-14 w-full">
            <BaseButton class="my-2 mr-10">Login</BaseButton>
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
