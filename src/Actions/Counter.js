export const CounterActionTypes = {
  ADD: 'ADD',
  ADD_VALUE: 'ADD_VALUE',
  SUBSTRACT: 'SUBSTRACT',
  MULTIPLY_TWO: 'MULTIPLY_TWO' 
}

const Add = () => ({ type: CounterActionTypes.ADD })
const AddValue = value => ({ type: CounterActionTypes.ADD_VALUE, value })
const Substract = () => ({ type: CounterActionTypes.SUBSTRACT })
const MultiplyTwo = () => ({ type: CounterActionTypes.MULTIPLY_TWO })

export default {
  Add,
  AddValue,
  Substract,
  MultiplyTwo
}