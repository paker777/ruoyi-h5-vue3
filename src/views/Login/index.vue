<script setup>
import { getCodeImg } from '@/api/login'
import { encrypt, decrypt } from '@/utils/jsencrypt'
import useUserStore from '@/store/modules/user'
import { useLocalStorage } from '@vueuse/core'

const router = useRouter()
const userStore = useUserStore()

const loginForm = ref({
  username: '',
  password: '',
  rememberMe: false,
  code: '',
  uuid: ''
})
const captchaEnabled = ref(false)
const codeUrl = ref('')
const loading = ref(false)
const showPassword = ref(false)
const rememberPwd = useLocalStorage('rememberPwd', {})

const onFailed = ({ errors }) => {
  showToast(errors[0].message)
}
const handleLogin = () => {
  showToast({ message: '登录中...', type: 'loading', duration: 0 })
  loading.value = true
  if (loginForm.value.rememberMe) {
    rememberPwd.value = {
      username: loginForm.value.username,
      password: encrypt(loginForm.value.password),
      rememberMe: loginForm.value.rememberMe
    }
  } else {
    rememberPwd.value = {}
  }
  // 调用action的登录方法
  userStore.login(loginForm.value).then(() => {
    userStore.getInfo().then(() => {
      showToast('登录成功')
      router.push('/work')
    })
  }).catch(() => {
    getCode()
    loading.value = false
  })
}
// 获取图形验证码
const getCode = () => {
  getCodeImg().then(res => {
    captchaEnabled.value = res.captchaEnabled === undefined ? true : res.captchaEnabled
    if (captchaEnabled.value) {
      codeUrl.value = 'data:image/gif;base64,' + res.img
      loginForm.value.uuid = res.uuid
    }
  })
}
const getLocal = () => {
  const { username, password, rememberMe } = rememberPwd.value
  loginForm.value = {
    username: username || loginForm.value.username,
    password: decrypt(password) || loginForm.value.password,
    rememberMe: Boolean(rememberMe) || loginForm.value.rememberMe
  }
}

getCode()
getLocal()
</script>

<template>
  <div class="login">
    <div class="title">
      <!-- 中山大学教师端 -->
    </div>
    <div class="login-form">
      <div class="form-title">欢迎使用oa办公系统</div>
      <div class="sub-title">登录后继续</div>
      <van-form :show-error-message="false" @submit="handleLogin" @failed="onFailed">
        <van-field
          v-model.trim="loginForm.username"
          name="账号"
          label="账号"
          placeholder="请输入账号"
          label-align="top"
          size="large"
          maxlength="16"
          clearable
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          v-model.trim="loginForm.password"
          :type="showPassword ? 'text' : 'password'"
          name="密码"
          label="密码"
          :right-icon="showPassword ? 'eye-o' : 'closed-eye'"
          placeholder="请输入密码"
          label-align="top"
          size="large"
          maxlength="16"
          clearable
          :rules="[{ required: true, message: '请填写密码' }]"
          @click-right-icon="showPassword = !showPassword"
        />
        <div v-if="captchaEnabled" class="login_code">
          <van-field
            v-model="loginForm.code"
            type="number"
            name="验证码"
            label="验证码"
            label-align="top"
            placeholder="请输入验证码"
            maxlength="10"
            size="large"
            clearable
            :rules="[{ required: true, message: '请填写验证码' }]"
          />
          <van-image width="300px" height="96px" :src="codeUrl" @click="getCode" />
        </div>
        <div class="rememberMe">
          <van-switch v-model="loginForm.rememberMe" size="28px" />
          <span @click="loginForm.rememberMe = !loginForm.rememberMe">记住密码</span>
        </div>
        <van-button
          block
          native-type="submit"
          type="primary"
          style="height: 100px;font-size: 28px;margin: 40px 0;"
          :disabled="loading"
        >{{ loading ? '登录中...' : '登录' }}</van-button>
      </van-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  height: 100%;
  background-color: #fff;
  .title {
    height: 400px;
    // line-height: 400px;
    // text-align: center;
    // color: #fff;
    // font-size: 52px;
    // font-weight: bold;
    background-image:url('@/assets/login_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 -50px;
  }
  .login-form {
    position: relative;
    top: -62px;
    padding: 0 62px;
    background-color: #fff;
    border-radius: 62px 62px 0 0;
    .form-title {
      padding-top: 50px;
      font-size: 44px;
    }
    .sub-title {
      padding: 12px 0 10px 0;
      color: $sub-color;
      font-size: 28px;
    }
  }
  :deep(.van-field) {
    padding: 28px 0 0;
    .van-field__label {
      color: $sub-color;
    }
    .van-field__body {
      padding: 0 30px;
      height: 96px;
      border: 3px solid $border-color;
      border-radius: 8px;
      .van-field__control {
        color: $sub-color;
        font-size: 28px;
        letter-spacing: 1px;
      }
    }
  }
  :deep().login_code {
    display: flex;
    align-items: flex-end;
    .van-field__body {
      border-radius: 8px 0 0 8px;
    }
    .van-image {
      overflow: hidden;
      img {
        transform: scale(1.1);
      }
    }
  }
  .rememberMe {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: $sub-color;
    span {
      padding-left: 10px;
      font-size: 28px;
    }
  }
}
</style>
