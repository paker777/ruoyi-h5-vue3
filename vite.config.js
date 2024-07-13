import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

import vitePlugins from './vite/index'

import postcsspxtoviewport from 'postcss-px-to-viewport-8-plugin'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_BASE_API } = env
  return {
    plugins: vitePlugins(env),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`
        }
      },
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: 'px', // 要转化的单位
            // viewportWidth: 750, // UI设计稿的宽度
            viewportWidth: file => file.indexOf('van') > 0 ? 375 : 750, // 处理vant组件库的宽度问题
            unitPrecision: 5, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: [], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [], // 设置忽略文件，用正则做目录名匹配
            landscape: false // 是否处理横屏情况
          })
        ]
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // vite 相关配置
    server: {
      port: 80,
      host: true,
      open: true,
      proxy: {
        // https://cn.vitejs.dev/config/#server-proxy
        '/dev-api': {
          target: VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: p => p.replace(/^\/dev-api/, '')
        }
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          // 生产环境时移除console
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
})
