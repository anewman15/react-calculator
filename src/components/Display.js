/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import PropTypes from 'prop-types';

const Display = props => (
  <div className='display-container'>
    <p className='display-text'>
      {props.value}
    </p>
  </div>
);

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;