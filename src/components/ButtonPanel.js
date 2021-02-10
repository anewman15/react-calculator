/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import Button from './Button';

const ButtonPanel = props => {
  const btnNames = ['AC', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const keyButtons = btnNames.map(name => (
    <div key={name.toString()}>
      <Button btnName={name} />
    </div>
  ));

  return (
    <div>
      {keyButtons}
    </div>
  );
};

export default ButtonPanel;