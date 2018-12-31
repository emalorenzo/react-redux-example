import { take, fork, call, put } from 'redux-saga/effects'
import Actions, { ProductTypes } from './actions'
import Api from './api'

/* --------------------- Watchers ------------------ */

const watchFetchProducts = function * () {
  while (true) {
    yield take(ProductTypes.FETCH_PRODUCTS)
    yield fork(fetchProducts)
  }
}

export default { watchFetchProducts }

/* --------------------- Subroutines --------------- */

function * fetchProducts () {
  try {
    yield put(Actions.fetchProductsLoading())
    const response = yield call(Api.fetchProducts)

    if (response.status === 200) {
      yield put(Actions.fetchProductsSuccess(response.data))
    } else {
      // yield put(Actions.reviewLokalError(''))
      console.log('fetchProducts fail: ', response)
    }
  } catch (err) {
    console.log('error - fetchProducts: ', err)
    // yield put(Actions.reviewLokalError(''))
  }
}
