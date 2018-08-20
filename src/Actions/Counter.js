export const CounterActionTypes = {
  ADD: 'ADD',
  ADD_VALUE: 'ADD_VALUE',
  SUBSTRACT: 'SUBSTRACT'
}

const Add = () => ({ type: CounterActionTypes.ADD })
const AddValue = value => ({ type: CounterActionTypes.ADD_VALUE, value })
const Substract = () => ({ type: CounterActionTypes.SUBSTRACT })

export default {
  Add,
  AddValue,
  Substract
}