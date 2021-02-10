import React from 'react';

export default class Display extends React.Component {
  render() {
    return (
      <div>{this.props.calcResult}</div>
    );
  }
}