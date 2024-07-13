import request from '@/utils/request'
// 查询公告列表
export function getNotice(params) {
  return request({
    url: '/system/notice/list',
    method: 'get',
    params
  })
}

// 查询公告详情
export function detail(id) {
  return request({
    url: '/system/notice/' + id,
    method: 'get'
  })
}
