<template>
  <ul class="el-menu sidebar-container el-menu--dark">
      <router-link class="el-submenu__title" :to="{path:'/usermana/index'}" tag="li">用户管理</router-link>
      <router-link class="el-submenu__title" :to="{path:'/admana/index'}" tag="li">广告配置管理</router-link>
      <router-link class="el-submenu__title" :to="{path:'/testmana/index'}" tag="li">测试机管理</router-link>
  </ul>
</template>

<script>
//  import SidebarItem from './SidebarItem'
//  export default {
//    component: {
//      SidebarItem
//    }
//  }
</script>
<style>

</style>
