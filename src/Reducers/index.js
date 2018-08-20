import { combineReducers } from 'redux';
import counterReducer from './Counter';

const rootReducers = combineReducers({
  counter: counterReducer
});

export default rootReducers;