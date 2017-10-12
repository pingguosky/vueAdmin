<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import '~normalize.css/normalize.css';// normalize.css 样式格式化(需安装scss-loader和normalize.css模块)
  @import './style/index.scss'; // 全局自定义的css样式
</style>
