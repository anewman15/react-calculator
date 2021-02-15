/*
 eslint-disable no-unused-vars, import/named
*/

import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../styles/App.css';

const App = props => {
  const [data, setData] = useState(
    {
      display: null,
      total: null,
      next: null,
      operation: null,
      operated: false,
    },
  );

  const handleClick = btnName => {
    const calcValue = calculate(data, btnName);
    this.setState({
      ...data,
      display: calcValue.display,
      total: calcValue.total,
      next: calcValue.next,
      operation: calcValue.operation,
      operated: calcValue.operated,
    });
  };

  const { total, next, operation } = this.state;
  return (
    <div>
      <Display value={this.state.display || this.props.value} />
      <ButtonPanel clickHandler={this.handleClick} />
    </div>
  );
};

export default App;
