/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import { act, render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import pretty from 'pretty';
import QuoteOfTheDay from './QuoteOfTheDay';

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

describe('QuoteOfTheDay', () => {
  it('should render a page with a quote', () => {
    act(() => {
      render(<QuoteOfTheDay />, container);

      expect(pretty(container.innerHTML))
        .toMatchSnapshot();
    });
  });
});
