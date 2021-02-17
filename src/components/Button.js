/*
 eslint-disable no-unused-vars, import/no-cycle
*/

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { HandleClickContext } from './App';
import btnBgColor from '../logic/style';

const Button = props => {
  const { btnName } = props;
  const handleClick = useContext(HandleClickContext);
  const zeroBtnWidth = {
    width: '50%',
  };
  return (
    <button className={`btn ${btnBgColor(btnName)}`} style={btnName === '0' ? zeroBtnWidth : null} onClick={() => handleClick(btnName)}>
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;