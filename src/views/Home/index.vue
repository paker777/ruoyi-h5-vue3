<script setup>
defineOptions({
  name: 'Home'
})
import logo from '@/assets/logo.svg'
</script>

<template>
  <div class="tabbar-container">
    <van-image
      width="150px"
      height="150px"
      :src="logo"
      mode="widthFix"
    />
    <h1 style="text-align: center;">ruoyi-vue3-h5</h1>
  </div>
</template>

<style scoped lang="scss">
.tabbar-container {
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
