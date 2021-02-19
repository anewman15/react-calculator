/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import { act, render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import pretty from 'pretty';
import Home from './Home';

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

describe('Home', () => {
  it('should render a Home page with information', () => {
    act(() => {
      render(<Home />, container);

      expect(pretty(container.innerHTML))
        .toMatchSnapshot();
    });
  });
});
