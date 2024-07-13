## 简介

ruoyi-h5-vue3 项目使用了`Vue3.4`、`Vite5`、`Vant4`、`Pinia`等主流技术开发，后端代理了ruoyi(若依)的接口，写好了登录/个人信息(修改)/修改密码/通知公告 页面，另外页面均可以 `<keep-alive>`，包含 `NavBar`、`TabBar` 的 Layout，集成了 `Axios`、`uCharts`，封装了SvgIcon组件、支持gzip压缩。

项目使用了Eslint作为代码规范检查工具，保证多人协作开发时代码的一致性。

## 引入工具库

- [@vueuse/core](https://vueuse.org/) - Vue.js 生态系统工具库，提供了可重用的组件和函数，帮助开发者更轻松地构建复杂的应用程序
- [dayjs](https://dayjs.fenxianglu.cn/) - 一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间
- [lodash-es](https://www.lodashjs.com/) - 一个一致性、模块化、高性能的 JavaScript 实用工具库

## Vite插件

unplugin-auto-import/vite - 无需书写引入ref等api、vant4组件库(自动按需)

unplugin-vue-components/vite - 自动导入全局组件 vant4组件库(自动按需)

vite-plugin-vconsole - 移动端调试工具

vite-plugin-vue-devtools - 项目内置的Vue Devtools，方便开发调试

postcss-px-to-viewport-8-plugin - 移动端适配插件，px自动转换为vw

vite-plugin-style-vw-loader - 解决无法转换行内样式的问题

## **搭建环境**

- Node.js `16.18.1` 
- pnpm `8.15.5` 

## VS Code 插件

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 开发必备
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - `.env` 文件 高亮
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 不同 IDE 维护一致的编码样式

## 运行

```bash
# 安装依赖
pnpm i

# 启动服务
pnpm dev

# 访问地址 http://localhost:80
```

## 发布

```bash
# 构建生产环境
pnpm build
```

