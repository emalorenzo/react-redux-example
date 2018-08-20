import React, { Component } from 'react';
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
        <Red />
      </div>
    );
  }
}

export default Cyan;
