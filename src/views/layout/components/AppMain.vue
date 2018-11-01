<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default class AppMain extends Vue {}
</script>

<style scoped>
.app-main {
  /* 84 = navbar + tags*/
  min-height: calc(100vh - 84px);
  position: relative;
  overflow: hidden;
}
</style>
