<script setup>
defineOptions({
  name: 'Work'
})
import { getNotice } from '@/api/notice/index'
const noticeTop = ref({})
const getList = () => {
  getNotice().then(res => {
    noticeTop.value = res?.rows[0]
  })
}
const noticeTitle = computed(() => {
  return noticeTop.value?.noticeTitle
})
getList()
</script>

<template>
  <div class="tabbar-container">
    <div class="notice" @click="noticeTop.noticeId && $router.push('/notice/' + noticeTop.noticeId)">
      <div class="title">{{ noticeTitle || '员工手册' }}</div>
      <div class="btn">
        <span @click.stop="$router.push('/notice')">全部公告<van-icon name="arrow" /></span>
      </div>
    </div>
    <div class="grid-body">
      <div class="title">我的应用</div>
      <van-grid column-num="4" :border="false" :clickable="true">
        <van-grid-item>
          <svg-icon name="考勤打卡" size="92px" />
          <div class="text">考勤打卡</div>
        </van-grid-item>
        <van-grid-item>
          <svg-icon name="请假申请" size="92px" />
          <div class="text">请假申请</div>
        </van-grid-item>
        <van-grid-item>
          <svg-icon name="工资详情" size="92px" />
          <div class="text">工资详情</div>
        </van-grid-item>
        <van-grid-item>
          <svg-icon name="通知公告" size="92px" />
          <div class="text">通知公告</div>
        </van-grid-item>
        <van-grid-item>
          <svg-icon name="加班" size="92px" />
          <div class="text">加班</div>
        </van-grid-item>
        <van-grid-item>
          <svg-icon name="工作日志" size="92px" />
          <div class="text">工作日志</div>
        </van-grid-item>
        <van-grid-item>
          <svg-icon name="票据报销" size="92px" />
          <div class="text">票据报销</div>
        </van-grid-item>
        <van-grid-item>
          <svg-icon name="采购" size="92px" />
          <div class="text">采购</div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabbar-container {
  padding: 20px;
  .notice {
    // margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 20px 40px;
    height: 220px;
    background-image:linear-gradient(30deg,#1989FA 50%, #005bea 100%);
    border-radius: 16px;
    .title {
      flex: 1;
      line-height: 200px;
      font-size: 40px;
      font-weight: bold;
      color: #fff;
      overflow: hidden; /* 确保超出容器的文本被裁剪 */
      white-space: nowrap; /* 确保文本在一行内显示 */
      text-overflow: ellipsis; /* 使用省略号表示文本超出 */
    }
    .btn {
      display: flex;
      align-items: flex-end;
      span {
        padding: 6px 10px;
        font-size: 24px;
        color: #fff;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
      }
    }
  }
  .grid-body {
    margin-top: 20px;
    padding: 30px 0 0;
    background-color: #fff;
    border-radius: 16px;
    overflow: hidden;
    .title {
      font-size: 30px;
      padding-left: 44px;
      padding-bottom: 20px;
    }
    .text {
      text-align: center;
      font-size: 24px;
      margin-top: 8px;
    }
  }
}
</style>
