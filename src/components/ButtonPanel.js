import React from 'react';

export default class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        Calculator Buttons {this.props.numbers}
      </div>
    );
  }
}