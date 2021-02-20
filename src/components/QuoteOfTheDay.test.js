/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import { act, render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
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
    const tree = renderer
      .create(<QuoteOfTheDay />)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});
