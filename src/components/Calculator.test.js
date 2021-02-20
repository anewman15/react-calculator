/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import { act, render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import pretty from 'pretty';
import Calculator from './Calculator';

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

describe('Calculator', () => {
  it('should render a display and button panel', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
