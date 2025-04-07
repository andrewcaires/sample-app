<template>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route?.matched[0]?.name || 'none'" />
  </router-view>
</template>

<script lang="ts" setup>
import { useHead } from "@unhead/vue";
import { storeToRefs } from "pinia";

import { useHeadStore } from "@/stores";
import { APP_TITLE } from "@/utils";

const head = useHeadStore();

const { lang, title } = storeToRefs(head);

useHead({

  title,

  htmlAttrs: { lang },

  titleTemplate: (title?: string) => `${title ? title + " - " : ""}${APP_TITLE}`,

});
</script>

<style lang="scss" scoped></style>