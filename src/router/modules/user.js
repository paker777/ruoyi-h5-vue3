export default [
  {
    path: '/user/setting',
    name: 'Setting',
    component: () => import('@/views/User/Setting/index.vue'),
    meta: {
      title: '设置'
    }
  },
  {
    path: '/user/info',
    name: 'Info',
    component: () => import('@/views/User/Info/index.vue'),
    meta: {
      title: '个人信息'
    }
  },
  {
    path: '/user/info/edit',
    name: 'InfoEdit',
    component: () => import('@/views/User/Info/Edit.vue'),
    meta: {
      title: '编辑资料'
    }
  },
  {
    path: '/user/pwd',
    name: 'Pwd',
    component: () => import('@/views/User/Pwd/index.vue'),
    meta: {
      title: '修改密码'
    }
  },
  {
    path: '/user/about',
    name: 'About',
    component: () => import('@/views/User/About/index.vue'),
    meta: {
      title: '关于我们'
    }
  }
]
