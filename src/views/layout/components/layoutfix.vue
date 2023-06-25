<script setup>
const isShow = ref(null)
window.addEventListener('scroll', () => {
  if (window.scrollY > 140) {
    isShow.value.style.display = 'flex'
  } else {
    isShow.value.style.display = 'none'
  }
})
</script>

<template>
  <div class="header" ref="isShow">
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
    <div>|</div>
    <ul class="navbar">
      <li>品牌</li>
      <li>专题</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0px;
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
