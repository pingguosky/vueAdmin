<template>
  <!-- :default-active是element-ui提供让选中菜单高亮 -->
  <el-menu mode="vertical" theme="dark" :default-active="$route.path">
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
</template>

<script>
  import SidebarItem from './SidebarItem'
  export default {
    components: {
      SidebarItem
    },
    computed: {
      routes () {
        return this.$router.options.routes    // 路由列表
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu {
    min-height: 100%;
  }
</style>

