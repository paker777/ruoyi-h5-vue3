import request from '@/utils/request'

// 登录方法
export function login(data) {
  return request({
    url: '/login',
    headers: {
      isToken: false,
      repeatSubmit: false
    },
    method: 'post',
    data
  })
}

// 注册方法
export function register(data) {
  return request({
    url: '/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}

// 查询公告列表
export function getPage(params) {
  return request({
    url: '/system/notice/list', //  /monitor/operlog/list  /system/notice/list
    method: 'get',
    params
  })
}

// 查询公告详情
export function notice(id) {
  return request({
    url: '/system/notice/' + id,
    method: 'get'
  })
}
