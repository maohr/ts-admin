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
        <el-form-item label="任务名称：" prop="name">
          <el-input v-model="form.name" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-form-item label="开发人员：" prop="realname">
          <el-input v-model="form.realname" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-form-item label="状态：" prop="status">
          <el-input v-model="form.status" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleSubmit">搜 索</el-button>
        <el-button type="warning" @click="reset('form')">重 置</el-button>
      </el-form>
    </div>
    <div class="btn-groups" ref="btnArea">
      <el-button type="primary" @click="add" v-if="model === 'project'">新 增</el-button>
      <el-button type="success" @click="edit">编 辑</el-button>
      <el-button type="danger" @click="del">删 除</el-button>
      <el-button type="primary" @click="structure">构 建</el-button>
      <el-button type="success" @click="publish">发 布</el-button>
      <el-button type="danger" @click="stop">停 止</el-button>
      <el-button type="primary" @click="note">日 志</el-button>
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
    >
      <el-table-column label="任务ID" align="center" width="70" prop="id"></el-table-column>
      <el-table-column label="任务名称" prop="name"></el-table-column>
      <el-table-column label="开发人员" prop="fzr"></el-table-column>
      <el-table-column label="创建时间" prop="fzr"></el-table-column>
      <el-table-column label="发布时间" prop="online"></el-table-column>
      <el-table-column label="入口类" prop="downline"></el-table-column>
      <el-table-column label="提交模式" prop="fail"></el-table-column>
      <el-table-column label="状态" prop="wait"></el-table-column>
      <el-table-column label="延迟" prop="wait1"></el-table-column>
    </el-table>
    <el-dialog
      title="任务信息"
      :visible.sync="visible"
      width="500px">
      <el-form
        :model="edForm"
        :rules="rules"
        ref="edForm"
        label-width="95px"
        label-position="right"
      >
        <el-form-item label="任务名称：" prop="name" style="width: calc(100% - 13px)">
          <el-input v-model="edForm.name" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-form-item label="任务描述：" prop="desc" style="width: calc(100% - 13px)">
          <el-input v-model="edForm.desc" type="textarea" :autosize="{ minRows: 6, maxRows: 20 }" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-form-item label="开发人员：" prop="dev" style="width: calc(100% - 13px)">
          <el-input v-model="edForm.dev" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-form-item label="语言：" prop="lang" style="width: calc(100% - 13px)">
          <el-input v-model="edForm.lang" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-form-item label="Git地址：" prop="git" style="width: calc(100% - 13px)">
          <el-input v-model="edForm.git" placeholder="请输入内容..."></el-input>
        </el-form-item>
        <el-form-item label="编译参数：" prop="params" style="width: calc(100% - 13px)">
          <el-input v-model="edForm.params" type="textarea" :autosize="{ minRows: 6, maxRows: 20 }" placeholder="请输入内容..."></el-input>
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
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import rules from "@/utils/rule";
import layout from "@/utils/layout";

@Component({
  name: "task-page"
})
export default class TaskPage extends mixins(rules, layout) {
  form = {
    name: "",
    realname: "",
    status: 1
  };
  edForm: any = {
    name: "",
    desc: "",
    dev: "",
    lang: "",
    git: "",
    params: ""
  };
  row: any = {};
  visible = false;

  @Prop(String) model!: string

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
        wait: 1,
        wait1: 2
      });
    }
    return data;
  }

  _initData() {}
  handleSubmit() {
    this._initData();
  }
  reset(name: string) {
    (this.$refs[name] as any).resetFields();
  }
  handleRowClick(row: any) {
    this.row = row;
  }
  add() {
    this.edForm = {};
    this.visible = true;
  }
  edit() {
    if (this.getTrueOrFalseByKeys(this.row)) {
      this.visible = true;
    } else {
      this.$message.warning("请选择要编辑的任务！");
    }
  }
  del() {
    if (this.getTrueOrFalseByKeys(this.row)) {
      this.visible = false;
    } else {
      this.$message.warning("请选择要删除的任务！");
    }
  }
  structure() {
    if (this.getTrueOrFalseByKeys(this.row)) {
      this.visible = false;
    } else {
      this.$message.warning("请选择要构建的任务！");
    }
  }
  publish() {
    if (this.getTrueOrFalseByKeys(this.row)) {
      this.visible = false;
    } else {
      this.$message.warning("请选择要发布的任务！");
    }
  }
  stop() {
    if (this.getTrueOrFalseByKeys(this.row)) {
      this.visible = false;
    } else {
      this.$message.warning("请选择要停止的任务！");
    }
  }
  note() {}
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
    window.addEventListener("resize", () => {
      console.log(11, this);
      (this.$refs["tableData"] as any).doLayout();
    });
    this._initData();
  }

  @Watch("visible")
  onVisibleChange(value: boolean) {
    if (value) {
      this.$nextTick(() => {
        (this.$refs["edForm"] as any).clearValidate();
      });
    }
  }
}
</script>
