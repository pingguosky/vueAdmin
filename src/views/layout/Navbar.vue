<template>
  <el-menu class="navbar" mode="horizontal">
    <!-- 展开折叠 -->
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <!-- 面包屑 -->
    <levelbar></levelbar>

    <!--<div class="avatar-container">
      <ul class="el-menu navbar el-menu&#45;&#45;horizontal">
        <li></li>
        |
        <li>
          <div class="header-menu">
            <span>用户名:{{userName}}</span>
            <a @click="loginOut">登出</a>
          </div>
        </li>
      </ul>
    </div>-->
  </el-menu>

</template>

<script>
  import { mapGetters } from 'vuex'
  import {fetch, save} from '@/utils/local'
  import Hamburger from './Hamburger'
  import Levelbar from './Levelbar'
  export default {
    components: {
      Hamburger,
      Levelbar
    },
    data () {
      return {
        userName: ''
      }
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    created () {
      let info = fetch('userName')
      this.userName = info
    },
    methods: {
      toggleSideBar () {
        this.$store.dispatch('ToggleSideBar')
      },
      loginOut () {
        save('username', '')
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .errLog-container {
    display: inline-block;
    position: absolute;
    right: 150px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 35px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
</style>
