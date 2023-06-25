<script setup>
import { Search, ShoppingTrolley } from '@element-plus/icons-vue'
let searchValue = ref('')
</script>

<template>
  <div class="header">
    <img class="imgLogo" src="../../../assets/images/logo.png" width="160" height="80" />
    <ul class="navbar">
      <li>首页</li>
      <li>居家</li>
      <li>美食</li>
      <li>服饰</li>
      <li>母婴</li>
      <li>个护</li>
      <li>严选</li>
      <li>数码</li>
      <li>运动</li>
      <li>杂项</li>
    </ul>
    <el-input v-model="searchValue" placeholder="搜索" class="w-50 m-2" :prefix-icon="Search" />
    <ShoppingTrolley style="width: 10em; height: 10em; margin-right: 8px; margin-left: 10px" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .navbar {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      width: 80px;
    }
  }
}
</style>
