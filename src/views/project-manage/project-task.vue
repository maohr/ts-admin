<template>
  <task-page :model="'project'"></task-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import taskPage from './components/task-page.vue'

@Component({
  name: 'project-task',
  components: {
    taskPage
  }
})
export default class ProjectTask extends Vue {
  mounted () {
    if(!!this.$route.query.project) {

    }else {
      this.$router.replace({
        path: '/404'
      })
    }
  }
}
</script>
