<template>
  <div>
    <i v-if="icon" :class="icon" style="margin-right: 10px;"/>
    <span v-if="title" slot="title">{{title}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {
  @Prop({ default: '' }) icon!: string;
  @Prop({ default: '' }) title!: string;
}
</script>
