/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import { act, render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import pretty from 'pretty';
import ButtonPanel from './Button';

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

describe('ButtonPanel', () => {
  it('should render groups of buttons', () => {
    act(() => {
      render(<ButtonPanel />, container);

      expect(pretty(container.innerHTML))
        .toMatchSnapshot();
    });
  });
});
