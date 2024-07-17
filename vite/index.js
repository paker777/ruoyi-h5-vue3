import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vitePluginStyleVwLoader from 'vite-plugin-style-vw-loader'
import viteCompression from 'vite-plugin-compression'
import { viteVConsole } from 'vite-plugin-vconsole'
import { VantResolver } from '@vant/auto-import-resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default function createVitePlugins(env) {
  const { VITE_APP_ENV, VITE_BUILD_COMPRESS } = env
  return [
    vitePluginStyleVwLoader({ viewportWidth: 750 }), // 该插件需要放在vue()之前
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
      failOnError: false
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      // eslintrc: {
      //   enabled: true // 生成自动导入api的声明文件，更新时打开
      // },
      // dts: 'auto-imports.d.ts', // 生成自动导入组件的声明文件，更新时打开
      resolvers: [VantResolver()]
    }),
    Components({
      dirs: ['src/components'], // 自动导入全局组件
      dts: 'components.d.ts', // 生成自动导入组件的声明文件
      resolvers: [VantResolver()] // 自动按需导入vant组件
    }),
    createSvgIconsPlugin({
      // 指定目录(svg存放目录）
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      // 使用 svg 图标的格式（name为图片名称）
      symbolId: 'icon-[name]',
      // 生成组件插入位置 只有两个值 boby-last | body-first
      inject: 'body-last'
    }),
    viteCompression({
      verbose: true, // 默认即可
      disable: !VITE_BUILD_COMPRESS, // 是否禁用压缩
      deleteOriginFile: false, // 删除源文件
      algorithm: VITE_BUILD_COMPRESS, // 压缩算法
      ext: VITE_BUILD_COMPRESS === 'gzip' ? '.gz' : '.br', // 文件类型
      threshold: 1024 // 对大于 1kb 的文件进行压缩
    }),
    // VConsole 调试工具配置
    viteVConsole({
      entry: path.resolve('src/main.js'), // 入口文件，或者可以使用这个配置: [path.resolve('src/main.js')]
      localEnabled: VITE_APP_ENV === 'development', // 本地是否启用
      enabled: VITE_APP_ENV === 'development', // 是否启用
      config: {
        maxLogNumber: 1000,
        theme: 'light' // 主题颜色 'dark'|'light'
      }
    }),
    vueDevTools()
  ]
}
