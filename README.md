### 1 技术栈
vue-cli + vue2.x + vue-router + vuex + es6 + axios + webpack

### 2 es6/es7
项目涉及大量es6，es7 async await之后更新也会引入

### 3 vue-cli构建（可忽略）
安装vue-cli：npm install -g vue-cli（npm有时候部分模块下载不了，npm install -g vue-cli --registry=https://registry.npm.taobao.org）

检测安装成功：vue -V

创建文件夹test_admin( 项目名称 )并安装webpack模板：vue init webpack test_admin

相关配置可按需求配置

    Install vue-router?    Yes

    Use EsLint to lint your code?(Y/n)    Yes

    Setup unit tests with Karma + Mocha?  要不要做测试  No

    Setup e2e tests with Nightwatch? No

安装第三方依赖：进入test_admin目录，命令：npm install

启动应用：npm run dev（可在pageage.json里配置）

### 4 vuex
* 每次修改状态都要通过vuex的Mutations提交，Mutations方法名官方建议大写
* vuex状态管理暂时按功能划分，也可全局设置
* 注：通过mutations可以清晰的看到状态是怎么变的，可预测

### 5 目录结构
```
├── build                       // webpack配置相关
├── config                      // 配置、项目打包路径
├── src                         // 源代码
│   ├── api                     // 所有接口请求
│   ├── assects                 // 图片、字体等静态资源
│   ├── components              // 全局共用组件
│   ├── directive               // 全局指令
│   ├── filter                  // 全局过滤
│   ├── store                   // vuex的状态管理
│   │   ├── getters.js          // 配置getters（vuex的计算属性）
│   │   ├── index.js            // vuex模块入口
│   ├── utils                   // 全局共用方法
│   │   ├── fetch.js            // 获取数据
│   ├── style
│   │   ├── index.scss          // 全局样式入口（引入sidebar、mixin、btn）
│   │   ├──  mixin.scss         // 样式配置
├── node_modules                // 项目依赖的node模块
├── static                      // 第三方打包资源
├── .bablelrc                   // babel-loader配置（可将es6转为es5）
├── .editorconfig               // 编辑器使用配置
├── .eslintignore               // 代码检查设置忽略文件（不作风格检查）
├── .eslintrc.js                // eslint配置项
├── .gitignore                  // git忽略项
├── .postcssrc.js               // 预先设置css规则
├── index.html                  // 入口html文件
├── package.json                // 项目描述和配置
```

### 6 代码相关

### 7 配置相关
#### 7.1 配置项webpack.base.conf.js - alias代码指向
当引用文件的时候为了简化引用，需要使用alias
```
resolve: {
  alias: {
    '@': resolve('src')
  }
}
// 使用
import sideBar from '@/components/sideBar'
```

### 8 说明
1. axios —— 基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 Node.js 中使用。这里在utils中封装fetch.js（这个js暂时没写，后期完善。 引用axios模块），
模拟数据可以在Easy Mock http://easy-mock.com/login 生成（此网站无跨域问题，直接请求即可）

2. 项目生成时安装了eslint检查，如果不需要，可在.eslintrc.js中注释 ~~extends: 'standard'~~

2. 模块划分（webpack懒加载）应该在总路由完成（暂时没写上去），这样打包压缩会把资源按模块分类

### 9 资料参考
vue chrome插件（非常好用，可时间穿梭，查看vuex变化，可通过component查看结构等）：vue.js devtools

基于vue2.0的组件库：http://element.eleme.io/#/zh-CN

饿了么：https://github.com/bailicangdu/vue2-elm

github Vue大集合：https://github.com/opendigg/awesome-github-vue#UI%E7%BB%84%E4%BB%B6

vue组件库：http://element.eleme.io/#/zh-CN



