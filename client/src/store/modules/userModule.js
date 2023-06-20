import userService from '@/services/userService'

const state = {
  user: null,
}

const getters = {
  getUser({ user }) {
    return user
  },
  isLoggedIn({ user }) {
    return user !== null
  },
}

const mutations = {
  setUser(state, value) {
    state.user = value
  },
}

const actions = {
  setToken(_, value) {
    localStorage.setItem('token', value)
  },
  getToken() {
    return localStorage.getItem('token')
  },
  async login({ commit, dispatch }, user) {
    commit('incrementLoadings')

    const response = await userService.login(user)
    if (!response) return commit('decrementLoadings')

    await dispatch('setToken', response.data.token)
    commit('decrementLoadings')
  },
  async getUser({ commit, dispatch }) {
    commit('incrementLoadings')

    let token = await dispatch('getToken')
    if (!token) return commit('decrementLoadings')

    userService.useToken(token)

    const response = await userService.getUser()
    if (!response) return commit('decrementLoadings')

    commit('setUser', response.data.user)
    commit('decrementLoadings')
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
