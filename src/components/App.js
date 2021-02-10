import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    return (
      <div>
        <Display calcResult={this.state.result} />
        <ButtonPanel numbers='123' />
      </div>
    );
  }
}