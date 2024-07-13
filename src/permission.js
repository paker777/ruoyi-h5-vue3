import router from '@/router/index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import useUserStore from '@/store/modules/user'
import useCachedViewStore from '@/store/modules/cachedView'
NProgress.configure({ showSpinner: false })

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  NProgress.start()
  const userStore = useUserStore()
  const url = to.path
  // 路由缓存
  const cachedViewStore = useCachedViewStore()
  cachedViewStore.addCachedView(to)
  // 已登录,去登录页
  if (userStore.token) {
    if (url === '/login') {
      next('/')
    } else {
    // 确认用户数据是否存在, 如果不存在, 则获取数据
      if (!userStore.userInfo.userName) {
        userStore.getInfo().catch(err => {
          userStore.logOut().then(() => {
            showToast(err)
            next('/')
          })
        })
        next()
        return
      }
      next()
    }
  } else {
    if (whiteList.includes(url)) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
