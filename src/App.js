import React, { Component } from 'react';
import Cyan from './Cyan'
import { connect } from 'react-redux';
import CounterActions from './Actions/Counter'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { value: 0 }
  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.addValue(parseInt(this.state.value))
  }
  render() {
    return (
      <div style={{
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          <button onClick={() => this.props.add()}>Sumar +1</button>
          <button onClick={() => this.props.substract()}>Restar -1</button>
          <form onSubmit={event => this.handleSubmit(event)}>
            <input
              type="number"
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
            <input type="submit" value="Sumar" />
          </form>
        </div>
      
        <Cyan />
      </div>
    );
  }
}

const mapDispachToProps = dispatch => ({
  add: () => dispatch(CounterActions.Add()),
  addValue: value => dispatch(CounterActions.AddValue(value)),
  substract: () => dispatch(CounterActions.Substract())
})

export default connect(null, mapDispachToProps)(App);
