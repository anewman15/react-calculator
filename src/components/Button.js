/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { btnName, clickHandler } = props;
  return (
    <button onClick={() => clickHandler(btnName)}>
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;