/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import { act, render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import pretty from 'pretty';
import Display from './Display';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Display', () => {
  it('should render a display for the calculated value', () => {
    const tree = renderer
      .create(<Display value='0'/>)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});
