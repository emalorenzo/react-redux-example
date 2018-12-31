import { CounterActionTypes } from './actions'

const initialState = {
  total: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CounterActionTypes.ADD:
      return { total: state.total + 1 }
    case CounterActionTypes.ADD_VALUE:
      return { total: state.total + action.value }
    case CounterActionTypes.SUBSTRACT:
      return { total: state.total - 1 }
    default:
      return state;
  }
}