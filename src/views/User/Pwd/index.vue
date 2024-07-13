<script setup>
import { updateUserPwd } from '@/api/system/user'
import useUserStore from '@/store/modules/user'
const user = useUserStore()
const router = useRouter()

const loading = ref(false)
const form = reactive({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const onSubmit = () => {
  const data = {
    oldPassword: form.oldPassword,
    newPassword: form.newPassword
  }
  loading.value = true
  updateUserPwd(data).then(() => {
    user.logOut().then(() => {
      router.push('/login')
      showToast('密码修改成功，请重新登录')
    })
  }).finally(() => {
    loading.value = false
  })
}
</script>

<template>
  <div class="app-container">
    <NavBar />
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.oldPassword"
        type="password"
        name="原密码"
        label="原密码"
        placeholder="请输入原密码"
        :rules="[{ required: true, message: '原密码不能为空' }]"
      />
      <van-field
        v-model="form.newPassword"
        type="password"
        name="新密码"
        label="新密码"
        placeholder="请输入新密码"
        :rules="[
          { required: true, message: '新密码不能为空' },
          { pattern: /^\w{6,20}$/, message:'新密码长度在 6 到 20 个字符' }
        ]"
      />
      <van-field
        v-model="form.confirmPassword"
        type="password"
        name="确认新密码"
        label="确认新密码"
        placeholder="请确认新密码"
        :rules="[
          { required: true, message: '确认新密码不能为空' },
          {
            validator: (value, rule) => {
              return form.newPassword === value
            },
            message: '两次输入的密码不一致',
            trigger: ['blur', 'change']
          }
        ]"
      />
      <div style="margin: 32px;">
        <van-button
          block
          type="primary"
          native-type="submit"
          :disabled="loading"
          :loading="loading"
          loading-text="修改中..."
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
