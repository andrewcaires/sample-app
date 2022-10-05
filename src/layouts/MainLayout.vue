<template>
  <div class="text-center">
    <nav class="py-7">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
    </nav>
    <router-view class="intro-x" v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>