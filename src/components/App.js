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
    setData({
      ...data,
      display: calcValue.display,
      total: calcValue.total,
      next: calcValue.next,
      operation: calcValue.operation,
      operated: calcValue.operated,
    });
  };

  return (
    <div>
      <Display value={data.display || props.value} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
