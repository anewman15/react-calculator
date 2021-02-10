/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button>
    {props.btnName}
  </button>
);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;