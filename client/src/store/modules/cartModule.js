import cartService from '@/services/cartService'

const state = {
  cartCount: 0,
}

const getters = {
  getCartCount({ cartCount }) {
    return cartCount
  },
}

const mutations = {
  setCartCount(state, value) {
    state.cartCount = value
  },
}

const actions = {
  async getCart({ commit }) {
    commit('incrementLoadings')

    const response = await cartService.getCart()
    if (!response) return commit('decrementLoadings')

    commit('decrementLoadings')
    return response.data
  },
  async getCartCount({ commit }) {
    commit('incrementLoadings')

    const response = await cartService.getCartCount()
    if (!response) return commit('decrementLoadings')

    commit('setCartCount', response.data)
    commit('decrementLoadings')
  },
  async addToCart({ commit }, product) {
    commit('incrementLoadings')

    const response = await cartService.addToCart(product)
    if (!response) return commit('decrementLoadings')

    commit('decrementLoadings')
    return response.data
  },
  async updateCart({ commit }, product) {
    commit('incrementLoadings')

    const response = await cartService.updateCart(product)
    if (!response) return commit('decrementLoadings')

    commit('decrementLoadings')
    return response.data
  },
  async deleteFromCart({ commit }, productId) {
    commit('incrementLoadings')

    const response = await cartService.deleteFromCart(productId)
    if (!response) return commit('decrementLoadings')

    commit('decrementLoadings')
    return response.data
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
