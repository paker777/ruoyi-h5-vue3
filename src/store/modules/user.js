import { login, logout, getInfo } from '@/api/login'
import profile from '@/assets/profile.jpg'

const useUserStore = defineStore(
  'user',
  {
    state: () => ({
      token: '',
      userInfo: {},
      avatar: '',
      roles: [],
      permissions: []
    }),
    persist: {
      paths: ['token']
    },
    actions: {
      // 登录
      login(userInfo) {
        const data = {
          username: userInfo.username.trim(),
          password: userInfo.password,
          code: userInfo.code,
          uuid: userInfo.uuid
        }
        return new Promise((resolve, reject) => {
          login(data).then(res => {
            this.token = res.token
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      },
      // 获取用户信息
      getInfo() {
        return new Promise((resolve, reject) => {
          getInfo().then(res => {
            const user = res.user
            const avatar = user.avatar ? import.meta.env.VITE_APP_BASE_API + user.avatar : profile
            if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
              this.roles = res.roles
              this.permissions = res.permissions
            } else {
              this.roles = ['ROLE_DEFAULT']
            }
            this.userInfo = user
            this.avatar = avatar
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      // 退出系统
      logOut() {
        return new Promise((resolve, reject) => {
          logout(this.token).then(() => {
            this.token = ''
            this.roles = []
            this.permissions = []
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      }
    }
  })

// 这行代码是用于支持热模块替换（HMR）的。在Pinia中，它允许接受热更新并应用到使用了useUserStore的地方。
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
export default useUserStore
