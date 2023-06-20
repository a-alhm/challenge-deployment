import axios from 'axios'

export default class CartService {
  static getCart() {
    return axios.get('/api/cart')
  }
  static getCartCount() {
    return axios.get('/api/cart/count')
  }
  static addToCart(product) {
    return axios.post(`/api/cart/item/${product.id}`, product)
  }
  static updateCart(product) {
    return axios.put(`/api/cart/item/${product.id}`, product)
  }
  static deleteFromCart(productId) {
    return axios.delete(`/api/cart/item/${productId}`)
  }
}
