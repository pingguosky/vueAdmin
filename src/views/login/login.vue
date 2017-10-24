<template>
  <div class="login">
    <div class="login-box">
      <h3>登录</h3>
      <form @submit.prevent='sendLogin' autocomplete="off">
        <div><input placeholder="请输入用户名" type="text" name="user" ref="userInput" /></div>
        <div><input placeholder="请输入密码" type="password" name="password" /></div>
        <div class="login-btn"><input type="submit" value="登录" /></div>
      </form>
      <div>用户名和密码随意输入</div>
    </div>
  </div>
</template>

<script>
  import {save} from '@/utils/local'
  import {login} from '@/api/login'
  export default {
    name: 'login',
    data () {
      return {}
    },
    methods: {
      sendLogin () {
        // 登录
        // 有ajax可以替换localstrong
        let userName = this.$refs.userInput.value
        if (userName) {
          save('userName', userName)
          this.$router.push({
            path: '/usermana/index'
          })
        }
      }
    },
    created () {
      login('aa', 'bb').then(response => {
        console.log(response.data, 'login success')
      })
    }
  }
</script>
<style>

</style>
