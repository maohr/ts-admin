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
  position: relative;
  overflow: hidden;
  height: calc(100% - 85px);
  padding: 8px;
}
</style>
