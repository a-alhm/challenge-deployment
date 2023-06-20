import productService from '@/services/productService'

const state = {}

const getters = {}

const mutations = {}

const actions = {
  async getProducts({ commit }) {
    commit('incrementLoadings')

    const response = await productService.getProducts()
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
