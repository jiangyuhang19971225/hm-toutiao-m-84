import Vue from 'vue'
import Vuex from 'vuex'

import * as auth from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息（token refresh_token）
    user: auth.getUser()
  },
  mutations: {
    // 存储用户信息
    setUser (state, user) {
      // 更新state的状态
      state.user = user
      // 更新本地存储
      auth.setUser(user)
    },
    // 清除用户信息
    delUser (state) {
      // 更新state的状态   清除vuex的信息
      state.user = {}
      // 更新本地存储     清除本地的信息
      auth.delUser()
    }
  },
  actions: {

  }
})
