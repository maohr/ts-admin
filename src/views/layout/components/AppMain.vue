<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cacheList">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { TagsViewModule } from '@/store/modules/tagsView'

@Component({
  name: 'AppMain'
})
export default class AppMain extends Vue {
  get cacheList() {
    return TagsViewModule.cachedViews
  }
}
</script>

<style scoped>
.app-main {
  /* 84 = navbar + tags*/
  min-height: calc(100vh - 84px);
  position: relative;
  overflow: hidden;
}
</style>
