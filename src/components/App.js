/*
 eslint-disable no-unused-vars, import/named
*/

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: null,
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const calcData = {
      display: this.state.display,
      total: this.state.total,
      next: this.state.next,
      operation: this.state.operation,
    };

    const calcValue = calculate(calcData, btnName);

    this.setState({
      display: calcValue.display,
      total: calcValue.total,
      next: calcValue.next,
      operation: calcValue.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <Display value={this.state.display || this.props.value} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
