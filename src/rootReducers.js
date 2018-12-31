import { combineReducers } from 'redux'
import counterReducer from './screens/Counter/reducers'
import productsReducer from './screens/Products/reducers'

const rootReducers = combineReducers({
  counter: counterReducer,
  products: productsReducer
})

export default rootReducers
