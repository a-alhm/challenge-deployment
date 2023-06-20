import Vuex from 'vuex'
import cart from './modules/cartModule'
import user from './modules/userModule'
import product from './modules/productModule'

export default new Vuex.Store({
  state: {
    loadings: 0,
  },
  getters: {
    isLoading({ loadings }) {
      return loadings > 0
    },
  },
  mutations: {
    incrementLoadings(state) {
      state.loadings++
    },
    decrementLoadings(state) {
      state.loadings--
    },
  },
  modules: {
    cart,
    user,
    product,
  },
})
