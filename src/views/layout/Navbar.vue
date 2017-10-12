<template>
  <ul class="el-menu navbar el-menu--horizontal">
    <li>navbar</li>
    <li>navbar</li>
    <li>navbar</li>
    <li>navbar</li>
    |
    <li>
      <div class="header-menu">
          <span>用户名:{{userName}}</span>
          <a @click="loginOut">登出</a>
      </div>
    </li>
  </ul>
</template>

<script>
  import {fetch, save} from '@/utils/local'
  export default {
    data () {
      return {
        userName: ''
      }
    },
    created () {
      let info = fetch('userName')
      this.userName = info
    },
    methods: {
      loginOut () {
        save('username', '')
        this.$router.push('/login')
      }
    }
  }
</script>
<style>

</style>
