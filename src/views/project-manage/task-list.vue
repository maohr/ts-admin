<template>
  <task-page></task-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import taskPage from './components/task-page.vue'

@Component({
  name: 'task-list',
  components: {
    taskPage
  }
})
export default class TaskList extends Vue {

}
</script>
