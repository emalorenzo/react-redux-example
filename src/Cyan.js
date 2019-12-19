import React, { Component } from 'react';
import { connect } from 'react-redux';
import Red from './Red'

class Cyan extends Component {
  render() {
    return (
      <div style={{
        width: '80%',
        height: '50%',
        margin: '0 auto',
        backgroundColor: 'cyan',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2>{this.props.total}</h2>
        <Red />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  total: state.counter.total
})

export default connect(mapStateToProps)(Cyan);
