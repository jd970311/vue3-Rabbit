<script setup></script>

<template>
  <div class="nav">
    <span>请先登录</span>
    <span>|</span>
    <span>帮助中心</span>
    <span>|</span>
    <span>关于我们</span>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 40px;
  background-color: black;
  color: #ffffff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    margin: 10px;
    &:hover {
      cursor: pointer;
      color: aqua;
    }
  }
  span:last-child {
    margin-right: 60px;
  }
}
</style>
