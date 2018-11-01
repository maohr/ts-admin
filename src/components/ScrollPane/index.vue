<template>
  <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
    <slot/>
  </el-scrollbar>
</template>

<script lang="ts">

  import {Component, Vue, Prop} from 'vue-property-decorator';

  const padding = 15;

  @Component
  export default class ScrollPane extends Vue {
    name = 'ScrollPane';
    left = 0;

    handleScroll(e: WheelEvent) {
      const eventDelta = e.wheelDelta || -e.deltaY * 40;
      const ref: Vue = this.$refs.scrollContainer as Vue;
      const $scrollWrapper = ref.$refs.wrap as (HTMLElement);
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4;
    }

    moveToTarget($target: HTMLElement) {
      const ref: Vue = this.$refs.scrollContainer as Vue;
      const $container = ref.$el;
      const $containerWidth = $container.offsetWidth;
      const $scrollWrapper = ref.$refs.wrap as (HTMLElement);
      const $targetLeft = $target.offsetLeft;
      const $targetWidth = $target.offsetWidth;
      if ($targetLeft > $containerWidth) {
        // right
        $scrollWrapper.scrollLeft = $targetLeft - $containerWidth + $targetWidth + padding;
      } else {
        // left
        $scrollWrapper.scrollLeft = $targetLeft - padding;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scroll-container {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    /deep/ {
      .el-scrollbar__bar {
        bottom: 0px;
      }
      .el-scrollbar__wrap {
        height: 50px;
      }
    }
  }
</style>
