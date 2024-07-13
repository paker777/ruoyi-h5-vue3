<script setup>
import { getUserProfile } from '@/api/system/user'

const userInfo = ref({})

const getUserInfo = async() => {
  const res = await getUserProfile()
  userInfo.value = res.data
}

getUserInfo()
</script>

<template>
  <div class="app-container">
    <NavBar />
    <van-cell icon="contact-o" title="用户名" :value="userInfo.userName" />
    <van-cell icon="chat-o" title="昵称" :value="userInfo.nickName" />
    <van-cell icon="phone-o" title="手机号" :value="userInfo.phonenumber" />
    <van-cell icon="envelop-o" title="邮箱" :value="userInfo.email" />
    <van-cell icon="list-switch" title="部门" :value="userInfo?.dept?.deptName" />
  </div>
</template>
