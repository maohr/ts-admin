<template>
  <div class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link
        v-for="tag in Array.from(visitedViews)"
        ref="tag"
        :class="isActive(tag)?'active':''"
        :to="tag"
        :key="tag.path"
        class="tags-view-item"
        @contextmenu.prevent.native="openMenu(tag,$event)">
        {{tag.title}}
        <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" v-if="tag.name !== 'dashboard'" />
      </router-link>
    </scroll-pane>
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags">关闭所有</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

import ScrollPane from "@/components/ScrollPane/index.vue";
import { Route } from "vue-router";
import { TagsViewModule } from "../../../store/modules/tagsView";
import { ElBreadcrumbItem } from "element-ui/types/breadcrumb-item";

@Component({
  components: {
    ScrollPane
  }
})
export default class TagsView extends Vue {
  visible = false;
  top = 0;
  left = 0;
  selectedTag = {};

  get visitedViews() {
    return TagsViewModule.visitedViews;
  }
  mounted() {
    this.addViewTags();
  }

  @Watch("$route")
  routeChange() {
    this.addViewTags();
    this.moveToCurrentTag();
  }
  @Watch("visible")
  handlerVisible(value: boolean) {
    if (value) {
      document.body.addEventListener("click", this.closeMenu);
    } else {
      document.body.removeEventListener("click", this.closeMenu);
    }
  }
  generateRoute() {
    if (this.$route.name) {
      return this.$route;
    }
    return false;
  }

  isActive(route: Route) {
    return route.path === this.$route.path;
  }

  addViewTags() {
    const route = this.generateRoute();
    if (!route) {
      return false;
    }
    this.$store.dispatch("addVisitedViews", route);
  }

  moveToCurrentTag() {
    setTimeout(() => {
      const tags = this.$refs.tag as ElBreadcrumbItem[];
      for (const tag of tags) {
        const route = tag.to as Route;
        if (route.path === this.$route.path) {
          const scrollPane = this.$refs.scrollPane as ScrollPane;
          scrollPane.moveToTarget(tag.$el);
          break;
        }
      }
    }, 200);
  }

  closeSelectedTag(view: Route) {
    this.$store.dispatch("delVisitedViews", view).then(() => {
      if (this.isActive(view)) {
        const views = this.$store.state.tagsView.visitedViews;
        const latestView = views.slice(-1)[0];
        if (latestView) {
          this.$router.push(latestView);
        } else {
          this.$router.push("/");
        }
      }
    });
  }

  closeOthersTags() {
    this.$router.push(this.selectedTag);
    this.$store.dispatch("delOthersViews", this.selectedTag).then(() => {
      this.moveToCurrentTag();
    });
  }

  closeAllTags() {
    this.$store.dispatch("delAllViews");
    this.$router.push("/");
  }

  openMenu(tag: Route, e: MouseEvent) {
    this.visible = true;
    this.selectedTag = tag;
    const offsetLeft = this.$el.getBoundingClientRect().left;
    this.left = e.clientX;
    this.top = e.clientY;
    console.log(this.left, this.top, e.clientX, 'left', 'top')
  }

  closeMenu() {
    this.visible = false;
  }
}
</script>