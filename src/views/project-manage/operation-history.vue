<template>
  <div class="main-content">
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="构建历史" name="structure">
        <pane-content :name="'structure'" :key="'structure'" ref="paneContent"></pane-content>
      </el-tab-pane>
      <el-tab-pane label="发布历史" name="publish">
        <pane-content :name="'publish'" :key="'publish'" ref="paneContent"></pane-content>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PaneContent from './components/pane-content.vue'
import layout from '@/utils/layout'

@Component({
  name: 'operation-history',
  components: {
    PaneContent
  }
})
export default class OperationHistory extends Vue {
  activeName = 'structure'

  tabClick() {
    this.$nextTick(() => {
      (this.$refs['paneContent'] as any).meterTableHeight()
    })
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  .el-tabs {
    height: 100%;
    /deep/ .el-tabs__content {
      height: calc(100% - 55px);
      .el-tab-pane {
        height: 100%;
      }
    }
  }
}
</style>


