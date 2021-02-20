/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import { act, render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import pretty from 'pretty';
import Button from './Button';

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

describe('Button', () => {
  it('should render a button with a button name', () => {
    const tree = renderer
      .create(<Button btnName='AC' />)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});
