export const ProductTypes = {
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_LOADING: 'FETCH_PRODUCTS_LOADING',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
}

const fetchProducts = () => ({ type: ProductTypes.FETCH_PRODUCTS })
const fetchProductsLoading = () => ({ type: ProductTypes.FETCH_PRODUCTS_LOADING })
const fetchProductsSuccess = products => ({ type: ProductTypes.FETCH_PRODUCTS_SUCCESS, products })

export default {
  fetchProducts,
  fetchProductsLoading,
  fetchProductsSuccess
}
