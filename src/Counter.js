import React, { Component } from 'react';
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div style={{
        width: '80%',
        height: '50%',
        margin: 'auto auto',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1>{this.props.total}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  total: state.counter.total
}) 

export default connect(mapStateToProps, null)(Counter);
