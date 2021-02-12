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
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const calcData = {
      total: this.state.total,
      next: this.state.next,
      operation: this.state.operation,
    };

    const calcValue = calculate(calcData, btnName);

    this.setState({
      total: calcValue.total,
      next: calcValue.next,
      operation: calcValue.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <Display calcResult={this.state.total || this.props.calcResult} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
