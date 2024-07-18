import '@/styles/index.scss'
import { createApp } from 'vue'
import store from '@/store'
import App from './App.vue'
import router from './router'
import directive from './directive' // directive
import './permission'
// svg图标
import 'virtual:svg-icons-register'
import dayjs from 'dayjs'
import { useDict } from '@/utils/dict'
import { selectDictLabel } from '@/utils/index'

const app = createApp(App)

// 全局方法挂载
app.config.globalProperties.useDict = useDict
app.config.globalProperties.selectDictLabel = selectDictLabel
app.config.globalProperties.$dayjs = dayjs

app.use(store)
app.use(router)
directive(app)

app.mount('#app')
