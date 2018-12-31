import { all, fork } from 'redux-saga/effects'

import ProductSagas from './screens/Products/sagas'

export default function * rootSaga () {
  yield all([
    fork(ProductSagas.watchFetchProducts)
  ])
}
