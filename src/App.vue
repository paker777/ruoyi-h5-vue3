<script setup>

import useCachedViewStore from '@/store/modules/cachedView'
const { cachedViewList } = storeToRefs(useCachedViewStore())
</script>

<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive :include="cachedViewList">
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>
