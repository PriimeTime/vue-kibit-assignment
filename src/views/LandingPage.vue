<script lang="ts" setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import LandingPageHeader from "@/components/LandingPageHeader.vue";
import JobAdList from "@/components/JobAdList.vue";
</script>

<template>
  <DefaultLayout>
    <LandingPageHeader />
    <JobAdList class="mt-10" />
  </DefaultLayout>
</template>
