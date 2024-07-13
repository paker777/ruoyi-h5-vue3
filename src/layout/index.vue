<script setup>
import { RouterView } from 'vue-router'
import { layoutRoutes } from '@/router/index'
const active = ref('')
// 解决生产环境访问图片报错
const getAssetUrl = name => {
  return new URL(`/src/assets/tabbar/${name}.png`, import.meta.url).href
}

</script>

<template>
  <div class="layout-container">
    <NavBar :left-arrow="false" />
    <RouterView />
    <van-tabbar
      v-model="active"
      :route="true"
      :placeholder="true"
      :safe-area-inset-bottom="true"
    >
      <van-tabbar-item
        v-for="item in layoutRoutes"
        :key="item.name"
        :name="item.name"
        :to="item.path"
      >
        <span>{{ item.meta.title }}</span>
        <template #icon="props">
          <img :src="getAssetUrl(props.active ? `${item.name}_` : item.name)" class="icon">
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  height: 100%;
}
.tabbar-container {
  padding-bottom: 20px;
}
.icon{
  width: 50px;
  height: 50px;
}
</style>
