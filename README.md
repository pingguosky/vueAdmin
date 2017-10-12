## 技术栈
vue2.x + vue-router + vues + es6 + axios + webpack

## 结构搭建（可忽略）
安装vue-cli：npm install -g vue-cli（npm有时候部分模块下载不了，用cnpm淘宝镜像效果更佳）

检测安装成功：vue -V

创建文件夹test_admin( 项目名称 )并安装webpack模板：vue init webpack test_admin

相关配置可按需求配置

    Install vue-router?    Yes
    
    Use EsLint to lint your code?(Y/n)    Yes
    
    Setup unit tests with Karma + Mocha?  要不要做测试  No
    
    Setup e2e tests with Nightwatch? No
    
安装第三方依赖：进入test_admin目录，命令：npm install

启动应用：npm run dev（可在pageage.json里配置）

## 目录结构
```
├── build                       // webpack配置相关
├── config                    // 配置、项目打包路径
├── src                         // 源代码
│   ├── api    // 所有接口请求
│   ├── assects    // 图片、字体等静态资源
│   ├── components    // 全局共用组件
│   ├── directive    // 全局指令
│   ├── filter    // 全局过滤
│   ├── store       // vuex的状态管理 
│   │   ├── getters.js  // 配置getters（vuex的计算属性） 
│   │   ├── index.js    // vuex模块入口   
│   ├── utils             // 全局共用方法
│   │   ├── fetch.js    // 获取数据    
│   ├── style            
│   │   ├── index.scss    // 全局样式入口（引入sidebar、mixin、btn）
│   │   ├──  mixin.scss    // 样式配置         
├── node_modules      // 项目依赖的node模块  
├── static                    // 第三方打包资源
├── .bablelrc              // babel-loader配置（可将es6转为es5）
├── .editorconfig       // 编辑器使用配置 
├── .eslintignore        // 代码检查设置忽略文件（不作风格检查）
├── .eslintrc.js            // eslint配置项
├── .gitignore             // git忽略项
├── .postcssrc.js        // 预先设置css规则
├── index.html            // 入口html文件
├── package.json       // 项目描述和配置


