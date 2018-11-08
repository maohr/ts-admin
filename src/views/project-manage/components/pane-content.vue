<template>
  <div ref="paneArea" style="height: 100%;">
    <div class="tab-pane-content" ref="searchArea">
      <el-form
        :model="struForm"
        ref="struForm"
        inline
        label-width="82px"
        label-position="right"
      >
        <el-form-item label="项目名称：" prop="name">
          <el-input v-model="struForm.name"></el-input>
        </el-form-item>
        <el-form-item label="任务名称：" prop="name">
          <el-input v-model="struForm.task"></el-input>
        </el-form-item>
        <el-form-item label="操作人：" prop="name">
          <el-input v-model="struForm.operation"></el-input>
        </el-form-item>
        <br>
        <el-form-item label="开始时间：" prop="name">
          <el-input v-model="struForm.start"></el-input>
        </el-form-item>
        <el-form-item label="结束时间：" prop="name">
          <el-input v-model="struForm.end"></el-input>
        </el-form-item>
        <el-form-item label="发布模式：" prop="model" v-if="name === 'publish'">
          <el-input v-model="struForm.model"></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleSubmit">搜 索</el-button>
        <el-button type="warning" @click="reset('struForm')">重 置</el-button>
      </el-form>
    </div>
    <el-table
      v-if="name === 'structure'"
      :data="struData"
      :height="tableHeight"
      ref="struData"
      border
      stripe
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button class="fa fa-download"></el-button>
          <el-button class="fa fa-eye"></el-button>
        </template>
      </el-table-column>
      <el-table-column label="项目名称" prop="id"></el-table-column>
      <el-table-column label="任务名称" prop="id"></el-table-column>
      <el-table-column label="构建分支" prop="id"></el-table-column>
      <el-table-column label="版本号" prop="id"></el-table-column>
      <el-table-column label="构建参数" prop="id"></el-table-column>
      <el-table-column label="构建状态" prop="id"></el-table-column>
      <el-table-column label="操作人" prop="id"></el-table-column>
      <el-table-column label="构建时间" prop="id"></el-table-column>
    </el-table>
    <el-table
      v-if="name === 'publish'"
      :data="struData"
      :height="tableHeight"
      ref="struData"
      border
      stripe
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column label="项目名称" prop="id"></el-table-column>
      <el-table-column label="任务名称" prop="id"></el-table-column>
      <el-table-column label="版本号" prop="id"></el-table-column>
      <el-table-column label="主类名称" prop="id"></el-table-column>
      <el-table-column label="发布模式" prop="id"></el-table-column>
      <el-table-column label="发布状态" prop="id"></el-table-column>
      <el-table-column label="运行参数" prop="id"></el-table-column>
      <el-table-column label="自定义参数" prop="id"></el-table-column>
      <el-table-column label="操作人" prop="id"></el-table-column>
      <el-table-column label="发布时间" prop="id"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

import layout from '@/utils/layout'

@Component({
  name: 'paneContent'
})
export default class PaneContent extends mixins(layout) {
  struForm = {
    name: '',
    task: '',
    operation: '',
    start: '',
    end: '',
    model: ''
  }
  struData = [
    {
      id: 1
    }
  ]
  @Prop(String) name!: string

  _initData() {

  }
  handleSubmit() {
    this._initData()
  }
  reset(name: string) {
    (this.$refs[name] as any).resetFields()
  }
}
</script>

