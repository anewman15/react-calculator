/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import Button from './Button';

const ButtonPanel = props => (
  <div>
    <div>
      <Button btnName="AC" />
      <Button btnName="+/-" />
      <Button btnName="%" />
      <Button btnName="/" />
    </div>
    <div>
      <Button btnName="7" />
      <Button btnName="8" />
      <Button btnName="9" />
      <Button btnName="X" />
    </div>
    <div>
      <Button btnName="4" />
      <Button btnName="5" />
      <Button btnName="6" />
      <Button btnName="-" />
    </div>
    <div>
      <Button btnName="1" />
      <Button btnName="2" />
      <Button btnName="3" />
      <Button btnName="+" />
    </div>
    <div>
      <Button btnName="0" />
      <Button btnName="." />
      <Button btnName="=" />
    </div>
  </div>
);

export default ButtonPanel;