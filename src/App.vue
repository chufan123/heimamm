<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
    <!-- 路由出口 -->
    <router-link to="/">跳转</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
  },
}
</script>
<style>
</style>