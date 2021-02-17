/*
 eslint-disable no-unused-vars, import/no-cycle
*/

import React from 'react';
import Button from './Button';

const ButtonPanel = props => {
  const btnGroups = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const keyButtons = btnGroups.map(group => (
    <div className='btn-panel'>
      <div className='btn-group' key={group.toString()}>
        {group.map(name => (
          <Button key={name.toString()} btnName={name}/>
        ))}
      </div>
    </div>
  ));

  return (
    <div>
      {keyButtons}
    </div>
  );
};

export default ButtonPanel;