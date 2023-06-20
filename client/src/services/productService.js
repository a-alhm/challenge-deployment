import axios from 'axios'

export default class ProductService {
  static getProducts() {
    return axios.get('/api/products')
  }
}
