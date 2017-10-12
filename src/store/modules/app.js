const user = {
  state: {
    user: '',
    status: ''
  },
  mutations: {
    SET_CODE (state, code) {
      state.code = code
    },
    SET_TOKEN (state, token) {
      state.token = token
    }
  },
  actions: {
    // 用户名登录
    LoginByUsername ({commit}, userInfo) {
    },
    // 获取用户信息
    GetUserInfo ({commit, state}) {
    },
    // 登出
    LogOut ({ commit, state }) {
    }
  }
}

export default user
