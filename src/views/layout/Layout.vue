<template>
  <el-container style="height: 100%;">
    <el-aside :width="sidebar.opened?'180px':'36px'">
      <sidebar/>
    </el-aside>
    <el-container>
      <el-header height="50px">
        <navbar/>  
      </el-header>
      <tags-view/>
      <el-main>
        <app-main/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import {Navbar, AppMain, Sidebar, TagsView} from './components';
  import ResizeMixin from './mixin/ResizeHandler';
  import {Component, Vue} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import {DeviceType, AppModule} from '@/store/modules/app';

  @Component({
    components: {
      Navbar,
      Sidebar,
      AppMain,
      TagsView,
    },
  })
  export default class Layout extends mixins(ResizeMixin) {
    get classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === DeviceType.Mobile,
      };
    }

    handleClickOutside() {
      AppModule.CloseSideBar(false);
    }
  }
</script>
