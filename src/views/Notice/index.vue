<script setup>
defineOptions({
  name: 'Notice'
})

import { getNotice } from '@/api/notice/index'
const queryParams = reactive({
  pageNum: 1,
  pageSize: 15,
  noticeTitle: ''

})
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const error = ref(false)

const onLoad = () => {
  setTimeout(async() => {
    try {
      const res = await getNotice(queryParams)
      list.value = [...list.value, ...res.rows]
      queryParams.pageNum++
      loading.value = false

      if (list.value.length >= res.total) {
        finished.value = true
      }
    } catch {
      loading.value = false
      error.value = true
    }
  }, 500)
}

const onRefresh = () => {
  if (refreshing.value) {
    list.value = []
    queryParams.pageNum = 1
    refreshing.value = false
  }
  // 清空列表数据
  finished.value = false
  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true
  onLoad()
}
const handleSearch = () => {
  refreshing.value = true
  onRefresh()
}
</script>

<template>

  <div class="app-container">
    <NavBar />
    <div class="search">
      <van-search
        v-model="queryParams.noticeTitle"
        show-action
        placeholder="请输入公告标题"
      >
        <template #action>
          <div style="color: #1989FA;" @click="handleSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <van-pull-refresh
      v-model="refreshing"
      style="min-height: calc(100% - 212px);"
      @refresh="onRefresh"
    >
      <van-list
        v-model:loading="loading"
        v-model:error="error"
        :finished="finished"
        :finished-text="list.length ? '没有更多了' : ''"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <van-cell
          v-for="item in list"
          :key="item.noticeId"
          size="large"
          clickable
          center
          is-link
          :title="item.noticeTitle"
          :label="`${item.createBy} ${$dayjs(item.createTime).format('YYYY-MM-DD')}`"
          :to="`/notice/${item.noticeId}`"
        />
      </van-list>
    </van-pull-refresh>
    <van-empty
      v-if="!list.length && !loading && !error"
      image="search"
      description="暂无数据"
    />
    <van-back-top />
  </div>
</template>

<style lang="scss" scoped>
.search {
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #fff;
  border-bottom: 1px solid $border-color;
}
</style>
