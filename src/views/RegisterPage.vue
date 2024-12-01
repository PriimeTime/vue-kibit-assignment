<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HeaderText from "@/components/HeaderText.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex justify-center items-center mt-10">
      <BaseCard>
        <HeaderText>Register</HeaderText>
        <form @submit.prevent class="flex flex-col">
          <BaseInput class="my-2" type="text" placeholder="Username" />
          <BaseInput class="my-2" type="password" placeholder="Password" />
          <BaseInput
            class="my-2"
            type="password"
            placeholder="Confirm Password"
          />
          <div class="flex max-h-14 w-full">
            <BaseButton class="my-2 mr-10">Register</BaseButton>
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
