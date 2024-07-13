<script setup>
defineOptions({
  name: 'User'
})
import { uploadAvatar } from '@/api/system/user'
import useUserStore from '@/store/modules/user'

const { userInfo, avatar } = storeToRefs(useUserStore())

const fileList = ref([
  { url: avatar.value }
])

const afterRead = file => {
  const formData = new FormData()
  formData.append('avatarfile', file.file)
  uploadAvatar(formData).then(res => {
    useUserStore().getInfo()
    showToast(res.msg)
  })
}

const onOversize = () => {
  showToast('文件大小不能超过 500kb')
}

</script>

<template>
  <div class="tabbar-container">
    <!-- <NavBar :left-arrow="false" /> -->
    <div class="userInfo">
      <van-uploader
        v-model="fileList"
        :max-size="1020 * 500"
        :preview-full-image="false"
        :deletable="false"
        :reupload="true"
        :after-read="afterRead"
        max-count="1"
        upload-icon="contact-o"
        @oversize="onOversize"
      />
      <div class="userName">
        <div class="name">
          <van-text-ellipsis :content="userInfo.nickName" />
        </div>
        <div class="nick"><van-text-ellipsis :content="`用户名：${userInfo.userName}`" /></div>
      </div>
      <div class="navigator" @click="$router.push('/user/info')">
        个人信息
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="item">
      <van-cell icon="edit" title="编辑资料" is-link to="/user/info/edit" />
      <van-cell icon="warning-o" title="关于我们" is-link to="/user/about" />
    </div>
    <div class="item">
      <van-cell icon="setting-o" title="设置" is-link to="/user/setting" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabbar-container {
  .userInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 32px;
    height: 220px;
    background-color: #fff;
    :deep() .van-uploader {
      .van-uploader__upload,
      .van-uploader__preview {
        margin: 0;
      }
      .van-image__img,
      .van-uploader__upload,
      .van-image__loading,
      .van-uploader__file {
        border-radius: 20px;
      }
      .van-image__img {
        border: 1px solid #f1f1f1;
      }
      .van-uploader__upload-icon {
        font-size: 80px;
      }
    }
    .userName {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding-left: 32px;
      height: 100%;
      .name {
        font-size: 44px;
      }
      .nick{
        font-size: 24px;
        color: $sub-color;
      }
    }
  }
  .item{
    margin-top: 20px;
  }
}
</style>
