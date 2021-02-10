/*
 eslint-disable no-unused-vars, import/named
*/

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { calculate } from '../logic/calculate';
import '../styles/App.css';

const App = props => (
  <div>
    <Display calcResult={props.result} />
    <ButtonPanel />
  </div>
);

App.defaultProps = {
  result: '0',
};

export default App;