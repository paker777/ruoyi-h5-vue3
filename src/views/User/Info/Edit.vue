<script setup>
import { updateUserProfile, getUserProfile } from '@/api/system/user'
import { validEmail, validPhone } from '@/utils/validate.js'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
const router = useRouter()

const loading = ref(false)
const form = ref({
  nickName: '',
  phonenumber: '',
  email: '',
  sex: ''
})

const getUser = () => {
  getUserProfile().then(response => {
    form.value = response.data
  })
}
getUser()

const onSubmit = () => {
  loading.value = true
  updateUserProfile(form.value).then(res => {
    userStore.getInfo()
    showToast(res.msg)
    router.back()
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
        v-model="form.nickName"
        name="用户昵称"
        label="用户昵称"
        placeholder="请输入用户昵称"
        :rules="[{ required: true, message: '用户昵称不能为空' }]"
      />
      <van-field
        v-model="form.phonenumber"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[
          { required: true, message: '手机号不能为空' },
          { validator: validPhone, message: '手机号格式错误' }
        ]"
      />
      <van-field
        v-model="form.email"
        name="邮箱"
        label="邮箱"
        placeholder="请输入邮箱"
        :rules="[
          { required: true, message: '邮箱不能为空' },
          { validator: validEmail, message: '邮箱格式错误' }
        ]"
      />
      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="form.sex" direction="horizontal">
            <van-radio name="0">男</van-radio>
            <van-radio name="1">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
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
