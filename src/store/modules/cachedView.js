const useCachedViewStore = defineStore('cached-view', () => {
  // 缓存页面 keepAlive
  const cachedViewList = ref([])

  const addCachedView = view => {
    // 不重复添加
    if (cachedViewList.value.includes(view.name)) return
    if (view?.meta?.keepAlive) {
      cachedViewList.value.push(view.name)
    }
  }

  return {
    cachedViewList,
    addCachedView
  }
})

export default useCachedViewStore
