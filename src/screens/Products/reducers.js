import { ProductTypes } from './actions'

const initialState = {
  loading: false,
  list: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ProductTypes.FETCH_PRODUCTS_LOADING:
      return {
        loading: true,
        list: []
      }
    case ProductTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        list: action.products
      }
    default:
      return state
  }
}