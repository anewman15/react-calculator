/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const handleClick = btnName => props.clickHandler(btnName);

  return (
    <button onClick={handleClick}>
      {props.btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;