/*
 eslint-disable no-unused-vars, import/named, import/no-cycle
*/

import React from 'react';
import renderer from 'react-test-renderer';
import { unmountComponentAtNode } from 'react-dom';
import Routes from './Routes';

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

describe('Routes', () => {
  it('should render a navigation bar and routes of the site', () => {
    const tree = renderer
      .create(<Routes />)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});