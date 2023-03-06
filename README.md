### Vue 3 + Vite2 Chrome Extension Template

> a chrome extension tools built with Vite2 + Vue3, and Manifest v3

### 项目搭建参考：[crxjs](https://crxjs.dev/vite-plugin/getting-started/vue/create-project)

### 注意事项：
1.项目清单文件manifest.js修改无法实现热更新，需要重新执行**cnpm run build**

2.popup、background、content-script已实现**热更新**

3.静态资源文件无需编译，请放至 public 文件夹下，例如插件语言包 _locales

4.插件版本号修改，请编辑package.json中的version

### 相关项目地址：
1.https://github.com/guocaoyi/create-chrome-ext


