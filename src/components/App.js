/*
 eslint-disable no-unused-vars, import/named
*/

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../styles/App.css';

const App = props => {
  const handleClick = (btnName) => {
    const calcData = {
      display: this.state.display,
      total: this.state.total,
      next: this.state.next,
      operation: this.state.operation,
      operated: this.state.operated,
    };

    const calcValue = calculate(calcData, btnName);

    this.setState({
      display: calcValue.display,
      total: calcValue.total,
      next: calcValue.next,
      operation: calcValue.operation,
      operated: calcValue.operated,
    });
  }

  const { total, next, operation } = this.state;
  return (
    <div>
      <Display value={this.state.display || this.props.value} />
      <ButtonPanel clickHandler={this.handleClick} />
    </div>
  );
};

export default App;
