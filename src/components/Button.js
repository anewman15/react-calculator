/*
 eslint-disable no-unused-vars, import/no-cycle
*/

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { HandleClickContext } from './App';

const Button = props => {
  const { btnName } = props;
  const handleClick = useContext(HandleClickContext);
  return (
    <button onClick={() => handleClick(btnName)}>
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;