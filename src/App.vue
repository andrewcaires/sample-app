<template>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route?.matched[0]?.name || 'none'" />
  </router-view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>