/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import PropTypes from 'prop-types';

const Display = props => (
  <div>{props.calcResult}</div>
);

Display.propTypes = {
  calcResult: PropTypes.string.isRequired,
};

export default Display;