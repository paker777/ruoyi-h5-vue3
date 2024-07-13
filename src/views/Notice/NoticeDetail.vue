<script setup>
defineOptions({
  name: 'NoticeDetail'
})
import './quill.snow.scss'
import useUserStore from '@/store/modules/user'
const { userInfo } = storeToRefs(useUserStore())
import { detail } from '@/api/notice/index'
const route = useRoute()
const { proxy } = getCurrentInstance()
const { sys_notice_type } = proxy.useDict('sys_notice_type')
const info = ref({})
const getInfo = () => {
  detail(route.params.id).then(res => {
    info.value = res.data
  })
}

getInfo()
</script>

<template>
  <div class="app-container">
    <NavBar />
    <div v-if="info.noticeTitle" class="detail">
      <div class="title">{{ info.noticeTitle }}</div>
      <div class="sub">
        {{ info.createBy }}  &nbsp;|&nbsp;  <span class="type">#{{ selectDictLabel(sys_notice_type, info.noticeType) }}#</span>
        <div class="time">{{ info.createTime }}</div>
      </div>
      <div class="ql-container">
        <div class="content ql-editor" v-html="info.noticeContent" />
      </div>

      <van-divider />

      <div>附件：</div>
      <div class="pdf-list">
        <div class="pdf">
          <svg-icon name="pdf" size="50px" />
          <div class="fileInfo">
            <div class="fileName">企业员工手册.pdf</div>
            <div class="fileSize">971.87KB</div>
          </div>
        </div>
      </div>
    </div>

    <van-watermark
      :content="userInfo.nickName"
      :full-page="false"
      opacity="0.3"
    />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  .detail {
    padding: 30px;
    background-color: #fff;
    .title {
      font-size: 40px;
      font-weight: bold;
    }
    .sub {
      position: relative;
      z-index: 999;
      padding: 20px 0;
      line-height: 1.5;
      font-size: 28px;
      color: $sub-color;
      opacity: .8;
      .type {
        color: $theme-color;
      }
      .time {
        font-size: 24px;
        opacity: .6;
      }
    }
    .content {
      line-height: 1.5;
    }
    .pdf-list {
      .pdf {
        display: flex;
        align-items: center;
        margin-top: 20px;
        .fileInfo {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: 20px;
          .fileName {
            font-size: 26px;
          }
          .fileSize {
            font-size: 20px;
            color: $sub-color;
            opacity: .6;
          }
        }
      }
    }
  }
}
</style>
