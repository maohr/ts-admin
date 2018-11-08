<template>
  <el-container>
    <div class="text-md-center">
      <h1>404</h1>
      <h2 class="headline ">Sorry, page not found</h2>
      <div>
        <el-button type="primary" @click="goHome">Go Home</el-button>
      </div>  
    </div>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'notFound'
})
export default class NotFound extends Vue {
  goHome() {
    this.$router.replace({ path: '/' });
  }
}
</script>


<style lang="scss">
.text-md-center {
  width: 100%;
  text-align: center;
  h1 {
    font-size: 150px;
    line-height: 150px;
    font-weight: 700;
    color: #252932;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;    
  }
}
</style>