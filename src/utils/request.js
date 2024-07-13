import axios from 'axios'
import errorCode from '@/utils/errorCode'
import { tansParams } from '@/utils/index'
import { useSessionStorage } from '@vueuse/core'
import useUserStore from '@/store/modules/user'
import router from '@/router/index'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时
  timeout: 10000
})

// request拦截器
service.interceptors.request.use(config => {
  const userStore = useUserStore()
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  // 是否需要防止数据重复提交
  const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
  if (userStore.token && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + userStore.token // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?' + tansParams(config.params)
    url = url.slice(0, -1)
    config.params = {}
    config.url = url
  }
  if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
    const requestObj = {
      url: config.url,
      data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
      time: new Date().getTime()
    }
    const requestSize = Object.keys(JSON.stringify(requestObj)).length // 请求数据大小
    const limitSize = 5 * 1024 * 1024 // 限制存放数据5M
    if (requestSize >= limitSize) {
      console.warn(`[${config.url}]: ` + '请求数据大小超出允许的5M限制，无法进行防重复提交验证。')
      return config
    }
    const sessionObj = useSessionStorage('sessionObj', {})
    if (!sessionObj.value) {
      sessionObj.value = requestObj
    } else {
      const s_url = sessionObj.value.url // 请求地址
      const s_data = sessionObj.value.data // 请求数据
      const s_time = sessionObj.value.time // 请求时间
      const interval = 1000 // 间隔时间(ms)，小于此时间视为重复提交
      if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
        const message = '数据正在处理，请勿重复提交'
        console.warn(`[${s_url}]: ` + message)
        return Promise.reject(new Error(message))
      } else {
        sessionObj.value = requestObj
      }
    }
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  const user = useUserStore()
  // 未设置状态码则默认成功状态
  const code = res.data.code || 200
  // 获取错误信息
  const msg = errorCode[code] || res.data.msg || errorCode['default']
  // 二进制数据则直接返回
  if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
    return res.data
  }
  if (code === 401) {
    user.logOut().then(() => {
      showToast('登录已过期，请重新登录')
      setTimeout(() => {
        router.push('/login')
      }, 500)
    })
    return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
  } else if (code === 500) {
    showToast(msg)
    return Promise.reject(new Error(msg))
  } else if (code === 601) {
    showToast(msg)
    return Promise.reject(new Error(msg))
  } else if (code !== 200) {
    showNotify(msg)
    return Promise.reject('error')
  } else {
    return Promise.resolve(res.data)
  }
},
error => {
  console.log('err' + error)
  let { message } = error
  if (message === 'Network Error') {
    message = '后端接口连接异常'
  } else if (message.includes('timeout')) {
    message = '系统接口请求超时'
  } else if (message.includes('Request failed with status code')) {
    message = '系统接口' + message.substr(message.length - 3) + '异常'
  }
  showToast({ message, duration: 5 * 1000 })
  return Promise.reject(error)
}
)

export default service
