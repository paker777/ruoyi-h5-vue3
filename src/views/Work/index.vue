<script setup>
defineOptions({
  name: 'Work'
})
</script>

<template>
  <div class="tabbar-container">
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
  .grid-body {
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
