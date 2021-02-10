/*
 eslint-disable no-unused-vars
*/

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';

const App = props => (
  <div>
    <Display calcResult={this.state.result} />
    <ButtonPanel />
  </div>
);

export default App;