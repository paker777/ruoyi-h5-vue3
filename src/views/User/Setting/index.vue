<script setup>
import useUserStore from '@/store/modules/user.js'
const router = useRouter()
const user = useUserStore()
const handleLogout = () => {
  showConfirmDialog({ title: '提示', message: '确定注销并退出系统吗?' }).then(() => {
    user.logOut().then(() => {
      router.push('/login')
    })
  })
}
</script>

<template>
  <div class="app-container">
    <NavBar />
    <van-cell icon="edit" title="修改密码" is-link to="/user/pwd" />
    <van-cell icon="warning-o" title="关于我们" is-link to="/user/about" />
    <div class="log-out" @click="handleLogout">退出登录</div>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  margin-top: 20px;
  .log-out{
    margin-top: 40px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color: #fff;
    border-bottom: 1px solid $border-color;
    &:active {
      background-color: #f2f3f5;
    }
  }
}
</style>
