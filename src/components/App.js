import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';

function App() {
  return (
    <React.Fragment>
      <Display value='0' />
      <ButtonPanel numbers='123' />
    </React.Fragment>
  );
}

export default App;
