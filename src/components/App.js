/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../styles/App.css';

export const HandleClickContext = React.createContext();

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
    <div className="app">
      <HandleClickContext.Provider value={handleClick}>
        <Display value={data.display || props.value} />
        <ButtonPanel />
      </HandleClickContext.Provider>
    </div>
  );
};

export default App;
