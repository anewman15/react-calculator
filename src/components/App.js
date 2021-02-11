/*
 eslint-disable no-unused-vars, import/named
*/

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { calculate } from '../logic/calculate';
import '../styles/App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Display calcResult={this.props.result} />
        <ButtonPanel />
      </div>
    );
  }
}

App.defaultProps = {
  result: '0',
};