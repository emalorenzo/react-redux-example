import request from '../../apiClient'

export default {
  fetchProducts () {
    return request('products', 'GET')
  }
}
