<template>
  <el-breadcrumb class="app-levelbar" separator="/">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <!-- 有子目录 -->
      <router-link v-if='item.redirect==="noredirect" || index == levelList.length-1' to="" class="no-redirect">{{item.name}}</router-link>
      <!-- 最底层目录 -->
      <router-link v-else :to="item.redirect || item.path">{{item.name}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
    export default {
      created () {
        this.getBreadcrumb()
      },
      data () {
        return {
          levelList: null
        }
      },
      methods: {
        getBreadcrumb () {
          // 筛选当前选中的路由
          let matched = this.$route.matched.filter(item => item.name)
          const first = matched[0]    // 主菜单
          // 判断非Home目录
          if (first && (first.name !== 'Home' || first.path !== '')) {
            matched = [{ name: 'Home', path: '/' }].concat(matched)
          }
          this.levelList = matched
        }
      },
      watch: {
        $route () {
          this.getBreadcrumb()
        }
      }
    }
</script>
<style lang="scss" scoped>
  .app-levelbar.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
