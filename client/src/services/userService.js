import axios from 'axios'

export default class UserService {
  static getUser() {
    return axios.get('/api/user')
  }

  static login(user) {
    return axios.post('/api/login', user)
  }

  static useToken(token) {
    axios.interceptors.request.use(
      function (config) {
        config.headers.Authorization = `Bearer ${token}`
        return config
      },
      function (error) {
        return Promise.reject(error)
      }
    )
  }
}
