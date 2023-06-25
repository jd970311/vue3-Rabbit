<script setup>
import LayoutNav from './components/layoutnav.vue'
import LayoutHeader from './components/layouthead.vue'
import LayoutFooter from './components/layoutfooter.vue'
const layoutFix = defineAsyncComponent(() => import('./components/layoutfix.vue'))
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <layoutFix></layoutFix>
  <RouterView />
  <LayoutFooter />
</template>
<style scoped lang="scss"></style>
