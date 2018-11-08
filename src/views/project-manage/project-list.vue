<template>
  <div class="main-content" ref="mainArea">
    <div ref="searchArea">
      <el-form
        :model="form"
        ref="form"
        inline
        label-width="82px"
        label-position="right"
      >
        <el-form-item label="项目名称：" prop="name">
          <el-input v-model="form.name" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-form-item label="负责人：" prop="realname">
          <el-input v-model="form.realname" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleSubmit">搜 索</el-button>
        <el-button type="warning" @click="reset('form')">重 置</el-button>
      </el-form>
    </div>
    <div class="btn-groups" ref="btnArea">
      <el-button type="primary" @click="add">新 增</el-button>
      <el-button type="success" @click="edit">编 辑</el-button>
      <el-button type="danger" @click="del">删 除</el-button>
    </div>
    <el-table
      :data="tableData"
      :height="tableHeight"
      ref="tableData"
      border
      stripe
      fit
      highlight-current-row
      @row-click="handleRowClick"
      @row-dblclick="handledbClick"
    >
      <el-table-column label="项目ID" align="center" width="70" prop="id"></el-table-column>
      <el-table-column label="项目名称" prop="name"></el-table-column>
      <el-table-column label="第一负责人" prop="fzr"></el-table-column>
      <el-table-column label="第二负责人" prop="fzr"></el-table-column>
      <el-table-column label="上线" prop="online"></el-table-column>
      <el-table-column label="下线" prop="downline"></el-table-column>
      <el-table-column label="失败" prop="fail"></el-table-column>
      <el-table-column label="延迟" prop="wait"></el-table-column>
    </el-table>
    <el-dialog
      title="项目信息"
      :visible.sync="visible"
      width="500px">
      <el-form
        :model="edForm"
        :rules="rules"
        ref="edForm"
        label-width="135px"
        label-position="right"
      >
        <el-form-item label="项目名称：" prop="name" style="width: calc(100% - 53px);">
          <el-input v-model="edForm.name" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-form-item label="项目描述：" prop="desc" style="width: calc(100% - 53px);">
          <el-input v-model="edForm.desc" type="textarea" :autosize="{ minRows: 6, maxRows: 20 }" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-form-item label="项目第一负责人：" prop="one" style="width: calc(100% - 53px);">
          <el-input v-model="edForm.one" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-form-item label="项目第二负责人：" prop="two" style="width: calc(100% - 53px);">
          <el-input v-model="edForm.two" placeholder="请输入内容..."></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="save">保 存</el-button>
        <el-button type="info" @click="visible = false">返 回</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import rules from "@/utils/rule";
import layout from '@/utils/layout'

@Component({
  name: "project-list"
})
export default class ProjectList extends mixins(rules, layout) {
  form = {
    name: "",
    realname: ""
  };
  edForm: any = {
    name: "",
    desc: "",
    one: "",
    two: ""
  };
  row: any = {};
  visible = false;

  get tableData() {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: 1,
        name: "双十一看板",
        fzr: "test",
        online: 3,
        downline: 1,
        fail: 1,
        wait: 1
      });
    }
    return data;
  }

  _initData() {}
  handleSubmit() {
    this._initData();
  }
  reset(name: string) {
    (this.$refs[name] as any).resetFields()
  }
  handleRowClick(row: any) {
    this.row = row;
  }
  handledbClick() {
    this.$router.push({
      name: 'project-task',
      query: {
        project: '111'
      }
    })
  }
  add() {
    this.edForm = {};
    this.visible = true;
  }
  edit() {
    if (this.getTrueOrFalseByKeys(this.row)) {
      this.visible = true;
    } else {
      this.$message.warning("请选择要编辑的项目！");
    }
  }
  del() {
    if (this.getTrueOrFalseByKeys(this.row)) {
      this.visible = false;
    } else {
      this.$message.warning("请选择要删除的项目！");
    }
  }
  save() {
    (this.$refs["edForm"] as any).validate((valid: string) => {
      if (valid) {
      }
    });
  }
  getTrueOrFalseByKeys(item: any) {
    return Object.keys(item).length > 0;
  }

  mounted() {
    this._initData();
  }

  @Watch('visible')
  onVisibleChange(value: boolean) {
    if(value) {
      this.$nextTick(() => {
        (this.$refs['edForm'] as any).clearValidate()
      })
    }
  }
}
</script>

