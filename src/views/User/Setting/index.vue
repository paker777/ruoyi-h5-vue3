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
    <div class="log-out" @click="handleLogout">退出登录</div>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  padding-top: 20px;
  :deep(.van-cell){
    margin: 0 0 40px;
  }
  .log-out{
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
