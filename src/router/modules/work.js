export default [
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('@/views/Notice/index.vue'),
    meta: {
      title: '公告',
      keepAlive: true
    }
  },
  {
    path: '/notice/:id',
    name: 'NoticeDetail',
    component: () => import('@/views/Notice/NoticeDetail.vue'),
    meta: {
      title: '公告'
    }
  }
]
