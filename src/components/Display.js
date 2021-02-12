/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import PropTypes from 'prop-types';

const Display = props => (
  <div>{props.value}</div>
);

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;