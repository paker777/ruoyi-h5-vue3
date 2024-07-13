<script setup>
import logo from '@/assets/logo.svg'
</script>

<template>
  <div class="app-container">
    <NavBar />
    <div class="header-section">
      <van-image
        width="150px"
        height="150px"
        :src="logo"
        mode="widthFix"
      />
      <div class="title">oa办公系统</div>
    </div>
    <van-cell title="版本信息" value="1.0.0" />
    <van-cell title="服务热线" value="10000" />
    <van-cell title="公司官网" value="http://www.ruoyi.vip" url="http://www.ruoyi.vip" />
    <div class="copyright">
      <div>Copyright &copy; 2018 - {{ $dayjs().format('YYYY') }} ruoyi.vip</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-section {
  display: flex;
  padding: 30px 0 0;
  flex-direction: column;
  align-items: center;
  .title {
    padding: 20px 0 40px;
    font-size: 32px;
    font-weight: bold;
  }
}

.copyright {
  margin-top: 40px;
  text-align: center;
  font-size: 28px;
  color: $sub-color;
}
</style>
