<template>
  <div class="search-area" :class="{'is-hidden': !isDown}" style="height: 50px;">
    <slot/>
    <i class="search-arrow" :class="{'el-icon-arrow-up': isDown, 'el-icon-arrow-down': !isDown}" @click="handleArrow"></i>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'searchArea'
})
export default class SearchArea extends Vue {
  isDown = true

  handleArrow() {
    this.isDown = !this.isDown
  }
}
</script>

